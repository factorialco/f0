import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { cn as t } from "../../../lib/utils.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ScrollArea as r } from "../../../ui/scrollarea.js";
import { useReducedMotion as i } from "../../../lib/a11y.js";
import { useSidebar as a } from "../../ApplicationFrame/FrameProvider.js";
import { cloneElement as o, isValidElement as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { AnimatePresence as u, motion as d } from "motion/react";
import { useIntersectionObserver as f } from "usehooks-ts";
//#region src/patterns/Navigation/Sidebar/Sidebar.tsx
var p = ({ position: e }) => /* @__PURE__ */ c(d.div, {
	initial: { opacity: 0 },
	animate: { opacity: .5 },
	exit: { opacity: 0 },
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: t("pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']", e === "top" ? [
		"top-0",
		"bg-gradient-to-b from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"bg-gradient-to-t from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
});
function m({ header: e, body: m, footer: h, onFooterDropdownClick: g }) {
	let { sidebarState: _, isSmallScreen: v } = a(), y = i(), [b, x] = f({ threshold: 1 }), [S, C] = f({ threshold: 1 }), w = n(), T = {
		x: {
			ease: _ === "locked" ? [
				0,
				0,
				.58,
				1
			] : v ? [
				.25,
				.46,
				.45,
				.94
			] : [
				.175,
				.885,
				.32,
				1.1
			],
			duration: y ? 0 : _ !== "locked" && !v ? .3 : .2
		},
		top: { duration: y ? 0 : .1 },
		left: { duration: y ? 0 : .1 },
		default: { duration: y ? 0 : .2 }
	};
	return /* @__PURE__ */ l(d.aside, {
		initial: !1,
		"aria-label": w.navigation.sidebar.label,
		className: t("absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]", _ === "locked" ? "h-full" : t("shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl", v ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60")),
		animate: {
			top: _ === "locked" || v ? 0 : "8px",
			borderRadius: _ === "locked" || v ? "0" : "12px",
			left: _ === "locked" ? "0" : v ? 0 : "8px",
			x: _ === "hidden" ? -260 : 0,
			opacity: _ === "hidden" ? v ? .7 : 0 : 1,
			pointerEvents: _ === "hidden" ? "none" : "auto"
		},
		transition: T,
		children: [
			/* @__PURE__ */ c("header", {
				className: "flex-shrink-0",
				children: e
			}),
			m && /* @__PURE__ */ l("nav", {
				className: "relative flex-grow overflow-y-hidden",
				children: [/* @__PURE__ */ l(r, {
					className: "h-full",
					children: [
						/* @__PURE__ */ c("div", {
							ref: b,
							className: "h-px",
							"aria-hidden": "true"
						}, "top-ref"),
						/* @__PURE__ */ c("div", {
							className: "w-[var(--ds-sidebar-width)]",
							children: m
						}),
						/* @__PURE__ */ c("div", {
							ref: S,
							className: "h-px",
							"aria-hidden": "true"
						}, "bottom-ref")
					]
				}), /* @__PURE__ */ l(u, { children: [!x && /* @__PURE__ */ c(p, { position: "top" }, "shadow-scroll-top"), !C && /* @__PURE__ */ c(p, { position: "bottom" }, "shadow-scroll-bottom")] })]
			}),
			/* @__PURE__ */ c("footer", {
				className: "flex-shrink-0",
				children: h ? s(h) && g ? o(h, { onDropdownClick: g }) : h : null
			})
		]
	});
}
var h = e(m);
//#endregion
export { h as Sidebar };
