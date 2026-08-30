import { getF0Config as e, inferFieldType as t, unwrapZodSchema as n } from "./f0Schema.js";
import { createContext as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { jsx as u } from "react/jsx-runtime";
import { z as d } from "zod";
import { zodToJsonSchema as f } from "zod-to-json-schema";
//#region src/patterns/F0Form/F0AiFormRegistry.tsx
function p(e) {
	return "_brand" in e && (e._brand === "single" || e._brand === "per-section");
}
function m(e) {
	let t = e;
	for (; t;) {
		let e = t._def;
		if ("shape" in e && typeof e.shape == "function") return { shape: e.shape() };
		if ("schema" in e && e.schema instanceof d.ZodType) {
			t = e.schema;
			continue;
		}
		if ("innerType" in e && e.innerType instanceof d.ZodType) {
			t = e.innerType;
			continue;
		}
		break;
	}
	return {};
}
function h(e) {
	if (!p(e)) return e;
	let t = e._brand === "per-section" ? Object.fromEntries(Object.entries(e.schema).map(([e, t]) => [e, Object.keys(m(t).shape ?? {})])) : void 0, n = e._brand === "single" ? e.schema : (() => {
		let t = {};
		for (let [n, r] of Object.entries(e.schema)) {
			let e = m(r);
			if (e.shape) for (let [r, i] of Object.entries(e.shape)) r in t && console.warn(`[toAvailableFormDefinition] Duplicate field "${r}" found in section "${n}". The later section's field will overwrite the earlier one.`), t[r] = i;
		}
		return d.object(t);
	})(), r = e.onSubmit, i = r ? async (n) => {
		if (e._brand === "single") await r({ data: n });
		else {
			let i = e.schema, a = {};
			for (let [e, r] of Object.entries(t)) {
				let t = {};
				for (let e of r) e in n && (t[e] = n[e]);
				a[e] = t;
			}
			let o = Object.keys(i);
			for (let e of o) await r({
				sectionId: e,
				data: a[e],
				fullData: a
			});
		}
	} : void 0, a;
	if (e._brand === "per-section" && e.defaultValues) {
		a = {};
		for (let t of Object.values(e.defaultValues)) Object.assign(a, t);
	} else a = e.defaultValues;
	let o = a;
	if (e.defaultValuesFn) {
		if (e._brand === "per-section") {
			let t = e.defaultValuesFn;
			o = async (e) => {
				let n = await t(e), r = {};
				for (let e of Object.values(n)) Object.assign(r, e);
				return r;
			};
		} else o = e.defaultValuesFn;
	}
	return {
		name: e.name,
		schema: n,
		defaultValues: o,
		defaultValuesParamsSchema: e.defaultValuesParamsSchema,
		sections: e.sections,
		onSubmit: i,
		description: e.description,
		module: e.module,
		steps: e.steps,
		submitConfig: e.submitConfig,
		errorTriggerMode: e.errorTriggerMode
	};
}
function g(e) {
	return h(e);
}
function _(e, t = {}) {
	if (typeof e == "function") {
		let n = e(t);
		return n && typeof n.then == "function" ? {} : n;
	}
	return e ?? {};
}
function v(e, t = {}, r) {
	let i = { ...t }, a = { ...t }, o = /* @__PURE__ */ new Set();
	return {
		ref: { current: {
			submit: async () => {
				let t = e.safeParse(i);
				if (!t.success) throw Error(t.error.issues.map((e) => e.message).join(", "));
				await r?.(t.data);
			},
			reset: () => {
				i = { ...a }, o.clear();
			},
			isDirty: () => JSON.stringify(i) !== JSON.stringify(a),
			getValues: () => ({ ...i }),
			setValue: (e, t, n) => {
				i = {
					...i,
					[e]: t
				}, o.add(e);
			},
			setValues: (e, t) => {
				i = {
					...i,
					...e
				};
				for (let t of Object.keys(e)) o.add(t);
			},
			trigger: async (t) => {
				if (t) {
					let r = n(e).shape?.[t];
					return !r || r.safeParse(i[t]).success;
				}
				return e.safeParse(i).success;
			},
			getErrors: () => {
				let t = e.safeParse(i);
				if (t.success) return {};
				let n = {};
				for (let e of t.error.issues) {
					let t = e.path.join(".");
					t && !n[t] && (n[t] = e.message);
				}
				return n;
			},
			getFieldNames: () => {
				let t = n(e);
				return Object.keys(t.shape ?? {});
			},
			actionBar: { wiggle: () => {} },
			_setStateCallback: () => {}
		} },
		dirtyFields: o
	};
}
function y(r) {
	let i = n(r).shape;
	if (!i) return {};
	let a = {};
	for (let [n, r] of Object.entries(i)) {
		let i = e(r), o = r.description;
		(i?.label || o) && (a[n] = {
			label: i?.label ?? n,
			...i?.section && { section: i.section },
			...i?.placeholder && { placeholder: i.placeholder },
			...i?.helpText && { helpText: i.helpText },
			...o && { description: o },
			...i?.customFieldName && { customFieldName: i.customFieldName },
			...t(r, i ?? { label: n }) !== "text" && { fieldType: t(r, i ?? { label: n }) }
		});
	}
	return a;
}
function b(e) {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) t[n] = {
		title: r.title,
		...r.description && { description: r.description }
	};
	return t;
}
var x = r(null);
function S({ children: e, availableFormDefinitions: t }) {
	let n = s(() => t?.map(h), [t]), r = c(/* @__PURE__ */ new Map()), a = c(""), d = c(/* @__PURE__ */ new Map()), p = c(/* @__PURE__ */ new Set()), m = c(/* @__PURE__ */ new Map()), g = c(/* @__PURE__ */ new Map()), [S, C] = l([]), [w, T] = l([]), [E, D] = l(null), O = c(null), k = c({}), A = i(() => {
		queueMicrotask(() => {
			let e = Array.from(r.current.entries()), t = [], n = [], i = null;
			for (let [r, a] of e) {
				let e = a.ref.current;
				if (e && (a.virtual ? n.push({
					formName: r,
					...a.description ? { description: a.description } : {},
					...a.module ? { module: a.module } : {},
					cardTitle: "",
					cardDescription: "",
					formSchema: f(a.schema),
					fieldDescriptions: y(a.schema),
					sectionDescriptions: b(a.sections),
					formValues: e.getValues(),
					formErrors: e.getErrors(),
					isDirty: e.isDirty(),
					...a.defaultValuesParamsSchema ? { defaultValuesParamsSchema: f(a.defaultValuesParamsSchema) } : {},
					...a.defaultValuesParams ? { defaultValuesParams: a.defaultValuesParams } : {}
				}) : t.push({
					formName: r,
					...a.description ? { description: a.description } : {},
					...a.module ? { module: a.module } : {},
					cardTitle: "",
					cardDescription: "",
					formSchema: f(a.schema),
					fieldDescriptions: y(a.schema),
					sectionDescriptions: b(a.sections),
					formValues: e.getValues(),
					formErrors: e.getErrors(),
					isDirty: e.isDirty(),
					...a.defaultValuesParamsSchema ? { defaultValuesParamsSchema: f(a.defaultValuesParamsSchema) } : {},
					...a.defaultValuesParams ? { defaultValuesParams: a.defaultValuesParams } : {}
				}), O.current === r)) {
					let t = k.current;
					i = {
						formName: r,
						...a.description ? { description: a.description } : {},
						...a.module ? { module: a.module } : {},
						cardTitle: t.cardTitle ?? "",
						cardDescription: t.cardDescription ?? "",
						formSchema: f(a.schema),
						fieldDescriptions: y(a.schema),
						sectionDescriptions: b(a.sections),
						formValues: e.getValues(),
						formErrors: e.getErrors(),
						isDirty: e.isDirty(),
						...a.defaultValuesParamsSchema ? { defaultValuesParamsSchema: f(a.defaultValuesParamsSchema) } : {},
						...a.defaultValuesParams ? { defaultValuesParams: a.defaultValuesParams } : {}
					};
				}
			}
			let o = JSON.stringify({
				formsOnCurrentPage: t,
				availableForms: n,
				activeForm: i
			});
			o !== a.current && (a.current = o, C(t), T(n), D(i));
		});
	}, []), j = i((e, t, n, i, a, o, s, c) => {
		let l = r.current.get(e);
		r.current.set(e, {
			ref: t,
			schema: n,
			description: s,
			module: c,
			sections: i,
			defaultValuesParamsSchema: a ?? l?.defaultValuesParamsSchema,
			defaultValuesFn: o ?? l?.defaultValuesFn,
			defaultValuesParams: l?.defaultValuesParams,
			onSubmit: l?.onSubmit,
			steps: l?.steps,
			submitConfig: l?.submitConfig,
			errorTriggerMode: l?.errorTriggerMode
		}), A();
	}, [A]), M = i((e) => {
		let t = r.current.get(e);
		if (t?.virtual) return;
		let i = t?.ref.current?.getValues() ?? {};
		r.current.delete(e);
		let a = n?.find((t) => t.name === e);
		if (a) {
			let n = {
				...typeof a.defaultValues == "function" ? {} : _(a.defaultValues),
				...i
			}, { ref: o, dirtyFields: s } = v(a.schema, n, a.onSubmit), c = typeof a.defaultValues == "function" ? (() => {
				let e = a.defaultValues;
				return async (t) => {
					let n = e(t);
					return typeof n?.then == "function" ? await n : n;
				};
			})() : void 0;
			r.current.set(e, {
				ref: o,
				schema: a.schema,
				description: a.description,
				module: a.module,
				sections: a.sections,
				virtual: !0,
				defaultValuesParamsSchema: a.defaultValuesParamsSchema,
				defaultValuesFn: c,
				defaultValuesParams: t?.defaultValuesParams,
				dirtyFields: s,
				onSubmit: a.onSubmit,
				steps: a.steps,
				submitConfig: a.submitConfig,
				errorTriggerMode: a.errorTriggerMode
			});
		}
		A();
	}, [A, n]), N = i((e) => r.current.get(e), []), P = i(() => Array.from(r.current.keys()), []), F = i((e, t) => {
		let n = r.current.get(e);
		return n ? n.virtual ? (O.current = e, k.current = {
			cardTitle: t?.cardTitle ?? "",
			cardDescription: t?.cardDescription ?? ""
		}, A(), { success: !0 }) : {
			success: !1,
			error: `Form "${e}" is a rendered form on the current page. You can co-edit it directly without picking it as active.`
		} : {
			success: !1,
			error: `Form "${e}" not found. Available forms: ${Array.from(r.current.keys()).join(", ")}`
		};
	}, [A]), I = i(() => {
		O.current = null, k.current = {
			cardTitle: "",
			cardDescription: ""
		}, A();
	}, [A]), L = i((e, t) => {
		let n = r.current.get(e);
		n && (n.defaultValuesParams = t);
	}, []), R = i((e) => {
		let t = d.current.get(e) ?? 0;
		d.current.set(e, t + 1);
	}, []), z = i((e) => {
		d.current.delete(e), p.current.delete(e), m.current.delete(e), g.current.delete(e);
	}, []), B = i((e) => d.current.get(e) ?? 0, []), V = i((e) => !p.current.has(e), []), H = i((e) => {
		p.current.add(e);
	}, []), U = i((e, t) => {
		p.current.delete(e), m.current.set(e, t ?? null);
		let n = g.current.get(e);
		if (n?.length) {
			g.current.delete(e);
			for (let e of n) e();
		}
		A();
	}, [A]), W = i((e, t) => {
		let n = g.current.get(e) ?? [];
		n.push(t), g.current.set(e, n);
	}, []), G = i((e, t) => m.current.has(e) ? t === void 0 || m.current.get(e) === t : !1, []), K = c(/* @__PURE__ */ new Set());
	o(() => {
		let e = n ?? [], t = /* @__PURE__ */ new Set();
		for (let n of e) {
			t.add(n.name);
			let e = r.current.get(n.name);
			if (e && !e.virtual || e?.virtual) continue;
			let i = typeof n.defaultValues == "function" ? {} : _(n.defaultValues), { ref: a, dirtyFields: o } = v(n.schema, i, n.onSubmit), s = typeof n.defaultValues == "function" ? (() => {
				let e = n.defaultValues;
				return async (t) => {
					let n = e(t);
					return typeof n?.then == "function" ? await n : n;
				};
			})() : void 0;
			r.current.set(n.name, {
				ref: a,
				schema: n.schema,
				description: n.description,
				module: n.module,
				sections: n.sections,
				virtual: !0,
				defaultValuesParamsSchema: n.defaultValuesParamsSchema,
				defaultValuesFn: s,
				dirtyFields: o,
				onSubmit: n.onSubmit,
				steps: n.steps,
				submitConfig: n.submitConfig,
				errorTriggerMode: n.errorTriggerMode
			});
		}
		for (let e of K.current) t.has(e) || r.current.get(e)?.virtual && r.current.delete(e);
		return K.current = t, A(), () => {
			for (let e of t) r.current.get(e)?.virtual && r.current.delete(e);
			A();
		};
	}, [n, A]);
	let q = s(() => ({
		register: j,
		unregister: M,
		get: N,
		getFormNames: P,
		rebuildDescriptions: A,
		formsOnCurrentPage: S,
		availableForms: w,
		activeForm: E,
		setActiveForm: F,
		clearActiveForm: I,
		updateActiveFormDefaultValuesParams: L,
		incrementFillVersion: R,
		resetFillVersion: z,
		getFillVersion: B,
		isDefaultValuesResolved: V,
		markDefaultValuesResolving: H,
		markDefaultValuesResolved: U,
		queueFillAction: W,
		hasDefaultValuesEverResolved: G
	}), [
		j,
		M,
		N,
		P,
		A,
		S,
		w,
		E,
		F,
		I,
		L,
		R,
		z,
		B,
		V,
		H,
		U,
		W,
		G
	]);
	return /* @__PURE__ */ u(x.Provider, {
		value: q,
		children: e
	});
}
function C() {
	return a(x);
}
//#endregion
export { S as F0AiFormRegistryProvider, g as defineAvailableForm, C as useF0AiFormRegistry };
