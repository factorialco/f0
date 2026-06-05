import { jsx as l, jsxs as N } from "react/jsx-runtime";
import { cn as h, focusRing as S } from "../../../../lib/utils.js";
import { AnimatePresence as A } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as B } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as O } from "../../../../lib/providers/i18n/i18n-provider.js";
import { startOfMonth as b } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { endOfMonth as c } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js";
import { isBefore as v } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js";
import { isAfter as V } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js";
import { isWithinInterval as L } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js";
import { isSameMonth as P } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameMonth.js";
function Z({
  mode: a,
  selected: t,
  onSelect: u,
  year: d,
  motionDirection: k = 1,
  minDate: M,
  maxDate: y,
  compact: e = !1
}) {
  const r = O(), j = [
    { name: r.date.month.january, index: 0 },
    { name: r.date.month.february, index: 1 },
    { name: r.date.month.march, index: 2 },
    { name: r.date.month.april, index: 3 },
    { name: r.date.month.may, index: 4 },
    { name: r.date.month.june, index: 5 },
    { name: r.date.month.july, index: 6 },
    { name: r.date.month.august, index: 7 },
    { name: r.date.month.september, index: 8 },
    { name: r.date.month.october, index: 9 },
    { name: r.date.month.november, index: 10 },
    { name: r.date.month.december, index: 11 }
  ], w = /* @__PURE__ */ new Date(), m = (n) => !!(n && typeof n == "object" && ("from" in n || "to" in n)), D = (n) => {
    const o = new Date(d, n, 1), s = b(o), f = c(o);
    if (a === "single")
      u?.({
        from: s,
        to: f
      });
    else if (a === "range")
      if (!t || !m(t))
        u?.({
          from: o,
          to: void 0
        });
      else if (t.from && !t.to) {
        const i = t.from;
        if (P(i, o))
          u?.({
            from: b(o),
            to: c(o)
          });
        else {
          const g = v(i, o) ? i : o, x = v(i, o) ? o : i;
          u?.({
            from: b(g),
            to: c(x)
          });
        }
      } else
        u?.({
          from: o,
          to: void 0
        });
  }, F = (n) => n === w.getMonth() && d === w.getFullYear(), Y = (n) => {
    if (!t) return !1;
    if (m(t)) {
      if (t.from && t.to) {
        const o = new Date(d, n, 15);
        return L(o, {
          start: t.from,
          end: t.to
        });
      } else if (t.from)
        return t.from.getMonth() === n && t.from.getFullYear() === d;
    } else
      return t.getMonth() === n && t.getFullYear() === d;
    return !1;
  }, z = (n) => !t || !m(t) || !t.from ? !1 : t.from.getMonth() === n && t.from.getFullYear() === d, C = (n) => !t || !m(t) || !t.to ? !1 : t.to.getMonth() === n && t.to.getFullYear() === d, E = {
    hidden: (n) => ({
      opacity: 0,
      x: n === 1 ? e ? 20 : 40 : e ? -20 : -40
    }),
    visible: { opacity: 1, x: 0 },
    exit: (n) => ({
      opacity: 0,
      x: n === 1 ? e ? -20 : -40 : e ? 20 : 40
    })
  };
  return /* @__PURE__ */ l(A, { mode: "popLayout", initial: !1, custom: k, children: /* @__PURE__ */ l(
    B.div,
    {
      className: h(
        "grid gap-y-3",
        e ? "grid-cols-2 gap-y-2" : "grid-cols-3"
      ),
      custom: k,
      variants: E,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: {
        duration: e ? 0.1 : 0.15,
        ease: [0.455, 0.03, 0.515, 0.955]
      },
      children: j.map((n) => {
        const o = F(n.index), s = Y(n.index), f = z(n.index), i = C(n.index), g = new Date(d, n.index, 1), x = b(g), R = c(g), p = M && v(x, M) || y && V(R, y);
        return /* @__PURE__ */ N(
          "button",
          {
            type: "button",
            onClick: () => D(n.index),
            disabled: p,
            className: h(
              "relative isolate flex items-center justify-center font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']",
              e ? "h-8 rounded-sm after:rounded-sm" : "h-10 rounded-md after:rounded-md",
              !p && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover",
              p && "cursor-not-allowed text-f1-foreground-secondary",
              S(),
              s && a === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse",
              s && a === "range" && h(
                "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected",
                e ? "[&:nth-child(4n+1)]:rounded-s-sm [&:nth-child(4n+4)]:rounded-e-sm" : "[&:nth-child(3n+1)]:rounded-s-md [&:nth-child(3n+3)]:rounded-e-md"
              ),
              (f || i) && a === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse",
              f && a === "range" && i && (e ? "rounded-s-sm" : "rounded-s-md"),
              i && a === "range" && (e ? "rounded-e-sm" : "rounded-e-md")
            ),
            children: [
              /* @__PURE__ */ l("span", { children: n.name }),
              o && /* @__PURE__ */ l(
                "div",
                {
                  className: h(
                    "absolute inset-x-0 z-20 mx-auto h-0.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                    e ? "bottom-0.5 w-1" : "bottom-1 w-1.5",
                    s && a === "single" && "bg-f1-background",
                    (f || i) && "bg-f1-background",
                    !f && !i && s && a === "range" && "bg-f1-background-selected-bold"
                  )
                }
              )
            ]
          },
          n.index
        );
      })
    },
    d
  ) });
}
export {
  Z as MonthView
};
