import { jsx as e } from "react/jsx-runtime";
import { useCallback as M } from "react";
import { Calendar as u } from "../../../../ui/calendar.js";
import { WeekStartDay as R } from "../../types.js";
import { toCalendarPickerMatcher as w, getLocale as p } from "../../utils.js";
import { AnimatePresence as y } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as v } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useL10n as L } from "../../../../lib/providers/l10n/l10n-provider.js";
const T = (i) => !i?.from || !i?.to ? !1 : i.from.toDateString() !== i.to.toDateString();
function E({
  mode: i,
  selected: r,
  onSelect: o,
  month: a,
  onMonthChange: x,
  motionDirection: n = 1,
  minDate: S,
  maxDate: g,
  compact: m = !1,
  weekStartsOn: h
}) {
  const { locale: f, date: k } = L(), l = h ?? k?.weekStartsOn ?? R.Monday, d = w({ minDate: S, maxDate: g }), O = M(
    (t) => {
      if (!o) return;
      const s = r;
      if (T(s) && t?.from) {
        const b = t.from.getTime() !== s?.from?.getTime(), C = t.to?.getTime() !== s?.to?.getTime(), D = b || !C ? t.from : t.to ?? t.from;
        o({ from: D, to: void 0 });
      } else t?.from ? o({ from: t.from, to: t.to }) : o(null);
    },
    [o, r]
  ), c = {
    hidden: (t) => ({
      opacity: 0,
      x: t === 1 ? 40 : -40
    }),
    visible: { opacity: 1, x: 0 },
    exit: (t) => ({
      opacity: 0,
      x: t === 1 ? -40 : 40
    })
  };
  return i === "single" ? /* @__PURE__ */ e(
    y,
    {
      mode: "popLayout",
      initial: !1,
      custom: n,
      children: /* @__PURE__ */ e(
        v.div,
        {
          variants: c,
          custom: n,
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          transition: { duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] },
          children: /* @__PURE__ */ e(
            u,
            {
              mode: "single",
              disabled: d,
              selected: r,
              onSelect: o,
              month: a,
              locale: p(f),
              weekStartsOn: l,
              compact: m
            }
          )
        },
        a.toISOString()
      )
    }
  ) : /* @__PURE__ */ e(y, { mode: "popLayout", initial: !1, custom: n, children: /* @__PURE__ */ e(
    v.div,
    {
      variants: c,
      custom: n,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] },
      children: /* @__PURE__ */ e(
        u,
        {
          mode: "range",
          disabled: d,
          selected: r,
          onSelect: O,
          month: a,
          onMonthChange: x,
          locale: p(f),
          weekStartsOn: l,
          compact: m
        },
        a.toISOString()
      )
    },
    a.toISOString()
  ) });
}
export {
  E as DayView
};
