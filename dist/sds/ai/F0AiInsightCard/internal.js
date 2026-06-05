import { jsxs as r, Fragment as I, jsx as a } from "react/jsx-runtime";
import { forwardRef as M, useState as p } from "react";
import { useReducedMotion as R } from "../../../lib/a11y.js";
import { cn as o, focusRing as S } from "../../../lib/utils.js";
import { CardHeader as w } from "./components/CardHeader.js";
import { CardMetadata as D } from "./components/CardMetadata.js";
import { CardSparkline as H } from "./components/CardSparkline.js";
import { headingVariants as j, cardVariants as A } from "./variants.js";
import { motion as E } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const K = M(
  (g, v) => {
    const {
      description: x,
      heading: i,
      label: l,
      selected: s = !1,
      onClick: e,
      onAskOne: d,
      className: b,
      ...n
    } = g, [C, c] = p(!1), [N, m] = p(!1), u = C || N, k = R(), f = u && !!d, h = {
      duration: k ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, y = () => {
      e?.();
    }, F = (t) => {
      t.currentTarget === t.target && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), e?.());
    };
    return /* @__PURE__ */ r("div", { className: "relative", children: [
      s && /* @__PURE__ */ r(I, { children: [
        /* @__PURE__ */ a(
          "div",
          {
            "data-testid": "selected-border",
            className: o(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            "aria-hidden": !0,
            className: o(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ r(
        "div",
        {
          ref: v,
          role: e ? "button" : void 0,
          tabIndex: e ? 0 : void 0,
          className: o(
            A({ selected: s }),
            s && "relative border-transparent",
            e && "cursor-pointer select-none",
            e && S(),
            b
          ),
          onClick: e ? y : void 0,
          onKeyDown: e ? F : void 0,
          onMouseEnter: () => c(!0),
          onMouseLeave: () => c(!1),
          onFocus: () => m(!0),
          onBlur: () => m(!1),
          children: [
            /* @__PURE__ */ a(
              w,
              {
                description: x,
                isRevealed: u,
                onAskOne: d
              }
            ),
            n.content === "sparkline" ? /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ a("span", { className: o(j()), children: i }),
              /* @__PURE__ */ a(
                E.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: f ? 0 : 1 },
                  transition: h,
                  children: /* @__PURE__ */ a(
                    H,
                    {
                      data: n.data,
                      label: l ?? "",
                      invertStatus: n.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ a(
              D,
              {
                heading: i,
                label: l,
                shouldFadeContent: f,
                fadeTransition: h,
                ...n
              }
            )
          ]
        }
      )
    ] });
  }
);
K.displayName = "F0AiInsightCardInternal";
export {
  K as CardInternal
};
