import { jsx as s } from "react/jsx-runtime";
import a from "../node_modules/.pnpm/canvas-confetti@1.9.3/node_modules/canvas-confetti/dist/confetti.module.js";
import { cva as d } from "../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { useCallback as u } from "react";
import { d as f } from "../_virtual/index.js";
import { useReducedMotion as p } from "./a11y.js";
import { motion as c } from "../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const g = d({
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});
function y({ emoji: t, size: n, alt: e }) {
  const i = h(t), o = {
    initial: { scale: 0.75 },
    animate: {
      scale: 1
    },
    exit: { scale: 0.75 },
    transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }
  };
  return i ? /* @__PURE__ */ s(
    c.img,
    {
      src: i.url,
      alt: e ?? t,
      className: g({ size: n }),
      draggable: !1,
      ...o
    },
    i.url
  ) : /* @__PURE__ */ s(c.span, { ...o, children: t }, t);
}
const h = (t) => {
  const [n] = f.parse(t, {
    buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg`
  });
  return n || null;
};
function R(t) {
  return `${t} emoji`;
}
const M = () => {
  const t = p();
  return { fireEmojiConfetti: u(
    (e, i) => {
      const o = i.current;
      if (o) {
        const r = o.getBoundingClientRect(), m = r.left + r.width / 2, l = r.top;
        a({
          particleCount: 20,
          gravity: 0,
          spread: 360,
          startVelocity: 10,
          ticks: 50,
          origin: {
            x: m / window.innerWidth,
            y: l / window.innerHeight
          },
          shapes: [a.shapeFromText({ text: e, scalar: 2 })],
          scalar: 2,
          disableForReducedMotion: t
        });
      }
    },
    [t]
  ) };
};
export {
  y as EmojiImage,
  R as getEmojiLabel,
  M as useEmojiConfetti
};
