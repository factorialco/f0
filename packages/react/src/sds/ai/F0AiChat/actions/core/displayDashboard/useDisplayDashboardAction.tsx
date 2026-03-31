import { useCopilotAction, useCopilotContext } from "@copilotkit/react-core"
import { useMemo } from "react"

import type { ChatDashboardConfig } from "../../../canvas/entities/dashboard/types"
import { DashboardCard } from "../../../canvas/entities/dashboard/DashboardCard"

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
 * An inline report card is rendered in the chat. New dashboards
 * auto-open in the canvas panel. The card stays for re-opening later.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it
 * via `emitFrontendTool` from the `displayDashboard` proxy tool.
 */
export const useDisplayDashboardAction = () => {
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

      // Bail out while arguments are still streaming in.
      if (!args.title || !args.items || args.items.length === 0) {
        return <></>
      }

      const config = args as ChatDashboardConfig

      return <DashboardCard config={config} apiConfig={apiConfig} />
    },
  })
}
