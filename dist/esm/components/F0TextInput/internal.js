import e from "../../icons/app/EyeInvisible.js";
import t from "../../icons/app/EyeVisible.js";
import n from "../../icons/app/LockLocked.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { Input as i } from "../../ui/input.js";
import { forwardRef as a, useMemo as o, useState as s } from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/F0TextInput/internal.tsx
var l = {
	autoComplete: "off",
	"data-1p-ignore": !0,
	"data-lpignore": "true",
	"data-form-type": "other",
	"data-bwignore": !0
}, u = a(function({ type: a, onPressEnter: u, ...d }, f) {
	let [p, m] = s(!1), h = a === "password" || a === "private", g = o(() => h ? p ? "text" : "password" : a, [
		p,
		h,
		a
	]), _ = o(() => a === "password" ? n : d.icon, [a, d.icon]), v = r(), y = o(() => a === "password" ? {
		label: [v.inputs.password.show, v.inputs.password.hide],
		icon: [e, t],
		selected: p,
		onChange: m
	} : a === "private" ? {
		label: [v.t("inputs.private.show", { label: d.label }), v.t("inputs.private.hide", { label: d.label })],
		icon: [e, t],
		selected: p,
		onChange: m
	} : d.buttonToggle, [
		p,
		a,
		d.buttonToggle,
		d.label
	]);
	return /* @__PURE__ */ c(i, {
		...d,
		...a === "private" ? l : {},
		ref: f,
		type: g,
		onChange: (e) => d.onChange?.(a === "email" ? e.toLowerCase() : e),
		onKeyDown: (e) => {
			e.key === "Enter" && !e.nativeEvent.isComposing && u?.();
		},
		icon: _,
		buttonToggle: y
	});
});
u.displayName = "InputInternal";
//#endregion
export { u as InputInternal };
