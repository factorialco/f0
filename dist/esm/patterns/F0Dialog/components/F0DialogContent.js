import { cn as e } from "../../../lib/utils.js";
import { LayoutProvider as t } from "../../../layouts/LayoutProvider.js";
import { ScrollArea as n, ScrollBar as r } from "../../../ui/scrollarea.js";
import { useF0Dialog as i } from "./F0DialogProvider.js";
import { useCallback as a, useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { AnimatePresence as d, motion as f } from "motion/react";
//#region src/patterns/F0Dialog/components/F0DialogContent.tsx
var p = ({ position: t }) => /* @__PURE__ */ l(f.div, {
	initial: { opacity: 0 },
	animate: { opacity: .6 },
	exit: { opacity: 0 },
	transition: {
		duration: .2,
		ease: "easeOut"
	},
	className: e("pointer-events-none absolute inset-x-0 z-10 h-4", t === "top" ? [
		"top-0",
		"bg-gradient-to-b from-f1-background-secondary to-transparent",
		"after:top-0"
	] : [
		"bottom-0",
		"bg-gradient-to-t from-f1-background-secondary to-transparent",
		"after:bottom-0"
	])
}), m = ({ children: f, disableContentPadding: m = !1 }) => {
	let { position: h } = i(), g = s(null), [_, v] = c(!0), [y, b] = c(!0), x = a(() => {
		let e = g.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
		v(t <= 0), b(t + r >= n - 1);
	}, []);
	return o(() => {
		let e = g.current;
		if (!e) return;
		e.addEventListener("scroll", x, { passive: !0 }), x();
		let t = new ResizeObserver(() => x());
		return t.observe(e), () => {
			e.removeEventListener("scroll", x), t.disconnect();
		};
	}, [x]), /* @__PURE__ */ u("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ u(n, {
			viewportRef: g,
			className: e("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", !m && "px-4 [&>div]:py-4", h === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"),
			children: [/* @__PURE__ */ l(t, {
				layout: null,
				children: f
			}), /* @__PURE__ */ l(r, {
				orientation: "vertical",
				className: "[&_div]:bg-f1-background"
			})]
		}), /* @__PURE__ */ u(d, { children: [!_ && /* @__PURE__ */ l(p, { position: "top" }, "shadow-top"), !y && /* @__PURE__ */ l(p, { position: "bottom" }, "shadow-bottom")] })]
	});
};
//#endregion
export { m as F0DialogContent };
