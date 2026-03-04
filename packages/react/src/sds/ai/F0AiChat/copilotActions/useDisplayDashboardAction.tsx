import { useCopilotAction } from "@copilotkit/react-core"
import { useRef } from "react"

import { F0ChatReportCard } from "../../F0ChatReportCard"
import type { ChatDashboardConfig } from "../../F0ChatDashboard/types"
import { useAiChat } from "../providers/AiChatStateProvider"

/**
 * Hook to register the displayDashboard copilot action.
 *
 * The agent triggers this frontend tool after gathering data via
 * multiple `queryData` calls (each with a `datasetId`). The backend
 * `displayDashboard` tool reads stored datasets from requestContext
 * and injects them into the emitFrontendTool payload. The frontend
 * receives the full config (title, items with computation specs,
 * filter definitions) alongside all raw datasets, and computes
 * charts/metrics/tables client-side with reactive filtering.
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
  const { openCanvas, visualizationMode } = useAiChat()
  // Keep a ref to the latest config so re-clicking "View report"
  // re-opens the same dashboard without needing a closure per render
  const latestConfigRef = useRef<ChatDashboardConfig | null>(null)

  useCopilotAction({
    name: "displayDashboard",
    description:
      "Display a data-driven report dashboard in a canvas panel. The backend injects raw datasets; the frontend computes charts, metrics, and tables client-side with reactive filters.",
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
            description: "Column span (1, 2, or 3). Defaults to 1.",
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
        name: "datasets",
        type: "object",
        description:
          "Raw datasets injected by the backend from requestContext. Keyed by datasetId, each with columns, rows, and optional columnLabels.",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<ChatDashboardConfig>

      // Bail out while arguments are still streaming in.
      // For `available: "frontend"` actions, CopilotKit's status goes:
      //   "inProgress" → "executing" (terminal — "complete" never fires
      //   because no handler runs and no ResultMessage is created).
      // During "inProgress", args are partial JSON (datasets/filters
      // arrive after title+items). We must wait for "executing" to
      // ensure the full payload is present.

      if (
        props.status === "inProgress" ||
        !args.title ||
        !args.items ||
        args.items.length === 0
      ) {
        return <></>
      }

      const config = args as ChatDashboardConfig
      latestConfigRef.current = config

      // Only auto-replace if the canvas is already open — otherwise
      // the user must click "View report" to open it
      if (visualizationMode === "canvas") {
        openCanvas(config)
      }

      return <F0ChatReportCard config={config} onView={(c) => openCanvas(c)} />
    },
  })
}
