import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { useI18n as m } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../F0Button/F0Button.js";
const p = ({
  actions: o,
  showApplyButton: i,
  onApply: a,
  onCancel: s,
  showCancelButton: t
}) => {
  const n = m();
  return !o && !i ? null : /* @__PURE__ */ c("div", { className: "flex w-full flex-row justify-between items-center gap-2 border-0 border-t border-solid border-f1-border-secondary p-2", children: [
    o?.map((e) => /* @__PURE__ */ l(
      r,
      {
        variant: e.variant,
        onClick: e.onClick,
        icon: e.icon,
        label: e.label
      },
      e.label
    )),
    t && /* @__PURE__ */ l(
      r,
      {
        onClick: s,
        label: n.filters.cancel,
        variant: "ghost"
      }
    ),
    i && /* @__PURE__ */ l("div", { className: t ? "" : "ml-auto", children: /* @__PURE__ */ l(r, { onClick: a, label: n.select.applySelection }) })
  ] });
};
export {
  p as SelectBottomActions
};
