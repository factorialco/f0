import '../../_embedded/Dc_fQ2zb.css';/* empty css        */
import { F0GraphView as e } from "./components/F0GraphView/F0GraphView.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import { ReactFlowProvider as r } from "@xyflow/react";
//#region src/patterns/F0Graph/F0Graph.tsx
function i(t, i) {
	return /* @__PURE__ */ n(r, { children: /* @__PURE__ */ n(e, {
		...t,
		handleRef: i
	}) });
}
var a = t(i);
a.displayName = "F0Graph";
//#endregion
export { a as F0Graph };
