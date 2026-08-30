import { cn as e } from "../../../lib/utils.js";
import { useReducedMotion as t } from "../../../lib/a11y.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/kits/ai/F0CanvasPanel/F0CanvasPanel.tsx
function u({ content: u, onClose: d, entities: f, side: p = "right" }) {
	let m = p === "left", h = u?.coversChat === !0, g = t(), [_, v] = i(0), y = r(u);
	n(() => {
		u && y.current && u !== y.current && v((e) => e + 1), y.current = u;
	}, [u]);
	let b = u && f ? f[u.type] : void 0;
	return /* @__PURE__ */ o(c, { children: u && /* @__PURE__ */ o(l.div, {
		className: e("pointer-events-auto flex h-full flex-col", "md:py-1 dark:bg-f1-background p-0"),
		initial: {
			opacity: 0,
			width: 0
		},
		animate: {
			opacity: 1,
			width: "100%"
		},
		exit: {
			opacity: 0,
			width: 0
		},
		transition: {
			duration: g ? 0 : .3,
			ease: [
				0,
				0,
				.1,
				1
			]
		},
		children: /* @__PURE__ */ o("div", {
			className: e("flex h-full flex-col bg-f1-special-page p-0 md:py-1 border border-solid border-f1-border-secondary", h ? "md:rounded-lg md:px-1" : m ? "md:rounded-r-lg md:pr-1 border-l-0" : "md:rounded-l-lg md:pl-1 border-r-0"),
			children: /* @__PURE__ */ o(l.div, {
				className: e("flex h-full w-full flex-col overflow-hidden", "bg-f1-background", "md:shadow-md shadow-none", "rounded-none border-none md:rounded-md md:border md:border-solid border-f1-border-secondary"),
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: g ? 0 : .15,
					duration: g ? 0 : .2
				},
				children: (() => {
					if (!u || !b) return null;
					let t = b.renderHeader({
						content: u,
						onClose: d
					}), n = b.renderContent({
						content: u,
						refreshKey: _
					}), r = /* @__PURE__ */ s(a, { children: [t, /* @__PURE__ */ o("div", {
						className: e("relative flex-1", b.overflowHidden ? "overflow-hidden" : "overflow-auto"),
						children: n
					})] });
					return b.wrapper ? b.wrapper({
						content: u,
						children: r
					}) : r;
				})()
			})
		})
	}) });
}
u.displayName = "F0CanvasPanel";
//#endregion
export { u as F0CanvasPanel };
