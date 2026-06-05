import { Plugin as i, PluginKey as s } from "../../../../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { DecorationSet as r, Decoration as n } from "../../../../../node_modules/.pnpm/prosemirror-view@1.38.1/node_modules/prosemirror-view/dist/index.js";
import { Extension as c } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
const p = new s("persistSelection"), l = new i({
  key: p,
  state: {
    init(t, { doc: o, selection: e }) {
      return e.from !== e.to ? r.create(o, [
        n.inline(e.from, e.to, {
          class: "preserved-selection"
        })
      ]) : r.empty;
    },
    apply(t) {
      const { doc: o, selection: e } = t;
      return e.from !== e.to ? r.create(o, [
        n.inline(e.from, e.to, {
          class: "preserved-selection"
        })
      ]) : r.empty;
    }
  },
  props: {
    decorations(t) {
      return this.getState(t);
    }
  }
}), f = c.create({
  name: "persistSelection",
  addProseMirrorPlugins() {
    return [l];
  }
});
export {
  f as PersistSelection
};
