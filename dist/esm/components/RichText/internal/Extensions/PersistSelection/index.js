import { Extension as e } from "@tiptap/react";
import { Plugin as t, PluginKey as n } from "prosemirror-state";
import { Decoration as r, DecorationSet as i } from "prosemirror-view";
//#region src/components/RichText/internal/Extensions/PersistSelection/index.tsx
var a = new n("persistSelection"), o = (e, t, n) => t === n ? i.empty : i.create(e, [r.inline(t, n, { class: "preserved-selection" })]), s = new t({
	key: a,
	state: {
		init(e, { doc: t, selection: n }) {
			return o(t, n.from, n.to);
		},
		apply(e, t, n, r) {
			let { selection: i } = r, a = n.selection;
			return !e.docChanged && i.from === a.from && i.to === a.to ? t : o(r.doc, i.from, i.to);
		}
	},
	props: { decorations(e) {
		return this.getState(e);
	} }
}), c = e.create({
	name: "persistSelection",
	addProseMirrorPlugins() {
		return [s];
	}
});
//#endregion
export { c as PersistSelection };
