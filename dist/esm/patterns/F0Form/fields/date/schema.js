import { isZodType as e, unwrapZodSchema as t } from "../../f0Schema.js";
//#region src/patterns/F0Form/fields/date/schema.ts
function n(n) {
	let r = t(n);
	if (!e(r, "ZodDate")) return {};
	let i = r._def.checks || [], a, o;
	for (let e of i) e.kind === "min" ? a = new Date(e.value) : e.kind === "max" && (o = new Date(e.value));
	return {
		minDate: a,
		maxDate: o
	};
}
//#endregion
export { n as extractDateConstraints };
