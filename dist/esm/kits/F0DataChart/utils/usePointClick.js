import { useEffect as e, useRef as t } from "react";
//#region src/kits/F0DataChart/utils/usePointClick.ts
function n(e) {
	let t = e?.changedTouches?.[0];
	return {
		clientX: t?.clientX ?? e?.clientX ?? 0,
		clientY: t?.clientY ?? e?.clientY ?? 0
	};
}
function r(e, t, n, r) {
	let i = [], a = null, o = Infinity;
	return e.forEach((e, s) => {
		let c = String(e.name ?? "");
		if (r?.[c] === !1) return;
		let l = e.data?.[t], u = typeof l == "object" && l && "value" in l ? l.value : l;
		if (u == null || u === "") return;
		let d = Number(u);
		if (!Number.isFinite(d)) return;
		let f = {
			name: c,
			seriesIndex: s,
			value: d
		};
		i.push(f);
		let p = Math.abs(d - n);
		p < o && (o = p, a = f);
	}), a ? {
		series: i,
		nearest: a
	} : null;
}
function i(i, a, o = "mark") {
	let s = t(a);
	s.current = a, e(() => {
		let e = i.current;
		if (!e) return;
		if (o === "plot") {
			if (typeof e.getZr != "function") return;
			let t = e.getZr();
			if (!t) return;
			let i = !1, a = (e) => {
				let { offsetX: t, offsetY: n } = e;
				return typeof t == "number" && typeof n == "number" ? [t, n] : null;
			}, o = (n) => {
				if (i) {
					t.setCursorStyle("default");
					return;
				}
				let r = a(n);
				s.current && r && e.containPixel("grid", r) && t.setCursorStyle("pointer");
			}, c = () => {
				i = !1, t.setCursorStyle("default");
			}, l = (e) => {
				let n = e.componentType;
				(n === "xAxis" || n === "yAxis") && (i = !0, t.setCursorStyle("default"));
			}, u = (e) => {
				let t = e.componentType;
				(t === "xAxis" || t === "yAxis") && (i = !1);
			}, d = (t) => {
				let i = s.current;
				if (!i) return;
				let o = t, c = a(o);
				if (!c || !e.containPixel("grid", c)) return;
				let l = e.convertFromPixel({ gridIndex: 0 }, c), u = l?.[0], d = l?.[1];
				if (typeof u != "number" || !Number.isFinite(u) || typeof d != "number" || !Number.isFinite(d)) return;
				let f = e.getOption(), p = f.xAxis?.[0]?.data ?? [], m = Math.min(Math.max(Math.round(u), 0), Math.max(p.length - 1, 0)), h = r(f.series ?? [], m, d, f.legend?.[0]?.selected);
				h && (e.dispatchAction({ type: "hideTip" }), i({
					source: "pointer",
					seriesName: h.nearest.name,
					category: String(p[m] ?? ""),
					value: h.nearest.value,
					values: [h.nearest.value],
					series: h.series,
					dataIndex: m,
					seriesIndex: h.nearest.seriesIndex,
					...n(o.event)
				}));
			};
			return t.on("click", d), t.on("mousemove", o), t.on("globalout", c), e.on("mouseover", l), e.on("mouseout", u), () => {
				e.isDisposed?.() || (t.off("click", d), t.off("mousemove", o), t.off("globalout", c), e.off("mouseover", l), e.off("mouseout", u), t.setCursorStyle("default"));
			};
		}
		if (typeof e.on != "function") return;
		let t = (t) => {
			let r = s.current;
			if (!r) return;
			let i = t;
			if (i.componentType !== "series") return;
			let a = Array.isArray(i.value) ? i.value : [i.value];
			if (a.some((e) => e == null || e === "")) return;
			let o = a.map(Number);
			if (o.some((e) => !Number.isFinite(e))) return;
			let c = o[o.length - 1];
			e.dispatchAction({ type: "hideTip" });
			let l = String(i.seriesName ?? ""), u = i.seriesIndex ?? 0;
			r({
				source: "pointer",
				seriesName: l,
				category: String(i.name ?? ""),
				value: c,
				values: o,
				series: [{
					name: l,
					seriesIndex: u,
					value: c
				}],
				dataIndex: i.dataIndex ?? 0,
				seriesIndex: u,
				...n(i.event?.event)
			});
		};
		return e.on("click", t), () => {
			e.isDisposed?.() || e.off("click", t);
		};
	}, [i, o]);
}
//#endregion
export { i as usePointClick };
