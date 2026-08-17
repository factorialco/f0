import { Extension } from "@tiptap/core"
import type { EditorState } from "@tiptap/pm/state"

/**
 * Deepest level the CSS styles. A document may carry more (stored untouched);
 * only the class caps here.
 */
export const INDENT_MAX_LEVEL = 8

export const INDENT_STEP_PX = 24

const CLASS_PREFIX = "f0-indent-"

// List nesting owns Tab and Shift-Tab inside a list; the indent shortcuts must
// stand aside there rather than compete with it.
const LIST_ITEM_TYPES = ["listItem", "taskItem"]

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    indent: {
      setIndent: (level: number) => ReturnType
      unsetIndent: () => ReturnType
      outdent: () => ReturnType
    }
  }
}

export interface IndentOptions {
  types: string[]
}

/**
 * Carries an `indent` attribute (1..n) on paragraphs and headings, so content
 * imported from a document keeps its depth and survives editing.
 *
 * Only removal is bound to the keyboard: an import infers depth from page
 * geometry and can get it wrong. Adding depth is not, because that would
 * compete with list nesting for Tab.
 *
 * A level renders as a class rather than only an inline style, because the
 * sanitizer read-only content passes through allows `class` but not `style`.
 * The style is still emitted, for renderers outside F0.
 */
export const IndentExtension = Extension.create<IndentOptions>({
  name: "indent",

  addOptions() {
    return {
      types: ["paragraph", "heading"],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: null,
            parseHTML: (element) => {
              const scaleClass = Array.from(element.classList).find((name) =>
                name.startsWith(CLASS_PREFIX)
              )

              const level = scaleClass
                ? Number.parseInt(scaleClass.slice(CLASS_PREFIX.length), 10)
                : Math.round(
                    Number.parseFloat(element.style.paddingLeft) /
                      INDENT_STEP_PX
                  )

              return Number.isInteger(level) && level >= 1 ? level : null
            },
            renderHTML: (attributes) => {
              const indent = attributes.indent

              if (!Number.isInteger(indent) || indent < 1) {
                return {}
              }

              const style = {
                style: `padding-left: ${indent * INDENT_STEP_PX}px`,
              }

              // The class caps at the styled range so sanitized (style-less)
              // rendering degrades to the deepest styled level instead of
              // losing the indent entirely; the style keeps the true depth.
              return {
                ...style,
                class: `${CLASS_PREFIX}${Math.min(indent, INDENT_MAX_LEVEL)}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    const { types } = this.options

    const currentBlock = (state: EditorState) => {
      const { $from } = state.selection
      const type = $from.parent.type.name

      return types.includes(type) ? { type, node: $from.parent } : null
    }

    return {
      setIndent:
        (level) =>
        ({ state, chain }) => {
          const block = currentBlock(state)

          if (!block) {
            return false
          }

          const clamped = Math.round(level)

          if (clamped < 1) {
            return chain().updateAttributes(block.type, { indent: null }).run()
          }

          return chain()
            .updateAttributes(block.type, {
              indent: Math.min(clamped, INDENT_MAX_LEVEL),
            })
            .run()
        },
      unsetIndent:
        () =>
        ({ state, chain }) => {
          const block = currentBlock(state)

          return block
            ? chain().updateAttributes(block.type, { indent: null }).run()
            : false
        },
      outdent:
        () =>
        ({ state, chain }) => {
          const block = currentBlock(state)

          if (!block) {
            return false
          }

          const indent = block.node.attrs.indent

          if (!Number.isInteger(indent) || indent < 1) {
            return false
          }

          return chain()
            .updateAttributes(block.type, {
              indent: indent > 1 ? indent - 1 : null,
            })
            .run()
        },
    }
  },

  addKeyboardShortcuts() {
    // Both shortcuts fall through unless they have an indent to remove, so
    // reverse tabbing out of the editor and joining a paragraph backwards keep
    // working everywhere else.
    const outdentable = () => {
      const { $from } = this.editor.state.selection

      for (let depth = $from.depth; depth > 0; depth -= 1) {
        if (LIST_ITEM_TYPES.includes($from.node(depth).type.name)) {
          return false
        }
      }

      return this.editor.can().outdent()
    }

    return {
      "Shift-Tab": () => outdentable() && this.editor.commands.outdent(),
      Backspace: () => {
        const { empty, $from } = this.editor.state.selection

        if (!empty || $from.parentOffset !== 0) {
          return false
        }

        return outdentable() && this.editor.commands.outdent()
      },
    }
  },
})
