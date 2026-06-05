import { jsx as r } from "react/jsx-runtime";
import { useState as S } from "react";
import { F0Select as n } from "../../../../../../../components/F0Select/index.js";
import { useI18n as v } from "../../../../../../../lib/providers/i18n/i18n-provider.js";
import { cn as x } from "../../../../../../../lib/utils.js";
import { renderProperty as y } from "../../../../../property-render.js";
import { BaseCell as p } from "./BaseCell.js";
const d = /* @__PURE__ */ new Set();
function z({
  editableColumn: t,
  value: a,
  error: f,
  loading: c,
  onChange: u,
  item: i,
  hint: h
}) {
  const w = v(), [m, b] = S(!1), e = t.selectConfig;
  if (!e)
    return d.has(t.label) || (d.add(t.label), console.warn(
      `SelectCell: column "${t.label}" has editType "select" but no selectConfig`
    )), /* @__PURE__ */ r(p, { children: y(i, t, "editableTable", w) });
  const o = {
    label: t.label,
    hideLabel: !0,
    value: a || void 0,
    onChange: (_, g) => {
      const s = _ ?? "";
      s !== a && u(s, { selectedItem: g });
    },
    loading: c,
    size: "sm",
    placeholder: e.placeholder,
    showSearchBox: e.showSearchBox,
    defaultItem: e.defaultItem?.(i),
    multiple: !1,
    onOpenChange: b
  }, l = e.clearable ? { clearable: !0 } : {};
  return /* @__PURE__ */ r(p, { error: f, isActive: m, hint: h, children: /* @__PURE__ */ r(
    "div",
    {
      className: x(
        "flex w-full min-w-0 h-full",
        "items-center",
        "[&_[data-testid=input-field-wrapper]]:border-0",
        "[&_[data-testid=input-field-wrapper]]:bg-transparent",
        "[&_[data-testid=input-field-wrapper]]:shadow-none",
        "[&_[data-testid=input-field-wrapper]]:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0",
        "[&_[data-testid=input-field-wrapper]]:h-full",
        "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto",
        "[&>div]:h-full",
        "[&>div]:w-full",
        "[&>div>button]:h-full",
        t.align === "right" && "justify-end"
      ),
      children: "source" in e && e.source ? /* @__PURE__ */ r(
        n,
        {
          ...o,
          ...l,
          source: e.source,
          mapOptions: e.mapOptions
        }
      ) : /* @__PURE__ */ r(
        n,
        {
          ...o,
          ...l,
          options: typeof e.options == "function" ? e.options(i) : e.options
        }
      )
    }
  ) });
}
export {
  z as SelectCell
};
