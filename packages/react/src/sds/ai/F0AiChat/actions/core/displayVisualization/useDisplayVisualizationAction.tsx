import { useCopilotAction, useCopilotContext } from "@copilotkit/react-core"
import { useMemo } from "react"

// DynamicCanvasContent component is rendered by the canvas panel, not here
import type { DynamicCanvasContent as DynamicCanvasContentType } from "../../../canvas/entities/dynamicCanvas/types"
import { useAiChat } from "../../../providers/AiChatStateProvider"

/**
 * Hook to register the displayVisualization copilot action.
 *
 * The agent triggers this frontend tool after gathering data via
 * `queryData` with a `datasetId`. The backend `displayVisualization`
 * tool reads stored fetchSpecs from requestContext and injects them
 * into the emitFrontendTool payload. The frontend receives the config
 * (title, renderer, spec, datasetId, fetchSpecs) and fetches raw
 * rows server-side via POST /api/visualization/compute before running
 * the layout algorithm client-side.
 *
 * An inline report card is rendered in the chat. New visualizations
 * auto-open in the canvas panel.
 *
 * Uses `available: "frontend"` so the backend agent can invoke it
 * via `emitFrontendTool` from the `displayVisualization` proxy tool.
 */
export const useDisplayVisualizationAction = () => {
  const { copilotApiConfig } = useCopilotContext()
  const { runtimeFetch, openCanvas } = useAiChat()

  const apiConfig = useMemo(
    () => ({
      baseUrl: copilotApiConfig.chatApiEndpoint,
      headers: copilotApiConfig.headers as Record<string, string>,
      runtimeFetch,
    }),
    [copilotApiConfig.chatApiEndpoint, copilotApiConfig.headers, runtimeFetch]
  )

  useCopilotAction({
    name: "displayVisualization",
    description:
      "Render an org visualization in a canvas panel. Data is fetched server-side; layout and rendering happen client-side.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Visualization title displayed in the canvas header",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "One-sentence description",
        required: false,
      },
      {
        name: "renderer",
        type: "string",
        description: 'Renderer name. Use "org" for org visualizations.',
        required: true,
      },
      {
        name: "datasetId",
        type: "string",
        description: "Reference to a dataset stored via queryData",
        required: true,
      },
      {
        name: "specVersion",
        type: "string",
        description: "Visualization spec version",
        required: false,
      },
      {
        name: "spec",
        type: "object",
        description:
          "Declarative spec configuring layout, cards, encodings, overlays, and interactivity",
        required: true,
      },
      {
        name: "fetchSpecs",
        type: "object",
        description: "Fetch specifications for server-side data retrieval",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args = props.args as Partial<DynamicCanvasContentType>

      // Bail out while arguments are still streaming in.
      if (!args.title || !args.renderer || !args.datasetId || !args.spec) {
        return <></>
      }

      const content: DynamicCanvasContentType = {
        type: "dynamicCanvas",
        title: args.title,
        description: args.description,
        renderer: args.renderer,
        datasetId: args.datasetId,
        specVersion: args.specVersion,
        spec: args.spec,
        fetchSpecs: args.fetchSpecs,
        apiConfig,
      }

      return (
        <DynamicCanvasCard
          content={content}
          onOpen={() => openCanvas(content)}
        />
      )
    },
  })
}

// ---------------------------------------------------------------------------
// Inline card component — renders a preview in the chat stream
// ---------------------------------------------------------------------------

function DynamicCanvasCard({
  content,
  onOpen,
}: {
  content: DynamicCanvasContentType
  onOpen: () => void
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {content.title}
          </p>
          {content.description && (
            <p className="text-xs text-slate-500">{content.description}</p>
          )}
        </div>
        <button
          onClick={onOpen}
          className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
        >
          Open
        </button>
      </div>
    </div>
  )
}
