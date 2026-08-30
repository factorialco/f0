import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/DottedCircle.js";
import { useReducedMotion as r } from "../../../lib/a11y.js";
import i from "../../../icons/animated/CheckCircleLine.js";
import { ChatSpinner as a } from "./components/ChatSpinner.js";
import '../../../_embedded/DQ4cxBUN.css';/* empty css       */
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
//#region src/kits/ai/F0ActionItem/F0ActionItem.tsx
var u = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
}, d = ({ title: d, status: f, inGroup: p }) => {
	let m = {
		duration: r() ? 0 : .18,
		ease: [
			.33,
			1,
			.68,
			1
		]
	}, h = f === "inProgress", g = f === "executing", _ = f === "completed", v = f === "writing";
	return /* @__PURE__ */ s("div", {
		className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
		children: [/* @__PURE__ */ o("div", {
			className: "flex h-5 w-6 shrink-0 items-center justify-start",
			children: /* @__PURE__ */ s(c, {
				mode: "wait",
				children: [
					h && /* @__PURE__ */ o(l.div, {
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						...u,
						transition: m,
						children: /* @__PURE__ */ o(t, {
							state: "animate",
							size: p ? "md" : "lg",
							icon: n
						})
					}, "inProgress"),
					(g || v) && /* @__PURE__ */ o("div", {
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						children: /* @__PURE__ */ o(a, { variant: g ? "default" : "continuous" })
					}),
					_ && /* @__PURE__ */ o(l.div, {
						...u,
						className: "flex h-5 w-5 shrink-0 items-center justify-center",
						transition: m,
						children: /* @__PURE__ */ o(t, {
							color: "secondary",
							state: "animate",
							size: p ? "md" : "lg",
							icon: i
						})
					}, "completed")
				]
			})
		}), d && /* @__PURE__ */ o("p", {
			className: e("text-pretty leading-5", (g || v) && "shine-text"),
			children: d
		})]
	});
};
//#endregion
export { d as F0ActionItem };
