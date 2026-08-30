import { cn as e } from "./utils.js";
import { cva as t } from "cva";
import { jsx as n } from "react/jsx-runtime";
import { motion as r } from "motion/react";
import { parse as i } from "twemoji-parser";
//#region src/lib/emojis.tsx
var a = t({
	variants: { size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6"
	} },
	defaultVariants: { size: "sm" }
}), o = t({
	variants: { size: {
		xs: "text-[12px]",
		sm: "text-[16px]",
		md: "text-[20px]",
		lg: "text-[24px]"
	} },
	defaultVariants: { size: "sm" }
});
function s({ emoji: t, size: i, alt: s, mode: l = "image" }) {
	let u = l === "native" ? null : c(t), d = {
		initial: { scale: .75 },
		animate: { scale: 1 },
		exit: { scale: .75 },
		transition: {
			duration: .6,
			ease: [
				.175,
				.885,
				.32,
				1.275
			]
		}
	};
	return l === "native" ? /* @__PURE__ */ n(r.span, {
		className: e(a({ size: i }), o({ size: i }), "inline-flex items-center justify-center leading-none font-emoji"),
		"aria-label": s === "" ? void 0 : s ?? t,
		role: s === "" ? void 0 : "img",
		"aria-hidden": s === "" || void 0,
		...d,
		children: t
	}, t) : u ? /* @__PURE__ */ n(r.img, {
		src: u.url,
		alt: s ?? t,
		className: a({ size: i }),
		draggable: !1,
		...d
	}, u.url) : /* @__PURE__ */ n(r.span, {
		...d,
		children: t
	}, t);
}
var c = (e) => {
	let [t] = i(e, { buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg` });
	return t || null;
};
function l(e) {
	return `${e} emoji`;
}
//#endregion
export { s as EmojiImage, l as getEmojiLabel };
