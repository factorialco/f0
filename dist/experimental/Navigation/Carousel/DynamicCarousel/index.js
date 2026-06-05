import { jsxs as y, jsx as n } from "react/jsx-runtime";
import { useRef as b, useState as f, useLayoutEffect as S } from "react";
import { ButtonInternal as m } from "../../../../components/F0Button/internal.js";
import k from "../../../../icons/app/ChevronLeft.js";
import $ from "../../../../icons/app/ChevronRight.js";
import "../../../../icons/app/Menu.js";
import { cn as u } from "../../../../lib/utils.js";
const e = 28, d = 16, R = ({ children: o }) => {
  const r = b(null), [s, x] = f(!0), [c, v] = f(!1);
  S(() => {
    const t = r.current;
    if (!t) return;
    const a = new ResizeObserver(() => p());
    a.observe(t);
    const i = () => {
      p();
    };
    return t.addEventListener("scroll", i), p(), () => {
      a.disconnect(), t.removeEventListener("scroll", i);
    };
  }, []);
  function g() {
    const t = r.current;
    t && t.scrollBy({
      left: t.clientWidth,
      behavior: "smooth"
    });
  }
  function h() {
    const t = r.current;
    t && t.scrollBy({
      left: -t.clientWidth,
      behavior: "smooth"
    });
  }
  const p = () => {
    if (!r.current) return;
    const { scrollLeft: t, scrollWidth: a, clientWidth: i } = r.current;
    v(t > 0), x(t + i < a);
  };
  let l = "";
  return c && s ? l = `linear-gradient(to right, transparent 0px, transparent ${e}px, black ${2 * e}px, black calc(100% - ${3 * e}px), transparent calc(100% - ${2 * e}px), transparent 100%)` : c && !s ? l = `linear-gradient(to right, transparent 0px, transparent ${e}px, black ${2 * e}px, black 100%)` : !c && s ? l = `linear-gradient(to right, black 0px, black calc(100% - ${3 * e}px), transparent calc(100% - ${2 * e}px), transparent 100%)` : l = "none", /* @__PURE__ */ y("div", { className: "relative", children: [
    /* @__PURE__ */ n(
      "div",
      {
        ref: r,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${e}px`,
          padding: `${e}px`,
          height: `calc(100% + ${e * 2}px)`,
          width: `calc(100% + ${e * 2}px)`,
          maskImage: l,
          WebkitMaskImage: l,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(o) ? o.map((t, a) => /* @__PURE__ */ n(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: e + d + "px"
            },
            children: t
          },
          a
        )) : o && /* @__PURE__ */ n(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: e + d + "px"
            },
            children: o
          }
        )
      }
    ),
    c && /* @__PURE__ */ n(
      m,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: u(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: h,
        icon: k,
        label: "Previous",
        hideLabel: !0
      }
    ),
    s && /* @__PURE__ */ n(
      m,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: u(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: g,
        icon: $,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
};
export {
  R as DynamicCarousel,
  e as SPACE_FOR_WIDGET_SHADOW
};
