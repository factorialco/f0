import { Carousel as e } from "../../experimental/Navigation/Carousel/index.js";
import { LayoutProvider as t } from "../LayoutProvider.js";
import { Children as n, forwardRef as r, useImperativeHandle as i, useRef as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/layouts/HomeLayout/index.tsx
var c = {
	xs: 1,
	sm: 2,
	md: 2,
	lg: 2
}, l = r(function({ widgets: r, children: l }, u) {
	let d = a(null);
	i(u, () => d.current);
	let f = n.toArray(r).filter((e) => !!e).map((e, t) => /* @__PURE__ */ o("div", {
		className: "h-full @5xl:h-auto [&>div]:h-full",
		children: e
	}, t));
	return /* @__PURE__ */ o(t, {
		layout: "home",
		children: /* @__PURE__ */ s("div", {
			ref: d,
			className: "@container",
			children: [/* @__PURE__ */ s("div", {
				className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
				children: [/* @__PURE__ */ o(e, {
					columns: c,
					showArrows: !1,
					children: f
				}), /* @__PURE__ */ o("main", { children: l })]
			}), /* @__PURE__ */ s("div", {
				className: "px-page hidden grid-cols-3 gap-5 pb-6 pt-2 @5xl:grid",
				children: [
					/* @__PURE__ */ o("div", {
						className: "col-span-3 flex flex-row gap-5 *:flex-1",
						children: f.slice(0, 3)
					}),
					/* @__PURE__ */ o("main", {
						className: "col-span-2",
						children: l
					}),
					/* @__PURE__ */ o("div", {
						className: "flex flex-1 flex-col gap-5",
						children: f.slice(3)
					})
				]
			})]
		})
	});
});
//#endregion
export { l as HomeLayout };
