import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/Star.js";
import i from "../../../../icons/app/StarFilled.js";
import { useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
import { AnimatePresence as s, motion as c } from "motion/react";
//#region src/experimental/Navigation/Header/Favorites/index.tsx
var l = c.create(n), u = {
	initial: { scale: 1 },
	animate: { scale: 1 },
	exit: { scale: .5 },
	enterFromUnfavorite: { scale: .5 },
	enterFromFavorite: { scale: .8 }
}, d = ({ isMarked: n, onChange: c, label: d }) => {
	let [f, p] = a(!1);
	return /* @__PURE__ */ o(s, {
		mode: "wait",
		children: /* @__PURE__ */ o("button", {
			className: e("flex h-6 w-6 items-center justify-center rounded", t()),
			onClick: () => {
				p(!0), c(!n);
			},
			"aria-label": d,
			children: n ? /* @__PURE__ */ o(l, {
				size: "sm",
				icon: i,
				className: "text-[hsl(var(--promote-50))] outline-none",
				variants: u,
				initial: f ? "enterFromUnfavorite" : "initial",
				animate: "animate",
				exit: "exit",
				transition: { ease: [
					.175,
					.885,
					.27,
					2
				] },
				"aria-hidden": "true",
				focusable: !1,
				tabIndex: -1
			}, "favorite") : /* @__PURE__ */ o(l, {
				size: "sm",
				whileTap: { scale: .8 },
				icon: r,
				className: "outline-none",
				variants: u,
				initial: f ? "enterFromFavorite" : "initial",
				"aria-hidden": "true",
				focusable: !1,
				tabIndex: -1,
				animate: "animate",
				exit: "exit",
				transition: { ease: [
					0,
					0,
					.58,
					1
				] }
			}, "not-favorite")
		})
	});
};
//#endregion
export { d as FavoriteButton };
