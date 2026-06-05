import { jsxs as a, jsx as n } from "react/jsx-runtime";
import { useState as R, useCallback as j } from "react";
import C from "../../../../../icons/app/ChevronDown.js";
import D from "../../../../../icons/app/ChevronRight.js";
import "../../../../../icons/app/Menu.js";
import { cn as v, focusRing as E } from "../../../../../lib/utils.js";
import { cacheLabel as I, cacheNestedLabel as O } from "../useLoadOptions.js";
import { hasSelectedDescendant as z, optionMatchesSearch as B } from "./option-utils.js";
import { F0Button as q } from "../../../../../components/F0Button/F0Button.js";
import { OneEllipsis as A } from "../../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Checkbox as F } from "../../../../../components/F0Checkbox/F0Checkbox.js";
function G({
  option: r,
  isSelected: g,
  onToggle: w,
  isCompactMode: f,
  depth: l,
  onFilterChange: i,
  allFiltersValue: o,
  cacheKey: m,
  searchTerm: b,
  autoExpand: h
}) {
  const [k, N] = R(!1), d = !!r.children?.options.length, p = k || h && d, s = r.children?.filterKey, t = s && o ? o[s] ?? [] : [], S = j(
    (e, c) => {
      if (!s || !i) return;
      const x = t.includes(e);
      if (!x) {
        I(m, e, c);
        const u = `${r.label} > ${c}`;
        O(s, e, u);
      }
      const L = x ? t.filter((u) => u !== e) : [...t, e];
      i(s, L);
    },
    [s, t, i, m, r.label]
  ), $ = `option-${String(r.value)}-d${l}`, y = d && z(r, o);
  return /* @__PURE__ */ a(
    "div",
    {
      className: v(
        "w-full",
        l === 0 && !f && "px-2",
        d && "border-0 border-b border-solid border-f1-border-secondary last:border-b-0"
      ),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "flex flex-row items-center overflow-hidden min-w-0",
            style: { paddingLeft: `${l * 24}px` },
            children: [
              d && /* @__PURE__ */ a("div", { className: "relative shrink-0", children: [
                /* @__PURE__ */ n(
                  q,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => N((e) => !e),
                    icon: p ? C : D,
                    label: "",
                    hideLabel: !0
                  }
                ),
                y && !p && /* @__PURE__ */ n("span", { className: "absolute -right-px -top-px h-2 w-2 rounded-full bg-f1-background-selected-bold" })
              ] }),
              /* @__PURE__ */ n(
                "div",
                {
                  className: v(
                    "flex min-w-0 flex-1 cursor-pointer appearance-none items-center gap-1 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary",
                    f && "py-1 pr-1",
                    E()
                  ),
                  children: /* @__PURE__ */ a(
                    "div",
                    {
                      className: "flex min-w-0 flex-1 items-center justify-between gap-1",
                      onClick: w,
                      children: [
                        /* @__PURE__ */ n("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ n(A, { children: r.label }) }),
                        /* @__PURE__ */ n("div", { className: "shrink-0", children: /* @__PURE__ */ n(
                          F,
                          {
                            id: $,
                            title: r.label,
                            checked: g,
                            presentational: !0,
                            hideLabel: !0
                          }
                        ) })
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        p && r.children && /* @__PURE__ */ n("div", { children: r.children.options.filter(
          (e) => !b || B(e, b)
        ).map((e) => {
          const c = t.includes(e.value);
          return /* @__PURE__ */ n(
            G,
            {
              option: e,
              isSelected: c,
              onToggle: () => S(e.value, e.label),
              isCompactMode: f,
              depth: l + 1,
              onFilterChange: i,
              allFiltersValue: o,
              cacheKey: m,
              searchTerm: b,
              autoExpand: h
            },
            String(e.value)
          );
        }) })
      ]
    }
  );
}
export {
  G as InFilterOptionRow
};
