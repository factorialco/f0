import { F0Select as e } from "../../../../F0Select.js";
import { useMemo as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/sds/Home/ClockIn/ClockInControls/TreeSelector.tsx
var r = " · ", i = " — ", a = 20;
function o(e) {
	let t = [], n = (e, a) => {
		if (e.children?.length) {
			e.children.forEach((t) => n(t, [...a, e]));
			return;
		}
		let o = a.map((e) => e.name), s = o.join(r);
		t.push({
			id: e.id,
			name: e.name,
			group: o.length ? s : e.name,
			path: o.length ? `${e.name}${i}${s}` : e.name,
			haystack: [e.name, ...o].join(" ").toLowerCase(),
			icon: e.icon ?? [...a].reverse().find((e) => e.icon)?.icon
		});
	};
	return e.forEach((e) => n(e, [])), t;
}
var s = (e, t) => t ? c(e).find((e) => e.id === t) : void 0, c = (e) => e.flatMap((e) => [e, ...c(e.children ?? [])]);
function l({ items: r, value: i, onChange: s, label: c, searchPlaceholder: l, fieldIcon: u, required: d = !0, disabled: f }) {
	let p = t(() => o(r), [r]), m = t(() => r.some((e) => !!e.children?.length), [r]), h = (i ? p.find((e) => e.id === i) : void 0)?.icon ?? u, g = t(() => ({
		grouping: {
			mandatory: !0,
			hideSelector: !0,
			collapsible: !0,
			defaultOpenGroups: !0,
			groupBy: { group: {
				name: c,
				label: (e) => String(e)
			} }
		},
		dataAdapter: {
			paginationType: "infinite-scroll",
			perPage: a,
			fetchData: ({ search: e, pagination: t }) => {
				let n = e?.trim().toLowerCase(), r = n ? p.filter((e) => e.haystack.includes(n)) : p, i = t.perPage ?? a, o = Number(("cursor" in t ? t.cursor : null) ?? 0), s = o + i;
				return {
					type: "infinite-scroll",
					records: r.slice(o, s),
					total: r.length,
					perPage: i,
					cursor: String(s),
					hasMore: s < r.length
				};
			}
		}
	}), [p, c]), _ = {
		label: c,
		hideLabel: !0,
		placeholder: c,
		icon: h,
		size: "sm",
		showSearchBox: !0,
		searchBoxPlaceholder: l,
		clearable: !d,
		value: i,
		onChange: s,
		onChangeSelectedOption: (e, t) => {
			e || s?.("");
		},
		disabled: f
	};
	return m ? /* @__PURE__ */ n(e, {
		..._,
		source: g,
		mapOptions: (e) => ({
			value: e.id,
			label: e.name,
			icon: e.icon,
			selectedLabel: e.path
		})
	}) : /* @__PURE__ */ n(e, {
		..._,
		options: p.map((e) => ({
			value: e.id,
			label: e.name,
			icon: e.icon
		}))
	});
}
//#endregion
export { l as TreeSelector, s as findLeaf, o as flattenTree };
