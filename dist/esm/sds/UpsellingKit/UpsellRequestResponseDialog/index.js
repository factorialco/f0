import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { F0Icon as t } from "../../../components/F0Icon/index.js";
import n from "../../../icons/app/CheckCircle.js";
import r from "../../../icons/app/DottedCircle.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { Separator as a } from "../../../ui/separator.js";
import { F0AvatarAlert as o } from "../../../components/avatars/F0AvatarAlert/index.js";
import { DialogContent as s } from "../../../ui/Dialog/components/DialogContent.js";
import { DialogDescription as c } from "../../../ui/Dialog/components/DialogDescription.js";
import { DialogFooter as l } from "../../../ui/Dialog/components/DialogFooter.js";
import { DialogHeader as u } from "../../../ui/Dialog/components/DialogHeader.js";
import { DialogTitle as d } from "../../../ui/Dialog/components/DialogTitle.js";
import { Dialog as f } from "../../../ui/Dialog/dialog.js";
import { forwardRef as p, useCallback as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/UpsellRequestResponseDialog/index.tsx
var y = ({ text: e, isCompleted: i }) => /* @__PURE__ */ v("div", {
	className: "flex flex-row items-center gap-2",
	children: [/* @__PURE__ */ _(t, {
		className: i ? "text-f1-icon-positive" : "text-f1-icon-secondary",
		icon: i ? n : r,
		size: "md"
	}), /* @__PURE__ */ _("span", {
		className: i ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
		children: e
	})]
}), b = ({ title: e, items: t }) => /* @__PURE__ */ v("div", {
	className: "px-4 pb-2",
	children: [/* @__PURE__ */ _("div", {
		className: "mb-2 text-sm text-f1-foreground-secondary",
		children: e
	}), /* @__PURE__ */ _("div", {
		className: "flex flex-col gap-2",
		children: t.map((e) => /* @__PURE__ */ _(y, {
			text: e.text,
			isCompleted: e.isCompleted ?? !1
		}, e.text))
	})]
}), x = ({ onClose: e, success: t, successButtonOnClick: n, successButtonLabel: r, closeLabel: a }) => {
	let o = t && r && n, s = (t = !1) => /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(i, {
		variant: "outline",
		label: a,
		onClick: e,
		size: t ? "lg" : void 0
	}), o && /* @__PURE__ */ _(i, {
		variant: "promote",
		label: r,
		onClick: () => {
			n(), e?.();
		},
		size: t ? "lg" : void 0
	})] });
	return /* @__PURE__ */ v(l, {
		className: "px-4 pb-4 pt-2 [&_div]:w-full",
		children: [/* @__PURE__ */ _("div", {
			className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
			children: s()
		}), /* @__PURE__ */ _("div", {
			className: "flex flex-col-reverse gap-2 sm:hidden",
			children: s(!0)
		})]
	});
}, S = p(({ open: e, onClose: t, success: n = !0, errorMessage: r, successMessage: i, nextSteps: l, closeLabel: p, portalContainer: y }, S) => {
	let [C, w] = h(!1), T = m(() => {
		w(!0), setTimeout(() => {
			t?.(), w(!1);
		}, 200);
	}, [t]);
	return /* @__PURE__ */ _(f, {
		open: e && !C,
		onOpenChange: (e) => !e && T?.(),
		children: /* @__PURE__ */ v(s, {
			ref: S,
			wrapperClassName: "items-end sm:items-center",
			className: "mb-3 max-w-[400px] sm:mb-0",
			container: y,
			children: [
				/* @__PURE__ */ v(u, {
					className: `flex flex-col items-start gap-4 px-4 ${n ? "pt-5" : "py-5"}`,
					children: [/* @__PURE__ */ _(o, {
						type: n ? "positive" : "critical",
						size: "lg"
					}), /* @__PURE__ */ v("div", {
						className: "flex flex-col gap-0.5",
						children: [/* @__PURE__ */ _(d, {
							className: "text-xl font-semibold sm:text-lg",
							children: n ? i?.title : r?.title
						}), /* @__PURE__ */ _(c, {
							className: "text-lg sm:text-base",
							children: n ? i?.description : r?.description
						})]
					})]
				}),
				n && l && l.items?.length > 0 ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(a, {}), /* @__PURE__ */ _(b, {
					title: l.title,
					items: l.items
				})] }) : null,
				/* @__PURE__ */ _(x, {
					onClose: T,
					success: n,
					successButtonLabel: i.buttonLabel,
					successButtonOnClick: i.buttonOnClick,
					closeLabel: p
				})
			]
		})
	});
});
S.displayName = "UpsellRequestResponseDialog";
var C = e(S);
//#endregion
export { C as UpsellRequestResponseDialog };
