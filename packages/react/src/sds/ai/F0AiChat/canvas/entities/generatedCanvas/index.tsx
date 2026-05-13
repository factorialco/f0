import type { CanvasEntityDefinition } from "../../types"

import { GeneratedCanvasContent } from "./GeneratedCanvasContent"
import { GeneratedCanvasHeader } from "./GeneratedCanvasHeader"
import type { GeneratedCanvasContent as GeneratedCanvasCanvasContent } from "../../../types"

export const generatedCanvasEntity: CanvasEntityDefinition<GeneratedCanvasCanvasContent> =
  {
    type: "generatedCanvas",
    overflowHidden: true,
    renderContent: ({ content, refreshKey }) => (
      <GeneratedCanvasContent content={content} refreshKey={refreshKey} />
    ),
    renderHeader: ({ content, onClose }) => (
      <GeneratedCanvasHeader content={content} onClose={onClose} />
    ),
  }

export type { GeneratedCanvasContent } from "../../../types"
export { GeneratedCanvasCard } from "./GeneratedCanvasCard"
export type { GeneratedCanvasCardProps } from "./GeneratedCanvasCard"
export type {
  GeneratedCanvasData,
  GeneratedCanvasDataset,
  GeneratedCanvasEngine,
  GeneratedCanvasRow,
  GeneratedCanvasSelectedNode,
} from "./types"
