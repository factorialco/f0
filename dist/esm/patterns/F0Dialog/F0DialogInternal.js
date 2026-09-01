import { cn as e } from "../../lib/utils.js";
import { Drawer as t, DrawerContent as n, DrawerOverlay as r } from "../../ui/drawer.js";
import { DialogContent as i } from "../../ui/Dialog/components/DialogContent.js";
import { Dialog as ee } from "../../ui/Dialog/dialog.js";
import { F0DialogProvider as a } from "./components/F0DialogProvider.js";
import { F0DialogContent as o } from "./components/F0DialogContent.js";
import { F0DialogFooter as s } from "./components/F0DialogFooter.js";
import { F0DialogHeader as c } from "./components/F0DialogHeader.js";
import { useIsSmallScreen as l } from "./utils.js";
import { useCallback as u, useMemo as d, useState as f } from "react";
import { cva as p } from "cva";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/patterns/F0Dialog/F0DialogInternal.tsx
var _ = p({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "absolute flex flex-col rounded-md w-full",
			center: "flex",
			fullscreen: ""
		},
		position: {
			right: "left-auto right-0 items-end p-3",
			left: "left-0 items-start p-3",
			center: "",
			fullscreen: "inset-6 max-[560px]:inset-0"
		}
	},
	defaultVariants: { variant: "center" }
}), te = p({
	variants: {
		variant: {
			bottomSheet: "max-h-[95vh] bg-f1-background",
			sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
			center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
			fullscreen: "h-full w-full rounded-xl max-[560px]:rounded-none"
		},
		position: {
			left: "",
			right: "",
			center: "",
			fullscreen: ""
		},
		width: {
			sm: "max-w-[480px]",
			md: "max-w-[640px]",
			lg: "max-w-[800px]",
			xl: "max-w-[960px]"
		}
	},
	compoundVariants: [{
		variant: "fullscreen",
		width: [
			"sm",
			"md",
			"lg",
			"xl"
		],
		class: "max-w-full"
	}],
	defaultVariants: { variant: "center" }
}), v = ({ dismissable: p = !0, asBottomSheetInMobile: v = !0, position: y = "center", onClose: b, isOpen: x, children: S, width: C = "md", primaryAction: w, secondaryAction: T, title: E, description: D, module: O, otherActions: k, navigation: A, resourceHeader: j, controls: ne, headerStatus: M, sideControls: N, tabs: P, activeTabId: F, setActiveTabId: I, disableContentPadding: L, container: R }) => {
	let [z, B] = f(null), V = u((e) => {
		B(e);
	}, []), H = (e) => {
		!e && p && b();
	}, U = l(), W = y === "left" || y === "right", G = d(() => U && v ? "bottomSheet" : y === "fullscreen" ? "fullscreen" : W ? "sidePosition" : "center", [
		U,
		v,
		W,
		y
	]), K = d(() => (C && ![
		"center",
		"left",
		"right"
	].includes(y) && console.warn("F0Dialog: `width` prop is only applicable to center and side panel positions"), C), [
		G,
		C,
		y
	]), q = d(() => te({
		variant: G,
		position: y,
		width: K
	}), [
		G,
		y,
		K
	]), J = W ? "content" : "f0-overlay-root";
	j && !W && console.warn("F0Dialog: `resourceHeader` is only applicable to side panel positions (left/right)");
	let Y = {
		title: E,
		description: D,
		module: O,
		otherActions: k,
		navigation: A,
		resourceHeader: j,
		controls: ne,
		headerStatus: M,
		dismissable: p,
		tabs: P,
		activeTabId: F,
		setActiveTabId: I
	}, X = U, Z = U && y === "fullscreen", Q = "absolute top-1/2 z-10 -translate-y-1/2", $ = N ? X ? /* @__PURE__ */ g("div", {
		className: e("sticky bottom-0 z-10 flex shrink-0 flex-row items-center justify-between gap-2", "border border-x-0 border-b-0 border-t border-solid border-f1-border-secondary", "bg-f1-background px-4 py-3"),
		children: [N.previous, N.next]
	}) : /* @__PURE__ */ g(m, { children: [N.previous ? /* @__PURE__ */ h("div", {
		className: e(Q, "-left-14"),
		children: N.previous
	}) : null, N.next ? /* @__PURE__ */ h("div", {
		className: e(Q, "-right-14"),
		children: N.next
	}) : null] }) : null;
	return U && v ? /* @__PURE__ */ h(a, {
		isOpen: x,
		onClose: b,
		position: y,
		portalContainer: z,
		shownBottomSheet: !0,
		children: /* @__PURE__ */ g(t, {
			open: x,
			onOpenChange: H,
			children: [/* @__PURE__ */ h(r, { className: "bg-f1-background-overlay" }), /* @__PURE__ */ g(n, {
				ref: V,
				className: q,
				children: [
					/* @__PURE__ */ h(c, { ...Y }),
					/* @__PURE__ */ h(o, {
						disableContentPadding: L,
						children: S
					}),
					$,
					/* @__PURE__ */ h(s, {
						primaryAction: w,
						secondaryAction: T
					})
				]
			})]
		})
	}) : /* @__PURE__ */ h(a, {
		isOpen: x,
		onClose: b,
		position: y,
		portalContainer: z,
		children: /* @__PURE__ */ h(ee, {
			open: x,
			onOpenChange: H,
			modal: y === "center" || y === "fullscreen",
			children: /* @__PURE__ */ g(i, {
				ref: V,
				withTranslateAnimation: !W,
				animation: Z ? "fade" : "scale",
				overlayClassName: Z ? "bg-transparent" : void 0,
				wrapperClassName: _({
					variant: G,
					position: y
				}),
				className: q,
				onOpenAutoFocus: (e) => e.preventDefault(),
				container: R,
				defaultContainerId: J,
				children: [
					X ? null : $,
					/* @__PURE__ */ h(c, { ...Y }),
					/* @__PURE__ */ h(o, {
						disableContentPadding: L,
						children: S
					}),
					X ? $ : null,
					/* @__PURE__ */ h(s, {
						primaryAction: w,
						secondaryAction: T
					})
				]
			})
		})
	});
};
//#endregion
export { v as F0DialogInternal };
