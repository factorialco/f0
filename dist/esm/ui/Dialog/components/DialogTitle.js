"use client";
import { cn as e } from "../../../lib/utils.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
import * as r from "@radix-ui/react-dialog";
//#region src/ui/Dialog/components/DialogTitle.tsx
var i = t(({ className: t, ...i }, a) => /* @__PURE__ */ n(r.Title, {
	ref: a,
	className: e("text-lg font-medium text-f1-foreground", t),
	...i
}));
i.displayName = r.Title.displayName;
//#endregion
export { i as DialogTitle };
