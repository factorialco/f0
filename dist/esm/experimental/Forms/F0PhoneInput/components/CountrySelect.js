import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ChevronDown.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import i from "../../../../flags/flagsMap.js";
import { F0Select as a } from "../../../../F0Select.js";
import { dialCodeFor as o, toCountryCode as s } from "../lib/phone.js";
import { CountryFlag as c } from "./CountryFlag.js";
import { useEffect as l, useMemo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/experimental/Forms/F0PhoneInput/components/CountrySelect.tsx
var m = ({ value: m, options: h, onChange: g, disabled: _, readOnly: v, size: y, selectCountryRef: b }) => {
	let x = r(), [S, C] = d(!1);
	l(() => {
		if (b) return b.current = g, () => {
			b.current = null;
		};
	}, [b, g]);
	let w = u(() => h.flatMap((e) => {
		if (e.divider) return [{ type: "separator" }];
		if (!e.value) return [];
		let t = s(e.value);
		return [{
			value: e.value,
			label: e.label,
			metadata: {
				type: "dialCode",
				dialCode: o(e.value)
			},
			avatar: t && t in i ? {
				type: "flag",
				flag: t
			} : void 0
		}];
	}), [h]), T = s(m), E = m ? x.t("phoneInput.countryWithDialCode", {
		country: (T && x.countries[T]) ?? m,
		dialCode: o(m)
	}) : x.phoneInput.country;
	return /* @__PURE__ */ f("div", {
		className: "h-full shrink-0",
		children: /* @__PURE__ */ f(a, {
			label: E,
			hideLabel: !0,
			size: y,
			options: w,
			value: m,
			onChange: (e) => g(e),
			onOpenChange: C,
			disabled: _ || v,
			showSearchBox: !0,
			searchBoxPlaceholder: x.phoneInput.searchCountry,
			searchEmptyMessage: x.phoneInput.noResults,
			searchFn: (e, t) => {
				if (!t) return !0;
				if (!("value" in e) || !e.value) return !1;
				let n = t.trim().toLowerCase(), r = e.metadata?.type === "dialCode" ? e.metadata.dialCode : "";
				return e.label.toLowerCase().includes(n) || r.toLowerCase().includes(n.replace(/\s/g, ""));
			},
			children: /* @__PURE__ */ p("span", {
				className: e("flex h-full items-center gap-1 pr-1", y === "md" ? "pl-3" : "pl-2", !_ && !v && "cursor-pointer"),
				"data-testid": "phone-input-country-trigger",
				children: [
					/* @__PURE__ */ f(c, { country: m }),
					m && /* @__PURE__ */ f("span", {
						className: "whitespace-nowrap text-f1-foreground",
						children: o(m)
					}),
					/* @__PURE__ */ f("span", {
						className: e("flex origin-center items-center transition-transform duration-200", S && "rotate-180"),
						"aria-hidden": "true",
						children: /* @__PURE__ */ f(t, {
							icon: n,
							size: "sm",
							color: "default"
						})
					})
				]
			})
		})
	});
};
//#endregion
export { m as CountrySelect };
