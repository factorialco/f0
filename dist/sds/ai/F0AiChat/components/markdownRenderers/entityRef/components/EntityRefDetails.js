import { jsx as l, jsxs as t } from "react/jsx-runtime";
function i({ rows: a }) {
  return a.length === 0 ? null : /* @__PURE__ */ l("div", { className: "flex flex-col gap-2", children: a.map((e, n) => /* @__PURE__ */ t("div", { className: "flex flex-col", children: [
    e.label && /* @__PURE__ */ l("p", { className: "text-f1-foreground-secondary", children: e.label }),
    /* @__PURE__ */ l("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: e.value })
  ] }, e.label ?? n)) });
}
export {
  i as EntityRefDetails
};
