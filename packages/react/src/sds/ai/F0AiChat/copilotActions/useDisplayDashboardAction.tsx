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
 * The canvas panel is NOT opened automatically — the user must click
 * "View report" on the card to open it. The only exception is when
 * the canvas is already open: a new dashboard replaces the current
 * one automatically.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it
 * via `emitFrontendTool` from the `displayDashboard` proxy tool.
 */
export const useDisplayDashboardAction = () => {
  const { openCanvas, visualizationMode, getSavedDashboardConfig } = useAiChat()
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
        name: "description",
        type: "string",
        description: "Optional dashboard description",
        required: false,
      },
      {
        name: "items",
        type: "object[]",
        description:
          "Ordered list of dashboard items. Each item has a type (chart, metric, or collection) with computation specs referencing datasets.",
        required: true,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the item",
            required: true,
          },
          {
            name: "type",
            type: "string",
            description: 'Item type: "chart", "metric", or "collection"',
            required: true,
          },
          {
            name: "title",
            type: "string",
            description: "Item title displayed in the card header",
            required: true,
          },
          {
            name: "description",
            type: "string",
            description: "Optional item description",
            required: false,
          },
          {
            name: "colSpan",
            type: "number",
            description:
              "Column span (1-12). Metrics default to 3, charts to 4 or 6, tables to 12.",
            required: false,
          },
          {
            name: "computation",
            type: "object",
            description:
              "Declarative computation spec (datasetId, aggregation, axes, etc.)",
            required: true,
          },
        ],
      },
      {
        name: "filters",
        type: "object",
        description:
          "Filter definitions keyed by filter ID. Each defines a multi-select filter on a dataset column.",
        required: false,
      },
      {
        name: "fetchSpecs",
        type: "object",
        description:
          "Fetch specifications for server-side data retrieval. Keyed by datasetId, each describes how to fetch and query data.",
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

      // Only auto-replace if the canvas is already open — otherwise
      // the user must click "View report" to open it
      if (visualizationMode === "canvas") {
        // Use saved config if available for auto-replace
        const effectiveConfig =
          (toolCallId ? getSavedDashboardConfig(toolCallId) : undefined) ??
          config
        openCanvas({
          type: "dashboard",
          title: effectiveConfig.title,
          description: effectiveConfig.description,
          config: effectiveConfig,
          apiConfig,
          toolCallId,
        })
      }

      return (
        <F0ChatReportCard
          config={config}
          toolCallId={toolCallId}
          onView={(c) =>
            openCanvas({
              type: "dashboard",
              title: c.title,
              description: c.description,
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
