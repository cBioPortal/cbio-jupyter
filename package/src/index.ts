import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { IDocumentManager } from '@jupyterlab/docmanager';
import { IFileBrowserFactory } from '@jupyterlab/filebrowser';
import { NotebookActions, NotebookModel, NotebookPanel } from '@jupyterlab/notebook';

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'cbioportal-jupyterlite:plugin',
  autoStart: true,
  requires: [IDocumentManager,IFileBrowserFactory],
  activate: (app: JupyterFrontEnd, contentsManager: IDocumentManager, filebrowserFactory: IFileBrowserFactory) => {
    console.log('JupyterLab extension jupyterlab-iframe-bridge-example is activated!');

    // Extension getting activated
    window.parent.postMessage({ type: 'file-communication', message: 'JupyterLab extension jupyterlab-iframe-bridge-example is activated!' }, '*');

    // Notifications from the host
    window.addEventListener('message', async (event) => {
      if (event.data.type === 'from-host-to-iframe-for-file-execution') {
        const { folderName, notebookContent } = event.data;
        try {
          await executeCode(folderName, notebookContent);
        } catch (error) {
          console.error('File Execution Error: ', error);
        }
      }

      if (event.data.type === 'from-host-to-iframe-for-file-saving') {
        const { filename, fileContent, folderName } = event.data;

        try {
          await saveContentToFile(filename, fileContent, folderName)
          notifyHostFileSaved()
        } catch (error) {
          console.error('File Saving Error: ', error)
        }
      }
    });

    const naviagateToFolder = async (folderPath: string) => {
      try {
        const browser = filebrowserFactory.tracker.currentWidget

        await browser?.model.cd(folderPath)

        const items = browser?.model.items()

       if(items){
        for (const item of items) {
          if(item.name.startsWith("untitle") && item.type === 'file') {
            await contentsManager.services.contents.delete(item.path)
            break;
          }
        }
       }
              } catch (error) {
        console.log(error)
      }
    }

    // creating a directory first before saving the file.
    const ensureFolderExists = async (folderName: string): Promise<string> => {
      try {
        const checkDir = await contentsManager.services.contents.get(folderName);
        return checkDir?.path
      } catch (error) {
        const newDir = await contentsManager.services.contents.save(folderName, {
          name: folderName,
          type: 'directory',
          content : null
        });

        const textFile = await contentsManager.services.contents.get(`${newDir.path}`,{
          type: 'text'
        })

        console.log(textFile.name)

        return newDir.path
      }
    };
    // saving file in the directory
    const saveContentToFile = async (filename: string, fileContent: string, folderName: string) => {
      const folderPath = await ensureFolderExists(folderName);
      const filePath = `${folderPath}/${filename}`

      await naviagateToFolder(folderPath)

      return contentsManager.services.contents.save(filePath, {
        name: filename,
        content: fileContent,
        writable: true,
      })
    }

    // Auto-execution of code
    const executeCode = async (folderName: string, notebookContent: any): Promise<void> => {
      try {

        const folderPath = await ensureFolderExists(folderName);

        // Create a new untitled notebook
        const model = await contentsManager.services.contents.newUntitled({ type: 'notebook', path: folderPath });

        const filePath = model.path;

        // Open the newly created notebook
        const widget = contentsManager.open(filePath, 'default', { name: 'python' });

        if (widget instanceof NotebookPanel) {

          await widget.sessionContext.ready
          await widget.revealed
          const notebook = widget.content;
          if (notebook && notebook.model !== null) {
            
            await new Promise<void>(resolve => {
              if(notebook.model && notebook.model.cells.length > 0) resolve();

              else notebook.model?.cells.changed.connect(() => resolve(), { once: true });

            });

            (notebook.model as NotebookModel).fromJSON(notebookContent);
            await NotebookActions.runAll(notebook, widget.context.sessionContext);

            // await NotebookActions.runAndAdvance(notebook, widget.sessionContext);

            notifyHostFileExecuted();
          } else {
            throw new Error('Notebook model is undefined');
          }
        } else {
          throw new Error('Widget is not a NotebookPanel');
        }
      } catch (error) {
        console.error('Notebook Execution Error: ', error);
      }
    };

    // Notifications for the host

    const notifyHostFileSaved = (): void => {
      const message = { type: 'from-iframe-to-host-about-file-status', message: 'File saved successfully' };
      window.parent.postMessage(message, '*');
    };

    const notifyHostFileExecuted = (): void => {
      const message = { type: 'from-iframe-to-host-about-file-execution', message: 'File executed successfully' };
      window.parent.postMessage(message, '*');
    };
  },
};

export default plugin;