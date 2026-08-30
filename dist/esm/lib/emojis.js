import { cn as e } from "./utils.js";
import { useReducedMotion as t } from "./a11y.js";
import { useCallback as n } from "react";
import { cva as r } from "cva";
import { jsx as i } from "react/jsx-runtime";
import { motion as a } from "motion/react";
import o from "canvas-confetti";
import { parse as s } from "twemoji-parser";
//#region src/lib/emojis.tsx
var c = r({
	variants: { size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6"
	} },
	defaultVariants: { size: "sm" }
}), l = r({
	variants: { size: {
		xs: "text-[12px]",
		sm: "text-[16px]",
		md: "text-[20px]",
		lg: "text-[24px]"
	} },
	defaultVariants: { size: "sm" }
});
function u({ emoji: t, size: n, alt: r, mode: o = "image" }) {
	let s = o === "native" ? null : d(t), u = {
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
	return o === "native" ? /* @__PURE__ */ i(a.span, {
		className: e(c({ size: n }), l({ size: n }), "inline-flex items-center justify-center leading-none font-emoji"),
		"aria-label": r === "" ? void 0 : r ?? t,
		role: r === "" ? void 0 : "img",
		"aria-hidden": r === "" || void 0,
		...u,
		children: t
	}, t) : s ? /* @__PURE__ */ i(a.img, {
		src: s.url,
		alt: r ?? t,
		className: c({ size: n }),
		draggable: !1,
		...u
	}, s.url) : /* @__PURE__ */ i(a.span, {
		...u,
		children: t
	}, t);
}
var d = (e) => {
	let [t] = s(e, { buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg` });
	return t || null;
};
function f(e) {
	return `${e} emoji`;
}
var p = () => {
	let e = t();
	return { fireEmojiConfetti: n((t, n) => {
		let r = n.current;
		if (r) {
			let n = r.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top;
			o({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: i / window.innerWidth,
					y: a / window.innerHeight
				},
				shapes: [o.shapeFromText({
					text: t,
					scalar: 2
				})],
				scalar: 2,
				disableForReducedMotion: e
			});
		}
	}, [e]) };
};
//#endregion
export { u as EmojiImage, f as getEmojiLabel, p as useEmojiConfetti };
