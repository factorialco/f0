import { jsx as e } from "react/jsx-runtime";
//#region src/lib/skeleton.tsx
function t(e, t) {
	let n = e.displayName || e.name || "Component";
	return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
var n = ({ orientation: t = "vertical", limit: n = 600, children: r }) => /* @__PURE__ */ e("div", {
	style: { maskImage: `linear-gradient(to ${t == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${n}px, 100%)), rgba(0, 0, 0, 0) 100%)` },
	className: t == "horizontal" ? "w-full overflow-hidden" : "w-auto",
	children: r
});
//#endregion
export { t as n, n as t };
