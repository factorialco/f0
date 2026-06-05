import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { Skeleton as r } from "../../../../ui/skeleton.js";
function o() {
  return /* @__PURE__ */ a(
    "div",
    {
      className: "flex items-center gap-1",
      role: "status",
      "aria-label": "Loading filters",
      children: [
        /* @__PURE__ */ e(r, { className: "h-8 w-24 rounded-md" }),
        /* @__PURE__ */ e(r, { className: "h-8 w-20 rounded-md" }),
        /* @__PURE__ */ e(r, { className: "h-8 w-20 rounded-md" })
      ]
    }
  );
}
export {
  o as FilterBarSkeleton
};
