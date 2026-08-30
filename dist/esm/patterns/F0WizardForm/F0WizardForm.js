import { useI18n as e } from "../../lib/providers/i18n/i18n-provider.js";
import { F0ActionBar as t } from "../../components/F0ActionBar/index.js";
import { getF0Config as n, unwrapToZodObject as r } from "../F0Form/f0Schema.js";
import { useF0Form as i } from "../F0Form/useF0Form.js";
import { F0FormSection as a } from "../F0Form/components/F0FormSection.js";
import { F0Form as o } from "../F0Form/F0Form.js";
import { F0Wizard as s } from "../../ui/F0Wizard/F0Wizard.js";
import { useCallback as c, useEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
import { z as g } from "zod";
//#region src/patterns/F0WizardForm/F0WizardForm.tsx
function _(e) {
	let t = r(e).shape, i = Object.entries(t);
	return i.length !== 0 && i.every(([, e]) => n(e)?.disabled === !0);
}
function v(e, t) {
	if (t) return Object.keys(t);
	let i = r(e).shape, a = /* @__PURE__ */ new Set();
	for (let e of Object.values(i)) {
		let t = n(e);
		t?.section && a.add(t.section);
	}
	return Array.from(a);
}
function y(e, t) {
	let r = e.shape, i = {};
	for (let [e, a] of Object.entries(r)) {
		let r = n(a);
		r?.section && t.includes(r.section) && (i[e] = a);
	}
	return g.object(i);
}
function b(e, t, n) {
	let i = t ?? {};
	if (n) return n({ data: i });
	let a = r(e).shape;
	return Object.entries(a).every(([e, t]) => {
		if (t.isOptional()) return !0;
		let n = i[e];
		return n != null && n !== "";
	});
}
var x = 3e3;
function ee() {
	let { forms: n } = e(), [r, i] = f("idle"), [a, o] = f(), s = d(null);
	l(() => () => {
		s.current && clearTimeout(s.current);
	}, []);
	let p = c((e) => {
		s.current &&= (clearTimeout(s.current), null), o(e), i("success"), s.current = setTimeout(() => {
			i("idle"), o(void 0), s.current = null;
		}, x);
	}, []), h = r === "success" ? a ?? n.actionBar.saved : void 0;
	return {
		showSuccess: p,
		ActionBar: u(() => /* @__PURE__ */ m(t, {
			isOpen: r === "success",
			variant: "light",
			status: r,
			label: h
		}), [r, h])
	};
}
function te(e, t, n, r, i, a, o) {
	return (n ?? e.map((e) => ({
		title: t?.[e]?.title ?? e,
		sectionIds: [e]
	}))).map((e, t) => {
		let n = r(e.sectionIds), s = o?.(t) ?? !1;
		return {
			title: e.title,
			nextLabel: e.nextLabel,
			previousLabel: e.previousLabel,
			isCompleted: n || s ? () => !0 : void 0,
			hasErrors: a ? () => a(t) : void 0,
			onNext: i(t)
		};
	});
}
function S(e, t, n) {
	if (n) return n[e]?.sectionIds ?? [];
	let r = t[e];
	return r ? [r] : [];
}
function C({ formDefinition: e, steps: t, isOpen: n, onClose: r, title: i, width: a, size: o, defaultStepIndex: l, nextLabel: g, previousLabel: v, onStepChanged: y, allowStepSkipping: x, autoCloseOnLastStepSubmit: C, linkAfterLastStepSubmit: T, autoSkipCompletedSteps: E = !1, renderCustomField: D }) {
	let { name: O, schema: k, sections: A, defaultValues: j, onSubmit: M, submitConfig: N, errorTriggerMode: P = "on-blur" } = e, F = N?.label, I = u(() => Object.keys(k), [k]), L = t ?? e.steps, R = u(() => {
		if (L) return L.some((e) => e.sectionIds.length > 1) ? (process.env.NODE_ENV !== "production" && console.error("[F0WizardForm] Per-section schema mode does not support grouping multiple sections into a single step. Each section requires its own independent form and submit. Steps with multiple sectionIds will be automatically split into separate steps."), L.flatMap((e) => e.sectionIds.map((t) => ({
			title: A?.[t]?.title ?? e.title,
			sectionIds: [t],
			nextLabel: e.nextLabel,
			previousLabel: e.previousLabel
		})))) : L;
	}, [L, A]), z = d({}), B = d(l ?? 0), V = u(() => Object.fromEntries(I.map((e) => [e, null])), [I]), [H, U] = f({}), W = d(H);
	W.current = H;
	let G = c((e) => e.every((e) => {
		let t = k[e];
		return t ? _(t) : !1;
	}), [k]), K = c((e) => async () => {
		let t = S(e, I, R);
		for (let e of t) {
			let t = V[e];
			t && await t.submit();
		}
	}, [
		I,
		R,
		V
	]), q = c((e) => S(e, I, R).some((e) => W.current[e] === !0), [I, R]), J = u(() => R ?? I.map((e) => ({
		title: A?.[e]?.title ?? e,
		sectionIds: [e]
	})), [
		R,
		I,
		A
	]), Y = c((e) => {
		if (!E) return !1;
		let t = J[e];
		return t ? t.sectionIds.every((e) => {
			let n = k[e];
			return n ? b(n, j?.[e] ?? z.current[e], t.isCompleted) : !1;
		}) : !1;
	}, [
		E,
		J,
		k,
		j
	]), ne = u(() => {
		if (l !== void 0) return l;
		if (!E) return;
		let e = J.findIndex((e, t) => !Y(t));
		return e === -1 ? J.length - 1 : e;
	}, [
		l,
		E,
		J,
		Y
	]), re = u(() => te(I, A, R, G, K, q, E ? Y : void 0), [
		I,
		A,
		R,
		G,
		K,
		q,
		H,
		E,
		Y
	]), X = d(null), { showSuccess: Z, ActionBar: Q } = ee(), ie = c((e) => async (t) => {
		z.current[e] = t;
		let n = await M({
			sectionId: e,
			data: t,
			fullData: { ...z.current }
		});
		return X.current = n, n.success && n.message && Z(n.message), n;
	}, [M, Z]), ae = c(() => {
		if (X.current?.success) {
			if (T) {
				let e = T({ fullData: { ...z.current } });
				window.location.href = e;
				return;
			}
			C && r?.();
		}
	}, [
		C,
		T,
		r
	]), $ = c(() => {
		let e = S(B.current, I, R);
		for (let t of e) {
			let e = V[t];
			e && (z.current[t] = e.getValues());
		}
	}, [
		I,
		R,
		V
	]), oe = c((e) => {
		$(), B.current = e, y?.(e);
	}, [$, y]);
	return /* @__PURE__ */ m(s, {
		steps: re,
		isOpen: n,
		onClose: r,
		title: i,
		size: o ?? a,
		defaultStepIndex: ne,
		nextLabel: g,
		previousLabel: v,
		submitLabel: F,
		onSubmit: ae,
		onStepChanged: oe,
		allowStepSkipping: x,
		children: ({ currentStep: t }) => {
			let n = S(t, I, R);
			return /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m("div", {
				className: "flex flex-col gap-6 pb-5",
				children: n.map((t) => {
					let n = k[t];
					if (!n) return null;
					let r = A?.[t], i = z.current[t], a = j?.[t];
					return /* @__PURE__ */ m(w, {
						sectionId: t,
						formName: O,
						schema: n,
						sectionConfig: r,
						defaultValues: i ?? a,
						onSubmit: ie(t),
						submitConfig: N,
						errorTriggerMode: P,
						sectionForms: V,
						onErrorStateChange: (e) => {
							U((n) => n[t] === e ? n : {
								...n,
								[t]: e
							});
						},
						renderCustomField: D,
						isLoading: e.isLoading
					}, t);
				})
			}), Q] });
		}
	});
}
function w({ sectionId: e, formName: t, schema: n, sectionConfig: r, defaultValues: o, onSubmit: s, submitConfig: c, errorTriggerMode: u, sectionForms: f, onErrorStateChange: p, renderCustomField: h, isLoading: g }) {
	let _ = i();
	l(() => (f[e] = _, () => {
		f[e] = null;
	}), [
		f,
		e,
		_
	]);
	let v = d(p);
	return v.current = p, l(() => {
		v.current(_.hasErrors);
	}, [_.hasErrors]), /* @__PURE__ */ m(a, {
		formName: t,
		sectionId: e,
		schema: n,
		sectionConfig: r,
		defaultValues: o,
		onSubmit: s,
		submitConfig: {
			...c,
			hideSubmitButton: !0
		},
		errorTriggerMode: u,
		formRef: _.formRef,
		renderCustomField: h,
		isLoading: g
	});
}
function T({ formDefinition: e, steps: t, isOpen: n, onClose: a, title: l, width: f, size: g, defaultStepIndex: x, nextLabel: C, previousLabel: w, onStepChanged: T, allowStepSkipping: E, autoCloseOnLastStepSubmit: D, linkAfterLastStepSubmit: O, autoSkipCompletedSteps: k = !1, renderCustomField: A }) {
	let { name: j, schema: M, sections: N, defaultValues: P, onSubmit: F, submitConfig: I, errorTriggerMode: L = "on-blur" } = e, R = I?.label, z = u(() => r(M), [M]), B = u(() => v(M, N), [M, N]), V = c((e) => _(y(z, e)), [z]), H = i(), U = d(P ? { ...P } : {}), W = d(x ?? 0), G = c((e) => async () => {
		await H.submit();
	}, [H]), K = c((e) => H.hasErrors, [H.hasErrors]), q = t ?? e.steps, J = u(() => q ?? B.map((e) => ({
		title: N?.[e]?.title ?? e,
		sectionIds: [e]
	})), [
		q,
		B,
		N
	]), Y = c((e) => {
		if (!k) return !1;
		let t = J[e];
		return t ? b(y(z, t.sectionIds), P, t.isCompleted) : !1;
	}, [
		k,
		J,
		z,
		P
	]), ne = u(() => {
		if (x !== void 0) return x;
		if (!k) return;
		let e = J.findIndex((e, t) => !Y(t));
		return e === -1 ? J.length - 1 : e;
	}, [
		x,
		k,
		J,
		Y
	]), re = u(() => te(B, N, q, V, G, K, k ? Y : void 0), [
		B,
		N,
		q,
		V,
		G,
		K,
		k,
		Y
	]), X = d(null), Z = d(null), { showSuccess: Q, ActionBar: ie } = ee(), ae = c(async (e) => {
		Object.assign(U.current, e);
		let t = { ...U.current };
		Z.current = t;
		let n = await F({ data: t });
		return X.current = n, n;
	}, [F]), $ = c(() => {
		let e = X.current;
		if (e?.success) {
			if (Q(e.message), O) {
				let e = O({ fullData: Z.current });
				window.location.href = e;
				return;
			}
			D && a?.();
		}
	}, [
		D,
		O,
		a,
		Q
	]), oe = c((e) => {
		let t = H.getValues();
		Object.assign(U.current, t), W.current = e, T?.(e);
	}, [H, T]);
	return /* @__PURE__ */ m(s, {
		steps: re,
		isOpen: n,
		onClose: a,
		title: l,
		size: g ?? f,
		defaultStepIndex: ne,
		nextLabel: C,
		previousLabel: w,
		submitLabel: R,
		onSubmit: $,
		onStepChanged: oe,
		allowStepSkipping: E,
		children: ({ currentStep: t }) => {
			let n = S(t, B, q), r = y(z, n), i = n.reduce((e, t) => (N?.[t] && (e[t] = N[t]), e), {});
			return /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m("div", {
				className: "pb-5",
				children: /* @__PURE__ */ m(o, {
					name: `${j}-step-${t}`,
					schema: r,
					sections: i,
					defaultValues: U.current,
					onSubmit: ae,
					submitConfig: {
						hideSubmitButton: !0,
						hideActionBar: !0
					},
					errorTriggerMode: L,
					formRef: H.formRef,
					renderCustomField: A,
					isLoading: e.isLoading
				}, t)
			}), ie] });
		}
	});
}
function E(e) {
	return e.formDefinition._brand === "per-section" ? /* @__PURE__ */ m(C, { ...e }) : /* @__PURE__ */ m(T, { ...e });
}
E.displayName = "F0WizardForm";
//#endregion
export { E as F0WizardForm };
