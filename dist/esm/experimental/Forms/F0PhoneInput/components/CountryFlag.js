import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/Globe.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import r from "../../../../flags/flagsMap.js";
import { F0AvatarFlag as i } from "../../../../components/avatars/F0AvatarFlag/index.js";
import { toCountryCode as a } from "../lib/phone.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/experimental/Forms/F0PhoneInput/components/CountryFlag.tsx
var s = ({ country: s }) => {
	let c = n(), l = a(s);
	return !l || !(l in r) ? /* @__PURE__ */ o(e, {
		icon: t,
		size: "md",
		color: "default",
		"aria-hidden": "true"
	}) : /* @__PURE__ */ o(i, {
		flag: l,
		size: "xs",
		"aria-label": c.countries[l] ?? l
	});
};
//#endregion
export { s as CountryFlag };
