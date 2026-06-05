import { jsx as t, jsxs as u, Fragment as V } from "react/jsx-runtime";
import { forwardRef as q, useRef as D, useState as E, useEffect as k, useImperativeHandle as J, useMemo as C, useCallback as K, Fragment as W } from "react";
import { F0Icon as _ } from "../F0Icon/index.js";
import { MobileDropdown as Q, Dropdown as X } from "../../experimental/Navigation/Dropdown/index.js";
import Y from "../../icons/animated/CheckCircle.js";
import Z from "../../icons/app/AlertCircle.js";
import ee from "../../icons/app/AlertCircleLine.js";
import "../../icons/app/Menu.js";
import { withDataTestId as re } from "../../lib/data-testid/index.js";
import { cn as g } from "../../lib/utils.js";
import { Spinner as te } from "../../ui/Spinner/index.js";
import { AnimatePresence as ie } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as oe } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0ButtonDropdown as M } from "../F0ButtonDropdown/F0ButtonDropdown.js";
import { F0Button as A } from "../F0Button/F0Button.js";
function ne(i) {
  return "items" in i;
}
const le = (i) => Array.isArray(i) ? i.every((c) => ne(c)) ? i : [
  {
    items: i
  }
] : [i], Ae = [
  "idle",
  "loading",
  "success",
  "error"
], a = "f0-action-bar-error-navigate", v = "f0-action-bar-wiggle", j = 600, ce = ({
  status: i,
  isLight: c
}) => i === "loading" ? /* @__PURE__ */ t(
  te,
  {
    size: "small",
    className: g(!c && "text-f1-foreground-inverse")
  }
) : i === "success" ? /* @__PURE__ */ t(
  Y,
  {
    animate: "animate",
    className: "h-5 w-5 text-f1-icon-positive"
  }
) : i === "error" ? /* @__PURE__ */ t(
  _,
  {
    icon: Z,
    size: "md",
    color: c ? "critical" : "inverse"
  }
) : /* @__PURE__ */ t(
  _,
  {
    icon: ee,
    size: "md",
    color: c ? "currentColor" : "inverse"
  }
), G = q(
  ({
    isOpen: i,
    secondaryActions: c = [],
    label: x,
    variant: N = "dark",
    leftContent: H,
    status: l = "idle",
    ...B
  }, O) => {
    const b = D(null), o = D(null), [m, P] = E(null);
    k(() => {
      const e = document.getElementById("content");
      if (!e) return;
      const r = () => {
        const T = e.getBoundingClientRect(), z = T.left, L = T.width;
        P((w) => w && w.left === z && w.width === L ? w : { left: z, width: L });
      };
      r();
      const h = new ResizeObserver(r);
      return h.observe(e), () => h.disconnect();
    }, []), k(() => () => {
      o.current && clearTimeout(o.current);
    }, []), J(O, () => ({
      wiggle(e) {
        const r = b.current;
        if (!r) return;
        const h = e?.errorHighlight ? a : v;
        o.current && clearTimeout(o.current), r.classList.remove(a, v), r.offsetWidth, r.classList.add(h), o.current = setTimeout(() => {
          r.classList.remove(a, v), o.current = null;
        }, j);
      }
    }));
    const [$, y] = E(!1);
    k(() => {
      if (l === "error") {
        const e = b.current;
        if (!e) return;
        o.current && clearTimeout(o.current), y(!1), e.classList.remove(a), e.offsetWidth, e.classList.add(a), o.current = setTimeout(() => {
          e.classList.remove(a), o.current = null, y(!0);
        }, j);
      } else
        y(!1), o.current && (clearTimeout(o.current), o.current = null), b.current?.classList.remove(
          a,
          v
        );
    }, [l]);
    const U = c.slice(0, 2), F = c.slice(2).map((e) => ({
      ...e,
      critical: e.critical || !1
    })), d = N === "light", f = l === "loading" || l === "success", s = C(
      () => le(B.primaryActions ?? []),
      [B.primaryActions]
    ), p = s.some(
      (e) => e.items.some((r) => r.loading)
    ), R = C(() => s.map((e) => ({
      ...e,
      items: e.items.map((r) => ({
        value: r.label,
        label: r.label,
        icon: r.icon,
        critical: r.critical,
        description: r.description,
        disabled: r.disabled
      }))
    })), [s]), n = C(() => s.length === 1 && s[0].items.length === 1 ? s[0].items[0] : null, [s]), I = K(
      (e) => s.flatMap((r) => r.items).find((r) => r.label === e),
      [s]
    ), S = d ? "" : "dark";
    return /* @__PURE__ */ t(ie, { children: i && /* @__PURE__ */ u(
      oe.div,
      {
        ref: b,
        "data-variant": N,
        initial: { opacity: 0, y: 32, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: 32, filter: "blur(6px)" },
        transition: { ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 },
        style: m ? {
          left: m.left,
          right: window.innerWidth - m.left - m.width
        } : void 0,
        className: g(
          "fixed bottom-2 left-2 right-2 z-50 flex h-fit flex-col items-center gap-2 rounded-xl p-2 shadow-lg backdrop-blur-sm sm:bottom-5 sm:h-12 sm:w-max sm:flex-row sm:gap-5 sm:justify-between",
          m ? "sm:left-auto sm:right-auto sm:mx-auto" : "sm:left-2 sm:right-2 sm:mx-auto",
          d ? "border border-solid bg-f1-background text-f1-foreground" : "bg-f1-background-inverse text-f1-foreground dark:bg-f1-background-tertiary",
          d && $ ? "border-f1-border-critical-bold bg-f1-background-critical/10" : d ? "border-f1-border-secondary" : ""
        ),
        children: [
          H,
          (!!x || l && l !== "idle") && /* @__PURE__ */ u("div", { className: "ml-2 flex items-center gap-2", children: [
            l && l !== "idle" && /* @__PURE__ */ t(ce, { status: l, isLight: d }),
            !!x && /* @__PURE__ */ t(
              "span",
              {
                className: g(
                  "font-medium",
                  d ? "text-f1-foreground" : "text-f1-foreground-inverse"
                ),
                children: x
              }
            )
          ] }),
          /* @__PURE__ */ u("div", { children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: g(
                  S,
                  "flex flex-col items-center gap-2 sm:hidden [&_button]:w-full [&_div]:w-full"
                ),
                children: /* @__PURE__ */ u(W, { children: [
                  /* @__PURE__ */ t(Q, { items: c }),
                  n ? /* @__PURE__ */ t(
                    A,
                    {
                      label: n.label,
                      icon: n.icon,
                      onClick: n.onClick,
                      disabled: f || n.disabled,
                      loading: n.loading ?? l === "loading",
                      size: "lg"
                    }
                  ) : /* @__PURE__ */ t(
                    M,
                    {
                      items: R,
                      onClick: (e) => {
                        I(e)?.onClick?.();
                      },
                      size: "lg",
                      disabled: f || p,
                      loading: p
                    }
                  )
                ] }, "mobile-actions")
              }
            ),
            /* @__PURE__ */ t(
              "div",
              {
                className: g(
                  S,
                  "hidden items-center gap-2 sm:flex"
                ),
                children: /* @__PURE__ */ u(W, { children: [
                  F.length > 0 && /* @__PURE__ */ t(X, { items: F }),
                  U.slice().reverse().map((e) => /* @__PURE__ */ t(
                    A,
                    {
                      variant: e.critical ? "critical" : "outline",
                      label: e.label,
                      icon: e.icon,
                      onClick: e.onClick,
                      disabled: f || e.disabled
                    },
                    e.label
                  )),
                  n ? /* @__PURE__ */ t(
                    A,
                    {
                      label: n.label,
                      icon: n.icon,
                      onClick: n.onClick,
                      disabled: f || n.disabled,
                      loading: n.loading ?? l === "loading"
                    }
                  ) : /* @__PURE__ */ t(V, { children: /* @__PURE__ */ t(
                    M,
                    {
                      items: R,
                      onClick: (e) => {
                        I(e)?.onClick?.();
                      },
                      disabled: f || p,
                      loading: p
                    }
                  ) })
                ] }, "desktop-actions")
              }
            )
          ] })
        ]
      }
    ) });
  }
);
G.displayName = "F0ActionBar";
const Ne = re(G);
export {
  Ne as F0ActionBar,
  Ae as actionBarStatuses
};
