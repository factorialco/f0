import { jsx as r } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { NestedActionRow as n } from "../NestedActionRow/index.js";
const s = (d, e) => {
  const i = d.addRowActions.map((o) => ({
    label: o.label,
    icon: o.icon,
    description: o.description,
    onClick: o.onClick,
    loading: o.loading,
    disabled: o.disabled
  }));
  return /* @__PURE__ */ r(
    n,
    {
      ...d,
      ref: e,
      nestedRowPropsOverride: {
        onAddRow: {
          actions: i,
          label: d.addRowLabel
        }
      }
    }
  );
}, w = l(s);
w.displayName = "AddRowRow";
export {
  w as AddRowRow
};
