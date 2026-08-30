import { cn as e } from "../../../../../lib/utils.js";
import { useCallback as t, useEffect as n, useRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChat/components/layout/ResizeHandle.tsx
var o = ({ onResize: o, onReset: s, isResizing: c, setIsResizing: l, isCanvasMode: u, side: d = "right" }) => {
	let f = r(0), p = r(0), m = r(null), h = t((e) => {
		e.preventDefault(), f.current = e.clientX, l(!0);
	}, [l]), g = t(async () => {
		l(!0), await s(), l(!1);
	}, [s, l]);
	return n(() => {
		if (!c) return;
		let e = () => {
			m.current = null;
			let e = p.current;
			p.current = 0, e !== 0 && o(e);
		}, t = (t) => {
			let n = d === "left" ? t.clientX - f.current : f.current - t.clientX;
			f.current = t.clientX, p.current += n, m.current ??= requestAnimationFrame(e);
		}, n = () => {
			l(!1);
		};
		return document.addEventListener("mousemove", t), document.addEventListener("mouseup", n), () => {
			document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n), m.current != null && (cancelAnimationFrame(m.current), m.current = null), e();
		};
	}, [
		c,
		o,
		l,
		d
	]), /* @__PURE__ */ a("div", {
		className: e("group relative z-10 h-full flex-shrink-0 cursor-ew-resize w-1", u && "border border-solid border-x-0 border-f1-border-secondary bg-f1-special-page"),
		onMouseDown: h,
		onDoubleClick: g,
		children: [/* @__PURE__ */ i("div", {
			"aria-hidden": !0,
			className: "absolute -inset-x-1 inset-y-0"
		}), /* @__PURE__ */ i("div", {
			"aria-hidden": !0,
			className: e("pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 rounded-full", "transition-[width,background-color] duration-150 ease-out", "w-px bg-transparent", "group-hover:w-1 group-hover:bg-f1-background-secondary-hover", c && "!w-1 !bg-f1-background-secondary-hover")
		})]
	});
};
//#endregion
export { o as ResizeHandle };
