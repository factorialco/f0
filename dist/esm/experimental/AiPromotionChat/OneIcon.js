import { cn as e } from "../../lib/utils.js";
import { forwardRef as t, useId as n } from "react";
import { cva as r } from "cva";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/experimental/AiPromotionChat/OneIcon.tsx
var s = r({
	variants: { size: {
		sm: "h-[1.375rem] w-[1.375rem]",
		md: "h-8 w-8",
		lg: "h-10 w-10"
	} },
	defaultVariants: { size: "md" }
}), c = [
	{
		id: "bottom",
		delay: 2.6,
		transformOrigin: "center 89%",
		rotateAxis: "1, 0, 0",
		path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
	},
	{
		id: "left",
		delay: 2.2,
		transformOrigin: "11% center",
		rotateAxis: "0, 1, 0",
		path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
	},
	{
		id: "right",
		delay: 2.4,
		transformOrigin: "88.5% center",
		rotateAxis: "0, 1, 0",
		path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
	},
	{
		id: "top",
		delay: 2,
		transformOrigin: "center 11%",
		rotateAxis: "1, 0, 0",
		path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
	}
], l = t(({ spin: t = !1, size: r = "md", background: l, hover: u = !1, ...d }, f) => {
	let p = n(), { onAnimationStart: m, onAnimationEnd: h, onDragStart: g, onDragEnd: _, onDrag: v, className: y, ...b } = d;
	return /* @__PURE__ */ i("div", {
		className: e(s({ size: r }), y),
		style: {
			background: "transparent",
			perspective: t ? "10px" : void 0,
			transformStyle: t ? "preserve-3d" : void 0
		},
		children: /* @__PURE__ */ a("svg", {
			width: "100%",
			height: "100%",
			viewBox: "0 0 32 32",
			xmlns: "http://www.w3.org/2000/svg",
			ref: f,
			style: b.style,
			...(({ style: e, ...t }) => t)(b),
			children: [/* @__PURE__ */ a("defs", { children: [/* @__PURE__ */ i("clipPath", {
				id: `${p}-circle`,
				children: /* @__PURE__ */ i("circle", {
					cx: "16",
					cy: "16",
					r: "16"
				})
			}), c.map((e) => /* @__PURE__ */ i("clipPath", {
				id: `${p}-${e.id}`,
				children: /* @__PURE__ */ i("path", { d: e.path })
			}, e.id))] }), /* @__PURE__ */ i("g", {
				clipPath: `url(#${p}-circle)`,
				children: c.map((n) => /* @__PURE__ */ i(o.foreignObject, {
					x: "0",
					y: "0",
					width: "32",
					height: "32",
					clipPath: `url(#${p}-${n.id})`,
					animate: {
						"--rotate3d-angle": [
							"0deg",
							"180deg",
							"180deg",
							"360deg"
						],
						"--scale": u ? 8 : 1,
						"--rotate": u ? "90deg" : "0deg",
						opacity: u ? +(n.id === "left") : 1,
						filter: t ? [
							"blur(0px)",
							"blur(8px)",
							"blur(0px)"
						] : void 0
					},
					transition: {
						"--rotate3d-angle": {
							delay: t ? n.delay : 0,
							duration: 1.8,
							ease: [
								.65,
								0,
								.35,
								1
							],
							times: [
								0,
								.99,
								.9999,
								1
							]
						},
						"--scale": {
							duration: u ? .6 : .35,
							ease: [
								.55,
								0,
								.1,
								1
							]
						},
						"--rotate": {
							duration: .35,
							ease: "easeInOut"
						},
						opacity: {
							duration: u ? .8 : .1,
							ease: "easeInOut"
						},
						filter: {
							delay: t ? n.delay : 0,
							duration: 1.8,
							ease: [
								.65,
								0,
								.35,
								1
							],
							times: [
								0,
								.5,
								1
							]
						}
					},
					style: {
						"--rotate3d-angle": "0deg",
						"--scale": 1,
						"--rotate": "0deg",
						transform: t ? `rotate3d(${n.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
						transformOrigin: n.transformOrigin,
						willChange: "transform"
					},
					children: /* @__PURE__ */ i("div", {
						className: e(!l && "[animation:rotate-gradient_6s_linear_infinite] motion-reduce:[animation:none]"),
						style: {
							width: "100%",
							height: "100%",
							background: l ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
						}
					})
				}, n.id))
			})]
		})
	});
});
//#endregion
export { l as default };
