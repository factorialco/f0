import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/sds/chat/F0Chat/hooks/useTranscriptReadiness.ts
var i = 1e3, a = 300, o = null, s = /* @__PURE__ */ new Set(), c = () => {
	if (o !== null) return o;
	let e = typeof document < "u" ? document.fonts : void 0;
	if (!e?.ready || e.status === "loaded") return o = !0, !0;
	o = !1;
	let t = () => {
		if (o) return;
		o = !0;
		let e = [...s];
		s.clear(), e.forEach((e) => e());
	};
	return e.ready.then(t), window.setTimeout(t, a), !1;
}, l = (a) => {
	let [o, l] = r(null), u = n(a), d = n(!1), f = n(null), p = n({
		width: 0,
		height: 0
	}), m = n(null), h = n(!1), g = n(0), _ = n(null), v = n(null), y = o === a;
	u.current === a ? d.current = y : (u.current = a, d.current = !1, h.current = !1, g.current += 1);
	let b = e(() => {
		d.current || (d.current = !0, m.current?.disconnect(), m.current = null, l(a));
	}, [a]), x = e(() => {
		_.current != null && cancelAnimationFrame(_.current), v.current != null && cancelAnimationFrame(v.current), _.current = null, v.current = null;
	}, []), S = e(() => {
		if (d.current || !f.current || !h.current) return;
		x();
		let e = g.current;
		_.current = requestAnimationFrame(() => {
			_.current = null, v.current = requestAnimationFrame(() => {
				v.current = null, f.current && h.current && g.current === e && c() && b();
			});
		});
	}, [x, b]);
	t(() => {
		if (c()) return;
		let e = () => S();
		return s.add(e), () => {
			s.delete(e);
		};
	}, [a, S]);
	let C = e((e) => {
		if (m.current?.disconnect(), m.current = null, f.current = e, p.current = {
			width: e?.clientWidth ?? 0,
			height: e?.clientHeight ?? 0
		}, g.current += 1, x(), !(!e || d.current)) {
			if (typeof ResizeObserver < "u") {
				let t = new ResizeObserver(() => {
					let t = {
						width: e.clientWidth,
						height: e.clientHeight
					}, n = p.current;
					(t.width !== n.width || t.height !== n.height) && (p.current = t, g.current += 1, S());
				});
				t.observe(e), m.current = t;
			}
			S();
		}
	}, [
		x,
		b,
		S
	]), w = e((e) => {
		h.current = e, e ? S() : x();
	}, [x, S]);
	return t(() => {
		let e = f.current;
		return e && !d.current && C(e), () => {
			x(), m.current?.disconnect(), m.current = null;
		};
	}, [
		x,
		a,
		C
	]), t(() => {
		if (d.current) return;
		let e = window.setTimeout(b, i);
		return () => window.clearTimeout(e);
	}, [b, a]), {
		ready: y,
		setViewport: C,
		setListVisible: w
	};
};
//#endregion
export { l as useTranscriptReadiness };
