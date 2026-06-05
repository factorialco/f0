import { jsx as t } from "react/jsx-runtime";
import * as o from "react";
import { cn as l } from "../lib/utils.js";
const s = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t("div", { className: "relative w-full", children: /* @__PURE__ */ t(
  "table",
  {
    ref: r,
    className: l(
      "w-full caption-bottom border-spacing-0 border-0 border-none text-base",
      e
    ),
    ...a
  }
) }));
s.displayName = "Table";
const f = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "thead",
  {
    ref: r,
    className: l(
      "relative min-h-10 [&_tr]:hover:bg-transparent",
      "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']",
      e
    ),
    ...a
  }
));
f.displayName = "TableHeader";
const n = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t("tbody", { ref: r, className: l("border-0", e), ...a }));
n.displayName = "TableBody";
const b = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "tfoot",
  {
    ref: r,
    className: l(
      "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...a
  }
));
b.displayName = "TableFooter";
const d = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "tr",
  {
    ref: r,
    className: l(
      "group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover",
      e
    ),
    ...a
  }
));
d.displayName = "TableRow";
const c = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "th",
  {
    ref: r,
    className: l(
      "relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6",
      "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover",
      "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent",
      e
    ),
    ...a
  }
));
c.displayName = "TableHead";
const i = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "td",
  {
    ref: r,
    className: l(
      "relative min-h-[48px] whitespace-nowrap px-3 py-2 align-top first:pl-6 last:pr-6",
      "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2",
      e
    ),
    ...a
  }
));
i.displayName = "TableCell";
const p = o.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "caption",
  {
    ref: r,
    className: l("text-muted-foreground mt-4 text-sm", e),
    ...a
  }
));
p.displayName = "TableCaption";
export {
  s as Table,
  n as TableBody,
  p as TableCaption,
  i as TableCell,
  b as TableFooter,
  c as TableHead,
  f as TableHeader,
  d as TableRow
};
