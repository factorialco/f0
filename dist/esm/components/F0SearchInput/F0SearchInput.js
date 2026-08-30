import e from "../../icons/app/Search.js";
import { Input as t } from "../../ui/input.js";
import { forwardRef as n, useCallback as r, useEffect as i, useImperativeHandle as a, useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/components/F0SearchInput/F0SearchInput.tsx
var c = n(({ value: n, threshold: c = 0, onChange: l, onBlur: u, onFocus: d, size: f = "sm", debounceTime: p = 0, clearable: m = !1, tabIndex: h = -1, role: g = "searchbox", onKeyDown: _, "aria-controls": v, "aria-expanded": y, "aria-activedescendant": b, "aria-autocomplete": x, ...S }, C) => {
	let w = o(null);
	a(C, () => w.current), i(() => {
		let e = w.current;
		if (!S.autoFocus || S.disabled || !e || document.activeElement === e) return;
		let t, n = () => {
			t !== void 0 && (clearTimeout(t), t = void 0), e.removeEventListener("focus", n);
		};
		return e.addEventListener("focus", n), t = setTimeout(() => {
			e.focus(), n();
		}, 50), () => {
			n();
		};
	}, [S.autoFocus, S.disabled]);
	let T = o(void 0), E = r((e) => {
		l && (e.length >= c || e.length === 0) && (T.current === void 0 && setTimeout(() => {
			if (T.current !== void 0) {
				let e = document.activeElement === w.current;
				l(T.current), e && w.current?.focus();
			}
			T.current = void 0;
		}, p), T.current = e);
	}, [
		l,
		c,
		p
	]);
	return /* @__PURE__ */ s(t, {
		ref: w,
		type: "search",
		tabIndex: h,
		icon: e,
		value: n,
		label: S.placeholder ?? "Search",
		hideLabel: !0,
		placeholder: S.placeholder,
		disabled: S.disabled,
		onChange: E,
		role: g,
		onKeyDown: _,
		"aria-controls": v,
		"aria-expanded": y,
		"aria-activedescendant": b,
		"aria-autocomplete": x,
		size: f,
		clearable: m,
		onBlur: u,
		onFocus: d,
		name: S.name
	}, "search-input");
});
c.displayName = "F0SearchInput";
//#endregion
export { c as F0SearchInput };
