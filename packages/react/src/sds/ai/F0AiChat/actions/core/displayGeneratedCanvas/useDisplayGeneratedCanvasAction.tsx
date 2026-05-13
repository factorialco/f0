import { useCopilotAction } from "@copilotkit/react-core"

import { GeneratedCanvasCard } from "../../../canvas/entities/generatedCanvas/GeneratedCanvasCard"
import {
  type GeneratedCanvasData,
  type GeneratedCanvasEngine,
  generatedCanvasEngines,
} from "../../../canvas/entities/generatedCanvas/types"

function isGeneratedCanvasData(value: unknown): value is GeneratedCanvasData {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function normalizeEngine(value: unknown): GeneratedCanvasEngine {
  return typeof value === "string" &&
    generatedCanvasEngines.includes(value as GeneratedCanvasEngine)
    ? (value as GeneratedCanvasEngine)
    : "canvas2d"
}

/**
 * Registers the frontend half of Factorial Agent's `displayGeneratedCanvas`
 * action. The backend streams a renderer source string plus compact JSON data;
 * F0 opens the generated-canvas runtime in the canvas panel.
 */
export const useDisplayGeneratedCanvasAction = () => {
  useCopilotAction({
    name: "displayGeneratedCanvas",
    description:
      "Display an AI-generated custom visual canvas in the side panel.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Canvas title displayed in the canvas header",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "Short description of what the generated canvas shows",
        required: false,
      },
      {
        name: "engine",
        type: "string",
        description: 'Runtime engine: "canvas2d", "pixi", or "svg"',
        required: false,
      },
      {
        name: "rendererSource",
        type: "string",
        description:
          "JavaScript source defining async function render({ root, data, theme, api, libs })",
        required: true,
      },
      {
        name: "data",
        type: "object",
        description: "Compact JSON-serializable data consumed by the renderer",
        required: true,
      },
      {
        name: "stylePrompt",
        type: "string",
        description: "Brief visual design direction for the generated artifact",
        required: false,
      },
    ],
    available: "frontend",
    render: (props) => {
      const args =
        props.args && typeof props.args === "object"
          ? (props.args as Record<string, unknown>)
          : {}
      const title = typeof args.title === "string" ? args.title : undefined
      const description =
        typeof args.description === "string" ? args.description : undefined
      const rendererSource =
        typeof args.rendererSource === "string"
          ? args.rendererSource
          : undefined
      const stylePrompt =
        typeof args.stylePrompt === "string" ? args.stylePrompt : undefined

      if (!title || !rendererSource || !isGeneratedCanvasData(args.data)) {
        return <></>
      }

      return (
        <GeneratedCanvasCard
          title={title}
          description={description}
          engine={normalizeEngine(args.engine)}
          rendererSource={rendererSource}
          data={args.data}
          stylePrompt={stylePrompt}
        />
      )
    },
  })
}
