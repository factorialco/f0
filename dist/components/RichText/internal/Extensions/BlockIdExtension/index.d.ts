import { Extension, JSONContent } from '@tiptap/core';
import { Node as ProseMirrorNode } from '@tiptap/pm/model';
import { Editor } from '@tiptap/react';
export declare const BLOCK_NODE_TYPES: readonly ["paragraph", "heading", "blockquote", "codeBlock", "bulletList", "orderedList", "listItem", "table", "details"];
export declare const isBlockNodeType: (type: string | null | undefined) => boolean;
export declare const documentHasMissingBlockIds: (document: JSONContent | ProseMirrorNode | null | undefined) => boolean;
export declare const BlockIdExtension: Extension<any, any>;
export declare const getBlockById: (editor: Editor, blockId: string) => {
    node: ProseMirrorNode;
    pos: number;
} | null;
export declare const scrollToBlock: (editor: Editor, blockId: string) => boolean;
export declare const getAllBlockIds: (editor: Editor) => string[];
export type { Extension };
