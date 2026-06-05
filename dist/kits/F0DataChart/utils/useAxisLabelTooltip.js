import { useEffect as w } from "react";
let l;
function A() {
  return l !== void 0 ? l : typeof document > "u" ? (l = null, null) : (l = document.createElement("canvas").getContext("2d"), l);
}
const k = 4;
function C(s, a, t, i) {
  const e = A();
  if (!e) return !1;
  e.font = t;
  const u = e.measureText(s).width;
  e.font = i;
  const f = e.measureText(s).width;
  return Math.max(u, f) > a - k;
}
function z(s, a, t) {
  w(() => {
    const i = s.current, e = a.current;
    if (!i || !e) return;
    const u = `${t.textStyle.fontWeight} ${t.textStyle.fontSize}px ${t.textStyle.fontFamily}`, f = `${t.textStyle.fontWeight} ${t.textStyle.fontSize}px sans-serif`;
    let n = null;
    function S() {
      return n || (n = document.createElement("div"), n.style.cssText = [
        "position: absolute",
        "pointer-events: none",
        "z-index: 9999",
        "opacity: 0",
        "transition: opacity 0.15s",
        `padding: ${t.tooltip.padding.map((o) => `${o}px`).join(" ")}`,
        `border-radius: ${t.tooltip.borderRadius}px`,
        `border: 1px solid ${t.colors.borderSecondary}`,
        `box-shadow: ${t.tooltip.boxShadow}`,
        `background: ${t.tooltip.background}`,
        "backdrop-filter: blur(30px)",
        "-webkit-backdrop-filter: blur(30px)",
        `color: ${t.colors.foreground}`,
        `font-family: ${t.textStyle.fontFamily}`,
        `font-size: ${t.textStyle.fontSize}px`,
        `font-weight: ${t.textStyle.fontWeight}`,
        "white-space: nowrap",
        "max-width: 300px",
        "overflow: hidden",
        "text-overflow: ellipsis"
      ].join("; "), e.style.position = "relative", e.appendChild(n), n);
    }
    function g(o) {
      const r = S();
      r.textContent = String(o.value), r.style.left = `${o.event.offsetX + 8}px`, r.style.top = `${o.event.offsetY - 8}px`, r.style.opacity = "1";
    }
    function T() {
      n && (n.style.opacity = "0");
    }
    function x(o) {
      if (o.componentType !== "xAxis" && o.componentType !== "yAxis")
        return;
      e.dataset.axisHover = "true";
      const r = i.getOption(), c = o.componentType === "xAxis" ? r.xAxis : r.yAxis, m = o.componentIndex ?? 0, d = Array.isArray(c) ? c[m] : c, y = d?.axisLabel?.width;
      if (typeof y != "number") return;
      const b = String(o.value), v = d?.axisLabel?.formatter, $ = typeof v == "function" ? v(b) : b;
      C($, y, u, f) && g({
        value: $,
        event: o.event
      });
    }
    function p(o) {
      (o.componentType === "xAxis" || o.componentType === "yAxis") && (e.dataset.axisHover = "false", T());
    }
    if (typeof i.on == "function")
      return i.on("mouseover", x), i.on("mouseout", p), () => {
        i.off("mouseover", x), i.off("mouseout", p), e.dataset.axisHover = "false", n && e.contains(n) && e.removeChild(n);
      };
  }, [s, a, t]);
}
export {
  z as useAxisLabelTooltip
};
