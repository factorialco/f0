import { useCallback as e, useLayoutEffect as t, useMemo as n, useRef as r, useState as i } from "react";
//#region src/patterns/OneDataCollection/hooks/usePerVisualizationFilters.ts
var a = (e) => typeof e == "object" && !!e && !Array.isArray(e), o = (e) => String(e), s = (e, t) => {
	let n = t[e];
	if (n?.presets !== void 0) {
		let e = n.presets[0];
		return e ? e.filter : {};
	}
	return {};
}, c = (e, t, n) => {
	let r = t[e];
	return r?.filters ? new Set(Object.keys(r.filters)) : n ? new Set(Object.keys(n)) : null;
}, l = (e, t, n, r) => {
	if (!a(t)) return {};
	let i = c(e, n, r);
	if (!i) return t;
	let o = {};
	for (let [e, n] of Object.entries(t)) i.has(e) && (o[e] = n);
	return o;
}, u = ({ sourceFilters: c, sourcePresets: u, sourceCurrentFilters: d, sourceSetCurrentFilters: f, visualizations: p, currentVisualization: m, storageKey: h }) => {
	let g = p.length > 1, _ = p.some((e) => e.filters !== void 0 || e.presets !== void 0), [v, y] = i({}), b = r(m), x = r(!1), S = r(!1), C = r(null), w = r(d), T = r(p);
	T.current = p;
	let E = r(c);
	if (E.current = c, t(() => {
		x.current = !1, S.current = !1, C.current = null, b.current = m, w.current = d, y((e) => Object.keys(e).length > 0 ? {} : e);
	}, [h]), g && S.current) {
		let e = o(b.current), t = o(m);
		e === t ? d !== w.current && (C.current = null) : C.current = v[t] ?? s(m, p);
	} else C.current = null;
	w.current = d, t(() => {
		if (!g || !x.current || S.current) return;
		let e = o(m), t = v[e];
		f(t ?? s(m, p)), S.current = !0;
	}, [
		g,
		m,
		v
	]), t(() => {
		if (!g) return;
		if (x.current && !S.current) {
			b.current = m;
			return;
		}
		let e = o(b.current), t = o(m);
		if (e !== t) {
			y((t) => ({
				...t,
				[e]: d
			}));
			let n = v[t];
			f(n ?? s(m, p));
		}
		b.current = m;
	}, [m, g]);
	let D = n(() => {
		if (!_) return c;
		let e = p[m];
		return e?.filters ? e.filters : c;
	}, [
		_,
		c,
		p,
		m
	]), O = n(() => {
		if (!_) return u;
		let e = p[m]?.presets;
		if (e) return e;
		let t = D ? new Set(Object.keys(D)) : void 0;
		if (t && u) {
			let e = u.filter((e) => Object.keys(e.filter).every((e) => t.has(e)));
			return e.length > 0 ? e : void 0;
		}
		return u;
	}, [
		g,
		u,
		p,
		m,
		D,
		_
	]), k = n(() => {
		if (!g) return {};
		let e = o(m);
		return e in v || b.current !== m ? v : {
			...v,
			[e]: d
		};
	}, [
		g,
		v,
		m,
		d
	]), A = r({
		viz: m,
		json: JSON.stringify(d)
	});
	t(() => {
		if (!g || !S.current) return;
		let e = A.current;
		if (e.viz !== m) {
			A.current = {
				viz: m,
				json: JSON.stringify(d)
			};
			return;
		}
		let t = JSON.stringify(d);
		if (t === e.json) return;
		e.json = t;
		let n = o(m);
		y((e) => {
			let r = e[n];
			return r === d || r !== void 0 && JSON.stringify(r) === t ? e : {
				...e,
				[n]: d
			};
		});
	}, [
		g,
		m,
		d
	]);
	let j = e((e) => {
		if (!g) {
			f(e);
			return;
		}
		let t = o(m);
		if (typeof e == "function") {
			let n = e;
			f((e) => {
				let r = n(e);
				return y((e) => e[t] === r ? e : {
					...e,
					[t]: r
				}), r;
			});
		} else f(e), y((n) => n[t] === e ? n : {
			...n,
			[t]: e
		});
	}, [
		g,
		f,
		m
	]), M = e((e) => {
		if (x.current) return;
		x.current = !0;
		let t = T.current, n = E.current, r = a(e) ? e : {}, i = {};
		for (let [e, o] of Object.entries(r)) {
			let r = a(o) ? o : {}, s = Number(e);
			i[e] = Number.isInteger(s) && s >= 0 && s < t.length ? l(s, r, t, n) : r;
		}
		y(i);
	}, []);
	return g ? {
		effectiveFilters: D,
		effectivePresets: O,
		currentFilters: C.current ?? d,
		setCurrentFilters: j,
		allVisualizationFilters: k,
		setAllVisualizationFilters: M,
		hasPerVisualizationFilters: !0
	} : {
		effectiveFilters: D,
		effectivePresets: O,
		currentFilters: d,
		setCurrentFilters: f,
		allVisualizationFilters: {},
		setAllVisualizationFilters: () => {},
		hasPerVisualizationFilters: !1
	};
};
//#endregion
export { u as usePerVisualizationFilters };
