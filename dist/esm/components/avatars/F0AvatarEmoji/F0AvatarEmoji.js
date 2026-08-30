import { cn as e } from "../../../lib/utils.js";
import { EmojiImage as t } from "../../../lib/emojis.js";
import { sizesMapping as n } from "../internal/BaseAvatar/types.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarEmoji/F0AvatarEmoji.tsx
var i = [
	"sm",
	"md",
	"lg",
	"xl"
], a = {
	sm: "w-6 h-6 rounded-sm",
	md: "w-8 h-8 rounded",
	lg: "w-10 h-10 rounded-md",
	xl: "w-14 h-14 rounded-xl"
}, o = {
	sm: "xs",
	md: "sm",
	lg: "md",
	xl: "lg"
}, s = ({ emoji: s, size: c = "md", "aria-label": l, "aria-labelledby": u }) => (i.includes(c) || (console.warn(`The emoji size: ${c} is deprecated. Use ${n[c]} instead.`), c = n[c] ?? c), /^\p{Emoji}\uFE0F?$/u.test(s) || (s = "🤔"), /* @__PURE__ */ r("div", {
	className: e("flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary", a[c]),
	"aria-label": l,
	"aria-labelledby": u,
	children: /* @__PURE__ */ r(t, {
		emoji: s,
		size: o[c]
	})
}));
s.displayName = "EmojiAvatar";
//#endregion
export { s as F0AvatarEmoji, i as avatarEmojiSizes };
