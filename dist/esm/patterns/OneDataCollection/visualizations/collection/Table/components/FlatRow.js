import { cn as e } from "../../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { tableCellContentClassName as n } from "../../../../../../ui/value-display/const.js";
import { Checkbox as r } from "../../../../../../ui/checkbox.js";
import { TableCell as i } from "../../../../../../experimental/OneTable/TableCell/index.js";
import { TableRow as a } from "../../../../../../experimental/OneTable/TableRow/index.js";
import { renderProperty as o } from "../../../../property-render.js";
import { ItemActionsMobile as s } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRowContainer as c } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as l } from "../../../../components/itemActions/useItemActions.js";
import { ItemActionsRow as u } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { getColumnId as ee } from "../hooks/useColums.js";
import "../hooks/useHeaderGroups.js";
import { useSticky as te } from "../useSticky.js";
import { forwardRef as d, useEffect as f, useState as p } from "react";
import { Fragment as ne, jsx as m, jsxs as h } from "react/jsx-runtime";
import { useIsPresent as g } from "motion/react";
//#region src/patterns/OneDataCollection/visualizations/collection/Table/components/FlatRow.tsx
var re = 1500, _ = {
	none: "",
	striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
	striked: "[&_*:not([data-no-strike]):not([data-no-strike]_*)]:line-through text-f1-foreground-secondary"
}, v = d(({ source: d, item: v, onCheckedChange: y, selectedItems: b, columns: x, frozenColumnsLeft: S, checkColumnWidth: C, index: w, groupIndex: T, noBorder: ie = !1, loading: E = !1, nestedRowProps: D, tableWithChildren: O, disableHover: ae = !1, isNew: oe = !1, referenceRowType: se, boldRootRows: k = !1, cellRenderer: A, fromVisualization: j, headerGroups: M, collapsingCellClasses: N, registerSelectable: P, unregisterSelectable: F }, I) => {
	let L = d.itemUrl ? d.itemUrl(v) : void 0, R = d.itemOnClick ? d.itemOnClick(v) : void 0, z = d.selectable ? d.selectable(v) : void 0, B = !!d.itemsWithChildren?.(v), V = t(), [H, U] = p(oe);
	f(() => {
		if (!H) return;
		let e = setTimeout(() => U(!1), re);
		return () => clearTimeout(e);
	}, [H]);
	let W = (e, t) => o(e, t, "table", V, { tableAlign: t.align ?? "left" }), G = `table-row-${T}-${w}`, { getStickyPosition: ce } = te(S, x, !!d.selectable), { hasItemActions: K, hasMobileItemActions: le, primaryItemActions: q, dropdownItemActions: J, mobileDropdownItemActions: Y, handleDropDownOpenChange: X, dropDownOpen: ue } = l({
		source: d,
		item: v
	}), Z = g();
	f(() => {
		if (!(z === void 0 || !P || !Z)) return P(z, v), () => F?.(z);
	}, [
		z,
		v,
		P,
		F,
		Z
	]);
	let de = z !== void 0 && b.has(z), Q = se?.(v) ?? "none", $ = A ? e("h-[48px] p-0 align-middle last:pr-0", !O && (j === "editableTable" ? "first:pl-3" : "first:pl-0")) : void 0;
	return /* @__PURE__ */ h(a, {
		ref: I,
		sticky: D?.stickyRow,
		className: e("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", ie && "after:bg-white-100", ae && "hover:bg-transparent", de && "bg-f1-background-selected-secondary", H && "animate-row-flash", k && O && (D?.depth ?? 0) === 0 && "font-semibold", _[Q]),
		children: [
			d.selectable && /* @__PURE__ */ m(i, {
				width: C,
				sticky: { left: 0 },
				loading: E,
				className: e(E && O ? "first:pl-4" : "", M && "[&>div:first-child]:hidden", M && "border-0 border-r border-solid border-f1-border-secondary", $),
				referenceRowType: Q,
				children: z !== void 0 && /* @__PURE__ */ m("div", {
					className: "pointer-events-auto ml-3.5 flex h-full items-center justify-start",
					children: /* @__PURE__ */ m(r, {
						checked: b.has(z),
						onCheckedChange: y,
						title: `Select ${d.selectable(v)}`,
						hideLabel: !0
					})
				})
			}),
			x.map((t, r) => {
				let a = M?.find((e) => e.type === "group" && e.columnIndices.includes(r)), o = !!M && (!a || a.columnIndices[a.columnIndices.length - 1] === r), s = /* @__PURE__ */ m("div", {
					className: e(t.align === "right" ? "justify-end" : "", "flex", n),
					children: W(v, t)
				});
				return /* @__PURE__ */ m(i, {
					firstCell: r === 0,
					href: L,
					onClick: R,
					width: t.width,
					minWidth: t.minWidth,
					sticky: ce(r),
					loading: E,
					nestedRowProps: {
						...D,
						rowWithChildren: B,
						tableWithChildren: O,
						selectableRow: !!d.selectable
					},
					fromVisualization: j,
					referenceRowType: Q,
					highlighted: !!t.highlighted,
					className: e($, o && "border-0 border-r border-solid border-f1-border-secondary", N?.get(ee(t))),
					children: A ? /* @__PURE__ */ m(A, {
						item: v,
						isLastColumn: !K && r === x.length - 1,
						column: t,
						cellIndex: r,
						children: s
					}) : s
				}, `table-cell-${T}-${w}-${r}`);
			}),
			K && !E && !D?.onLoadMoreChildren && !D?.onAddRow && (j === "editableTable" ? /* @__PURE__ */ m(i, {
				sticky: { right: 0 },
				referenceRowType: Q,
				className: "bg-f1-background !px-3 align-middle",
				children: /* @__PURE__ */ m(u, {
					className: "flex flex-nowrap justify-center",
					primaryItemActions: q,
					dropdownItemActions: J,
					handleDropDownOpenChange: X
				})
			}, `table-cell-${T}-${w}-actions`) : /* @__PURE__ */ h(ne, { children: [/* @__PURE__ */ m("td", {
				className: "sticky right-0 top-0 z-10 hidden md:table-cell",
				children: /* @__PURE__ */ m(c, {
					dropDownOpen: ue,
					className: "pl-8",
					children: /* @__PURE__ */ m(u, {
						primaryItemActions: q,
						dropdownItemActions: J,
						handleDropDownOpenChange: X
					})
				})
			}), le && /* @__PURE__ */ m(i, {
				width: 68,
				sticky: { right: 0 },
				href: L,
				className: "table-cell md:hidden",
				loading: E,
				children: /* @__PURE__ */ m(s, {
					items: Y,
					onOpenChange: X
				})
			}, `table-cell-${T}-${w}-actions`)] }))
		]
	}, G);
});
v.displayName = "FlatRow";
var y = v;
//#endregion
export { y as FlatRow };
