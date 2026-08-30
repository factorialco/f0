import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as n } from "../../../F0Dialog.js";
import { useF0Form as r } from "../../../patterns/F0Form/useF0Form.js";
import { F0Form as i } from "../../../F0Form.js";
import { WidgetPreviewPane as a, useWidgetDialogLayout as o } from "../WidgetPreview/index.js";
import { useEffect as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/sds/Home/WidgetUpdateDialog/index.tsx
var d = (e, t) => typeof e == "function" ? e(t) : e, f = 250;
function p({ isOpen: p, onClose: m, schema: h, params: g, renderPreview: _, info: v, onSave: y, previewWidth: b = 396, title: x, saveLabel: S = "Save" }) {
	let C = t(), { position: w, width: T, bodyClassName: E, asideClassName: D } = o(), { formRef: O, getValues: k, trigger: A } = r(), [j, M] = c(g ?? {});
	return s(() => {
		p && M(g ?? {});
	}, [p, g]), /* @__PURE__ */ l(n, {
		isOpen: p,
		onClose: m,
		title: x ?? C.widgets.editParamsTitle,
		position: w,
		width: T,
		primaryAction: {
			label: S,
			onClick: async () => {
				await A() && (y(k()), m());
			}
		},
		children: /* @__PURE__ */ u("div", {
			className: E,
			children: [/* @__PURE__ */ l("div", {
				className: e("overflow-y-auto", D),
				children: /* @__PURE__ */ l(i, {
					formRef: O,
					name: "widget-params",
					schema: h,
					defaultValues: g,
					submitConfig: {
						type: "autosubmit",
						delay: f,
						hideActionBar: !0
					},
					styling: { noPadding: !0 },
					onSubmit: (e) => (M(e), { success: !0 })
				})
			}), /* @__PURE__ */ l(a, {
				previewKey: "widget-params",
				info: d(v, j),
				previewWidth: b,
				children: _(j)
			})]
		})
	});
}
//#endregion
export { p as WidgetUpdateDialog };
