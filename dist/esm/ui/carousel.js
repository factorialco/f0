"use client";
import { cn as e } from "../lib/utils.js";
import t from "../icons/app/ArrowLeft.js";
import n from "../icons/app/ArrowRight.js";
import r from "../icons/app/ChevronLeft.js";
import i from "../icons/app/ChevronRight.js";
import { ButtonInternal as a } from "../components/F0Button/internal.js";
import * as o from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import l from "embla-carousel-react";
//#region src/ui/carousel.tsx
var u = o.createContext(null);
function d() {
	let e = o.useContext(u);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var f = o.forwardRef(({ orientation: t = "horizontal", opts: n, setApi: r, plugins: i, className: a, children: c, ...d }, f) => {
	let [p, m] = l({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, i), [h, g] = o.useState(!1), [_, v] = o.useState(!1), y = o.useCallback((e) => {
		e && (g(e.canScrollPrev()), v(e.canScrollNext()));
	}, []), b = o.useCallback(() => {
		m?.scrollPrev();
	}, [m]), x = o.useCallback(() => {
		m?.scrollNext();
	}, [m]), S = o.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), b()) : e.key === "ArrowRight" && (e.preventDefault(), x());
	}, [b, x]);
	return o.useEffect(() => {
		!m || !r || r(m);
	}, [m, r]), o.useEffect(() => {
		if (m) return y(m), m.on("reInit", y), m.on("select", y), () => {
			m?.off("select", y);
		};
	}, [m, y]), /* @__PURE__ */ s(u.Provider, {
		value: {
			carouselRef: p,
			api: m,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: b,
			scrollNext: x,
			canScrollPrev: h,
			canScrollNext: _
		},
		children: /* @__PURE__ */ s("div", {
			ref: f,
			onKeyDownCapture: S,
			className: e("group/carousel relative", a),
			role: "region",
			"aria-roledescription": "carousel",
			...d,
			children: c
		})
	});
});
f.displayName = "Carousel";
var p = o.forwardRef(({ className: t, ...n }, r) => {
	let i = "linear-gradient(to right, transparent 0px, transparent 14px, black 28px, black calc(100% - 28px), transparent calc(100% - 14px), transparent 100%)", { carouselRef: a, orientation: o } = d();
	return /* @__PURE__ */ s("div", {
		ref: a,
		className: "overflow-hidden",
		style: {
			scrollbarWidth: "none",
			msOverflowStyle: "none",
			margin: "-28px",
			padding: "28px",
			height: "calc(100% + 56px)",
			width: "calc(100% + 56px)",
			maskImage: i,
			WebkitMaskImage: i
		},
		children: /* @__PURE__ */ s("div", {
			ref: r,
			className: e("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
			...n
		})
	});
});
p.displayName = "CarouselContent";
var m = o.forwardRef(({ className: t, ...n }, r) => {
	let { orientation: i } = d();
	return /* @__PURE__ */ s("div", {
		ref: r,
		role: "group",
		"aria-roledescription": "slide",
		className: e("min-w-0 shrink-0 grow-0 basis-full", i === "horizontal" ? "pl-4" : "pt-4", t),
		...n
	});
});
m.displayName = "CarouselItem";
var h = o.forwardRef(({ className: n, variant: r = "outline", ...i }, o) => {
	let { orientation: c, scrollPrev: l, canScrollPrev: u } = d();
	return /* @__PURE__ */ s("div", {
		className: e("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !u && "opacity-0 group-hover/carousel:opacity-0", c === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ s(a, {
			compact: !0,
			ref: o,
			size: "sm",
			variant: r,
			className: e("absolute opacity-100 transition-all", n),
			disabled: !u,
			onClick: l,
			...i,
			label: "Previous",
			icon: t,
			hideLabel: !0
		})
	});
});
h.displayName = "CarouselPrevious";
var g = o.forwardRef(({ className: t, variant: r = "outline", ...i }, o) => {
	let { orientation: c, scrollNext: l, canScrollNext: u } = d();
	return /* @__PURE__ */ s("div", {
		className: e("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !u && "opacity-0 group-hover/carousel:opacity-0", c === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
		children: /* @__PURE__ */ s(a, {
			ref: o,
			size: "sm",
			variant: r,
			compact: !0,
			className: e("absolute opacity-100 transition-all", t),
			disabled: !u,
			onClick: l,
			...i,
			label: "Next",
			icon: n,
			hideLabel: !0
		})
	});
});
g.displayName = "CarouselNext";
var _ = o.forwardRef(({ ...t }, n) => {
	let { api: r } = d(), [, i] = o.useState(!1), a = o.useRef(null), c = o.useCallback(() => {
		i((e) => !e);
	}, []);
	o.useEffect(() => {
		if (r) return r.on("select", c), r.on("reInit", c), () => {
			r.off("select", c), r.off("reInit", c);
		};
	}, [r, c]);
	let l = r?.scrollSnapList().length || 0, u = r?.selectedScrollSnap() || 0;
	if (o.useEffect(() => {
		if (!a.current) return;
		let e = a.current, t = u * 16 - e.clientWidth / 2 + 8;
		e.scrollTo({
			left: t,
			behavior: "smooth"
		});
	}, [u]), o.useEffect(() => {
		let e = a.current;
		if (!e) return;
		let t = (e) => {
			e.preventDefault(), e.stopPropagation();
		};
		return e.addEventListener("wheel", t, { passive: !1 }), e.addEventListener("touchmove", t, { passive: !1 }), () => {
			e.removeEventListener("wheel", t), e.removeEventListener("touchmove", t);
		};
	}, []), l <= 1) return null;
	let f = l > 5 ? 5 : l, p = Array.from({ length: l }, (e, t) => t), m = Math.min(f, l) * 16, h = (e) => {
		if (f === l) return null;
		let t = Math.abs(e - u);
		if (t === 0 || t === 1) return "scale-100";
		if (t === 2) return u === 0 || u === l - 1 ? "scale-100" : "scale-75";
		if (t === 3) return u === 0 || u === l - 1 ? "scale-75" : "scale-50";
		if (t >= 4) return "scale-50";
	};
	return /* @__PURE__ */ s("div", {
		ref: n,
		className: e("flex justify-center", t.className),
		children: /* @__PURE__ */ s("div", {
			className: "relative overflow-hidden",
			style: { width: `${m}px` },
			children: /* @__PURE__ */ s("div", {
				ref: a,
				className: "flex w-full gap-0 overflow-x-scroll",
				style: {
					scrollbarWidth: "none",
					overscrollBehavior: "none"
				},
				tabIndex: 0,
				"aria-label": "Carousel pagination",
				onKeyDown: (e) => {
					e.key === "ArrowLeft" ? (e.preventDefault(), r?.scrollPrev()) : e.key === "ArrowRight" && (e.preventDefault(), r?.scrollNext());
				},
				children: p.map((t) => /* @__PURE__ */ s("button", {
					className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
					"aria-label": `Go to slide ${t + 1}`,
					"aria-current": t === u ? "true" : void 0,
					onClick: () => r?.scrollTo(t),
					tabIndex: -1,
					children: /* @__PURE__ */ s("div", { className: e("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", t === u && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", h(t)) })
				}, t))
			})
		})
	});
});
_.displayName = "CarouselDots";
var v = (e) => e?.containerNode()?.childElementCount ?? 0, y = (e) => {
	let { api: t, canScrollNext: n, scrollNext: r } = d(), i = e?.hasMore ?? !1, a = e?.isLoading ?? !1, s = e?.onLoadMore, c = o.useRef({
		hasMore: i,
		isLoading: a,
		onLoadMore: s
	});
	c.current = {
		hasMore: i,
		isLoading: a,
		onLoadMore: s
	}, o.useEffect(() => {
		if (!t) return;
		let e = () => {
			let { hasMore: e, isLoading: n, onLoadMore: r } = c.current;
			if (!e || n || !r) return;
			let i = t.scrollSnapList().length;
			t.selectedScrollSnap() < i - 1 || r();
		};
		return t.on("select", e), () => {
			t.off("select", e);
		};
	}, [t]);
	let [l, u] = o.useState(!1), f = o.useRef(a), p = o.useRef(0);
	return o.useEffect(() => {
		let e = f.current && !a;
		if (f.current = a, l) {
			if (n) {
				u(!1), r();
				return;
			}
			e && v(t) <= p.current && u(!1);
		}
	}, [
		l,
		n,
		a,
		r,
		t
	]), {
		canGoNext: n || i && !a,
		isAwaitingPage: l,
		goNext: () => {
			if (n) {
				r();
				return;
			}
			i && (p.current = v(t), u(!0), a || s?.());
		}
	};
}, b = o.forwardRef(({ className: t, labels: n, showDots: o = !0, paging: l, ...u }, f) => {
	let { scrollPrev: p, canScrollPrev: m } = d(), { canGoNext: h, goNext: g, isAwaitingPage: v } = y(l);
	return /* @__PURE__ */ c("div", {
		ref: f,
		className: e("flex flex-row items-center justify-between gap-2 pt-4", t),
		...u,
		children: [
			/* @__PURE__ */ s(a, {
				size: "md",
				variant: "outline",
				icon: r,
				label: n?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !m,
				onClick: p
			}),
			o ? /* @__PURE__ */ s(_, { className: "grow" }) : null,
			/* @__PURE__ */ s(a, {
				size: "md",
				variant: "outline",
				icon: i,
				label: n?.next ?? "Next",
				hideLabel: !0,
				loading: v,
				disabled: !h,
				onClick: g
			})
		]
	});
});
b.displayName = "CarouselControls";
//#endregion
export { f as Carousel, p as CarouselContent, b as CarouselControls, _ as CarouselDots, m as CarouselItem, g as CarouselNext, h as CarouselPrevious };
