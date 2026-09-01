import { Breadcrumb as e, BreadcrumbList as t } from "../../../../ui/breadcrumb.js";
import { getBreadcrumbKey as n } from "./getBreadcrumbKey.js";
import { CollapsedBreadcrumbItem as r } from "./internal/CollapsedBreadcrumbItem.js";
import { calculateBreadcrumbState as i } from "./layoutCalculation.js";
import { BreadcrumbItem as a } from "./internal/BreadcrumbItem.js";
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
				let t = i(e, p, n);
				y(t);
			});
		}, r = new ResizeObserver(n);
		return r.observe(e), n(), () => r.disconnect();
	}, [p, m]), !p.length || v && !v.headItem ? /* @__PURE__ */ d(e, {
		ref: h,
		className: "w-full"
	}) : /* @__PURE__ */ f(e, {
		ref: h,
		className: "w-full overflow-x-hidden",
		style: { minWidth: v?.minWidth },
		children: [/* @__PURE__ */ d("ol", {
			className: "invisible absolute -left-full",
			"aria-hidden": "true",
			ref: g,
			children: p.map((e, t) => /* @__PURE__ */ d(a, {
				item: e,
				isLast: t === p.length - 1,
				isFirst: t === 0,
				children: t === p.length - 1 ? m : void 0
			}, n(e)))
		}), v && v.headItem && /* @__PURE__ */ f(t, { children: [
			/* @__PURE__ */ d(a, {
				isOnly: v.isOnly,
				isFirst: !0,
				item: v.headItem,
				isLast: !1
			}, `first-item-${n(v.headItem)}`),
			b && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(r, { items: v.collapsedItems }, "collapsed-items"), v.tailItems.map((e, t) => /* @__PURE__ */ d(a, {
				item: e,
				isLast: t === v.tailItems.length - 1,
				isFirst: !1,
				children: t === v.tailItems.length - 1 ? m : void 0
			}, n(e)))] }),
			!b && /* @__PURE__ */ d(u, { children: v.tailItems.map((e, t) => /* @__PURE__ */ d(a, {
				item: e,
				isLast: t === v.tailItems.length - 1,
				isFirst: !1,
				children: t === v.tailItems.length - 1 ? m : void 0
			}, n(e))) })
		] })]
	}, `breadcrumb-${n(p.at(-1)) ?? 0}`);
}
//#endregion
export { p as Breadcrumbs };
