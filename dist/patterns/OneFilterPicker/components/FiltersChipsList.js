import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { getActiveFilterKeys as d } from "../internal/getActiveFilterKeys.js";
import { FilterChipButton as h } from "./FilterChipButton.js";
import { AnimatePresence as F } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { useI18n as g } from "../../../lib/providers/i18n/i18n-provider.js";
import { getFilterType as y } from "../filterTypes/utils.js";
import { F0Button as v } from "../../../components/F0Button/F0Button.js";
function B({
  filters: i,
  value: o = {},
  onFilterSelect: m,
  onFilterRemove: f,
  onClearAll: p,
  hideChips: u = !1,
  resultCount: n
}) {
  const t = g(), l = d(i, o, t);
  return u || l.length === 0 ? null : /* @__PURE__ */ a("div", { className: "mt-2 flex items-start justify-between gap-2", children: [
    /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-2", children: [
      n !== void 0 && /* @__PURE__ */ r("span", { className: "whitespace-nowrap font-medium text-f1-foreground-secondary", children: t.t(
        n === 1 ? "filters.resultsFor.one" : "filters.resultsFor.other",
        { count: n }
      ) }),
      /* @__PURE__ */ r(F, { presenceAffectsLayout: !0, initial: !1, children: l.map((e) => {
        const s = i[e];
        if (!i[e])
          return null;
        const c = o?.[e];
        return y(s.type).isEmpty(c, {
          schema: s,
          i18n: t
        }) ? null : /* @__PURE__ */ r(
          h,
          {
            filter: s,
            filterKey: String(e),
            value: c,
            onSelect: () => m(e),
            onRemove: () => f(e)
          },
          `filter-${String(e)}`
        );
      }) })
    ] }),
    /* @__PURE__ */ r(
      v,
      {
        variant: "ghost",
        label: t.actions.clear,
        size: "sm",
        onClick: p
      }
    )
  ] });
}
export {
  B as FiltersChipsList
};
