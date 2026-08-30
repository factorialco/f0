import { getBlockById as e, isBlockNodeType as t } from "../internal/Extensions/BlockIdExtension/index.js";
import { Fragment as n, Slice as r } from "@tiptap/pm/model";
//#region src/components/RichText/F0NotesTextEditor/applyPageDocumentPatch.ts
var i = (e) => typeof e == "object" && !!e && !Array.isArray(e), a = (e, t) => {
	let n = i(e.attrs) ? e.attrs : {};
	return {
		...e,
		attrs: {
			...n,
			id: t
		}
	};
}, o = (e) => {
	let n = { ...e };
	if (n.type && t(n.type) && i(n.attrs) && "id" in n.attrs) {
		let { id: e, ...t } = n.attrs;
		n.attrs = Object.keys(t).length > 0 ? t : void 0;
	}
	return Array.isArray(n.content) && (n.content = n.content.map(o)), n;
}, s = (e) => e.map(o), c = (e) => i(e) ? e.type : void 0, l = (e, n) => {
	let r = o(e);
	return r.type && t(r.type) ? a(r, n) : r;
}, u = (e, t) => t.length === 0 ? n.empty : n.fromArray(t.map((t) => e.schema.nodeFromJSON(t))), d = (e, t) => new r(u(e, t), 0, 0), f = (t, n) => {
	let r = e(t, n);
	if (!r) throw new m(n);
	return r;
}, p = (e) => e.isEmpty ? {
	json: null,
	html: null
} : {
	json: e.getJSON(),
	html: e.getHTML()
}, m = class extends Error {
	code = "target_not_found";
	targetId;
	constructor(e) {
		super(`Could not find block node ${e} in the current editor document.`), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, h = class extends Error {
	code = "unsupported_patch_type";
	patchType;
	constructor(e) {
		super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
	}
}, g = (e, t) => {
	switch (t.type) {
		case "top_level_prepend": {
			let n = d(e, s(t.blocks)), r = e.state.tr.replace(0, 0, n);
			return r.docChanged && e.view.dispatch(r), p(e);
		}
		case "top_level_append": {
			let n = d(e, s(t.blocks)), r = e.state.doc.content.size, i = e.state.tr.replace(r, r, n);
			return i.docChanged && e.view.dispatch(i), p(e);
		}
		case "insert_before": {
			let n = f(e, t.targetId), r = d(e, s(t.blocks)), i = e.state.tr.replace(n.pos, n.pos, r);
			return i.docChanged && e.view.dispatch(i), p(e);
		}
		case "insert_after": {
			let n = f(e, t.targetId), r = n.pos + n.node.nodeSize, i = d(e, s(t.blocks)), a = e.state.tr.replace(r, r, i);
			return a.docChanged && e.view.dispatch(a), p(e);
		}
		case "replace_block": {
			let n = f(e, t.targetId), r = e.schema.nodeFromJSON(l(t.block, t.targetId)), i = e.state.tr.replaceWith(n.pos, n.pos + n.node.nodeSize, r);
			return i.docChanged && e.view.dispatch(i), p(e);
		}
		case "replace_content": {
			let n = f(e, t.targetId), r = e.state.tr.replace(n.pos + 1, n.pos + n.node.nodeSize - 1, d(e, s(t.content)));
			return r.docChanged && e.view.dispatch(r), p(e);
		}
		case "delete_block": {
			let n = f(e, t.targetId), r = e.state.tr.delete(n.pos, n.pos + n.node.nodeSize);
			return r.docChanged && e.view.dispatch(r), p(e);
		}
	}
	throw new h(c(t));
};
//#endregion
export { m as NotesTextEditorPatchTargetNotFoundError, h as NotesTextEditorUnsupportedPatchTypeError, g as applyPageDocumentPatch, p as getNotesTextEditorSnapshot };
