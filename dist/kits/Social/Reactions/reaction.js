import { jsx as o } from "react/jsx-runtime";
import { useState as l, useRef as h } from "react";
import "../../../node_modules/.pnpm/number-flow@0.5.8/node_modules/number-flow/dist/lite-BTIaQdTe.js";
import { N as C } from "../../../node_modules/.pnpm/@number-flow_react@0.5.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@number-flow/react/dist/NumberFlow-client-48rw3j0J.js";
import { Tooltip as E } from "../../../experimental/Overlays/Tooltip/index.js";
import { useEmojiConfetti as N, getEmojiLabel as j, EmojiImage as k } from "../../../lib/emojis.js";
import { cn as m } from "../../../lib/utils.js";
import { Action as z } from "../../../ui/Action/Action.js";
function S({
  emoji: n,
  initialCount: f,
  hasReacted: d = !1,
  users: u,
  onInteraction: p
}) {
  const [e, b] = l(d), [i, g] = l(f), r = h(null), { fireEmojiConfetti: v } = N(), x = (t, c) => {
    t.stopPropagation(), g(i + (e ? -1 : 1)), b(!e), p?.(c), e || v(c, r);
  }, a = u?.map((t) => t.name).join(", ") || "", s = /* @__PURE__ */ o(
    z,
    {
      ref: r,
      variant: "outline",
      size: "md",
      compact: !0,
      onClick: (t) => {
        x(t, n);
      },
      className: m(
        "flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        e && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
      ),
      "aria-label": j(n),
      prepend: /* @__PURE__ */ o(k, { emoji: n, size: "md" }),
      children: /* @__PURE__ */ o(
        C,
        {
          value: i,
          spinTiming: {
            duration: 200,
            easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
          },
          className: m(
            "tabular-nums",
            e ? "text-f1-foreground-selected" : "text-f1-foreground"
          )
        }
      )
    }
  );
  return a ? /* @__PURE__ */ o(E, { label: a, children: s }) : s;
}
export {
  S as Reaction
};
