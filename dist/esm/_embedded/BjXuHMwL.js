import { presetStrokeColors as e } from "./CHwnzGs7.js";
import { Line as t } from "./ByZiS3Em.js";
import n from "react";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop-react-drop-indicator@3.2.11_@types+react@18.3.18_react@18.3.1/node_modules/@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/dist/esm/box.js
function r(r) {
	var i = r.appearance, a = i === void 0 ? "default" : i, o = r.edge, s = r.gap, c = r.indent, l = r.type;
	return /*#__PURE__*/ n.createElement(t, {
		edge: o,
		gap: s,
		strokeColor: e[a],
		type: l,
		indent: c
	});
}
//#endregion
export { r as DropIndicator, r as default };
