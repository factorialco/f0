import { useCopilotAction } from "@copilotkit/react-core"

import { DataDownload } from "./DataDownload"
import { DataDownloadProps } from "./types"
import { registerCopilotAction } from "../../registry"

/**
 * Hook to register the data download copilot action.
 *
 * The agent triggers this frontend tool when it has query results
 * available for download. It sends the raw dataset (columns + rows)
 * along with an optional markdown preview. The component generates
 * Excel and CSV files client-side.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it.
 */
export const useDataDownloadAction = () => {
  useCopilotAction({
    name: "downloadData",
    description:
      "Display download buttons for query results. Sends the raw dataset to the frontend for client-side Excel and CSV generation, optionally with a markdown preview table.",
    parameters: [
      {
        name: "markdown",
        type: "string",
        description:
          "Optional markdown content to display above the download buttons (e.g. a table preview, description, or summary)",
        required: false,
      },
      {
        name: "filename",
        type: "string",
        description:
          "Descriptive filename (without extension) for the downloaded files, in the user's language. E.g. 'ventas_por_mes', 'team_salaries'.",
        required: false,
      },
      {
        name: "dataset",
        type: "object",
        description:
          "Raw dataset for client-side file generation. Contains column headers and row data.",
        required: true,
        attributes: [
          {
            name: "columns",
            type: "string[]",
            description: "Column headers in display order",
            required: true,
          },
          {
            name: "rows",
            type: "object[]",
            description: "Array of row objects keyed by column name",
            required: true,
          },
          {
            name: "totalCount",
            type: "number",
            description:
              "Total number of rows returned by the query (before truncation)",
            required: false,
          },
          {
            name: "previewCount",
            type: "number",
            description: "Number of rows shown in the markdown preview table",
            required: false,
          },
          {
            name: "columnLabels",
            type: "object",
            description:
              "Map of raw column names to human-readable labels in the user's language. Used for Excel/CSV headers.",
            required: false,
          },
        ],
      },
    ],
    available: "frontend",
    render: (props) => {
      const rawArgs = props.args as Partial<DataDownloadProps>
      const downloadProps: DataDownloadProps = {
        markdown: rawArgs.markdown,
        filename: rawArgs.filename,
        dataset: rawArgs.dataset ?? { columns: [], rows: [] },
      }

      return <DataDownload {...downloadProps} />
    },
  })
}

registerCopilotAction("dataDownload", useDataDownloadAction)
