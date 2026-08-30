import { useCallback as e, useEffect as t, useState as n } from "react";
//#region src/patterns/F0Map/hooks/useCurrentLocation.ts
var r = (r) => {
	let [i, a] = n(null), o = e((e) => {
		r && (typeof navigator > "u" || !navigator.geolocation || navigator.geolocation.getCurrentPosition((t) => {
			let n = [t.coords.longitude, t.coords.latitude];
			a(n), e?.(n);
		}, () => {}, {
			enableHighAccuracy: !0,
			timeout: 1e4,
			maximumAge: 6e4
		}));
	}, [r]);
	return t(() => {
		!r || i || typeof navigator > "u" || navigator.permissions?.query({ name: "geolocation" }).then((e) => {
			e.state === "granted" && o();
		}).catch(() => {});
	}, [
		r,
		i,
		o
	]), {
		coords: i,
		request: o
	};
};
//#endregion
export { r as useCurrentLocation };
