import { useI18n as e } from "../../lib/providers/i18n/i18n-provider.js";
import { useF0Form as t } from "./useF0Form.js";
import { F0Dialog as n } from "../../components/dialog-alike/F0Dialog/index.js";
import { mountFormOverlay as r, unmountFormOverlay as i } from "../../lib/providers/form-overlays/imperative.js";
import { F0Form as a } from "./F0Form.js";
import { useMemo as o, useRef as s } from "react";
import { jsx as c } from "react/jsx-runtime";
import { nanoid as l } from "nanoid";
//#region src/patterns/F0Form/openFormDialog.tsx
var u = a;
function d({ options: r, isOpen: i, onSubmitted: a, onCancel: l }) {
	let { actions: d } = e(), { formDefinition: f, title: p, description: m, size: h, module: g, modal: _ = !0, labels: v } = r, { formRef: y, submit: b, isSubmitting: x, hasErrors: S } = t(), C = s(void 0), w = o(() => ({
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
	return /* @__PURE__ */ c(n, {
		isOpen: i,
		onClose: l,
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
				C.current !== void 0 && a(C.current);
			},
			loading: x,
			disabled: S
		},
		secondaryAction: {
			label: v?.cancel ?? d.cancel,
			onClick: l
		},
		disableContentPadding: !0,
		children: /* @__PURE__ */ c(u, {
			formDefinition: w,
			formRef: y
		})
	});
}
function f(e) {
	return new Promise((t) => {
		let n = e.id ?? l(), a = !1, o = (e) => {
			a || (a = !0, t(e), i(n));
		};
		r({
			id: n,
			onDismiss: () => o({ submitted: !1 }),
			render: ({ isOpen: t }) => /* @__PURE__ */ c(d, {
				options: e,
				isOpen: t,
				onSubmitted: (e) => o({
					submitted: !0,
					data: e
				}),
				onCancel: () => o({ submitted: !1 })
			})
		});
	});
}
//#endregion
export { f as openFormDialog };
