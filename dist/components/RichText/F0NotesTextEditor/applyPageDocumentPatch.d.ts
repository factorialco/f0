import { Editor } from '@tiptap/react';
import { NotesTextEditorPageDocumentPatch, NotesTextEditorSnapshot } from './types';
export declare const getNotesTextEditorSnapshot: (editor: Editor) => NotesTextEditorSnapshot;
export declare class NotesTextEditorPatchTargetNotFoundError extends Error {
    readonly code = "target_not_found";
    readonly targetId: string;
    constructor(targetId: string);
}
export declare class NotesTextEditorUnsupportedPatchTypeError extends Error {
    readonly code = "unsupported_patch_type";
    readonly patchType: unknown;
    constructor(patchType: unknown);
}
export declare const applyPageDocumentPatch: (editor: Editor, patch: NotesTextEditorPageDocumentPatch) => NotesTextEditorSnapshot;
