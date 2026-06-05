import { jsxs as l, jsx as c } from "react/jsx-runtime";
import { cva as x } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { forwardRef as k, useMemo as i } from "react";
import { Dropdown as y } from "../../../../experimental/Navigation/Dropdown/index.js";
import { cn as B } from "../../../../lib/utils.js";
const j = x({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), A = (e) => (e || []).map((t) => t.items).reduce((t, o) => (t.length > 0 && t.push({ type: "separator" }), t.push(...o), t), []), D = (e) => {
  const t = (o) => "onClick" in o;
  return Array.isArray(e) ? e.every(t) ? [
    {
      items: e
    }
  ] : e : [e];
}, d = k(
  ({
    children: e,
    variant: t = "default",
    className: o,
    draggable: f = !1,
    onDragStart: u,
    onDragEnd: m,
    onDrop: p,
    dragId: h,
    primaryAction: n,
    ...r
  }, v) => {
    const s = i(
      () => D(r.actions || []),
      [r.actions]
    ), a = i(
      () => s.flatMap((w) => w.items),
      [s]
    ), g = i(
      () => a.length > 0 || !!n,
      [a, n]
    );
    return /* @__PURE__ */ l(
      "div",
      {
        ref: v,
        className: B(j({ variant: t }), "relative", o),
        draggable: f,
        onDragStart: u,
        onDragEnd: m,
        onDrop: p,
        "data-drag-id": h,
        ...r,
        children: [
          g && /* @__PURE__ */ l("div", { className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4", children: [
            !!n && n,
            a.length > 0 && /* @__PURE__ */ c(
              y,
              {
                items: A(s),
                "data-testid": "actions-dropdown"
              }
            )
          ] }),
          /* @__PURE__ */ c("div", { "data-testid": "content", children: e })
        ]
      }
    );
  }
);
d.displayName = "Block";
d.__isPageLayoutBlock = !0;
export {
  d as Block,
  A as actionsToLayoutBlockActionItems
};
