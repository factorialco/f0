"use client";
import { useI18n as e } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { createContext as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
var s = t(null);
function c({ item: t, onCellChange: n, children: c }) {
	let [l, u] = a(t), [d, f] = a({}), [p, m] = a({}), { t: h } = e(), g = i(l);
	g.current = l;
	let _ = i(null);
	r(() => {
		let e = {
			...t,
			..._.current?.updates
		};
		g.current = e, u(e);
	}, [t]);
	let v = (e, t) => {
		m((n) => {
			let r = { ...n };
			for (let n of e) r[n] = t;
			return r;
		});
	}, y = (e, t) => {
		f((n) => {
			let r = { ...n };
			for (let n of e) t === void 0 ? delete r[n] : r[n] = t;
			return r;
		});
	}, b = (e) => {
		let t = Object.keys(e), r = g.current, i = {};
		for (let n of t) i[n] = [e[n], r[n]];
		v(t, !0), n({
			updatedItem: r,
			changes: i
		}).then((e) => {
			e && Object.keys(e).length > 0 && f((t) => ({
				...t,
				...e
			}));
		}).catch((e) => {
			let n = e instanceof Error ? e.message : h("collections.editableTable.errors.saveFailed");
			y(t, n);
		}).finally(() => {
			v(t, !1);
		});
	}, x = () => {
		let e = _.current;
		e && (clearTimeout(e.timer), _.current = null, b(e.previousValues));
	}, S = i(x);
	S.current = x, r(() => () => S.current(), []);
	let C = (e, t) => {
		let n = Object.keys(e);
		if (n.length === 0) return;
		let r = g.current, i = {};
		for (let e of n) i[e] = r[e];
		let a = {
			...r,
			...e
		};
		if (g.current = a, u(a), y(n, void 0), !t?.debounce) {
			x(), b(i);
			return;
		}
		let o = _.current;
		o && clearTimeout(o.timer), _.current = {
			previousValues: {
				...i,
				...o?.previousValues
			},
			updates: {
				...o?.updates,
				...e
			},
			timer: setTimeout(() => S.current(), 250)
		};
	};
	return /* @__PURE__ */ o(s.Provider, {
		value: {
			localItem: l,
			cellErrors: d,
			cellLoading: p,
			handleCellChange: (e, t, n) => C({ [e]: t }, n),
			batchCellChanges: (e, t) => C(e, t)
		},
		children: c
	});
}
function l() {
	return n(s);
}
//#endregion
export { c as EditableRowProvider, l as useEditableRow };
