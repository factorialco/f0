//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/usage-ledger.js
var e = /* @__PURE__ */ new Map();
function t(t) {
	var n = t.typeKey, r = t.mount, i = e.get(n);
	if (i) return i.usageCount++, i;
	var a = {
		typeKey: n,
		unmount: r(),
		usageCount: 1
	};
	return e.set(n, a), a;
}
function n(n) {
	var r = t(n);
	return function() {
		r.usageCount--, !(r.usageCount > 0) && (r.unmount(), e.delete(n.typeKey));
	};
}
//#endregion
export { n as register };
