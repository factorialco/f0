import e from "../../../icons/app/Add.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../components/F0Button/internal.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { ScrollArea as i } from "../../../ui/scrollarea.js";
import { SortAndHideList as a } from "../visualizations/collection/Table/components/SortAndHideList/SortAndHideList.js";
import { useDataCollectionSettings as o } from "./SettingsProvider.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/Settings/SortAndHideSettings.tsx
var l = (e, t) => {
	let n = new Set(t.map((e) => e.id)), r = new Set(t.filter((e) => e.locked).map((e) => e.id)), i = t.filter((e) => !e.locked).map((e) => e.id), a = 0, o = e.filter((e) => n.has(e)).map((e) => r.has(e) ? e : i[a++]), s = new Set(o);
	return [...o, ...t.map((e) => e.id).filter((e) => !s.has(e))];
}, u = (e, t, n = !1) => {
	let r = !t && n ? [...e].reverse().find((e) => !e.locked && e.visible && e.canHide) : void 0;
	return e.map((e) => ({
		...e,
		visible: e.id === r?.id ? !0 : e.canHide ? t : e.visible
	}));
}, d = ({ items: d, visualizationKey: f, allowSorting: p, allowHiding: m, onAddColumn: h, onRemoveColumn: g, onLockedColumnChange: _, orderBaseline: v, keepOneUnlockedVisible: y = !1 }) => {
	let b = t(), { setVisualizationSettings: x } = o(), S = (e) => {
		x(f, (t) => ({
			...t,
			order: v ? l(v, e) : e.map((e) => e.id),
			hidden: e.filter((e) => !e.visible).map((e) => e.id)
		}));
	}, C = (e) => {
		S(u(d, e, y));
	}, w = m && d.filter((e) => e.canHide).length > 1;
	return /* @__PURE__ */ c("div", {
		className: "relative -mr-2 flex flex-col gap-2",
		children: [h && /* @__PURE__ */ s("div", {
			className: "flex",
			children: /* @__PURE__ */ s(n, {
				variant: "ghost",
				size: "sm",
				icon: e,
				label: b.collections.table.settings.addColumn,
				onClick: h
			})
		}), /* @__PURE__ */ c(i, {
			className: "[&_[data-scroll-container]]:max-h-56",
			children: [/* @__PURE__ */ s(a, {
				items: d,
				onChange: S,
				onRemove: g ? (e) => g(e.id) : void 0,
				onLockedChange: _ ? (e, t) => _(e.id, t) : void 0,
				allowSorting: p,
				allowHiding: m
			}), w && /* @__PURE__ */ c("div", {
				className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm",
				children: [/* @__PURE__ */ s(r, {
					variant: "outline",
					size: "sm",
					label: b.collections.table.settings.showAllColumns,
					onClick: () => C(!0)
				}), /* @__PURE__ */ s(r, {
					variant: "ghost",
					size: "sm",
					label: b.collections.table.settings.hideAllColumns,
					onClick: () => C(!1)
				})]
			})]
		})]
	});
};
//#endregion
export { d as SortAndHideSettings, l as mergeUnlockedOrderIntoBaseline, u as setAllItemsVisibility };
