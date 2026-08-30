"use client";
import { cn as e } from "../../../../lib/utils.js";
import { useDialogPrimitiveContext as t } from "./context.js";
import { forwardRef as n } from "react";
import { Fragment as r, jsx as i } from "react/jsx-runtime";
import * as a from "@radix-ui/react-dialog";
//#region src/components/dialog-alike/common/dialog-primitive/DialogOverlay.tsx
var o = n(({ className: n, ...o }, s) => {
	let c = t(), l = c.modal || c.showOverlay;
	return /* @__PURE__ */ i(r, { children: /* @__PURE__ */ i(a.Root, {
		...c,
		modal: l,
		children: /* @__PURE__ */ i("div", {
			"data-state": c.open ? "open" : "closed",
			ref: s,
			className: e("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", "pointer-events-auto", "transition-all duration-200", n),
			...o,
			style: {
				pointerEvents: "auto",
				...o.style
			}
		})
	}) });
});
o.displayName = a.Overlay.displayName;
//#endregion
export { o as DialogOverlay };
