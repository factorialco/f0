//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/public-utils/combine.js
function e() {
	var e = [...arguments];
	return function() {
		e.forEach(function(e) {
			return e();
		});
	};
}
//#endregion
export { e as combine };
