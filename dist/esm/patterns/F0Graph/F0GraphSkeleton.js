import { cn as e } from "../../lib/utils.js";
import { Skeleton as t } from "../../ui/skeleton.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/patterns/F0Graph/F0GraphSkeleton.tsx
var a = 256, o = 40, s = 8, c = () => /* @__PURE__ */ i("div", {
	className: "flex h-[52px] w-64 items-center gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3",
	children: [/* @__PURE__ */ r(t, { className: "h-8 w-8 shrink-0 rounded-full" }), /* @__PURE__ */ i("div", {
		className: "flex flex-1 flex-col gap-1.5",
		children: [/* @__PURE__ */ r(t, { className: "h-3 w-28 rounded" }), /* @__PURE__ */ r(t, { className: "h-2.5 w-20 rounded" })]
	})]
}), l = () => /* @__PURE__ */ r(t, { className: "h-5 w-20 rounded-full" }), u = () => /* @__PURE__ */ r(t, { className: "h-7 w-10 rounded-lg" }), d = ({ childrenCount: e }) => {
	let t = e * a + (e - 1) * o, n = t / 2;
	if (e === 1) return /* @__PURE__ */ r("svg", {
		width: t,
		height: 40,
		viewBox: `0 0 ${t} 40`,
		fill: "none",
		"aria-hidden": !0,
		children: /* @__PURE__ */ r("path", {
			d: `M${n} 0 V40`,
			className: "stroke-f1-border-secondary",
			strokeWidth: 1.5
		})
	});
	let c = (e) => e * 296 + a / 2, l = c(0), u = c(e - 1), d = `M${l} 40 V28 Q${l} 20 ${l + s} 20 H${u - s} Q${u} 20 ${u} 28 V40`, f = Array.from({ length: e - 2 }, (e, t) => c(t + 1));
	return /* @__PURE__ */ i("svg", {
		width: t,
		height: 40,
		viewBox: `0 0 ${t} 40`,
		fill: "none",
		"aria-hidden": !0,
		children: [
			/* @__PURE__ */ r("path", {
				d: `M${n} 0 V20`,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ r("path", {
				d,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}),
			f.map((e) => /* @__PURE__ */ r("path", {
				d: `M${e} 20 V40`,
				className: "stroke-f1-border-secondary",
				strokeWidth: 1.5
			}, e))
		]
	});
}, f = ({ childrenCount: t = 3, showTags: a = !0, className: o }) => /* @__PURE__ */ i("div", {
	"aria-busy": "true",
	"aria-live": "polite",
	className: e("flex h-full min-h-0 flex-1 flex-col items-center justify-center pb-4", o),
	children: [/* @__PURE__ */ i("div", {
		className: "flex flex-col items-center gap-2",
		children: [/* @__PURE__ */ r(c, {}), a && /* @__PURE__ */ r(l, {})]
	}), t > 0 && /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r(d, { childrenCount: t }), /* @__PURE__ */ r("div", {
		className: "flex items-start gap-10",
		children: Array.from({ length: t }).map((e, t) => /* @__PURE__ */ i("div", {
			className: "flex flex-col items-center gap-2",
			children: [
				/* @__PURE__ */ r(c, {}),
				a && /* @__PURE__ */ r(l, {}),
				/* @__PURE__ */ r(u, {})
			]
		}, t))
	})] })]
});
//#endregion
export { f as F0GraphSkeleton };
