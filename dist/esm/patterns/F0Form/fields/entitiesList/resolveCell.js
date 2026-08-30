import { getF0Config as e, inferFieldType as t, isZodType as n, unwrapZodSchema as r } from "../../f0Schema.js";
import { inferInputType as i } from "../text/schema.js";
//#region src/patterns/F0Form/fields/entitiesList/resolveCell.ts
var a = {
	EUR: "€",
	USD: "$",
	GBP: "£"
};
function o(e) {
	let t = e.options;
	if (!Array.isArray(t)) return null;
	let n = t.filter((e) => typeof e == "object" && !!e && typeof e.value == "string").map((e) => ({
		value: e.value,
		label: typeof e.label == "string" ? e.label : e.value
	}));
	return n.length > 0 ? n : null;
}
function s(e) {
	return n(e, "ZodEnum") ? e._def.values.map((e) => ({
		value: e,
		label: e
	})) : null;
}
function c(c) {
	let l = e(c), u = t(c, l ?? {}), d = l ?? {}, f = r(c);
	if (n(f, "ZodArray")) {
		let e = r(f._def.type), t = o(d) ?? s(e);
		return t ? {
			kind: "multiselect",
			options: t
		} : null;
	}
	switch (u) {
		case "text":
		case "textarea": {
			let e = typeof d.inputType == "string" ? d.inputType : i(c);
			return {
				kind: "text",
				inputType: e === "email" || e === "url" ? e : "text"
			};
		}
		case "number": return { kind: "number" };
		case "percentage": return {
			kind: "number",
			units: "%"
		};
		case "money": {
			let e = typeof d.currency == "string" ? d.currency : void 0;
			return {
				kind: "money",
				units: e ? a[e] ?? e : void 0
			};
		}
		case "date":
		case "datetime": return { kind: "date" };
		case "select": {
			let e = o(d) ?? s(f);
			return e ? {
				kind: "select",
				options: e
			} : null;
		}
		default: return null;
	}
}
//#endregion
export { c as resolveEntitiesListCell };
