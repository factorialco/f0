import { jsx as m, jsxs as Q } from "react/jsx-runtime";
import { cn as N, focusRing as I } from "../../../../lib/utils.js";
import { AnimatePresence as L } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as P } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { isBefore as v } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js";
import { isAfter as k } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js";
import { isWithinInterval as R } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js";
const u = (a) => Math.floor(a / 3) + 1, W = (a) => a >= 1 && a <= 4 ? [0, 1, 2].map((r) => r + (a - 1) * 3) : [], p = (a, r) => {
  const f = W(a), d = f[0], g = f[f.length - 1], b = new Date(r, d, 1), h = new Date(r, g + 1, 0);
  return { from: b, to: h };
}, T = ({
  mode: a,
  selected: r,
  onSelect: f,
  year: d,
  motionDirection: g = 1,
  minDate: b,
  maxDate: h
}) => {
  const Y = [1, 2, 3, 4], M = /* @__PURE__ */ new Date(), w = M.getFullYear(), F = u(M.getMonth()), j = Math.floor(d / 5) * 5, z = Array.from({ length: 5 }, (t, n) => j + n), x = (t) => !!(t && typeof t == "object" && ("from" in t || "to" in t)), y = (t, n) => {
    const o = p(t, n);
    if (a === "single")
      f?.(o.from);
    else if (a === "range")
      if (!r || !x(r))
        f?.({
          from: o.from,
          to: void 0
        });
      else if (r && r.from && !r.to) {
        const e = r.from, s = u(e.getMonth()), i = e.getFullYear();
        if (s === t && i === n)
          f?.({
            from: o.from,
            to: o.to
          });
        else {
          const c = p(s, i), l = v(c.from, o.from) ? c.from : o.from, $ = k(c.to, o.to) ? c.to : o.to;
          f?.({
            from: l,
            to: $
          });
        }
      } else
        f?.({
          from: o.from,
          to: void 0
        });
  }, C = (t, n) => {
    if (!r) return !1;
    const o = p(t, n);
    if (!o.to) return !1;
    if (x(r)) {
      const e = r.from, s = r.to;
      if (e && s)
        return R(o.from, { start: e, end: s }) || R(o.to, { start: e, end: s }) || v(o.from, e) && k(o.to, s);
      if (e)
        return u(e.getMonth()) === t && e.getFullYear() === n;
    } else {
      const e = r.getMonth();
      return u(e) === t && r.getFullYear() === n;
    }
    return !1;
  }, A = (t, n) => t === F && n === w, B = (t, n) => {
    if (!r || !x(r) || !r.from) return !1;
    const o = r.from;
    return u(o.getMonth()) === t && o.getFullYear() === n;
  }, D = (t, n) => {
    if (!r || !x(r) || !r.to) return !1;
    const o = r.to;
    return u(o.getMonth()) === t && o.getFullYear() === n;
  }, E = {
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
  return /* @__PURE__ */ m(L, { mode: "popLayout", initial: !1, custom: g, children: /* @__PURE__ */ m(
    P.div,
    {
      className: "flex flex-col gap-4",
      custom: g,
      variants: E,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] },
      children: z.map((t) => /* @__PURE__ */ Q(
        "div",
        {
          className: "flex items-center justify-center gap-3 pl-1.5",
          children: [
            /* @__PURE__ */ m("div", { className: "text-medium text-right text-sm tabular-nums text-f1-foreground-secondary", children: t }),
            /* @__PURE__ */ m("div", { className: "flex flex-1", children: Y.map((n) => {
              const o = C(n, t), e = A(n, t), s = B(n, t), i = D(n, t), c = p(n, t), l = b && v(c.from, b) || h && c.to && k(c.to, h);
              return /* @__PURE__ */ Q(
                "button",
                {
                  onClick: () => y(n, t),
                  disabled: l,
                  className: N(
                    "relative isolate flex h-10 flex-1 items-center justify-center rounded-md p-2 tabular-nums",
                    "after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded-md after:ring-1 after:ring-inset after:ring-f1-border-secondary after:transition-all after:duration-100 after:content-['']",
                    l && "cursor-not-allowed text-f1-foreground-secondary",
                    !l && "hover:after:bg-f1-background-hover",
                    I(),
                    (s || i) && "after:inset-x-0",
                    o && "after:bg-f1-background-selected-bold after:ring-0 hover:after:bg-f1-background-selected-bold-hover [&>span]:text-f1-foreground-inverse",
                    o && !s && !i && a === "range" && "rounded-none bg-f1-background-selected after:opacity-0 after:transition-none first:rounded-l-md last:rounded-r-md hover:bg-f1-background-selected [&>span]:text-f1-foreground-selected"
                  ),
                  children: [
                    s && /* @__PURE__ */ m("div", { className: "absolute inset-y-0 right-0 z-0 w-1/2 bg-f1-background-selected" }),
                    i && /* @__PURE__ */ m("div", { className: "absolute inset-y-0 left-0 z-0 w-1/2 bg-f1-background-selected" }),
                    /* @__PURE__ */ Q("span", { className: "z-10 font-medium", children: [
                      "Q",
                      n
                    ] }),
                    e && /* @__PURE__ */ m(
                      "div",
                      {
                        className: N(
                          "absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                          o && a === "single" && "bg-f1-background",
                          (s || i) && "bg-f1-background",
                          !s && !i && o && a === "range" && "bg-f1-background-selected-bold"
                        )
                      }
                    )
                  ]
                },
                `${t}-Q${n}`
              );
            }) })
          ]
        },
        t
      ))
    },
    d
  ) });
};
export {
  T as QuarterView
};
