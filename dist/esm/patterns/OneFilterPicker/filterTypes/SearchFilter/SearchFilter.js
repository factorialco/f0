"use client";
import e from "../../../../icons/app/Equal.js";
import t from "../../../../icons/app/EqualApproximately.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { InputInternal as r } from "../../../../components/F0TextInput/internal.js";
import { useMemo as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/patterns/OneFilterPicker/filterTypes/SearchFilter/SearchFilter.tsx
function s({ schema: s, value: c, onChange: l }) {
	let u = "options" in s ? s.options : void 0, d = (u && "defaultStrict" in u && u.defaultStrict) ?? !1, f = {
		strictToggle: u ? u.strictToggle : !1,
		defaultStrict: u ? d : !1,
		...s.options
	}, p = n(), m = (e) => {
		f.strictToggle ? l({
			value: e,
			strict: g
		}) : l(e);
	}, h = (e) => {
		_(e), l({
			value: v ?? "",
			strict: e
		});
	}, [g, _] = a(f.defaultStrict), v = i(() => typeof c == "object" && "value" in c ? c.value : c ?? "", [c]);
	return /* @__PURE__ */ o("div", {
		className: "space-y-4 p-2",
		children: /* @__PURE__ */ o(r, {
			label: `Search ${s.label.toLowerCase()}...`,
			hideLabel: !0,
			placeholder: `Search ${s.label.toLowerCase()}...`,
			value: v,
			onChange: m,
			clearable: !0,
			buttonToggle: f.strictToggle ? {
				label: [p.filters.search.relaxed, p.filters.search.strict],
				icon: [t, e],
				selected: g,
				onChange: h
			} : void 0
		})
	});
}
//#endregion
export { s as SearchFilter };
