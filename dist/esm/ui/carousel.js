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
var u = e("-m-7 h-[calc(100%_+_56px)] w-[calc(100%_+_56px)] p-7", "[mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]", "[-webkit-mask-image:linear-gradient(to_right,transparent_0px,transparent_14px,black_28px,black_calc(100%_-_28px),transparent_calc(100%_-_14px),transparent_100%)]"), d = o.createContext(null);
function f() {
	let e = o.useContext(d);
	if (!e) throw Error("useCarousel must be used within a <Carousel />");
	return e;
}
var p = (e) => e?.containerNode()?.childElementCount ?? 0, m = 5, h = (e, t, n, r) => {
	let i = r?.hasMore ?? !1, a = r?.isLoading ?? !1, s = r?.onLoadMore, [c, l] = o.useState(!1), [u, d] = o.useState(!1), f = o.useRef(a), h = o.useRef(0), g = o.useRef({
		hasMore: i,
		isLoading: a,
		onLoadMore: s,
		owedNext: c
	});
	g.current = {
		hasMore: i,
		isLoading: a,
		onLoadMore: s,
		owedNext: c
	};
	let _ = o.useCallback(() => {
		let { hasMore: t, isLoading: n, onLoadMore: r, owedNext: i } = g.current;
		!t || !r || i || (h.current = p(e), l(!0), d(!0), n || r());
	}, [e]);
	return o.useEffect(() => {
		if (!e) return;
		let t = () => {
			let { hasMore: t, isLoading: n, onLoadMore: r } = g.current;
			if (!t || n || !r) return;
			let i = e.scrollSnapList().length;
			e.selectedScrollSnap() < i - 1 || (d(!1), r());
		}, n = !1, r = () => {
			let { dragHandler: t, limit: r, location: i, percentOfView: a } = e.internalEngine();
			t.pointerDown() && (r.min - i.get() < a.measure(m) || (n = !0));
		}, i = () => {
			n && (n = !1, _());
		}, a = () => {
			n = !1;
		};
		return e.on("select", t), e.on("scroll", r), e.on("pointerDown", a), e.on("pointerUp", i), () => {
			e.off("select", t), e.off("scroll", r), e.off("pointerDown", a), e.off("pointerUp", i);
		};
	}, [e, _]), o.useEffect(() => {
		let r = f.current && !a;
		if (f.current = a, r && d(!1), c) {
			if (t) {
				l(!1), n();
				return;
			}
			r && p(e) <= h.current && l(!1);
		}
	}, [
		c,
		t,
		a,
		n,
		e
	]), {
		canGoNext: t || i && !a,
		isAwaitingPage: c,
		isPageInFlight: u && a,
		goNext: () => {
			if (t) {
				n();
				return;
			}
			_();
		}
	};
}, g = () => f().pagingState, _ = o.forwardRef(({ orientation: t = "horizontal", opts: n, setApi: r, plugins: i, paging: a, className: c, children: u, ...f }, p) => {
	let [m, g] = l({
		...n,
		axis: t === "horizontal" ? "x" : "y"
	}, i), [_, v] = o.useState(!1), [y, b] = o.useState(!1), x = o.useCallback((e) => {
		e && (v(e.canScrollPrev()), b(e.canScrollNext()));
	}, []), S = o.useCallback(() => {
		g?.scrollPrev();
	}, [g]), C = o.useCallback(() => {
		g?.scrollNext();
	}, [g]), w = h(g, y, C, a), T = o.useCallback((e) => {
		e.key === "ArrowLeft" ? (e.preventDefault(), S()) : e.key === "ArrowRight" && (e.preventDefault(), C());
	}, [S, C]);
	return o.useEffect(() => {
		!g || !r || r(g);
	}, [g, r]), o.useEffect(() => {
		if (g) return x(g), g.on("reInit", x), g.on("select", x), () => {
			g?.off("select", x);
		};
	}, [g, x]), /* @__PURE__ */ s(d.Provider, {
		value: {
			carouselRef: m,
			api: g,
			opts: n,
			orientation: t || (n?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev: S,
			scrollNext: C,
			canScrollPrev: _,
			canScrollNext: y,
			pagingState: w
		},
		children: /* @__PURE__ */ s("div", {
			ref: p,
			onKeyDownCapture: T,
			className: e("group/carousel relative", c),
			role: "region",
			"aria-roledescription": "carousel",
			...f,
			children: u
		})
	});
});
_.displayName = "Carousel";
var v = o.forwardRef(({ className: t, ...n }, r) => {
	let { carouselRef: i, orientation: a } = f();
	return /* @__PURE__ */ s("div", {
		ref: i,
		className: e("overflow-hidden", u, "[scrollbar-width:none] [-ms-overflow-style:none]"),
		children: /* @__PURE__ */ s("div", {
			ref: r,
			className: e("flex", a === "horizontal" ? "-ml-4" : "-mt-4 flex-col", t),
			...n
		})
	});
});
v.displayName = "CarouselContent";
var y = o.forwardRef(({ className: t, ...n }, r) => {
	let { orientation: i } = f();
	return /* @__PURE__ */ s("div", {
		ref: r,
		role: "group",
		"aria-roledescription": "slide",
		className: e("min-w-0 shrink-0 grow-0 basis-full", i === "horizontal" ? "pl-4" : "pt-4", t),
		...n
	});
});
y.displayName = "CarouselItem";
var b = o.forwardRef(({ className: n, variant: r = "outline", ...i }, o) => {
	let { orientation: c, scrollPrev: l, canScrollPrev: u } = f();
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
b.displayName = "CarouselPrevious";
var x = o.forwardRef(({ className: t, variant: r = "outline", ...i }, o) => {
	let { orientation: c, scrollNext: l, canScrollNext: u } = f();
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
x.displayName = "CarouselNext";
var S = o.forwardRef(({ ...t }, n) => {
	let { api: r } = f(), [, i] = o.useState(!1), a = o.useRef(null), c = o.useCallback(() => {
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
	let d = l > 5 ? 5 : l, p = Array.from({ length: l }, (e, t) => t), m = Math.min(d, l) * 16, h = (e) => {
		if (d === l) return null;
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
				className: "flex w-full gap-0 overflow-x-scroll [overscroll-behavior:none] [scrollbar-width:none]",
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
S.displayName = "CarouselDots";
var C = o.forwardRef(({ className: t, labels: n, showDots: o = !0, ...l }, u) => {
	let { scrollPrev: d, canScrollPrev: p } = f(), { canGoNext: m, goNext: h, isAwaitingPage: _ } = g();
	return /* @__PURE__ */ c("div", {
		ref: u,
		className: e("flex flex-row items-center justify-between gap-2 pt-4", t),
		...l,
		children: [
			/* @__PURE__ */ s(a, {
				size: "md",
				variant: "outline",
				icon: r,
				label: n?.previous ?? "Previous",
				hideLabel: !0,
				disabled: !p,
				onClick: d
			}),
			o ? /* @__PURE__ */ s(S, { className: "grow" }) : null,
			/* @__PURE__ */ s(a, {
				size: "md",
				variant: "outline",
				icon: i,
				label: n?.next ?? "Next",
				hideLabel: !0,
				loading: _,
				disabled: !m,
				onClick: h
			})
		]
	});
});
C.displayName = "CarouselControls";
//#endregion
export { u as CAROUSEL_SHADOW_BLEED, _ as Carousel, v as CarouselContent, C as CarouselControls, S as CarouselDots, y as CarouselItem, x as CarouselNext, b as CarouselPrevious, g as useCarouselPaging };
