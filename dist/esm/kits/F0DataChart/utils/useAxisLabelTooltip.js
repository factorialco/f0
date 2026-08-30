import { useEffect as e } from "react";
//#region src/kits/F0DataChart/utils/useAxisLabelTooltip.ts
var t;
function n() {
	return t === void 0 ? typeof document > "u" ? (t = null, null) : (t = document.createElement("canvas").getContext("2d"), t) : t;
}
var r = 4;
function i(e, t, i, a) {
	let o = n();
	if (!o) return !1;
	o.font = i;
	let s = o.measureText(e).width;
	o.font = a;
	let c = o.measureText(e).width;
	return Math.max(s, c) > t - r;
}
function a(t, n, r) {
	e(() => {
		let e = t.current, a = n.current;
		if (!e || !a) return;
		let o = `${r.textStyle.fontWeight} ${r.textStyle.fontSize}px ${r.textStyle.fontFamily}`, s = `${r.textStyle.fontWeight} ${r.textStyle.fontSize}px sans-serif`, c = null;
		function l() {
			return c || (c = document.createElement("div"), c.style.cssText = [
				"position: absolute",
				"pointer-events: none",
				"z-index: 9999",
				"opacity: 0",
				"transition: opacity 0.15s",
				`padding: ${r.tooltip.padding.map((e) => `${e}px`).join(" ")}`,
				`border-radius: ${r.tooltip.borderRadius}px`,
				`border: 1px solid ${r.colors.borderSecondary}`,
				`box-shadow: ${r.tooltip.boxShadow}`,
				`background: ${r.tooltip.background}`,
				"backdrop-filter: blur(30px)",
				"-webkit-backdrop-filter: blur(30px)",
				`color: ${r.colors.foreground}`,
				`font-family: ${r.textStyle.fontFamily}`,
				`font-size: ${r.textStyle.fontSize}px`,
				`font-weight: ${r.textStyle.fontWeight}`,
				"white-space: nowrap",
				"max-width: 300px",
				"overflow: hidden",
				"text-overflow: ellipsis"
			].join("; "), a.style.position = "relative", a.appendChild(c), c);
		}
		function u(e) {
			let t = l();
			t.textContent = String(e.value), t.style.left = `${e.event.offsetX + 8}px`, t.style.top = `${e.event.offsetY - 8}px`, t.style.opacity = "1";
		}
		function d() {
			c && (c.style.opacity = "0");
		}
		function f(t) {
			if (t.componentType !== "xAxis" && t.componentType !== "yAxis") return;
			a.dataset.axisHover = "true";
			let n = e.getOption(), r = t.componentType === "xAxis" ? n.xAxis : n.yAxis, c = t.componentIndex ?? 0, l = Array.isArray(r) ? r[c] : r, d = l?.axisLabel?.width;
			if (typeof d != "number") return;
			let f = String(t.value), p = l?.axisLabel?.formatter, m = typeof p == "function" ? p(f) : f;
			i(m, d, o, s) && u({
				value: m,
				event: t.event
			});
		}
		function p(e) {
			(e.componentType === "xAxis" || e.componentType === "yAxis") && (a.dataset.axisHover = "false", d());
		}
		if (typeof e.on == "function") return e.on("mouseover", f), e.on("mouseout", p), () => {
			e.off("mouseover", f), e.off("mouseout", p), a.dataset.axisHover = "false", c && a.contains(c) && a.removeChild(c);
		};
	}, [
		t,
		n,
		r
	]);
}
//#endregion
export { a as useAxisLabelTooltip };
