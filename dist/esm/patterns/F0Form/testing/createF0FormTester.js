import { getF0Config as e, unwrapToZodObject as t } from "../f0Schema.js";
import { evaluateRenderIf as n } from "../fields/utils.js";
import { buildDynamicSchema as r } from "../conditionalResolver.js";
import { describeFormSchema as i } from "../describeFormSchema.js";
//#region src/patterns/F0Form/testing/createF0FormTester.ts
function a(e) {
	let t = {}, n;
	for (let r of e.issues) {
		if (r.path.length === 0) {
			n === void 0 && (n = r.message);
			continue;
		}
		let e = r.path.join(".");
		e in t || (t[e] = r.message);
	}
	return {
		errors: t,
		rootError: n
	};
}
function o(o) {
	let { schema: s, defaultValues: c, errorMap: l, onSubmit: u } = o, d = async (e) => {
		let t = {
			...c ?? {},
			...e ?? {}
		}, n = r(s, t), i = {};
		for (let [e, n] of Object.entries(t)) i[e] = n === null ? void 0 : n;
		let o = l ? { errorMap: l } : void 0, u = await n.safeParseAsync(i, o);
		if (u.success) return {
			valid: !0,
			errors: {}
		};
		let { errors: d, rootError: f } = a(u.error);
		return {
			valid: !1,
			errors: d,
			...f !== void 0 && { rootError: f }
		};
	};
	return {
		validate: d,
		validateField: async (e, t) => {
			let n = (await d(t)).errors[e];
			return {
				valid: n === void 0,
				errors: n === void 0 ? {} : { [e]: n }
			};
		},
		describeFields: () => i(s),
		getDefaultValues: () => c,
		getVisibleFields: (r) => {
			let i = {
				...c ?? {},
				...r ?? {}
			}, a = t(s), o = [];
			for (let [t, r] of Object.entries(a.shape)) {
				let a = e(r);
				if (!a?.renderIf) {
					o.push(t);
					continue;
				}
				n(a.renderIf, i) && o.push(t);
			}
			return o;
		},
		submit: async (e) => {
			if (!u) throw Error("createF0FormTester: cannot call submit() without an onSubmit handler. Pass onSubmit in the options, or use createF0FormDefinitionTester which reads it from the definition.");
			let t = await d(e);
			if (!t.valid) return {
				success: !1,
				errors: t.errors
			};
			let n = {
				...c ?? {},
				...e ?? {}
			};
			return u(n);
		}
	};
}
//#endregion
export { o as createF0FormTester };
