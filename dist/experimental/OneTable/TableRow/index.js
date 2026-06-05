import { jsx as n } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { TableRow as b } from "../../../ui/table.js";
import { cn as f } from "../../../lib/utils.js";
const c = 40, i = s(
  ({ children: o, selected: r, className: a, sticky: e }, t) => /* @__PURE__ */ n(
    b,
    {
      ref: t,
      className: f(
        r && "bg-f1-background-selected hover:bg-f1-background-selected",
        a,
        "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']",
        "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring",
        "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring",
        e && "hover:bg-f1-background-hover! sticky z-20 bg-f1-background"
      ),
      style: e ? { top: c } : void 0,
      children: o
    }
  )
);
i.displayName = "TableRow";
export {
  c as TABLE_ROW_STICKY_TOP_OFFSET,
  i as TableRow
};
