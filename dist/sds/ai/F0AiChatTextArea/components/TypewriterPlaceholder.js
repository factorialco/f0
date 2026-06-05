import { jsx as m, jsxs as P } from "react/jsx-runtime";
import { useState as x, useRef as h, useEffect as b } from "react";
import { useReducedMotion as S } from "../../../../lib/a11y.js";
import { cn as I } from "../../../../lib/utils.js";
import { AnimatePresence as j } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as k } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const z = ({
  placeholders: o,
  defaultPlaceholder: y,
  inputValue: u,
  inProgress: d
}) => {
  const s = S(), [w, l] = x(""), [a, v] = x(0), [T, f] = x(!1), r = h(null), e = h(null), t = h(null), c = o[a] ?? y;
  return b(() => {
    const i = () => {
      e.current && (clearInterval(e.current), e.current = null), t.current && (clearInterval(t.current), t.current = null), r.current && (clearTimeout(r.current), r.current = null);
    };
    if (u.length > 0 || d) {
      f(!1), l(""), i();
      return;
    }
    if (s)
      return f(!1), l(c), i(), r.current = setTimeout(() => {
        const p = (a + 1) % Math.max(o.length, 1);
        v(p);
      }, 4e3), () => {
        i();
      };
    f(!0), l("");
    let n = 0;
    const g = 50, R = 30, M = 2e3, N = 1e3;
    return e.current = setInterval(() => {
      n < c.length ? (l(c.slice(0, n + 1)), n++) : (e.current && (clearInterval(e.current), e.current = null), r.current = setTimeout(() => {
        t.current = setInterval(() => {
          n > 0 ? (n--, l(c.slice(0, n))) : (t.current && (clearInterval(t.current), t.current = null), r.current = setTimeout(() => {
            const p = (a + 1) % Math.max(o.length, 1);
            v(p);
          }, N));
        }, R);
      }, M));
    }, g), () => {
      i();
    };
  }, [
    u,
    d,
    c,
    a,
    o.length,
    s
  ]), u.length > 0 || d ? null : /* @__PURE__ */ m(j, { children: /* @__PURE__ */ m(
    k.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: s ? 0 : 0.4 },
      className: I(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ P(
        "div",
        {
          className: I(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          ),
          children: [
            w,
            T && !s && /* @__PURE__ */ m("span", { className: "f0-chat-cursor-blink", children: "|" })
          ]
        }
      )
    }
  ) });
};
export {
  z as TypewriterPlaceholder
};
