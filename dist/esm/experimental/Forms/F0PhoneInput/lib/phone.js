import { getCountries as e, getCountryCallingCode as t, parsePhoneNumberFromString as n } from "libphonenumber-js";
import r from "libphonenumber-js/min/metadata";
//#region src/experimental/Forms/F0PhoneInput/lib/phone.ts
var i = /^\+\d{1,4}$/, a = (e, t) => {
	let n = r.country_calling_codes[e];
	if (n) return t ? n.find((e) => t.includes(e)) : n[0];
}, o = (e) => e.replace(/\D/g, ""), s = (t) => {
	if (!t) return;
	let n = t.toUpperCase();
	return e().includes(n) ? n : void 0;
}, c = (e) => e ? e.toLowerCase() : void 0, l = (e) => `+${t(e)}`, u = (e) => {
	if (i.test(e.trim())) return a(o(e));
}, d = (e, t) => {
	if (!e.startsWith("+")) return;
	let n = o(e);
	for (let e = 1; e <= Math.min(3, n.length); e++) {
		let r = a(n.slice(0, e), t);
		if (r) return r;
	}
}, f = (e, r) => {
	if (!e) return;
	let a = e.number?.trim() ?? "", s = e.prefix?.trim();
	if (a.startsWith("+")) {
		let e = n(a);
		if (e) return e.number;
		let t = o(a);
		return t ? `+${t}` : void 0;
	}
	if (a) {
		if (s && i.test(s)) {
			let e = u(s), t = e ? n(a, e) : n(`${s}${o(a)}`);
			return t ? t.number : `${s}${o(a)}`;
		}
		if (r) {
			let e = n(a, r);
			if (e) return e.number;
			let i = o(a);
			return i ? `+${t(r)}${i}` : void 0;
		}
	}
}, p = (e, t) => {
	if (!e) return;
	let r = n(e);
	if (r) return {
		prefix: `+${r.countryCallingCode}`,
		number: r.nationalNumber
	};
	if (t) {
		let n = l(t);
		if (e.startsWith(n)) {
			let t = e.slice(n.length);
			return t ? {
				prefix: n,
				number: t
			} : void 0;
		}
	}
	return {
		prefix: void 0,
		number: e
	};
}, m = (e, t) => {
	let r = f(e, s(t));
	return r ? n(r)?.isValid() ?? !1 : !1;
}, h = (e, t) => {
	let r = f(e, s(t));
	return r ? n(r)?.isPossible() ?? !1 : !1;
}, g = (e, t) => {
	let r = e ? n(e) : void 0;
	return {
		country: c(r?.country ?? t),
		e164: e || void 0,
		isValid: r?.isValid() ?? !1,
		isPossible: r?.isPossible() ?? !1
	};
}, _ = (e) => {
	if (!e) return;
	let t = f(e), r = t ? n(t) : void 0;
	if (r?.country) return r.country;
	if (e.prefix) return u(e.prefix);
};
//#endregion
export { g as buildMeta, u as countryForDialCode, d as countryForPartialE164, _ as countryForValue, l as dialCodeFor, p as e164ToValue, h as isPossiblePhoneValue, m as isValidPhoneValue, c as toCountryCode, s as toPhoneCountry, f as valueToE164 };
