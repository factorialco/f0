import { isPossiblePhoneValue as e, isValidPhoneValue as t } from "../../experimental/Forms/F0PhoneInput/lib/phone.js";
import { z as n } from "zod";
//#region src/patterns/F0Form/f0Schema.ts
function r(e, t) {
	return e._def?.typeName === t;
}
function i(e) {
	return r(e, "ZodEffects") ? e._def.schema : e;
}
var a = /* @__PURE__ */ new WeakMap();
function o(e, t) {
	a.set(e, t);
	let n = e;
	return n._f0Config = t, n._innerSchema = e, n;
}
function s(e) {
	let t = e;
	return t._f0Config ? t._f0Config : a.get(e);
}
function c(e) {
	return s(e) !== void 0;
}
function l(e) {
	let t = e;
	for (; r(t, "ZodOptional") || r(t, "ZodNullable") || r(t, "ZodDefault");) t = t._def.innerType;
	return t;
}
function u(e, t) {
	if ("fieldType" in t && t.fieldType) return t.fieldType;
	if ("options" in t && t.options || "source" in t && t.source) return "select";
	let n = l(e);
	return r(n, "ZodString") ? "rows" in t && t.rows ? "textarea" : "text" : r(n, "ZodNumber") ? "number" : r(n, "ZodBoolean") ? "switch" : r(n, "ZodDate") ? "date" : r(n, "ZodEnum") || r(n, "ZodArray") && ("options" in t && t.options || "source" in t && t.source) ? "select" : r(n, "ZodObject") && "render" in t && t.render ? "custom" : "text";
}
(function(r) {
	function i({ optional: e, minLength: t, maxLength: r, ...i }) {
		let a = n.string(), s = !e && t === void 0 ? 1 : t;
		s !== void 0 && (a = a.min(s)), r !== void 0 && (a = a.max(r));
		let c = e ? a.optional() : a;
		return o(c, i);
	}
	r.text = i;
	function a({ optional: e, ...t }) {
		let r = e ? n.string().email().optional() : n.string().email();
		return o(r, t);
	}
	r.email = a;
	function s({ optional: e, ...t }) {
		let r = e ? n.string().optional() : n.string().min(1);
		return o(r, {
			...t,
			fieldType: "textarea"
		});
	}
	r.textarea = s;
	function c({ optional: e, min: t, max: r, isInt: i, ...a }) {
		let s = n.number();
		i && (s = s.int()), t !== void 0 && (s = s.min(t)), r !== void 0 && (s = s.max(r));
		let c = e ? s.optional() : s;
		return o(c, a);
	}
	r.number = c;
	function l({ optional: e, ...t }) {
		let r = e ? n.boolean() : n.literal(!0);
		return o(r, {
			...t,
			fieldType: "switch"
		});
	}
	r.boolean = l;
	function u({ optional: e, ...t }) {
		let r = e ? n.boolean() : n.literal(!0);
		return o(r, {
			...t,
			fieldType: "checkbox"
		});
	}
	r.checkbox = u;
	function d({ optional: e, ...t }) {
		let r = e ? n.date().optional() : n.date();
		return o(r, t);
	}
	r.date = d;
	function f({ optional: e, ...t }) {
		let r = e ? n.string().url().optional() : n.string().url();
		return o(r, t);
	}
	r.url = f;
	function p({ optional: e, ...t }) {
		let r = e ? n.number().optional() : n.number();
		return o(r, {
			...t,
			fieldType: "money"
		});
	}
	r.money = p;
	function m({ optional: e, min: t, max: r, ...i }) {
		let a = n.number();
		t !== void 0 && (a = a.min(t)), r !== void 0 && (a = a.max(r));
		let s = e ? a.optional() : a;
		return o(s, {
			...i,
			fieldType: "percentage"
		});
	}
	r.percentage = m;
	function h(e) {
		if (e.options.length === 0) throw Error("f0FormField.cardSelect requires at least one option to build a Zod enum");
		let { optional: t, ...r } = e, i = r.options.map((e) => e.value), a = t ? n.enum(i).optional() : n.enum(i);
		return o(a, {
			...r,
			fieldType: "cardSelect"
		});
	}
	r.cardSelect = h;
	function g({ optional: e, ...t }) {
		let r = e ? n.string().optional() : n.string().min(1);
		return o(r, {
			...t,
			fieldType: "file",
			multiple: !1
		});
	}
	r.file = g;
	function _({ optional: e, ...t }) {
		let r = e ? n.array(n.string()).optional() : n.array(n.string()).min(1);
		return o(r, {
			...t,
			fieldType: "file",
			multiple: !0
		});
	}
	r.multiFile = _;
	function v({ optional: e, ...t }) {
		let r = e ? n.date().optional() : n.date();
		return o(r, {
			...t,
			fieldType: "time"
		});
	}
	r.time = v;
	function y({ optional: e, ...t }) {
		let r = e ? n.date().optional() : n.date();
		return o(r, {
			...t,
			fieldType: "datetime"
		});
	}
	r.datetime = y;
	function b({ optional: e, ...t }) {
		let r = e ? n.number().optional() : n.number();
		return o(r, {
			...t,
			fieldType: "duration"
		});
	}
	r.duration = b;
	function x({ optional: e, ...t }) {
		let r = n.object({
			from: n.date(),
			to: n.date()
		}), i = e ? r.optional() : r;
		return o(i, {
			...t,
			fieldType: "daterange"
		});
	}
	r.dateRange = x;
	function S({ optional: e, ...t }) {
		let r = n.object({
			value: n.object({
				from: n.date(),
				to: n.date()
			}),
			granularity: n.enum([
				"day",
				"week",
				"month",
				"quarter",
				"halfyear",
				"year",
				"range"
			])
		}), i = e ? r.nullish() : r;
		return o(i, {
			...t,
			fieldType: "period"
		});
	}
	r.datePeriod = S;
	function C({ optional: r, validate: i = "valid", invalidMessage: a, ...s }) {
		let c = n.object({
			prefix: n.string().optional(),
			number: n.string()
		}).superRefine((o, c) => {
			if (i === !1 || r && !o.number?.trim()) return;
			let l = {
				prefix: o.prefix,
				number: o.number
			};
			(i === "possible" ? e(l, s.defaultCountry) : t(l, s.defaultCountry)) || c.addIssue({
				code: n.ZodIssueCode.custom,
				params: { type: "phone" },
				...a ? { message: a } : {}
			});
		}), l = r ? c.optional() : c;
		return o(l, {
			...s,
			fieldType: "phone"
		});
	}
	r.phone = C;
	function w({ optional: e, ...t }) {
		let r = n.object({
			value: n.string(),
			mentionIds: n.array(n.string()).optional()
		}), i = e ? r.optional() : r;
		return o(i, {
			...t,
			fieldType: "richtext"
		});
	}
	r.richText = w;
	function T(e) {
		if (typeof e != "object" || !e) throw TypeError("f0FormField.select requires a config object");
		let t = e, { optional: r, ...i } = t, a = Array.isArray(t.options) ? t.options : void 0;
		if (a && a.length > 0) {
			let e = a.filter((e) => typeof e == "object" && !!e && "value" in e && typeof e.value == "string").map((e) => e.value);
			if (e.length > 0) {
				let t = r ? n.enum(e).optional() : n.enum(e);
				return o(t, i);
			}
		}
		let s = r ? n.string().optional() : n.string();
		return o(s, i);
	}
	r.select = T;
	function E(e) {
		if (typeof e != "object" || !e) throw TypeError("f0FormField.multiSelect requires a config object");
		let t = e, { optional: r, ...i } = t, a = Array.isArray(t.options) ? t.options : void 0;
		if (a && a.length > 0) {
			let e = a.filter((e) => typeof e == "object" && !!e && "value" in e && typeof e.value == "string").map((e) => e.value);
			if (e.length > 0) {
				let t = n.array(n.enum(e)).min(1), a = r ? t.optional() : t;
				return o(a, {
					...i,
					multiple: !0
				});
			}
		}
		let s = n.array(n.string()).min(1), c = r ? s.optional() : s;
		return o(c, {
			...i,
			multiple: !0
		});
	}
	r.multiSelect = E;
	function D(e) {
		let { optional: t, schema: r, createFormDefinition: i, updateFormDefinition: a, ...s } = e, c = r ?? a?.schema, l = s.config, u = n.array(c), d = l?.minItems ?? (t ? void 0 : 1);
		d !== void 0 && (u = u.min(d)), l?.maxItems !== void 0 && (u = u.max(l.maxItems));
		let f = t ? u.optional() : u;
		return o(f, {
			...s,
			schema: c,
			createFormDefinition: i,
			updateFormDefinition: a,
			fieldType: "entitiesList"
		});
	}
	r.entitiesList = D;
})(o ||= {});
//#endregion
export { o as f0FormField, s as getF0Config, c as hasF0Config, u as inferFieldType, r as isZodType, i as unwrapToZodObject, l as unwrapZodSchema };
