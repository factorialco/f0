import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { Fragment as l } from "react";
import { Skeleton as a } from "../../ui/skeleton.js";
import { cn as s } from "../../lib/utils.js";
const f = ({
  items: d = 4
}) => /* @__PURE__ */ r(
  "div",
  {
    "aria-busy": "true",
    "aria-live": "polite",
    className: s(
      "flex flex-col rounded-md border border-solid border-f1-border-secondary",
      "overflow-hidden bg-f1-background"
    ),
    children: Array.from({ length: d }).map((m, e) => /* @__PURE__ */ o(l, { children: [
      e > 0 && /* @__PURE__ */ r("div", { className: "h-px w-full bg-f1-border-secondary" }),
      /* @__PURE__ */ o("div", { className: "flex items-center gap-3 px-4 py-3", children: [
        /* @__PURE__ */ r(a, { className: "h-4 flex-1 max-w-48" }),
        /* @__PURE__ */ r(a, { className: "h-7 w-7 shrink-0 rounded" })
      ] })
    ] }, e))
  }
);
export {
  f as F0AccordionSkeleton
};
