import { jsx as r, Fragment as j } from "react/jsx-runtime";
import { useMemo as d } from "react";
import { Arrow as y } from "../../../components/F0Select/components/Arrow.js";
import { cn as L } from "../../../lib/utils.js";
import { F0InputField as O } from "../../../components/F0InputField/F0InputField.js";
import { OneEllipsis as T } from "../../../lib/OneEllipsis/OneEllipsis.js";
const H = ({
  placeholder: m,
  selected: n,
  selectedEntities: t,
  disabled: l = !1,
  hiddenAvatar: u = !1,
  label: i,
  labelIcon: g,
  icon: o,
  error: c,
  status: v,
  hint: h,
  onClickContent: I,
  hideLabel: x = !1,
  maxLength: N,
  loading: D = !1,
  required: F = !1,
  readonly: w = !1,
  append: A,
  size: b = "sm",
  open: M
}) => {
  const f = d(
    () => t.some(
      (e) => e.subItems && e.subItems.length > 0
    ),
    [t]
  ), a = d(() => f ? t.flatMap(
    (e) => (e.subItems ?? []).map(($) => ({
      parent: e,
      subItem: $
    }))
  ) : t.map((e) => ({
    parent: null,
    subItem: {
      subId: e.id,
      subName: e.name,
      subAvatar: e.avatar,
      subDeactivated: e.deactivated
    }
  })), [f, t]), s = a.length === 0 ? void 0 : a.length === 1 ? a[0].subItem.subName : a.length + " " + n, p = a.length === 1 ? a[0].subItem.subName : void 0;
  return /* @__PURE__ */ r(
    O,
    {
      onClickContent: I,
      role: "combobox",
      label: i,
      labelIcon: g,
      "aria-expanded": !1,
      "aria-controls": "listbox",
      icon: o && !s ? o : void 0,
      error: c,
      status: v,
      hint: h,
      hideLabel: x,
      maxLength: N,
      clearable: !1,
      value: s,
      disabled: l,
      loading: D,
      required: F,
      readonly: w,
      size: b,
      avatar: u || !p ? void 0 : {
        type: "person",
        firstName: p,
        lastName: "",
        src: a[0].subItem.subAvatar,
        deactivated: a[0].subItem.subDeactivated
      },
      append: A ?? /* @__PURE__ */ r(j, { children: /* @__PURE__ */ r(y, { open: M, disabled: l, size: b }) }),
      children: /* @__PURE__ */ r(
        "span",
        {
          role: "button",
          className: L(
            "my-auto flex items-center pr-1",
            m && "text-f1-foreground-secondary",
            s && "text-f1-foreground",
            a.length === 1 && !u || o && !s ? "pl-8" : "pl-2"
          ),
          children: /* @__PURE__ */ r(
            T,
            {
              tag: "span",
              className: a.length === 1 && a[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
              children: a.length === 0 ? m ?? "" : a.length === 1 ? a[0].subItem.subName : `${a.length} ${n}`
            }
          )
        }
      )
    }
  );
};
export {
  H as Trigger
};
