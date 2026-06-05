import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { cva as x } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0Icon as h } from "../../../F0Icon/index.js";
import { isSecondaryDropdownAction as k } from "../../../../experimental/Information/Headers/BaseHeader/index.js";
import { Metadata as w } from "../../../../experimental/Information/Headers/Metadata/index.js";
import { Dropdown as C } from "../../../../experimental/Navigation/Dropdown/index.js";
import { F0ButtonDropdown as b } from "../../../F0ButtonDropdown/F0ButtonDropdown.js";
import { F0Button as u } from "../../../F0Button/F0Button.js";
import { OneEllipsis as V } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const N = x({
  base: "flex flex-row items-center justify-center gap-2 p-3",
  variants: {
    variant: {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      neutral: "bg-f1-background-tertiary text-f1-foreground",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), g = (e) => e.isVisible !== !1, j = (e) => "isVisible" in e ? e.isVisible !== !1 : !0, D = (e) => !!e && "items" in e, O = (e) => !!e && "label" in e && !("items" in e), M = ({
  primaryAction: e,
  secondaryActions: m = [],
  metadata: t,
  otherActions: v = [],
  banner: s
}) => {
  const a = m.filter(g), d = v.filter(j), o = e && g(e), f = a.length > 0, r = d.length > 0, p = f || r || o;
  return /* @__PURE__ */ n("div", { className: "flex flex-col", children: [
    (t && t.length > 0 || p) && /* @__PURE__ */ n("div", { className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center", children: [
      t && t.length > 0 && /* @__PURE__ */ l(w, { items: t }),
      /* @__PURE__ */ n("div", { className: "flex flex-shrink-0 flex-row items-center gap-2", children: [
        r && /* @__PURE__ */ l(C, { items: d }),
        a.map(
          (i, c) => k(i) ? /* @__PURE__ */ l(
            b,
            {
              items: i.items,
              onClick: i.onClick,
              variant: i.variant ?? "outline",
              value: i.value,
              size: "md",
              disabled: i.disabled,
              tooltip: i.tooltip,
              loading: i.loading
            },
            c
          ) : /* @__PURE__ */ l(
            u,
            {
              onClick: i.onClick,
              variant: i.variant || "outline",
              label: i.label,
              icon: i.icon,
              hideLabel: i.hideLabel,
              disabled: i.disabled,
              tooltip: i.tooltip,
              loading: i.loading
            },
            c
          )
        ),
        o && (f || r) && /* @__PURE__ */ l("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
        o && O(e) && /* @__PURE__ */ l(
          u,
          {
            label: e.label,
            onClick: e.onClick,
            variant: "default",
            icon: e.icon,
            disabled: e.disabled,
            tooltip: e.tooltip
          }
        ),
        o && D(e) && /* @__PURE__ */ l(
          b,
          {
            items: e.items,
            onClick: e.onClick,
            variant: "default",
            value: e.value,
            disabled: e.disabled,
            tooltip: e.tooltip
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ n("div", { className: N({ variant: s.variant }), children: [
      /* @__PURE__ */ l(h, { icon: s.icon }),
      /* @__PURE__ */ l(V, { children: s.title })
    ] })
  ] });
};
export {
  M as default
};
