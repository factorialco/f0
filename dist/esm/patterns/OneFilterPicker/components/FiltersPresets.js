import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/Add.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as a } from "../../../ui/skeleton.js";
import { Counter as o } from "../../../ui/Counter/index.js";
import { OverflowList as s } from "../../../ui/OverflowList/index.js";
import { Await as c } from "../../../lib/Await/Await.js";
import { Preset as l } from "../../../ui/OnePreset/index.js";
import { isPresetSelected as u } from "../internal/isPresetSelected.js";
import { useMemo as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/components/FiltersPresets.tsx
var m = 4, h = ({ presets: h, value: g, onPresetsChange: _, presetsLoading: v = !1, selectedPresetId: y, onSelectPreset: b, editablePresetIds: x, onEditPreset: S, presetActionState: C = "none", onPresetAction: w }) => {
	let T = i(), E = d(() => typeof g == "object" && g && !Array.isArray(g) ? g : {}, [g]), D = (e, t) => {
		if (b) return {
			isSelected: t === y,
			handleClick: () => b(t)
		};
		let n = u(e, E);
		return {
			isSelected: n,
			handleClick: () => {
				n ? _?.({}) : _?.({ ...e.filter });
			}
		};
	}, O = d(() => !h || h.length === 0 ? [] : h.filter((e) => e && e.filter != null && typeof e.filter == "object" && !Array.isArray(e.filter)), [h]), k = d(() => {
		let e = O.map((e, t) => ({
			preset: e,
			presetId: e.id ?? `${e.label}-${t}`,
			key: `${e.label}-${t}`
		})), t = (e) => x?.includes(e) ?? !1, n = e.filter((e) => !t(e.presetId)), r = e.filter((e) => t(e.presetId)), i = (e) => ({
			kind: "preset",
			...e
		});
		return [
			...n.map(i),
			...n.length > 0 && r.length > 0 ? [{
				kind: "separator",
				key: "preset-group-separator"
			}] : [],
			...r.map(i)
		];
	}, [O, x]), A = d(() => C === "save" ? [...k, {
		kind: "save",
		key: "save-as-preset"
	}] : k, [k, C]), j = (i, a, o = !0) => {
		if (i.kind === "separator") return /* @__PURE__ */ f("div", {
			className: "mx-1 flex items-center",
			"data-visible": o,
			"data-testid": "preset-group-separator",
			children: /* @__PURE__ */ f("div", { className: "h-4 w-px bg-f1-background-secondary-hover" })
		});
		if (i.kind === "save") return /* @__PURE__ */ p("button", {
			type: "button",
			"data-visible": o,
			onClick: () => w?.(),
			className: e("flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded px-2.5 py-1.5 font-medium text-f1-foreground opacity-60 outline-dashed outline-1 outline-f1-border transition-opacity hover:opacity-100", t()),
			children: [/* @__PURE__ */ f(n, {
				icon: r,
				size: "sm"
			}), T.actions.saveAsPreset]
		});
		let { preset: s, presetId: c } = i, { isSelected: u, handleClick: d } = D(s, c), m = s.itemsCount?.(E), h = x?.includes(c) ?? !1;
		return /* @__PURE__ */ f(l, {
			label: s.label,
			description: s.description,
			selected: u,
			onClick: d,
			"data-visible": o,
			number: m,
			onEdit: h && S ? () => S(c) : void 0
		});
	}, M = (i) => {
		if (i.kind === "separator") return /* @__PURE__ */ f("div", { className: "my-1 h-px w-full bg-f1-border-secondary" });
		if (i.kind === "save") return /* @__PURE__ */ p("button", {
			type: "button",
			onClick: () => w?.(),
			className: e("flex w-full cursor-pointer items-center gap-1 rounded-sm p-2 text-left font-medium text-f1-foreground opacity-70 hover:bg-f1-background-secondary hover:opacity-100", t()),
			children: [/* @__PURE__ */ f(n, {
				icon: r,
				size: "sm"
			}), T.actions.saveAsPreset]
		});
		let { preset: s, presetId: l } = i, { isSelected: u, handleClick: d } = D(s, l), m = s.itemsCount?.(E);
		return /* @__PURE__ */ p("button", {
			className: e("flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary", u && "bg-f1-background-selected hover:bg-f1-background-selected", t()),
			onClick: d,
			"data-visible": !0,
			children: [s.label, m !== void 0 && /* @__PURE__ */ f(c, {
				resolve: m,
				fallback: /* @__PURE__ */ f(a, { className: "h-4 w-6" }),
				children: (e) => e !== void 0 && /* @__PURE__ */ f(o, {
					value: e,
					type: u ? "selected" : "default"
				})
			})]
		});
	}, N = (e, t, n = !0) => /* @__PURE__ */ f(a, {
		className: "h-8 w-32 rounded-md",
		"data-visible": n
	}, t), P = (e, t) => /* @__PURE__ */ p("div", {
		className: "flex w-full items-center justify-between rounded-sm p-2",
		"data-visible": !0,
		children: [/* @__PURE__ */ f(a, { className: "h-4 w-24" }), /* @__PURE__ */ f(a, { className: "h-4 w-6" })]
	}, t);
	if (v) {
		let e = Array.from({ length: m }, (e, t) => t);
		return /* @__PURE__ */ f(s, {
			items: e,
			renderListItem: N,
			renderDropdownItem: P,
			className: "min-w-0 flex-1"
		});
	}
	return A.length === 0 ? null : /* @__PURE__ */ f(s, {
		items: A,
		renderListItem: j,
		renderDropdownItem: M,
		className: "min-w-0 flex-1",
		min: 1,
		fluidItems: !0
	});
};
//#endregion
export { h as FiltersPresets };
