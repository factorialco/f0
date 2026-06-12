import { experimentalComponent } from "@/lib/experimental"

import {
  F0NotesTextEditor as F0NotesTextEditorComponent,
  F0NotesTextEditorSkeleton,
} from "./F0NotesTextEditor"

export { F0NotesTextEditorSkeleton }
export * from "./types"

/**
 * @experimental This is an experimental component, use it at your own risk
 */
const F0NotesTextEditor = experimentalComponent(
  "F0NotesTextEditor",
  F0NotesTextEditorComponent
)

export { F0NotesTextEditor }

/** @deprecated Use F0NotesTextEditor */
export const NotesTextEditor = F0NotesTextEditor
/** @deprecated Use F0NotesTextEditorSkeleton */
export const NotesTextEditorSkeleton = F0NotesTextEditorSkeleton
