import { jsx as e, jsxs as i } from "react/jsx-runtime";
import { cva as f } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { useRef as u } from "react";
import { F0AvatarAlert as p } from "../avatars/F0AvatarAlert/index.js";
import { F0AvatarIcon as x } from "../avatars/F0AvatarIcon/index.js";
import g from "../../icons/app/Cross.js";
import "../../icons/app/Menu.js";
import b from "../../icons/app/Placeholder.js";
import { withDataTestId as h } from "../../lib/data-testid/index.js";
import { useI18n as v } from "../../lib/providers/i18n/i18n-provider.js";
import { cn as s } from "../../lib/utils.js";
import { F0Link as w } from "../F0Link/F0Link.js";
import { F0Button as c } from "../F0Button/F0Button.js";
const k = f({
  base: "w-full rounded-md p-2 pr-3 text-f1-foreground",
  variants: {
    variant: {
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning",
      critical: "bg-f1-background-critical",
      neutral: "bg-f1-background-tertiary",
      positive: "bg-f1-background-positive"
    }
  },
  defaultVariants: {
    variant: "neutral"
  }
}), N = f({
  base: "font-medium",
  variants: {
    variant: {
      info: "text-f1-foreground-info",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      neutral: "text-f1-foreground",
      positive: "text-f1-foreground-positive"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), F = ({ onClose: n }) => {
  const { actions: t } = v();
  return /* @__PURE__ */ e(
    c,
    {
      icon: g,
      label: t.close,
      hideLabel: !0,
      variant: "outline",
      size: "sm",
      onClick: n,
      type: "button"
    }
  );
}, y = ({
  title: n,
  description: t,
  action: a,
  link: l,
  icon: m,
  variant: r = "neutral",
  onClose: o
}) => {
  const d = u(null);
  return /* @__PURE__ */ e("div", { ref: d, className: "@container", children: /* @__PURE__ */ e(
    "div",
    {
      role: r === "critical" || r === "warning" ? "alert" : "status",
      className: s(k({ variant: r }), o && "pr-2"),
      children: /* @__PURE__ */ i("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col items-start gap-3 @xs:flex-row @xs:items-center @xs:justify-between", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: s(
                "flex flex-row gap-2",
                !t && "items-center"
              ),
              children: [
                /* @__PURE__ */ e("div", { className: "h-6 w-6 flex-shrink-0", children: r === "neutral" ? /* @__PURE__ */ e(x, { icon: m || b, size: "sm" }) : /* @__PURE__ */ e(p, { type: r, size: "sm" }) }),
                /* @__PURE__ */ i("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ e("p", { className: N({ variant: r }), children: n }),
                  t && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: t })
                ] })
              ]
            }
          ),
          (a || l) && /* @__PURE__ */ i("div", { className: "flex flex-shrink-0 flex-row items-center gap-3 pl-8 @xs:pl-0", children: [
            l && /* @__PURE__ */ e(
              w,
              {
                href: l.href,
                target: "_blank",
                variant: "link",
                size: "sm",
                children: l.label
              }
            ),
            a && /* @__PURE__ */ e(
              c,
              {
                label: a.label,
                variant: "outline",
                onClick: a.onClick,
                size: "sm",
                disabled: a.disabled,
                type: "button"
              }
            )
          ] })
        ] }),
        o && /* @__PURE__ */ e("div", { className: "flex-shrink-0 self-start @xs:self-center", children: /* @__PURE__ */ e(F, { onClose: o }) })
      ] })
    }
  ) });
}, E = h(y);
export {
  E as F0Alert
};
