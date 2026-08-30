import { LINES_BOTTOM_LAYER_ID as e } from "../F0MapVectorLayer.js";
import { useEffect as t, useRef as n } from "react";
import { baseColors as r } from "@factorialco/f0-core";
//#region src/patterns/F0Map/components/internal/CurrentLocationLayer.tsx
var i = "f0-current-location", a = "f0-current-location", o = 5.3, s = 5.7, c = ({ map: c, coords: l }) => {
	let u = n(l);
	return u.current = l, t(() => {
		let t = () => ({
			type: "Feature",
			properties: {},
			geometry: {
				type: "Point",
				coordinates: u.current
			}
		}), n = () => {
			!c.isStyleLoaded() || c.getSource(i) || (c.addSource(i, {
				type: "geojson",
				data: t()
			}), c.addLayer({
				id: a,
				type: "circle",
				source: i,
				paint: {
					"circle-radius": o,
					"circle-color": `hsl(${r.malibu[60]})`,
					"circle-stroke-width": s,
					"circle-stroke-color": `hsl(${r.malibu[50]})`,
					"circle-stroke-opacity": .3
				}
			}, c.getLayer("f0-map-lines-solid") ? e : void 0));
		}, l = () => {
			c.style && (n(), c.getSource(i)?.setData(t()));
		};
		return l(), c.on("load", l), c.on("style.load", l), c.on("styledata", l), () => {
			c.off("load", l), c.off("style.load", l), c.off("styledata", l), c.style && (c.getLayer(a) && c.removeLayer(a), c.getSource(i) && c.removeSource(i));
		};
	}, [c]), t(() => {
		c.style && c.getSource(i)?.setData({
			type: "Feature",
			properties: {},
			geometry: {
				type: "Point",
				coordinates: l
			}
		});
	}, [c, l]), null;
};
c.displayName = "CurrentLocationLayer";
//#endregion
export { c as CurrentLocationLayer };
