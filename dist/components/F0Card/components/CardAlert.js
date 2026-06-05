import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { forwardRef as c } from "react";
import { F0Icon as d } from "../../F0Icon/index.js";
import m from "../../../icons/app/AlertCircle.js";
import p from "../../../icons/app/CheckCircle.js";
import u from "../../../icons/app/Cross.js";
import g from "../../../icons/app/InfoCircle.js";
import "../../../icons/app/Menu.js";
import b from "../../../icons/app/Warning.js";
import { useI18n as x } from "../../../lib/providers/i18n/i18n-provider.js";
import { cn as a } from "../../../lib/utils.js";
import { F0Button as f } from "../../F0Button/F0Button.js";
const v = {
  info: "bg-f1-background-info",
  warning: "bg-f1-background-warning",
  critical: "bg-f1-background-critical",
  positive: "bg-f1-background-positive"
}, D = {
  info: "hsl(var(--info-50) / 0.12)",
  warning: "hsl(var(--warning-50) / 0.12)",
  critical: "hsl(var(--critical-50) / 0.12)",
  positive: "hsl(var(--positive-50) / 0.12)"
}, w = {
  info: "text-f1-foreground-info",
  warning: "text-f1-foreground-warning",
  critical: "text-f1-foreground-critical",
  positive: "text-f1-foreground-positive"
}, h = {
  critical: "critical",
  warning: "warning",
  info: "info",
  positive: "positive"
}, C = {
  critical: m,
  warning: b,
  info: g,
  positive: p
};
function k({ onClose: e }) {
  const { actions: o } = x();
  return /* @__PURE__ */ r(
    f,
    {
      icon: u,
      label: o.close,
      hideLabel: !0,
      variant: "ghost",
      size: "md",
      onClick: e,
      type: "button"
    }
  );
}
function R({
  variant: e,
  title: o,
  icon: t,
  dismissible: n = !1,
  onDismiss: l,
  action: i
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      role: e === "critical" || e === "warning" ? "alert" : "status",
      className: "flex items-center gap-1 rounded-t-xl px-3 py-1.5",
      children: [
        /* @__PURE__ */ r("div", { className: "flex h-5 w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ r(
          d,
          {
            icon: t ?? C[e],
            size: "md",
            color: h[e]
          }
        ) }),
        /* @__PURE__ */ r(
          "span",
          {
            className: a(
              "flex-1 text-base font-medium",
              w[e]
            ),
            children: o
          }
        ),
        i ? /* @__PURE__ */ r(
          f,
          {
            label: i.label,
            variant: "outline",
            size: "sm",
            disabled: i.disabled,
            ..."href" in i ? { href: i.href } : { onClick: i.onClick, type: "button" }
          }
        ) : n && l && /* @__PURE__ */ r(k, { onClose: l })
      ]
    }
  );
}
const F = c(function({ alert: o, fullHeight: t, children: n }, l) {
  return o.visible !== !1 ? /* @__PURE__ */ s(
    "div",
    {
      ref: l,
      className: a(
        "rounded-xl",
        v[o.variant],
        t && "flex h-full flex-col"
      ),
      children: [
        /* @__PURE__ */ r(R, { ...o }),
        /* @__PURE__ */ r("div", { className: a(t && "flex flex-1 flex-col"), children: n })
      ]
    }
  ) : /* @__PURE__ */ r("div", { ref: l, className: a(t && "h-full"), children: n });
});
F.displayName = "CardAlertWrapper";
export {
  F as CardAlertWrapper,
  D as alertBorderColor
};
