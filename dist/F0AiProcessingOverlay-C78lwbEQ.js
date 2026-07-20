import { jsxs as a, jsx as t, Fragment as Re } from "react/jsx-runtime";
import { useInsertionEffect as Sr, forwardRef as g, useRef as j, useEffect as q, useLayoutEffect as rt, useState as B, useMemo as Q, useCallback as _, createContext as Ge, useContext as Be, useId as ot, createElement as Tr, memo as Hr } from "react";
import { c_ as Ar, c$ as $r, _ as nt, bZ as Br, d0 as Ir, d1 as Pr, d2 as jr, d3 as Dr, b_ as Zr, c7 as st, bY as _r, d4 as Or, a7 as s1, d5 as Ur, aL as zr, d6 as Gr, d7 as Wr, d8 as qr, ai as Xr, d9 as Yr, cu as Kr, ab as it, ae as Qr, da as Jr, bb as i1, a2 as at, U as We, bP as ct, bj as eo, c3 as to, db as ro, b4 as oo, ct as no, a0 as Fe, aw as so, bn as lt, dc as io, cr as ao, bX as Me, cp as co, dd as lo, bR as dt, b3 as fo, de as uo, df as ho, dg as go, dh as po, di as Co, dj as ft, ci as mo, cj as vo, dk as wo, dl as xo, dm as ko, dn as Lo, dp as bo, bx as yo, c0 as Mo, dq as Eo, dr as Ro, ds as Fo, dt as No, du as Vo, dv as So, dw as To, dx as Ho, bw as Ao, cs as $o, ac as Bo, ce as Io, dy as Po, dz as jo, dA as Do, dB as Zo, dC as _o, dD as Oo, dE as Uo, ar as zo, by as Go, bT as ut, N as Wo, a1 as qo, bz as ht, bQ as Xo, bS as gt, dF as Yo, bm as Ko, bl as Qo, dG as Jo, dH as en, bA as pt, bB as tn, bC as rn, b2 as on, aA as nn, dI as sn, au as an, bh as Ct, bg as mt, b9 as cn, dJ as vt, b8 as ln, b$ as a1, dK as dn, bd as c1, dL as fn, dM as un, dN as l1, c1 as hn, c2 as gn, cq as wt, dO as pn, H as Cn, G as mn, dP as vn, dQ as wn, dR as xn, dS as kn, bN as Ln, dT as xt, dU as bn, ad as yn, dV as Mn, M as ce, p as k, r as Se, c8 as En, u as G, bM as Rn, V as he, bL as kt, J as le, w as ge, a3 as Fn, S as Ce, dW as Nn, af as ie, aR as xe, E as Ee, q as J, cz as Lt, aF as d1, dX as Vn, aG as f1, aH as u1, b as be, bJ as Sn, dY as Tn, bK as Hn, W as An, b1 as $n, a6 as h1, bD as Bn, bE as In, bF as Pn, bG as y1, a4 as jn, am as bt, aU as yt, dZ as Dn, cG as Zn, d_ as _n, d$ as On, aZ as Mt, e0 as Un, cA as zn, e1 as Gn, aW as $e, ba as Et, e2 as Rt, bc as Ft, c as r1, c6 as M1, e3 as Nt, c4 as Wn, c5 as qn, br as Xn, e4 as Yn, bi as g1, cf as Kn, e5 as Qn, e6 as Jn, e7 as es, e8 as ts, e9 as rs, a9 as os, ag as ns, z as ss, A as is, al as E1, ea as Vt, eb as St, ec as as, ed as cs, ak as ls, a8 as ds, ee as fs, ef as us, d as hs } from "./F0CanvasPanel-H0b8WY6-.js";
import { createPortal as Tt } from "react-dom";
import { defaultTranslations as gs } from "./i18n-provider-defaults.js";
import { useTrackVolume as ps } from "@livekit/components-react";
function Cs(e, r, o) {
  Sr(() => e.on(r, o), [e, r, o]);
}
const ms = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M3.1606 8.53576L11.8143 5.07428C11.9335 5.0266 12.0665 5.0266 12.1857 5.07428L20.8394 8.53576C21.2585 8.70339 21.2585 9.29661 20.8394 9.46424L12.1857 12.9257C12.0665 12.9734 11.9335 12.9734 11.8143 12.9257L3.1606 9.46424C2.74152 9.29661 2.74152 8.70339 3.1606 8.53576Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10V15.6703C19 15.8703 18.8808 16.0511 18.697 16.1299L12.197 18.9156C12.0712 18.9695 11.9288 18.9695 11.803 18.9156L5.30304 16.1299C5.1192 16.0511 5 15.8703 5 15.6703V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9L16 11V13.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), vs = g(ms), ws = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), xs = g(ws), ks = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ t(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ) }),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M12 5.3H13.3V4H12V5.3ZM12 18.7V20H13.3V18.7H12ZM13.6123 4.16253L13.3517 5.43614L13.3517 5.43614L13.6123 4.16253ZM12.998 4.06165L12.8373 5.35168L12.8375 5.3517L12.998 4.06165ZM12.997 4.06152L12.8366 5.35159L12.8378 5.35174L12.997 4.06152ZM12.998 19.9384L12.8375 18.6483L12.8375 18.6483L12.998 19.9384ZM10.7 5.3V18.7H13.3V5.3H10.7ZM12 4C7.58172 4 4 7.58172 4 12H6.6C6.6 9.01766 9.01766 6.6 12 6.6V4ZM4 12C4 16.4183 7.58172 20 12 20V17.4C9.01766 17.4 6.6 14.9823 6.6 12H4ZM13.8729 2.88892C13.6378 2.84081 13.3995 2.80159 13.1586 2.7716L12.8375 5.3517C13.0111 5.37331 13.1826 5.40155 13.3517 5.43614L13.8729 2.88892ZM13.1587 2.77162C13.1591 2.77166 13.1575 2.77146 13.1561 2.7713L12.8378 5.35174L12.8373 5.35168L13.1587 2.77162ZM13.1573 2.77145C12.7777 2.72425 12.3914 2.7 12 2.7V5.3C12.2839 5.3 12.5631 5.31758 12.8366 5.35159L13.1573 2.77145ZM12 2.7C6.86375 2.7 2.7 6.86375 2.7 12H5.3C5.3 8.29969 8.29969 5.3 12 5.3V2.7ZM2.7 12C2.7 17.1362 6.86375 21.3 12 21.3V18.7C8.29969 18.7 5.3 15.7003 5.3 12H2.7ZM12 21.3C12.3918 21.3 12.7785 21.2757 13.1586 21.2284L12.8375 18.6483C12.5636 18.6824 12.2842 18.7 12 18.7V21.3ZM13.1586 21.2284C17.7486 20.6572 21.3 16.7443 21.3 12H18.7C18.7 15.4163 16.142 18.2371 12.8375 18.6483L13.1586 21.2284ZM21.3 12C21.3 7.50426 18.1113 3.75622 13.8729 2.88892L13.3517 5.43614C16.4042 6.06078 18.7 8.76375 18.7 12H21.3Z",
          mask: "url(#a)",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ls = g(ks), bs = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ys = g(bs), Ms = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Es = g(Ms), Rs = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 19H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 13V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 12.5L19 13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 7.5,
          cy: 6.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 17,
          cy: 7.5,
          r: 2.5,
          fill: "currentColor",
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Fs = g(Rs), Ns = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 4,
          x: 4,
          y: 16,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M4 5.78078C4 5.32191 4.3123 4.92193 4.75746 4.81063L11.7575 3.06063C11.9167 3.02082 12.0833 3.02082 12.2425 3.06063L19.2425 4.81063C19.6877 4.92193 20 5.32191 20 5.78078V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V5.78078Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t("path", { stroke: "currentColor", d: "M6 9V16", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M18 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M10 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Vs = g(Ns), Ss = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 11L16 15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ts = g(Ss), Hs = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        d: "M12 1.75C13.3815 1.75019 14.4595 2.86532 15.1504 4.19336C15.4816 4.8302 15.7498 5.56266 15.9434 6.34961C16.4284 6.34988 16.8333 6.35262 17.167 6.37988C17.5405 6.41043 17.8825 6.47529 18.2031 6.63867C18.7018 6.89274 19.1073 7.29825 19.3613 7.79688C19.5247 8.11754 19.5896 8.45951 19.6201 8.83301C19.65 9.19912 19.6504 9.65087 19.6504 10.2002V15.2002C19.6504 16.0295 19.651 16.6908 19.6074 17.2236C19.5633 17.764 19.4699 18.2295 19.252 18.6572C18.902 19.3438 18.3438 19.902 17.6572 20.252C17.2295 20.4699 16.764 20.5633 16.2236 20.6074C15.6908 20.651 15.0295 20.6504 14.2002 20.6504H9.7998C8.97054 20.6504 8.30919 20.651 7.77637 20.6074C7.23603 20.5633 6.77047 20.4699 6.34277 20.252C5.65615 19.902 5.09795 19.3438 4.74805 18.6572C4.53012 18.2295 4.43674 17.764 4.39258 17.2236C4.34904 16.6908 4.34961 16.0295 4.34961 15.2002V10.2002C4.34961 9.65087 4.34997 9.19912 4.37988 8.83301C4.41043 8.45951 4.47529 8.11754 4.63867 7.79688C4.89274 7.29825 5.29825 6.89274 5.79688 6.63867C6.11754 6.47529 6.45951 6.41043 6.83301 6.37988C7.16627 6.35265 7.5705 6.34988 8.05469 6.34961C8.24828 5.56243 8.51833 4.83035 8.84961 4.19336C9.54044 2.86519 10.6184 1.75019 12 1.75ZM9.12598 7.65039C9.05158 8.16025 9.01074 8.68958 9.01074 9.22559C9.01043 9.58418 8.71898 9.87481 8.36035 9.875C8.00156 9.875 7.71028 9.5843 7.70996 9.22559C7.70996 8.69464 7.7455 8.16652 7.8125 7.65137C7.44434 7.65243 7.16671 7.65624 6.93945 7.6748C6.64615 7.69877 6.49373 7.74235 6.38672 7.79688C6.13286 7.92628 5.92628 8.13286 5.79688 8.38672C5.74235 8.49373 5.69877 8.64615 5.6748 8.93945C5.65023 9.24033 5.65039 9.62951 5.65039 10.2002V15.2002C5.65039 16.0507 5.65029 16.6496 5.68848 17.1172C5.72605 17.577 5.79732 17.8525 5.90625 18.0664C6.13155 18.5086 6.49141 18.8684 6.93359 19.0938C7.14751 19.2027 7.42299 19.274 7.88281 19.3115C8.35038 19.3497 8.94928 19.3496 9.7998 19.3496H14.2002C15.0507 19.3496 15.6496 19.3497 16.1172 19.3115C16.577 19.274 16.8525 19.2027 17.0664 19.0938C17.5086 18.8684 17.8684 18.5086 18.0938 18.0664C18.2027 17.8525 18.274 17.577 18.3115 17.1172C18.3497 16.6496 18.3496 16.0507 18.3496 15.2002V10.2002C18.3496 9.62951 18.3498 9.24033 18.3252 8.93945C18.3012 8.64615 18.2576 8.49373 18.2031 8.38672C18.0737 8.13286 17.8671 7.92628 17.6133 7.79688C17.5063 7.74235 17.3539 7.69877 17.0605 7.6748C16.8329 7.65621 16.5547 7.65242 16.1855 7.65137C16.2526 8.16657 16.29 8.69458 16.29 9.22559C16.2897 9.58409 15.9991 9.87466 15.6406 9.875C15.2818 9.875 14.9906 9.5843 14.9902 9.22559C14.9902 8.68955 14.9485 8.16024 14.874 7.65039H9.12598ZM12 3.05078C11.3716 3.05098 10.6293 3.58955 10.0029 4.79395C9.76477 5.25197 9.56079 5.77813 9.40039 6.34961H14.5986C14.4381 5.77833 14.2352 5.25187 13.9971 4.79395C13.3706 3.58954 12.6284 3.05098 12 3.05078Z",
        fill: "currentColor"
      }
    )
  }
), As = g(Hs), $s = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 7.50006C15 5.49507 17.5 5.50004 20 7.50006V16.9194C20 17.7579 19.0021 18.2442 18.2289 17.9199C16.2959 17.109 14.2941 17.4668 12 19M12 7.50006C9 5.49507 6.5 5.50004 4 7.50006L4 16.9194C4 17.7579 4.99792 18.2442 5.77115 17.9199C7.7041 17.109 9.70585 17.4668 12 19M12 7.50006V19",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Bs = g($s), Is = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M7.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M15.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ps = g(Is), js = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M9.00195 4.53821L4.85303 10.1967C3.8316 11.5898 3.97926 13.5197 5.20072 14.7411L5.35342 14.8938C6.58509 16.1255 8.53503 16.264 9.92845 15.2188L15.5019 11.0382",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M15.502 11.0382C14.6524 11.8878 12.5023 11.1152 10.7096 9.32251C8.91686 7.52977 8.15226 5.38778 9.0018 4.53824C9.85135 3.68869 11.9933 4.4533 13.7861 6.24603C15.5788 8.03877 16.3515 10.1887 15.502 11.0382Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5C15.5 15.8589 16.8467 14.2177 17.3299 13.6816C17.4224 13.5791 17.5776 13.5791 17.6701 13.6816C18.1533 14.2177 19.5 15.8589 19.5 17.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ds = g(js), Zs = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8L12 12M12 20V12M19 8L12 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _s = g(Zs), Os = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.5 15L16.5 21M16.5 21L14 18.5M16.5 21L19 18.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Us = g(Os), zs = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 17.5H13M13 17.5L16 14.5M13 17.5L16 20.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Gs = g(zs), Ws = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 17.5H20M20 17.5L17 14.5M20 17.5L17 20.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), qs = g(Ws), Xs = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10C4 8.34315 5.34315 7 7 7H7.27924C7.70967 7 8.09181 6.72457 8.22792 6.31623L8.31623 6.05132C8.72457 4.82629 9.87099 4 11.1623 4H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 3,
          stroke: "currentColor",
          strokeLinecap: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 6.5L16 6.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 8V5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ys = g(Xs), Ks = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qs = g(Ks), Js = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M19.9995 12.6495C19.9995 13.9164 19.1682 15.0475 17.9214 15.4767L8.20654 18.8194C6.15882 19.5237 3.99986 18.0738 3.99951 15.9933L3.99951 8.00694C3.99979 5.92631 6.15877 4.47641 8.20654 5.18077L17.9214 8.52354C19.1683 8.95274 19.9995 10.0837 19.9995 11.3507L19.9995 12.6495ZM7.71924 6.59874C6.55322 6.19771 5.49981 7.0517 5.49951 8.00694L5.49951 15.9933C5.49988 16.9485 6.55329 17.8024 7.71924 17.4015L8.74951 17.047L8.74951 6.95323L7.71924 6.59874ZM10.2495 7.46983L10.2495 16.5304L13.7495 15.3253L13.7495 8.67491L10.2495 7.46983ZM18.4995 11.3507C18.4995 10.7587 18.108 10.1748 17.4331 9.94249L15.2495 9.19053L15.2495 14.8097L17.4331 14.0577C18.1079 13.8254 18.4995 13.2415 18.4995 12.6495L18.4995 11.3507Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ei = g(Js), ti = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M12.9712 6.72803C12.9711 7.69427 12.1874 8.47779 11.2212 8.47803L6.77686 8.47803C5.81044 8.47803 5.02699 7.69441 5.02686 6.72803L5.02686 5.72803C5.02686 4.76153 5.81036 3.97803 6.77686 3.97803L11.2212 3.97803C12.1875 3.97826 12.9712 4.76167 12.9712 5.72803L12.9712 6.72803ZM18.9712 12.5005C18.9712 13.4668 18.1875 14.2503 17.2212 14.2505L6.77686 14.2505C5.81036 14.2505 5.02686 13.467 5.02686 12.5005L5.02686 11.5005C5.02686 10.534 5.81036 9.75049 6.77686 9.75049L17.2212 9.75049C18.1875 9.75072 18.9712 10.5341 18.9712 11.5005L18.9712 12.5005ZM15.9712 18.271C15.9709 19.2371 15.1873 20.0208 14.2212 20.021L6.77685 20.021C5.81052 20.021 5.02712 19.2373 5.02685 18.271L5.02685 17.271C5.02685 16.3045 5.81036 15.521 6.77685 15.521L14.2212 15.521C15.1875 15.5212 15.9712 16.3046 15.9712 17.271L15.9712 18.271ZM11.4712 5.72803C11.4712 5.5901 11.3591 5.47826 11.2212 5.47803L6.77686 5.47803C6.63878 5.47803 6.52686 5.58996 6.52686 5.72803L6.52686 6.72803C6.52699 6.86599 6.63887 6.97803 6.77686 6.97803L11.2212 6.97803C11.359 6.97779 11.4711 6.86584 11.4712 6.72803L11.4712 5.72803ZM17.4712 11.5005C17.4712 11.3626 17.3591 11.2507 17.2212 11.2505L6.77686 11.2505C6.63878 11.2505 6.52686 11.3624 6.52686 11.5005L6.52686 12.5005C6.52686 12.6386 6.63878 12.7505 6.77686 12.7505L17.2212 12.7505C17.3591 12.7503 17.4712 12.6384 17.4712 12.5005L17.4712 11.5005ZM14.4712 17.271C14.4712 17.1331 14.3591 17.0212 14.2212 17.021L6.77685 17.021C6.63878 17.021 6.52685 17.1329 6.52685 17.271L6.52685 18.271C6.52712 18.4088 6.63895 18.521 6.77685 18.521L14.2212 18.521C14.3589 18.5208 14.4709 18.4087 14.4712 18.271L14.4712 17.271Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ri = g(ti), oi = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M3.73145 4.97357C4.14535 4.97393 4.48145 5.30958 4.48145 5.72357V10.2646C4.48145 11.6768 4.48184 12.6912 4.54688 13.4872C4.61121 14.2744 4.73473 14.7829 4.94434 15.1943C5.3518 15.9936 6.00238 16.6434 6.80176 17.0507C7.21303 17.2602 7.72096 17.3848 8.50781 17.4492C9.30388 17.5142 10.3192 17.5146 11.7314 17.5146H20.2607C20.6748 17.5148 21.0107 17.8505 21.0107 18.2646C21.0104 18.6784 20.6746 19.0144 20.2607 19.0146H11.7314C10.3439 19.0146 9.25705 19.0145 8.38574 18.9433C7.50611 18.8714 6.77893 18.7227 6.12109 18.3876C5.0394 17.8365 4.15969 16.9565 3.6084 15.8749C3.2731 15.2169 3.12368 14.4893 3.05176 13.6093C2.98058 12.7381 2.98145 11.652 2.98145 10.2646V5.72357C2.98145 5.30936 3.31723 4.97357 3.73145 4.97357ZM18.7578 8.46674C19.0521 8.17559 19.527 8.17856 19.8184 8.4726C20.1095 8.76702 20.1068 9.24185 19.8125 9.53314L16.4014 12.9091L16.3447 12.9599C16.0511 13.1972 15.6197 13.1803 15.3457 12.9091L12.4629 10.0556L8.11621 14.3564C7.82179 14.6474 7.34694 14.6448 7.05566 14.3505C6.76484 14.0561 6.76743 13.5812 7.06152 13.29L11.9346 8.46674C12.2267 8.17759 12.698 8.17781 12.9902 8.46674L15.874 11.3212L18.7578 8.46674Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ni = g(oi), si = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M21.0005 11.9995C21.0005 12.4136 20.6645 12.7492 20.2505 12.7495L19.9644 12.7495C19.5862 16.8159 16.1656 20.0002 12.0005 20.0005C7.58237 20.0005 4.00075 16.4185 4.00049 12.0005C4.00049 7.83514 7.18391 4.41376 11.2505 4.03564L11.2495 3.75049C11.2495 3.33644 11.5855 3.00075 11.9995 3.00049C16.9699 3.00049 21.0002 7.02917 21.0005 11.9995ZM15.6753 12.7505C15.3277 14.4617 13.8143 15.7503 12.0005 15.7505C9.92963 15.7505 8.25083 14.0713 8.25049 12.0005C8.25049 10.1862 9.53875 8.67211 11.2505 8.32471L11.2505 5.54443C8.01397 5.91634 5.50049 8.66434 5.50049 12.0005C5.50075 15.5901 8.4108 18.5005 12.0005 18.5005C15.3364 18.5002 18.0847 15.9859 18.4565 12.7495L15.6753 12.7505ZM14.2505 12.0005C14.2505 10.758 13.2429 9.75075 12.0005 9.75049C10.7578 9.75049 9.75049 10.7578 9.75049 12.0005C9.75083 13.2428 10.7581 14.2505 12.0005 14.2505C13.2427 14.2502 14.2501 13.2427 14.2505 12.0005ZM19.4624 11.2495C19.1104 7.70663 16.2934 4.88961 12.7505 4.5376L12.7505 8.32471C14.2197 8.62312 15.3771 9.78123 15.6753 11.2505L19.4624 11.2495Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ii = g(si), ai = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M6.72754 11.0273C7.69378 11.0275 8.4773 11.8111 8.47754 12.7773V17.2217C8.47754 18.1881 7.69393 18.9715 6.72754 18.9717H5.72754C4.76104 18.9717 3.97754 18.1882 3.97754 17.2217V12.7773C3.97777 11.811 4.76119 11.0273 5.72754 11.0273H6.72754ZM12.5 5.02734C13.4664 5.02734 14.2498 5.81104 14.25 6.77734V17.2217C14.25 18.1882 13.4665 18.9717 12.5 18.9717H11.5C10.5335 18.9717 9.75 18.1882 9.75 17.2217V6.77734C9.75023 5.81104 10.5336 5.02734 11.5 5.02734H12.5ZM18.2705 8.02734C19.2366 8.02761 20.0203 8.81121 20.0205 9.77734V17.2217C20.0205 18.188 19.2368 18.9714 18.2705 18.9717H17.2705C16.304 18.9717 15.5205 18.1882 15.5205 17.2217V9.77734C15.5207 8.81104 16.3042 8.02734 17.2705 8.02734H18.2705ZM5.72754 12.5273C5.58961 12.5273 5.47777 12.6395 5.47754 12.7773V17.2217C5.47754 17.3598 5.58947 17.4717 5.72754 17.4717H6.72754C6.8655 17.4715 6.97754 17.3597 6.97754 17.2217V12.7773C6.97731 12.6396 6.86535 12.5275 6.72754 12.5273H5.72754ZM11.5 6.52734C11.3621 6.52734 11.2502 6.63947 11.25 6.77734V17.2217C11.25 17.3598 11.3619 17.4717 11.5 17.4717H12.5C12.6381 17.4717 12.75 17.3598 12.75 17.2217V6.77734C12.7498 6.63947 12.6379 6.52734 12.5 6.52734H11.5ZM17.2705 9.52734C17.1326 9.52734 17.0207 9.63947 17.0205 9.77734V17.2217C17.0205 17.3598 17.1324 17.4717 17.2705 17.4717H18.2705C18.4084 17.4714 18.5205 17.3596 18.5205 17.2217V9.77734C18.5203 9.63963 18.4082 9.52761 18.2705 9.52734H17.2705Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ci = g(ai), li = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.00002 12L11.4 14.4L15 9.6",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), di = g(li), fi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 12,
          height: 12,
          x: 6,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 9L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 9L6 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 15L6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L9 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 12L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ui = g(fi), hi = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M10.508 4.49715C12.2437 4.15195 14.0458 4.41874 15.6066 5.253C17.1673 6.08728 18.3903 7.43741 19.0675 9.07234C19.7447 10.7074 19.8342 12.5272 19.3205 14.2208C18.8067 15.9143 17.7216 17.3772 16.2502 18.3604C14.7786 19.3437 13.0114 19.7868 11.2502 19.6134C9.48897 19.4399 7.8424 18.6606 6.59098 17.4093C6.33717 17.1554 6.33722 16.7442 6.59098 16.4903C6.84482 16.2365 7.2561 16.2365 7.50992 16.4903C8.54871 17.529 9.91615 18.1754 11.3781 18.3194C12.8399 18.4633 14.3071 18.0964 15.5285 17.2803C16.7497 16.4643 17.6498 15.2493 18.0763 13.8438C18.5027 12.4381 18.4284 10.9276 17.8664 9.57039C17.3042 8.21318 16.2889 7.09203 14.9933 6.39949C13.6978 5.7071 12.2016 5.48597 10.7609 5.77254C9.32029 6.05921 8.02383 6.83634 7.09196 7.97175C6.28743 8.95212 5.7977 10.1469 5.67887 11.4005L6.5402 10.5401L6.64274 10.4571C6.89502 10.2907 7.23806 10.3181 7.46012 10.5401C7.68199 10.7622 7.70952 11.1053 7.54313 11.3575L7.46012 11.46L5.46012 13.46C5.23812 13.682 4.89497 13.7093 4.64274 13.543L4.5402 13.46L2.5402 11.46L2.45719 11.3575C2.29077 11.1052 2.31822 10.7622 2.5402 10.5401C2.76225 10.3181 3.1053 10.2907 3.35758 10.4571L3.46012 10.5401L4.37028 11.4503C4.48367 9.87729 5.08099 8.37252 6.08707 7.14656C7.20984 5.77868 8.77231 4.84239 10.508 4.49715ZM12.0002 8.34968C12.3591 8.34975 12.6505 8.64113 12.6505 9.00007V11.6231L15.8224 13.4356L15.9298 13.5118C16.1569 13.7113 16.2203 14.0497 16.0646 14.3223C15.9088 14.5948 15.5851 14.7124 15.298 14.6182L15.1779 14.5645L11.6779 12.5645C11.4755 12.4488 11.3499 12.2332 11.3498 12.0001V9.00007C11.3498 8.64109 11.6412 8.34968 12.0002 8.34968Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), gi = g(hi), pi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 19.9381C12.6724 19.979 12.3387 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.4104 19.9691 12.8136 19.9095 13.2073",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 16L18 20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ci = g(pi), mi = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M12 6C14.2091 6 16 7.79086 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18H8C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C8 7.79086 9.79086 6 12 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), vi = g(mi), wi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 11H17.5C18.6046 11 19.5 11.8954 19.5 13V15C19.5 16.1046 18.6046 17 17.5 17H16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), xi = g(wi), ki = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9L11 12L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Li = g(ki), bi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 18H13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 15V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12.5 7H6.2C5.0799 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.0799 3 10.2V11.8C3 12.9201 3 13.4802 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.51984 15 5.07989 15 6.2 15H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M15 8C15 7.06812 15 6.60218 15.1522 6.23463C15.3552 5.74458 15.7446 5.35523 16.2346 5.15224C16.6022 5 17.0681 5 18 5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V15C21 15.9319 21 16.3978 20.8478 16.7654C20.6448 17.2554 20.2554 17.6448 19.7654 17.8478C19.3978 18 18.9319 18 18 18C17.0681 18 16.6022 18 16.2346 17.8478C15.7446 17.6448 15.3552 17.2554 15.1522 16.7654C15 16.3978 15 15.9319 15 15V8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15V15.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), yi = g(bi), Mi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 5C17.0499 6.64327 18.3625 9.16835 18.3625 12C18.3625 14.8316 17.0499 17.3567 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 7.51669C12.3129 8.56917 13.1536 10.1864 13.1536 12C13.1536 13.8136 12.3129 15.4309 11 16.4833",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ei = g(Mi), Ri = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M16 6L6 16M17 11.5L11.5 17",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Fi = g(Ri), Ni = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10M20 10V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V10M20 10H4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 14H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Vi = g(Ni), Si = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        d: "M4.93 4.54l14.14 5.39c.6.22.59.36.14.62l-5.56 2.85c-.46.23-.66.41-.89.86l-2.89 5.31c-.22.39-.4.4-.55 0L4.34 5.22c-.21-.69-.14-.84.59-.68Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ti = g(Si), Hi = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.57235 9.90784L6.57241 16.5747C6.8262 17.4207 7.60484 18 8.48806 18H15.5119C16.3952 18 17.1738 17.4207 17.4276 16.5747L19.4276 9.90784C19.664 9.11999 18.9011 8.3996 18.1281 8.6807L15.3975 9.67363C14.8953 9.85626 14.3382 9.61174 14.1327 9.11845L12.9231 6.21538C12.5812 5.39487 11.4188 5.39487 11.0769 6.21538L9.86731 9.11845C9.66177 9.61174 9.10471 9.85626 8.60249 9.67363L5.87192 8.6807C5.09891 8.3996 4.336 9.11999 4.57235 9.90784Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ai = g(Hi), $i = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.98311 10C3.98311 6.6771 6.67686 3.98335 9.99977 3.98335C11.4271 3.98335 12.7383 4.48035 13.7698 5.31072L5.31048 13.7701C4.4801 12.7385 3.98311 11.4273 3.98311 10ZM6.22972 14.6893C7.26124 15.5197 8.57247 16.0167 9.99977 16.0167C13.3227 16.0167 16.0164 13.3229 16.0164 10C16.0164 8.57271 15.5194 7.26149 14.6891 6.22996L6.22972 14.6893ZM9.99977 2.68335C5.95889 2.68335 2.68311 5.95913 2.68311 10C2.68311 14.0409 5.95889 17.3167 9.99977 17.3167C14.0407 17.3167 17.3164 14.0409 17.3164 10C17.3164 5.95913 14.0407 2.68335 9.99977 2.68335Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Bi = g($i), Ii = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 20H17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 20L9 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 20L15 16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pi = g(Ii), ji = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Di = g(ji), Zi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.5 9H11C10.1716 9 9.5 9.67157 9.5 10.5C9.5 11.3284 10.1716 12 11 12H13C13.8284 12 14.5 12.6716 14.5 13.5C14.5 14.3284 13.8284 15 13 15H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1304 20 16.0663 19.1672 17.5 17.8095",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 10.5L20 12.5L22 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _i = g(Zi), Oi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ui = g(Oi), zi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11.0001 19L8.00011 19C6.34325 19 5.00011 17.6569 5.00011 16L5.00011 8.00001C5.00011 6.34315 6.34325 5.00001 8.00011 5.00001L11.0001 5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Gi = g(zi), Wi = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 12H7L9.5 6.5L14.5 17.5L17 12H20",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), qi = g(Wi), Xi = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Yi = g(Xi), Ki = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qi = g(Ki), Ji = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 4V20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ea = g(Ji), ta = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M9 9.44526V4H14.8038V9.44526C14.8038 10.4578 15.1113 11.4466 15.6855 12.2806L18.8423 16.8659C19.7558 18.1928 18.8059 20 17.1949 20H6.60892C4.99797 20 4.04806 18.1928 4.96158 16.8659L8.11836 12.2806C8.69256 11.4466 9 10.4578 9 9.44526Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 4L16 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.60938 14.5H17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ra = g(ta), oa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), na = g(oa), sa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ia = g(sa), aa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6V15C4 16.6569 5.34315 18 7 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 14L11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L14.6464 12.6464C14.8417 12.8417 15.1583 12.8417 15.3536 12.6464L20 8M20 8V11M20 8H17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ca = g(aa), la = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6 4.35001C5.08873 4.35001 4.35 5.08874 4.35 6.00001V8.00001C4.35 8.91128 5.08873 9.65001 6 9.65001H6.35V14.35H6C5.08873 14.35 4.35 15.0887 4.35 16V18C4.35 18.9113 5.08873 19.65 6 19.65H8C8.91127 19.65 9.65 18.9113 9.65 18V17.65H14.35V18C14.35 18.9113 15.0887 19.65 16 19.65H18C18.9113 19.65 19.65 18.9113 19.65 18V16C19.65 15.0887 18.9113 14.35 18 14.35H17.65V9.65001H18C18.9113 9.65001 19.65 8.91128 19.65 8.00001V6.00001C19.65 5.08874 18.9113 4.35001 18 4.35001H16C15.0887 4.35001 14.35 5.08874 14.35 6.00001V6.35001H9.65V6.00001C9.65 5.08874 8.91127 4.35001 8 4.35001H6ZM17 8.35001H18C18.1933 8.35001 18.35 8.19331 18.35 8.00001V6.00001C18.35 5.80671 18.1933 5.65001 18 5.65001H16C15.8067 5.65001 15.65 5.80671 15.65 6.00001V6.99888L15.65 7.00001L15.65 7.00113V8.00001C15.65 8.19331 15.8067 8.35001 16 8.35001H17ZM16.35 9.65001V14.35H16C15.0887 14.35 14.35 15.0887 14.35 16V16.35H9.65V16C9.65 15.0887 8.91127 14.35 8 14.35H7.65V9.65001H8C8.91127 9.65001 9.65 8.91128 9.65 8.00001V7.65001H14.35V8.00001C14.35 8.91128 15.0887 9.65001 16 9.65001H16.35ZM16.9989 15.65H16C15.8067 15.65 15.65 15.8067 15.65 16V16.9989L15.65 17L15.65 17.0011V18C15.65 18.1933 15.8067 18.35 16 18.35H18C18.1933 18.35 18.35 18.1933 18.35 18V16C18.35 15.8067 18.1933 15.65 18 15.65H17.0011C17.0007 15.65 17.0004 15.65 17 15.65C16.9996 15.65 16.9992 15.65 16.9989 15.65ZM8 8.35001H7H6C5.8067 8.35001 5.65 8.19331 5.65 8.00001V6.00001C5.65 5.80671 5.8067 5.65001 6 5.65001H8C8.1933 5.65001 8.35 5.80671 8.35 6.00001V7.00001V8.00001C8.35 8.19331 8.1933 8.35001 8 8.35001ZM6 15.65H6.99887L7 15.65L7.00112 15.65H8C8.1933 15.65 8.35 15.8067 8.35 16V17V18C8.35 18.1933 8.1933 18.35 8 18.35H6C5.8067 18.35 5.65 18.1933 5.65 18V16C5.65 15.8067 5.8067 15.65 6 15.65Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), da = g(la), fa = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.35 16.5C3.35 17.6874 4.31259 18.65 5.5 18.65L6.5 18.65C7.68741 18.65 8.65 17.6874 8.65 16.5L8.65 15.5C8.65 14.3126 7.68741 13.35 6.5 13.35L5.5 13.35C4.31259 13.35 3.35 14.3126 3.35 15.5L3.35 16.5ZM5.5 17.35C5.03056 17.35 4.65 16.9694 4.65 16.5L4.65 15.5C4.65 15.0305 5.03056 14.65 5.5 14.65L6.5 14.65C6.96944 14.65 7.35 15.0305 7.35 15.5L7.35 16.5C7.35 16.9694 6.96944 17.35 6.5 17.35L5.5 17.35ZM9.35 16.5C9.35 17.6874 10.3126 18.65 11.5 18.65L12.5 18.65C13.6874 18.65 14.65 17.6874 14.65 16.5L14.65 15.5C14.65 14.3126 13.6874 13.35 12.5 13.35L11.5 13.35C10.3126 13.35 9.35 14.3126 9.35 15.5L9.35 16.5ZM11.5 17.35C11.0306 17.35 10.65 16.9694 10.65 16.5L10.65 15.5C10.65 15.0305 11.0306 14.65 11.5 14.65L12.5 14.65C12.9694 14.65 13.35 15.0305 13.35 15.5L13.35 16.5C13.35 16.9694 12.9694 17.35 12.5 17.35L11.5 17.35ZM17.5 18.65C16.3126 18.65 15.35 17.6874 15.35 16.5L15.35 15.5C15.35 14.3126 16.3126 13.35 17.5 13.35L18.5 13.35C19.6874 13.35 20.65 14.3126 20.65 15.5L20.65 16.5C20.65 17.6874 19.6874 18.65 18.5 18.65L17.5 18.65ZM16.65 16.5C16.65 16.9694 17.0306 17.35 17.5 17.35L18.5 17.35C18.9694 17.35 19.35 16.9694 19.35 16.5L19.35 15.5C19.35 15.0305 18.9694 14.65 18.5 14.65L17.5 14.65C17.0306 14.65 16.65 15.0305 16.65 15.5L16.65 16.5ZM3.35 8.49996C3.35 9.68738 4.31259 10.65 5.5 10.65L18.5 10.65C19.6874 10.65 20.65 9.68738 20.65 8.49996L20.65 7.49996C20.65 6.31255 19.6874 5.34996 18.5 5.34996L5.5 5.34996C4.31259 5.34996 3.35 6.31255 3.35 7.49996L3.35 8.49996ZM5.5 9.34996C5.03056 9.34996 4.65 8.96941 4.65 8.49996L4.65 7.49996C4.65 7.03052 5.03056 6.64996 5.5 6.64996L18.5 6.64996C18.9694 6.64996 19.35 7.03052 19.35 7.49996L19.35 8.49996C19.35 8.96941 18.9694 9.34996 18.5 9.34996L5.5 9.34996Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), ua = g(fa), ha = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5.32843 14.3284L5.5 14.5L10.5 9.5L12.25 11.25C12.9404 11.9404 14.0596 11.9404 14.75 11.25C15.4404 10.5596 15.4404 9.44035 14.75 8.75L12.1213 6.12132C10.9497 4.94975 9.05025 4.94975 7.87868 6.12132L5.32843 8.67157C3.76633 10.2337 3.76633 12.7663 5.32843 14.3284Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7V7C14.1046 5.89543 15.8954 5.89543 17 7L18.6716 8.67157C20.2337 10.2337 20.2337 12.7663 18.6716 14.3284L14.4142 18.5858C13.6332 19.3668 12.3668 19.3668 11.5858 18.5858L11 18L10.9142 18.0858C10.1332 18.8668 8.86683 18.8668 8.08579 18.0858L7.5 17.5V17.5C6.94772 18.0523 6.05228 18.0523 5.5 17.5L5.25 17.25C4.55964 16.5596 4.55964 15.4404 5.25 14.75L6 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M10.4596 15.4596C10.7135 15.2058 10.7135 14.7942 10.4596 14.5404C10.2058 14.2865 9.79422 14.2865 9.54038 14.5404L10.4596 15.4596ZM7.95962 17.9596L10.4596 15.4596L9.54038 14.5404L7.04038 17.0404L7.95962 17.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M13.4596 16.4596C13.7135 16.2058 13.7135 15.7942 13.4596 15.5404C13.2058 15.2865 12.7942 15.2865 12.5404 15.5404L13.4596 16.4596ZM10.9596 18.9596L13.4596 16.4596L12.5404 15.5404L10.0404 18.0404L10.9596 18.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ga = g(ha), pa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 14L20 14V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 17H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 17H11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 14L5.9319 6.27239C6.26578 4.93689 7.46573 4 8.84233 4H15.1577C16.5343 4 17.7342 4.93689 18.0681 6.27239L20 14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ca = g(pa), ma = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M19.9998 15.3506C20.3588 15.3506 20.6502 15.642 20.6502 16.001V19.001C20.6501 19.3599 20.3587 19.6514 19.9998 19.6514C19.641 19.6512 19.3495 19.3598 19.3494 19.001V17.5713L16.8133 20.1074C16.3641 20.5562 15.6353 20.5564 15.1863 20.1074L12.9998 17.9209L9.45974 21.4609C9.20588 21.7145 8.79358 21.7147 8.53982 21.4609C8.28612 21.2072 8.28624 20.7949 8.53982 20.541L12.1863 16.8945C12.6073 16.4735 13.2737 16.448 13.7254 16.8164L13.8133 16.8945L15.9998 19.0811L18.4295 16.6514H16.9998C16.641 16.6512 16.3495 16.3598 16.3494 16.001C16.3494 15.6421 16.6409 15.3508 16.9998 15.3506H19.9998ZM9.00076 15.3477C9.35961 15.3477 9.65093 15.6392 9.65115 15.998C9.65115 16.357 9.35974 16.6484 9.00076 16.6484C7.38199 16.6485 6.2487 17.1089 5.52908 17.5518C5.16727 17.7744 4.90636 17.9946 4.74001 18.1543C4.65714 18.2339 4.59767 18.2983 4.5613 18.3398C4.54353 18.3602 4.53101 18.3754 4.52419 18.3838L4.51833 18.3916V18.3896C4.30255 18.6751 3.89763 18.7325 3.61111 18.5176C3.32415 18.3021 3.2659 17.8955 3.48122 17.6084V17.6064L3.48318 17.6055C3.48381 17.6045 3.48429 17.6027 3.48513 17.6016C3.48698 17.5991 3.48942 17.596 3.49197 17.5928C3.49722 17.586 3.50428 17.5775 3.51247 17.5674C3.52939 17.5465 3.55326 17.5181 3.58279 17.4844C3.64213 17.4166 3.72756 17.3244 3.83962 17.2168C4.0639 17.0015 4.39702 16.7215 4.84744 16.4443C5.75278 15.8872 7.11981 15.3477 9.00076 15.3477ZM8.99978 4.34863C11.5676 4.34888 13.6501 6.43114 13.6502 8.99902C13.6502 11.567 11.5677 13.6492 8.99978 13.6494C6.43165 13.6494 4.34939 11.5671 4.34939 8.99902C4.34949 6.43099 6.43172 4.34863 8.99978 4.34863ZM16.0008 6.34766C18.0165 6.34766 19.6509 7.98239 19.6511 9.99805C19.6511 12.0139 18.0166 13.6484 16.0008 13.6484C15.6418 13.6484 15.3504 13.357 15.3504 12.998C15.3506 12.6393 15.642 12.3477 16.0008 12.3477C17.2986 12.3477 18.3504 11.2959 18.3504 9.99805C18.3502 8.70036 17.2985 7.64844 16.0008 7.64844C15.6418 7.64837 15.3504 7.35699 15.3504 6.99805C15.3506 6.63928 15.642 6.34773 16.0008 6.34766ZM8.99978 5.64941C7.14969 5.64941 5.65027 7.14896 5.65017 8.99902C5.65017 10.8492 7.14962 12.3486 8.99978 12.3486C10.8497 12.3484 12.3494 10.849 12.3494 8.99902C12.3493 7.14911 10.8497 5.64966 8.99978 5.64941Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), va = g(ma), wa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M15 13.75C15 12.7835 15.7462 12 16.6667 12C18.5076 12 20 13.567 20 15.5C20 17.433 18.5076 19 16.6667 19C15.7462 19 15 18.2165 15 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M9 13.75C9 12.7835 8.25381 12 7.33333 12C5.49238 12 4 13.567 4 15.5C4 17.433 5.49238 19 7.33333 19C8.25381 19 9 18.2165 9 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 15V12.25C4 7.69365 7.58172 4 12 4C16.4183 4 20 7.69365 20 12.25V15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), xa = g(wa), ka = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), La = g(ka), ba = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.02676 21H8.70114C8.88929 21 9.06254 20.8948 9.14268 20.7245C9.74058 19.4545 9.99622 18.2105 9.99622 17.0039C9.99622 16.3524 9.76813 15.9227 9.46286 15.2206C9.26905 14.7748 9.03558 14.2714 8.87603 14.0142C8.55464 13.4962 7.92802 13.3349 7.46497 13.5664C7.00191 13.7979 6.88253 14.3546 7.13253 14.8546C7.38253 15.3546 8.08594 16.7242 7.42007 17.162C7.00161 17.437 6.48266 17.3625 6.10336 16.889C5.87911 16.609 5.50323 16.1147 5.50323 15.6956L5.50312 11C5.50312 9.99999 5.25003 9 4.2344 9C3.21877 9 3 10 3 11V16C3 17.5096 3.59595 18.2663 5.20354 20.5694C5.39126 20.8383 5.6988 21 6.02676 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17.9695 21H15.2951C15.1069 21 14.9337 20.8948 14.8535 20.7245C14.2556 19.4545 14 18.2105 14 17.0039C14 16.3524 14.2281 15.9227 14.5334 15.2206C14.7272 14.7748 14.9606 14.2714 15.1202 14.0142C15.4416 13.4962 16.0682 13.3349 16.5312 13.5664C16.9943 13.7979 17.1137 14.3546 16.8637 14.8546C16.6137 15.3546 15.9103 16.7242 16.5761 17.162C16.9946 17.437 17.5136 17.3625 17.8929 16.889C18.1171 16.609 18.493 16.1147 18.493 15.6956L18.4931 11C18.4931 9.99999 18.7462 9 19.7618 9C20.7774 9 20.9962 10 20.9962 11V16C20.9962 17.5096 20.4003 18.2663 18.7927 20.5694C18.605 20.8383 18.2974 21 17.9695 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.2611 2C16.1983 2 17.5 3.76447 17.5 5.41053C17.5 8.74408 12 12 12 12C11.9022 12 6.5 8.74408 6.5 5.41053C6.5 3.76447 7.80167 2 9.73889 2C10.8511 2 11.5783 2.53882 12 3.0125C12.4217 2.53882 13.1489 2 14.2611 2Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ya = g(ba), Ma = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Ea = g(Ma), Ra = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 6,
          height: 6,
          x: 4.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 4.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 6,
          height: 6,
          x: 13.5,
          y: 13.5,
          stroke: "currentColor",
          strokeLinejoin: "round",
          rx: 1.5,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Fa = g(Ra), Na = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.49998 10H7.65285C8.14169 10 8.55888 10.3534 8.63924 10.8356L8.86071 12.1644C8.94107 12.6466 9.35827 13 9.8471 13H14.1529C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Va = g(Na), Sa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 7V7.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ta = g(Sa), Ha = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 6H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 18H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9H6C4.89543 9 4 9.89543 4 11V13C4 14.1046 4.89543 15 6 15H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 15L18 15C19.1046 15 20 14.1046 20 13L20 11C20 9.89543 19.1046 9 18 9L16 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Aa = g(Ha), $a = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 11H9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 11H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 11H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 15L12.5 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V5.5C12 4.94772 12.4477 4.5 13 4.5H13.5C14.0523 4.5 14.5 4.05228 14.5 3.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ba = g($a), Ia = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M18 19H6C4.34315 19 3 17.6569 3 16C3 15.4477 3.44772 15 4 15H9.5C9.77614 15 10 15.2239 10 15.5C10 15.7761 10.2239 16 10.5 16H13.5C13.7761 16 14 15.7761 14 15.5C14 15.2239 14.2239 15 14.5 15H20C20.5523 15 21 15.4477 21 16C21 17.6569 19.6569 19 18 19Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pa = g(Ia), ja = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ht = g(ja), Da = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L6 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 5V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 9L4 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 19L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 19L15 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17L11 18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L7 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 6.99998L13 5.99999C14.3807 4.61928 16.6193 4.61929 18 6V6C19.3807 7.38071 19.3807 9.61929 18 11L17 12",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Za = g(Da), _a = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 10V8C8 5.79086 9.79086 4 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Oa = g(_a), Ua = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M14.9388 10.137C14.9587 9.94491 14.9689 9.74991 14.9689 9.55251C14.9689 6.48594 12.5134 4 9.48443 4C6.45546 4 4 6.48594 4 9.55251C4 12.6191 6.45546 15.105 9.48443 15.105C9.70417 15.105 9.9209 15.0919 10.1339 15.0665V18.9333C10.1339 19.5224 10.6056 20 11.1875 20H18.4616C19.0434 20 19.5152 19.5224 19.5152 18.9333V11.2037C19.5152 10.6145 19.0434 10.137 18.4616 10.137H14.9388ZM14.9388 10.137C14.6727 12.7123 12.6678 14.7638 10.1339 15.0665V11.2037C10.1339 10.6145 10.6056 10.137 11.1875 10.137H14.9388Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), za = g(Ua), Ga = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M13.635 6.37192C13.9349 6.076 15.2013 5.25398 15.4679 5.51702C15.7178 5.78007 14.9013 7.04599 14.6181 7.32547C14.3348 7.6214 14.1182 7.83513 13.9682 7.98309L14.4348 12.7508L13.9016 13.2769L12.302 9.62714L11.6688 10.2519C11.219 10.7122 10.5525 11.189 10.0026 11.5178L10.0859 13.1618L9.83599 13.4084C9.83599 13.4084 9.05286 11.9617 9.01953 11.9288C9.00287 11.8959 7.53659 11.1068 7.53659 11.1068L7.78652 10.8602L9.43609 10.9424C9.76934 10.3998 10.2359 9.74222 10.7024 9.28189L11.3189 8.67359L7.65322 7.07887L8.18642 6.55277L12.9852 7.02954C13.1351 6.86514 13.3517 6.65141 13.635 6.37192Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M6.33689 3.33043C9.46941 0.223189 14.5348 0.223189 17.6506 3.33043C20.7831 6.43768 20.7831 11.4849 17.6506 14.5921C14.5181 17.6994 9.45275 17.6994 6.33689 14.5921C3.22104 11.4849 3.22104 6.43768 6.33689 3.33043ZM7.33663 13.6222C9.91929 16.1869 14.0849 16.1869 16.6675 13.6222C19.2502 11.041 19.2502 6.88157 16.6675 4.3333C14.0849 1.76859 9.91929 1.76859 7.33663 4.3333C4.75397 6.89801 4.75397 11.0574 7.33663 13.6222Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 18.3406C13.3851 18.3406 14.7014 18.0611 15.9344 17.4857C16.2843 17.3212 16.7009 17.4692 16.8675 17.8309C17.0175 18.1762 16.8675 18.5872 16.5176 18.7516C15.1013 19.4092 13.585 19.738 12.0021 19.738C10.4358 19.738 8.9029 19.4092 7.48661 18.7516C7.12004 18.5872 6.97007 18.1762 7.1367 17.8309C7.30332 17.4692 7.71988 17.3212 8.06979 17.4857C9.3028 18.0446 10.6358 18.3406 12.0021 18.3406Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 22.5C10.7524 22.5 9.53607 22.3192 8.35304 21.941C7.98647 21.8259 7.78652 21.4314 7.8865 21.0697C8.00313 20.708 8.38637 20.4943 8.7696 20.6093C9.80266 20.9382 10.9024 21.1026 12.0021 21.1026C13.1018 21.1026 14.1682 20.9382 15.2179 20.6258C15.5845 20.5107 15.9844 20.7244 16.101 21.0861C16.2177 21.4478 16.0177 21.8424 15.6345 21.9575C14.4515 22.3192 13.2351 22.5 12.0021 22.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Wa = g(Ga), qa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 11V16C5 17.6569 6.34315 19 8 19H9C9.55228 19 10 18.5523 10 18V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V18C14 18.5523 14.4477 19 15 19H16C17.6569 19 19 17.6569 19 16V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.74949 8.3768L4.37833 6.17584C4.74631 4.88793 5.92346 4 7.2629 4H16.7371C18.0765 4 19.2537 4.88793 19.6217 6.17584L20.2505 8.3768C20.6261 9.6914 19.639 11 18.2718 11C17.4924 11 16.7798 10.5596 16.4312 9.86244L16 9L15.4472 10.1056C15.1731 10.6537 14.6129 11 14 11C13.3871 11 12.8269 10.6537 12.5528 10.1056L12 9L11.4472 10.1056C11.1731 10.6537 10.6129 11 10 11C9.38713 11 8.82687 10.6537 8.55279 10.1056L8 9L7.56878 9.86244C7.22019 10.5596 6.50763 11 5.72817 11C4.36097 11 3.37389 9.69139 3.74949 8.3768Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Xa = g(qa), Ya = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ka = g(Ya), Qa = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 10.5H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 14H11.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ja = g(Qa), e5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), t5 = g(e5), r5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), o5 = g(r5), n5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), s5 = g(n5), i5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4H13.2C14.8802 4 15.7202 4 16.362 4.32698C16.9265 4.6146 17.3854 5.07354 17.673 5.63803C18 6.27976 18 7.11984 18 8.8V15.2C18 16.8802 18 17.7202 17.673 18.362C17.3854 18.9265 16.9265 19.3854 16.362 19.673C15.7202 20 14.8802 20 13.2 20H10.8C9.11984 20 8.27976 20 7.63803 19.673C7.07354 19.3854 6.6146 18.9265 6.32698 18.362C6 17.7202 6 16.8802 6 15.2V8.8C6 7.11984 6 6.27976 6.32698 5.63803C6.6146 5.07354 7.07354 4.6146 7.63803 4.32698C8.27976 4 9.11984 4 10.8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), a5 = g(i5), c5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 7V6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 14V13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), At = g(c5), l5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V10",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), d5 = g(l5), f5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t("circle", { cx: 19, cy: 6, r: 3, vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t("path", { d: "M12 17v4", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t("path", { d: "M8 21h8", vectorEffect: "non-scaling-stroke" })
    ]
  }
), u5 = g(f5), h5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 19v-3.96 3.15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 19h5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 6,
          height: 10,
          x: 16,
          y: 12,
          rx: 2,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), g5 = g(h5), p5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20 15.0754C18.9493 15.5506 17.7829 15.8151 16.5548 15.8151C11.9322 15.8151 8.18492 12.0678 8.18492 7.44523C8.18492 6.21708 8.44944 5.05072 8.92462 4C6.02061 5.31331 4 8.23576 4 11.6302C4 16.2527 7.74731 20 12.3698 20C15.7642 20 18.6867 17.9794 20 15.0754Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), C5 = g(p5), m5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M6.19249 16.071C6.34438 17.9842 7.85934 19.6088 9.81202 19.8494C10.5301 19.9378 11.2602 20 12 20C12.7398 20 13.4698 19.9378 14.1879 19.8494C16.1406 19.6088 17.6555 17.9842 17.8074 16.071C17.9127 14.7454 18 13.3856 18 12C18 10.6144 17.9127 9.25466 17.8074 7.92894C17.6555 6.01572 16.1406 4.39114 14.1879 4.15056C13.4698 4.0621 12.7398 4 12 4C11.2602 4 10.5301 4.0621 9.81202 4.15056C7.85934 4.39114 6.34438 6.01572 6.19249 7.92894C6.08722 9.25466 6 10.6144 6 12C6 13.3856 6.08722 14.7454 6.19249 16.071Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), v5 = g(m5), w5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M13 19H7C5.89543 19 5 18.1046 5 17V6.99998C5 5.89541 5.89543 4.99998 7 4.99998H9.80017",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.00041 3L10.0004 5L8.00041 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65002H18C18.7456 2.65002 19.35 3.25444 19.35 4.00002V6.00002C19.35 6.74561 18.7456 7.35002 18 7.35002H14C13.2544 7.35002 12.65 6.74561 12.65 6.00002V4.00002C12.65 3.25444 13.2544 2.65002 14 2.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9.65002H18C18.7456 9.65002 19.35 10.2544 19.35 11L19.35 13C19.35 13.7456 18.7456 14.35 18 14.35H14C13.2544 14.35 12.65 13.7456 12.65 13L12.65 11C12.65 10.2544 13.2544 9.65002 14 9.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16.65H18C18.7456 16.65 19.35 17.2544 19.35 18V20C19.35 20.7456 18.7456 21.35 18 21.35H14C13.2544 21.35 12.65 20.7456 12.65 20V18C12.65 17.2544 13.2544 16.65 14 16.65Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), x5 = g(w5), k5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 5,
          height: 5,
          x: 4,
          y: 4,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 5,
          height: 5,
          x: 15,
          y: 4,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 5,
          height: 5,
          x: 4,
          y: 15,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 5,
          height: 5,
          x: 15,
          y: 15,
          stroke: "currentColor",
          rx: 1,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6.5H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 9V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 7.333 5.5 9 9 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 11.333 5.5 13 9 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 15.333 5.5 17 9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16H20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), L5 = g(k5), b5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M10.0004 4.34964C10.3592 4.34985 10.6508 4.64118 10.6508 5.00003C10.6508 5.35887 10.3592 5.65021 10.0004 5.65042H8.00039C6.70252 5.65042 5.65078 6.70216 5.65078 8.00003V16C5.65079 17.2979 6.70253 18.3496 8.00039 18.3496H16.0004C17.2981 18.3494 18.35 17.2978 18.35 16V13.5C18.35 13.141 18.6414 12.8496 19.0004 12.8496C19.3592 12.8499 19.6508 13.1412 19.6508 13.5V16C19.6508 18.0157 18.016 19.6502 16.0004 19.6504H8.00039C5.98456 19.6504 4.35001 18.0159 4.35 16V8.00003C4.35 5.98419 5.98455 4.34964 8.00039 4.34964H10.0004ZM15.7465 4.3721C16.8186 3.30024 18.5563 3.30022 19.6283 4.3721C20.7003 5.44416 20.7002 7.18184 19.6283 8.25394L14.0727 13.8106C13.9927 13.8905 13.8926 13.9478 13.7836 13.9776L9.70937 15.0889C9.48438 15.1502 9.24342 15.0858 9.07851 14.9209C8.91405 14.7561 8.85035 14.5158 8.91152 14.291L10.0229 10.2159L10.0502 10.1367C10.0827 10.0591 10.1299 9.98771 10.1898 9.92776L15.7465 4.3721ZM18.7094 5.29105C18.145 4.72685 17.2298 4.72687 16.6654 5.29105L11.2309 10.7246L10.4643 13.5352L13.2748 12.7686L18.7094 7.33499C19.2736 6.77058 19.2736 5.85542 18.7094 5.29105Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), p1 = g(b5), y5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M7.65001 8.49998C7.65001 8.14099 7.35899 7.84998 7.00001 7.84998C6.64102 7.84998 6.35001 8.14099 6.35001 8.49998C6.35001 8.78858 6.19916 9.13158 5.91539 9.41536C5.63161 9.69913 5.28861 9.84998 5.00001 9.84998C4.64102 9.84998 4.35001 10.141 4.35001 10.5C4.35001 10.859 4.64102 11.15 5.00001 11.15C5.49083 11.15 5.95576 10.9838 6.35001 10.7276V15.5C6.35001 15.859 6.64102 16.15 7.00001 16.15C7.35899 16.15 7.65001 15.859 7.65001 15.5V8.49998ZM9.35001 12.5C9.35001 12.141 9.64102 11.85 10 11.85H12.5C12.859 11.85 13.15 12.141 13.15 12.5C13.15 12.859 12.859 13.15 12.5 13.15H10C9.64102 13.15 9.35001 12.859 9.35001 12.5ZM15.65 10.5C15.65 9.75439 16.2544 9.14998 17 9.14998C17.7456 9.14998 18.35 9.75439 18.35 10.5C18.35 11.2456 17.7456 11.85 17 11.85C16.2544 11.85 15.65 11.2456 15.65 10.5ZM17.8561 13.8343C17.9893 13.568 18.0912 13.2499 18.1668 12.8799C17.8148 13.0529 17.4187 13.15 17 13.15C15.5365 13.15 14.35 11.9635 14.35 10.5C14.35 9.03642 15.5365 7.84998 17 7.84998C18.4636 7.84998 19.65 9.03642 19.65 10.5C19.65 12.0035 19.5309 13.3916 19.0189 14.4157C18.7539 14.9456 18.3773 15.3924 17.853 15.7009C17.3321 16.0073 16.7116 16.15 16 16.15C15.641 16.15 15.35 15.859 15.35 15.5C15.35 15.141 15.641 14.85 16 14.85C16.5384 14.85 16.9179 14.7427 17.1939 14.5803C17.4664 14.42 17.6836 14.1794 17.8561 13.8343Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), M5 = g(y5), E5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 8H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 20H5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), R5 = g(E5), F5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 19H16M13.5 13L14 19M10.5 13L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), N5 = g(F5), V5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65001 12C4.65001 7.94068 7.94071 4.64998 12 4.64998C16.0593 4.64998 19.35 7.94068 19.35 12C19.35 16.0593 16.0593 19.35 12 19.35C7.94071 19.35 4.65001 16.0593 4.65001 12ZM12 3.34998C7.22274 3.34998 3.35001 7.22271 3.35001 12C3.35001 16.7772 7.22274 20.65 12 20.65C16.7773 20.65 20.65 16.7772 20.65 12C20.65 7.22271 16.7773 3.34998 12 3.34998ZM18 12C18 15.3137 15.3137 18 12 18C7.2 18 6 14 6 12H12V6C15.3137 6 18 8.68629 18 12Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), S5 = g(V5), T5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 18H6.8C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), H5 = g(T5), A5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10 8.35C10.359 8.35 10.65 8.64101 10.65 9V15C10.65 15.359 10.359 15.65 10 15.65C9.64102 15.65 9.35001 15.359 9.35001 15V9C9.35001 8.64101 9.64102 8.35 10 8.35ZM14.65 9C14.65 8.64101 14.359 8.35 14 8.35C13.641 8.35 13.35 8.64101 13.35 9V15C13.35 15.359 13.641 15.65 14 15.65C14.359 15.65 14.65 15.359 14.65 15V9Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), $5 = g(A5), B5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H19.9999L20.1308 17.3633ZM11.9999 15.3496C12.8458 15.3496 13.5896 15.459 14.2353 15.6309L14.5058 15.708L14.6278 15.7598C14.8931 15.9045 15.0292 16.2203 14.9374 16.5205C14.8322 16.8635 14.469 17.0561 14.1259 16.9512C13.5422 16.7727 12.8369 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), I5 = g(B5), P5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M17.9999 15.3496C18.3589 15.3496 18.6503 15.641 18.6503 16V17.3496H19.9999L20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H18.6503V20L18.6366 20.1309C18.576 20.4271 18.314 20.6504 17.9999 20.6504C17.6858 20.6503 17.4237 20.427 17.3632 20.1309L17.3495 20V18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H17.3495V16C17.3495 15.6411 17.641 15.3497 17.9999 15.3496ZM11.9999 15.3496C12.8339 15.3496 13.5686 15.4563 14.2079 15.624L14.4765 15.6992L14.5985 15.75C14.8645 15.8936 15.0017 16.2091 14.911 16.5098C14.8202 16.8103 14.5314 16.9973 14.2304 16.9697L14.1015 16.9443L13.8788 16.8818C13.3463 16.742 12.7222 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), j5 = g(P5), D5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M10.7284 5.68377L11.7022 8.60545C11.8697 9.10777 11.6165 9.65354 11.1249 9.85017L9.50021 10.5C10.5002 12.5 11.5002 13.5 13.5002 14.5L14.15 12.8755C14.3467 12.3839 14.8924 12.1307 15.3947 12.2982L18.3164 13.2721C18.7248 13.4082 19.0002 13.7903 19.0002 14.2208L19.0001 16.5001C19 18.1569 17.6493 19.4784 16.0224 19.1645C13.4822 18.6743 9.8743 17.4681 7.50006 14.5C5.31143 11.7639 4.61982 9.17753 4.44221 7.39634C4.3027 5.99711 5.50072 5 6.90688 5H9.77967C10.2101 5 10.5922 5.27543 10.7284 5.68377Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Z5 = g(D5), _5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16.9956 5.39244C16.4671 5.39244 15.9583 5.593 15.5719 5.95362L15.2615 6.24335C14.854 6.62368 14.2962 6.7835 13.7388 6.7835V6.7835H10.9567C7.49952 6.7835 4.69692 9.5861 4.69692 13.0433C4.69692 14.4501 5.16102 15.7486 5.94446 16.7939C6.41907 17.4271 6.78352 18.1614 6.78352 18.9528V19.3031C6.78352 20.0713 7.40632 20.6941 8.17458 20.6941H10.1691C10.6577 20.6941 11.1105 20.4378 11.3619 20.0188L11.5051 19.7802C11.6827 19.4842 12.0026 19.3031 12.3478 19.3031V19.3031C12.693 19.3031 13.0129 19.4842 13.1905 19.7802L13.3336 20.0188C13.585 20.4378 14.0378 20.6941 14.5264 20.6941H16.521C17.2892 20.6941 17.912 20.0713 17.912 19.3031V18.4283C17.912 17.9707 18.1149 17.5425 18.419 17.2004V17.2004C18.7756 16.7992 19.2667 16.5209 19.8036 16.5209H19.9986C20.7669 16.5209 21.3897 15.8981 21.3897 15.1299V13.7388C21.3897 12.9706 20.7669 12.3478 19.9986 12.3478V12.3478C19.9769 12.3478 19.9586 12.3313 19.9561 12.3097C19.7743 10.7527 19.0212 9.37022 17.912 8.37744V6.08797C17.912 5.70384 17.6006 5.39244 17.2165 5.39244H16.9956Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 1.391,
          height: 1.391,
          x: 14.782,
          y: 11.305,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 0.696,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M3.26033 10.2612C3.26033 9.90218 2.96931 9.61117 2.61033 9.61117C2.25134 9.61117 1.96033 9.90218 1.96033 10.2612H3.26033ZM4.7317 12.939L4.62484 12.2978C4.41139 12.3334 4.08864 12.3026 3.82727 12.084C3.57981 11.8769 3.26033 11.3941 3.26033 10.2612H2.61033H1.96033C1.96033 11.6322 2.35376 12.5462 2.99311 13.0811C3.61854 13.6043 4.35648 13.6605 4.83856 13.5801L4.7317 12.939Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 3.478,
          height: 3.478,
          x: 8.87,
          y: 3.306,
          stroke: "currentColor",
          rx: 1.739,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), O5 = g(_5), U5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "rect",
        {
          width: 4,
          height: 4,
          x: 10,
          y: 8,
          stroke: "currentColor",
          rx: 2,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), z5 = g(U5), G5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M6.11014 8.84108L4.6879 10.2653C3.73682 11.2149 3.73682 12.7569 4.6879 13.7065L6.11159 15.1297L7.50354 15.1231C7.81855 15.1231 8.1205 14.9978 8.38856 14.7521L10.7855 12.3583C10.9609 12.1819 11.1741 12.057 11.4017 11.985C11.175 11.9053 10.9713 11.7774 10.806 11.6328L10.7959 11.624L8.38846 9.21653C8.12043 8.97081 7.81852 8.84554 7.50354 8.84554L6.11014 8.84108Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M7.48424 16.5045C8.15386 16.3583 9.16119 16.117 9.45141 15.8268L11.8553 13.4229C11.8575 13.4207 11.8672 13.4135 11.8866 13.4135C11.9059 13.4135 11.9156 13.4207 11.9179 13.4229L14.3311 15.8362C14.6543 16.1593 15.5618 16.578 16.207 16.7873L13.7091 19.2852C12.7595 20.2098 11.2175 20.2098 10.2678 19.2852L7.48424 16.5045Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M17.6459 15.3484L16.279 15.1325C15.9533 15.1325 15.6321 14.9996 15.3999 14.7674L12.9867 12.3541C12.8119 12.1793 12.6001 12.0561 12.3733 11.9845C12.5991 11.9048 12.8023 11.777 12.9672 11.6328L12.9772 11.624L15.3985 9.20274C15.6311 8.97284 15.9534 8.83927 16.279 8.83927L17.8664 8.84388L19.2878 10.2653C20.2374 11.2149 20.2374 12.7569 19.2878 13.7065L17.6459 15.3484Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M16.207 7.18168L13.7091 4.68534C12.7595 3.73426 11.2175 3.73426 10.2647 4.68534L7.3897 7.56152C8.0887 7.6709 9.16261 7.83918 9.45559 8.14921L11.8553 10.5489L11.8578 10.5515C11.8651 10.5589 11.8704 10.5612 11.8704 10.5612C11.8704 10.5612 11.8721 10.5619 11.8746 10.5618C11.8783 10.5618 11.8992 10.5604 11.9312 10.5355L14.3311 8.13563C14.6548 7.81198 15.5616 7.39149 16.207 7.18168Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), W5 = g(G5), q5 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.91907 16.4798L6.34806 16.837C6.5851 16.8963 6.70361 16.9259 6.80005 16.9876C6.88536 17.0422 6.9578 17.1146 7.01239 17.1999C7.0741 17.2964 7.10373 17.4149 7.16298 17.6519L7.52023 19.0809C7.67727 19.7091 7.75578 20.0231 7.93235 20.1696C8.0863 20.2973 8.28754 20.353 8.48526 20.3227C8.71201 20.288 8.94092 20.0591 9.39875 19.6012L9.67196 19.328C9.79303 19.207 9.85356 19.1464 9.89685 19.0758C9.93523 19.0132 9.96351 18.9449 9.98066 18.8735C10 18.7929 10 18.7073 10 18.5361L10 17.4639C10 17.2927 10 17.2071 10.0193 17.1265C10.0365 17.0551 10.0648 16.9868 10.1032 16.9242C10.1464 16.8536 10.207 16.793 10.328 16.672L11.799 15.201C12.2 14.8 12.4005 14.5995 12.6103 14.5586C12.7937 14.5228 12.9837 14.5618 13.1382 14.6669C13.3149 14.7872 13.4202 15.0505 13.6308 15.577L14.3692 17.423C14.5798 17.9495 14.6851 18.2128 14.8618 18.3331C15.0163 18.4382 15.2063 18.4772 15.3897 18.4414C15.5995 18.4005 15.8 18.2 16.201 17.799L16.5924 17.4076C16.7417 17.2583 16.8163 17.1837 16.8645 17.0955C16.9072 17.0174 16.9346 16.9319 16.9453 16.8436C16.9573 16.7438 16.9399 16.6397 16.9052 16.4315L16.0948 11.5685C16.0601 11.3603 16.0427 11.2562 16.0547 11.1564C16.0654 11.0681 16.0928 10.9826 16.1355 10.9045C16.1837 10.8163 16.2583 10.7417 16.4076 10.5924L18.5 8.5C19.3284 7.67157 19.3284 6.32843 18.5 5.5C17.6716 4.67157 16.3284 4.67157 15.5 5.5L13.4076 7.59244C13.2583 7.7417 13.1837 7.81633 13.0955 7.86453C13.0174 7.90721 12.9319 7.93461 12.8436 7.94527C12.7438 7.9573 12.6397 7.93995 12.4315 7.90525L7.56853 7.09475C7.36032 7.06005 7.25621 7.0427 7.15644 7.05473C7.0681 7.06539 6.98259 7.09279 6.90451 7.13547C6.81633 7.18367 6.7417 7.2583 6.59244 7.40756L6.20104 7.79896C5.80002 8.19998 5.59951 8.40049 5.55858 8.61028C5.5228 8.79365 5.56181 8.98372 5.66693 9.13818C5.7872 9.31488 6.05048 9.42019 6.57704 9.63082L8.42296 10.3692C8.94952 10.5798 9.2128 10.6851 9.33306 10.8618C9.43819 11.0163 9.4772 11.2063 9.44142 11.3897C9.40049 11.5995 9.19998 11.8 8.79897 12.201L8.79896 12.201L7.32804 13.672C7.20697 13.793 7.14644 13.8536 7.0758 13.8968C7.01317 13.9352 6.94489 13.9635 6.87346 13.9807C6.7929 14 6.70729 14 6.53608 14L5.46392 14C5.29271 14 5.2071 14 5.12654 14.0193C5.05511 14.0365 4.98683 14.0648 4.9242 14.1032C4.85356 14.1464 4.79303 14.207 4.67196 14.328L4.39875 14.6012C3.94092 15.0591 3.71201 15.288 3.67727 15.5147C3.64697 15.7125 3.70271 15.9137 3.83042 16.0677C3.97687 16.2442 4.29094 16.3227 4.91907 16.4798Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), X5 = g(q5), Y5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8L12 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 5.5C17 4.11929 15.8807 3 14.5 3V3C13.1193 3 12 4.11929 12 5.5V8H14.5C15.8807 8 17 6.88071 17 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M5 12V11.35C4.64101 11.35 4.35 11.641 4.35 12H5ZM19 12H19.65C19.65 11.641 19.359 11.35 19 11.35V12ZM5 12.65H19V11.35H5V12.65ZM18.35 12V16H19.65V12H18.35ZM16 18.35H8V19.65H16V18.35ZM5.65 16V12H4.35V16H5.65ZM8 18.35C6.70213 18.35 5.65 17.2979 5.65 16H4.35C4.35 18.0158 5.98416 19.65 8 19.65V18.35ZM18.35 16C18.35 17.2979 17.2979 18.35 16 18.35V19.65C18.0158 19.65 19.65 18.0158 19.65 16H18.35Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 10.6667C4 10.0467 4 9.7367 4.06815 9.48236C4.25308 8.79218 4.79218 8.25308 5.48236 8.06815C5.7367 8 6.04669 8 6.66667 8H17.3333C17.9533 8 18.2633 8 18.5176 8.06815C19.2078 8.25308 19.7469 8.79218 19.9319 9.48236C20 9.7367 20 10.0467 20 10.6667V10.6667C20 10.9767 20 11.1317 19.9659 11.2588C19.8735 11.6039 19.6039 11.8735 19.2588 11.9659C19.1317 12 18.9767 12 18.6667 12H5.33333C5.02334 12 4.86835 12 4.74118 11.9659C4.39609 11.8735 4.12654 11.6039 4.03407 11.2588C4 11.1317 4 10.9767 4 10.6667V10.6667Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), K5 = g(Y5), Q5 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13V11.8C4 10.1198 4 9.27976 4.32698 8.63803C4.6146 8.07354 5.07354 7.6146 5.63803 7.32698C6.27976 7 7.11984 7 8.8 7H15.2C16.8802 7 17.7202 7 18.362 7.32698C18.9265 7.6146 19.3854 8.07354 19.673 8.63803C20 9.27976 20 10.1198 20 11.8V13C20 13.93 20 14.395 19.8978 14.7765C19.6204 15.8117 18.8117 16.6204 17.7765 16.8978C17.395 17 16.93 17 16 17V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V17C7.07003 17 6.60504 17 6.22354 16.8978C5.18827 16.6204 4.37962 15.8117 4.10222 14.7765C4 14.395 4 13.93 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M17 7V7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7V7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V16.8C8 17.9201 8 18.4802 8.21799 18.908C8.40973 19.2843 8.71569 19.5903 9.09202 19.782C9.51984 20 10.0799 20 11.2 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 17,
          cy: 11,
          r: 1,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), J5 = g(Q5), e0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M5 5H19V12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L7 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L17 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 5H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 11.5L11 9.5L13 11.5L15.5 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5V3.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), t0 = g(e0), r0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 8H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 12H13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), o0 = g(r0), n0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 6,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), s0 = g(n0), i0 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.4561 4.10842C12.167 3.96382 11.8282 3.96382 11.5391 4.10842C11.2986 4.2287 11.1657 4.4365 11.0944 4.55864C11.0194 4.68705 10.9414 4.85286 10.8607 5.02441L10.8503 5.04667L9.98786 6.87923C9.83501 7.20404 9.97441 7.59127 10.2992 7.74413C10.624 7.89699 11.0113 7.75759 11.1641 7.43277L11.9976 5.66168L13.6732 9.22232L13.6842 9.24593C13.7226 9.32875 13.7886 9.47135 13.8931 9.58936C13.9829 9.69075 14.0922 9.77468 14.2159 9.83501C14.3622 9.90634 14.5209 9.92951 14.6076 9.94215L14.6319 9.94575L18.4422 10.5299L18.4236 10.5489L16.2183 12.802C15.9672 13.0585 15.9716 13.4701 16.2281 13.7212C16.4846 13.9723 16.8962 13.9679 17.1473 13.7113L19.3526 11.4583L19.3698 11.4407C19.5002 11.3076 19.6272 11.1779 19.721 11.0628C19.814 10.9489 19.9542 10.7577 19.9867 10.4989C20.0252 10.1936 19.9315 9.88066 19.7207 9.64732C19.5399 9.44707 19.3067 9.37527 19.1655 9.33965C19.0229 9.30369 18.8456 9.27654 18.6666 9.24913L18.6417 9.24531L14.847 8.66354L13.1449 5.04667L13.1345 5.02443C13.0538 4.85288 12.9757 4.68705 12.9008 4.55864C12.8295 4.4365 12.6966 4.2287 12.4561 4.10842ZM6.87091 10.3279C7.22575 10.2735 7.4693 9.94171 7.4149 9.58687C7.3605 9.23203 7.02874 8.98848 6.6739 9.04288L5.35348 9.24531L5.32859 9.24913C5.14958 9.27654 4.97227 9.3037 4.82971 9.33965C4.68849 9.37527 4.45532 9.44707 4.27445 9.64732C4.06369 9.88066 3.97 10.1936 4.00844 10.4989C4.04103 10.7577 4.18123 10.9489 4.27415 11.0628C4.36799 11.1779 4.49496 11.3075 4.62534 11.4407L4.62536 11.4407L4.64255 11.4583L7.40051 14.2759L7.40544 14.2809L7.40307 14.2955L6.75231 18.2752L6.7484 18.2991L6.7484 18.2991C6.71746 18.4882 6.68774 18.6698 6.67648 18.819C6.66558 18.9634 6.65842 19.202 6.77813 19.4332C6.92172 19.7105 7.18415 19.9172 7.50273 19.9792C7.77318 20.0318 8.0071 19.942 8.13719 19.8854C8.27215 19.8267 8.4302 19.7395 8.59061 19.6509L8.61265 19.6388L11.9976 17.7716L15.3825 19.6388C15.6969 19.8122 16.0923 19.6979 16.2656 19.3836C16.439 19.0692 16.3248 18.6739 16.0104 18.5005L12.6018 16.6203L12.5801 16.6081L12.5801 16.6081C12.5033 16.5651 12.3626 16.4861 12.2036 16.4534C12.0676 16.4254 11.9276 16.4254 11.7916 16.4534C11.6326 16.4861 11.4919 16.5651 11.4151 16.6081L11.4151 16.6081L11.3934 16.6203L8.0375 18.4714L8.68603 14.5053L8.69039 14.4792C8.70593 14.3875 8.73172 14.2351 8.71381 14.0802C8.69853 13.948 8.6588 13.8191 8.59585 13.7005C8.52141 13.5602 8.41141 13.4492 8.34751 13.3848L8.34751 13.3848L8.32953 13.3665L5.57157 10.5489L5.55295 10.5299L6.87091 10.3279ZM6.45962 5.54039C6.20578 5.28655 5.79422 5.28655 5.54038 5.54039C5.28654 5.79423 5.28654 6.20578 5.54038 6.45963L17.5404 18.4596C17.7942 18.7135 18.2058 18.7135 18.4596 18.4596C18.7135 18.2058 18.7135 17.7942 18.4596 17.5404L6.45962 5.54039Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), a0 = g(i0), c0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V9C20 7.34315 18.6569 6 17 6H14M14 6L16 4M14 6L16 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 14V15C4 16.6569 5.34315 18 7 18H10M10 18L8 20M10 18L8 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16C14 14.8954 14.8954 14 16 14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6C4 4.89543 4.89543 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), l0 = g(c0), d0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4.66921 17.526C4.74318 16.6629 5.46533 16 6.33156 16V16C7.25301 16 8 16.747 8 17.6684V17.6684C8 18.5347 7.3371 19.2568 6.47404 19.3308L4.5 19.5L4.66921 17.526Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), f0 = g(d0), u0 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M8.13954 2.45918C8.30339 2.34995 8.50792 2.32088 8.69571 2.38014C9.27902 2.56422 10.039 2.89291 10.7382 3.29241C11.2317 3.5744 11.7421 3.91791 12.138 4.30199C13.1925 3.74278 14.2487 3.45352 14.9055 3.35693C15.1941 3.31449 15.4756 3.46948 15.5941 3.73602C15.9395 4.51328 16.4053 5.75374 16.6836 6.96718C16.8227 7.57321 16.9204 8.19552 16.9251 8.7618C16.9267 8.9555 16.9176 9.15399 16.8917 9.35001H17.0001C17.3591 9.35001 17.6501 9.64102 17.6501 10C17.6501 12.6499 16.3024 14.9845 14.2577 16.3566V18C14.2577 18.359 13.9667 18.65 13.6077 18.65H6.39251C6.03353 18.65 5.74251 18.359 5.74251 18V16.3566C3.69781 14.9845 2.3501 12.6499 2.3501 10C2.3501 9.64102 2.64111 9.35001 3.0001 9.35001H3.12446C3.07724 9.06203 3.04738 8.73614 3.03785 8.39306C3.01558 7.59151 3.10279 6.63645 3.38345 5.79446C3.47193 5.52904 3.72032 5.35001 4.0001 5.35001C4.4017 5.35001 4.9702 5.39055 5.59368 5.4989C5.74138 5.17849 5.94898 4.80158 6.21243 4.41377C6.66155 3.75265 7.30084 3.01831 8.13954 2.45918ZM6.88594 5.81564C7.49072 6.01295 8.10525 6.29375 8.61957 6.69299C8.94699 6.52587 9.30754 6.41424 9.68834 6.37061C10.0641 5.84191 10.5182 5.39825 10.9996 5.02886C10.754 4.82928 10.4448 4.62201 10.0933 4.42115C9.58806 4.13248 9.0505 3.88794 8.60544 3.72343C8.06243 4.139 7.62119 4.65348 7.28777 5.14429C7.12302 5.3868 6.98957 5.61608 6.88594 5.81564ZM11.2118 6.57132C11.4739 6.67538 11.7188 6.81356 11.9408 6.98034C12.667 7.52596 13.1511 8.38069 13.1966 9.35001H15.5726C15.6064 9.20367 15.6271 9.01341 15.6251 8.7726C15.6215 8.33575 15.5442 7.81431 15.4166 7.25784C15.212 6.36613 14.8921 5.44355 14.6077 4.74037C13.9854 4.89216 13.1394 5.1912 12.3407 5.68264C11.9335 5.93325 11.5477 6.22825 11.2118 6.57132ZM16.3172 10.65H16.0001H12.5001H7.60012H4.0001H3.68295C3.88982 12.6852 5.05762 14.4368 6.72798 15.4433C6.92317 15.5609 7.04251 15.7721 7.04251 16V17.35H12.9577V16C12.9577 15.7721 13.077 15.5609 13.2722 15.4433C14.9426 14.4368 16.1104 12.6852 16.3172 10.65ZM4.44808 9.35001H6.90362C6.93549 8.67096 7.18261 8.04814 7.57743 7.54844C7.09896 7.24575 6.48991 7.02505 5.85311 6.87722C5.35783 6.76224 4.87859 6.69883 4.48902 6.66985C4.36654 7.21786 4.32233 7.81632 4.33735 8.35696C4.34697 8.70323 4.38052 9.01081 4.42721 9.25094C4.43403 9.28601 4.44101 9.31904 4.44808 9.35001ZM8.20609 9.35001H11.8941C11.8506 8.80697 11.573 8.33003 11.1599 8.01968C10.8507 7.7874 10.4674 7.65001 10.0501 7.65001C9.6328 7.65001 9.24947 7.7874 8.9403 8.01968C8.52723 8.33003 8.24958 8.80697 8.20609 9.35001Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), h0 = g(u0), g0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 6V10H9V6",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), p0 = g(g0), C0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 17.5,
          cy: 15.5,
          r: 4.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10L11 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 14H9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m0 = g(C0), v0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 11.999,
          cy: 12,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w0 = g(v0), x0 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 11.4038L5 6L6.63836 5.5319C7.87494 5.17859 9.06442 4.67747 10.181 4.03941L12 3L13.819 4.03941C14.9356 4.67747 16.1251 5.17859 17.3616 5.5319L19 6V11.4038C19 13.1235 18.7853 14.8943 17.7189 16.2435C15.6012 18.9228 12 21 12 21C12 21 8.39876 18.9228 6.28107 16.2435C5.21473 14.8943 5 13.1235 5 11.4038Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), k0 = g(x0), L0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 8,
          cy: 21,
          r: 1,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 19,
          cy: 21,
          r: 1,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $t = g(L0);
$t.displayName = "ShoppingCart";
const b0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20L12 13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.5577 13H5.6C5.03995 13 4.75992 13 4.54601 12.891C4.35785 12.7951 4.20487 12.6422 4.10899 12.454C4 12.2401 4 11.9601 4 11.4V7.6C4 7.03995 4 6.75992 4.10899 6.54601C4.20487 6.35785 4.35785 6.20487 4.54601 6.10899C4.75992 6 5.03995 6 5.6 6H16.5577C17.104 6 17.3772 6 17.6306 6.06764C17.8552 6.12757 18.0675 6.22619 18.2582 6.35906C18.4735 6.50901 18.6497 6.71768 19.0022 7.13502L19.0023 7.13503L21 9.5L19.0023 11.865C18.6497 12.2823 18.4735 12.491 18.2582 12.6409C18.0675 12.7738 17.8552 12.8724 17.6306 12.9324C17.3772 13 17.104 13 16.5577 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), y0 = g(b0), M0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 20.5H3.5L10.5 13.5H3.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20.5 10.5H13.5L20.5 3.5H13.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), E0 = g(M0), R0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 9V18M16 18L13 15M16 18L19 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 15V6M8 6L5 9M8 6L11 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), F0 = g(R0), N0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 11V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 14C7 14.3333 9 16 9 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 14C17 14.3333 15 16 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), V0 = g(N0), S0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19M19 8L17 6M19 8L17 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 16H13.1627C12.1284 16 11.167 15.4671 10.6187 14.59L9 12H5M19 16L17 14M19 16L17 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), T0 = g(S0), H0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 16,
          height: 12,
          x: 4,
          y: 7.5,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5L4 12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 12.5V14.25C11 14.3881 11.1119 14.5 11.25 14.5H12.75C12.8881 14.5 13 14.3881 13 14.25V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), A0 = g(H0), $0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.0005 16L6.00049 16M6.00049 16L9.00049 13M6.00049 16L9.00049 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.00049 8L18.0005 8M18.0005 8L15.0005 5M18.0005 8L15.0005 11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), B0 = g($0), I0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V16.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), P0 = g(I0), j0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 0.5,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), D0 = g(j0), Z0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12L15 9M15 9V6L18 3L19 5L21 6L18 9H15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _0 = g(Z0), O0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 8V11C20 12.1046 19.1046 13 18 13H16.5207C16.1943 13 15.8886 13.1592 15.7014 13.4265L12.8927 17.439C12.6466 17.7906 12.2444 18 11.8152 18C11.0888 18 10.5 17.4112 10.5 16.6848V14H6.06155C4.76041 14 3.80569 12.7772 4.12127 11.5149L4.9319 8.27239C5.26578 6.93689 6.46573 6 7.84233 6H16H18C19.1046 6 20 6.89543 20 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 6V13",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Bt = g(O0), U0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M16.9401 6C16.9401 5.72386 17.164 5.5 17.4401 5.5L17.9401 5.5C19.3208 5.5 20.4401 6.61929 20.4401 8L20.4401 11C20.4401 12.3807 19.3208 13.5 17.9401 13.5L17.4401 13.5C17.164 13.5 16.9401 13.2761 16.9401 13L16.9401 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M11.7555 18.5C10.753 18.5 9.94011 17.6871 9.94011 16.6846L9.94011 14.5L6.00163 14.5C4.37522 14.5 3.18139 12.9714 3.57585 11.3936L4.38738 8.15137C4.7769 6.59328 6.17685 5.5 7.78288 5.5L14.9401 5.5C15.4924 5.5 15.9401 5.94771 15.9401 6.5L15.9401 12.9265C15.9401 13.5419 15.7508 14.1425 15.3979 14.6468L13.2428 17.7256C12.9032 18.2108 12.3478 18.4999 11.7555 18.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), It = g(U0), z0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V13C4 11.8954 4.89543 11 6 11H7.47934C7.80566 11 8.11145 10.8408 8.29858 10.5735L11.1073 6.56099C11.3534 6.2094 11.7556 6 12.1848 6C12.9112 6 13.5 6.58885 13.5 7.31522V10H17.9384C19.2396 10 20.1943 11.2228 19.8787 12.4851L19.0681 15.7276C18.7342 17.0631 17.5343 18 16.1577 18H8H6C4.89543 18 4 17.1046 4 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 11V18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pt = g(z0), G0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M7 18C7 18.2761 6.77614 18.5 6.5 18.5H6C4.61929 18.5 3.5 17.3807 3.5 16V13C3.5 11.6193 4.61929 10.5 6 10.5H6.5C6.77614 10.5 7 10.7239 7 11V18Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M12.1846 5.5C13.1871 5.5 14 6.31291 14 7.31543V9.5H17.9385C19.5649 9.50002 20.7587 11.0286 20.3643 12.6064L19.5527 15.8486C19.1632 17.4067 17.7633 18.5 16.1572 18.5H9C8.44772 18.5 8 18.0523 8 17.5V11.0735C8 10.4581 8.18931 9.85747 8.54225 9.35324L10.6973 6.27441C11.0369 5.78921 11.5923 5.50007 12.1846 5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), jt = g(G0), W0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 12,
          cy: 13,
          r: 7.35,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.3301V12.9967L15 14.6634",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 3H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.0901 6L20.5043 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.90991 6L3.4957 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), q0 = g(W0), X0 = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.7549 2.39853C11.9383 2.32377 12.1476 2.33589 12.3223 2.43564L14.1416 3.4747C15.2128 4.08683 16.3537 4.56837 17.54 4.90732L19.1787 5.37509C19.4577 5.45487 19.6504 5.70993 19.6504 6.00009V11.4034C19.6504 13.1504 19.4389 15.1152 18.2285 16.6466C17.117 18.0528 15.6336 19.2821 14.4492 20.1505C13.8534 20.5874 13.3253 20.9392 12.9453 21.1817C12.7552 21.303 12.6018 21.3975 12.4951 21.462C12.4418 21.4942 12.3999 21.5192 12.3711 21.5362C12.3568 21.5446 12.3456 21.5512 12.3379 21.5558C12.3343 21.5579 12.3312 21.5594 12.3291 21.5606C12.328 21.5613 12.3268 21.5622 12.3262 21.5626H12.3252L12 21.0001L12.3252 21.5636C12.1242 21.6795 11.8758 21.6795 11.6748 21.5636V21.5626H11.6738C11.6732 21.5622 11.672 21.5613 11.6709 21.5606C11.6688 21.5594 11.6657 21.5579 11.6621 21.5558C11.6544 21.5512 11.6432 21.5446 11.6289 21.5362C11.6001 21.5192 11.5582 21.4942 11.5049 21.462C11.3982 21.3975 11.2448 21.303 11.0547 21.1817C10.6747 20.9392 10.1466 20.5873 9.55078 20.1505C8.36639 19.2821 6.88299 18.0528 5.77148 16.6466C4.56116 15.1152 4.34962 13.1504 4.34961 11.4034V6.00009L4.3584 5.89365C4.39886 5.64914 4.57703 5.44494 4.82129 5.37509L6.45996 4.90732C7.64627 4.56837 8.78717 4.08683 9.8584 3.4747L11.6777 2.43564L11.7549 2.39853ZM12 14.6505C10.2273 14.6505 8.77655 16.027 8.6582 17.7696C9.22229 18.2665 9.79442 18.7178 10.3193 19.1026C10.8883 19.5198 11.3926 19.8555 11.7539 20.086C11.8452 20.1443 11.9284 20.194 12 20.2384C12.0716 20.194 12.1548 20.1443 12.2461 20.086C12.6074 19.8555 13.1117 19.5198 13.6807 19.1026C14.2054 18.7179 14.7769 18.2663 15.3408 17.7696C15.2224 16.027 13.7727 14.6505 12 14.6505ZM10.5039 4.60361C9.34203 5.26753 8.10407 5.78966 6.81738 6.15732L5.65039 6.49033V11.4034C5.6504 13.0958 5.86868 14.6739 6.79102 15.8409C7.02193 16.133 7.27347 16.4176 7.53613 16.6944C8.00407 15.0921 9.31082 13.8484 10.9492 13.4698C9.72624 13.037 8.84964 11.8712 8.84961 10.5001C8.84961 8.7604 10.2603 7.3497 12 7.3497C13.7397 7.3497 15.1504 8.7604 15.1504 10.5001C15.1504 11.8715 14.2732 13.0372 13.0498 13.4698C14.6885 13.8481 15.9948 15.092 16.4629 16.6944C16.7257 16.4174 16.9779 16.1332 17.209 15.8409C18.1313 14.6739 18.3496 13.0958 18.3496 11.4034V6.49033L17.1826 6.15732C15.8959 5.78966 14.658 5.26753 13.4961 4.60361L12 3.74814L10.5039 4.60361ZM12 8.65048C10.9783 8.65048 10.1504 9.47837 10.1504 10.5001C10.1504 11.5218 10.9783 12.3497 12 12.3497C13.0217 12.3497 13.8496 11.5218 13.8496 10.5001C13.8496 9.47837 13.0217 8.65048 12 8.65048Z",
        fill: "currentColor"
      }
    )
  }
), Y0 = g(X0), K0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "rect",
        {
          width: 13,
          height: 12,
          x: 4,
          y: 6,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Q0 = g(K0), J0 = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H9.5M14.6676 17.8965C14.0998 18 13.345 18 12.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.76415 4 9.04761 4.07662 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ec = g(J0), tc = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "circle",
        {
          cx: 16.25,
          cy: 13.75,
          r: 1.25,
          fill: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), rc = g(tc), oc = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          d: "M12 2.34961C12.5182 2.34962 12.9694 2.37913 13.3516 2.42188C13.8208 2.47432 14.3633 2.50573 14.7822 2.93555C15.0225 3.18222 15.1214 3.48455 15.1768 3.76367C15.2306 4.03551 15.2589 4.37743 15.292 4.76172C15.3591 5.53967 15.5776 6.26032 15.7842 6.79297C15.8866 7.05713 15.9845 7.27054 16.0557 7.41602C16.0911 7.4885 16.1205 7.5441 16.1396 7.58008C16.1433 7.58694 16.1466 7.59314 16.1494 7.59863C17.3191 8.70192 18.0497 10.2654 18.0498 12C18.0497 13.7349 17.3184 15.2982 16.1484 16.4014C16.1457 16.4066 16.143 16.4126 16.1396 16.4189C16.1205 16.4548 16.0911 16.5106 16.0557 16.583C15.9845 16.7285 15.8867 16.9427 15.7842 17.207C15.5776 17.7396 15.3591 18.4605 15.292 19.2383C15.2589 19.6224 15.2306 19.9646 15.1768 20.2363C15.1214 20.5154 15.0224 20.8178 14.7822 21.0645C14.3633 21.4943 13.8207 21.5256 13.3516 21.5781C12.9695 21.6208 12.5182 21.6494 12 21.6494C11.6117 21.6494 11.2611 21.6336 10.9492 21.6074L10.6494 21.5781C10.1802 21.5256 9.63791 21.4943 9.21875 21.0645C8.97826 20.8178 8.87959 20.5155 8.82422 20.2363C8.77035 19.9646 8.74212 19.6225 8.70898 19.2383C8.64188 18.4605 8.42333 17.7396 8.2168 17.207C8.11424 16.9426 8.01651 16.7285 7.94531 16.583C7.90981 16.5105 7.88047 16.4549 7.86133 16.4189C7.8581 16.4129 7.85514 16.4073 7.85254 16.4023C6.68185 15.2991 5.94933 13.7353 5.94922 12C5.94933 10.2649 6.68115 8.70099 7.85156 7.59766C7.8543 7.59238 7.85789 7.58654 7.86133 7.58008C7.88049 7.54407 7.90988 7.48842 7.94531 7.41602C8.01649 7.27052 8.11437 7.05707 8.2168 6.79297C8.42335 6.26033 8.64189 5.53959 8.70898 4.76172C8.74213 4.37742 8.77033 4.0355 8.82422 3.76367C8.87958 3.48449 8.97829 3.18225 9.21875 2.93555C9.63788 2.50583 10.18 2.47435 10.6494 2.42188C11.0315 2.37915 11.482 2.34962 12 2.34961ZM14.2822 17.6025C13.5778 17.8898 12.8076 18.0498 12 18.0498C11.192 18.0498 10.4215 17.8901 9.7168 17.6025C9.84577 18.0586 9.95643 18.576 10.0039 19.126C10.0396 19.5404 10.0629 19.7982 10.0996 19.9834C10.1347 20.1606 10.1651 20.1734 10.1494 20.1572C10.165 20.1732 10.1793 20.1873 10.2529 20.207C10.3581 20.2352 10.5049 20.2538 10.7939 20.2861L11.0576 20.3115C11.3337 20.3347 11.648 20.3496 12 20.3496C12.4696 20.3496 12.8725 20.3235 13.207 20.2861C13.4962 20.2538 13.6429 20.2353 13.748 20.207C13.8215 20.1873 13.836 20.1732 13.8516 20.1572C13.8356 20.1736 13.8661 20.161 13.9014 19.9834C13.938 19.7983 13.9614 19.5403 13.9971 19.126C14.0446 18.5761 14.1533 18.0585 14.2822 17.6025ZM12 7.25C9.37696 7.25021 7.25021 9.37696 7.25 12C7.25021 14.623 9.37696 16.7498 12 16.75C14.623 16.7498 16.7498 14.623 16.75 12C16.7498 9.37696 14.623 7.25021 12 7.25ZM12 3.65039C11.5305 3.65041 11.1283 3.67648 10.7939 3.71387C10.5051 3.74616 10.3581 3.76385 10.2529 3.79199C10.1794 3.81174 10.165 3.82676 10.1494 3.84277C10.165 3.82668 10.1347 3.83965 10.0996 4.0166C10.0629 4.20169 10.0396 4.45884 10.0039 4.87305C9.95647 5.42304 9.84577 5.94044 9.7168 6.39648C10.4215 6.10898 11.1921 5.94927 12 5.94922C12.8075 5.94927 13.5779 6.10927 14.2822 6.39648C14.1533 5.94053 14.0445 5.42292 13.9971 4.87305C13.9614 4.45889 13.938 4.20167 13.9014 4.0166C13.8661 3.8389 13.8356 3.82639 13.8516 3.84277C13.836 3.82677 13.8215 3.81177 13.748 3.79199C13.6429 3.76379 13.496 3.74618 13.207 3.71387C12.8726 3.67646 12.4697 3.65041 12 3.65039Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          d: "M12 10V12L14 13",
          stroke: "currentColor",
          strokeWidth: "1.3",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), nc = g(oc), sc = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M12 5C8.13401 5 5 8.13401 5 12C5 13.1001 5.25305 14.1382 5.70318 15.0619L5.86304 15.39L5.03857 18.6682L8.27628 17.9409L8.6092 18.1256C9.6128 18.6825 10.7678 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5586 21 9.19397 20.6604 7.98415 20.0563L5.47694 20.6196C4.02315 20.9461 2.73556 19.6254 3.09898 18.1804L3.74839 15.5982C3.26679 14.4952 3 13.2776 3 12Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ t(
        "path",
        {
          fill: "currentColor",
          d: "M8.94117 8H10.485C10.6895 8 10.8733 8.12448 10.9492 8.3143L11.6066 9.95758C11.6977 10.1854 11.61 10.4458 11.3996 10.572L10.5882 11.0588C11.0922 12.0807 11.9193 12.9078 12.9412 13.4118L13.428 12.6004C13.5542 12.39 13.8146 12.3023 14.0424 12.3934L15.6857 13.0507C15.8755 13.1267 16 13.3105 16 13.515V15.0588C16 15.3084 15.9008 15.5478 15.7243 15.7243C15.5478 15.9008 15.3084 16 15.0588 16C13.2232 15.8884 11.4918 15.1089 10.1914 13.8086C8.89105 12.5082 8.11154 10.7768 7.99999 8.94118C7.99999 8.69156 8.09915 8.45217 8.27566 8.27566C8.45216 8.09916 8.69155 8 8.94117 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ic = g(sc), ac = (e, r) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: [
      /* @__PURE__ */ t("path", { d: "M12 20h.01", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t("path", { d: "M2 8.82a15 15 0 0 1 20 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t("path", { d: "M5 12.859a10 10 0 0 1 14 0", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ t("path", { d: "M8.5 16.429a5 5 0 0 1 7 0", vectorEffect: "non-scaling-stroke" })
    ]
  }
), cc = g(ac), lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: vs,
  Add: Ar,
  Ai: xs,
  Alert: $r,
  AlertCircle: nt,
  AlertCircleLine: Br,
  AlignTextCenter: Ir,
  AlignTextJustify: Pr,
  AlignTextLeft: jr,
  AlignTextRight: Dr,
  Appearance: Ls,
  Archive: ys,
  ArchiveOpen: Es,
  ArrowCycle: Zr,
  ArrowDown: st,
  ArrowLeft: _r,
  ArrowRight: Or,
  ArrowUp: s1,
  Ascending: Ur,
  Balance: Fs,
  Bank: Vs,
  BarGraph: Ts,
  Basket: As,
  Bell: zr,
  Bold: Gr,
  BookOpen: Bs,
  Bookmark: Wr,
  BookmarkFilled: qr,
  Briefcase: Ps,
  Bucket: Ds,
  Building: _s,
  Bullet: Xr,
  Calculator: Yr,
  Calendar: Kr,
  CalendarArrowDown: Us,
  CalendarArrowLeft: Gs,
  CalendarArrowRight: qs,
  CameraPlus: Ys,
  CardPin: Qs,
  ChartFunnel: ei,
  ChartHorizontalBars: ri,
  ChartLine: ni,
  ChartPie: ii,
  ChartVerticalBars: ci,
  Check: it,
  CheckCircle: Qr,
  CheckCircleLine: di,
  CheckDouble: Jr,
  ChevronDown: i1,
  ChevronLeft: at,
  ChevronRight: We,
  ChevronUp: ct,
  Chip: ui,
  Circle: eo,
  Clock: to,
  ClockBack: gi,
  ClockPlus: Ci,
  Cloud: vi,
  Code: ro,
  Coffee: xi,
  Command: Li,
  Comment: oo,
  Completed: no,
  Computer: yi,
  Contactless: Ei,
  CornerHandle: Fi,
  CreditCard: Vi,
  Cross: Fe,
  CrossedCircle: so,
  Crown: Ai,
  CursorClick: Ti,
  Delete: lt,
  Deny: Bi,
  Descending: io,
  Desktop: Pi,
  DollarBill: Di,
  DollarReset: _i,
  DottedCircle: ao,
  Download: Me,
  DropdownDefault: co,
  DropdownOpen: lo,
  Ellipsis: dt,
  EllipsisHorizontal: fo,
  Envelope: uo,
  EnvelopeOpen: Ui,
  Equal: ho,
  EqualApproximately: go,
  EqualGreater: po,
  EqualLess: Co,
  Exit: Gi,
  ExternalLink: ft,
  EyeInvisible: mo,
  EyeVisible: vo,
  FaceNegative: wo,
  FaceNeutral: xo,
  FacePositive: ko,
  FaceSuperNegative: Lo,
  FaceSuperPositive: bo,
  Feed: qi,
  File: yo,
  FileFilled: Yi,
  FileSigned: Qi,
  Files: Mo,
  Filter: Eo,
  FitView: Ro,
  Flag: ea,
  Flask: ra,
  Folder: Fo,
  Folders: na,
  Globe: ia,
  Graph: ca,
  Greater: No,
  Group: da,
  GroupBy: ua,
  Handle: Vo,
  Handshake: ga,
  HardDrive: Ca,
  HeadcountPlanning: va,
  Heading1: So,
  Heading2: To,
  Heading3: Ho,
  Headset: xa,
  Heart: La,
  HoldHeart: ya,
  Home: Ea,
  Hub: Fa,
  Image: Ao,
  InProgressTask: $o,
  Inbox: Va,
  Info: Ta,
  InfoCircle: Bo,
  InfoCircleLine: Io,
  InputField: Aa,
  Italic: Po,
  Kanban: jo,
  Keyboard: Ba,
  Laptop: Pa,
  LayersFront: Do,
  Less: Zo,
  Lightbulb: Ht,
  Link: _o,
  LinkRemove: Za,
  List: Oo,
  LockLocked: Uo,
  LockUnlocked: Oa,
  LogoAvatar: zo,
  LogoEruditai: za,
  LogoTravelperk: Wa,
  Marker: Go,
  Marketplace: Xa,
  Masonry: Ka,
  Maximize: ut,
  Megaphone: Wo,
  Menu: qo,
  MessageFilled: Ja,
  MessageFrown: t5,
  MessageHeart: o5,
  Messages: s5,
  Microphone: ht,
  MicrophoneNegative: Xo,
  Minimize: gt,
  Minus: Yo,
  Mobile: a5,
  Money: At,
  MoneyBag: d5,
  MonitorDot: u5,
  MonitorSmartphone: g5,
  Moon: C5,
  Mouse: v5,
  MoveDown: Ko,
  MoveTop: x5,
  MoveUp: Qo,
  Multitask: L5,
  New: p1,
  Numbers: M5,
  Office: R5,
  OlList: Jo,
  Organization: en,
  PalmTree: N5,
  Paperclip: pt,
  PartiallyCompleted: S5,
  Password: H5,
  PauseCircle: $5,
  Pencil: tn,
  People: rn,
  Person: on,
  PersonMinus: I5,
  PersonNegative: nn,
  PersonPlus: j5,
  Phone: Z5,
  Pig: O5,
  Pin: z5,
  PixBrazil: W5,
  Placeholder: sn,
  Plane: X5,
  Plus: an,
  Present: K5,
  Printer: J5,
  Proyector: t0,
  PushPin: Ct,
  PushPinSolid: mt,
  Question: cn,
  Quote: vt,
  Reaction: ln,
  Receipt: o0,
  Record: s0,
  RemoveFavorite: a0,
  Replace: l0,
  Reply: a1,
  Reset: dn,
  Rocket: f0,
  Salad: h0,
  Save: p0,
  Schedule: m0,
  Search: c1,
  SearchPerson: fn,
  Settings: w0,
  Share: un,
  Shield: k0,
  ShoppingCart: $t,
  SignPost: y0,
  Sleep: E0,
  Sliders: l1,
  SolidPause: hn,
  SolidPlay: gn,
  SolidStop: wt,
  Sort: F0,
  Sparkles: V0,
  Spinner: pn,
  Split: T0,
  Star: Cn,
  StarFilled: mn,
  Strikethrough: vn,
  Suitcase: A0,
  Swap: B0,
  Table: wn,
  Tablet: P0,
  Tag: D0,
  Target: _0,
  TextSize: xn,
  ThumbsDown: Bt,
  ThumbsDownFilled: It,
  ThumbsUp: Pt,
  ThumbsUpFilled: jt,
  Timer: q0,
  Underline: kn,
  Upload: Ln,
  Upsell: xt,
  UserProtected: Y0,
  Video: bn,
  VideoRecorder: Q0,
  VideoRecorderNegative: ec,
  Wallet: rc,
  Warning: yn,
  Watch: nc,
  WhatsappChat: ic,
  Wifi: cc,
  Windows: Mn
}, Symbol.toStringTag, { value: "Module" })), dc = (e, r) => /* @__PURE__ */ t(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: r,
    ...e,
    children: /* @__PURE__ */ t(
      "path",
      {
        fill: "currentColor",
        d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), fc = g(dc), uc = [
  "append",
  "className",
  "pressed",
  "compact",
  "noTitle",
  "noAutoTooltip",
  "style",
  "variant",
  "loading",
  "emoji"
], Dt = g((e, r) => {
  const o = uc.reduce((n, s) => {
    const { [s]: i, ...l } = n;
    return l;
  }, e);
  return /* @__PURE__ */ t(
    ce,
    {
      ...o,
      variant: "ai",
      ref: r,
      iconRotate: e.icon == fc
    }
  );
});
Dt.displayName = "AIButton";
const Zt = {
  background: {
    transparent: "bg-transparent",
    primary: "bg-f1-background",
    secondary: "bg-f1-background-secondary",
    tertiary: "bg-f1-background-tertiary",
    inverse: "bg-f1-background-inverse",
    "inverse-secondary": "bg-f1-background-inverse-secondary",
    bold: "bg-f1-background-bold",
    accent: "bg-f1-background-accent",
    "accent-bold": "bg-f1-background-accent-bold",
    promote: "bg-f1-background-promote",
    critical: "bg-f1-background-critical",
    "critical-bold": "bg-f1-background-critical-bold",
    info: "bg-f1-background-info",
    "info-bold": "bg-f1-background-info-bold",
    warning: "bg-f1-background-warning",
    "warning-bold": "bg-f1-background-warning-bold",
    positive: "bg-f1-background-positive",
    "positive-bold": "bg-f1-background-positive-bold",
    selected: "bg-f1-background-selected",
    "selected-secondary": "bg-f1-background-selected-secondary",
    "selected-bold": "bg-f1-background-selected-bold",
    overlay: "bg-f1-background-overlay"
  }
}, _t = {
  // -- Color --
  borderColor: {
    default: "border-f1-border",
    secondary: "border-f1-border-secondary",
    bold: "border-f1-border-bold",
    selected: "border-f1-border-selected",
    "selected-bold": "border-f1-border-selected-bold",
    critical: "border-f1-border-critical",
    "critical-bold": "border-f1-border-critical-bold",
    warning: "border-f1-border-warning",
    "warning-bold": "border-f1-border-warning-bold",
    info: "border-f1-border-info",
    "info-bold": "border-f1-border-info-bold",
    positive: "border-f1-border-positive",
    "positive-bold": "border-f1-border-positive-bold",
    promote: "border-f1-border-promote"
  },
  // -- Width (all sides) --
  border: {
    none: "border-0",
    default: "border border-solid",
    thick: "border-2 border-solid"
  },
  // -- Width per side (includes reset so only the specified side shows) --
  borderTop: {
    none: "border-t-0",
    default: "border-t border-solid",
    thick: "border-t-2 border-solid"
  },
  borderBottom: {
    none: "border-b-0",
    default: "border-b border-solid",
    thick: "border-b-2 border-solid"
  },
  borderLeft: {
    none: "border-l-0",
    default: "border-l border-solid",
    thick: "border-l-2 border-solid"
  },
  borderRight: {
    none: "border-r-0",
    default: "border-r border-solid",
    thick: "border-r-2 border-solid"
  },
  // -- Radius (all corners) --
  borderRadius: {
    none: "rounded-none",
    "2xs": "rounded-2xs",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    full: "rounded-full"
  },
  // -- Radius per corner --
  borderRadiusTopLeft: {
    none: "rounded-tl-none",
    "2xs": "rounded-tl-2xs",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    "3xl": "rounded-tl-3xl",
    full: "rounded-tl-full"
  },
  borderRadiusTopRight: {
    none: "rounded-tr-none",
    "2xs": "rounded-tr-2xs",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    "3xl": "rounded-tr-3xl",
    full: "rounded-tr-full"
  },
  borderRadiusBottomLeft: {
    none: "rounded-bl-none",
    "2xs": "rounded-bl-2xs",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    "3xl": "rounded-bl-3xl",
    full: "rounded-bl-full"
  },
  borderRadiusBottomRight: {
    none: "rounded-br-none",
    "2xs": "rounded-br-2xs",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    "3xl": "rounded-br-3xl",
    full: "rounded-br-full"
  },
  // -- Style --
  borderStyle: {
    solid: "border-solid",
    dashed: "border-dashed",
    dotted: "border-dotted",
    double: "border-double",
    none: "border-none"
  }
}, hc = {}, gc = {
  // Special
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  min: "w-min",
  max: "w-max",
  fit: "w-fit",
  // Numeric scale
  0: "w-0",
  "0.5": "w-0.5",
  1: "w-1",
  "1.5": "w-1.5",
  2: "w-2",
  "2.5": "w-2.5",
  3: "w-3",
  "3.5": "w-3.5",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  7: "w-7",
  8: "w-8",
  9: "w-9",
  10: "w-10",
  11: "w-11",
  12: "w-12",
  14: "w-14",
  16: "w-16",
  18: "w-18",
  20: "w-20",
  24: "w-24",
  28: "w-28",
  32: "w-32",
  36: "w-36",
  40: "w-40",
  44: "w-44",
  48: "w-48",
  52: "w-52",
  56: "w-56",
  60: "w-60",
  64: "w-64",
  72: "w-72",
  80: "w-80",
  96: "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "5/6": "w-5/6"
}, pc = {
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  min: "h-min",
  max: "h-max",
  fit: "h-fit",
  0: "h-0",
  "0.5": "h-0.5",
  1: "h-1",
  "1.5": "h-1.5",
  2: "h-2",
  "2.5": "h-2.5",
  3: "h-3",
  "3.5": "h-3.5",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  7: "h-7",
  8: "h-8",
  9: "h-9",
  10: "h-10",
  11: "h-11",
  12: "h-12",
  14: "h-14",
  16: "h-16",
  18: "h-18",
  20: "h-20",
  24: "h-24",
  28: "h-28",
  32: "h-32",
  36: "h-36",
  40: "h-40",
  44: "h-44",
  48: "h-48",
  52: "h-52",
  56: "h-56",
  60: "h-60",
  64: "h-64",
  72: "h-72",
  80: "h-80",
  96: "h-96",
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "5/6": "h-5/6"
}, Cc = {
  auto: "min-w-0",
  full: "min-w-full",
  screen: "min-w-screen",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit",
  0: "min-w-0",
  "0.5": "min-w-0.5",
  1: "min-w-1",
  "1.5": "min-w-1.5",
  2: "min-w-2",
  "2.5": "min-w-2.5",
  3: "min-w-3",
  "3.5": "min-w-3.5",
  4: "min-w-4",
  5: "min-w-5",
  6: "min-w-6",
  7: "min-w-7",
  8: "min-w-8",
  9: "min-w-9",
  10: "min-w-10",
  11: "min-w-11",
  12: "min-w-12",
  14: "min-w-14",
  16: "min-w-16",
  18: "min-w-18",
  20: "min-w-20",
  24: "min-w-24",
  28: "min-w-28",
  32: "min-w-32",
  36: "min-w-36",
  40: "min-w-40",
  44: "min-w-44",
  48: "min-w-48",
  52: "min-w-52",
  56: "min-w-56",
  60: "min-w-60",
  64: "min-w-64",
  72: "min-w-72",
  80: "min-w-80",
  96: "min-w-96",
  "1/2": "min-w-1/2",
  "1/3": "min-w-1/3",
  "2/3": "min-w-2/3",
  "1/4": "min-w-1/4",
  "2/4": "min-w-2/4",
  "3/4": "min-w-3/4",
  "1/5": "min-w-1/5",
  "2/5": "min-w-2/5",
  "3/5": "min-w-3/5",
  "4/5": "min-w-4/5",
  "1/6": "min-w-1/6",
  "5/6": "min-w-5/6"
}, mc = {
  auto: "min-h-0",
  full: "min-h-full",
  screen: "min-h-screen",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit",
  0: "min-h-0",
  "0.5": "min-h-0.5",
  1: "min-h-1",
  "1.5": "min-h-1.5",
  2: "min-h-2",
  "2.5": "min-h-2.5",
  3: "min-h-3",
  "3.5": "min-h-3.5",
  4: "min-h-4",
  5: "min-h-5",
  6: "min-h-6",
  7: "min-h-7",
  8: "min-h-8",
  9: "min-h-9",
  10: "min-h-10",
  11: "min-h-11",
  12: "min-h-12",
  14: "min-h-14",
  16: "min-h-16",
  18: "min-h-18",
  20: "min-h-20",
  24: "min-h-24",
  28: "min-h-28",
  32: "min-h-32",
  36: "min-h-36",
  40: "min-h-40",
  44: "min-h-44",
  48: "min-h-48",
  52: "min-h-52",
  56: "min-h-56",
  60: "min-h-60",
  64: "min-h-64",
  72: "min-h-72",
  80: "min-h-80",
  96: "min-h-96",
  "1/2": "min-h-1/2",
  "1/3": "min-h-1/3",
  "2/3": "min-h-2/3",
  "1/4": "min-h-1/4",
  "2/4": "min-h-2/4",
  "3/4": "min-h-3/4",
  "1/5": "min-h-1/5",
  "2/5": "min-h-2/5",
  "3/5": "min-h-3/5",
  "4/5": "min-h-4/5",
  "1/6": "min-h-1/6",
  "5/6": "min-h-5/6"
}, vc = {
  auto: "max-w-none",
  full: "max-w-full",
  screen: "max-w-screen",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  0: "max-w-0",
  "0.5": "max-w-0.5",
  1: "max-w-1",
  "1.5": "max-w-1.5",
  2: "max-w-2",
  "2.5": "max-w-2.5",
  3: "max-w-3",
  "3.5": "max-w-3.5",
  4: "max-w-4",
  5: "max-w-5",
  6: "max-w-6",
  7: "max-w-7",
  8: "max-w-8",
  9: "max-w-9",
  10: "max-w-10",
  11: "max-w-11",
  12: "max-w-12",
  14: "max-w-14",
  16: "max-w-16",
  18: "max-w-18",
  20: "max-w-20",
  24: "max-w-24",
  28: "max-w-28",
  32: "max-w-32",
  36: "max-w-36",
  40: "max-w-40",
  44: "max-w-44",
  48: "max-w-48",
  52: "max-w-52",
  56: "max-w-56",
  60: "max-w-60",
  64: "max-w-64",
  72: "max-w-72",
  80: "max-w-80",
  96: "max-w-96",
  "1/2": "max-w-1/2",
  "1/3": "max-w-1/3",
  "2/3": "max-w-2/3",
  "1/4": "max-w-1/4",
  "2/4": "max-w-2/4",
  "3/4": "max-w-3/4",
  "1/5": "max-w-1/5",
  "2/5": "max-w-2/5",
  "3/5": "max-w-3/5",
  "4/5": "max-w-4/5",
  "1/6": "max-w-1/6",
  "5/6": "max-w-5/6"
}, wc = {
  auto: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit",
  0: "max-h-0",
  "0.5": "max-h-0.5",
  1: "max-h-1",
  "1.5": "max-h-1.5",
  2: "max-h-2",
  "2.5": "max-h-2.5",
  3: "max-h-3",
  "3.5": "max-h-3.5",
  4: "max-h-4",
  5: "max-h-5",
  6: "max-h-6",
  7: "max-h-7",
  8: "max-h-8",
  9: "max-h-9",
  10: "max-h-10",
  11: "max-h-11",
  12: "max-h-12",
  14: "max-h-14",
  16: "max-h-16",
  18: "max-h-18",
  20: "max-h-20",
  24: "max-h-24",
  28: "max-h-28",
  32: "max-h-32",
  36: "max-h-36",
  40: "max-h-40",
  44: "max-h-44",
  48: "max-h-48",
  52: "max-h-52",
  56: "max-h-56",
  60: "max-h-60",
  64: "max-h-64",
  72: "max-h-72",
  80: "max-h-80",
  96: "max-h-96",
  "1/2": "max-h-1/2",
  "1/3": "max-h-1/3",
  "2/3": "max-h-2/3",
  "1/4": "max-h-1/4",
  "2/4": "max-h-2/4",
  "3/4": "max-h-3/4",
  "1/5": "max-h-1/5",
  "2/5": "max-h-2/5",
  "3/5": "max-h-3/5",
  "4/5": "max-h-4/5",
  "1/6": "max-h-1/6",
  "5/6": "max-h-5/6"
}, Ot = {
  width: gc,
  height: pc,
  minWidth: Cc,
  minHeight: mc,
  maxWidth: vc,
  maxHeight: wc
}, Ut = {
  display: {
    block: "block",
    flex: "flex",
    inline: "inline",
    "inline-flex": "inline-flex",
    grid: "grid",
    none: "hidden"
  },
  position: {
    static: "static",
    relative: "relative",
    absolute: "absolute",
    fixed: "fixed",
    sticky: "sticky"
  }
}, zt = {
  divider: {
    x: "divide-x divide-y-0 divide-solid",
    y: "divide-y divide-x-0 divide-solid"
  },
  dividerColor: {
    default: "divide-f1-border",
    secondary: "divide-f1-border-secondary",
    bold: "divide-f1-border-bold",
    selected: "divide-f1-border-selected",
    "selected-bold": "divide-f1-border-selected-bold",
    critical: "divide-f1-border-critical",
    "critical-bold": "divide-f1-border-critical-bold",
    warning: "divide-f1-border-warning",
    "warning-bold": "divide-f1-border-warning-bold",
    info: "divide-f1-border-info",
    "info-bold": "divide-f1-border-info-bold",
    positive: "divide-f1-border-positive",
    "positive-bold": "divide-f1-border-positive-bold",
    promote: "divide-f1-border-promote"
  }
}, Gt = {
  gap: {
    none: "gap-0",
    xs: "gap-0.5",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
    xl: "gap-4",
    "2xl": "gap-6",
    "3xl": "gap-8",
    "4xl": "gap-10",
    "5xl": "gap-12"
  },
  alignItems: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  },
  justifyContent: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
    stretch: "justify-stretch"
  },
  flexDirection: {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  },
  flexWrap: {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  },
  grow: {
    true: "grow",
    false: "grow-0"
  },
  shrink: {
    true: "shrink",
    false: "shrink-0"
  }
}, xc = {}, Wt = {
  columns: {
    none: "grid-cols-none",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12"
  },
  rows: {
    none: "grid-rows-none",
    1: "grid-rows-1",
    2: "grid-rows-2",
    3: "grid-rows-3",
    4: "grid-rows-4",
    5: "grid-rows-5",
    6: "grid-rows-6"
  },
  colSpan: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12",
    full: "col-span-full"
  },
  colStart: {
    auto: "col-start-auto",
    1: "col-start-1",
    2: "col-start-2",
    3: "col-start-3",
    4: "col-start-4",
    5: "col-start-5",
    6: "col-start-6",
    7: "col-start-7",
    8: "col-start-8",
    9: "col-start-9",
    10: "col-start-10",
    11: "col-start-11",
    12: "col-start-12",
    13: "col-start-13"
  },
  rowSpan: {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    full: "row-span-full"
  }
}, qt = {
  top: {
    none: "top-0",
    xs: "top-1",
    sm: "top-2",
    md: "top-3",
    lg: "top-4",
    xl: "top-6",
    "2xl": "top-8",
    "3xl": "top-10",
    "4xl": "top-12",
    "5xl": "top-16"
  },
  right: {
    none: "right-0",
    xs: "right-1",
    sm: "right-2",
    md: "right-3",
    lg: "right-4",
    xl: "right-6",
    "2xl": "right-8",
    "3xl": "right-10",
    "4xl": "right-12",
    "5xl": "right-16"
  },
  bottom: {
    none: "bottom-0",
    xs: "bottom-1",
    sm: "bottom-2",
    md: "bottom-3",
    lg: "bottom-4",
    xl: "bottom-6",
    "2xl": "bottom-8",
    "3xl": "bottom-10",
    "4xl": "bottom-12",
    "5xl": "bottom-16"
  },
  left: {
    none: "left-0",
    xs: "left-1",
    sm: "left-2",
    md: "left-3",
    lg: "left-4",
    xl: "left-6",
    "2xl": "left-8",
    "3xl": "left-10",
    "4xl": "left-12",
    "5xl": "left-16"
  }
}, Xt = {
  margin: {
    none: "m-0",
    xs: "m-1",
    sm: "m-2",
    md: "m-3",
    lg: "m-4",
    xl: "m-6",
    "2xl": "m-8",
    "3xl": "m-10",
    "4xl": "m-12",
    "5xl": "m-16",
    auto: "m-auto"
  },
  marginX: {
    none: "mx-0",
    xs: "mx-1",
    sm: "mx-2",
    md: "mx-3",
    lg: "mx-4",
    xl: "mx-6",
    "2xl": "mx-8",
    "3xl": "mx-10",
    "4xl": "mx-12",
    "5xl": "mx-16",
    auto: "mx-auto"
  },
  marginY: {
    none: "my-0",
    xs: "my-1",
    sm: "my-2",
    md: "my-3",
    lg: "my-4",
    xl: "my-6",
    "2xl": "my-8",
    "3xl": "my-10",
    "4xl": "my-12",
    "5xl": "my-16",
    auto: "my-auto"
  },
  marginTop: {
    none: "mt-0",
    xs: "mt-1",
    sm: "mt-2",
    md: "mt-3",
    lg: "mt-4",
    xl: "mt-6",
    "2xl": "mt-8",
    "3xl": "mt-10",
    "4xl": "mt-12",
    "5xl": "mt-16",
    auto: "mt-auto"
  },
  marginBottom: {
    none: "mb-0",
    xs: "mb-1",
    sm: "mb-2",
    md: "mb-3",
    lg: "mb-4",
    xl: "mb-6",
    "2xl": "mb-8",
    "3xl": "mb-10",
    "4xl": "mb-12",
    "5xl": "mb-16",
    auto: "mb-auto"
  },
  marginLeft: {
    none: "ml-0",
    xs: "ml-1",
    sm: "ml-2",
    md: "ml-3",
    lg: "ml-4",
    xl: "ml-6",
    "2xl": "ml-8",
    "3xl": "ml-10",
    "4xl": "ml-12",
    "5xl": "ml-16",
    auto: "ml-auto"
  },
  marginRight: {
    none: "mr-0",
    xs: "mr-1",
    sm: "mr-2",
    md: "mr-3",
    lg: "mr-4",
    xl: "mr-6",
    "2xl": "mr-8",
    "3xl": "mr-10",
    "4xl": "mr-12",
    "5xl": "mr-16",
    auto: "mr-auto"
  }
}, kc = {}, Lc = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  auto: "overflow-auto",
  scroll: "overflow-scroll"
}, Yt = {
  overflow: Lc,
  overflowX: {
    visible: "overflow-x-visible",
    hidden: "overflow-x-hidden",
    auto: "overflow-x-auto",
    scroll: "overflow-x-scroll"
  },
  overflowY: {
    visible: "overflow-y-visible",
    hidden: "overflow-y-hidden",
    auto: "overflow-y-auto",
    scroll: "overflow-y-scroll"
  }
}, bc = {}, Kt = {
  padding: {
    none: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
    "2xl": "p-8",
    "3xl": "p-10",
    "4xl": "p-12",
    "5xl": "p-16"
  },
  paddingX: {
    none: "px-0",
    xs: "px-1",
    sm: "px-2",
    md: "px-3",
    lg: "px-4",
    xl: "px-6",
    "2xl": "px-8",
    "3xl": "px-10",
    "4xl": "px-12",
    "5xl": "px-16"
  },
  paddingY: {
    none: "py-0",
    xs: "py-1",
    sm: "py-2",
    md: "py-3",
    lg: "py-4",
    xl: "py-6",
    "2xl": "py-8",
    "3xl": "py-10",
    "4xl": "py-12",
    "5xl": "py-16"
  },
  paddingTop: {
    none: "pt-0",
    xs: "pt-1",
    sm: "pt-2",
    md: "pt-3",
    lg: "pt-4",
    xl: "pt-6",
    "2xl": "pt-8",
    "3xl": "pt-10",
    "4xl": "pt-12",
    "5xl": "pt-16"
  },
  paddingBottom: {
    none: "pb-0",
    xs: "pb-1",
    sm: "pb-2",
    md: "pb-3",
    lg: "pb-4",
    xl: "pb-6",
    "2xl": "pb-8",
    "3xl": "pb-10",
    "4xl": "pb-12",
    "5xl": "pb-16"
  },
  paddingLeft: {
    none: "pl-0",
    xs: "pl-1",
    sm: "pl-2",
    md: "pl-3",
    lg: "pl-4",
    xl: "pl-6",
    "2xl": "pl-8",
    "3xl": "pl-10",
    "4xl": "pl-12",
    "5xl": "pl-16"
  },
  paddingRight: {
    none: "pr-0",
    xs: "pr-1",
    sm: "pr-2",
    md: "pr-3",
    lg: "pr-4",
    xl: "pr-6",
    "2xl": "pr-8",
    "3xl": "pr-10",
    "4xl": "pr-12",
    "5xl": "pr-16"
  }
}, yc = {}, Mc = {
  boxShadow: {
    none: "shadow-none",
    sm: "shadow",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl"
  }
}, Qt = {
  zIndex: {
    auto: "z-auto",
    0: "z-0",
    10: "z-10",
    20: "z-20",
    30: "z-30",
    40: "z-40",
    50: "z-50"
  }
}, Ec = {
  ...Ut,
  ...qt,
  ...Kt,
  ...Xt,
  ...Gt,
  ...Wt,
  ...Ot,
  ...Zt,
  ..._t,
  ...Yt,
  ...zt,
  ...Qt
};
function Rc(e, r) {
  return r.split(" ").map((o) => `${e}:${o}`).join(" ");
}
function Fc(e, r) {
  const o = [];
  for (const [n, s] of Object.entries(r)) {
    if (s == null) continue;
    const i = Ec[n];
    if (!i) continue;
    const l = i[String(s)];
    l && o.push(Rc(e, l));
  }
  return o.join(" ");
}
const Nc = Se({
  base: "",
  variants: {
    ...Ut,
    ...qt,
    ...Kt,
    ...Xt,
    ...Gt,
    ...Wt,
    ...Ot,
    ...Zt,
    ..._t,
    ...Yt,
    ...zt,
    ...Mc,
    ...Qt
  },
  defaultVariants: {
    ...yc,
    ...kc,
    ...xc,
    ...hc,
    ...bc
  }
}), Vc = ["sm", "md", "lg", "xl"], Jt = g(
  ({
    // Display & Position
    display: e,
    position: r,
    top: o,
    right: n,
    bottom: s,
    left: i,
    zIndex: l,
    // Padding
    padding: d,
    paddingX: c,
    paddingY: u,
    paddingTop: f,
    paddingBottom: p,
    paddingLeft: C,
    paddingRight: h,
    // Margin
    margin: m,
    marginX: v,
    marginY: x,
    marginTop: N,
    marginBottom: I,
    marginLeft: H,
    marginRight: S,
    // Gap
    gap: E,
    // Grid
    columns: w,
    rows: L,
    colSpan: M,
    colStart: A,
    rowSpan: F,
    // Dimensions
    width: V,
    height: $,
    minWidth: U,
    minHeight: O,
    maxWidth: z,
    maxHeight: te,
    // Background
    background: re,
    // Border
    borderColor: Y,
    border: X,
    borderTop: P,
    borderBottom: oe,
    borderLeft: W,
    borderRight: ae,
    borderRadius: ke,
    borderRadiusTopLeft: de,
    borderRadiusTopRight: ne,
    borderRadiusBottomLeft: fe,
    borderRadiusBottomRight: me,
    borderStyle: b,
    // Overflow
    overflow: R,
    overflowX: y,
    overflowY: D,
    // Divider
    divider: T,
    dividerColor: Z,
    boxShadow: se,
    // Flex
    alignItems: ue,
    justifyContent: ee,
    flexDirection: ye,
    flexWrap: Ve,
    grow: He,
    shrink: ve,
    // Responsive breakpoint overrides
    sm: qe,
    md: Xe,
    lg: Ye,
    xl: Ie,
    ...Ke
  }, Pe) => {
    const Ne = P && P !== "none" || oe && oe !== "none" || W && W !== "none" || ae && ae !== "none", je = X && X !== "none" || Ne, De = { sm: qe, md: Xe, lg: Ye, xl: Ie }, Qe = Vc.map((Ze) => {
      const _e = De[Ze];
      return _e ? Fc(Ze, _e) : "";
    }).filter(Boolean).join(" ");
    return /* @__PURE__ */ t(
      "div",
      {
        ref: Pe,
        className: k(
          Ne && "border-0",
          Nc({
            display: e,
            position: r,
            top: o,
            right: n,
            bottom: s,
            left: i,
            zIndex: l,
            padding: d,
            paddingX: c,
            paddingY: u,
            paddingTop: f,
            paddingBottom: p,
            paddingLeft: C,
            paddingRight: h,
            margin: m,
            marginX: v,
            marginY: x,
            marginTop: N,
            marginBottom: I,
            marginLeft: H,
            marginRight: S,
            gap: E,
            columns: w,
            rows: L,
            colSpan: M,
            colStart: A,
            rowSpan: F,
            width: V,
            height: $,
            minWidth: U,
            minHeight: O,
            maxWidth: z,
            maxHeight: te,
            background: re,
            borderColor: Y,
            border: X,
            borderTop: P,
            borderBottom: oe,
            borderLeft: W,
            borderRight: ae,
            borderRadius: ke,
            borderRadiusTopLeft: de,
            borderRadiusTopRight: ne,
            borderRadiusBottomLeft: fe,
            borderRadiusBottomRight: me,
            borderStyle: b,
            overflow: R,
            overflowX: y,
            overflowY: D,
            divider: T,
            dividerColor: Z,
            alignItems: ue,
            justifyContent: ee,
            flexDirection: ye,
            flexWrap: Ve,
            grow: He,
            shrink: ve,
            boxShadow: se
          }),
          Qe,
          je && !Y && "border-f1-border",
          T && !Z && "divide-f1-border",
          "scrollbar-macos"
        ),
        ...Ke
      }
    );
  }
);
Jt.displayName = "F0Box";
const e1 = En(
  {
    name: "F0Box",
    type: "layout"
  },
  Jt
), S4 = ["xs", "sm", "md", "lg"], T4 = [
  "inProgress",
  "executing",
  "writing",
  "completed"
], Sc = ({
  onUploadFiles: e,
  isAtMaxFiles: r,
  maxFiles: o,
  acceptValue: n,
  fileInputRef: s,
  handleFileSelect: i,
  inProgress: l,
  hasDataToSend: d,
  isPreSending: c,
  canRecord: u,
  recordingStatus: f = "idle",
  recordingStream: p,
  onStartRecording: C,
  onStopRecording: h,
  onCancelRecording: m
}) => {
  const v = G();
  return f === "recording" ? /* @__PURE__ */ a("div", { className: "flex shrink-0 items-center gap-3 p-3", children: [
    /* @__PURE__ */ t(
      Rn,
      {
        stream: p ?? null,
        className: "min-w-0 flex-1"
      }
    ),
    /* @__PURE__ */ a("div", { className: "flex shrink-0 items-center gap-2", children: [
      /* @__PURE__ */ t(
        ce,
        {
          label: v.ai.cancelRecording,
          hideLabel: !0,
          type: "button",
          icon: Fe,
          variant: "outline",
          size: "md",
          onClick: m
        }
      ),
      /* @__PURE__ */ t(
        ce,
        {
          label: v.ai.stopRecording,
          hideLabel: !0,
          type: "button",
          icon: it,
          variant: "default",
          size: "md",
          onClick: h
        }
      )
    ] })
  ] }) : /* @__PURE__ */ a("div", { className: "flex shrink-0 items-center justify-between p-3", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: e && /* @__PURE__ */ a(Re, { children: [
      /* @__PURE__ */ t(
        ce,
        {
          label: v.ai.attachFile,
          hideLabel: !0,
          type: "button",
          icon: pt,
          variant: "outline",
          size: "md",
          disabled: r || f === "transcribing",
          onClick: (x) => {
            x.preventDefault(), s.current?.click();
          }
        }
      ),
      /* @__PURE__ */ t(
        "input",
        {
          ref: s,
          type: "file",
          multiple: o !== 1,
          disabled: r,
          accept: n,
          className: "hidden",
          onChange: i
        }
      )
    ] }) }),
    /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: [
      u && /* @__PURE__ */ t(
        ce,
        {
          label: v.ai.recordAudio,
          hideLabel: !0,
          type: "button",
          icon: ht,
          variant: "outline",
          size: "md",
          disabled: l,
          onClick: C,
          loading: f === "transcribing"
        }
      ),
      f !== "transcribing" && l ? /* @__PURE__ */ t(
        ce,
        {
          type: "submit",
          variant: "neutral",
          label: v.ai.stopAnswerGeneration,
          icon: wt,
          hideLabel: !0
        }
      ) : /* @__PURE__ */ t(
        ce,
        {
          type: "submit",
          disabled: !d || c,
          variant: "default",
          label: v.ai.sendMessage,
          icon: s1,
          hideLabel: !0
        }
      )
    ] })
  ] });
}, Tc = ({
  attachedFiles: e,
  isUploading: r,
  onRemove: o,
  removeLabel: n
}) => e.length === 0 ? null : /* @__PURE__ */ t(
  "div",
  {
    "aria-live": "polite",
    "aria-busy": r,
    className: "flex flex-wrap gap-1 px-1 pt-1",
    children: e.map(
      (s) => s.status === "uploading" ? /* @__PURE__ */ t(he, { className: "h-9 w-36 rounded-[10px]" }, s.id) : s.status === "error" ? /* @__PURE__ */ t(
        Hc,
        {
          att: s,
          onRemove: o,
          removeLabel: n
        },
        s.id
      ) : /* @__PURE__ */ t(
        kt,
        {
          file: s.file,
          size: "md",
          actions: [
            {
              label: n,
              icon: Fe,
              onClick: () => o(s.id)
            }
          ]
        },
        s.id
      )
    )
  }
);
function Hc({
  att: e,
  onRemove: r,
  removeLabel: o
}) {
  const n = /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5", children: [
    /* @__PURE__ */ t(le, { icon: nt, size: "md", color: "critical" }),
    /* @__PURE__ */ t("span", { className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical", children: e.file.name }),
    /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        "aria-label": o,
        className: ge(
          "rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"
        ),
        onClick: () => r(e.id),
        children: /* @__PURE__ */ t(le, { icon: Fe, size: "md", "aria-hidden": "true" })
      }
    )
  ] });
  return e.errorMessage ? /* @__PURE__ */ t(Fn, { label: e.errorMessage, children: n }) : n;
}
const Ac = {
  soft: {
    text: "",
    bg: "bg-f1-background-info",
    fontColor: "text-f1-foreground-info",
    formBorder: "[&_form]:border-f1-border-info"
  }
}, $c = ({
  creditWarning: e,
  children: r
}) => {
  const o = G();
  if (!e) return r;
  const n = {
    ...Ac[e.level],
    text: o.ai.creditWarning.soft
  };
  return /* @__PURE__ */ a(
    "div",
    {
      className: k("flex flex-col rounded-xl", n.bg, n.formBorder),
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-2 px-4 pb-1.5 pt-2", children: [
          /* @__PURE__ */ t(
            "p",
            {
              className: k("min-w-0 flex-1 text-sm font-medium", n.fontColor),
              children: n.text
            }
          ),
          /* @__PURE__ */ a("div", { className: "flex shrink-0 items-center gap-1", children: [
            e.onGetCredits && /* @__PURE__ */ t(
              Ce,
              {
                label: o.ai.creditWarning.getCredits ?? "",
                size: "sm",
                variant: "outline",
                tooltip: o.ai.creditWarning.getCredits ?? "",
                onClick: e.onGetCredits
              }
            ),
            e.onDismiss && /* @__PURE__ */ t(
              Ce,
              {
                label: o.ai.creditWarning.dismiss ?? "",
                size: "sm",
                variant: "ghost",
                icon: Fe,
                hideLabel: !0,
                onClick: e.onDismiss
              }
            )
          ] })
        ] }),
        r
      ]
    }
  );
};
function Bc({
  isOpen: e,
  results: r,
  isLoading: o,
  selectedIndex: n,
  position: s,
  onSelect: i
}) {
  const l = j(null), d = j(null);
  q(() => {
    d.current?.scrollIntoView({ block: "nearest" });
  }, [n]), rt(() => {
    const f = l.current, p = f?.offsetParent;
    if (!f || !p) return;
    const C = f.offsetLeft + f.offsetWidth - p.clientWidth;
    C > 0 && (f.style.left = `${Math.max(0, f.offsetLeft - C)}px`);
  }, [s]);
  const c = o && r.length === 0, u = !o && r.length === 0;
  return !e || u ? null : /* @__PURE__ */ t(
    "div",
    {
      ref: l,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: s ? `${s.bottom}px` : "100%",
        left: s ? `${s.left}px` : 0
      },
      className: k(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: c ? Array.from({ length: 3 }, (f, p) => /* @__PURE__ */ a(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ t(he, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ t(
              he,
              {
                className: k("h-4 rounded", p === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        p
      )) : r.map((f, p) => {
        const C = p === n, h = `${f.firstName} ${f.lastName}`.trim();
        return /* @__PURE__ */ a(
          "div",
          {
            ref: C ? d : void 0,
            role: "option",
            "aria-selected": C,
            className: k(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              C ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (m) => {
              m.preventDefault(), i(f);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ t(
                Nn,
                {
                  firstName: f.firstName,
                  lastName: f.lastName,
                  src: f.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ t(ie, { className: "text-base font-medium text-f1-foreground", children: h }) })
            ]
          },
          String(f.id)
        );
      })
    }
  );
}
const Ic = ({
  quote: e,
  onRemove: r
}) => {
  const o = G();
  return /* @__PURE__ */ t("div", { className: "p-1", children: /* @__PURE__ */ a(
    "div",
    {
      className: k(
        "flex items-start gap-2 justify-center",
        "rounded-[10px] bg-f1-background-hover pl-2 py-1.5 pr-1.5"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex items-center py-0.5", children: /* @__PURE__ */ t(le, { icon: a1, size: "md", color: "default" }) }),
        /* @__PURE__ */ t(
          ie,
          {
            className: "h-full flex-1 py-0.5 text-[12px] font-medium text-f1-foreground-secondary",
            lines: 1,
            children: e.text
          }
        ),
        /* @__PURE__ */ t(
          ce,
          {
            variant: "ghost",
            label: o.ai.removeQuote,
            onClick: r,
            icon: Fe,
            hideLabel: !0,
            size: "sm"
          }
        )
      ]
    }
  ) });
}, Pc = ({
  placeholders: e,
  defaultPlaceholder: r,
  inputValue: o,
  inProgress: n
}) => {
  const s = xe(), [i, l] = B(""), [d, c] = B(0), [u, f] = B(!1), p = j(null), C = j(null), h = j(null), m = e[d] ?? r;
  return q(() => {
    const v = () => {
      C.current && (clearInterval(C.current), C.current = null), h.current && (clearInterval(h.current), h.current = null), p.current && (clearTimeout(p.current), p.current = null);
    };
    if (o.length > 0 || n) {
      f(!1), l(""), v();
      return;
    }
    if (s)
      return f(!1), l(m), v(), p.current = setTimeout(() => {
        const E = (d + 1) % Math.max(e.length, 1);
        c(E);
      }, 4e3), () => {
        v();
      };
    f(!0), l("");
    let x = 0;
    const N = 50, I = 30, H = 2e3, S = 1e3;
    return C.current = setInterval(() => {
      x < m.length ? (l(m.slice(0, x + 1)), x++) : (C.current && (clearInterval(C.current), C.current = null), p.current = setTimeout(() => {
        h.current = setInterval(() => {
          x > 0 ? (x--, l(m.slice(0, x))) : (h.current && (clearInterval(h.current), h.current = null), p.current = setTimeout(() => {
            const E = (d + 1) % Math.max(e.length, 1);
            c(E);
          }, S));
        }, I);
      }, H));
    }, N), () => {
      v();
    };
  }, [
    o,
    n,
    m,
    d,
    e.length,
    s
  ]), o.length > 0 || n ? null : /* @__PURE__ */ t(Ee, { children: /* @__PURE__ */ t(
    J.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: s ? 0 : 0.4 },
      className: k(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "text-[16px] sm:text-[14px] leading-[20px] font-normal",
        "pt-3 px-3"
      ),
      children: /* @__PURE__ */ a(
        "div",
        {
          className: k(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "whitespace-pre-wrap break-words overflow-visible"
          ),
          children: [
            i,
            u && !s && /* @__PURE__ */ t("span", { className: "f0-chat-cursor-blink", children: "|" })
          ]
        }
      )
    }
  ) });
}, jc = ({
  textareaRef: e,
  highlightRef: r,
  inputValue: o,
  onInputChange: n,
  onKeyDown: s,
  onCursorUpdate: i,
  onScroll: l,
  highlightSegments: d,
  hasOverlay: c,
  multiplePlaceholders: u,
  placeholders: f,
  resolvedDefaultPlaceholder: p,
  inProgress: C
}) => /* @__PURE__ */ a(
  "div",
  {
    className: k("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
    children: [
      /* @__PURE__ */ t(
        "div",
        {
          "aria-hidden": !0,
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none invisible",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3"
          ),
          children: o.endsWith(`
`) ? o + "_" : o
        }
      ),
      c && /* @__PURE__ */ t(
        "div",
        {
          ref: r,
          "aria-hidden": !0,
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "min-h-[20px] max-h-[240px]",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground",
            "my-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ),
          children: d.map(
            (h, m) => h.type === "mention" ? /* @__PURE__ */ t(
              "span",
              {
                className: "font-medium text-f1-foreground-secondary",
                children: h.text
              },
              m
            ) : h.type === "ghost" ? /* @__PURE__ */ t("span", { className: "text-f1-foreground-secondary opacity-50", children: h.text }, m) : /* @__PURE__ */ t("span", { children: h.text }, m)
          )
        }
      ),
      !o && !u && /* @__PURE__ */ t(
        "p",
        {
          className: k(
            "col-start-1 row-start-1",
            "pointer-events-none",
            "text-f1-foreground-secondary",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "pt-3 px-3",
            "overflow-hidden text-ellipsis whitespace-nowrap"
          ),
          children: f.length === 1 ? f[0] : p
        }
      ),
      /* @__PURE__ */ t(
        "textarea",
        {
          autoFocus: !1,
          name: "one-ai-input",
          rows: 1,
          ref: e,
          value: o,
          onChange: (h) => {
            n(h.target.value, h.target.selectionStart ?? 0);
          },
          onKeyDown: s,
          onKeyUp: i,
          onClick: i,
          onSelect: i,
          onScroll: l,
          className: k(
            "col-start-1 row-start-1",
            "min-h-[20px] max-h-[240px] h-auto",
            "resize-none",
            "whitespace-pre-wrap break-words",
            "text-[16px] sm:text-[14px] leading-[20px] font-normal",
            "mt-3 px-3",
            "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "outline-none",
            c ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
            !c && (o || !u ? "caret-f1-foreground" : "caret-transparent")
          )
        }
      ),
      u && /* @__PURE__ */ t(
        Pc,
        {
          placeholders: f,
          defaultPlaceholder: p,
          inputValue: o,
          inProgress: C ?? !1
        }
      )
    ]
  }
), Dc = 4, Zc = ({
  cards: e
}) => e.length === 0 ? null : /* @__PURE__ */ t("div", { className: "grid w-full grid-cols-2 gap-3", children: e.slice(0, Dc).map((r) => /* @__PURE__ */ t(
  Lt,
  {
    avatar: { type: "icon", icon: r.icon },
    title: r.title,
    description: r.description,
    onClick: r.onClick
  },
  r.id
)) }), _c = 5;
function Oc(e, r = _c) {
  return e.length <= r ? e : [...e].sort(() => 0.5 - Math.random()).slice(0, r);
}
const Uc = ({
  suggestions: e,
  onItemClick: r,
  onItemHover: o,
  side: n = "top"
}) => {
  const [s, i] = B(null), l = s !== null ? e[s] : null;
  return e.length === 0 ? null : /* @__PURE__ */ a(
    d1,
    {
      open: l !== null,
      onOpenChange: (d) => {
        d || (i(null), o?.(null));
      },
      children: [
        /* @__PURE__ */ t(Vn, { asChild: !0, children: /* @__PURE__ */ t("div", { className: "flex w-full flex-wrap items-center gap-2", children: e.map((d, c) => /* @__PURE__ */ t(f1, { asChild: !0, children: /* @__PURE__ */ t(
          ce,
          {
            variant: "outline",
            label: d.label,
            icon: d.icon,
            pressed: s === c,
            onClick: () => {
              i((u) => u === c ? null : c), o?.(null);
            }
          }
        ) }, `${d.label}-${c}`)) }) }),
        l && /* @__PURE__ */ a(
          u1,
          {
            side: n,
            align: "start",
            sideOffset: 8,
            onOpenAutoFocus: (d) => d.preventDefault(),
            className: k(
              "flex flex-col gap-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-2",
              "w-[var(--radix-popover-trigger-width)]"
            ),
            children: [
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 p-2 pb-1 text-sm font-medium text-f1-foreground-secondary", children: [
                /* @__PURE__ */ t(le, { icon: l.icon, size: "sm" }),
                /* @__PURE__ */ t("span", { children: l.label })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex flex-col", children: Oc(l.items).map((d, c) => /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    r(d, l), i(null), o?.(null);
                  },
                  onMouseEnter: () => o?.(d),
                  onMouseLeave: () => o?.(null),
                  onFocus: () => o?.(d),
                  onBlur: () => o?.(null),
                  className: k(
                    "group flex items-center justify-between gap-2 rounded-sm px-2 py-2 text-left text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-hover focus-visible:bg-f1-background-hover",
                    ge()
                  ),
                  children: [
                    /* @__PURE__ */ t("span", { className: "min-w-0 flex-1 truncate", children: d.title }),
                    /* @__PURE__ */ t(
                      "span",
                      {
                        "aria-hidden": !0,
                        className: "flex flex-shrink-0 items-center text-f1-foreground-secondary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                        children: /* @__PURE__ */ t(le, { icon: s1, size: "sm" })
                      }
                    )
                  ]
                },
                c
              )) })
            ]
          }
        )
      ]
    }
  );
};
function R1(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function zc(e, r, o) {
  const n = o?.cursorPosition ?? e.length, s = o?.inlineCompletion ?? null, i = [];
  for (const f of r) {
    const p = `@${f.name}`;
    let C = 0;
    for (; ; ) {
      const h = e.indexOf(p, C);
      if (h === -1) break;
      i.push({ start: h, end: h + p.length }), C = h + p.length;
    }
  }
  i.sort((f, p) => f.start - p.start);
  const l = [];
  let d = 0, c = !1;
  const u = (f) => {
    if (!s || c || n < d || n > f) {
      f > d && l.push({ type: "text", text: e.slice(d, f) }), d = f;
      return;
    }
    n > d && l.push({ type: "text", text: e.slice(d, n) }), l.push({ type: "ghost", text: s }), c = !0, n < f && l.push({ type: "text", text: e.slice(n, f) }), d = f;
  };
  for (const f of i)
    u(f.start), l.push({ type: "mention", text: e.slice(f.start, f.end) }), d = f.end;
  return u(e.length), !c && s && n >= d && l.push({ type: "ghost", text: s }), l.length === 0 ? [{ type: "text", text: e }] : l;
}
function Gc(e, r) {
  if (r === "*/*") return !0;
  if (r.endsWith("/*")) {
    const o = r.slice(0, r.indexOf("/"));
    return e.startsWith(o + "/");
  }
  return e === r;
}
function Wc(e, r) {
  if (!r) return e;
  const o = Array.isArray(r) ? r : [r];
  return o.length === 0 ? e : e.filter(
    (n) => o.some((s) => Gc(n.type, s))
  );
}
const qc = 4e3;
function Xc(e) {
  const [r, o] = B([]), [n, s] = B(null), i = j(
    null
  ), l = j(null), d = G(), c = e?.onUploadFiles, u = e?.allowedMimeTypes, f = e?.maxFiles, p = Q(() => {
    if (u)
      return Array.isArray(u) ? u.join(",") : u;
  }, [u]), C = f !== void 0 && r.length >= f, h = j(0);
  q(() => {
    h.current = r.length;
  }, [r]);
  const m = _((H) => {
    i.current && clearTimeout(i.current), s(H), i.current = setTimeout(() => {
      s(null), i.current = null;
    }, qc);
  }, []);
  q(
    () => () => {
      i.current && clearTimeout(i.current);
    },
    []
  );
  const v = _(
    async (H) => {
      if (H.length === 0 || !c) return;
      const S = Wc(H, u);
      if (S.length === 0) return;
      if (f !== void 0 && h.current + S.length > f) {
        m(
          d.ai.tooManyFilesError.replace(
            "{{maxFiles}}",
            String(f)
          )
        );
        return;
      }
      const E = S.map((M) => ({
        id: crypto.randomUUID(),
        file: M,
        status: "uploading"
      })), w = E.map((M) => M.id);
      o((M) => [...M, ...E]);
      const L = (M) => o(
        (A) => A.map(
          (F) => w.includes(F.id) ? { ...F, status: "error", errorMessage: M } : F
        )
      );
      try {
        const M = await c(S);
        if (!Array.isArray(M) || M.length !== S.length) {
          L(d.ai.fileUploadError);
          return;
        }
        o(
          (A) => A.map((F) => {
            const V = E.findIndex(($) => $.id === F.id);
            return V === -1 ? F : M[V] ? {
              ...F,
              status: "uploaded",
              uploadedFile: M[V]
            } : {
              ...F,
              status: "error",
              errorMessage: d.ai.fileUploadError
            };
          })
        );
      } catch (M) {
        const A = M instanceof Error && M.message ? M.message : d.ai.fileUploadError;
        L(A);
      }
    },
    [
      c,
      f,
      u,
      d.ai.tooManyFilesError,
      d.ai.fileUploadError,
      m
    ]
  ), x = _(
    async (H) => {
      await v(Array.from(H.target.files ?? [])), H.target.value = "";
    },
    [v]
  ), N = _((H) => {
    o((S) => S.filter((E) => E.id !== H));
  }, []), I = _(() => {
    o([]);
  }, []);
  return {
    attachedFiles: r,
    fileInputRef: l,
    onUploadFiles: c,
    acceptValue: p,
    isAtMaxFiles: C,
    maxFiles: f,
    processFiles: v,
    handleFileSelect: x,
    handleRemoveFile: N,
    clearFiles: I,
    transientError: n,
    showTransientError: m
  };
}
function Yc(e, r, o) {
  const s = e.slice(0, r).lastIndexOf("@");
  if (s === -1) return null;
  if (s > 0) {
    const l = e[s - 1];
    if (l !== " " && l !== `
` && l !== "	")
      return null;
  }
  const i = e.slice(s + 1, r);
  if (i.includes(`
`)) return null;
  for (const l of o) {
    const d = e.slice(s + 1), c = s + 1 + l.name.length;
    if (d.startsWith(l.name) && r >= c) {
      const u = e[c];
      if (u === " " || u === `
` || u === "	")
        return null;
    }
  }
  return { atIndex: s, query: i };
}
const Kc = [
  "direction",
  "boxSizing",
  "width",
  "height",
  "overflowX",
  "overflowY",
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize",
  "whiteSpace",
  "wordWrap",
  "wordBreak"
];
function Qc(e, r) {
  const o = document.createElement("div"), n = o.style, s = window.getComputedStyle(e);
  n.whiteSpace = "pre-wrap", n.wordWrap = "break-word", n.position = "absolute", n.visibility = "hidden", n.overflow = "hidden";
  for (const c of Kc)
    n.setProperty(c, s.getPropertyValue(c));
  o.textContent = e.value.substring(0, r);
  const i = document.createElement("span");
  i.textContent = e.value.substring(r) || "​", o.appendChild(i), document.body.appendChild(o);
  const l = i.offsetLeft, d = i.offsetTop - e.scrollTop;
  return document.body.removeChild(o), { left: l, top: d };
}
const Jc = 250;
function e2({
  inputValue: e,
  setInputValue: r,
  cursorPosition: o,
  searchPersons: n,
  textareaRef: s
}) {
  const [i, l] = B(!1), [d, c] = B(""), [u, f] = B([]), [p, C] = B(!1), [h, m] = B(0), [v, x] = B([]), N = j(-1), I = j(null), H = j(0), S = j(-1);
  q(() => {
    if (!n) {
      l(!1);
      return;
    }
    const V = Yc(e, o, v);
    if (!V) {
      l(!1), c(""), f([]), m(0), N.current = -1, S.current = -1;
      return;
    }
    if (V.atIndex === S.current)
      return;
    N.current = V.atIndex, c(V.query), l(!0), m(0), C(!0), I.current && clearTimeout(I.current);
    const $ = ++H.current;
    return I.current = setTimeout(() => {
      n(V.query).then((U) => {
        $ === H.current && (f(U), m(0), U.length === 0 && V.query.length > 0 && (S.current = V.atIndex, l(!1)));
      }).catch(() => {
        $ === H.current && f([]);
      }).finally(() => {
        $ === H.current && C(!1);
      });
    }, Jc), () => {
      I.current && clearTimeout(I.current);
    };
  }, [e, o, n, v]);
  const E = _(() => {
    l(!1), c(""), f([]), m(0), N.current = -1;
  }, []), w = _(
    (V) => {
      const $ = N.current;
      if ($ === -1) return;
      const U = `${V.firstName} ${V.lastName}`.trim(), O = String(V.id), z = e.slice(0, $), te = e.slice(o), re = `@${U} `, Y = z + re + te, X = z.length + re.length;
      r(Y), x((P) => [...P.filter((W) => !(W.id === O && W.name === U)), { id: O, name: U }]), E(), requestAnimationFrame(() => {
        const P = s.current;
        P && (P.focus(), P.setSelectionRange(X, X));
      });
    },
    [e, o, r, s, E]
  ), L = _(
    (V) => {
      if (!i) return !1;
      if (V.key === "Escape")
        return V.preventDefault(), E(), !0;
      if (u.length === 0) return !1;
      switch (V.key) {
        case "ArrowDown":
          return V.preventDefault(), m(($) => ($ + 1) % u.length), !0;
        case "ArrowUp":
          return V.preventDefault(), m(
            ($) => ($ + u.length - 1) % u.length
          ), !0;
        case "Tab": {
          const $ = u[h];
          if ($) {
            const U = `${$.firstName} ${$.lastName}`.trim();
            if (d.length === 0 || U.toLowerCase().startsWith(d.toLowerCase()))
              return V.preventDefault(), w($), !0;
          }
          return !1;
        }
        case "Enter":
          return V.preventDefault(), u[h] && w(u[h]), !0;
        default:
          return !1;
      }
    },
    [i, u, h, d, w, E]
  ), M = _(
    (V) => {
      if (v.length === 0) return V;
      let $ = V;
      const U = [...v].sort((O, z) => z.name.length - O.name.length);
      for (const O of U) {
        const z = `@${O.name}`, te = `<entity-ref type="person" id="${R1(O.id)}">${R1(O.name)}</entity-ref>`;
        for (; $.includes(z); )
          $ = $.replace(z, te);
      }
      return $;
    },
    [v]
  );
  q(() => {
    x(
      (V) => V.filter(($) => {
        const U = `@${$.name}`, O = e.indexOf(U);
        if (O === -1) return !1;
        const z = e[O + U.length];
        return z === " " || z === `
` || z === "	";
      })
    );
  }, [e]);
  const A = Q(() => {
    if (!i || N.current === -1) return null;
    const V = s.current;
    if (!V) return null;
    const $ = Qc(V, N.current), U = V.offsetLeft + $.left, z = (V.offsetParent ? V.offsetParent.offsetHeight : 0) - (V.offsetTop + $.top);
    return { left: U, bottom: z };
  }, [i, e, o, s]), F = Q(() => {
    if (!i || u.length === 0) return null;
    const V = u[h];
    if (!V) return null;
    const $ = `${V.firstName} ${V.lastName}`.trim();
    return d.length === 0 ? $ : $.toLowerCase().startsWith(d.toLowerCase()) ? $.slice(d.length) : null;
  }, [i, u, h, d]);
  return {
    isOpen: i,
    query: d,
    results: u,
    isLoading: p,
    selectedIndex: h,
    mentions: v,
    popoverPosition: A,
    inlineCompletion: F,
    handleKeyDown: L,
    selectPerson: w,
    transformMentions: M,
    close: E
  };
}
const t2 = /[\\`*_{}[\]()#+\-.!|~>]/g, r2 = (e) => e.split(/(<entity-ref\b[^>]*>[\s\S]*?<\/entity-ref>)/g).map((r, o) => o % 2 === 1 ? r : r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(t2, "\\$&")).join(""), H4 = ({
  onSubmit: e,
  onStop: r,
  inProgress: o,
  onBeforeSubmit: n,
  placeholders: s,
  creditWarning: i,
  clarifyingUI: l,
  pendingContext: d = null,
  onPendingContextChange: c,
  pendingQuote: u = null,
  onPendingQuoteChange: f,
  fileAttachments: p,
  onTranscribe: C,
  searchPersons: h,
  onProcessFilesRef: m,
  disclaimer: v,
  footer: x,
  isWelcomeScreen: N = !1,
  fullscreen: I = !1,
  welcomeScreenSuggestions: H,
  onSuggestionClick: S,
  welcomeScreenCards: E,
  ref: w
}) => {
  const L = G(), M = xe(), [A, F] = B(""), [V, $] = B(0), [U, O] = B(!1), [z, te] = B(!1), [re, Y] = B(null), X = j(null), P = j(null), oe = j(null), W = l != null, { tracking: ae } = be(), ke = _(
    (K, we) => {
      ae?.onWelcomeSuggestionClick?.({
        item: K,
        group: we,
        prompt: K.prompt || K.title
      }), S?.(K, we);
    },
    [ae, S]
  ), {
    attachedFiles: de,
    fileInputRef: ne,
    onUploadFiles: fe,
    acceptValue: me,
    isAtMaxFiles: b,
    maxFiles: R,
    processFiles: y,
    handleFileSelect: D,
    handleRemoveFile: T,
    clearFiles: Z,
    transientError: se,
    showTransientError: ue
  } = Xc(p), ee = e2({
    inputValue: A,
    setInputValue: F,
    cursorPosition: V,
    searchPersons: h,
    textareaRef: P
  }), ye = j(""), Ve = _((K) => {
    const we = ye.current, Je = we && !/\s$/.test(we) ? " " : "", Oe = `${we}${Je}${K}`;
    F(Oe), $(Oe.length);
  }, []), He = {
    "permission-denied": L.ai.micPermissionDenied,
    "device-error": L.ai.micError,
    "transcription-failed": L.ai.transcriptionError
  }, ve = Sn({
    onTranscribe: C,
    onPartial: Ve,
    onFinal: (K) => {
      Ve(K), P.current?.focus();
    },
    onError: (K) => ue(He[K])
  }), qe = !!C && ve.isSupported, Xe = _(() => {
    ae?.onDictationStart?.(), ye.current = A, ve.start();
  }, [A, ve, ae]), Ye = _(() => {
    ae?.onDictationCancel?.(), ve.cancel();
  }, [ve, ae]);
  q(() => {
    typeof window < "u" && window.location.hash.length === 0 && P.current?.focus();
  }, []), q(() => {
    if (m)
      return m((K) => {
        y(K);
      }), () => {
        m(null);
      };
  }, [m, y]);
  const Ie = ve.status === "recording", Ke = Ie ? L.ai.listening : L.ai.inputPlaceholder, Pe = de.filter((K) => K.status === "uploaded"), Ne = de.some((K) => K.status === "uploading"), je = de.some((K) => K.status === "error"), De = A.trim().length > 0 || Pe.length > 0;
  q(() => {
    if (!(!z || Ne)) {
      if (te(!1), je) {
        ue(L.ai.fileUploadBlockedSubmit);
        return;
      }
      X.current?.requestSubmit();
    }
  }, [
    z,
    Ne,
    je,
    ue,
    L.ai.fileUploadBlockedSubmit
  ]);
  const Qe = async (K) => {
    if (K.preventDefault(), !W) {
      if (ee.close(), o)
        r?.();
      else if (De && !U) {
        if (Ne) {
          te(!0), P.current?.focus();
          return;
        }
        if (n) {
          O(!0);
          try {
            if (await n() === !1) {
              P.current?.focus();
              return;
            }
          } finally {
            O(!1);
          }
        }
        const we = ee.transformMentions(A.trim()), Je = r2(we), Oe = Pe.flatMap(
          (b1) => b1.uploadedFile ? [b1.uploadedFile] : []
        ), k1 = d, L1 = u;
        k1 && c?.(null), L1 && f?.(null), await e({
          text: Je,
          files: Oe,
          context: k1,
          quote: L1
        }), F(""), Z();
      }
      P.current?.focus();
    }
  }, Ze = (K) => {
    W || ee.handleKeyDown(K) || K.key === "Enter" && !K.shiftKey && (K.preventDefault(), o || X.current?.requestSubmit());
  }, _e = () => {
    $(P.current?.selectionStart ?? 0);
  }, Mr = () => {
    oe.current && P.current && (oe.current.scrollTop = P.current.scrollTop);
  }, m1 = re ? re.prompt ?? re.title : null, v1 = Ie ? [L.ai.listening] : m1 ? [m1] : s ?? [], Er = v1.length > 1, Rr = Q(() => zc(A, ee.mentions, {
    cursorPosition: V,
    inlineCompletion: ee.inlineCompletion
  }), [A, ee.mentions, V, ee.inlineCompletion]), Fr = ee.mentions.length > 0 || ee.inlineCompletion !== null, w1 = N && !!H && H.length > 0 && !!S ? /* @__PURE__ */ t(
    Uc,
    {
      suggestions: H,
      onItemClick: ke,
      onItemHover: Y,
      side: "top"
    }
  ) : null, Nr = N && I && !!E && E.length > 0, x1 = I && N, { motionProps: Vr } = Tn(
    N,
    160,
    0.5
  );
  return /* @__PURE__ */ a(
    J.div,
    {
      ref: w,
      className: k(
        "flex flex-col items-center gap-2 px-4 pb-3 pt-2",
        x1 && "min-h-0 flex-1 justify-start -mt-20"
      ),
      ...I ? Vr : {},
      children: [
        /* @__PURE__ */ a("div", { className: "flex w-full max-w-content flex-col gap-2", children: [
          w1 && /* @__PURE__ */ t("div", { children: w1 }),
          /* @__PURE__ */ t($c, { creditWarning: i, children: /* @__PURE__ */ a(
            J.form,
            {
              "aria-busy": o,
              ref: X,
              className: k(
                "relative isolate z-20",
                "flex flex-col items-stretch md:gap-3 gap-2",
                "rounded-lg border border-solid border-f1-border has-[textarea:focus]:border-f1-background-tertiary",
                "transition-all hover:cursor-text",
                "p-0",
                "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
                "before:rounded-[inherit] before:bg-f1-background before:content-['']",
                "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
                "after:rounded-md after:blur-[6px] after:content-['']",
                "after:scale-90 after:opacity-0",
                "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
                "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
                "after:transition-all after:delay-200 after:duration-300",
                "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100",
                W && "after:scale-100 after:opacity-100 border-f1-background-tertiary"
              ),
              animate: {
                "--gradient-angle": ["0deg", "360deg"]
              },
              transition: {
                duration: 6,
                ease: "linear",
                repeat: 1 / 0
              },
              style: {
                "--gradient-angle": "180deg"
              },
              onClick: () => {
                W || P.current?.focus();
              },
              onSubmit: Qe,
              children: [
                /* @__PURE__ */ t(
                  Bc,
                  {
                    isOpen: ee.isOpen,
                    results: ee.results,
                    isLoading: ee.isLoading,
                    selectedIndex: ee.selectedIndex,
                    position: ee.popoverPosition,
                    onSelect: ee.selectPerson
                  }
                ),
                /* @__PURE__ */ t(Ee, { initial: !1, children: W ? /* @__PURE__ */ t(
                  J.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: M ? 0 : 0.22,
                        ease: [0.4, 0, 1, 1]
                      }
                    },
                    transition: {
                      duration: M ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: l
                  },
                  "clarifying"
                ) : /* @__PURE__ */ a(
                  J.div,
                  {
                    className: "overflow-hidden",
                    initial: { height: 0, opacity: 0 },
                    animate: { height: "auto", opacity: 1 },
                    exit: {
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: M ? 0 : 0.15,
                        ease: [0.55, 0, 1, 0.45]
                      }
                    },
                    transition: {
                      duration: M ? 0 : 0.4,
                      ease: [0.4, 0, 0.2, 1]
                    },
                    children: [
                      u && /* @__PURE__ */ t(
                        Ic,
                        {
                          quote: u,
                          onRemove: () => f?.(null)
                        }
                      ),
                      /* @__PURE__ */ t(Ee, { initial: !1, children: se && /* @__PURE__ */ t(
                        J.div,
                        {
                          role: "alert",
                          "aria-live": "polite",
                          className: "p-1",
                          initial: { opacity: 0, y: -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -4 },
                          transition: {
                            duration: M ? 0 : 0.2,
                            ease: "easeOut"
                          },
                          children: /* @__PURE__ */ a(
                            "div",
                            {
                              className: k(
                                "flex w-full flex-row items-center gap-2 rounded-md p-2 pr-3",
                                "bg-f1-background-critical text-f1-foreground"
                              ),
                              children: [
                                /* @__PURE__ */ t("div", { className: "h-6 w-6 flex-shrink-0", children: /* @__PURE__ */ t(Hn, { type: "critical", size: "sm" }) }),
                                /* @__PURE__ */ t("p", { className: "font-medium text-f1-foreground-critical", children: se })
                              ]
                            }
                          )
                        },
                        "transient-error"
                      ) }),
                      /* @__PURE__ */ t(
                        Tc,
                        {
                          attachedFiles: de,
                          isUploading: Ne,
                          onRemove: T,
                          removeLabel: L.ai.removeFile
                        }
                      ),
                      /* @__PURE__ */ t(
                        jc,
                        {
                          textareaRef: P,
                          highlightRef: oe,
                          inputValue: A,
                          onInputChange: (K, we) => {
                            F(K), $(we);
                          },
                          onKeyDown: Ze,
                          onCursorUpdate: _e,
                          onScroll: Mr,
                          highlightSegments: Rr,
                          hasOverlay: Fr,
                          multiplePlaceholders: Er,
                          placeholders: v1,
                          resolvedDefaultPlaceholder: Ke,
                          inProgress: o
                        }
                      ),
                      /* @__PURE__ */ t(
                        Sc,
                        {
                          onUploadFiles: fe,
                          isAtMaxFiles: b,
                          maxFiles: R,
                          acceptValue: me,
                          fileInputRef: ne,
                          handleFileSelect: D,
                          inProgress: o,
                          hasDataToSend: De,
                          isPreSending: U || z,
                          canRecord: qe,
                          recordingStatus: ve.status,
                          recordingStream: ve.stream,
                          onStartRecording: Xe,
                          onStopRecording: ve.stop,
                          onCancelRecording: Ye
                        }
                      )
                    ]
                  },
                  "input"
                ) })
              ]
            }
          ) })
        ] }),
        Nr && /* @__PURE__ */ t("div", { className: "w-full max-w-content pt-2", children: /* @__PURE__ */ t(Zc, { cards: E }) }),
        x && N && I && /* @__PURE__ */ t("div", { className: "w-full py-4 mx-auto flex max-w-content justify-center", children: x }),
        /* @__PURE__ */ t(Ee, { mode: "wait", initial: !1, children: W ? /* @__PURE__ */ a(
          J.div,
          {
            className: "flex w-full max-w-content flex-row flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-f1-foreground-tertiary",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.15, ease: "easeOut" },
            children: [
              /* @__PURE__ */ a("span", { children: [
                /* @__PURE__ */ t("kbd", { className: "font-sans", children: "↑↓" }),
                " ",
                L.ai.clarifyingQuestion.navHint.navigate
              ] }),
              /* @__PURE__ */ a("span", { children: [
                /* @__PURE__ */ t("kbd", { className: "font-sans", children: "Enter" }),
                " ",
                L.ai.clarifyingQuestion.navHint.select
              ] }),
              /* @__PURE__ */ a("span", { children: [
                /* @__PURE__ */ t("kbd", { className: "font-sans", children: "Esc" }),
                " ",
                L.ai.clarifyingQuestion.navHint.cancel
              ] })
            ]
          },
          "clarifying-nav-hint"
        ) : v?.text && !x1 && /* @__PURE__ */ a(
          J.div,
          {
            className: "flex w-full max-w-content flex-row items-center justify-center gap-1",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: {
              duration: M ? 0 : 0.3,
              ease: "easeOut"
            },
            children: [
              v.onClick ? /* @__PURE__ */ t(
                "button",
                {
                  type: "button",
                  onClick: v.onClick,
                  className: k(
                    "group min-w-0 cursor-pointer bg-transparent p-0 text-inherit",
                    "transition-transform duration-700 ease-out",
                    "hover:scale-[1.02] focus-visible:scale-[1.02]",
                    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
                  ),
                  children: /* @__PURE__ */ t(
                    ie,
                    {
                      className: k(
                        "text-sm font-medium text-f1-foreground-tertiary transition-colors duration-700 ease-out",
                        "group-hover:bg-gradient-to-r group-hover:from-[#E55619] group-hover:to-[#A1ADE5] group-hover:bg-clip-text group-hover:text-transparent",
                        "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#E55619] group-focus-visible:to-[#A1ADE5] group-focus-visible:bg-clip-text group-focus-visible:text-transparent"
                      ),
                      children: v.text
                    }
                  )
                }
              ) : /* @__PURE__ */ t(ie, { className: "text-sm font-medium text-f1-foreground-tertiary", children: v.text }),
              v.link && v.linkText && /* @__PURE__ */ t(
                An,
                {
                  href: v.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
                  children: v.linkText
                }
              )
            ]
          },
          "chat-disclaimer"
        ) })
      ]
    }
  );
};
function o2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "pre",
    {
      ...r,
      className: k(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        r.className
      ),
      children: e
    }
  );
}
function n2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "code",
    {
      ...r,
      className: k(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        r.className
      ),
      children: e
    }
  );
}
function s2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "blockquote",
    {
      ...r,
      className: k(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        r.className
      ),
      children: e
    }
  );
}
function i2({ ...e }) {
  return /* @__PURE__ */ t(
    "hr",
    {
      ...e,
      className: k("my-3 border-0 border-t border-f1-border", e.className)
    }
  );
}
function a2({
  src: e,
  alt: r,
  ...o
}) {
  const n = () => {
    if (e) {
      const s = document.createElement("a");
      s.href = e, s.download = r || "image", document.body.appendChild(s), s.click(), document.body.removeChild(s);
    }
  };
  return /* @__PURE__ */ a("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ t(
      "img",
      {
        ...o,
        src: e,
        alt: r,
        className: k("max-w-full rounded-md", o.className)
      }
    ),
    /* @__PURE__ */ t("div", { className: "absolute right-2 top-2 rounded", children: /* @__PURE__ */ t(
      Ce,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: Me,
        onClick: n
      }
    ) })
  ] });
}
function c2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t($n, { ...r, variant: "link", href: r.href, children: e });
}
function l2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "ul",
    {
      ...r,
      className: k(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        r.className
      ),
      children: e
    }
  );
}
function d2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "ol",
    {
      ...r,
      className: k(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        r.className
      ),
      children: e
    }
  );
}
function f2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t("li", { ...r, className: k("mb-2", r.className), children: e });
}
async function u2(e, r, o) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(e, { sheet: "Data" });
  n.writeFile(s, `${o}.${r}`);
}
function h2({
  children: e,
  title: r,
  ...o
}) {
  const n = G(), s = j(null), i = _(
    (l) => {
      if (!s.current) return;
      const d = r?.replace(/\s+/g, "_").toLowerCase() || "table";
      u2(s.current, l, d);
    },
    [r]
  );
  return /* @__PURE__ */ a("div", { className: "group/table relative flex flex-col gap-2 rounded-md border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ a("div", { className: "flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-3 py-2", children: [
      /* @__PURE__ */ t(
        ie,
        {
          tag: "h2",
          className: "text-base font-medium capitalize text-f1-foreground",
          children: r ?? n.ai.reportCard.tableLabel
        }
      ),
      /* @__PURE__ */ t(
        h1,
        {
          icon: Me,
          size: "md",
          items: [
            {
              label: n.t("ai.dataDownload.download", {
                format: "Excel"
              }),
              icon: Me,
              onClick: () => i("xlsx")
            },
            {
              label: n.t("ai.dataDownload.download", {
                format: "CSV"
              }),
              icon: Me,
              onClick: () => i("csv")
            }
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "scrollbar-macos overflow-x-auto", children: /* @__PURE__ */ t(
      "table",
      {
        ref: s,
        ...o,
        className: k(
          "w-full border-separate border-spacing-0 [&_tbody_tr:last-child_td]:border-b-0",
          o.className
        ),
        children: e
      }
    ) })
  ] });
}
function g2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "th",
    {
      ...r,
      className: k(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        r.className
      ),
      children: e
    }
  );
}
function p2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "td",
    {
      ...r,
      className: k(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        r.className
      ),
      children: e
    }
  );
}
function C2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t("p", { ...r, className: k("text-base font-normal", r.className), children: e });
}
function m2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "h1",
    {
      ...r,
      className: k(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        r.className
      ),
      children: e
    }
  );
}
function v2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "h2",
    {
      ...r,
      className: k(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        r.className
      ),
      children: e
    }
  );
}
function w2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    "h3",
    {
      ...r,
      className: k(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        r.className
      ),
      children: e
    }
  );
}
function x2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t("strong", { ...r, className: k("font-semibold", r.className), children: e });
}
function k2({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ t("em", { ...r, className: k("italic", r.className), children: e });
}
function Te({
  id: e,
  trigger: r,
  resolver: o,
  mapToCard: n,
  fallbackCard: s
}) {
  const i = j(/* @__PURE__ */ new Map()), [l, d] = B(
    () => i.current.get(e) ?? null
  ), [c, u] = B(!1), [f, p] = B(!1), C = j(!0);
  q(() => () => {
    C.current = !1;
  }, []);
  const h = _(() => {
    if (l || c) return;
    const v = i.current.get(e);
    if (v) {
      d(v);
      return;
    }
    u(!0), p(!1), o(e).then((x) => {
      i.current.set(e, x), C.current && d(x);
    }).catch(() => {
      C.current && p(!0);
    }).finally(() => {
      C.current && u(!1);
    });
  }, [o, e, l, c]), m = f || !l ? s : n(l);
  return /* @__PURE__ */ a(
    Bn,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (v) => {
        v && h();
      },
      children: [
        /* @__PURE__ */ t(In, { asChild: !0, children: r }),
        /* @__PURE__ */ t(
          Pn,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: c ? /* @__PURE__ */ t(y1.Skeleton, {}) : /* @__PURE__ */ t(y1, { ...m })
          }
        )
      ]
    }
  );
}
const er = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: e
    }
  )
);
er.displayName = "CandidateTrigger";
function L2({
  id: e,
  label: r
}) {
  const { entityRefs: o } = be(), n = o?.resolvers?.candidate, s = G(), i = o?.urls?.candidate?.(e), l = Q(
    () => (c) => {
      const u = [];
      return c.source && u.push({
        title: s.t("ai.entityRef.candidate.source"),
        value: c.source
      }), c.appliedAt && u.push({
        title: s.t("ai.entityRef.candidate.applied"),
        value: c.appliedAt
      }), {
        avatar: {
          type: "person",
          firstName: c.firstName,
          lastName: c.lastName,
          src: c.avatarUrl
        },
        title: `${c.firstName} ${c.lastName}`,
        ...u.length > 0 && {
          children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: u.map((f) => /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: f.title }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: f.value })
          ] }, f.title)) })
        },
        ...i && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: i
          }
        }
      };
    },
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(er, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
const tr = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: e
    }
  )
);
tr.displayName = "ExpenseTrigger";
function b2({ id: e, label: r }) {
  const { entityRefs: o } = be(), n = o?.resolvers?.expense, s = G(), i = o?.urls?.expense?.(e), l = Q(
    () => (c) => ({
      avatar: {
        type: "icon",
        icon: At
      },
      title: c.description || `Expense #${c.id}`,
      description: [c.amount, c.status].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(tr, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
const rr = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: e
    }
  )
);
rr.displayName = "JobPostingTrigger";
function y2({
  id: e,
  label: r
}) {
  const { entityRefs: o } = be(), n = o?.resolvers?.jobPosting, s = G(), i = o?.urls?.jobPosting?.(e), l = Q(
    () => (c) => ({
      title: c.title,
      description: [c.status, c.location].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(rr, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
function M2({ rows: e }) {
  return e.length === 0 ? null : /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: e.map((r, o) => /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
    r.label && /* @__PURE__ */ t("p", { className: "text-f1-foreground-secondary", children: r.label }),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: r.value })
  ] }, r.label ?? o)) });
}
const or = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: e
    }
  )
);
or.displayName = "RequisitionTrigger";
function E2({
  id: e,
  label: r
}) {
  const { entityRefs: o } = be(), n = o?.resolvers?.requisition, s = G(), i = o?.urls?.requisition?.(e), l = Q(
    () => (c) => {
      const u = c.lineManager ? `${c.lineManager.firstName} ${c.lineManager.lastName}` : void 0, p = [
        c.status ? {
          label: s.t("ai.entityRef.requisition.status"),
          value: /* @__PURE__ */ t("div", { className: "flex items-center pt-1", children: /* @__PURE__ */ t(
            jn,
            {
              text: c.status,
              variant: c.statusVariant ?? "neutral"
            }
          ) })
        } : void 0,
        c.lineManager ? {
          label: s.t("ai.entityRef.requisition.lineManager"),
          value: /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5 pt-1", children: [
            /* @__PURE__ */ t(
              bt,
              {
                firstName: c.lineManager.firstName,
                lastName: c.lineManager.lastName,
                src: c.lineManager.avatarUrl,
                size: "xs"
              }
            ),
            /* @__PURE__ */ t("span", { children: u })
          ] })
        } : void 0,
        c.reason ? {
          label: s.t("ai.entityRef.requisition.reason"),
          value: c.reason
        } : void 0
      ].filter(
        (C) => C !== void 0
      );
      return {
        title: c.title,
        ...c.location && { description: c.location },
        ...p.length > 0 && {
          children: /* @__PURE__ */ t(M2, { rows: p })
        },
        ...i && {
          secondaryActions: {
            label: s.t("ai.view"),
            href: i
          }
        }
      };
    },
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(or, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
const nr = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ a(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: [
        "@",
        e
      ]
    }
  )
);
nr.displayName = "PersonTrigger";
function R2({ id: e, label: r }) {
  const { entityRefs: o } = be(), n = o?.resolvers?.person, s = G(), i = o?.urls?.person?.(e), l = Q(
    () => (c) => ({
      avatar: {
        type: "person",
        firstName: c.firstName,
        lastName: c.lastName,
        src: c.avatarUrl
      },
      title: `${c.firstName} ${c.lastName}`,
      description: c.jobTitle,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(nr, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
const sr = g(
  ({ label: e, ...r }, o) => /* @__PURE__ */ t(
    "button",
    {
      ref: o,
      type: "button",
      className: k(
        "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
        ge()
      ),
      ...r,
      children: e
    }
  )
);
sr.displayName = "VacancyTrigger";
function F2({ id: e, label: r }) {
  const { entityRefs: o } = be(), n = o?.resolvers?.vacancy, s = G(), i = o?.urls?.vacancy?.(e), l = Q(
    () => (c) => ({
      title: c.name,
      description: [c.status, c.vacancyType].filter(Boolean).join(" · "),
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [s, i]
  ), d = Q(
    () => ({
      title: r,
      ...i && {
        secondaryActions: {
          label: s.t("ai.view"),
          href: i
        }
      }
    }),
    [r, s, i]
  );
  return n ? /* @__PURE__ */ t(
    Te,
    {
      id: e,
      trigger: /* @__PURE__ */ t(sr, { label: r }),
      resolver: n,
      mapToCard: l,
      fallbackCard: d
    }
  ) : /* @__PURE__ */ t("span", { children: r });
}
const N2 = {
  person: R2,
  candidate: L2,
  expense: b2,
  "job-posting": y2,
  requisition: E2,
  vacancy: F2
};
function V2(e) {
  return N2[e];
}
function o1(e) {
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(o1).join("") : e && typeof e == "object" && "props" in e ? o1(e.props.children) : "";
}
function S2({
  type: e,
  id: r,
  children: o
}) {
  if (!r || !e)
    return /* @__PURE__ */ t("span", { children: o });
  const n = o1(o), s = V2(e);
  return s ? /* @__PURE__ */ t(s, { id: r, label: n }) : /* @__PURE__ */ t("span", { children: o });
}
const A4 = {
  p: C2,
  h1: m2,
  h2: v2,
  h3: w2,
  a: c2,
  strong: x2,
  em: k2,
  li: f2,
  pre: o2,
  code: n2,
  blockquote: s2,
  hr: i2,
  ul: l2,
  ol: d2,
  table: h2,
  th: g2,
  td: p2,
  img: a2,
  "entity-ref": S2
};
function ir({
  avatar: e,
  title: r,
  description: o,
  isActive: n = !1,
  action: s,
  children: i
}) {
  const l = G(), d = s.type === "open", c = d ? n ? s.onClose : s.onOpen : void 0;
  return /* @__PURE__ */ a(
    "div",
    {
      className: k(
        "flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2",
        d && "cursor-pointer",
        n ? "border-f1-border-hover" : "border-f1-border-secondary"
      ),
      onClick: c,
      children: [
        /* @__PURE__ */ a("div", { className: "flex w-full min-w-0 flex-row items-center gap-3", children: [
          e?.type === "module" && /* @__PURE__ */ t(yt, { module: e.module, size: "md" }),
          e?.type === "file" && /* @__PURE__ */ t(Dn, { file: e.file, size: "lg" }),
          /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ t(ie, { className: "text-lg font-semibold text-f1-foreground", children: r }),
            o && /* @__PURE__ */ t(ie, { className: "text-base text-f1-foreground-secondary", children: o })
          ] }),
          s.type === "open" && s.showButton !== !1 && /* @__PURE__ */ t(
            Ce,
            {
              variant: "outline",
              size: "md",
              label: n ? l.actions.close : l.ai.reportCard.openButton,
              onClick: n ? s.onClose : s.onOpen
            }
          ),
          s.type === "custom" && /* @__PURE__ */ t(
            Ce,
            {
              variant: "outline",
              size: "md",
              icon: s.icon,
              label: s.label,
              hideLabel: s.hideLabel,
              onClick: s.onClick
            }
          )
        ] }),
        i
      ]
    }
  );
}
ir.displayName = "F0CanvasCard";
const C1 = Ge(null);
function $4({
  children: e
}) {
  const [r, o] = B(0), n = j([]), s = _(
    (l) => {
      const d = n.current, c = d.findIndex(
        (f) => f.formName === l.formName && f.customFieldName === l.customFieldName
      ), u = l;
      c >= 0 ? d[c] = u : d.push(u), o((f) => f + 1);
    },
    []
  ), i = Q(
    () => ({
      formatters: [...n.current],
      setFormCardValueFormatter: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [s, r]
  );
  return /* @__PURE__ */ t(C1.Provider, { value: i, children: e });
}
function T2(e) {
  const o = Be(C1)?.formatters;
  return Q(() => !o || o.length === 0 ? null : (n, s, i) => {
    let l, d = -1;
    for (const c of o) {
      const u = c.formName === void 0 || c.formName === e, f = c.customFieldName === void 0 || c.customFieldName === i.customFieldName;
      if (!u || !f) continue;
      let p = 0;
      c.formName !== void 0 && (p += 2), c.customFieldName !== void 0 && (p += 1), p > d && (d = p, l = c);
    }
    if (l)
      return l.format(s, { key: n, ...i });
  }, [o, e]);
}
function B4() {
  const e = Be(C1);
  if (!e)
    throw new Error(
      "useSetFormCardValueFormatter must be used within a FormCardValueFormatterProvider"
    );
  return e.setFormCardValueFormatter;
}
const F1 = 7, H2 = 625, N1 = /* @__PURE__ */ new Set();
function A2(e) {
  return typeof DOMParser < "u" ? new DOMParser().parseFromString(e, "text/html").body.textContent?.replace(/\s+/g, " ").trim() ?? "" : e.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}
function $2(e) {
  return e && e.charAt(0).toUpperCase() + e.slice(1);
}
function B2(e) {
  const { days: r, hours: o, minutes: n, seconds: s } = _n(e), i = [];
  return r > 0 && i.push(`${r}d`), o > 0 && i.push(`${o}h`), n > 0 && i.push(`${n}m`), (s > 0 || i.length === 0) && i.push(`${s}s`), i.join(" ");
}
function V1(e) {
  if (e instanceof Date) return !0;
  if (typeof e != "string") return !1;
  const r = new Date(e);
  return !Number.isNaN(r.getTime());
}
function S1(e) {
  return (e instanceof Date ? e : new Date(e)).toLocaleDateString();
}
function T1(e) {
  return e.type === "item" ? e.text : "";
}
function ar(e, r) {
  if (e == null || e === "") return { type: "item", text: "—" };
  if (r === "duration" && typeof e == "number")
    return { type: "item", text: B2(e) };
  if (r === "richtext" && typeof e == "object" && e !== null && "value" in e) {
    const o = e.value;
    return { type: "item", text: (o ? A2(o) : "") || "—" };
  }
  if (r === "daterange" && typeof e == "object" && e !== null && "from" in e && "to" in e) {
    const { from: o, to: n } = e, s = V1(o) ? S1(o) : String(o), i = V1(n) ? S1(n) : String(n);
    return { type: "item", text: `${s} – ${i}` };
  }
  if (e instanceof Date)
    return { type: "item", text: e.toLocaleDateString() };
  if (typeof e == "boolean")
    return { type: "item", text: e ? "Yes" : "No" };
  if (Array.isArray(e))
    return { type: "item", text: e.map((n) => {
      const s = ar(n);
      return Array.isArray(s) ? s.map(T1).join(", ") : T1(s);
    }).filter(Boolean).join(", ") || "—" };
  if (typeof e == "object" && e !== null) {
    const o = e;
    return typeof o.label == "string" ? { type: "item", text: o.label } : typeof o.name == "string" ? { type: "item", text: o.name } : typeof o.text == "string" ? { type: "item", text: o.text } : { type: "item", text: JSON.stringify(e) };
  }
  return { type: "item", text: $2(String(e)) };
}
function cr({
  formName: e,
  formDescription: r,
  module: o,
  cardTitle: n,
  cardDescription: s,
  fieldDescriptions: i,
  formValues: l,
  valueFormatter: d
}) {
  const { canvasContent: c, openCanvas: u, closeCanvas: f } = be(), p = T2(e), C = d ?? p, h = j(() => {
  }), m = n ?? e, v = s ?? r ?? "", x = c?.type === "form" && c.formName === e, N = () => u({
    type: "form",
    title: m,
    description: v,
    formName: e,
    formDescription: r,
    formModule: o
  });
  h.current = N, q(() => {
    typeof window > "u" || window.innerWidth < H2 || N1.has(e) || (N1.add(e), h.current());
  }, [e]);
  const I = i && l ? Object.entries(i).map(([E, w]) => {
    const L = l[E], M = C?.(E, L, {
      fieldType: w.fieldType,
      customFieldName: w.customFieldName
    });
    if (!M && w.fieldType === "custom" && typeof L == "object" && L !== null)
      return null;
    const A = M ?? ar(L, w.fieldType), F = ["richtext", "textarea"];
    return {
      label: w.label,
      content: A,
      verticalLayout: F.includes(w.fieldType ?? "")
    };
  }).filter((E) => {
    if (!E) return !1;
    const w = Array.isArray(E.content) ? E.content[0] : E.content;
    return !(w?.type === "item" && w.text === "—");
  }) : [], H = I.slice(0, F1), S = I.length > F1;
  return /* @__PURE__ */ t(
    ir,
    {
      avatar: o ? { type: "module", module: o } : void 0,
      title: m,
      description: v,
      isActive: x,
      action: {
        type: "open",
        onOpen: N,
        onClose: f,
        showButton: x
      },
      children: H.length > 0 && !x && /* @__PURE__ */ t("div", { className: "-mx-3 flex w-full flex-col overflow-hidden pb-1", children: /* @__PURE__ */ t(
        Zn,
        {
          details: H.map((E) => ({
            title: E.label,
            content: E.content,
            ...E.verticalLayout && { verticalLayout: !0 }
          })),
          showSeeMore: S,
          onClickSeeMore: N,
          tableView: !0
        }
      ) })
    }
  );
}
cr.displayName = "FormCard";
function I2() {
  const e = On(), r = e?.activeForm;
  if (!r) return null;
  const o = r.cardTitle, n = r.cardDescription, s = (e?.getFillVersion(r.formName) ?? 0) > 0;
  return !o || !n || !s ? null : /* @__PURE__ */ t("div", { className: "mt-2 w-full", children: /* @__PURE__ */ t(
    cr,
    {
      formName: r.formName,
      formDescription: r.description,
      module: r.module,
      cardTitle: o,
      cardDescription: n,
      fieldDescriptions: r.fieldDescriptions,
      formValues: r.formValues
    }
  ) });
}
const P2 = 2;
function j2(e, r) {
  if (!e.intersectsNode(r)) return null;
  const o = document.createRange();
  o.selectNodeContents(r);
  const n = e.cloneRange();
  n.compareBoundaryPoints(Range.START_TO_START, o) < 0 && n.setStart(o.startContainer, o.startOffset), n.compareBoundaryPoints(Range.END_TO_END, o) > 0 && n.setEnd(o.endContainer, o.endOffset);
  const s = n.toString().trim();
  if (s.length < P2) return null;
  const i = n.getBoundingClientRect();
  return { rect: i.width > 0 || i.height > 0 ? i : r.getBoundingClientRect(), text: s };
}
function lr({
  containerRef: e,
  enabled: r = !0
}) {
  const [o, n] = B(null), s = _(() => n(null), []);
  return q(() => {
    if (!r || typeof window > "u") return;
    const i = e.current;
    if (!i) return;
    const l = () => {
      const u = window.getSelection();
      if (!u || u.isCollapsed || u.rangeCount === 0) {
        n(null);
        return;
      }
      n(j2(u.getRangeAt(0), i));
    }, d = () => {
      window.setTimeout(l, 0);
    }, c = () => {
      const u = window.getSelection();
      (!u || u.isCollapsed || u.rangeCount === 0) && n(null);
    };
    return document.addEventListener("mouseup", d), document.addEventListener("keyup", d), document.addEventListener("selectionchange", c), () => {
      document.removeEventListener("mouseup", d), document.removeEventListener("keyup", d), document.removeEventListener("selectionchange", c);
    };
  }, [e, r]), { anchor: o, clear: s };
}
const H1 = 8, Ae = 8;
function dr({ anchor: e, onReply: r }) {
  const o = G(), n = j(null), [s, i] = B(
    null
  );
  if (rt(() => {
    if (!e) {
      i(null);
      return;
    }
    const d = n.current;
    if (!d) return;
    const c = d.offsetWidth, u = d.offsetHeight, f = window.innerWidth, p = window.innerHeight;
    let C = e.rect.top - u - H1;
    C < Ae && (C = e.rect.bottom + H1), C = Math.min(
      Math.max(C, Ae),
      p - u - Ae
    );
    const h = e.rect.left + e.rect.width / 2 - c / 2, m = Math.min(
      Math.max(h, Ae),
      f - c - Ae
    );
    i({ top: C, left: m });
  }, [e]), typeof document > "u" || !e) return null;
  const l = o.ai.reply;
  return Tt(
    /* @__PURE__ */ t(
      "div",
      {
        style: {
          position: "fixed",
          top: s?.top ?? -9999,
          left: s?.left ?? -9999,
          visibility: s ? "visible" : "hidden"
        },
        className: k(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ t(
          ce,
          {
            ref: n,
            type: "button",
            variant: "ghost",
            label: l,
            icon: vt,
            onClick: () => {
              r(e.text);
            }
          }
        )
      }
    ),
    document.body
  );
}
const fr = Ge(void 0), I4 = () => Be(fr), D2 = (e) => /* @__PURE__ */ t(Mt, { content: e, format: "markdown" }), Z2 = ({
  isGenerating: e,
  isLoading: r,
  message: o,
  renderToolCall: n,
  onReplyQuote: s,
  onRendered: i,
  renderMarkdown: l
}) => {
  const d = typeof o?.content == "string" ? o.content : "", c = (o && n?.(o)) ?? o?.generativeUI?.() ?? null, u = o?.toolCalls?.[0]?.id, f = !d && !c, p = j(null), { anchor: C, clear: h } = lr({
    containerRef: p,
    enabled: !!(o?.id && d)
  });
  return q(() => {
    o?.id && !r && !e && i?.(o);
  }, [o, r, e, i]), !r && !e && f ? null : /* @__PURE__ */ t(fr.Provider, { value: u, children: /* @__PURE__ */ a("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    o && d && /* @__PURE__ */ t(
      "div",
      {
        ref: p,
        className: "w-full max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: (l ?? D2)(d)
      }
    ),
    !!c && /* @__PURE__ */ t("div", { className: "w-full", children: c }),
    /* @__PURE__ */ t(
      dr,
      {
        anchor: C,
        onReply: (m) => {
          s?.(m), h(), window.getSelection()?.removeAllRanges();
        }
      }
    )
  ] }) });
}, _2 = ({
  onClose: e,
  onSubmit: r,
  reactionType: o,
  message: n
}) => {
  const [s, i] = B(""), l = G(), { title: d, label: c, placeholder: u } = o === "like" ? l.ai.feedbackModal.positive : l.ai.feedbackModal.negative, f = _(() => {
    r(n, s);
  }, [s, n, r]), p = () => {
    e(n);
  };
  return q(() => {
    const C = (h) => {
      h.key === "Enter" && (h.preventDefault(), f());
    };
    return document.addEventListener("keydown", C), () => {
      document.removeEventListener("keydown", C);
    };
  }, [f]), /* @__PURE__ */ t(
    Un,
    {
      position: "center",
      isOpen: !0,
      onClose: p,
      width: "md",
      title: d,
      container: null,
      primaryAction: {
        label: l.actions.send,
        onClick: f
      },
      secondaryAction: {
        label: l.actions.cancel,
        onClick: p
      },
      children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ t(
        zn,
        {
          autoFocus: !0,
          label: c,
          placeholder: u,
          value: s,
          onChange: (C) => i(C.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, ur = Ge(null), O2 = ({ children: e }) => {
  const [r, o] = B(null), n = r ? {
    isOpen: !0,
    currentReaction: r.action,
    currentMessage: r.message,
    open: (s, i) => o({ action: s, message: i }),
    close: () => o(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (s, i) => o({ action: s, message: i }),
    close: () => o(null)
  };
  return /* @__PURE__ */ t(ur.Provider, { value: n, children: e });
}, hr = () => {
  const e = Be(ur);
  if (e === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return e;
};
function U2(e) {
  const r = hr();
  return { modal: r, handleSubmit: (s, i) => {
    (r.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(s, { threadId: e.threadId, feedback: i }), r.close();
  }, handleClose: (s) => {
    (r.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(s, { threadId: e.threadId, feedback: "" }), r.close();
  } };
}
const z2 = ({
  content: e,
  targetMessage: r,
  onCopy: o
}) => {
  const n = G(), { open: s } = hr(), [i, l] = B(null);
  return /* @__PURE__ */ a("div", { className: "flex", children: [
    /* @__PURE__ */ t(
      Gn,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: e,
        onCopy: (d) => {
          d.currentTarget.blur(), o?.(e);
        }
      }
    ),
    /* @__PURE__ */ t(
      $e,
      {
        onClick: (d) => {
          const c = i === "like" ? null : "like";
          c && s(c, r), l(c), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsUp,
        children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ t(
          le,
          {
            size: "md",
            icon: i === "like" ? jt : Pt,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ t(
      $e,
      {
        onClick: (d) => {
          const c = i === "dislike" ? null : "dislike";
          c && s(c, r), l(c), d.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsDown,
        children: /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ t(
          le,
          {
            size: "md",
            icon: i === "dislike" ? It : Bt,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, G2 = ({
  icon: e,
  title: r,
  children: o,
  open: n,
  defaultOpen: s = !1,
  onOpenChange: i,
  lockOpen: l = !1
}) => {
  const [d, c] = B(s), u = xe(), f = n !== void 0, p = f ? n : d;
  return /* @__PURE__ */ a(
    Et,
    {
      className: "mb-1 w-full",
      open: p,
      onOpenChange: (h) => {
        l || (f || c(h), i?.(h));
      },
      children: [
        /* @__PURE__ */ a(
          Rt,
          {
            disabled: l,
            className: k(
              "gap-1",
              l ? "flex w-full items-center text-base text-f1-foreground-secondary" : "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90"
            ),
            children: [
              /* @__PURE__ */ t("span", { className: "flex items-center justify-start h-6 w-6", children: /* @__PURE__ */ t(le, { icon: e, className: "block" }) }),
              /* @__PURE__ */ t("div", { className: "min-h-6 flex items-center", children: /* @__PURE__ */ t("span", { children: r }) }),
              !l && /* @__PURE__ */ t(le, { icon: We })
            ]
          }
        ),
        /* @__PURE__ */ t(Ft, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ t(
          J.div,
          {
            initial: !1,
            animate: {
              height: p ? "auto" : 0,
              opacity: p ? 1 : 0,
              visibility: p ? "visible" : "hidden"
            },
            transition: {
              duration: u ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: o
          }
        ) })
      ]
    }
  );
}, W2 = ({
  titles: e,
  title: r,
  inProgress: o,
  isWriting: n
}) => {
  const s = G(), [i, l] = B(!!o), d = j(o);
  q(() => {
    d.current && !o ? l(!1) : o && !i && l(!0), d.current = o;
  }, [o, i]);
  const c = o ? s.ai.thoughtsGroupTitle : r ?? s.ai.thoughtsGroupTitle, u = e.length - 1, f = (p) => !o || n ? "completed" : p === u ? "executing" : "completed";
  return /* @__PURE__ */ t(
    G2,
    {
      icon: Ht,
      title: c,
      open: i,
      onOpenChange: l,
      lockOpen: o,
      children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pb-4", children: e.map((p, C) => /* @__PURE__ */ a("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          r1,
          {
            title: p,
            status: f(C),
            inGroup: !0
          }
        ),
        C < e.length - 1 && /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, C)) })
    }
  );
};
function q2(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) {
    const r = e.filter((o) => o.type === "text").map((o) => o.text).filter((o) => typeof o == "string");
    return r[r.length - 1];
  }
}
function X2(e, r) {
  const o = Array.isArray(e) ? e.filter((n) => n.type === "binary").map((n) => ({
    url: n.url,
    filename: n.filename,
    mimetype: n.mimeType
  })).filter(
    (n) => typeof n?.filename == "string" && typeof n?.mimetype == "string" && typeof n?.url == "string"
  ) : [];
  return o.length > 0 ? o : (r?.uploadedFiles ?? []).filter(
    (n) => typeof n?.filename == "string" && typeof n?.mimetype == "string" && typeof n?.url == "string"
  );
}
const gr = (e) => /* @__PURE__ */ t(Mt, { content: e, format: "markdown" }), Y2 = ({
  text: e,
  renderMarkdown: r
}) => /* @__PURE__ */ a("div", { className: "flex max-w-[90%] items-start gap-2 self-end pb-1 pr-2 text-f1-foreground-tertiary", children: [
  /* @__PURE__ */ t("div", { className: "flex h-5 items-center", children: /* @__PURE__ */ t(le, { icon: a1 }) }),
  /* @__PURE__ */ t("div", { className: "min-w-0 whitespace-pre-wrap text-base leading-5 [&>div]:flex [&>div]:flex-col [&>div]:gap-1 [&_p]:m-0", children: (r ?? gr)(e) })
] }), K2 = ({
  message: e,
  onReplyQuote: r,
  autoScrollIntoView: o = !0,
  renderMarkdown: n
}) => {
  const s = j(null), i = j(null);
  q(() => {
    !s.current || !o || s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [o]);
  const l = e.rawData, d = X2(
    e?.content,
    l
  ), c = (q2(e?.content) ?? "").trim(), u = e?.replyQuote ?? null, f = c.length > 0, { anchor: p, clear: C } = lr({
    containerRef: i,
    enabled: f
  });
  return /* @__PURE__ */ a(
    "div",
    {
      ref: s,
      className: "my-4 flex w-full flex-col items-end gap-2 first:mt-0 last:mb-0",
      children: [
        u && /* @__PURE__ */ t(Y2, { text: u, renderMarkdown: n }),
        d.length > 0 && /* @__PURE__ */ t("div", { className: "flex max-w-[90%] flex-wrap justify-end gap-1.5", children: d.map((h, m) => /* @__PURE__ */ t(
          kt,
          {
            file: { name: h.filename, type: h.mimetype },
            size: "lg"
          },
          `${h.filename}-${m}`
        )) }),
        f && /* @__PURE__ */ t(
          "div",
          {
            ref: i,
            className: "w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-xl bg-f1-background-tertiary px-4 py-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
            children: (n ?? gr)(c)
          }
        ),
        /* @__PURE__ */ t(
          dr,
          {
            anchor: p,
            onReply: (h) => {
              r?.(h), C(), window.getSelection()?.removeAllRanges();
            }
          }
        )
      ]
    }
  );
}, Q2 = 35, J2 = 22, el = 400, tl = 2500, rl = 220, ol = ({
  messages: e,
  onClick: r,
  fullscreen: o = !1
}) => {
  const [n, s] = B(0), [i, l] = B(0), [d, c] = B("starting"), u = e[n] ?? "";
  q(() => {
    e.length > 0 && n >= e.length && (s(0), l(0), c("starting"));
  }, [e.length, n]), q(() => {
    let C;
    if (d === "starting")
      C = setTimeout(() => c("writing"), el);
    else if (d === "writing")
      i < u.length ? C = setTimeout(() => l((h) => h + 1), Q2) : c("holding");
    else if (d === "holding") {
      if (e.length <= 1) return;
      C = setTimeout(() => c("erasing"), tl);
    } else d === "erasing" && (i > 0 ? C = setTimeout(() => l((h) => h - 1), J2) : C = setTimeout(() => {
      s((h) => (h + 1) % e.length), c("starting");
    }, rl));
    return () => {
      C && clearTimeout(C);
    };
  }, [d, i, u.length, e.length]);
  const f = !!r, p = f ? (C) => {
    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), r?.());
  } : void 0;
  return /* @__PURE__ */ t(
    "div",
    {
      className: k(
        "flex w-full flex-1 justify-center px-4",
        o ? "items-end pb-24" : "items-center"
      ),
      children: /* @__PURE__ */ t(
        "p",
        {
          role: f ? "button" : void 0,
          tabIndex: f ? 0 : void 0,
          onClick: r,
          onKeyDown: p,
          className: k(
            "bg-gradient-to-r from-[#E55619] via-[#E51943] to-[#A1ADE5] bg-clip-text text-center text-2xl font-semibold leading-[28px] text-transparent",
            f && k(
              "cursor-pointer transition-transform duration-200",
              "hover:scale-[1.02] focus-visible:scale-[1.02]",
              "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus-visible:scale-100"
            )
          ),
          style: { minHeight: 28 },
          "aria-label": u,
          children: u.slice(0, i)
        },
        n
      )
    }
  );
};
function nl({
  viewportRef: e,
  contentRef: r,
  endRef: o,
  lastTurnRef: n,
  turnsCount: s,
  freezeTurnMinHeight: i = !1
}) {
  const [l, d] = B(0), [c, u] = B(!1), f = j(s), p = j(i);
  p.current = i;
  const C = _(
    (m = "smooth") => {
      o.current?.scrollIntoView({ behavior: m });
    },
    [o]
  );
  q(() => {
    const m = e.current, v = r.current;
    if (!m || !v) return;
    const x = new ResizeObserver(() => {
      if (p.current) return;
      const N = parseFloat(getComputedStyle(v).paddingTop) + parseFloat(getComputedStyle(v).paddingBottom) + 1;
      d(m.clientHeight - N);
    });
    return x.observe(m), x.observe(v), () => x.disconnect();
  }, [e, r]);
  const h = _(() => {
    const m = e.current;
    if (!m) return;
    const { scrollTop: v, scrollHeight: x, clientHeight: N } = m, I = x - v - N;
    u(I > N);
  }, [e]);
  return q(() => {
    const m = e.current;
    if (m)
      return m.addEventListener("scroll", h, { passive: !0 }), () => m.removeEventListener("scroll", h);
  }, [h, e]), q(() => {
    s > f.current && requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const m = e.current, v = n.current;
        if (!m || !v) return;
        const x = m.getBoundingClientRect(), N = v.getBoundingClientRect(), I = m.scrollTop + (N.top - x.top);
        m.scrollTo({ top: I, behavior: "smooth" });
      });
    }), s === 0 && u(!1), f.current = s;
  }, [s, n, e]), { showScrollBtn: c, turnMinHeight: l, scrollToBottom: C };
}
const sl = {
  threadId: "",
  onThumbsUp: () => {
  },
  onThumbsDown: () => {
  }
}, P4 = (e) => /* @__PURE__ */ t(O2, { children: /* @__PURE__ */ t(il, { ...e }) }), il = ({
  turns: e,
  isLoadingThread: r = !1,
  interrupt: o,
  initialMessage: n,
  onWelcomeClick: s,
  renderToolCall: i,
  onReplyQuote: l,
  onAssistantMessageRendered: d,
  autoScrollUserIntoView: c = !0,
  renderMarkdown: u,
  feedback: f,
  freezeLayout: p = !1,
  noShadows: C = !1,
  fullscreen: h = !1,
  children: m,
  AssistantMessage: v,
  UserMessage: x,
  onRegenerate: N,
  onCopy: I
}) => {
  const { modal: H, handleSubmit: S, handleClose: E } = U2(
    f ?? sl
  ), w = G(), L = v ?? Z2, M = x ?? K2, A = Q(() => {
    const P = n ?? w.ai.defaultInitialMessage;
    return (Array.isArray(P) ? P : [P]).filter((W) => typeof W == "string" && W.length > 0);
  }, [n, w.ai.defaultInitialMessage]), F = !r && e.length === 0 && A.length > 0, V = j(null), $ = j(null), U = j(null), O = j(null), z = j(null), { showScrollBtn: te, turnMinHeight: re, scrollToBottom: Y } = nl({
    viewportRef: V,
    contentRef: $,
    endRef: U,
    lastTurnRef: z,
    turnsCount: e.length,
    freezeTurnMinHeight: p
  }), X = (P, oe) => {
    const W = oe === e.length - 1, ae = {
      renderToolCall: i,
      onReplyQuote: l,
      onRendered: d,
      autoScrollIntoView: c,
      renderMarkdown: u
    }, ke = (ne, fe) => {
      const me = {
        message: ne,
        inProgress: P.isInProgress,
        index: fe,
        isCurrentMessage: !1,
        AssistantMessage: L,
        UserMessage: M,
        onRegenerate: N,
        onCopy: I,
        rawData: ne.rawData || {},
        ...ae
      };
      return /* @__PURE__ */ t(
        M,
        {
          ...me
        },
        `${oe}-u-${fe}`
      );
    }, de = (ne, fe) => {
      const me = W && fe === P.assistantMessages.length - 1, b = P.userMessages.length + fe, R = {
        message: ne,
        inProgress: P.isInProgress,
        index: b,
        isCurrentMessage: me,
        AssistantMessage: L,
        UserMessage: M,
        onRegenerate: N,
        onCopy: I,
        rawData: ne.rawData || {},
        ...ae
      };
      return /* @__PURE__ */ t(
        L,
        {
          ...R,
          isGenerating: P.isInProgress && me,
          isLoading: P.isInProgress && me && !ne.content
        },
        `${oe}-a-${fe}`
      );
    };
    return /* @__PURE__ */ a(
      "div",
      {
        ref: W ? z : void 0,
        className: k(
          "flex flex-col items-start justify-start gap-2 px-1",
          W && "pb-5"
        ),
        style: {
          minHeight: W && re || void 0
        },
        children: [
          P.userMessages.map(
            (ne, fe) => ke(ne, fe)
          ),
          P.thinking && P.thinking.titles.length > 0 && /* @__PURE__ */ t(
            W2,
            {
              titles: P.thinking.titles,
              title: w.ai.thoughtsGroupTitle,
              inProgress: P.thinking.inProgress,
              isWriting: P.thinking.isWriting
            }
          ),
          P.assistantMessages.map(
            (ne, fe) => de(ne, fe)
          ),
          P.endIndicator === "thinking" && /* @__PURE__ */ t(r1, { title: w.ai.thinking, status: "executing" }),
          P.endIndicator === "activity" && /* @__PURE__ */ t(r1, { status: "writing" }),
          P.feedback && /* @__PURE__ */ t(
            z2,
            {
              content: P.feedback.content,
              targetMessage: P.feedback.targetMessage,
              onCopy: I
            }
          ),
          W && /* @__PURE__ */ t(I2, {})
        ]
      },
      `turn-${oe}`
    );
  };
  return /* @__PURE__ */ a(Re, { children: [
    /* @__PURE__ */ a("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ t(
        "div",
        {
          ref: V,
          className: k(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ a(
            "div",
            {
              ref: $,
              className: k("flex h-full flex-col items-center p-4"),
              children: [
                /* @__PURE__ */ a(
                  "div",
                  {
                    className: k(
                      F ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-content"
                    ),
                    children: [
                      r && /* @__PURE__ */ t(al, {}),
                      F && /* @__PURE__ */ t(
                        ol,
                        {
                          messages: A,
                          onClick: s,
                          fullscreen: h
                        }
                      ),
                      !r && e.map((P, oe) => X(P, oe)),
                      o
                    ]
                  }
                ),
                /* @__PURE__ */ t("div", { ref: O, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ t("footer", { className: "copilotKitMessagesFooter", ref: U, children: m }),
                /* @__PURE__ */ t(Ee, { children: te && /* @__PURE__ */ t(
                  J.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ t("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ t(
                      ce,
                      {
                        onClick: () => Y(),
                        label: w.ai.scrollToBottom,
                        variant: "neutral",
                        icon: st,
                        hideLabel: !0
                      }
                    ) })
                  }
                ) })
              ]
            }
          )
        }
      ),
      !C && !F && /* @__PURE__ */ a(Re, { children: [
        /* @__PURE__ */ t(M1, { position: "top" }, "shadow-top"),
        /* @__PURE__ */ t(M1, { position: "bottom" }, "shadow-bottom")
      ] })
    ] }),
    H.isOpen && /* @__PURE__ */ t(
      _2,
      {
        onSubmit: S,
        onClose: E,
        reactionType: H.currentReaction,
        message: H.currentMessage
      }
    )
  ] });
}, al = () => /* @__PURE__ */ t("div", { className: "flex h-full w-full max-w-content flex-col gap-6", children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ t("div", { className: "flex justify-end", children: /* @__PURE__ */ t(he, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ t(he, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ t(he, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ t(he, { className: "h-5 w-4/5 rounded-md" })
] }) }), j4 = {
  ai: gs.ai
}, pr = Ge(null);
function D4({
  children: e,
  translations: r
}) {
  return /* @__PURE__ */ t(pr.Provider, { value: r, children: e });
}
function Z4() {
  const e = Be(pr);
  if (e === null)
    throw new Error(
      "useAiChatTranslations must be used within an AiChatTranslationsProvider"
    );
  return e;
}
function cl() {
  const { canvasEntities: e } = be();
  return e;
}
function _4(e) {
  const r = cl();
  if (!(!e || !r))
    return r[e];
}
const ll = ({
  canProceed: e,
  submitDisabled: r,
  label: o,
  onConfirm: n,
  onSkip: s,
  showSkip: i
}) => {
  const l = G();
  return /* @__PURE__ */ a("div", { className: "flex items-center justify-end gap-3 p-3", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center", children: i && s && /* @__PURE__ */ t(
      Ce,
      {
        variant: "outline",
        label: l.ai.clarifyingQuestion.skip,
        onClick: s,
        disabled: r
      }
    ) }),
    /* @__PURE__ */ t(
      Ce,
      {
        disabled: !e || r,
        variant: "default",
        label: o,
        onClick: n
      }
    )
  ] });
}, Cr = ({ isSelected: e }) => /* @__PURE__ */ t(
  "div",
  {
    className: k(
      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
      e ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
    ),
    children: e && /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
  }
), dl = ({
  mode: e,
  hasSelection: r,
  hasCustomText: o,
  customAnswerText: n,
  isCustomAnswerActive: s,
  canProceed: i,
  inputRef: l,
  onActivate: d,
  onChangeText: c,
  onToggleActive: u,
  onConfirm: f
}) => {
  const C = G().ai.clarifyingQuestion.typeYourAnswer, h = e === "single" ? /* @__PURE__ */ t(Cr, { isSelected: o && !r }) : /* @__PURE__ */ t(
    Nt,
    {
      checked: s,
      onCheckedChange: () => u(!s),
      title: C,
      hideLabel: !0
    }
  );
  return /* @__PURE__ */ a(
    "div",
    {
      className: k(
        "flex items-center gap-2 rounded-md px-2 py-2",
        "transition-colors hover:bg-f1-background-hover"
      ),
      children: [
        h,
        /* @__PURE__ */ t(
          "input",
          {
            ref: l,
            type: "text",
            value: n ?? "",
            onChange: (m) => c(m.target.value),
            onFocus: d,
            onKeyDown: (m) => {
              m.key === "Enter" && i && (m.preventDefault(), f());
            },
            placeholder: C,
            "aria-label": C,
            className: "min-w-0 flex-1 bg-transparent text-base text-f1-foreground outline-none placeholder:text-f1-foreground-tertiary"
          }
        )
      ]
    }
  );
}, mr = g(
  ({ option: e, isSelected: r, mode: o, isTabStop: n, onToggle: s, onKeyNavigate: i }, l) => o === "single" ? /* @__PURE__ */ a(
    "div",
    {
      ref: l,
      role: "radio",
      "aria-checked": r,
      tabIndex: n ? 0 : -1,
      className: k(
        "flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors hover:bg-f1-background-secondary",
        ge()
      ),
      onClick: () => s(e.id),
      onKeyDown: (d) => {
        if (d.key === " " || d.key === "Enter") {
          d.preventDefault(), s(e.id);
          return;
        }
        i?.(d);
      },
      children: [
        /* @__PURE__ */ t(Cr, { isSelected: r }),
        /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: e.label })
      ]
    }
  ) : /* @__PURE__ */ a(
    "div",
    {
      ref: l,
      className: k(
        "flex cursor-pointer items-center rounded-md pl-2 transition-colors hover:bg-f1-background-secondary"
      ),
      children: [
        /* @__PURE__ */ t(
          Nt,
          {
            checked: r,
            onCheckedChange: () => s(e.id),
            title: e.label,
            hideLabel: !0
          }
        ),
        /* @__PURE__ */ t(
          "span",
          {
            className: "w-full py-2 pl-2 pr-2 text-base font-medium text-f1-foreground",
            onClick: () => s(e.id),
            children: e.label
          }
        )
      ]
    }
  )
);
mr.displayName = "OptionRow";
const fl = ({
  mode: e,
  question: r,
  options: o,
  selectedOptionIds: n,
  allowCustomAnswer: s,
  hasSelection: i,
  hasCustomText: l,
  customAnswerText: d,
  isCustomAnswerActive: c,
  canProceed: u,
  customInputRef: f,
  autoFocus: p,
  onToggleOption: C,
  onActivateCustom: h,
  onChangeCustomText: m,
  onToggleCustomActive: v,
  onConfirm: x
}) => {
  const N = xe(), I = (() => {
    if (e !== "single") return 0;
    const L = o.findIndex((M) => n.includes(M.id));
    return L >= 0 ? L : 0;
  })(), [H, S] = B(I), E = j([]);
  q(() => {
    p && e === "single" && E.current[H]?.focus();
  }, []);
  const w = (L) => {
    if (e !== "single") return;
    const M = o.length - 1;
    if (M < 0) return;
    let A = H;
    switch (L.key) {
      case "ArrowDown":
      case "ArrowRight":
        A = H >= M ? 0 : H + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        A = H <= 0 ? M : H - 1;
        break;
      case "Home":
        A = 0;
        break;
      case "End":
        A = M;
        break;
      default:
        return;
    }
    L.preventDefault(), S(A), E.current[A]?.focus();
  };
  return /* @__PURE__ */ a(
    "div",
    {
      className: "flex flex-col gap-0 overflow-y-auto px-1.5 py-0.5",
      role: e === "single" ? "radiogroup" : "group",
      "aria-label": r,
      children: [
        o.map((L, M) => /* @__PURE__ */ t(
          J.div,
          {
            initial: N ? !1 : { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0 },
            transition: {
              duration: N ? 0 : 0.2,
              ease: [0.4, 0, 0.2, 1],
              delay: N ? 0 : 0.12 + M * 0.06
            },
            children: /* @__PURE__ */ t(
              mr,
              {
                ref: (A) => {
                  E.current[M] = A;
                },
                option: L,
                isSelected: n.includes(L.id),
                mode: e,
                isTabStop: e === "single" ? M === H : void 0,
                onToggle: C,
                onKeyNavigate: w
              }
            )
          },
          L.id
        )),
        s && /* @__PURE__ */ t(
          dl,
          {
            mode: e,
            hasSelection: i,
            hasCustomText: l,
            customAnswerText: d,
            isCustomAnswerActive: c,
            canProceed: u,
            inputRef: f,
            onActivate: h,
            onChangeText: m,
            onToggleActive: v,
            onConfirm: x
          }
        )
      ]
    }
  );
}, ul = ({
  question: e,
  stepLabel: r,
  isFirstStep: o,
  isFinalStep: n,
  canProceed: s,
  onBack: i,
  onNext: l,
  onCancel: d
}) => {
  const c = G();
  return /* @__PURE__ */ a("div", { className: "flex items-start gap-0.5 pl-4 pr-3", children: [
    /* @__PURE__ */ t(
      ie,
      {
        className: "min-w-0 flex-1 text-lg font-semibold text-f1-foreground",
        lines: 3,
        children: e
      }
    ),
    r && /* @__PURE__ */ a("div", { className: "flex shrink-0 items-center gap-0.5", children: [
      /* @__PURE__ */ t(
        Ce,
        {
          variant: "ghost",
          size: "sm",
          onClick: i,
          disabled: o,
          label: c.ai.clarifyingQuestion.back,
          hideLabel: !0,
          icon: at
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-sm font-semibold text-f1-foreground-tertiary", children: r }),
      /* @__PURE__ */ t(
        Ce,
        {
          variant: "ghost",
          size: "sm",
          onClick: l,
          disabled: n || !s,
          label: c.ai.clarifyingQuestion.next,
          hideLabel: !0,
          icon: We
        }
      )
    ] }),
    /* @__PURE__ */ t(
      Ce,
      {
        variant: "ghost",
        size: "sm",
        onClick: d,
        label: c.actions.cancel,
        hideLabel: !0,
        icon: Fe
      }
    )
  ] });
}, hl = "easeOut", gl = 0.3, O4 = ({
  clarifyingQuestion: e,
  isSubmitDisabled: r
}) => /* @__PURE__ */ t(
  pl,
  {
    clarifyingQuestion: e,
    isSubmitDisabled: r
  }
), pl = ({
  clarifyingQuestion: e,
  isSubmitDisabled: r
}) => {
  const o = G(), n = xe(), {
    currentStep: s,
    currentStepIndex: i,
    totalSteps: l,
    toggleOption: d,
    confirm: c,
    skip: u,
    cancel: f,
    back: p,
    setCustomAnswerText: C,
    setCustomAnswerActive: h,
    activateCustomAnswer: m
  } = e, {
    question: v,
    options: x,
    selectedOptionIds: N,
    selectionMode: I,
    optional: H,
    allowCustomAnswer: S,
    customAnswerText: E,
    isCustomAnswerActive: w
  } = s, L = j(null), M = I ?? "single", A = l > 1, F = i === 0, V = i === l - 1, $ = A ? o.t("ai.clarifyingQuestion.stepOf", {
    current: String(i + 1),
    total: String(l)
  }) : void 0, U = N.length > 0, O = (E ?? "").trim().length > 0, z = U || w && O || H === !0, te = r === !0 && V, re = () => {
    te || c();
  }, Y = () => {
    te || u();
  }, X = (de) => {
    const ne = M === "single" && N.includes(de);
    d(de), M === "single" && !V && !ne && Promise.resolve().then(c);
  }, P = V ? o.ai.clarifyingQuestion.submit : o.ai.clarifyingQuestion.next, oe = H === !0 && !U && !(w && O), W = () => {
    m(), requestAnimationFrame(() => {
      L.current?.focus();
    });
  }, ae = (de) => {
    de.key === "Escape" && (de.preventDefault(), f());
  }, ke = n ? 0 : gl / 2;
  return /* @__PURE__ */ a("div", { className: "flex flex-col", onKeyDown: ae, children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pt-3", children: /* @__PURE__ */ t(Ee, { mode: "wait", initial: !1, children: /* @__PURE__ */ a(
      J.div,
      {
        className: "flex flex-col gap-3",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: ke, ease: hl },
        children: [
          /* @__PURE__ */ t(
            ul,
            {
              question: v,
              stepLabel: $,
              isFirstStep: F,
              isFinalStep: V,
              canProceed: z,
              onBack: p,
              onNext: c,
              onCancel: f
            }
          ),
          /* @__PURE__ */ t(
            fl,
            {
              mode: M,
              question: v,
              options: x,
              selectedOptionIds: N,
              allowCustomAnswer: S,
              hasSelection: U,
              hasCustomText: O,
              customAnswerText: E,
              isCustomAnswerActive: w,
              canProceed: z,
              customInputRef: L,
              onToggleOption: X,
              onActivateCustom: W,
              onChangeCustomText: C,
              onToggleCustomActive: h,
              onConfirm: re
            }
          )
        ]
      },
      i
    ) }) }),
    /* @__PURE__ */ t(
      ll,
      {
        canProceed: z,
        submitDisabled: te,
        label: P,
        onConfirm: re,
        onSkip: Y,
        showSkip: oe
      }
    )
  ] });
};
function A1(e, r, o, n) {
  const s = Math.max(1, Math.min(e, r)), i = Math.min(o, 20), d = Math.min(i + n, s), c = Math.min(d, Math.floor(e / 2)), u = Math.min(d, Math.floor(r / 2)), f = (W) => W / e * 2 - 1, p = (W) => W / r * 2 - 1, C = 0, h = e, m = 0, v = r, x = c, N = e - c, I = u, H = r - u, S = f(C), E = f(h), w = p(m), L = p(v), M = f(x), A = f(N), F = p(I), V = p(H), $ = 0, U = 0, O = 1, z = 1, te = c / e, re = 1 - c / e, Y = u / r, X = 1 - u / r, P = new Float32Array([
    // Top strip
    S,
    w,
    E,
    w,
    S,
    F,
    S,
    F,
    E,
    w,
    E,
    F,
    // Bottom strip
    S,
    V,
    E,
    V,
    S,
    L,
    S,
    L,
    E,
    V,
    E,
    L,
    // Left strip
    S,
    F,
    M,
    F,
    S,
    V,
    S,
    V,
    M,
    F,
    M,
    V,
    // Right strip
    A,
    F,
    E,
    F,
    A,
    V,
    A,
    V,
    E,
    F,
    E,
    V
  ]), oe = new Float32Array([
    // Top strip
    $,
    U,
    O,
    U,
    $,
    Y,
    $,
    Y,
    O,
    U,
    O,
    Y,
    // Bottom strip
    $,
    X,
    O,
    X,
    $,
    z,
    $,
    z,
    O,
    X,
    O,
    z,
    // Left strip
    $,
    Y,
    te,
    Y,
    $,
    X,
    $,
    X,
    te,
    Y,
    te,
    X,
    // Right strip
    re,
    Y,
    O,
    Y,
    re,
    X,
    re,
    X,
    O,
    Y,
    O,
    X
  ]);
  return { positions: P, uvs: oe };
}
function $1(e, r, o) {
  const n = e.createShader(r);
  if (!n) throw new Error("Failed to create shader");
  if (e.shaderSource(n, o), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) {
    const s = e.getShaderInfoLog(n) || "Unknown shader error";
    throw e.deleteShader(n), new Error(s);
  }
  return n;
}
function Cl(e, r, o) {
  const n = $1(e, e.VERTEX_SHADER, r), s = $1(e, e.FRAGMENT_SHADER, o), i = e.createProgram();
  if (!i) throw new Error("Failed to create program");
  if (e.attachShader(i, n), e.attachShader(i, s), e.linkProgram(i), !e.getProgramParameter(i, e.LINK_STATUS)) {
    const l = e.getProgramInfoLog(i) || "Unknown link error";
    throw e.deleteProgram(i), e.deleteShader(n), e.deleteShader(s), new Error(l);
  }
  return e.deleteShader(n), e.deleteShader(s), i;
}
const ml = `#version 300 es
precision lowp float;

in vec2 vUV;
out vec4 outColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uBorderWidth;
uniform float uGlowWidth;
uniform float uBorderRadius;
uniform vec3 uColors[4];

// dark/light mode
uniform float uGlowExponent;
uniform float uGlowFactor;

const float PI = 3.14159265359;
const float TWO_PI = 2.0 * PI;
const float HALF_PI = 0.5 * PI;

// Light source parameters (constants)
const vec4 startPositions = vec4(0.0, PI, HALF_PI, 1.5 * PI);
const vec4 speeds = vec4(-1.9, -1.9, -1.5, 2.1);
const vec4 innerRadius = vec4(PI * 0.8, PI * 0.7, PI * 0.3, PI * 0.1);
const vec4 outerRadius = vec4(PI * 1.2, PI * 0.9, PI * 0.6, PI * 0.4);

/**
 * @brief Generates a random float value based on the input 2D coordinates.
 * @param st The input 2D coordinates.
 * @return float A random float value.
 */
float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

vec2 random2(vec2 st) {
	return vec2(random(st), random(st + 1.0));
}

/**
 * Derivative-based Anti-aliasing
 */
float aaStep(float edge, float d) {
    // Calculate the width of the anti-aliasing transition
    // This is the distance the value changes over one pixel.
	float width = fwidth(d);
	return smoothstep(edge - width * 0.5, edge + width * 0.5, d);
}

/**
 * @brief Provides an anti-aliased version of fract().
 * @param x The input value.
 * @return float The anti-aliased fractional part of x.
 */
float aaFract(float x) {
	float f = fract(x);
	float w = fwidth(x); // Get the width of the transition band for one pixel.

    // Use smoothstep to fade the line out as it approaches the 1.0 boundary.
    // The fade happens over a distance equal to the pixel width 'w'.
	float smooth_f = f * (1.0 - smoothstep(1.0 - w, 1.0, f));

	return smooth_f;
}

/**
 * @name sdRoundedBox
 * @description Calculates the signed distance from a point to a rounded rectangle.
 * @param {vec2} p - The point coordinates.
 * @param {vec2} b - Half the size of the rectangle (half width and half height).
 * @param {float} r - The corner radius.
 * @returns {float} - Signed distance to the surface of the rounded rectangle.
 */
float sdRoundedBox(in vec2 p, in vec2 b, in float r) {
	vec2 q = abs(p) - b + r;
	return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

/**
 * @brief Calculates the smooth inner glow intensity for a rectangle.
 * @param p The current pixel coordinate, centered at (0,0).
 * @param b The half-dimensions of the rectangle.
 * @param radius The radius of the glow/blur.
 * @return float The glow intensity, from 0.0 to 1.0.
 */
float getInnerGlow(vec2 p, vec2 b, float radius) {
	// Check if the pixel is outside the rectangle.
	// vec2 d_out = abs(p) - b;
	// if (max(d_out.x, d_out.y) > 0.0) {
	// 	return 0.0;
	// }

	// Calculate the distance to the nearest vertical and horizontal edges (positive inwards).
	float dist_x = b.x - abs(p.x);
	float dist_y = b.y - abs(p.y);

	// Calculate the horizontal and vertical glow intensities independently.
	float glow_x = smoothstep(radius, 0.0, dist_x);
	float glow_y = smoothstep(radius, 0.0, dist_y);

	// Combine the two directional glows using a screen blend mode: 1.0 - (1.0 - a) * (1.0 - b).
	return 1.0 - (1.0 - glow_x) * (1.0 - glow_y);
}

float getVignette(vec2 uv) {
	vec2 vignetteUv = uv;
	vignetteUv = vignetteUv * (1.0 - vignetteUv);
	float vignette = vignetteUv.x * vignetteUv.y * 25.0; // multiply with sth for intensity
	vignette = pow(vignette, 0.16); // change pow for modifying the extend of the  vignette
	// vignette = smoothstep(0.0, 0.7, vignette); // smoothstep to avoid hard edges
	vignette = 1.0 - vignette;

	return vignette;
}

/**
 * Convert UV coordinates to angle (0 to 2π) around the border
 */
float uvToAngle(vec2 uv) {
	vec2 center = vec2(0.5);
	vec2 dir = uv - center;
	return atan(dir.y, dir.x) + PI;
}

/**
 * Get current light center position (angle) based on start position, speed and time
 */
// float getLightCenter(float startPos, float speed, float time) {
//     return mod(startPos + speed * time, TWO_PI);
// }

void main() {
	vec2 uv = vUV;
	vec2 pos = uv * uResolution;
	vec2 centeredPos = pos - uResolution * 0.5;
	vec2 size = uResolution - uBorderWidth;
	vec2 halfSize = size * 0.5;

	// Calculate the signed distance from the rounded rectangle
	float dBorderBox = sdRoundedBox(centeredPos, halfSize, uBorderRadius);
	float border = aaStep(0.0, dBorderBox);

	// This will create a gradient mask to safely fade out from borders to inner edges.
	float glow = getInnerGlow(centeredPos, halfSize, uGlowWidth);
	// glow = smoothstep(0.0, 0.5, glow);
	// glow = aaFract(glow * 10.0);

	float vignette = getVignette(uv);
	glow *= vignette;

	float posAngle = uvToAngle(uv);

	// vec4 lightCenter = vec4(
	// 	getLightCenter(startPositions.x, speeds.x, uTime),
	// 	getLightCenter(startPositions.y, speeds.y, uTime),
	// 	getLightCenter(startPositions.z, speeds.z, uTime),
	// 	getLightCenter(startPositions.w, speeds.w, uTime)
	// );
	vec4 lightCenter = mod(startPositions + speeds * uTime, TWO_PI);

	vec4 angleDist = abs(posAngle - lightCenter);

	// Calculate shortest angular distance (considering wrap-around)
	vec4 disToLight = min(angleDist, TWO_PI - angleDist) / TWO_PI;

	float intensityBorder[4];
	intensityBorder[0] = 1.0;
	intensityBorder[1] = smoothstep(0.4, 0.0, disToLight.y);
	intensityBorder[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityBorder[3] = smoothstep(0.2, 0.0, disToLight.w) * 0.5;

	// mix these 4 colors with distance
	vec3 borderColor = vec3(0.0);
	for(int i = 0; i < 4; i++) {
		borderColor = mix(borderColor, uColors[i], intensityBorder[i]);
	}
	borderColor *= 1.1;

	borderColor = clamp(borderColor, 0.0, 1.0);

	float intensityGlow[4];
	intensityGlow[0] = smoothstep(0.9, 0.0, disToLight.x);
	intensityGlow[1] = smoothstep(0.7, 0.0, disToLight.y);
	intensityGlow[2] = smoothstep(0.4, 0.0, disToLight.z);
	intensityGlow[3] = smoothstep(0.1, 0.0, disToLight.w) * 0.7;

	// timely breathing effect
	vec4 breath = smoothstep(0.0, 1.0, sin(uTime * 1.0 + startPositions * PI) * 0.2 + 0.8);

	vec3 glowColor = vec3(0.0);
	glowColor += uColors[0] * intensityGlow[0] * breath.x;
	glowColor += uColors[1] * intensityGlow[1] * breath.y;
	glowColor += uColors[2] * intensityGlow[2] * breath.z;
	glowColor += uColors[3] * intensityGlow[3] * breath.w * glow; // fade it a little bit

	glow = pow(glow, uGlowExponent);
	glow *= random(pos + uTime) * 0.1 + 1.0;
	glowColor *= glow * uGlowFactor;
	glowColor = clamp(glowColor, 0.0, 1.0);

	vec3 color = mix(glowColor, borderColor + glowColor * 0.2, border);

	float alpha = mix(glow, 1.0, border);

	outColor = vec4(color, alpha);
}
`, vl = `#version 300 es

in vec2 aPosition;
in vec2 aUV;
out vec2 vUV;
void main() {
	vUV = aUV;
	gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, wl = [
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(229, 86, 25)",
  // #E55619 orange
  "rgb(229, 25, 67)",
  // #E51943 red
  "rgb(161, 173, 229)"
  // #A1ADE5 light blue
];
function xl(e) {
  const r = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!r)
    throw new Error(`Invalid color format: ${e}`);
  const [, o, n, s] = r;
  return [parseInt(o) / 255, parseInt(n) / 255, parseInt(s) / 255];
}
class U4 {
  element;
  canvas;
  options;
  running = !1;
  disposed = !1;
  startTime = 0;
  lastTime = 0;
  rafId = null;
  glr;
  observer;
  constructor(r = {}) {
    this.options = {
      width: r.width ?? 600,
      height: r.height ?? 600,
      ratio: r.ratio ?? window.devicePixelRatio ?? 1,
      borderWidth: r.borderWidth ?? 8,
      glowWidth: r.glowWidth ?? 200,
      borderRadius: r.borderRadius ?? 8,
      mode: r.mode ?? "light",
      ...r
    }, this.canvas = document.createElement("canvas"), this.options.classNames && (this.canvas.className = this.options.classNames), this.options.styles && Object.assign(this.canvas.style, this.options.styles), this.canvas.style.display = "block", this.canvas.style.transformOrigin = "center", this.canvas.style.pointerEvents = "none", this.element = this.canvas, this.setupGL();
  }
  start() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.running) return;
    if (!this.glr) {
      console.error("WebGL resources are not initialized.");
      return;
    }
    this.running = !0, this.startTime = performance.now(), this.resize(
      this.options.width ?? 600,
      this.options.height ?? 600,
      this.options.ratio
    ), this.glr.gl.viewport(0, 0, this.canvas.width, this.canvas.height), this.glr.gl.useProgram(this.glr.program), this.glr.gl.uniform2f(
      this.glr.uResolution,
      this.canvas.width,
      this.canvas.height
    ), this.checkGLError(this.glr.gl, "start: after initial setup");
    const r = () => {
      if (!this.running || !this.glr) return;
      this.rafId = requestAnimationFrame(r);
      const o = performance.now();
      if (o - this.lastTime < 1e3 / 32) return;
      this.lastTime = o;
      const s = (o - this.startTime) * 1e-3;
      this.render(s);
    };
    this.rafId = requestAnimationFrame(r);
  }
  pause() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = !0, this.running = !1, this.rafId !== null && cancelAnimationFrame(this.rafId);
    const { gl: r, vao: o, positionBuffer: n, uvBuffer: s, program: i } = this.glr;
    o && r.deleteVertexArray(o), n && r.deleteBuffer(n), s && r.deleteBuffer(s), r.deleteProgram(i), this.observer && this.observer.disconnect(), this.canvas.remove();
  }
  resize(r, o, n) {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    if (this.options.width = r, this.options.height = o, n && (this.options.ratio = n), !this.running) return;
    const { gl: s, program: i, vao: l, positionBuffer: d, uvBuffer: c, uResolution: u } = this.glr, f = n ?? this.options.ratio ?? window.devicePixelRatio ?? 1, p = Math.max(1, Math.floor(r * f)), C = Math.max(1, Math.floor(o * f));
    this.canvas.style.width = `${r}px`, this.canvas.style.height = `${o}px`, (this.canvas.width !== p || this.canvas.height !== C) && (this.canvas.width = p, this.canvas.height = C), s.viewport(0, 0, this.canvas.width, this.canvas.height), this.checkGLError(s, "resize: after viewport setup");
    const { positions: h, uvs: m } = A1(
      this.canvas.width,
      this.canvas.height,
      this.options.borderWidth * f,
      this.options.glowWidth * f
    );
    s.bindVertexArray(l), s.bindBuffer(s.ARRAY_BUFFER, d), s.bufferData(s.ARRAY_BUFFER, h, s.STATIC_DRAW);
    const v = s.getAttribLocation(i, "aPosition");
    s.enableVertexAttribArray(v), s.vertexAttribPointer(v, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after position buffer update"), s.bindBuffer(s.ARRAY_BUFFER, c), s.bufferData(s.ARRAY_BUFFER, m, s.STATIC_DRAW);
    const x = s.getAttribLocation(i, "aUV");
    s.enableVertexAttribArray(x), s.vertexAttribPointer(x, 2, s.FLOAT, !1, 0, 0), this.checkGLError(s, "resize: after UV buffer update"), s.useProgram(i), s.uniform2f(u, this.canvas.width, this.canvas.height), s.uniform1f(this.glr.uBorderWidth, this.options.borderWidth * f), s.uniform1f(this.glr.uGlowWidth, this.options.glowWidth * f), s.uniform1f(this.glr.uBorderRadius, this.options.borderRadius * f), this.checkGLError(s, "resize: after uniform updates");
    const N = performance.now();
    this.lastTime = N;
    const I = (N - this.startTime) * 1e-3;
    this.render(I);
  }
  /**
   * Automatically resizes the canvas to match the dimensions of the given element.
   * @note using ResizeObserver
   */
  autoResize(r) {
    this.observer && this.observer.disconnect(), this.observer = new ResizeObserver(() => {
      const o = r.getBoundingClientRect();
      this.resize(o.width, o.height);
    }), this.observer.observe(r);
  }
  fadeIn() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((r, o) => {
      const n = this.canvas.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" }
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      );
      n.onfinish = () => r(), n.oncancel = () => o("canceled");
    });
  }
  fadeOut() {
    if (this.disposed) throw new Error("Mask instance has been disposed.");
    return new Promise((r, o) => {
      const n = this.canvas.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" }
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      );
      n.onfinish = () => r(), n.oncancel = () => o("canceled");
    });
  }
  checkGLError(r, o) {
    let n = r.getError();
    if (n !== r.NO_ERROR)
      for (console.error(`WebGL Error in ${o}`); n !== r.NO_ERROR; ) {
        const s = this.getGLErrorName(r, n);
        console.error(`${s} (0x${n.toString(16)})`), n = r.getError();
      }
  }
  getGLErrorName(r, o) {
    switch (o) {
      case r.INVALID_ENUM:
        return "INVALID_ENUM";
      case r.INVALID_VALUE:
        return "INVALID_VALUE";
      case r.INVALID_OPERATION:
        return "INVALID_OPERATION";
      case r.INVALID_FRAMEBUFFER_OPERATION:
        return "INVALID_FRAMEBUFFER_OPERATION";
      case r.OUT_OF_MEMORY:
        return "OUT_OF_MEMORY";
      case r.CONTEXT_LOST_WEBGL:
        return "CONTEXT_LOST_WEBGL";
      default:
        return "UNKNOWN_ERROR";
    }
  }
  setupGL() {
    const r = this.canvas.getContext("webgl2", {
      antialias: !1,
      alpha: !0
    });
    if (!r)
      throw new Error("WebGL2 is required but not available.");
    const o = Cl(r, vl, ml);
    this.checkGLError(r, "setupGL: after createProgram");
    const n = r.createVertexArray();
    r.bindVertexArray(n), this.checkGLError(r, "setupGL: after VAO creation");
    const s = this.canvas.width || 2, i = this.canvas.height || 2, { positions: l, uvs: d } = A1(
      s,
      i,
      this.options.borderWidth,
      this.options.glowWidth
    ), c = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, c), r.bufferData(r.ARRAY_BUFFER, l, r.STATIC_DRAW);
    const u = r.getAttribLocation(o, "aPosition");
    r.enableVertexAttribArray(u), r.vertexAttribPointer(u, 2, r.FLOAT, !1, 0, 0), this.checkGLError(r, "setupGL: after position buffer setup");
    const f = r.createBuffer();
    r.bindBuffer(r.ARRAY_BUFFER, f), r.bufferData(r.ARRAY_BUFFER, d, r.STATIC_DRAW);
    const p = r.getAttribLocation(o, "aUV");
    r.enableVertexAttribArray(p), r.vertexAttribPointer(p, 2, r.FLOAT, !1, 0, 0), this.checkGLError(r, "setupGL: after UV buffer setup");
    const C = r.getUniformLocation(o, "uResolution"), h = r.getUniformLocation(o, "uTime"), m = r.getUniformLocation(o, "uBorderWidth"), v = r.getUniformLocation(o, "uGlowWidth"), x = r.getUniformLocation(o, "uBorderRadius"), N = r.getUniformLocation(o, "uColors"), I = r.getUniformLocation(o, "uGlowExponent"), H = r.getUniformLocation(o, "uGlowFactor");
    r.useProgram(o), r.uniform1f(m, this.options.borderWidth), r.uniform1f(v, this.options.glowWidth), r.uniform1f(x, this.options.borderRadius), this.options.mode === "dark" ? (r.uniform1f(I, 2), r.uniform1f(H, 1.8)) : (r.uniform1f(I, 1), r.uniform1f(H, 1));
    const S = (this.options.colors || wl).map(xl);
    for (let E = 0; E < S.length; E++)
      r.uniform3f(
        r.getUniformLocation(o, `uColors[${E}]`),
        ...S[E]
      );
    this.checkGLError(r, "setupGL: after uniform setup"), r.bindVertexArray(null), r.bindBuffer(r.ARRAY_BUFFER, null), this.glr = {
      gl: r,
      program: o,
      vao: n,
      positionBuffer: c,
      uvBuffer: f,
      uResolution: C,
      uTime: h,
      uBorderWidth: m,
      uGlowWidth: v,
      uBorderRadius: x,
      uColors: N
    };
  }
  render(r) {
    if (!this.glr) return;
    const { gl: o, program: n, vao: s, uTime: i } = this.glr;
    o.useProgram(n), o.bindVertexArray(s), o.uniform1f(i, r), o.disable(o.DEPTH_TEST), o.disable(o.CULL_FACE), o.disable(o.BLEND), o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT), o.drawArrays(o.TRIANGLES, 0, 24), this.checkGLError(o, "render: after draw call"), o.bindVertexArray(null);
  }
}
const B1 = ["lowp", "mediump", "highp"], kl = `
void main(void){
    vec4 color = vec4(0.0,0.0,0.0,1.0);
    mainImage( color, gl_FragCoord.xy );
    gl_FragColor = color;
}`, Ll = `void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    vec2 uv = fragCoord/iResolution.xy;
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
    fragColor = vec4(col,1.0);
}`, I1 = `attribute vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
}`, P1 = "iTime", j1 = "iTimeDelta", D1 = "iDate", Z1 = "iFrame", _1 = "iMouse", O1 = "iResolution", bl = "iChannel", U1 = "iChannelResolution", z1 = "iDeviceOrientation";
function yl(e, r) {
  return e.includes("Matrix") && Array.isArray(r);
}
function Ml(e, r) {
  return e.includes("v") && Array.isArray(r) && r.length > Number.parseInt(e.charAt(0));
}
function El(e, r) {
  return !e.includes("v") && Array.isArray(r) && r.length > Number.parseInt(e.charAt(0));
}
const Rl = (e, r, o, n) => {
  if (El(o, n))
    switch (o) {
      case "2f":
        return e.uniform2f(r, n[0], n[1]);
      case "3f":
        return e.uniform3f(r, n[0], n[1], n[2]);
      case "4f":
        return e.uniform4f(r, n[0], n[1], n[2], n[3]);
      case "2i":
        return e.uniform2i(r, n[0], n[1]);
      case "3i":
        return e.uniform3i(r, n[0], n[1], n[2]);
      case "4i":
        return e.uniform4i(r, n[0], n[1], n[2], n[3]);
    }
  if (typeof n == "number")
    return o === "1i" ? e.uniform1i(r, n) : e.uniform1f(r, n);
  switch (o) {
    case "1iv":
      return e.uniform1iv(r, n);
    case "2iv":
      return e.uniform2iv(r, n);
    case "3iv":
      return e.uniform3iv(r, n);
    case "4iv":
      return e.uniform4iv(r, n);
    case "1fv":
      return e.uniform1fv(r, n);
    case "2fv":
      return e.uniform2fv(r, n);
    case "3fv":
      return e.uniform3fv(r, n);
    case "4fv":
      return e.uniform4fv(r, n);
    case "Matrix2fv":
      return e.uniformMatrix2fv(r, !1, n);
    case "Matrix3fv":
      return e.uniformMatrix3fv(r, !1, n);
    case "Matrix4fv":
      return e.uniformMatrix4fv(r, !1, n);
  }
}, Fl = (e) => {
  switch (e) {
    case "1f":
      return "float";
    case "2f":
      return "vec2";
    case "3f":
      return "vec3";
    case "4f":
      return "vec4";
    case "1i":
      return "int";
    case "2i":
      return "ivec2";
    case "3i":
      return "ivec3";
    case "4i":
      return "ivec4";
    case "1iv":
      return "int";
    case "2iv":
      return "ivec2";
    case "3iv":
      return "ivec3";
    case "4iv":
      return "ivec4";
    case "1fv":
      return "float";
    case "2fv":
      return "vec2";
    case "3fv":
      return "vec3";
    case "4fv":
      return "vec4";
    case "Matrix2fv":
      return "mat2";
    case "Matrix3fv":
      return "mat3";
    case "Matrix4fv":
      return "mat4";
    default:
      console.error(
        Le(
          `The uniform type "${e}" is not valid, please make sure your uniform type is valid`
        )
      );
  }
}, t1 = 9729, G1 = 9728, Nl = 9987, W1 = 33071, q1 = 10497;
class Vl {
  gl;
  url;
  wrapS;
  wrapT;
  minFilter;
  magFilter;
  source;
  pow2canvas;
  isLoaded = !1;
  isVideo = !1;
  flipY = -1;
  width = 0;
  height = 0;
  _webglTexture = null;
  constructor(r) {
    this.gl = r;
  }
  updateTexture = (r, o, n) => {
    const { gl: s } = this, i = 0, l = s.RGBA, d = s.RGBA, c = s.UNSIGNED_BYTE;
    s.bindTexture(s.TEXTURE_2D, r), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, n), s.texImage2D(
      s.TEXTURE_2D,
      i,
      l,
      d,
      c,
      o
    );
  };
  setupVideo = (r) => {
    const o = document.createElement("video");
    let n = !1, s = !1;
    o.autoplay = !0, o.muted = !0, o.loop = !0, o.crossOrigin = "anonymous";
    const i = () => {
      n && s && (this.isLoaded = !0);
    };
    return o.addEventListener(
      "playing",
      () => {
        n = !0, this.width = o.videoWidth || 0, this.height = o.videoHeight || 0, i();
      },
      !0
    ), o.addEventListener(
      "timeupdate",
      () => {
        s = !0, i();
      },
      !0
    ), o.src = r, o;
  };
  makePowerOf2 = (r) => r instanceof HTMLImageElement || r instanceof HTMLCanvasElement || r instanceof ImageBitmap ? (this.pow2canvas === void 0 && (this.pow2canvas = document.createElement("canvas")), this.pow2canvas.width = 2 ** Math.floor(Math.log(r.width) / Math.LN2), this.pow2canvas.height = 2 ** Math.floor(Math.log(r.height) / Math.LN2), this.pow2canvas.getContext("2d")?.drawImage(
    r,
    0,
    0,
    this.pow2canvas.width,
    this.pow2canvas.height
  ), console.warn(
    Le(
      `Image is not power of two ${r.width} x ${r.height}. Resized to ${this.pow2canvas.width} x ${this.pow2canvas.height};`
    )
  ), this.pow2canvas) : r;
  load = async (r) => {
    const { gl: o } = this, {
      url: n,
      wrapS: s,
      wrapT: i,
      minFilter: l,
      magFilter: d,
      flipY: c = -1
    } = r;
    if (!n)
      return Promise.reject(
        new Error(
          Le(
            "Missing url, please make sure to pass the url of your texture { url: ... }"
          )
        )
      );
    const u = /(\.jpg|\.jpeg|\.png|\.gif|\.bmp)$/i.exec(n), f = /(\.mp4|\.3gp|\.webm|\.ogv)$/i.exec(n);
    if (u === null && f === null)
      return Promise.reject(
        new Error(
          Le(
            `Please upload a video or an image with a valid format (url: ${n})`
          )
        )
      );
    Object.assign(this, { url: n, wrapS: s, wrapT: i, minFilter: l, magFilter: d, flipY: c });
    const p = 0, C = o.RGBA, h = 1, m = 1, v = 0, x = o.RGBA, N = o.UNSIGNED_BYTE, I = new Uint8Array([255, 255, 255, 0]), H = o.createTexture();
    if (o.bindTexture(o.TEXTURE_2D, H), o.texImage2D(
      o.TEXTURE_2D,
      p,
      C,
      h,
      m,
      v,
      x,
      N,
      I
    ), f) {
      const L = this.setupVideo(n);
      return o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR), this._webglTexture = H, this.source = L, this.isVideo = !0, L.play().then(() => this);
    }
    async function S() {
      return new Promise((L, M) => {
        const A = new Image();
        A.crossOrigin = "anonymous", A.onload = () => {
          L(A);
        }, A.onerror = () => {
          M(new Error(Le(`failed loading url: ${n}`)));
        }, A.src = n ?? "";
      });
    }
    let E = await S(), w = (E.width & E.width - 1) === 0 && (E.height & E.height - 1) === 0;
    return (r.wrapS !== W1 || r.wrapT !== W1 || r.minFilter !== G1 && r.minFilter !== t1) && !w && (E = this.makePowerOf2(E), w = !0), o.bindTexture(o.TEXTURE_2D, H), o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, c), o.texImage2D(
      o.TEXTURE_2D,
      p,
      C,
      x,
      N,
      E
    ), w && r.minFilter !== G1 && r.minFilter !== t1 && o.generateMipmap(o.TEXTURE_2D), o.texParameteri(
      o.TEXTURE_2D,
      o.TEXTURE_WRAP_S,
      this.wrapS || q1
    ), o.texParameteri(
      o.TEXTURE_2D,
      o.TEXTURE_WRAP_T,
      this.wrapT || q1
    ), o.texParameteri(
      o.TEXTURE_2D,
      o.TEXTURE_MIN_FILTER,
      this.minFilter || Nl
    ), o.texParameteri(
      o.TEXTURE_2D,
      o.TEXTURE_MAG_FILTER,
      this.magFilter || t1
    ), this._webglTexture = H, this.source = E, this.isVideo = !1, this.isLoaded = !0, this.width = E.width || 0, this.height = E.height || 0, this;
  };
}
const Le = (e) => `react-shaders: ${e}`, X1 = (e) => {
  if ("changedTouches" in e) {
    const r = e.changedTouches[0];
    return [r?.clientX ?? 0, r?.clientY ?? 0];
  }
  return [e.clientX, e.clientY];
}, Y1 = (e, r, o) => e * (1 - o) + r * o, Sl = (e, r, o) => o > 0 ? e.substring(0, o) + r + e.substring(o, e.length) : r + e;
function Tl({
  fs: e,
  vs: r = I1,
  textures: o = [],
  uniforms: n,
  clearColor: s = [0, 0, 0, 1],
  precision: i = "highp",
  style: l,
  contextAttributes: d = {},
  lerp: c = 1,
  devicePixelRatio: u = 1,
  onDoneLoadingTextures: f,
  onError: p = console.error,
  onWarning: C = console.warn
}) {
  const h = j(null), m = j(null), v = j(null), x = j(null), N = j(void 0), I = j(void 0), H = j(!1), S = j(void 0), E = j(0), w = j([0, 0]), L = j([]), M = j(0), A = j(void 0), F = j({
    [P1]: { type: "float", isNeeded: !1, value: 0 },
    [j1]: { type: "float", isNeeded: !1, value: 0 },
    [D1]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [_1]: { type: "vec4", isNeeded: !1, value: [0, 0, 0, 0] },
    [O1]: { type: "vec2", isNeeded: !1, value: [0, 0] },
    [Z1]: { type: "int", isNeeded: !1, value: 0 },
    [z1]: {
      type: "vec4",
      isNeeded: !1,
      value: [0, 0, 0, 0]
    }
  }), V = j(n), $ = (b, R) => {
    const y = "width" in b ? b.width ?? 0 : 0, D = "height" in b ? b.height ?? 0 : 0, T = F.current.iChannelResolution;
    if (!T) return;
    const Z = Array.isArray(T.value) ? T.value : T.value = [];
    Z[R * 3] = y * u, Z[R * 3 + 1] = D * u, Z[R * 3 + 2] = 0;
  }, U = () => {
    h.current && (m.current = h.current.getContext("webgl", d) || h.current.getContext(
      "experimental-webgl",
      d
    ), m.current?.getExtension("OES_standard_derivatives"), m.current?.getExtension("EXT_shader_texture_lod"));
  }, O = () => {
    const b = m.current;
    v.current = b?.createBuffer() ?? null, b?.bindBuffer(b.ARRAY_BUFFER, v.current);
    const R = [
      1,
      1,
      0,
      -1,
      1,
      0,
      1,
      -1,
      0,
      -1,
      -1,
      0
    ];
    b?.bufferData(b.ARRAY_BUFFER, new Float32Array(R), b.STATIC_DRAW);
  }, z = ({
    alpha: b,
    beta: R,
    gamma: y
  }) => {
    F.current.iDeviceOrientation.value = [
      b ?? 0,
      R ?? 0,
      y ?? 0,
      window.orientation ?? 0
    ];
  }, te = (b) => {
    const [R = 0, y = 0] = X1(b), D = R - (S.current?.left ?? 0) - window.pageXOffset, T = (S.current?.height ?? 0) - y - (S.current?.top ?? 0) - window.pageYOffset;
    H.current = !0;
    const Z = Array.isArray(F.current.iMouse?.value) ? F.current.iMouse.value : void 0;
    Z && (Z[2] = D, Z[3] = T), w.current[0] = D, w.current[1] = T;
  }, re = (b) => {
    S.current = h.current?.getBoundingClientRect();
    const [R = 0, y = 0] = X1(b), D = R - (S.current?.left ?? 0), T = (S.current?.height ?? 0) - y - (S.current?.top ?? 0);
    if (c !== 1)
      w.current[0] = D, w.current[1] = T;
    else {
      const Z = Array.isArray(F.current.iMouse?.value) ? F.current.iMouse.value : void 0;
      Z && (Z[0] = D, Z[1] = T);
    }
  }, Y = () => {
    const b = Array.isArray(F.current.iMouse?.value) ? F.current.iMouse.value : void 0;
    b && (b[2] = 0, b[3] = 0);
  }, X = () => {
    const b = m.current;
    if (!b) return;
    S.current = h.current?.getBoundingClientRect();
    const R = u, y = Math.floor(
      (S.current?.width ?? 1) * R
    ), D = Math.floor(
      (S.current?.height ?? 1) * R
    );
    if (b.canvas.width = y, b.canvas.height = D, F.current.iResolution?.isNeeded && x.current) {
      const T = b.getUniformLocation(
        x.current,
        O1
      );
      b.uniform2fv(T, [b.canvas.width, b.canvas.height]);
    }
  }, P = (b, R) => {
    const y = m.current;
    if (!y) return null;
    const D = y.createShader(b);
    if (!D) return null;
    if (y.shaderSource(D, R), y.compileShader(D), !y.getShaderParameter(D, y.COMPILE_STATUS)) {
      C?.(Le(`Error compiling the shader:
${R}`));
      const T = y.getShaderInfoLog(D);
      y.deleteShader(D), p?.(Le(`Shader compiler log: ${T}`));
    }
    return D;
  }, oe = (b, R) => {
    const y = m.current;
    if (!y) return;
    const D = P(y.FRAGMENT_SHADER, b), T = P(y.VERTEX_SHADER, R);
    if (x.current = y.createProgram(), !(!x.current || !T || !D)) {
      if (y.attachShader(x.current, T), y.attachShader(x.current, D), y.linkProgram(x.current), !y.getProgramParameter(x.current, y.LINK_STATUS)) {
        p?.(
          Le(
            `Unable to initialize the shader program: ${y.getProgramInfoLog(
              x.current
            )}`
          )
        );
        return;
      }
      y.useProgram(x.current), N.current = y.getAttribLocation(
        x.current,
        "aVertexPosition"
      ), y.enableVertexAttribArray(N.current);
    }
  }, W = () => {
    if (n)
      for (const b of Object.keys(n)) {
        const R = n[b];
        if (!R) continue;
        const { value: y, type: D } = R, T = Fl(D);
        if (!T) continue;
        const Z = {};
        if (yl(D, y)) {
          const se = D.length, ue = Number.parseInt(D.charAt(se - 3)), ee = Math.floor(y.length / (ue * ue));
          y.length > ue * ue && (Z.arraySize = `[${ee}]`);
        } else Ml(D, y) && (Z.arraySize = `[${Math.floor(y.length / Number.parseInt(D.charAt(0)))}]`);
        F.current[b] = {
          type: T,
          isNeeded: !1,
          value: y,
          ...Z
        };
      }
  }, ae = () => {
    const b = m.current;
    if (b)
      if (o && o.length > 0) {
        F.current[`${U1}`] = {
          type: "vec3",
          isNeeded: !1,
          arraySize: `[${o.length}]`,
          value: []
        };
        const R = o.map(
          (y, D) => (F.current[`${bl}${D}`] = {
            type: "sampler2D",
            isNeeded: !1
          }, $(y, D), L.current[D] = new Vl(b), L.current[D]?.load(y).then((T) => {
            $(T, D);
          }))
        );
        Promise.all(R).then(() => {
          f && f();
        }).catch((y) => {
          p?.(y), f && f();
        });
      } else f && f();
  }, ke = (b) => {
    const R = B1.includes(i ?? "highp"), y = `precision ${R ? i : B1[1]} float;
`;
    R || C?.(
      Le(
        `wrong precision type ${i}, please make sure to pass one of a valid precision lowp, mediump, highp, by default you shader precision will be set to highp.`
      )
    );
    let D = y.concat(`#define DPR ${u.toFixed(1)}
`).concat(b.replace(/texture\(/g, "texture2D("));
    for (const Z of Object.keys(F.current))
      if (b.includes(Z)) {
        const se = F.current[Z];
        if (!se) continue;
        D = Sl(
          D,
          `uniform ${se.type} ${Z}${se.arraySize || ""}; 
`,
          D.lastIndexOf(y) + y.length
        ), se.isNeeded = !0;
      }
    return b.includes("mainImage") && (D = D.concat(kl)), D;
  }, de = (b) => {
    const R = m.current;
    if (!R || !x.current) return;
    const y = M.current ? (b - M.current) / 1e3 : 0;
    M.current = b;
    const D = V.current;
    if (D)
      for (const T of Object.keys(D)) {
        const Z = D[T];
        if (Z && F.current[T]?.isNeeded) {
          if (!x.current) return;
          const se = R.getUniformLocation(
            x.current,
            T
          );
          if (!se) return;
          Rl(
            R,
            se,
            Z.type,
            Z.value
          );
        }
      }
    if (F.current.iMouse?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        _1
      );
      R.uniform4fv(T, F.current.iMouse.value);
    }
    if (F.current.iChannelResolution?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        U1
      );
      R.uniform3fv(
        T,
        F.current.iChannelResolution.value
      );
    }
    if (F.current.iDeviceOrientation?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        z1
      );
      R.uniform4fv(
        T,
        F.current.iDeviceOrientation.value
      );
    }
    if (F.current.iTime?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        P1
      );
      R.uniform1f(T, E.current += y);
    }
    if (F.current.iTimeDelta?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        j1
      );
      R.uniform1f(T, y);
    }
    if (F.current.iDate?.isNeeded) {
      const T = /* @__PURE__ */ new Date(), Z = T.getMonth() + 1, se = T.getDate(), ue = T.getFullYear(), ee = T.getHours() * 60 * 60 + T.getMinutes() * 60 + T.getSeconds() + T.getMilliseconds() * 1e-3, ye = R.getUniformLocation(
        x.current,
        D1
      );
      R.uniform4fv(ye, [ue, Z, se, ee]);
    }
    if (F.current.iFrame?.isNeeded) {
      const T = R.getUniformLocation(
        x.current,
        Z1
      ), Z = F.current.iFrame.value;
      R.uniform1i(T, Z), F.current.iFrame.value = Z + 1;
    }
    if (L.current.length > 0)
      for (let T = 0; T < L.current.length; T++) {
        const Z = L.current[T];
        if (!Z) return;
        const { isVideo: se, _webglTexture: ue, source: ee, flipY: ye, isLoaded: Ve } = Z;
        if (!Ve || !ue || !ee) return;
        if (F.current[`iChannel${T}`]?.isNeeded) {
          if (!x.current) return;
          const He = R.getUniformLocation(
            x.current,
            `iChannel${T}`
          );
          R.activeTexture(R.TEXTURE0 + T), R.bindTexture(R.TEXTURE_2D, ue), R.uniform1i(He, T), se && Z.updateTexture(
            ue,
            ee,
            ye
          );
        }
      }
  }, ne = (b) => {
    const R = m.current;
    if (!R) return;
    R.viewport(0, 0, R.drawingBufferWidth, R.drawingBufferHeight), R.clear(R.COLOR_BUFFER_BIT | R.DEPTH_BUFFER_BIT), R.bindBuffer(R.ARRAY_BUFFER, v.current), R.vertexAttribPointer(
      N.current ?? 0,
      3,
      R.FLOAT,
      !1,
      0,
      0
    ), de(b), R.drawArrays(R.TRIANGLE_STRIP, 0, 4);
    const y = F.current.iMouse?.value;
    if (F.current.iMouse?.isNeeded && c !== 1 && Array.isArray(y)) {
      const D = y[0] ?? 0, T = y[1] ?? 0;
      y[0] = Y1(D, w.current[0] ?? 0, c), y[1] = Y1(T, w.current[1] ?? 0, c);
    }
    I.current = requestAnimationFrame(ne);
  }, fe = () => {
    const b = { passive: !0 };
    F.current.iMouse?.isNeeded && h.current && (h.current.addEventListener("mousemove", re, b), h.current.addEventListener("mouseout", Y, b), h.current.addEventListener("mouseup", Y, b), h.current.addEventListener("mousedown", te, b), h.current.addEventListener("touchmove", re, b), h.current.addEventListener("touchend", Y, b), h.current.addEventListener("touchstart", te, b)), F.current.iDeviceOrientation?.isNeeded && window.addEventListener(
      "deviceorientation",
      z,
      b
    ), h.current && (A.current = new ResizeObserver(X), A.current.observe(h.current), window.addEventListener("resize", X, b));
  }, me = () => {
    const b = { passive: !0 };
    F.current.iMouse?.isNeeded && h.current && (h.current.removeEventListener("mousemove", re, b), h.current.removeEventListener("mouseout", Y, b), h.current.removeEventListener("mouseup", Y, b), h.current.removeEventListener("mousedown", te, b), h.current.removeEventListener("touchmove", re, b), h.current.removeEventListener("touchend", Y, b), h.current.removeEventListener("touchstart", te, b)), F.current.iDeviceOrientation?.isNeeded && window.removeEventListener(
      "deviceorientation",
      z,
      b
    ), A.current && (A.current.disconnect(), window.removeEventListener("resize", X, b));
  };
  return q(() => {
    V.current = n;
  }, [n]), q(() => {
    const b = L.current;
    function R() {
      U();
      const y = m.current;
      y && h.current && (y.clearColor(...s), y.clearDepth(1), y.enable(y.DEPTH_TEST), y.depthFunc(y.LEQUAL), y.viewport(0, 0, h.current.width, h.current.height), h.current.height = h.current.clientHeight, h.current.width = h.current.clientWidth, W(), ae(), oe(ke(e || Ll), r || I1), O(), requestAnimationFrame(ne), fe(), X());
    }
    return requestAnimationFrame(R), () => {
      const y = m.current;
      if (y) {
        if (y.getExtension("WEBGL_lose_context")?.loseContext(), y.useProgram(null), y.deleteProgram(x.current ?? null), b.length > 0)
          for (const D of b)
            y.deleteTexture(D._webglTexture);
        x.current = null;
      }
      me(), cancelAnimationFrame(I.current ?? 0);
    };
  }, []), /* @__PURE__ */ t(
    "canvas",
    {
      ref: h,
      style: { height: "100%", width: "100%", ...l }
    }
  );
}
const Hl = `
const float TAU = 6.283185;

// Noise for dithering
vec2 randFibo(vec2 p) {
  p = fract(p * vec2(443.897, 441.423));
  p += dot(p, p.yx + 19.19);
  return fract((p.xx + p.yx) * p.xy);
}

// Tonemap
vec3 Tonemap(vec3 x) {
  x *= 4.0;
  return x / (1.0 + x);
}

// Luma for alpha
float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
}

// RGB to HSV
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// HSV to RGB
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// SDF shapes
float sdCircle(vec2 st, float r) {
  return length(st) - r;
}

float sdLine(vec2 p, float r) {
  float halfLen = r * 2.0;
  vec2 a = vec2(-halfLen, 0.0);
  vec2 b = vec2(halfLen, 0.0);
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float getSdf(vec2 st) {
  if(uShape == 1.0) return sdCircle(st, uScale);
  else if(uShape == 2.0) return sdLine(st, uScale);
  return sdCircle(st, uScale); // Default
}

vec2 turb(vec2 pos, float t, float it) {
  // Initial rotation matrix for swirl direction
  mat2 rotation = mat2(0.6, -0.25, 0.25, 0.9);
  // Secondary rotation applied each iteration (approx 53 degree rotation)
  mat2 layerRotation = mat2(0.6, -0.8, 0.8, 0.6);

  float frequency = mix(2.0, 15.0, uFrequency);
  float amplitude = uAmplitude;
  float frequencyGrowth = 1.4;
  float animTime = t * 0.1 * uSpeed;

  const int LAYERS = 4;
  for(int i = 0; i < LAYERS; i++) {
    // Calculate wave displacement for this layer
    vec2 rotatedPos = pos * rotation;
    vec2 wave = sin(frequency * rotatedPos + float(i) * animTime + it);

    // Apply displacement along rotation direction
    pos += (amplitude / frequency) * rotation[0] * wave;

    // Evolve parameters for next layer
    rotation *= layerRotation;
    amplitude *= mix(1.0, max(wave.x, wave.y), uVariance);
    frequency *= frequencyGrowth;
  }

  return pos;
}

const float ITERATIONS = 36.0;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  vec3 pp = vec3(0.0);
  vec3 bloom = vec3(0.0);
  float t = iTime * 0.5;
  vec2 pos = uv - 0.5;

  vec2 prevPos = turb(pos, t, 0.0 - 1.0 / ITERATIONS);
  float spacing = mix(1.0, TAU, uSpacing);

  for(float i = 1.0; i < ITERATIONS + 1.0; i++) {
    float iter = i / ITERATIONS;
    vec2 st = turb(pos, t, iter * spacing);
    float d = abs(getSdf(st));
    float pd = distance(st, prevPos);
    prevPos = st;
    float dynamicBlur = exp2(pd * 2.0 * 1.4426950408889634) - 1.0;
    float ds = smoothstep(0.0, uBlur * 0.05 + max(dynamicBlur * uSmoothing, 0.001), d);

    // Shift color based on iteration using uColorScale
    vec3 color = uColor;
    if(uColorShift > 0.01) {
      vec3 hsv = rgb2hsv(color);
      // Shift hue by iteration
      hsv.x = fract(hsv.x + (1.0 - iter) * uColorShift * 0.3);
      color = hsv2rgb(hsv);
    }

    float invd = 1.0 / max(d + dynamicBlur, 0.001);
    pp += (ds - 1.0) * color;
    bloom += clamp(invd, 0.0, 250.0) * color;
  }

  pp *= 1.0 / ITERATIONS;

  vec3 color;

  // Dark mode (default)
  if(uMode < 0.5) {
    // use bloom effect
    bloom = bloom / (bloom + 2e4);
    color = (-pp + bloom * 3.0 * uBloom) * 1.2;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;
    color = Tonemap(color);
    float alpha = luma(color) * uMix;
    fragColor = vec4(color * uMix, alpha);
  }

  // Light mode
  else {
    // no bloom effect
    color = -pp;
    color += (randFibo(fragCoord).x - 0.5) / 255.0;

    // Preserve hue by tone mapping brightness only
    float brightness = length(color);
    vec3 direction = brightness > 0.0 ? color / brightness : color;

    // Reinhard on brightness
    float factor = 2.0;
    float mappedBrightness = (brightness * factor) / (1.0 + brightness * factor);
    color = direction * mappedBrightness;

    // Boost saturation to compensate for white background bleed-through
    // When alpha < 1.0, white bleeds through making colors look desaturated
    // So we increase saturation to maintain vibrant appearance
    float gray = dot(color, vec3(0.2, 0.5, 0.1));
    float saturationBoost = 3.0;
    color = mix(vec3(gray), color, saturationBoost);

    // Clamp between 0-1
    color = clamp(color, 0.0, 1.0);

    float alpha = mappedBrightness * clamp(uMix, 1.0, 2.0);
    fragColor = vec4(color, alpha);
  }
}`, Al = 10, $l = 2, Bl = 0.5, Il = 0.2, Pl = 1.5, pe = {
  duration: 0.5,
  ease: "easeOut"
}, K1 = {
  duration: 0.35,
  ease: "easeOut",
  repeat: 1 / 0,
  repeatType: "mirror"
};
function Ue(e) {
  const [r, o] = B(e), n = Wn(e), s = j(null);
  Cs(n, "change", (l) => o(l));
  const i = _(
    (l, d) => {
      s.current = qn(n, l, d);
    },
    [n]
  );
  return { value: r, motionValue: n, controls: s, animate: i };
}
function jl(e, r) {
  const [o, n] = B(Al), {
    value: s,
    animate: i,
    motionValue: l
  } = Ue(Il), { value: d, animate: c } = Ue($l), { value: u, animate: f } = Ue(Bl), { value: p, animate: C } = Ue(Pl), h = ps(r, {
    fftSize: 512,
    smoothingTimeConstant: 0.55
  });
  return q(() => {
    switch (e) {
      case "idle":
      case "failed":
      case "disconnected":
        n(10), i(0.2, pe), c(1.2, pe), f(0.4, pe), C(1, pe);
        return;
      case "listening":
      case "pre-connect-buffering":
        n(20), i(0.3, { type: "spring", duration: 1, bounce: 0.35 }), c(1, pe), f(0.7, pe), C([1.5, 2], K1);
        return;
      case "thinking":
      case "connecting":
      case "initializing":
        n(30), i(0.3, pe), c(0.5, pe), f(1, pe), C([0.5, 2.5], K1);
        return;
      case "speaking":
        n(70), i(0.3, pe), c(0.75, pe), f(1.25, pe), C(1.5, pe);
        return;
    }
  }, [
    e,
    i,
    c,
    f,
    C
  ]), q(() => {
    e === "speaking" && h > 0 && !l.isAnimating() && i(0.2 + 0.2 * h, { duration: 0 });
  }, [
    e,
    h,
    l,
    i,
    c,
    f,
    C
  ]), {
    speed: o,
    scale: s,
    amplitude: d,
    frequency: u,
    brightness: p
  };
}
const Dl = Se({
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
function Zl(e) {
  const r = e.match(
    /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  );
  if (r) {
    const [, o, n, s] = r;
    return [o, n, s].map((l = "00") => parseInt(l, 16) / 255);
  }
}
function vr({
  shape: e = 1,
  speed: r = 1,
  amplitude: o = 0.5,
  frequency: n = 0.5,
  scale: s = 0.2,
  blur: i = 1,
  color: l = "#FF355E",
  colorShift: d = 1,
  brightness: c = 1,
  themeMode: u = typeof window < "u" && document.documentElement.classList.contains("dark") ? "dark" : "light",
  ref: f,
  className: p,
  ...C
}) {
  const h = Q(() => Zl(l), [l]);
  return /* @__PURE__ */ t("div", { ref: f, className: p, ...C, children: /* @__PURE__ */ t(
    Tl,
    {
      fs: Hl,
      devicePixelRatio: globalThis.devicePixelRatio ?? 1,
      uniforms: {
        // Aurora wave speed
        uSpeed: { type: "1f", value: r },
        // Edge blur/softness
        uBlur: { type: "1f", value: i },
        // Shape scale
        uScale: { type: "1f", value: s },
        // Shape type: 1=circle, 2=line
        uShape: { type: "1f", value: e },
        // Wave frequency and complexity
        uFrequency: { type: "1f", value: n },
        // Turbulence amplitude
        uAmplitude: { type: "1f", value: o },
        // Light intensity (bloom)
        uBloom: { type: "1f", value: 0 },
        // Brightness of the aurora (0-1)
        uMix: { type: "1f", value: c },
        // Color variation across layers (0-1)
        uSpacing: { type: "1f", value: 0.5 },
        // Color palette offset - shifts colors along the gradient (0-1)
        uColorShift: { type: "1f", value: d },
        // Color variation across layers (0-1)
        uVariance: { type: "1f", value: 0.1 },
        // Smoothing of the aurora (0-1)
        uSmoothing: { type: "1f", value: 1 },
        // Display mode: 0=dark background, 1=light background
        uMode: { type: "1f", value: u === "light" ? 1 : 0 },
        // Color
        uColor: { type: "3fv", value: h ?? [0, 0.7, 1] }
      },
      onError: (m) => {
        console.error("Shader error:", m);
      },
      onWarning: (m) => {
        console.warn("Shader warning:", m);
      },
      style: { width: "100%", height: "100%" }
    }
  ) });
}
vr.displayName = "AuraShader";
function z4({
  size: e = "lg",
  state: r,
  color: o,
  colorShift: n = 0.05,
  audioTrack: s,
  themeMode: i,
  className: l,
  ref: d,
  ...c
}) {
  const { speed: u, scale: f, amplitude: p, frequency: C, brightness: h } = jl(r, s);
  return /* @__PURE__ */ t(
    vr,
    {
      ref: d,
      blur: 0.2,
      color: o,
      colorShift: n,
      speed: u,
      scale: f,
      themeMode: i,
      amplitude: p,
      frequency: C,
      brightness: h,
      className: k(
        Dl({ size: e }),
        "overflow-hidden rounded-full",
        l
      ),
      ...c
    }
  );
}
const G4 = ({
  text: e,
  description: r,
  avatar: o,
  confirmationText: n,
  onConfirm: s,
  cancelText: i,
  onCancel: l,
  stackAt: d = "sm"
}) => /* @__PURE__ */ t(
  Lt,
  {
    title: e,
    description: r,
    avatar: o,
    stackAt: d,
    confirmAction: {
      label: n,
      onClick: s
    },
    rejectAction: {
      label: i,
      onClick: l
    }
  }
), _l = Se({
  base: [
    "relative flex flex-col rounded-2xl bg-f1-background",
    "border border-solid border-f1-border-secondary",
    "shadow transition-shadow duration-200",
    "w-[217px] h-[200px] p-4 gap-2"
  ],
  variants: {
    selected: {
      true: "shadow-none",
      false: "hover:shadow-md"
    }
  },
  defaultVariants: {
    selected: !1
  }
}), wr = Se({
  base: "text-lg font-semibold text-f1-foreground line-clamp-3"
}), Ol = Se({
  base: "text-sm text-f1-foreground-secondary leading-normal"
}), ze = Se({
  base: "text-sm font-medium text-f1-foreground leading-normal"
}), Ul = ({
  description: e,
  isRevealed: r,
  onAskOne: o
}) => {
  const n = G(), s = xe();
  return /* @__PURE__ */ a(Re, { children: [
    e && /* @__PURE__ */ t("span", { className: k(Ol(), "truncate"), children: e }),
    /* @__PURE__ */ t(Ee, { children: o && r && /* @__PURE__ */ t(
      J.div,
      {
        className: "absolute bottom-4 left-4 z-10",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: s ? 0 : 0.2,
          ease: [0.33, 1, 0.68, 1]
        },
        children: /* @__PURE__ */ t(
          Dt,
          {
            size: "md",
            label: n.ai.ask,
            onClick: (i) => {
              i.stopPropagation(), o();
            }
          }
        )
      }
    ) })
  ] });
}, zl = /* @__PURE__ */ new Set([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance"
]), Gl = ({ balance: e }) => /* @__PURE__ */ t(
  Qn,
  {
    amount: e.amount,
    percentage: e.percentage ?? void 0,
    invertStatus: e.invertStatus,
    hint: e.hint
  }
), Wl = (e) => {
  const {
    heading: r,
    label: o,
    content: n,
    shouldFadeContent: s = !1,
    fadeTransition: i
  } = e;
  return /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-2", children: [
    /* @__PURE__ */ t("span", { className: k(wr()), children: r }),
    /* @__PURE__ */ a(
      J.div,
      {
        className: "flex flex-1 flex-col justify-end gap-2",
        animate: { opacity: s ? 0 : 1 },
        transition: i,
        children: [
          n === "person" && /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ t(
              bt,
              {
                firstName: e.avatar.firstName,
                lastName: e.avatar.lastName,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            o && /* @__PURE__ */ t("span", { className: k(ze()), children: o })
          ] }),
          n === "people" && /* @__PURE__ */ t(
            Xn,
            {
              type: "person",
              avatars: e.avatars,
              size: "md",
              max: 3
            }
          ),
          n === "team" && /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ t(
              Yn,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            o && /* @__PURE__ */ t("span", { className: k(ze()), children: o })
          ] }),
          n === "company" && /* @__PURE__ */ a("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ t(
              g1,
              {
                name: e.avatar.name,
                src: e.avatar.src,
                size: "xs"
              }
            ),
            o && /* @__PURE__ */ t("span", { className: k(ze()), children: o })
          ] }),
          n === "alert" && /* @__PURE__ */ t(Kn, { text: e.alertLabel, level: e.level }),
          n === "balance" && /* @__PURE__ */ t(Gl, { balance: e.balance })
        ]
      }
    ),
    o && !zl.has(n) && /* @__PURE__ */ t(
      J.span,
      {
        className: k(ze()),
        animate: { opacity: s ? 0 : 1 },
        transition: i,
        children: o
      }
    )
  ] });
}, xr = {
  positive: {
    stroke: "hsl(var(--positive-50))",
    fill: "hsl(var(--positive-50))",
    border: "border-f1-border-positive-bold"
  },
  negative: {
    stroke: "hsl(var(--critical-50))",
    fill: "hsl(var(--critical-50))",
    border: "border-f1-border-critical-bold"
  },
  neutral: {
    stroke: "hsl(var(--neutral-50))",
    fill: "hsl(var(--neutral-50))",
    border: "border-f1-border"
  }
};
function ql(e, r) {
  const o = e[0]?.value ?? 0, n = e[e.length - 1]?.value ?? 0, s = Math.sign(n - o), i = r ? s * -1 : s;
  return i > 0 ? "positive" : i < 0 ? "negative" : "neutral";
}
const Xl = ({
  cx: e,
  cy: r,
  index: o,
  dataLength: n,
  color: s
}) => o !== n - 1 || e == null || r == null ? null : /* @__PURE__ */ t("circle", { cx: e, cy: r, r: 2, fill: s, stroke: "none" }), Yl = ({
  label: e,
  direction: r
}) => {
  const o = xr[r];
  return /* @__PURE__ */ t(
    "span",
    {
      className: k(
        "absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow",
        r === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full",
        o.border,
        {
          positive: "text-f1-foreground-positive",
          negative: "text-f1-foreground-critical",
          neutral: "text-f1-foreground-secondary"
        }[r]
      ),
      "data-testid": "sparkline-balance",
      children: e
    }
  );
}, Kl = ({
  data: e,
  label: r,
  invertStatus: o
}) => {
  const s = `sparkline-gradient-${ot().replace(/:/g, "")}`, i = ql(e, o), l = xr[i];
  return /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ a(
    "div",
    {
      className: "relative w-full flex-1",
      role: "img",
      "aria-label": `Sparkline chart showing ${i} trend`,
      children: [
        /* @__PURE__ */ t(Jn, { width: "100%", height: "100%", children: /* @__PURE__ */ a(
          es,
          {
            data: e,
            margin: { top: 4, right: 4, bottom: 0, left: 0 },
            children: [
              /* @__PURE__ */ t("defs", { children: /* @__PURE__ */ a("linearGradient", { id: s, x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ t("stop", { offset: "5%", stopColor: l.fill, stopOpacity: 0.3 }),
                /* @__PURE__ */ t("stop", { offset: "95%", stopColor: l.fill, stopOpacity: 0.02 })
              ] }) }),
              /* @__PURE__ */ t(ts, { hide: !0, domain: ["dataMin - 1", "dataMax + 1"] }),
              /* @__PURE__ */ t(
                rs,
                {
                  type: "linear",
                  dataKey: "value",
                  stroke: l.stroke,
                  strokeWidth: 1.5,
                  fill: `url(#${s})`,
                  fillOpacity: 1,
                  isAnimationActive: !1,
                  dot: (d) => /* @__PURE__ */ Tr(
                    Xl,
                    {
                      ...d,
                      key: d.index,
                      dataLength: e.length,
                      color: l.stroke
                    }
                  ),
                  activeDot: !1
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ t(Yl, { label: r, direction: i })
      ]
    }
  ) });
}, kr = g(
  (e, r) => {
    const {
      description: o,
      heading: n,
      label: s,
      selected: i = !1,
      onClick: l,
      onAskOne: d,
      className: c,
      ...u
    } = e, [f, p] = B(!1), [C, h] = B(!1), m = f || C, v = xe(), x = m && !!d, N = {
      duration: v ? 0 : 0.2,
      ease: [0.33, 1, 0.68, 1]
    }, I = () => {
      l?.();
    }, H = (S) => {
      S.currentTarget === S.target && (S.key === "Enter" || S.key === " ") && (S.preventDefault(), l?.());
    };
    return /* @__PURE__ */ a("div", { className: "relative", children: [
      i && /* @__PURE__ */ a(Re, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            "data-testid": "selected-border",
            className: k(
              "absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient"
            )
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": !0,
            className: k(
              "pointer-events-none absolute -inset-px rounded-2xl",
              "[--gradient-angle:0deg]",
              "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]",
              "animate-rotate-gradient opacity-80 blur-sm"
            )
          }
        )
      ] }),
      /* @__PURE__ */ a(
        "div",
        {
          ref: r,
          role: l ? "button" : void 0,
          tabIndex: l ? 0 : void 0,
          className: k(
            _l({ selected: i }),
            i && "relative border-transparent",
            l && "cursor-pointer select-none",
            l && ge(),
            c
          ),
          onClick: l ? I : void 0,
          onKeyDown: l ? H : void 0,
          onMouseEnter: () => p(!0),
          onMouseLeave: () => p(!1),
          onFocus: () => h(!0),
          onBlur: () => h(!1),
          children: [
            /* @__PURE__ */ t(
              Ul,
              {
                description: o,
                isRevealed: m,
                onAskOne: d
              }
            ),
            u.content === "sparkline" ? /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-2", children: [
              /* @__PURE__ */ t("span", { className: k(wr()), children: n }),
              /* @__PURE__ */ t(
                J.div,
                {
                  className: "-ml-4 flex flex-1 flex-col",
                  animate: { opacity: x ? 0 : 1 },
                  transition: N,
                  children: /* @__PURE__ */ t(
                    Kl,
                    {
                      data: u.data,
                      label: s ?? "",
                      invertStatus: u.invertStatus
                    }
                  )
                }
              )
            ] }) : /* @__PURE__ */ t(
              Wl,
              {
                heading: n,
                label: s,
                shouldFadeContent: x,
                fadeTransition: N,
                ...u
              }
            )
          ]
        }
      )
    ] });
  }
);
kr.displayName = "F0AiInsightCardInternal";
const Ql = ["className"], Lr = g((e, r) => {
  const o = Ql.reduce((n, s) => {
    const { [s]: i, ...l } = n;
    return l;
  }, e);
  return /* @__PURE__ */ t(kr, { ref: r, ...o });
});
Lr.displayName = "F0AiInsightCard";
const Jl = () => /* @__PURE__ */ a(
  "div",
  {
    className: "flex w-[217px] h-[200px] flex-col gap-2 rounded-2xl border border-solid border-f1-border-secondary bg-f1-background p-4",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ t(he, { className: "h-3 w-3/4 rounded" }),
      /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col justify-end gap-2", children: [
        /* @__PURE__ */ a("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ t(he, { className: "h-5 w-full rounded" }),
          /* @__PURE__ */ t(he, { className: "h-5 w-2/3 rounded" })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ t(he, { className: "h-5 w-5 rounded-full" }),
          /* @__PURE__ */ t(he, { className: "h-3 w-20 rounded" })
        ] })
      ] })
    ]
  }
), W4 = os(
  ns(Lr, Jl)
), q4 = [
  "text",
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
  "sparkline"
], br = 180, e4 = (e) => Number.isFinite(e) ? Math.max(0, Math.floor(e)) : br, t4 = (e, r) => e.length <= r ? e : `${e.slice(0, r).trimEnd()}...`, r4 = (e) => e.showActions !== !1, o4 = (e) => Object.fromEntries(
  Object.entries(e).filter(([r]) => r.startsWith("data-"))
);
function n4(e) {
  const {
    module: r,
    heading: o,
    title: n,
    subtitle: s,
    description: i,
    seeMoreLabel: l,
    maxCollapsedDescriptionLength: d = br
  } = e, [c, u] = B(!1), f = ot(), p = j(null), C = e4(
    d
  ), h = i.length > C, m = c ? i : t4(i, C), v = r4(e) ? e : null, x = o4(e);
  return q(() => {
    c && p.current?.focus();
  }, [c]), /* @__PURE__ */ a(
    "section",
    {
      className: "overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      ...x,
      children: [
        /* @__PURE__ */ a("div", { className: "flex items-center gap-3 px-4 py-3", children: [
          r && /* @__PURE__ */ t(yt, { module: r, size: "md" }),
          /* @__PURE__ */ a("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ t("h2", { className: "truncate text-lg font-semibold text-f1-foreground", children: o }),
            s && /* @__PURE__ */ t("p", { className: "truncate text-base text-f1-foreground-secondary", children: s })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 px-4 py-3", children: [
          /* @__PURE__ */ t("h3", { className: "text-lg font-semibold text-f1-foreground", children: n }),
          /* @__PURE__ */ a(
            "p",
            {
              id: f,
              ref: p,
              tabIndex: c ? -1 : void 0,
              className: k(
                "text-base text-f1-foreground whitespace-pre-wrap break-words",
                c && ge(),
                !c && "inline"
              ),
              children: [
                m,
                h && !c && /* @__PURE__ */ a(Re, { children: [
                  " ",
                  /* @__PURE__ */ t(
                    "button",
                    {
                      type: "button",
                      className: k(
                        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
                        ge()
                      ),
                      "aria-controls": f,
                      "aria-expanded": c,
                      onClick: () => u(!0),
                      children: l
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        v && /* @__PURE__ */ t("div", { className: "flex items-center justify-end gap-3 border-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: /* @__PURE__ */ t(
          Ce,
          {
            type: "button",
            label: v.primaryActionLabel,
            icon: v.primaryActionIcon,
            onClick: v.onPrimaryAction
          }
        ) })
      ]
    }
  );
}
n4.displayName = "F0AiProposalCard";
const s4 = ({
  icon: e,
  title: r,
  children: o
}) => {
  const [n, s] = B(!1), i = xe();
  return /* @__PURE__ */ a(
    Et,
    {
      className: "mb-1 w-full",
      open: n,
      onOpenChange: s,
      children: [
        /* @__PURE__ */ a(Rt, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ t("span", { className: "mr-2 *:block", children: /* @__PURE__ */ t(le, { icon: e, className: "block" }) }),
          /* @__PURE__ */ t("span", { className: "mr-[2px]", children: r }),
          /* @__PURE__ */ t(
            le,
            {
              icon: We,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ t(Ft, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ t(
          J.div,
          {
            initial: !1,
            animate: {
              height: n ? "auto" : 0,
              opacity: n ? 1 : 0,
              visibility: n ? "visible" : "hidden"
            },
            transition: {
              duration: i ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: o
          }
        ) })
      ]
    }
  );
}, i4 = (e) => lc[e] ?? ft, a4 = ({ iconName: e }) => e ? /* @__PURE__ */ t("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ t(le, { icon: i4(e), size: "md", color: "default" }) }) : null;
function c4({
  sources: e,
  title: r
}) {
  const o = G();
  if (!e || e.length === 0 || !Array.isArray(e))
    return null;
  const n = r ?? o.ai.resourcesGroupTitle;
  return /* @__PURE__ */ t(s4, { icon: c1, title: n, children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: e.map((s, i) => {
    const l = /* @__PURE__ */ t(a4, { iconName: s.icon });
    return s.link ? /* @__PURE__ */ t(
      $e,
      {
        "aria-label": s.title,
        href: s.link,
        size: "md",
        target: s.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: l,
        children: /* @__PURE__ */ t("div", { className: "flex w-full items-start", children: s.title })
      },
      i
    ) : /* @__PURE__ */ a(
      "div",
      {
        className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
        children: [
          l,
          s.title
        ]
      },
      i
    );
  }) }) });
}
c4.displayName = "F0AiMessageSources";
async function l4(e, r, o) {
  const n = await import("./xlsx-Bedf3nwD.js"), s = n.utils.table_to_book(e, { sheet: "Data" });
  n.writeFile(s, `${o}.${r}`);
}
function d4({
  dataset: e,
  title: r,
  filename: o
}) {
  const n = G(), s = j(null), i = r ?? n.ai.aiTable.title, l = _(
    (d) => {
      if (!s.current) return;
      const c = o ?? (i.replace(/\s+/g, "_").toLowerCase() || "table");
      l4(s.current, d, c);
    },
    [i, o]
  );
  return e.columns?.length ? /* @__PURE__ */ a(
    e1,
    {
      display: "flex",
      flexDirection: "column",
      gap: "md",
      borderRadius: "md",
      border: "default",
      borderColor: "secondary",
      children: [
        /* @__PURE__ */ a(
          e1,
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "between",
            gap: "lg",
            border: "none",
            borderBottom: "default",
            borderColor: "secondary",
            paddingX: "md",
            paddingY: "sm",
            children: [
              /* @__PURE__ */ t(
                ie,
                {
                  tag: "h2",
                  className: "text-base font-medium capitalize text-f1-foreground",
                  children: i
                }
              ),
              /* @__PURE__ */ t(
                h1,
                {
                  icon: Me,
                  size: "md",
                  items: [
                    {
                      label: n.ai.aiTable.downloadExcel,
                      icon: Me,
                      onClick: () => l("xlsx")
                    },
                    {
                      label: n.ai.aiTable.downloadCsv,
                      icon: Me,
                      onClick: () => l("csv")
                    }
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t(e1, { overflowX: "auto", children: /* @__PURE__ */ a(
          "table",
          {
            ref: s,
            className: k(
              "w-full border-separate border-spacing-0 text-md",
              "[&_tbody_tr:last-child_td]:border-b-0"
            ),
            children: [
              /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: e.columns.map((d) => /* @__PURE__ */ t(
                "th",
                {
                  className: "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
                  children: e.columnLabels?.[d] ?? d
                },
                d
              )) }) }),
              /* @__PURE__ */ t("tbody", { children: e.rows.map((d, c) => /* @__PURE__ */ t("tr", { children: e.columns.map((u) => {
                const f = d[u];
                return /* @__PURE__ */ t(
                  "td",
                  {
                    className: "max-w-72 border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-f1-foreground",
                    children: /* @__PURE__ */ t(ie, { children: f == null ? "" : String(f) })
                  },
                  u
                );
              }) }, c)) })
            ]
          }
        ) })
      ]
    }
  ) : null;
}
d4.displayName = "F0AiTableCard";
function f4({ credits: e, trigger: r }) {
  const o = G(), [n, s] = B(!1), [i, l] = B(!1), [d, c] = B(!1), [u, f] = B(null), p = _(
    (m) => {
      s(m), m && e?.fetchUsage && (l(!0), c(!1), e.fetchUsage().then((v) => {
        f(v), c(!1);
      }).catch(() => {
        c(!0);
      }).finally(() => {
        l(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const C = u ? Math.min(100, Math.round(u.used / u.total * 100)) : 0, h = e.companyName;
  return /* @__PURE__ */ a(d1, { open: n, onOpenChange: p, children: [
    /* @__PURE__ */ t(f1, { asChild: !0, children: r ?? /* @__PURE__ */ t(
      ce,
      {
        variant: "ghost",
        hideLabel: !0,
        label: o.t("ai.credits.title"),
        icon: l1,
        pressed: n
      }
    ) }),
    /* @__PURE__ */ a(
      u1,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        collisionPadding: 12,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          h && /* @__PURE__ */ a("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ t(
              g1,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ t(ie, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ t(
                ie,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: [
            /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3", children: [
              i && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ t("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                  /* @__PURE__ */ t("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                ] }),
                /* @__PURE__ */ t("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ t("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ t("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                ] })
              ] }),
              d && /* @__PURE__ */ t("span", { className: "text-sm text-f1-foreground-secondary", children: o.t("ai.credits.creditsError") }),
              !i && !d && u && /* @__PURE__ */ a(Re, { children: [
                /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: o.t("ai.credits.title") }),
                  /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground-secondary", children: o.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      u.total - u.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ t(
                  J.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${C}%`,
                      backgroundImage: "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
                      backgroundSize: "300% 100%"
                    },
                    animate: {
                      backgroundPosition: ["0% 0%", "100% 0%"]
                    },
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: 1 / 0,
                      repeatType: "reverse"
                    }
                  }
                ) }) }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                  /* @__PURE__ */ t("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: o.t("ai.credits.monthlyCredits") })
                ] })
              ] })
            ] }),
            e.upgradePlanUrl && /* @__PURE__ */ a("div", { className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3", children: [
              /* @__PURE__ */ t("span", { children: o.t("ai.credits.needMoreCredits") }),
              /* @__PURE__ */ t(
                Ce,
                {
                  variant: "outlinePromote",
                  href: e.upgradePlanUrl,
                  label: o.t("ai.credits.upgradePlan"),
                  icon: xt
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
const u4 = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function h4({
  employeeCredits: e,
  trigger: r
}) {
  const o = G(), n = xe(), [s, i] = B(!1), [l, d] = B(!1), [c, u] = B(!1), [f, p] = B(null), C = _(
    (x) => {
      i(x), x && e?.fetchUsage && (d(!0), u(!1), e.fetchUsage().then((N) => {
        p(N), u(!1);
      }).catch(() => {
        u(!0);
      }).finally(() => {
        d(!1);
      }));
    },
    [e]
  );
  if (!e) return null;
  const h = !!e.companyName, m = f && f.total > 0 ? Math.min(100, Math.round(f.used / f.total * 100)) : 0, v = f ? Math.max(0, f.total - f.used) : 0;
  return /* @__PURE__ */ a(d1, { open: s, onOpenChange: C, children: [
    /* @__PURE__ */ t(f1, { asChild: !0, children: r ?? /* @__PURE__ */ t(
      ce,
      {
        variant: "ghost",
        hideLabel: !0,
        label: o.t("ai.credits.title"),
        icon: l1,
        pressed: s
      }
    ) }),
    /* @__PURE__ */ a(
      u1,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        collisionPadding: 12,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          h && /* @__PURE__ */ a("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ t(
              g1,
              {
                name: e.companyName ?? "",
                src: e.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ t(ie, { tag: "span", className: "font-medium", children: e.companyName ?? "" }),
              e.planName && /* @__PURE__ */ t(
                ie,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: e.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3", children: [
            l && /* @__PURE__ */ a(
              "div",
              {
                className: "flex flex-col gap-2",
                "aria-busy": "true",
                "aria-live": "polite",
                children: [
                  /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ t("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                    /* @__PURE__ */ t("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ t("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                    /* @__PURE__ */ t("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                  ] })
                ]
              }
            ),
            c && /* @__PURE__ */ t("span", { className: "text-sm text-f1-foreground-secondary", children: o.t("ai.credits.creditsError") }),
            !l && !c && f && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ t("span", { className: "text-base font-medium text-f1-foreground", children: o.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ t("span", { className: "font-medium text-f1-foreground-secondary", children: o.t("ai.credits.creditsLeft", {
                  total: v.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ t("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ t(
                J.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${m}%`,
                    backgroundImage: u4,
                    backgroundSize: "300% 100%"
                  },
                  animate: n ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
                  transition: {
                    duration: n ? 0 : 4,
                    ease: "linear",
                    repeat: n ? 0 : 1 / 0,
                    repeatType: "reverse"
                  }
                }
              ) }) }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ t("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                /* @__PURE__ */ t("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: o.t("ai.credits.monthlyCredits") })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
const n1 = ({
  credits: e,
  employeeCredits: r,
  trigger: o
}) => r ? /* @__PURE__ */ t(
  h4,
  {
    employeeCredits: r,
    trigger: o
  }
) : e ? /* @__PURE__ */ t(f4, { credits: e, trigger: o }) : null, X4 = n1, Y4 = ({
  historyEnabled: e = !1,
  title: r,
  currentThreadTitle: o,
  fullscreen: n = !1,
  lockVisualizationMode: s = !1,
  onToggleVisualizationMode: i,
  onClose: l,
  onNewChat: d,
  onOpenHistory: c,
  hasMessages: u = !1,
  credits: f,
  employeeCredits: p,
  compact: C = !1
}) => {
  const h = G(), m = ss(`(max-width: ${is.md}px)`, {
    initializeWithValue: !0
  }), v = !s && !m && /* @__PURE__ */ t(
    ce,
    {
      variant: "ghost",
      hideLabel: !0,
      label: n ? h.ai.collapseChat : h.ai.expandChat,
      icon: n ? gt : ut,
      onClick: i
    }
  ), x = /* @__PURE__ */ t(
    ce,
    {
      variant: "ghost",
      hideLabel: !0,
      label: h.ai.closeChat,
      icon: Fe,
      onClick: l
    }
  );
  return C ? /* @__PURE__ */ a(
    "header",
    {
      className: k("flex items-center justify-between gap-3 pr-4 pl-5 py-3"),
      children: [
        /* @__PURE__ */ t(
          ie,
          {
            lines: 1,
            className: "min-w-0 flex-1 text-left font-semibold text-f1-foreground",
            children: o ?? h.ai.newConversation
          }
        ),
        /* @__PURE__ */ a(
          J.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              v,
              x
            ]
          }
        )
      ]
    }
  ) : e ? /* @__PURE__ */ a(
    "header",
    {
      className: k(
        "flex justify-between pl-2.5 pr-3 py-3 w-full overflow-hidden gap-3"
      ),
      children: [
        /* @__PURE__ */ t("div", { className: "flex min-w-0 flex-1 items-center", children: !s && /* @__PURE__ */ t(
          $e,
          {
            variant: "ghost",
            size: "md",
            className: "min-w-0 max-w-full [&>div>span>span]:w-full",
            onClick: c,
            children: /* @__PURE__ */ a("div", { className: "flex min-w-0 items-center gap-1", children: [
              /* @__PURE__ */ t(ie, { lines: 1, className: "min-w-0 text-left", children: o ?? h.ai.newConversation }),
              /* @__PURE__ */ t(le, { icon: i1, color: "default", size: "md" })
            ] })
          }
        ) }),
        /* @__PURE__ */ a(
          J.div,
          {
            className: "flex shrink-0 items-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.2, ease: "easeOut" },
            children: [
              /* @__PURE__ */ t(
                n1,
                {
                  credits: f,
                  employeeCredits: p
                }
              ),
              v,
              x
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ a("header", { className: k("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ t("div", { className: "flex items-center", children: /* @__PURE__ */ t("h2", { className: "text-f1-foreground", children: r ?? "" }) }),
    /* @__PURE__ */ a(
      J.div,
      {
        className: "flex items-center",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2, ease: "easeOut" },
        children: [
          u && !s && /* @__PURE__ */ t(
            ce,
            {
              variant: "ghost",
              hideLabel: !0,
              label: h.ai.startNewChat,
              icon: p1,
              onClick: d
            }
          ),
          /* @__PURE__ */ t(
            n1,
            {
              credits: f,
              employeeCredits: p
            }
          ),
          v,
          x
        ]
      }
    )
  ] });
};
function g4() {
  if (!(typeof navigator > "u"))
    return ls(navigator.language);
}
function p4(e) {
  const r = new Date(e), o = /* @__PURE__ */ new Date();
  return Vt(r) ? "today" : St(r) ? "yesterday" : cs(r, o) ? "thisMonth" : "older";
}
function C4(e, r) {
  const o = new Date(e), n = g4(), s = E1(o, "p", { locale: n });
  if (Vt(o)) return `${r.today}, ${s}`;
  if (St(o)) return `${r.yesterday}, ${s}`;
  const i = !as(o, /* @__PURE__ */ new Date());
  return `${E1(o, i ? "MMM d yyyy" : "MMM d", {
    locale: n
  })}, ${s}`;
}
function m4(e) {
  const r = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const n of e) {
    const s = p4(n.updatedAt);
    r[s].push(n);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((n) => r[n].length > 0).map((n) => ({ key: n, threads: r[n] }));
}
function v4({
  thread: e,
  isPinned: r,
  isActive: o = !1,
  isPending: n = !1,
  onSelect: s,
  onPin: i,
  onUnpin: l,
  onDelete: d,
  className: c
}) {
  const u = G(), f = Q(
    () => [
      {
        label: r ? u.ai.unpinChat : u.ai.pinChat,
        icon: r ? mt : Ct,
        onClick: () => r ? l(e.id) : i(e.id)
      },
      {
        label: u.ai.deleteChat,
        icon: lt,
        critical: !0,
        onClick: () => d(e.id)
      }
    ],
    [r, e.id, i, l, d]
  ), p = Q(
    () => C4(e.updatedAt, {
      today: u.ai.today,
      yesterday: u.ai.yesterday
    }),
    [e.updatedAt, u.ai.today, u.ai.yesterday]
  );
  return /* @__PURE__ */ a(
    "div",
    {
      className: k(
        "group flex gap-1 cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        ge("rounded"),
        c,
        // Persistent highlight while this thread is the one open in the panel.
        o && "bg-f1-background-secondary"
      ),
      role: "button",
      tabIndex: 0,
      "aria-current": o ? "true" : void 0,
      onKeyDown: (C) => {
        (C.key === "Enter" || C.key === " ") && (C.preventDefault(), s(e.id, e.title));
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "flex w-full min-w-0 items-center gap-1",
            onClick: () => s(e.id, e.title),
            children: [
              /* @__PURE__ */ t(ie, { lines: 1, className: "py-0.5 text-left font-medium", children: e.title }),
              /* @__PURE__ */ t("span", { className: "hidden shrink-0 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline", children: p })
            ]
          }
        ),
        n ? (
          // While saving, the spinner sits where the actions button is and stays
          // visible off-hover so the row reads as "working".
          /* @__PURE__ */ t(
            "div",
            {
              className: "flex h-7 w-7 shrink-0 items-center justify-center",
              "aria-label": u.ai.threadOptions,
              children: /* @__PURE__ */ t(ds, { size: "small" })
            }
          )
        ) : /* @__PURE__ */ t(
          "div",
          {
            className: k(
              // Hidden (not just transparent) off-hover so it takes no space and
              // the title can use the full row width. Shown on hover / focus /
              // while its dropdown is open.
              "hidden items-center",
              "group-hover:flex group-focus-within:flex",
              "has-[[aria-expanded=true]]:flex"
            ),
            children: /* @__PURE__ */ t(h1, { items: f, children: /* @__PURE__ */ t(
              ce,
              {
                icon: dt,
                variant: "ghost",
                size: "sm",
                label: u.ai.threadOptions,
                hideLabel: !0
              }
            ) })
          }
        )
      ]
    }
  );
}
function Q1({
  label: e,
  threads: r,
  pinnedIds: o,
  onSelect: n,
  onPin: s,
  onUnpin: i,
  onDelete: l
}) {
  const [d, c] = B(!0), u = _(() => {
    c((p) => !p);
  }, []), f = _(
    (p) => {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), u());
    },
    [u]
  );
  return /* @__PURE__ */ a("div", { children: [
    /* @__PURE__ */ a(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: u,
        onKeyDown: f,
        className: k(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          ge("rounded")
        ),
        children: [
          /* @__PURE__ */ t("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ t(
            le,
            {
              icon: d ? i1 : ct,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    d && /* @__PURE__ */ t("div", { className: "flex flex-col", children: r.map((p) => /* @__PURE__ */ t(
      v4,
      {
        thread: p,
        isPinned: o.has(p.id),
        onSelect: n,
        onPin: s,
        onUnpin: i,
        onDelete: l
      },
      p.id
    )) })
  ] });
}
const J1 = ["w-3/5", "w-4/5", "w-2/5", "w-3/4", "w-1/2", "w-2/3"], w4 = ({ width: e }) => /* @__PURE__ */ t("div", { className: "flex items-center py-1.5 pl-1.5 pr-2", children: /* @__PURE__ */ t(he, { className: k("h-4 rounded", e) }) }), et = ({
  titleWidth: e,
  rows: r
}) => /* @__PURE__ */ a("div", { className: "flex flex-col gap-0.5", children: [
  /* @__PURE__ */ t("div", { className: "flex items-center p-1.5", children: /* @__PURE__ */ t(he, { className: k("h-3 rounded", e) }) }),
  r.map((o, n) => /* @__PURE__ */ t(w4, { width: o }, n))
] });
function x4() {
  return /* @__PURE__ */ a("div", { "aria-hidden": "true", className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ t(et, { titleWidth: "w-12", rows: J1.slice(0, 2) }),
    /* @__PURE__ */ t(et, { titleWidth: "w-24", rows: J1 })
  ] });
}
const K4 = ({
  onClose: e,
  onSelectThread: r,
  onNewChat: o,
  threads: n,
  isLoading: s,
  error: i,
  pinnedIds: l,
  onPinThread: d,
  onUnpinThread: c,
  onDeleteThread: u
}) => {
  const f = G(), [p, C] = B("");
  q(() => {
    const w = (L) => {
      L.key === "Escape" && e();
    };
    return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
  }, [e]);
  const h = Q(
    () => ({
      today: f.ai.today,
      yesterday: f.ai.yesterday,
      thisMonth: f.ai.thisMonth,
      older: f.ai.older
    }),
    [
      f.ai.today,
      f.ai.yesterday,
      f.ai.thisMonth,
      f.ai.older
    ]
  ), m = Q(() => {
    if (!p.trim()) return n;
    const w = p.toLowerCase();
    return n.filter((L) => L.title.toLowerCase().includes(w));
  }, [n, p]), v = Q(
    () => m.filter((w) => l.has(w.id)),
    [m, l]
  ), x = Q(
    () => m.filter((w) => !l.has(w.id)),
    [m, l]
  ), N = Q(
    () => m4(x),
    [x]
  ), I = _(
    (w, L) => {
      r(w, L), e();
    },
    [r, e]
  ), H = _(() => {
    o(), e();
  }, [o, e]), S = _(
    (w) => {
      u(w);
    },
    [u]
  ), E = v.length > 0 || N.length > 0;
  return Tt(
    /* @__PURE__ */ a(Re, { children: [
      /* @__PURE__ */ t(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: e,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ t(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": f.ai.chatHistory,
          className: k(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ a(
            "div",
            {
              className: k(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ a("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ t(le, { icon: c1, color: "secondary", size: "md" }),
                  /* @__PURE__ */ t(
                    "input",
                    {
                      type: "text",
                      value: p,
                      onChange: (w) => C(w.target.value),
                      placeholder: f.ai.searchChats,
                      className: k(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ t(
                    $e,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: H,
                      children: /* @__PURE__ */ a("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ t(le, { icon: p1, color: "default", size: "md" }),
                        /* @__PURE__ */ t(ie, { lines: 1, className: "text-left", children: f.ai.startNewChat })
                      ] })
                    }
                  ),
                  s && /* @__PURE__ */ t(x4, {}),
                  !s && i && /* @__PURE__ */ t("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: i }),
                  !s && !i && !E && /* @__PURE__ */ t("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: f.ai.noPreviousChats }),
                  !s && !i && v.length > 0 && /* @__PURE__ */ t(
                    Q1,
                    {
                      label: f.ai.pinnedChats,
                      threads: v,
                      pinnedIds: l,
                      onSelect: I,
                      onPin: d,
                      onUnpin: c,
                      onDelete: S
                    }
                  ),
                  !s && !i && N.map((w) => /* @__PURE__ */ t(
                    Q1,
                    {
                      label: h[w.key],
                      threads: w.threads,
                      pinnedIds: l,
                      onSelect: I,
                      onPin: d,
                      onUnpin: c,
                      onDelete: S
                    },
                    w.key
                  ))
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.body
  );
}, yr = "f0-ai-pinned-threads";
function k4() {
  const e = fs(yr, []);
  return new Set(Array.isArray(e) ? e : []);
}
function tt(e) {
  us(yr, [...e]);
}
function Q4({
  enabled: e = !1,
  fetchThreads: r,
  deleteThread: o,
  pinThread: n,
  unpinThread: s
}) {
  const [i, l] = B([]), [d, c] = B(!1), [u, f] = B(null), [p, C] = B(k4), [h, m] = B(() => /* @__PURE__ */ new Set()), v = _(async () => {
    c(!0), f(null);
    try {
      const w = await r();
      l(w);
    } catch (w) {
      const L = w instanceof Error ? w.message : "Failed to fetch chat history";
      f(L), l([]);
    } finally {
      c(!1);
    }
  }, [r]);
  q(() => {
    e && v();
  }, [e, v]);
  const x = _((w, L) => {
    C((M) => {
      if (L === M.has(w)) return M;
      const A = new Set(M);
      return L ? A.add(w) : A.delete(w), tt(A), A;
    });
  }, []), N = _((w, L) => {
    m((M) => {
      if (L === M.has(w)) return M;
      const A = new Set(M);
      return L ? A.add(w) : A.delete(w), A;
    });
  }, []), I = _(
    (w, L) => {
      const M = L ? n : s;
      x(w, L), M && (N(w, !0), M(w).catch(() => x(w, !L)).finally(() => N(w, !1)));
    },
    [n, s, x, N]
  ), H = _((w) => I(w, !0), [I]), S = _(
    (w) => I(w, !1),
    [I]
  ), E = _(
    async (w) => {
      N(w, !0);
      try {
        await o(w), l((L) => L.filter((M) => M.id !== w)), C((L) => {
          if (!L.has(w)) return L;
          const M = new Set(L);
          return M.delete(w), tt(M), M;
        });
      } catch {
        v();
      } finally {
        N(w, !1);
      }
    },
    [o, v, N]
  );
  return {
    threads: i,
    isLoading: d,
    error: u,
    refetch: v,
    pinnedIds: p,
    pendingIds: h,
    pinThread: H,
    unpinThread: S,
    deleteThread: E
  };
}
const L4 = J.create(hs), b4 = ({
  label: e,
  reduceMotion: r
}) => (
  // role="status" + aria-live so the "Applying changes" state is announced.
  /* @__PURE__ */ a(
    "div",
    {
      role: "status",
      "aria-live": "polite",
      className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md",
      children: [
        /* @__PURE__ */ t(
          L4,
          {
            size: "xs",
            animate: r ? void 0 : {
              rotate: [0, 360],
              scale: [1, 0.8, 1],
              filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
            },
            transition: r ? void 0 : {
              rotate: {
                duration: 1,
                ease: "linear",
                repeat: 1 / 0,
                repeatDelay: 1
              },
              scale: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: 1 / 0,
                repeatDelay: 1
              },
              filter: {
                duration: 1,
                times: [0, 0.5, 1],
                ease: "easeInOut",
                repeat: 1 / 0,
                repeatDelay: 1
              }
            }
          }
        ),
        /* @__PURE__ */ t("span", { className: "font-medium", children: e })
      ]
    }
  )
), J4 = Hr(function({
  active: r,
  label: o,
  className: n,
  children: s
}) {
  const { t: i } = G(), l = xe(), d = o ?? i("ai.applyingChanges");
  return q(() => {
    if (!r) return;
    const c = document.activeElement;
    c && c.getAttribute("name") !== "one-ai-input" && c.blur();
  }, [r]), /* @__PURE__ */ a("div", { className: k("relative flex flex-1 flex-col", n), children: [
    /* @__PURE__ */ t(Ee, { children: r && // Zero-height sticky anchor pinned to the top of the scroll viewport,
    // with the pill pushed to ~half the viewport height. This keeps the
    // pill centred in the visible area regardless of how tall the blurred
    // content is or how far it's scrolled.
    /* @__PURE__ */ t(
      J.div,
      {
        className: "pointer-events-none sticky top-0 z-50 flex h-0 w-full items-start justify-center overflow-visible",
        initial: { opacity: 0, scale: l ? 1 : 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: l ? 1 : 0.95 },
        children: /* @__PURE__ */ t("div", { className: "mt-[40vh]", children: /* @__PURE__ */ t(
          b4,
          {
            label: d,
            reduceMotion: l
          }
        ) })
      }
    ) }),
    /* @__PURE__ */ t(
      J.div,
      {
        className: k("flex flex-1 flex-col", r && "pointer-events-none"),
        initial: { filter: "blur(0px)" },
        animate: { filter: r ? "blur(2px)" : "blur(0px)" },
        transition: { duration: l ? 0 : 0.2 },
        children: s
      }
    )
  ] });
});
export {
  D4 as A,
  J4 as B,
  Q1 as C,
  Dt as D,
  fc as E,
  $4 as F,
  J5 as G,
  S5 as H,
  M5 as I,
  vs as J,
  Fa as K,
  di as L,
  e1 as M,
  ci as N,
  ri as O,
  ni as P,
  ei as Q,
  ii as R,
  v4 as T,
  j4 as a,
  Z4 as b,
  T2 as c,
  B4 as d,
  ir as e,
  _4 as f,
  O4 as g,
  T4 as h,
  U4 as i,
  z4 as j,
  G4 as k,
  W4 as l,
  A4 as m,
  q4 as n,
  S4 as o,
  n4 as p,
  c4 as q,
  d4 as r,
  Y4 as s,
  X4 as t,
  I4 as u,
  K4 as v,
  x4 as w,
  Q4 as x,
  H4 as y,
  P4 as z
};
