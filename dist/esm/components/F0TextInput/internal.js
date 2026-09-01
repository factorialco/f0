import e from "../../icons/app/EyeInvisible.js";
import t from "../../icons/app/EyeVisible.js";
import n from "../../icons/app/LockLocked.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import { Input as i } from "../../ui/input.js";
import { useMemo as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/components/F0TextInput/internal.tsx
var c = {
	autoComplete: "off",
	"data-1p-ignore": !0,
	"data-lpignore": "true",
	"data-form-type": "other",
	"data-bwignore": !0
}, l = ({ type: l, onPressEnter: u, ...d }) => {
	let [f, p] = o(!1), m = l === "password" || l === "private", h = a(() => m ? f ? "text" : "password" : l, [
		f,
		m,
		l
	]), g = a(() => l === "password" ? n : d.icon, [l, d.icon]), _ = r(), v = a(() => l === "password" ? {
		label: [_.inputs.password.show, _.inputs.password.hide],
		icon: [e, t],
		selected: f,
		onChange: p
	} : l === "private" ? {
		label: [_.t("inputs.private.show", { label: d.label }), _.t("inputs.private.hide", { label: d.label })],
		icon: [e, t],
		selected: f,
		onChange: p
	} : d.buttonToggle, [
		f,
		l,
		d.buttonToggle,
		d.label
	]);
	return /* @__PURE__ */ s(i, {
		...d,
		...l === "private" ? c : {},
		type: h,
		onChange: (e) => d.onChange?.(l === "email" ? e.toLowerCase() : e),
		onKeyDown: (e) => {
			e.key === "Enter" && u?.();
		},
		icon: g,
		buttonToggle: v
	});
};
//#endregion
export { l as InputInternal };
