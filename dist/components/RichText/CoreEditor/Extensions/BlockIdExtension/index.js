import { Extension as b } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { Node as y } from "../../../../../node_modules/.pnpm/prosemirror-model@1.25.0/node_modules/prosemirror-model/dist/index.js";
import { Plugin as I, PluginKey as _ } from "../../../../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { nanoid as m } from "../../../../../node_modules/.pnpm/nanoid@5.1.5/node_modules/nanoid/index.browser.js";
const g = [
  "paragraph",
  "heading",
  "blockquote",
  "codeBlock",
  "bulletList",
  "orderedList",
  "listItem",
  "table",
  "details"
], C = new Set(g), a = (t) => t ? C.has(t) : !1, k = (t) => t ? a(t.type) && !t.attrs?.id ? !0 : t.content?.some(k) ?? !1 : !1, M = (t) => {
  if (!t)
    return !1;
  if (a(t.type.name) && !t.attrs.id)
    return !0;
  for (let n = 0; n < t.childCount; n += 1)
    if (M(t.child(n)))
      return !0;
  return !1;
}, N = (t) => t ? t instanceof y ? M(t) : k(t) : !1, H = b.create({
  name: "blockId",
  addGlobalAttributes() {
    return [
      {
        // Apply to all block-level node types
        types: g,
        attributes: {
          id: {
            default: null,
            // Parse ID from HTML when loading content
            parseHTML: (t) => t.getAttribute("data-id"),
            // Render ID as data-id attribute in HTML
            renderHTML: (t) => t.id ? {
              "data-id": t.id
            } : {},
            // Don't keep the ID when splitting blocks - generate a new one
            keepOnSplit: !1
          }
        }
      }
    ];
  },
  addProseMirrorPlugins() {
    return [
      new I({
        key: new _("blockIdPlugin"),
        appendTransaction: (t, n, r) => {
          if (!t.some((e) => e.docChanged))
            return null;
          const o = r.tr;
          let l = !1;
          const c = [];
          return t.forEach((e) => {
            e.docChanged && e.steps.forEach((s) => {
              s.getMap().forEach((u, f, E, B) => {
                const p = Math.max(
                  0,
                  Math.min(E, r.doc.content.size)
                ), h = Math.max(
                  0,
                  Math.min(B, r.doc.content.size)
                );
                p < h && c.push({ from: p, to: h });
              });
            });
          }), c.length > 0 ? c.forEach(({ from: e, to: s }) => {
            e >= 0 && s <= r.doc.content.size && e < s && r.doc.nodesBetween(e, s, (i, u) => {
              if (a(i.type.name) && !i.attrs.id) {
                const f = m(5);
                o.setNodeMarkup(u, void 0, {
                  ...i.attrs,
                  id: f
                }), l = !0;
              }
            });
          }) : r.doc.descendants((e, s) => {
            if (a(e.type.name) && !e.attrs.id) {
              const i = m(5);
              o.setNodeMarkup(s, void 0, {
                ...e.attrs,
                id: i
              }), l = !0;
            }
            return !0;
          }), l ? o : null;
        }
      })
    ];
  }
}), O = (t, n) => {
  let r = null;
  return t.state.doc.descendants((d, o) => d.attrs.id === n ? (r = { node: d, pos: o }, !1) : !0), r;
};
export {
  g as BLOCK_NODE_TYPES,
  H as BlockIdExtension,
  N as documentHasMissingBlockIds,
  O as getBlockById,
  a as isBlockNodeType
};
