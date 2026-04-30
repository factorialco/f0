import { NotesTextEditorInternal } from "./NotesTextEditorInternal"

export const F0NotesTextEditor = NotesTextEditorInternal

export { F0NotesTextEditorSkeleton } from "./NotesTextEditorSkeleton"
export {
  NotesTextEditorPatchTargetNotFoundError,
  NotesTextEditorUnsupportedPatchTypeError,
} from "./applyPageDocumentPatch"
export type { Message, User } from "../internal/Extensions/Transcript"
export * from "./types"
