import { createContext as e, useContext as t } from "react";
//#region src/patterns/F0Graph/contexts.ts
var n = e(null);
n.displayName = "F0GraphZoomContext";
function r() {
	return t(n);
}
var i = e(null);
i.displayName = "F0GraphExpandContext";
function a() {
	return t(i);
}
var o = e(null);
o.displayName = "F0GraphSelectionContext";
function s() {
	return t(o);
}
var c = e(null);
c.displayName = "F0GraphActionsContext";
function l() {
	return t(c);
}
var u = e(null);
u.displayName = "F0GraphRenderConfigContext";
function d() {
	return t(u);
}
var f = e(null);
f.displayName = "F0GraphStackHoverContext";
function p() {
	return t(f);
}
var m = e(null);
m.displayName = "F0GraphFocusContext";
function h() {
	return t(m);
}
//#endregion
export { c as F0GraphActionsContext, i as F0GraphExpandContext, m as F0GraphFocusContext, u as F0GraphRenderConfigContext, o as F0GraphSelectionContext, f as F0GraphStackHoverContext, n as F0GraphZoomContext, l as useF0GraphActionsInternal, a as useF0GraphExpandInternal, h as useF0GraphFocusInternal, d as useF0GraphRenderConfigInternal, s as useF0GraphSelectionInternal, p as useF0GraphStackHoverInternal, r as useF0GraphZoomInternal };
