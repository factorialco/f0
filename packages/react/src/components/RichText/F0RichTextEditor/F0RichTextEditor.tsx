import { withSkeleton } from "@/lib/skeleton"

import { RichTextEditorInternal } from "./RichTextEditorInternal"
import { F0RichTextEditorSkeleton } from "./RichTextEditorSkeleton"

export const F0RichTextEditor = withSkeleton(
  RichTextEditorInternal,
  F0RichTextEditorSkeleton
)

export * from "./utils/constants"
export * from "./types"
