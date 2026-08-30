import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { F0Button as t } from "../../../components/F0Button/F0Button.js";
import { UpsellRequestResponseDialog as n } from "../UpsellRequestResponseDialog/index.js";
import { ProductBlankslate as r } from "../ProductBlankslate/index.js";
import { CustomModal as i } from "./components/CustomModal.js";
import { useState as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ProductModal/index.tsx
function l({ isOpen: e, onClose: l, title: u, image: d, benefits: f, errorMessage: p, successMessage: m, loadingState: h, nextSteps: g, closeLabel: _, primaryAction: v, modalTitle: y, modalModule: b, secondaryAction: x, portalContainer: S, tag: C, promoTag: w, showResponseDialog: T = !0 }) {
	let [E, D] = a(e), [O, k] = a(null), [A, j] = a(!1), M = async () => {
		if (v?.onClick) {
			j(!0);
			try {
				await v.onClick(), D(!1), T && k("success");
			} catch {
				T && k("error");
			} finally {
				j(!1);
			}
		}
	}, N = () => {
		D(!1), l?.();
	}, P = A;
	return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(i, {
		isOpen: E,
		onClose: N,
		title: y,
		module: b,
		portalContainer: S,
		children: /* @__PURE__ */ s("div", {
			className: "pb-4 pl-4",
			children: /* @__PURE__ */ s(r, {
				title: u,
				image: d,
				benefits: f,
				withShadow: !1,
				tag: C,
				promoTag: w,
				actions: /* @__PURE__ */ c("div", {
					className: "flex gap-3",
					children: [v && /* @__PURE__ */ s(t, {
						variant: v.variant,
						label: P ? h.label : v.label,
						icon: v.icon || void 0,
						onClick: M,
						loading: v.loading,
						size: v.size
					}), x && /* @__PURE__ */ s(t, {
						onClick: x.onClick,
						label: x.label,
						variant: x.variant,
						size: x.size,
						icon: x.icon
					})]
				})
			})
		})
	}), O && T && /* @__PURE__ */ s(n, {
		open: !0,
		onClose: () => {
			N(), k(null);
		},
		success: O === "success",
		errorMessage: p,
		successMessage: m,
		nextSteps: g,
		closeLabel: _,
		portalContainer: S
	})] });
}
var u = e(l);
//#endregion
export { u as ProductModal };
