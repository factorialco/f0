import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Add.js";
import n from "../../../../icons/app/ArrowDown.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { F0ButtonDropdown as a } from "../../../../components/F0ButtonDropdown/F0ButtonDropdown.js";
import { getNestedMarginLeft as o, getNestedMarginLeftForLoadMore as s, isFirstCellDetailed as c, isFirstCellWithChildren as l, isFirstCellWithDepth as u, isFirstCellWithNoChildrenAndTableChildren as d } from "../utils/nested.js";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { ChevronDown as h, ChevronRight as g } from "lucide-react";
//#region src/experimental/OneTable/TableCell/NestedCell/index.tsx
var _ = ({ width: _, linkRef: v, firstCell: y, nestedRowProps: b, children: x, onClick: S }) => {
	let { collections: C } = r(), w = l(y, !!b?.rowWithChildren), T = u(y, b?.depth ?? 0), E = d(y, !!b?.rowWithChildren, !!b?.tableWithChildren), D = c(y, b), O = b?.onLoadMoreChildren, k = b?.onAddRow, A = b?.depth ?? 0, j = T ? o({ depth: w ? A : A + 1 }) : void 0, M = O || k;
	return /* @__PURE__ */ p("div", {
		className: e(_ !== "auto" && "overflow-hidden", "relative z-[1] h-full", w && "flex items-center gap-2"),
		style: { marginLeft: M ? s({
			depth: A + +!D,
			isDetailedVariant: D
		}) : j },
		onClick: () => {
			M || (v.current?.click(), S?.());
		},
		children: k ? /* @__PURE__ */ p("div", {
			className: e("pointer-events-auto flex items-center w-full h-full", D && "pl-3"),
			children: k.actions.length === 1 ? /* @__PURE__ */ p(i, {
				variant: "outline",
				size: "sm",
				icon: k.actions[0].icon ?? t,
				label: k.actions[0].label,
				onClick: (e) => {
					e.stopPropagation(), k.actions[0].onClick?.();
				},
				loading: k.actions[0].loading,
				disabled: k.actions[0].disabled
			}) : k.actions.some((e) => e.description !== void 0) ? /* @__PURE__ */ p(a, {
				mode: "dropdown",
				variant: "outline",
				size: "sm",
				trigger: k.label,
				disabled: k.actions.every((e) => e.disabled),
				loading: k.actions.some((e) => e.loading),
				items: k.actions.map((e, t) => ({
					value: t.toString(),
					label: e.label,
					icon: e.icon,
					description: e.description
				})),
				onClick: (e) => {
					k.actions[Number(e)]?.onClick?.();
				}
			}) : /* @__PURE__ */ p(a, {
				variant: "outline",
				size: "sm",
				disabled: k.actions.every((e) => e.disabled),
				loading: k.actions.some((e) => e.loading),
				items: k.actions.map((e, t) => ({
					value: t.toString(),
					label: e.label,
					icon: e.icon
				})),
				onClick: (e) => {
					k.actions[Number(e)]?.onClick?.();
				}
			})
		}) : O ? /* @__PURE__ */ p(f, { children: /* @__PURE__ */ p("div", {
			className: e("pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"),
			children: /* @__PURE__ */ p(i, {
				variant: "ghost",
				size: "md",
				icon: n,
				label: C.table.seeMoreChildren,
				onClick: (e) => {
					e.stopPropagation(), O?.();
				}
			})
		}) }) : /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", {
			className: e("flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center", w && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"),
			style: {
				"--chevron-parent-size": "24px",
				"--chevron-size": "18px",
				"--spacing-factor": "32px"
			},
			onClick: (e) => {
				w && (e.stopPropagation(), b?.onExpand?.());
			},
			children: w && (b?.expanded ? /* @__PURE__ */ p(h, {
				className: "pointer-events-none shrink-0",
				size: 18
			}) : /* @__PURE__ */ p(g, {
				className: "pointer-events-none shrink-0",
				size: 18
			}))
		}), /* @__PURE__ */ p("div", {
			className: e(w && "min-w-0 w-full h-full", E && "pl-[var(--spacing-factor)]", "relative"),
			children: x
		})] })
	});
};
//#endregion
export { _ as NestedCell };
