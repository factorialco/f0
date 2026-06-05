import { jsx as f } from "react/jsx-runtime";
import { getFilterType as u } from "../filterTypes/utils.js";
function x({
  selectedFilterKey: r,
  definition: a,
  tempFilters: n,
  onFilterChange: o,
  isCompactMode: p
}) {
  if (!r) return null;
  const l = a[r], i = u(l.type);
  if (!i)
    throw new Error(`Filter type ${l.type} not found`);
  const c = n[r] || i.emptyValue, h = (e, t) => {
    o(e, t);
  };
  function s({
    schema: e,
    value: t,
    onChange: y
  }) {
    return u(e.type).render({
      schema: e,
      value: t,
      onChange: y,
      isCompactMode: p,
      onFilterChange: h,
      allFiltersValue: n
    });
  }
  return /* @__PURE__ */ f("div", { className: "relative flex h-full w-full flex-col gap-1", children: /* @__PURE__ */ f("div", { className: "relative flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden", children: s({
    schema: l,
    value: c,
    onChange: (e) => {
      o(r, e);
    }
  }) }) });
}
export {
  x as FilterContent
};
