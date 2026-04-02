import { Extension } from "@tiptap/react"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

const persistSelectionKey = new PluginKey("persistSelection")

const persistSelectionPlugin = new Plugin({
  key: persistSelectionKey,
  state: {
    init(_, { doc, selection }) {
      return selection.from !== selection.to
        ? DecorationSet.create(doc, [
            Decoration.inline(selection.from, selection.to, {
              class: "preserved-selection",
            }),
          ])
        : DecorationSet.empty
    },
    apply(newState) {
      const { doc, selection } = newState
      return selection.from !== selection.to
        ? DecorationSet.create(doc, [
            Decoration.inline(selection.from, selection.to, {
              class: "preserved-selection",
            }),
          ])
        : DecorationSet.empty
    },
  },
  props: {
    decorations(state) {
      return this.getState(state)
    },
  },
})

const PersistSelection = Extension.create({
  name: "persistSelection",
  addProseMirrorPlugins() {
    return [persistSelectionPlugin]
  },
})

export { PersistSelection }
