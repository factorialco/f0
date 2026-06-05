import { jsxs as i, jsx as d } from "react/jsx-runtime";
import { Fragment as k } from "react";
import { F0Avatar as $ } from "../../../../components/avatars/F0Avatar/index.js";
import { Description as K } from "./Description.js";
import { Metadata as N } from "../Metadata/index.js";
import { MobileDropdown as M, Dropdown as P } from "../../../Navigation/Dropdown/index.js";
import { cn as b } from "../../../../lib/utils.js";
import { F0Button as h } from "../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as g } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
const u = (s) => s.isVisible !== !1;
function R({
  title: s,
  avatar: r,
  deactivated: C,
  description: m,
  primaryAction: e,
  secondaryActions: z = [],
  otherActions: D = [],
  status: a,
  metadata: j = [],
  showBottomBorder: L = !1
}) {
  const f = [
    a && {
      label: a.label,
      value: {
        type: "status",
        label: a.text,
        variant: a.variant
      },
      actions: a.actions,
      hideLabel: !0
    },
    ...j
  ], v = z.filter(u), o = D.filter(u), t = e && u(e), B = v.length > 0, F = o.length > 0, x = (l) => !!l && "items" in l, p = (l) => !!l && "label" in l && !("items" in l), w = (l, n) => `${c(l) ? `${l.value ?? "default"}-${l.items.map((S) => S.value).join("-")}` : l.label}-${n}`;
  return /* @__PURE__ */ i(
    "div",
    {
      className: b(
        "resource-header px-page flex flex-col gap-3 pb-5 pt-3",
        L && "border-b border-solid border-f1-border"
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: b(
              "flex flex-col items-start justify-start gap-4 md:flex-row",
              !m && "md:items-center"
            ),
            children: [
              /* @__PURE__ */ i(
                "div",
                {
                  className: b(
                    "flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start",
                    !m && "md:items-center"
                  ),
                  children: [
                    r && /* @__PURE__ */ d("div", { className: "flex items-start", children: /* @__PURE__ */ d(
                      $,
                      {
                        avatar: {
                          ...r.type === "generic" ? { ...r, type: "company" } : r
                        },
                        size: "xl"
                      }
                    ) }),
                    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ d(
                        "span",
                        {
                          className: b(
                            "text-2xl font-semibold",
                            C ? "text-f1-foreground/[0.61]" : "text-f1-foreground"
                          ),
                          children: s
                        }
                      ),
                      m && /* @__PURE__ */ d(K, { description: m })
                    ] })
                  ]
                }
              ),
              f.length > 0 && /* @__PURE__ */ d("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden", children: /* @__PURE__ */ d(N, { items: f }) }),
              /* @__PURE__ */ i("div", { className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden", children: [
                t && p(e) && /* @__PURE__ */ d("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ d(
                  h,
                  {
                    label: e.label,
                    onClick: e.onClick,
                    variant: "default",
                    icon: e.icon,
                    size: "lg",
                    disabled: e.disabled,
                    tooltip: e.tooltip,
                    loading: e.loading
                  }
                ) }),
                t && x(e) && /* @__PURE__ */ d("div", { className: "w-full md:hidden [&>*]:w-full", children: /* @__PURE__ */ d(
                  g,
                  {
                    items: e.items,
                    onClick: e.onClick,
                    variant: "default",
                    value: e.value,
                    size: "lg",
                    disabled: e.disabled,
                    tooltip: e.tooltip,
                    loading: e.loading
                  }
                ) }),
                v.map((l, n) => /* @__PURE__ */ d(k, { children: /* @__PURE__ */ d("div", { className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full", children: c(l) ? /* @__PURE__ */ d(
                  g,
                  {
                    items: l.items,
                    onClick: l.onClick,
                    variant: l.variant ?? "outline",
                    value: l.value,
                    size: "lg",
                    disabled: l.disabled,
                    tooltip: l.tooltip,
                    loading: l.loading
                  }
                ) : /* @__PURE__ */ d(
                  h,
                  {
                    label: l.label,
                    onClick: l.onClick,
                    variant: l.variant ?? "outline",
                    icon: l.icon,
                    size: "lg",
                    hideLabel: l.hideLabel,
                    disabled: l.disabled,
                    tooltip: l.tooltip,
                    loading: l.loading
                  }
                ) }) }, w(l, n))),
                o.length > 0 && /* @__PURE__ */ d("div", { className: "w-full [&>*]:w-full [&_button]:w-full", children: /* @__PURE__ */ d(M, { items: o }) })
              ] }),
              /* @__PURE__ */ i("div", { className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto", children: [
                o.length > 0 && /* @__PURE__ */ d("div", { children: /* @__PURE__ */ d(P, { items: o }) }),
                v.map((l, n) => /* @__PURE__ */ d(k, { children: /* @__PURE__ */ d("div", { className: "hidden md:block", children: c(l) ? /* @__PURE__ */ d(
                  g,
                  {
                    items: l.items,
                    onClick: l.onClick,
                    variant: l.variant ?? "outline",
                    value: l.value,
                    size: "md",
                    disabled: l.disabled,
                    tooltip: l.tooltip,
                    loading: l.loading
                  }
                ) : /* @__PURE__ */ d(
                  h,
                  {
                    label: l.label,
                    onClick: l.onClick,
                    variant: l.variant ?? "outline",
                    icon: l.icon,
                    hideLabel: l.hideLabel,
                    disabled: l.disabled,
                    tooltip: l.tooltip,
                    loading: l.loading
                  }
                ) }) }, w(l, n))),
                t && (B || F) && /* @__PURE__ */ d("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
                t && p(e) && /* @__PURE__ */ d("div", { className: "hidden md:block", children: /* @__PURE__ */ d(
                  h,
                  {
                    label: e.label,
                    onClick: e.onClick,
                    variant: "default",
                    icon: e.icon,
                    disabled: e.disabled,
                    tooltip: e.tooltip,
                    loading: e.loading
                  }
                ) }),
                t && x(e) && /* @__PURE__ */ d("div", { className: "hidden md:block", children: /* @__PURE__ */ d(
                  g,
                  {
                    items: e.items,
                    onClick: e.onClick,
                    variant: "default",
                    value: e.value,
                    size: "md",
                    disabled: e.disabled,
                    tooltip: e.tooltip,
                    loading: e.loading
                  }
                ) })
              ] })
            ]
          }
        ),
        f.length > 0 && /* @__PURE__ */ d("div", { className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block", children: /* @__PURE__ */ d(N, { items: f }) })
      ]
    }
  );
}
const c = (s) => "items" in s;
export {
  R as BaseHeader,
  c as isSecondaryDropdownAction
};
