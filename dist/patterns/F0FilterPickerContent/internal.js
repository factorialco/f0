import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { cn as b } from "../../lib/utils.js";
import { FilterContent as h } from "../OneFilterPicker/components/FilterContent.js";
import { FilterList as u } from "../OneFilterPicker/components/FilterList.js";
import { useI18n as v } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as c } from "../../components/F0Button/F0Button.js";
function k({
  filters: n,
  tempFilters: t,
  selectedFilterKey: r,
  onFilterSelect: m,
  onFilterChange: d,
  onApply: o,
  onClear: e,
  height: f,
  showApplyButton: a = !0,
  applyButtonLabel: p,
  className: x
}) {
  const s = v();
  return /* @__PURE__ */ l(
    "div",
    {
      className: b(
        "flex flex-col transition-all",
        // Defined minimum height to avoid the content from being too small to be used
        // 15px to avoid the border of the content from being cut off
        "max-h-[calc(var(--radix-popover-content-available-height)-15px)] min-h-[250px]",
        x
      ),
      style: { height: f },
      children: [
        /* @__PURE__ */ l("div", { className: "flex min-h-0 flex-1", children: [
          /* @__PURE__ */ i(
            u,
            {
              definition: n,
              tempFilters: t,
              selectedFilterKey: r,
              onFilterSelect: m,
              onClickApplyFilters: o
            }
          ),
          r && /* @__PURE__ */ i("div", { className: "min-w-[340px] flex-1", children: /* @__PURE__ */ i(
            h,
            {
              selectedFilterKey: r,
              definition: n,
              tempFilters: t,
              onFilterChange: d
            }
          ) })
        ] }),
        a || e ? /* @__PURE__ */ l("div", { className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2", children: [
          e && /* @__PURE__ */ i(
            c,
            {
              onClick: e,
              label: s.collections.emptyStates.noResults.clearFilters,
              variant: "outline"
            }
          ),
          a && /* @__PURE__ */ i(
            c,
            {
              onClick: o,
              label: p ?? s.filters.applyFilters
            }
          )
        ] }) : null
      ]
    }
  );
}
k.displayName = "FilterPickerInternal";
export {
  k as FilterPickerInternal
};
