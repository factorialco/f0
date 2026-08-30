import e from "../../../../icons/app/Reaction.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { Popover as n, PopoverContent as r, PopoverTrigger as i } from "../../../../ui/popover.js";
import { EmojiPicker as a } from "../../../../lib/EmojiPicker.js";
import '../../../../_embedded/D0ti2U-V.css';/* empty css      */
import { useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import l from "@emoji-mart/data/sets/15/twitter.json";
//#region src/sds/social/Reactions/Picker/index.tsx
var u = 36, d = "10px", f = 24, p = 2;
function m({ onSelect: m, locale: h = "en", size: g = "md", variant: _ = "outline", lastEmojiReaction: v, label: y = "Add reaction", icon: b }) {
	let [x, S] = o(!1);
	return /* @__PURE__ */ c(n, {
		open: x,
		onOpenChange: S,
		children: [/* @__PURE__ */ s(i, {
			asChild: !0,
			children: /* @__PURE__ */ s(t, {
				variant: _,
				compact: !0,
				label: y,
				size: g,
				icon: v ? void 0 : b ?? e,
				emoji: v,
				pressed: x,
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), S((e) => !e);
				},
				hideLabel: !0
			})
		}), /* @__PURE__ */ s(r, {
			side: "bottom",
			align: "start",
			className: "w-fit -translate-x-2 border-none bg-transparent p-2 shadow-none",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation();
			},
			children: /* @__PURE__ */ s(a, {
				data: l,
				onEmojiSelect: (e) => {
					m?.(e.native), S(!1);
				},
				locale: h,
				icons: "outline",
				set: "twitter",
				theme: "light",
				emojiButtonSize: u,
				emojiButtonRadius: d,
				emojiSize: f,
				maxFrequentRows: p,
				skinTonePosition: "none",
				previewPosition: "none",
				searchPosition: "top",
				navPosition: "top",
				dynamicWidth: !0
			})
		})]
	});
}
//#endregion
export { m as Picker };
