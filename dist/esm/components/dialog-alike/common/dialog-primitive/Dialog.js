"use client";
import { DialogPrimitiveContext as e } from "./context.js";
import { jsx as t } from "react/jsx-runtime";
import * as n from "@radix-ui/react-dialog";
//#region src/components/dialog-alike/common/dialog-primitive/Dialog.tsx
var r = (r) => /* @__PURE__ */ t(e.Provider, {
	value: {
		...r,
		showOverlay: r.showOverlay
	},
	children: /* @__PURE__ */ t(n.Root, { ...r })
});
//#endregion
export { r as Dialog };
