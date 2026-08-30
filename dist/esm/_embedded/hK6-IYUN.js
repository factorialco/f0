//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/util/detect-broken-drag.js
function e(e) {
	var t = e.onDragEnd;
	return [{
		type: "pointermove",
		listener: function() {
			var e = 0;
			return function() {
				if (e < 20) {
					e++;
					return;
				}
				t();
			};
		}()
	}, {
		type: "pointerdown",
		listener: t
	}];
}
//#endregion
export { e as getBindingsForBrokenDrags };
