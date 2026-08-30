import { metadataRenderer as e } from "../../ui/value-display/renderers.js";
//#region src/patterns/OneDataCollection/property-render.ts
var t = {
	default: "-",
	list: void 0
}, n = (n, r, i, a, o) => {
	let s = r.render(n), c = i in t ? t[i] : t.default;
	return e(s, {
		visualization: i,
		i18n: a,
		tableAlign: o?.tableAlign
	}, c);
};
//#endregion
export { n as renderProperty };
