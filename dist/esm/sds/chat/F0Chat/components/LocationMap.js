import { useEffect as e, useRef as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import i from "maplibre-gl";
//#region src/sds/chat/F0Chat/components/LocationMap.tsx
var a = "https://tiles.openfreemap.org/styles/positron", o = "https://tiles.openfreemap.org/styles/dark", s = 15, c = (t) => {
	let [r, i] = n(!1);
	return e(() => {
		let e = t.current;
		if (!e) return;
		let n = () => i(e.closest(".dark") !== null);
		n();
		let r = new MutationObserver(n);
		for (let t = e; t; t = t.parentElement) r.observe(t, {
			attributes: !0,
			attributeFilter: ["class"]
		});
		return () => r.disconnect();
	}, [t]), r;
}, l = ({ latitude: n, longitude: l }) => {
	let u = t(null), d = t(null), f = c(u) ? o : a, p = t(f);
	p.current = f;
	let m = t(null);
	return e(() => {
		let e = u.current;
		if (!e) return;
		m.current = p.current;
		let t = new i.Map({
			container: e,
			style: p.current,
			center: [l, n],
			zoom: s,
			interactive: !1,
			attributionControl: !1
		});
		return d.current = t, () => {
			d.current = null, t.remove();
		};
	}, [n, l]), e(() => {
		let e = d.current;
		!e || m.current === f || (m.current = f, e.setStyle(f));
	}, [f]), /* @__PURE__ */ r("div", {
		ref: u,
		className: "h-full w-full",
		"data-testid": "chat-location-map"
	});
};
//#endregion
export { l as default };
