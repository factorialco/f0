import { jsxs as r, jsx as e, Fragment as A } from "react/jsx-runtime";
import R from "react";
import { ButtonInternal as z } from "../../components/F0Button/internal.js";
import "../../icons/app/Menu.js";
import B from "../../icons/app/Plus.js";
import { cn as c } from "../../lib/utils.js";
import { useInfiniteScrollPagination as C } from "../../patterns/OneDataCollection/hooks/useInfiniteScrollPagination.js";
import { Spinner as f } from "../Spinner/index.js";
import { LaneHeader as I } from "./components/LaneHeader.js";
import { LoadingSkeleton as u } from "./components/LoadingSkeleton.js";
import { ScrollArea as h } from "../scrollarea.js";
import { AnimatePresence as d } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as v } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0Card as _ } from "../../components/F0Card/F0Card.js";
function X({
  title: y,
  items: t,
  renderCard: x,
  getKey: g,
  emptyState: b,
  fetchMore: N,
  variant: w = "neutral",
  loading: o = !1,
  hasMore: a = !1,
  loadingMore: i = !1,
  total: j,
  onPrimaryAction: L,
  onFooterAction: s,
  dropPlaceholderIndex: n
}) {
  const S = {
    type: "infinite-scroll",
    cursor: null,
    hasMore: a,
    total: t.length + (a ? 1 : 0),
    perPage: 3
  }, { loadingIndicatorRef: k } = C(
    S,
    o,
    i,
    N ?? (() => {
    })
  ), l = !!s;
  return /* @__PURE__ */ r("div", { className: "shadow-sm group relative flex h-full w-[322px] flex-col", children: [
    /* @__PURE__ */ e(
      I,
      {
        label: y || "Lane",
        variant: w,
        count: j ?? t.length,
        onPrimaryAction: L
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        className: c(
          "relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1",
          (l || t.length === 0) && "pb-11",
          !l && t.length === 0 && n !== void 0 && "pb-1"
        ),
        children: o ? /* @__PURE__ */ r(
          h,
          {
            className: c(
              "relative h-full flex-1 rounded-lg",
              o && "select-none opacity-50 transition-opacity"
            ),
            children: [
              /* @__PURE__ */ e(u, {}),
              /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
                v.div,
                {
                  className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ e(f, {})
                }
              ) })
            ]
          }
        ) : t.length === 0 && n === void 0 ? b : /* @__PURE__ */ r(A, { children: [
          /* @__PURE__ */ e(h, { className: "relative h-full flex-1", children: /* @__PURE__ */ r(
            "div",
            {
              className: c(
                "relative",
                i && "select-none opacity-50 transition-opacity"
              ),
              "aria-live": i ? "polite" : void 0,
              "aria-busy": i ? "true" : void 0,
              children: [
                t.length === 0 && n !== void 0 ? /* @__PURE__ */ e("div", { className: "relative my-1 mt-1.5", children: /* @__PURE__ */ e(_.Skeleton, { compact: !0 }) }) : t.map((m, p) => {
                  const F = g(m, p);
                  return /* @__PURE__ */ e(R.Fragment, { children: x(m, p) }, F);
                }),
                (i || a) && /* @__PURE__ */ e(u, { ref: k })
              ]
            }
          ) }),
          i && /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(
            v.div,
            {
              className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ e(f, {})
            }
          ) })
        ] })
      }
    ),
    l && /* @__PURE__ */ e("div", { className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100", children: /* @__PURE__ */ e(
      z,
      {
        variant: "ghost",
        size: "md",
        className: "w-full justify-center",
        icon: B,
        label: "Add",
        hideLabel: !0,
        onClick: s
      }
    ) })
  ] });
}
export {
  X as Lane
};
