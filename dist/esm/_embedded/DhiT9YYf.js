import e from "./CjYirikk.js";
//#region ../../node_modules/.pnpm/@babel+runtime@7.28.6/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function t(t, n) {
	if (t) {
		if (typeof t == "string") return e(t, n);
		var r = {}.toString.call(t).slice(8, -1);
		return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, n) : void 0;
	}
}
//#endregion
export { t as default };
