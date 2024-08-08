"use strict";
(self["webpackChunkcbioportal_extension"] = self["webpackChunkcbioportal_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _jupyterlab_docmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/docmanager */ "webpack/sharing/consume/default/@jupyterlab/docmanager");
/* harmony import */ var _jupyterlab_docmanager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_docmanager__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/filebrowser */ "webpack/sharing/consume/default/@jupyterlab/filebrowser");
/* harmony import */ var _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
/* harmony import */ var _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__);



const plugin = {
    id: 'cbioportal-jupyterlite:plugin',
    autoStart: true,
    requires: [_jupyterlab_docmanager__WEBPACK_IMPORTED_MODULE_0__.IDocumentManager, _jupyterlab_filebrowser__WEBPACK_IMPORTED_MODULE_1__.IFileBrowserFactory],
    activate: (app, contentsManager, filebrowserFactory) => {
        console.log('JupyterLab extension jupyterlab-iframe-bridge-example is activated!');
        // Extension getting activated
        window.parent.postMessage({ type: 'file-communication', message: 'JupyterLab extension jupyterlab-iframe-bridge-example is activated!' }, '*');
        // Notifications from the host
        window.addEventListener('message', async (event) => {
            if (event.data.type === 'from-host-to-iframe-for-file-execution') {
                const { folderName, notebookContent } = event.data;
                try {
                    await executeCode(folderName, notebookContent);
                }
                catch (error) {
                    console.error('File Execution Error: ', error);
                }
            }
            if (event.data.type === 'from-host-to-iframe-for-file-saving') {
                const { filename, fileContent, folderName } = event.data;
                try {
                    await saveContentToFile(filename, fileContent, folderName);
                    notifyHostFileSaved();
                }
                catch (error) {
                    console.error('File Saving Error: ', error);
                }
            }
        });
        const naviagateToFolder = async (folderPath) => {
            try {
                const browser = filebrowserFactory.tracker.currentWidget;
                await (browser === null || browser === void 0 ? void 0 : browser.model.cd(folderPath));
                const items = browser === null || browser === void 0 ? void 0 : browser.model.items();
                if (items) {
                    for (const item of items) {
                        if (item.name.startsWith("untitle") && item.type === 'file') {
                            await contentsManager.services.contents.delete(item.path);
                            break;
                        }
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        };
        // creating a directory first before saving the file.
        const ensureFolderExists = async (folderName) => {
            try {
                const checkDir = await contentsManager.services.contents.get(folderName);
                return checkDir === null || checkDir === void 0 ? void 0 : checkDir.path;
            }
            catch (error) {
                const newDir = await contentsManager.services.contents.save(folderName, {
                    name: folderName,
                    type: 'directory',
                    content: null
                });
                const textFile = await contentsManager.services.contents.get(`${newDir.path}`, {
                    type: 'text'
                });
                console.log(textFile.name);
                return newDir.path;
            }
        };
        // saving file in the directory
        const saveContentToFile = async (filename, fileContent, folderName) => {
            const folderPath = await ensureFolderExists(folderName);
            const filePath = `${folderPath}/${filename}`;
            await naviagateToFolder(folderPath);
            return contentsManager.services.contents.save(filePath, {
                name: filename,
                content: fileContent,
                writable: true,
            });
        };
        // Auto-execution of code
        const executeCode = async (folderName, notebookContent) => {
            try {
                const folderPath = await ensureFolderExists(folderName);
                // Create a new untitled notebook
                const model = await contentsManager.services.contents.newUntitled({ type: 'notebook', path: folderPath });
                const filePath = model.path;
                // Open the newly created notebook
                const widget = contentsManager.open(filePath, 'default', { name: 'python' });
                if (widget instanceof _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookPanel) {
                    await widget.sessionContext.ready;
                    await widget.revealed;
                    const notebook = widget.content;
                    if (notebook && notebook.model !== null) {
                        await new Promise(resolve => {
                            var _a;
                            if (notebook.model && notebook.model.cells.length > 0)
                                resolve();
                            else
                                (_a = notebook.model) === null || _a === void 0 ? void 0 : _a.cells.changed.connect(() => resolve(), { once: true });
                        });
                        notebook.model.fromJSON(notebookContent);
                        await _jupyterlab_notebook__WEBPACK_IMPORTED_MODULE_2__.NotebookActions.runAll(notebook, widget.context.sessionContext);
                        // await NotebookActions.runAndAdvance(notebook, widget.sessionContext);
                        notifyHostFileExecuted();
                    }
                    else {
                        throw new Error('Notebook model is undefined');
                    }
                }
                else {
                    throw new Error('Widget is not a NotebookPanel');
                }
            }
            catch (error) {
                console.error('Notebook Execution Error: ', error);
            }
        };
        // Notifications for the host
        const notifyHostFileSaved = () => {
            const message = { type: 'from-iframe-to-host-about-file-status', message: 'File saved successfully' };
            window.parent.postMessage(message, '*');
        };
        const notifyHostFileExecuted = () => {
            const message = { type: 'from-iframe-to-host-about-file-execution', message: 'File executed successfully' };
            window.parent.postMessage(message, '*');
        };
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);


/***/ })

}]);
//# sourceMappingURL=lib_index_js.6718963dfcf6a42cf5eb.js.map