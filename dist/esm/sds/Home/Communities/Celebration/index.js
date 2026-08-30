import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { useReducedMotion as n } from "../../../../lib/a11y.js";
import { EmojiImage as r } from "../../../../lib/emojis.js";
import { Link as i } from "../../../../lib/linkHandler.js";
import { Skeleton as a } from "../../../../ui/skeleton.js";
import { withSkeleton as o } from "../../../../lib/skeleton.js";
import { F0AvatarDate as s } from "../../../../components/avatars/F0AvatarDate/index.js";
import { EMOJI_MAP as c } from "./types.js";
import { CelebrationAvatar as l } from "./components/avatar.js";
import { useConfetti as u } from "./hooks/useConfetti.js";
import { useEffect as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/sds/Home/Communities/Celebration/index.tsx
var g = ({ link: a, firstName: o, lastName: g, src: _, onClick: v, canReact: y = !0, lastEmojiReaction: b, onReactionSelect: x, type: S, typeLabel: C, date: w }) => {
	let [T, E] = p(b), D = f(null);
	d(() => {
		E(b);
	}, [b]);
	let O = (e) => {
		E(e), x?.(e);
	}, k = n(), { canvasRef: A, handleMouseEnter: j, handleMouseLeave: M } = u(k), N = r({
		emoji: c[S],
		size: "sm"
	});
	return /* @__PURE__ */ h(i, {
		href: a,
		onClick: v,
		className: e("relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary no-underline transition-shadow hover:shadow", t()),
		onMouseEnter: k ? void 0 : j,
		onMouseLeave: k ? void 0 : M,
		children: [
			/* @__PURE__ */ m("canvas", {
				ref: A,
				className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
			}),
			/* @__PURE__ */ m("div", {
				className: "basis-2/3 px-1 pt-1",
				children: /* @__PURE__ */ m(l, {
					firstName: o,
					lastName: g,
					src: _,
					canReact: y,
					lastEmojiReaction: T,
					onReactionSelect: O,
					pickerRef: D
				})
			}),
			/* @__PURE__ */ h("div", {
				className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
				children: [/* @__PURE__ */ h("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ h("div", {
						className: "truncate font-medium text-f1-foreground",
						children: [
							o,
							" ",
							g
						]
					}), /* @__PURE__ */ h("div", {
						className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary",
						children: [/* @__PURE__ */ m("span", {
							className: "truncate",
							children: C
						}), /* @__PURE__ */ m("span", {
							className: "shrink-0 leading-none",
							children: N
						})]
					})]
				}), /* @__PURE__ */ m("div", {
					className: "shrink-0",
					children: /* @__PURE__ */ m(s, { date: w })
				})]
			})
		]
	});
}, _ = () => /* @__PURE__ */ h("div", {
	className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
	role: "status",
	"aria-busy": "true",
	"aria-live": "polite",
	children: [/* @__PURE__ */ m("div", {
		className: "basis-2/3 px-1 pt-1",
		children: /* @__PURE__ */ m(a, { className: "h-32 w-full rounded-lg" })
	}), /* @__PURE__ */ m("div", {
		className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
		children: /* @__PURE__ */ m("div", {
			className: "flex min-w-0 flex-1 flex-col",
			children: /* @__PURE__ */ h("div", {
				className: "flex flex-col gap-2 py-1",
				children: [/* @__PURE__ */ m(a, { className: "h-3 w-2/3" }), /* @__PURE__ */ m(a, { className: "h-3 w-1/3" })]
			})
		})
	})]
}), v = o(g, _);
//#endregion
export { g as BaseCelebration, v as Celebration, _ as CelebrationSkeleton };
