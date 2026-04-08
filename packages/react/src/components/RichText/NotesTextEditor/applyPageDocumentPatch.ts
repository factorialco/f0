import { Fragment, Slice } from "@tiptap/pm/model"
import type { Editor, JSONContent } from "@tiptap/react"

import {
  getBlockById,
  BLOCK_NODE_TYPES_SET,
} from "../CoreEditor/Extensions/BlockIdExtension"
import type {
  NotesTextEditorPageDocumentPatch,
  NotesTextEditorSnapshot,
} from "./types"

const ID_CAPABLE_NODE_TYPES = BLOCK_NODE_TYPES_SET

const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

const setNodeId = (node: JSONContent, nodeId: string): JSONContent => {
  const attrs = isPlainObject(node.attrs) ? node.attrs : {}

  return {
    ...node,
    attrs: {
      ...attrs,
      id: nodeId,
    },
  }
}

const stripNodeIds = (node: JSONContent): JSONContent => {
  const nextNode: JSONContent = { ...node }

  if (
    nextNode.type &&
    ID_CAPABLE_NODE_TYPES.has(nextNode.type) &&
    isPlainObject(nextNode.attrs) &&
    "id" in nextNode.attrs
  ) {
    const { id: _ignoredId, ...restAttrs } = nextNode.attrs
    nextNode.attrs = Object.keys(restAttrs).length > 0 ? restAttrs : undefined
  }

  if (Array.isArray(nextNode.content)) {
    nextNode.content = nextNode.content.map(stripNodeIds)
  }

  return nextNode
}

const sanitizeInsertedBlocks = (nodes: JSONContent[]): JSONContent[] => {
  return nodes.map(stripNodeIds)
}

const sanitizeReplacementBlock = (
  node: JSONContent,
  targetId: string
): JSONContent => {
  const sanitizedNode = stripNodeIds(node)

  return sanitizedNode.type && ID_CAPABLE_NODE_TYPES.has(sanitizedNode.type)
    ? setNodeId(sanitizedNode, targetId)
    : sanitizedNode
}

const createFragment = (editor: Editor, content: JSONContent[]): Fragment => {
  if (content.length === 0) {
    return Fragment.empty
  }

  return Fragment.fromArray(
    content.map((entry) => editor.schema.nodeFromJSON(entry))
  )
}

const createSlice = (editor: Editor, content: JSONContent[]): Slice => {
  return new Slice(createFragment(editor, content), 0, 0)
}

const getRequiredTarget = (editor: Editor, targetId: string) => {
  const target = getBlockById(editor, targetId)

  if (!target) {
    throw new NotesTextEditorPatchTargetNotFoundError(targetId)
  }

  return target
}

export const getNotesTextEditorSnapshot = (
  editor: Editor
): NotesTextEditorSnapshot =>
  editor.isEmpty
    ? { json: null, html: null }
    : { json: editor.getJSON(), html: editor.getHTML() }

export class NotesTextEditorPatchTargetNotFoundError extends Error {
  readonly code = "target_not_found"
  readonly targetId: string

  constructor(targetId: string) {
    super(
      `Could not find block node ${targetId} in the current editor document.`
    )
    this.name = "NotesTextEditorPatchTargetNotFoundError"
    this.targetId = targetId
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export const applyPageDocumentPatch = (
  editor: Editor,
  patch: NotesTextEditorPageDocumentPatch
): NotesTextEditorSnapshot => {
  switch (patch.type) {
    case "top_level_prepend": {
      const slice = createSlice(editor, sanitizeInsertedBlocks(patch.blocks))
      const tr = editor.state.tr.replace(0, 0, slice)

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "top_level_append": {
      const slice = createSlice(editor, sanitizeInsertedBlocks(patch.blocks))
      const position = editor.state.doc.content.size
      const tr = editor.state.tr.replace(position, position, slice)

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "insert_before": {
      const target = getRequiredTarget(editor, patch.targetId)
      const slice = createSlice(editor, sanitizeInsertedBlocks(patch.blocks))
      const tr = editor.state.tr.replace(target.pos, target.pos, slice)

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "insert_after": {
      const target = getRequiredTarget(editor, patch.targetId)
      const position = target.pos + target.node.nodeSize
      const slice = createSlice(editor, sanitizeInsertedBlocks(patch.blocks))
      const tr = editor.state.tr.replace(position, position, slice)

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "replace_block": {
      const target = getRequiredTarget(editor, patch.targetId)
      const replacementNode = editor.schema.nodeFromJSON(
        sanitizeReplacementBlock(patch.block, patch.targetId)
      )
      const tr = editor.state.tr.replaceWith(
        target.pos,
        target.pos + target.node.nodeSize,
        replacementNode
      )

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "replace_content": {
      const target = getRequiredTarget(editor, patch.targetId)
      const tr = editor.state.tr.replace(
        target.pos + 1,
        target.pos + target.node.nodeSize - 1,
        createSlice(editor, sanitizeInsertedBlocks(patch.content))
      )

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }

    case "delete_block": {
      const target = getRequiredTarget(editor, patch.targetId)
      const tr = editor.state.tr.delete(
        target.pos,
        target.pos + target.node.nodeSize
      )

      if (tr.docChanged) {
        editor.view.dispatch(tr)
      }

      return getNotesTextEditorSnapshot(editor)
    }
  }
}
