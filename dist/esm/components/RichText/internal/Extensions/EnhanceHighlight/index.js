import { Extension as e } from "@tiptap/react";
import { Plugin as t, PluginKey as n } from "prosemirror-state";
import { Decoration as r, DecorationSet as i } from "prosemirror-view";
//#region src/components/RichText/internal/Extensions/EnhanceHighlight/index.tsx
var a = new n("enhanceHighlight"), o = (e) => {
	let t = document.createElement("span");
	return t.className = "enhance-highlight enhance-highlight-placeholder", t.textContent = e, t;
}, s = (e, t, n, a) => {
	let s = e.content.size, c = Math.max(0, Math.min(t, s)), l = Math.max(c, Math.min(n, s));
	if (c !== l && e.textBetween(c, l, " ").trim().length > 0) return i.create(e, [r.inline(c, l, { class: "enhance-highlight" })]);
	if (a) {
		let t = c === 0 && s > 0 ? 1 : c;
		return i.create(e, [r.widget(t, () => o(a), { side: 0 })]);
	}
	return i.empty;
}, c = e.create({
	name: "enhanceHighlight",
	addCommands() {
		return {
			setEnhanceHighlight: (e, t, n) => ({ tr: r, dispatch: i }) => (i && r.setMeta(a, {
				from: e,
				to: t,
				placeholder: n?.placeholder
			}), !0),
			clearEnhanceHighlight: () => ({ tr: e, dispatch: t }) => (t && e.setMeta(a, { clear: !0 }), !0)
		};
	},
	addProseMirrorPlugins() {
		return [new t({
			key: a,
			state: {
				init: () => i.empty,
				apply(e, t) {
					let n = e.getMeta(a);
					return n ? "clear" in n ? i.empty : s(e.doc, n.from, n.to, n.placeholder) : e.docChanged ? t.map(e.mapping, e.doc) : t;
				}
			},
			props: { decorations(e) {
				return a.getState(e);
			} }
		})];
	}
});
//#endregion
export { c as EnhanceHighlight };
