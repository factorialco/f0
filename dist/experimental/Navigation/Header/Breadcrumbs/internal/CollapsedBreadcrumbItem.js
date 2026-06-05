import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { forwardRef as t } from "react";
import { DropdownInternal as n } from "../../../Dropdown/internal.js";
import { BreadcrumbItem as a } from "../../../../../ui/breadcrumb.js";
import { BreadcrumbSeparator as i } from "./BreadcrumbSeparator.js";
const s = t(({ className: e, items: o }, m) => /* @__PURE__ */ r(a, { ref: m, className: e, children: /* @__PURE__ */ d("div", { className: "flex items-center", children: [
  /* @__PURE__ */ r(i, {}),
  /* @__PURE__ */ r(n, { items: o, children: /* @__PURE__ */ r("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
s.displayName = "CollapsedBreadcrumbItem";
export {
  s as CollapsedBreadcrumbItem
};
