//#region ../../node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var e = process.env.NODE_ENV === "production", t = "Invariant failed";
function n(n, r) {
	if (!n) {
		if (e) throw Error(t);
		var i = typeof r == "function" ? r() : r, a = i ? `${t}: ${i}` : t;
		throw Error(a);
	}
}
//#endregion
export { n as t };
