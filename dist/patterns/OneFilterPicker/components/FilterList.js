import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { useMemo as w } from "react";
import { F0Icon as N } from "../../../components/F0Icon/index.js";
import F from "../../../icons/app/ChevronRight.js";
import "../../../icons/app/Menu.js";
import { cn as i, focusRing as j } from "../../../lib/utils.js";
import { ScrollArea as A } from "../../../ui/scrollarea.js";
import { collectNestedFilterKeys as T } from "../filterTypes/InFilter/components/option-utils.js";
import { AnimatePresence as k } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as K } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as O } from "../../../lib/providers/i18n/i18n-provider.js";
import { getFilterType as V } from "../filterTypes/utils.js";
import { OneEllipsis as E } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as I } from "../../../components/F0Button/F0Button.js";
function Y({
  definition: s,
  tempFilters: c,
  selectedFilterKey: p,
  onFilterSelect: u,
  isCompactMode: o,
  onClickApplyFilters: b
}) {
  const a = O(), x = w(() => {
    const r = /* @__PURE__ */ new Map();
    for (const [t, l] of Object.entries(s))
      if (l.type === "in" && "options" in l) {
        const n = T(l.options);
        n.length > 0 && r.set(t, n);
      }
    return r;
  }, [s]);
  return /* @__PURE__ */ e(
    "div",
    {
      className: i(
        "z-30 flex h-full flex-col",
        o ? "min-w-[224px] w-full" : "w-56",
        !o && "border border-solid border-transparent border-r-f1-border-secondary"
      ),
      children: /* @__PURE__ */ m(
        "div",
        {
          className: i(
            "flex flex-1 h-full w-full flex-col min-h-0 max-h-full gap-1 overflow-x-hidden p-2"
          ),
          children: [
            o && /* @__PURE__ */ e("div", { className: "-mx-2 mb-1 h-px border-0 border-t border-solid border-f1-border-secondary" }),
            /* @__PURE__ */ e(A, { className: "flex-1 min-h-0 max-h-full", children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-1", children: Object.entries(s).map(([r, t]) => {
              const l = V(t.type), n = c[r], d = !l.isEmpty(n, {
                schema: t,
                i18n: a
              }), h = x.get(r), y = !d && !!h?.some((v) => {
                const f = c[v];
                return Array.isArray(f) && f.length > 0;
              }), g = d || y;
              return /* @__PURE__ */ e(
                "button",
                {
                  className: i(
                    "group relative flex w-full appearance-none items-center justify-between rounded px-2 py-1.5 font-medium transition-colors",
                    "hover:bg-f1-background-secondary",
                    p === r && "bg-f1-background-secondary",
                    j()
                  ),
                  onClick: () => u(r),
                  children: /* @__PURE__ */ m("div", { className: "flex w-full items-center justify-start gap-2.5 overflow-hidden", children: [
                    /* @__PURE__ */ e(E, { className: "flex-1 text-left text-f1-foreground", children: t.label }),
                    /* @__PURE__ */ e(k, { children: g && /* @__PURE__ */ e(
                      K.div,
                      {
                        className: "h-2 w-2 shrink-0 rounded-full bg-f1-background-selected-bold",
                        initial: { opacity: 0, scale: 0.7 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 0.7 }
                      }
                    ) }),
                    o && /* @__PURE__ */ e(N, { icon: F })
                  ] })
                },
                r
              );
            }) }) }),
            o && /* @__PURE__ */ e("div", { className: "-mx-2 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2", children: /* @__PURE__ */ e(
              I,
              {
                onClick: b,
                label: a.filters.applyFilters
              }
            ) })
          ]
        }
      )
    }
  );
}
export {
  Y as FilterList
};
