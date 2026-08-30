import { getDataCollectionStorageKey as e } from "./dataCollectionStorageKey.js";
//#region src/lib/providers/datacollection/dataCollectionUrlParams.ts
var t = "dc_", n = {
	search: "dc_search",
	sortings: "dc_sort",
	visualization: "dc_visualization",
	page: "dc_page",
	preset: "dc_view"
}, r = "..", i = "*", a = "none", o = "-", s = 25, c = (e) => `dc_${e}`, l = (e) => e instanceof URLSearchParams ? e : typeof e == "string" ? new URLSearchParams(e) : typeof window < "u" ? new URLSearchParams(window.location.search) : new URLSearchParams(), u = (e) => {
	new Set([...e.keys()].filter((e) => e.startsWith("dc_"))).forEach((t) => e.delete(t));
}, d = (e) => {
	let t = e.trim();
	if (t === "" || t === a || t === "null") return null;
	let n = t.lastIndexOf(o), r = n === -1 ? "" : t.slice(n + 1);
	if (r === "asc" || r === "desc") {
		let e = t.slice(0, n);
		return e ? {
			field: e,
			order: r
		} : null;
	}
	return {
		field: t,
		order: "asc"
	};
}, f = (e) => e ? `${String(e.field)}${o}${e.order}` : a, p = (e) => e.toISOString().slice(0, 10), m = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.filter((e) => e != null).map(String);
	if (typeof e == "string") return e === "" ? [] : [e];
	if (typeof e == "number") return [String(e)];
	if (e instanceof Date) return [p(e)];
	if (typeof e == "object") {
		let t = e;
		if (typeof t.value == "string" && "strict" in t) return t.value === "" ? [] : [t.value];
		if (t.mode === "single") {
			let e = t.value;
			return e == null ? [] : [String(e)];
		}
		if (t.mode === "range") {
			let e = t.from, n = t.to;
			if (e?.value == null && n?.value == null) return [];
			let a = (e) => e?.value == null ? "" : `${e.value}${e.closed === !1 ? i : ""}`;
			return [`${a(e)}${r}${a(n)}`];
		}
		if (t.from instanceof Date || t.to instanceof Date) return [`${t.from instanceof Date ? p(t.from) : ""}${r}${t.to instanceof Date ? p(t.to) : ""}`];
	}
	return [];
}, h = (e) => {
	let t = e.endsWith(i), n = t ? e.slice(0, -1) : e;
	return {
		value: n === "" ? void 0 : Number(n),
		closed: !t
	};
}, g = (e) => {
	if (e.includes(r)) {
		let [t, n] = e.split(r);
		return {
			mode: "range",
			from: h(t ?? ""),
			to: h(n ?? "")
		};
	}
	let t = Number(e);
	return {
		mode: "single",
		value: Number.isNaN(t) ? void 0 : t
	};
}, _ = (e) => {
	if (e.includes(r)) {
		let [t, n] = e.split(r);
		return t ? n ? {
			from: new Date(t),
			to: new Date(n)
		} : { from: new Date(t) } : void 0;
	}
	return e ? new Date(e) : void 0;
}, v = (e, t) => {
	switch (e) {
		case "in": return t;
		case "search": return t[0];
		case "number": return g(t[0] ?? "");
		case "date": return _(t[0] ?? "");
		default: return t.length > 1 ? t : t[0];
	}
}, y = (e, t) => {
	let r = l(e), i = {};
	if (r.has(n.search) && (i.search = r.get(n.search) ?? void 0), r.has(n.sortings) && (i.sortings = d(r.get(n.sortings) ?? "")), r.has(n.visualization)) {
		let e = r.get(n.visualization);
		e && (i.visualization = e);
	}
	if (r.has(n.page)) {
		let e = Number(r.get(n.page));
		Number.isInteger(e) && e >= 1 && (i.page = e);
	}
	if (r.has(n.preset)) {
		let e = r.get(n.preset);
		e && (i.preset = e);
	}
	if (t) {
		let e = {}, n = !1;
		for (let [i, a] of Object.entries(t)) {
			let t = c(i);
			r.has(t) && (e[i] = v(a.type, r.getAll(t)), n = !0);
		}
		n && (i.filters = e);
	}
	return i;
}, b = /* @__PURE__ */ new Set(), x = (e, t) => {
	b.has(e) || (b.add(e), console.warn(`[OneDataCollection] Filter "${e}" has ${t} selected values, over the URL limit of 25; it will not be reflected in the URL (still applied in-memory and persisted via storage).`));
}, S = (e) => {
	let t = m(e).length;
	return t > 0 && t <= 25;
}, C = (e, t) => {
	if (t.filters) for (let [n, r] of Object.entries(t.filters)) {
		let t = m(r);
		if (t.length > 25) {
			x(n, t.length);
			continue;
		}
		t.forEach((t) => e.append(c(n), t));
	}
	t.search && e.set(n.search, t.search), t.sortings && e.set(n.sortings, f(t.sortings)), t.visualization && e.set(n.visualization, t.visualization), t.page && t.page > 1 && e.set(n.page, String(t.page)), t.preset && e.set(n.preset, t.preset);
}, w = (e) => !!e.search || !!e.sortings || !!e.visualization || e.page !== void 0 && e.page > 1 || !!e.preset || !!e.filters && Object.values(e.filters).some(S), T = (e = {}) => {
	let t = new URLSearchParams();
	return C(t, e), t;
}, E = (e, t) => {
	let n = new URLSearchParams(l(e));
	return u(n), w(t) && C(n, t), n;
}, D = (e, t) => {
	if (typeof window > "u") return null;
	let n = E(window.location.search, e).toString(), r = n ? `${window.location.pathname}?${n}` : window.location.pathname, i = t?.history ?? "replace";
	return i === "push" ? window.history.pushState(null, "", r) : i === "replace" && window.history.replaceState(null, "", r), n;
}, O = (t, n) => {
	try {
		localStorage.setItem(e(t), JSON.stringify(n));
	} catch {}
};
//#endregion
export { n as DATA_COLLECTION_URL_PARAMS, t as DATA_COLLECTION_URL_PARAM_PREFIX, s as MAX_URL_FILTER_VALUES, T as buildDataCollectionUrlParams, y as parseDataCollectionUrlParams, E as setDataCollectionUrlParams, D as syncDataCollectionUrlParams, O as writeDataCollectionStorage };
