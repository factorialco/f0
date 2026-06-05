import { jsx as e, jsxs as u } from "react/jsx-runtime";
import { useState as f } from "react";
import { ButtonInternal as v } from "../../F0Button/internal.js";
import { F0Icon as y } from "../../F0Icon/index.js";
import g from "../../../icons/app/FaceNegative.js";
import b from "../../../icons/app/FaceNeutral.js";
import h from "../../../icons/app/FacePositive.js";
import w from "../../../icons/app/FaceSuperNegative.js";
import x from "../../../icons/app/FaceSuperPositive.js";
import "../../../icons/app/Menu.js";
import N from "../../../icons/app/Reaction.js";
import { EmojiImage as F } from "../../../lib/emojis.js";
import { Action as I } from "../../../ui/Action/Action.js";
import { AnimatePresence as A } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as i } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { BaseAvatar as P } from "../internal/BaseAvatar/BaseAvatar.js";
import { useI18n as R } from "../../../lib/providers/i18n/i18n-provider.js";
const j = {
  superNegative: w,
  negative: g,
  neutral: b,
  positive: h,
  superPositive: x
}, z = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, $ = ({
  firstName: s,
  lastName: l,
  src: m,
  "aria-label": c,
  "aria-labelledby": p,
  pulse: t,
  onPulseClick: o
}) => {
  const r = R(), [n, d] = f(!t);
  return /* @__PURE__ */ e("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ e(A, { mode: "popLayout", initial: !!n, children: n ? /* @__PURE__ */ e(
    i.div,
    {
      className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: /* @__PURE__ */ e(
        i.div,
        {
          initial: { opacity: 0, originX: 0.6, originY: 0.6 },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: { opacity: 0, scale: 0 },
          transition: {
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => d(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: /* @__PURE__ */ e(F, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ u(
    i.div,
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      className: "relative h-10 w-10",
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: [
        /* @__PURE__ */ e(
          P,
          {
            type: "rounded",
            name: [s, l],
            src: m,
            size: "lg",
            color: "random",
            "aria-label": c,
            "aria-labelledby": p
          }
        ),
        t ? /* @__PURE__ */ e("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ e(
          I,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (a) => {
              a.preventDefault(), a.stopPropagation(), o();
            },
            "aria-label": r.actions.edit,
            children: /* @__PURE__ */ e(
              y,
              {
                icon: j[t],
                color: z[t],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ e(
          i.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ e(
              v,
              {
                compact: !0,
                label: r.actions.add,
                variant: "neutral",
                size: "sm",
                icon: N,
                onClick: (a) => {
                  a.preventDefault(), a.stopPropagation(), o();
                },
                hideLabel: !0
              }
            )
          },
          "reaction-button"
        )
      ]
    },
    "avatar"
  ) }) });
};
$.displayName = "PulseAvatar";
export {
  $ as F0AvatarPulse,
  j as pulseIcon,
  z as pulseIconColor
};
