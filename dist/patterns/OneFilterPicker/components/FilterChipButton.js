import { jsx as e, Fragment as y } from "react/jsx-runtime";
import { useState as l, useEffect as h } from "react";
import { Chip as L } from "../../../components/OneChip/index.js";
import { Skeleton as v } from "../../../ui/skeleton.js";
import { motion as g } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { getFilterType as C } from "../filterTypes/utils.js";
import { useI18n as x } from "../../../lib/providers/i18n/i18n-provider.js";
function B({
  filter: t,
  filterKey: c,
  value: a,
  onSelect: s,
  onRemove: p
}) {
  const [m, n] = l(!0), r = C(t.type), b = x(), [d, u] = l({
    label: ""
  });
  return h(() => {
    (async () => {
      if (a === void 0)
        return;
      n(!0);
      const f = r.chipLabel, o = await f(a, {
        schema: t,
        i18n: b,
        filterKey: c
      }), i = typeof o == "object" ? o : { label: o, icon: void 0, avatar: void 0 };
      u({
        label: `${t.label}: ${i.label}`,
        icon: i.icon,
        avatar: i.avatar
      }), n(!1);
    })();
  }, [a, r, t]), /* @__PURE__ */ e(
    g.div,
    {
      layout: !0,
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { type: "spring", duration: 0.2 },
      children: m ? /* @__PURE__ */ e(v, { className: "h-5 w-[100px]" }) : /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(
        L,
        {
          variant: "selected",
          ...d,
          onClose: p,
          onClick: s
        }
      ) })
    }
  );
}
export {
  B as FilterChipButton
};
