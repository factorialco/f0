//#region src/patterns/OneDataCollection/internal/sharedPreset.ts
var e = "dc_shared_view", t = (e) => {
	let t = new TextEncoder().encode(e), n = "";
	for (let e of t) n += String.fromCharCode(e);
	return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}, n = (e) => {
	let t = e.replace(/-/g, "+").replace(/_/g, "/"), n = atob(t), r = Uint8Array.from(n, (e) => e.charCodeAt(0));
	return new TextDecoder().decode(r);
}, r = (e) => {
	let n = {
		label: e.label,
		description: e.description,
		filter: e.filter,
		sortings: e.sortings,
		grouping: e.grouping,
		visualization: e.visualization,
		settings: e.settings
	};
	return t(JSON.stringify(n));
}, i = (e) => {
	if (!e) return null;
	try {
		let t = JSON.parse(n(e));
		return typeof t == "object" && t && typeof t.label == "string" ? t : null;
	} catch {
		return null;
	}
}, a = (t) => {
	if (typeof window > "u") return null;
	let { origin: n, pathname: i } = window.location;
	return `${n}${i}?${e}=${r(t)}`;
};
//#endregion
export { e as SHARED_PRESET_PARAM, a as buildSharedPresetUrl, i as decodeSharedPreset, r as encodeSharedPreset };
