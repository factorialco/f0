"use client";
import { cn as e } from "../../../../lib/utils.js";
import { DialogPortal as t } from "../../../../ui/Dialog/components/DialogPortal.js";
import { useDialogPrimitiveContext as n } from "./context.js";
import { DialogOverlay as r } from "./DialogOverlay.js";
import { forwardRef as i, useCallback as a, useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import * as d from "@radix-ui/react-dialog";
import { animate as f } from "motion";
//#region src/components/dialog-alike/common/dialog-primitive/DialogContent.tsx
var p = (t) => e(t === "zoom" && "group-data-[state=closed]/dialog:zoom-out-95 group-data-[state=open]/dialog:zoom-in-95", t === "slideLeft" && "group-data-[state=closed]/dialog:slide-out-to-right-full group-data-[state=open]/dialog:slide-in-from-right-full", t === "slideRight" && "group-data-[state=closed]/dialog:slide-out-to-left-full group-data-[state=open]/dialog:slide-in-from-left-full"), m = i(({ wrapperClassName: i, animation: m = "zoom", className: h, children: g, container: _, defaultContainerId: v = "content", contentBoxRef: y, ...b }, x) => {
	let [S, C] = c(), w = s(null), T = a((e) => {
		w.current = e, y?.(e);
	}, [y]), E = a(() => {
		w.current && f(w.current, { x: [
			-15,
			15,
			-10,
			10,
			0
		] }, {
			duration: .3,
			ease: "easeInOut"
		});
	}, [w.current]);
	o(() => {
		C(_ === void 0 ? document.getElementById(v) ?? document.getElementById("content") ?? document.body : _);
	}, [_, v]);
	let D = n();
	return S === void 0 ? null : /* @__PURE__ */ u(t, {
		container: S,
		children: [D.showOverlay && /* @__PURE__ */ l(r, {}), /* @__PURE__ */ l(d.Content, {
			ref: x,
			className: e("fixed inset-0 z-50 flex items-center justify-center overflow-hidden", "data-[state=open]:animate-in data-[state=closed]:animate-out", "pointer-events-none", "group/dialog", "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", i),
			style: { transition: "all 2s 100ms !important" },
			...b,
			onClick: (e) => {
				if (b.onPointerDownOutside) {
					let t = new CustomEvent("pointerdownoutside", { detail: { originalEvent: e.nativeEvent } });
					b.onPointerDownOutside(t);
				}
				D.modal && E(), e.preventDefault(), e.stopPropagation();
			},
			children: /* @__PURE__ */ l("div", {
				ref: T,
				className: e("relative flex w-[90%] flex-col rounded-xl bg-f1-background shadow-lg pointer-events-auto", "group-data-[state=open]/dialog:animate-in group-data-[state=closed]/dialog:animate-out overflow-hidden", p(m), h),
				onClick: (e) => {
					e.isPropagationStopped = () => !0;
				},
				children: g
			})
		})]
	});
});
m.displayName = d.Content.displayName;
//#endregion
export { m as DialogContent };
