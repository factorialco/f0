import { jsx as c, Fragment as y } from "react/jsx-runtime";
import { editableCellMap as I } from "../consts.js";
import { useEditableRow as P } from "../context/EditableRowContext.js";
import { NonEditableCell as x } from "./cells/status/NonEditableCell.js";
function m(r, i) {
  if (i.id !== void 0 && i.id in r) {
    const n = r[i.id];
    return n == null ? "" : String(n);
  }
  const t = i.render(r);
  return typeof t == "string" ? t : typeof t == "number" ? String(t) : "";
}
function S({
  column: r,
  children: i,
  isLastColumn: t
}) {
  const n = P();
  if (!n)
    return /* @__PURE__ */ c(y, { children: i });
  const {
    localItem: o,
    cellErrors: C,
    cellLoading: g,
    handleCellChange: h,
    batchCellChanges: b
  } = n, e = r, p = e.editType?.(o), v = e.id !== void 0, u = (l, f) => {
    if (e.id !== void 0) {
      const a = e.formula;
      if (a) {
        const s = {};
        a({
          value: l,
          item: o,
          selectedItem: f?.selectedItem,
          setCellValue: (d, E) => {
            s[d] = E;
          }
        }), b({
          [e.id]: l,
          ...s
        });
      } else
        h(e.id, l);
    }
  };
  if (v && p) {
    const l = I[p], f = m(o, e);
    if (l) {
      const a = e.id ? C[e.id] : void 0, s = e.id ? g[e.id] ?? !1 : !1;
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- stops cell navigation (href/onClick) from bubbling to the row after child interactions complete
        /* @__PURE__ */ c(
          "div",
          {
            className: "pointer-events-auto h-full",
            onClick: (d) => d.stopPropagation(),
            onMouseDown: (d) => d.stopPropagation(),
            children: /* @__PURE__ */ c(
              l,
              {
                editableColumn: e,
                value: f,
                inputPlaceholder: e.inputPlaceholder,
                error: a,
                item: o,
                isLastColumn: t,
                loading: s,
                onChange: u,
                hint: e.cellHint?.(o)
              }
            )
          }
        )
      );
    }
  }
  return /* @__PURE__ */ c(
    x,
    {
      editableColumn: e,
      item: o,
      value: m(o, e),
      isLastColumn: t,
      onChange: u
    }
  );
}
export {
  S as EditableCellRenderer
};
