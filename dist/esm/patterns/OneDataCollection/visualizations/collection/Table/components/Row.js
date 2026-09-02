import { cn as e } from "../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { tableCellContentClassName as ee } from "../../../../../../ui/value-display/const.js";
import { Checkbox as n } from "../../../../../../ui/checkbox.js";
import { TableCell as r } from "../../../../../../experimental/OneTable/TableCell/index.js";
import { TableRow as i } from "../../../../../../experimental/OneTable/TableRow/index.js";
import { renderProperty as a } from "../../../../property-render.js";
import { ItemActionsMobile as o } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRowContainer as te } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as ne } from "../../../../components/itemActions/useItemActions.js";
import { ItemActionsRow as s } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { getColumnId as re } from "../hooks/useColums.js";
import "../hooks/useHeaderGroups.js";
import { useSticky as ie } from "../useSticky.js";
import { NestedRow as c } from "./NestedRow.js";
import { forwardRef as l, useEffect as u, useState as ae } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { useIsPresent as oe } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/Row.tsx
var se = 1500, ce = {
	none: "",
	striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
	striked: "[&_*:not([data-no-strike]):not([data-no-strike]_*)]:line-through text-f1-foreground-secondary"
}, m = l(({ source: l, item: m, onCheckedChange: h, onItemCheckedChange: g, selectedItems: _, columns: v, frozenColumnsLeft: y, checkColumnWidth: b, index: x, groupIndex: S, noBorder: le = !1, loading: C = !1, nestedRowProps: w, tableWithChildren: T, disableHover: E = !1, isNew: D = !1, referenceRowType: O, boldRootRows: k = !1, cellRenderer: A, rowWrapper: ue, fromVisualization: j, headerGroups: M, collapsingCellClasses: N, registerSelectable: P, unregisterSelectable: F }, de) => {
	let I = l.itemUrl ? l.itemUrl(m) : void 0, L = l.itemOnClick ? l.itemOnClick(m) : void 0, R = l.selectable ? l.selectable(m) : void 0, z = R !== void 0 && l.selectionInherited?.(m) === !0, B = R !== void 0 && (z || l.selectionDisabled?.(m) === !0), V = !!l.itemsWithChildren?.(m), fe = t(), [H, pe] = ae(D);
	u(() => {
		if (!H) return;
		let e = setTimeout(() => pe(!1), se);
		return () => clearTimeout(e);
	}, [H]);
	let me = (e, t) => a(e, t, "table", fe, { tableAlign: t.align ?? "left" }), U = `table-row-${S}-${x}`, { getStickyPosition: he } = ie(y, v, !!l.selectable), { hasItemActions: W, hasMobileItemActions: ge, primaryItemActions: G, dropdownItemActions: K, mobileDropdownItemActions: q, handleDropDownOpenChange: J, dropDownOpen: _e } = ne({
		source: l,
		item: m
	}), Y = w?.hasLoadedChildren === void 0 || w?.hasLoadedChildren, X = oe(), Z = !(V && Y);
	if (u(() => {
		if (!(R === void 0 || B || !Z || !P || !X)) return P(R, m), () => F?.(R);
	}, [
		R,
		m,
		B,
		Z,
		P,
		F,
		X
	]), V && Y) return /* @__PURE__ */ f(c, {
		source: l,
		item: m,
		onCheckedChange: h,
		onItemCheckedChange: g,
		selectedItems: _,
		columns: v,
		frozenColumnsLeft: y,
		checkColumnWidth: b,
		index: x,
		groupIndex: S,
		nestedRowProps: w,
		tableWithChildren: T,
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
	let ve = R !== void 0 && _.has(R), Q = O?.(m) ?? "none", $ = A ? e("h-[48px] p-0 align-middle last:pr-0", !T && (j === "editableTable" ? "first:pl-3" : "first:pl-0")) : void 0;
	return /* @__PURE__ */ p(i, {
		ref: de,
		sticky: w?.stickyRow,
		className: e("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", le && "after:bg-white-100", E && "hover:bg-transparent", ve && "bg-f1-background-selected-secondary", H && "animate-row-flash", k && T && (w?.depth ?? 0) === 0 && "font-semibold", ce[Q]),
		children: [
			l.selectable && /* @__PURE__ */ f(r, {
				width: b,
				sticky: { left: 0 },
				loading: C,
				className: e(C && T ? "first:pl-4" : "", M && "[&>div:first-child]:hidden", M && "border-0 border-r border-solid border-f1-border-secondary", $),
				referenceRowType: Q,
				children: R !== void 0 && /* @__PURE__ */ f("div", {
					className: e("pointer-events-auto ml-3.5 flex h-full items-center justify-start", B && "cursor-not-allowed"),
					children: /* @__PURE__ */ f(n, {
						checked: z || _.has(R),
						indeterminate: z,
						onCheckedChange: h,
						disabled: B,
						title: `Select ${l.selectable(m)}`,
						hideLabel: !0
					})
				})
			}),
			v.map((t, n) => {
				let i = M?.find((e) => e.type === "group" && e.columnIndices.includes(n)), a = !!M && (!i || i.columnIndices[i.columnIndices.length - 1] === n), o = /* @__PURE__ */ f("div", {
					className: e(t.align === "right" ? "justify-end" : "", "flex", ee),
					children: me(m, t)
				});
				return /* @__PURE__ */ f(r, {
					firstCell: n === 0,
					href: I,
					onClick: L,
					width: t.width,
					minWidth: t.minWidth,
					sticky: he(n),
					loading: C,
					nestedRowProps: {
						...w,
						rowWithChildren: V,
						tableWithChildren: T,
						selectableRow: !!l.selectable
					},
					fromVisualization: j,
					referenceRowType: Q,
					highlighted: !!t.highlighted,
					className: e($, a && "border-0 border-r border-solid border-f1-border-secondary", N?.get(re(t))),
					children: A ? /* @__PURE__ */ f(A, {
						item: m,
						isLastColumn: !W && n === v.length - 1,
						column: t,
						cellIndex: n,
						children: o
					}) : o
				}, `table-cell-${S}-${x}-${n}`);
			}),
			W && !C && !w?.onLoadMoreChildren && !w?.onAddRow && (j === "editableTable" ? /* @__PURE__ */ f(r, {
				sticky: { right: 0 },
				referenceRowType: Q,
				className: "bg-f1-background !px-3 align-middle",
				children: /* @__PURE__ */ f(s, {
					className: "flex flex-nowrap justify-center",
					primaryItemActions: G,
					dropdownItemActions: K,
					handleDropDownOpenChange: J
				})
			}, `table-cell-${S}-${x}-actions`) : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("td", {
				className: "sticky right-0 top-0 z-10 hidden md:table-cell",
				children: /* @__PURE__ */ f(te, {
					dropDownOpen: _e,
					className: "pl-8",
					children: /* @__PURE__ */ f(s, {
						primaryItemActions: G,
						dropdownItemActions: K,
						handleDropDownOpenChange: J
					})
				})
			}), ge && /* @__PURE__ */ f(r, {
				width: 68,
				sticky: { right: 0 },
				href: I,
				className: "table-cell md:hidden",
				loading: C,
				children: /* @__PURE__ */ f(o, {
					items: q,
					onOpenChange: J
				})
			}, `table-cell-${S}-${x}-actions`)] }))
		]
	}, U);
});
//#endregion
export { m as Row };
