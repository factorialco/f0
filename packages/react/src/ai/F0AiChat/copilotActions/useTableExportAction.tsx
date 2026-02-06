import { useCopilotAction } from "@copilotkit/react-core"

import { F0TableExport, F0TableExportProps } from "../../F0TableExport"

/**
 * Hook to register the table export action.
 * Renders markdown content with table preview and action buttons for downloading files
 * or triggering custom actions via Mastra frontend tools.
 */
export const useTableExportAction = () => {
  useCopilotAction({
    name: "tableExport",
    description:
      "Display a table preview with download options. Use this to show data tables with the ability to export in various formats.",
    parameters: [
      {
        name: "markdown",
        type: "string",
        description:
          "Markdown content containing the table preview (max 10 rows) and optional descriptive text",
        required: true,
      },
      {
        name: "primaryAction",
        type: "object",
        description: "Primary action button configuration",
        required: true,
        attributes: [
          {
            name: "label",
            type: "string",
            description: "Label displayed on the button",
            required: true,
          },
          {
            name: "icon",
            type: "string",
            description: "Icon name to display",
            required: false,
          },
          {
            name: "type",
            type: "string",
            description:
              'Type of action: "download" triggers file download, "action" triggers callback',
            required: true,
          },
          {
            name: "downloadUrl",
            type: "string",
            description:
              'URL to download the file, opens in a new tab (for type: "download")',
            required: false,
          },
          {
            name: "actionId",
            type: "string",
            description: 'Action identifier (for type: "action")',
            required: false,
          },
        ],
      },
      {
        name: "secondaryActions",
        type: "object[]",
        description: "Secondary actions for dropdown menu (optional)",
        required: false,
        attributes: [
          {
            name: "label",
            type: "string",
            description: "Label displayed on the button",
            required: true,
          },
          {
            name: "icon",
            type: "string",
            description: "Icon name to display",
            required: false,
          },
          {
            name: "type",
            type: "string",
            description:
              'Type of action: "download" triggers file download, "action" triggers callback',
            required: true,
          },
          {
            name: "downloadUrl",
            type: "string",
            description:
              'URL to download the file, opens in a new tab (for type: "download")',
            required: false,
          },
          {
            name: "actionId",
            type: "string",
            description: 'Action identifier (for type: "action")',
            required: false,
          },
        ],
      },
    ],
    available: "disabled",
    render: (props) => {
      const rawArgs = props.args as Partial<F0TableExportProps>
      const tableExportProps: F0TableExportProps = {
        markdown: rawArgs.markdown ?? "",
        primaryAction: rawArgs.primaryAction ?? {
          label: "Download",
          type: "download",
        },
        secondaryActions: rawArgs.secondaryActions,
      }

      return <F0TableExport {...tableExportProps} />
    },
  })
}
