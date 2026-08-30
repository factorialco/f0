import { cn as e } from "../../../lib/utils.js";
import { Drawer as t, DrawerContent as n, DrawerOverlay as r } from "../../../ui/drawer.js";
import { DialogWrapperProvider as i } from "./DialogWrapperProvider.js";
import { Dialog as a } from "./dialog-primitive/Dialog.js";
import { DialogContent as o } from "./dialog-primitive/DialogContent.js";
import { useIsSmallScreen as s } from "./utils.js";
import { useCallback as c, useEffect as l, useMemo as u, useRef as d, useState as f } from "react";
import { cva as p } from "cva";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/dialog-alike/common/Wrapper.tsx
var g = p({
	variants: { position: {
		right: "fixed flex flex-col rounded-md w-full left-auto right-0 items-end p-3",
		left: "fixed flex flex-col rounded-md w-full left-0 items-start p-3",
		center: "p-6"
	} },
	defaultVariants: { position: "center" }
}), _ = p({
	base: "max-w-full max-h-full",
	variants: { size: {
		sm: "max-w-[480px]",
		md: "max-w-[640px]",
		lg: "max-w-[800px]",
		xl: "max-w-[960px]",
		fullscreen: "w-full h-full"
	} },
	defaultVariants: { size: "md" }
}), v = ({ isOpen: p, onOpenChange: v, onClose: y, position: b, children: x, modal: S = !1, showOverlay: C = !0, size: w = "md", fullHeight: T = !1, container: E, onWidthChange: D }) => {
	let [O, k] = f(null), A = c((e) => {
		k(e);
	}, []), [j, M] = f(null), N = d(D);
	N.current = D, l(() => {
		if (!j || !N.current) return;
		let e = () => N.current?.(j.getBoundingClientRect().width);
		e();
		let t = new ResizeObserver(e);
		return t.observe(j), () => {
			t.disconnect(), N.current?.(0);
		};
	}, [j]);
	let P = s(), F = c((e) => {
		v?.(e);
	}, [v]), I = d(void 0);
	l(() => {
		I.current === !0 && !p && y(), I.current = p;
	}, [p, y]);
	let L = u(() => b === "left" || b === "right", [b]), R = u(() => L ? "sm" : (w && b !== "center" && console.warn("F0Dialog: `size` prop is only applicable to center position"), w), [
		L,
		w,
		b
	]), z = (e) => {
		S && e.preventDefault();
	};
	return /* @__PURE__ */ m(i, {
		isOpen: p,
		onClose: y,
		position: b,
		portalContainer: O ?? null,
		shownBottomSheet: !0,
		children: P ? /* @__PURE__ */ h(t, {
			open: p,
			onOpenChange: F,
			children: [/* @__PURE__ */ m(r, { className: e("bg-f1-background-overlay", T && "h-full") }), /* @__PURE__ */ m(n, {
				ref: A,
				className: "max-h-full bg-f1-background",
				children: x
			})]
		}) : /* @__PURE__ */ m(a, {
			open: p,
			onOpenChange: F,
			modal: S,
			showOverlay: C,
			children: /* @__PURE__ */ m(o, {
				ref: A,
				contentBoxRef: M,
				container: E,
				defaultContainerId: b === "center" ? "f0-overlay-root" : "content",
				wrapperClassName: g({ position: b }),
				className: e(_({ size: R }), T && "h-full"),
				animation: {
					left: "slideRight",
					right: "slideLeft",
					center: "zoom"
				}[b],
				onOpenAutoFocus: (e) => e.preventDefault(),
				onEscapeKeyDown: z,
				onPointerDownOutside: z,
				onInteractOutside: z,
				children: x
			})
		})
	});
};
//#endregion
export { v as DialogWrapper };
