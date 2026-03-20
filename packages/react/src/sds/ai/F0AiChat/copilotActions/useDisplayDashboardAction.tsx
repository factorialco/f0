import { useCopilotAction, useCopilotContext } from "@copilotkit/react-core"
import { useMemo } from "react"

import { F0ChatReportCard } from "../../F0ChatReportCard"
import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"
import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Hook to register the displayDashboard copilot action.
 *
 * The agent triggers this frontend tool after gathering data via
 * multiple `queryData` calls (each with a `datasetId`). The backend
 * `displayDashboard` tool reads stored fetchSpecs from requestContext
 * and injects them into the emitFrontendTool payload. The frontend
 * receives the config (title, items with computation specs, filter
 * definitions, fetchSpecs) and computes everything server-side via
 * POST /api/dashboard/compute.
 *
 * An inline report card is rendered in the chat. The user clicks
 * "Open" on the card to view the dashboard in the canvas panel.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it
 * via `emitFrontendTool` from the `displayDashboard` proxy tool.
 */
export const useDisplayDashboardAction = () => {
  const { openCanvas } = useAiChat()
  const { copilotApiConfig } = useCopilotContext()

  const apiConfig = useMemo(
    () => ({
      baseUrl: copilotApiConfig.chatApiEndpoint,
      headers: copilotApiConfig.headers as Record<string, string>,
    }),
    [copilotApiConfig.chatApiEndpoint, copilotApiConfig.headers]
  )

  useCopilotAction({
    name: "displayDashboard",
    description:
      "Display a data-driven report dashboard in a canvas panel. Data is computed server-side via the dashboard compute endpoint.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Dashboard title displayed in the canvas header",
        required: true,
      },
      {
        name: "items",
        type: "object[]",
        description:
          "Ordered list of dashboard items (chart, metric, or collection) with computation specs.",
        required: true,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique item identifier",
            required: true,
          },
          {
            name: "type",
            type: "string",
            description: '"chart", "metric", or "collection"',
            required: true,
          },
          {
            name: "title",
            type: "string",
            description: "Item title",
            required: true,
          },
          {
            name: "description",
            type: "string",
            description: "Optional item description",
            required: false,
          },
          {
            name: "sourceDescription",
            type: "string",
            description: "Source attribution subtitle",
            required: false,
          },
          {
            name: "colSpan",
            type: "number",
            description: "Column span (1-12)",
            required: false,
          },
          {
            name: "rowSpan",
            type: "number",
            description: "Row span (1-10)",
            required: false,
          },
          {
            name: "computation",
            type: "object",
            description:
              "Declarative computation spec (datasetId, aggregation, axes, etc.)",
            required: true,
          },
          {
            name: "chart",
            type: "object",
            description:
              "Chart visual config (type, orientation, showLegend, etc.)",
            required: false,
          },
          {
            name: "format",
            type: "object",
            description: "Metric format (number, currency, percent, custom)",
            required: false,
          },
          {
            name: "decimals",
            type: "number",
            description: "Metric decimal places",
            required: false,
          },
          {
            name: "columns",
            type: "object[]",
            description: "Collection column definitions (id, label, width)",
            required: false,
          },
        ],
      },
      {
        name: "filters",
        type: "object",
        description: "Filter definitions keyed by filter ID.",
        required: false,
      },
      {
        name: "fetchSpecs",
        type: "object",
        description:
          "Fetch specs for server-side data retrieval, keyed by datasetId.",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<ChatDashboardConfig>
      const toolCallId = (props as { messageId?: string }).messageId

      // Bail out while arguments are still streaming in.
      if (
        props.status === "inProgress" ||
        !args.title ||
        !args.items ||
        args.items.length === 0
      ) {
        return <></>
      }

      const config = args as ChatDashboardConfig

      return (
        <F0ChatReportCard
          config={config}
          toolCallId={toolCallId}
          onView={(c) =>
            openCanvas({
              type: "dashboard",
              title: c.title,
              config: c,
              apiConfig,
              toolCallId,
            })
          }
        />
      )
    },
  })
}
