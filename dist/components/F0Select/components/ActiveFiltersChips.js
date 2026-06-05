import { jsx as s } from "react/jsx-runtime";
import { useState as x, useEffect as g } from "react";
import { Chip as L } from "../../OneChip/index.js";
import { ScrollArea as T } from "../../../ui/scrollarea.js";
import { filterTypes as u } from "../../../patterns/OneFilterPicker/filterTypes/filters.js";
import { AnimatePresence as S } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as j } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as C } from "../../../lib/providers/i18n/i18n-provider.js";
const F = ({
  filters: c,
  currentFilters: a,
  onFiltersChange: d
}) => {
  const [p, f] = x([]), m = C();
  if (g(() => {
    (async () => {
      const n = Object.entries(a).filter(([, e]) => e == null ? !1 : Array.isArray(e) ? e.length > 0 : e !== ""), h = await Promise.all(
        n.map(async ([e, t]) => {
          const i = c[e], o = i?.label ?? e;
          if (!i || !i.type)
            return {
              key: e,
              label: o,
              displayText: String(t)
            };
          const y = u[i.type];
          if (!y?.chipLabel)
            return {
              key: e,
              label: o,
              displayText: Array.isArray(t) ? t.join(", ") : String(t)
            };
          try {
            const l = await y.chipLabel(t, {
              schema: i,
              i18n: m
            }), A = typeof l == "string" ? l : l.label;
            return {
              key: e,
              label: o,
              displayText: A
            };
          } catch {
            return {
              key: e,
              label: o,
              displayText: Array.isArray(t) ? t.join(", ") : String(t)
            };
          }
        })
      );
      f(h);
    })();
  }, [a, c, m]), p.length === 0) return null;
  const b = (r) => {
    const n = { ...a };
    delete n[r], d(n);
  };
  return /* @__PURE__ */ s(T, { children: /* @__PURE__ */ s("div", { className: "flex gap-1 border-0 p-2", children: /* @__PURE__ */ s(S, { mode: "popLayout", children: p.map((r) => /* @__PURE__ */ s(
    j.div,
    {
      layout: !0,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { type: "spring", duration: 0.2 },
      className: "shrink-0",
      children: /* @__PURE__ */ s(
        L,
        {
          variant: "selected",
          label: `${r.label}: ${r.displayText}`,
          onClose: () => b(r.key)
        }
      )
    },
    r.key
  )) }) }) });
};
F.displayName = "ActiveFiltersChips";
export {
  F as ActiveFiltersChips
};
