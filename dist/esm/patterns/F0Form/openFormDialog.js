import { useI18n as e } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as t } from "../../components/dialog-alike/F0Dialog/index.js";
import { mountFormOverlay as n, unmountFormOverlay as r } from "../../lib/providers/form-overlays/imperative.js";
import { useF0Form as i } from "./useF0Form.js";
import { useMemo as a, useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { nanoid as c } from "nanoid";
//#region src/patterns/F0Form/openFormDialog.tsx
function l({ options: n, FormView: r, isOpen: c, onSubmitted: l, onCancel: u }) {
	let { actions: d } = e(), { formDefinition: f, title: p, description: m, size: h, module: g, modal: _ = !0, labels: v } = n, { formRef: y, submit: b, isSubmitting: x, hasErrors: S } = i(), C = o(void 0), w = a(() => ({
		...f,
		submitConfig: {
			...f.submitConfig,
			hideSubmitButton: !0
		},
		onSubmit: async (e) => {
			let t = await f.onSubmit(e);
			return t.success && (C.current = e.data), t;
		}
	}), [f]);
	return /* @__PURE__ */ s(t, {
		isOpen: c,
		onClose: u,
		title: p,
		description: m,
		size: h,
		module: g,
		modal: _,
		primaryAction: {
			label: v?.submit ?? d.save,
			onClick: async () => {
				C.current = void 0;
				try {
					await b();
				} catch {
					return;
				}
				C.current !== void 0 && l(C.current);
			},
			loading: x,
			disabled: S
		},
		secondaryAction: {
			label: v?.cancel ?? d.cancel,
			onClick: u
		},
		disableContentPadding: !0,
		children: /* @__PURE__ */ s(r, {
			formDefinition: w,
			formRef: y
		})
	});
}
function u(e, t) {
	return new Promise((i) => {
		let a = e.id ?? c(), o = !1, u = (e) => {
			o || (o = !0, i(e), r(a));
		};
		n({
			id: a,
			onDismiss: () => u({ submitted: !1 }),
			render: ({ isOpen: n }) => /* @__PURE__ */ s(l, {
				options: e,
				FormView: t,
				isOpen: n,
				onSubmitted: (e) => u({
					submitted: !0,
					data: e
				}),
				onCancel: () => u({ submitted: !1 })
			})
		});
	});
}
//#endregion
export { u as openFormDialog };
