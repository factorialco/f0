import { jsx as u, jsxs as A } from "react/jsx-runtime";
import { cn as v, focusRing as N } from "../../../../lib/utils.js";
import { AnimatePresence as B } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as E } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { isBefore as g } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isBefore.js";
import { startOfYear as d } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/startOfYear.js";
import { isAfter as S } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isAfter.js";
import { endOfYear as m } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/endOfYear.js";
import { isWithinInterval as V } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isWithinInterval.js";
import { isSameYear as I } from "../../../../node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/isSameYear.js";
function Q({
  mode: t,
  selected: o,
  onSelect: e,
  decade: l,
  motionDirection: b = 1,
  minDate: p,
  maxDate: h
}) {
  const k = /* @__PURE__ */ new Date(), s = (r) => !!(r && typeof r == "object" && ("from" in r || "to" in r)), f = Math.floor(l / 10) * 10, Y = [
    f - 1,
    ...Array.from({ length: 10 }, (r, n) => f + n),
    f + 10
  ], w = (r) => {
    const n = new Date(r, 0, 1);
    if (t === "single")
      e?.({
        from: d(n),
        to: m(n)
      });
    else if (t === "range")
      if (!o || !s(o))
        e?.({
          from: n,
          to: void 0
        });
      else if (o && o.from && !o.to)
        if (I(o.from, n))
          e?.({
            from: d(o.from),
            to: m(o.from)
          });
        else {
          const i = g(o.from, n) ? o.from : n, a = g(o.from, n) ? n : o.from;
          e?.({
            from: d(i),
            to: m(a)
          });
        }
      else
        e?.({
          from: n,
          to: void 0
        });
  }, y = (r) => {
    if (!o) return !1;
    if (s(o)) {
      if (o.from && o.to) {
        const n = new Date(r, 6, 1);
        return V(n, {
          start: o.from,
          end: o.to
        });
      } else if (o.from)
        return o.from.getFullYear() === r;
    } else
      return o.getFullYear() === r;
    return !1;
  }, F = (r) => r === k.getFullYear(), j = (r) => !o || !s(o) || !o.from ? !1 : o.from.getFullYear() === r, z = (r) => !o || !s(o) || !o.to ? !1 : o.to.getFullYear() === r, C = (r) => r < f || r >= f + 10, D = {
    hidden: (r) => ({
      opacity: 0,
      x: r === 1 ? 40 : -40
    }),
    visible: { opacity: 1, x: 0 },
    exit: (r) => ({
      opacity: 0,
      x: r === 1 ? -40 : 40
    })
  };
  return /* @__PURE__ */ u(B, { mode: "popLayout", initial: !1, custom: b, children: /* @__PURE__ */ u(
    E.div,
    {
      className: "grid grid-cols-4 gap-y-3",
      custom: b,
      variants: D,
      initial: "hidden",
      animate: "visible",
      exit: "exit",
      transition: { duration: 0.15, ease: [0.455, 0.03, 0.515, 0.955] },
      children: Y.map((r) => {
        const n = y(r), i = j(r), a = z(r), O = C(r), R = F(r), x = new Date(r, 0, 1), c = p && g(d(x), p) || h && S(m(x), h);
        return /* @__PURE__ */ A(
          "button",
          {
            onClick: () => w(r),
            disabled: c,
            className: v(
              "relative isolate flex h-10 items-center justify-center rounded-md font-medium text-f1-foreground transition-colors duration-100 after:absolute after:inset-0 after:z-0 after:rounded-md after:bg-f1-background-selected-bold after:opacity-0 after:transition-all after:duration-100 after:content-['']",
              !c && "hover:bg-f1-background-hover hover:after:bg-f1-background-selected-bold-hover",
              c && "cursor-not-allowed text-f1-foreground-secondary",
              N(),
              O && "[&>span]:font-normal [&>span]:text-f1-foreground-secondary",
              n && t === "single" && "bg-f1-background-selected-bold after:opacity-100 hover:bg-f1-background-selected-bold-hover [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100",
              n && t === "range" && "rounded-none bg-f1-background-selected hover:bg-f1-background-selected [&:nth-child(4n+1)]:rounded-s-md [&:nth-child(4n+4)]:rounded-e-md [&>span]:text-f1-foreground-selected [&>span]:opacity-100",
              (i || a) && t === "range" && "rounded-none bg-f1-background-selected after:opacity-100 [&>span]:z-10 [&>span]:text-f1-foreground-inverse [&>span]:opacity-100",
              i && t === "range" && a && "rounded-s-md",
              a && t === "range" && "rounded-e-md"
            ),
            children: [
              /* @__PURE__ */ u("span", { children: r }),
              R && /* @__PURE__ */ u(
                "div",
                {
                  className: v(
                    "absolute inset-x-0 bottom-1 z-20 mx-auto h-0.5 w-1.5 rounded-full bg-f1-background-selected-bold transition-colors duration-100",
                    n && t === "single" && "bg-f1-background",
                    (i || a) && "bg-f1-background",
                    !i && !a && n && t === "range" && "bg-f1-background-selected-bold"
                  )
                }
              )
            ]
          },
          r
        );
      })
    },
    l
  ) });
}
export {
  Q as YearView
};
