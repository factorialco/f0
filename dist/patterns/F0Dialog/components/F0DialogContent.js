import { jsxs as i, jsx as r } from "react/jsx-runtime";
import { useRef as g, useState as l, useCallback as x, useEffect as y } from "react";
import { LayoutProvider as w } from "../../../layouts/LayoutProvider.js";
import { cn as c } from "../../../lib/utils.js";
import { ScrollArea as A, ScrollBar as S } from "../../../ui/scrollarea.js";
import { useF0Dialog as k } from "./F0DialogProvider.js";
import { AnimatePresence as N } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as _ } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const a = ({ position: s }) => /* @__PURE__ */ r(
  _.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: c(
      "pointer-events-none absolute inset-x-0 z-10 h-4",
      s === "top" ? [
        "top-0",
        "bg-gradient-to-b from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "bg-gradient-to-t from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
), D = ({
  children: s,
  disableContentPadding: f = !1
}) => {
  const { position: d } = k(), n = g(null), [m, p] = l(!0), [u, v] = l(!0), e = x(() => {
    const t = n.current;
    if (!t) return;
    const { scrollTop: o, scrollHeight: b, clientHeight: h } = t;
    p(o <= 0), v(o + h >= b - 1);
  }, []);
  return y(() => {
    const t = n.current;
    if (!t) return;
    t.addEventListener("scroll", e, { passive: !0 }), e();
    const o = new ResizeObserver(() => e());
    return o.observe(t), () => {
      t.removeEventListener("scroll", e), o.disconnect();
    };
  }, [e]), /* @__PURE__ */ i("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ i(
      A,
      {
        viewportRef: n,
        className: c(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          !f && "px-4 [&>div]:py-4",
          d === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"
        ),
        children: [
          /* @__PURE__ */ r(w, { layout: null, children: s }),
          /* @__PURE__ */ r(
            S,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i(N, { children: [
      !m && /* @__PURE__ */ r(a, { position: "top" }, "shadow-top"),
      !u && /* @__PURE__ */ r(a, { position: "bottom" }, "shadow-bottom")
    ] })
  ] });
};
export {
  D as F0DialogContent
};
