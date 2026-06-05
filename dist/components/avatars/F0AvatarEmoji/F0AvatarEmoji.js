import { jsx as a } from "react/jsx-runtime";
import { EmojiImage as s } from "../../../lib/emojis.js";
import { cn as i } from "../../../lib/utils.js";
import { sizesMapping as o } from "../internal/BaseAvatar/types.js";
const t = ["sm", "md", "lg", "xl"], l = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded",
  lg: "w-10 h-10 rounded-md",
  xl: "w-14 h-14 rounded-lg"
}, n = {
  sm: "xs",
  md: "sm",
  lg: "md",
  xl: "lg"
}, c = ({
  emoji: r,
  size: e = "md",
  "aria-label": d,
  "aria-labelledby": m
}) => (t.includes(e) || (console.warn(
  // @ts-expect-error - size is not a valid size
  `The emoji size: ${e} is deprecated. Use ${o[e]} instead.`
), e = o[e] ?? e), new RegExp("^\\p{Emoji}\\uFE0F?$", "u").test(r) || (r = "🤔"), /* @__PURE__ */ a(
  "div",
  {
    className: i(
      "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
      l[e]
    ),
    "aria-label": d,
    "aria-labelledby": m,
    children: /* @__PURE__ */ a(s, { emoji: r, size: n[e] })
  }
));
c.displayName = "EmojiAvatar";
export {
  c as F0AvatarEmoji,
  t as avatarEmojiSizes
};
