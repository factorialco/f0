import { jsx as t, jsxs as p, Fragment as ie } from "react/jsx-runtime";
import { af as Ot, ag as Kt, ah as kt, h as N, m as j, r as Yt, u as X, T as ur, d as fr, e as hr, ai as Ie, f as pr, aj as Ae, ak as Ma, al as ja, am as mr, t as Q, O as Ce, an as gr, w as $e, j as Fe, ao as Ft, Q as Qt, E as ce, ap as br, aq as en, ar as Te, as as vr, at as je, x as yr, S as he, U as Ba, au as Va, av as xr, s as tn, z as kn, aw as Ha, ax as Wa, ay as Ga, az as In, k as Ua, aA as Ka, aB as Ja, l as qa, n as Xa, o as Za, q as Ya, aC as Qa, aD as ei, aE as ti } from "./index-DyAxXmVo.js";
import St, { useContext as Ue, createContext as Ke, useState as I, useCallback as K, useMemo as T, useEffect as W, forwardRef as Re, useId as wr, useRef as z, Fragment as gt, useLayoutEffect as We, useTransition as ni, isValidElement as ri, cloneElement as ai, createElement as An } from "react";
import { R as ii, T as si, v as li, w as oi, x as ci, y as di, z as ui, A as fi, S as Cr, p as nn, t as Nr, a as hi, u as pi, M as Sr, L as rn, D as mi, B as gi, F as bi, k as kr, E as Ir, j as Ar, G as an, H as sn, I as ln, J as on, K as cn, N as Rr, P as It, Q as vi, U as yi, V as xi, W as wi, X as dn, Y as Rn, Z as Dr, _ as Ci, $ as Ni, a0 as Or, a1 as Si, a2 as vt, a3 as Fr, a4 as ki, a5 as Tr, a6 as Dn, a7 as Ii, a8 as Lr, a9 as Pr, aa as Er, ab as $r, ac as Ai, ad as Ri, ae as un, af as zr, ag as Di, ah as Oi, ai as On, aj as Fi, ak as nt, al as Ti, am as Li, an as _r, ao as Pi, ap as Ei, aq as fn, ar as $i, as as Mr, at as zi, au as Jt, av as _i, aw as Mi, ax as ji, ay as hn, az as jr, aA as Br, aB as Vr, aC as ht, aD as Bi, aE as Vi, aF as rt, aG as Hi, aH as Wi, O as Gi, q as Ui, aI as Fn, aJ as Ki, aK as Ji, aL as qi, aM as Xi, aN as Zi, aO as Tt, aP as pn, aQ as mn, aR as Hr, aS as Yi, aT as Qi, aU as es, aV as At, aW as ts, aX as dt, aY as ns, aZ as rs, a_ as as, a$ as He, b0 as Ee, b1 as is, b2 as ss, b3 as Tn, b4 as ls, b5 as Ve, b6 as Rt, b7 as os, b8 as cs, b9 as ds, ba as us, bb as fs, bc as hs, bd as ps, be as ms, bf as gs, bg as Ln, bh as bs, bi as vs, bj as qt, bk as Pn, bl as ys, bm as xs, bn as ws, bo as Cs, bp as Ns, bq as Ss, br as ks, bs as Is, bt as As, bu as Rs, bv as Ds, bw as Os, bx as Wr, by as Fs, bz as Ts, bA as Ls, bB as Ps } from "./F0AiChat-CL30fYVh.js";
import { A as Es, C as $s, W as zs, a as _s, b as Ms, c as js, d as Bs, e as Vs, P as Hs } from "./presets-BRy0Mx4C.js";
const En = "one_sidebar_locked", Gr = Ke(void 0);
function it() {
  const e = Ue(Gr);
  return e === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : e;
}
function Ws({ children: e }) {
  const { currentPath: n } = Ot(), [r, a] = I(!1), [i, s] = I(!1), l = r ? kt.xl : kt.md, o = Kt(`(max-width: ${l}px)`, {
    initializeWithValue: !0
  }), [c, u] = I(() => {
    const C = localStorage.getItem(En);
    return C !== null ? !!C : !0;
  }), [d, h] = I(!1), [f, v] = I(
    null
  ), m = K(
    ({ isInvokedByUser: C } = {
      isInvokedByUser: !0
    }) => {
      s(C ?? !0), o && h(!d), u(!c);
    },
    [o, d, c, u, h]
  ), g = K(
    (C) => {
      o || (C.clientX < 32 && h(!0), C.clientX > 280 && h(!1));
    },
    [o, h]
  ), y = T(() => o ? d ? "unlocked" : "hidden" : !c && !d ? "hidden" : !c && d ? "unlocked" : "locked", [o, d, c]);
  return W(() => {
    h(!1);
  }, [n]), W(() => {
    i && localStorage.setItem(En, c ? "1" : "");
  }, [c, i]), W(() => () => {
    v(y);
  }, [y]), /* @__PURE__ */ t(
    Gr.Provider,
    {
      value: {
        isSmallScreen: o,
        isLastToggleInvokedByUser: i,
        sidebarState: y,
        toggleSidebar: m,
        prevSidebarState: f,
        setForceFloat: a
      },
      children: /* @__PURE__ */ t("div", { onPointerMove: g, className: "h-screen w-screen", children: e })
    }
  );
}
const Gs = Yt({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), $n = [
  {
    id: "bottom",
    delay: 2.6,
    transformOrigin: "center 89%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
  },
  {
    id: "left",
    delay: 2.2,
    transformOrigin: "11% center",
    rotateAxis: "0, 1, 0",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
  },
  {
    id: "right",
    delay: 2.4,
    transformOrigin: "88.5% center",
    rotateAxis: "0, 1, 0",
    path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
  },
  {
    id: "top",
    delay: 2,
    transformOrigin: "center 11%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
  }
], Us = ({
  spin: e = !1,
  size: n = "md",
  background: r,
  hover: a = !1,
  ...i
}, s) => {
  const l = wr(), {
    onAnimationStart: o,
    onAnimationEnd: c,
    onDragStart: u,
    onDragEnd: d,
    onDrag: h,
    className: f,
    ...v
  } = i;
  return /* @__PURE__ */ t(
    "div",
    {
      className: N(Gs({ size: n }), f),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ p(
        j.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: s,
          animate: {
            "--gradient-angle": ["0deg", "360deg"]
          },
          transition: r ? void 0 : {
            "--gradient-angle": {
              duration: 6,
              ease: "linear",
              repeat: 1 / 0
            }
          },
          style: {
            "--gradient-angle": "0deg",
            ...v.style
          },
          ...(({ style: m, ...g }) => g)(v),
          children: [
            /* @__PURE__ */ p("defs", { children: [
              /* @__PURE__ */ t("clipPath", { id: `${l}-circle`, children: /* @__PURE__ */ t("circle", { cx: "16", cy: "16", r: "16" }) }),
              $n.map((m) => /* @__PURE__ */ t("clipPath", { id: `${l}-${m.id}`, children: /* @__PURE__ */ t("path", { d: m.path }) }, m.id))
            ] }),
            /* @__PURE__ */ t("g", { clipPath: `url(#${l}-circle)`, children: $n.map((m) => /* @__PURE__ */ t(
              j.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${l}-${m.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": a ? 8 : 1,
                  "--rotate": a ? "90deg" : "0deg",
                  opacity: a ? m.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? m.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.99, 0.9999, 1]
                  },
                  "--scale": {
                    duration: a ? 0.6 : 0.35,
                    ease: [0.55, 0, 0.1, 1]
                  },
                  "--rotate": {
                    duration: 0.35,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: a ? 0.8 : 0.1,
                    ease: "easeInOut"
                  },
                  filter: {
                    delay: e ? m.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${m.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: m.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ t(
                  "div",
                  {
                    style: {
                      width: "100%",
                      height: "100%",
                      background: r ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
                    }
                  }
                )
              },
              m.id
            )) })
          ]
        }
      )
    }
  );
}, Ur = Re(Us), Kr = Ke(null), Ks = 15, Js = ({ children: e, enabled: n, onShow: r, ...a }) => {
  const [i, s] = I(n), [l, o] = I(!1), [c, u] = I(!0), [d, h] = I(
    Ks
  ), f = z(null), v = (g) => {
    f.current = g;
  }, m = () => {
    f.current && f.current();
  };
  return W(() => {
    s(n);
  }, [n]), W(() => {
    if (l && r?.(), !l) {
      const g = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      u(!g);
    }
  }, [l, r]), /* @__PURE__ */ t(
    Kr.Provider,
    {
      value: {
        ...a,
        enabled: i,
        setEnabled: s,
        open: l,
        setOpen: o,
        shouldPlayEntranceAnimation: c,
        setShouldPlayEntranceAnimation: u,
        setAutoClearMinutes: h,
        autoClearMinutes: i ? d : null,
        clear: m,
        setClearFunction: v
      },
      children: e
    }
  );
}, Ze = () => {
};
function Lt() {
  const e = Ue(Kr);
  return e === null ? {
    enabled: !1,
    setEnabled: Ze,
    open: !1,
    setOpen: Ze,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Ze,
    setAutoClearMinutes: Ze,
    clear: Ze,
    setClearFunction: Ze,
    autoClearMinutes: null
  } : e;
}
const Jr = ({
  className: e,
  disabled: n
}) => {
  const { enabled: r, setOpen: a, open: i } = Lt(), s = X(), [l, o] = I(!1);
  return r ? /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(ur, { children: /* @__PURE__ */ p(fr, { delayDuration: 850, disableHoverableContent: !0, children: [
    /* @__PURE__ */ t(hr, { asChild: !0, children: /* @__PURE__ */ t(
      j.div,
      {
        animate: {
          "--gradient-angle": ["0deg", "360deg"]
        },
        transition: {
          default: {
            duration: 8,
            ease: "linear",
            repeat: 1 / 0
          }
        },
        style: {
          "--gradient-angle": "180deg"
        },
        children: /* @__PURE__ */ t(
          ii,
          {
            onCheckedChange: (c) => {
              a(c);
            },
            checked: i,
            "aria-label": i ? s.ai.closeChat : s.ai.openChat,
            className: N(
              "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover",
              "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
              "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
              "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
              n && "cursor-not-allowed opacity-50",
              Ie(),
              e
            ),
            disabled: n,
            onMouseEnter: () => o(!0),
            onMouseLeave: () => o(!1),
            children: /* @__PURE__ */ t(
              si,
              {
                className: N(
                  "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                ),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                  Ur,
                  {
                    size: "sm",
                    background: i ? "white" : void 0,
                    hover: l
                  }
                ) })
              }
            )
          }
        )
      }
    ) }),
    !i && /* @__PURE__ */ t(pr, { side: "left", className: "font-medium", children: s.ai.welcome })
  ] }) }) }) : null;
}, qs = {
  superNegative: ui,
  negative: di,
  neutral: ci,
  positive: oi,
  superPositive: li
}, Xs = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, qr = ({
  firstName: e,
  lastName: n,
  src: r,
  "aria-label": a,
  "aria-labelledby": i,
  pulse: s,
  onPulseClick: l
}) => {
  const o = X(), [c, u] = I(!s);
  return /* @__PURE__ */ t("div", { className: "relative h-10 w-10", children: /* @__PURE__ */ t(Ae, { mode: "popLayout", initial: !!c, children: c ? /* @__PURE__ */ t(
    j.div,
    {
      className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: /* @__PURE__ */ t(
        j.div,
        {
          initial: { opacity: 0, originX: 0.6, originY: 0.6 },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: { opacity: 0, scale: 0 },
          transition: {
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.4, ease: "easeOut" },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => u(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: /* @__PURE__ */ t(Ma, { emoji: "👋", size: "md" })
        },
        "wave"
      )
    }
  ) : /* @__PURE__ */ p(
    j.div,
    {
      initial: { opacity: 0, scale: 0.5 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.5 },
      className: "relative h-10 w-10",
      transition: {
        scale: {
          type: "spring",
          stiffness: 290,
          damping: 15.1,
          mass: 1.4
        },
        opacity: {
          type: "linear",
          duration: 0.2
        }
      },
      children: [
        /* @__PURE__ */ t(
          ja,
          {
            type: "rounded",
            name: [e, n],
            src: r,
            size: "lg",
            color: "random",
            "aria-label": a,
            "aria-labelledby": i
          }
        ),
        s ? /* @__PURE__ */ t("div", { className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background", children: /* @__PURE__ */ t(
          mr,
          {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (d) => {
              d.preventDefault(), d.stopPropagation(), l();
            },
            "aria-label": o.actions.edit,
            children: /* @__PURE__ */ t(
              Q,
              {
                icon: qs[s],
                color: Xs[s],
                size: "sm"
              }
            )
          }
        ) }) : /* @__PURE__ */ t(
          j.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.5 },
            transition: {
              opacity: { delay: 0.25 },
              scale: { delay: 0.25 }
            },
            className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
            children: /* @__PURE__ */ t(
              Ce,
              {
                compact: !0,
                label: o.actions.add,
                variant: "neutral",
                size: "sm",
                icon: fi,
                onClick: (d) => {
                  d.preventDefault(), d.stopPropagation(), l();
                },
                hideLabel: !0
              }
            )
          },
          "reaction-button"
        )
      ]
    },
    "avatar"
  ) }) });
};
qr.displayName = "PulseAvatar";
const Zs = () => {
  const e = X();
  return /* @__PURE__ */ p(
    j.div,
    {
      className: N(
        "relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "after:transition-all after:delay-200 after:duration-300",
        "before:bg-white before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:content-['']"
      ),
      animate: {
        "--gradient-angle": ["0deg", "360deg"]
      },
      transition: {
        default: {
          duration: 6,
          ease: "linear",
          repeat: 1 / 0
        }
      },
      style: {
        "--gradient-angle": "180deg"
      },
      children: [
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 grid-rows-1", children: /* @__PURE__ */ t(
          "textarea",
          {
            disabled: !0,
            name: "one-ai-input",
            placeholder: e.ai.inputPlaceholder,
            className: N(
              "col-start-1 row-start-1",
              "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all",
              "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary",
              "cursor-not-allowed opacity-60"
            )
          }
        ) }),
        /* @__PURE__ */ t("div", { className: "flex flex-row-reverse p-3 pt-0", children: /* @__PURE__ */ t(
          Ce,
          {
            type: "button",
            disabled: !0,
            variant: "neutral",
            label: e.ai.sendMessage,
            icon: gr,
            hideLabel: !0
          }
        ) })
      ]
    }
  );
}, Ys = ({
  autoClearMinutes: e,
  reset: n,
  isOpen: r
}) => {
  const a = z(null);
  W(() => (r ? a.current && (clearTimeout(a.current), a.current = null) : e !== null && (a.current = setTimeout(
    () => {
    },
    e * 60 * 1e3
  )), () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }), [n, r, e]);
}, Qs = ({ children: e }) => {
  const {
    open: n,
    shouldPlayEntranceAnimation: r,
    setShouldPlayEntranceAnimation: a,
    autoClearMinutes: i
  } = Lt();
  return Ys({
    reset: () => {
    },
    isOpen: n,
    autoClearMinutes: i
  }), /* @__PURE__ */ t(Ae, { children: n && /* @__PURE__ */ t(
    j.div,
    {
      "aria-hidden": !n,
      className: "relative p-1 pl-1.5 w-[360px] flex h-full flex-col overflow-hidden ",
      initial: r ? { opacity: 0, width: 0 } : !1,
      animate: { opacity: 1, width: 360 },
      exit: { opacity: 0, width: 0 },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        r && a(!1);
      },
      children: /* @__PURE__ */ t("div", { className: "border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl h-full w-full", children: /* @__PURE__ */ t(
        j.div,
        {
          className: "relative flex h-full w-full flex-col overflow-x-hidden ",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: {
            duration: r ? 0.3 : 0.05,
            ease: "easeOut",
            delay: r ? 0.2 : 0
          },
          children: e
        }
      ) })
    },
    "chat-window"
  ) });
}, el = ({ action: e, onClose: n }) => {
  const r = () => {
    e.onClick(), n();
  };
  switch (e.buttonType) {
    case "gradient":
      return /* @__PURE__ */ t(
        "button",
        {
          style: {
            color: "white",
            background: "linear-gradient(270deg, rgba(161, 173, 229, 0.7) 0%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 100%)",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          onMouseEnter: (a) => {
            a.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (a) => {
            a.currentTarget.style.opacity = "1";
          },
          onClick: r,
          children: e.isLoading ? /* @__PURE__ */ t(Cr, { size: "small" }) : e.label
        }
      );
    case "internal":
      return /* @__PURE__ */ t(
        Ce,
        {
          label: e.label || "",
          onClick: r,
          variant: e.buttonVariant,
          icon: e.icon
        }
      );
  }
}, tl = ({
  enabled: e = !1,
  greeting: n,
  title: r,
  description: a,
  benefits: i,
  actions: s,
  onShow: l,
  onHide: o,
  children: c
}) => /* @__PURE__ */ t(
  Js,
  {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: s,
    onShow: l,
    onHide: o,
    children: c
  }
), nl = () => {
  const {
    enabled: e,
    greeting: n,
    title: r,
    description: a,
    benefits: i,
    actions: s,
    setOpen: l,
    onHide: o
  } = Lt(), c = () => {
    l(!1), o?.();
  };
  return e ? /* @__PURE__ */ p(Qs, { clickOutsideToClose: !0, hitEscapeToClose: !0, shortcut: "", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center justify-end p-3 pb-0", children: /* @__PURE__ */ t(
      Ce,
      {
        variant: "ghost",
        hideLabel: !0,
        label: "",
        icon: nn,
        onClick: c
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "flex-1 content-center overflow-y-auto", children: /* @__PURE__ */ p("div", { className: "flex flex-col gap-4 p-6 pt-3", children: [
      /* @__PURE__ */ p("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ t(Ur, { spin: !0, size: "lg" }),
        /* @__PURE__ */ p("div", { children: [
          /* @__PURE__ */ t("p", { className: "text-lg font-medium text-f1-foreground-secondary", children: n }),
          /* @__PURE__ */ t("h1", { className: "text-2xl font-semibold text-f1-foreground", children: r })
        ] })
      ] }),
      a && /* @__PURE__ */ t("p", { className: "text-md text-f1-foreground-secondary", children: a }),
      i?.length && /* @__PURE__ */ t("ul", { className: "flex flex-col gap-2", children: i.map((u, d) => /* @__PURE__ */ p("li", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ t(Nr, { className: "h-5 w-5 flex-shrink-0" }),
        /* @__PURE__ */ p("span", { className: "text-md text-f1-foreground", children: [
          u.noBoldText,
          " ",
          /* @__PURE__ */ t("strong", { children: u.boldText })
        ] })
      ] }, d)) }),
      s?.length && /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-2", children: s.map((u, d) => /* @__PURE__ */ t(
        el,
        {
          action: u,
          onClose: () => l(!1)
        },
        d
      )) })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "m-3 mt-2 flex-shrink-0", children: /* @__PURE__ */ t(Zs, {}) })
  ] }) : null;
}, rl = $e(
  Fe("AiPromotionChat", nl)
), al = $e(
  Fe("AiPromotionChatProvider", tl)
), il = { duration: 0.3, ease: [0, 0, 0.1, 1] };
function sl({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  return /* @__PURE__ */ t(Ws, { children: /* @__PURE__ */ t(
    ll,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
function ll({
  children: e,
  sidebar: n,
  banner: r,
  ai: a,
  aiPromotion: i
}) {
  const s = a?.enabled ? hi : i?.enabled ? al : gt, l = a?.enabled ? a : i?.enabled ? i : void 0;
  return /* @__PURE__ */ t(s, { ...l, children: /* @__PURE__ */ t(
    ul,
    {
      ai: a,
      aiPromotion: i,
      sidebar: n,
      banner: r,
      children: e
    }
  ) });
}
const dd = Fe(
  "ApplicationFrame",
  sl
), ol = ({ contentId: e }) => {
  const n = X();
  return /* @__PURE__ */ t(
    "a",
    {
      href: `#${e}`,
      className: Ie(
        "absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
      ),
      children: n.actions.skipToContent
    }
  );
};
function cl(e, n, r) {
  return !n && e ? r === "hidden" : n && !e ? r !== "hidden" : !1;
}
function dl(e, n) {
  const { sidebarState: r, toggleSidebar: a } = it(), i = z(e);
  W(() => {
    n && cl(
      e,
      i.current,
      r
    ) && a({ isInvokedByUser: !1 }), i.current = e;
  }, [e, n, r, a]);
}
function ul({
  ai: e,
  aiPromotion: n,
  children: r,
  sidebar: a,
  banner: i
}) {
  const { sidebarState: s, toggleSidebar: l, isSmallScreen: o, setForceFloat: c } = it(), u = Ft(), {
    open: d,
    visualizationMode: h,
    canvasContent: f,
    chatWidth: v,
    resizable: m
  } = pi(), g = h === "fullscreen", y = h === "canvas", { open: C } = Lt(), b = m ? v : mi, x = z(g), S = g && !x.current, A = !g && x.current, [
    D,
    F
  ] = I(!1);
  W(() => {
    !g && x.current && F(!0), x.current = g;
  }, [g]);
  const $ = g || D || A, L = T(() => S ? { duration: 0.15, ease: "easeOut" } : A ? { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }, [S, A]), V = Kt(
    `(max-width: ${kt.xl}px)`,
    { initializeWithValue: !0 }
  ), M = Kt(`(max-width: ${kt.md}px)`, {
    initializeWithValue: !0
  });
  return W(() => {
    c(d);
  }, [d, c]), W(() => {
    c(C);
  }, [C, c]), dl(d, V), /* @__PURE__ */ t(
    Sr,
    {
      reducedMotion: u ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: u ? 0 : 0.2
      },
      children: /* @__PURE__ */ p("div", { className: "scrollbar-macos grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)]", children: [
        /* @__PURE__ */ t("div", { className: "col-[1/-1]", children: i }),
        /* @__PURE__ */ t(rn, { id: "ai-chat-group", children: /* @__PURE__ */ p("div", { className: "relative isolate flex h-full", children: [
          /* @__PURE__ */ t(Ae, { children: s === "unlocked" && /* @__PURE__ */ t(
            j.nav,
            {
              className: N(
                "fixed inset-0 z-20 bg-f1-background-inverse",
                !o && "hidden"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 0.1 },
              exit: { opacity: 0 },
              transition: { duration: u ? 0 : 0.2 },
              onClick: () => l()
            }
          ) }),
          /* @__PURE__ */ p(
            "div",
            {
              className: N(
                s !== "locked" ? "z-30" : "z-0",
                !u && "transition-all",
                s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"
              ),
              ref: (w) => {
                s === "hidden" ? w?.setAttribute("inert", "") : w?.removeAttribute("inert");
              },
              children: [
                /* @__PURE__ */ t(ol, { contentId: "content" }),
                a
              ]
            }
          ),
          /* @__PURE__ */ p(
            j.div,
            {
              className: "relative min-w-0 flex-1",
              animate: {
                paddingRight: d && !M ? b : 0
              },
              transition: { paddingRight: il },
              children: [
                /* @__PURE__ */ t(
                  j.main,
                  {
                    id: "content",
                    layoutId: "main",
                    className: N(
                      "relative z-10 flex h-full max-w-full flex-1 xs:py-1",
                      $ ? "overflow-hidden" : "overflow-auto",
                      !d && !C && "xs:pr-1",
                      s === "locked" ? "pl-0" : "xs:pl-1"
                    ),
                    layoutDependency: s,
                    children: /* @__PURE__ */ t(
                      j.div,
                      {
                        className: N(
                          "flex max-w-full flex-1",
                          $ ? "overflow-hidden" : "overflow-auto"
                        ),
                        layout: "position",
                        children: r
                      }
                    )
                  }
                ),
                e?.enabled && y && f && /* @__PURE__ */ t(
                  "div",
                  {
                    className: N(
                      "pointer-events-none",
                      M ? "fixed inset-0 z-[50]" : "absolute bottom-0 left-0 top-0 z-[15]"
                    ),
                    style: M ? void 0 : { right: b },
                    children: /* @__PURE__ */ t(gi, {})
                  }
                ),
                e?.enabled && /* @__PURE__ */ t(
                  j.div,
                  {
                    className: N(
                      "pointer-events-none",
                      "[&_.copilotKitSidebarContentWrapper]:relative [&_.copilotKitSidebarContentWrapper]:h-full [&_.copilotKitSidebarContentWrapper]:w-full",
                      M ? "fixed inset-0 z-[30]" : N(
                        "absolute right-0 top-0 bottom-0",
                        $ ? "z-20" : "z-0",
                        s === "hidden" && $ ? "pl-1" : "pl-0"
                      )
                    ),
                    animate: {
                      width: M || g ? "100%" : b
                    },
                    transition: L,
                    onAnimationComplete: () => {
                      D && F(!1);
                    },
                    children: /* @__PURE__ */ t(bi, {})
                  }
                )
              ]
            }
          ),
          n?.enabled && /* @__PURE__ */ t(rl, {})
        ] }) })
      ] })
    }
  );
}
const ke = 28, zn = 16, fl = ({ children: e }) => {
  const n = z(null), [r, a] = I(!0), [i, s] = I(!1);
  We(() => {
    const d = n.current;
    if (!d) return;
    const h = new ResizeObserver(() => c());
    h.observe(d);
    const f = () => {
      c();
    };
    return d.addEventListener("scroll", f), c(), () => {
      h.disconnect(), d.removeEventListener("scroll", f);
    };
  }, []);
  function l() {
    const d = n.current;
    d && d.scrollBy({
      left: d.clientWidth,
      behavior: "smooth"
    });
  }
  function o() {
    const d = n.current;
    d && d.scrollBy({
      left: -d.clientWidth,
      behavior: "smooth"
    });
  }
  const c = () => {
    if (!n.current) return;
    const { scrollLeft: d, scrollWidth: h, clientWidth: f } = n.current;
    s(d > 0), a(d + f < h);
  };
  let u = "";
  return i && r ? u = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : i && !r ? u = `linear-gradient(to right, transparent 0px, transparent ${ke}px, black ${2 * ke}px, black 100%)` : !i && r ? u = `linear-gradient(to right, black 0px, black calc(100% - ${3 * ke}px), transparent calc(100% - ${2 * ke}px), transparent 100%)` : u = "none", /* @__PURE__ */ p("div", { className: "relative", children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${ke}px`,
          padding: `${ke}px`,
          height: `calc(100% + ${ke * 2}px)`,
          width: `calc(100% + ${ke * 2}px)`,
          maskImage: u,
          WebkitMaskImage: u,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(e) ? e.map((d, h) => /* @__PURE__ */ t(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ke + zn + "px"
            },
            children: d
          },
          h
        )) : e && /* @__PURE__ */ t(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: ke + zn + "px"
            },
            children: e
          }
        )
      }
    ),
    i && /* @__PURE__ */ t(
      Ce,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: N(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: o,
        icon: kr,
        label: "Previous",
        hideLabel: !0
      }
    ),
    r && /* @__PURE__ */ t(
      Ce,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: N(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: l,
        icon: Qt,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
}, hl = Yt({
  variants: {
    peek: { true: "", false: "" },
    default: {
      1: "basis-full",
      2: "basis-1/2",
      3: "basis-1/3",
      4: "basis-1/4",
      6: "basis-1/6",
      peek1: "basis-[85%]",
      peek2: "basis-[48%]",
      peek3: "basis-[32%]",
      peek4: "basis-[24%]",
      peek6: "basis-[16%]"
    },
    xs: {
      1: "@xl:basis-full",
      2: "@xl:basis-1/2",
      3: "@xl:basis-1/3",
      4: "@xl:basis-1/4",
      6: "@xl:basis-1/6",
      peek1: "@xl:basis-[85%]",
      peek2: "@xl:basis-[48%]",
      peek3: "@xl:basis-[32%]",
      peek4: "@xl:basis-[24%]",
      peek6: "@xl:basis-[16%]"
    },
    sm: {
      1: "@2xl:basis-full",
      2: "@2xl:basis-1/2",
      3: "@2xl:basis-1/3",
      4: "@2xl:basis-1/4",
      6: "@2xl:basis-1/6",
      peek1: "@2xl:basis-[85%]",
      peek2: "@2xl:basis-[48%]",
      peek3: "@2xl:basis-[32%]",
      peek4: "@2xl:basis-[24%]",
      peek6: "@2xl:basis-[16%]"
    },
    md: {
      1: "@3xl:basis-full",
      2: "@3xl:basis-1/2",
      3: "@3xl:basis-1/3",
      4: "@3xl:basis-1/4",
      6: "@3xl:basis-1/6",
      peek1: "@3xl:basis-[85%]",
      peek2: "@3xl:basis-[48%]",
      peek3: "@3xl:basis-[32%]",
      peek4: "@3xl:basis-[24%]",
      peek6: "@3xl:basis-[16%]"
    },
    lg: {
      1: "@4xl:basis-full",
      2: "@4xl:basis-1/2",
      3: "@4xl:basis-1/3",
      4: "@4xl:basis-1/4",
      6: "@4xl:basis-1/6",
      peek1: "@4xl:basis-[85%]",
      peek2: "@4xl:basis-[48%]",
      peek3: "@4xl:basis-[32%]",
      peek4: "@4xl:basis-[24%]",
      peek6: "@4xl:basis-[16%]"
    },
    xl: {
      1: "@5xl:basis-full",
      2: "@5xl:basis-1/2",
      3: "@5xl:basis-1/3",
      4: "@5xl:basis-1/4",
      6: "@5xl:basis-1/6",
      peek1: "@5xl:basis-[85%]",
      peek2: "@5xl:basis-[48%]",
      peek3: "@5xl:basis-[32%]",
      peek4: "@5xl:basis-[24%]",
      peek6: "@5xl:basis-[16%]"
    }
  },
  defaultVariants: {
    peek: !1,
    default: 1
  }
});
function ut(e, n, r) {
  if (r) {
    const a = (e || 1) / 2;
    return n ? `peek${a}` : a;
  }
  return n ? `peek${e || 1}` : e || 1;
}
const pl = ({
  children: e,
  columns: n,
  showArrows: r = !0,
  showDots: a = !0,
  autoplay: i = !1,
  delay: s = 3e3,
  showPeek: l = !1,
  doubleColumns: o
}) => {
  const c = St.Children.toArray(e), u = St.useRef(
    i ? Es({ delay: s, stopOnInteraction: !0 }) : void 0
  ), d = () => {
    u.current && u.current.stop();
  }, h = () => {
    u.current && u.current.play();
  };
  return n ? /* @__PURE__ */ t(
    $s,
    {
      className: "flex w-full flex-col gap-3 @container",
      opts: {
        align: l ? "center" : "start",
        slidesToScroll: "auto",
        duration: 20,
        containScroll: !1
      },
      plugins: [u.current, zs()].filter(Boolean),
      onMouseEnter: i ? d : void 0,
      onMouseLeave: i ? h : void 0,
      children: /* @__PURE__ */ p("div", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ p("div", { className: "relative", children: [
          /* @__PURE__ */ t(_s, { children: St.Children.map(c, (f, v) => {
            const m = o?.find(
              (g) => g.index === v
            );
            return /* @__PURE__ */ t(
              Ms,
              {
                className: hl({
                  default: ut(n.default, l),
                  xs: ut(
                    n.xs,
                    l,
                    m?.sizes?.includes("xs")
                  ),
                  sm: ut(
                    n.sm,
                    l,
                    m?.sizes?.includes("sm")
                  ),
                  md: ut(
                    n.md,
                    l,
                    m?.sizes?.includes("md")
                  ),
                  lg: ut(
                    n.lg,
                    l,
                    m?.sizes?.includes("lg")
                  ),
                  peek: l
                }),
                children: f
              },
              v
            );
          }) }),
          r && /* @__PURE__ */ p(ie, { children: [
            /* @__PURE__ */ t(js, { label: "Previous" }),
            /* @__PURE__ */ t(Bs, { label: "Next" })
          ] })
        ] }),
        a && /* @__PURE__ */ t(Vs, {})
      ] })
    }
  ) : /* @__PURE__ */ t(fl, { children: e });
}, ml = $e(
  Fe("Carousel", pl)
), gl = Yt({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
    }
  },
  defaultVariants: {
    period: "morning"
  }
});
function Xr({
  children: e,
  header: n,
  period: r,
  embedded: a = !1
}) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: l } = it();
  return /* @__PURE__ */ p(
    "div",
    {
      className: `relative flex w-full flex-col overflow-hidden ${a ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
      children: [
        /* @__PURE__ */ t("div", { className: gl({ period: r }) }),
        n && /* @__PURE__ */ p("div", { className: "flex flex-row items-center justify-between pr-6 @container", children: [
          /* @__PURE__ */ p("div", { className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6", children: [
            (l || i === "hidden") && /* @__PURE__ */ t(
              ce,
              {
                variant: "ghost",
                onClick: () => s(),
                label: "Open main menu",
                icon: Ir,
                hideLabel: !0
              }
            ),
            /* @__PURE__ */ p(
              "div",
              {
                className: N(
                  "flex flex-row items-center",
                  l ? "gap-1.5" : "gap-3"
                ),
                children: [
                  n?.onPulseClick ? /* @__PURE__ */ t(
                    qr,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      pulse: n.pulse,
                      onPulseClick: n.onPulseClick
                    }
                  ) : /* @__PURE__ */ t(
                    br,
                    {
                      src: n.employeeAvatar,
                      firstName: n.employeeFirstName,
                      lastName: n.employeeLastName,
                      size: l ? "small" : n.description ? "large" : "medium"
                    }
                  ),
                  /* @__PURE__ */ p("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ t(
                      "p",
                      {
                        className: N(
                          l ? "text-lg" : "text-2xl",
                          "font-semibold text-f1-foreground"
                        ),
                        children: n.title
                      }
                    ),
                    n.description && /* @__PURE__ */ t(
                      "p",
                      {
                        className: N(
                          l ? "text-md" : "text-lg",
                          "text-f1-foreground-secondary"
                        ),
                        children: n.description
                      }
                    )
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ p("div", { children: [
            /* @__PURE__ */ t(Ar, {}),
            /* @__PURE__ */ t(Jr, {})
          ] })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: N(
              "isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1",
              l && "-mt-3"
            ),
            children: e
          }
        )
      ]
    }
  );
}
Xr.displayName = "DaytimePage";
const ud = $e(
  Fe("DaytimePage", Xr)
), Xt = ({ item: e }) => /* @__PURE__ */ p(ie, { children: [
  e.avatar && /* @__PURE__ */ t(en, { avatar: e.avatar, size: "xs" }),
  e.icon && /* @__PURE__ */ t(
    Q,
    {
      icon: e.icon,
      size: "md",
      className: N("text-f1-icon", e.critical && "text-f1-icon-critical")
    }
  ),
  /* @__PURE__ */ p("div", { className: "flex flex-col items-start", children: [
    e.label,
    e.description && /* @__PURE__ */ t(
      "div",
      {
        className: N(
          "font-normal text-f1-foreground-secondary",
          e.critical && "text-f1-foreground-critical"
        ),
        children: e.description
      }
    )
  ] })
] }), bl = ({ item: e }) => {
  const {
    label: n,
    icon: r,
    avatar: a,
    description: i,
    href: s,
    critical: l,
    ...o
  } = e, c = N(
    "flex items-start gap-1.5 w-full",
    l && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ t(It, { asChild: !0, className: N(c, "cursor-pointer"), children: s ? /* @__PURE__ */ t(
    Te,
    {
      href: s,
      className: N(
        c,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      ...o,
      children: /* @__PURE__ */ t(Xt, { item: e })
    }
  ) : /* @__PURE__ */ t("div", { ...o, className: c, children: /* @__PURE__ */ t(Xt, { item: e }) }) });
};
function vl(e, n) {
  return e.type === "separator" ? /* @__PURE__ */ t(cn, {}, n) : e.type === "label" ? /* @__PURE__ */ t(
    Rr,
    {
      className: "flex-1 text-xs font-medium leading-4 text-f1-foreground-secondary",
      children: e.text
    },
    n
  ) : /* @__PURE__ */ t(
    bl,
    {
      item: {
        ...e,
        onClick: () => {
          setTimeout(() => {
            e.onClick?.();
          }, 200);
        }
      }
    },
    n
  );
}
function Zr({
  items: e,
  icon: n = ln,
  align: r = "start",
  size: a,
  children: i,
  open: s,
  onOpenChange: l,
  label: o,
  ...c
}) {
  const u = X(), [d, h] = I(!1), f = s !== void 0 && l !== void 0, v = f ? s : d;
  return /* @__PURE__ */ p(an, { open: v, onOpenChange: f ? l : h, children: [
    /* @__PURE__ */ t(sn, { asChild: !0, children: i || /* @__PURE__ */ t(
      Ce,
      {
        ...c,
        hideLabel: !o,
        icon: n,
        size: a,
        label: o ?? u.actions.toggleDropdownMenu,
        variant: "outline",
        pressed: v,
        compact: !o,
        noAutoTooltip: !0,
        noTitle: !0
      }
    ) }),
    /* @__PURE__ */ t(on, { align: r, children: e.map((g, y) => vl(g, y)) })
  ] });
}
const yl = [], xl = (e) => {
  const { open: n, onOpenChange: r, dataTestId: a, ...i } = e, s = yl.reduce((l, o) => {
    const { [o]: c, ...u } = l;
    return u;
  }, i);
  return /* @__PURE__ */ t(vr, { dataTestId: a, children: /* @__PURE__ */ t(
    Zr,
    {
      ...s,
      open: n,
      onOpenChange: r,
      align: e.align || "end"
    }
  ) });
}, Pt = Fe("Dropdown", xl), wl = ({ items: e, children: n, dataTestId: r }) => {
  const [a, i] = I(!1);
  return /* @__PURE__ */ t(vr, { dataTestId: r, children: /* @__PURE__ */ p(vi, { open: a, onOpenChange: i, children: [
    /* @__PURE__ */ t(yi, { asChild: !0, children: n || /* @__PURE__ */ t(
      Ce,
      {
        label: "Other actions",
        icon: ln,
        variant: "outline",
        size: "lg",
        pressed: a,
        noTitle: !0
      }
    ) }),
    /* @__PURE__ */ t(xi, { className: "bg-f1-background-overlay" }),
    /* @__PURE__ */ t(wi, { className: "bg-f1-background", children: /* @__PURE__ */ t("div", { className: "flex flex-col px-2 pb-3 pt-2", children: e.map((s, l) => s.type === "separator" ? /* @__PURE__ */ t(
      "div",
      {
        className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
      },
      `separator-${l}`
    ) : s.type === "label" ? /* @__PURE__ */ t(
      "span",
      {
        className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
        children: s.text
      },
      `label-${l}`
    ) : s.href ? /* @__PURE__ */ t(
      Te,
      {
        href: s.href,
        className: N(
          "flex w-full items-start gap-1.5",
          s.critical && "text-f1-foreground-critical",
          "text-f1-foreground no-underline hover:cursor-pointer"
        ),
        children: /* @__PURE__ */ t(Xt, { item: s })
      },
      `link-${l}`
    ) : /* @__PURE__ */ p(
      "button",
      {
        onClick: (o) => {
          o.preventDefault(), o.stopPropagation(), s.onClick?.(), i(!1);
        },
        className: "flex w-full cursor-pointer items-center gap-2 p-3",
        children: [
          s.icon && /* @__PURE__ */ t(
            "span",
            {
              className: N(
                "h-5 w-5 text-f1-icon",
                s.critical && "text-f1-icon-critical"
              ),
              children: /* @__PURE__ */ t(Q, { icon: s.icon, size: "md" })
            }
          ),
          /* @__PURE__ */ t(
            "span",
            {
              className: N(
                "font-medium",
                s.critical ? "text-f1-foreground-critical" : "text-f1-foreground"
              ),
              children: s.label
            }
          )
        ]
      },
      s.label
    )) }) })
  ] }) });
}, Cl = Fe(
  "MobileDropdown",
  wl
);
function Zt(e, n) {
  if ("type" in e) {
    if (e.type === "separator")
      return /* @__PURE__ */ t(cn, {}, `sep-${n}`);
    if (e.type === "label")
      return /* @__PURE__ */ t(
        Rr,
        {
          className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
          children: e.text
        },
        `label-${n}`
      );
    if (e.type === "toggle")
      return /* @__PURE__ */ t(Rn, { children: /* @__PURE__ */ t(
        It,
        {
          className: "!pb-2.5 pr-4",
          onClick: (a) => {
            a.preventDefault(), e.onCheckedChange(!e.checked);
          },
          children: /* @__PURE__ */ p("div", { className: "flex w-full flex-row items-center gap-2", children: [
            e.icon && /* @__PURE__ */ t(Q, { icon: e.icon, color: "default" }),
            /* @__PURE__ */ t("span", { className: "flex-1", children: e.label }),
            /* @__PURE__ */ t(
              Dr,
              {
                title: e.label,
                checked: e.checked,
                onCheckedChange: e.onCheckedChange,
                hideLabel: !0
              }
            )
          ] })
        }
      ) }, `toggle-${n}`);
    if (e.type === "submenu")
      return /* @__PURE__ */ t(Rn, { children: /* @__PURE__ */ p(Ci, { children: [
        /* @__PURE__ */ t(Ni, { className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover", children: /* @__PURE__ */ p("div", { className: "flex w-full flex-row items-center gap-2", children: [
          e.icon && /* @__PURE__ */ t(Q, { icon: e.icon, color: "default" }),
          /* @__PURE__ */ t("span", { className: "flex-1 text-base font-medium", children: e.label }),
          e.selectedLabel && /* @__PURE__ */ t("span", { className: "mr-1 text-base text-f1-foreground-secondary", children: e.selectedLabel })
        ] }) }),
        /* @__PURE__ */ t(Or, { children: /* @__PURE__ */ t(Si, { children: e.children.map(
          (a, i) => Zt(a, i)
        ) }) })
      ] }) }, `submenu-${n}`);
  }
  const r = e;
  return /* @__PURE__ */ t(
    It,
    {
      onClick: r.onClick,
      className: N(r.critical && "text-f1-foreground-critical"),
      children: /* @__PURE__ */ p("div", { className: "flex w-full flex-row items-center gap-2", children: [
        r.icon && /* @__PURE__ */ t(Q, { icon: r.icon }),
        /* @__PURE__ */ t("span", { className: "flex-1", children: r.label }),
        r.selected && /* @__PURE__ */ t(Q, { icon: Nr, color: "default" })
      ] })
    },
    `item-${n}`
  );
}
function Nl({
  otherActions: e,
  open: n,
  setOpen: r,
  disabled: a
}) {
  const i = e.some(
    (l) => "type" in l && (l.type === "toggle" || l.type === "submenu" || l.type === "label")
  );
  return /* @__PURE__ */ p(an, { open: n, onOpenChange: r, children: [
    /* @__PURE__ */ t(sn, { tabIndex: -1, asChild: !0, children: /* @__PURE__ */ t(
      Ce,
      {
        icon: dn,
        label: "Actions",
        hideLabel: !0,
        variant: "ghost",
        pressed: n,
        size: "sm",
        disabled: a
      }
    ) }),
    /* @__PURE__ */ t(on, { className: "w-80", align: "start", children: i ? e.map((l, o) => Zt(l, o)) : e.map((l, o) => Zt(l, o)) })
  ] });
}
function Sl({
  item: e,
  counter: n,
  isActive: r,
  sortable: a,
  collapsible: i = !1,
  isExpanded: s = !1,
  onToggleExpanded: l = () => {
  },
  children: o,
  open: c,
  setOpen: u,
  isHovered: d,
  setIsHovered: h
}) {
  const f = X(), { label: v, onClick: m, icon: g, disabled: y, otherActions: C } = e, x = C && C.length > 0 && (d || c), S = n && !x, A = a && (d || c);
  return /* @__PURE__ */ p("div", { className: "flex w-full min-w-0 items-center", children: [
    i && /* @__PURE__ */ t(
      Ce,
      {
        compact: !0,
        size: "sm",
        variant: "ghost",
        onClick: (D) => {
          D.stopPropagation(), l?.(e.id);
        },
        label: f.actions.toggle,
        hideLabel: !0,
        className: N(
          "text-f1-icon transition-all",
          !s && "-rotate-90"
        ),
        icon: vt
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        className: N(
          Ie("focus:border-f1-border-focus"),
          "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors",
          r && "bg-f1-background-selected",
          m && !y && "cursor-pointer hover:bg-f1-background-hover",
          y && "cursor-not-allowed opacity-30"
        ),
        "data-active": r || void 0,
        onClick: y ? void 0 : () => m?.(e.id),
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
          (a || g) && /* @__PURE__ */ t("div", { className: "absolute left-1.5 top-1/2 -translate-y-1/2", children: /* @__PURE__ */ t(Ae, { mode: "wait", children: A ? /* @__PURE__ */ t(
            j.div,
            {
              initial: { opacity: 0, scale: 0.8, x: 0 },
              animate: { opacity: 1, scale: 1, x: 0 },
              exit: { opacity: 0, scale: 0.8, x: 0 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex flex-shrink-0 items-center justify-center",
              children: /* @__PURE__ */ t(
                "div",
                {
                  className: "flex flex-shrink-0 cursor-grab items-center justify-center text-f1-icon active:cursor-grabbing",
                  "aria-label": "Drag to reorder",
                  children: /* @__PURE__ */ t(Q, { icon: Fr, size: "xs" })
                }
              )
            },
            "handle"
          ) : g && /* @__PURE__ */ t(
            j.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex flex-shrink-0 items-center justify-center p-0.5 text-f1-icon",
              children: /* @__PURE__ */ t(Q, { icon: g, size: "md" })
            },
            "icon"
          ) }) }),
          /* @__PURE__ */ t(
            je,
            {
              lines: 1,
              className: N(
                "flex-grow text-[14px] font-medium text-f1-foreground transition-all",
                A || g ? "pl-7" : "pl-0"
              ),
              children: v
            }
          ),
          /* @__PURE__ */ t(Ae, { children: (S || x) && /* @__PURE__ */ t(
            j.div,
            {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              onClick: (D) => D.stopPropagation(),
              className: "relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center",
              children: /* @__PURE__ */ t(Ae, { mode: "wait", children: S ? /* @__PURE__ */ t(
                j.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                  transition: {
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  className: "flex items-center justify-center",
                  children: /* @__PURE__ */ t(yr, { value: n })
                },
                "counter"
              ) : x && /* @__PURE__ */ t(
                j.div,
                {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                  transition: {
                    duration: 0.15,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  className: "flex items-center justify-center",
                  children: C && /* @__PURE__ */ t(
                    Nl,
                    {
                      otherActions: C,
                      open: c,
                      setOpen: u,
                      disabled: y
                    }
                  )
                },
                "dropdown"
              ) })
            },
            "actions-container"
          ) })
        ]
      }
    ),
    o
  ] });
}
function mt({
  item: e,
  counter: n,
  isActive: r,
  collapsible: a = !1,
  isExpanded: i = !1,
  onToggleExpanded: s = () => {
  },
  sortable: l,
  children: o,
  onDragOver: c,
  onDragLeave: u,
  onDrop: d,
  canDropInside: h = !1,
  currentParentId: f = null,
  justDropped: v = !1
}) {
  const [m, g] = I(!1), [y, C] = I(!1), b = z(null), [x, S] = I(null), [A, D] = I(!1), F = z(null), $ = T(
    () => ({
      kind: "toc-item",
      id: e.id,
      data: { item: e, currentParentId: f }
    }),
    [e.id, f, e]
  );
  return ki({
    ref: b,
    payload: $,
    disabled: !l
  }), W(() => {
    if (!(!b.current || !l))
      return Tr({
        element: b.current,
        canDrop: ({ source: L }) => {
          const V = L.data;
          return V.kind === "toc-item" && V.id !== e.id;
        },
        getData: ({ input: L, element: V }) => {
          const M = V.getBoundingClientRect(), R = L.clientY - M.top, P = M.height * 0.6;
          return h && R > P ? { type: "toc-item-target", id: e.id, position: "inside" } : Ii(
            { type: "toc-item-target", id: e.id },
            {
              input: L,
              element: V,
              allowedEdges: ["top", "bottom"]
            }
          );
        },
        onDragEnter: ({ source: L }) => {
          if (L.data.id === e.id) {
            S(null), D(!1), F.current = null;
            return;
          }
        },
        onDrag: ({ self: L, source: V }) => {
          if (V.data.id === e.id) {
            S(null), D(!1), F.current = null;
            return;
          }
          const w = L.data, R = Dn(L.data);
          if (w.position === "inside") {
            const k = F.current;
            (!k || !k.isInside || k.edge !== null) && (D(!0), S(null), F.current = { edge: null, isInside: !0 }, c?.(e.id, "inside"));
          } else if (R && (R === "top" || R === "bottom")) {
            const k = R === "top" ? "before" : "after", P = F.current;
            !P || P.edge !== R || P.isInside !== !1 ? (S(R), D(!1), F.current = {
              edge: R,
              isInside: !1,
              lastReportTime: Date.now()
            }, c?.(e.id, k)) : Date.now() - (P.lastReportTime || 0) > 50 && (c?.(e.id, k), F.current = {
              ...P,
              lastReportTime: Date.now()
            });
          } else if (!R) {
            const k = F.current;
            if (k?.edge) {
              const P = k.edge === "top" ? "before" : "after";
              Date.now() - (k.lastReportTime || 0) > 50 && (c?.(e.id, P), F.current = {
                ...k,
                lastReportTime: Date.now()
              });
            }
          }
        },
        onDragLeave: () => {
          u?.();
        },
        onDrop: ({ self: L }) => {
          const V = L.data;
          let M = "after";
          V.position === "inside" ? M = "inside" : M = Dn(L.data) === "top" ? "before" : "after", S(null), D(!1), d && d(e.id, M);
        }
      });
  }, [e.id, l, h, c, u, d]), /* @__PURE__ */ t(
    j.div,
    {
      ref: b,
      className: N(
        "relative rounded-lg transition-colors",
        l && "cursor-grab active:cursor-grabbing",
        // Show subtle indicator bars (less prominent since we have placeholders)
        x === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5",
        x === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5",
        A && h && "bg-f1-background-hover/30",
        v && "bg-f1-background-selected"
      ),
      animate: {},
      transition: { duration: 0 },
      children: /* @__PURE__ */ t(
        Sl,
        {
          item: e,
          counter: n,
          isActive: r,
          sortable: l,
          collapsible: a,
          isExpanded: i,
          onToggleExpanded: s,
          open: m,
          setOpen: g,
          isHovered: y,
          setIsHovered: C,
          children: o
        }
      )
    }
  );
}
function kl({
  item: e,
  children: n,
  isActive: r,
  isExpanded: a,
  onToggleExpanded: i,
  sortable: s,
  hideChildrenCounter: l,
  canDropInside: o = !1,
  onDragOver: c,
  onDragLeave: u,
  onDrop: d,
  currentParentId: h,
  draggedItemId: f
}) {
  const v = Ft();
  return /* @__PURE__ */ p(
    Lr,
    {
      open: a,
      onOpenChange: (m) => {
        m !== a && i?.(e.id);
      },
      children: [
        /* @__PURE__ */ t(
          mt,
          {
            item: e,
            counter: l ? void 0 : e.children?.length ?? 0,
            isActive: r,
            collapsible: !0,
            isExpanded: a,
            onToggleExpanded: i,
            sortable: s,
            onDragOver: c,
            onDragLeave: u,
            onDrop: d,
            canDropInside: o,
            currentParentId: h,
            draggedItemId: f
          }
        ),
        /* @__PURE__ */ t(Pr, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
          j.div,
          {
            initial: !1,
            animate: {
              height: a ? "auto" : 0,
              opacity: a ? 1 : 0,
              visibility: a ? "visible" : "hidden"
            },
            transition: {
              duration: v ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            children: /* @__PURE__ */ t("div", { className: "ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5", children: n })
          }
        ) })
      ]
    }
  );
}
function Il({
  item: e,
  children: n,
  isActive: r,
  sortable: a,
  hideChildrenCounter: i,
  canDropInside: s = !1,
  onDragOver: l,
  onDragLeave: o,
  onDrop: c,
  currentParentId: u,
  draggedItemId: d
}) {
  return /* @__PURE__ */ p(ie, { children: [
    /* @__PURE__ */ t(
      mt,
      {
        item: e,
        counter: i ? void 0 : e.children?.length ?? 0,
        isActive: r,
        collapsible: !1,
        isExpanded: void 0,
        onToggleExpanded: void 0,
        sortable: a,
        onDragOver: l,
        onDragLeave: o,
        onDrop: c,
        canDropInside: s,
        currentParentId: u,
        draggedItemId: d
      }
    ),
    n && /* @__PURE__ */ t("div", { className: "ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4", children: n })
  ] });
}
function ft({
  item: e,
  children: n,
  isActive: r,
  collapsible: a,
  isExpanded: i,
  onToggleExpanded: s,
  sortable: l,
  hideChildrenCounter: o,
  canDropInside: c = !1,
  onDragOver: u,
  onDragLeave: d,
  onDrop: h,
  currentParentId: f,
  draggedItemId: v
}) {
  return a ? /* @__PURE__ */ t(
    kl,
    {
      item: e,
      isActive: r,
      isExpanded: i,
      onToggleExpanded: s,
      sortable: l,
      hideChildrenCounter: o,
      canDropInside: c,
      onDragOver: u,
      onDragLeave: d,
      onDrop: h,
      currentParentId: f,
      draggedItemId: v,
      children: n
    }
  ) : /* @__PURE__ */ t(
    Il,
    {
      item: e,
      isActive: r,
      sortable: l,
      hideChildrenCounter: o,
      canDropInside: c,
      onDragOver: u,
      onDragLeave: d,
      onDrop: h,
      currentParentId: f,
      draggedItemId: v,
      children: n
    }
  );
}
function Al(e, n) {
  const r = /* @__PURE__ */ new Set();
  if (!n) return r;
  function a(i, s, l = []) {
    for (const o of i) {
      if (o.id === s)
        return l.forEach((u) => r.add(u)), !0;
      const c = [...l, o.id];
      if (o.children && a(o.children, s, c))
        return r.add(o.id), !0;
    }
    return !1;
  }
  return a(e, n), r;
}
function _n(e, n) {
  if (!n.trim())
    return e;
  const r = n.toLowerCase().trim();
  function a(i) {
    const s = i.label.toLowerCase().includes(r), l = i.children ? i.children.map(a).filter(Boolean) : void 0;
    return s || l && l.length > 0 ? {
      ...i,
      children: l && l.length > 0 ? l : void 0
    } : null;
  }
  return e.map(a).filter(Boolean);
}
function Oe(e, n) {
  function r(a, i, s = []) {
    for (const l of a) {
      if (l.id === i)
        return { item: l, parentPath: s };
      if (l.children) {
        const o = r(l.children, i, [...s, l.id]);
        if (o) return o;
      }
    }
    return null;
  }
  return r(e, n);
}
function Yr(e, n) {
  return e.map((r) => {
    if (r.id === n)
      return null;
    if (r.children) {
      const a = Yr(r.children, n);
      return {
        ...r,
        children: a.length > 0 ? a : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function Rl(e, n, r, a) {
  if (r === null) {
    const s = [...e];
    return s.splice(a, 0, n), s;
  }
  function i(s, l, o) {
    return s.map((c) => {
      if (c.id === l) {
        const d = [...c.children || []];
        return d.splice(o, 0, n), {
          ...c,
          children: d
        };
      }
      return c.children ? {
        ...c,
        children: i(c.children, l, o)
      } : c;
    });
  }
  return i(e, r, a);
}
function Qr(e, n, r) {
  if (r === null) return !1;
  if (r === n) return !0;
  if (!Oe(e, n)) return !1;
  function i(l, o, c) {
    for (const u of l)
      if (u.id === c || u.children && i(u.children, o, c))
        return !0;
    return !1;
  }
  const s = Oe(e, n);
  return s?.item.children ? i(s.item.children, n, r) : !1;
}
function et(e) {
  return e.map((n) => ({
    id: n.id,
    ...n.children && { children: et(n.children) }
  }));
}
function ea(e, n, r) {
  return e.map((a) => a.id === n ? r : a.children ? {
    ...a,
    children: ea(a.children, n, r)
  } : a);
}
function Dl(e, n, r, a) {
  const i = Oe(e, n);
  if (!i) return a;
  let s = a;
  if (r !== null) {
    if (Oe(e, r)) {
      const o = i.parentPath;
      if (o.length > 0 && o[o.length - 1] === r) {
        const c = Oe(
          e,
          o[o.length - 1]
        );
        if (c) {
          const u = c.item.children?.findIndex(
            (d) => d.id === n
          );
          u !== void 0 && u < a && (s = a - 1);
        }
      }
    }
  } else
    i.parentPath.length === 0 && e.findIndex((c) => c.id === n) < a && (s = a - 1);
  return s;
}
function ta(e, n, r, a, i, s, l, o, c, u, d, h, f, v, m, g, y, C, b) {
  const x = e.children ? ft : mt, S = l?.has(e.id) ?? !0, A = h === e.id, D = !!(d && d !== e.id && u && e.children !== void 0 && // Item must have children property (is a section)
  !Qr(u, d, e.id)), F = !!(d && d !== e.id && A && f === "before"), $ = !!(d && d !== e.id && A && f === "after"), L = m === null ? u?.[0]?.id === e.id : !u || !m ? !1 : Oe(u, m)?.item.children?.[0]?.id === e.id;
  return /* @__PURE__ */ p(ie, { children: [
    F && /* @__PURE__ */ t(
      "div",
      {
        className: N(
          "pointer-events-none h-10 rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40",
          L ? "mt-0" : "mt-0.5",
          "mb-0.5"
        )
      }
    ),
    x === mt ? /* @__PURE__ */ t(
      mt,
      {
        item: e,
        isActive: a === e.id,
        sortable: n,
        collapsible: !1,
        isExpanded: !1,
        onToggleExpanded: o,
        onDragOver: g,
        onDragLeave: y,
        onDrop: C,
        canDropInside: !1,
        currentParentId: m,
        draggedItemId: d,
        justDropped: b === e.id
      },
      e.id
    ) : /* @__PURE__ */ t(
      x,
      {
        item: e,
        isActive: a === e.id,
        collapsible: i && e.children && e.children.length > 0,
        isExpanded: S,
        onToggleExpanded: o,
        sortable: n,
        hideChildrenCounter: s,
        canDropInside: D,
        onDragOver: x === ft ? g : void 0,
        onDragLeave: x === ft ? y : void 0,
        onDrop: x === ft ? C : void 0,
        currentParentId: m,
        draggedItemId: d,
        children: e.children && (x === ft || S) && /* @__PURE__ */ p(
          "div",
          {
            className: N(
              "flex flex-col",
              // Show placeholder background when dragging inside this section
              A && f === "inside" && D && "rounded-md bg-f1-background-hover/20 p-1"
            ),
            children: [
              e.children.map((V) => ta(
                V,
                n,
                r + 1,
                a,
                i,
                s,
                l,
                o,
                c,
                u,
                d,
                h,
                f,
                n ? v : void 0,
                e.id,
                g,
                y,
                C,
                b
              )),
              A && f === "inside" && D && (!S || e.children.length === 0) && /* @__PURE__ */ t("div", { className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary", children: "Drop here" })
            ]
          }
        )
      },
      e.id
    ),
    $ && /* @__PURE__ */ t("div", { className: "pointer-events-none my-0.5 h-10 rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40" })
  ] });
}
function Mn({
  targetItemId: e,
  position: n,
  onDragOver: r,
  onDragLeave: a,
  onDrop: i,
  visible: s
}) {
  const l = z(null);
  return W(() => {
    if (l.current)
      return Tr({
        element: l.current,
        canDrop: ({ source: o }) => {
          const c = o.data;
          return c.kind === "toc-item" && c.id !== e;
        },
        onDragEnter: () => {
          r(e, n);
        },
        onDrag: () => {
          r(e, n);
        },
        onDragLeave: () => {
          a();
        },
        onDrop: () => {
          i(e, n);
        }
      });
  }, [e, n, r, a, i]), /* @__PURE__ */ t(
    "div",
    {
      ref: l,
      className: N(
        "w-full shrink-0 transition-[height]",
        s ? "h-5" : "h-1"
      )
    }
  );
}
function Ol({
  title: e,
  items: n,
  className: r,
  activeItem: a,
  collapsible: i = !1,
  sortable: s = !1,
  showSearchBox: l = !1,
  searchPlaceholder: o,
  onReorder: c,
  hideChildrenCounter: u = !1,
  scrollable: d = !0
}) {
  const h = X(), [f, v] = I(""), m = (B) => {
    v(B);
  }, g = T(() => _n(n, f), [n, f]), [y, C] = I(
    Al(n, a)
  ), [b, x] = I(n);
  W(() => {
    x(n);
  }, [n]);
  const S = z(null), A = K(
    (B) => {
      C((U) => {
        const q = new Set(U);
        return q.has(B) ? q.delete(B) : q.add(B), q;
      });
    },
    [C]
  ), D = K(
    (B, U) => {
      const q = ea(b, B, U);
      x(q), c && c(et(q));
    },
    [b, c]
  ), F = K(
    (B) => (U) => {
      const q = Oe(b, B);
      if (q) {
        const Y = { ...q.item, children: U };
        D(B, Y);
      } else
        B == null && (x(U), c && c(et(U)));
    },
    [b, D, c, et]
  ), $ = K(
    (B, U, q) => {
      if (Qr(b, B, U))
        return;
      const Y = Oe(b, B);
      if (!Y) return;
      const me = Y.item;
      let G = Yr(b, B);
      const ve = Dl(
        b,
        B,
        U,
        q
      );
      G = Rl(
        G,
        me,
        U,
        ve
      ), x(G), U !== null && C((ge) => {
        const J = new Set(ge);
        return J.add(U), J;
      }), c && c(et(G));
    },
    [b, c, et]
  ), L = T(() => _n(b, f), [b, f]), [V, M] = I(null), [w, R] = I(null), [k, P] = I(null), [H, pe] = I(
    null
  ), ne = z(null), se = z(!1), re = z(null), de = z(null), E = z(null), ee = z(null), le = z(null), ue = z(0), xe = z(0), be = z(!1), ae = z(null), De = K(
    (B, U) => {
      E.current && (clearTimeout(E.current), E.current = null);
      const Y = (s ? L : g).findIndex((J) => J.id === B), me = le.current !== null && Y < le.current;
      le.current = Y;
      const G = `${B}-${U}`, ve = w && k ? `${w}-${k}` : null;
      if (G === ve)
        return;
      ee.current = { itemId: B, position: U };
      const ge = me ? 50 : 30;
      E.current = setTimeout(() => {
        const J = ee.current;
        if (J) {
          R(J.itemId), P(J.position), re.current = J.itemId, de.current = J.position;
          const fe = Date.now();
          ue.current = fe, xe.current = fe;
          const lt = (s ? L : g)[0];
          J.itemId === lt?.id && J.position === "before" && (be.current = !0);
        }
        E.current = null;
      }, ge);
    },
    [
      w,
      k,
      s,
      L,
      g
    ]
  );
  W(() => () => {
    E.current && clearTimeout(E.current);
  }, []);
  const Le = K(() => {
    if (se.current)
      return;
    E.current && clearTimeout(E.current);
    const B = be.current ? 1e3 : 800;
    E.current = setTimeout(() => {
      if (se.current) {
        E.current = null;
        return;
      }
      const U = Date.now(), q = U - ue.current, Y = U - xe.current, me = be.current ? 800 : 500;
      if (Y < me) {
        E.current = null;
        return;
      }
      const G = be.current ? 800 : 500;
      if (q < G) {
        E.current = null;
        return;
      }
      if (be.current) {
        const ge = (s ? L : g)[0];
        if (w === ge?.id && k === "before") {
          if (Y < 2e3) {
            E.current = null;
            return;
          }
          be.current = !1;
        } else
          be.current = !1;
      }
      le.current = null, ue.current = 0, R(null), P(null), re.current = null, de.current = null, E.current = null;
    }, B);
  }, [
    w,
    k,
    s,
    L,
    g
  ]), ze = K(
    (B, U) => {
      se.current = !0;
      const q = ne.current;
      if (be.current = !1, R(null), P(null), re.current = null, de.current = null, E.current && (clearTimeout(E.current), E.current = null), !q || q === B) {
        ne.current = null, M(null), R(null), P(null);
        return;
      }
      const Y = Oe(b, B), me = Oe(b, q);
      if (Y && me) {
        let G = null, ve = 0;
        if (U === "inside")
          G = B, ve = Y.item.children?.length ?? 0;
        else if (U === "before")
          if (Y.parentPath.length > 0 ? G = Y.parentPath[Y.parentPath.length - 1] : G = null, G === null)
            ve = b.findIndex((fe) => fe.id === B);
          else {
            const fe = Oe(b, G);
            fe && (ve = fe.item.children?.findIndex((Pe) => Pe.id === B) ?? 0);
          }
        else if (U === "after")
          if (Y.parentPath.length > 0 ? G = Y.parentPath[Y.parentPath.length - 1] : G = null, G === null)
            ve = b.findIndex((fe) => fe.id === B) + 1;
          else {
            const fe = Oe(b, G);
            fe && (ve = (fe.item.children?.findIndex(
              (Pe) => Pe.id === B
            ) ?? 0) + 1);
          }
        const ge = me.parentPath.length > 0 ? me.parentPath[me.parentPath.length - 1] : null;
        let J = -1;
        if (ge === null)
          J = b.findIndex(
            (fe) => fe.id === q
          );
        else {
          const fe = Oe(b, ge);
          fe && (J = fe.item.children?.findIndex(
            (Pe) => Pe.id === q
          ) ?? -1);
        }
        (G !== ge || G === ge && J !== ve) && (pe(q), $(q, G, ve), setTimeout(() => {
          pe(null);
        }, 300));
      }
      be.current = !1, ne.current = null, se.current = !0, le.current = null, ue.current = 0, xe.current = 0, ae.current && (clearTimeout(ae.current), ae.current = null), M(null), setTimeout(() => {
        se.current = !1;
      }, 600);
    },
    [b, $]
  );
  return Ai(
    K(
      (B) => {
        if (B.phase === "start" && B.source.kind === "toc-item")
          E.current && (clearTimeout(E.current), E.current = null), ae.current && (clearTimeout(ae.current), ae.current = null), ne.current = B.source.id, se.current = !1, ee.current = null, M(B.source.id);
        else if (B.phase === "cancel")
          be.current = !1, se.current = !1, ee.current = null, le.current = null, ue.current = 0, xe.current = 0, E.current && (clearTimeout(E.current), E.current = null), ae.current && (clearTimeout(ae.current), ae.current = null), R(null), P(null), re.current = null, de.current = null, M(null), ne.current = null;
        else if (B.phase === "drop") {
          E.current && (clearTimeout(E.current), E.current = null), be.current = !1;
          const U = re.current || ee.current?.itemId, q = de.current || ee.current?.position;
          !se.current && U && q && ne.current && ne.current !== U && requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (!se.current) {
                const me = re.current || ee.current?.itemId, G = de.current || ee.current?.position;
                me && G && ze(me, G);
              }
            });
          }), ae.current && (clearTimeout(ae.current), ae.current = null);
          const Y = setTimeout(() => {
            se.current || (ee.current = null, le.current = null, ue.current = 0, xe.current = 0, R(null), P(null), re.current = null, de.current = null, M(null), ne.current = null), ae.current === Y && (ae.current = null);
          }, 500);
          ae.current = Y;
        }
      },
      [ze]
    )
  ), /* @__PURE__ */ p(
    "nav",
    {
      className: N("flex w-[248px] flex-col overflow-hidden", r),
      "aria-label": e,
      ref: S,
      children: [
        (e || l) && /* @__PURE__ */ p("div", { className: "shrink-0 bg-f1-background pb-2 pl-5 pr-4 pt-5", children: [
          l && /* @__PURE__ */ t("div", { className: "mb-4", children: /* @__PURE__ */ t(
            Ri,
            {
              placeholder: o ?? h.toc.search,
              onChange: m,
              value: f,
              clearable: !0
            }
          ) }),
          e && /* @__PURE__ */ t(
            je,
            {
              lines: 1,
              tag: "h2",
              className: "text-[14px] font-medium text-f1-foreground-secondary",
              children: e
            }
          )
        ] }),
        (() => {
          const B = s ? L : g, U = B[0], q = B[B.length - 1], Y = !!V, me = /* @__PURE__ */ p(ie, { children: [
            s && U && /* @__PURE__ */ t(
              Mn,
              {
                targetItemId: U.id,
                position: "before",
                onDragOver: De,
                onDragLeave: Le,
                onDrop: ze,
                visible: Y
              }
            ),
            B.map(
              (G) => ta(
                G,
                s,
                0,
                a,
                i,
                u,
                y,
                A,
                $,
                b,
                V,
                w,
                k,
                s ? F : void 0,
                null,
                De,
                Le,
                ze,
                H
              )
            ),
            s && q && /* @__PURE__ */ t(
              Mn,
              {
                targetItemId: q.id,
                position: "after",
                onDragOver: De,
                onDragLeave: Le,
                onDrop: ze,
                visible: Y
              }
            )
          ] });
          return d ? /* @__PURE__ */ t(un, { className: "min-h-0 flex-1", children: /* @__PURE__ */ t("div", { className: "px-3 pb-2", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: me }) }) }) : /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden px-2 pb-2", children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: me }) });
        })()
      ]
    }
  );
}
function Fl(e) {
  const n = z(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = T(() => Er(n.current), []);
  return /* @__PURE__ */ t($r, { driver: r, children: /* @__PURE__ */ t(Ol, { ...e }) });
}
const fd = $e(
  Fe("F0TableOfContent", Fl)
), na = Re((e, n) => /* @__PURE__ */ t("div", { ref: n, className: "px-1.5", ...e, children: /* @__PURE__ */ t(he, { className: "h-4 w-24", "aria-hidden": "true" }) }));
na.displayName = "BreadcrumbSkeleton";
const gn = Re((e, n) => /* @__PURE__ */ t(
  "span",
  {
    ref: n,
    role: "presentation",
    "aria-hidden": "true",
    className: "h-4 w-4 text-f1-icon-secondary",
    ...e,
    children: /* @__PURE__ */ t(Qt, {})
  }
));
gn.displayName = "BreadcrumbSeparator";
const pt = Re(({ item: e, isLast: n, isOnly: r = !1, isFirst: a = !1, children: i }, s) => /* @__PURE__ */ p(zr, { ref: s, children: [
  !a && /* @__PURE__ */ t(gn, {}),
  /* @__PURE__ */ t(
    ra,
    {
      item: e,
      isLast: n,
      isOnly: r,
      isFirst: a
    }
  ),
  i
] }, e.id));
pt.displayName = "BreadcrumbItem";
const ra = Re(
  ({ item: e, isLast: n, isOnly: r = !1, isFirst: a = !1 }, i) => {
    const s = "loading" in e && e.loading, l = s ? "loading" : "type" in e && e.type ? e.type : n || r ? "page" : "link", o = /* @__PURE__ */ p(
      j.div,
      {
        layoutId: `breadcrumb-${e.id}`,
        className: N(
          "flex items-center gap-2 px-1.5",
          a && "pl-0",
          r && "text-2xl font-semibold"
        ),
        transition: { duration: 0.15 },
        children: [
          !s && "module" in e && e.module && (r || a) && /* @__PURE__ */ t(Ba, { module: e.module, size: r ? "lg" : "sm" }),
          /* @__PURE__ */ t("span", { className: "truncate", children: !s && "label" in e ? e.label : "" })
        ]
      }
    ), c = {
      loading: /* @__PURE__ */ t(na, {}),
      select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ t(ie, { children: /* @__PURE__ */ t(
        zl,
        {
          label: e.label,
          hideLabel: !0,
          source: e.source,
          options: e.options,
          mapOptions: e.mapOptions,
          defaultItem: e.defaultItem,
          clearable: !1,
          onChange: e.onChange,
          value: e.value,
          showSearchBox: e.searchbox
        }
      ) }),
      page: /* @__PURE__ */ t(Oi, { "aria-hidden": "true", className: "p-0", children: o }),
      link: /* @__PURE__ */ t(Di, { asChild: !0, className: "p-0", children: /* @__PURE__ */ t(
        Te,
        {
          ..."href" in e && !("type" in e) ? e : {},
          className: "block",
          children: o
        }
      ) })
    };
    return /* @__PURE__ */ t(
      j.div,
      {
        ref: i,
        layout: !0,
        className: N(s && "max-w-40"),
        transition: { duration: 0.15 },
        children: c[l]
      }
    );
  }
);
ra.displayName = "BreadcrumbContent";
const aa = Re(({ className: e, items: n }, r) => /* @__PURE__ */ t(zr, { ref: r, className: e, children: /* @__PURE__ */ p("div", { className: "flex items-center", children: [
  /* @__PURE__ */ t(gn, {}),
  /* @__PURE__ */ t(Zr, { items: n, children: /* @__PURE__ */ t("button", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) })
] }) }));
aa.displayName = "CollapsedBreadcrumbItem";
const bn = 50, Tl = 120, Dt = 8;
function Ll(e, n) {
  const r = n.length;
  if (r <= 2) return r;
  const a = n[0];
  let i = e - a - Dt, s = 0, l = 1;
  for (let o = r - 1; o > 0; o--) {
    const c = n[o];
    if (i < c)
      break;
    i -= c, s = o, l++;
  }
  if (l < r)
    for (i -= bn; i < 0 && l > 1; )
      i += n[s], s++, l--;
  return Math.max(2, l);
}
function jn(e = []) {
  switch (e.length) {
    case 0:
      return;
    case 1:
      return e[0] + Dt;
    default:
      return e[0] + bn + e[e.length - 1] + Dt;
  }
}
function Pl(e, n) {
  return Tl * e + (n ? bn : 0) + Dt;
}
function El(e, n, r = []) {
  if (!e) {
    const l = Math.min(n.length, 2);
    return {
      visibleCount: l,
      headItem: n[0] ?? null,
      tailItems: n.slice(n.length - 1),
      collapsedItems: n.slice(1, n.length - 1),
      isOnly: n.length === 1,
      minWidth: Pl(
        l,
        n.length > 2
      )
    };
  }
  const a = n.length <= 2, i = r.map((l) => l.clientWidth);
  if (a)
    return {
      visibleCount: n.length,
      headItem: n[0] ?? null,
      tailItems: n.slice(1),
      collapsedItems: [],
      isOnly: n.length === 1,
      minWidth: jn(i)
    };
  const s = Ll(e, i);
  return {
    visibleCount: s,
    headItem: n[0] || null,
    tailItems: n.slice(
      Math.max(1, n.length - (s - 1))
    ),
    collapsedItems: n.slice(
      1,
      n.length - (s - 1)
    ),
    isOnly: n.length === 1,
    minWidth: jn(i)
  };
}
function $l({ breadcrumbs: e, append: n }) {
  const r = z(null), a = z(null), [, i] = ni(), [s, l] = I(null), o = (s?.collapsedItems || []).length > 0;
  return We(() => {
    const c = r.current, u = a.current;
    if (!c || !u || u.children.length < e.length) return;
    const d = () => {
      const f = r.current?.clientWidth ?? null, v = Array.from(u.children);
      i(() => {
        const m = El(
          f,
          e,
          v
        );
        l(m);
      });
    }, h = new ResizeObserver(d);
    return h.observe(c), d(), () => h.disconnect();
  }, [e, n]), !e.length || s && !s.headItem ? /* @__PURE__ */ t(On, { ref: r, className: "w-full" }) : /* @__PURE__ */ p(
    On,
    {
      ref: r,
      className: "w-full overflow-x-hidden",
      style: {
        minWidth: s?.minWidth
      },
      children: [
        /* @__PURE__ */ t(
          "ol",
          {
            className: "invisible absolute -left-full",
            "aria-hidden": "true",
            ref: a,
            children: e.map((c, u) => /* @__PURE__ */ t(
              pt,
              {
                item: c,
                isLast: u === e.length - 1,
                isFirst: u === 0,
                children: u === e.length - 1 ? n : void 0
              },
              c.id
            ))
          }
        ),
        s && s.headItem && /* @__PURE__ */ p(Fi, { children: [
          /* @__PURE__ */ t(
            pt,
            {
              isOnly: s.isOnly,
              isFirst: !0,
              item: s.headItem,
              isLast: !1
            },
            `first-item-${s.headItem.id}`
          ),
          o && /* @__PURE__ */ p(ie, { children: [
            /* @__PURE__ */ t(
              aa,
              {
                items: s.collapsedItems
              },
              "collapsed-items"
            ),
            s.tailItems.map((c, u) => /* @__PURE__ */ t(
              pt,
              {
                item: c,
                isLast: u === s.tailItems.length - 1,
                isFirst: !1,
                children: u === s.tailItems.length - 1 ? n : void 0
              },
              c.id
            ))
          ] }),
          !o && /* @__PURE__ */ t(ie, { children: s.tailItems.map((c, u) => /* @__PURE__ */ t(
            pt,
            {
              item: c,
              isLast: u === s.tailItems.length - 1,
              isFirst: !1,
              children: u === s.tailItems.length - 1 ? n : void 0
            },
            c.id
          )) })
        ] })
      ]
    },
    `breadcrumb-${e.at(-1)?.id ?? 0}`
  );
}
function zl({
  ...e
}) {
  const [n, r] = I(e.open), a = (c) => {
    r(c), e.onOpenChange?.(c);
  }, [i, s] = I(
    e.placeholder || e.label
  );
  return /* @__PURE__ */ t(
    nt,
    {
      ...e,
      onOpenChange: a,
      onChange: (c, u, d) => {
        e.onChange?.(c, u, d);
      },
      onChangeSelectedOption: (c) => {
        s(c?.label || "");
      },
      label: i,
      hideLabel: !0,
      children: /* @__PURE__ */ p(
        "button",
        {
          className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
          "aria-label": i,
          children: [
            /* @__PURE__ */ t("span", { className: "block grow text-f1-foreground", children: i }),
            /* @__PURE__ */ t("div", { className: "ml-2", children: /* @__PURE__ */ t(
              j.div,
              {
                animate: { rotate: n ? 180 : 0 },
                className: "h-[16px] w-[16px]",
                children: /* @__PURE__ */ t(
                  Q,
                  {
                    icon: vt,
                    size: "sm",
                    className: "rounded-2xs bg-f1-background-secondary p-0.5"
                  }
                )
              }
            ) })
          ]
        }
      )
    }
  );
}
const Bn = j.create(Q), Vn = {
  initial: { scale: 1 },
  animate: { scale: 1 },
  exit: { scale: 0.5 },
  // Transition variants
  enterFromUnfavorite: { scale: 0.5 },
  enterFromFavorite: { scale: 0.8 }
}, _l = ({
  isMarked: e,
  onChange: n,
  label: r
}) => {
  const [a, i] = I(!1), s = () => {
    i(!0), n(!e);
  };
  return /* @__PURE__ */ t(Ae, { mode: "wait", children: /* @__PURE__ */ t(
    "button",
    {
      className: N(
        "flex h-6 w-6 items-center justify-center rounded",
        Ie()
      ),
      onClick: s,
      "aria-label": r,
      children: e ? /* @__PURE__ */ t(
        Bn,
        {
          size: "sm",
          icon: Ti,
          className: "text-[hsl(var(--promote-50))] outline-none",
          variants: Vn,
          initial: a ? "enterFromUnfavorite" : "initial",
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0.175, 0.885, 0.27, 2]
          },
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1
        },
        "favorite"
      ) : /* @__PURE__ */ t(
        Bn,
        {
          size: "sm",
          whileTap: { scale: 0.8 },
          icon: Li,
          className: "outline-none",
          variants: Vn,
          initial: a ? "enterFromFavorite" : "initial",
          "aria-hidden": "true",
          focusable: !1,
          tabIndex: -1,
          animate: "animate",
          exit: "exit",
          transition: {
            ease: [0, 0, 0.58, 1]
          }
        },
        "not-favorite"
      )
    }
  ) });
}, Ml = ({
  currentModule: e,
  label: n,
  getUpdates: r,
  updatesPageUrl: a,
  emptyScreen: i,
  errorScreen: s,
  onOpenChange: l = () => {
  },
  onHeaderClick: o = () => {
  },
  onItemClick: c = () => {
  },
  hasUnread: u = !1,
  crossSelling: d
}) => {
  const [h, f] = I("idle"), [v, m] = I(null), [g, ...y] = v ?? [], [C, b] = I(!1);
  W(() => {
    m(null), f("idle");
  }, [e]);
  const x = K(async () => {
    try {
      f("fetching");
      const S = await r();
      f("idle"), m(S);
    } catch {
      f("error");
    }
  }, [r]);
  return /* @__PURE__ */ p(
    an,
    {
      open: C,
      onOpenChange: async (S) => {
        b(S), S && v === null && x(), l(S);
      },
      children: [
        /* @__PURE__ */ t(sn, { asChild: !0, children: /* @__PURE__ */ t(
          Ce,
          {
            variant: "outline",
            icon: _r,
            hideLabel: !0,
            label: n,
            pressed: C,
            append: u && /* @__PURE__ */ t(vn, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ t(Or, { children: /* @__PURE__ */ p(
          on,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ t(Vl, { title: n, url: a, onClick: o }),
              h === "fetching" && /* @__PURE__ */ t(Gl, {}),
              /* @__PURE__ */ p("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                h === "idle" && v !== null && v.length === 0 && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(Hl, { ...i, buttonUrl: a }) }),
                h === "idle" && v !== null && v.length > 0 && /* @__PURE__ */ p("div", { className: "px-1", children: [
                  /* @__PURE__ */ t(
                    jl,
                    {
                      ...g,
                      onClick: c
                    }
                  ),
                  v.length > 1 && /* @__PURE__ */ t(ie, { children: /* @__PURE__ */ t("div", { className: "pb-1", children: y.map((S, A) => /* @__PURE__ */ t(
                    Bl,
                    {
                      ...S,
                      onClick: c
                    },
                    A
                  )) }) })
                ] }),
                h === "error" && /* @__PURE__ */ t("div", { className: "p-2 pt-0", children: /* @__PURE__ */ t(
                  Wl,
                  {
                    ...s,
                    onClick: () => {
                      x();
                    }
                  }
                ) })
              ] }),
              h === "idle" && d && d.isVisible && /* @__PURE__ */ t(
                Ul,
                {
                  isVisible: d.isVisible,
                  onClose: d.onClose,
                  crossSelling: d,
                  onDropdownClose: () => b(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, jl = ({
  title: e,
  href: n,
  mediaUrl: r,
  unread: a,
  updated: i,
  onClick: s
}) => {
  const l = "flex flex-col items-stretch w-full", o = r?.includes(".mp4");
  return /* @__PURE__ */ t(
    Pi,
    {
      onClick: s,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ p(
        Te,
        {
          href: n,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: N(l, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ t("div", { className: "px-1 pt-1", children: o ? /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
              "video",
              {
                src: r,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ t("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ t(
              Va,
              {
                fetchPriority: "high",
                src: r,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ t("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ p("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ p("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ t("h3", { className: "font-medium", children: e }),
                /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: i })
              ] }),
              a && /* @__PURE__ */ t(vn, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, Bl = ({
  title: e,
  href: n,
  updated: r,
  unread: a = !1,
  onClick: i
}) => {
  const s = N("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ t(It, { asChild: !0, className: s, onClick: i, children: /* @__PURE__ */ t(
    Te,
    {
      href: n,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: N(
        s,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ p("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ p("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: e }),
          /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: r })
        ] }),
        a && /* @__PURE__ */ t(vn, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Vl = ({
  title: e,
  url: n,
  onClick: r
}) => /* @__PURE__ */ p(
  "a",
  {
    href: n,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ t("h2", { className: "text-base font-medium", children: e }),
      /* @__PURE__ */ t(
        ce,
        {
          variant: "outline",
          size: "sm",
          icon: Qt,
          label: e,
          hideLabel: !0,
          onClick: r
        }
      )
    ]
  }
), ia = ({
  icon: e,
  button: n,
  title: r,
  description: a,
  iconWrapperClassName: i
}) => /* @__PURE__ */ t("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ p("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        i
      ),
      children: e
    }
  ),
  /* @__PURE__ */ p("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ t("h3", { className: "text-pretty font-medium", children: r }),
    /* @__PURE__ */ t("p", { className: "font-normal text-f1-foreground-secondary", children: a })
  ] }),
  n
] }) }), Hl = ({
  title: e,
  buttonText: n,
  buttonUrl: r,
  description: a
}) => /* @__PURE__ */ t(
  ia,
  {
    title: e,
    description: a,
    icon: /* @__PURE__ */ t(Q, { icon: _r, size: "lg", className: "block" }),
    button: /* @__PURE__ */ t(Te, { href: r, children: /* @__PURE__ */ t(ce, { label: n }) })
  }
), Wl = ({
  title: e,
  description: n,
  buttonText: r,
  onClick: a
}) => /* @__PURE__ */ t(
  ia,
  {
    title: e,
    description: n,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ t(Q, { icon: xr, size: "lg" }),
    button: /* @__PURE__ */ t(ce, { variant: "outline", label: r, onClick: a })
  }
), Gl = () => /* @__PURE__ */ t(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ p("div", { className: "p-2", children: [
      /* @__PURE__ */ t(he, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ p("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(he, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(he, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ p("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ t(he, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ t(he, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), vn = ({ className: e = "" }) => /* @__PURE__ */ t(
  "div",
  {
    "aria-hidden": "true",
    className: N("size-2 rounded bg-f1-background-selected-bold", e)
  }
), Ul = ({
  isVisible: e,
  onClose: n,
  crossSelling: r,
  onDropdownClose: a
}) => {
  const [i, s] = I(e);
  W(() => {
    s(e);
  }, [e]);
  const l = () => {
    s(!1), n && n();
  }, o = (c) => {
    s(!1), a(), c && c();
  };
  return i && /* @__PURE__ */ p(ie, { children: [
    /* @__PURE__ */ t(cn, {}),
    /* @__PURE__ */ p("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ p("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ t("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: r?.sectionTitle }),
        n && /* @__PURE__ */ t("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ t(
          ce,
          {
            variant: "ghost",
            icon: nn,
            size: "sm",
            hideLabel: !0,
            onClick: l,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ t(
        ml,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: r?.products.map((c) => /* @__PURE__ */ t(
            Hs,
            {
              ...c,
              isVisible: !0,
              trackVisibility: c.trackVisibility,
              onClick: () => o(c.onClick)
            },
            c.title
          ))
        }
      )
    ] })
  ] });
};
function Hn({
  icon: e,
  href: n,
  label: r,
  disabled: a
}) {
  const i = z(null);
  return /* @__PURE__ */ t(
    ce,
    {
      href: n,
      title: r,
      "aria-label": r,
      disabled: a,
      ref: i,
      size: "sm",
      variant: "outline",
      label: r,
      icon: e,
      hideLabel: !0
    }
  );
}
function hd({
  module: e,
  statusTag: n = void 0,
  breadcrumbs: r = [],
  actions: a = [],
  embedded: i = !1,
  navigation: s,
  productUpdates: l,
  favorites: o,
  oneSwitchTooltip: c,
  oneSwitchAutoOpen: u
}) {
  const { sidebarState: d, toggleSidebar: h } = it(), f = [
    {
      id: e.href,
      label: e.name,
      href: e.href,
      module: e.id
    },
    ...r
  ], v = n && Object.keys(n).length !== 0, m = r.length > 0, g = !i && a.length > 0, y = !i && !!l?.isVisible, C = f[f.length - 1], b = m ? f[f.length - 2] : null;
  return /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "flex items-center justify-between px-5 py-4 xs:px-6",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ p("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ t(Ae, { children: !i && d !== "locked" && /* @__PURE__ */ t(
            j.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ t("div", { className: "mr-3", children: /* @__PURE__ */ t(
                ce,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => h(),
                  label: "Open main menu",
                  icon: Ir
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ p(
            "div",
            {
              className: N(
                "flex flex-grow items-center gap-2",
                i && m && "justify-center"
              ),
              children: [
                i && m && b && !("loading" in b) && /* @__PURE__ */ t("div", { className: "absolute left-4", children: /* @__PURE__ */ t(Te, { href: b.href, children: /* @__PURE__ */ t(
                  ce,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: kr,
                    onClick: (x) => x.preventDefault()
                  }
                ) }) }),
                i && m ? /* @__PURE__ */ t("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in C ? /* @__PURE__ */ t(he, { className: "h-4 w-24" }) : C.label }) : /* @__PURE__ */ t(
                  $l,
                  {
                    breadcrumbs: f,
                    append: o !== void 0 && /* @__PURE__ */ t(
                      _l,
                      {
                        label: o.label,
                        isMarked: o.isMarked,
                        onChange: o?.onChange
                      }
                    )
                  },
                  f[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
          !i && v && /* @__PURE__ */ t("div", { children: n.tooltip ? /* @__PURE__ */ t(tn, { label: n.tooltip, children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            kn,
            {
              text: n.text,
              variant: n.variant,
              additionalAccessibleText: n.tooltip
            }
          ) }) }) : /* @__PURE__ */ t(kn, { text: n.text, variant: n.variant }) }),
          !i && v && (s || g || y) && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          s && /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
            s.counter && /* @__PURE__ */ p("span", { className: "text-sm text-f1-foreground-secondary", children: [
              s.counter.current,
              "/",
              s.counter.total
            ] }),
            /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ t(
                Hn,
                {
                  icon: Ei,
                  label: s.previous?.title || "Previous",
                  href: s.previous?.url || "",
                  disabled: !s.previous
                }
              ),
              /* @__PURE__ */ t(
                Hn,
                {
                  icon: vt,
                  label: s.next?.title || "Next",
                  href: s.next?.url || "",
                  disabled: !s.next
                }
              )
            ] })
          ] }),
          s && g && /* @__PURE__ */ t("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (y || g) && /* @__PURE__ */ p("div", { className: "flex items-center gap-2", children: [
            y && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ t(
              Ml,
              {
                ...l,
                currentModule: e.name
              }
            ) }),
            g && /* @__PURE__ */ t("div", { className: "items-right flex gap-2", children: a.map((x, S) => /* @__PURE__ */ t(Kl, { action: x }, S)) })
          ] }),
          /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ t(
              Ar,
              {
                tooltip: c,
                autoOpen: u
              }
            ),
            /* @__PURE__ */ t(Jr, {})
          ] })
        ] })
      ]
    }
  );
}
function Kl({ action: e }) {
  const n = z(null), [r, a] = I(!1);
  return "actions" in e ? /* @__PURE__ */ t(Pt, { items: e.actions, open: r, onOpenChange: a, children: /* @__PURE__ */ t(
    Ce,
    {
      size: "md",
      variant: "outline",
      label: e.label,
      icon: e.icon,
      hideLabel: !0,
      pressed: r
    }
  ) }) : /* @__PURE__ */ t(
    Te,
    {
      href: e.href,
      title: e.label,
      "aria-label": e.label,
      ref: n,
      children: /* @__PURE__ */ t(
        ce,
        {
          size: "md",
          variant: "outline",
          label: e.label,
          icon: e.icon,
          hideLabel: !0,
          onClick: (i) => {
            i.preventDefault(), n.current?.click();
          }
        }
      )
    }
  );
}
function Jl(e) {
  return e.filter((n) => !!n.title).map(({ title: n, description: r, href: a, onClick: i, target: s }) => ({
    label: n,
    description: r,
    href: a,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function ql({ label: e, options: n, hasNewUpdate: r }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: "fixed z-10",
      style: {
        bottom: "calc(8px + env(safe-area-inset-bottom))",
        right: "calc(8px + env(safe-area-inset-right))"
      },
      children: /* @__PURE__ */ t(fn, { items: Jl(n), children: /* @__PURE__ */ p(
        "button",
        {
          className: N(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all",
            Ie()
          ),
          "aria-label": e,
          children: [
            /* @__PURE__ */ t(Q, { icon: $i, size: "sm" }),
            r && /* @__PURE__ */ t("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })
          ]
        }
      ) })
    }
  );
}
const pd = $e(
  Fe("OmniButton", ql)
);
function sa({ children: e, header: n, embedded: r = !1 }) {
  return /* @__PURE__ */ p(
    "div",
    {
      className: `flex min-h-full w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
      children: [
        n && /* @__PURE__ */ t("div", { className: "flex flex-col", children: n }),
        /* @__PURE__ */ t("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
      ]
    }
  );
}
sa.displayName = "Page";
const md = $e(Fe("Page", sa));
function Xl({
  companies: e,
  selected: n,
  onChange: r,
  isLoading: a = !1,
  withNotification: i = !1,
  additionalOptions: s = []
}) {
  const l = T(
    () => e.find((o) => o.id === n) || e[0],
    [e, n]
  );
  return a ? /* @__PURE__ */ p("div", { className: "flex w-fit items-center gap-2 p-1.5", children: [
    /* @__PURE__ */ t(he, { className: "size-6" }),
    /* @__PURE__ */ t(he, { className: "h-3 w-14" })
  ] }) : e.length + (s?.length || 0) === 1 ? /* @__PURE__ */ t("div", { className: "p-1.5", style: { maxWidth: "168px" }, children: /* @__PURE__ */ t(
    Wn,
    {
      company: l,
      withNotification: i
    }
  ) }) : /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(
    Zl,
    {
      companies: e,
      selected: l,
      onChange: r,
      additionalOptions: s,
      children: /* @__PURE__ */ t(
        Wn,
        {
          company: l,
          withNotification: i
        }
      )
    }
  ) });
}
const Zl = ({
  companies: e,
  selected: n,
  onChange: r,
  children: a,
  additionalOptions: i = []
}) => {
  const s = X(), [l, o] = I(!1), c = T(
    () => [
      ...e.map((d) => ({
        value: d.id,
        label: d.name,
        avatar: {
          type: "company",
          name: d.name,
          src: d.logo,
          "aria-label": `${d.name} logo`
        }
      })),
      ...i.length ? [{ type: "separator" }] : [],
      ...i
    ],
    [e, i]
  ), u = (d) => {
    const h = i?.find((f) => f.value === d);
    if (h?.onClick) {
      h.onClick();
      return;
    }
    r(d);
  };
  return /* @__PURE__ */ t(
    nt,
    {
      label: s.navigation.sidebar.companySelector.label,
      hideLabel: !0,
      options: c,
      value: n.id,
      onChange: u,
      placeholder: s.navigation.sidebar.companySelector.placeholder,
      open: l,
      onOpenChange: o,
      children: /* @__PURE__ */ p(
        "div",
        {
          className: N(
            "group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover",
            Ie()
          ),
          "data-testid": "company-selector-button",
          tabIndex: 0,
          title: n?.name,
          children: [
            a,
            /* @__PURE__ */ t("div", { className: "flex w-5 shrink-0 items-center justify-center", children: /* @__PURE__ */ t("div", { className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all", children: /* @__PURE__ */ t(
              j.div,
              {
                animate: { rotate: l ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
                children: /* @__PURE__ */ t(Q, { icon: vt, size: "xs" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}, Wn = ({
  company: e,
  withNotification: n = !1
}) => /* @__PURE__ */ p(
  "div",
  {
    className: N(
      "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"
    ),
    children: [
      /* @__PURE__ */ t(
        Ha,
        {
          name: e?.name?.[0],
          src: e?.logo,
          size: "sm",
          badge: n ? { icon: Mr, type: "highlight" } : void 0
        }
      ),
      /* @__PURE__ */ t(je, { tag: "span", children: e?.name ?? "" })
    ]
  }
);
function gd({
  user: e,
  options: n,
  showActivityButton: r = !1,
  activityButtonShortcut: a,
  onActivityButtonClick: i,
  onDropdownClick: s,
  hasActivityUpdates: l
}) {
  const o = X();
  return /* @__PURE__ */ p("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(fn, { items: n, children: /* @__PURE__ */ p(
      "button",
      {
        className: N(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          Ie("focus-visible:ring-inset")
        ),
        onClick: s,
        children: [
          /* @__PURE__ */ t(
            br,
            {
              src: e.avatarUrl,
              firstName: e.firstName,
              lastName: e.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ t(je, { children: `${e.firstName} ${e.lastName}` })
        ]
      }
    ) }) }),
    r && /* @__PURE__ */ t(tn, { label: o.notifications, shortcut: a, children: /* @__PURE__ */ p("div", { className: "relative", children: [
      /* @__PURE__ */ t(
        ce,
        {
          icon: zi,
          label: o.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      l && /* @__PURE__ */ t("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ t(Wa, { type: "highlight", size: "sm", icon: Mr }) })
    ] }) })
  ] });
}
function Yl({ isExpanded: e }) {
  return /* @__PURE__ */ p(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ t(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            id: "arrow",
            d: e ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: N(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: N(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function Ql() {
  const { prevSidebarState: e, sidebarState: n, toggleSidebar: r, isSmallScreen: a } = it(), i = z(null);
  return W(() => {
    e === "hidden" && n === "locked" && i.current?.focus();
  }, [e, n]), /* @__PURE__ */ p(
    mr,
    {
      variant: "ghost",
      size: "md",
      onClick: () => r(),
      className: "group hover:bg-f1-background-hover",
      title: "Close Sidebar",
      ref: i,
      compact: !0,
      "aria-label": "Close Sidebar",
      children: [
        /* @__PURE__ */ t("div", { className: N("hidden", { flex: !a }), children: /* @__PURE__ */ t(Yl, { isExpanded: n === "locked" }) }),
        /* @__PURE__ */ t("div", { className: N("hidden", { flex: a }), children: /* @__PURE__ */ t(Q, { icon: nn, size: "md" }) })
      ]
    }
  );
}
function bd({
  companies: e,
  selected: n,
  onChange: r,
  withNotification: a = !1,
  additionalOptions: i,
  isLoading: s = !1
}) {
  return /* @__PURE__ */ p("div", { className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3", children: [
    /* @__PURE__ */ t(
      Xl,
      {
        companies: e,
        selected: n,
        onChange: r,
        isLoading: s,
        withNotification: a,
        additionalOptions: i
      }
    ),
    /* @__PURE__ */ t(Ql, {})
  ] });
}
function eo() {
  const [e, n] = I(!1);
  return W(() => {
    n(window.matchMedia("(pointer: coarse)").matches);
  }, []), e;
}
const la = Ke(void 0);
function to({ children: e }) {
  const [n, r] = I(!1), [a, i] = I(null);
  return /* @__PURE__ */ t(
    la.Provider,
    {
      value: { isDragging: n, setIsDragging: r, draggedItemId: a, setDraggedItemId: i },
      children: e
    }
  );
}
function yn() {
  const e = Ue(la);
  if (!e)
    throw new Error("useDragContext must be used within a DragProvider");
  return e;
}
const no = ({
  item: e,
  active: n
}) => /* @__PURE__ */ p("div", { className: "flex w-full items-center justify-between", children: [
  /* @__PURE__ */ p("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
    /* @__PURE__ */ t(
      Q,
      {
        icon: e.icon,
        size: "md",
        className: N(
          "transition-colors",
          n ? "text-f1-icon-bold" : "text-f1-icon"
        )
      }
    ),
    /* @__PURE__ */ t("span", { children: e.label })
  ] }),
  e.badge && /* @__PURE__ */ t(yr, { value: e.badge, size: "sm", type: "bold" })
] }), ro = ({ item: e }) => {
  const { isActive: n } = Ot(), { label: r, icon: a, ...i } = e, s = n(i.href, { exact: i.exactMatch });
  return /* @__PURE__ */ t(
    Te,
    {
      ...i,
      className: N(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        Ie("focus-visible:ring-inset"),
        s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"
      ),
      children: /* @__PURE__ */ t(no, { item: e, active: s })
    }
  );
}, ao = ({
  item: e,
  tooltip: n,
  dragConstraints: r,
  onRemove: a,
  index: i,
  total: s,
  onMove: l,
  onReorderFinish: o,
  isSortable: c = !0
}) => {
  const u = X(), { isDragging: d, setIsDragging: h, draggedItemId: f, setDraggedItemId: v } = yn(), { isActive: m } = Ot(), g = m(e.href, { exact: e.exactMatch }), y = z(!1), [C, b] = I(!1), x = i === 0, S = i === s - 1, A = s === 1, D = T(() => {
    const w = [];
    return !A && !x && w.push({
      label: u.actions.moveUp,
      onClick: () => l?.(i, i - 1),
      icon: _i
    }), !A && !S && w.push({
      label: u.actions.moveDown,
      onClick: () => l?.(i, i + 1),
      icon: Mi
    }), w.length > 0 && w.push({ type: "separator" }), w.push({
      label: u.favorites.remove,
      onClick: () => a?.(e),
      icon: ji,
      critical: !0
    }), w;
  }, [A, x, S, u, l, i, a, e]), F = () => {
    h(!0), b(!1), v(e.href || null), y.current = !0;
  }, $ = () => {
    h(!1), v(null), o(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, L = d && f === e.href, V = T(
    () => N(
      "group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing",
      c && "touch-none",
      g ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary",
      C && "bg-f1-background-secondary",
      L && "bg-f1-background-secondary"
    ),
    [g, C, L, c]
  ), M = T(() => /* @__PURE__ */ p(ie, { children: [
    /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-between px-1.5 py-1.5", children: /* @__PURE__ */ t(so, { tooltip: n, children: /* @__PURE__ */ p(
      Te,
      {
        onClick: e.onClick,
        href: e.href,
        exactMatch: e.exactMatch,
        className: N(
          // w-[calc(100%-24px-2px)] - here 24px is the size of the dropdown button and 2 px is the gap
          "flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline",
          L && "pointer-events-none"
        ),
        draggable: !1,
        children: [
          e.type === "icon" ? /* @__PURE__ */ t(
            Q,
            {
              icon: e.icon,
              size: "md",
              className: N(
                "transition-colors",
                g ? "text-f1-icon-bold" : "text-f1-icon"
              )
            }
          ) : e.avatar ? /* @__PURE__ */ t(en, { size: "xs", avatar: e.avatar }) : null,
          /* @__PURE__ */ t(
            je,
            {
              tag: "span",
              className: "line-clamp-1 font-medium text-f1-foreground",
              lines: 1,
              noTooltip: !!n,
              children: e.label
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ t(
      "div",
      {
        className: N(
          "absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100",
          C && "bg-f1-background-secondary opacity-100",
          L && "opacity-100"
        ),
        children: /* @__PURE__ */ t(
          fn,
          {
            open: C,
            onOpenChange: b,
            items: D,
            children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center", role: "list", children: /* @__PURE__ */ t(Q, { icon: ln, size: "sm" }) })
          }
        )
      }
    )
  ] }), [e, g, C, L, D, n]);
  return c ? /* @__PURE__ */ t(
    hn,
    {
      value: e,
      drag: "y",
      dragConstraints: r,
      dragElastic: 0.1,
      onDragStart: F,
      onDragEnd: $,
      className: V,
      whileDrag: {
        scale: 1.05
      },
      children: M
    }
  ) : /* @__PURE__ */ t("div", { className: V, children: M });
}, oa = ({
  title: e,
  isOpen: n = !0,
  isRoot: r,
  onCollapse: a,
  children: i,
  isDragging: s,
  wasDragging: l
}) => {
  const [o, c] = I(n), u = Ft(), d = () => {
    if (s || l?.current) return;
    const h = !o;
    c(h), a?.(h);
  };
  return /* @__PURE__ */ t("div", { children: /* @__PURE__ */ p(Lr, { open: o, children: [
    /* @__PURE__ */ t("div", { className: "group relative flex items-center", children: /* @__PURE__ */ p(
      "div",
      {
        className: N(
          "group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary",
          Ie("focus-visible:ring-inset"),
          r && "hidden"
        ),
        onClick: d,
        tabIndex: 0,
        onKeyDown: (h) => {
          (h.key === "Enter" || h.key === " ") && d();
        },
        children: [
          e,
          /* @__PURE__ */ t(
            j.div,
            {
              initial: !1,
              animate: { rotate: o ? 0 : -90 },
              transition: { duration: u ? 0 : 0.1 },
              className: "h-3 w-3",
              children: /* @__PURE__ */ t(
                Q,
                {
                  icon: vt,
                  size: "xs",
                  className: "text-f1-icon-secondary"
                }
              )
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ t(Pr, { forceMount: !0, className: "flex flex-col gap-1", children: /* @__PURE__ */ t(
      j.div,
      {
        initial: !1,
        animate: {
          height: o ? "auto" : 0,
          opacity: o ? 1 : 0,
          visibility: o ? "visible" : "hidden"
        },
        transition: {
          duration: u ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-0.5", children: i })
      }
    ) })
  ] }) });
}, Ht = ({
  category: e,
  isSortable: n = !1,
  dragConstraints: r,
  onCollapse: a,
  onDragEnd: i,
  currentOrder: s
}) => {
  const { isDragging: l, setIsDragging: o } = yn(), c = z(!1), u = jr(), d = () => {
    o(!0), c.current = !0;
  }, h = () => {
    o(!1), setTimeout(() => {
      c.current = !1, s && i?.(s);
    }, 0);
  }, f = (m) => {
    !l && !c.current && a?.(e, m);
  }, v = /* @__PURE__ */ t(
    oa,
    {
      title: e.title,
      isOpen: e.isOpen,
      isRoot: e.isRoot,
      onCollapse: f,
      isDragging: l,
      wasDragging: c,
      children: /* @__PURE__ */ t(
        "div",
        {
          className: N(
            "flex flex-col gap-0.5",
            l && !c.current && "pointer-events-none"
          ),
          children: e.items.map((m, g) => /* @__PURE__ */ t(ro, { item: m }, g))
        }
      )
    }
  );
  return n ? /* @__PURE__ */ t(
    hn,
    {
      id: e.id,
      value: e,
      dragConstraints: r,
      dragElastic: 0.1,
      dragControls: u,
      onDragStart: d,
      onDragEnd: h,
      layout: !0,
      layoutId: `category-${e.id}`,
      initial: { opacity: 1 },
      animate: { opacity: 1, scale: 1 },
      exit: {
        opacity: 0,
        scale: 0.95,
        filter: "blur(8px)"
      },
      transition: {
        opacity: { duration: 0.2, ease: "easeInOut" },
        filter: { duration: 0.1, ease: "easeInOut" },
        scale: {
          duration: 0.2,
          ease: [0.175, 0.885, 0.32, 1.275]
        },
        layout: { type: "spring", bounce: 0.1, damping: 15 }
      },
      whileDrag: {
        scale: 1.04,
        cursor: "grabbing",
        zIndex: 50,
        backdropFilter: "blur(4px)"
      },
      className: "relative",
      children: v
    }
  ) : v;
};
function vd({
  tree: e,
  onCollapse: n,
  onSort: r,
  onFavoritesChange: a,
  favorites: i
}) {
  const s = z(null), l = e.filter(
    (m) => m.isSortable === !1
  ), [o, c] = I(
    e.filter((m) => m.isSortable !== !1)
  ), [u, d] = I(0), h = K((m) => {
    c(m);
  }, []), f = K(
    (m) => {
      r?.(m);
    },
    [r]
  ), v = eo();
  return /* @__PURE__ */ t(to, { children: /* @__PURE__ */ t(rn, { id: "sidebar-menu", children: /* @__PURE__ */ t(
    io,
    {
      disableDragging: v,
      nonSortableItems: l,
      sortableItems: o,
      setSortableItems: h,
      containerRef: s,
      onCollapse: n,
      onDragEnd: f,
      favorites: i,
      onFavoritesChange: a,
      forceUpdate: () => d((m) => m + 1)
    },
    u
  ) }) });
}
function io({
  nonSortableItems: e,
  sortableItems: n,
  setSortableItems: r,
  containerRef: a,
  onCollapse: i,
  onDragEnd: s,
  favorites: l = [],
  onFavoritesChange: o,
  forceUpdate: c,
  disableDragging: u = !1
}) {
  const d = X(), { isDragging: h } = yn(), f = e.some((k) => k.isRoot), v = e.filter((k) => !k.isRoot).length > 0, m = n.length > 0, g = z(null), [y, C] = I(l), b = l.length > 0;
  W(() => {
    JSON.stringify(l) !== JSON.stringify(y) && C(l);
  }, [l]);
  const x = (k) => {
    C(k);
  }, S = K(
    (k) => {
      const P = y.filter((H) => H.href !== k.href);
      C(P), o?.(P);
    },
    [y, o]
  ), A = K(
    (k, P) => {
      if (P < 0 || P >= y.length) return;
      const H = [...y], [pe] = H.splice(k, 1);
      H.splice(P, 0, pe), C(H), o?.(H);
    },
    [y, o]
  ), [D, F] = I(!1), $ = z(null);
  W(() => {
    n.length > 0 && !D && (r([...n]), F(!0));
  }, [n, r, D]), W(() => {
    const k = () => {
      $.current !== null && window.clearTimeout($.current), $.current = window.setTimeout(() => {
        a.current && n.length > 0 && c();
      }, 50);
    };
    return window.addEventListener("resize", k), () => {
      window.removeEventListener("resize", k), $.current !== null && window.clearTimeout($.current);
    };
  }, [a, n, c]);
  const L = "flex flex-col gap-0.5", V = T(
    () => y.reduce(
      (k, P, H) => (P.label in k || (k[P.label] = []), k[P.label].push(H), k),
      {}
    ),
    [y]
  ), M = T(
    () => b && y.map((k, P) => /* @__PURE__ */ t(
      ao,
      {
        isSortable: !u,
        tooltip: (V[k.label] ?? []).length > 1 ? k.tooltip : void 0,
        item: k,
        dragConstraints: g,
        onRemove: S,
        index: P,
        total: y.length,
        onMove: A,
        onReorderFinish: () => {
          o?.(y);
        }
      },
      `${k.href}-${k.label}`
    )),
    [
      b,
      y,
      V,
      S,
      A,
      o,
      u
    ]
  ), w = "flex flex-col gap-3", R = T(() => n.map((k) => /* @__PURE__ */ t(
    Ht,
    {
      category: k,
      isSortable: !u,
      dragConstraints: a,
      onCollapse: i,
      onDragEnd: s,
      currentOrder: n
    },
    k.id
  )), [n, u, a, i, s]);
  return /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "relative",
        h && "cursor-grabbing [&_*]:cursor-grabbing"
      ),
      children: [
        f && /* @__PURE__ */ t("div", { className: "flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((k) => k.isRoot).map((k, P) => /* @__PURE__ */ t(
          Ht,
          {
            category: k,
            onCollapse: i
          },
          `fixed-${P}`
        )) }),
        b && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: /* @__PURE__ */ t(oa, { title: d.favorites.favorites, children: /* @__PURE__ */ t("div", { ref: g, children: u ? /* @__PURE__ */ t("div", { className: L, children: M }) : /* @__PURE__ */ t(
          Jt,
          {
            axis: "y",
            values: y,
            onReorder: x,
            className: L,
            children: M
          }
        ) }) }) }),
        v && /* @__PURE__ */ t("div", { className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3", children: e.filter((k) => !k.isRoot).map((k, P) => /* @__PURE__ */ t(
          Ht,
          {
            category: k,
            onCollapse: i
          },
          `fixed-${P}`
        )) }),
        m && /* @__PURE__ */ t(
          "div",
          {
            className: N(
              "mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"
            ),
            ref: a,
            children: u ? /* @__PURE__ */ t("div", { className: w, children: R }) : /* @__PURE__ */ t(
              Jt,
              {
                axis: "y",
                values: n,
                onReorder: r,
                layoutScroll: !0,
                className: w,
                children: R
              }
            )
          }
        )
      ]
    }
  );
}
const so = ({
  tooltip: e,
  children: n
}) => e ? /* @__PURE__ */ t(tn, { description: e, children: n }) : n;
function yd({
  onClick: e,
  placeholder: n,
  shortcut: r = ["cmd", "k"],
  ...a
}) {
  return /* @__PURE__ */ t("div", { className: "px-3", children: /* @__PURE__ */ p(
    "button",
    {
      onClick: e,
      className: N(
        "mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover",
        Ie()
      ),
      type: "button",
      ...a,
      children: [
        /* @__PURE__ */ p("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ t(Q, { icon: Br, size: "md" }),
          /* @__PURE__ */ t("span", { children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden xs:block", children: /* @__PURE__ */ t(Ga, { keys: r }) })
      ]
    }
  ) });
}
const Gn = ({ position: e }) => /* @__PURE__ */ t(
  j.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: N(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      e === "top" ? [
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
function lo({
  header: e,
  body: n,
  footer: r,
  onFooterDropdownClick: a
}) {
  const { sidebarState: i, isSmallScreen: s } = it(), l = Ft(), [o, c] = In({ threshold: 1 }), [u, d] = In({ threshold: 1 }), h = X(), f = {
    x: {
      ease: i !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: l ? 0 : i !== "locked" && !s ? 0.3 : 0.2
    },
    top: { duration: l ? 0 : 0.1 },
    left: { duration: l ? 0 : 0.1 },
    default: { duration: l ? 0 : 0.2 }
  }, v = () => r ? ri(r) && a ? ai(
    r,
    {
      onDropdownClick: a
    }
  ) : r : null;
  return /* @__PURE__ */ p(
    j.aside,
    {
      initial: !1,
      "aria-label": h.navigation.sidebar.label,
      className: N(
        "absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]",
        i === "locked" ? "h-full" : N(
          "shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl",
          s ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60"
        )
      ),
      animate: {
        top: i === "locked" || s ? 0 : "8px",
        borderRadius: i === "locked" || s ? "0" : "12px",
        left: i === "locked" ? "0" : s ? 0 : "8px",
        x: i === "hidden" ? -260 : 0,
        opacity: i === "hidden" ? s ? 0.7 : 0 : 1,
        pointerEvents: i === "hidden" ? "none" : "auto"
      },
      transition: f,
      children: [
        /* @__PURE__ */ t("header", { className: "flex-shrink-0", children: e }),
        n && /* @__PURE__ */ p("nav", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ p(un, { className: "h-full", children: [
            /* @__PURE__ */ t(
              "div",
              {
                ref: o,
                className: "h-px",
                "aria-hidden": "true"
              },
              "top-ref"
            ),
            /* @__PURE__ */ t("div", { className: "w-[var(--ds-sidebar-width)]", children: n }),
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
          /* @__PURE__ */ p(Ae, { children: [
            !c && /* @__PURE__ */ t(Gn, { position: "top" }, "shadow-scroll-top"),
            !d && /* @__PURE__ */ t(Gn, { position: "bottom" }, "shadow-scroll-bottom")
          ] })
        ] }),
        /* @__PURE__ */ t("footer", { className: "flex-shrink-0", children: v() })
      ]
    }
  );
}
const xd = $e(lo), oo = ({
  tabs: e,
  activeTabId: n,
  setActiveTabId: r,
  secondary: a = !1,
  embedded: i = !1
}) => {
  const s = e[0], [l, o] = I(
    n ?? ("id" in s ? s.id : void 0)
  );
  W(() => {
    l && r?.(l);
  }, [r, l]);
  const { isActive: c } = Ot(), u = i ? [e[0]] : e, h = [...u].sort(
    (f, v) => f.index ? 1 : v.index ? -1 : 0
  ).find(
    (f) => "href" in f ? c(f.href) : l === f.id
  );
  return /* @__PURE__ */ t(
    Vr,
    {
      secondary: a,
      asChild: !0,
      "aria-label": a ? "primary-navigation" : "secondary-navigation",
      children: u.length === 1 ? /* @__PURE__ */ t("li", { className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground", children: u[0].label }) : u.map(({ label: f, ...v }, m) => {
        const g = h && "href" in h && "href" in v ? h.href === v.href : "id" in v && l === v.id;
        return /* @__PURE__ */ t(
          ht,
          {
            active: g,
            href: "href" in v ? v.href : void 0,
            onClick: () => {
              "id" in v && o?.(v.id);
            },
            secondary: a,
            asChild: !0,
            children: /* @__PURE__ */ p(Te, { role: "link", ...v, children: [
              v.variant === "upsell" && /* @__PURE__ */ t(
                Q,
                {
                  icon: Bi,
                  size: "md",
                  className: "mr-1 text-[hsl(var(--promote-50))]"
                }
              ),
              f
            ] })
          },
          m
        );
      })
    }
  );
}, co = ({
  secondary: e
}) => /* @__PURE__ */ p(
  Vr,
  {
    "aria-label": e ? "Secondary empty nav" : "Main empty nav",
    secondary: e,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t(ht.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ t(ht.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ t(ht.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ t(ht.Skeleton, { className: "w-20" })
    ]
  }
), wd = $e(
  Fe("Tabs", Ua(oo, co))
), uo = (e) => {
  if (!e)
    return [];
  const n = e();
  return (Array.isArray(n) ? n : [n]).filter(
    (r) => r !== void 0
  );
}, fo = 2, ho = (e) => "items" in e, po = (e) => "label" in e && !("items" in e), Un = (e) => e.every(ho) ? e : e.every(po) ? [
  {
    items: e
  }
] : e.map((n) => ({
  items: n
})), mo = (e) => e ? typeof e == "function" ? Un(e() || []) : "actions" in e ? Un(e.actions() || []) : [] : [], go = (e) => e.map((n) => ({
  ...n,
  items: n.items.filter(
    (r) => r.enabled === void 0 || r.enabled
  )
}));
function bo(e) {
  return "items" in e;
}
const vo = (e) => Array.isArray(e) ? e.every((n) => bo(n)) ? e : [
  {
    items: e
  }
] : [e], Kn = ({ message: e }) => /* @__PURE__ */ p("div", { className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2", children: [
  /* @__PURE__ */ t(Hi, { type: "warning", size: "sm" }),
  /* @__PURE__ */ t("p", { className: "flex-1 font-medium text-f1-foreground-warning", children: e })
] }), yo = ({
  isOpen: e,
  secondaryActions: n = [],
  selectedNumber: r = void 0,
  onUnselect: a,
  warningMessage: i,
  allPagesSelection: s = !1,
  isAllItemsSelected: l = !1,
  totalItems: o,
  ...c
}) => {
  const { t: u, ...d } = X(), h = r === 1 ? d.status.selected.singular : d.status.selected.plural, f = s && l && o !== void 0, v = n.slice(0, 2), m = n.slice(2).map((x) => ({
    ...x,
    critical: x.critical || !1
  })), g = T(
    () => vo(c.primaryActions ?? []),
    [c.primaryActions]
  ), y = T(() => g.map((x) => ({
    ...x,
    items: x.items.map((S) => ({
      value: S.label,
      label: S.label,
      icon: S.icon,
      critical: S.critical,
      description: S.description,
      disabled: S.disabled
    }))
  })), [g]), C = T(() => g.length === 1 && g[0].items.length === 1 ? g[0].items[0] : null, [g]), b = K(
    (x) => g.flatMap((S) => S.items).find((S) => S.label === x),
    [g]
  );
  return /* @__PURE__ */ t(Ae, { children: e && /* @__PURE__ */ p(
    j.div,
    {
      initial: { opacity: 0, y: 32, filter: "blur(6px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 32, filter: "blur(6px)" },
      transition: { ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 },
      className: N(
        "fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col gap-2 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg backdrop-blur-sm dark:bg-f1-background-inverse-secondary sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8",
        i && "sm:py-1 sm:pr-1"
      ),
      children: [
        r && /* @__PURE__ */ p("div", { className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0", children: [
          f ? /* @__PURE__ */ t("span", { className: "font-medium tabular-nums", children: u("status.selected.allItemsSelected", {
            total: o ?? 0
          }) }) : /* @__PURE__ */ p("span", { className: "flex items-center gap-1 font-medium tabular-nums", children: [
            /* @__PURE__ */ t(
              Vi,
              {
                value: r,
                spinTiming: {
                  duration: 200,
                  easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }
              }
            ),
            /* @__PURE__ */ t(je, { className: "text-f1-foreground", children: h })
          ] }),
          /* @__PURE__ */ t(
            ce,
            {
              variant: "outline",
              label: d.actions.unselect,
              onClick: a,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ p("div", { className: "dark", children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: N(
                "flex flex-col items-center gap-2 sm:hidden",
                !i && "[&_button]:w-full [&_div]:w-full"
              ),
              children: i ? /* @__PURE__ */ t(Kn, { message: i }) : /* @__PURE__ */ p(gt, { children: [
                /* @__PURE__ */ t(Cl, { items: n }),
                C ? /* @__PURE__ */ t(
                  ce,
                  {
                    label: C.label,
                    icon: C.icon,
                    onClick: C.onClick,
                    disabled: C.disabled
                  }
                ) : /* @__PURE__ */ t(
                  rt,
                  {
                    items: y,
                    onClick: (x) => {
                      b(x)?.onClick?.();
                    }
                  }
                )
              ] }, "mobile-actions")
            }
          ),
          /* @__PURE__ */ t("div", { className: "hidden items-center gap-2 sm:flex", children: i ? /* @__PURE__ */ t(Kn, { message: i }) : /* @__PURE__ */ p(gt, { children: [
            m.length > 0 && /* @__PURE__ */ t(Pt, { items: m }),
            v.slice().reverse().map((x) => /* @__PURE__ */ t(
              ce,
              {
                variant: x.critical ? "critical" : "outline",
                label: x.label,
                icon: x.icon,
                onClick: x.onClick,
                disabled: x.disabled
              },
              x.label
            )),
            C ? /* @__PURE__ */ t(
              ce,
              {
                label: C.label,
                icon: C.icon,
                onClick: C.onClick,
                disabled: C.disabled
              }
            ) : /* @__PURE__ */ t(ie, { children: /* @__PURE__ */ t(
              rt,
              {
                items: y,
                onClick: (x) => {
                  b(x)?.onClick?.();
                }
              }
            ) })
          ] }, "desktop-actions") })
        ] })
      ]
    }
  ) });
}, xo = ({
  primaryActions: e,
  primaryActionsLabel: n,
  secondaryActions: r,
  otherActions: a
}) => {
  const i = (Array.isArray(e) ? e : [e]).filter((d) => d !== void 0), s = r || [], l = T(
    () => (a || []).map((d) => d.items).reduce((d, h) => (d.length > 0 && d.push({ type: "separator" }), d.push(...h), d), []),
    [a]
  ), [o, c] = I(!1), u = i.some(
    (d) => d.description !== void 0
  );
  return i.length === 0 && s.length === 0 && l.length === 0 ? null : /* @__PURE__ */ p("div", { className: "flex flex-row-reverse items-center gap-2", children: [
    u ? /* @__PURE__ */ t(
      rt,
      {
        mode: "dropdown",
        size: "md",
        trigger: n,
        items: i.map((d, h) => ({
          label: d.label,
          icon: d.icon,
          description: d.description,
          value: h.toString()
        })),
        onClick: (d) => {
          i[Number(d)]?.onClick?.();
        }
      }
    ) : i.length === 1 ? /* @__PURE__ */ t(
      ce,
      {
        size: "md",
        onClick: i[0].onClick,
        icon: i[0].icon,
        variant: "default",
        label: i[0].label,
        loading: i[0].loading,
        disabled: i[0].disabled
      }
    ) : i.length > 1 && /* @__PURE__ */ t(
      rt,
      {
        size: "md",
        items: i.map((d, h) => ({
          label: d.label,
          icon: d.icon,
          value: h.toString()
        })),
        onClick: (d) => {
          i[Number(d)]?.onClick?.();
        }
      }
    ),
    s?.map((d) => /* @__PURE__ */ t(
      ce,
      {
        size: "md",
        onClick: d.onClick,
        icon: d.icon,
        variant: "outline",
        hideLabel: d.hideLabelWhenExpanded,
        label: d.label,
        disabled: d.disabled,
        loading: d.loading
      },
      d.label
    )),
    l.length > 0 && /* @__PURE__ */ t(
      Pt,
      {
        items: l,
        align: "end",
        open: o,
        onOpenChange: c,
        children: /* @__PURE__ */ t(
          Ce,
          {
            variant: "outline",
            icon: dn,
            label: "Actions",
            hideLabel: !0,
            pressed: o
          }
        )
      }
    )
  ] });
};
function wo({
  filter: e,
  value: n,
  onChange: r
}) {
  const a = X(), i = {
    granularity: "day",
    ...e
  }, s = Array.isArray(i.granularity) ? i.granularity : [i.granularity], l = Wi(
    n.granularity || s[0]
  );
  return /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t(
    Gi,
    {
      onSelect: (c) => {
        !c || !c.value || r({
          value: c.value,
          granularity: c.granularity,
          valueString: l.toString(c.value, a)
        });
      },
      defaultValue: n,
      granularities: s,
      minDate: i.min,
      maxDate: i.max,
      presets: i.presets,
      hideGoToCurrent: i.hideGoToCurrent
    }
  ) });
}
const Co = (e) => "date" in e, No = {
  valueConverter: function(e, n, r) {
    const a = Array.isArray(n.granularity) ? n.granularity : [n.granularity], i = n.defaultGranularity || a[0] || "day";
    if (e || (e = /* @__PURE__ */ new Date()), Co(e))
      return e;
    const s = Ui[i];
    return {
      value: s.toRange(e),
      valueString: s.toString(e, r),
      granularity: i
    };
  },
  render: (e) => /* @__PURE__ */ t(wo, { ...e })
}, ca = {
  "date-navigator": No
}, Jn = ({
  navigationFilters: e,
  currentNavigationFilters: n,
  onChangeNavigationFilters: r
}) => /* @__PURE__ */ t(ie, { children: e && Object.entries(e).map(([a, i]) => {
  const s = ca[i.type];
  return /* @__PURE__ */ t(St.Fragment, { children: s.render({
    filter: i,
    value: n[a],
    onChange: (l) => {
      r({
        ...n,
        [a]: l
      });
    }
  }) }, a);
}) }), qn = ({ loading: e }) => e ? /* @__PURE__ */ t(Q, { icon: Ki, className: "animate-spin" }) : /* @__PURE__ */ t(Q, { icon: Br, className: "text" }), So = ({ value: e, onChange: n, loading: r = !1 }) => {
  const [a, i] = I(!1), s = wr(), l = z(null), o = z(null), c = X(), u = () => {
    n(void 0), i(!1), o?.current && (o.current.value = "");
  };
  Ka(l, () => {
    a && i(!1);
  });
  const d = () => {
    a || (i(!0), setTimeout(() => {
      o.current?.focus();
    }, 0));
  }, h = (f) => {
    a ? f.key === "Escape" && (f.preventDefault(), u(), i(!1)) : (f.key === "Enter" || f.key === " ") && (f.preventDefault(), d());
  };
  return /* @__PURE__ */ t(rn, { id: s, children: /* @__PURE__ */ t(
    Sr,
    {
      transition: { duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] },
      children: /* @__PURE__ */ t(Ae, { children: /* @__PURE__ */ t(
        j.div,
        {
          layout: !0,
          ref: l,
          className: N(
            "relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center",
            (a || e) && "w-[180px]"
          ),
          children: a ? /* @__PURE__ */ t(
            j.div,
            {
              layout: !0,
              layoutId: "search-container",
              className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
              style: { borderRadius: 12 },
              children: /* @__PURE__ */ p(
                j.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
                  style: { borderRadius: 11 },
                  children: [
                    /* @__PURE__ */ t(
                      j.div,
                      {
                        className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ t(qn, { loading: r }, "loading")
                      }
                    ),
                    /* @__PURE__ */ t(
                      j.input,
                      {
                        layout: !0,
                        ref: o,
                        type: "text",
                        value: e,
                        placeholder: c.actions.search,
                        onChange: (f) => n(f.target.value),
                        className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        onKeyDown: h
                      }
                    ),
                    /* @__PURE__ */ t(
                      j.div,
                      {
                        tabIndex: 0,
                        className: N(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          Ie()
                        ),
                        onClick: (f) => {
                          f.stopPropagation(), u();
                        },
                        onKeyDown: (f) => {
                          (f.key === "Enter" || f.key === " ") && u();
                        },
                        role: "button",
                        "aria-label": c.actions.clear,
                        children: /* @__PURE__ */ t(Q, { icon: Fn, size: "md", color: "secondary" })
                      }
                    )
                  ]
                }
              )
            }
          ) : /* @__PURE__ */ t(
            j.div,
            {
              role: "button",
              "aria-label": c.actions.search,
              tabIndex: 0,
              layout: !0,
              layoutId: "search-container",
              className: N(
                "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
                Ie()
              ),
              onClick: d,
              onKeyDown: h,
              style: { borderRadius: 10 },
              children: /* @__PURE__ */ p(
                j.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
                  style: { borderRadius: 9 },
                  children: [
                    /* @__PURE__ */ t(
                      j.div,
                      {
                        className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ t(qn, { loading: r })
                      }
                    ),
                    e && /* @__PURE__ */ p("div", { className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5", children: [
                      /* @__PURE__ */ t(
                        j.div,
                        {
                          layout: !0,
                          className: "line-clamp-1 overflow-hidden py-2 pl-7",
                          children: e
                        }
                      ),
                      /* @__PURE__ */ t(
                        j.div,
                        {
                          tabIndex: 0,
                          className: N(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            Ie()
                          ),
                          onClick: (f) => {
                            f.stopPropagation(), u();
                          },
                          onKeyDown: (f) => {
                            (f.key === "Enter" || f.key === " ") && u();
                          },
                          role: "button",
                          "aria-label": c.actions.clear,
                          children: /* @__PURE__ */ t(
                            Q,
                            {
                              icon: Fn,
                              size: "md",
                              color: "secondary"
                            }
                          )
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          )
        }
      ) })
    }
  ) });
}, Xn = ({
  isReady: e,
  totalItemSummaryResult: n
}) => /* @__PURE__ */ t("div", { className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold", children: e ? /* @__PURE__ */ p("div", { className: "flex h-5 items-center", children: [
  " ",
  n
] }) : /* @__PURE__ */ t(he, { className: "h-5 w-24" }) }), ko = [
  "filters",
  "navigationFilters",
  "sortings",
  "grouping",
  "visualization",
  "search",
  "visualizationFilters"
], Zn = ["*", "all"], Io = (e) => {
  const n = /* @__PURE__ */ new Set();
  return e ? (e.some((r) => Zn.includes(r)) && ko.forEach((r) => {
    n.add(r);
  }), e.filter((r) => !Zn.includes(r)).forEach((r) => {
    r.startsWith("!") ? n.delete(r.slice(1)) : n.add(r);
  }), Array.from(n)) : [];
}, Ao = (e) => {
  if (!e || typeof e != "string")
    return !1;
  const n = e.lastIndexOf("/");
  if (n === -1)
    return !1;
  const r = e.substring(0, n), a = e.substring(n + 1);
  return !(!r || r.trim() === "" || !a || !/^v[0-9]+$/.test(a));
}, Ro = (e, n, r, a) => {
  const [i, s] = I(!1), l = Ji();
  e && !Ao(e) && console.error(
    `Invalid storage key format: "${e}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
  );
  const o = T(
    // Settings is always included
    () => [...Io(n), "settings"],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
    [JSON.stringify(n)]
  ), c = T(() => !a && !!e, [a, e]);
  W(() => {
    if (!c) {
      s(!0);
      return;
    }
    l.get(e).then((h) => {
      Object.entries(r).forEach(
        ([f, v]) => {
          if (o.includes(
            f
          )) {
            const m = h[f];
            m !== void 0 && v.setValue(
              m
            );
          }
        }
      ), s(!0);
    });
  }, [e, c]);
  const u = T(
    () => JSON.stringify(
      Object.entries(r).map(
        ([h, f]) => [
          h,
          f.value
        ]
      )
    ),
    [r]
  ), d = Ja(
    (h) => {
      if (!c || !i)
        return;
      const f = Object.fromEntries(
        Object.entries(h).map(([v, m]) => o.includes(v) ? [v, m.value] : [v, void 0]).filter(([v, m]) => m !== void 0)
      );
      if (Object.keys(f).length === 0) {
        l.set(e, {});
        return;
      }
      l.set(e, f);
    },
    200
  );
  return W(() => {
    d(r);
  }, [
    e,
    o,
    l,
    i,
    u
  ]), {
    storageReady: i
  };
}, Do = (e) => e.some(
  (n) => n.filters !== void 0 || n.presets !== void 0
), Ye = (e) => String(e), Wt = (e, n, r) => {
  const a = n[e];
  if (a?.presets !== void 0) {
    const s = a.presets[0];
    return s ? s.filter : {};
  }
  const i = r?.[0];
  return i ? i.filter : {};
}, Oo = ({
  sourceFilters: e,
  sourcePresets: n,
  sourceCurrentFilters: r,
  sourceSetCurrentFilters: a,
  visualizations: i,
  currentVisualization: s
}) => {
  const l = T(
    () => Do(i),
    [i]
  ), [o, c] = I({}), u = z(s), d = z(!1), h = z(!1), f = z(null), v = z(r);
  if (l && h.current) {
    const x = Ye(u.current), S = Ye(s);
    if (x !== S) {
      const A = o[S];
      f.current = A ?? Wt(
        s,
        i,
        n
      );
    } else r !== v.current && (f.current = null);
  } else
    f.current = null;
  v.current = r, We(() => {
    if (!l || !d.current || h.current) return;
    const x = Ye(s), S = o[x];
    a(
      S ?? Wt(
        s,
        i,
        n
      )
    ), h.current = !0;
  }, [l, s, o]), We(() => {
    if (!l) return;
    if (d.current && !h.current) {
      u.current = s;
      return;
    }
    const x = Ye(u.current), S = Ye(s);
    if (x !== S) {
      c((D) => ({
        ...D,
        [x]: r
      }));
      const A = o[S];
      a(
        A ?? Wt(
          s,
          i,
          n
        )
      );
    }
    u.current = s;
  }, [s, l]);
  const m = T(() => {
    if (!l) return e;
    const x = i[s];
    return x?.filters ? x.filters : e;
  }, [l, e, i, s]), g = T(() => {
    if (!l) return n;
    const S = i[s]?.presets;
    if (S)
      return S;
    const A = m ? new Set(Object.keys(m)) : void 0;
    if (A && n) {
      const D = n.filter((F) => Object.keys(F.filter).every((L) => A.has(L)));
      return D.length > 0 ? D : void 0;
    }
    return n;
  }, [
    l,
    n,
    i,
    s,
    m
  ]), y = T(() => {
    if (!l) return {};
    const x = Ye(s);
    return {
      ...o,
      [x]: r
    };
  }, [
    l,
    o,
    s,
    r
  ]), C = K(
    (x) => {
      d.current || (d.current = !0, c(x));
    },
    []
  );
  if (!l)
    return {
      effectiveFilters: e,
      effectivePresets: n,
      currentFilters: r,
      setCurrentFilters: a,
      allVisualizationFilters: {},
      setAllVisualizationFilters: () => {
      },
      hasPerVisualizationFilters: !1
    };
  const b = f.current ?? r;
  return {
    effectiveFilters: m,
    effectivePresets: g,
    currentFilters: b,
    setCurrentFilters: a,
    allVisualizationFilters: y,
    setAllVisualizationFilters: C,
    hasPerVisualizationFilters: !0
  };
}, Fo = (e = {}, n) => {
  const r = X(), a = {
    "no-data": {
      emoji: "📄",
      title: r.collections.emptyStates.noData.title,
      description: r.collections.emptyStates.noData.description
    },
    "no-results": {
      emoji: "🔍",
      title: r.collections.emptyStates.noResults.title,
      description: r.collections.emptyStates.noResults.description,
      actions: [
        {
          label: r.collections.emptyStates.noResults.clearFilters,
          onClick: n.clearFilters
        }
      ]
    },
    error: {
      title: r.collections.emptyStates.error.title,
      description: r.collections.emptyStates.error.description,
      actions: [
        {
          label: r.collections.emptyStates.error.retry,
          onClick: n.retry
        }
      ]
    }
  }, [i, s] = I(void 0);
  return { emptyState: i, setEmptyStateType: (o, c) => {
    if (!o) {
      s(void 0);
      return;
    }
    const u = e[o] ?? {}, d = a[o], h = {
      title: u.title ?? d.title,
      description: u.description ?? (o === "error" && c ? c : d.description),
      actions: u.actions ?? d.actions
    };
    s(o === "error" ? {
      ...h,
      variant: "critical"
    } : {
      ...h,
      emoji: u.emoji ?? d.emoji
    });
  } };
};
function To(e, { filters: n, onError: r } = {}) {
  const [a, i] = I(void 0);
  return {
    ...qi(
      e,
      {
        filters: n,
        onError: r,
        fetchParamsProvider: (l) => ({
          ...l,
          navigationFilters: e.currentNavigationFilters
        }),
        onResponse: (l) => {
          const o = "summaries" in l ? l.summaries : void 0;
          i(o);
        }
      },
      [JSON.stringify(e.currentNavigationFilters)]
    ),
    summaries: a
  };
}
function Et(e, n = {}) {
  return {
    ...To(e, n)
  };
}
const xn = ({
  paginationInfo: e,
  setPage: n,
  className: r
}) => {
  const a = X();
  return !Xi(e) || e.pagesCount <= 1 ? null : /* @__PURE__ */ p(
    "div",
    {
      className: N("flex w-full items-center justify-between px-4", r),
      children: [
        /* @__PURE__ */ t("span", { className: "shrink-0 text-f1-foreground-secondary", children: e.total > 0 && `${(e.currentPage - 1) * e.perPage + 1}-${Math.min(
          e.currentPage * e.perPage,
          e.total
        )} ${a.collections.visualizations.pagination.of} ${e.total}` }),
        /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t(
          Zi,
          {
            totalPages: e.pagesCount,
            currentPage: e.currentPage,
            onPageChange: n
          }
        ) })
      ]
    }
  );
}, Lo = (e) => Math.ceil(e / 12) * 12, da = ({
  children: e,
  tmpFullWidth: n
}) => /* @__PURE__ */ t("div", { className: N("@container", n ? "px-0" : "px-4"), children: /* @__PURE__ */ t(
  "div",
  {
    className: N(
      "grid grid-cols-1 gap-4",
      "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"
    ),
    children: e
  }
) }), Yn = ({
  source: e,
  items: n,
  selectedItems: r,
  handleSelectItemChange: a,
  cardProperties: i,
  title: s,
  description: l,
  avatar: o,
  image: c,
  imageFit: u,
  imageSize: d,
  imageAspectRatio: h,
  blurredBackground: f,
  compact: v,
  tmpFullWidth: m
}) => {
  function g(b, x) {
    return x.map((S) => {
      if (S.hide?.(b))
        return null;
      const A = S.render(b);
      if (A === void 0)
        return null;
      const D = y(A);
      if (!D) return null;
      const F = {
        ...D,
        label: S.label
      };
      return F.type === "file" ? {
        property: F
      } : {
        icon: S.icon ?? Qi,
        property: F
      };
    }).filter((S) => S !== null);
  }
  function y(b) {
    return typeof b == "string" ? { type: "text", value: b } : typeof b == "number" ? { type: "number", value: b } : C(b) ? b : null;
  }
  function C(b) {
    if (typeof b != "object" || b === null || !("type" in b))
      return !1;
    const x = b.type;
    return typeof x == "string" && x in es;
  }
  return /* @__PURE__ */ t(da, { tmpFullWidth: m, children: n.map((b, x) => {
    const S = e.selectable ? e.selectable(b) : void 0, A = e.itemUrl ? e.itemUrl(b) : void 0, D = e.itemOnClick ? e.itemOnClick(b) : void 0, F = (e.itemActions ? e.itemActions(b) || [] : []).filter((R) => R.type !== "separator"), $ = (F.filter(
      (R) => R.type === "other" || !R.type
    ) || []).map((R) => ({
      ...R,
      // Reconverts the type to DropdownItemObject
      type: "item"
    })), L = F.find((R) => R.type === "primary") || void 0, V = F.filter((R) => R.type === "secondary") || [], M = !!e.selectable && S !== void 0, w = g(b, i);
    return /* @__PURE__ */ t(
      j.div,
      {
        layout: !0,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        custom: x,
        variants: Hr({
          delay: 0.02,
          duration: 0.3
        }),
        children: /* @__PURE__ */ t(
          Yi,
          {
            title: s(b),
            selectable: M,
            description: l ? l(b) : void 0,
            avatar: o ? o(b) : void 0,
            image: c ? c(b) : void 0,
            imageFit: u,
            imageSize: d,
            imageAspectRatio: h,
            blurredBackground: f,
            selected: M && r.has(S),
            onSelect: (R) => a(b, R),
            secondaryActions: V,
            primaryAction: L,
            otherActions: $,
            onClick: D,
            link: A,
            compact: v || !1,
            metadata: w,
            fullHeight: !0
          },
          x
        )
      },
      x
    );
  }) });
}, Po = ({
  cardProperties: e,
  title: n,
  description: r,
  avatar: a,
  image: i,
  imageFit: s,
  imageSize: l,
  imageAspectRatio: o,
  blurredBackground: c,
  compact: u,
  source: d,
  onSelectItems: h,
  onLoadData: f,
  onLoadError: v,
  tmpFullWidth: m
}) => {
  const g = T(() => {
    if (d.dataAdapter.paginationType === "pages") {
      const w = d.dataAdapter.perPage, R = Lo(w ?? 24);
      return {
        ...d.dataAdapter,
        perPage: R
      };
    }
    return d.dataAdapter;
  }, [d.dataAdapter]), { data: y, paginationInfo: C, setPage: b, isInitialLoading: x } = Et(
    {
      ...d,
      dataAdapter: g
    },
    {
      onError: (w) => {
        v(w);
      }
    }
  );
  W(() => {
    f({
      totalItems: C?.total || y.records.length,
      filters: d.currentFilters,
      search: d.currentSearch,
      isInitialLoading: x,
      data: y.records
    });
  }, [C?.total, y.records]);
  const {
    selectedItems: S,
    groupAllSelectedStatus: A,
    handleSelectItemChange: D,
    handleSelectGroupChange: F
  } = Tt({
    data: y,
    paginationInfo: C,
    source: d,
    onSelectItems: h,
    selectionMode: "multi",
    selectedState: d.defaultSelectedItems
  }), $ = d.grouping?.collapsible, L = d.grouping?.defaultOpenGroups, { openGroups: V, setGroupOpen: M } = pn(
    y?.type === "grouped" ? y.groups : [],
    L
  );
  return /* @__PURE__ */ p("div", { className: "flex h-full min-h-0 flex-1 flex-col gap-4", children: [
    /* @__PURE__ */ t("div", { className: "overflow-auto", children: x ? /* @__PURE__ */ t(da, { tmpFullWidth: m, children: Array.from({ length: 8 }).map((w, R) => /* @__PURE__ */ p(qa, { children: [
      /* @__PURE__ */ t(Xa, { children: /* @__PURE__ */ t(Za, { "aria-label": "Loading card", children: /* @__PURE__ */ t(he, { className: "h-4 w-3/4" }) }) }),
      /* @__PURE__ */ t(Ya, { className: "space-y-2", children: e.map((k) => /* @__PURE__ */ p("div", { className: "space-y-1", children: [
        /* @__PURE__ */ t(he, { className: "h-3 w-1/4" }),
        /* @__PURE__ */ t(he, { className: "h-3 w-1/2" })
      ] }, String(k.label))) })
    ] }, R)) }) : /* @__PURE__ */ p(ie, { children: [
      y?.type === "grouped" && y.groups.map((w) => /* @__PURE__ */ p(ie, { children: [
        /* @__PURE__ */ t(
          mn,
          {
            label: w.label,
            itemCount: w.itemCount,
            onOpenChange: (R) => M(w.key, R),
            open: V[w.key],
            selectable: !!d.selectable,
            showOpenChange: $,
            select: A[w.key]?.checked ? !0 : A[w.key]?.indeterminate ? "indeterminate" : !1,
            onSelectChange: (R) => F(w, R),
            className: "px-4 pb-2 pt-4"
          }
        ),
        /* @__PURE__ */ t(Ae, { children: (!$ || V[w.key]) && /* @__PURE__ */ t(
          Yn,
          {
            source: d,
            items: w.records,
            selectedItems: S,
            handleSelectItemChange: D,
            title: n,
            cardProperties: e,
            description: r,
            avatar: a,
            image: i,
            imageFit: s,
            imageSize: l,
            imageAspectRatio: o,
            blurredBackground: c,
            compact: u,
            tmpFullWidth: m
          },
          w.key
        ) })
      ] })),
      y?.type === "flat" && /* @__PURE__ */ t(
        Yn,
        {
          source: d,
          items: y.records,
          selectedItems: S,
          handleSelectItemChange: D,
          title: n,
          cardProperties: e,
          description: r,
          avatar: a,
          image: i,
          imageFit: s,
          imageSize: l,
          imageAspectRatio: o,
          blurredBackground: c,
          compact: u,
          tmpFullWidth: m
        }
      )
    ] }) }),
    /* @__PURE__ */ t(xn, { paginationInfo: C, setPage: b })
  ] });
}, Eo = () => {
  const e = {};
  for (const [n, r] of Object.entries(xt))
    r.settings.default && (e[n] = { ...r.settings.default });
  return e;
}, ua = Ke({
  setSettings: () => {
  },
  settings: {
    // To avoid circular dependency initializating the settings (the value is provided in the provider)
    visualization: {}
  },
  setVisualizationSettings: () => {
  }
}), st = () => {
  const e = Ue(ua);
  if (!e)
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    );
  return e;
}, $o = ({
  children: e
}) => {
  const [n, r] = I({
    visualization: Eo()
  }), a = (i, s) => {
    r(typeof s == "function" ? (l) => ({
      ...l,
      visualization: {
        ...l.visualization,
        [i]: s(l.visualization[i])
      }
    }) : (l) => ({
      ...l,
      visualization: { ...l.visualization, [i]: s }
    }));
  };
  return /* @__PURE__ */ t(
    ua.Provider,
    {
      value: { settings: n, setSettings: r, setVisualizationSettings: a },
      children: e
    }
  );
}, fa = (e, n, r, a) => {
  const i = z(null);
  return W(() => {
    if (!At(e) || !e.hasMore)
      return;
    const s = i.current;
    if (!s) return;
    const l = new IntersectionObserver(
      (o) => {
        o[0].isIntersecting && !n && !r && a();
      },
      {
        root: null,
        // viewport
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    return l.observe(s), () => {
      l.disconnect();
    };
  }, [e, r, a, n]), {
    loadingIndicatorRef: i
    // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  };
}, ha = Ke(null);
function zo({
  addRowActions: e,
  addRowActionsLabel: n,
  addNestedRowActions: r,
  addNestedRowActionsLabel: a,
  children: i
}) {
  return /* @__PURE__ */ t(
    ha.Provider,
    {
      value: {
        addRowActions: e,
        addRowActionsLabel: n,
        addNestedRowActions: r,
        addNestedRowActionsLabel: a
      },
      children: i
    }
  );
}
function pa() {
  return Ue(ha);
}
const _o = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, Qn = (e) => (e || []).map((n) => n.type === "separator" ? n : {
  ...n,
  type: "item"
}), ma = ({
  items: e,
  onOpenChange: n,
  align: r = "end",
  label: a = "Actions",
  className: i
}) => {
  const [s, l] = I(!1);
  return !e || e.length === 0 ? null : /* @__PURE__ */ t("div", { className: N("pointer-events-auto", i), children: /* @__PURE__ */ t(
    Pt,
    {
      align: r,
      items: e.map((o) => o.type === "separator" || o.type === "label" ? o : {
        ...o,
        type: "item"
      }),
      open: s,
      onOpenChange: (o) => {
        l(o), n?.(o);
      },
      children: /* @__PURE__ */ t(
        Ce,
        {
          icon: dn,
          label: a,
          hideLabel: !0,
          variant: "ghost",
          pressed: s
        }
      )
    }
  ) });
}, ga = ({
  items: e,
  onOpenChange: n,
  className: r
}) => /* @__PURE__ */ t("div", { className: N(r), children: /* @__PURE__ */ t(
  ma,
  {
    label: "Mobile Actions",
    align: "end",
    items: e,
    onOpenChange: n
  }
) }), ba = ({
  children: e,
  dropDownOpen: n,
  className: r
}) => /* @__PURE__ */ t(
  "aside",
  {
    className: N(
      "absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
      "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
      "via-[#F5F6F8] via-60% dark:via-[#192231]",
      "to-transparent to-100%",
      n ? "opacity-100" : "opacity-0",
      r
    ),
    children: e
  }
), Mo = (e, n) => (e && e(n) || []).filter(
  (r) => r.type === "separator" || r.enabled === void 0 || r.enabled
), va = ({
  source: e,
  item: n
}) => {
  const [r, a] = I(!1), [i, s] = I(null);
  if (!e.itemActions)
    return {
      hasItemActions: !1,
      primaryItemActions: [],
      dropdownItemActions: [],
      mobileDropdownItemActions: [],
      handleDropDownOpenChange: () => {
      },
      dropDownOpen: !1,
      setDropDownOpen: () => {
      }
    };
  const l = Mo(e.itemActions, n), o = l.filter(
    (h) => h.type === "primary"
  ).slice(0, 2), c = Qn(
    l.filter(
      (h) => h.type === "separator" || !o.includes(h)
    )
  ), u = Qn([
    ...o,
    ...l.filter(
      (h) => h.type === "separator" || !o.includes(h)
    )
  ]), d = (h) => {
    if (!h) {
      s(
        setTimeout(() => {
          a(!1);
        }, 100)
      );
      return;
    }
    i && (clearTimeout(i), s(null)), a(!0);
  };
  return {
    hasItemActions: l.length > 0,
    primaryItemActions: o,
    dropdownItemActions: c,
    mobileDropdownItemActions: u,
    handleDropDownOpenChange: d,
    dropDownOpen: r,
    setDropDownOpen: a
  };
}, Gt = {
  default: "-",
  list: void 0
}, yt = (e, n, r, a, i) => {
  const s = n.render(e), l = r in Gt ? Gt[r] : Gt.default;
  return ts(
    s,
    {
      visualization: r,
      i18n: a,
      tableAlign: i?.tableAlign
    },
    l
  );
}, ya = ({
  className: e,
  primaryItemActions: n,
  dropdownItemActions: r,
  handleDropDownOpenChange: a
}) => /* @__PURE__ */ p("aside", { className: N("items-center justify-end gap-2 md:flex", e), children: [
  n.map((i) => /* @__PURE__ */ t(
    ce,
    {
      label: i.label,
      variant: "outline",
      onClick: i.onClick,
      icon: i.icon
    },
    i.label
  )),
  /* @__PURE__ */ t(
    ma,
    {
      align: "end",
      items: r,
      onOpenChange: a
    }
  )
] }), tt = "border-0 border-r border-solid border-f1-border-secondary", jo = (e, n) => {
  const r = [];
  return e.forEach((a, i) => {
    const s = a.headerGroupId;
    if (!s) {
      r.push({
        type: "ungrouped",
        columnIndices: [i]
      });
      return;
    }
    const l = r[r.length - 1];
    l && l.type === "group" && l.id === s ? (l.colSpan++, l.columnIndices.push(i)) : r.push({
      colSpan: 1,
      id: s,
      type: "group",
      columnIndices: [i],
      label: n[s] ?? s
    });
  }), r;
}, Bo = (e, n) => T(() => !n || !e.some((a) => a.headerGroupId) ? null : jo(e, n), [e, n]), xa = (e, n, r) => {
  const a = r ? 46 : 0;
  return {
    getStickyPosition: K(
      (s) => s < e && n.length > 1 ? {
        left: n.slice(0, Math.max(0, s)).reduce(
          (l, o) => l + (o.width ?? 0),
          a
        )
      } : void 0,
      [e, n, a]
    ),
    checkColumnWidth: a
  };
}, Vo = (e, n) => {
  const [r, a] = I(null), [i, s] = I(null), [l, o] = I(0), c = z(null), u = z(null), d = K(
    (f) => {
      c.current = f, f && a(f);
    },
    [a]
  ), h = K(
    (f) => {
      u.current = f, f && s(f);
    },
    [s]
  );
  return We(() => {
    const f = r?.previousElementSibling;
    if (!r || !f) {
      o(0);
      return;
    }
    const v = !i || i.getBoundingClientRect().top === 0, m = () => v ? (r.getBoundingClientRect().top ?? 0) - dt / 2 : (i?.getBoundingClientRect().top ?? 0) - dt / 2, g = () => v ? r.getBoundingClientRect().bottom - dt : (i?.getBoundingClientRect().bottom ?? 0) - dt, y = () => r.getBoundingClientRect().top ?? 0 - dt, C = () => f.getBoundingClientRect().height, b = () => n && e === "basic" ? ns : 0, x = () => {
      const $ = (e === "basic" ? m() : g()) - y() + C() + b();
      o($);
    };
    x();
    const S = new MutationObserver(() => {
      x();
    }), A = r.parentElement;
    A && S.observe(A, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    const D = new ResizeObserver(() => {
      x();
    });
    return D.observe(r), i && D.observe(i), () => {
      S.disconnect(), D.disconnect();
    };
  }, [r, i, e]), { setFirstChildRef: d, setLastChildRef: h, calculatedHeight: l };
}, wa = Ke(void 0), Ho = ({
  children: e
}) => {
  const [n, r] = I({}), a = K(
    (c, u) => {
      r((d) => ({
        ...d,
        [c]: u
      }));
    },
    []
  ), [i, s] = I({}), l = K(() => {
    r({}), s({});
  }, []), o = K((c, u) => {
    s((d) => {
      if (u) return { ...d, [c]: !0 };
      const h = { ...d };
      return delete h[c], h;
    });
  }, []);
  return /* @__PURE__ */ t(
    wa.Provider,
    {
      value: {
        fetchedData: n,
        updateFetchedData: a,
        clearFetchedData: l,
        expandedRowIds: i,
        setRowExpanded: o
      },
      children: e
    }
  );
}, Ca = () => {
  const e = Ue(wa);
  if (!e)
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    );
  return e;
}, Wo = (e) => e ? typeof e == "object" && "type" in e && e.type === "detailed" : !1, er = (e) => e ? Array.isArray(e) ? e : e.records : [], tr = (e) => e && Wo(e) ? e?.type ?? "basic" : "basic", Go = ({
  rowId: e,
  item: n,
  source: r,
  onClearFetchedData: a
}) => {
  const {
    fetchedData: i,
    updateFetchedData: s,
    clearFetchedData: l
  } = Ca(), [o, c] = I(
    er(i?.[e])
  ), [u, d] = I(i?.[e]?.paginationInfo), [h, f] = I(!1), [v, m] = I(
    tr(i?.[e])
  ), g = z(r.currentFilters), y = z(r.currentSortings), C = z(r.currentNavigationFilters);
  W(() => {
    const A = g.current !== r.currentFilters, D = y.current !== r.currentSortings, F = C.current !== r.currentNavigationFilters;
    (A || D || F) && (c([]), d(void 0), m("basic"), l(), a(), g.current = r.currentFilters, y.current = r.currentSortings, C.current = r.currentNavigationFilters);
  }, [
    r.currentFilters,
    r.currentSortings,
    r.currentNavigationFilters,
    l,
    a
  ]);
  const b = z(), x = K(
    (A) => {
      const D = er(A), F = [...o, ...D];
      c(F);
      const $ = {
        records: F,
        type: A?.type,
        paginationInfo: A?.paginationInfo
      };
      return s(e, $), m(tr(A)), d(A?.paginationInfo), D;
    },
    [o, e, s]
  ), S = K(() => {
    if (o.length > 0 && !u?.hasMore) return o;
    b.current?.unsubscribe(), f(!0);
    const A = r.fetchChildren?.({
      item: n,
      filters: r.currentFilters,
      pagination: u,
      sortings: r.currentSortings
    });
    if (!A)
      return f(!1), [];
    if (!("then" in A) && !("subscribe" in A)) {
      const F = x(A);
      return f(!1), F;
    }
    const D = "subscribe" in A ? A : rs(A);
    return b.current = D.subscribe({
      next: (F) => {
        F.loading ? f(!0) : F.error ? f(!1) : F.data && (x(F.data), f(!1));
      },
      error: (F) => {
        f(!1), console.error("Error loading children:", F);
      },
      complete: () => {
        b.current = void 0;
      }
    }), [];
  }, [o, n, r, u, x]);
  return W(() => () => {
    b.current?.unsubscribe();
  }, []), {
    children: o,
    loadChildren: S,
    isLoading: h,
    childrenType: v,
    paginationInfo: u
  };
}, Uo = (e) => {
  let n = e.parentElement;
  for (; n; ) {
    const { overflow: r, overflowY: a } = getComputedStyle(n);
    if (r === "auto" || r === "scroll" || a === "auto" || a === "scroll")
      return n;
    n = n.parentElement;
  }
  return null;
}, Ko = (e, n, r, a) => {
  const [i, s] = I(!1), l = as;
  return We(() => {
    if (!e) {
      s(!1);
      return;
    }
    const o = n.current;
    if (!o) {
      s(!0);
      return;
    }
    const c = Uo(o);
    if (!c) {
      s(!0);
      return;
    }
    let u;
    const d = () => {
      const m = r.current;
      if (!m) {
        s(!0);
        return;
      }
      const y = c.getBoundingClientRect().top + l + o.offsetHeight, b = m.getBoundingClientRect().top > y;
      s((x) => x === b ? x : b);
    }, h = () => {
      u !== void 0 && cancelAnimationFrame(u), u = requestAnimationFrame(d);
    };
    c.addEventListener("scroll", h, {
      passive: !0
    }), window.addEventListener("resize", h);
    const f = new ResizeObserver(h);
    f.observe(o);
    const v = r.current;
    return v && f.observe(v), d(), () => {
      c.removeEventListener("scroll", h), window.removeEventListener("resize", h), f.disconnect(), u !== void 0 && cancelAnimationFrame(u);
    };
  }, [e, n, r, l]), { isSticky: i };
}, Jo = (e, n) => {
  const r = z(null), a = e.rowRef?.current;
  We(() => {
    if (r.current && a) {
      const o = e.rowRef?.current?.getBoundingClientRect().height;
      r.current.style.height = `${o}px`;
    }
  }, [a, e.rowRef]);
  const i = (o) => {
    r.current = o, typeof n == "function" ? n(o) : n && (n.current = o);
  }, s = e.nestedRowProps?.depth ?? 0, l = e.columns.map((o) => ({
    ...o,
    render: () => "",
    editType: () => "display-only"
  }));
  return /* @__PURE__ */ t(
    at,
    {
      ...e,
      columns: l,
      ref: i,
      noBorder: s > 0,
      nestedRowProps: {
        ...e.nestedRowProps,
        depth: s + 1,
        hasLoadedChildren: !1,
        ...e.nestedRowPropsOverride
      }
    }
  );
}, Na = Re(Jo), qo = (e, n) => {
  const r = e.addRowActions.map((a) => ({
    label: a.label,
    icon: a.icon,
    description: a.description,
    onClick: a.onClick,
    loading: a.loading,
    disabled: a.disabled
  }));
  return /* @__PURE__ */ t(
    Na,
    {
      ...e,
      ref: n,
      nestedRowPropsOverride: {
        onAddRow: {
          actions: r,
          label: e.addRowLabel
        }
      }
    }
  );
}, Sa = Re(qo);
Sa.displayName = "AddRowRow";
const Xo = (e, n) => /* @__PURE__ */ t(
  Na,
  {
    ...e,
    ref: n,
    nestedRowPropsOverride: {
      onLoadMoreChildren: e.onLoadMoreChildren
    }
  }
), Zo = Re(Xo), Yo = 5, Qo = ({
  rowRef: e,
  rowIndex: n,
  source: r,
  item: a,
  columns: i,
  frozenColumnsLeft: s,
  nestedRowProps: l,
  groupIndex: o,
  onCheckedChange: c,
  selectedItems: u,
  checkColumnWidth: d,
  tableWithChildren: h,
  shouldHideBorder: f,
  fromVisualization: v,
  headerGroups: m
}, g) => {
  const y = z(null), C = e?.current;
  We(() => {
    if (y.current && C) {
      const S = e.current.getBoundingClientRect().height;
      y.current.style.height = `${S}px`;
    }
  }, [C, e]);
  const b = l?.depth ?? 0, x = (S) => {
    y.current = S, typeof g == "function" && g(S);
  };
  return /* @__PURE__ */ t(
    at,
    {
      source: {
        ...r,
        itemsWithChildren: () => !1
      },
      item: a,
      index: n,
      frozenColumnsLeft: s,
      columns: i,
      noBorder: f ?? !1,
      groupIndex: o,
      onCheckedChange: c,
      selectedItems: u,
      checkColumnWidth: d,
      loading: !0,
      headerGroups: m,
      ref: x,
      nestedRowProps: {
        ...l,
        depth: l?.parentHasChildren ? b + 1 : b,
        hasLoadedChildren: !1,
        expanded: !1
      },
      tableWithChildren: h,
      fromVisualization: v
    },
    `row-loading-${n}`
  );
}, ec = Re(Qo), tc = ({
  rowRef: e,
  ...n
}, r) => {
  const a = n.source.childrenCount?.({
    item: n.item,
    pagination: n.paginationInfo
  }), i = n.paginationInfo ? n.paginationInfo.total ? Math.min(
    n.paginationInfo.perPage,
    n.paginationInfo.total - n.paginationInfo.currentPage * n.paginationInfo.perPage
  ) : n.paginationInfo.perPage : void 0, s = a ?? i ?? Yo;
  return /* @__PURE__ */ t(ie, { children: Array.from({ length: s }).map((l, o) => {
    const u = !(o === s - 1) || n.shouldHideBorder;
    return /* @__PURE__ */ t(
      ec,
      {
        ref: r,
        rowRef: e,
        rowIndex: o,
        ...n,
        shouldHideBorder: u
      },
      `row-loading-${o}`
    );
  }) });
}, nc = Re(tc), rc = (e) => e ? (Array.isArray(e) ? e : [e]).filter(
  (n) => n !== void 0
) : [], ac = (e, n) => {
  const r = z(null), a = z(null), i = pa(), s = `${e.nestedRowProps?.depth ?? 0}-${"id" in e.item ? e.item.id + "-" + e.index : e.index}`, { expandedRowIds: l, setRowExpanded: o } = Ca(), c = l[s] ?? !1, { children: u, loadChildren: d, isLoading: h, childrenType: f, paginationInfo: v } = Go({
    rowId: s,
    item: e.item,
    source: e.source,
    onClearFetchedData: () => o(s, !1)
  }), m = c && h, g = c, y = c && v?.hasMore, C = c ? rc(i?.addNestedRowActions?.(e.item)) : [], b = C.length > 0, { calculatedHeight: x, setFirstChildRef: S, setLastChildRef: A } = Vo(
    f,
    !!y || b
  ), D = K(
    (k) => {
      r.current = k, typeof n == "function" && n(k);
    },
    [n]
  ), F = () => {
    const k = !c;
    o(s, k), k && !u.length && d();
  }, $ = {
    depth: e.nestedRowProps?.depth ?? 0,
    expanded: c,
    onExpand: F,
    nestedVariant: f,
    connectorHeight: x
  }, L = e.fromVisualization === "table", V = (e.nestedRowProps?.depth ?? 0) === 0, M = (e.nestedRowProps?.isLastChild || V) ?? !1, w = (c || !M) && L, { isSticky: R } = Ko(c, r, a);
  return /* @__PURE__ */ p(ie, { children: [
    /* @__PURE__ */ t(
      at,
      {
        ...e,
        disableHover: !e.source.itemOnClick,
        noBorder: w,
        ref: D,
        nestedRowProps: {
          ...$,
          // If nestedRowProps.parentHasChildren is not provided, we need to set it to true if the parent has children
          // This nestedRowProps.parentHasChildren is provided on children iteration
          parentHasChildren: e.nestedRowProps?.parentHasChildren ?? u.length > 0,
          hasLoadedChildren: !1,
          isLastChild: M,
          isLastSibling: e.nestedRowProps?.isLastSibling,
          stickyRow: R
        },
        tableWithChildren: e.tableWithChildren,
        fromVisualization: e.fromVisualization
      }
    ),
    g && u.map((k, P) => {
      const H = k, pe = e.source.itemsWithChildren?.(H), ne = P === 0, se = P === u.length - 1, re = se && !y, de = (e.nestedRowProps?.depth ?? 0) + 1, E = () => {
        if (ne)
          return (ue) => {
            S(ue);
          };
        if (se && !y && !b)
          return (ue) => {
            A(ue);
          };
      }, ee = se && M && !y, le = e.rowWrapper;
      if (pe) {
        const ue = /* @__PURE__ */ An(
          ka,
          {
            ...e,
            key: `nested-row-${e.groupIndex}-${k.id}-${e.index}-${P}`,
            index: P,
            item: H,
            tableWithChildren: e.tableWithChildren,
            ref: E(),
            nestedRowProps: {
              ...e.nestedRowProps,
              parentHasChildren: !0,
              depth: de,
              isLastChild: ee,
              isLastSibling: re
            },
            fromVisualization: e.fromVisualization
          }
        );
        return le ? /* @__PURE__ */ t(
          le,
          {
            item: H,
            index: P,
            children: ue
          },
          `nested-row-${e.groupIndex}-${k.id}-${e.index}-${P}`
        ) : ue;
      } else {
        const ue = !ee && L, xe = /* @__PURE__ */ An(
          at,
          {
            ...e,
            key: `row-${e.groupIndex}-${e.index}-${P}`,
            index: P,
            item: H,
            noBorder: ue,
            ref: E(),
            nestedRowProps: {
              ...e.nestedRowProps,
              depth: (e.nestedRowProps?.depth ?? 0) + 1,
              parentHasChildren: !0,
              nestedVariant: f,
              onExpand: F,
              isLastChild: ee,
              isLastSibling: re
            },
            fromVisualization: e.fromVisualization,
            tableWithChildren: e.tableWithChildren
          }
        );
        return le ? /* @__PURE__ */ t(
          le,
          {
            item: H,
            index: P,
            children: xe
          },
          `row-${e.groupIndex}-${e.index}-${P}`
        ) : xe;
      }
    }),
    m && /* @__PURE__ */ t(
      nc,
      {
        ...e,
        rowRef: r,
        nestedRowProps: {
          ...$,
          parentHasChildren: u.length > 0
        },
        paginationInfo: v,
        ref: A,
        shouldHideBorder: !M
      }
    ),
    y && !h && /* @__PURE__ */ t(
      Zo,
      {
        ...e,
        disableHover: !0,
        rowRef: r,
        onLoadMoreChildren: d,
        ref: b ? void 0 : A,
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: f,
          isLastChild: M,
          isLastSibling: !0
        }
      }
    ),
    b && /* @__PURE__ */ t(
      Sa,
      {
        ...e,
        disableHover: !0,
        rowRef: r,
        addRowActions: C,
        addRowLabel: i?.addNestedRowActionsLabel,
        ref: A,
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: f
        }
      }
    ),
    c && /* @__PURE__ */ t("tr", { "aria-hidden": "true", className: "h-0 border-none p-0", children: /* @__PURE__ */ t(
      "td",
      {
        ref: a,
        colSpan: e.columns.length + (e.source.selectable ? 1 : 0) + (e.source.itemActions ? 2 : 0),
        className: "h-0 border-none p-0"
      }
    ) })
  ] });
}, ic = (e, n) => /* @__PURE__ */ t(sc, { ...e, ref: n }), sc = Re(ac), ka = Re(ic), lc = {
  none: "",
  striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]"
}, oc = ({
  source: e,
  item: n,
  onCheckedChange: r,
  selectedItems: a,
  columns: i,
  frozenColumnsLeft: s,
  checkColumnWidth: l,
  index: o,
  groupIndex: c,
  noBorder: u = !1,
  loading: d = !1,
  nestedRowProps: h,
  tableWithChildren: f,
  disableHover: v = !1,
  referenceRowType: m,
  cellRenderer: g,
  rowWrapper: y,
  fromVisualization: C,
  headerGroups: b
}, x) => {
  const S = e.itemUrl ? e.itemUrl(n) : void 0, A = e.itemOnClick ? e.itemOnClick(n) : void 0, D = e.selectable ? e.selectable(n) : void 0, F = !!e.itemsWithChildren?.(n), $ = X(), L = (E, ee) => yt(E, ee, "table", $, {
    tableAlign: ee.align ?? "left"
  }), V = `table-row-${c}-${o}`, { getStickyPosition: M } = xa(
    s,
    i,
    !!e.selectable
  ), {
    hasItemActions: w,
    primaryItemActions: R,
    dropdownItemActions: k,
    mobileDropdownItemActions: P,
    handleDropDownOpenChange: H,
    dropDownOpen: pe
  } = va({ source: e, item: n }), ne = h?.hasLoadedChildren === void 0 || h?.hasLoadedChildren;
  if (F && ne)
    return /* @__PURE__ */ t(
      ka,
      {
        source: e,
        item: n,
        onCheckedChange: r,
        selectedItems: a,
        columns: i,
        frozenColumnsLeft: s,
        checkColumnWidth: l,
        index: o,
        groupIndex: c,
        nestedRowProps: h,
        tableWithChildren: f,
        referenceRowType: m,
        cellRenderer: g,
        rowWrapper: y,
        headerGroups: b,
        fromVisualization: C
      },
      V
    );
  const se = D !== void 0 && a.has(D), re = m?.(n) ?? "none", de = g ? N(
    "h-[48px] p-0 align-middle last:pr-0",
    !f && "first:pl-0"
  ) : void 0;
  return /* @__PURE__ */ p(
    He,
    {
      ref: x,
      sticky: h?.stickyRow,
      className: N(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        u && "after:bg-white-100",
        v && "hover:bg-transparent",
        se && "bg-f1-background-selected-secondary",
        lc[re]
      ),
      children: [
        e.selectable && /* @__PURE__ */ t(
          Ee,
          {
            width: l,
            sticky: { left: 0 },
            loading: d,
            className: N(
              d && f ? "first:pl-4" : "",
              b && "[&>div:first-child]:hidden",
              b && tt,
              de
            ),
            referenceRowType: re,
            children: D !== void 0 && /* @__PURE__ */ t("div", { className: "pointer-events-auto ml-1.5 flex h-full items-center justify-start", children: /* @__PURE__ */ t(
              is,
              {
                checked: a.has(D),
                onCheckedChange: r,
                title: `Select ${e.selectable(n)}`,
                hideLabel: !0
              }
            ) })
          }
        ),
        i.map((E, ee) => {
          const le = b?.find((be) => be.type === "group" && be.columnIndices.includes(ee)), ue = !!b && (!le || le.columnIndices[le.columnIndices.length - 1] === ee), xe = /* @__PURE__ */ t(
            "div",
            {
              className: N(
                E.align === "right" ? "justify-end" : "",
                "flex"
              ),
              children: L(n, E)
            }
          );
          return /* @__PURE__ */ t(
            Ee,
            {
              firstCell: ee === 0,
              href: S,
              onClick: A,
              width: E.width,
              sticky: M(ee),
              loading: d,
              nestedRowProps: {
                ...h,
                rowWithChildren: F,
                tableWithChildren: f,
                selectableRow: !!e.selectable
              },
              fromVisualization: C,
              referenceRowType: re,
              className: N(de, ue && tt),
              children: g ? /* @__PURE__ */ t(
                g,
                {
                  item: n,
                  isLastColumn: !w && ee === i.length - 1,
                  column: E,
                  cellIndex: ee,
                  children: xe
                }
              ) : xe
            },
            `table-cell-${c}-${o}-${ee}`
          );
        }),
        w && !d && !h?.onLoadMoreChildren && !h?.onAddRow && /* @__PURE__ */ p(ie, { children: [
          /* @__PURE__ */ t("td", { className: "sticky right-0 top-0 z-10 hidden md:table-cell", children: /* @__PURE__ */ t(ba, { dropDownOpen: pe, children: /* @__PURE__ */ t(
            ya,
            {
              primaryItemActions: R,
              dropdownItemActions: k,
              handleDropDownOpenChange: H
            }
          ) }) }),
          /* @__PURE__ */ t(
            Ee,
            {
              width: 68,
              sticky: {
                right: 0
              },
              href: S,
              className: "table-cell md:hidden",
              loading: d,
              children: /* @__PURE__ */ t(
                ga,
                {
                  items: P,
                  onOpenChange: H
                }
              )
            },
            `table-cell-${c}-${o}-actions`
          )
        ] })
      ]
    },
    V
  );
}, at = Re(oc), Me = (e) => e.id ?? e.label ?? "column", cc = (e) => [...e].sort((n, r) => (n.order ?? e.length) - (r.order ?? e.length)).map((n) => Me(n)), dc = (e) => e.filter((n) => n.hidden && !n.noHiding).map((n) => Me(n)), Ia = (e, n, r, a, i) => {
  const s = () => {
    if (!i || r?.hidden === void 0)
      return dc(e);
    if (!r.order || r.order.length === 0)
      return r.hidden;
    const f = new Set(r.order), v = e.filter(
      (m) => m.hidden && !m.noHiding && !f.has(Me(m))
    ).map(Me);
    return [...r.hidden, ...v];
  }, [l, o] = I(s()), [c, u] = I(
    (a && r?.order !== void 0 ? r.order : void 0) ?? cc(e)
  );
  W(() => {
    i && r?.hidden !== void 0 && o(s());
  }, [JSON.stringify(r?.hidden), i]), W(() => {
    a && r?.order !== void 0 && u(r.order);
  }, [JSON.stringify(r?.order), a]);
  const d = T(() => {
    const f = [...e], v = n || 1;
    return [
      // Frozen columns can not be hidden even if the id is in status
      // The frist column is always visible and not sortable even if frozenColumns is 0
      ...f.slice(0, v).map((m, g) => ({
        column: {
          ...m,
          id: Me(m)
        },
        canHide: !1,
        visible: !0,
        sortable: !1,
        order: g
      })),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...f.slice(v).sort((m, g) => {
        const y = c.indexOf(Me(m)), C = c.indexOf(Me(g)), b = y === -1 ? c.length : y, x = C === -1 ? c.length : C;
        return b - x;
      }).map((m, g) => ({
        column: {
          ...m,
          id: Me(m)
        },
        canHide: i ? !(m.noHiding ?? !1) : !1,
        visible: !l.includes(Me(m)),
        sortable: !!a,
        order: g + n
      }))
    ];
  }, [
    n,
    c,
    l,
    e,
    a,
    i
  ]);
  return {
    columns: T(() => d.filter((f) => f.visible).map((f) => f.column), [d]),
    columnsWithStatus: d,
    colsHidden: l,
    setColsHidden: o,
    colsOrder: c,
    setColsOrder: u
  };
}, uc = ({
  item: e,
  onChangeVisibility: n,
  allowSorting: r,
  allowHiding: a
}) => {
  const i = "flex items-center gap-2 text-medium text-sm pr-4", s = jr(), l = /* @__PURE__ */ p("div", { className: i, children: [
    r && /* @__PURE__ */ t(
      "div",
      {
        className: N(
          "flex shrink-0 items-center justify-center text-f1-icon",
          e.sortable && "cursor-grab"
        ),
        style: { width: "20px" },
        onPointerDown: (o) => {
          e.sortable && s.start(o);
        },
        children: e.sortable ? /* @__PURE__ */ t(Q, { icon: Fr, size: "xs" }) : /* @__PURE__ */ t(Q, { icon: ss, size: "sm" })
      }
    ),
    /* @__PURE__ */ t(
      "span",
      {
        className: N(
          "flex-1 min-w-0",
          e.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"
        ),
        children: /* @__PURE__ */ t(je, { children: e.label })
      }
    ),
    a && /* @__PURE__ */ t(
      Dr,
      {
        checked: e.visible,
        onCheckedChange: (o) => {
          n({
            ...e,
            visible: o
          });
        },
        title: e.label,
        hideLabel: !0,
        disabled: !e.canHide
      }
    )
  ] });
  return e.sortable ? /* @__PURE__ */ t(
    hn,
    {
      value: e,
      drag: "y",
      dragElastic: 0.1,
      whileDrag: {
        scale: 1.05
      },
      dragListener: !1,
      dragControls: s,
      children: l
    }
  ) : /* @__PURE__ */ t("li", { children: l });
}, fc = ({
  items: e,
  onChange: n,
  allowSorting: r,
  allowHiding: a
}) => {
  const i = (l) => {
    n?.(e.map((o) => o.id === l.id ? l : o));
  };
  return /* @__PURE__ */ t(
    Jt,
    {
      className: "flex flex-1 select-none list-none flex-col gap-2",
      values: e,
      onReorder: (l) => {
        n?.(l);
      },
      axis: "y",
      layoutScroll: !0,
      children: e.map((l) => /* @__PURE__ */ t(
        uc,
        {
          item: l,
          onChangeVisibility: i,
          allowSorting: r,
          allowHiding: a
        },
        l.id
      ))
    }
  );
}, hc = ({
  columns: e,
  frozenColumns: n,
  allowSorting: r,
  allowHiding: a,
  visualizationKey: i = "table"
}) => {
  const s = X(), { settings: l, setVisualizationSettings: o } = st(), c = l.visualization[i], { columnsWithStatus: u } = Ia(
    e,
    n,
    c,
    r,
    a
  ), d = T(
    () => u.filter((m) => a || m.visible).map((m) => ({
      id: m.column.id,
      label: m.column.label,
      sortable: m.sortable,
      canHide: m.canHide,
      visible: m.visible
    })),
    [u, a]
  ), h = (m) => {
    o(i, (g) => ({
      ...g,
      order: m.map((y) => y.id),
      hidden: m.filter((y) => !y.visible).map((y) => y.id)
    }));
  }, f = (m) => {
    h(
      d.map((g) => ({
        ...g,
        visible: g.canHide ? m : g.visible
      }))
    );
  }, v = a && d.filter((m) => m.canHide).length > 1;
  return /* @__PURE__ */ t("div", { className: "relative -mr-2 flex h-[200px] flex-col gap-2", children: /* @__PURE__ */ p(un, { className: "h-[200px]", children: [
    /* @__PURE__ */ t(
      fc,
      {
        items: d,
        onChange: h,
        allowSorting: r,
        allowHiding: a
      }
    ),
    v && /* @__PURE__ */ p("div", { className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm", children: [
      /* @__PURE__ */ t(
        ce,
        {
          variant: "outline",
          size: "sm",
          label: s.collections.table.settings.showAllColumns,
          onClick: () => {
            f(!0);
          }
        }
      ),
      /* @__PURE__ */ t(
        ce,
        {
          variant: "ghost",
          size: "sm",
          label: s.collections.table.settings.hideAllColumns,
          onClick: () => {
            f(!1);
          }
        }
      )
    ] })
  ] }) });
}, nr = (e) => !e.allowColumnHiding && !e.allowColumnReordering ? null : /* @__PURE__ */ t(
  hc,
  {
    columns: e.columns,
    frozenColumns: e.frozenColumns || 0,
    allowSorting: e.allowColumnReordering ?? !1,
    allowHiding: e.allowColumnHiding ?? !1,
    visualizationKey: e.visualizationKey
  }
), pc = (e) => e ? (Array.isArray(e) ? e : [e]).filter(
  (n) => n !== void 0
) : [], mc = ({ text: e, count: n }) => {
  const r = String(n), a = e.indexOf(r);
  if (a === -1)
    return /* @__PURE__ */ t("span", { className: "font-me text-base font-medium text-f1-foreground-secondary", children: e });
  const i = e.slice(0, a), s = e.slice(a + r.length);
  return /* @__PURE__ */ p("span", { className: "text-base font-medium text-f1-foreground-secondary", children: [
    i,
    /* @__PURE__ */ t("span", { className: "font-semibold text-f1-foreground", children: r }),
    s
  ] });
}, Aa = ({
  columns: e,
  source: n,
  frozenColumns: r = 0,
  onSelectItems: a,
  onLoadData: i,
  onLoadError: s,
  allowColumnHiding: l,
  allowColumnReordering: o,
  referenceRowType: c,
  headerGroupLabels: u,
  rowWrapper: d,
  cellRenderer: h,
  showItemActions: f,
  visualizationSettings: v,
  fromVisualization: m = "table",
  summaryPlaceholder: g = "-"
}) => {
  const { t: y, ...C } = X(), b = pa(), [x] = I(
    () => j.create(
      at
    )
  ), { settings: S } = st(), { columns: A } = Ia(
    e,
    r,
    v ?? S.visualization?.table,
    o,
    l
  ), {
    data: D,
    paginationInfo: F,
    setPage: $,
    isInitialLoading: L,
    isLoadingMore: V,
    loadMore: M,
    summaries: w
  } = Et(n, {
    onError: (O) => {
      s(O);
    }
  }), { currentSortings: R, setCurrentSortings: k, isLoading: P } = n, H = f !== !1 && !!n.itemActions, pe = T(
    () => f === !1 ? {
      ...n,
      itemActions: void 0
    } : n,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only recompute when source identity or showItemActions changes
    [n, f]
  ), { loadingIndicatorRef: ne } = fa(
    F,
    P,
    V,
    M
  );
  W(() => {
    i({
      totalItems: F?.total || D.records.length,
      filters: n.currentFilters,
      search: n.currentSearch,
      isInitialLoading: L,
      data: D.records
    });
  }, [F?.total, D.records]);
  const se = T(() => r, [r]), re = (O, _) => "id" in O && O.id !== void 0 && O.id !== null ? `id:${String(O.id)}` : `index:${String(_)}`, {
    selectedItems: de,
    allSelectedStatus: E,
    groupAllSelectedStatus: ee,
    handleSelectItemChange: le,
    handleSelectAll: ue,
    handleSelectAllItems: xe,
    handleSelectGroupChange: be
  } = Tt({
    data: D,
    paginationInfo: F,
    source: n,
    onSelectItems: a,
    selectionMode: "multi",
    selectedState: n.defaultSelectedItems
  }), ae = T(() => !w || !n.summaries ? null : {
    data: w,
    sticky: !0,
    label: n.summaries?.label
  }, [w, n.summaries]), De = (O, _, te) => {
    if (!(!O || !_))
      return te === null ? "none" : te.field === O ? te.order : "none";
  }, Le = (O) => O == null || O === "", ze = (O) => O ?? g, B = (O) => {
    k(() => !R || R.field !== O ? {
      field: O,
      order: "asc"
    } : R.order === "asc" ? {
      field: O,
      order: "desc"
    } : null);
  }, U = n.grouping?.collapsible, q = n.grouping?.defaultOpenGroups, { openGroups: Y, setGroupOpen: me } = pn(
    D?.type === "grouped" ? D.groups : [],
    q
  ), G = A.length + (H ? 1 : 0) + (n.selectable ? 1 : 0), { getStickyPosition: ve, checkColumnWidth: ge } = xa(
    se,
    A,
    !!n.selectable
  ), J = Bo(A, u), fe = D?.records.some(
    (O) => n.itemsWithChildren?.(O)
  );
  if (L)
    return /* @__PURE__ */ t(Tn.Skeleton, { columns: G });
  n.sortings || A.forEach((O) => {
    O.sorting && console.warn(
      "Sorting is defined on a column but no sortings are provided in the data source"
    );
  });
  const Pe = E.selectedCount > 0 || E.checked, lt = !E.checked && E.unselectedCount === 0 && E.selectedCount > 0, $t = !!n.allPagesSelection && !E.checked && F?.total !== void 0 && F.total > E.selectedCount, zt = A.length + (H ? 2 : 0), _t = E.selectedCount === 1 ? C.status.selected.singular : C.status.selected.plural;
  return /* @__PURE__ */ t("div", { className: "flex h-full min-h-0 flex-col gap-4", children: /* @__PURE__ */ p(fe ? Ho : gt, { children: [
    /* @__PURE__ */ p(Tn, { loading: P, children: [
      /* @__PURE__ */ t(ls, { sticky: !0, children: Pe && n.selectable ? /* @__PURE__ */ p(He, { children: [
        /* @__PURE__ */ t(
          Ve,
          {
            width: ge,
            sticky: { left: 0 },
            align: "left",
            children: /* @__PURE__ */ t("div", { className: "ml-1.5 flex w-full items-center justify-start", children: /* @__PURE__ */ t(
              Rt,
              {
                checked: !0,
                indeterminate: E.indeterminate || E.selectedCount > 0 && !E.checked,
                onCheckedChange: ue,
                title: C.actions.selectAll,
                hideLabel: !0
              }
            ) })
          }
        ),
        /* @__PURE__ */ t(
          "th",
          {
            colSpan: zt,
            className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background px-3",
            children: /* @__PURE__ */ p("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ t(
                mc,
                {
                  text: E.checked ? y("status.selected.allItemsSelected", {
                    total: F?.total ?? E.selectedCount
                  }) : lt ? y("status.selected.allOnPage", {
                    count: E.selectedCount
                  }) : `${E.selectedCount} ${_t}`,
                  count: E.checked ? F?.total ?? E.selectedCount : E.selectedCount
                }
              ),
              $t && /* @__PURE__ */ t(
                ce,
                {
                  variant: "outline",
                  label: y("status.selected.selectAllItems", {
                    total: F?.total ?? 0
                  }),
                  onClick: () => xe(!0),
                  size: "sm"
                }
              )
            ] })
          }
        )
      ] }) : /* @__PURE__ */ p(ie, { children: [
        J ? /* @__PURE__ */ p(He, { children: [
          n.selectable && /* @__PURE__ */ t(
            Ve,
            {
              align: "left",
              sticky: { left: 0 },
              width: ge,
              className: N(
                tt,
                "hover:after:bg-transparent"
              ),
              children: /* @__PURE__ */ t("div", { className: "ml-1.5 flex w-full items-center justify-start" })
            }
          ),
          J.map((O, _) => {
            const te = N(
              tt,
              "hover:after:bg-transparent"
            );
            return O.type === "group" ? /* @__PURE__ */ t(
              Ve,
              {
                align: "right",
                colSpan: O.colSpan,
                className: te,
                children: O.label
              },
              `header-group-${O.id}-${_}`
            ) : /* @__PURE__ */ t(
              Ve,
              {
                align: "right",
                className: te,
                width: A[O.columnIndices[0]].width,
                sticky: ve(O.columnIndices[0]),
                children: /* @__PURE__ */ t("span", {})
              },
              `header-ungrouped-${O.columnIndices[0]}`
            );
          }),
          H && /* @__PURE__ */ p(ie, { children: [
            /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
            /* @__PURE__ */ t(
              Ve,
              {
                hidden: !0,
                width: 68,
                sticky: { right: 0 },
                className: "table-cell md:hidden",
                children: /* @__PURE__ */ t("span", {})
              },
              "actions"
            )
          ] })
        ] }) : null,
        /* @__PURE__ */ p(He, { children: [
          n.selectable && /* @__PURE__ */ t(
            Ve,
            {
              width: ge,
              sticky: { left: 0 },
              align: "left",
              className: J ? N("[&>div:first-child]:hidden", tt) : void 0,
              children: /* @__PURE__ */ t("div", { className: "ml-1.5 flex w-full items-center justify-start", children: /* @__PURE__ */ t(
                Rt,
                {
                  checked: !1,
                  onCheckedChange: ue,
                  title: C.actions.selectAll,
                  hideLabel: !0,
                  disabled: D?.records.length === 0
                }
              ) })
            }
          ),
          A.map(({ sorting: O, label: _, ...te }, oe) => {
            const we = J?.find(
              (_e) => _e.type === "group" && _e.columnIndices.includes(oe)
            ), Je = !!J && (!we || we.columnIndices[we.columnIndices.length - 1] === oe);
            return /* @__PURE__ */ t(
              Ve,
              {
                sortState: De(
                  O,
                  n.sortings,
                  R
                ),
                width: te.width,
                align: te.align,
                sticky: ve(oe),
                ...te,
                hidden: !1,
                className: N(
                  J && "[&>div:first-child]:hidden",
                  Je && tt,
                  m === "editableTable" && oe !== A.length - 1 && "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                ) || void 0,
                onSortClick: O ? () => {
                  O && B(O);
                } : void 0,
                children: _
              },
              `table-head-${oe}`
            );
          }),
          H && /* @__PURE__ */ p(ie, { children: [
            /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
            /* @__PURE__ */ t(
              Ve,
              {
                width: 68,
                hidden: !0,
                sticky: {
                  right: 0
                },
                className: "table-cell md:hidden",
                children: C.collections.actions.actions
              },
              "actions"
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ p(os, { children: [
        D?.type === "grouped" && D.groups.map((O, _) => {
          const te = O.itemCount;
          return /* @__PURE__ */ p(gt, { children: [
            /* @__PURE__ */ p(He, { sticky: !0, children: [
              /* @__PURE__ */ t(
                Ee,
                {
                  sticky: { left: 0 },
                  colSpan: (se || 1) + (n.selectable ? 1 : 0),
                  children: /* @__PURE__ */ t(
                    mn,
                    {
                      className: "px-3",
                      selectable: !!n.selectable,
                      select: _o(
                        ee[O.key]
                      ),
                      onSelectChange: (oe) => be(O, oe),
                      showOpenChange: U,
                      label: O.label,
                      itemCount: te,
                      open: Y[O.key],
                      onOpenChange: (oe) => me(O.key, oe)
                    }
                  )
                }
              ),
              /* @__PURE__ */ t(
                Ee,
                {
                  colSpan: A.length - (se || 1) + (n.selectable ? 1 : 0),
                  children: " "
                }
              )
            ] }, `group-header-${O.key}`),
            /* @__PURE__ */ t(Ae, { children: x && (!U || Y[O.key]) && O.records.map((oe, we) => {
              const Je = `row-${_}-${re(oe, we)}`, _e = /* @__PURE__ */ t(
                x,
                {
                  variants: Hr(),
                  initial: U ? "hidden" : "visible",
                  animate: "visible",
                  exit: "hidden",
                  custom: we,
                  layout: !0,
                  source: pe,
                  item: oe,
                  index: we,
                  groupIndex: _,
                  onCheckedChange: (Be) => le(oe, Be),
                  selectedItems: de,
                  columns: A,
                  frozenColumnsLeft: se,
                  checkColumnWidth: ge,
                  referenceRowType: c,
                  rowWrapper: d,
                  cellRenderer: h,
                  headerGroups: J
                },
                Je
              );
              return d ? /* @__PURE__ */ t(
                d,
                {
                  item: oe,
                  index: we,
                  children: _e
                },
                Je
              ) : _e;
            }) }, `group-animate-${_}`)
          ] }, `group-${O.key}`);
        }),
        D?.type === "flat" && D.records.map((O, _) => {
          const te = `row-${re(O, _)}`, oe = /* @__PURE__ */ t(
            at,
            {
              groupIndex: 0,
              source: pe,
              item: O,
              index: _,
              onCheckedChange: (we) => le(O, we),
              selectedItems: de,
              columns: A,
              frozenColumnsLeft: se,
              checkColumnWidth: ge,
              tableWithChildren: fe,
              referenceRowType: c,
              rowWrapper: d,
              cellRenderer: h,
              fromVisualization: m,
              headerGroups: J
            },
            te
          );
          return d ? /* @__PURE__ */ t(d, { item: O, index: _, children: oe }, te) : oe;
        }),
        F?.type === "infinite-scroll" && V && Array.from({ length: 5 }).map((O, _) => /* @__PURE__ */ t(He, { children: Array.from({ length: G }).map(
          (te, oe) => /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(he, { className: "h-4 w-full" }) }, `skeleton-cell-${_}-${oe}`)
        ) }, `skeleton-row-${_}`)),
        At(F) && F.hasMore && /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ t(
          "td",
          {
            colSpan: A.length + (n.selectable ? 1 : 0) + (H ? 1 : 0),
            ref: ne,
            className: "h-10",
            "aria-hidden": "true"
          }
        ) })
      ] }),
      (() => {
        const O = pc(b?.addRowActions?.());
        return !ae && O.length === 0 ? null : /* @__PURE__ */ p(cs, { children: [
          ae && /* @__PURE__ */ p(
            He,
            {
              className: N(
                ae.sticky && "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
                "font-medium"
              ),
              children: [
                n.selectable && /* @__PURE__ */ t(Ee, { width: ge, sticky: { left: 0 }, children: ae.label && /* @__PURE__ */ t("div", { className: "font-medium text-f1-foreground-secondary", children: ae.label }) }),
                A.map((_, te) => /* @__PURE__ */ t(
                  Ee,
                  {
                    firstCell: te === 0,
                    width: _.width,
                    sticky: ve(te),
                    children: te === 0 && !n.selectable && ae.label ? /* @__PURE__ */ t("div", { className: "font-medium text-f1-foreground-secondary", children: ae.label }) : /* @__PURE__ */ t(
                      "div",
                      {
                        className: N(
                          _.align === "right" ? "justify-end" : "",
                          "flex"
                        ),
                        children: (() => {
                          const oe = ze(
                            _.summaryPlaceholder
                          );
                          if (_.summary && n.summaries && n.summaries[_.summary]?.type === "sum") {
                            const we = ae.data[_.summary];
                            return Le(we) ? /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: oe }) : /* @__PURE__ */ p("div", { className: "flex gap-1", children: [
                              /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: C.collections.summaries.types.sum }),
                              `${we}`
                            ] });
                          }
                          return /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary", children: oe });
                        })()
                      }
                    )
                  },
                  `summary-${String(_.label)}`
                )),
                H && /* @__PURE__ */ p(ie, { children: [
                  /* @__PURE__ */ t("th", { className: "hidden md:table-cell" }),
                  /* @__PURE__ */ t(
                    Ee,
                    {
                      width: 68,
                      sticky: {
                        right: 0
                      },
                      className: "table-cell md:hidden",
                      children: ""
                    },
                    "summary-actions"
                  )
                ] })
              ]
            }
          ),
          O.length > 0 && /* @__PURE__ */ t(He, { children: /* @__PURE__ */ t(
            Ee,
            {
              colSpan: A.length + (n.selectable ? 1 : 0) + (H ? 2 : 0),
              className: "h-[48px] align-middle",
              children: /* @__PURE__ */ t(
                "div",
                {
                  className: "pointer-events-auto flex h-full items-center",
                  onClick: (_) => _.stopPropagation(),
                  onMouseDownCapture: (_) => _.stopPropagation(),
                  children: O.length === 1 ? /* @__PURE__ */ t(
                    ce,
                    {
                      variant: "outline",
                      icon: O[0].icon ?? ds,
                      label: O[0].label,
                      onClick: O[0].onClick,
                      loading: O[0].loading,
                      disabled: O[0].disabled,
                      size: "sm"
                    }
                  ) : O.some((_) => _.description !== void 0) ? /* @__PURE__ */ t(
                    rt,
                    {
                      mode: "dropdown",
                      variant: "outline",
                      size: "sm",
                      trigger: b?.addRowActionsLabel,
                      disabled: O.every((_) => _.disabled),
                      loading: O.some((_) => _.loading),
                      items: O.map((_, te) => ({
                        value: te.toString(),
                        label: _.label,
                        icon: _.icon,
                        description: _.description
                      })),
                      onClick: (_) => {
                        O[Number(_)]?.onClick?.();
                      }
                    }
                  ) : /* @__PURE__ */ t(
                    rt,
                    {
                      variant: "outline",
                      size: "sm",
                      disabled: O.every((_) => _.disabled),
                      loading: O.some((_) => _.loading),
                      items: O.map((_, te) => ({
                        value: te.toString(),
                        label: _.label,
                        icon: _.icon
                      })),
                      onClick: (_) => {
                        O[Number(_)]?.onClick?.();
                      }
                    }
                  )
                }
              )
            }
          ) })
        ] });
      })()
    ] }),
    /* @__PURE__ */ t(
      xn,
      {
        paginationInfo: F,
        setPage: $,
        className: "pb-4"
      }
    )
  ] }) });
};
function gc({ message: e, children: n }) {
  const [r, a] = I(!1), i = K(() => a(!0), []), s = K(() => a(!1), []);
  return /* @__PURE__ */ t("div", { className: "relative h-full w-full", children: /* @__PURE__ */ t(ur, { delayDuration: 100, disableHoverableContent: !0, children: /* @__PURE__ */ p(fr, { open: r, onOpenChange: a, children: [
    /* @__PURE__ */ t(hr, { asChild: !0, className: "pointer-events-auto h-full w-full", children: /* @__PURE__ */ t(
      "div",
      {
        className: "flex h-full w-full items-center",
        onFocusCapture: i,
        onBlurCapture: s,
        children: n
      }
    ) }),
    /* @__PURE__ */ p(
      pr,
      {
        side: "top",
        className: "flex items-center gap-1 border-black/10 bg-[#fff] shadow-md",
        children: [
          /* @__PURE__ */ t(Q, { icon: xr, color: "critical", size: "sm" }),
          /* @__PURE__ */ t("span", { className: "text-sm font-medium text-f1-foreground-critical", children: e })
        ]
      }
    )
  ] }) }) });
}
const bc = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed"
};
function Ge({
  readonly: e = !1,
  showRightBorder: n = !0,
  cursor: r = "text",
  isActive: a = !1,
  error: i,
  children: s
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        "border-0 border-r-[1px] border-f1-border-secondary",
        !n && "border-r-0",
        bc[r],
        i ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]" : a ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]",
        e && "bg-f1-background-secondary"
      ),
      children: i ? /* @__PURE__ */ t(gc, { message: i, children: s }) : s
    }
  );
}
const vc = "yyyy-MM-dd";
function yc({
  editableColumn: e,
  value: n,
  inputPlaceholder: r,
  error: a,
  loading: i,
  isLastColumn: s,
  onChange: l
}) {
  const o = T(() => {
    if (!n) return;
    const u = us(n);
    if (fs(u))
      return { granularity: "day", value: { from: u, to: u } };
  }, [n]), c = (u) => {
    const d = u?.value?.from, h = d ? ps(d, vc) : "";
    h !== n && l(h);
  };
  return /* @__PURE__ */ t(Ge, { showRightBorder: !s, error: a, children: /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "flex w-full min-w-0 items-center",
        e.align === "right" && "justify-end"
      ),
      children: /* @__PURE__ */ t(
        hs,
        {
          className: N(
            "[&_input]:!py-0",
            "[&_[data-slot='placeholder']]:!flex",
            "[&_[data-slot='placeholder']]:!items-center",
            "[&_[data-slot='placeholder']]:!py-0",
            "[&_[data-slot='placeholder']]:!truncate"
          ),
          placeholder: r ?? e.inputPlaceholder,
          label: e.label,
          hideLabel: !0,
          showIcon: !1,
          transparent: !0,
          displayFormat: "default",
          value: o,
          onChange: c,
          loading: i
        }
      )
    }
  ) });
}
function xc({
  editableColumn: e,
  value: n,
  error: r,
  loading: a,
  onChange: i
}) {
  const { locale: s } = Qa(), l = e.numberConfig, o = l?.locale ?? s, c = typeof n == "string" ? n.trim() : n, u = c !== "" && c != null ? Number(c) : NaN, d = isFinite(u) ? u : 0, h = (f) => {
    const v = String(f ?? 0);
    v !== n && i(v);
  };
  return /* @__PURE__ */ t(Ge, { error: r, children: /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "flex h-full w-full min-w-0 cursor-text items-center",
        e.align === "right" && "[&_input]:text-right",
        l?.units && "[&_input]:pr-1"
      ),
      children: [
        /* @__PURE__ */ t(
          ms,
          {
            label: e.label,
            hideLabel: !0,
            value: d,
            onChange: h,
            loading: a,
            transparent: !0,
            hint: "",
            locale: o,
            min: l?.min,
            max: l?.max,
            step: l?.step,
            maxDecimals: l?.maxDecimals
          }
        ),
        l?.units && /* @__PURE__ */ t("span", { className: "shrink-0 select-none pr-3 text-sm text-f1-foreground", children: l.units })
      ]
    }
  ) });
}
const rr = /* @__PURE__ */ new Set();
function wc({
  editableColumn: e,
  value: n,
  error: r,
  loading: a,
  onChange: i,
  item: s
}) {
  const l = X(), [o, c] = I(!1), u = e.selectConfig;
  if (!u)
    return rr.has(e.label) || (rr.add(e.label), console.warn(
      `SelectCell: column "${e.label}" has editType "select" but no selectConfig`
    )), /* @__PURE__ */ t(Ge, { children: yt(s, e, "editableTable", l) });
  const d = {
    label: e.label,
    hideLabel: !0,
    value: n || void 0,
    onChange: (f) => {
      const v = f ?? "";
      v !== n && i(v);
    },
    loading: a,
    size: "sm",
    placeholder: u.placeholder,
    showSearchBox: u.showSearchBox,
    defaultItem: u.defaultItem?.(s),
    multiple: !1,
    onOpenChange: c
  }, h = u.clearable ? { clearable: !0 } : {};
  return /* @__PURE__ */ t(Ge, { error: r, isActive: o, children: /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "flex w-full min-w-0 h-full",
        "items-center",
        "[&_[data-testid=input-field-wrapper]]:border-0",
        "[&_[data-testid=input-field-wrapper]]:bg-transparent",
        "[&_[data-testid=input-field-wrapper]]:shadow-none",
        "[&_[data-testid=input-field-wrapper]]:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0",
        "[&_[data-testid=input-field-wrapper]]:h-full",
        "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto",
        "[&>div]:h-full",
        "[&>div]:w-full",
        "[&>div>button]:h-full",
        e.align === "right" && "justify-end"
      ),
      children: "source" in u && u.source ? /* @__PURE__ */ t(
        nt,
        {
          ...d,
          ...h,
          source: u.source,
          mapOptions: u.mapOptions
        }
      ) : /* @__PURE__ */ t(
        nt,
        {
          ...d,
          ...h,
          options: typeof u.options == "function" ? u.options(s) : u.options
        }
      )
    }
  ) });
}
function Cc({
  editableColumn: e,
  item: n
}) {
  const r = X();
  return /* @__PURE__ */ t(Ge, { children: /* @__PURE__ */ t(
    "div",
    {
      className: N(
        e.align === "right" ? "justify-end" : "",
        "flex p-4 min-h-12 items-center border-0 h-full",
        "bg-f1-background-disabled h-full",
        "cursor-pointer w-full"
      ),
      children: yt(n, e, "editableTable", r)
    }
  ) });
}
function Ra({
  editableColumn: e,
  item: n,
  isLastColumn: r
}) {
  const a = X();
  return /* @__PURE__ */ t(Ge, { showRightBorder: !r, children: /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "flex w-full min-w-0",
        "cursor-text items-center",
        "cursor-pointer w-full",
        e.align === "right" && "justify-end"
      ),
      children: yt(n, e, "editableTable", a)
    }
  ) });
}
function ar({
  editableColumn: e,
  value: n,
  error: r,
  loading: a,
  onChange: i
}) {
  return /* @__PURE__ */ t(Ge, { error: r, children: /* @__PURE__ */ t(
    "div",
    {
      className: N(
        "flex w-full min-w-0",
        "cursor-text items-center",
        e.align === "right" && "[&_input]:text-right"
      ),
      children: /* @__PURE__ */ t(
        gs,
        {
          type: "text",
          label: e.label,
          hideLabel: !0,
          value: n,
          onChange: i,
          loading: a,
          transparent: !0
        }
      )
    }
  ) });
}
const Nc = {
  text: ar,
  number: xc,
  date: yc,
  select: wc,
  multiselect: ar,
  "display-only": Ra,
  disabled: Cc
}, Da = Ke(null);
function Sc({
  item: e,
  onCellChange: n,
  children: r
}) {
  const [a, i] = I(e), [s, l] = I({}), [o, c] = I({}), { t: u } = X(), d = z(a);
  d.current = a, W(() => {
    i(e);
  }, [e]);
  const h = K(
    (f, v) => {
      const m = { ...d.current, [f]: v };
      i(m), l((g) => {
        if (f in g) {
          const { [f]: y, ...C } = g;
          return C;
        }
        return g;
      }), c((g) => ({ ...g, [f]: !0 })), n(m).then((g) => {
        g && Object.keys(g).length > 0 && l((y) => ({ ...y, ...g }));
      }).catch((g) => {
        l((y) => ({
          ...y,
          [f]: g instanceof Error ? g.message : u("collections.editableTable.errors.saveFailed")
        }));
      }).finally(() => {
        c((g) => ({ ...g, [f]: !1 }));
      });
    },
    [n, u]
  );
  return /* @__PURE__ */ t(
    Da.Provider,
    {
      value: { localItem: a, cellErrors: s, cellLoading: o, handleCellChange: h },
      children: r
    }
  );
}
function kc() {
  return Ue(Da);
}
function ir(e, n) {
  if (n.id !== void 0 && n.id in e) {
    const a = e[n.id];
    return a == null ? "" : String(a);
  }
  const r = n.render(e);
  return typeof r == "string" ? r : typeof r == "number" ? String(r) : "";
}
function Ic({
  column: e,
  children: n,
  isLastColumn: r
}) {
  const a = kc();
  if (!a)
    return /* @__PURE__ */ t(ie, { children: n });
  const { localItem: i, cellErrors: s, cellLoading: l, handleCellChange: o } = a, c = e, u = c.editType?.(i), d = c.id !== void 0, h = (f) => {
    c.id !== void 0 && o(c.id, f);
  };
  if (d && u) {
    const f = Nc[u], v = ir(i, c);
    if (f) {
      const m = c.id ? s[c.id] : void 0, g = c.id ? l[c.id] ?? !1 : !1;
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- stops cell navigation (href/onClick) from bubbling to the row after child interactions complete
        /* @__PURE__ */ t(
          "div",
          {
            className: "pointer-events-auto h-full",
            onClick: (y) => y.stopPropagation(),
            onMouseDown: (y) => y.stopPropagation(),
            children: /* @__PURE__ */ t(
              f,
              {
                editableColumn: c,
                value: v,
                inputPlaceholder: c.inputPlaceholder,
                error: m,
                item: i,
                isLastColumn: r,
                loading: g,
                onChange: h
              }
            )
          }
        )
      );
    }
  }
  return /* @__PURE__ */ t(
    Ra,
    {
      editableColumn: c,
      item: i,
      value: ir(i, c),
      isLastColumn: r,
      onChange: h
    }
  );
}
const Ac = ({
  onCellChange: e,
  addRowActions: n,
  addRowActionsLabel: r,
  addNestedRowActions: a,
  addNestedRowActionsLabel: i,
  ...s
}) => {
  const { settings: l } = st(), o = z(e);
  o.current = e;
  const c = T(() => function({ item: d, children: h }) {
    return /* @__PURE__ */ t(
      Sc,
      {
        item: d,
        onCellChange: (...f) => o.current?.(...f),
        children: h
      }
    );
  }, []);
  return /* @__PURE__ */ t(
    zo,
    {
      addRowActions: n,
      addRowActionsLabel: r,
      addNestedRowActions: a,
      addNestedRowActionsLabel: i,
      children: /* @__PURE__ */ t(
        Aa,
        {
          ...s,
          rowWrapper: c,
          cellRenderer: Ic,
          showItemActions: !1,
          visualizationSettings: l.visualization?.editableTable,
          fromVisualization: "editableTable"
        }
      )
    }
  );
};
function Rc(e, n) {
  const r = { ...e };
  for (const [a, i] of Object.entries(n)) {
    const s = e[a];
    if (Array.isArray(s) && Array.isArray(i) && s.length > 0 && i.length > 0) {
      const l = s.filter(
        (o) => i.includes(o)
      );
      r[a] = l;
    } else
      r[a] = i;
  }
  return r;
}
const Dc = ({
  source: e,
  lane: n,
  onError: r,
  onHookUpdate: a
}) => {
  const i = T(
    () => Rc(e.currentFilters, n.filters),
    [e.currentFilters, n.filters]
  ), s = Et(e, {
    filters: i,
    onError: r
  }), {
    data: l,
    search: o,
    setSearch: c,
    isInitialLoading: u,
    isLoading: d,
    isLoadingMore: h,
    error: f,
    paginationInfo: v,
    setPage: m,
    loadMore: g,
    totalItems: y,
    mergedFilters: C,
    summaries: b
  } = s;
  return W(() => {
    a?.({
      data: l,
      search: o,
      setSearch: c,
      isInitialLoading: u,
      isLoading: d,
      isLoadingMore: h,
      error: f,
      paginationInfo: v,
      setPage: m,
      loadMore: g,
      totalItems: y,
      mergedFilters: C,
      summaries: b
    });
  }, [
    l,
    o,
    c,
    u,
    d,
    h,
    f,
    v,
    m,
    g,
    y,
    C,
    b,
    a
  ]), null;
};
function Oc(e, n = {}) {
  const { lanes: r } = e;
  if (!T(() => r && r.length > 0, [r]))
    throw new Error("Lanes has not been configured on data source");
  const [i, s] = I({}), l = K(
    (y, C) => {
      s((b) => ({ ...b, [y]: C }));
    },
    []
  ), o = T(() => JSON.stringify(r), [r]), c = T(
    () => JSON.stringify(e.currentFilters),
    [e.currentFilters]
  ), u = T(
    () => JSON.stringify(e.currentNavigationFilters),
    [e.currentNavigationFilters]
  ), d = T(
    () => JSON.stringify(e.currentSortings),
    [e.currentSortings]
  ), h = T(
    () => JSON.stringify(e.currentGrouping),
    [e.currentGrouping]
  ), f = T(
    () => JSON.stringify(e.currentSearch),
    [e.currentSearch]
  ), v = T(
    () => JSON.stringify(e.grouping),
    [e.grouping]
  ), m = T(
    () => JSON.stringify(e.dataAdapter),
    [e.dataAdapter]
  );
  return {
    lanesProvider: T(
      () => (r || []).map((y) => /* @__PURE__ */ t(
        Dc,
        {
          lane: y,
          onError: n.onError,
          source: e,
          onHookUpdate: (C) => l(y.id, C)
        },
        y.id
      )),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        // TODO check why source ref is updated always
        o,
        l,
        c,
        u,
        d,
        h,
        f,
        v,
        m
        // Include dataAdapter to detect cache updates
      ]
    ),
    lanesHooks: i
  };
}
const Fc = (e) => {
  const n = Array.from(e.values());
  return {
    allSelected: n.every((r) => r.allSelected),
    itemsStatus: n.flatMap((r) => r.itemsStatus),
    groupsStatus: n.reduce(
      (r, a) => ({
        ...r,
        ...a.groupsStatus
      }),
      {}
    ),
    filters: n.reduce(
      (r, a) => ({
        ...r,
        ...a.filters
      }),
      {}
    ),
    selectedCount: n.reduce(
      (r, a) => r + a.selectedCount,
      0
    ),
    selectedIds: n.flatMap((r) => r.selectedIds)
  };
}, Tc = (e) => {
  const n = Tt({
    data: e.data || { type: "flat", records: [], groups: [] },
    paginationInfo: e.paginationInfo,
    source: e.source,
    onSelectItems: e.onSelectItems,
    selectedState: e.source.defaultSelectedItems
  });
  return W(() => {
    e.onHookUpdate(n);
  }, [n]), null;
}, Lc = (e, n, r) => {
  const [a, i] = I(/* @__PURE__ */ new Map()), [s, l] = I({ selectItemsStatus: /* @__PURE__ */ new Map(), clearCallback: /* @__PURE__ */ new Map() }), o = K(() => {
    s.clearCallback.forEach((u) => u());
  }, [s.clearCallback]);
  W(() => {
    const u = Object.fromEntries(
      s.selectItemsStatus
    );
    r?.(
      {
        ...Fc(
          s.selectItemsStatus
        ),
        byLane: u
      },
      o
    );
  }, [s]);
  const c = T(() => (e || []).map((u) => /* @__PURE__ */ t(
    Tc,
    {
      source: n,
      data: u.data || { type: "flat", records: [], groups: [] },
      paginationInfo: u.paginationInfo,
      onHookUpdate: (d) => i((h) => new Map(h).set(u.id, d)),
      onSelectItems: (d, h) => {
        l((f) => ({
          selectItemsStatus: new Map(f.selectItemsStatus).set(
            u.id,
            d
          ),
          clearCallback: new Map(f.clearCallback).set(u.id, h)
        }));
      }
    },
    u.id
  )), [JSON.stringify(e)]);
  return {
    lanesUseSelectable: a,
    lanesSelectProvider: c
  };
}, Pc = ({
  lanes: e,
  title: n,
  description: r,
  avatar: a,
  metadata: i,
  onMove: s,
  onCreate: l,
  source: o,
  onSelectItems: c,
  onLoadError: u,
  onLoadData: d
}) => {
  const { lanesProvider: h, lanesHooks: f } = Oc(o, {
    onError: (w) => u(w)
  }), v = ei();
  if (o.currentGrouping && v)
    throw new Error("Grouping is not supported in Kanban yet");
  const [m] = I(() => /* @__PURE__ */ Symbol("kanban-visualization")), g = o.idProvider, y = T(() => JSON.stringify(
    Object.values(f).map((w) => w.data)
  ), [f]), C = T(() => e.map((w) => ({
    ...w,
    items: f[w.id]?.data?.records || []
  })), [y]), b = (w) => w.map(
    ({ icon: R, property: k }) => k.type === "file" ? { property: k } : { icon: R, property: k }
  ), x = (w) => !!(w && w.type === "infinite-scroll"), S = {
    lanes: C.map((w) => {
      const R = f[w.id], k = R?.paginationInfo?.total, P = x(R?.paginationInfo) && R?.paginationInfo?.hasMore;
      return {
        id: w.id,
        title: w.title,
        items: w.items,
        variant: w.variant,
        total: k,
        hasMore: P,
        loading: R?.isLoading || !1,
        loadingMore: R?.isLoadingMore || !1,
        fetchMore: P ? () => R.loadMore() : void 0
      };
    }),
    loading: Object.values(f).some(
      (w) => w.isInitialLoading
    ),
    getKey: (w, R) => {
      if (g) return String(g(w, R));
      const k = w?.id;
      return k != null ? String(k) : String(R);
    },
    renderCard: (w, R, k, P) => {
      const H = String(
        g ? g(w, R) : w?.id ?? R
      ), pe = o.selectable ? o.selectable(w) : w.id, ne = M && P ? M.get(P) : void 0, se = (typeof pe == "string" || typeof pe == "number") && ne && ne?.selectedItems.has(pe), re = o.itemUrl ? o.itemUrl(w) : void 0, de = o.itemOnClick ? o.itemOnClick(w) : void 0;
      return /* @__PURE__ */ t(
        bs,
        {
          drag: { id: H, type: "list-card", data: { ...w, laneId: P } },
          id: String(w.id),
          index: R,
          total: k,
          laneId: P,
          showIndicator: F,
          title: n ? n(w) : String(R),
          description: r ? r(w) : void 0,
          avatar: a ? a(w) : void 0,
          draggable: s !== void 0,
          metadata: i ? b(i(w)) : void 0,
          compact: !0,
          forceVerticalMetadata: !0,
          selectable: o.selectable !== void 0,
          selected: se,
          "data-testid": `kanban-card-${String(w.id)}`,
          onSelect: (E) => {
            ne && ne.handleSelectItemChange(w, E);
          },
          onClick: de,
          link: re
        },
        H
      );
    },
    onCreate: l
  }, A = T(() => {
    const w = Object.values(f);
    if (w.length !== 0)
      return w.reduce((R, k) => {
        const P = k.paginationInfo?.total ?? k.data.records.length;
        return R + (typeof P == "number" ? P : 0);
      }, 0);
  }, [f]), D = T(() => {
    const w = Object.values(f);
    return w.length === 0 ? !0 : w.some((R) => R.isInitialLoading);
  }, [f]);
  W(() => {
    d({
      totalItems: A,
      filters: o.currentFilters,
      search: o.currentSearch,
      isInitialLoading: D,
      data: Object.values(f).flatMap((w) => w.data.records)
    });
  }, [A, D]);
  const F = o.currentSortings === null, $ = T(() => {
    const w = /* @__PURE__ */ new Map();
    return C.forEach((R) => {
      const k = /* @__PURE__ */ new Map();
      R.items.forEach((P, H) => {
        const pe = g ? g(P, H) : P?.id ?? H, ne = String(pe);
        k.set(ne, H);
      }), w.set(R.id, k);
    }), w;
  }, [C, g]);
  S.dnd = {
    instanceId: m,
    getIndexById: (w, R) => {
      const k = $.get(w)?.get(R) ?? -1;
      return F ? k : -1;
    },
    onMove: s
  };
  const L = T(() => e.map((w) => ({
    id: w.id,
    data: f[w.id]?.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: f[w.id]?.paginationInfo || null
  })), [e, f]), { lanesSelectProvider: V, lanesUseSelectable: M } = Lc(L, o, (w, R) => {
    c?.(w, R);
  });
  return /* @__PURE__ */ p(ie, { children: [
    h,
    V,
    s ? /* @__PURE__ */ t($r, { driver: Er(m), children: /* @__PURE__ */ t(Ln, { ...S }) }) : /* @__PURE__ */ t(Ln, { ...S })
  ] });
}, Ec = ({ title: e, avatar: n, description: r }) => /* @__PURE__ */ p("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
  n && /* @__PURE__ */ t(en, { avatar: n, size: "md" }),
  /* @__PURE__ */ p("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ t("header", { children: /* @__PURE__ */ t("h3", { children: /* @__PURE__ */ t(je, { className: "text-base font-medium text-f1-foreground", children: e }) }) }),
    /* @__PURE__ */ t("aside", { children: r && r.length > 0 && /* @__PURE__ */ t("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1", children: r.map((a, i) => /* @__PURE__ */ p("div", { className: "flex min-w-0 gap-1", children: [
      /* @__PURE__ */ t(je, { children: a }),
      i < r.length - 1 && /* @__PURE__ */ t("span", { className: "hidden md:inline", children: " · " })
    ] }, i)) }) })
  ] })
] }), $c = ({
  source: e,
  item: n,
  selectedItems: r,
  handleSelectItemChange: a,
  fields: i,
  itemDefinition: s
}) => {
  const l = X(), { actions: o } = l, c = (b, x) => yt(b, x, "list", l), u = e.itemUrl ? e.itemUrl(n) : void 0, d = e.itemOnClick ? e.itemOnClick(n) : void 0, h = e.selectable ? e.selectable(n) : void 0, f = s(n), {
    primaryItemActions: v,
    dropdownItemActions: m,
    mobileDropdownItemActions: g,
    handleDropDownOpenChange: y,
    dropDownOpen: C
  } = va({ source: e, item: n });
  return /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4",
        "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"
      ),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            onClick: d,
            className: "pointer-events-auto absolute inset-0"
          }
        ),
        /* @__PURE__ */ p("div", { className: "pointer-events-none flex flex-1 flex-row items-center gap-2", children: [
          e.selectable && h !== void 0 && // z-10 is needed here to prevent the checkbox from not being selectable when itemHref is provided
          /* @__PURE__ */ t("div", { className: "pointer-events-auto z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ t(
            Rt,
            {
              checked: r.has(h),
              onCheckedChange: (b) => a(n, b),
              title: `Select ${e.selectable(n)}`,
              hideLabel: !0
            }
          ) }),
          u && /* @__PURE__ */ t(
            vs,
            {
              href: u,
              className: "pointer-events-auto absolute inset-0 block",
              tabIndex: 0,
              onClick: d,
              children: /* @__PURE__ */ t("span", { className: "sr-only", children: o.view })
            }
          ),
          /* @__PURE__ */ t(
            Ec,
            {
              title: f.title,
              avatar: f.avatar,
              description: f.description
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: (i || []).filter((b) => !b.hide?.(n)).map((b) => {
          const x = c(n, b);
          return x ? /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap", children: x }) }, String(b.label)) : null;
        }) }),
        e.itemActions && /* @__PURE__ */ p(ie, { children: [
          /* @__PURE__ */ t(
            ba,
            {
              dropDownOpen: C,
              className: "pointer-events-auto hidden md:flex",
              children: /* @__PURE__ */ t(
                ya,
                {
                  primaryItemActions: v,
                  dropdownItemActions: m,
                  handleDropDownOpenChange: y
                }
              )
            }
          ),
          /* @__PURE__ */ t(
            ga,
            {
              className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
              items: g,
              onOpenChange: y
            }
          )
        ] }),
        e.selectable && h !== void 0 && /* @__PURE__ */ t(
          "div",
          {
            className: N(
              "pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
              e.itemActions && "right-12"
            ),
            children: /* @__PURE__ */ t(
              Rt,
              {
                checked: r.has(h),
                onCheckedChange: (b) => a(n, b),
                title: `Select ${e.selectable(n)}`,
                hideLabel: !0
              }
            )
          }
        )
      ]
    }
  );
}, sr = ({
  source: e,
  items: n,
  selectedItems: r,
  handleSelectItemChange: a,
  fields: i,
  itemDefinition: s,
  isLoadingMore: l
}) => /* @__PURE__ */ t(
  "div",
  {
    className: N(
      "flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      l && "rounded-b-none"
    ),
    children: n.map((o, c) => /* @__PURE__ */ t(
      $c,
      {
        source: e,
        item: o,
        selectedItems: r,
        handleSelectItemChange: a,
        fields: i,
        itemDefinition: s
      },
      `row-${c}`
    ))
  }
), lr = ({
  source: e,
  fields: n,
  count: r = 5,
  isInitialLoading: a,
  className: i
}) => /* @__PURE__ */ t(
  "div",
  {
    className: N(
      "relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      a ? "mx-4 mt-2 rounded-t-xl" : "border-t-0",
      i
    ),
    children: Array.from({ length: r }).map((s, l) => /* @__PURE__ */ p(
      "div",
      {
        "data-testid": "skeleton-item",
        className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
        children: [
          /* @__PURE__ */ p("div", { className: "flex flex-1 flex-row items-center gap-2", children: [
            e.selectable && /* @__PURE__ */ t("div", { className: "z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ t(he, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ p("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
              /* @__PURE__ */ t(he, { className: "h-8 w-8 rounded-full" }),
              /* @__PURE__ */ p("div", { className: "flex flex-1 flex-col gap-1", children: [
                /* @__PURE__ */ t("header", { children: /* @__PURE__ */ t(he, { className: "h-5 w-32" }) }),
                /* @__PURE__ */ t("aside", { children: /* @__PURE__ */ p("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2", children: [
                  /* @__PURE__ */ t(he, { className: "h-4 w-20" }),
                  /* @__PURE__ */ t(he, { className: "h-4 w-24" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: n.map((o, c) => /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("div", { className: "flex items-center justify-center px-0 py-1 md:p-3", children: /* @__PURE__ */ t(he, { className: "h-4 w-20" }) }) }, `skeleton-field-${c}`)) }),
          e.itemActions && /* @__PURE__ */ t("div", { className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", children: /* @__PURE__ */ t(he, { className: "h-6 w-6" }) }),
          e.selectable && /* @__PURE__ */ t(
            "div",
            {
              className: N(
                "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
                e.itemActions && "right-12"
              ),
              children: /* @__PURE__ */ t(he, { className: "h-4 w-4" })
            }
          )
        ]
      },
      `skeleton-item-${l}`
    ))
  }
), zc = ({
  fields: e,
  itemDefinition: n,
  source: r,
  onSelectItems: a,
  onLoadData: i,
  onLoadError: s,
  tmpFullWidth: l
}) => {
  const {
    data: o,
    paginationInfo: c,
    setPage: u,
    isInitialLoading: d,
    isLoadingMore: h,
    loadMore: f
  } = Et(r, {
    onError: (L) => {
      s(L);
    }
  });
  W(() => {
    i({
      totalItems: c?.total || o.records.length,
      filters: r.currentFilters,
      search: r.currentSearch,
      isInitialLoading: d,
      data: o.records
    });
  }, [c?.total, o.records]);
  const { isLoading: v } = r, { loadingIndicatorRef: m } = fa(
    c,
    v,
    h,
    f
  ), {
    selectedItems: g,
    groupAllSelectedStatus: y,
    handleSelectItemChange: C,
    handleSelectGroupChange: b
  } = Tt({
    data: o,
    paginationInfo: c,
    source: r,
    onSelectItems: a,
    selectionMode: "multi",
    selectedState: r.defaultSelectedItems
  }), x = r.grouping?.collapsible, S = r.grouping?.defaultOpenGroups, { openGroups: A, setGroupOpen: D } = pn(
    o?.type === "grouped" ? o.groups : [],
    S
  );
  if (qt({
    value: d,
    delay: 100
  }))
    return /* @__PURE__ */ t(
      lr,
      {
        source: r,
        fields: e,
        count: 30,
        isInitialLoading: !0
      }
    );
  r.sortings || e.forEach((L) => {
    L.sorting && console.warn(
      "Sorting is defined on a property but no sortings are provided in the data source"
    );
  });
  const $ = d || v && r.dataAdapter.paginationType === "pages";
  return /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2",
        l && "px-0"
      ),
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: N(
              "flex min-h-0 flex-1 flex-col gap-2",
              $ && "select-none opacity-50 transition-opacity"
            ),
            "aria-live": $ ? "polite" : void 0,
            "aria-busy": $ ? "true" : void 0,
            children: /* @__PURE__ */ p("div", { className: "min-h-0 flex-1 overflow-auto pb-3", children: [
              o.type === "grouped" && o.groups.map((L, V) => {
                const M = L.itemCount;
                return /* @__PURE__ */ p(
                  "div",
                  {
                    className: "flex flex-col gap-0 pt-2 first:pt-0",
                    children: [
                      /* @__PURE__ */ t(
                        mn,
                        {
                          className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
                          selectable: !!r.selectable,
                          select: y[L.key]?.checked ? !0 : y[L.key]?.indeterminate ? "indeterminate" : !1,
                          onSelectChange: (w) => b(L, w),
                          showOpenChange: x,
                          label: L.label,
                          itemCount: M,
                          open: A[L.key],
                          onOpenChange: (w) => D(L.key, w)
                        },
                        `group-header-${L.key}`
                      ),
                      /* @__PURE__ */ t(Ae, { children: (!x || A[L.key]) && /* @__PURE__ */ t(
                        j.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.1, ease: "easeInOut" },
                          className: "mt-0.5",
                          children: /* @__PURE__ */ t(
                            sr,
                            {
                              source: r,
                              items: L.records,
                              selectedItems: g,
                              handleSelectItemChange: C,
                              fields: e,
                              itemDefinition: n,
                              isLoadingMore: h && V === o.groups.length - 1
                            },
                            `list-group-${L.key}`
                          )
                        }
                      ) })
                    ]
                  },
                  `group-header-${L.key}`
                );
              }),
              o?.type === "flat" && /* @__PURE__ */ t(
                sr,
                {
                  source: r,
                  items: o.records,
                  selectedItems: g,
                  handleSelectItemChange: C,
                  fields: e,
                  itemDefinition: n,
                  isLoadingMore: h
                }
              ),
              At(c) && h && /* @__PURE__ */ t(lr, { source: r, fields: e, count: 5 }),
              At(c) && c.hasMore && /* @__PURE__ */ t(
                "div",
                {
                  ref: m,
                  className: "w-full",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ t(xn, { paginationInfo: c, setPage: u })
      ]
    }
  );
}, xt = {
  table: {
    name: "Table",
    icon: ws,
    render: (e) => /* @__PURE__ */ t(
      Aa,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => nr({ ...e, visualizationKey: "table" }),
      resetHandler: (e) => e.setVisualizationSettings("table", {}),
      default: {}
    }
  },
  editableTable: {
    name: "Editable table",
    icon: xs,
    render: (e) => /* @__PURE__ */ t(
      Ac,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => nr({ ...e, visualizationKey: "editableTable" }),
      resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
      default: {}
    }
  },
  list: {
    name: "List",
    icon: ys,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ t(
      zc,
      {
        ...e
      }
    )
  },
  card: {
    name: "Card",
    icon: Pn,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ t(
      Po,
      {
        ...e
      }
    )
  },
  kanban: {
    name: "Kanban",
    icon: Pn,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ t(
      Pc,
      {
        ...e
      }
    )
  }
}, _c = ({
  visualization: e,
  source: n,
  onSelectItems: r,
  onLoadData: a,
  onLoadError: i,
  tmpFullWidth: s
}) => {
  if (e.type === "custom")
    return e.component({
      source: n,
      onLoadData: a,
      onLoadError: i,
      onSelectItems: r
    });
  const l = xt[e.type];
  if (!l)
    throw new Error(`Visualization type ${e.type} not found`);
  return l.render({
    source: n,
    ...e.options,
    onSelectItems: r,
    onLoadData: a,
    onLoadError: i,
    tmpFullWidth: s
  });
}, Ut = "__no-grouping__", Mc = ({
  grouping: e,
  currentGrouping: n,
  onGroupingChange: r,
  hideLabel: a = !1
}) => {
  const i = X();
  if (!e || e.mandatory && Object.entries(e.groupBy).length < 2)
    return null;
  const s = [
    ...e.mandatory ? [] : [
      {
        label: i.collections.grouping.noGrouping,
        value: Ut
      }
    ],
    ...Object.entries(e.groupBy || {}).filter(
      (l) => !!l[1]
    ).map(([l, o]) => ({
      label: o.name,
      value: l
    }))
  ];
  return /* @__PURE__ */ t("div", { className: "flex flex-col", children: /* @__PURE__ */ p("div", { className: "flex items-end gap-2", children: [
    /* @__PURE__ */ t("div", { className: "shrink grow [&_button]:h-8 [&_button]:rounded", children: /* @__PURE__ */ t(
      nt,
      {
        label: i.collections.grouping.groupBy,
        options: s,
        hideLabel: a,
        value: n?.field.toString() ?? Ut,
        onChange: (l) => r?.(
          l !== Ut ? {
            field: l,
            order: e.groupBy[l]?.defaultDirection ?? n?.order ?? "asc"
          } : void 0
        )
      }
    ) }),
    n?.field && /* @__PURE__ */ t(
      ce,
      {
        hideLabel: !0,
        label: i.collections.grouping.toggleDirection,
        variant: "outline",
        icon: n?.order === "asc" ? gr : ti,
        onClick: () => r?.({
          field: n.field,
          order: n.order === "asc" ? "desc" : "asc"
        })
      }
    )
  ] }) });
}, Ct = "__no-sorting__", jc = ({
  currentSortings: e,
  sortings: n,
  onChange: r
}) => {
  const a = X(), i = [
    {
      label: a.collections.sorting.noSorting,
      value: Ct
    },
    ...Object.entries(n || {}).map(([c, u]) => ({
      label: u.label,
      value: c
    }))
  ], [s, l] = I(e);
  W(() => {
    l(e || {
      field: Ct,
      order: "asc"
    });
  }, [JSON.stringify(e)]);
  const o = (c) => {
    !c || c.field === Ct ? r(null) : r(c);
  };
  return /* @__PURE__ */ t("div", { className: "flex flex-col", children: /* @__PURE__ */ p("div", { className: "flex items-end gap-2", children: [
    /* @__PURE__ */ t("div", { className: "shrink grow [&_button]:h-8 [&_button]:rounded", children: /* @__PURE__ */ t(
      nt,
      {
        label: a.collections.sorting.sortBy,
        options: i,
        value: s?.field,
        onChange: (c) => {
          o({
            field: c,
            order: s?.order ?? "asc"
          });
        }
      }
    ) }),
    s?.field !== Ct && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
      ce,
      {
        hideLabel: !0,
        label: a.collections.sorting.toggleDirection,
        variant: "outline",
        icon: s?.order === "asc" ? Cs : Ns,
        onClick: () => o({
          field: s?.field,
          order: s?.order === "asc" ? "desc" : "asc"
        })
      }
    ) })
  ] }) });
}, Bc = ({
  visualizations: e,
  currentVisualization: n,
  onVisualizationChange: r
}) => {
  const a = X(), i = (l) => {
    r(l);
  }, s = (l) => l.type === "custom" ? {
    icon: l.icon,
    label: l.label
  } : {
    icon: xt[l.type].icon,
    label: a.collections.visualizations[l.type]
  };
  return /* @__PURE__ */ t("div", { className: "grid grid-cols-2 p-2", children: e.map((l, o) => {
    const { icon: c, label: u } = s(l);
    return /* @__PURE__ */ p(
      "button",
      {
        className: N(
          "flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors",
          n === o && "bg-f1-background-secondary text-f1-foreground",
          Ie()
        ),
        onClick: () => i(o),
        children: [
          /* @__PURE__ */ t(Q, { icon: c }),
          u
        ]
      },
      l.type
    );
  }) });
}, Vc = (e) => {
  if (e === "custom")
    return null;
  const n = xt[e];
  if (!n)
    throw new Error(`Visualization type ${e} not found`);
  return n;
}, Oa = (e) => Vc(e.type)?.settings.renderer ?? null, Hc = (e) => {
  if (e.type === "custom")
    return !1;
  const n = Oa(e);
  return n ? n(
    e.options
  ) !== null : !1;
}, Wc = ({
  visualization: e
}) => {
  if (e.type === "custom")
    return null;
  const n = Oa(e);
  return n ? n(
    e.options
  ) : null;
}, Gc = ({
  visualizations: e,
  currentVisualization: n,
  onVisualizationChange: r,
  grouping: a,
  // summaries, // TODO: implement summaries selector
  currentGrouping: i,
  onGroupingChange: s,
  sortings: l,
  currentSortings: o,
  onSortingsChange: c
}) => {
  const u = X(), d = a ? Object.keys(a.groupBy).length + (a.mandatory ? 1 : 0) : 0, [h, f] = I(!1), v = ($) => {
    f(!1), r($);
  }, m = ($) => {
    s($);
  }, g = e && e.length > 1, y = a && d > 0, C = l && Object.keys(l).length > 0, b = T(
    () => e[n],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [n, e?.[n]]
  ), x = T(
    () => /* @__PURE__ */ t(
      Wc,
      {
        visualization: b
      },
      "visualization-settings"
    ),
    [b]
  ), S = T(
    () => Hc(b),
    [b]
  ), A = T(
    () => {
      const $ = e[n]?.type;
      if (!$) return "-";
      const L = u.collections.visualizations[$] ?? "-";
      return u.collections.visualizations.settings.replace(
        "{{visualizationName}}",
        L
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [n]
  ), D = st(), F = () => {
    Object.values(xt).forEach(($) => {
      $.settings.resetHandler?.(D);
    });
  };
  return /* @__PURE__ */ t("div", { className: "flex gap-2", children: /* @__PURE__ */ p(Ss, { open: h, onOpenChange: f, children: [
    /* @__PURE__ */ t(ks, { asChild: !0, onClick: () => f(!h), children: /* @__PURE__ */ t(
      Ce,
      {
        variant: "outline",
        label: "Settings",
        icon: Is,
        onClick: () => {
        },
        hideLabel: !0,
        compact: !0,
        pressed: h,
        "aria-controls": h ? "settings" : void 0
      }
    ) }),
    /* @__PURE__ */ t(
      As,
      {
        className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
        align: "end",
        sideOffset: 8,
        children: [
          g && /* @__PURE__ */ t(
            Bc,
            {
              visualizations: e,
              currentVisualization: n,
              onVisualizationChange: v
            },
            "visualization"
          ),
          y && !a?.hideSelector && !(a.mandatory && Object.entries(a.groupBy).length < 2) && /* @__PURE__ */ t("div", { className: "p-3", children: /* @__PURE__ */ t(
            Mc,
            {
              grouping: a,
              currentGrouping: i,
              onGroupingChange: m
            },
            "grouping"
          ) }),
          C && /* @__PURE__ */ t("div", { className: "p-3", children: /* @__PURE__ */ t(
            jc,
            {
              currentSortings: o,
              onChange: c,
              sortings: l
            },
            "sorting"
          ) }),
          S && /* @__PURE__ */ p("section", { className: "p-3 pb-0", children: [
            /* @__PURE__ */ t("h3", { className: "mb-2 text-sm font-medium text-f1-foreground-secondary", children: A }),
            x
          ] }, "visualization-settings"),
          /* @__PURE__ */ t(
            "section",
            {
              className: "border-0 border-t border-solid border-t-f1-border p-3",
              children: /* @__PURE__ */ t(
                ce,
                {
                  size: "sm",
                  variant: "ghost",
                  icon: Rs,
                  label: u.collections.visualizations.reset,
                  onClick: F
                }
              )
            },
            "reset"
          )
        ].filter(Boolean)
      }
    )
  ] }) });
}, or = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || Array.isArray(e), Uc = ({
  defaultFilters: e,
  defaultSorting: n,
  currentVisualization: r
}) => {
  const a = z(e), i = z(n), { onEvent: s } = Ds(), l = K(
    (u) => {
      if (!u) return;
      const d = Object.entries(u).find(
        ([v, m]) => a.current?.[v] !== m
      );
      if (!d) return;
      const [h, f] = d;
      or(f) && (a.current = u, s("datacollection.filter-change", {
        name: h,
        value: f,
        ...r !== void 0 && {
          visualization: r
        }
      }));
    },
    [s, r]
  ), o = K(
    (u) => {
      i?.current?.field === u?.field && i?.current?.order === u?.order || !u || typeof u.field != "string" || (i.current = u, s("datacollection.sorting-change", {
        name: u.field,
        value: u.order
      }));
    },
    [s]
  ), c = K(
    (u) => {
      if (!u) return;
      const d = Object.entries(u).find(
        ([v, m]) => a.current?.[v] !== m
      );
      if (!d) return;
      const [h, f] = d;
      or(f) && (a.current = u, s("datacollection.preset-click", {
        name: h,
        value: f,
        ...r !== void 0 && {
          visualization: r
        }
      }));
    },
    [s, r]
  );
  return {
    emitFilterChange: l,
    emitSortingChange: o,
    emitPresetClick: c
  };
}, Kc = ({
  source: e,
  visualizations: n,
  onSelectItems: r,
  onBulkAction: a,
  onStateChange: i,
  emptyStates: s,
  fullHeight: l,
  storage: o,
  id: c,
  tmpFullWidth: u
}) => {
  const {
    // Filters
    filters: d,
    currentFilters: h,
    setCurrentFilters: f,
    presets: v,
    presetsLoading: m,
    // Navigation filter
    currentNavigationFilters: g,
    navigationFilters: y,
    setCurrentNavigationFilters: C,
    // Search
    search: b,
    currentSearch: x,
    setCurrentSearch: S,
    //
    isLoading: A,
    // Actions
    primaryActions: D,
    primaryActionsLabel: F,
    secondaryActions: $,
    // Summary
    totalItemSummary: L,
    currentGrouping: V,
    setCurrentGrouping: M,
    grouping: w,
    currentSortings: R,
    setCurrentSortings: k,
    sortings: P
  } = e, [H, pe] = I(0), {
    effectiveFilters: ne,
    effectivePresets: se,
    currentFilters: re,
    setCurrentFilters: de,
    allVisualizationFilters: E,
    setAllVisualizationFilters: ee,
    hasPerVisualizationFilters: le
  } = Oo({
    sourceFilters: d,
    sourcePresets: v,
    sourceCurrentFilters: h,
    sourceSetCurrentFilters: f,
    visualizations: n,
    currentVisualization: H
  }), ue = T(() => le ? {
    ...e,
    currentFilters: re,
    setCurrentFilters: de
  } : e, [
    e,
    le,
    re,
    de
  ]), xe = z(R), { emitSortingChange: be } = Uc({
    defaultSorting: xe.current,
    currentVisualization: le ? H : void 0
  });
  W(() => {
    be(R);
  }, [be, R]);
  const ae = T(
    () => uo(D),
    [D]
  ), De = T(
    () => go(mo($)),
    [$]
  ), Le = T(
    () => Math.min(
      $ && "expanded" in $ && $.expanded || 0,
      fo
    ),
    [$]
  ), ze = T(
    () => De[0]?.items.slice(0, Le) || [],
    [De, Le]
  ), B = T(() => [
    {
      ...De[0],
      items: De[0]?.items.slice(Le) || []
    },
    ...De.slice(1)
  ].filter((Z) => Z.items.length > 0), [De, Le]), U = ae?.length > 0 || De?.length > 0, [q, Y] = I(void 0), me = Os(), [G, ve] = I(void 0), ge = K((Z) => {
    if (!Z)
      return [];
    const ye = [];
    let Ne = [];
    for (const Se of Z)
      "type" in Se && Se.type === "separator" ? (ye.push({ items: Ne }), Ne = []) : Ne.push(Se);
    return Ne.length > 0 && ye.push({ items: Ne }), ye;
  }, []), J = T(() => {
    if (G)
      return "warningMessage" in G ? {
        warningMessage: G.warningMessage
      } : {
        primary: ge(G.primary ?? []),
        secondary: (G?.secondary ?? []).filter(
          (Z) => !("type" in Z && Z.type === "separator")
        )
      };
  }, [G, ge]), [fe, Pe] = I(!1), [lt, $t] = I(0), [zt, _t] = I(!1), Mt = X(), O = T(() => L === !0 ? (Z) => Z !== void 0 ? `${Z} ${Mt.collections.itemsCount}` : null : L || void 0, [L, Mt]), _ = (Z, ye, Ne) => {
    r?.(Z, ye, Ne), Pe(
      !!Z.allSelected || Z.itemsStatus.some((ct) => ct.checked)
    ), $t(Z.selectedCount), Y(() => ye), _t(Z.allSelected === !0);
    const Se = e.bulkActions ? e.bulkActions(Z) : void 0, Sn = (ct) => {
      if ("type" in ct && ct.type === "separator")
        return { type: "separator" };
      const Vt = ct;
      return {
        ...Vt,
        onClick: () => {
          a?.(Vt.id, Z, ye), Vt.keepSelection || ye();
        }
      };
    };
    Se && ("primary" in Se ? ve({
      primary: (Se?.primary || []).map(Sn),
      secondary: (Se?.secondary || []).map(Sn)
    }) : "warningMessage" in Se && ve({ warningMessage: Se.warningMessage }));
  }, [te, oe] = I(void 0), [we, Je] = I(!0), _e = T(
    () => [b?.enabled, n.length > 1].some(Boolean),
    [b, n]
  ), { emptyState: Be, setEmptyStateType: ot } = Fo(s, {
    retry: () => {
      ot(!1), de({ ...re });
    },
    clearFilters: () => {
      ot(!1), de({}), S(void 0);
    }
  }), Fa = (Z, ye, Ne) => Z === 0 ? Object.keys(ye).length > 0 || Ne ? "no-results" : "no-data" : !1, Ta = ({
    totalItems: Z,
    filters: ye,
    isInitialLoading: Ne,
    search: Se
  }) => {
    Ne || (Je(Ne), oe(Z), ot(Fa(Z, ye, Se)));
  }, La = (Z) => {
    ot(
      "error",
      Z.cause instanceof Error ? Z.cause.message : Z.message
    );
  }, Pa = qt({
    value: !!m,
    delay: 100
  });
  W(() => {
    ot(!1);
  }, [
    re,
    x,
    g,
    e.dataAdapter
  ]);
  const wn = T(() => O !== void 0, [O]), Cn = O === void 0 ? null : te !== void 0 ? O(te) : null, { settings: jt, setSettings: Ea } = st(), { storageReady: $a } = Ro(
    c,
    typeof o == "object" ? o?.features ?? ["*"] : ["*"],
    {
      settings: {
        value: jt,
        setValue: Ea
      },
      sortings: {
        value: R,
        setValue: k
      },
      grouping: {
        value: V,
        setValue: M
      },
      navigationFilters: {
        value: g,
        setValue: C
      },
      visualization: {
        value: H,
        setValue: pe
      },
      search: {
        value: x,
        setValue: S
      },
      filters: {
        value: h,
        setValue: f
      },
      ...le ? {
        visualizationFilters: {
          value: E,
          setValue: ee
        }
      } : {}
    },
    o === !1
  ), Nn = qt({
    value: we && $a,
    delay: 100
  });
  Wr(() => {
    i?.({
      filters: re,
      sortings: R,
      visualization: H,
      grouping: V,
      search: x,
      navigationFilters: g,
      settings: jt,
      ...le ? { visualizationFilters: E } : {}
    });
  }, [
    re,
    x,
    g,
    R,
    H,
    V,
    jt,
    E
  ]);
  const Bt = T(() => {
    const Z = w ? Object.keys(w.groupBy).length + (w.mandatory ? 1 : 0) : 0, ye = Object.values(n).find(
      (Se) => Se.type === "table"
    ), Ne = !!ye && (!!ye.options?.allowColumnHiding || !!ye.options?.allowColumnReordering);
    return n && n.length > 1 || Z > 0 && !w?.hideSelector || P && Object.keys(P).length > 0 || Ne;
  }, [n, w, P]), wt = T(() => _e || U || Bt || b && b.enabled, [_e, U, Bt, b]), qe = T(() => wn ? ne ? "top" : "bottom" : !1, [ne, wn]), Xe = T(() => y ? wt ? "top" : "bottom" : !1, [y, wt]), za = T(() => qe === "top" || Xe === "top", [qe, Xe]), _a = T(() => ne || wt || Xe === "bottom" || qe === "bottom", [
    ne,
    wt,
    Xe,
    qe
  ]);
  return /* @__PURE__ */ p(
    "div",
    {
      className: N(
        "flex flex-col gap-4",
        me === "standard" && "-mx-[23px]",
        l && "h-full flex-1"
      ),
      style: {
        width: me === "standard" && !u ? "calc(100% + 46px)" : "100%"
        // To counteract the -mx-[23px] from the layout,
      },
      children: [
        za && /* @__PURE__ */ p("div", { className: "border-f1-border-primary flex gap-4 px-4", children: [
          qe === "top" && /* @__PURE__ */ t(
            Xn,
            {
              isReady: !Nn,
              totalItemSummaryResult: Cn
            }
          ),
          /* @__PURE__ */ t("div", { className: "flex flex-1 flex-shrink justify-end", children: Xe === "top" && /* @__PURE__ */ t(
            Jn,
            {
              navigationFilters: y,
              currentNavigationFilters: g,
              onChangeNavigationFilters: C
            }
          ) })
        ] }),
        _a && /* @__PURE__ */ p(
          "div",
          {
            className: N(
              "flex flex-row gap-4 px-4",
              l && "max-h-full",
              u && "px-0"
            ),
            children: [
              qe === "bottom" && /* @__PURE__ */ t(
                Xn,
                {
                  isReady: !Nn,
                  totalItemSummaryResult: Cn
                }
              ),
              /* @__PURE__ */ t("div", { className: "flex-1", children: /* @__PURE__ */ p(
                Fs,
                {
                  filters: ne,
                  value: re,
                  presets: se,
                  presetsLoading: Pa,
                  onChange: (Z) => de(Z),
                  children: [
                    A && /* @__PURE__ */ t(
                      j.div,
                      {
                        className: "flex h-8 w-8 items-center justify-center",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: {
                          opacity: 0
                        },
                        children: /* @__PURE__ */ t(Cr, { size: "small" })
                      }
                    ),
                    b && /* @__PURE__ */ t(So, { onChange: S, value: x }),
                    Bt && /* @__PURE__ */ t(
                      Gc,
                      {
                        visualizations: n,
                        currentVisualization: H,
                        onVisualizationChange: pe,
                        grouping: w,
                        currentGrouping: V,
                        onGroupingChange: M,
                        sortings: P,
                        currentSortings: R,
                        onSortingsChange: k
                      }
                    ),
                    U && /* @__PURE__ */ p(ie, { children: [
                      _e && /* @__PURE__ */ t("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
                      /* @__PURE__ */ t(
                        xo,
                        {
                          primaryActions: ae,
                          primaryActionsLabel: F,
                          secondaryActions: ze,
                          otherActions: B
                        }
                      )
                    ] }),
                    Xe === "bottom" && /* @__PURE__ */ t(
                      Jn,
                      {
                        navigationFilters: y,
                        currentNavigationFilters: g,
                        onChangeNavigationFilters: C
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: N(
              Be && "hidden",
              l && "h-full min-h-0 flex-1"
            ),
            children: /* @__PURE__ */ t(
              _c,
              {
                visualization: n[H],
                source: ue,
                onSelectItems: _,
                onLoadData: Ta,
                onLoadError: La,
                tmpFullWidth: u
              }
            )
          }
        ),
        Be ? /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ t(
          Ts,
          {
            emoji: Be.emoji,
            title: Be.title,
            description: Be.description,
            actions: Be.actions
          }
        ) }) : /* @__PURE__ */ t(ie, { children: G && /* @__PURE__ */ t(
          yo,
          {
            isOpen: fe,
            selectedNumber: lt,
            primaryActions: J && "primary" in J ? J.primary : [],
            secondaryActions: J && "secondary" in J ? J.secondary : [],
            warningMessage: "warningMessage" in G ? G.warningMessage : void 0,
            onUnselect: () => q?.(),
            allPagesSelection: !!e.allPagesSelection,
            isAllItemsSelected: zt,
            totalItems: te
          }
        ) })
      ]
    }
  );
}, Jc = (e) => /* @__PURE__ */ t($o, { children: /* @__PURE__ */ t(Kc, { ...e }) }), qc = $e(
  Fe("OneDataCollection", Jc)
), Cd = qc, Nd = (e, n = []) => {
  const r = X(), {
    navigationFilters: a,
    summaries: i,
    currentNavigationFilters: s
  } = e, l = Ls(
    {
      ...e,
      dataAdapter: e.dataAdapter
    },
    n
  ), [o, c] = I(() => a ? Object.fromEntries(
    Object.entries(a).map(([d, h]) => {
      const f = ca[h.type];
      return [
        d,
        f.valueConverter ? f.valueConverter(h.defaultValue, h, r) : h.defaultValue
      ];
    })
  ) : {});
  Wr(() => {
    s && c(s);
  }, [s]);
  const u = T(() => i, n);
  return {
    ...l,
    summaries: u,
    navigationFilters: a,
    currentNavigationFilters: o,
    setCurrentNavigationFilters: c
  };
};
function cr(e) {
  if (e == null)
    return "";
  const n = String(e);
  return n.includes(",") || n.includes(`
`) || n.includes('"') ? `"${n.replace(/"/g, '""')}"` : n;
}
function bt(e) {
  if (e == null)
    return "";
  if (typeof e != "object")
    return String(e);
  if (e instanceof Date)
    return e.toISOString();
  if (Array.isArray(e))
    return e.map((r) => bt(r)).filter(Boolean).join("; ");
  const n = e;
  return "type" in n && "value" in n && typeof n.type == "string" ? Xc(n.type, n.value) : "firstName" in n && "lastName" in n ? `${n.firstName} ${n.lastName}`.trim() : "label" in n && typeof n.label == "string" ? n.label : "text" in n && (typeof n.text == "string" || typeof n.text == "number") ? String(n.text) : "name" in n && typeof n.name == "string" ? n.name : "";
}
function Xc(e, n) {
  if (n == null)
    return "";
  const r = n;
  switch (e) {
    case "person":
      return `${r.firstName ?? ""} ${r.lastName ?? ""}`.trim();
    case "company":
    case "team":
    case "folder":
    case "file":
      return typeof r.name == "string" ? r.name : "";
    case "dotTag":
    case "status":
    case "statusTag":
    case "alertTag":
    case "tag":
      return typeof r.label == "string" ? r.label : "";
    case "tagList": {
      const a = r.tags;
      return Array.isArray(a) ? a.map(
        (i) => typeof i.label == "string" ? i.label : String(i)
      ).join("; ") : "";
    }
    case "number":
      return typeof n == "number" ? String(n) : r.number !== void 0 ? String(r.number) : "";
    case "amount":
      return typeof n == "number" ? String(n) : r.amount !== void 0 ? String(r.amount) : "";
    case "percentage":
      return typeof n == "number" ? String(n) : r.percentage !== void 0 ? `${r.percentage}%` : "";
    case "progressBar": {
      if (typeof n == "number") return String(n);
      const a = r.value !== void 0 ? r.value : "";
      return (typeof r.label == "string" ? r.label : "") || String(a);
    }
    case "text":
    case "longText":
      return typeof n == "string" || typeof n == "number" ? String(n) : r.text !== void 0 ? String(r.text) : "";
    case "date":
      return n instanceof Date ? n.toISOString() : r.date instanceof Date ? r.date.toISOString() : r.date !== void 0 ? String(r.date) : "";
    case "country":
      return typeof r.label == "string" ? r.label : typeof r.code == "string" ? r.code : "";
    case "avatarList": {
      const a = r.avatarList;
      return Array.isArray(a) ? a.map((i) => typeof i.firstName == "string" && typeof i.lastName == "string" ? `${i.firstName} ${i.lastName}`.trim() : typeof i.name == "string" ? i.name : "").filter(Boolean).join("; ") : "";
    }
    case "icon":
      return typeof r.label == "string" ? r.label : "";
    case "syncStatus":
      return typeof n == "string" ? n : "";
    default:
      return bt(n);
  }
}
function Zc(e, n) {
  return n ? n.split(".").reduce((r, a) => r && typeof r == "object" && a in r ? r[a] : "", e) : e;
}
function Yc(e, n, r) {
  if (!e)
    return [];
  if (e.type === "table" || e.type === "editableTable") {
    const a = e.options.columns.filter((s) => {
      if (!n || n.size === 0) return !0;
      const l = s.id ?? s.label ?? "column";
      return !n.has(l);
    });
    return (r && r.length > 0 ? (() => {
      const s = new Set(r), l = a.filter(
        (c) => !s.has(c.id ?? c.label ?? "column")
      ), o = [...a].filter((c) => s.has(c.id ?? c.label ?? "column")).sort((c, u) => {
        const d = c.id ?? c.label ?? "column", h = u.id ?? u.label ?? "column";
        return r.indexOf(d) - r.indexOf(h);
      });
      return [...l, ...o];
    })() : [...a].sort(
      (s, l) => (s.order ?? a.length) - (l.order ?? a.length)
    )).map((s) => ({
      label: s.label,
      field: s.sorting || void 0,
      render: s.render ? (l) => {
        const o = s.render(l);
        return bt(o);
      } : void 0
    }));
  }
  return [];
}
function Qc(e, n) {
  return e.map(
    (r) => n.map((a) => {
      if (a.render)
        return a.render(r);
      if (a.field) {
        const i = Zc(
          r,
          a.field
        );
        return bt(i);
      }
      return bt(r);
    })
  );
}
function ed(e) {
  const n = (/* @__PURE__ */ new Date()).toISOString().slice(0, 19).replace(/[:-]/g, "");
  return `${e.replace(/[^a-zA-Z0-9-_]/g, "_")}_${n}.csv`;
}
function td(e, n, r) {
  if (!e || e.length === 0)
    throw new Error("No data available for export");
  let a = Yc(
    n,
    r?.hiddenColumnIds,
    r?.columnOrder
  );
  if (a.length === 0) {
    const l = e[0];
    a = Object.keys(l).map((o) => ({
      label: o.charAt(0).toUpperCase() + o.slice(1),
      field: o
    }));
  }
  const i = Qc(e, a), s = r?.includeHeaders !== !1 ? a.map((l) => l.label) : [];
  return [
    ...s.length > 0 ? [s.map((l) => cr(l)).join(",")] : [],
    ...i.map(
      (l) => l.map((o) => cr(o)).join(",")
    )
  ].join(`
`);
}
function nd(e, n) {
  const r = new Blob(["\uFEFF" + e], {
    type: "text/csv;charset=utf-8"
  }), a = document.createElement("a"), i = URL.createObjectURL(r);
  a.href = i, a.download = n, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(i);
}
async function rd(e, n, r) {
  const a = td(e, n, r), i = ed(r?.filename || "data_collection");
  nd(a, i);
}
const Qe = 1e4, dr = 100;
async function Nt(e) {
  if (e && typeof e.then == "function")
    return e;
  if (e && typeof e.subscribe == "function") {
    const n = e;
    return new Promise((r, a) => {
      const i = n.subscribe({
        next(s) {
          s.loading || (i?.unsubscribe(), s.error ? a(s.error) : s.data != null ? r(s.data) : a(new Error("Observable resolved with no data")));
        },
        error(s) {
          a(s instanceof Error ? s : new Error(String(s)));
        },
        complete() {
          a(new Error("Observable completed without emitting data"));
        }
      });
    });
  }
  return e;
}
async function ad(e) {
  const { dataAdapter: n } = e, r = [
    ...e.currentSortings ? [
      {
        field: e.currentSortings.field,
        order: e.currentSortings.order
      }
    ] : [],
    ...e.currentGrouping ? [
      {
        field: e.currentGrouping.field,
        order: e.currentGrouping.order ?? "asc"
      }
    ] : []
  ], a = {
    filters: e.currentFilters,
    sortings: r,
    search: e.currentSearch,
    navigationFilters: e.currentNavigationFilters
  };
  if (!n.paginationType) {
    const o = n.exportFetchData ?? n.fetchData;
    return ((await Nt(o(a))).records ?? []).slice(0, Qe);
  }
  const i = n.exportFetchData ?? n.fetchData;
  if (n.paginationType === "pages") {
    const o = [];
    let c = 1;
    for (; o.length < Qe; ) {
      const d = await Nt(
        i({
          ...a,
          pagination: { currentPage: c, perPage: dr }
        })
      );
      if (!d.records || d.records.length === 0 || (o.push(...d.records), "pagesCount" in d && c >= d.pagesCount)) break;
      c++;
    }
    return o.slice(0, Qe);
  }
  if (n.paginationType === "infinite-scroll") {
    const o = [];
    let c = null;
    for (; o.length < Qe; ) {
      const d = await Nt(
        i({
          ...a,
          pagination: { cursor: c, perPage: dr }
        })
      );
      if (!d.records || d.records.length === 0 || (o.push(...d.records), "hasMore" in d && !d.hasMore)) break;
      if ("cursor" in d)
        c = d.cursor ?? null;
      else
        break;
    }
    return o.slice(0, Qe);
  }
  return ((await Nt(
    i({
      ...a,
      pagination: {}
    })
  )).records ?? []).slice(0, Qe);
}
function Sd({
  source: e,
  currentVisualization: n,
  filename: r,
  enabled: a = !0
}) {
  const [i, s] = I(!1), l = X(), { settings: o } = st(), c = K(async () => {
    if (a) {
      s(!0);
      try {
        const u = await ad(e), d = n?.type ?? "table", h = o.visualization[d], f = h?.hidden ? new Set(h.hidden) : void 0, v = h?.order;
        await rd(u, n, {
          filename: r || "data_collection_export",
          hiddenColumnIds: f,
          columnOrder: v
        });
      } catch (u) {
        console.error("Export failed:", u);
      } finally {
        s(!1);
      }
    }
  }, [a, e, n, r, o]);
  return {
    label: l.collections?.export?.label ?? "Export to CSV",
    icon: Ps,
    onClick: c,
    loading: i,
    disabled: !a || i || e.isLoading,
    description: l.collections?.export?.description ?? "Download all data as a CSV file"
  };
}
export {
  dd as A,
  $l as B,
  ml as C,
  ud as D,
  fd as F,
  mt as I,
  Cl as M,
  pd as O,
  hd as P,
  gd as S,
  co as T,
  Pt as a,
  ft as b,
  zl as c,
  md as d,
  Xl as e,
  bd as f,
  vd as g,
  yd as h,
  xd as i,
  oo as j,
  wd as k,
  Cd as l,
  Sd as m,
  rd as n,
  td as o,
  Et as p,
  Nd as q,
  fa as r,
  Xs as s,
  qs as t,
  it as u,
  rl as v,
  al as w,
  Lt as x
};
