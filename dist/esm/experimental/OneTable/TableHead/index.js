import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/ArrowDown.js";
import i from "../../../icons/app/InfoCircleLine.js";
import { OneEllipsis as a } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { TableHead as o } from "../../../ui/table.js";
import { getColWidth as s } from "../utils/colWidth.js";
import { useTable as c } from "../utils/TableContext.js";
import { InfoHint as l } from "../../../lib/InfoHint/InfoHint.js";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { AnimatePresence as p, motion as m } from "motion/react";
//#region src/experimental/OneTable/TableHead/index.tsx
function h({ children: h, width: g = "auto", minWidth: _, sortState: v = "none", onSortClick: y, onClick: b, info: x, infoIcon: S = i, sticky: C, hidden: w = !1, highlighted: T = !1, align: E = "left", className: D, colSpan: O }) {
	let { isScrolled: k, isScrolledRight: A } = c(), j = C?.left !== void 0, M = C?.right !== void 0, N = j || M, P = C?.left ?? 0, F = C?.right ?? 0, I = y || x, L = y || b ? () => {
		y?.(), b?.();
	} : void 0, R = /* @__PURE__ */ d(u, { children: /* @__PURE__ */ f("div", {
		className: e("flex items-center whitespace-nowrap", I && "gap-1", E === "right" && "flex-row-reverse"),
		children: [typeof h == "string" ? /* @__PURE__ */ d(a, {
			className: e(g !== "auto" && "overflow-hidden"),
			children: h
		}) : /* @__PURE__ */ d("div", {
			className: e("truncate", g !== "auto" && "overflow-hidden"),
			children: h
		}), I && /* @__PURE__ */ f("div", {
			className: "flex items-center",
			children: [x && /* @__PURE__ */ d("div", {
				className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary",
				onClick: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ d(l, {
					info: x,
					icon: S,
					label: typeof h == "string" ? h : void 0
				})
			}), y && /* @__PURE__ */ d(m.button, {
				className: e("relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100", t()),
				"aria-label": "Sort",
				whileTap: { scale: .8 },
				transition: { duration: .1 },
				children: /* @__PURE__ */ f(p, { children: [/* @__PURE__ */ d(m.div, {
					className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
					animate: {
						rotate: v === "desc" ? 0 : 180,
						x: v === "none" ? -3 : 0,
						y: v === "none" ? -1 : 0,
						scale: v === "none" ? .9 : 1
					},
					transition: {
						duration: .2,
						ease: [
							.175,
							.885,
							.32,
							1.275
						]
					},
					children: /* @__PURE__ */ d(n, {
						icon: r,
						size: "xs"
					})
				}, "sort-arrow"), v === "none" && /* @__PURE__ */ d(m.div, {
					className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
					initial: {
						opacity: 0,
						x: 0,
						y: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						x: 3,
						y: 1,
						scale: .9
					},
					exit: {
						opacity: 0,
						x: 0,
						y: 0,
						scale: .9
					},
					transition: {
						duration: .2,
						ease: [
							.175,
							.885,
							.32,
							1.275
						]
					},
					children: /* @__PURE__ */ d(n, {
						icon: r,
						size: "xs"
					})
				}, "sort-arrow-secondary")] })
			})]
		})]
	}) }), z = s(g), B = _ === void 0 ? z : s(_);
	return /* @__PURE__ */ f(o, {
		className: e("group h-11", "bg-f1-background", N && (k || A) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", N && "sticky", T && "bg-[linear-gradient(hsl(var(--neutral-2)),hsl(var(--neutral-2)))]", w && "after:hidden", L && "cursor-pointer", D),
		"data-highlighted": T ? "true" : void 0,
		onClick: L,
		tabIndex: C ? 0 : void 0,
		colSpan: O,
		style: {
			width: z,
			maxWidth: z,
			minWidth: B,
			left: P,
			right: F
		},
		role: w ? "presentation" : void 0,
		"aria-sort": y ? v === "asc" ? "ascending" : v === "desc" ? "descending" : "none" : void 0,
		children: [
			/* @__PURE__ */ d("div", { className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" }),
			/* @__PURE__ */ d(p, { children: (j && k || M && A) && /* @__PURE__ */ d(m.div, {
				className: e("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", j && "-right-4 bg-gradient-to-r", M && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "shadow-gradient") }),
			!w && R
		]
	});
}
//#endregion
export { h as TableHead };
