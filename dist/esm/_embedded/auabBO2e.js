//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/once.js
function e(e) {
	var t = null;
	return function() {
		if (!t) {
			var n = [...arguments];
			t = { result: e.apply(this, n) };
		}
		return t.result;
	};
}
//#endregion
export { e as once };
