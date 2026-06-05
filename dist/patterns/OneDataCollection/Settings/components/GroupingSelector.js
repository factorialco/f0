import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { F0Select as m } from "../../../../components/F0Select/index.js";
import f from "../../../../icons/app/ArrowDown.js";
import p from "../../../../icons/app/ArrowUp.js";
import "../../../../icons/app/Menu.js";
import { useI18n as b } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as u } from "../../../../components/F0Button/F0Button.js";
const i = "__no-grouping__", j = ({
  grouping: o,
  currentGrouping: l,
  onGroupingChange: a,
  hideLabel: n = !1
}) => {
  const r = b();
  if (!o || o.mandatory && Object.entries(o.groupBy).length < 2)
    return null;
  const s = [
    ...o.mandatory ? [] : [
      {
        label: r.collections.grouping.noGrouping,
        value: i
      }
    ],
    ...Object.entries(o.groupBy || {}).filter(
      (e) => !!e[1]
    ).map(([e, d]) => ({
      label: d.name,
      value: e
    }))
  ];
  return /* @__PURE__ */ t("div", { className: "flex flex-col", children: /* @__PURE__ */ c("div", { className: "flex items-end gap-2", children: [
    /* @__PURE__ */ t("div", { className: "shrink grow [&_button]:h-8 [&_button]:rounded", children: /* @__PURE__ */ t(
      m,
      {
        label: r.collections.grouping.groupBy,
        options: s,
        hideLabel: n,
        value: l?.field.toString() ?? i,
        onChange: (e) => a?.(
          e !== i ? {
            field: e,
            order: o.groupBy[e]?.defaultDirection ?? l?.order ?? "asc"
          } : void 0
        )
      }
    ) }),
    l?.field && /* @__PURE__ */ t(
      u,
      {
        hideLabel: !0,
        label: r.collections.grouping.toggleDirection,
        variant: "outline",
        icon: l?.order === "asc" ? p : f,
        onClick: () => a?.({
          field: l.field,
          order: l.order === "asc" ? "desc" : "asc"
        })
      }
    )
  ] }) });
};
export {
  j as GroupingSelector
};
