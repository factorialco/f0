import { Node as ProseMirrorNode } from "@tiptap/pm/model"
import { Extension } from "@tiptap/react"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    enhanceHighlight: {
      setEnhanceHighlight: (from: number, to: number) => ReturnType
      clearEnhanceHighlight: () => ReturnType
    }
  }
}

type EnhanceHighlightMeta = { from: number; to: number } | { clear: true }

const enhanceHighlightKey = new PluginKey<DecorationSet>("enhanceHighlight")

const createHighlightDecorations = (
  doc: ProseMirrorNode,
  from: number,
  to: number
): DecorationSet => {
  const docSize = doc.content.size
  const validFrom = Math.max(0, Math.min(from, docSize))
  const validTo = Math.max(validFrom, Math.min(to, docSize))

  if (validFrom === validTo) {
    return DecorationSet.empty
  }

  return DecorationSet.create(doc, [
    Decoration.inline(validFrom, validTo, {
      class: "enhance-highlight",
    }),
  ])
}

const EnhanceHighlight = Extension.create({
  name: "enhanceHighlight",

  addCommands() {
    return {
      setEnhanceHighlight:
        (from: number, to: number) =>
        ({ tr, dispatch }) => {
          if (dispatch) {
            tr.setMeta(enhanceHighlightKey, {
              from,
              to,
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
              return createHighlightDecorations(tr.doc, meta.from, meta.to)
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
