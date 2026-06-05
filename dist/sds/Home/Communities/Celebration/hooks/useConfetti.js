import f from "../../../../../node_modules/.pnpm/canvas-confetti@1.9.3/node_modules/canvas-confetti/dist/confetti.module.js";
import { useRef as s, useCallback as c } from "react";
function v(t) {
  const e = s(null), r = s(), l = c(() => {
    const n = e.current;
    if (!n) return;
    const u = f.create(n, {
      resize: !0,
      useWorker: !1
    }), o = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], a = 0.1;
    r.current = setInterval(() => {
      u({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: {
          x: a + Math.random() * (1 - a * 2),
          y: -0.1
        },
        gravity: 0.65,
        scalar: 1,
        ticks: 80,
        startVelocity: 1,
        disableForReducedMotion: t,
        colors: [
          o[Math.floor(Math.random() * o.length)]
        ]
      });
    }, 100);
  }, [t]), i = c(() => {
    clearInterval(r.current);
  }, []);
  return { canvasRef: e, handleMouseEnter: l, handleMouseLeave: i };
}
export {
  v as useConfetti
};
