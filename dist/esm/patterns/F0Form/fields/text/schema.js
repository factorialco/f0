import { isZodType as e, unwrapZodSchema as t } from "../../f0Schema.js";
//#region src/patterns/F0Form/fields/text/schema.ts
function n(n) {
	let r = t(n);
	return e(r, "ZodString") ? (r._def.checks || []).some((e) => e.kind === "email") : !1;
}
function r(n) {
	let r = t(n);
	return e(r, "ZodString") ? (r._def.checks || []).some((e) => e.kind === "url") : !1;
}
function i(e) {
	return n(e) ? "email" : r(e) ? "url" : "text";
}
//#endregion
export { i as inferInputType };
