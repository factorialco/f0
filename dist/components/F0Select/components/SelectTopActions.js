import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as v, useCallback as A } from "react";
import { OneFilterPicker as O } from "../../../patterns/OneFilterPicker/OneFilterPicker.js";
import { GroupingSelector as j } from "../../../patterns/OneDataCollection/Settings/components/GroupingSelector.js";
import { ActiveFiltersChips as C } from "./ActiveFiltersChips.js";
import { AnimatePresence as F } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as N } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as I } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0SearchInput as S } from "../../F0SearchInput/F0SearchInput.js";
const E = ({
  showSearchBox: t,
  searchBoxPlaceholder: e,
  onSearchChange: d,
  searchValue: p,
  grouping: i,
  currentGrouping: h,
  onGroupingChange: f,
  filters: o,
  currentFilters: n,
  onFiltersChange: l,
  asList: c = !1,
  onFiltersOpenChange: s,
  showPreview: u = !1
}) => {
  const b = I(), [x, y] = v(!1), g = A(
    (m) => {
      y(m), s?.(m);
    },
    [s]
  );
  return !t && !o && (!i || i.mandatory && Object.entries(i.groupBy).length < 2) ? null : /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ a("div", { className: "flex gap-2 p-2 border-0 border-b border-solid border-f1-border-secondary", children: [
      /* @__PURE__ */ a("div", { className: "flex flex-1 flex-row gap-2", children: [
        t && /* @__PURE__ */ r("div", { className: "flex-1", children: /* @__PURE__ */ r(
          S,
          {
            placeholder: e ?? b.toc.search,
            onChange: d,
            value: p,
            debounceTime: 400,
            autoFocus: !c && !x,
            clearable: !0
          }
        ) }),
        o && /* @__PURE__ */ r(
          O,
          {
            filters: o,
            value: n,
            onChange: l,
            mode: u ? "inline" : c ? "simple" : "compact",
            onOpenChange: g
          }
        )
      ] }),
      /* @__PURE__ */ r(
        j,
        {
          hideLabel: !0,
          grouping: i,
          currentGrouping: h,
          onGroupingChange: f
        }
      )
    ] }),
    /* @__PURE__ */ r(F, { children: o && k(n) && /* @__PURE__ */ r(
      N.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        transition: { type: "spring", duration: 0.3, bounce: 0 },
        children: /* @__PURE__ */ r(
          C,
          {
            filters: o,
            currentFilters: n,
            onFiltersChange: l
          }
        )
      }
    ) })
  ] });
}, k = (t) => Object.entries(t).some(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== "");
export {
  E as SelectTopActions
};
