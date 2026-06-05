import { jsx as r } from "react/jsx-runtime";
import { cn as t } from "../../../../lib/utils.js";
function u({
  value: o,
  onChange: l,
  onBlur: n,
  config: s
}) {
  const { options: c, disabled: d } = s, i = (e) => {
    d || (l(e), n());
  };
  return /* @__PURE__ */ r("div", { className: "grid grid-cols-3 gap-3 md:grid-cols-5", children: c.map((e) => /* @__PURE__ */ r(
    "div",
    {
      className: t(
        "flex h-10 min-w-20 items-center justify-center rounded-md border border-solid border-f1-border text-center font-medium",
        d ? "cursor-not-allowed" : "cursor-pointer",
        o === e.value && "border-f1-border-selected bg-f1-background-selected-secondary"
      ),
      onClick: () => i(e.value),
      children: /* @__PURE__ */ r("span", { className: "text-base font-medium", children: e.label })
    },
    e.value
  )) });
}
export {
  u as RatingQuestionField
};
