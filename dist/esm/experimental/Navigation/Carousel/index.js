import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { Carousel as r, CarouselContent as i, CarouselControls as a, CarouselDots as o, CarouselItem as s, CarouselNext as c, CarouselPrevious as l } from "../../../ui/carousel.js";
import { DynamicCarousel as u } from "./DynamicCarousel/index.js";
import { carouselItemVariants as d } from "./types.js";
import f from "react";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
import g from "embla-carousel-autoplay";
import { WheelGesturesPlugin as _ } from "embla-carousel-wheel-gestures";
//#region src/experimental/Navigation/Carousel/index.tsx
function v(e, t, n) {
	if (n) {
		let n = (e || 1) / 2;
		return t ? `peek${n}` : n;
	}
	return t ? `peek${e || 1}` : e || 1;
}
var y = e(t("Carousel", ({ children: e, columns: t, showArrows: y = !0, showDots: b = !0, arrowsPlacement: x = "overlay", arrowLabels: S, paging: C, autoplay: w = !1, delay: T = 3e3, showPeek: E = !1, doubleColumns: D }) => {
	let O = f.Children.toArray(e), k = y && x === "bottom", A = f.useRef(w ? g({
		delay: T,
		stopOnInteraction: !0
	}) : void 0);
	return t ? /* @__PURE__ */ m(r, {
		className: "flex w-full flex-col gap-3 @container",
		opts: {
			align: E ? "center" : "start",
			slidesToScroll: "auto",
			duration: 20,
			containScroll: !1
		},
		plugins: [A.current, _()].filter(Boolean),
		paging: C,
		onMouseEnter: w ? () => {
			A.current && A.current.stop();
		} : void 0,
		onMouseLeave: w ? () => {
			A.current && A.current.play();
		} : void 0,
		children: /* @__PURE__ */ h("div", {
			className: n("flex flex-col", !k && "gap-5"),
			children: [/* @__PURE__ */ h("div", {
				className: "relative",
				children: [/* @__PURE__ */ m(i, { children: f.Children.map(O, (e, n) => {
					let r = D?.find((e) => e.index === n);
					return /* @__PURE__ */ m(s, {
						className: d({
							default: v(t.default, E),
							xs: v(t.xs, E, r?.sizes?.includes("xs")),
							sm: v(t.sm, E, r?.sizes?.includes("sm")),
							md: v(t.md, E, r?.sizes?.includes("md")),
							lg: v(t.lg, E, r?.sizes?.includes("lg")),
							peek: E
						}),
						children: e
					}, n);
				}) }), y && !k && /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(l, { label: S?.previous ?? "Previous" }), /* @__PURE__ */ m(c, { label: S?.next ?? "Next" })] })]
			}), k ? /* @__PURE__ */ m(a, {
				labels: S,
				showDots: b
			}) : b && /* @__PURE__ */ m(o, {})]
		})
	}) : /* @__PURE__ */ m(u, { children: e });
}));
//#endregion
export { y as Carousel };
