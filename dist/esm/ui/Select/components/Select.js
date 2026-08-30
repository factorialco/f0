import { toArray as e } from "../../../lib/toArray.js";
import { SelectContext as t } from "../SelectContext.js";
import { Root as n } from "./radix-ui/select.js";
import { useEffect as r, useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/ui/Select/components/Select.tsx
var s = (s) => {
	let [c, l] = a(s.as === "list"), u = s.as === "list" ? !0 : s.open === void 0 ? c : s.open, d = (e) => {
		s.open === void 0 && l(e), s.onOpenChange?.(e);
	}, [f, p] = a(e(s.value));
	r(() => {
		p(e(s.value));
	}, [JSON.stringify(s.value)]);
	let m = i(() => ({
		value: s.value === void 0 ? f : e(s.value),
		open: u,
		as: s.as,
		multiple: s.multiple || !1
	}), [
		JSON.stringify(s.value),
		f,
		u,
		s.as,
		s.multiple
	]), h = {
		...s,
		open: u,
		onOpenChange: d,
		children: /* @__PURE__ */ o(t.Provider, {
			value: m,
			children: s.children
		})
	}, g = (t) => {
		p(e(t)), s.multiple ? s.onValueChange?.(e(t)) : s.onValueChange?.(t);
	}, _ = s.multiple ? {
		...h,
		multiple: !0,
		value: f,
		defaultValue: s.defaultValue,
		onValueChange: g
	} : {
		...h,
		multiple: !1,
		value: f[0],
		defaultValue: s.defaultValue,
		onValueChange: g
	};
	return /* @__PURE__ */ o("div", {
		className: "h-full [&>div]:!relative [&>div]:!h-full",
		children: /* @__PURE__ */ o(n, { ..._ })
	});
};
s.displayName = n.displayName;
//#endregion
export { s as Select };
