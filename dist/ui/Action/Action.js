import { jsxs as r, Fragment as g, jsx as n } from "react/jsx-runtime";
import { cva as O } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import T from "react";
import { TooltipInternal as q } from "../../experimental/Overlays/Tooltip/index.js";
import { Link as D } from "../../lib/linkHandler.js";
import { cn as o, focusRing as G } from "../../lib/utils.js";
import { Skeleton as H } from "../skeleton.js";
import { isLinkStyled as C } from "./utils.js";
import { actionVariants as J, linkSizeVariants as K, buttonSizeVariants as Q, iconVariants as U, loadingVariants as W } from "./variants.js";
import { AnimatePresence as X } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as Y } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const Z = T.forwardRef((e, s) => {
  const l = (M) => "href" in M, {
    children: N,
    prepend: V,
    append: z,
    prependOutside: c,
    appendOutside: m,
    disabled: d,
    loading: i,
    pressed: f,
    className: j,
    href: F,
    target: u,
    variant: L,
    size: a = "md",
    mode: S = "default",
    title: w,
    compact: A = !1,
    "aria-label": B,
    tooltip: p,
    onMouseEnter: x,
    onMouseLeave: h,
    ...P
  } = e, R = l(e) ? "link" : "default", t = L ?? R, _ = J({
    variant: t,
    pressed: f
  }), E = C(t) ? K({ size: a }) : Q({ size: a }), I = O({
    variants: {
      size: {
        sm: "!px-[4px]",
        md: "!px-[6px]",
        lg: "!px-[10px]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }), b = /* @__PURE__ */ r(g, { children: [
    /* @__PURE__ */ r(
      "div",
      {
        className: o(
          "main flex min-w-0 flex-1 items-center justify-center gap-1",
          A && I({ size: a }),
          i && "opacity-0",
          U({ variant: t, mode: S })
        ),
        children: [
          V,
          /* @__PURE__ */ n("span", { className: "flex min-w-0 flex-1 items-center justify-center", children: N }),
          z
        ]
      }
    ),
    /* @__PURE__ */ n(X, { children: i && /* @__PURE__ */ n(g, { children: C(t) ? /* @__PURE__ */ n(H, { className: "absolute inset-0 my-auto h-full w-full" }) : /* @__PURE__ */ n("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ n(
      Y.div,
      {
        className: o(
          W({
            size: a,
            variant: t
          })
        ),
        animate: { rotate: 360 },
        transition: {
          duration: 1,
          repeat: 1 / 0,
          ease: "linear"
        },
        "aria-label": "Loading..."
      }
    ) }) }) })
  ] }), v = {
    disabled: d,
    className: o(_, E, G(), j),
    "aria-busy": i,
    "aria-label": B,
    title: w,
    ...P
  }, k = l(e) ? /* @__PURE__ */ n(
    D,
    {
      ...v,
      onClick: e.onClick,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onMouseEnter: x,
      onMouseLeave: h,
      ref: s,
      href: F,
      target: u,
      rel: u === "_blank" ? "noopener noreferrer" : void 0,
      "aria-disabled": d,
      role: "link",
      children: b
    }
  ) : /* @__PURE__ */ n(
    "button",
    {
      ...v,
      onClick: e.onClick,
      onFocus: e.onFocus,
      onBlur: e.onBlur,
      onMouseEnter: x,
      onMouseLeave: h,
      ref: s,
      "data-pressed": f,
      role: "button",
      children: b
    }
  ), y = p ? /* @__PURE__ */ n(q, { description: p.toString(), delay: 1e3, children: k }) : k;
  return c || m ? /* @__PURE__ */ r("div", { className: "flex items-center", children: [
    c,
    y,
    m
  ] }) : y;
});
Z.displayName = "Action";
export {
  Z as Action
};
