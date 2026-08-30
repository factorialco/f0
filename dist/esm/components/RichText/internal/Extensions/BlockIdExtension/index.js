import { nanoid as e } from "nanoid";
import { Extension as t } from "@tiptap/core";
import { Node as n } from "@tiptap/pm/model";
import { Plugin as r, PluginKey as i } from "@tiptap/pm/state";
//#region src/components/RichText/internal/Extensions/BlockIdExtension/index.tsx
var a = [
	"paragraph",
	"heading",
	"blockquote",
	"codeBlock",
	"bulletList",
	"orderedList",
	"listItem",
	"table",
	"details"
], o = new Set(a), s = (e) => e ? o.has(e) : !1, c = (e) => e ? s(e.type) && !e.attrs?.id ? !0 : e.content?.some(c) ?? !1 : !1, l = (e) => {
	if (!e) return !1;
	if (s(e.type.name) && !e.attrs.id) return !0;
	for (let t = 0; t < e.childCount; t += 1) if (l(e.child(t))) return !0;
	return !1;
}, u = (e) => e ? e instanceof n ? l(e) : c(e) : !1, d = t.create({
	name: "blockId",
	addGlobalAttributes() {
		return [{
			types: a,
			attributes: { id: {
				default: null,
				parseHTML: (e) => e.getAttribute("data-id"),
				renderHTML: (e) => e.id ? { "data-id": e.id } : {},
				keepOnSplit: !1
			} }
		}];
	},
	addProseMirrorPlugins() {
		return [new r({
			key: new i("blockIdPlugin"),
			appendTransaction: (t, n, r) => {
				if (!t.some((e) => e.docChanged)) return null;
				let i = r.tr, a = !1, o = [];
				return t.forEach((e) => {
					e.docChanged && e.steps.forEach((e) => {
						e.getMap().forEach((e, t, n, i) => {
							let a = Math.max(0, Math.min(n, r.doc.content.size)), s = Math.max(0, Math.min(i, r.doc.content.size));
							a < s && o.push({
								from: a,
								to: s
							});
						});
					});
				}), o.length > 0 ? o.forEach(({ from: t, to: n }) => {
					t >= 0 && n <= r.doc.content.size && t < n && r.doc.nodesBetween(t, n, (t, n) => {
						if (s(t.type.name) && !t.attrs.id) {
							let r = e(5);
							i.setNodeMarkup(n, void 0, {
								...t.attrs,
								id: r
							}), a = !0;
						}
					});
				}) : r.doc.descendants((t, n) => {
					if (s(t.type.name) && !t.attrs.id) {
						let r = e(5);
						i.setNodeMarkup(n, void 0, {
							...t.attrs,
							id: r
						}), a = !0;
					}
					return !0;
				}), a ? i : null;
			}
		})];
	}
}), f = (e, t) => {
	let n = null;
	return e.state.doc.descendants((e, r) => e.attrs.id !== t || (n = {
		node: e,
		pos: r
	}, !1)), n;
};
//#endregion
export { a as BLOCK_NODE_TYPES, d as BlockIdExtension, u as documentHasMissingBlockIds, f as getBlockById, s as isBlockNodeType };
