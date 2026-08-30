import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { Link as n } from "../../../lib/linkHandler.js";
import { Skeleton as r } from "../../../ui/skeleton.js";
import { TableCell as i } from "../../../ui/table.js";
import { getColWidth as a } from "../utils/colWidth.js";
import { useTable as o } from "../utils/TableContext.js";
import { isFirstCellWithChildren as s, isFirstCellWithTableChildren as c } from "./utils/nested.js";
import { NestedCell as l } from "./NestedCell/index.js";
import { TreeConnector as u } from "./TreeConnector/index.js";
import { useRef as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { AnimatePresence as h, motion as g } from "motion/react";
//#region src/experimental/OneTable/TableCell/index.tsx
var _ = "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)", v = "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", y = {
	none: `bg-f1-background ${v} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
	striped: `bg-f1-background bg-[${_}] [background-size:100%_100px] ${v} before:bg-[${_},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${_},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`,
	striked: `bg-f1-background ${v} before:bg-f1-background group-hover:before:bg-f1-background-hover`
};
function b({ children: _, href: v, onClick: b, width: x = "auto", minWidth: S, firstCell: C = !1, sticky: w, colSpan: T, className: E, loading: D = !1, nestedRowProps: O, fromVisualization: k, referenceRowType: A = "none", highlighted: j = !1 }) {
	let { isScrolled: M, isScrolledRight: N } = o(), { actions: P } = t(), F = w?.left !== void 0, I = w?.right !== void 0, L = F || I, R = w?.left, z = w?.right, B = a(x), V = S === void 0 ? B : a(S), H = d(null), U = O?.depth ?? 0, W = O?.nestedVariant === "detailed", G = c(C, !!O?.tableWithChildren) && { marginLeft: `${(U + +!W) * 32}px` };
	return /* @__PURE__ */ m(i, {
		colSpan: T,
		className: e("h-full", C && "peer font-medium", L && M && y[A], L && "sticky z-10", I && y[A], j && "bg-[hsl(var(--neutral-2))] group-hover:bg-f1-background-hover", j && L && "before:bg-[hsl(var(--neutral-2))] group-hover:before:bg-f1-background-hover", v && "cursor-pointer", E),
		style: {
			width: B,
			maxWidth: B,
			minWidth: V,
			left: R,
			right: z
		},
		children: [
			/* @__PURE__ */ p(h, { children: (F && M || I && N) && /* @__PURE__ */ p(g.div, {
				className: e("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", F && "-right-4 bg-gradient-to-r", I && "-left-4 bg-gradient-to-l"),
				initial: { opacity: 0 },
				animate: { opacity: .1 },
				exit: { opacity: 0 }
			}, "cell-shadow-gradient") }),
			C && O?.tableWithChildren && /* @__PURE__ */ p(u, {
				firstCell: C,
				nestedRowProps: O,
				fromVisualization: k
			}),
			D && /* @__PURE__ */ p("div", {
				style: { ...G },
				className: e("flex h-full items-center", k === "editableTable" ? "min-h-[32px]" : "min-h-[24px]"),
				children: /* @__PURE__ */ p(r, { className: "h-4 w-full" })
			}),
			!D && /* @__PURE__ */ m(f, { children: [
				/* @__PURE__ */ p("div", {
					className: e("[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]", "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]", "[&:has(a)]:relative [&:has(a)]:z-[1]", "pointer-events-none h-full items-start"),
					children: s(C, !!O?.rowWithChildren) ? /* @__PURE__ */ p(l, {
						linkRef: H,
						firstCell: C,
						nestedRowProps: O,
						children: _
					}) : /* @__PURE__ */ p("div", {
						className: e(x !== "auto" && "overflow-hidden", "relative z-[1] h-full"),
						style: { ...G },
						onClick: () => {
							H.current?.click(), b?.();
						},
						children: _
					})
				}),
				v && /* @__PURE__ */ p(n, {
					ref: H,
					href: v,
					className: "pointer-events-auto absolute inset-0 !z-0 block",
					tabIndex: C ? void 0 : -1,
					children: /* @__PURE__ */ p("span", {
						className: "sr-only",
						children: P.view
					})
				}),
				b && /* @__PURE__ */ p("button", {
					type: "button",
					onClick: (e) => {
						e.stopPropagation(), b();
					},
					"data-testid": "table-cell-action-button",
					className: "table-cell-action-button absolute inset-0 !z-0 block",
					tabIndex: C ? void 0 : -1,
					onKeyDown: (e) => {
						(e.key === "Enter" || e.key === " ") && (e.preventDefault(), b());
					},
					children: /* @__PURE__ */ p("span", {
						className: "sr-only",
						children: P.view
					})
				})
			] })
		]
	});
}
//#endregion
export { b as TableCell };
