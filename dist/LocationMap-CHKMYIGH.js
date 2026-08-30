import { o as e } from "./rolldown-runtime-CEFd7nDs.js";
import { t } from "./maplibre-gl-CAveJgY1.js";
import { useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/LocationMap.tsx
var o = /* @__PURE__ */ e(t(), 1), s = "https://tiles.openfreemap.org/styles/positron", c = "https://tiles.openfreemap.org/styles/dark", l = 15, u = (e) => {
	let [t, r] = i(!1);
	return n(() => {
		let t = e.current;
		if (!t) return;
		let n = () => r(t.closest(".dark") !== null);
		n();
		let i = new MutationObserver(n);
		for (let e = t; e; e = e.parentElement) i.observe(e, {
			attributes: !0,
			attributeFilter: ["class"]
		});
		return () => i.disconnect();
	}, [e]), t;
}, d = ({ latitude: e, longitude: t }) => {
	let i = r(null), d = r(null), f = u(i) ? c : s, p = r(f);
	p.current = f;
	let m = r(null);
	return n(() => {
		let n = i.current;
		if (!n) return;
		m.current = p.current;
		let r = new o.default.Map({
			container: n,
			style: p.current,
			center: [t, e],
			zoom: l,
			interactive: !1,
			attributionControl: !1
		});
		return d.current = r, () => {
			d.current = null, r.remove();
		};
	}, [e, t]), n(() => {
		let e = d.current;
		!e || m.current === f || (m.current = f, e.setStyle(f));
	}, [f]), /* @__PURE__ */ a("div", {
		ref: i,
		className: "h-full w-full",
		"data-testid": "chat-location-map"
	});
};
//#endregion
export { d as default };
