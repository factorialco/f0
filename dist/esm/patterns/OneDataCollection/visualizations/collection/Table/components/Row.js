import { cn as e } from "../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { tableCellContentClassName as ee } from "../../../../../../ui/value-display/const.js";
import { Checkbox as n } from "../../../../../../ui/checkbox.js";
import { TableCell as r } from "../../../../../../experimental/OneTable/TableCell/index.js";
import { TableRow as i } from "../../../../../../experimental/OneTable/TableRow/index.js";
import { renderProperty as a } from "../../../../property-render.js";
import { ItemActionsMobile as o } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRowContainer as s } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as te } from "../../../../components/itemActions/useItemActions.js";
import { ItemActionsRow as c } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { getColumnId as ne } from "../hooks/useColums.js";
import "../hooks/useHeaderGroups.js";
import { useSticky as re } from "../useSticky.js";
import { NestedRow as ie } from "./NestedRow.js";
import { forwardRef as l, useEffect as u, useState as ae } from "react";
import { Fragment as oe, jsx as d, jsxs as f } from "react/jsx-runtime";
import { useIsPresent as p } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/Row.tsx
var m = 1500, h = {
	none: "",
	striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
	striked: "[&_*:not([data-no-strike]):not([data-no-strike]_*)]:line-through text-f1-foreground-secondary"
}, g = l(({ source: l, item: g, onCheckedChange: _, onItemCheckedChange: se, selectedItems: v, columns: y, frozenColumnsLeft: b, checkColumnWidth: x, index: S, groupIndex: C, noBorder: ce = !1, loading: w = !1, nestedRowProps: T, tableWithChildren: E, disableHover: D = !1, isNew: le = !1, referenceRowType: O, boldRootRows: k = !1, cellRenderer: A, rowWrapper: ue, fromVisualization: j, headerGroups: M, collapsingCellClasses: N, registerSelectable: P, unregisterSelectable: F }, I) => {
	let L = l.itemUrl ? l.itemUrl(g) : void 0, R = l.itemOnClick ? l.itemOnClick(g) : void 0, z = l.selectable ? l.selectable(g) : void 0, B = !!l.itemsWithChildren?.(g), V = t(), [H, de] = ae(le);
	u(() => {
		if (!H) return;
		let e = setTimeout(() => de(!1), m);
		return () => clearTimeout(e);
	}, [H]);
	let fe = (e, t) => a(e, t, "table", V, { tableAlign: t.align ?? "left" }), U = `table-row-${C}-${S}`, { getStickyPosition: pe } = re(b, y, !!l.selectable), { hasItemActions: W, hasMobileItemActions: me, primaryItemActions: G, dropdownItemActions: K, mobileDropdownItemActions: q, handleDropDownOpenChange: J, dropDownOpen: he } = te({
		source: l,
		item: g
	}), Y = T?.hasLoadedChildren === void 0 || T?.hasLoadedChildren, X = p(), Z = !(B && Y);
	if (u(() => {
		if (!(z === void 0 || !Z || !P || !X)) return P(z, g), () => F?.(z);
	}, [
		z,
		g,
		Z,
		P,
		F,
		X
	]), B && Y) return /* @__PURE__ */ d(ie, {
		source: l,
		item: g,
		onCheckedChange: _,
		onItemCheckedChange: se,
		selectedItems: v,
		columns: y,
		frozenColumnsLeft: b,
		checkColumnWidth: x,
		index: S,
		groupIndex: C,
		nestedRowProps: T,
		tableWithChildren: E,
		referenceRowType: O,
		boldRootRows: k,
		cellRenderer: A,
		rowWrapper: ue,
		headerGroups: M,
		collapsingCellClasses: N,
		fromVisualization: j,
		registerSelectable: P,
		unregisterSelectable: F
	}, U);
	let ge = z !== void 0 && v.has(z), Q = O?.(g) ?? "none", $ = A ? e("h-[48px] p-0 align-middle last:pr-0", !E && (j === "editableTable" ? "first:pl-3" : "first:pl-0")) : void 0;
	return /* @__PURE__ */ f(i, {
		ref: I,
		sticky: T?.stickyRow,
		className: e("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", ce && "after:bg-white-100", D && "hover:bg-transparent", ge && "bg-f1-background-selected-secondary", H && "animate-row-flash", k && E && (T?.depth ?? 0) === 0 && "font-semibold", h[Q]),
		children: [
			l.selectable && /* @__PURE__ */ d(r, {
				width: x,
				sticky: { left: 0 },
				loading: w,
				className: e(w && E ? "first:pl-4" : "", M && "[&>div:first-child]:hidden", M && "border-0 border-r border-solid border-f1-border-secondary", $),
				referenceRowType: Q,
				children: z !== void 0 && /* @__PURE__ */ d("div", {
					className: "pointer-events-auto ml-3.5 flex h-full items-center justify-start",
					children: /* @__PURE__ */ d(n, {
						checked: v.has(z),
						onCheckedChange: _,
						title: `Select ${l.selectable(g)}`,
						hideLabel: !0
					})
				})
			}),
			y.map((t, n) => {
				let i = M?.find((e) => e.type === "group" && e.columnIndices.includes(n)), a = !!M && (!i || i.columnIndices[i.columnIndices.length - 1] === n), o = /* @__PURE__ */ d("div", {
					className: e(t.align === "right" ? "justify-end" : "", "flex", ee),
					children: fe(g, t)
				});
				return /* @__PURE__ */ d(r, {
					firstCell: n === 0,
					href: L,
					onClick: R,
					width: t.width,
					minWidth: t.minWidth,
					sticky: pe(n),
					loading: w,
					nestedRowProps: {
						...T,
						rowWithChildren: B,
						tableWithChildren: E,
						selectableRow: !!l.selectable
					},
					fromVisualization: j,
					referenceRowType: Q,
					highlighted: !!t.highlighted,
					className: e($, a && "border-0 border-r border-solid border-f1-border-secondary", N?.get(ne(t))),
					children: A ? /* @__PURE__ */ d(A, {
						item: g,
						isLastColumn: !W && n === y.length - 1,
						column: t,
						cellIndex: n,
						children: o
					}) : o
				}, `table-cell-${C}-${S}-${n}`);
			}),
			W && !w && !T?.onLoadMoreChildren && !T?.onAddRow && (j === "editableTable" ? /* @__PURE__ */ d(r, {
				sticky: { right: 0 },
				referenceRowType: Q,
				className: "bg-f1-background !px-3 align-middle",
				children: /* @__PURE__ */ d(c, {
					className: "flex flex-nowrap justify-center",
					primaryItemActions: G,
					dropdownItemActions: K,
					handleDropDownOpenChange: J
				})
			}, `table-cell-${C}-${S}-actions`) : /* @__PURE__ */ f(oe, { children: [/* @__PURE__ */ d("td", {
				className: "sticky right-0 top-0 z-10 hidden md:table-cell",
				children: /* @__PURE__ */ d(s, {
					dropDownOpen: he,
					className: "pl-8",
					children: /* @__PURE__ */ d(c, {
						primaryItemActions: G,
						dropdownItemActions: K,
						handleDropDownOpenChange: J
					})
				})
			}), me && /* @__PURE__ */ d(r, {
				width: 68,
				sticky: { right: 0 },
				href: L,
				className: "table-cell md:hidden",
				loading: w,
				children: /* @__PURE__ */ d(o, {
					items: q,
					onOpenChange: J
				})
			}, `table-cell-${C}-${S}-actions`)] }))
		]
	}, U);
});
//#endregion
export { g as Row };
