import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useI18n as o } from "../../../../lib/providers/i18n/i18n-provider.js";
const d = () => {
  const { t: r } = o();
  return /* @__PURE__ */ s("div", { className: "mt-8 ml-7 flex flex-row items-center gap-4", children: [
    /* @__PURE__ */ e("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
    /* @__PURE__ */ e("span", { className: "text-base font-medium text-f1-foreground-secondary", children: r("surveyFormBuilder.labels.endOfSection") }),
    /* @__PURE__ */ e("div", { className: "h-px flex-1 bg-f1-border-secondary" })
  ] });
};
export {
  d as EndOfSectionDivider
};
