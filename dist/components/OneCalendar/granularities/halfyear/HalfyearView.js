import { jsx as m, jsxs as x } from "react/jsx-runtime";
import { cn as M, focusRing as O } from "../../../../lib/utils.js";
import { AnimatePresence as $ } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as I } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { isWithinInterval as R } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js";
import { isBefore as H } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js";
import { isAfter as Y } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js";
import { startOfMonth as L } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfMonth.js";
import { endOfMonth as P } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfMonth.js";
const l = (a) => a < 6 ? 1 : 2, p = (a, r) => {
  const c = a === 1 ? 0 : 6, g = a === 1 ? 5 : 11, u = L(new Date(r, c, 1)), b = P(new Date(r, g + 1, 0));
  return { from: u, to: b };
}, X = ({
  mode: a,
  selected: r,
  onSelect: c,
  year: g,
  minDate: u,
  maxDate: b,
  motionDirection: v = 1
}) => {
  const N = [1, 2], k = /* @__PURE__ */ new Date(), w = k.getFullYear(), F = l(k.getMonth()), j = Math.floor(g / 5) * 5, z = Array.from({ length: 5 }, (t, n) => j + n), h = (t) => !!(t && typeof t == "object" && ("from" in t || "to" in t)), y = (t, n) => {
    const o = p(t, n);
    if (a === "single")
      c?.(o.from);
    else if (a === "range")
      if (!r || !h(r))
        c?.({
          from: o.from,
          to: void 0
        });
      else if (r && r.from && !r.to) {
        const e = r.from, s = l(e.getMonth()), f = e.getFullYear();
        if (s === t && f === n)
          c?.({
            from: o.from,
            to: o.to
          });
        else {
          const i = p(s, f), d = H(i.from, o.from) ? i.from : o.from, E = Y(i.to, o.to) ? i.to : o.to;
          c?.({
            from: d,
            to: E
          });
        }
      } else
        c?.({
          from: o.from,
          to: void 0
        });
  }, C = (t, n) => {
    if (!r) return !1;
    const o = p(t, n);
    if (h(r)) {
      const e = r.from, s = r.to;
      if (e && s)
        return R(o.from, { start: e, end: s }) || !!o.to && R(o.to, { start: e, end: s }) || H(o.from, e) && !!o.to && Y(o.to, s);
      if (e)
        return l(e.getMonth()) === t && e.getFullYear() === n;
    } else {
      const e = r.getMonth();
      return l(e) === t && r.getFullYear() === n;
    }
    return !1;
  }, A = (t, n) => t === F && n === w, W = (t, n) => {
    if (!r || !h(r) || !r.from) return !1;
    const o = r.from;
    return l(o.getMonth()) === t && o.getFullYear() === n;
  }, B = (t, n) => {
    if (!r || !h(r) || !r.to) return !1;
    const o = r.to;
    return l(o.getMonth()) === t && o.getFullYear() === n;
  }, D = {
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
  return /* @__PURE__ */ m($, { mode: "popLayout", initial: !1, custom: v, children: /* @__PURE__ */ m(
    I.div,
    {
      className: "flex flex-col gap-4",
      custom: v,
      variants: D,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] },
      children: z.map((t) => /* @__PURE__ */ x(
        "div",
        {
          className: "flex items-center justify-center gap-3 pl-1.5",
          children: [
            /* @__PURE__ */ m("div", { className: "text-medium text-right text-sm tabular-nums text-f1-foreground-secondary", children: t }),
            /* @__PURE__ */ m("div", { className: "flex flex-1", children: N.map((n) => {
              const o = C(n, t), e = A(n, t), s = W(n, t), f = B(n, t), i = p(n, t), d = u && H(i.from, u) || b && i.to && Y(i.to, b);
              return /* @__PURE__ */ x(
                "button",
                {
                  onClick: () => y(n, t),
                  disabled: d,
                  className: M(
                    "relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums",
                    "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']",
                    d && "cursor-not-allowed text-f1-foreground-secondary",
                    !d && "hover:after:bg-f1-background-hover",
                    O(),
                    (s || f) && "after:inset-x-0",
                    o && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse",
                    o && !s && !f && a === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"
                  ),
                  children: [
                    s && /* @__PURE__ */ m("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
                    f && /* @__PURE__ */ m("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
                    /* @__PURE__ */ x("span", { className: "z-10 font-medium", children: [
                      "H",
                      n
                    ] }),
                    e && /* @__PURE__ */ m(
                      "div",
                      {
                        className: M(
                          "absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                          o && a === "single" && "bg-f1-background",
                          (s || f) && "bg-f1-background",
                          !s && !f && o && a === "range" && "bg-f1-background-selected-bold"
                        )
                      }
                    )
                  ]
                },
                `${t}-H${n}`
              );
            }) })
          ]
        },
        t
      ))
    },
    g
  ) });
};
export {
  X as HalfYearView,
  l as getHalfYearFromMonth,
  p as getHalfYearRange
};
