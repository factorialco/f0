import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Cross.js";
import { Action as r } from "../../../../ui/Action/Action.js";
import { useSidebar as i } from "../../../ApplicationFrame/FrameProvider.js";
import { useEffect as a, useRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Icon/index.tsx
function l({ isExpanded: t }) {
	return /* @__PURE__ */ c("svg", {
		width: "20",
		height: "20",
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: "text-f1-icon-bold",
		children: [
			/* @__PURE__ */ s("rect", {
				id: "container",
				x: "3.33325",
				y: "5",
				width: "13.3333",
				height: "10",
				rx: "3",
				strokeWidth: "1.3",
				className: "stroke-current"
			}),
			/* @__PURE__ */ s("path", {
				id: "arrow",
				d: t ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
				strokeWidth: "1.3",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				className: e("translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none", t ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]")
			}),
			/* @__PURE__ */ s("path", {
				id: "line",
				d: "M7.5 5L7.5 15",
				strokeWidth: "1.3",
				strokeLinecap: "round",
				className: e("stroke-current transition-all duration-200 ease-out motion-reduce:transition-none", t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")
			})
		]
	});
}
function u() {
	let { prevSidebarState: u, sidebarState: d, toggleSidebar: f, isSmallScreen: p } = i(), m = o(null);
	return a(() => {
		u === "hidden" && d === "locked" && m.current?.focus();
	}, [u, d]), /* @__PURE__ */ c(r, {
		variant: "ghost",
		size: "md",
		onClick: () => f(),
		className: "group hover:bg-f1-background-hover",
		title: "Close Sidebar",
		ref: m,
		compact: !0,
		"aria-label": "Close Sidebar",
		children: [/* @__PURE__ */ s("div", {
			className: e("hidden", { flex: !p }),
			children: /* @__PURE__ */ s(l, { isExpanded: d === "locked" })
		}), /* @__PURE__ */ s("div", {
			className: e("hidden", { flex: p }),
			children: /* @__PURE__ */ s(t, {
				icon: n,
				size: "md"
			})
		})]
	});
}
//#endregion
export { u as SidebarIcon, l as SidebarIconSvg };
