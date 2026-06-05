import { jsxs as c, jsx as e } from "react/jsx-runtime";
import l from "../../../../node_modules/.pnpm/@emoji-mart_data@1.2.1/node_modules/@emoji-mart/data/sets/15/twitter.json.js";
import d from "../../../../node_modules/.pnpm/@emoji-mart_react@1.1.1_emoji-mart@5.6.0_react@18.3.1/node_modules/@emoji-mart/react/dist/module.js";
import { useState as f } from "react";
import { ButtonInternal as u } from "../../../../components/F0Button/internal.js";
import "../../../../icons/app/Menu.js";
import h from "../../../../icons/app/Reaction.js";
import { Popover as P, PopoverTrigger as O, PopoverContent as g } from "../../../../ui/popover.js";
import './index.css';/* empty css          */
const I = 36, S = "10px", v = 24, x = 2;
function k({
  onSelect: r,
  locale: s = "en",
  size: a = "md",
  variant: p = "outline",
  lastEmojiReaction: n
}) {
  const [i, t] = f(!1);
  return /* @__PURE__ */ c(P, { open: i, onOpenChange: t, children: [
    /* @__PURE__ */ e(O, { asChild: !0, children: /* @__PURE__ */ e(
      u,
      {
        variant: p,
        compact: !0,
        label: "Add reaction",
        size: a,
        icon: n ? void 0 : h,
        emoji: n,
        pressed: i,
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), t((m) => !m);
        },
        hideLabel: !0
      }
    ) }),
    /* @__PURE__ */ e(
      g,
      {
        side: "bottom",
        align: "start",
        className: "w-fit -translate-x-2 border-none bg-transparent p-2 shadow-none",
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation();
        },
        children: /* @__PURE__ */ e(
          d,
          {
            data: l,
            onEmojiSelect: (o) => {
              r?.(o.native), t(!1);
            },
            locale: s,
            icons: "outline",
            set: "twitter",
            theme: "light",
            emojiButtonSize: I,
            emojiButtonRadius: S,
            emojiSize: v,
            maxFrequentRows: x,
            skinTonePosition: "none",
            previewPosition: "none",
            searchPosition: "top",
            navPosition: "top",
            dynamicWidth: !0
          }
        )
      }
    )
  ] });
}
export {
  k as Picker
};
