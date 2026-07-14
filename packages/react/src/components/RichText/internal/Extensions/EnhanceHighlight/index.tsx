import { Node as ProseMirrorNode } from "@tiptap/pm/model"
import { Extension } from "@tiptap/react"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    enhanceHighlight: {
      setEnhanceHighlight: (
        from: number,
        to: number,
        options?: { placeholder?: string }
      ) => ReturnType
      clearEnhanceHighlight: () => ReturnType
    }
  }
}

type EnhanceHighlightMeta =
  | { from: number; to: number; placeholder?: string }
  | { clear: true }

const enhanceHighlightKey = new PluginKey<DecorationSet>("enhanceHighlight")

const buildPlaceholderSpan = (placeholder: string): HTMLSpanElement => {
  const span = document.createElement("span")
  span.className = "enhance-highlight enhance-highlight-placeholder"
  span.textContent = placeholder
  return span
}

const createHighlightDecorations = (
  doc: ProseMirrorNode,
  from: number,
  to: number,
  placeholder?: string
): DecorationSet => {
  const docSize = doc.content.size
  const validFrom = Math.max(0, Math.min(from, docSize))
  const validTo = Math.max(validFrom, Math.min(to, docSize))

  const hasText =
    validFrom !== validTo &&
    doc.textBetween(validFrom, validTo, " ").trim().length > 0

  if (hasText) {
    return DecorationSet.create(doc, [
      Decoration.inline(validFrom, validTo, {
        class: "enhance-highlight",
      }),
    ])
  }

  // Nothing to shine on (empty document or whitespace-only range): without a
  // visible affordance the editor just looks idle, so render the loading label
  // as an inline widget that reuses the same shimmer effect.
  if (placeholder) {
    const position = validFrom === 0 && docSize > 0 ? 1 : validFrom
    return DecorationSet.create(doc, [
      Decoration.widget(position, () => buildPlaceholderSpan(placeholder), {
        side: 0,
      }),
    ])
  }

  return DecorationSet.empty
}

const EnhanceHighlight = Extension.create({
  name: "enhanceHighlight",

  addCommands() {
    return {
      setEnhanceHighlight:
        (from: number, to: number, options?: { placeholder?: string }) =>
        ({ tr, dispatch }) => {
          if (dispatch) {
            tr.setMeta(enhanceHighlightKey, {
              from,
              to,
              placeholder: options?.placeholder,
            } satisfies EnhanceHighlightMeta)
          }
          return true
        },
      clearEnhanceHighlight:
        () =>
        ({ tr, dispatch }) => {
          if (dispatch) {
            tr.setMeta(enhanceHighlightKey, {
              clear: true,
            } satisfies EnhanceHighlightMeta)
          }
          return true
        },
    }
  },

  addProseMirrorPlugins() {
    return [
      new Plugin<DecorationSet>({
        key: enhanceHighlightKey,
        state: {
          init: () => DecorationSet.empty,
          // Rebuild only when the range changes (via command meta); otherwise
          // remap the existing decorations through the transaction instead of
          // recreating the whole set on every keystroke.
          apply(tr, set) {
            const meta = tr.getMeta(enhanceHighlightKey) as
              | EnhanceHighlightMeta
              | undefined
            if (meta) {
              if ("clear" in meta) {
                return DecorationSet.empty
              }
              return createHighlightDecorations(
                tr.doc,
                meta.from,
                meta.to,
                meta.placeholder
              )
            }
            return tr.docChanged ? set.map(tr.mapping, tr.doc) : set
          },
        },
        props: {
          decorations(state) {
            return enhanceHighlightKey.getState(state)
          },
        },
      }),
    ]
  },
})

export { EnhanceHighlight }
