import { jsx as t, jsxs as c, Fragment as h } from "react/jsx-runtime";
import b from "../../../node_modules/.pnpm/embla-carousel-autoplay@8.5.2_embla-carousel@8.6.0/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js";
import { WheelGesturesPlugin as z } from "../../../node_modules/.pnpm/embla-carousel-wheel-gestures@8.0.1_embla-carousel@8.6.0/node_modules/embla-carousel-wheel-gestures/dist/embla-carousel-wheel-gestures.esm.js";
import d from "react";
import { withDataTestId as I } from "../../../lib/data-testid/index.js";
import { experimentalComponent as M } from "../../../lib/experimental.js";
import { Carousel as V, CarouselContent as y, CarouselItem as A, CarouselPrevious as D, CarouselNext as _, CarouselDots as $ } from "../../../ui/carousel.js";
import { DynamicCarousel as j } from "./DynamicCarousel/index.js";
import { carouselItemVariants as E } from "./types.js";
function s(l, e, i) {
  if (i) {
    const n = (l || 1) / 2;
    return e ? `peek${n}` : n;
  }
  return e ? `peek${l || 1}` : l || 1;
}
const L = ({
  children: l,
  columns: e,
  showArrows: i = !0,
  showDots: n = !0,
  autoplay: u = !1,
  delay: f = 3e3,
  showPeek: r = !1,
  doubleColumns: p
}) => {
  const C = d.Children.toArray(l), o = d.useRef(
    u ? b({ delay: f, stopOnInteraction: !0 }) : void 0
  ), x = () => {
    o.current && o.current.stop();
  }, g = () => {
    o.current && o.current.play();
  };
  return e ? /* @__PURE__ */ t(
    V,
    {
      className: "flex w-full flex-col gap-3 @container",
      opts: {
        align: r ? "center" : "start",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [o.current, z()].filter(Boolean),
      onMouseEnter: u ? x : void 0,
      onMouseLeave: u ? g : void 0,
      children: /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ c("div", { className: "relative", children: [
          /* @__PURE__ */ t(y, { children: d.Children.map(C, (v, m) => {
            const a = p?.find(
              (N) => N.index === m
            );
            return /* @__PURE__ */ t(
              A,
              {
                className: E({
                  default: s(e.default, r),
                  xs: s(
                    e.xs,
                    r,
                    a?.sizes?.includes("xs")
                  ),
                  sm: s(
                    e.sm,
                    r,
                    a?.sizes?.includes("sm")
                  ),
                  md: s(
                    e.md,
                    r,
                    a?.sizes?.includes("md")
                  ),
                  lg: s(
                    e.lg,
                    r,
                    a?.sizes?.includes("lg")
                  ),
                  peek: r
                }),
                children: v
              },
              m
            );
          }) }),
          i && /* @__PURE__ */ c(h, { children: [
            /* @__PURE__ */ t(D, { label: "Previous" }),
            /* @__PURE__ */ t(_, { label: "Next" })
          ] })
        ] }),
        n && /* @__PURE__ */ t($, {})
      ] })
    }
  ) : /* @__PURE__ */ t(j, { children: l });
}, H = I(
  M("Carousel", L)
);
export {
  H as Carousel
};
