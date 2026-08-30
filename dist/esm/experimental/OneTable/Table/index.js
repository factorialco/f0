import { cn as e } from "../../../lib/utils.js";
import { Skeleton as t } from "../../../ui/skeleton.js";
import { withSkeleton as n } from "../../../lib/skeleton.js";
import { Spinner as r } from "../../../ui/Spinner/index.js";
import { Table as i } from "../../../ui/table.js";
import { TableBody as a } from "../TableBody/index.js";
import { TableContext as o } from "../utils/TableContext.js";
import { TableCell as s } from "../TableCell/index.js";
import { TableHead as c } from "../TableHead/index.js";
import { TableHeader as l } from "../TableHeader/index.js";
import { TableRow as u } from "../TableRow/index.js";
import { useEffect as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { AnimatePresence as g, motion as _ } from "motion/react";
//#region src/experimental/OneTable/Table/index.tsx
function v({ children: t, loading: n = !1 }) {
	let [a, s] = p(!1), [c, l] = p(!1), u = f(null);
	return d(() => {
		let e = u.current;
		if (!e) return;
		let t = () => {
			s(e.scrollLeft > 0), l(e.scrollWidth - e.scrollLeft - e.clientWidth > 0);
		};
		return t(), e.addEventListener("scroll", t), () => {
			e.removeEventListener("scroll", t);
		};
	}, []), /* @__PURE__ */ m(o.Provider, {
		value: {
			isScrolled: a,
			setIsScrolled: s,
			isScrolledRight: c,
			setIsScrolledRight: l
		},
		children: /* @__PURE__ */ h("div", {
			ref: u,
			className: "relative h-full w-full overflow-auto",
			children: [/* @__PURE__ */ m(i, {
				className: e(n && "select-none opacity-50 transition-opacity"),
				"aria-live": n ? "polite" : void 0,
				"aria-busy": n ? "true" : void 0,
				children: t
			}), /* @__PURE__ */ m(g, { children: n && /* @__PURE__ */ m(_.div, {
				className: "absolute inset-0 flex cursor-progress items-center justify-center",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: /* @__PURE__ */ m(r, {})
			}) })]
		})
	});
}
function y({ columns: e = 5 }) {
	return /* @__PURE__ */ m(o.Provider, {
		value: {
			isScrolled: !1,
			setIsScrolled: () => {},
			isScrolledRight: !1,
			setIsScrolledRight: () => {}
		},
		children: /* @__PURE__ */ h(i, {
			className: "cursor-progress",
			role: "presentation",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ m(l, { children: /* @__PURE__ */ m(u, { children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ m(c, { children: /* @__PURE__ */ m(t, { className: "h-4 w-[80px]" }) }, `skeleton-header-${n}`)) }) }), /* @__PURE__ */ m(a, { children: Array.from({ length: 5 }).map((n, r) => /* @__PURE__ */ m(u, { children: Array.from({ length: e }).map((e, n) => /* @__PURE__ */ m(s, { children: /* @__PURE__ */ m(t, { className: "h-4 w-[80px]" }) }, `skeleton-cell-${r}-${n}`)) }, `skeleton-row-${r}`)) })]
		})
	});
}
var b = n(v, y);
//#endregion
export { b as OneTable };
