import { Extension } from "@tiptap/react"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

export interface EnhanceHighlightStorage {
  from: number | null
  to: number | null
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    enhanceHighlight: {
      setEnhanceHighlight: (from: number, to: number) => ReturnType
      clearEnhanceHighlight: () => ReturnType
    }
  }
}

const enhanceHighlightKey = new PluginKey("enhanceHighlight")

const EnhanceHighlight = Extension.create<
  Record<string, never>,
  EnhanceHighlightStorage
>({
  name: "enhanceHighlight",

  addStorage() {
    return {
      from: null,
      to: null,
    }
  },

  addCommands() {
    return {
      setEnhanceHighlight:
        (from: number, to: number) =>
        ({ editor }) => {
          editor.storage.enhanceHighlight.from = from
          editor.storage.enhanceHighlight.to = to
          editor.view.dispatch(editor.state.tr)
          return true
        },
      clearEnhanceHighlight:
        () =>
        ({ editor }) => {
          editor.storage.enhanceHighlight.from = null
          editor.storage.enhanceHighlight.to = null
          editor.view.dispatch(editor.state.tr)
          return true
        },
    }
  },

  addProseMirrorPlugins() {
    const storage = this.storage

    return [
      new Plugin({
        key: enhanceHighlightKey,
        props: {
          decorations(state) {
            const { from, to } = storage
            if (from === null || to === null) {
              return DecorationSet.empty
            }

            const docSize = state.doc.content.size
            const validFrom = Math.max(0, Math.min(from, docSize))
            const validTo = Math.max(validFrom, Math.min(to, docSize))

            if (validFrom === validTo) {
              return DecorationSet.empty
            }

            return DecorationSet.create(state.doc, [
              Decoration.inline(validFrom, validTo, {
                class: "enhance-highlight",
              }),
            ])
          },
        },
      }),
    ]
  },
})

export { EnhanceHighlight }
