import { getBreadcrumbKey as e } from "./getBreadcrumbKey.js";
import { Breadcrumb as t, BreadcrumbList as n } from "../../../../ui/breadcrumb.js";
import { BreadcrumbItem as r } from "./internal/BreadcrumbItem.js";
import { CollapsedBreadcrumbItem as i } from "./internal/CollapsedBreadcrumbItem.js";
import { calculateBreadcrumbState as a } from "./layoutCalculation.js";
import { useLayoutEffect as o, useRef as s, useState as c, useTransition as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/experimental/Navigation/Header/Breadcrumbs/index.tsx
function p({ breadcrumbs: p, append: m }) {
	let h = s(null), g = s(null), [, _] = l(), [v, y] = c(null), b = (v?.collapsedItems || []).length > 0;
	return o(() => {
		let e = h.current, t = g.current;
		if (!e || !t || t.children.length < p.length) return;
		let n = () => {
			let e = h.current?.clientWidth ?? null, n = Array.from(t.children);
			_(() => {
				let t = a(e, p, n);
				y(t);
			});
		}, r = new ResizeObserver(n);
		return r.observe(e), n(), () => r.disconnect();
	}, [p, m]), !p.length || v && !v.headItem ? /* @__PURE__ */ d(t, {
		ref: h,
		className: "w-full"
	}) : /* @__PURE__ */ f(t, {
		ref: h,
		className: "w-full overflow-x-hidden",
		style: { minWidth: v?.minWidth },
		children: [/* @__PURE__ */ d("ol", {
			className: "invisible absolute -left-full",
			"aria-hidden": "true",
			ref: g,
			children: p.map((t, n) => /* @__PURE__ */ d(r, {
				item: t,
				isLast: n === p.length - 1,
				isFirst: n === 0,
				children: n === p.length - 1 ? m : void 0
			}, e(t)))
		}), v && v.headItem && /* @__PURE__ */ f(n, { children: [
			/* @__PURE__ */ d(r, {
				isOnly: v.isOnly,
				isFirst: !0,
				item: v.headItem,
				isLast: !1
			}, `first-item-${e(v.headItem)}`),
			b && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(i, { items: v.collapsedItems }, "collapsed-items"), v.tailItems.map((t, n) => /* @__PURE__ */ d(r, {
				item: t,
				isLast: n === v.tailItems.length - 1,
				isFirst: !1,
				children: n === v.tailItems.length - 1 ? m : void 0
			}, e(t)))] }),
			!b && /* @__PURE__ */ d(u, { children: v.tailItems.map((t, n) => /* @__PURE__ */ d(r, {
				item: t,
				isLast: n === v.tailItems.length - 1,
				isFirst: !1,
				children: n === v.tailItems.length - 1 ? m : void 0
			}, e(t))) })
		] })]
	}, `breadcrumb-${e(p.at(-1)) ?? 0}`);
}
//#endregion
export { p as Breadcrumbs };
