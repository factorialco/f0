import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { useState as R, useRef as M, useEffect as S } from "react";
import { F0AvatarDate as j } from "../../../../components/avatars/F0AvatarDate/index.js";
import { useReducedMotion as C } from "../../../../lib/a11y.js";
import { EmojiImage as E } from "../../../../lib/emojis.js";
import { Link as L } from "../../../../lib/linkHandler.js";
import { withSkeleton as A } from "../../../../lib/skeleton.js";
import { cn as z, focusRing as I } from "../../../../lib/utils.js";
import { Skeleton as a } from "../../../../ui/skeleton.js";
import { CelebrationAvatar as B } from "./components/avatar.js";
import { useConfetti as D } from "./hooks/useConfetti.js";
import { EMOJI_MAP as F } from "./types.js";
const J = ({
  link: c,
  firstName: n,
  lastName: l,
  src: d,
  onClick: f,
  canReact: m = !0,
  lastEmojiReaction: r,
  onReactionSelect: u,
  type: h,
  typeLabel: p,
  date: x
}) => {
  const [b, i] = R(r), v = M(null);
  S(() => {
    i(r);
  }, [r]);
  const g = (t) => {
    i(t), u?.(t);
  }, s = C(), { canvasRef: N, handleMouseEnter: w, handleMouseLeave: k } = D(s), y = E({
    emoji: F[h],
    size: "sm"
  });
  return /* @__PURE__ */ o(
    L,
    {
      href: c,
      onClick: f,
      className: z(
        "relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow",
        I()
      ),
      onMouseEnter: s ? void 0 : w,
      onMouseLeave: s ? void 0 : k,
      children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: N,
            className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
          }
        ),
        /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(
          B,
          {
            firstName: n,
            lastName: l,
            src: d,
            canReact: m,
            lastEmojiReaction: b,
            onReactionSelect: g,
            pickerRef: v
          }
        ) }),
        /* @__PURE__ */ o("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ o("div", { className: "truncate font-medium text-f1-foreground", children: [
              n,
              " ",
              l
            ] }),
            /* @__PURE__ */ o("div", { className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary", children: [
              /* @__PURE__ */ e("span", { className: "truncate", children: p }),
              /* @__PURE__ */ e("span", { className: "shrink-0 leading-none", children: y })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "shrink-0", children: /* @__PURE__ */ e(j, { date: x }) })
        ] })
      ]
    }
  );
}, O = () => /* @__PURE__ */ o(
  "div",
  {
    className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { className: "basis-2/3 px-1 pt-1", children: /* @__PURE__ */ e(a, { className: "h-32 w-full rounded-lg" }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ o("div", { className: "flex flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(a, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(a, { className: "h-3 w-1/3" })
      ] }) }) })
    ]
  }
), Y = A(J, O);
export {
  J as BaseCelebration,
  Y as Celebration,
  O as CelebrationSkeleton
};
