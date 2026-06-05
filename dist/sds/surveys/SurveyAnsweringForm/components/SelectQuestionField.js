import { jsx as c, jsxs as x } from "react/jsx-runtime";
import { F0Icon as p } from "../../../../components/F0Icon/index.js";
import y from "../../../../icons/app/CheckCircleLine.js";
import C from "../../../../icons/app/Cross.js";
import "../../../../icons/app/Menu.js";
import { cn as u } from "../../../../lib/utils.js";
import { F0Checkbox as N } from "../../../../components/F0Checkbox/F0Checkbox.js";
function A({ checked: r }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "aria-hidden": "true",
      className: u(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        r ? "bg-f1-background-selected-bold" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: r && /* @__PURE__ */ c("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function L({
  value: r,
  onChange: n,
  onBlur: d,
  config: m
}) {
  const { options: o, type: l, required: f, disabled: i, showAnswerValidation: h } = m, b = o.some((e) => e.correct), g = !!h && b, w = (e) => {
    if (i || l !== "select") return;
    n(!f && r === e ? void 0 : e), d();
  }, a = (e) => {
    if (i || l !== "multi-select") return;
    const t = Array.isArray(r) ? r : [], s = t.includes(e) ? t.filter((v) => v !== e) : [...t, e];
    n(s), d();
  }, k = (e) => {
    l === "select" ? w(e) : a(e);
  };
  return /* @__PURE__ */ c("div", { className: "-mx-0.5 flex flex-col items-start", children: o.map((e) => {
    const t = l === "select" ? r === e.value : Array.isArray(r) && r.includes(e.value);
    return /* @__PURE__ */ x(
      "div",
      {
        className: u(
          "flex min-h-9 w-full items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5",
          i ? "cursor-not-allowed" : "cursor-pointer hover:bg-f1-background-hover"
        ),
        onClick: (s) => {
          i || l === "multi-select" && s.target.closest("input") || k(e.value);
        },
        children: [
          l === "multi-select" ? /* @__PURE__ */ c(
            N,
            {
              title: e.label,
              checked: !!t,
              onCheckedChange: () => a(e.value),
              hideLabel: !0
            }
          ) : /* @__PURE__ */ c(A, { checked: !!t }),
          /* @__PURE__ */ c("p", { className: "flex-1 font-medium", children: e.label }),
          g ? /* @__PURE__ */ c("div", { className: "min-h-8 p-1", children: /* @__PURE__ */ c(
            p,
            {
              icon: e.correct ? y : C,
              color: e.correct ? "positive" : "critical",
              "aria-hidden": !0
            }
          ) }) : /* @__PURE__ */ c("div", { className: "min-h-8" })
        ]
      },
      e.value
    );
  }) });
}
export {
  L as SelectQuestionField
};
