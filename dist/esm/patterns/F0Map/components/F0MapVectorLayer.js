import { markerColorTriplet as e } from "./internal/BaseMapMarker/BaseMapMarker.js";
import { arcLineString as t } from "../utils/arc.js";
import { useEffect as n, useMemo as r, useRef as i } from "react";
//#region src/patterns/F0Map/components/F0MapVectorLayer.tsx
var a = "f0-map-lines", o = "f0-map-lines-solid", s = "f0-map-lines-dashed", c = o, l = [o, s], u = (e) => `hsl(${e.replace(/ /g, ", ")})`, d = (t, n) => t.color ?? u(e(t.variant ?? "radical", n)), f = (t, n) => t.color ?? u(e(t.variant ?? "radical", !n)), p = (e, t, n, r, i) => ({
	type: "Feature",
	id: e,
	properties: {
		id: e,
		kind: t,
		color: d(r, i),
		hoverColor: f(r, i),
		width: r.width ?? 3,
		opacity: r.opacity ?? 1,
		dashed: r.dashed ?? !1
	},
	geometry: {
		type: "LineString",
		coordinates: n
	}
}), m = (e, n, r) => ({
	type: "FeatureCollection",
	features: [...e.map((e) => p(e.id, "route", e.coordinates, e, r)), ...n.map((e) => p(e.id, "arc", t(e.from, e.to, e.curvature), e, r))]
}), h = [
	"boolean",
	["feature-state", "hover"],
	!1
], g = [
	"all",
	h,
	[
		"==",
		["get", "kind"],
		"route"
	]
], _ = [
	"all",
	h,
	[
		"==",
		["get", "kind"],
		"arc"
	]
], v = [
	"case",
	g,
	[
		"*",
		["get", "width"],
		1.6
	],
	["get", "width"]
], y = [
	"case",
	_,
	["get", "hoverColor"],
	["get", "color"]
], b = [
	"case",
	h,
	1,
	["get", "opacity"]
], x = ({ map: e, routes: t, arcs: c, isDark: u, onRouteClick: d, onArcClick: f }) => {
	let p = r(() => m(t, c, u), [
		t,
		c,
		u
	]), h = i(p);
	h.current = p;
	let g = !!(d || f), _ = i({
		onRouteClick: d,
		onArcClick: f
	});
	return _.current = {
		onRouteClick: d,
		onArcClick: f
	}, n(() => {
		let t = () => {
			if (!e.isStyleLoaded() || e.getSource(a)) return;
			e.addSource(a, {
				type: "geojson",
				promoteId: "id",
				data: h.current
			});
			let t = (e) => ({
				type: "line",
				source: a,
				layout: {
					"line-cap": "round",
					"line-join": "round"
				},
				paint: {
					"line-color": y,
					"line-width": v,
					"line-opacity": b,
					...e
				}
			});
			e.addLayer({
				id: o,
				filter: [
					"!=",
					["get", "dashed"],
					!0
				],
				...t({})
			}), e.addLayer({
				id: s,
				filter: [
					"==",
					["get", "dashed"],
					!0
				],
				...t({ "line-dasharray": [1.5, 2.8] })
			});
		}, n = () => {
			e.style && (t(), e.getSource(a)?.setData(h.current));
		};
		n(), e.on("load", n), e.on("style.load", n), e.on("styledata", n);
		let r, i = () => {
			r !== void 0 && e.setFeatureState({
				source: a,
				id: r
			}, { hover: !1 }), r = void 0;
		}, c = (t) => {
			let n = t.features?.[0];
			!n || n.id === void 0 || (r !== void 0 && r !== n.id && i(), r = n.id, e.setFeatureState({
				source: a,
				id: r
			}, { hover: !0 }), e.getCanvas().style.cursor = "pointer");
		}, u = () => {
			i(), e.getCanvas().style.cursor = "";
		}, d = (e) => {
			let t = e.features?.[0]?.properties;
			if (!t) return;
			let { onRouteClick: n, onArcClick: r } = _.current;
			t.kind === "route" ? n?.(t.id) : r?.(t.id);
		};
		if (g) for (let t of l) e.on("mousemove", t, c), e.on("mouseleave", t, u), e.on("click", t, d);
		return () => {
			if (e.off("load", n), e.off("style.load", n), e.off("styledata", n), g) for (let t of l) e.off("mousemove", t, c), e.off("mouseleave", t, u), e.off("click", t, d);
			if (e.style) {
				for (let t of [s, o]) e.getLayer(t) && e.removeLayer(t);
				e.getSource(a) && e.removeSource(a);
			}
		};
	}, [e, g]), n(() => {
		e.style && e.getSource(a)?.setData(p);
	}, [e, p]), null;
};
//#endregion
export { x as F0MapVectorLayer, c as LINES_BOTTOM_LAYER_ID };
