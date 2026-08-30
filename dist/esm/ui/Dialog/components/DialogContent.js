"use client";
import { cn as e } from "../../../lib/utils.js";
import { DialogOverlay as t } from "./DialogOverlay.js";
import { DialogPortal as n } from "./DialogPortal.js";
import { forwardRef as r, useEffect as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import * as c from "@radix-ui/react-dialog";
//#region src/ui/Dialog/components/DialogContent.tsx
var l = r(({ wrapperClassName: r, className: l, children: u, withTranslateAnimation: d = !0, animation: f = "scale", overlayClassName: p, container: m, defaultContainerId: h = "content", ...g }, _) => {
	let [v, y] = a();
	return i(() => {
		y(m === void 0 ? document.getElementById(h) ?? document.getElementById("content") ?? document.body : m);
	}, [m, h]), v === void 0 ? null : /* @__PURE__ */ s(n, {
		container: v,
		children: [/* @__PURE__ */ o(t, { className: p }), /* @__PURE__ */ o(c.Content, {
			ref: _,
			className: e("fixed inset-0 z-50 flex items-center justify-center", "pointer-events-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", f === "scale" && "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", f === "scale" && d && "data-[state=closed]:slide-out-to-top-[10%] data-[state=open]:slide-in-from-top-[10%]", r),
			...g,
			children: /* @__PURE__ */ o("div", {
				className: e("relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg", "pointer-events-auto", l),
				children: u
			})
		})]
	});
});
l.displayName = c.Content.displayName;
//#endregion
export { l as DialogContent };
