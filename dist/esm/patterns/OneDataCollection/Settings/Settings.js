import e from "../../../icons/app/Reset.js";
import t from "../../../icons/app/Sliders.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../ui/popover.js";
import { GroupingSelector as c } from "./components/GroupingSelector.js";
import { F0SelectStatic as l } from "../../../components/F0Select/F0Select.js";
import { useDataCollectionSettings as u } from "./SettingsProvider.js";
import { isVisualizationSettingsDefault as d } from "../internal/isSettingsDefault.js";
import { collectionVisualizations as f } from "../visualizations/collection/collectionViewRegistry.js";
import { SortingSelector as p } from "./components/SortingSelector.js";
import { VisualizationSettingsRenderer as m, hasVisualizacionSettings as h } from "./VisualizationSettingsRenderer.js";
import { useMemo as g, useState as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/Settings.tsx
var b = ({ visualizations: b, currentVisualization: x, grouping: S, currentGrouping: C, onGroupingChange: w, sortings: T, currentSortings: E, defaultSortings: D, onSortingsChange: O }) => {
	let k = n(), A = S ? Object.keys(S.groupBy).length + +!!S.mandatory : 0, [j, M] = _(!1), N = (e) => {
		w(e);
	}, P = S && A > 0, F = b[x]?.sortings ?? T, I = F && Object.keys(F).length > 0, L = g(() => b[x], [x, b?.[x]]), R = g(() => /* @__PURE__ */ v(m, { visualization: L }, "visualization-settings"), [L]), z = g(() => h(L), [L]), B = g(() => {
		let e = b[x]?.type;
		if (!e) return "-";
		let t = k.collections.visualizations[e] ?? "-";
		return k.collections.visualizations.settings.replace("{{visualizationName}}", t);
	}, [x]), V = u(), H = g(() => {
		if (JSON.stringify(E) !== JSON.stringify(D)) return !0;
		let e = b[x]?.type;
		return !d(V.settings, e);
	}, [
		V.settings.visualization,
		b,
		x,
		E,
		D
	]);
	return /* @__PURE__ */ v("div", {
		className: "flex gap-2",
		children: /* @__PURE__ */ y(a, {
			open: j,
			onOpenChange: M,
			children: [/* @__PURE__ */ v(s, {
				asChild: !0,
				onClick: () => M(!j),
				children: /* @__PURE__ */ v(r, {
					variant: "outline",
					label: "Settings",
					icon: t,
					onClick: () => {},
					hideLabel: !0,
					compact: !0,
					pressed: j,
					"aria-controls": j ? "settings" : void 0
				})
			}), /* @__PURE__ */ v(o, {
				className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
				align: "end",
				sideOffset: 8,
				children: [
					P && !S?.hideSelector && !(S.mandatory && Object.entries(S.groupBy).length < 2) && /* @__PURE__ */ v("div", {
						className: "p-3",
						children: /* @__PURE__ */ v(c, {
							SelectComponent: l,
							grouping: S,
							currentGrouping: C,
							onGroupingChange: N
						})
					}, "grouping"),
					I && /* @__PURE__ */ v("div", {
						className: "p-3",
						children: /* @__PURE__ */ v(p, {
							currentSortings: E,
							onChange: O,
							sortings: F
						})
					}, "sorting"),
					z && /* @__PURE__ */ y("section", {
						className: "p-3 pb-0",
						children: [/* @__PURE__ */ v("h3", {
							className: "mb-2 text-sm font-medium text-f1-foreground-secondary",
							children: B
						}), R]
					}, "visualization-settings"),
					H && /* @__PURE__ */ v("section", {
						className: "border-0 border-t border-solid border-t-f1-border p-3",
						children: /* @__PURE__ */ v(i, {
							size: "sm",
							variant: "ghost",
							icon: e,
							label: k.collections.visualizations.reset,
							onClick: () => {
								Object.values(f).forEach((e) => {
									e.settings.resetHandler?.(V);
								}), O(D);
							}
						})
					}, "reset")
				].filter(Boolean)
			})]
		})
	});
};
//#endregion
export { b as Settings };
