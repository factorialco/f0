import { getF0Config as e, inferFieldType as t, unwrapToZodObject as n } from "./f0Schema.js";
import { isFieldRequired as r } from "./fields/schema.js";
//#region src/patterns/F0Form/describeFormSchema.ts
function i(i) {
	let a = n(i).shape, o = [];
	for (let [n, i] of Object.entries(a)) {
		let a = i, s = e(a);
		if (!s) continue;
		let c = t(a, s), l = r(a, c), u = {
			name: n,
			type: c,
			label: s.label,
			required: l
		};
		if (s.placeholder && (u.placeholder = s.placeholder), s.helpText && (u.helpText = s.helpText), s.section && (u.section = s.section), s.customFieldName && (u.customFieldName = s.customFieldName), c === "select") {
			if ("source" in s && s.source) u.optionsSource = "dynamic";
			else if ("options" in s && s.options) {
				let e = [];
				for (let t of s.options) "label" in t && "value" in t && e.push({
					label: t.label,
					value: t.value
				});
				u.options = e;
			}
		}
		o.push(u);
	}
	return o;
}
//#endregion
export { i as describeFormSchema };
