import { cacheLabel as e, getCacheKey as t, getCachedLabel as n, getNestedCachedLabel as r, loadOptions as i } from "./useLoadOptions.js";
import { InFilter as a } from "./InFilter.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/InFilter/index.tsx
var s = {
	emptyValue: [],
	isEmpty: (e) => (e || []).length === 0,
	render: (e) => /* @__PURE__ */ o(a, { ...e }),
	chipLabel: async (a, { schema: o, filterKey: s }) => {
		let c = t(o);
		if (s) {
			let e = a.map((e) => r(s, e));
			if (e[0]) {
				let t = e.length - 1;
				return t > 0 ? `${e[0]} +${t}` : e[0];
			}
		}
		let l = a.map((e) => n(c, e));
		if (l[0]) {
			let e = l[0], t = l.length - 1;
			return t > 0 ? `${e} +${t}` : `${e}`;
		}
		if (o.options.getLabel) {
			let t = a[0];
			if (!t) return "";
			let r = n(c, t);
			if (r) {
				let e = a.length - 1;
				return e > 0 ? `${r} +${e}` : r;
			}
			let i = await o.options.getLabel(t);
			e(c, t, i);
			let s = a.length - 1;
			return s > 0 ? `${i} +${s}` : i;
		}
		let u = "options" in o.options ? o.options.options : [];
		if ("source" in o.options && o.options.source && "mapOptions" in o.options) {
			let e = a[0], t = a.length - 1;
			return t > 0 ? `${String(e)} +${t}` : String(e);
		}
		let d = await i(c, u, o.options.cache), f = a.map((t) => {
			let n = d.find((e) => e.value === t), r = n?.label ?? String(t);
			return n && e(c, t, r), r;
		}), p = f[0], m = f.length - 1;
		return m > 0 ? `${p} +${m}` : `${p}`;
	}
};
//#endregion
export { s as default, s as inFilter };
