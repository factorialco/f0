import { jsxs as b, jsx as d, Fragment as m } from "react/jsx-runtime";
import { Switch as w } from "../../../../../experimental/Forms/Fields/Switch/index.js";
import { ToolbarDivider as k } from "../../../CoreEditor/Toolbar/ToolbarDivider/index.js";
import { F0ButtonDropdown as D } from "../../../../F0ButtonDropdown/F0ButtonDropdown.js";
import { F0Button as v } from "../../../../F0Button/F0Button.js";
const u = (e) => e ? e.toLowerCase().replace(" ", "-") : "", S = (e) => e ? Array.isArray(e) ? e : [e] : [], x = (e, n) => {
  const i = e ? [
    {
      label: e.action.label,
      value: u(e.action.label),
      icon: e.action.icon
    }
  ] : [], a = e?.subActions?.map((l) => ({
    label: l.label,
    value: u(l.label),
    icon: l.icon
  })) || [], t = n?.map((l) => ({
    label: l.label,
    value: u(l.label),
    icon: "icon" in l ? l.icon : void 0
  })) || [];
  return [...i, ...a, ...t];
}, I = (e, n, i) => {
  if (e === u(n?.action.label)) {
    n?.action.onClick();
    return;
  }
  const a = i?.find(
    (t) => u(t.label) === e
  );
  if (a) {
    a.onClick();
    return;
  }
  n?.subActions?.find((t) => u(t.label) === e)?.onClick();
}, z = ({
  secondaryActions: e,
  useLittleMode: n,
  primaryAction: i,
  isFullscreen: a,
  disableButtons: t
}) => {
  if (e.length === 0)
    return null;
  const c = e.filter(
    (o) => o.type === "switch"
  ), r = e.filter(
    (o) => o.type !== "switch"
  ), f = n && i && !a && r.length > 0;
  return /* @__PURE__ */ b("div", { className: "flex items-center gap-3", children: [
    c.map((o, h) => {
      const s = o;
      return /* @__PURE__ */ d(
        w,
        {
          title: o.label,
          checked: s.checked || !1,
          onCheckedChange: (g) => {
            o.onClick(g);
          },
          disabled: t || o.disabled,
          hideLabel: s.hideLabel || !1
        },
        `switch-${h}`
      );
    }),
    !f && r.map((o, h) => /* @__PURE__ */ d(
      v,
      {
        onClick: (s) => {
          s.preventDefault(), o.onClick();
        },
        variant: "variant" in o ? o.variant : "outline",
        size: "md",
        label: o.label,
        disabled: t || o.disabled,
        icon: "icon" in o ? o.icon : void 0
      },
      `button-${h}`
    ))
  ] });
}, C = ({
  primaryAction: e,
  disableButtons: n,
  onClick: i
}) => /* @__PURE__ */ d(
  v,
  {
    onClick: i,
    variant: e.variant ?? "default",
    size: "md",
    label: e.label || "",
    disabled: n || e.disabled,
    icon: e.icon
  }
), p = ({
  primaryAction: e,
  isFullscreen: n,
  listOfActions: i,
  handleOnClick: a,
  disableButtons: t,
  includeSecondaryInDropdown: l
}) => n ? /* @__PURE__ */ b(m, { children: [
  e.subActions?.map((c) => /* @__PURE__ */ d(
    v,
    {
      onClick: (r) => {
        r.preventDefault(), c.onClick();
      },
      variant: e.action.variant ?? "default",
      size: "md",
      label: c.label,
      disabled: t || c.disabled,
      icon: c.icon
    },
    u(c.label)
  )),
  e.subActions?.length && /* @__PURE__ */ d(k, {}),
  /* @__PURE__ */ d(
    C,
    {
      primaryAction: e.action,
      disableButtons: t,
      onClick: (c) => {
        c.preventDefault(), e.action.onClick();
      }
    }
  )
] }) : e.subActions || l ? /* @__PURE__ */ d(
  D,
  {
    items: i,
    onClick: a,
    variant: e.action.variant ?? "default",
    disabled: t,
    size: "md"
  }
) : /* @__PURE__ */ d(
  C,
  {
    primaryAction: e.action,
    disableButtons: t,
    onClick: (c) => {
      c.preventDefault(), e.action.onClick();
    }
  }
), O = ({
  secondaryAction: e,
  primaryAction: n,
  useLittleMode: i,
  disableButtons: a,
  isFullscreen: t
}) => {
  const l = S(e);
  if (l.length === 0 && !n) return null;
  const c = l.filter(
    (s) => s.type !== "switch"
  ), r = c.length > 0 && i && n && !t, f = x(
    n,
    r ? c : void 0
  ), o = (s) => I(s, n, l), h = l.length > 0 && n && (!i || l.some((s) => s.type === "switch") || t);
  return /* @__PURE__ */ b("div", { className: "scrollbar-macos flex items-center gap-2 overflow-x-auto overflow-y-hidden", children: [
    /* @__PURE__ */ d(
      z,
      {
        secondaryActions: l,
        useLittleMode: i,
        primaryAction: n,
        isFullscreen: t,
        disableButtons: a
      }
    ),
    h && /* @__PURE__ */ d(k, {}),
    n && p({
      primaryAction: n,
      isFullscreen: t,
      listOfActions: f,
      handleOnClick: o,
      disableButtons: a,
      includeSecondaryInDropdown: r ?? !1
    })
  ] });
};
export {
  O as ActionsMenu
};
