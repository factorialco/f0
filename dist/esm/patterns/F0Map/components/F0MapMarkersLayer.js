import { useReducedMotion as e } from "../../../lib/a11y.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { FLY_OPTS as n } from "../constants.js";
import { useClusters as r } from "../hooks/useClusters.js";
import { SELECTED_DOT_R as i, getMarkerMetrics as a, getSelectedHeadGroupY as o } from "./internal/BaseMapMarker/BaseMapMarker.js";
import { boxesOverlap as s, measureLabel as c, useLabelCollision as l } from "../hooks/useLabelCollision.js";
import { useZoomAtLeast as u } from "../hooks/useZoomAtLeast.js";
import { F0MapMarker as d } from "./F0MapMarker/F0MapMarker.js";
import { F0MapCluster as f } from "./internal/F0MapCluster/F0MapCluster.js";
import { useEffect as p, useRef as m, useState as h } from "react";
import { createPortal as g } from "react-dom";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
import { AnimatePresence as y, motion as b } from "motion/react";
import x from "maplibre-gl";
//#region src/patterns/F0Map/components/F0MapMarkersLayer.tsx
var S = 16, C = (e, t, n, r) => {
	let l = e.project(t.coordinates), u = a("xl"), d = a(r), f = l.y + o(), p = {
		x: l.x - u.d / 2,
		y: f,
		w: u.d,
		h: u.d
	}, m = t.label ? c(t.label, d.label) : 0, h = {
		x: l.x - m / 2,
		y: l.y + i,
		w: m,
		h: d.lineH
	}, g = d.d, _ = /* @__PURE__ */ new Set();
	for (let t of n) {
		let n = e.project(t.coordinates), r = {
			x: n.x - g / 2,
			y: n.y - g / 2,
			w: g,
			h: g
		};
		(s(r, p) || m > 0 && s(r, h)) && _.add(t.id);
	}
	return _;
}, w = (e, t, n, r) => {
	let [i, a] = h(null);
	return p(() => {
		if (!t || !n.some((e) => e.id === t.id)) {
			a(null);
			return;
		}
		let i = 0, o = () => {
			let i = C(e, t, n.filter((e) => e.id !== t.id), r);
			a((e) => e !== null && e.size === i.size && [...i].every((t) => e.has(t)) ? e : i);
		}, s = () => {
			cancelAnimationFrame(i), i = requestAnimationFrame(o);
		};
		return s(), e.on("zoom", s), e.on("resize", s), () => {
			cancelAnimationFrame(i), e.off("zoom", s), e.off("resize", s);
		};
	}, [
		e,
		t,
		n,
		r
	]), i;
}, T = (e, t, r) => {
	let i = e.cameraForBounds(t, {
		padding: 64,
		maxZoom: 16
	});
	if (!i?.center) return;
	let a = i.zoom ?? e.getZoom();
	if (r) {
		e.jumpTo({
			center: i.center,
			zoom: a
		});
		return;
	}
	e.flyTo({
		...n,
		center: i.center,
		zoom: a
	});
}, E = (e) => {
	let { id: t, coordinates: n, label: r, ...i } = e;
	return i;
}, D = ({ map: e, coordinates: t, selected: n, children: r }) => {
	let [i] = h(() => document.createElement("div")), a = m(null);
	return p(() => {
		let n = (e) => e.stopPropagation();
		i.style.cursor = "pointer", i.addEventListener("click", n);
		let r = new x.Marker({
			element: i,
			anchor: "center"
		}).setLngLat(t).addTo(e);
		return a.current = r, () => {
			i.removeEventListener("click", n), r.remove(), a.current = null;
		};
	}, [e, i]), p(() => {
		a.current?.setLngLat(t);
	}, [t]), p(() => {
		i.style.zIndex = n ? "2" : "";
	}, [i, n]), g(r, i);
}, O = ({ map: n, points: i, selectedId: a, highlightedId: o, onSelect: s }) => {
	let c = t(), p = e(), { clusters: m, singles: h } = r(n, i, !0), g = u(n, S) ? "lg" : "md", x = l(n, h, g), C = new Map(i.map((e) => [e.id, e])), O = m.length > 0, k = w(n, a ? C.get(a) : void 0, h, g);
	return /* @__PURE__ */ v(y, { children: [m.map((e) => /* @__PURE__ */ _(D, {
		map: n,
		coordinates: e.coordinates,
		selected: !1,
		children: /* @__PURE__ */ _(b.span, {
			initial: {
				scale: .8,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			exit: {
				scale: .8,
				opacity: 0,
				transition: { duration: .12 }
			},
			transition: {
				duration: .3,
				ease: [
					.34,
					1.7,
					.5,
					1
				]
			},
			className: "flex leading-none",
			style: {
				position: "absolute",
				left: 0,
				top: 0
			},
			children: /* @__PURE__ */ _(f, {
				count: e.count,
				members: e.pointIds.map((e) => C.get(e)).filter((e) => !!e).map(E),
				onClick: () => T(n, e.bounds, p)
			})
		})
	}, e.id)), h.map((e) => {
		let t = x[e.id], r = k?.has(e.id) ?? !1, i = o === e.id;
		return /* @__PURE__ */ _(D, {
			map: n,
			coordinates: e.coordinates,
			selected: a === e.id || i,
			children: /* @__PURE__ */ _(b.span, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: {
					opacity: 0,
					transition: {
						duration: .12,
						ease: "easeIn"
					}
				},
				transition: {
					duration: .2,
					ease: "easeOut"
				},
				style: {
					position: "absolute",
					left: 0,
					top: 0
				},
				children: /* @__PURE__ */ _(y, {
					initial: !1,
					children: /* @__PURE__ */ _(b.span, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: {
							duration: .25,
							ease: "easeOut"
						},
						className: "flex leading-none",
						style: {
							position: "absolute",
							left: 0,
							top: 0
						},
						children: /* @__PURE__ */ _(d, {
							...E(e),
							size: g,
							label: e.label,
							showLabel: a === e.id || i || !O && t !== null,
							labelPlacement: t ?? "right",
							selected: a === e.id,
							collapsed: r,
							onClick: () => s(e.id),
							presentational: !0,
							ariaLabel: e.label ?? c.map.unnamedLocation
						})
					}, g)
				})
			})
		}, e.id);
	})] });
};
//#endregion
export { O as F0MapMarkersLayer };
