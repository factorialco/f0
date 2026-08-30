import { Component as e } from "../../../lib/component/component.js";
import { AutoGrid as t } from "./AutoGrid/index.js";
import { Split as n } from "./Split/index.js";
import { Stack as r } from "./Stack/index.js";
//#region src/experimental/Utilities/Layout/exports.tsx
var i = e({
	name: "Stack",
	type: "layout"
}, r), a = e({
	name: "Split",
	type: "layout"
}, n), o = e({
	name: "AutoGrid",
	type: "layout"
}, t);
//#endregion
export { o as AutoGrid, a as Split, i as Stack };
