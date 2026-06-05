import { jsx as s, jsxs as m } from "react/jsx-runtime";
import { cva as d } from "../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import g from "../../../icons/app/Check.js";
import { cn as v, focusRing as h } from "../../../lib/utils.js";
import { Counter as y } from "../../Counter/index.js";
import { useF0Wizard as b } from "./WizardProvider.js";
const k = d({
  base: "flex-1 text-base font-medium leading-5 tracking-[-0.005em]",
  variants: {
    state: {
      active: "text-f1-foreground",
      completed: "text-f1-foreground-secondary",
      upcoming: "text-f1-foreground"
    }
  }
});
function S(r, e, n) {
  return r === e ? "active" : n ? "completed" : "upcoming";
}
function w({ state: r, index: e }) {
  return r === "completed" ? /* @__PURE__ */ s("span", { className: "flex h-5 w-5 min-w-5 shrink-0 items-center justify-center rounded-xs bg-f1-background-secondary text-f1-foreground-secondary", children: /* @__PURE__ */ s(g, { className: "h-3 w-3" }) }) : /* @__PURE__ */ s(
    y,
    {
      value: e + 1,
      type: r === "active" ? "selected" : "default",
      size: "md"
    }
  );
}
function x() {
  const { steps: r, currentStep: e, goToStep: n, allowStepSkipping: l } = b();
  return /* @__PURE__ */ s("nav", { "aria-label": "Wizard steps", className: "flex flex-col gap-1.5 p-1", children: r.map((i, t) => {
    const f = t < e || i.isCompleted?.() === !0, c = S(t, e, f), u = r[e]?.hasErrors?.() === !0, p = t > e && r.slice(e, t).some((a) => a.hasErrors?.() === !0);
    let o = t !== e && !u && !p && r.slice(0, t).every((a) => a.isCompleted?.() !== !1);
    return o && !l && t > e + 1 && (o = !1), /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        onClick: () => {
          o && n(t);
        },
        onKeyDown: (a) => {
          (a.key === "Enter" || a.key === " ") && o && (a.preventDefault(), n(t));
        },
        disabled: !o && t !== e,
        "aria-current": t === e ? "step" : void 0,
        className: v(
          h(),
          "flex cursor-pointer items-center gap-2 rounded p-2 text-left",
          c === "active" && "bg-f1-background-selected",
          o && "hover:bg-f1-background-secondary-hover",
          !o && t !== e && "cursor-default opacity-70"
        ),
        children: [
          /* @__PURE__ */ s(w, { state: c, index: t }),
          /* @__PURE__ */ s("span", { className: k({ state: c }), children: i.title })
        ]
      },
      t
    );
  }) });
}
export {
  x as WizardSteps
};
