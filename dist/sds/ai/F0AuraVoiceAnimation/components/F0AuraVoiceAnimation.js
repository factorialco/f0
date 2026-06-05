import { jsx as h } from "react/jsx-runtime";
import { useMemo as y } from "react";
import { cva as g } from "../../../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { cn as x } from "../../../../lib/utils.js";
import { ReactShaderToy as A } from "./ReactShaderToy.js";
import { shaderSource as S } from "./shaderSource.js";
import { useAuraVoiceAnimation as b } from "../hooks/useAuraVoiceAnimation.js";
const F = g({
  base: "aspect-square",
  variants: {
    size: {
      icon: "h-[24px]",
      sm: "h-[56px]",
      md: "h-[112px]",
      lg: "h-[224px]",
      xl: "h-[448px]"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
function w(r) {
  const e = r.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (e) {
    const [, a, t, i] = e;
    return [a, t, i].map((o = "00") => parseInt(o, 16) / 255);
  }
}
function v({
  shape: r = 1,
  speed: e = 1,
  amplitude: a = 0.5,
  frequency: t = 0.5,
  scale: i = 0.2,
  blur: u = 1,
  color: o = "#FF355E",
  colorShift: n = 1,
  brightness: l = 1,
  themeMode: p = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: f,
  className: s,
  ...c
}) {
  const m = y(() => w(o), [o]);
  return /* @__PURE__ */ h("div", { ref: f, className: s, ...c, children: /* @__PURE__ */ h(
    A,
    {
      fs: S,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: e },
        // Edge blur/softness
        uBlur: { type: "1f", value: u },
        // Shape scale
        uScale: { type: "1f", value: i },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: r },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: t },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: a },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: l },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: n },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: p === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: m ?? [0, 0.7, 1] }
      },
      onError: (d) => {
        console.error("Shader error:", d);
      },
      onWarning: (d) => {
        console.warn("Shader warning:", d);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
v.displayName = "AuraShader";
function k({
  size: r = "lg",
  state: e,
  color: a,
  colorShift: t = 0.05,
  audioTrack: i,
  themeMode: u,
  className: o,
  ref: n,
  ...l
}) {
  const { speed: p, scale: f, amplitude: s, frequency: c, brightness: m } = b(e, i);
  return /* @__PURE__ */ h(
    v,
    {
      ref: n,
      blur: 0.2,
      color: a,
      colorShift: t,
      speed: p,
      scale: f,
      themeMode: u,
      amplitude: s,
      frequency: c,
      brightness: m,
      className: x(
        F({ size: r }),
        "overflow-hidden rounded-full",
        o
      ),
      ...l
    }
  );
}
export {
  k as F0AuraVoiceAnimation,
  F as F0AuraVoiceAnimationVariants
};
