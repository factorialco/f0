import { jsx as l } from "react/jsx-runtime";
import { useCallback as W, useMemo as h } from "react";
import { Calendar as D } from "../../../../ui/calendar.js";
import { WeekStartDay as v } from "../../types.js";
import { getLocale as w, toCalendarPickerMatcher as b } from "../../utils.js";
import { getEndOfWeek as C, getStartOfWeek as L } from "./index.js";
import { AnimatePresence as M } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as V } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useL10n as I } from "../../../../lib/providers/l10n/l10n-provider.js";
function T({
  selected: r,
  onSelect: n,
  month: a,
  onMonthChange: m,
  motionDirection: f = 1,
  minDate: d,
  maxDate: u,
  compact: t = !1,
  weekStartsOn: c
}) {
  const { locale: k, date: p } = I(), o = c ?? p?.weekStartsOn ?? v.Monday, y = {
    hidden: (e) => ({
      opacity: 0,
      x: e === 1 ? t ? 20 : 40 : t ? -20 : -40
    }),
    visible: { opacity: 1, x: 0 },
    exit: (e) => ({
      opacity: 0,
      x: e === 1 ? t ? -20 : -40 : t ? 20 : 40
    })
  }, s = W(
    (e) => {
      const i = new Date(e);
      return i.setHours(0, 0, 0, 0), {
        from: L(i, o),
        to: C(i, o)
      };
    },
    [o]
  ), x = (e, i) => {
    if (i.selected) {
      n?.(null);
      return;
    }
    n?.(s(e));
  }, S = (e) => {
    e || n?.(null);
  }, g = h(() => {
    if (!r) return;
    const e = r instanceof Date ? r : r.from;
    return s(e);
  }, [r, s, o]), O = b({ minDate: d, maxDate: u });
  return /* @__PURE__ */ l(M, { mode: "popLayout", initial: !1, custom: f, children: /* @__PURE__ */ l(
    V.div,
    {
      variants: y,
      custom: f,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: {
        duration: t ? 0.1 : 0.15,
        ease: [0.455, 0.03, 0.515, 0.955]
      },
      children: /* @__PURE__ */ l(
        D,
        {
          mode: "range",
          disabled: O,
          selected: g,
          onDayClick: x,
          onSelect: S,
          month: a,
          onMonthChange: m,
          locale: w(k),
          weekStartsOn: o,
          showOutsideDays: !0,
          showWeekNumber: !0,
          fixedWeeks: !1,
          compact: t
        },
        a.toISOString()
      )
    },
    a.toISOString()
  ) });
}
export {
  T as WeekView
};
