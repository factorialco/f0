import { isZodType as e, unwrapZodSchema as t } from "../../f0Schema.js";
//#region src/patterns/F0Form/fields/textarea/schema.ts
function n(n) {
	let r = t(n);
	if (!e(r, "ZodString")) return {};
	let i = r._def.checks || [], a;
	for (let e of i) e.kind === "max" && (a = e.value);
	return { maxLength: a };
}
//#endregion
export { n as extractTextareaConstraints };
