import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as r } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import i from "../../../../icons/app/ChevronDown.js";
import a from "../../../../icons/app/Handle.js";
import { useI18n as o } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Counter as s } from "../../../../ui/Counter/index.js";
import { ButtonInternal as c } from "../../../../components/F0Button/internal.js";
import { ItemDropDown as l } from "./ItemDropDown.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { AnimatePresence as f, motion as p } from "motion/react";
//#region src/experimental/Navigation/F0TableOfContent/Item/PrimitiveItem.tsx
function m({ item: m, counter: h, isActive: g, sortable: _, collapsible: v = !1, isExpanded: y = !1, onToggleExpanded: b = () => {}, children: x, open: S, setOpen: C, isHovered: w, setIsHovered: T }) {
	let E = o(), { label: D, onClick: O, icon: k, disabled: A, otherActions: j } = m, M = j && j.length > 0 && (w || S), N = h && !M, P = _ && (w || S);
	return /* @__PURE__ */ d("div", {
		className: "flex w-full min-w-0 items-center",
		children: [
			v && /* @__PURE__ */ u(c, {
				compact: !0,
				size: "sm",
				variant: "ghost",
				onClick: (e) => {
					e.stopPropagation(), b?.(m.id);
				},
				label: E.actions.toggle,
				hideLabel: !0,
				className: e("text-f1-icon transition-all", !y && "-rotate-90"),
				icon: i
			}),
			/* @__PURE__ */ d("div", {
				className: e(t("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded border border-solid border-transparent px-1.5 text-sm transition-colors", g && "bg-f1-background-hover", O && !A && "cursor-pointer hover:bg-f1-background-hover", A && "cursor-not-allowed opacity-30"),
				"data-active": g || void 0,
				onClick: A ? void 0 : () => O?.(m.id),
				onMouseEnter: () => T(!0),
				onMouseLeave: () => T(!1),
				children: [
					(_ || k) && /* @__PURE__ */ u("div", {
						className: "absolute left-1.5 top-1/2 -translate-y-1/2",
						children: /* @__PURE__ */ u(f, {
							mode: "wait",
							children: P ? /* @__PURE__ */ u(p.div, {
								initial: {
									opacity: 0,
									scale: .8,
									x: 0
								},
								animate: {
									opacity: 1,
									scale: 1,
									x: 0
								},
								exit: {
									opacity: 0,
									scale: .8,
									x: 0
								},
								transition: {
									duration: .15,
									ease: [
										.25,
										.1,
										.25,
										1
									]
								},
								className: "flex flex-shrink-0 items-center justify-center",
								children: /* @__PURE__ */ u("div", {
									className: "flex flex-shrink-0 cursor-grab items-center justify-center text-f1-icon active:cursor-grabbing",
									"aria-label": "Drag to reorder",
									children: /* @__PURE__ */ u(n, {
										icon: a,
										size: "xs"
									})
								})
							}, "handle") : k && /* @__PURE__ */ u(p.div, {
								initial: {
									opacity: 0,
									scale: .8
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .8
								},
								transition: {
									duration: .15,
									ease: [
										.25,
										.1,
										.25,
										1
									]
								},
								className: "flex flex-shrink-0 items-center justify-center p-0.5 text-f1-icon",
								children: /* @__PURE__ */ u(n, {
									icon: k,
									size: "md"
								})
							}, "icon")
						})
					}),
					/* @__PURE__ */ u(r, {
						lines: 1,
						className: e("flex-grow text-[14px] font-medium text-f1-foreground transition-all", P || k ? "pl-7" : "pl-0.5"),
						children: D
					}),
					/* @__PURE__ */ u(f, { children: (N || M) && /* @__PURE__ */ u(p.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						exit: {
							opacity: 0,
							scale: .8
						},
						transition: {
							duration: .15,
							ease: [
								.25,
								.1,
								.25,
								1
							]
						},
						onClick: (e) => e.stopPropagation(),
						className: "relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center",
						children: /* @__PURE__ */ u(f, {
							mode: "wait",
							children: N ? /* @__PURE__ */ u(p.div, {
								initial: {
									opacity: 0,
									scale: .8
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .8
								},
								transition: {
									duration: .15,
									ease: [
										.25,
										.1,
										.25,
										1
									]
								},
								className: "flex items-center justify-center",
								children: /* @__PURE__ */ u(s, { value: h })
							}, "counter") : M && /* @__PURE__ */ u(p.div, {
								initial: {
									opacity: 0,
									scale: .8
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								exit: {
									opacity: 0,
									scale: .8
								},
								transition: {
									duration: .15,
									ease: [
										.25,
										.1,
										.25,
										1
									]
								},
								className: "flex items-center justify-center",
								children: j && /* @__PURE__ */ u(l, {
									otherActions: j,
									open: S,
									setOpen: C,
									disabled: A
								})
							}, "dropdown")
						})
					}, "actions-container") })
				]
			}),
			x
		]
	});
}
//#endregion
export { m as PrimitiveItem };
