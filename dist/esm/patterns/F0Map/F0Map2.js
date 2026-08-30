import { DataTestIdWrapper as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { useReducedMotion as n } from "../../lib/a11y.js";
import { useI18n as r } from "../../lib/providers/i18n/i18n-provider.js";
import './F0Map.css';/* empty css      */
import { FLY_OPTS as i } from "./constants.js";
import { useCurrentLocation as a } from "./hooks/useCurrentLocation.js";
import { useIsDarkContext as o } from "./hooks/useIsDarkContext.js";
import { f0MapStyles as s } from "./styles/index.js";
import { F0MapControls as ee } from "./components/F0MapControls/F0MapControls.js";
import { F0MapList as te } from "./components/F0MapList/F0MapList.js";
import { F0MapMarkersLayer as ne } from "./components/F0MapMarkersLayer.js";
import { F0MapVectorLayer as re } from "./components/F0MapVectorLayer.js";
import { CurrentLocationLayer as ie } from "./components/internal/CurrentLocationLayer.js";
import { F0MapSkeleton as ae } from "./F0MapSkeleton.js";
import { forwardRef as c, useCallback as l, useEffect as u, useId as oe, useImperativeHandle as se, useRef as d, useState as f } from "react";
import { Fragment as ce, jsx as p, jsxs as m } from "react/jsx-runtime";
import "maplibre-gl/dist/maplibre-gl.css";
import h from "maplibre-gl";
//#region src/patterns/F0Map/F0Map.tsx
var g = {
	center: [2.154, 41.39],
	zoom: 11
}, _ = (e, t, n) => [
	...e.map((e) => e.coordinates),
	...t.flatMap((e) => e.coordinates),
	...n.flatMap((e) => [e.from, e.to])
], v = (e, t, n, r = [], i = [], a = 64) => {
	let o = _(t, r, i);
	if (o.length === 0) return;
	if (o.length === 1) {
		let t = {
			center: o[0],
			zoom: 14
		};
		n ? e.easeTo(t) : e.jumpTo(t);
		return;
	}
	let s = new h.LngLatBounds();
	o.forEach((e) => s.extend(e)), e.fitBounds(s, {
		padding: a,
		maxZoom: 15,
		animate: n
	});
}, y = (e, t, n) => {
	e.easeTo({
		center: t.coordinates,
		zoom: Math.max(e.getZoom(), 15),
		animate: n
	});
}, b = c(function({ markers: c = [], routes: _ = [], arcs: b = [], onRouteClick: x, onArcClick: le, selectedMarkerId: S, defaultSelectedMarkerId: ue = null, onMarkerSelect: de, highlightedId: C = null, fitToMarkers: fe, initialViewport: pe, mapStyle: me = s, interactive: w = !0, gestureHandling: he = "cooperative", minZoom: T, maxZoom: E = 18, showControls: ge = !0, controlLabels: _e, showCurrentLocation: ve = !1, fullScreen: D = !1, projection: O = "mercator", loading: k = !1, ariaLabel: ye, dataTestId: be, className: A }, xe) {
	let j = r(), M = d(null), N = d(null), [P, F] = f(null), [I, L] = f(!1), [Se, R] = f(!1), z = oe(), B = n(), { containerRef: V, isDark: Ce } = o(), we = l((e) => {
		M.current = e, V(e);
	}, [V]), H = Ce, U = H ? me.dark : me.light, [Te, Ee] = f(ue), W = S === void 0 ? Te : S, G = l((e) => {
		S === void 0 && Ee(e), de?.(e);
	}, [S, de]), K = d(c);
	K.current = c;
	let q = d(_);
	q.current = _;
	let J = d(b);
	J.current = b;
	let Y = d(O);
	Y.current = O;
	let X = d(G);
	X.current = G;
	let De = fe ?? pe === void 0, Oe = d(!1);
	u(() => {
		Oe.current || c.length <= 200 || (Oe.current = !0, console.warn(`F0Map: ${c.length} markers exceeds the recommended maximum of 200. Markers are DOM elements - pan/zoom will degrade. Aggregate or filter the data, or wait for a GL clustering path.`));
	}, [c.length]);
	let { coords: ke, request: Z } = a(ve), Ae = l(() => N.current?.zoomIn(), []), je = l(() => N.current?.zoomOut(), []), Me = l(() => {
		N.current && v(N.current, K.current, !B, q.current, J.current);
	}, [B]), Ne = l(() => {
		Z((e) => N.current?.flyTo({
			...i,
			center: e,
			zoom: Math.max(N.current.getZoom(), 13),
			animate: !B
		}));
	}, [Z, B]), Pe = l((e) => {
		let t = N.current, n = K.current.find((t) => t.id === e);
		t && n && y(t, n, !B), G(e);
	}, [B, G]);
	se(xe, () => ({
		getMap: () => N.current,
		focusMarker: (e) => {
			let t = N.current, n = K.current.find((t) => t.id === e);
			!t || !n || (y(t, n, !B), X.current(e));
		},
		fitToMarkers: () => {
			N.current && v(N.current, K.current, !B, q.current, J.current);
		},
		clearSelection: () => X.current(null)
	}), [B]);
	let Q = d(U);
	Q.current = U;
	let $ = d(null), Fe = d(pe ?? g);
	u(() => {
		if (k) return;
		let e = M.current;
		if (!e) return;
		$.current = Q.current;
		let t = Fe.current, n;
		try {
			n = new h.Map({
				container: e,
				style: Q.current,
				center: t.center,
				zoom: t.zoom ?? g.zoom,
				minZoom: T,
				maxZoom: E,
				interactive: w,
				cooperativeGestures: he === "cooperative",
				renderWorldCopies: !1,
				attributionControl: { compact: !0 }
			});
		} catch {
			L(!0);
			return;
		}
		N.current = n, F(n), L(!1);
		let r = (1 / 90 + 1 / 40) / 2;
		n.scrollZoom.setWheelZoomRate(r), n.scrollZoom.setZoomRate(r);
		let i = !1;
		return n.once("load", () => {
			i = !0, R(!1), n.resize(), De && v(n, K.current, !1, q.current, J.current), n.setProjection({ type: Y.current });
		}), n.on("error", () => {
			i || R(!0);
		}), n.on("click", () => X.current(null)), () => {
			N.current = null, F(null), n.remove();
		};
	}, [
		k,
		w,
		he,
		T,
		E,
		De
	]), u(() => {
		let e = N.current;
		!e || $.current === U || ($.current = U, e.setStyle(U), e.once("style.load", () => e.setProjection({ type: Y.current })));
	}, [U]), u(() => {
		let e = N.current;
		if (e) try {
			e.setProjection({ type: O });
		} catch {}
	}, [O]), u(() => {
		if (!C) return;
		let e = N.current, t = K.current.find((e) => e.id === C);
		e && t && y(e, t, !B);
	}, [C, B]);
	let Ie = _.length > 0 || b.length > 0;
	return /* @__PURE__ */ p(e, {
		dataTestId: be,
		children: k ? /* @__PURE__ */ p(ae, { className: A }) : /* @__PURE__ */ m("div", {
			ref: we,
			role: "region",
			"aria-label": ye ?? j.map.region,
			className: t("f0-map relative h-full w-full overflow-hidden", H && "dark", !D && "rounded-2xl border border-solid border-f1-border-secondary", A),
			children: [
				/* @__PURE__ */ p("a", {
					href: `#${z}`,
					className: "sr-only rounded-md focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-30 focus:bg-f1-background focus:px-3 focus:py-2 focus:text-sm focus:text-f1-foreground focus:shadow-md focus:outline-none focus:ring-1 focus:ring-f1-special-ring",
					children: j.map.skipToList
				}),
				/* @__PURE__ */ p("div", {
					role: "status",
					"aria-live": "polite",
					className: "sr-only",
					children: `${c.length} ${c.length === 1 ? j.map.location : j.map.locations}`
				}),
				!I && P && ke && /* @__PURE__ */ m(ce, { children: [/* @__PURE__ */ p(ie, {
					map: P,
					coords: ke
				}), /* @__PURE__ */ p("span", {
					className: "sr-only",
					children: j.map.currentLocation
				})] }),
				!I && P && Ie && /* @__PURE__ */ p(re, {
					map: P,
					routes: _,
					arcs: b,
					isDark: H,
					onRouteClick: x,
					onArcClick: le
				}),
				!I && P && c.length > 0 && /* @__PURE__ */ p(ne, {
					map: P,
					points: c,
					selectedId: W,
					highlightedId: C,
					onSelect: G
				}),
				!I && P && ge && w && /* @__PURE__ */ p("div", {
					className: t("absolute z-10", D ? "bottom-6 left-6" : "bottom-2 left-2"),
					children: /* @__PURE__ */ p(ee, {
						onZoomIn: Ae,
						onZoomOut: je,
						onFit: c.length > 0 || Ie ? Me : void 0,
						onLocate: Ne,
						labels: _e
					})
				}),
				Se && !I && /* @__PURE__ */ m("div", {
					className: "absolute inset-x-0 top-0 z-30 flex items-center justify-between gap-3 border-b border-solid border-f1-border-secondary bg-f1-background px-4 py-2 text-sm text-f1-foreground",
					children: [/* @__PURE__ */ p("span", { children: j.map.loadError }), /* @__PURE__ */ p("button", {
						type: "button",
						onClick: () => {
							let e = N.current;
							e && (R(!1), e.setStyle(Q.current));
						},
						className: "font-medium underline",
						children: j.map.retry
					})]
				}),
				/* @__PURE__ */ p(te, {
					id: z,
					label: j.map.listLabel,
					points: c,
					selectedId: W,
					onSelect: Pe,
					visible: I
				})
			]
		})
	});
});
b.displayName = "F0Map";
var x = b;
//#endregion
export { x as F0Map };
