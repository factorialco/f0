//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/add-attribute.js
function e(e, t) {
	var n = t.attribute, r = t.value;
	return e.setAttribute(n, r), function() {
		return e.removeAttribute(n);
	};
}
//#endregion
export { e as addAttribute };
