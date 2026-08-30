import { getMarkerMetrics as e } from "../components/internal/BaseMapMarker/BaseMapMarker.js";
import { useEffect as t, useState as n } from "react";
//#region src/patterns/F0Map/hooks/useLabelCollision.ts
var r = 4, i = 4, a = [
	"right",
	"bottom",
	"left",
	"top"
], o = 1.7, s = (e, t) => e.x < t.x + t.w && e.x + e.w > t.x && e.y < t.y + t.h && e.y + e.h > t.y, c = null, l = (e, t) => (!c && typeof document < "u" && (c = document.createElement("canvas").getContext("2d")), c ? (c.font = `600 ${t}px Inter, system-ui, sans-serif`, c.measureText(e).width) : e.length * t * .55), u = (t, n, a, o, s) => {
	let c = e(s), u = l(o.label ?? "", c.label) + 2, d = c.d / 2;
	if (t === "right" || t === "left") {
		let e = u, r = c.lineH;
		return {
			x: t === "right" ? n + d + c.gap : n - d - c.gap - e,
			y: a - r / 2,
			w: e,
			h: r
		};
	}
	let f = Math.min(u, c.maxLabelW), p = Math.min(Math.ceil(u / c.maxLabelW), i) * c.lineH, m = c.gap + r, h = t === "bottom" ? a + d + m : a - d - c.gap - p;
	return {
		x: n - f / 2,
		y: h,
		w: f,
		h: p
	};
}, d = (r, i, c = "md") => {
	let [l, d] = n({});
	return t(() => {
		if (!r) {
			d({});
			return;
		}
		let t = 0, n = () => {
			let t = e(c).d, n = [], l = [];
			for (let e of i) {
				let i = r.project(e.coordinates);
				n.push({
					x: i.x - t / 2,
					y: i.y - t / 2,
					w: t,
					h: t
				}), l.push({
					x: i.x,
					y: i.y
				});
			}
			let f = i.length, p = Array.from({ length: f }, (e, t) => t), m = (e) => {
				for (; p[e] !== e;) e = p[e] = p[p[e]];
				return e;
			}, h = (t * o) ** 2;
			for (let e = 0; e < f; e++) for (let t = e + 1; t < f; t++) {
				let n = l[e].x - l[t].x, r = l[e].y - l[t].y;
				if (n * n + r * r <= h) {
					let n = m(e), r = m(t);
					n !== r && (p[n] = r);
				}
			}
			let g = {}, _ = [];
			for (let e = 0; e < f; e++) {
				let t = i[e];
				if (!t.label) continue;
				let r = l[e], o = "right", d = [o, ...a.filter((e) => e !== o)], f = null;
				for (let e of d) {
					let i = u(e, r.x, r.y, t, c), a = n.some((e) => s(i, e)), o = _.some((e) => s(i, e));
					if (!a && !o) {
						f = e, _.push(i);
						break;
					}
				}
				g[t.id] = f;
			}
			let v = /* @__PURE__ */ new Set();
			for (let e = 0; e < f; e++) i[e].label && g[i[e].id] === null && v.add(m(e));
			for (let e = 0; e < f; e++) i[e].label && v.has(m(e)) && (g[i[e].id] = null);
			d((e) => {
				let t = Object.keys(g);
				return t.length === Object.keys(e).length && t.every((t) => e[t] === g[t]) ? e : g;
			});
		}, l = () => {
			cancelAnimationFrame(t), t = requestAnimationFrame(n);
		};
		return l(), r.on("move", l), r.on("zoom", l), r.on("resize", l), () => {
			cancelAnimationFrame(t), r.off("move", l), r.off("zoom", l), r.off("resize", l);
		};
	}, [
		r,
		i,
		c
	]), l;
};
//#endregion
export { s as boxesOverlap, l as measureLabel, d as useLabelCollision };
