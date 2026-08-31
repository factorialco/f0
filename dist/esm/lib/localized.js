//#region src/lib/localized.ts
function e(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "object" && !!e && "locale" in e && "value" in e);
}
function t(t, n) {
	if (t !== void 0) {
		if (!e(t)) return t;
		if (t.length !== 0) return ((n ? t.find((e) => e.locale === n) : void 0) ?? t[0]).value;
	}
}
function n(...t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of t) if (e(r)) for (let e of r) {
		let t = n.get(e.locale);
		t ? !t.label && e.label && (t.label = e.label) : n.set(e.locale, {
			locale: e.locale,
			label: e.label
		});
	}
	return Array.from(n.values());
}
function r(e, t) {
	if (e.label) return e.label;
	try {
		let n = t ?? e.locale, r = new Intl.DisplayNames([n], { type: "language" }).of(e.locale) ?? e.locale;
		return r.charAt(0).toLocaleUpperCase(n) + r.slice(1);
	} catch {
		return e.locale;
	}
}
function i(e, t) {
	if (e.length === 0) return;
	let n = e.map((e) => e.locale), r = (e) => e.split("-")[0], i = (e) => n.find((t) => t === e) ?? n.find((t) => r(t) === r(e));
	if (t) {
		let e = i(t);
		if (e) return e;
	}
	let a = typeof navigator < "u" ? navigator.language : void 0;
	if (a) {
		let e = i(a);
		if (e) return e;
	}
	return n[0];
}
//#endregion
export { n as collectLanguages, i as defaultLocale, e as isLocalizedList, r as languageLabel, t as resolveLocalized };
