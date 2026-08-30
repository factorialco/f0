import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { useReducedMotion as n } from "../../../lib/a11y.js";
import { F0OneIcon as r } from "../F0OneIcon/F0OneIcon.js";
import { memo as i, useEffect as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/kits/ai/F0AiProcessingOverlay/F0AiProcessingOverlay.tsx
var u = l.create(r), d = ({ label: e, reduceMotion: t }) => /* @__PURE__ */ s("div", {
	role: "status",
	"aria-live": "polite",
	className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md",
	children: [/* @__PURE__ */ o(u, {
		size: "xs",
		animate: t ? void 0 : {
			rotate: [0, 360],
			scale: [
				1,
				.8,
				1
			],
			filter: [
				"blur(0px)",
				"blur(1px)",
				"blur(0px)"
			]
		},
		transition: t ? void 0 : {
			rotate: {
				duration: 1,
				ease: "linear",
				repeat: Infinity,
				repeatDelay: 1
			},
			scale: {
				duration: 1,
				times: [
					0,
					.5,
					1
				],
				ease: "easeInOut",
				repeat: Infinity,
				repeatDelay: 1
			},
			filter: {
				duration: 1,
				times: [
					0,
					.5,
					1
				],
				ease: "easeInOut",
				repeat: Infinity,
				repeatDelay: 1
			}
		}
	}), /* @__PURE__ */ o("span", {
		className: "font-medium",
		children: e
	})]
}), f = i(function({ active: r, label: i, className: u, children: f }) {
	let { t: p } = t(), m = n(), h = i ?? p("ai.applyingChanges");
	return a(() => {
		if (!r) return;
		let e = document.activeElement;
		e && e.getAttribute("name") !== "one-ai-input" && e.blur();
	}, [r]), /* @__PURE__ */ s("div", {
		className: e("relative flex flex-1 flex-col", u),
		children: [/* @__PURE__ */ o(c, { children: r && /* @__PURE__ */ o(l.div, {
			className: "pointer-events-none sticky top-0 z-50 flex h-0 w-full items-start justify-center overflow-visible",
			initial: {
				opacity: 0,
				scale: m ? 1 : .95
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				scale: m ? 1 : .95
			},
			children: /* @__PURE__ */ o("div", {
				className: "mt-[40vh]",
				children: /* @__PURE__ */ o(d, {
					label: h,
					reduceMotion: m
				})
			})
		}) }), /* @__PURE__ */ o(l.div, {
			className: e("flex flex-1 flex-col", r && "pointer-events-none"),
			initial: { filter: "blur(0px)" },
			animate: { filter: r ? "blur(2px)" : "blur(0px)" },
			transition: { duration: m ? 0 : .2 },
			children: f
		})]
	});
});
//#endregion
export { f as F0AiProcessingOverlay };
