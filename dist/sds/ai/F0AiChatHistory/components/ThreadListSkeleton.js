import { jsx as e, jsxs as r } from "react/jsx-runtime";
function d() {
  return /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 py-3", children: Array.from({ length: 5 }).map((n, a) => /* @__PURE__ */ r(
    "div",
    {
      className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2",
      children: [
        /* @__PURE__ */ e("div", { className: "h-5 w-full animate-pulse rounded bg-f1-background-secondary" }),
        /* @__PURE__ */ e("div", { className: "h-5 w-6 animate-pulse rounded bg-f1-background-secondary" })
      ]
    },
    a
  )) });
}
export {
  d as ThreadListSkeleton
};
