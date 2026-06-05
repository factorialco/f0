import { Slice as y, Fragment as u } from "../../../node_modules/.pnpm/prosemirror-model@1.25.0/node_modules/prosemirror-model/dist/index.js";
import { getBlockById as m, isBlockNodeType as h } from "../CoreEditor/Extensions/BlockIdExtension/index.js";
const d = (t) => typeof t == "object" && t !== null && !Array.isArray(t), f = (t, e) => {
  const r = d(t.attrs) ? t.attrs : {};
  return {
    ...t,
    attrs: {
      ...r,
      id: e
    }
  };
}, l = (t) => {
  const e = { ...t };
  if (e.type && h(e.type) && d(e.attrs) && "id" in e.attrs) {
    const { id: r, ...s } = e.attrs;
    e.attrs = Object.keys(s).length > 0 ? s : void 0;
  }
  return Array.isArray(e.content) && (e.content = e.content.map(l)), e;
}, a = (t) => t.map(l), N = (t) => d(t) ? t.type : void 0, w = (t, e) => {
  const r = l(t);
  return r.type && h(r.type) ? f(r, e) : r;
}, T = (t, e) => e.length === 0 ? u.empty : u.fromArray(
  e.map((r) => t.schema.nodeFromJSON(r))
), p = (t, e) => new y(T(t, e), 0, 0), i = (t, e) => {
  const r = m(t, e);
  if (!r)
    throw new b(e);
  return r;
}, c = (t) => t.isEmpty ? { json: null, html: null } : { json: t.getJSON(), html: t.getHTML() };
class b extends Error {
  code = "target_not_found";
  targetId;
  constructor(e) {
    super(
      `Could not find block node ${e} in the current editor document.`
    ), this.name = "NotesTextEditorPatchTargetNotFoundError", this.targetId = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
class _ extends Error {
  code = "unsupported_patch_type";
  patchType;
  constructor(e) {
    super(`Unsupported NotesTextEditor patch type: ${String(e)}`), this.name = "NotesTextEditorUnsupportedPatchTypeError", this.patchType = e, Object.setPrototypeOf(this, new.target.prototype);
  }
}
const I = (t, e) => {
  switch (e.type) {
    case "top_level_prepend": {
      const s = p(t, a(e.blocks)), n = t.state.tr.replace(0, 0, s);
      return n.docChanged && t.view.dispatch(n), c(t);
    }
    case "top_level_append": {
      const s = p(t, a(e.blocks)), n = t.state.doc.content.size, o = t.state.tr.replace(n, n, s);
      return o.docChanged && t.view.dispatch(o), c(t);
    }
    case "insert_before": {
      const s = i(t, e.targetId), n = p(t, a(e.blocks)), o = t.state.tr.replace(s.pos, s.pos, n);
      return o.docChanged && t.view.dispatch(o), c(t);
    }
    case "insert_after": {
      const s = i(t, e.targetId), n = s.pos + s.node.nodeSize, o = p(t, a(e.blocks)), g = t.state.tr.replace(n, n, o);
      return g.docChanged && t.view.dispatch(g), c(t);
    }
    case "replace_block": {
      const s = i(t, e.targetId), n = t.schema.nodeFromJSON(
        w(e.block, e.targetId)
      ), o = t.state.tr.replaceWith(
        s.pos,
        s.pos + s.node.nodeSize,
        n
      );
      return o.docChanged && t.view.dispatch(o), c(t);
    }
    case "replace_content": {
      const s = i(t, e.targetId), n = t.state.tr.replace(
        s.pos + 1,
        s.pos + s.node.nodeSize - 1,
        p(t, a(e.content))
      );
      return n.docChanged && t.view.dispatch(n), c(t);
    }
    case "delete_block": {
      const s = i(t, e.targetId), n = t.state.tr.delete(
        s.pos,
        s.pos + s.node.nodeSize
      );
      return n.docChanged && t.view.dispatch(n), c(t);
    }
  }
  const r = e;
  throw new _(
    N(r)
  );
};
export {
  b as NotesTextEditorPatchTargetNotFoundError,
  _ as NotesTextEditorUnsupportedPatchTypeError,
  I as applyPageDocumentPatch,
  c as getNotesTextEditorSnapshot
};
