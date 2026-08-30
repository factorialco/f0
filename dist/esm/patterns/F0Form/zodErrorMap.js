import { ZodIssueCode as e } from "zod";
//#region src/patterns/F0Form/zodErrorMap.ts
function t(t) {
	let { validation: n } = t.forms;
	return (t, r) => {
		switch (t.code) {
			case e.invalid_type: return t.received === "undefined" || t.received === "null" ? { message: n.required } : { message: n.invalidType };
			case e.invalid_string:
				if (t.validation === "email") return { message: n.string.email };
				if (t.validation === "url") return { message: n.string.url };
				break;
			case e.too_small:
				if (t.type === "string") return t.minimum === 1 ? { message: n.required } : { message: n.string.min.replace("{{min}}", String(t.minimum)) };
				if (t.type === "number") return t.minimum === 0 && !t.inclusive ? { message: n.number.positive } : { message: n.number.min.replace("{{min}}", String(t.minimum)) };
				if (t.type === "array") return { message: n.array.min.replace("{{min}}", String(t.minimum)) };
				if (t.type === "date") return { message: n.date.min.replace("{{min}}", String(t.minimum)) };
				break;
			case e.too_big:
				if (t.type === "string") return { message: n.string.max.replace("{{max}}", String(t.maximum)) };
				if (t.type === "number") return t.maximum === 0 && !t.inclusive ? { message: n.number.negative } : { message: n.number.max.replace("{{max}}", String(t.maximum)) };
				if (t.type === "array") return { message: n.array.max.replace("{{max}}", String(t.maximum)) };
				if (t.type === "date") return { message: n.date.max.replace("{{max}}", String(t.maximum)) };
				break;
			case e.invalid_date: return { message: n.date.invalid };
			case e.not_multiple_of:
				if (t.multipleOf === 1) return { message: n.number.integer };
				break;
			case e.invalid_literal:
				if (t.expected === !0) return { message: n.checkbox.mustBeChecked };
				break;
			case e.custom: if (t.params?.type === "phone") return { message: n.phone.invalid };
		}
		return { message: r.defaultError };
	};
}
//#endregion
export { t as createZodErrorMap };
