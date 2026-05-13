import type { CanvasEntityDefinition } from "../../types"

import { DynamicCanvasContent } from "./DynamicCanvasContent"
import { DynamicCanvasHeader } from "./DynamicCanvasHeader"
import type { DynamicCanvasContent as DynamicCanvasContentType } from "./types"

export const dynamicCanvasEntity: CanvasEntityDefinition<DynamicCanvasContentType> =
  {
    type: "dynamicCanvas",
    renderContent: ({ content }) => <DynamicCanvasContent content={content} />,
    renderHeader: ({ content, onClose }) => (
      <DynamicCanvasHeader content={content} onClose={onClose} />
    ),
    overflowHidden: true,
  }

export type { DynamicCanvasContentType }
