import { useEffect as e, useState as t } from "react";
//#region src/patterns/F0Map/hooks/useClusters.ts
var n = (n, r, i, a = 12, o = 164) => {
	let [s, c] = t({
		clusters: [],
		singles: r
	});
	return e(() => {
		if (!n || !i) {
			c({
				clusters: [],
				singles: r
			});
			return;
		}
		let e = 0, t = () => {
			let e = r.map((e) => n.project(e.coordinates)), t = r.length, i = a * a, s = o * o, l = (t, n) => {
				let r = e[t].x - e[n].x, i = e[t].y - e[n].y;
				return r * r + i * i;
			}, u = Array.from({ length: t }, (e, t) => t), d = (e) => {
				for (; u[e] !== e;) e = u[e] = u[u[e]];
				return e;
			}, f = (e, t) => {
				let n = d(e), r = d(t);
				n !== r && (u[n] = r);
			}, p = Array(t).fill(!1);
			for (let e = 0; e < t; e++) for (let n = e + 1; n < t; n++) l(e, n) <= i && (p[e] = p[n] = !0, f(e, n));
			for (let e = 0; e < t; e++) for (let n = e + 1; n < t; n++) (p[e] || p[n]) && l(e, n) <= s && f(e, n);
			let m = /* @__PURE__ */ new Map();
			for (let e = 0; e < t; e++) {
				let t = d(e), n = m.get(t);
				n ? n.push(e) : m.set(t, [e]);
			}
			let h = [], g = [];
			for (let e of m.values()) {
				if (e.length === 1) {
					g.push(r[e[0]]);
					continue;
				}
				let t = 0, n = 0, i = Infinity, a = Infinity, o = -Infinity, s = -Infinity;
				for (let c of e) {
					let [e, l] = r[c].coordinates;
					t += e, n += l, i = Math.min(i, e), o = Math.max(o, e), a = Math.min(a, l), s = Math.max(s, l);
				}
				let c = e.length;
				h.push({
					id: `cluster:${e.map((e) => r[e].id).sort().join(",")}`,
					coordinates: [t / c, n / c],
					count: c,
					pointIds: e.map((e) => r[e].id),
					bounds: [[i, a], [o, s]]
				});
			}
			c((e) => e.clusters.length === h.length && e.singles.length === g.length && e.clusters.every((e, t) => e.id === h[t].id) && e.singles.every((e, t) => e === g[t]) ? e : {
				clusters: h,
				singles: g
			});
		}, s = () => {
			cancelAnimationFrame(e), e = requestAnimationFrame(t);
		};
		return s(), n.on("move", s), n.on("zoom", s), n.on("resize", s), () => {
			cancelAnimationFrame(e), n.off("move", s), n.off("zoom", s), n.off("resize", s);
		};
	}, [
		n,
		r,
		i,
		a,
		o
	]), s;
};
//#endregion
export { n as useClusters };
