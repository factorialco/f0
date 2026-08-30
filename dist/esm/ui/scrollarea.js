"use client";
import { cn as e } from "../lib/utils.js";
import { forwardRef as t, useEffect as n, useRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import * as o from "@radix-ui/react-scroll-area";
//#region src/ui/scrollarea.tsx
var s = t(({ className: t, children: s, showBar: c = !0, viewportRef: l, onScrollTop: d, onScrollBottom: f, focusableViewport: p = !0, scrollMargin: m = 0, ...h }, g) => {
	let _ = r(null), v = l ?? _;
	return n(() => {
		let e = (e) => {
			let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.target;
			t - m <= 0 && d && d(), t + r + m >= n && f && f();
		}, t = v.current;
		return t?.addEventListener("scroll", e), () => {
			t?.removeEventListener("scroll", e);
		};
	}, [
		v.current,
		f,
		d,
		m
	]), /* @__PURE__ */ a(o.Root, {
		ref: g,
		className: e("relative overflow-hidden", t),
		scrollHideDelay: 200,
		...h,
		children: [
			/* @__PURE__ */ i(o.Viewport, {
				ref: v,
				className: "size-full snap-none rounded-[inherit] [&>div]:!block",
				tabIndex: p ? 0 : void 0,
				"data-scroll-container": !0,
				children: s
			}),
			/* @__PURE__ */ i(u, {
				orientation: "vertical",
				showBar: c
			}),
			/* @__PURE__ */ i(u, {
				orientation: "horizontal",
				showBar: c
			}),
			/* @__PURE__ */ i(o.Corner, {})
		]
	});
});
s.displayName = "ScrollAreaImpl";
var c = t((e, t) => /* @__PURE__ */ i(s, {
	ref: t,
	...e,
	focusableViewport: !0
}));
c.displayName = o.Root.displayName;
var l = t((e, t) => /* @__PURE__ */ i(s, {
	ref: t,
	...e,
	focusableViewport: !1
}));
l.displayName = o.Root.displayName;
var u = t(({ className: t, orientation: n = "vertical", showBar: r = !0, ...a }, s) => /* @__PURE__ */ i(o.ScrollAreaScrollbar, {
	ref: s,
	orientation: n,
	className: e("group/scrollbar z-50 flex touch-none select-none p-[1px]", "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100", n === "vertical" && "h-full w-2", n === "horizontal" && "h-2 flex-col", t),
	...a,
	children: r && /* @__PURE__ */ i(o.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-f1-background-inverse opacity-30 transition-opacity group-hover/scrollbar:opacity-50" })
}));
u.displayName = o.ScrollAreaScrollbar.displayName;
//#endregion
export { l as NonFocusableScrollArea, c as ScrollArea, u as ScrollBar };
