import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { forwardRef as N } from "react";
import { F0ActionBar as c } from "../../../components/F0ActionBar/index.js";
import { F0Icon as k } from "../../../components/F0Icon/index.js";
import w from "../../../icons/app/AlertCircle.js";
import R from "../../../icons/app/ChevronDown.js";
import y from "../../../icons/app/ChevronUp.js";
import "../../../icons/app/Menu.js";
import { F0Button as m } from "../../../components/F0Button/F0Button.js";
const j = N(
  function({
    isActionBar: a,
    isDirty: s,
    actionBarStatus: i,
    hasErrors: r,
    errorCount: o,
    resolvedActionBarLabel: n,
    submitLabel: d,
    submitIcon: f,
    discardableChanges: p,
    discardLabel: g,
    discardIcon: u,
    issuesOneLabel: v,
    issuesOtherLabel: F,
    onSubmit: b,
    onDiscard: x,
    goToPreviousError: h,
    goToNextError: A
  }, t) {
    return a ? /* @__PURE__ */ e(
      c,
      {
        ref: t,
        isOpen: s || i === "loading" || i === "success",
        variant: "light",
        status: r ? void 0 : i,
        label: n,
        leftContent: r ? /* @__PURE__ */ l("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ l("div", { className: "flex items-center gap-0.5", children: [
            /* @__PURE__ */ e(k, { icon: w, size: "md", color: "critical" }),
            /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground-critical", children: o === 1 ? v.replace("{{count}}", String(o)) : F.replace(
              "{{count}}",
              String(o)
            ) })
          ] }),
          o > 1 && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              m,
              {
                icon: y,
                onClick: h,
                variant: "outline",
                label: "Go to previous error",
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ e(
              m,
              {
                icon: R,
                onClick: A,
                variant: "outline",
                label: "Go to next error",
                hideLabel: !0
              }
            )
          ] })
        ] }) : void 0,
        primaryActions: [
          {
            label: d,
            icon: f,
            onClick: b,
            disabled: r
          }
        ],
        secondaryActions: p ? [
          {
            label: g,
            icon: u,
            onClick: x
          }
        ] : []
      }
    ) : /* @__PURE__ */ e(
      c,
      {
        ref: t,
        isOpen: i === "loading" || i === "success",
        variant: "light",
        status: i,
        label: n
      }
    );
  }
);
j.displayName = "FormActionBar";
export {
  j as FormActionBar
};
