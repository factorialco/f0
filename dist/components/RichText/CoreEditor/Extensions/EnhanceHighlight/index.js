import { Plugin as g, PluginKey as c } from "../../../../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { DecorationSet as i, Decoration as l } from "../../../../../node_modules/.pnpm/prosemirror-view@1.38.1/node_modules/prosemirror-view/dist/index.js";
import { Extension as s } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
const m = new c("enhanceHighlight"), d = s.create({
  name: "enhanceHighlight",
  addStorage() {
    return {
      from: null,
      to: null
    };
  },
  addCommands() {
    return {
      setEnhanceHighlight: (n, e) => ({ editor: t }) => (t.storage.enhanceHighlight.from = n, t.storage.enhanceHighlight.to = e, t.view.dispatch(t.state.tr), !0),
      clearEnhanceHighlight: () => ({ editor: n }) => (n.storage.enhanceHighlight.from = null, n.storage.enhanceHighlight.to = null, n.view.dispatch(n.state.tr), !0)
    };
  },
  addProseMirrorPlugins() {
    const n = this.storage;
    return [
      new g({
        key: m,
        props: {
          decorations(e) {
            const { from: t, to: a } = n;
            if (t === null || a === null)
              return i.empty;
            const h = e.doc.content.size, r = Math.max(0, Math.min(t, h)), o = Math.max(r, Math.min(a, h));
            return r === o ? i.empty : i.create(e.doc, [
              l.inline(r, o, {
                class: "enhance-highlight"
              })
            ]);
          }
        }
      })
    ];
  }
});
export {
  d as EnhanceHighlight
};
