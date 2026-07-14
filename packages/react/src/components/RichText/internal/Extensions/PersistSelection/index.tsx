import { Extension } from "@tiptap/react"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"

const persistSelectionKey = new PluginKey("persistSelection")

const createSelectionDecorations = (
  doc: Parameters<typeof DecorationSet.create>[0],
  from: number,
  to: number
) =>
  from !== to
    ? DecorationSet.create(doc, [
        Decoration.inline(from, to, {
          class: "preserved-selection",
        }),
      ])
    : DecorationSet.empty

const persistSelectionPlugin = new Plugin({
  key: persistSelectionKey,
  state: {
    init(_, { doc, selection }) {
      return createSelectionDecorations(doc, selection.from, selection.to)
    },
    apply(tr, set, oldState, newState) {
      const { selection } = newState
      const oldSelection = oldState.selection

      // Untouched selection over an untouched doc: keep the existing set.
      if (
        !tr.docChanged &&
        selection.from === oldSelection.from &&
        selection.to === oldSelection.to
      ) {
        return set
      }

      return createSelectionDecorations(
        newState.doc,
        selection.from,
        selection.to
      )
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
