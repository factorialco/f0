import { jsx as i, jsxs as F } from "react/jsx-runtime";
import { useState as O, useMemo as l } from "react";
import { F0Icon as x } from "../F0Icon/index.js";
import { DropdownInternal as D } from "../../experimental/Navigation/Dropdown/internal.js";
import k from "../../icons/app/ChevronDown.js";
import "../../icons/app/Menu.js";
import { withDataTestId as S } from "../../lib/data-testid/index.js";
import { cn as C, focusRing as _ } from "../../lib/utils.js";
import { Action as M } from "../../ui/Action/Action.js";
import { buttonSizeVariants as j, actionVariants as A } from "../../ui/Action/variants.js";
import { useI18n as B } from "../../lib/providers/i18n/i18n-provider.js";
const N = (e) => Array.isArray(e) ? e.every(V) ? [
  {
    items: e
  }
] : e : [e];
function V(e) {
  return "value" in e;
}
const R = ({
  onClick: e,
  value: c,
  items: f,
  size: a,
  variant: h,
  disabled: o,
  loading: w,
  tooltip: I
}) => {
  const v = B(), [m, d] = O(!1), u = l(
    () => N(f),
    [f]
  ), r = l(() => u.flatMap((t) => t.items), [u]), s = l(
    () => c || r[0]?.value,
    [c, r]
  ), n = l(
    () => r.find((t) => t.value === s),
    [s, r]
  ), y = () => {
    const t = r.find((b) => b.value === s);
    t && e(s, t);
  }, p = l(
    () => u.map((t) => t.items).reduce((t, b) => (t.length > 0 && t.push({ type: "separator" }), t.push(
      ...b.filter((g) => g.value !== s).map((g) => ({
        ...g,
        onClick: () => {
          e(g.value, g), d(!1);
        }
      }))
    ), t), []),
    [u, e, s]
  ), z = a === "sm" ? "[&_.main]:w-6" : a === "lg" ? "[&_.main]:w-10" : "[&_.main]:w-8";
  return n && /* @__PURE__ */ i("div", { className: C(o && "opacity-30"), children: /* @__PURE__ */ i(
    M,
    {
      onClick: y,
      variant: h,
      size: a,
      disabled: o,
      loading: w,
      "data-testid": "button-main",
      "aria-label": n.label,
      prepend: n.icon && /* @__PURE__ */ i(x, { icon: n.icon }),
      className: "rounded-r-none after:rounded-r-none disabled:opacity-100",
      tooltip: I,
      appendOutside: /* @__PURE__ */ i(
        D,
        {
          items: p,
          align: "end",
          open: m && !o,
          onOpenChange: (t) => {
            o || d(t);
          },
          children: /* @__PURE__ */ i(
            "button",
            {
              className: C(
                A({
                  variant: h,
                  pressed: m && !o
                }),
                j({ size: a }),
                "-translate-x-px rounded-l-none px-0 after:rounded-l-none disabled:opacity-100",
                z,
                _()
              ),
              disabled: o,
              "data-testid": "button-menu",
              "data-pressed": m && !o,
              children: /* @__PURE__ */ F("div", { className: "main flex items-center justify-center gap-1", children: [
                /* @__PURE__ */ i("span", { className: "sr-only", children: v.actions.more }),
                /* @__PURE__ */ i(
                  x,
                  {
                    icon: k,
                    size: a === "sm" ? "sm" : "md"
                  }
                )
              ] })
            }
          )
        }
      ),
      children: n.label
    }
  ) });
}, L = ({
  onClick: e,
  trigger: c,
  items: f,
  size: a,
  variant: h,
  disabled: o,
  loading: w,
  tooltip: I
}) => {
  const [v, m] = O(!1), d = l(
    () => N(f),
    [f]
  ), u = l(() => d.flatMap((n) => n.items), [d]), r = c || u[0]?.label, s = l(
    () => d.map((n) => n.items).reduce((n, y) => (n.length > 0 && n.push({ type: "separator" }), n.push(
      ...y.map((p) => ({
        ...p,
        onClick: () => {
          e(p.value, p), m(!1);
        }
      }))
    ), n), []),
    [d, e]
  );
  return r ? /* @__PURE__ */ i(
    D,
    {
      items: s,
      align: "end",
      open: v && !o,
      onOpenChange: (n) => {
        o || m(n);
      },
      children: /* @__PURE__ */ i(
        M,
        {
          variant: h,
          size: a,
          disabled: o,
          loading: w,
          "data-testid": "button-dropdown-trigger",
          "aria-label": r,
          append: /* @__PURE__ */ i(x, { icon: k, size: a === "sm" ? "sm" : "md" }),
          pressed: v && !o,
          tooltip: I,
          children: r
        }
      )
    }
  ) : null;
}, T = (e) => (e.mode ?? "split") === "dropdown" ? /* @__PURE__ */ i(
  L,
  {
    onClick: e.onClick,
    trigger: "trigger" in e ? e.trigger : void 0,
    items: e.items,
    size: e.size,
    variant: e.variant,
    disabled: e.disabled,
    loading: e.loading,
    tooltip: e.tooltip
  }
) : /* @__PURE__ */ i(
  R,
  {
    onClick: e.onClick,
    value: "value" in e ? e.value : void 0,
    items: e.items,
    size: e.size,
    variant: e.variant,
    disabled: e.disabled,
    loading: e.loading,
    tooltip: e.tooltip
  }
), Y = S(T);
export {
  Y as F0ButtonDropdown
};
