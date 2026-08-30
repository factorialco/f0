import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/ChevronLeft.js";
import n from "../../../../icons/app/ChevronRight.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { useLayoutEffect as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
var l = ({ children: l }) => {
	let u = a(null), [d, f] = o(!0), [p, m] = o(!1);
	i(() => {
		let e = u.current;
		if (!e) return;
		let t = new ResizeObserver(() => _());
		t.observe(e);
		let n = () => {
			_();
		};
		return e.addEventListener("scroll", n), _(), () => {
			t.disconnect(), e.removeEventListener("scroll", n);
		};
	}, []);
	function h() {
		let e = u.current;
		e && e.scrollBy({
			left: e.clientWidth,
			behavior: "smooth"
		});
	}
	function g() {
		let e = u.current;
		e && e.scrollBy({
			left: -e.clientWidth,
			behavior: "smooth"
		});
	}
	let _ = () => {
		if (!u.current) return;
		let { scrollLeft: e, scrollWidth: t, clientWidth: n } = u.current;
		m(e > 0), f(e + n < t);
	}, v = "";
	return v = p && d ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : p && !d ? "linear-gradient(to right, transparent 0px, transparent 28px, black 56px, black 100%)" : !p && d ? "linear-gradient(to right, black 0px, black calc(100% - 84px), transparent calc(100% - 56px), transparent 100%)" : "none", /* @__PURE__ */ c("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ s("div", {
				ref: u,
				className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
				style: {
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					margin: "-28px",
					padding: "28px",
					height: "calc(100% + 56px)",
					width: "calc(100% + 56px)",
					maskImage: v,
					WebkitMaskImage: v,
					scrollSnapType: "x mandatory"
				},
				children: Array.isArray(l) ? l.map((e, t) => /* @__PURE__ */ s("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: e
				}, t)) : l && /* @__PURE__ */ s("div", {
					className: "flex-shrink-0",
					style: {
						scrollSnapAlign: "start",
						scrollSnapStop: "always",
						scrollMarginLeft: "44px"
					},
					children: l
				})
			}),
			p && /* @__PURE__ */ s(r, {
				size: "lg",
				compact: !0,
				variant: "outline",
				className: e("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: g,
				icon: t,
				label: "Previous",
				hideLabel: !0
			}),
			d && /* @__PURE__ */ s(r, {
				size: "lg",
				variant: "outline",
				compact: !0,
				className: e("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
				onClick: h,
				icon: n,
				label: "Next",
				hideLabel: !0
			})
		]
	});
};
//#endregion
export { l as DynamicCarousel };
