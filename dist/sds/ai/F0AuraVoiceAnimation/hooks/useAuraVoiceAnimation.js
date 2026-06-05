import { useState as T, useEffect as E, useRef as S, useCallback as F } from "react";
import { useTrackVolume as L } from "@livekit/components-react";
import { useMotionValue as U } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-motion-value.js";
import { useMotionValueEvent as D } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-motion-value-event.js";
import { animate as V } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.js";
const _ = 10, v = 2, I = 0.5, h = 0.2, N = 1.5, e = {
  duration: 0.5,
  ease: "easeOut"
}, A = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function u(a) {
  const [m, l] = T(a), n = U(a), r = S(null);
  D(n, "change", (i) => l(i));
  const t = F(
    (i, f) => {
      r.current = V(n, i, f);
    },
    [n]
  );
  return { value: m, motionValue: n, controls: r, animate: t };
}
function M(a, m) {
  const [l, n] = T(_), {
    value: r,
    animate: t,
    motionValue: i
  } = u(h), { value: f, animate: o } = u(v), { value: d, animate: s } = u(I), { value: g, animate: c } = u(N), p = L(m, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return E(() => {
    switch (a) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), t(0.2, e), o(1.2, e), s(0.4, e), c(1, e);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), t(0.3, { type: "spring", duration: 1, bounce: 0.35 }), o(1, e), s(0.7, e), c([1.5, 2], A);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), t(0.3, e), o(0.5, e), s(1, e), c([0.5, 2.5], A);
        return;
      case "speaking":
        n(70), t(0.3, e), o(0.75, e), s(1.25, e), c(1.5, e);
        return;
    }
  }, [
    a,
    t,
    o,
    s,
    c
  ]), E(() => {
    a === "speaking" && p > 0 && !i.isAnimating() && t(0.2 + 0.2 * p, { duration: 0 });
  }, [
    a,
    p,
    i,
    t,
    o,
    s,
    c
  ]), {
    speed: l,
    scale: r,
    amplitude: f,
    frequency: d,
    brightness: g
  };
}
export {
  M as useAuraVoiceAnimation
};
