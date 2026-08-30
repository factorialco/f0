import { Blend as e, withSkeleton as t } from "../../../../lib/skeleton.js";
import { Widget as n } from "../../Widget/index.js";
import { Children as r, forwardRef as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c } from "react/jsx-runtime";
import { Masonry as l } from "react-masonry";
//#region src/experimental/Widgets/Layout/Dashboard/index.tsx
var u = {
	sm: 340,
	md: 480,
	lg: 640
}, d = i(function({ children: e, widgetWidth: t = "sm" }, n) {
	let i = u[t], [d, f] = s(), p = r.toArray(e), m = o(null);
	return a(() => {
		let e = () => {
			let e = m.current?.offsetWidth;
			e && f(Math.floor(e / i) || 1);
		};
		return e(), window.addEventListener("resize", e), () => {
			window.removeEventListener("resize", e);
		};
	}, [f, i]), /* @__PURE__ */ c("div", {
		ref: n,
		className: "text-f1-foreground",
		children: /* @__PURE__ */ c("div", {
			ref: m,
			children: d === 1 ? /* @__PURE__ */ c("div", {
				className: "flex flex-col gap-4 *:shadow",
				children: e
			}) : d && d > 1 && /* @__PURE__ */ c("div", {
				className: "relative -mr-4",
				children: /* @__PURE__ */ c(l, { children: p.map((e, t) => /* @__PURE__ */ c("div", {
					style: { width: `${Math.floor(1 / d * 1e4) / 100 - .05}%` },
					className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
					children: e
				}, t)) }, d)
			})
		})
	});
}), f = [
	"sm",
	"lg",
	"md",
	"md",
	"lg",
	"sm",
	"lg",
	"lg",
	"sm",
	"sm",
	"md",
	"md"
], p = t(d, () => /* @__PURE__ */ c(e, { children: /* @__PURE__ */ c(d, { children: f.map((e, t) => /* @__PURE__ */ c(n.Skeleton, { height: e }, t)) }) }));
//#endregion
export { p as Dashboard };
