import e from "../../../icons/app/Reset.js";
import t from "../../../icons/app/Sliders.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../ui/popover.js";
import { GroupingSelector as c } from "./components/GroupingSelector.js";
import { collectionVisualizations as l } from "../visualizations/collection/collectionViewRegistry.js";
import { useDataCollectionSettings as u } from "./SettingsProvider.js";
import { isVisualizationSettingsDefault as d } from "../internal/isSettingsDefault.js";
import { SortingSelector as f } from "./components/SortingSelector.js";
import { VisualizationSettingsRenderer as p, hasVisualizacionSettings as m } from "./VisualizationSettingsRenderer.js";
import { useMemo as h, useState as g } from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/Settings.tsx
var y = ({ visualizations: y, currentVisualization: b, grouping: x, currentGrouping: S, onGroupingChange: C, sortings: w, currentSortings: T, defaultSortings: E, onSortingsChange: D }) => {
	let O = n(), k = x ? Object.keys(x.groupBy).length + +!!x.mandatory : 0, [A, j] = g(!1), M = (e) => {
		C(e);
	}, N = x && k > 0, P = y[b]?.sortings ?? w, F = P && Object.keys(P).length > 0, I = h(() => y[b], [b, y?.[b]]), L = h(() => /* @__PURE__ */ _(p, { visualization: I }, "visualization-settings"), [I]), R = h(() => m(I), [I]), z = h(() => {
		let e = y[b]?.type;
		if (!e) return "-";
		let t = O.collections.visualizations[e] ?? "-";
		return O.collections.visualizations.settings.replace("{{visualizationName}}", t);
	}, [b]), B = u(), V = h(() => {
		if (JSON.stringify(T) !== JSON.stringify(E)) return !0;
		let e = y[b]?.type;
		return !d(B.settings, e);
	}, [
		B.settings.visualization,
		y,
		b,
		T,
		E
	]);
	return /* @__PURE__ */ _("div", {
		className: "flex gap-2",
		children: /* @__PURE__ */ v(a, {
			open: A,
			onOpenChange: j,
			children: [/* @__PURE__ */ _(s, {
				asChild: !0,
				onClick: () => j(!A),
				children: /* @__PURE__ */ _(r, {
					variant: "outline",
					label: "Settings",
					icon: t,
					onClick: () => {},
					hideLabel: !0,
					compact: !0,
					pressed: A,
					"aria-controls": A ? "settings" : void 0
				})
			}), /* @__PURE__ */ _(o, {
				className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
				align: "end",
				sideOffset: 8,
				children: [
					N && !x?.hideSelector && !(x.mandatory && Object.entries(x.groupBy).length < 2) && /* @__PURE__ */ _("div", {
						className: "p-3",
						children: /* @__PURE__ */ _(c, {
							grouping: x,
							currentGrouping: S,
							onGroupingChange: M
						})
					}, "grouping"),
					F && /* @__PURE__ */ _("div", {
						className: "p-3",
						children: /* @__PURE__ */ _(f, {
							currentSortings: T,
							onChange: D,
							sortings: P
						})
					}, "sorting"),
					R && /* @__PURE__ */ v("section", {
						className: "p-3 pb-0",
						children: [/* @__PURE__ */ _("h3", {
							className: "mb-2 text-sm font-medium text-f1-foreground-secondary",
							children: z
						}), L]
					}, "visualization-settings"),
					V && /* @__PURE__ */ _("section", {
						className: "border-0 border-t border-solid border-t-f1-border p-3",
						children: /* @__PURE__ */ _(i, {
							size: "sm",
							variant: "ghost",
							icon: e,
							label: O.collections.visualizations.reset,
							onClick: () => {
								Object.values(l).forEach((e) => {
									e.settings.resetHandler?.(B);
								}), D(E);
							}
						})
					}, "reset")
				].filter(Boolean)
			})]
		})
	});
};
//#endregion
export { y as Settings };
