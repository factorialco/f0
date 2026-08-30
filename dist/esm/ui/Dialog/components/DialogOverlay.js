"use client";
import { cn as e } from "../../../lib/utils.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-dialog";
//#region src/ui/Dialog/components/DialogOverlay.tsx
var i = t(({ className: t, ...i }, a) => /* @__PURE__ */ n(r.Overlay, {
	ref: a,
	className: e("fixed inset-0 z-50 bg-f1-background-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t),
	...i
}));
i.displayName = r.Overlay.displayName;
//#endregion
export { i as DialogOverlay };
