import { createContext as e, useCallback as t, useContext as n, useMemo as r, useRef as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/providers/FormCardValueFormatterProvider.tsx
var s = e(null);
function c({ children: e }) {
	let [n, c] = a(0), l = i([]), u = t((e) => {
		let t = l.current, n = t.findIndex((t) => t.formName === e.formName && t.customFieldName === e.customFieldName), r = e;
		n >= 0 ? t[n] = r : t.push(r), c((e) => e + 1);
	}, []), d = r(() => ({
		formatters: [...l.current],
		setFormCardValueFormatter: u
	}), [u, n]);
	return /* @__PURE__ */ o(s.Provider, {
		value: d,
		children: e
	});
}
function l(e) {
	let t = n(s)?.formatters;
	return r(() => !t || t.length === 0 ? null : (n, r, i) => {
		let a, o = -1;
		for (let n of t) {
			let t = n.formName === void 0 || n.formName === e, r = n.customFieldName === void 0 || n.customFieldName === i.customFieldName;
			if (!t || !r) continue;
			let s = 0;
			n.formName !== void 0 && (s += 2), n.customFieldName !== void 0 && (s += 1), s > o && (o = s, a = n);
		}
		if (a) return a.format(r, {
			key: n,
			...i
		});
	}, [t, e]);
}
function u() {
	let e = n(s);
	if (!e) throw Error("useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider");
	return e.setFormCardValueFormatter;
}
//#endregion
export { c as FormCardValueFormatterProvider, l as useFormCardValueFormatter, u as useSetFormCardValueFormatter };
