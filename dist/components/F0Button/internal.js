import { jsxs as c, Fragment as T, jsx as t } from "react/jsx-runtime";
import { forwardRef as q, useState as w } from "react";
import { F0Icon as E } from "../F0Icon/index.js";
import { EmojiImage as D } from "../../lib/emojis.js";
import { useTextFormatEnforcer as J } from "../../lib/text.js";
import { cn as u } from "../../lib/utils.js";
import { Action as K } from "../../ui/Action/Action.js";
import { Counter as Q } from "../../ui/Counter/index.js";
import { fontSizeVariants as U } from "./variants.js";
import { OneEllipsis as V } from "../../lib/OneEllipsis/OneEllipsis.js";
import { motion as W } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const X = W.create(E), at = q(function({
  label: s,
  hideLabel: e,
  onClick: F,
  disabled: p,
  withoutDisabledAppearance: C,
  loading: N,
  icon: r,
  iconPosition: i = "left",
  emoji: a,
  variant: g = "default",
  size: o = "md",
  fontSize: I,
  append: S,
  className: j,
  "aria-label": z,
  tooltip: B,
  noAutoTooltip: H,
  noTitle: M,
  iconRotate: k = !1,
  counterValue: x,
  ...l
}, A) {
  J(
    s,
    { disallowEmpty: !0, disallowEmojis: !0 },
    { warn: !0, componentName: "F0Button" }
  );
  const [G, y] = w(!1), [m, h] = w(!1), L = async (R) => {
    const b = F?.(R);
    if (b instanceof Promise) {
      y(!0);
      try {
        await b;
      } finally {
        y(!1);
      }
    }
  }, d = N || G, f = e || a, n = (s ?? "").toString(), O = I ?? o, v = r ? k ? /* @__PURE__ */ t(
    X,
    {
      size: o === "sm" ? "sm" : "md",
      icon: r,
      animate: {
        rotate: m ? 90 : 0,
        scale: m ? [1, 0.8, 1] : 1,
        filter: m ? ["blur(0px)", "blur(1px)", "blur(0px)"] : "blur(0px)"
      },
      transition: {
        rotate: {
          duration: 0.5,
          ease: [0.77, 0, 0.13, 1.52]
        },
        scale: {
          duration: 0.4,
          ease: [0.65, 0, 0.35, 1]
        },
        filter: {
          duration: 0.4,
          ease: [0.65, 0, 0.35, 1]
        }
      }
    }
  ) : /* @__PURE__ */ t(E, { size: o === "sm" ? "sm" : "md", icon: r }) : null;
  return /* @__PURE__ */ c(T, { children: [
    g === "ai" && /* @__PURE__ */ t(
      "svg",
      {
        width: "0",
        height: "0",
        style: { position: "absolute", pointerEvents: "none" },
        children: /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ c(
          "linearGradient",
          {
            id: "ai-gradient",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [
              /* @__PURE__ */ t("stop", { offset: "0%", stopColor: "#F1480C" }),
              /* @__PURE__ */ t("stop", { offset: "100%", stopColor: "#6780F9" })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ t(
      K,
      {
        variant: g,
        size: o,
        disabled: p || d,
        ref: A,
        ...l,
        tooltip: B ?? (!H && e && s),
        onClick: L,
        loading: d,
        className: u(
          "max-w-full",
          C && p && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default",
          j
        ),
        mode: e ? "only" : "default",
        "aria-label": z || l.title || n,
        title: M ? void 0 : l.title || (e ? n : void 0),
        compact: !!f,
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: /* @__PURE__ */ c(
          "div",
          {
            className: u(
              d && "invisible",
              "flex min-w-0 flex-1 items-center justify-center gap-1",
              r && !e && (i === "right" ? "-mr-[3px]" : "-ml-[3px]")
            ),
            children: [
              i === "left" && v,
              a && /* @__PURE__ */ t(
                D,
                {
                  emoji: a,
                  size: o === "sm" ? "sm" : "md",
                  alt: ""
                }
              ),
              f ? /* @__PURE__ */ t("span", { className: "sr-only", children: n }) : /* @__PURE__ */ t(
                V,
                {
                  className: u(
                    f && "sr-only",
                    U({ fontSize: O })
                  ),
                  tag: "span",
                  children: n
                }
              ),
              i === "right" && v,
              S,
              " ",
              x && /* @__PURE__ */ t(Q, { value: x, size: "sm", type: "selected" })
            ]
          }
        )
      }
    )
  ] });
});
export {
  at as ButtonInternal
};
