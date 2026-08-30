import { useCallback as e, useRef as t, useState as n } from "react";
//#region src/patterns/F0Form/useF0Form.ts
function r() {
	let [r, i] = n(!1), [a, o] = n(!1), s = t((e) => {
		i(e.isSubmitting), o(e.hasErrors);
	}), c = t(null), l = t({
		get current() {
			return c.current;
		},
		set current(e) {
			c.current = e, e && e._setStateCallback(s.current);
		}
	}), u = e(async () => {
		if (!c.current) {
			console.warn("useF0Form: formRef is not attached to an F0Form component");
			return;
		}
		return c.current.submit();
	}, []), d = e(() => {
		if (!c.current) {
			console.warn("useF0Form: formRef is not attached to an F0Form component");
			return;
		}
		c.current.reset();
	}, []), f = e(() => c.current ? c.current.isDirty() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), p = e(() => c.current ? c.current.getValues() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), m = e((e, t, n) => {
		if (!c.current) {
			console.warn("useF0Form: formRef is not attached to an F0Form component");
			return;
		}
		c.current.setValue(e, t, n);
	}, []), h = e((e, t) => {
		if (!c.current) {
			console.warn("useF0Form: formRef is not attached to an F0Form component");
			return;
		}
		c.current.setValues(e, t);
	}, []), g = e(async (e) => c.current ? c.current.trigger(e) : (console.warn("useF0Form: formRef is not attached to an F0Form component"), !1), []), _ = e(() => c.current ? c.current.getErrors() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), {}), []), v = e(() => c.current ? c.current.getFieldNames() : (console.warn("useF0Form: formRef is not attached to an F0Form component"), []), []);
	return {
		formRef: l.current,
		submit: u,
		reset: d,
		isDirty: f,
		getValues: p,
		setValue: m,
		setValues: h,
		trigger: g,
		getErrors: _,
		getFieldNames: v,
		isSubmitting: r,
		hasErrors: a
	};
}
//#endregion
export { r as useF0Form };
