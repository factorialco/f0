import { F0WizardForm as e } from "./F0WizardForm.js";
import { mountFormOverlay as t, unmountFormOverlay as n } from "../../lib/providers/form-overlays/imperative.js";
import { useMemo as r, useRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
import { nanoid as o } from "nanoid";
//#region src/patterns/F0WizardForm/openFormWizard.tsx
var s = e;
function c(e, t) {
	if (e._brand === "per-section") {
		let n = e;
		return {
			...n,
			onSubmit: async (e) => {
				let r = await n.onSubmit(e);
				return r.success && t(e.fullData), r;
			}
		};
	}
	let n = e;
	return {
		...n,
		onSubmit: async (e) => {
			let r = await n.onSubmit(e);
			return r.success && t(e.data), r;
		}
	};
}
function l({ options: e, isOpen: t, onResolve: n }) {
	let { formDefinition: o, onStepChanged: l, ...u } = e, d = i(!1), f = i(void 0), p = r(() => c(o, (e) => {
		d.current = !0, f.current = e;
	}), [o]), m = (e) => {
		d.current = !1, l?.(e);
	}, h = () => {
		d.current && f.current !== void 0 ? n({
			completed: !0,
			data: f.current
		}) : n({ completed: !1 });
	}, g = {
		...u,
		formDefinition: p,
		isOpen: t,
		onClose: h,
		onStepChanged: m,
		autoCloseOnLastStepSubmit: !0
	};
	return /* @__PURE__ */ a(s, { ...g });
}
function u(e) {
	return new Promise((r) => {
		let i = e.id ?? o(), s = !1, c = (e) => {
			s || (s = !0, r(e), n(i));
		};
		t({
			id: i,
			onDismiss: () => c({ completed: !1 }),
			render: ({ isOpen: t }) => /* @__PURE__ */ a(l, {
				options: e,
				isOpen: t,
				onResolve: c
			})
		});
	});
}
//#endregion
export { u as openFormWizard };
