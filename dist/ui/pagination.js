import { jsx as r } from "react/jsx-runtime";
import * as s from "react";
import { F0Icon as i } from "../components/F0Icon/index.js";
import d from "../icons/app/ChevronLeft.js";
import l from "../icons/app/ChevronRight.js";
import c from "../icons/app/EllipsisHorizontal.js";
import "../icons/app/Menu.js";
import { cn as a, focusRing as f } from "../lib/utils.js";
const m = ({ className: e, ...o }) => /* @__PURE__ */ r(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: a("flex w-full justify-center", e),
    ...o
  }
);
m.displayName = "Pagination";
const g = s.forwardRef(({ className: e, ...o }, n) => /* @__PURE__ */ r(
  "div",
  {
    ref: n,
    className: a("flex list-none flex-row items-center gap-1", e),
    ...o
  }
));
g.displayName = "PaginationContent";
const b = s.forwardRef(({ className: e, ...o }, n) => /* @__PURE__ */ r("div", { ref: n, className: a("", e), ...o }));
b.displayName = "PaginationItem";
const t = ({
  className: e,
  isActive: o,
  ...n
}) => /* @__PURE__ */ r(
  "a",
  {
    "aria-current": o ? "page" : void 0,
    className: a(
      "flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover",
      o && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover",
      f(),
      e
    ),
    ...n
  }
);
t.displayName = "PaginationLink";
const p = ({
  className: e,
  ...o
}) => /* @__PURE__ */ r(
  t,
  {
    role: "button",
    "aria-label": "Go to previous page",
    className: a(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      e
    ),
    ...o,
    children: /* @__PURE__ */ r(i, { icon: d })
  }
);
p.displayName = "PaginationPrevious";
const u = ({
  className: e,
  ...o
}) => /* @__PURE__ */ r(
  t,
  {
    role: "button",
    "aria-label": "Go to next page",
    className: a(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      e
    ),
    ...o,
    children: /* @__PURE__ */ r(i, { icon: l })
  }
);
u.displayName = "PaginationNext";
const v = ({
  className: e,
  ...o
}) => /* @__PURE__ */ r(
  "span",
  {
    role: "presentation",
    "aria-hidden": !0,
    className: a("flex h-9 w-9 items-center justify-center", e),
    ...o,
    children: /* @__PURE__ */ r(i, { icon: c })
  }
);
v.displayName = "PaginationEllipsis";
export {
  m as Pagination,
  g as PaginationContent,
  v as PaginationEllipsis,
  b as PaginationItem,
  t as PaginationLink,
  u as PaginationNext,
  p as PaginationPrevious
};
