import { experimentalComponent as e } from "../experimental.js";
import { cn as t } from "../utils.js";
import n, { forwardRef as r } from "react";
import { Fragment as i, jsx as a } from "react/jsx-runtime";
import { useVirtualizer as o } from "@tanstack/react-virtual";
//#region src/lib/VirtualList/index.tsx
var s = r(({ height: e, itemCount: r, itemSize: s, className: c, renderer: l }, u) => {
	let d = n.useRef(null);
	n.useImperativeHandle(u, () => d.current, []);
	let f = o({
		count: r,
		getScrollElement: () => d.current,
		estimateSize: typeof s == "number" ? () => s : s,
		overscan: 5
	});
	return /* @__PURE__ */ a("div", {
		ref: d,
		className: t("scrollbar-macos w-full overflow-auto", c),
		style: { height: `${e}px` },
		children: /* @__PURE__ */ a("div", {
			style: {
				height: `${f.getTotalSize()}px`,
				width: "100%",
				position: "relative"
			},
			children: f.getVirtualItems().map((e) => /* @__PURE__ */ a("div", {
				style: {
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: `${e.size}px`,
					transform: `translateY(${e.start}px)`
				},
				children: e ? l(e) : /* @__PURE__ */ a(i, {})
			}, e.key))
		})
	});
});
s.displayName = "VirtualList";
var c = e("VirtualList", s);
//#endregion
export { c as VirtualList };
