import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { isValidElement as v, cloneElement as w } from "react";
import { useIntersectionObserver as c } from "../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { withDataTestId as y } from "../../../lib/data-testid/index.js";
import { ScrollArea as N } from "../../../ui/scrollarea.js";
import { useReducedMotion as S } from "../../../lib/a11y.js";
import { cn as s } from "../../../lib/utils.js";
import { useSidebar as R } from "../../ApplicationFrame/FrameProvider.js";
import { motion as m } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { AnimatePresence as A } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { useI18n as E } from "../../../lib/providers/i18n/i18n-provider.js";
const f = ({ position: n }) => /* @__PURE__ */ t(
  m.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: s(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      n === "top" ? [
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
);
function I({
  header: n,
  body: d,
  footer: r,
  onFooterDropdownClick: l
}) {
  const { sidebarState: e, isSmallScreen: o } = R(), a = S(), [p, b] = c({ threshold: 1 }), [u, h] = c({ threshold: 1 }), x = E(), g = {
    x: {
      ease: e !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: a ? 0 : e !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: a ? 0 : 0.1 },
    left: { duration: a ? 0 : 0.1 },
    default: { duration: a ? 0 : 0.2 }
  }, k = () => r ? v(r) && l ? w(
    r,
    {
      onDropdownClick: l
    }
  ) : r : null;
  return /* @__PURE__ */ i(
    m.aside,
    {
      initial: !1,
      "aria-label": x.navigation.sidebar.label,
      className: s(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        e === "locked" ? "h-full" : s(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          o ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: e === "locked" || o ? 0 : "8px",
        borderRadius: e === "locked" || o ? "0" : "12px",
        left: e === "locked" ? "0" : o ? 0 : "8px",
        x: e === "hidden" ? -260 : 0,
        opacity: e === "hidden" ? o ? 0.7 : 0 : 1,
        pointerEvents: e === "hidden" ? "none" : "auto"
      },
      transition: g,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: n }),
        d && /* @__PURE__ */ i("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ i(N, { className: "h-full", children: [
            /* @__PURE__ */ t(
              "div",
              {
                ref: p,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ t("div", { className: "w-[var(--ds-sidebar-width)]", children: d }),
            /* @__PURE__ */ t(
              "div",
              {
                ref: u,
                className: "h-px",
                "aria-hidden": "true"
              },
              "bottom-ref"
            )
          ] }),
          /* @__PURE__ */ i(A, { children: [
            !b && /* @__PURE__ */ t(f, { position: "top" }, "shadow-scroll-top"),
            !h && /* @__PURE__ */ t(f, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: k() })
      ]
    }
  );
}
const C = y(I);
export {
  C as Sidebar
};
