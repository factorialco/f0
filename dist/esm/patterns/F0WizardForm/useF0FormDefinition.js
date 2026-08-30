import { useEffect as e, useMemo as t, useRef as n, useState as r } from "react";
//#region src/patterns/F0WizardForm/useF0FormDefinition.ts
function i(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e._def;
	return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
function a(t, i) {
	let a = typeof t == "function", o = !!i, [s, c] = r(a ? void 0 : t), [l, u] = r(a), d = n(t);
	d.current = t;
	let f = n(i);
	return f.current = i, e(() => {
		if (typeof d.current != "function") return;
		let e = new AbortController();
		u(!0);
		let t = d.current;
		return (f.current ? t({}) : t(e.signal)).then((t) => {
			e.signal.aborted || (c(t), u(!1));
		}).catch((t) => {
			e.signal.aborted || (console.warn("[useAsyncDefaultValues] Async defaultValues rejected:", t), c(void 0), u(!1));
		}), () => {
			e.abort();
		};
	}, [a, o]), a ? {
		resolved: s,
		isLoading: l
	} : {
		resolved: t,
		isLoading: !1
	};
}
function o(e) {
	let { name: n, schema: r, sections: o, defaultValues: s, onSubmit: c, submitConfig: l, errorTriggerMode: u, defaultValuesParamsSchema: d, description: f, module: p } = e, m = "initialFiles" in e ? e.initialFiles : void 0, h = "steps" in e ? e.steps : void 0, g = typeof s == "function" && d ? s : void 0, _ = typeof s == "function" && !d ? s : void 0, v = typeof s == "function" ? void 0 : s, { resolved: y, isLoading: b } = a(m);
	return t(() => {
		let e = i(r) ? "single" : "per-section";
		return {
			name: n,
			description: f,
			module: p,
			schema: r,
			sections: o,
			defaultValues: v,
			asyncDefaultValues: _,
			onSubmit: c,
			submitConfig: l,
			errorTriggerMode: u,
			isLoading: b,
			defaultValuesParamsSchema: d,
			defaultValuesFn: g,
			initialFiles: y,
			isLoadingInitialFiles: b,
			steps: h,
			_brand: e
		};
	}, [
		n,
		f,
		p,
		r,
		o,
		v,
		_,
		c,
		l,
		u,
		d,
		g,
		y,
		b,
		h
	]);
}
//#endregion
export { a as useAsyncDefaultValues, o as useF0FormDefinition };
