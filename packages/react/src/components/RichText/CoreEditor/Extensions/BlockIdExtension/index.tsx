import { Extension, type JSONContent } from "@tiptap/core"
import { Node as ProseMirrorNode } from "@tiptap/pm/model"
import { Plugin, PluginKey } from "@tiptap/pm/state"
import { Editor } from "@tiptap/react"
import { nanoid } from "nanoid"

// Block types that will be assigned an ID
export const BLOCK_NODE_TYPES = [
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

export const isBlockNodeType = (type: string | null | undefined): boolean => {
  if (!type) {
    return false
  }

  return BLOCK_NODE_TYPES_SET.has(type)
}

const jsonDocumentHasMissingBlockIds = (
  node: JSONContent | null | undefined
): boolean => {
  if (!node) {
    return false
  }

  if (isBlockNodeType(node.type) && !node.attrs?.id) {
    return true
  }

  return node.content?.some(jsonDocumentHasMissingBlockIds) ?? false
}

const proseMirrorDocumentHasMissingBlockIds = (
  node: ProseMirrorNode | null | undefined
): boolean => {
  if (!node) {
    return false
  }

  if (isBlockNodeType(node.type.name) && !node.attrs.id) {
    return true
  }

  for (let index = 0; index < node.childCount; index += 1) {
    if (proseMirrorDocumentHasMissingBlockIds(node.child(index))) {
      return true
    }
  }

  return false
}

export const documentHasMissingBlockIds = (
  document: JSONContent | ProseMirrorNode | null | undefined
): boolean => {
  if (!document) {
    return false
  }

  if (document instanceof ProseMirrorNode) {
    return proseMirrorDocumentHasMissingBlockIds(document)
  }

  return jsonDocumentHasMissingBlockIds(document)
}

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
                // step.getMap().forEach already reports positions in the new
                // document. Re-mapping them through transaction.mapping can skip
                // newly inserted ranges, which prevents fresh block ids from
                // being assigned for prepend/insert-before/insert-after flows.
                const from = Math.max(
                  0,
                  Math.min(newStart, newState.doc.content.size)
                )
                const to = Math.max(
                  0,
                  Math.min(newEnd, newState.doc.content.size)
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
                  if (isBlockNodeType(node.type.name) && !node.attrs.id) {
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
              if (isBlockNodeType(node.type.name) && !node.attrs.id) {
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
    if (node.attrs.id && isBlockNodeType(node.type.name)) {
      blockIds.push(node.attrs.id)
    }
    return true
  })

  return blockIds
}

export type { Extension }
