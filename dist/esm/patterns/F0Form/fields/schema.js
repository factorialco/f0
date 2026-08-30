import { isZodType as e, unwrapZodSchema as t } from "../f0Schema.js";
//#region src/patterns/F0Form/fields/schema.ts
function n(t) {
	return e(t, "ZodOptional") || e(t, "ZodNullable") || e(t, "ZodDefault") && n(t._def.innerType);
}
var r = /* @__PURE__ */ new Set([
	"min",
	"email",
	"url",
	"uuid",
	"cuid",
	"cuid2",
	"ulid",
	"regex",
	"includes",
	"startsWith",
	"endsWith"
]);
function i(n) {
	let i = t(n);
	return e(i, "ZodString") ? (i._def.checks || []).some((e) => e.kind === "min" ? (e.value ?? 0) >= 1 : r.has(e.kind)) : !1;
}
var a = /* @__PURE__ */ new Set([
	"select",
	"date",
	"time",
	"datetime",
	"daterange",
	"file"
]);
function o(r, o) {
	if (n(r)) return !1;
	let s = t(r);
	if (e(s, "ZodString")) return o && a.has(o) ? !0 : i(r);
	if (e(s, "ZodObject")) {
		let r = s._def.shape();
		if (r && "value" in r) {
			if (n(r.value)) return !1;
			if (e(t(r.value), "ZodString")) return i(r.value);
		}
	}
	return !0;
}
//#endregion
export { o as isFieldRequired, n as isOptionalOrNullable };
