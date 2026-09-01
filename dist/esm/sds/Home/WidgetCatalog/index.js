import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/ArrowLeft.js";
import r from "../../../icons/app/Star.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { modules as ee } from "../../../components/avatars/F0AvatarModule/modules.js";
import { F0AvatarIcon as a } from "../../../components/avatars/F0AvatarIcon/index.js";
import { F0Dialog as o } from "../../../F0Dialog.js";
import { F0SearchInput as s } from "../../../components/F0SearchInput/F0SearchInput.js";
import { useF0Form as te } from "../../../patterns/F0Form/useF0Form.js";
import { F0Form as c } from "../../../F0Form.js";
import { resolveWidgetHeader as l, widgetChrome as u, widgetParamsAreComplete as ne } from "../slotRenderers.js";
import { SlotWidget as d } from "../SlotWidget/index.js";
import { WidgetPreviewPane as re, useWidgetDialogLayout as ie } from "../WidgetPreview/index.js";
import { Fragment as ae, isValidElement as f, useEffect as p, useMemo as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/sds/Home/WidgetCatalog/index.tsx
var y = {
	main: 672,
	right: 396
}, b = 250, x = (e) => typeof e == "object" && !!e && !f(e) && Array.isArray(e.slots), oe = ({ preview: e, params: t, slotRenderers: n }) => x(e) ? /* @__PURE__ */ _(d, {
	...u(e),
	header: e.header,
	params: t ?? e.params,
	fullHeight: e.fullHeight,
	slots: e.slots,
	loading: e.loading,
	slotRenderers: n
}) : /* @__PURE__ */ _(g, { children: e }), se = (e, t, n) => e.info ?? (x(t) ? l(t.header, n ?? t.params)?.info : void 0), S = (e) => e.paramsSchema ?? (x(e.preview) ? e.preview.paramsSchema : void 0), C = (e) => e.params ?? (x(e.preview) ? e.preview.params : void 0) ?? {}, w = ({ label: e, icon: n }) => /* @__PURE__ */ v("div", {
	className: "flex items-center gap-1.5 px-2 pb-1 pt-5 first:pt-1",
	children: [n ? /* @__PURE__ */ _(t, {
		icon: n,
		size: "sm",
		color: "secondary"
	}) : null, /* @__PURE__ */ _("h6", {
		className: "m-0 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary",
		children: e
	})]
});
function T({ isOpen: t, onClose: l, widgets: u, onAdd: d, groups: f, area: x, previewWidth: T, slotRenderers: E, rebuildPreview: D, title: ce = "Add widget" }) {
	let O = i(), { position: le, width: k, bodyClassName: A, asideClassName: j } = ie(), [M, N] = h(""), [P, F] = h(null), [I, L] = h("pick"), [R, z] = h(!1), B = (e) => {
		z(!0), L(e);
	}, [V, H] = h(null), { formRef: U, getValues: W, trigger: ue } = te(), G = M.trim().toLowerCase(), de = T ?? (x ? y[x] : y.right), K = m(() => {
		let e = x ? u.filter((e) => !e.areas || e.areas.includes(x)) : u, t = G ? e.filter((e) => e.title.toLowerCase().includes(G)) : e, n = t.filter((e) => e.recommended), i = t.filter((e) => !e.recommended), a = new Set((f ?? []).map((e) => e.id)), o = i.filter((e) => !e.group || !a.has(e.group));
		return [
			...n.length ? [{
				id: "recommended",
				label: O.widgets.recommended,
				icon: r,
				items: n
			}] : [],
			...(f ?? []).map((e) => ({
				...e,
				icon: e.module ? ee[e.module] : void 0,
				items: i.filter((t) => t.group === e.id)
			})).filter((e) => e.items.length > 0),
			...o.length ? [{
				id: "ungrouped",
				items: o
			}] : []
		];
	}, [
		u,
		f,
		G,
		x,
		O
	]), q = K.flatMap((e) => e.items), J = q.find((e) => e.id === P) ?? q[0] ?? null, Y = J ? S(J) : void 0, X = Y !== void 0 && !(J?.addWithDefaults && ne(Y, C(J))), Z = I === "configure" && X, Q = J && V?.id === J.id ? V.params : J ? C(J) : {}, $ = Z && J && D ? D(J, Q) : J?.preview;
	return p(() => {
		t && (L("pick"), z(!1), H(null));
	}, [t]), p(() => {
		I === "configure" && !X && L("pick");
	}, [I, X]), /* @__PURE__ */ _(o, {
		isOpen: t,
		onClose: l,
		title: Z && J ? O.widgets.configureWidget.replace("{{title}}", J.title) : ce,
		position: le,
		width: k,
		primaryAction: Z && J ? {
			label: "Add widget",
			onClick: async () => {
				await ue() && d(J.id, W());
			}
		} : {
			label: X ? O.wizard.next : "Add widget",
			disabled: !J,
			onClick: () => {
				J && (X ? B("configure") : Y ? d(J.id, Q) : d(J.id));
			}
		},
		secondaryAction: Z && J ? {
			label: O.actions.back,
			icon: n,
			iconPosition: "left",
			onClick: () => {
				H({
					id: J.id,
					params: W()
				}), B("pick");
			}
		} : void 0,
		children: /* @__PURE__ */ v("div", {
			className: A,
			children: [/* @__PURE__ */ _("div", {
				className: e("flex min-h-0 flex-col gap-2", j, R && e("duration-300 ease-out animate-in fade-in motion-reduce:animate-none", Z ? "slide-in-from-right-4" : "slide-in-from-left-4")),
				children: Z && J && Y ? /* @__PURE__ */ _("div", {
					className: "min-h-0 flex-1 overflow-y-auto",
					children: /* @__PURE__ */ _(c, {
						formRef: U,
						name: "widget-params",
						schema: Y,
						defaultValues: Q,
						submitConfig: {
							type: "autosubmit",
							delay: b,
							hideActionBar: !0
						},
						styling: { noPadding: !0 },
						onSubmit: (e) => (H({
							id: J.id,
							params: e
						}), { success: !0 })
					}, J.id)
				}) : /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(s, {
					value: M,
					onChange: N,
					placeholder: "Search widgets"
				}), /* @__PURE__ */ v("div", {
					className: "flex flex-col gap-1 overflow-y-auto",
					children: [K.map((e) => /* @__PURE__ */ v(ae, { children: [e.label ? /* @__PURE__ */ _(w, {
						label: e.label,
						icon: e.icon
					}) : null, e.items.map((e) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => F(e.id),
						className: "flex items-center gap-3 rounded-md p-2 text-left " + (J?.id === e.id ? "bg-f1-background-selected" : "hover:bg-f1-background-tertiary"),
						children: [/* @__PURE__ */ _(a, {
							icon: e.icon,
							size: "lg"
						}), /* @__PURE__ */ _("span", {
							className: "truncate font-medium text-f1-foreground",
							children: e.title
						})]
					}, e.id))] }, e.id)), q.length === 0 ? /* @__PURE__ */ _("div", {
						className: "p-2 text-f1-foreground-secondary",
						children: G ? "No widgets match your search." : "No widgets to add here."
					}) : null]
				})] })
			}, I), /* @__PURE__ */ _(re, {
				previewKey: J?.id,
				info: J ? se(J, $, Z ? Q : void 0) : void 0,
				previewWidth: de,
				children: J ? /* @__PURE__ */ _(oe, {
					preview: $,
					params: Z ? Q : void 0,
					slotRenderers: E
				}) : null
			})]
		})
	});
}
//#endregion
export { T as WidgetCatalog };
