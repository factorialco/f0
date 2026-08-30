import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import n from "../../../icons/app/AlertCircle.js";
import r from "../../../icons/app/CheckCircle.js";
import i from "../../../icons/app/Cross.js";
import a from "../../../icons/app/InfoCircle.js";
import o from "../../../icons/app/Warning.js";
import { useI18n as s } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as c } from "../../F0Button/F0Button.js";
import { forwardRef as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/F0Card/components/CardAlert.tsx
var f = {
	info: "bg-f1-background-info",
	warning: "bg-f1-background-warning",
	critical: "bg-f1-background-critical",
	positive: "bg-f1-background-positive"
}, p = {
	info: "hsl(var(--info-50) / 0.12)",
	warning: "hsl(var(--warning-50) / 0.12)",
	critical: "hsl(var(--critical-50) / 0.12)",
	positive: "hsl(var(--positive-50) / 0.12)"
}, m = {
	info: "text-f1-foreground-info",
	warning: "text-f1-foreground-warning",
	critical: "text-f1-foreground-critical",
	positive: "text-f1-foreground-positive"
}, h = {
	critical: "critical",
	warning: "warning",
	info: "info",
	positive: "positive"
}, g = {
	critical: n,
	warning: o,
	info: a,
	positive: r
};
function _({ onClose: e }) {
	let { actions: t } = s();
	return /* @__PURE__ */ u(c, {
		icon: i,
		label: t.close,
		hideLabel: !0,
		variant: "ghost",
		size: "md",
		onClick: e,
		type: "button"
	});
}
function v({ variant: n, title: r, icon: i, dismissible: a = !1, onDismiss: o, action: s }) {
	return /* @__PURE__ */ d("div", {
		role: n === "critical" || n === "warning" ? "alert" : "status",
		className: "flex items-center gap-1 rounded-t-xl px-3 py-1.5",
		children: [
			/* @__PURE__ */ u("div", {
				className: "flex h-5 w-5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ u(t, {
					icon: i ?? g[n],
					size: "md",
					color: h[n]
				})
			}),
			/* @__PURE__ */ u("span", {
				className: e("flex-1 text-base font-medium", m[n]),
				children: r
			}),
			s ? /* @__PURE__ */ u(c, {
				label: s.label,
				variant: "outline",
				size: "sm",
				disabled: s.disabled,
				..."href" in s ? { href: s.href } : {
					onClick: s.onClick,
					type: "button"
				}
			}) : a && o && /* @__PURE__ */ u(_, { onClose: o })
		]
	});
}
var y = l(function({ alert: t, fullHeight: n, children: r }, i) {
	return t.visible === !1 ? /* @__PURE__ */ u("div", {
		ref: i,
		className: e(n && "h-full"),
		children: r
	}) : /* @__PURE__ */ d("div", {
		ref: i,
		className: e("rounded-xl", f[t.variant], n && "flex h-full flex-col"),
		children: [/* @__PURE__ */ u(v, { ...t }), /* @__PURE__ */ u("div", {
			className: e(n && "flex flex-1 flex-col"),
			children: r
		})]
	});
});
y.displayName = "CardAlertWrapper";
//#endregion
export { y as CardAlertWrapper, p as alertBorderColor };
