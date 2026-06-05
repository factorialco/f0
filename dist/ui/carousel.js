import { jsx as n } from "react/jsx-runtime";
import R from "../node_modules/.pnpm/embla-carousel-react@8.6.0_react@18.3.1/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js";
import * as t from "react";
import { ButtonInternal as N } from "../components/F0Button/internal.js";
import { SPACE_FOR_WIDGET_SHADOW as v } from "../experimental/Navigation/Carousel/DynamicCarousel/index.js";
import D from "../icons/app/ArrowLeft.js";
import P from "../icons/app/ArrowRight.js";
import "../icons/app/Menu.js";
import { cn as m } from "../lib/utils.js";
const k = t.createContext(null);
function x() {
  const s = t.useContext(k);
  if (!s)
    throw new Error("useCarousel must be used within a <Carousel />");
  return s;
}
const E = t.forwardRef(
  ({
    orientation: s = "horizontal",
    opts: c,
    setApi: r,
    plugins: u,
    className: f,
    children: i,
    ...a
  }, d) => {
    const [b, l] = R(
      {
        ...c,
        axis: s === "horizontal" ? "x" : "y"
      },
      u
    ), [y, C] = t.useState(!1), [e, o] = t.useState(!1), p = t.useCallback((h) => {
      h && (C(h.canScrollPrev()), o(h.canScrollNext()));
    }, []), g = t.useCallback(() => {
      l?.scrollPrev();
    }, [l]), w = t.useCallback(() => {
      l?.scrollNext();
    }, [l]), S = t.useCallback(
      (h) => {
        h.key === "ArrowLeft" ? (h.preventDefault(), g()) : h.key === "ArrowRight" && (h.preventDefault(), w());
      },
      [g, w]
    );
    return t.useEffect(() => {
      !l || !r || r(l);
    }, [l, r]), t.useEffect(() => {
      if (l)
        return p(l), l.on("reInit", p), l.on("select", p), () => {
          l?.off("select", p);
        };
    }, [l, p]), /* @__PURE__ */ n(
      k.Provider,
      {
        value: {
          carouselRef: b,
          api: l,
          opts: c,
          orientation: s || (c?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: w,
          canScrollPrev: y,
          canScrollNext: e
        },
        children: /* @__PURE__ */ n(
          "div",
          {
            ref: d,
            onKeyDownCapture: S,
            className: m("group/carousel relative", f),
            role: "region",
            "aria-roledescription": "carousel",
            ...a,
            children: i
          }
        )
      }
    );
  }
);
E.displayName = "Carousel";
const I = t.forwardRef(({ className: s, ...c }, r) => {
  const u = `linear-gradient(to right, transparent 0px, transparent ${v / 2}px, black ${v}px, black calc(100% - ${v}px), transparent calc(100% - ${v / 2}px), transparent 100%)`, { carouselRef: f, orientation: i } = x();
  return /* @__PURE__ */ n(
    "div",
    {
      ref: f,
      className: "overflow-hidden",
      style: {
        scrollbarWidth: "none",
        // For Firefox
        msOverflowStyle: "none",
        // For IE and Edge
        margin: `-${v}px`,
        padding: `${v}px`,
        height: `calc(100% + ${v * 2}px)`,
        width: `calc(100% + ${v * 2}px)`,
        maskImage: u,
        WebkitMaskImage: u
      },
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: r,
          className: m(
            "flex",
            i === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            s
          ),
          ...c
        }
      )
    }
  );
});
I.displayName = "CarouselContent";
const $ = t.forwardRef(({ className: s, ...c }, r) => {
  const { orientation: u } = x();
  return /* @__PURE__ */ n(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: m(
        "min-w-0 shrink-0 grow-0 basis-full",
        u === "horizontal" ? "pl-4" : "pt-4",
        s
      ),
      ...c
    }
  );
});
$.displayName = "CarouselItem";
const z = t.forwardRef(({ className: s, variant: c = "outline", ...r }, u) => {
  const { orientation: f, scrollPrev: i, canScrollPrev: a } = x();
  return /* @__PURE__ */ n(
    "div",
    {
      className: m(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !a && "opacity-0 group-hover/carousel:opacity-0",
        f === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      ),
      children: /* @__PURE__ */ n(
        N,
        {
          compact: !0,
          ref: u,
          size: "sm",
          variant: c,
          className: m("absolute opacity-100 transition-all", s),
          disabled: !a,
          onClick: i,
          ...r,
          label: "Previous",
          icon: D,
          hideLabel: !0
        }
      )
    }
  );
});
z.displayName = "CarouselPrevious";
const L = t.forwardRef(
  ({ className: s, variant: c = "outline", ...r }, u) => {
    const { orientation: f, scrollNext: i, canScrollNext: a } = x();
    return /* @__PURE__ */ n(
      "div",
      {
        className: m(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !a && "opacity-0 group-hover/carousel:opacity-0",
          f === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        ),
        children: /* @__PURE__ */ n(
          N,
          {
            ref: u,
            size: "sm",
            variant: c,
            compact: !0,
            className: m("absolute opacity-100 transition-all", s),
            disabled: !a,
            onClick: i,
            ...r,
            label: "Next",
            icon: P,
            hideLabel: !0
          }
        )
      }
    );
  }
);
L.displayName = "CarouselNext";
const W = t.forwardRef(({ ...s }, c) => {
  const { api: r } = x(), [, u] = t.useState(!1), f = t.useRef(null), i = t.useCallback(() => {
    u((e) => !e);
  }, []);
  t.useEffect(() => {
    if (r)
      return r.on("select", i), r.on("reInit", i), () => {
        r.off("select", i), r.off("reInit", i);
      };
  }, [r, i]);
  const a = r?.scrollSnapList().length || 0, d = r?.selectedScrollSnap() || 0;
  if (t.useEffect(() => {
    if (!f.current) return;
    const e = f.current, o = 16, p = d * o - e.clientWidth / 2 + o / 2;
    e.scrollTo({
      left: p,
      behavior: "smooth"
    });
  }, [d]), t.useEffect(() => {
    const e = f.current;
    if (!e) return;
    const o = (p) => {
      p.preventDefault(), p.stopPropagation();
    };
    return e.addEventListener("wheel", o, { passive: !1 }), e.addEventListener("touchmove", o, { passive: !1 }), () => {
      e.removeEventListener("wheel", o), e.removeEventListener("touchmove", o);
    };
  }, []), a <= 1)
    return null;
  const b = a > 5 ? 5 : a, l = Array.from({ length: a }, (e, o) => o), y = Math.min(b, a) * 16, C = (e) => {
    if (b === a) return null;
    const o = Math.abs(e - d);
    if (o === 0 || o === 1) return "scale-100";
    if (o === 2)
      return d === 0 || d === a - 1 ? "scale-100" : "scale-75";
    if (o === 3)
      return d === 0 || d === a - 1 ? "scale-75" : "scale-50";
    if (o >= 4) return "scale-50";
  };
  return /* @__PURE__ */ n("div", { ref: c, className: m("flex justify-center", s.className), children: /* @__PURE__ */ n(
    "div",
    {
      className: "relative overflow-hidden",
      style: { width: `${y}px` },
      children: /* @__PURE__ */ n(
        "div",
        {
          ref: f,
          className: "flex w-full gap-0 overflow-x-scroll",
          style: {
            scrollbarWidth: "none",
            overscrollBehavior: "none"
          },
          tabIndex: 0,
          "aria-label": "Carousel pagination",
          onKeyDown: (e) => {
            e.key === "ArrowLeft" ? (e.preventDefault(), r?.scrollPrev()) : e.key === "ArrowRight" && (e.preventDefault(), r?.scrollNext());
          },
          children: l.map((e) => /* @__PURE__ */ n(
            "button",
            {
              className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
              "aria-label": `Go to slide ${e + 1}`,
              "aria-current": e === d ? "true" : void 0,
              onClick: () => r?.scrollTo(e),
              tabIndex: -1,
              children: /* @__PURE__ */ n(
                "div",
                {
                  className: m(
                    "h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]",
                    e === d && "rounded-[3px] opacity-100 group-hover/dot:opacity-100",
                    C(e)
                  )
                }
              )
            },
            e
          ))
        }
      )
    }
  ) });
});
W.displayName = "CarouselDots";
export {
  E as Carousel,
  I as CarouselContent,
  W as CarouselDots,
  $ as CarouselItem,
  L as CarouselNext,
  z as CarouselPrevious
};
