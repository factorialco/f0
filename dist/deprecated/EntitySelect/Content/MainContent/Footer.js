import { jsx as l, jsxs as x } from "react/jsx-runtime";
import { F0Button as p } from "../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as y } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
const s = ({ primaryAction: o, secondaryActions: i }) => {
  if (!i || i.length === 0)
    return /* @__PURE__ */ l(
      p,
      {
        disabled: o.disabled,
        variant: o.variant,
        onClick: o.onClick,
        label: o.label,
        icon: o.icon,
        size: "sm"
      }
    );
  const t = [o, ...i ?? []], d = t.map((e) => ({
    label: e.label,
    value: e.label,
    icon: e.icon,
    critical: e.variant === "critical"
  })) || [], f = (e) => {
    const n = t.find((a) => a.label === e);
    n && !n.disabled && n.onClick?.();
  }, u = t.every((e) => e.disabled);
  return /* @__PURE__ */ l(
    y,
    {
      items: d,
      value: o.label,
      disabled: u,
      onClick: f,
      variant: "outline",
      size: "sm"
    }
  );
}, w = ({
  actions: o,
  selectAllLabel: i,
  clearLabel: t,
  disabled: d,
  allVisibleSelected: f,
  anyVisibleSelected: u,
  loading: e,
  singleSelector: n,
  onSelectAll: a,
  onClear: k
}) => {
  const v = !n && (i || t), m = o && o.length > 0;
  if (!(!e && (!n && v || m))) return null;
  let c, h, b = a ? {
    label: i || "",
    onClick: a,
    variant: "outline",
    disabled: d || f
  } : void 0, r = k ? {
    label: t || "",
    onClick: k,
    variant: "ghost",
    disabled: d || !u
  } : void 0;
  return b || (b = r, r = void 0), m && v ? (c = /* @__PURE__ */ l(
    s,
    {
      primaryAction: b,
      secondaryActions: r ? [r] : []
    }
  ), h = /* @__PURE__ */ l(
    s,
    {
      primaryAction: o[0],
      secondaryActions: o.slice(1)
    }
  )) : m ? c = /* @__PURE__ */ l(
    s,
    {
      primaryAction: o[0],
      secondaryActions: o.slice(1)
    }
  ) : v && (c = /* @__PURE__ */ l(s, { primaryAction: b, secondaryActions: [] }), r && (h = /* @__PURE__ */ l(s, { primaryAction: r, secondaryActions: [] }))), /* @__PURE__ */ l("footer", { className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl", children: /* @__PURE__ */ x("div", { className: "flex flex-1 justify-between p-2", children: [
    c,
    h
  ] }) });
};
export {
  w as Footer
};
