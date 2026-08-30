//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/changing-window/is-from-another-window.js
function e(e) {
	return "nodeName" in e;
}
function t(t) {
	return e(t) && t.ownerDocument !== document;
}
//#endregion
export { t as isFromAnotherWindow };
