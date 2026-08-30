import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import t from "../../../icons/app/Upsell.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { Popover as r, PopoverContent as i, PopoverTrigger as a } from "../../../ui/popover.js";
import { UpsellRequestResponseDialog as o } from "../UpsellRequestResponseDialog/index.js";
import { ProductWidget as s } from "../ProductWidget/index.js";
import { useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/UpsellingPopover/index.tsx
function f({ isOpen: e, setIsOpen: f, label: p, variant: m = "promote", size: h = "md", showIcon: g = !0, side: _ = "right", align: v = "center", icon: y = t, mediaUrl: b, title: x, description: S, width: C = "300px", trackVisibility: w, actions: T, onClick: E, hideLabel: D = !1 }) {
	let [O, k] = c(!1), [A, j] = c(null), [M, N] = c(null), P = (e) => {
		f(e), E && E();
	}, F = async (e) => {
		if (e.type === "upsell") {
			N(e);
			try {
				await e.onClick(), e.showConfirmation && (k(!0), j("success"));
			} catch {
				k(!0), j("error");
			}
		}
	}, I = () => {
		j(null), k(!1), N(null), f(!1);
	}, L = e && !O, R = T?.map((e) => e.type === "upsell" ? {
		...e,
		onClick: () => F(e)
	} : e);
	return /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ d(r, {
		open: L,
		onOpenChange: P,
		children: [/* @__PURE__ */ u(a, {
			asChild: !0,
			children: /* @__PURE__ */ u(n, {
				variant: m,
				label: p,
				size: h,
				icon: g ? y : void 0,
				onClick: () => f(e),
				hideLabel: D
			})
		}), /* @__PURE__ */ u(i, {
			side: _,
			align: v,
			className: "w-fit border-none bg-transparent p-2 shadow-none",
			children: /* @__PURE__ */ u(s, {
				mediaUrl: b,
				title: x,
				description: S,
				onClose: () => f(!1),
				dismissible: !1,
				width: C,
				trackVisibility: w,
				actions: R,
				showConfirmation: !1
			})
		})]
	}), M?.type === "upsell" && M.showConfirmation && A && /* @__PURE__ */ u(o, {
		open: !0,
		onClose: I,
		success: A === "success",
		errorMessage: M.errorMessage,
		successMessage: M.successMessage,
		nextSteps: M.nextSteps,
		closeLabel: M.closeLabel,
		portalContainer: null
	})] });
}
var p = e(f);
//#endregion
export { p as UpsellingPopover };
