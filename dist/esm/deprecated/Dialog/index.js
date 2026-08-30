import { Component as e } from "../../lib/component/component.js";
import { withDataTestId as t } from "../../lib/data-testid/index.js";
import { experimentalComponent as n } from "../../lib/experimental.js";
import { F0Button as r } from "../../components/F0Button/F0Button.js";
import { F0AvatarAlert as i } from "../../components/avatars/F0AvatarAlert/index.js";
import { DialogContent as a } from "../../ui/Dialog/components/DialogContent.js";
import { DialogDescription as o } from "../../ui/Dialog/components/DialogDescription.js";
import { DialogFooter as s } from "../../ui/Dialog/components/DialogFooter.js";
import { DialogHeader as c } from "../../ui/Dialog/components/DialogHeader.js";
import { DialogTitle as l } from "../../ui/Dialog/components/DialogTitle.js";
import { Dialog as u } from "../../ui/Dialog/dialog.js";
import { forwardRef as d, useCallback as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/deprecated/Dialog/index.tsx
var g = d(({ header: e, actions: t, open: n, onClose: d }, g) => {
	let [_, v] = p(!1), y = f(() => {
		v(!0);
		let e = setTimeout(() => {
			d?.(), v(!1);
		}, 200);
		return () => clearTimeout(e);
	}, [d]);
	return /* @__PURE__ */ m(u, {
		open: n && !_,
		onOpenChange: (e) => !e && y?.(),
		children: /* @__PURE__ */ h(a, {
			ref: g,
			className: "bottom-3 top-auto max-w-[400px]",
			children: [/* @__PURE__ */ h(c, {
				className: "flex flex-col gap-4 px-4 py-5",
				children: [/* @__PURE__ */ m(i, {
					type: e.type,
					size: "lg"
				}), /* @__PURE__ */ h("div", {
					className: "flex flex-col gap-0.5",
					children: [/* @__PURE__ */ m(l, {
						className: "text-xl sm:text-lg",
						children: e.title
					}), /* @__PURE__ */ m(o, {
						className: "text-lg sm:text-base",
						children: e.description
					})]
				})]
			}), t && /* @__PURE__ */ h(s, {
				className: "px-4 pb-4 pt-2",
				children: [/* @__PURE__ */ h("div", {
					className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
					children: [/* @__PURE__ */ m(r, {
						variant: "outline",
						...t.secondary
					}), /* @__PURE__ */ m(r, {
						...t.primary,
						variant: t.primary.variant || "default"
					})]
				}), /* @__PURE__ */ h("div", {
					className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
					children: [/* @__PURE__ */ m(r, {
						variant: "outline",
						...t.secondary,
						size: "lg"
					}), /* @__PURE__ */ m(r, {
						...t.primary,
						variant: t.primary.variant || "default",
						size: "lg"
					})]
				})]
			})]
		})
	});
});
g.displayName = "Dialog";
var _ = t(e({
	name: "Dialog",
	type: "info"
}, n("Dialog", g)));
//#endregion
export { _ as Dialog, g as DialogInner };
