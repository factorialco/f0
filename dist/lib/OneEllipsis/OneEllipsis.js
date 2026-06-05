import { jsx as f, jsxs as y } from "react/jsx-runtime";
import H, { forwardRef as x, useState as T, useRef as C, useMemo as v, useEffect as R } from "react";
import { stripMarkdown as S, parseMarkdown as W } from "../markdown.js";
import { cn as b } from "../utils.js";
import { TooltipProvider as M, Tooltip as O, TooltipTrigger as _, TooltipContent as j } from "../../ui/tooltip.js";
const N = (e, s) => {
  if (!e) return !1;
  if (s > 1) {
    const t = parseInt(window.getComputedStyle(e).lineHeight);
    return e.scrollHeight > t * s;
  }
  return e.scrollWidth > e.clientWidth;
}, g = x(
  ({
    children: e,
    className: s,
    lines: t,
    onHasEllipsisChange: p,
    noTooltip: c,
    tag: r = "span",
    disabled: o,
    markdown: n,
    ...m
  }, i) => {
    const [h, d] = T(!1);
    R(() => {
      if (!i || typeof i != "object" || o) return;
      const l = i.current;
      if (!l) return;
      const u = () => {
        const E = N(l, t);
        return d(E), p(E), E;
      };
      u();
      const w = new ResizeObserver(() => {
        u();
      });
      return w.observe(l), () => {
        w.disconnect();
      };
    }, [i, p, t, o]);
    const a = n ? W(e) : void 0;
    return H.createElement(
      r,
      {
        ref: i,
        className: b(
          !c && h && "pointer-events-auto",
          "min-w-0 max-w-full overflow-hidden",
          !o && [
            t === 1 ? "text-ellipsis" : "",
            t > 1 ? `not-supports-[(-webkit-line-clamp:${t})]:whitespace-nowrap line-clamp-1 whitespace-normal` : "block whitespace-nowrap"
          ],
          s
        ),
        style: {
          WebkitLineClamp: t > 1 ? t : void 0,
          lineClamp: t > 1 ? t : void 0
        },
        ...m,
        ...n && a ? { dangerouslySetInnerHTML: { __html: a } } : {}
      },
      n ? void 0 : e
    );
  }
);
g.displayName = "EllipsisWrapper";
const z = x(
  ({
    className: e,
    lines: s = 1,
    children: t,
    noTooltip: p = !1,
    disabled: c = !1,
    markdown: r = !1,
    tag: o = "span",
    ...n
  }, m) => {
    const [i, h] = T(!1), d = C(null), a = m || d, l = v(() => /* @__PURE__ */ f(
      g,
      {
        ref: a,
        className: e,
        lines: s,
        onHasEllipsisChange: h,
        disabled: c,
        markdown: r,
        tag: o,
        ...n,
        "data-testid": "one-ellipsis",
        noTooltip: p,
        children: t
      }
    ), [e, s, a, t, c, r, o]), u = v(() => r ? S(t) : t, [t, r]);
    return i && !p ? /* @__PURE__ */ f(M, { children: /* @__PURE__ */ y(O, { children: [
      /* @__PURE__ */ f(_, { asChild: !0, children: l }),
      /* @__PURE__ */ f(j, { className: "max-w-xl", children: u })
    ] }) }) : l;
  }
);
z.displayName = "OneEllipsis";
export {
  z as OneEllipsis
};
