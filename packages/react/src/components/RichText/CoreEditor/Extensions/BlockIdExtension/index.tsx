import { Extension } from "@tiptap/core"
import { Node as ProseMirrorNode } from "@tiptap/pm/model"
import { Plugin, PluginKey } from "@tiptap/pm/state"
import { Editor } from "@tiptap/react"
import { nanoid } from "nanoid"

// Block types that will be assigned an ID
const BLOCK_NODE_TYPES = [
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "table",
  "details",
] as const

const BLOCK_NODE_TYPES_SET = new Set<string>(BLOCK_NODE_TYPES)

export const BlockIdExtension = Extension.create({
  name: "blockId",

  addGlobalAttributes() {
    return [
      {
        // Apply to all block-level node types
        types: BLOCK_NODE_TYPES as unknown as string[],
        attributes: {
          id: {
            default: null,
            // Parse ID from HTML when loading content
            parseHTML: (element) => element.getAttribute("data-id"),
            // Render ID as data-id attribute in HTML
            renderHTML: (attributes) => {
              if (!attributes.id) {
                return {}
              }
              return {
                "data-id": attributes.id,
              }
            },
            // Don't keep the ID when splitting blocks - generate a new one
            keepOnSplit: false,
          },
        },
      },
    ]
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("blockIdPlugin"),
        appendTransaction: (transactions, _oldState, newState) => {
          // Skip if document hasn't changed
          const docChanged = transactions.some((tr) => tr.docChanged)
          if (!docChanged) {
            return null
          }

          const tr = newState.tr
          let modified = false

          // Collect affected ranges from all transactions
          const affectedRanges: Array<{ from: number; to: number }> = []

          transactions.forEach((transaction) => {
            if (!transaction.docChanged) return

            // Get the mapping from old to new state
            transaction.steps.forEach((step) => {
              const stepResult = step.getMap()
              // Iterate over changed ranges in this step
              stepResult.forEach((_oldStart, _oldEnd, newStart, newEnd) => {
                // Map the positions to the new document state
                const mappedFrom = transaction.mapping.map(newStart)
                const mappedTo = transaction.mapping.map(newEnd)

                // Ensure positions are valid and within document bounds
                const from = Math.max(
                  0,
                  Math.min(mappedFrom, newState.doc.content.size)
                )
                const to = Math.max(
                  0,
                  Math.min(mappedTo, newState.doc.content.size)
                )

                if (from < to) {
                  affectedRanges.push({ from, to })
                }
              })
            })
          })

          // If we have specific affected ranges, only check those
          if (affectedRanges.length > 0) {
            affectedRanges.forEach(({ from, to }) => {
              // Add safety check for valid range
              if (from >= 0 && to <= newState.doc.content.size && from < to) {
                newState.doc.nodesBetween(from, to, (node, pos) => {
                  if (
                    BLOCK_NODE_TYPES_SET.has(node.type.name) &&
                    !node.attrs.id
                  ) {
                    const id = nanoid(5)
                    tr.setNodeMarkup(pos, undefined, {
                      ...node.attrs,
                      id,
                    })
                    modified = true
                  }
                })
              }
            })
          } else {
            // Fallback: check whole document
            // (e.g., initial load or operations without clear ranges)
            newState.doc.descendants((node, pos) => {
              if (BLOCK_NODE_TYPES_SET.has(node.type.name) && !node.attrs.id) {
                const id = nanoid(5)
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  id,
                })
                modified = true
              }
              return true
            })
          }

          // Return the transaction only if we made changes
          return modified ? tr : null
        },
      }),
    ]
  },
})

export const getBlockById = (
  editor: Editor,
  blockId: string
): { node: ProseMirrorNode; pos: number } | null => {
  let result: { node: ProseMirrorNode; pos: number } | null = null

  editor.state.doc.descendants((node: ProseMirrorNode, pos: number) => {
    if (node.attrs.id === blockId) {
      result = { node, pos }
      return false // Stop traversing
    }
    return true // Continue traversing
  })

  return result
}

export const scrollToBlock = (editor: Editor, blockId: string): boolean => {
  const block = getBlockById(editor, blockId)
  if (!block) {
    return false
  }

  // Set selection to the block
  editor.commands.setTextSelection(block.pos)
  // Scroll into view
  editor.commands.scrollIntoView()

  return true
}

export const getAllBlockIds = (editor: Editor): string[] => {
  const blockIds: string[] = []

  editor.state.doc.descendants((node: ProseMirrorNode) => {
    if (node.attrs.id && BLOCK_NODE_TYPES_SET.has(node.type.name)) {
      blockIds.push(node.attrs.id)
    }
    return true
  })

  return blockIds
}

export type { Extension }
