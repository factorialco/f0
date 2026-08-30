import { createContext as e, useContext as t } from "react";
//#region src/patterns/F0Form/context.ts
var n = e(null);
function r() {
	let e = t(n);
	if (!e) throw Error("useF0FormContext must be used within a F0Form");
	return e;
}
function i() {
	return t(n);
}
function a(e, t, n) {
	let r = ["forms", e];
	return t && r.push(t), n && r.push(n), r.join(".");
}
//#endregion
export { n as F0FormContext, a as generateAnchorId, r as useF0FormContext, i as useOptionalF0FormContext };
