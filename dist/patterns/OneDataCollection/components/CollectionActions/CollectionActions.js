import { jsxs as f, jsx as n } from "react/jsx-runtime";
import h, { useMemo as C, useState as v } from "react";
import { ButtonInternal as k } from "../../../../components/F0Button/internal.js";
import { Dropdown as w } from "../../../../experimental/Navigation/Dropdown/index.js";
import { Tooltip as x } from "../../../../experimental/Overlays/Tooltip/index.js";
import B from "../../../../icons/app/Ellipsis.js";
import "../../../../icons/app/Menu.js";
import { F0ButtonDropdown as m } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { F0Button as p } from "../../../../components/F0Button/F0Button.js";
const I = ({
  primaryActions: i,
  primaryActionsLabel: u,
  secondaryActions: b,
  otherActions: r
}) => {
  const o = (Array.isArray(i) ? i : [i]).filter((e) => e !== void 0), d = b || [], t = C(
    () => (r || []).map((e) => e.items).reduce((e, l) => (e.length > 0 && e.push({ type: "separator" }), e.push(...l), e), []),
    [r]
  ), [s, c] = v(!1), g = o.some(
    (e) => e.description !== void 0
  );
  return o.length === 0 && d.length === 0 && t.length === 0 ? null : /* @__PURE__ */ f("div", { className: "flex flex-row-reverse items-center gap-2", children: [
    g ? /* @__PURE__ */ n(
      m,
      {
        mode: "dropdown",
        size: "md",
        trigger: u,
        items: o.map((e, l) => ({
          label: e.label,
          icon: e.icon,
          description: e.description,
          value: l.toString()
        })),
        onClick: (e) => {
          o[Number(e)]?.onClick?.();
        }
      }
    ) : o.length === 1 ? /* @__PURE__ */ n(
      p,
      {
        size: "md",
        onClick: o[0].onClick,
        icon: o[0].icon,
        variant: "default",
        label: o[0].label,
        loading: o[0].loading,
        disabled: o[0].disabled
      }
    ) : o.length > 1 && /* @__PURE__ */ n(
      m,
      {
        size: "md",
        items: o.map((e, l) => ({
          label: e.label,
          icon: e.icon,
          value: l.toString()
        })),
        onClick: (e) => {
          o[Number(e)]?.onClick?.();
        }
      }
    ),
    d?.map((e) => {
      const l = e.tooltip?.({
        disabled: !!e.disabled,
        loading: !!e.loading
      }), a = /* @__PURE__ */ n(
        p,
        {
          size: "md",
          onClick: e.onClick,
          icon: e.icon,
          variant: "outline",
          hideLabel: e.hideLabelWhenExpanded,
          label: e.label,
          disabled: e.disabled,
          loading: e.loading
        }
      );
      return l ? /* @__PURE__ */ n(x, { description: l, children: a }, e.label) : /* @__PURE__ */ n(h.Fragment, { children: a }, e.label);
    }),
    t.length > 0 && /* @__PURE__ */ n(
      w,
      {
        items: t,
        align: "end",
        open: s,
        onOpenChange: c,
        children: /* @__PURE__ */ n(
          k,
          {
            variant: "outline",
            icon: B,
            label: "Actions",
            hideLabel: !0,
            pressed: s
          }
        )
      }
    )
  ] });
};
export {
  I as CollectionActions
};
