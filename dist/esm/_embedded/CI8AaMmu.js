import e from "./DI_QKvND.js";
import { isHoneyPotElement as t } from "./DjdiB0gs.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/honey-pot-fix/get-element-from-point-without-honey-pot.js
function n(n) {
	var r = document.elementsFromPoint(n.x, n.y), i = e(r, 2), a = i[0], o = i[1];
	return a ? t(a) ? o ?? null : a : null;
}
//#endregion
export { n as getElementFromPointWithoutHoneypot };
