import { jsx as r, jsxs as m } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { F0Select as p } from "../../../../components/F0Select/index.js";
import u from "../../../../icons/app/Ascending.js";
import g from "../../../../icons/app/Descending.js";
import "../../../../icons/app/Menu.js";
import { useI18n as b } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as h } from "../../../../components/F0Button/F0Button.js";
const l = "__no-sorting__", N = ({
  currentSortings: t,
  sortings: c,
  onChange: n
}) => {
  const i = b(), d = [
    {
      label: i.collections.sorting.noSorting,
      value: l
    },
    ...Object.entries(c || {}).map(([o, a]) => ({
      label: a.label,
      value: o
    }))
  ], e = f(
    () => t ?? {
      field: l,
      order: "asc"
    },
    [t]
  ), s = (o) => {
    !o || o.field === l ? n(null) : n(o);
  };
  return /* @__PURE__ */ r("div", { className: "flex flex-col", children: /* @__PURE__ */ m("div", { className: "flex items-end gap-2", children: [
    /* @__PURE__ */ r("div", { className: "shrink grow [&_button]:h-8 [&_button]:rounded", children: /* @__PURE__ */ r(
      p,
      {
        label: i.collections.sorting.sortBy,
        options: d,
        value: e.field,
        onChange: (o) => {
          s({
            field: o,
            order: e.order ?? "asc"
          });
        }
      },
      e.field
    ) }),
    e.field !== l && /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      h,
      {
        hideLabel: !0,
        label: i.collections.sorting.toggleDirection,
        variant: "outline",
        icon: e.order === "asc" ? u : g,
        onClick: () => s({
          field: e.field,
          order: e.order === "asc" ? "desc" : "asc"
        })
      }
    ) })
  ] }) });
};
export {
  l as EmptySortingValue,
  N as SortingSelector
};
