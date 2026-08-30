import { cn as e } from "../../../lib/utils.js";
import { ScrollArea as t, ScrollBar as n } from "../../../ui/scrollarea.js";
import { useDialogWrapperContext as r } from "./DialogWrapperProvider.js";
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { AnimatePresence as u, motion as d } from "motion/react";
//#region src/components/dialog-alike/common/Content.tsx
var f = ({ position: t }) => /* @__PURE__ */ c(d.div, {
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
}), p = ({ children: d, disableContentPadding: p = !1 }) => {
	let { position: m } = r(), h = o(null), [g, _] = s(!0), [v, y] = s(!0), b = i(() => {
		let e = h.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
		_(t <= 0), y(t + r >= n - 1);
	}, []);
	return a(() => {
		let e = h.current;
		if (!e) return;
		e.addEventListener("scroll", b, { passive: !0 }), b();
		let t = new ResizeObserver(() => b());
		return t.observe(e), () => {
			e.removeEventListener("scroll", b), t.disconnect();
		};
	}, [b]), /* @__PURE__ */ l("div", {
		className: "relative flex flex-1 flex-col overflow-hidden",
		children: [/* @__PURE__ */ l(t, {
			viewportRef: h,
			className: e("[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col", "[&_.resource-header]:p-0 [&_.resource-header]:pr-1", !p && "px-4 [&>div]:py-4", m === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"),
			children: [d, /* @__PURE__ */ c(n, {
				orientation: "vertical",
				className: "[&_div]:bg-f1-background"
			})]
		}), /* @__PURE__ */ l(u, { children: [!g && /* @__PURE__ */ c(f, { position: "top" }, "shadow-top"), !v && /* @__PURE__ */ c(f, { position: "bottom" }, "shadow-bottom")] })]
	});
};
//#endregion
export { p as Content };
