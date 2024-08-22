export const createNotebookContent = ({ filename }) => ({
    nbformat: 4,
    nbformat_minor: 4,
    metadata: {},
    cells: [
        {
            id: 'code_1',
            cell_type: 'code',
            execution_count: 1,
            source: [
                '# Install necessary library\n',
                '%pip install -q seaborn\n',
                '\n',
                
                '# Import libraries\n',
                'import pandas as pd\n',
                'import matplotlib.pyplot as plt\n',
                'import seaborn as sns\n',
                '\n',
                
                '# Check if the file is empty\n',
                'try:\n',
                '    # Load the data from the CSV file\n',
                `    df = pd.read_csv("${filename}")\n`,
                '\n',
                
                '    # Proceed only if the DataFrame is not empty\n',
                '    if not df.empty:\n',
                '        # Create a pivot table for the oncoprint\n',
                '        pivot = df.pivot_table(index="hugoGeneSymbol", columns="sampleId", values="alterationType", aggfunc="first")\n',
                '\n',
                
                '        # Check if the pivot table has data\n',
                '        if not pivot.empty:\n',
                '            # Set up the figure for plotting\n',
                '            plt.figure(figsize=(20, 10))\n',
                '\n',
                
                '            # Plot the oncoprint heatmap\n',
                '            sns.heatmap(pivot.notnull(), cmap="Blues", cbar=False, linewidths=0.5, linecolor="black")\n',
                '\n',
                
                '            # Set plot title and labels\n',
                '            plt.title("Oncoprint")\n',
                '            plt.xlabel("Samples")\n',
                '            plt.ylabel("Genes")\n',
                '\n',
                
                '            # Adjust tick labels\n',
                '            plt.xticks(rotation=90)\n',
                '            plt.yticks(rotation=0)\n',
                '\n',
                
                '            # Adjust layout for better fit\n',
                '            plt.tight_layout()\n',
                '\n',
                
                '            # Display the plot\n',
                '            plt.show()\n',
                '        else:\n',
                '            print("No data available for plotting.")\n',
                '    else:\n',
                '        print("The CSV file is empty.")\n',
                'except pd.errors.EmptyDataError:\n',
                '    print("The CSV file is empty or has no columns to parse.")\n',
            ],
            metadata: {},
        },
    ],
});
