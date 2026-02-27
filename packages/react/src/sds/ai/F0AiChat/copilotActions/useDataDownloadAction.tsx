import { useCopilotAction } from "@copilotkit/react-core"

import { F0DataDownload } from "../../F0DataDownload"
import { F0DataDownloadProps } from "../../F0DataDownload/types"

/**
 * Hook to register the data download copilot action.
 *
 * The agent triggers this frontend tool when it has prepared downloadable
 * files (CSV, Excel, PDF, etc.) for the user. It renders an optional
 * markdown preview followed by download buttons.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it.
 */
export const useDataDownloadAction = () => {
  useCopilotAction({
    name: "downloadData",
    description:
      "Display download buttons for prepared data exports. Use this to offer the user downloadable files in one or more formats, optionally with a markdown preview.",
    parameters: [
      {
        name: "markdown",
        type: "string",
        description:
          "Optional markdown content to display above the download buttons (e.g. a table preview, description, or summary)",
        required: false,
      },
      {
        name: "primaryAction",
        type: "object",
        description: "Primary download button configuration",
        required: true,
        attributes: [
          {
            name: "label",
            type: "string",
            description:
              'Label displayed on the button (e.g. "Download CSV", "Download Report")',
            required: true,
          },
          {
            name: "type",
            type: "string",
            description:
              'Type of action — currently only "download" is supported',
            required: true,
          },
          {
            name: "downloadUrl",
            type: "string",
            description: "URL to download the file (opens in a new tab)",
            required: true,
          },
        ],
      },
      {
        name: "secondaryActions",
        type: "object[]",
        description:
          "Additional download format options shown in a dropdown menu",
        required: false,
        attributes: [
          {
            name: "label",
            type: "string",
            description: "Label displayed in the dropdown",
            required: true,
          },
          {
            name: "type",
            type: "string",
            description:
              'Type of action — currently only "download" is supported',
            required: true,
          },
          {
            name: "downloadUrl",
            type: "string",
            description: "URL to download the file (opens in a new tab)",
            required: true,
          },
        ],
      },
    ],
    available: "frontend",
    render: (props) => {
      const rawArgs = props.args as Partial<F0DataDownloadProps>
      const downloadProps: F0DataDownloadProps = {
        markdown: rawArgs.markdown,
        primaryAction: rawArgs.primaryAction ?? {
          label: "Download",
          type: "download",
          downloadUrl: "",
        },
        secondaryActions: rawArgs.secondaryActions,
      }

      return <F0DataDownload {...downloadProps} />
    },
  })
}
