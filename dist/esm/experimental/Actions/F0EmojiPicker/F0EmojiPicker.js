import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/Reaction.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { Popover as i, PopoverContent as a, PopoverTrigger as o } from "../../../ui/popover.js";
import { EmojiPicker as s } from "../../../lib/EmojiPicker.js";
import { useEffect as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { useControllableState as f } from "@radix-ui/react-use-controllable-state";
import p from "@emoji-mart/data/sets/15/twitter.json";
//#region src/experimental/Actions/F0EmojiPicker/F0EmojiPicker.tsx
var m = 36, h = "10px", g = 24, _ = 2, v = {
	"--neutral-0": "0 0% 100%",
	"--neutral-5": "220 88% 17% / 0.04",
	"--neutral-10": "216 89% 18% / 0.06",
	"--neutral-20": "214 70% 20% / 0.1",
	"--neutral-30": "213 87% 15% / 0.2",
	"--neutral-40": "219 97% 15% / 0.45",
	"--neutral-100": "218 48% 10%"
}, y = {
	...v,
	"--background-rgb": "255, 255, 255",
	"--border-radius": "12px",
	"--category-icon-size": "20px",
	"--font-size": "14px",
	"--rgb-accent": "1, 22, 55",
	"--rgb-background": "255, 255, 255",
	"--rgb-color": "1, 22, 55",
	"--rgb-input": "255, 255, 255"
}, b = ({ label: b, value: x, defaultValue: S = null, onChange: C, clearable: w = !1, disabled: T = !1, locale: E = "en", size: D = "md" }) => {
	let O = n(), [k = null, A] = f({
		prop: x,
		defaultProp: S,
		onChange: C
	}), [j, M] = l(!1);
	c(() => {
		T && M(!1);
	}, [T]);
	let N = (e) => {
		A(e.native), M(!1);
	}, P = () => {
		A(null), M(!1);
	}, F = w && !!k;
	return /* @__PURE__ */ d(i, {
		open: !T && j,
		onOpenChange: T ? void 0 : M,
		children: [/* @__PURE__ */ u(o, {
			asChild: !0,
			children: /* @__PURE__ */ u(r, {
				emoji: k ?? void 0,
				label: b,
				"aria-label": k ? `${b}: ${k}` : b,
				variant: "outline",
				size: D,
				hideLabel: !0,
				disabled: T,
				icon: k ? void 0 : t
			})
		}), /* @__PURE__ */ d(a, {
			side: "bottom",
			align: "start",
			collisionPadding: 16,
			"aria-label": b,
			style: y,
			className: "flex w-fit flex-col !overflow-y-auto rounded-md border-none p-0 shadow-none [&>div:first-child]:min-h-0 [&>div:first-child]:overflow-hidden [&_em-emoji-picker]:!h-full [&_em-emoji-picker]:!min-h-0 [&_em-emoji-picker]:!max-h-[min(451px,calc(100vh-81px))] [&_em-emoji-picker]:!w-[372px] [&_em-emoji-picker]:!max-w-[calc(100vw-32px)] [@media(max-height:320px)]:[&>div:first-child]:!min-h-[230px] [@media(max-height:320px)]:[&_em-emoji-picker]:!min-h-[230px]",
			children: [/* @__PURE__ */ u(s, {
				className: e("box-border border border-solid border-f1-border-secondary shadow-none [--color-border-over:rgba(1,22,55,0.2)] [--color-border:rgba(1,22,55,0.08)] [--shadow:none]", F && "rounded-b-none border-b-0"),
				data: p,
				onEmojiSelect: N,
				locale: E,
				icons: "outline",
				set: "twitter",
				theme: "light",
				emojiButtonSize: m,
				emojiButtonRadius: h,
				emojiSize: g,
				maxFrequentRows: _,
				skinTonePosition: "none",
				previewPosition: "none",
				searchPosition: "top",
				navPosition: "top",
				dynamicWidth: !0
			}), F ? /* @__PURE__ */ u("div", {
				className: "flex items-center justify-end rounded-b-md border border-solid border-f1-border-secondary border-t-f1-border-secondary p-2 [@media(max-height:320px)]:px-1 [@media(max-height:320px)]:py-0",
				style: v,
				children: /* @__PURE__ */ u(r, {
					label: O.actions.clear,
					variant: "outline",
					size: "sm",
					onClick: P
				})
			}) : null]
		})]
	});
};
b.displayName = "F0EmojiPicker";
//#endregion
export { b as F0EmojiPicker };
