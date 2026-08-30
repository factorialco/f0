import { backgroundVariants as e } from "./background.js";
import { borderVariants as t } from "./border.js";
import { dimensionVariants as n } from "./dimensions.js";
import { displayVariants as r } from "./display.js";
import { dividerVariants as i } from "./divider.js";
import { flexVariants as a } from "./flex.js";
import { gridVariants as o } from "./grid.js";
import { insetVariants as s } from "./inset.js";
import { marginVariants as c } from "./margin.js";
import { overflowVariants as l } from "./overflow.js";
import { paddingVariants as u } from "./padding.js";
import { zIndexVariants as d } from "./zIndex.js";
//#region src/lib/F0Box/utils/responsive.ts
var f = {
	...r,
	...s,
	...u,
	...c,
	...a,
	...o,
	...n,
	...e,
	...t,
	...l,
	...i,
	...d
};
function p(e, t) {
	return t.split(" ").map((t) => `${e}:${t}`).join(" ");
}
function m(e, t) {
	let n = [];
	for (let [r, i] of Object.entries(t)) {
		if (i == null) continue;
		let t = f[r];
		if (!t) continue;
		let a = t[String(i)];
		a && n.push(p(e, a));
	}
	return n.join(" ");
}
//#endregion
export { m as resolveResponsiveClasses };
