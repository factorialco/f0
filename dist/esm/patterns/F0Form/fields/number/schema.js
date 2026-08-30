import { isZodType as e, unwrapZodSchema as t } from "../../f0Schema.js";
//#region src/patterns/F0Form/fields/number/schema.ts
function n(n) {
	let r = t(n);
	if (!e(r, "ZodNumber")) return { isInteger: !1 };
	let i = r._def.checks || [], a, o, s = !1;
	for (let e of i) e.kind === "min" ? a = e.value : e.kind === "max" ? o = e.value : e.kind === "int" && (s = !0);
	return {
		min: a,
		max: o,
		isInteger: s
	};
}
//#endregion
export { n as extractNumberConstraints };
