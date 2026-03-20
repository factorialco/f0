import { jsxs as T, jsx as s, Fragment as Ct } from "react/jsx-runtime";
import { aD as pc, ak as gc, dv as W1, av as vc, cz as j0, dw as xc, aC as W0, x as Z0, aV as mc, an as hn, b$ as G0, bW as pn, am as z0, ar as gn, cJ as Cc, dx as wc, dg as K0, dy as kc, M as Ec, d0 as X0, dz as Lc, dA as _c, dB as Tc, dC as Sc, d1 as Y0, dd as yc, de as Fc, dD as Ac, dE as Mc, dF as bc, J as Rc, cA as Nc, da as Oc, dG as Dc, dH as Ic, aB as Pc, dI as Bc, b_ as Hc, cu as Vc, d2 as Uc, cL as $c, ac as jc, cI as Wc, dJ as Zc, d5 as Z1, dK as q0, dL as Gc, dM as zc, b0 as J0, cB as Kc, dN as Xc, bl as Q0, a6 as Yc, t as ce, a8 as qc, K as Ut, z as Ae, F as Ft, be as ea, d3 as ta, al as Jc, bX as Ir, as as Qc, G as Ge, u as Pe, w as vn, bQ as el, bR as tl, bS as rl, bT as nl, bU as ol, a4 as o1, bV as al, E as nr, aS as il, dO as Hr, cU as sl, cS as G1, aj as wt, cP as ra, dP as na, dQ as pr, dR as z1, dS as cl, dT as ft, dU as Uo, dV as ll, dW as xn, dX as Hn, dY as fl, dZ as ul, D as oa, y as aa, bN as dl, N as mn, aY as hl, d_ as pl, B as yt, L as gl, bO as vl, bk as $o, d$ as xl, e0 as ml, e1 as Cl, aW as wl, aX as kl, ct as xr, ax as El, ay as Ll, az as _l, bj as k1, ad as Tl, O as ir, P as Sl, e2 as yl, bI as K1, a2 as Fl, a3 as Al, a5 as Ml, e3 as bl, ap as Rl, e4 as Nl, aZ as Cn, a_ as wn, a$ as a1, d7 as Ol, b7 as Dl, ao as Il } from "./F0Input-C4NGKorj.js";
import * as de from "react";
import { forwardRef as M, useRef as Le, useState as pe, useCallback as ke, useEffect as Te, useId as i1, useContext as kn, createContext as X1, useMemo as Qe, Fragment as R1, useSyncExternalStore as Pl } from "react";
import { useCopilotContext as s1, useCopilotChatInternal as fr, useCopilotAction as Qt, CopilotKit as Bl } from "@copilotkit/react-core";
import { Markdown as ia, useChatContext as Hl, CopilotSidebar as Vl } from "@copilotkit/react-ui";
import { randomId as c1 } from "@copilotkit/shared";
import Ul, { createPortal as $l } from "react-dom";
import './F0AiChat.css';const jl = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.0378 4.99827C9.27031 4.98425 6.64086 6.62323 5.52481 9.34068C4.86209 10.9543 4.84625 12.6725 5.35698 14.2073C5.60483 14.9521 5.9767 15.6537 6.45883 16.2793C6.6563 16.5355 6.87225 16.7789 7.10576 17.0073M16.8942 6.99277C17.4439 7.53039 17.8963 8.15128 18.2391 8.82593C19.1303 10.5797 19.2812 12.6969 18.4752 14.6594C17.3591 17.3768 14.7297 19.0158 11.9621 19.0018",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.51576 15.4263L7.93678 18.1948L5.16824 17.6158",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16.1409 9.23552L16.7199 6.46699L19.4884 7.04596",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Wl = M(jl), Zl = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 19H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 13V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 12.5L19 13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 7.5,
          cy: 6.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Gl = M(Zl), zl = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Kl = M(zl), Xl = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M11 13H18C18 16.866 14.866 20 11 20C7.13401 20 4 16.866 4 13C4 9.13401 7.13401 6 11 6V13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M14 4C17.3137 4 20 6.68629 20 10H14V4Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Yl = M(Xl), ql = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 18L19.5 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.5 13L7.67769 16.1777C8.11041 16.6104 8.82683 16.5564 9.18985 16.0638L15.5 7.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Jl = M(ql), Ql = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 9L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 9L6 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 6V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 20V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 15L6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L9 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), ef = M(Ql), tf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 19.9381C12.6724 19.979 12.3387 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.4104 19.9691 12.8136 19.9095 13.2073",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), rf = M(tf), nf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M12 6C14.2091 6 16 7.79086 16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18H8C5.79086 18 4 16.2091 4 14C4 11.7909 5.79086 10 8 10C8 7.79086 9.79086 6 12 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), of = M(nf), af = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9L11 12L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), sf = M(af), cf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6.5 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 5C17.0499 6.64327 18.3625 9.16835 18.3625 12C18.3625 14.8316 17.0499 17.3567 15 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), lf = M(cf), ff = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), uf = M(ff), df = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 12H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), hf = M(df), pf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.8787 4.87868L17.1213 7.12132C17.6839 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), gf = M(pf), vf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 14L20 14V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 17H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 17H11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), xf = M(vf), mf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M15 13.75C15 12.7835 15.7462 12 16.6667 12C18.5076 12 20 13.567 20 15.5C20 17.433 18.5076 19 16.6667 19C15.7462 19 15 18.2165 15 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M9 13.75C9 12.7835 8.25381 12 7.33333 12C5.49238 12 4 13.567 4 15.5C4 17.433 5.49238 19 7.33333 19C8.25381 19 9 18.2165 9 17.25V13.75Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Cf = M(mf), wf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 6H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 18H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 9H6C4.89543 9 4 9.89543 4 11V13C4 14.1046 4.89543 15 6 15H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), kf = M(wf), Ef = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 11H9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 11H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 15H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 11H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 15L12.5 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Lf = M(Ef), _f = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 11V16C5 17.6569 6.34315 19 8 19H9C9.55228 19 10 18.5523 10 18V16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V18C14 18.5523 14.4477 19 15 19H16C17.6569 19 19 17.6569 19 16V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Tf = M(_f), Sf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13.5 10.5L19 5M19 5H15M19 5V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 13.5L5 19M5 19H9M5 19V15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Y1 = M(Sf), yf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7.5 10.5H16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Ff = M(yf), Af = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 11V7C15 5.34315 13.6569 4 12 4C10.7386 4 9.65897 4.77854 9.21552 5.88133M10.3411 13.5C9.98492 13.2632 9.68224 12.9523 9.45508 12.5893",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M6 11C6 14.3137 8.68629 17 12 17C12.3807 17 12.7531 16.9645 13.1142 16.8967M18 11C18 11.9233 17.7915 12.7979 17.4189 13.5792",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V20M12 20H10M12 20H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Mf = M(Af), bf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 5L13.5 10.5M13.5 10.5L17.5 10.5M13.5 10.5L13.5 6.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 19L10.5 13.5M10.5 13.5L6.5 13.5M10.5 13.5L10.5 17.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), q1 = M(bf), Rf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), Nf = M(Rf), Of = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 7V9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M6.19249 16.071C6.34438 17.9842 7.85934 19.6088 9.81202 19.8494C10.5301 19.9378 11.2602 20 12 20C12.7398 20 13.4698 19.9378 14.1879 19.8494C16.1406 19.6088 17.6555 17.9842 17.8074 16.071C17.9127 14.7454 18 13.3856 18 12C18 10.6144 17.9127 9.25466 17.8074 7.92894C17.6555 6.01572 16.1406 4.39114 14.1879 4.15056C13.4698 4.0621 12.7398 4 12 4C11.2602 4 10.5301 4.0621 9.81202 4.15056C7.85934 4.39114 6.34438 6.01572 6.19249 7.92894C6.08722 9.25466 6 10.6144 6 12C6 13.3856 6.08722 14.7454 6.19249 16.071Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Df = M(Of), If = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 6,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 4,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 20,
          cy: 18,
          r: 2,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V15.5C4 13.2909 5.79086 11.5 8 11.5H16C18.2091 11.5 20 13.2909 20 15.5V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Pf = M(If), Bf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 18H6.8C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Hf = M(Bf), Vf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H19.9999L20.1308 17.3633ZM11.9999 15.3496C12.8458 15.3496 13.5896 15.459 14.2353 15.6309L14.5058 15.708L14.6278 15.7598C14.8931 15.9045 15.0292 16.2203 14.9374 16.5205C14.8322 16.8635 14.469 17.0561 14.1259 16.9512C13.5422 16.7727 12.8369 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Uf = M(Vf), $f = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M17.9999 15.3496C18.3589 15.3496 18.6503 15.641 18.6503 16V17.3496H19.9999L20.1308 17.3633C20.427 17.4238 20.6503 17.6858 20.6503 18C20.6503 18.3142 20.427 18.5762 20.1308 18.6367L19.9999 18.6504H18.6503V20L18.6366 20.1309C18.576 20.4271 18.314 20.6504 17.9999 20.6504C17.6858 20.6503 17.4237 20.427 17.3632 20.1309L17.3495 20V18.6504H15.9999C15.641 18.6503 15.3495 18.3589 15.3495 18C15.3495 17.6411 15.641 17.3497 15.9999 17.3496H17.3495V16C17.3495 15.6411 17.641 15.3497 17.9999 15.3496ZM11.9999 15.3496C12.8339 15.3496 13.5686 15.4563 14.2079 15.624L14.4765 15.6992L14.5985 15.75C14.8645 15.8936 15.0017 16.2091 14.911 16.5098C14.8202 16.8103 14.5314 16.9973 14.2304 16.9697L14.1015 16.9443L13.8788 16.8818C13.3463 16.742 12.7222 16.6504 11.9999 16.6504C10.3811 16.6504 9.24784 17.1109 8.52823 17.5537C8.1664 17.7764 7.90548 17.9966 7.73917 18.1562C7.65625 18.2359 7.59679 18.3003 7.56046 18.3418C7.54261 18.3622 7.53012 18.3774 7.52335 18.3857L7.51749 18.3936V18.3916C7.30165 18.6768 6.89669 18.7344 6.61026 18.5195C6.32321 18.3041 6.2651 17.8975 6.48038 17.6104L6.83878 17.8789C6.4877 17.6155 6.48034 17.6097 6.48038 17.6094V17.6084L6.48233 17.6074C6.48304 17.6065 6.48343 17.6047 6.48428 17.6035C6.48614 17.6011 6.48854 17.598 6.49112 17.5947C6.49637 17.588 6.50339 17.5795 6.51163 17.5693C6.52854 17.5484 6.55237 17.5201 6.58194 17.4863C6.64127 17.4185 6.72667 17.3264 6.83878 17.2188C7.06303 17.0035 7.39616 16.7235 7.84659 16.4463C8.75192 15.8892 10.1189 15.3496 11.9999 15.3496ZM11.9999 4.34961C14.568 4.34961 16.6503 6.43188 16.6503 9C16.6503 11.5681 14.568 13.6504 11.9999 13.6504C9.43187 13.6503 7.34952 11.5681 7.34952 9C7.34952 6.43194 9.43187 4.34972 11.9999 4.34961ZM11.9999 5.65039C10.1498 5.6505 8.6503 7.14991 8.6503 9C8.6503 10.8501 10.1498 12.3495 11.9999 12.3496C13.8501 12.3496 15.3495 10.8502 15.3495 9C15.3495 7.14985 13.8501 5.65039 11.9999 5.65039Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), jf = M($f), Wf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16.9956 5.39244C16.4671 5.39244 15.9583 5.593 15.5719 5.95362L15.2615 6.24335C14.854 6.62368 14.2962 6.7835 13.7388 6.7835V6.7835H10.9567C7.49952 6.7835 4.69692 9.5861 4.69692 13.0433C4.69692 14.4501 5.16102 15.7486 5.94446 16.7939C6.41907 17.4271 6.78352 18.1614 6.78352 18.9528V19.3031C6.78352 20.0713 7.40632 20.6941 8.17458 20.6941H10.1691C10.6577 20.6941 11.1105 20.4378 11.3619 20.0188L11.5051 19.7802C11.6827 19.4842 12.0026 19.3031 12.3478 19.3031V19.3031C12.693 19.3031 13.0129 19.4842 13.1905 19.7802L13.3336 20.0188C13.585 20.4378 14.0378 20.6941 14.5264 20.6941H16.521C17.2892 20.6941 17.912 20.0713 17.912 19.3031V18.4283C17.912 17.9707 18.1149 17.5425 18.419 17.2004V17.2004C18.7756 16.7992 19.2667 16.5209 19.8036 16.5209H19.9986C20.7669 16.5209 21.3897 15.8981 21.3897 15.1299V13.7388C21.3897 12.9706 20.7669 12.3478 19.9986 12.3478V12.3478C19.9769 12.3478 19.9586 12.3313 19.9561 12.3097C19.7743 10.7527 19.0212 9.37022 17.912 8.37744V6.08797C17.912 5.70384 17.6006 5.39244 17.2165 5.39244H16.9956Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M3.26033 10.2612C3.26033 9.90218 2.96931 9.61117 2.61033 9.61117C2.25134 9.61117 1.96033 9.90218 1.96033 10.2612H3.26033ZM4.7317 12.939L4.62484 12.2978C4.41139 12.3334 4.08864 12.3026 3.82727 12.084C3.57981 11.8769 3.26033 11.3941 3.26033 10.2612H2.61033H1.96033C1.96033 11.6322 2.35376 12.5462 2.99311 13.0811C3.61854 13.6043 4.35648 13.6605 4.83856 13.5801L4.7317 12.939Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Zf = M(Wf), Gf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M16.0237 3.34961C17.1906 3.35012 17.9884 4.52969 17.555 5.61328L16.3704 8.57422C16.2249 8.93815 16.1507 9.32682 16.1507 9.71875C16.1508 10.4043 16.3792 11.0712 16.8001 11.6123L18.2581 13.4873C19.1003 14.571 18.328 16.1502 16.9554 16.1504H12.6507V20C12.6505 20.3587 12.359 20.6502 12.0003 20.6504C11.6414 20.6504 11.3501 20.3588 11.3499 20V16.1504H7.0452C5.67228 16.1504 4.89988 14.5711 5.74246 13.4873L7.20047 11.6123C7.62137 11.0712 7.8498 10.4043 7.84989 9.71875C7.84985 9.32689 7.77557 8.9381 7.63016 8.57422L6.44559 5.61328C6.01212 4.5296 6.80978 3.34993 7.97684 3.34961H16.0237ZM7.97684 4.65039C7.72948 4.65071 7.56072 4.90013 7.65262 5.12988L8.83719 8.09082C9.04416 8.6084 9.15063 9.16133 9.15067 9.71875C9.15058 10.6934 8.82522 11.6408 8.22684 12.4102L6.76883 14.2852C6.59015 14.5151 6.75399 14.8496 7.0452 14.8496H16.9554C17.2463 14.8494 17.41 14.515 17.2317 14.2852L15.7737 12.4102C15.1753 11.6408 14.85 10.6934 14.8499 9.71875C14.8499 9.16126 14.9563 8.60845 15.1634 8.09082L16.3479 5.12988C16.4398 4.90022 16.2709 4.6509 16.0237 4.65039H7.97684Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), sa = M(Gf), zf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M16.0234 3.34961C17.1905 3.34991 17.9881 4.52862 17.5547 5.6123L16.3701 8.57324C16.2244 8.93747 16.1504 9.32647 16.1504 9.71875C16.1504 10.4044 16.3789 11.0701 16.7998 11.6113L18.2578 13.4863C19.1008 14.5701 18.3281 16.1494 16.9551 16.1494H12.6504V20C12.6502 20.3588 12.3588 20.6494 12 20.6494C11.6411 20.6494 11.3498 20.3588 11.3496 20V16.1494H7.0449C5.67186 16.1494 4.8992 14.5701 5.74217 13.4863L7.20017 11.6113C7.62108 11.0701 7.84956 10.4044 7.84959 9.71875C7.84959 9.32647 7.77555 8.93747 7.62986 8.57324L6.44529 5.6123C6.01182 4.52863 6.80949 3.34994 7.97654 3.34961H16.0234Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Kf = M(zf), Xf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Yf = M(Xf), qf = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M5 11.4038L5 6L6.63836 5.5319C7.87494 5.17859 9.06442 4.67747 10.181 4.03941L12 3L13.819 4.03941C14.9356 4.67747 16.1251 5.17859 17.3616 5.5319L19 6V11.4038C19 13.1235 18.7853 14.8943 17.7189 16.2435C15.6012 18.9228 12 21 12 21C12 21 8.39876 18.9228 6.28107 16.2435C5.21473 14.8943 5 13.1235 5 11.4038Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Jf = M(qf), Qf = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20L12 13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 6L12 3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), e2 = M(Qf), t2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 8V11C20 12.1046 19.1046 13 18 13H16.5207C16.1943 13 15.8886 13.1592 15.7014 13.4265L12.8927 17.439C12.6466 17.7906 12.2444 18 11.8152 18C11.0888 18 10.5 17.4112 10.5 16.6848V14H6.06155C4.76041 14 3.80569 12.7772 4.12127 11.5149L4.9319 8.27239C5.26578 6.93689 6.46573 6 7.84233 6H16H18C19.1046 6 20 6.89543 20 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), ca = M(t2), r2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M16.9401 6C16.9401 5.72386 17.164 5.5 17.4401 5.5L17.9401 5.5C19.3208 5.5 20.4401 6.61929 20.4401 8L20.4401 11C20.4401 12.3807 19.3208 13.5 17.9401 13.5L17.4401 13.5C17.164 13.5 16.9401 13.2761 16.9401 13L16.9401 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M11.7555 18.5C10.753 18.5 9.94011 17.6871 9.94011 16.6846L9.94011 14.5L6.00163 14.5C4.37522 14.5 3.18139 12.9714 3.57585 11.3936L4.38738 8.15137C4.7769 6.59328 6.17685 5.5 7.78288 5.5L14.9401 5.5C15.4924 5.5 15.9401 5.94771 15.9401 6.5L15.9401 12.9265C15.9401 13.5419 15.7508 14.1425 15.3979 14.6468L13.2428 17.7256C12.9032 18.2108 12.3478 18.4999 11.7555 18.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), la = M(r2), n2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16V13C4 11.8954 4.89543 11 6 11H7.47934C7.80566 11 8.11145 10.8408 8.29858 10.5735L11.1073 6.56099C11.3534 6.2094 11.7556 6 12.1848 6C12.9112 6 13.5 6.58885 13.5 7.31522V10H17.9384C19.2396 10 20.1943 11.2228 19.8787 12.4851L19.0681 15.7276C18.7342 17.0631 17.5343 18 16.1577 18H8H6C4.89543 18 4 17.1046 4 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), fa = M(n2), o2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M7 18C7 18.2761 6.77614 18.5 6.5 18.5H6C4.61929 18.5 3.5 17.3807 3.5 16V13C3.5 11.6193 4.61929 10.5 6 10.5H6.5C6.77614 10.5 7 10.7239 7 11V18Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M12.1846 5.5C13.1871 5.5 14 6.31291 14 7.31543V9.5H17.9385C19.5649 9.50002 20.7587 11.0286 20.3643 12.6064L19.5527 15.8486C19.1632 17.4067 17.7633 18.5 16.1572 18.5H9C8.44772 18.5 8 18.0523 8 17.5V11.0735C8 10.4581 8.18931 9.85747 8.54225 9.35324L10.6973 6.27441C11.0369 5.78921 11.5923 5.50007 12.1846 5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ua = M(o2), a2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
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
), i2 = M(a2), s2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 13.7V10.8C17 9.11984 17 8.27976 16.673 7.63803C16.3854 7.07354 15.9265 6.6146 15.362 6.32698C14.7202 6 13.8802 6 12.2 6H9.5M14.6676 17.8965C14.0998 18 13.345 18 12.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.76415 4 9.04761 4.07662 8.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 11L21 9V15L17 13V11Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), c2 = M(s2), l2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M3.1606 8.53576L11.8143 5.07428C11.9335 5.0266 12.0665 5.0266 12.1857 5.07428L20.8394 8.53576C21.2585 8.70339 21.2585 9.29661 20.8394 9.46424L12.1857 12.9257C12.0665 12.9734 11.9335 12.9734 11.8143 12.9257L3.1606 9.46424C2.74152 9.29661 2.74152 8.70339 3.1606 8.53576Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M19 10V15.6703C19 15.8703 18.8808 16.0511 18.697 16.1299L12.197 18.9156C12.0712 18.9695 11.9288 18.9695 11.803 18.9156L5.30304 16.1299C5.1192 16.0511 5 15.8703 5 15.6703V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), f2 = M(l2), u2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), d2 = M(u2), h2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 15.1V15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), p2 = M(h2), g2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 14V6.99997",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17.1V17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), v2 = M(g2), x2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 16L15 16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m2 = M(x2), C2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 16H19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w2 = M(C2), k2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 16H11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), E2 = M(k2), L2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 16H19",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _2 = M(L2), T2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ s(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ) }),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          fillRule: "evenodd",
          d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z",
          clipRule: "evenodd",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), S2 = M(T2), y2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), F2 = M(y2), A2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), M2 = M(A2), b2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 6L19 12L13 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H18.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), R2 = M(b2), N2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M4 5.78078C4 5.32191 4.3123 4.92193 4.75746 4.81063L11.7575 3.06063C11.9167 3.02082 12.0833 3.02082 12.2425 3.06063L19.2425 4.81063C19.6877 4.92193 20 5.32191 20 5.78078V8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8V5.78078Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s("path", { stroke: "currentColor", d: "M6 9V16", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M18 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10 9V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), O2 = M(N2), D2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 13L8 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9L12 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), I2 = M(D2), P2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), B2 = M(P2), H2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12.5 11.5C14.1569 11.5 15.5 10.1569 15.5 8.5C15.5 6.84315 14.1569 5.5 12.5 5.5L9 5.5C7.89543 5.5 7 6.39543 7 7.5L7 16.5C7 17.6046 7.89543 18.5 9 18.5H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14.8333 18.5C16.8584 18.5 18.5 16.933 18.5 15C18.5 13.067 16.8584 11.5 14.8333 11.5H7.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), V2 = M(H2), U2 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), $2 = M(U2), j2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M7.9999 6.99998V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), W2 = M(j2), Z2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M9.00195 4.53821L4.85303 10.1967C3.8316 11.5898 3.97926 13.5197 5.20072 14.7411L5.35342 14.8938C6.58509 16.1255 8.53503 16.264 9.92845 15.2188L15.5019 11.0382",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M15.502 11.0382C14.6524 11.8878 12.5023 11.1152 10.7096 9.32251C8.91686 7.52977 8.15226 5.38778 9.0018 4.53824C9.85135 3.68869 11.9933 4.4533 13.7861 6.24603C15.5788 8.03877 16.3515 10.1887 15.502 11.0382Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M19.5 17.5C19.5 18.6046 18.6046 19.5 17.5 19.5C16.3954 19.5 15.5 18.6046 15.5 17.5C15.5 15.8589 16.8467 14.2177 17.3299 13.6816C17.4224 13.5791 17.5776 13.5791 17.6701 13.6816C18.1533 14.2177 19.5 15.8589 19.5 17.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), G2 = M(Z2), z2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 8L12 12M12 20V12M19 8L12 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M15 15.0662V18.2338C15 19.0111 15.848 19.4912 16.5145 19.0913L17.0145 18.7913C17.3157 18.6106 17.5 18.2851 17.5 17.9338V13.8831C17.5 13.4944 17.076 13.2544 16.7428 13.4543L15.4855 14.2087C15.1843 14.3894 15 14.7149 15 15.0662Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), K2 = M(z2), X2 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M10 7C7.75 7 7 7.75 7 10C7 12.25 7.75 13 10 13C12.25 13 13 12.25 13 10C13 7.75 12.25 7 10 7Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Y2 = M(X2), q2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          width: 12,
          height: 16,
          x: 6,
          y: 4,
          stroke: "currentColor",
          rx: 3,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s("path", { stroke: "currentColor", d: "M18 8H6", vectorEffect: "non-scaling-stroke" }),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 8V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10 8V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M18 12H6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16H6",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), J2 = M(q2), Q2 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), e5 = M(Q2), t5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), r5 = M(t5), n5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V12M9 5V3M9 5V7M9 5H8C6.34315 5 5 6.34315 5 8V10V16C5 17.6569 6.34315 19 8.00001 19L10 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 10H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), o5 = M(n5), a5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10C4 8.34315 5.34315 7 7 7H7.27924C7.70967 7 8.09181 6.72457 8.22792 6.31623L8.31623 6.05132C8.72457 4.82629 9.87099 4 11.1623 4H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 6.5L16 6.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), i5 = M(a5), s5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6V15C4 16.6569 5.34315 18 7 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 13L8.5 9L12 10L16.5 6L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5.5 17L9 13.5L12.5 15.5L16.5 12L20 14.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), c5 = M(s5), l5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), f5 = M(l5), u5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "rect",
      {
        width: 16,
        height: 16,
        x: 4,
        y: 4,
        fill: "currentColor",
        rx: 8,
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), d5 = M(u5), h5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M10.508 4.49715C12.2437 4.15195 14.0458 4.41874 15.6066 5.253C17.1673 6.08728 18.3903 7.43741 19.0675 9.07234C19.7447 10.7074 19.8342 12.5272 19.3205 14.2208C18.8067 15.9143 17.7216 17.3772 16.2502 18.3604C14.7786 19.3437 13.0114 19.7868 11.2502 19.6134C9.48897 19.4399 7.8424 18.6606 6.59098 17.4093C6.33717 17.1554 6.33722 16.7442 6.59098 16.4903C6.84482 16.2365 7.2561 16.2365 7.50992 16.4903C8.54871 17.529 9.91615 18.1754 11.3781 18.3194C12.8399 18.4633 14.3071 18.0964 15.5285 17.2803C16.7497 16.4643 17.6498 15.2493 18.0763 13.8438C18.5027 12.4381 18.4284 10.9276 17.8664 9.57039C17.3042 8.21318 16.2889 7.09203 14.9933 6.39949C13.6978 5.7071 12.2016 5.48597 10.7609 5.77254C9.32029 6.05921 8.02383 6.83634 7.09196 7.97175C6.28743 8.95212 5.7977 10.1469 5.67887 11.4005L6.5402 10.5401L6.64274 10.4571C6.89502 10.2907 7.23806 10.3181 7.46012 10.5401C7.68199 10.7622 7.70952 11.1053 7.54313 11.3575L7.46012 11.46L5.46012 13.46C5.23812 13.682 4.89497 13.7093 4.64274 13.543L4.5402 13.46L2.5402 11.46L2.45719 11.3575C2.29077 11.1052 2.31822 10.7622 2.5402 10.5401C2.76225 10.3181 3.1053 10.2907 3.35758 10.4571L3.46012 10.5401L4.37028 11.4503C4.48367 9.87729 5.08099 8.37252 6.08707 7.14656C7.20984 5.77868 8.77231 4.84239 10.508 4.49715ZM12.0002 8.34968C12.3591 8.34975 12.6505 8.64113 12.6505 9.00007V11.6231L15.8224 13.4356L15.9298 13.5118C16.1569 13.7113 16.2203 14.0497 16.0646 14.3223C15.9088 14.5948 15.5851 14.7124 15.298 14.6182L15.1779 14.5645L11.6779 12.5645C11.4755 12.4488 11.3499 12.2332 11.3498 12.0001V9.00007C11.3498 8.64109 11.6412 8.34968 12.0002 8.34968Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), p5 = M(h5), g5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 9V12L15.5 14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), v5 = M(g5), x5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 17L4 12L9 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 17L20 12L15 7",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m5 = M(x5), C5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), w5 = M(C5), k5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), E5 = M(k5), L5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.65001 12C4.65001 7.94068 7.94071 4.64998 12 4.64998C16.0593 4.64998 19.35 7.94068 19.35 12C19.35 16.0593 16.0593 19.35 12 19.35C7.94071 19.35 4.65001 16.0593 4.65001 12ZM12 3.34998C7.22274 3.34998 3.35001 7.22271 3.35001 12C3.35001 16.7772 7.22274 20.65 12 20.65C16.7773 20.65 20.65 16.7772 20.65 12C20.65 7.22271 16.7773 3.34998 12 3.34998ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.6863 6 6.00001 8.68629 6.00001 12C6.00001 15.3137 8.6863 18 12 18Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), _5 = M(L5), T5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 18H13",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 15V18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12.5 7H6.2C5.0799 7 4.51984 7 4.09202 7.21799C3.71569 7.40973 3.40973 7.71569 3.21799 8.09202C3 8.51984 3 9.0799 3 10.2V11.8C3 12.9201 3 13.4802 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.51984 15 5.07989 15 6.2 15H12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M15 8C15 7.06812 15 6.60218 15.1522 6.23463C15.3552 5.74458 15.7446 5.35523 16.2346 5.15224C16.6022 5 17.0681 5 18 5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V15C21 15.9319 21 16.3978 20.8478 16.7654C20.6448 17.2554 20.2554 17.6448 19.7654 17.8478C19.3978 18 18.9319 18 18 18C17.0681 18 16.6022 18 16.2346 17.8478C15.7446 17.6448 15.3552 17.2554 15.1522 16.7654C15 16.3978 15 15.9319 15 15V8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), S5 = M(T5), y5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V10M20 10V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V10M20 10H4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), F5 = M(y5), A5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), M5 = M(A5), b5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 8V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V8M17 8H15.5M17 8H18.5M7 8H8.5M7 8H5.5M15.5 8V5C15.5 4.44772 15.0523 4 14.5 4L9.5 4C8.94772 4 8.5 4.44772 8.5 5V8M15.5 8H8.5",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), da = M(b5), R5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), N5 = M(R5), O5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 20H17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 20L9 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), D5 = M(O5), I5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M7 12V12.1",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), P5 = M(I5), B5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14.5 9H11C10.1716 9 9.5 9.67157 9.5 10.5C9.5 11.3284 10.1716 12 11 12H13C13.8284 12 14.5 12.6716 14.5 13.5C14.5 14.3284 13.8284 15 13 15H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 9V8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.1304 20 16.0663 19.1672 17.5 17.8095",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), H5 = M(B5), V5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5V14M12 14L9 11M12 14L15 11",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Vn = M(V5), U5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "rect",
        {
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fill: "#052657",
          fillOpacity: 0.06,
          rx: 4,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M8.5 10.25L12 13.75L15.5 10.25",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $5 = M(U5), j5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), W5 = M(j5), Z5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4.5 9.5L11.1542 12.6053C11.6903 12.8555 12.3097 12.8555 12.8458 12.6053L19.5 9.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), G5 = M(Z5), z5 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), K5 = M(z5), X5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 12.5C10.4746 12.5 9.27255 13.1111 8.47461 13.6914C8.07397 13.9828 7.76382 14.2739 7.55176 14.4951C7.44532 14.6062 7.36235 14.7016 7.30371 14.7715C7.27447 14.8063 7.25062 14.8347 7.2334 14.8564C7.22482 14.8673 7.21747 14.8766 7.21191 14.8838C7.20915 14.8874 7.20708 14.8909 7.20508 14.8936L7.20215 14.8975L7.2002 14.9004C6.86897 15.3422 6.95863 15.9685 7.40039 16.2998C7.84221 16.631 8.46847 16.5424 8.7998 16.1006L8.79883 16.1025L8.80176 16.0986C8.80771 16.0911 8.81843 16.0763 8.83496 16.0566C8.86806 16.0172 8.92209 15.9561 8.99512 15.8799C9.1424 15.7262 9.36385 15.517 9.65039 15.3086C10.2274 14.8889 11.0255 14.5 12 14.5C12.9745 14.5 13.7726 14.8889 14.3496 15.3086C14.6361 15.517 14.8576 15.7262 15.0049 15.8799C15.0779 15.9561 15.1319 16.0172 15.165 16.0566C15.1816 16.0763 15.1923 16.0911 15.1982 16.0986L15.2002 16.1006L15.2012 16.0996C15.5326 16.5411 16.1579 16.631 16.5996 16.2998C17.0414 15.9685 17.131 15.3412 16.7998 14.8994L16.7979 14.8975L16.7949 14.8936C16.7929 14.8909 16.7908 14.8874 16.7881 14.8838C16.7825 14.8766 16.7752 14.8673 16.7666 14.8564C16.7494 14.8347 16.7255 14.8063 16.6963 14.7715C16.6376 14.7016 16.5547 14.6062 16.4482 14.4951C16.2362 14.2739 15.926 13.9828 15.5254 13.6914C14.7275 13.1111 13.5254 12.5 12 12.5ZM8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H10C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9H8ZM14 9C13.4477 9 13 9.44772 13 10C13 10.5523 13.4477 11 14 11H16C16.5523 11 17 10.5523 17 10C17 9.44772 16.5523 9 16 9H14Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Y5 = M(X5), q5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16H16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14H8ZM10 8C9.44772 8 9 8.44772 9 9V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V9C11 8.44772 10.5523 8 10 8ZM14 8C13.4477 8 13 8.44772 13 9V11C13 11.5523 13.4477 12 14 12C14.5523 12 15 11.5523 15 11V9C15 8.44772 14.5523 8 14 8Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), J5 = M(q5), Q5 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM16.5996 13.7002C16.1578 13.3691 15.5315 13.4588 15.2002 13.9004L15.2012 13.8975L15.1982 13.9014C15.1923 13.9089 15.1814 13.9238 15.165 13.9434C15.132 13.9828 15.0778 14.044 15.0049 14.1201C14.8576 14.2738 14.636 14.4831 14.3496 14.6914C13.7726 15.111 12.9742 15.4999 12 15.5C11.0258 15.4999 10.2274 15.111 9.65039 14.6914C9.36401 14.4831 9.14237 14.2738 8.99512 14.1201C8.92223 14.044 8.86805 13.9828 8.83496 13.9434C8.81858 13.9238 8.80772 13.9089 8.80176 13.9014L8.7998 13.8994L8.79883 13.9004C8.46746 13.4591 7.84205 13.3692 7.40039 13.7002C6.95881 14.0315 6.86912 14.6588 7.2002 15.1006L7.20215 15.1025L7.20508 15.1064C7.20703 15.109 7.20924 15.1127 7.21191 15.1162C7.21744 15.1234 7.22491 15.1328 7.2334 15.1436C7.25059 15.1653 7.27457 15.1938 7.30371 15.2285C7.36233 15.2983 7.44544 15.3939 7.55176 15.5049C7.76379 15.7261 8.07413 16.0173 8.47461 16.3086C9.2725 16.8888 10.4748 17.4999 12 17.5C13.5252 17.4999 14.7275 16.8888 15.5254 16.3086C15.9259 16.0173 16.2362 15.7261 16.4482 15.5049C16.5546 15.3939 16.6377 15.2983 16.6963 15.2285C16.7254 15.1938 16.7494 15.1653 16.7666 15.1436C16.7751 15.1328 16.7826 15.1234 16.7881 15.1162C16.7908 15.1127 16.793 15.109 16.7949 15.1064L16.7979 15.1025L16.7998 15.0996C17.1309 14.6579 17.0412 14.0315 16.5996 13.7002ZM10 8C9.44784 8.00014 9 8.4478 9 9V11C9 11.5522 9.44784 11.9999 10 12C10.5522 11.9998 11 11.5522 11 11V9C11 8.44781 10.5522 8.00015 10 8ZM14 8C13.4478 8.00014 13 8.4478 13 9V11C13 11.5522 13.4478 11.9999 14 12C14.5522 11.9998 15 11.5522 15 11V9C15 8.44781 14.5522 8.00015 14 8Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), e4 = M(Q5), t4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 13.5C10.9629 13.5 10.0117 13.8245 9.2998 14.3252C8.62327 14.801 8.00007 15.5654 8 16.5C8.00007 17.0176 8.39345 17.4437 8.89746 17.4951L9 17.5H15C15.5176 17.4999 15.9437 17.1066 15.9951 16.6025L16 16.5C15.9999 15.5655 15.3767 14.801 14.7002 14.3252C13.9883 13.8246 13.037 13.5 12 13.5ZM8.44043 8.10254C7.98585 7.87888 7.42683 8.03102 7.15234 8.46973C6.87809 8.90859 6.98572 9.47831 7.38574 9.78906L7.46973 9.84766L8.11328 10.25L7.46973 10.6523C7.00174 10.9451 6.85986 11.5621 7.15234 12.0303C7.44518 12.4982 8.06211 12.6402 8.53027 12.3477L10.5303 11.0977L10.6338 11.0234C10.8638 10.835 11 10.5518 11 10.25C11 9.9483 10.8637 9.665 10.6338 9.47656L10.5303 9.40234L8.53027 8.15234L8.44043 8.10254ZM16.8477 8.46973C16.5731 8.03107 16.0141 7.8788 15.5596 8.10254L15.4697 8.15234L13.4697 9.40234L13.3662 9.47656C13.1362 9.665 13 9.94824 13 10.25C13 10.5517 13.1363 10.835 13.3662 11.0234L13.4697 11.0977L15.4697 12.3477C15.9379 12.6401 16.5549 12.4982 16.8477 12.0303C17.1402 11.5621 16.9982 10.9452 16.5303 10.6523L15.8867 10.25L16.5303 9.84766L16.6143 9.78906C17.0144 9.47836 17.1219 8.90864 16.8477 8.46973Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), r4 = M(t4), n4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM9 14C8.48235 14 8.05621 14.3934 8.00488 14.8975L8 15C8 15.9347 8.62324 16.6989 9.2998 17.1748C10.0117 17.6755 10.9629 18 12 18C13.0371 18 13.9883 17.6755 14.7002 17.1748C15.3768 16.6989 16 15.9347 16 15C16 14.4823 15.6066 14.0562 15.1025 14.0049L15 14H9ZM8.75 9C7.86303 9.00002 7.1348 9.51775 6.67285 10.1982L6.61914 10.2861C6.37872 10.732 6.51041 11.2962 6.93848 11.5869C7.36681 11.8776 7.94005 11.7916 8.26562 11.4033L8.32715 11.3213C8.52342 11.0322 8.6954 11 8.75 11C8.78986 11 8.92242 11.0175 9.10254 11.2314L9.18262 11.3359L9.24512 11.416C9.57734 11.7991 10.1528 11.8754 10.5762 11.5771C10.9992 11.2789 11.1205 10.7121 10.8721 10.2705L10.8174 10.1836L10.6328 9.94434C10.1749 9.40337 9.53409 9.00002 8.75 9ZM15.25 9C14.363 9.00002 13.6348 9.51775 13.1729 10.1982L13.1191 10.2861C12.8787 10.732 13.0104 11.2962 13.4385 11.5869C13.8668 11.8776 14.4401 11.7916 14.7656 11.4033L14.8271 11.3213C15.0234 11.0322 15.1954 11 15.25 11C15.2899 11 15.4224 11.0175 15.6025 11.2314L15.6826 11.3359L15.7451 11.416C16.0773 11.7991 16.6528 11.8754 17.0762 11.5771C17.4992 11.2789 17.6205 10.7121 17.3721 10.2705L17.3174 10.1836L17.1328 9.94434C16.6749 9.40337 16.0341 9.00002 15.25 9Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), o4 = M(n4), a4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), i4 = M(a4), s4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M14.8787 4.87868L17.1213 7.12132C17.684 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9.00002C7.34317 20 6.00002 18.6569 6.00002 17V7C6.00002 5.34315 7.34317 4 9.00002 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), c4 = M(s4), l4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M9 2.35001C6.98416 2.35001 5.35 3.98417 5.35 6.00001V14C5.35 16.0158 6.98416 17.65 9 17.65H14C16.0158 17.65 17.65 16.0158 17.65 14V8.24265C17.65 7.27461 17.2654 6.34621 16.5809 5.66171L14.3383 3.41907C13.6538 2.73456 12.7254 2.35001 11.7574 2.35001H9ZM6.65 6.00001C6.65 4.70214 7.70213 3.65001 9 3.65001H11.7574C12.3806 3.65001 12.9783 3.89759 13.4191 4.3383L15.6617 6.58095C16.1024 7.02166 16.35 7.61939 16.35 8.24265V14C16.35 15.2979 15.2979 16.35 14 16.35H9C7.70213 16.35 6.65 15.2979 6.65 14V6.00001ZM20.65 9.00001C20.65 8.64102 20.359 8.35001 20 8.35001C19.641 8.35001 19.35 8.64102 19.35 9.00001V10.4C19.35 12.0909 19.3495 13.32 19.2704 14.2879C19.192 15.2482 19.0394 15.894 18.7669 16.4289C18.254 17.4355 17.4355 18.254 16.4288 18.7669C15.894 19.0394 15.2482 19.192 14.2879 19.2704C13.32 19.3495 12.0909 19.35 10.4 19.35H9C8.64101 19.35 8.35 19.641 8.35 20C8.35 20.359 8.64101 20.65 9 20.65H10.4H10.4296C12.0847 20.65 13.3667 20.65 14.3937 20.5661C15.4344 20.4811 16.2704 20.3067 17.019 19.9252C18.2703 19.2876 19.2876 18.2703 19.9252 17.019C20.3066 16.2704 20.4811 15.4344 20.5661 14.3937C20.65 13.3667 20.65 12.0847 20.65 10.4296V10.4V9.00001Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), f4 = M(l4), u4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), d4 = M(u4), h4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M9 9.44526V4H14.8038V9.44526C14.8038 10.4578 15.1113 11.4466 15.6855 12.2806L18.8423 16.8659C19.7558 18.1928 18.8059 20 17.1949 20H6.60892C4.99797 20 4.04806 18.1928 4.96158 16.8659L8.11836 12.2806C8.69256 11.4466 9 10.4578 9 9.44526Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M8 4L16 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), p4 = M(h4), g4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), v4 = M(g4), x4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5.00001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C10.2326 18.1964 9.00001 14.7247 9.00001 12C9.00001 9.27527 10.2326 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12 20C13.7674 18.1964 15 14.7247 15 12C15 9.27527 13.7674 5.80363 12 4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m4 = M(x4), C4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M4 6V15C4 16.6569 5.34315 18 7 18H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), w4 = M(C4), k4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), E4 = M(k4), L4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), _4 = M(L4), T4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5.32843 14.3284L5.5 14.5L10.5 9.5L12.25 11.25C12.9404 11.9404 14.0596 11.9404 14.75 11.25C15.4404 10.5596 15.4404 9.44035 14.75 8.75L12.1213 6.12132C10.9497 4.94975 9.05025 4.94975 7.87868 6.12132L5.32843 8.67157C3.76633 10.2337 3.76633 12.7663 5.32843 14.3284Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M13 7V7C14.1046 5.89543 15.8954 5.89543 17 7L18.6716 8.67157C20.2337 10.2337 20.2337 12.7663 18.6716 14.3284L14.4142 18.5858C13.6332 19.3668 12.3668 19.3668 11.5858 18.5858L11 18L10.9142 18.0858C10.1332 18.8668 8.86683 18.8668 8.08579 18.0858L7.5 17.5V17.5C6.94772 18.0523 6.05228 18.0523 5.5 17.5L5.25 17.25C4.55964 16.5596 4.55964 15.4404 5.25 14.75L6 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M10.4596 15.4596C10.7135 15.2058 10.7135 14.7942 10.4596 14.5404C10.2058 14.2865 9.79422 14.2865 9.54038 14.5404L10.4596 15.4596ZM7.95962 17.9596L10.4596 15.4596L9.54038 14.5404L7.04038 17.0404L7.95962 17.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M13.4596 16.4596C13.7135 16.2058 13.7135 15.7942 13.4596 15.5404C13.2058 15.2865 12.7942 15.2865 12.5404 15.5404L13.4596 16.4596ZM10.9596 18.9596L13.4596 16.4596L12.5404 15.5404L10.0404 18.0404L10.9596 18.9596Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), S4 = M(T4), y4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 7V12M5 17V12M5 12H12V7V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 7V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 9C17 9 18 8 18 7",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), F4 = M(y4), A4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 7V12M4 17V12M4 12H11V7V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 9.5V9.5C15 8.11929 16.1193 7 17.5 7V7C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12C16.1193 12 15 13.1193 15 14.5V17H20",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), M4 = M(A4), b4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 9V9C15 7.89543 15.8954 7 17 7H17.5C18.8807 7 20 8.11929 20 9.5V9.5C20 10.8807 18.8807 12 17.5 12V12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 15V15C15 16.1046 15.8954 17 17 17H17.5C18.8807 17 20 15.8807 20 14.5V14.5C20 13.1193 18.8807 12 17.5 12V12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 7V12M4 17V12M4 12H11V7V17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), R4 = M(b4), N4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), O4 = M(N4), D4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.02676 21H8.70114C8.88929 21 9.06254 20.8948 9.14268 20.7245C9.74058 19.4545 9.99622 18.2105 9.99622 17.0039C9.99622 16.3524 9.76813 15.9227 9.46286 15.2206C9.26905 14.7748 9.03558 14.2714 8.87603 14.0142C8.55464 13.4962 7.92802 13.3349 7.46497 13.5664C7.00191 13.7979 6.88253 14.3546 7.13253 14.8546C7.38253 15.3546 8.08594 16.7242 7.42007 17.162C7.00161 17.437 6.48266 17.3625 6.10336 16.889C5.87911 16.609 5.50323 16.1147 5.50323 15.6956L5.50312 11C5.50312 9.99999 5.25003 9 4.2344 9C3.21877 9 3 10 3 11V16C3 17.5096 3.59595 18.2663 5.20354 20.5694C5.39126 20.8383 5.6988 21 6.02676 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17.9695 21H15.2951C15.1069 21 14.9337 20.8948 14.8535 20.7245C14.2556 19.4545 14 18.2105 14 17.0039C14 16.3524 14.2281 15.9227 14.5334 15.2206C14.7272 14.7748 14.9606 14.2714 15.1202 14.0142C15.4416 13.4962 16.0682 13.3349 16.5312 13.5664C16.9943 13.7979 17.1137 14.3546 16.8637 14.8546C16.6137 15.3546 15.9103 16.7242 16.5761 17.162C16.9946 17.437 17.5136 17.3625 17.8929 16.889C18.1171 16.609 18.493 16.1147 18.493 15.6956L18.4931 11C18.4931 9.99999 18.7462 9 19.7618 9C20.7774 9 20.9962 10 20.9962 11V16C20.9962 17.5096 20.4003 18.2663 18.7927 20.5694C18.605 20.8383 18.2974 21 17.9695 21Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), I4 = M(D4), P4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), B4 = M(P4), H4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
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
), V4 = M(H4), U4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M20 15L18.1213 13.1213C16.9497 11.9497 15.0503 11.9497 13.8787 13.1213L9 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 9,
          cy: 11,
          r: 2.35,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), $4 = M(U4), j4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 12,
          r: 8,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), W4 = M(j4), Z4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M20 15V10.7146C20 10.2525 19.84 9.80468 19.5471 9.44721L17.6236 7.09895C17.0538 6.40334 16.202 6.00001 15.3028 6.00001H8.31014C7.31744 6.00001 6.38901 6.49108 5.83033 7.31164L4.34677 9.49064C4.12081 9.82252 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), G4 = M(Z4), z4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), K4 = M(z4), X4 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17 6H13M9 6H13M13 6L11 18H7H15",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), Y4 = M(X4), q4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), J4 = M(q4), Q4 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ha = M(Q4), eu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), pa = M(eu), tu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 5L6 6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 5V4",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M5 9L4 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 19L18 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M15 19L15 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 15L20 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17L11 18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L7 12",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), ru = M(tu), nu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11 18V18C9.61929 19.3807 7.38071 19.3807 6 18V18C4.61929 16.6193 4.61929 14.3807 6 13L9 10C10.1046 8.89543 11.8954 8.89543 13 10V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13 5.99999V5.99999C14.3807 4.61928 16.6193 4.61929 18 6V6C19.3807 7.38071 19.3807 9.61929 18 11L15 14C13.8954 15.1046 12.1046 15.1046 11 14V14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ou = M(nu), au = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14V15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), iu = M(au), su = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M6.91895 16.2844C5.94243 15.1275 5.35384 13.6325 5.35384 12C5.35384 8.32943 8.32943 5.35384 12 5.35384C15.6706 5.35384 18.6461 8.32943 18.6461 12C18.6461 13.6325 18.0576 15.1275 17.0811 16.2844C17.417 16.4944 17.739 16.7244 18.0453 16.973L18.1792 17.0815C19.3168 15.6997 20 13.9296 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.9296 4.68318 15.6997 5.82087 17.0815L5.95467 16.973C6.26096 16.7244 6.58297 16.4944 6.91895 16.2844Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M17.0372 18.2154C15.6619 19.3313 13.9091 20 12 20C10.0909 20 8.33808 19.3313 6.96283 18.2154C8.33808 17.0995 10.0909 16.4308 12 16.4308C13.9091 16.4308 15.6619 17.0995 17.0372 18.2154Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M12 14.7077C13.6314 14.7077 14.9539 13.3852 14.9539 11.7539C14.9539 10.1225 13.6314 8.8 12 8.8C10.3686 8.8 9.04614 10.1225 9.04614 11.7539C9.04614 13.3852 10.3686 14.7077 12 14.7077Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), cu = M(su), lu = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M14.9388 10.137C14.9587 9.94491 14.9689 9.74991 14.9689 9.55251C14.9689 6.48594 12.5134 4 9.48443 4C6.45546 4 4 6.48594 4 9.55251C4 12.6191 6.45546 15.105 9.48443 15.105C9.70417 15.105 9.9209 15.0919 10.1339 15.0665V18.9333C10.1339 19.5224 10.6056 20 11.1875 20H18.4616C19.0434 20 19.5152 19.5224 19.5152 18.9333V11.2037C19.5152 10.6145 19.0434 10.137 18.4616 10.137H14.9388ZM14.9388 10.137C14.6727 12.7123 12.6678 14.7638 10.1339 15.0665V11.2037C10.1339 10.6145 10.6056 10.137 11.1875 10.137H14.9388Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), fu = M(lu), uu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M13.635 6.37192C13.9349 6.076 15.2013 5.25398 15.4679 5.51702C15.7178 5.78007 14.9013 7.04599 14.6181 7.32547C14.3348 7.6214 14.1182 7.83513 13.9682 7.98309L14.4348 12.7508L13.9016 13.2769L12.302 9.62714L11.6688 10.2519C11.219 10.7122 10.5525 11.189 10.0026 11.5178L10.0859 13.1618L9.83599 13.4084C9.83599 13.4084 9.05286 11.9617 9.01953 11.9288C9.00287 11.8959 7.53659 11.1068 7.53659 11.1068L7.78652 10.8602L9.43609 10.9424C9.76934 10.3998 10.2359 9.74222 10.7024 9.28189L11.3189 8.67359L7.65322 7.07887L8.18642 6.55277L12.9852 7.02954C13.1351 6.86514 13.3517 6.65141 13.635 6.37192Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M6.33689 3.33043C9.46941 0.223189 14.5348 0.223189 17.6506 3.33043C20.7831 6.43768 20.7831 11.4849 17.6506 14.5921C14.5181 17.6994 9.45275 17.6994 6.33689 14.5921C3.22104 11.4849 3.22104 6.43768 6.33689 3.33043ZM7.33663 13.6222C9.91929 16.1869 14.0849 16.1869 16.6675 13.6222C19.2502 11.041 19.2502 6.88157 16.6675 4.3333C14.0849 1.76859 9.91929 1.76859 7.33663 4.3333C4.75397 6.89801 4.75397 11.0574 7.33663 13.6222Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 18.3406C13.3851 18.3406 14.7014 18.0611 15.9344 17.4857C16.2843 17.3212 16.7009 17.4692 16.8675 17.8309C17.0175 18.1762 16.8675 18.5872 16.5176 18.7516C15.1013 19.4092 13.585 19.738 12.0021 19.738C10.4358 19.738 8.9029 19.4092 7.48661 18.7516C7.12004 18.5872 6.97007 18.1762 7.1367 17.8309C7.30332 17.4692 7.71988 17.3212 8.06979 17.4857C9.3028 18.0446 10.6358 18.3406 12.0021 18.3406Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M12.0021 22.5C10.7524 22.5 9.53607 22.3192 8.35304 21.941C7.98647 21.8259 7.78652 21.4314 7.8865 21.0697C8.00313 20.708 8.38637 20.4943 8.7696 20.6093C9.80266 20.9382 10.9024 21.1026 12.0021 21.1026C13.1018 21.1026 14.1682 20.9382 15.2179 20.6258C15.5845 20.5107 15.9844 20.7244 16.101 21.0861C16.2177 21.4478 16.0177 21.8424 15.6345 21.9575C14.4515 22.3192 13.2351 22.5 12.0021 22.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), du = M(uu), hu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), pu = M(hu), gu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M17 6L13.9669 7.21324C12.6676 7.73297 11.281 8 9.88159 8H6C4.89543 8 4 8.89543 4 10V13C4 14.1046 4.89543 15 6 15H7V17.25C7 18.2165 7.7835 19 8.75 19V19C9.7165 19 10.5 18.2165 10.5 17.25V15H10.8445C11.6078 15 12.3641 15.1457 13.0728 15.4291L17 17V6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 10V14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), vu = M(gu), xu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), mu = M(xu), Cu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), wu = M(Cu), ku = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Eu = M(ku), Lu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 11V11C18 14.3137 15.3137 17 12 17V17C8.68629 17 6 14.3137 6 11V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V20M12 20H10M12 20H14",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), _u = M(Lu), Tu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M10.8 4H13.2C14.8802 4 15.7202 4 16.362 4.32698C16.9265 4.6146 17.3854 5.07354 17.673 5.63803C18 6.27976 18 7.11984 18 8.8V15.2C18 16.8802 18 17.7202 17.673 18.362C17.3854 18.9265 16.9265 19.3854 16.362 19.673C15.7202 20 14.8802 20 13.2 20H10.8C9.11984 20 8.27976 20 7.63803 19.673C7.07354 19.3854 6.6146 18.9265 6.32698 18.362C6 17.7202 6 16.8802 6 15.2V8.8C6 7.11984 6 6.27976 6.32698 5.63803C6.6146 5.07354 7.07354 4.6146 7.63803 4.32698C8.27976 4 9.11984 4 10.8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Su = M(Tu), yu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 16V17",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Fu = M(yu), Au = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M11.5 7V6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Mu = M(Au), bu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12.5004 7H7C5.89543 7 5 7.89543 5 9V15C5 16.1046 5.89543 17 7 17H9.5004",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.0004 19L10.0004 17L8.0004 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 19.7)",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          width: 6.7,
          height: 6.7,
          x: 0.65,
          y: -0.65,
          stroke: "currentColor",
          rx: 1.35,
          transform: "matrix(1 0 0 -1 12 9.7)",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ru = M(bu), Nu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M13 19H7C5.89543 19 5 18.1046 5 17V6.99998C5 5.89541 5.89543 4.99998 7 4.99998H9.80017",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.00041 3L10.0004 5L8.00041 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          stroke: "currentColor",
          d: "M14 2.65002H18C18.7456 2.65002 19.35 3.25444 19.35 4.00002V6.00002C19.35 6.74561 18.7456 7.35002 18 7.35002H14C13.2544 7.35002 12.65 6.74561 12.65 6.00002V4.00002C12.65 3.25444 13.2544 2.65002 14 2.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 9.65002H18C18.7456 9.65002 19.35 10.2544 19.35 11L19.35 13C19.35 13.7456 18.7456 14.35 18 14.35H14C13.2544 14.35 12.65 13.7456 12.65 13L12.65 11C12.65 10.2544 13.2544 9.65002 14 9.65002Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M14 16.65H18C18.7456 16.65 19.35 17.2544 19.35 18V20C19.35 20.7456 18.7456 21.35 18 21.35H14C13.2544 21.35 12.65 20.7456 12.65 20V18C12.65 17.2544 13.2544 16.65 14 16.65Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Ou = M(Nu), Du = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M12.5004 17H7C5.89543 17 5 16.1046 5 15V9C5 7.89543 5.89543 7 7 7H9.5004",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M8.0004 5L10.0004 7L8.0004 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 3.65,
          fill: "currentColor",
          stroke: "currentColor",
          rx: 1.35,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "rect",
        {
          width: 6.7,
          height: 6.7,
          x: 12.65,
          y: 13.65,
          stroke: "currentColor",
          rx: 1.35,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Iu = M(Du), Pu = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M10.0004 4.34964C10.3592 4.34985 10.6508 4.64118 10.6508 5.00003C10.6508 5.35887 10.3592 5.65021 10.0004 5.65042H8.00039C6.70252 5.65042 5.65078 6.70216 5.65078 8.00003V16C5.65079 17.2979 6.70253 18.3496 8.00039 18.3496H16.0004C17.2981 18.3494 18.35 17.2978 18.35 16V13.5C18.35 13.141 18.6414 12.8496 19.0004 12.8496C19.3592 12.8499 19.6508 13.1412 19.6508 13.5V16C19.6508 18.0157 18.016 19.6502 16.0004 19.6504H8.00039C5.98456 19.6504 4.35001 18.0159 4.35 16V8.00003C4.35 5.98419 5.98455 4.34964 8.00039 4.34964H10.0004ZM15.7465 4.3721C16.8186 3.30024 18.5563 3.30022 19.6283 4.3721C20.7003 5.44416 20.7002 7.18184 19.6283 8.25394L14.0727 13.8106C13.9927 13.8905 13.8926 13.9478 13.7836 13.9776L9.70937 15.0889C9.48438 15.1502 9.24342 15.0858 9.07851 14.9209C8.91405 14.7561 8.85035 14.5158 8.91152 14.291L10.0229 10.2159L10.0502 10.1367C10.0827 10.0591 10.1299 9.98771 10.1898 9.92776L15.7465 4.3721ZM18.7094 5.29105C18.145 4.72685 17.2298 4.72687 16.6654 5.29105L11.2309 10.7246L10.4643 13.5352L13.2748 12.7686L18.7094 7.33499C19.2736 6.77058 19.2736 5.85542 18.7094 5.29105Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), J1 = M(Pu), Bu = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), Hu = M(Bu), Vu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 12H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 8H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Uu = M(Vu), $u = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 4V10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 7H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 12H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M13 17H19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 14V14C5 12.8954 5.89543 12 7 12V12C8.10457 12 9 12.8954 9 14V14C9 15.1046 8.10457 16 7 16V16C5.89543 16 5 16.8954 5 18V19H9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 6C6 6 7 5 7 4",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ju = M($u), Wu = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Zu = M(Wu), Gu = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        d: "M15 11L10 16C9.44772 16.5523 8.55228 16.5523 8 16V16C7.44772 15.4477 7.44772 14.5523 8 14L15 7C16.1046 5.89543 17.8954 5.89543 19 7V7C20.1046 8.10457 20.1046 9.89543 19 11L12 18C10.3431 19.6569 7.65685 19.6569 6 18V18C4.34315 16.3431 4.34315 13.6569 6 12L11 7",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), zu = M(Gu), Ku = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), Xu = M(Ku), Yu = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), qu = M(Yu), Ju = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 9,
          cy: 9,
          r: 4,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 16C19 16 19.75 17 19.75 17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), Qu = M(Ju), e6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 9,
          r: 4,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), t6 = M(e6), r6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinejoin: "round",
        d: "M10.7284 5.68377L11.7022 8.60545C11.8697 9.10777 11.6165 9.65354 11.1249 9.85017L9.50021 10.5C10.5002 12.5 11.5002 13.5 13.5002 14.5L14.15 12.8755C14.3467 12.3839 14.8924 12.1307 15.3947 12.2982L18.3164 13.2721C18.7248 13.4082 19.0002 13.7903 19.0002 14.2208L19.0001 16.5001C19 18.1569 17.6493 19.4784 16.0224 19.1645C13.4822 18.6743 9.8743 17.4681 7.50006 14.5C5.31143 11.7639 4.61982 9.17753 4.44221 7.39634C4.3027 5.99711 5.50072 5 6.90688 5H9.77967C10.2101 5 10.5922 5.27543 10.7284 5.68377Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), n6 = M(r6), o6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), a6 = M(o6), i6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M6.11014 8.84108L4.6879 10.2653C3.73682 11.2149 3.73682 12.7569 4.6879 13.7065L6.11159 15.1297L7.50354 15.1231C7.81855 15.1231 8.1205 14.9978 8.38856 14.7521L10.7855 12.3583C10.9609 12.1819 11.1741 12.057 11.4017 11.985C11.175 11.9053 10.9713 11.7774 10.806 11.6328L10.7959 11.624L8.38846 9.21653C8.12043 8.97081 7.81852 8.84554 7.50354 8.84554L6.11014 8.84108Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M7.48424 16.5045C8.15386 16.3583 9.16119 16.117 9.45141 15.8268L11.8553 13.4229C11.8575 13.4207 11.8672 13.4135 11.8866 13.4135C11.9059 13.4135 11.9156 13.4207 11.9179 13.4229L14.3311 15.8362C14.6543 16.1593 15.5618 16.578 16.207 16.7873L13.7091 19.2852C12.7595 20.2098 11.2175 20.2098 10.2678 19.2852L7.48424 16.5045Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M17.6459 15.3484L16.279 15.1325C15.9533 15.1325 15.6321 14.9996 15.3999 14.7674L12.9867 12.3541C12.8119 12.1793 12.6001 12.0561 12.3733 11.9845C12.5991 11.9048 12.8023 11.777 12.9672 11.6328L12.9772 11.624L15.3985 9.20274C15.6311 8.97284 15.9534 8.83927 16.279 8.83927L17.8664 8.84388L19.2878 10.2653C20.2374 11.2149 20.2374 12.7569 19.2878 13.7065L17.6459 15.3484Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M16.207 7.18168L13.7091 4.68534C12.7595 3.73426 11.2175 3.73426 10.2647 4.68534L7.3897 7.56152C8.0887 7.6709 9.16261 7.83918 9.45559 8.14921L11.8553 10.5489L11.8578 10.5515C11.8651 10.5589 11.8704 10.5612 11.8704 10.5612C11.8704 10.5612 11.8721 10.5619 11.8746 10.5618C11.8783 10.5618 11.8992 10.5604 11.9312 10.5355L14.3311 8.13563C14.6548 7.81198 15.5616 7.39149 16.207 7.18168Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), s6 = M(i6), c6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), l6 = M(c6), f6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8L12 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 5.5C7 4.11929 8.11929 3 9.5 3V3C10.8807 3 12 4.11929 12 5.5V8H9.5C8.11929 8 7 6.88071 7 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 5.5C17 4.11929 15.8807 3 14.5 3V3C13.1193 3 12 4.11929 12 5.5V8H14.5C15.8807 8 17 6.88071 17 5.5V5.5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M5 12V11.35C4.64101 11.35 4.35 11.641 4.35 12H5ZM19 12H19.65C19.65 11.641 19.359 11.35 19 11.35V12ZM5 12.65H19V11.35H5V12.65ZM18.35 12V16H19.65V12H18.35ZM16 18.35H8V19.65H16V18.35ZM5.65 16V12H4.35V16H5.65ZM8 18.35C6.70213 18.35 5.65 17.2979 5.65 16H4.35C4.35 18.0158 5.98416 19.65 8 19.65V18.35ZM18.35 16C18.35 17.2979 17.2979 18.35 16 18.35V19.65C18.0158 19.65 19.65 18.0158 19.65 16H18.35Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), u6 = M(f6), d6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 13V11.8C4 10.1198 4 9.27976 4.32698 8.63803C4.6146 8.07354 5.07354 7.6146 5.63803 7.32698C6.27976 7 7.11984 7 8.8 7H15.2C16.8802 7 17.7202 7 18.362 7.32698C18.9265 7.6146 19.3854 8.07354 19.673 8.63803C20 9.27976 20 10.1198 20 11.8V13C20 13.93 20 14.395 19.8978 14.7765C19.6204 15.8117 18.8117 16.6204 17.7765 16.8978C17.395 17 16.93 17 16 17V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V17C7.07003 17 6.60504 17 6.22354 16.8978C5.18827 16.6204 4.37962 15.8117 4.10222 14.7765C4 14.395 4 13.93 4 13Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M17 7V7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7V7",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M16 16.8V15.6C16 15.0399 16 14.7599 15.891 14.546C15.7951 14.3578 15.6422 14.2049 15.454 14.109C15.2401 14 14.9601 14 14.4 14H9.6C9.03995 14 8.75992 14 8.54601 14.109C8.35785 14.2049 8.20487 14.3578 8.10899 14.546C8 14.7599 8 15.0399 8 15.6V16.8C8 17.9201 8 18.4802 8.21799 18.908C8.40973 19.2843 8.71569 19.5903 9.09202 19.782C9.51984 20 10.0799 20 11.2 20H12.8C13.9201 20 14.4802 20 14.908 19.782C15.2843 19.5903 15.5903 19.2843 15.782 18.908C16 18.4802 16 17.9201 16 16.8Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), h6 = M(d6), p6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M5 5H19V12C19 13.6569 17.6569 15 16 15H8C6.34315 15 5 13.6569 5 12V5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15V20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L7 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 15L17 20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 5H20",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 11.5L11 9.5L13 11.5L15.5 9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), g6 = M(p6), v6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 9C9 7 10.5 6 12 6C13.5 6 15 7.5 15 9C15 12 12 11.5 12 14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 17V17.1",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), ga = M(v6), x6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 6V6C7.23858 6 5 8.23858 5 11V13M5 13V15.5C5 16.8807 6.11929 18 7.5 18V18C8.88071 18 10 16.8807 10 15.5V15.5C10 14.1193 8.88071 13 7.5 13H5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 6V6C16.2386 6 14 8.23858 14 11V13M14 13V15.5C14 16.8807 15.1193 18 16.5 18V18C17.8807 18 19 16.8807 19 15.5V15.5C19 14.1193 17.8807 13 16.5 13H14Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), m6 = M(x6), C6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M14 10V11",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M18 3V6M18 9V6M18 6H15H21",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), w6 = M(C6), k6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M9 8H15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), E6 = M(k6), L6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), _6 = M(L6), T6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M20 10V9C20 7.34315 18.6569 6 17 6H14M14 6L16 4M14 6L16 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 14V15C4 16.6569 5.34315 18 7 18H10M10 18L8 20M10 18L8 16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16C14 14.8954 14.8954 14 16 14Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), S6 = M(T6), y6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), F6 = M(y6), A6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 20",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
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
), M6 = M(A6), b6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), R6 = M(b6), N6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 17.5,
          cy: 15.5,
          r: 4.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 10L11 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), O6 = M(N6), D6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 16L19 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 11,
          cy: 10.5,
          r: 2.5,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 11,
          cy: 11,
          r: 7,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), I6 = M(D6), P6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), B6 = M(P6), H6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M17 4L20 7M20 7L17 10M20 7H16C13.7909 7 12 8.79086 12 11V11.5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), V6 = M(H6), U6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10.5 20.5H3.5L10.5 13.5H3.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), $6 = M(U6), j6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M5.99999 17V6.99999C5.99999 5.89542 6.89542 4.99999 7.99999 4.99999C9.10456 4.99999 9.99999 5.89542 9.99999 6.99999V17C9.99999 18.1046 9.10456 19 7.99999 19C6.89542 19 5.99999 18.1046 5.99999 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M14 17V6.99999C14 5.89542 14.8954 4.99999 16 4.99999C17.1046 4.99999 18 5.89542 18 6.99999V17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), W6 = M(j6), Z6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M5.99988 16.5536V7.44636C5.99988 5.91072 7.65884 4.94798 8.99216 5.70988L16.961 10.2635C18.3047 11.0313 18.3047 12.9687 16.961 13.7365L8.99216 18.2901C7.65884 19.052 5.99988 18.0893 5.99988 16.5536Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), G6 = M(Z6), z6 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), va = M(z6), K6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M16 9V18M16 18L13 15M16 18L19 15",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), X6 = M(K6), Y6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 11V19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6 14C7 14.3333 9 16 9 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), q6 = M(Y6), J6 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19M19 8L17 6M19 8L17 10",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), Q6 = M(J6), e3 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        d: "M11.5495 4.45657C11.8336 4.31449 12.1664 4.31449 12.4505 4.45657C12.6882 4.57541 12.8186 4.78023 12.887 4.89749C12.9592 5.02106 13.034 5.18019 13.1106 5.34302L14.7355 8.79579L18.3589 9.3513C18.5287 9.37731 18.699 9.40338 18.8363 9.43801C18.9722 9.4723 19.2019 9.54251 19.3806 9.74033C19.5875 9.96943 19.6794 10.2765 19.6417 10.5761C19.6095 10.8315 19.4713 11.0193 19.3819 11.1289C19.2916 11.2396 19.1697 11.3641 19.046 11.4905L19.0459 11.4905L16.4078 14.1857L17.0313 17.9992C17.0607 18.1787 17.0892 18.3529 17.1 18.4964C17.1105 18.6351 17.118 18.8698 16.9998 19.098C16.8589 19.3701 16.6012 19.5733 16.2881 19.6342C16.0208 19.6862 15.7906 19.5973 15.6655 19.5429C15.5356 19.4863 15.3838 19.4026 15.2316 19.3186L12 17.536L8.76837 19.3186C8.61616 19.4026 8.46442 19.4863 8.3345 19.5429C8.20944 19.5973 7.97922 19.6862 7.71191 19.6342C7.3988 19.5733 7.14108 19.3701 7.00016 19.098C6.88196 18.8698 6.88949 18.6351 6.89996 18.4964C6.91079 18.3529 6.9393 18.1787 6.96867 17.9992L6.96868 17.9992L7.59224 14.1857L4.95406 11.4905L4.95405 11.4905C4.8303 11.3641 4.70842 11.2396 4.6181 11.1289C4.52873 11.0193 4.39045 10.8315 4.35829 10.5761C4.32058 10.2765 4.41246 9.96944 4.6194 9.74033C4.79807 9.54251 5.02777 9.4723 5.16369 9.43801C5.30099 9.40338 5.47126 9.37731 5.64114 9.3513L5.66555 9.34756L9.26452 8.79579L10.8791 5.36484L10.8894 5.34299C10.966 5.18017 11.0409 5.02105 11.113 4.89749C11.1814 4.78023 11.3118 4.57541 11.5495 4.45657Z",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), t3 = M(e3), r3 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.5391 4.10845C11.8282 3.96385 12.1669 3.96385 12.4561 4.10845C12.6966 4.22873 12.8295 4.43653 12.9008 4.55867C12.9757 4.68708 13.0538 4.8529 13.1345 5.02446L13.1449 5.0467L14.847 8.66357L18.6417 9.24535L18.6666 9.24916C18.8456 9.27657 19.0229 9.30372 19.1655 9.33968C19.3067 9.3753 19.5399 9.4471 19.7207 9.64735C19.9315 9.88069 20.0252 10.1936 19.9867 10.4989C19.9542 10.7577 19.814 10.9489 19.721 11.0629C19.6272 11.1779 19.5002 11.3076 19.3698 11.4408L19.3526 11.4583L16.5947 14.2759C16.593 14.2776 16.5914 14.2793 16.5897 14.281C16.5905 14.2856 16.5913 14.2905 16.5921 14.2955L17.2429 18.2753L17.2468 18.2991C17.2777 18.4883 17.3074 18.6698 17.3187 18.819C17.3296 18.9634 17.3368 19.202 17.2171 19.4332C17.0735 19.7105 16.811 19.9173 16.4925 19.9792C16.222 20.0318 15.9881 19.9421 15.858 19.8854C15.723 19.8267 15.565 19.7395 15.4046 19.651L15.3825 19.6388L11.9976 17.7717L8.61264 19.6388L8.59058 19.651C8.43018 19.7395 8.27213 19.8267 8.13718 19.8854C8.00709 19.9421 7.77317 20.0318 7.50272 19.9792C7.18414 19.9173 6.92171 19.7105 6.77813 19.4332C6.65841 19.202 6.66558 18.9634 6.67648 18.819C6.68774 18.6698 6.71745 18.4883 6.7484 18.2991L6.75231 18.2753L7.40306 14.2955C7.40388 14.2905 7.40467 14.2856 7.40543 14.281C7.40382 14.2793 7.40218 14.2776 7.40051 14.2759L4.64254 11.4583L4.62536 11.4408C4.49496 11.3076 4.36799 11.1779 4.27414 11.0629C4.18122 10.9489 4.04102 10.7577 4.00844 10.4989C3.96999 10.1936 4.06368 9.88069 4.27444 9.64735C4.45531 9.4471 4.68848 9.3753 4.8297 9.33968C4.97227 9.30372 5.14958 9.27657 5.3286 9.24916C5.33689 9.24789 5.34518 9.24662 5.35347 9.24535L9.14816 8.66357L10.8503 5.0467C10.8538 5.03927 10.8572 5.03186 10.8607 5.02446C10.9414 4.8529 11.0194 4.68708 11.0944 4.55867C11.1657 4.43653 11.2986 4.22873 11.5391 4.10845ZM11.9976 5.66171L10.322 9.22235C10.3186 9.22952 10.3149 9.23742 10.311 9.24596C10.2726 9.32878 10.2066 9.47138 10.1021 9.58939C10.0123 9.69078 9.90295 9.77471 9.77927 9.83504C9.63302 9.90638 9.47424 9.92954 9.38761 9.94218C9.37873 9.94347 9.3706 9.94466 9.36332 9.94578L5.55295 10.53C5.55905 10.5362 5.56525 10.5425 5.57156 10.549L8.32952 13.3666C8.33498 13.3722 8.341 13.3782 8.3475 13.3848C8.4114 13.4493 8.5214 13.5603 8.59584 13.7005C8.65879 13.8191 8.69852 13.9481 8.71381 14.0803C8.73171 14.2352 8.70592 14.3875 8.69039 14.4792C8.68881 14.4886 8.68733 14.4973 8.68602 14.5053L8.0375 18.4714L11.3934 16.6203C11.3999 16.6167 11.4072 16.6126 11.4151 16.6082C11.4919 16.5651 11.6326 16.4861 11.7916 16.4534C11.9276 16.4254 12.0676 16.4254 12.2036 16.4534C12.3626 16.4861 12.5033 16.5651 12.5801 16.6082C12.588 16.6126 12.5953 16.6167 12.6018 16.6203L15.9577 18.4714L15.3092 14.5053C15.3078 14.4973 15.3064 14.4886 15.3048 14.4792C15.2893 14.3875 15.2635 14.2352 15.2814 14.0803C15.2967 13.9481 15.3364 13.8191 15.3993 13.7005C15.4738 13.5603 15.5838 13.4493 15.6477 13.3848C15.6542 13.3782 15.6602 13.3722 15.6657 13.3666L18.4236 10.549C18.4299 10.5425 18.4361 10.5362 18.4422 10.53L14.6319 9.94578C14.6246 9.94466 14.6164 9.94347 14.6076 9.94218C14.5209 9.92954 14.3622 9.90638 14.2159 9.83504C14.0922 9.77471 13.9829 9.69078 13.8931 9.58939C13.7886 9.47138 13.7226 9.32878 13.6842 9.24596C13.6803 9.23742 13.6766 9.22952 13.6732 9.22235L11.9976 5.66171Z",
        clipRule: "evenodd",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), n3 = M(r3), o3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 7.5V7.5C14.7014 6.60421 13.8631 6 12.9189 6H11.6056C10.6025 6 9.6658 6.5013 9.1094 7.3359V7.3359C8.4376 8.3436 8.4376 9.6564 9.1094 10.6641V10.6641C9.6658 11.4987 10.6025 12 11.6056 12H12.3944C13.3975 12 14.3342 12.5013 14.8906 13.3359V13.3359C15.5624 14.3436 15.5624 15.6564 14.8906 16.6641V16.6641C14.3342 17.4987 13.3975 18 12.3944 18H11.0811C10.1369 18 9.2986 17.3958 9 16.5V16.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 12H5",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), a3 = M(o3), i3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
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
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M20 12.5L4 12.5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), s3 = M(i3), c3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.0005 16L6.00049 16M6.00049 16L9.00049 13M6.00049 16L9.00049 19",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), l3 = M(c3), f3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7C5 5.34315 6.34315 4 8 4Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), u3 = M(f3), d3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 12L15 9M15 9V6L18 3L19 5L21 6L18 9H15Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), h3 = M(d3), p3 = (e, t) => /* @__PURE__ */ s(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ s(
      "path",
      {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4 6H9M14 6H9M9 6V18M13 12H16M19 12H16M16 12V18",
        vectorEffect: "non-scaling-stroke"
      }
    )
  }
), g3 = M(p3), v3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "circle",
        {
          cx: 12,
          cy: 13,
          r: 7.35,
          stroke: "currentColor",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M12 10.3301V12.9967L15 14.6634",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 5.5V3",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M10 3H14",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.0901 6L20.5043 7.41421",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), x3 = M(v3), m3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          d: "M16 6V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V6",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M7 18H17",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), C3 = M(m3), w3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 14V5M12 5L9 8M12 5L15 8",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), k3 = M(w3), E3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M8.8 6H15.2C16.8802 6 17.7202 6 18.362 6.32698C18.9265 6.6146 19.3854 7.07354 19.673 7.63803C20 8.27976 20 9.11984 20 10.8V13.2C20 14.8802 20 15.7202 19.673 16.362C19.3854 16.9265 18.9265 17.3854 18.362 17.673C17.7202 18 16.8802 18 15.2 18H8.8C7.11984 18 6.27976 18 5.63803 17.673C5.07354 17.3854 4.6146 16.9265 4.32698 16.362C4 15.7202 4 14.8802 4 13.2V10.8C4 9.11984 4 8.27976 4.32698 7.63803C4.6146 7.07354 5.07354 6.6146 5.63803 6.32698C6.27976 6 7.11984 6 8.8 6Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          d: "M10 14.1169V9.8831C10 9.49445 10.424 9.25439 10.7572 9.45435L14.2854 11.5713C14.6091 11.7655 14.6091 12.2345 14.2854 12.4287L10.7572 14.5457C10.424 14.7456 10 14.5056 10 14.1169Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), L3 = M(E3), _3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          stroke: "currentColor",
          strokeLinejoin: "round",
          d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
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
), T3 = M(_3), S3 = (e, t) => /* @__PURE__ */ T(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M12 5C8.13401 5 5 8.13401 5 12C5 13.1001 5.25305 14.1382 5.70318 15.0619L5.86304 15.39L5.03857 18.6682L8.27628 17.9409L8.6092 18.1256C9.6128 18.6825 10.7678 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C10.5586 21 9.19397 20.6604 7.98415 20.0563L5.47694 20.6196C4.02315 20.9461 2.73556 19.6254 3.09898 18.1804L3.74839 15.5982C3.26679 14.4952 3 13.2776 3 12Z",
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        "path",
        {
          fill: "currentColor",
          d: "M8.94117 8H10.485C10.6895 8 10.8733 8.12448 10.9492 8.3143L11.6066 9.95758C11.6977 10.1854 11.61 10.4458 11.3996 10.572L10.5882 11.0588C11.0922 12.0807 11.9193 12.9078 12.9412 13.4118L13.428 12.6004C13.5542 12.39 13.8146 12.3023 14.0424 12.3934L15.6857 13.0507C15.8755 13.1267 16 13.3105 16 13.515V15.0588C16 15.3084 15.9008 15.5478 15.7243 15.7243C15.5478 15.9008 15.3084 16 15.0588 16C13.2232 15.8884 11.4918 15.1089 10.1914 13.8086C8.89105 12.5082 8.11154 10.7768 7.99999 8.94118C7.99999 8.69156 8.09915 8.45217 8.27566 8.27566C8.45216 8.09916 8.69155 8 8.94117 8Z",
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
), y3 = M(S3), F3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicCap: f2,
  Add: pc,
  Ai: d2,
  Alert: v2,
  AlertCircle: gc,
  AlertCircleLine: p2,
  AlignTextCenter: m2,
  AlignTextJustify: w2,
  AlignTextLeft: E2,
  AlignTextRight: _2,
  Appearance: S2,
  Archive: M2,
  ArchiveOpen: F2,
  ArrowCycle: Wl,
  ArrowDown: W1,
  ArrowLeft: vc,
  ArrowRight: R2,
  ArrowUp: j0,
  Ascending: xc,
  Balance: Gl,
  Bank: O2,
  BarGraph: I2,
  Bell: B2,
  Bold: V2,
  BookOpen: $2,
  Briefcase: W2,
  Bucket: G2,
  Building: K2,
  Bullet: Y2,
  Calculator: J2,
  Calendar: W0,
  CalendarArrowDown: e5,
  CalendarArrowLeft: r5,
  CalendarArrowRight: o5,
  CameraPlus: i5,
  CardPin: Kl,
  ChartLine: c5,
  ChartPie: Yl,
  Check: Z0,
  CheckCircle: mc,
  CheckCircleLine: f5,
  CheckDouble: Jl,
  ChevronDown: hn,
  ChevronLeft: G0,
  ChevronRight: pn,
  ChevronUp: z0,
  Chip: ef,
  Circle: d5,
  Clock: v5,
  ClockBack: p5,
  ClockPlus: rf,
  Cloud: of,
  Code: m5,
  Coffee: w5,
  Command: sf,
  Comment: E5,
  Completed: _5,
  Computer: S5,
  Contactless: lf,
  CornerHandle: uf,
  CreditCard: F5,
  Cross: gn,
  CrossedCircle: Cc,
  Crown: M5,
  Delete: da,
  Deny: N5,
  Descending: wc,
  Desktop: D5,
  DollarBill: P5,
  DollarReset: H5,
  DottedCircle: K0,
  Download: Vn,
  DropdownDefault: $5,
  DropdownOpen: kc,
  Ellipsis: Ec,
  EllipsisHorizontal: X0,
  Envelope: G5,
  EnvelopeOpen: W5,
  Equal: Lc,
  EqualApproximately: _c,
  EqualGreater: Tc,
  EqualLess: Sc,
  Exit: K5,
  ExternalLink: Y0,
  EyeInvisible: yc,
  EyeVisible: Fc,
  FaceNegative: Y5,
  FaceNeutral: J5,
  FacePositive: e4,
  FaceSuperNegative: r4,
  FaceSuperPositive: o4,
  Feed: i4,
  File: c4,
  FileFilled: hf,
  FileSigned: gf,
  Files: f4,
  Filter: Ac,
  Flag: d4,
  Flask: p4,
  Folder: Mc,
  Folders: v4,
  Globe: m4,
  Graph: w4,
  Greater: bc,
  Group: _4,
  GroupBy: E4,
  Handle: Rc,
  Handshake: S4,
  HardDrive: xf,
  Heading1: F4,
  Heading2: M4,
  Heading3: R4,
  Headset: Cf,
  Heart: O4,
  HoldHeart: I4,
  Home: B4,
  Hub: V4,
  Image: $4,
  InProgressTask: W4,
  Inbox: G4,
  Info: K4,
  InfoCircle: Nc,
  InfoCircleLine: Oc,
  InputField: kf,
  Italic: Y4,
  Kanban: Dc,
  Keyboard: Lf,
  Laptop: J4,
  LayersFront: ha,
  Less: Ic,
  Lightbulb: pa,
  Link: ou,
  LinkRemove: ru,
  List: Pc,
  LockLocked: Bc,
  LockUnlocked: iu,
  LogoAvatar: cu,
  LogoEruditai: fu,
  LogoTravelperk: du,
  Marketplace: Tf,
  Masonry: pu,
  Maximize: Y1,
  Megaphone: vu,
  Menu: Hc,
  MessageFilled: Ff,
  MessageFrown: mu,
  MessageHeart: wu,
  Messages: Eu,
  Microphone: _u,
  MicrophoneNegative: Mf,
  Minimize: q1,
  Minus: Vc,
  Mobile: Su,
  Money: Mu,
  MoneyBag: Fu,
  Moon: Nf,
  Mouse: Df,
  MoveDown: Ru,
  MoveTop: Ou,
  MoveUp: Iu,
  New: J1,
  Numbers: Hu,
  Office: Uu,
  OlList: ju,
  Organization: Pf,
  PalmTree: Zu,
  Paperclip: zu,
  PartiallyCompleted: Xu,
  Password: Hf,
  PauseCircle: qu,
  Pencil: Uc,
  People: Qu,
  Person: t6,
  PersonMinus: Uf,
  PersonNegative: $c,
  PersonPlus: jf,
  Phone: n6,
  Pig: Zf,
  Pin: a6,
  PixBrazil: s6,
  Placeholder: jc,
  Plane: l6,
  Plus: Wc,
  Present: u6,
  Printer: h6,
  Proyector: g6,
  PushPin: sa,
  PushPinSolid: Kf,
  Question: ga,
  Quote: m6,
  Reaction: w6,
  Receipt: E6,
  Record: Yf,
  RemoveFavorite: _6,
  Replace: S6,
  Reset: Zc,
  Rocket: F6,
  Salad: M6,
  Save: R6,
  Schedule: O6,
  Search: Z1,
  SearchPerson: I6,
  Settings: B6,
  Share: V6,
  Shield: Jf,
  SignPost: e2,
  Sleep: $6,
  Sliders: q0,
  SolidPause: W6,
  SolidPlay: G6,
  SolidStop: va,
  Sort: X6,
  Sparkles: q6,
  Spinner: Gc,
  Split: Q6,
  Star: n3,
  StarFilled: t3,
  Strikethrough: a3,
  Suitcase: s3,
  Swap: l3,
  Table: zc,
  Tablet: u3,
  Target: h3,
  TextSize: g3,
  ThumbsDown: ca,
  ThumbsDownFilled: la,
  ThumbsUp: fa,
  ThumbsUpFilled: ua,
  Timer: x3,
  Underline: C3,
  Upload: k3,
  Upsell: J0,
  Video: L3,
  VideoRecorder: i2,
  VideoRecorderNegative: c2,
  Wallet: T3,
  Warning: Kc,
  WhatsappChat: y3,
  Windows: Xc
}, Symbol.toStringTag, { value: "Module" })), jo = ({ position: e }) => /* @__PURE__ */ s(
  Ae.div,
  {
    initial: { opacity: 0 },
    animate: { opacity: 0.6 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: "easeOut" },
    className: ce(
      "pointer-events-none absolute inset-x-0 z-10 h-4",
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
), Wo = ({
  children: e,
  disableContentPadding: t = !1
}) => {
  const { position: r } = Q0(), n = Le(null), [o, a] = pe(!0), [i, c] = pe(!0), f = ke(() => {
    const l = n.current;
    if (!l) return;
    const { scrollTop: u, scrollHeight: d, clientHeight: p } = l;
    a(u <= 0), c(u + p >= d - 1);
  }, []);
  return Te(() => {
    const l = n.current;
    if (!l) return;
    l.addEventListener("scroll", f, { passive: !0 }), f();
    const u = new ResizeObserver(() => f());
    return u.observe(l), () => {
      l.removeEventListener("scroll", f), u.disconnect();
    };
  }, [f]), /* @__PURE__ */ T("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ T(
      Yc,
      {
        viewportRef: n,
        className: ce(
          "[*[data-state=visible]_div]:bg-f1-background flex flex-1 flex-col",
          "[&_.resource-header]:p-0 [&_.resource-header]:pr-1",
          !t && "px-4 [&>div]:py-4",
          r === "fullscreen" && "h-full [&>div]:h-full [&>div>div]:h-full"
        ),
        children: [
          e,
          /* @__PURE__ */ s(
            qc,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ T(Ut, { children: [
      !o && /* @__PURE__ */ s(jo, { position: "top" }, "shadow-top"),
      !i && /* @__PURE__ */ s(jo, { position: "bottom" }, "shadow-bottom")
    ] })
  ] });
}, A3 = (e) => Array.isArray(e), Zo = ({
  primaryAction: e,
  secondaryAction: t
}) => {
  const r = t, n = e;
  if (!n && !r)
    return null;
  const o = () => n ? A3(e) ? /* @__PURE__ */ s(
    ea,
    {
      items: e.map((a) => ({
        value: a.value,
        label: a.label,
        icon: a.icon,
        disabled: a.disabled,
        loading: a.loading
      })),
      onClick: (a) => {
        e.find((c) => c.value === a)?.onClick();
      },
      variant: "default"
    }
  ) : /* @__PURE__ */ s(
    Ft,
    {
      label: e.label,
      onClick: e.onClick,
      variant: "default",
      icon: e.icon,
      disabled: e.disabled,
      loading: e.loading
    }
  ) : null;
  return /* @__PURE__ */ T("div", { className: "flex flex-row items-center justify-between border-x-0 border-b-0 border-t border-solid border-f1-border-secondary px-4 py-3", children: [
    /* @__PURE__ */ s("div", { className: "flex-1" }),
    /* @__PURE__ */ T("div", { className: "flex flex-row items-center gap-2", children: [
      r && /* @__PURE__ */ s(
        Ft,
        {
          label: t.label,
          onClick: t.onClick,
          variant: "outline",
          icon: t.icon,
          disabled: t.disabled,
          loading: t.loading
        }
      ),
      o()
    ] })
  ] });
}, M3 = M(({ ...e }, t) => /* @__PURE__ */ s("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
M3.displayName = "Breadcrumb";
const xa = M(({ className: e, children: t, ...r }, n) => {
  const o = i1();
  return /* @__PURE__ */ s(
    "ol",
    {
      ref: n,
      className: ce(
        "flex h-8 list-none flex-nowrap items-center text-f1-foreground-secondary",
        e
      ),
      ...r,
      children: /* @__PURE__ */ s(ta, { id: o, children: /* @__PURE__ */ s(Ut, { initial: !1, children: t }) })
    }
  );
});
xa.displayName = "BreadcrumbList";
const ma = ({ className: e, ...t }) => /* @__PURE__ */ s(
  "li",
  {
    className: ce("inline-flex items-center gap-0.5 pr-1", e),
    ...t
  }
);
ma.displayName = "BreadcrumbItem";
const Ca = M(({ asChild: e, className: t, ...r }, n) => /* @__PURE__ */ s(
  e ? Jc : Ir,
  {
    ref: n,
    className: ce(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...r
  }
));
Ca.displayName = "BreadcrumbLink";
const wa = M(({ className: e, ...t }, r) => /* @__PURE__ */ s(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: ce("truncate px-1.5 py-0.5 text-f1-foreground", e),
    ...t
  }
));
wa.displayName = "BreadcrumbPage";
const ka = M((e, t) => /* @__PURE__ */ s(
  "span",
  {
    ref: t,
    role: "presentation",
    "aria-hidden": "true",
    className: "h-4 w-4 text-f1-icon-secondary",
    ...e,
    children: /* @__PURE__ */ s(pn, {})
  }
));
ka.displayName = "BreadcrumbSeparator";
function b3({
  ...e
}) {
  const [t, r] = pe(e.open), n = (f) => {
    r(f), e.onOpenChange?.(f);
  }, [o, a] = pe(
    e.placeholder || e.label
  );
  return /* @__PURE__ */ s(
    Qc,
    {
      ...e,
      onOpenChange: n,
      onChange: (f, l, u) => {
        e.onChange?.(f, l, u);
      },
      onChangeSelectedOption: (f) => {
        a(f?.label || "");
      },
      label: o,
      hideLabel: !0,
      children: /* @__PURE__ */ T(
        "button",
        {
          className: "flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
          "aria-label": o,
          children: [
            /* @__PURE__ */ s("span", { className: "block grow text-f1-foreground", children: o }),
            /* @__PURE__ */ s("div", { className: "ml-2", children: /* @__PURE__ */ s(
              Ae.div,
              {
                animate: { rotate: t ? 180 : 0 },
                className: "h-[16px] w-[16px]",
                children: /* @__PURE__ */ s(
                  Ge,
                  {
                    icon: hn,
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
const Go = /* @__PURE__ */ new Map(), N1 = /* @__PURE__ */ new Set();
let Ea = 0;
function R3() {
  Ea++;
  for (const e of N1)
    e();
}
const Jr = {
  get(e) {
    return Go.get(e);
  },
  set(e, t) {
    Go.set(e, t), R3();
  },
  subscribe(e) {
    return N1.add(e), () => N1.delete(e);
  },
  getSnapshot() {
    return Ea;
  }
}, N3 = 300, O3 = 712, Un = 360;
function La(e, t) {
  try {
    const r = localStorage.getItem(e);
    return r === null ? t : JSON.parse(r);
  } catch {
    return t;
  }
}
function _a(e, t) {
  try {
    localStorage.setItem(e, JSON.stringify(t));
  } catch {
  }
}
const Ta = X1(null), Sa = "ONE-ai-chat-width", D3 = () => {
  if (typeof window > "u") return Un;
  const e = La(
    Sa,
    null
  );
  return e !== null && !isNaN(e) && e >= 300 && e <= 712 ? e : Un;
}, I3 = ({
  children: e,
  enabled: t,
  agent: r,
  initialMessage: n,
  welcomeScreenSuggestions: o = [],
  disclaimer: a,
  resizable: i = !1,
  defaultVisualizationMode: c = "sidepanel",
  lockVisualizationMode: f = !1,
  historyEnabled: l = !1,
  footer: u,
  entityResolvers: d,
  toolHints: p,
  onThumbsDown: g,
  onThumbsUp: v,
  tracking: h,
  ...m
}) => {
  const [S, F] = pe(u), [_, N] = pe(t), [I, j] = pe(c === "fullscreen"), [A, U] = pe(
    c
  ), [O, G] = pe(c !== "fullscreen"), [Y, W] = pe(r), [K, he] = pe(o), ae = Pe(), [ve, ye] = pe([
    ae.t("ai.inputPlaceholder")
  ]), [ge, me] = pe(n), [Fe, Ee] = pe(() => D3());
  Te(() => {
    I && h?.onVisibility?.();
  }, [I]);
  const [y, D] = pe(null), R = ke(
    (He) => Jr.get(He),
    []
  ), b = ke(
    (He, Gt) => {
      Jr.set(He, Gt);
    },
    []
  ), Z = Le("sidepanel"), [oe, le] = pe(
    null
  );
  Te(() => {
    typeof window > "u" || _a(Sa, Fe);
  }, [Fe]);
  const se = Le(null), re = Le(
    null
  ), Se = Le(
    null
  ), [Ce, Be] = pe(
    null
  ), [_e, ht] = pe(!1), Ue = (He) => {
    W(He);
  }, ue = (He) => {
    se.current = He;
  }, xt = (He) => {
    re.current = He;
  }, Dt = (He) => {
    Se.current = He;
  }, Zt = () => {
    se.current && se.current(), Be(null), ht(!1), D(null), A === "canvas" && U(Z.current);
  }, tr = (He, Gt) => {
    re.current && re.current(He), Be(Gt), D(null), A === "canvas" && U(Z.current);
  }, Fn = () => {
    Ee(Un);
  }, Zr = (He) => {
    if (!Se.current)
      return;
    I || j(!0);
    const Gt = typeof He == "string" ? {
      id: c1(),
      role: "user",
      content: He
    } : He;
    Se.current?.(Gt);
  };
  Te(() => {
    N(t);
  }, [t]), Te(() => {
    if (!I) {
      D(null), U("sidepanel");
      const He = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      G(!He);
    }
  }, [I]), Te(() => {
    A === "fullscreen" && !I && j(!0);
  }, [A, I]);
  const Mt = ke(
    (He) => {
      A !== "canvas" && (Z.current = A), D(He), U("canvas"), I || j(!0);
    },
    [A, I]
  ), Sr = ke(() => {
    D(null), A === "canvas" && U(Z.current);
  }, [A]);
  return /* @__PURE__ */ s(
    Ta.Provider,
    {
      value: {
        ...m,
        enabled: _,
        setEnabled: N,
        open: I,
        setOpen: j,
        visualizationMode: A,
        setVisualizationMode: U,
        lockVisualizationMode: f,
        historyEnabled: l,
        footer: S,
        setFooter: F,
        shouldPlayEntranceAnimation: O,
        setShouldPlayEntranceAnimation: G,
        agent: Y,
        tmp_setAgent: Ue,
        initialMessage: ge,
        setInitialMessage: me,
        welcomeScreenSuggestions: K,
        setWelcomeScreenSuggestions: he,
        onThumbsUp: v,
        onThumbsDown: g,
        clear: Zt,
        setClearFunction: ue,
        currentThreadTitle: Ce,
        loadThread: tr,
        setLoadThreadFunction: xt,
        isLoadingThread: _e,
        setIsLoadingThread: ht,
        placeholders: ve,
        setPlaceholders: ye,
        sendMessage: Zr,
        setSendMessageFunction: Dt,
        disclaimer: a,
        resizable: i,
        chatWidth: Fe,
        setChatWidth: Ee,
        resetChatWidth: Fn,
        tracking: h,
        entityResolvers: d,
        toolHints: p,
        canvasContent: y,
        canvasDashboard: y?.type === "dashboard" ? y.config : null,
        openCanvas: Mt,
        closeCanvas: Sr,
        activeToolHint: oe,
        setActiveToolHint: le,
        getSavedDashboardConfig: R,
        updateDashboardConfig: b
      },
      children: e
    }
  );
}, $e = () => {
};
function Ye() {
  const e = kn(Ta);
  return e === null ? {
    enabled: !1,
    setEnabled: $e,
    open: !1,
    setOpen: $e,
    visualizationMode: "sidepanel",
    setVisualizationMode: $e,
    lockVisualizationMode: !1,
    historyEnabled: !1,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: $e,
    agent: void 0,
    tmp_setAgent: $e,
    clear: $e,
    setClearFunction: $e,
    currentThreadTitle: null,
    loadThread: $e,
    setLoadThreadFunction: $e,
    isLoadingThread: !1,
    setIsLoadingThread: $e,
    initialMessage: void 0,
    setInitialMessage: $e,
    placeholders: [],
    setPlaceholders: $e,
    welcomeScreenSuggestions: [],
    setWelcomeScreenSuggestions: $e,
    onThumbsUp: $e,
    onThumbsDown: $e,
    sendMessage: $e,
    setSendMessageFunction: $e,
    disclaimer: void 0,
    resizable: !1,
    footer: void 0,
    setFooter: $e,
    chatWidth: Un,
    setChatWidth: $e,
    resetChatWidth: $e,
    tracking: void 0,
    entityResolvers: void 0,
    toolHints: void 0,
    canvasContent: null,
    canvasDashboard: null,
    openCanvas: $e,
    closeCanvas: $e,
    activeToolHint: null,
    setActiveToolHint: $e,
    getSavedDashboardConfig: () => {
    },
    updateDashboardConfig: $e
  } : e;
}
const P3 = vn({
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: { size: "md" }
}), zo = [
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
], B3 = ({
  spin: e = !1,
  size: t = "md",
  background: r,
  hover: n = !1,
  ...o
}, a) => {
  const i = i1(), {
    onAnimationStart: c,
    onAnimationEnd: f,
    onDragStart: l,
    onDragEnd: u,
    onDrag: d,
    className: p,
    ...g
  } = o;
  return /* @__PURE__ */ s(
    "div",
    {
      className: ce(P3({ size: t }), p),
      style: {
        background: "transparent",
        perspective: e ? "10px" : void 0,
        transformStyle: e ? "preserve-3d" : void 0
      },
      children: /* @__PURE__ */ T(
        Ae.svg,
        {
          width: "100%",
          height: "100%",
          viewBox: "0 0 32 32",
          xmlns: "http://www.w3.org/2000/svg",
          ref: a,
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
            ...g.style
          },
          ...(({ style: v, ...h }) => h)(g),
          children: [
            /* @__PURE__ */ T("defs", { children: [
              /* @__PURE__ */ s("clipPath", { id: `${i}-circle`, children: /* @__PURE__ */ s("circle", { cx: "16", cy: "16", r: "16" }) }),
              zo.map((v) => /* @__PURE__ */ s("clipPath", { id: `${i}-${v.id}`, children: /* @__PURE__ */ s("path", { d: v.path }) }, v.id))
            ] }),
            /* @__PURE__ */ s("g", { clipPath: `url(#${i}-circle)`, children: zo.map((v) => /* @__PURE__ */ s(
              Ae.foreignObject,
              {
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                clipPath: `url(#${i}-${v.id})`,
                animate: {
                  "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                  "--scale": n ? 8 : 1,
                  "--rotate": n ? "90deg" : "0deg",
                  opacity: n ? v.id === "left" ? 1 : 0 : 1,
                  filter: e ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
                },
                transition: {
                  "--rotate3d-angle": {
                    delay: e ? v.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.99, 0.9999, 1]
                  },
                  "--scale": {
                    duration: n ? 0.6 : 0.35,
                    ease: [0.55, 0, 0.1, 1]
                  },
                  "--rotate": {
                    duration: 0.35,
                    ease: "easeInOut"
                  },
                  opacity: {
                    duration: n ? 0.8 : 0.1,
                    ease: "easeInOut"
                  },
                  filter: {
                    delay: e ? v.delay : 0,
                    duration: 1.8,
                    ease: [0.65, 0, 0.35, 1],
                    times: [0, 0.5, 1]
                  }
                },
                style: {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: e ? `rotate3d(${v.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
                  transformOrigin: v.transformOrigin,
                  willChange: "transform"
                },
                children: /* @__PURE__ */ s(
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
              v.id
            )) })
          ]
        }
      )
    }
  );
}, ya = M(
  B3
), gC = ({
  className: e,
  disabled: t,
  onVisible: r,
  tooltip: n,
  autoOpen: o = !1,
  onToggle: a
}) => {
  const { enabled: i, setOpen: c, open: f } = Ye(), l = Pe(), [u, d] = pe(!1), [p, g] = pe(!1), [v, h] = pe(o), m = t && n?.whenDisabled ? n?.whenDisabled : n?.whenEnabled ?? l.ai.welcome, S = o ? v : p;
  return Te(() => {
    o && h(!0);
  }, [o]), Te(() => {
    if (!o) return;
    const F = setTimeout(() => h(!1), 3e3);
    return () => clearTimeout(F);
  }, [o]), Te(() => {
    r?.();
  }, [r]), i ? /* @__PURE__ */ s("div", { className: "flex items-center", children: /* @__PURE__ */ s(el, { children: /* @__PURE__ */ T(
    tl,
    {
      delayDuration: 850,
      disableHoverableContent: !0,
      open: !f && S,
      onOpenChange: o ? () => {
      } : g,
      children: [
        /* @__PURE__ */ s(rl, { asChild: !0, children: /* @__PURE__ */ s(
          Ae.div,
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
            children: /* @__PURE__ */ s(
              nl,
              {
                onCheckedChange: (F) => {
                  c(F), a?.();
                },
                checked: f,
                "aria-label": f ? l.ai.closeChat : l.ai.openChat,
                className: ce(
                  "group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover",
                  "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]",
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse",
                  "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100",
                  t && "cursor-not-allowed opacity-50",
                  o1(),
                  e
                ),
                disabled: t,
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                children: /* @__PURE__ */ s(
                  ol,
                  {
                    className: ce(
                      "block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"
                    ),
                    style: {
                      transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                    },
                    children: /* @__PURE__ */ s("div", { children: /* @__PURE__ */ s(
                      ya,
                      {
                        size: "sm",
                        background: f ? "white" : void 0,
                        hover: u
                      }
                    ) })
                  }
                )
              }
            )
          }
        ) }),
        !f && /* @__PURE__ */ s(
          al,
          {
            side: "left",
            className: ce("font-medium", o && "z-[100]"),
            children: m
          }
        )
      ]
    }
  ) }) }) : null;
}, Fa = M((e, t) => /* @__PURE__ */ s("div", { ref: t, className: "px-1.5", ...e, children: /* @__PURE__ */ s(nr, { className: "h-4 w-24", "aria-hidden": "true" }) }));
Fa.displayName = "BreadcrumbSkeleton";
const Aa = M(({ item: e, isLast: t, isOnly: r = !1, isFirst: n = !1, children: o }, a) => /* @__PURE__ */ T(ma, { ref: a, children: [
  !n && /* @__PURE__ */ s(ka, {}),
  /* @__PURE__ */ s(
    Ma,
    {
      item: e,
      isLast: t,
      isOnly: r,
      isFirst: n
    }
  ),
  o
] }, e.id));
Aa.displayName = "BreadcrumbItem";
const Ma = M(
  ({ item: e, isLast: t, isOnly: r = !1, isFirst: n = !1 }, o) => {
    const a = "loading" in e && e.loading, i = a ? "loading" : "type" in e && e.type ? e.type : t || r ? "page" : "link", c = /* @__PURE__ */ T(
      Ae.div,
      {
        layoutId: `breadcrumb-${e.id}`,
        className: ce(
          "flex items-center gap-2 px-1.5",
          n && "pl-0",
          r && "text-2xl font-semibold"
        ),
        transition: { duration: 0.15 },
        children: [
          !a && "module" in e && e.module && (r || n) && /* @__PURE__ */ s(il, { module: e.module, size: r ? "lg" : "sm" }),
          /* @__PURE__ */ s("span", { className: "truncate", children: !a && "label" in e ? e.label : "" })
        ]
      }
    ), f = {
      loading: /* @__PURE__ */ s(Fa, {}),
      select: "type" in e && e.type === "select" && (e.options || e.source) && /* @__PURE__ */ s(Ct, { children: /* @__PURE__ */ s(
        b3,
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
      page: /* @__PURE__ */ s(wa, { "aria-hidden": "true", className: "p-0", children: c }),
      link: /* @__PURE__ */ s(Ca, { asChild: !0, className: "p-0", children: /* @__PURE__ */ s(
        Ir,
        {
          ..."href" in e && !("type" in e) ? e : {},
          className: "block",
          children: c
        }
      ) })
    };
    return /* @__PURE__ */ s(
      Ae.div,
      {
        ref: o,
        layout: !0,
        className: ce(a && "max-w-40"),
        transition: { duration: 0.15 },
        children: f[i]
      }
    );
  }
);
Ma.displayName = "BreadcrumbContent";
var Vr = "NavigationMenu", [Q1, ba, H3] = na(Vr), [O1, V3, U3] = na(Vr), [eo] = ra(
  Vr,
  [H3, U3]
), [$3, Nt] = eo(Vr), [j3, W3] = eo(Vr), Ra = de.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      delayDuration: i = 200,
      skipDelayDuration: c = 300,
      orientation: f = "horizontal",
      dir: l,
      ...u
    } = e, [d, p] = de.useState(null), g = Hr(t, (O) => p(O)), v = sl(l), h = de.useRef(0), m = de.useRef(0), S = de.useRef(0), [F, _] = de.useState(!0), [N = "", I] = G1({
      prop: n,
      onChange: (O) => {
        const G = O !== "", Y = c > 0;
        G ? (window.clearTimeout(S.current), Y && _(!1)) : (window.clearTimeout(S.current), S.current = window.setTimeout(
          () => _(!0),
          c
        )), o?.(O);
      },
      defaultProp: a
    }), j = de.useCallback(() => {
      window.clearTimeout(m.current), m.current = window.setTimeout(() => I(""), 150);
    }, [I]), A = de.useCallback(
      (O) => {
        window.clearTimeout(m.current), I(O);
      },
      [I]
    ), U = de.useCallback(
      (O) => {
        N === O ? window.clearTimeout(m.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(m.current), I(O);
        }, i);
      },
      [N, I, i]
    );
    return de.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(m.current), window.clearTimeout(S.current);
    }, []), /* @__PURE__ */ s(
      Oa,
      {
        scope: r,
        isRootMenu: !0,
        value: N,
        dir: v,
        orientation: f,
        rootNavigationMenu: d,
        onTriggerEnter: (O) => {
          window.clearTimeout(h.current), F ? U(O) : A(O);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), j();
        },
        onContentEnter: () => window.clearTimeout(m.current),
        onContentLeave: j,
        onItemSelect: (O) => {
          I((G) => G === O ? "" : O);
        },
        onItemDismiss: () => I(""),
        children: /* @__PURE__ */ s(
          wt.nav,
          {
            "aria-label": "Main",
            "data-orientation": f,
            dir: v,
            ...u,
            ref: g
          }
        )
      }
    );
  }
);
Ra.displayName = Vr;
var Na = "NavigationMenuSub", Z3 = de.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: n,
      onValueChange: o,
      defaultValue: a,
      orientation: i = "horizontal",
      ...c
    } = e, f = Nt(Na, r), [l = "", u] = G1({
      prop: n,
      onChange: o,
      defaultProp: a
    });
    return /* @__PURE__ */ s(
      Oa,
      {
        scope: r,
        isRootMenu: !1,
        value: l,
        dir: f.dir,
        orientation: i,
        rootNavigationMenu: f.rootNavigationMenu,
        onTriggerEnter: (d) => u(d),
        onItemSelect: (d) => u(d),
        onItemDismiss: () => u(""),
        children: /* @__PURE__ */ s(wt.div, { "data-orientation": i, ...c, ref: t })
      }
    );
  }
);
Z3.displayName = Na;
var Oa = (e) => {
  const {
    scope: t,
    isRootMenu: r,
    rootNavigationMenu: n,
    dir: o,
    orientation: a,
    children: i,
    value: c,
    onItemSelect: f,
    onItemDismiss: l,
    onTriggerEnter: u,
    onTriggerLeave: d,
    onContentEnter: p,
    onContentLeave: g
  } = e, [v, h] = de.useState(null), [m, S] = de.useState(/* @__PURE__ */ new Map()), [F, _] = de.useState(null);
  return /* @__PURE__ */ s(
    $3,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: n,
      value: c,
      previousValue: cl(c),
      baseId: z1(),
      dir: o,
      orientation: a,
      viewport: v,
      onViewportChange: h,
      indicatorTrack: F,
      onIndicatorTrackChange: _,
      onTriggerEnter: pr(u),
      onTriggerLeave: pr(d),
      onContentEnter: pr(p),
      onContentLeave: pr(g),
      onItemSelect: pr(f),
      onItemDismiss: pr(l),
      onViewportContentChange: de.useCallback((N, I) => {
        S((j) => (j.set(N, I), new Map(j)));
      }, []),
      onViewportContentRemove: de.useCallback((N) => {
        S((I) => I.has(N) ? (I.delete(N), new Map(I)) : I);
      }, []),
      children: /* @__PURE__ */ s(Q1.Provider, { scope: t, children: /* @__PURE__ */ s(j3, { scope: t, items: m, children: i }) })
    }
  );
}, Da = "NavigationMenuList", Ia = de.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Nt(Da, r), a = /* @__PURE__ */ s(wt.ul, { "data-orientation": o.orientation, ...n, ref: t });
    return /* @__PURE__ */ s(wt.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ s(Q1.Slot, { scope: r, children: o.isRootMenu ? /* @__PURE__ */ s($a, { asChild: !0, children: a }) : a }) });
  }
);
Ia.displayName = Da;
var Pa = "NavigationMenuItem", [G3, Ba] = eo(Pa), Ha = de.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: n, ...o } = e, a = z1(), i = n || a || "LEGACY_REACT_AUTO_VALUE", c = de.useRef(null), f = de.useRef(null), l = de.useRef(null), u = de.useRef(() => {
    }), d = de.useRef(!1), p = de.useCallback((v = "start") => {
      if (c.current) {
        u.current();
        const h = I1(c.current);
        h.length && no(v === "start" ? h : h.reverse());
      }
    }, []), g = de.useCallback(() => {
      if (c.current) {
        const v = I1(c.current);
        v.length && (u.current = n9(v));
      }
    }, []);
    return /* @__PURE__ */ s(
      G3,
      {
        scope: r,
        value: i,
        triggerRef: f,
        contentRef: c,
        focusProxyRef: l,
        wasEscapeCloseRef: d,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: g,
        onContentFocusOutside: g,
        children: /* @__PURE__ */ s(wt.li, { ...o, ref: t })
      }
    );
  }
);
Ha.displayName = Pa;
var D1 = "NavigationMenuTrigger", z3 = de.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: n, ...o } = e, a = Nt(D1, e.__scopeNavigationMenu), i = Ba(D1, e.__scopeNavigationMenu), c = de.useRef(null), f = Hr(c, i.triggerRef, t), l = Wa(a.baseId, i.value), u = Za(a.baseId, i.value), d = de.useRef(!1), p = de.useRef(!1), g = i.value === a.value;
  return /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ s(Q1.ItemSlot, { scope: r, value: i.value, children: /* @__PURE__ */ s(ja, { asChild: !0, children: /* @__PURE__ */ s(
      wt.button,
      {
        id: l,
        disabled: n,
        "data-disabled": n ? "" : void 0,
        "data-state": oo(g),
        "aria-expanded": g,
        "aria-controls": u,
        ...o,
        ref: f,
        onPointerEnter: ft(e.onPointerEnter, () => {
          p.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: ft(
          e.onPointerMove,
          $n(() => {
            n || p.current || i.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(i.value), d.current = !0);
          })
        ),
        onPointerLeave: ft(
          e.onPointerLeave,
          $n(() => {
            n || (a.onTriggerLeave(), d.current = !1);
          })
        ),
        onClick: ft(e.onClick, () => {
          a.onItemSelect(i.value), p.current = g;
        }),
        onKeyDown: ft(e.onKeyDown, (v) => {
          const m = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          g && v.key === m && (i.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    g && /* @__PURE__ */ T(Ct, { children: [
      /* @__PURE__ */ s(
        ll,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (v) => {
            const h = i.contentRef.current, m = v.relatedTarget, S = m === c.current, F = h?.contains(m);
            (S || !F) && i.onFocusProxyEnter(S ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ s("span", { "aria-owns": u })
    ] })
  ] });
});
z3.displayName = D1;
var K3 = "NavigationMenuLink", Ko = "navigationMenu.linkSelect", Va = de.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: n, onSelect: o, ...a } = e;
    return /* @__PURE__ */ s(ja, { asChild: !0, children: /* @__PURE__ */ s(
      wt.a,
      {
        "data-active": n ? "" : void 0,
        "aria-current": n ? "page" : void 0,
        ...a,
        ref: t,
        onClick: ft(
          e.onClick,
          (i) => {
            const c = i.target, f = new CustomEvent(Ko, {
              bubbles: !0,
              cancelable: !0
            });
            if (c.addEventListener(Ko, (l) => o?.(l), { once: !0 }), Uo(c, f), !f.defaultPrevented && !i.metaKey) {
              const l = new CustomEvent(Bn, {
                bubbles: !0,
                cancelable: !0
              });
              Uo(c, l);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Va.displayName = K3;
var to = "NavigationMenuIndicator", X3 = de.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Nt(to, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Ul.createPortal(
    /* @__PURE__ */ s(xn, { present: r || a, children: /* @__PURE__ */ s(Y3, { ...n, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
X3.displayName = to;
var Y3 = de.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...n } = e, o = Nt(to, r), a = ba(r), [i, c] = de.useState(
    null
  ), [f, l] = de.useState(null), u = o.orientation === "horizontal", d = !!o.value;
  de.useEffect(() => {
    const v = a().find((h) => h.value === o.value)?.ref.current;
    v && c(v);
  }, [a, o.value]);
  const p = () => {
    i && l({
      size: u ? i.offsetWidth : i.offsetHeight,
      offset: u ? i.offsetLeft : i.offsetTop
    });
  };
  return P1(i, p), P1(o.indicatorTrack, p), f ? /* @__PURE__ */ s(
    wt.div,
    {
      "aria-hidden": !0,
      "data-state": d ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...n,
      ref: t,
      style: {
        position: "absolute",
        ...u ? {
          left: 0,
          width: f.size + "px",
          transform: `translateX(${f.offset}px)`
        } : {
          top: 0,
          height: f.size + "px",
          transform: `translateY(${f.offset}px)`
        },
        ...n.style
      }
    }
  ) : null;
}), Pr = "NavigationMenuContent", q3 = de.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = Nt(Pr, e.__scopeNavigationMenu), a = Ba(Pr, e.__scopeNavigationMenu), i = Hr(a.contentRef, t), c = a.value === o.value, f = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...n
  };
  return o.viewport ? /* @__PURE__ */ s(J3, { forceMount: r, ...f, ref: i }) : /* @__PURE__ */ s(xn, { present: r || c, children: /* @__PURE__ */ s(
    Ua,
    {
      "data-state": oo(c),
      ...f,
      ref: i,
      onPointerEnter: ft(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: ft(
        e.onPointerLeave,
        $n(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !c && o.isRootMenu ? "none" : void 0,
        ...f.style
      }
    }
  ) });
});
q3.displayName = Pr;
var J3 = de.forwardRef((e, t) => {
  const r = Nt(Pr, e.__scopeNavigationMenu), { onViewportContentChange: n, onViewportContentRemove: o } = r;
  return Hn(() => {
    n(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, n]), Hn(() => () => o(e.value), [e.value, o]), null;
}), Bn = "navigationMenu.rootContentDismiss", Ua = de.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: n,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: i,
    onRootContentClose: c,
    onContentFocusOutside: f,
    ...l
  } = e, u = Nt(Pr, r), d = de.useRef(null), p = Hr(d, t), g = Wa(u.baseId, n), v = Za(u.baseId, n), h = ba(r), m = de.useRef(null), { onItemDismiss: S } = u;
  de.useEffect(() => {
    const _ = d.current;
    if (u.isRootMenu && _) {
      const N = () => {
        S(), c(), _.contains(document.activeElement) && o.current?.focus();
      };
      return _.addEventListener(Bn, N), () => _.removeEventListener(Bn, N);
    }
  }, [u.isRootMenu, e.value, o, S, c]);
  const F = de.useMemo(() => {
    const N = h().map((G) => G.value);
    u.dir === "rtl" && N.reverse();
    const I = N.indexOf(u.value), j = N.indexOf(u.previousValue), A = n === u.value, U = j === N.indexOf(n);
    if (!A && !U) return m.current;
    const O = (() => {
      if (I !== j) {
        if (A && j !== -1) return I > j ? "from-end" : "from-start";
        if (U && I !== -1) return I > j ? "to-start" : "to-end";
      }
      return null;
    })();
    return m.current = O, O;
  }, [u.previousValue, u.value, u.dir, h, n]);
  return /* @__PURE__ */ s($a, { asChild: !0, children: /* @__PURE__ */ s(
    fl,
    {
      id: v,
      "aria-labelledby": g,
      "data-motion": F,
      "data-orientation": u.orientation,
      ...l,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const _ = new Event(Bn, {
          bubbles: !0,
          cancelable: !0
        });
        d.current?.dispatchEvent(_);
      },
      onFocusOutside: ft(e.onFocusOutside, (_) => {
        f();
        const N = _.target;
        u.rootNavigationMenu?.contains(N) && _.preventDefault();
      }),
      onPointerDownOutside: ft(e.onPointerDownOutside, (_) => {
        const N = _.target, I = h().some((A) => A.ref.current?.contains(N)), j = u.isRootMenu && u.viewport?.contains(N);
        (I || j || !u.isRootMenu) && _.preventDefault();
      }),
      onKeyDown: ft(e.onKeyDown, (_) => {
        const N = _.altKey || _.ctrlKey || _.metaKey;
        if (_.key === "Tab" && !N) {
          const j = I1(_.currentTarget), A = document.activeElement, U = j.findIndex((Y) => Y === A), G = _.shiftKey ? j.slice(0, U).reverse() : j.slice(U + 1, j.length);
          no(G) ? _.preventDefault() : a.current?.focus();
        }
      }),
      onEscapeKeyDown: ft(e.onEscapeKeyDown, (_) => {
        i.current = !0;
      })
    }
  ) });
}), ro = "NavigationMenuViewport", Q3 = de.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, a = !!Nt(ro, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ s(xn, { present: r || a, children: /* @__PURE__ */ s(e9, { ...n, ref: t }) });
});
Q3.displayName = ro;
var e9 = de.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: n, ...o } = e, a = Nt(ro, r), i = Hr(t, a.onViewportChange), c = W3(
    Pr,
    e.__scopeNavigationMenu
  ), [f, l] = de.useState(null), [u, d] = de.useState(null), p = f ? f?.width + "px" : void 0, g = f ? f?.height + "px" : void 0, v = !!a.value, h = v ? a.value : a.previousValue;
  return P1(u, () => {
    u && l({ width: u.offsetWidth, height: u.offsetHeight });
  }), /* @__PURE__ */ s(
    wt.div,
    {
      "data-state": oo(v),
      "data-orientation": a.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": g,
        ...o.style
      },
      onPointerEnter: ft(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: ft(e.onPointerLeave, $n(a.onContentLeave)),
      children: Array.from(c.items).map(([S, { ref: F, forceMount: _, ...N }]) => {
        const I = h === S;
        return /* @__PURE__ */ s(xn, { present: _ || I, children: /* @__PURE__ */ s(
          Ua,
          {
            ...N,
            ref: ul(F, (j) => {
              I && j && d(j);
            })
          }
        ) }, S);
      })
    }
  );
}), t9 = "FocusGroup", $a = de.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = Nt(t9, r);
    return /* @__PURE__ */ s(O1.Provider, { scope: r, children: /* @__PURE__ */ s(O1.Slot, { scope: r, children: /* @__PURE__ */ s(wt.div, { dir: o.dir, ...n, ref: t }) }) });
  }
), Xo = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], r9 = "FocusGroupItem", ja = de.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...n } = e, o = V3(r), a = Nt(r9, r);
    return /* @__PURE__ */ s(O1.ItemSlot, { scope: r, children: /* @__PURE__ */ s(
      wt.button,
      {
        ...n,
        ref: t,
        onKeyDown: ft(e.onKeyDown, (i) => {
          if (["Home", "End", ...Xo].includes(i.key)) {
            let f = o().map((d) => d.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && f.reverse(), Xo.includes(i.key)) {
              const d = f.indexOf(i.currentTarget);
              f = f.slice(d + 1);
            }
            setTimeout(() => no(f)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function I1(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function no(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function n9(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function P1(e, t) {
  const r = pr(t);
  Hn(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
function oo(e) {
  return e ? "open" : "closed";
}
function Wa(e, t) {
  return `${e}-trigger-${t}`;
}
function Za(e, t) {
  return `${e}-content-${t}`;
}
function $n(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var o9 = Ra, a9 = Ia, i9 = Ha, s9 = Va;
function c9(e, t) {
  const { asChild: r, children: n } = e;
  if (!r)
    return typeof t == "function" ? t(n) : t;
  const o = de.Children.only(n);
  return de.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const l9 = vn({
  base: "relative flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  variants: {
    secondary: {
      true: "bg-f1-foreground/[.02] dark:bg-f1-foreground/[.02]",
      false: "bg-f1-background-transparent pt-1"
    }
  },
  defaultVariants: {
    secondary: !1
  }
}), ao = de.forwardRef(({ className: e, children: t, secondary: r, ...n }, o) => {
  const a = i1();
  return /* @__PURE__ */ T(
    o9,
    {
      ref: o,
      ...n,
      asChild: !1,
      className: "relative",
      children: [
        /* @__PURE__ */ s("div", { className: "absolute inset-x-0 bottom-0 left-0 right-0 h-px bg-f1-border-secondary" }),
        /* @__PURE__ */ s(ta, { id: a, children: /* @__PURE__ */ s(
          a9,
          {
            className: ce(l9({ secondary: r }), e),
            children: t
          }
        ) })
      ]
    }
  );
});
ao.displayName = "TabNavigation";
const f9 = vn({
  base: "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  variants: {
    secondary: {
      true: "group-hover:ring-f1-border group-data-[active=true]:bg-f1-background-inverse-secondary group-data-[active=true]:text-f1-foreground group-data-[active=true]:ring-f1-border",
      false: "bg-f1-background-transparent group-hover:bg-f1-background-tertiary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-tertiary group-data-[active=true]:text-f1-foreground"
    },
    disabled: {
      true: "pointer-events-none text-f1-foreground-disabled"
    }
  },
  defaultVariants: {
    secondary: !1,
    disabled: !1
  }
}), u9 = de.forwardRef(function({ asChild: t, disabled: r, active: n, className: o, children: a, secondary: i, ...c }, f) {
  return /* @__PURE__ */ s(i9, { className: "flex", children: /* @__PURE__ */ s(
    s9,
    {
      "data-active": n ? "true" : void 0,
      "aria-disabled": r || void 0,
      className: ce(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
        r ? "pointer-events-none" : ""
      ),
      ref: f,
      onSelect: () => {
      },
      asChild: t,
      ...c,
      children: c9({ asChild: t, children: a }, (l) => /* @__PURE__ */ T(
        "span",
        {
          className: ce(
            "text-f1-foreground-secondary ring-1 ring-inset ring-transparent",
            f9({ secondary: i, disabled: r }),
            o
          ),
          children: [
            l,
            n && !i && /* @__PURE__ */ s(
              Ae.div,
              {
                layoutId: "underline",
                className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-inverse",
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5
                }
              }
            )
          ]
        }
      ))
    }
  ) });
}), d9 = ({
  className: e
}) => /* @__PURE__ */ s("li", { className: "list-none", children: /* @__PURE__ */ s(
  nr,
  {
    className: ce(
      "mr-4 w-20 rounded-md py-1.5 ring-1 ring-inset ring-transparent",
      e
    ),
    children: " "
  }
) }), Yr = oa(
  u9,
  d9
), h9 = ({
  tabs: e,
  activeTabId: t,
  setActiveTabId: r,
  secondary: n = !1,
  embedded: o = !1
}) => {
  const a = e[0], [i, c] = pe(
    t ?? ("id" in a ? a.id : void 0)
  );
  Te(() => {
    i && r?.(i);
  }, [r, i]);
  const { isActive: f } = dl(), l = o ? [e[0]] : e, d = [...l].sort(
    (p, g) => p.index ? 1 : g.index ? -1 : 0
  ).find(
    (p) => "href" in p ? f(p.href) : i === p.id
  );
  return /* @__PURE__ */ s(
    ao,
    {
      secondary: n,
      asChild: !0,
      "aria-label": n ? "primary-navigation" : "secondary-navigation",
      children: l.length === 1 ? /* @__PURE__ */ s("li", { className: "flex h-8 items-center justify-center whitespace-nowrap text-lg font-medium text-f1-foreground", children: l[0].label }) : l.map(({ label: p, ...g }, v) => {
        const h = d && "href" in d && "href" in g ? d.href === g.href : "id" in g && i === g.id;
        return /* @__PURE__ */ s(
          Yr,
          {
            active: h,
            href: "href" in g ? g.href : void 0,
            onClick: () => {
              "id" in g && c?.(g.id);
            },
            secondary: n,
            asChild: !0,
            children: /* @__PURE__ */ T(Ir, { role: "link", ...g, children: [
              g.variant === "upsell" && /* @__PURE__ */ s(
                Ge,
                {
                  icon: J0,
                  size: "md",
                  className: "mr-1 text-[hsl(var(--promote-50))]"
                }
              ),
              p
            ] })
          },
          v
        );
      })
    }
  );
}, p9 = ({
  secondary: e
}) => /* @__PURE__ */ T(
  ao,
  {
    "aria-label": e ? "Secondary empty nav" : "Main empty nav",
    secondary: e,
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ s(Yr.Skeleton, { className: "w-24" }),
      /* @__PURE__ */ s(Yr.Skeleton, { className: "w-20" }),
      /* @__PURE__ */ s(Yr.Skeleton, { className: "w-28" }),
      /* @__PURE__ */ s(Yr.Skeleton, { className: "w-20" })
    ]
  }
), g9 = aa(
  mn("Tabs", oa(h9, p9))
), Yo = ({
  title: e,
  description: t,
  module: r,
  otherActions: n,
  tabs: o,
  activeTabId: a,
  setActiveTabId: i
}) => {
  const c = Pe(), { onClose: f } = Q0(), l = !!o, u = () => /* @__PURE__ */ s("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), d = n?.filter(
    (v) => v.type !== "separator" && v.type !== "label"
  ) ?? [], p = () => !d.length || !n ? null : d.length <= 2 ? /* @__PURE__ */ s("div", { className: "flex flex-row gap-2", children: d.map((v) => /* @__PURE__ */ s(
    yt,
    {
      variant: "outline",
      icon: v.icon,
      onClick: v.onClick,
      label: v.label,
      hideLabel: !0
    },
    v.label
  )) }) : /* @__PURE__ */ s(gl, { items: n }), g = () => r ? /* @__PURE__ */ s(xa, { children: /* @__PURE__ */ s(
    Aa,
    {
      item: {
        id: r.id,
        label: r.label,
        href: r.href,
        module: r.id
      },
      isLast: !1,
      isFirst: !0
    }
  ) }) : null;
  return /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ T(
      "div",
      {
        className: ce(
          "flex flex-row items-start justify-between gap-3 px-4 py-3",
          !l && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"
        ),
        children: [
          /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
            r ? /* @__PURE__ */ s(g, {}) : e && /* @__PURE__ */ s(hl, { className: "py-1 text-lg font-semibold text-f1-foreground", children: e }),
            !!t && /* @__PURE__ */ s(pl, { className: "text-base text-f1-foreground-secondary", children: t })
          ] }),
          /* @__PURE__ */ T("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ s(p, {}),
            n && /* @__PURE__ */ s(u, {}),
            /* @__PURE__ */ s(
              yt,
              {
                variant: "outline",
                icon: gn,
                onClick: f,
                label: c.actions.close,
                hideLabel: !0
              }
            )
          ] })
        ]
      }
    ),
    o && /* @__PURE__ */ s("div", { className: "-mx-2", children: /* @__PURE__ */ s(
      g9,
      {
        tabs: o,
        activeTabId: a,
        setActiveTabId: i
      }
    ) })
  ] });
}, v9 = () => vl("(max-width: 560px)", {
  initializeWithValue: !1
}), x9 = vn({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "absolute flex flex-col rounded-md w-full",
      center: "flex",
      fullscreen: ""
    },
    position: {
      right: "left-auto right-0 items-end p-3",
      left: "left-0 items-start p-3",
      center: "",
      fullscreen: "inset-6"
    }
  },
  defaultVariants: {
    variant: "center"
  }
}), m9 = vn({
  variants: {
    variant: {
      bottomSheet: "max-h-[95vh] bg-f1-background",
      sidePosition: "flex h-full w-full flex-col rounded-md border border-solid border-f1-border-secondary",
      center: "flex max-h-[95vh] flex-1 flex-col rounded-xl",
      fullscreen: "h-full w-full rounded-xl"
    },
    position: {
      left: "",
      right: "",
      center: "",
      fullscreen: ""
    },
    width: {
      sm: "max-w-[480px]",
      md: "max-w-[640px]",
      lg: "max-w-[800px]",
      xl: "max-w-[960px]"
    }
  },
  compoundVariants: [
    {
      variant: "fullscreen",
      width: ["sm", "md", "lg", "xl"],
      class: "max-w-full"
    }
  ],
  defaultVariants: {
    variant: "center"
  }
}), C9 = ({
  asBottomSheetInMobile: e = !0,
  position: t = "center",
  onClose: r,
  isOpen: n,
  children: o,
  width: a = "md",
  primaryAction: i,
  secondaryAction: c,
  title: f,
  description: l,
  module: u,
  otherActions: d,
  tabs: p,
  activeTabId: g,
  setActiveTabId: v,
  disableContentPadding: h,
  container: m
}) => {
  const [S, F] = pe(null), _ = ke((Y) => {
    F(Y);
  }, []), N = (Y) => {
    Y || r();
  }, I = v9(), j = t === "left" || t === "right", A = Qe(() => I && e ? "bottomSheet" : t === "fullscreen" ? "fullscreen" : j ? "sidePosition" : "center", [I, e, j, t]), U = Qe(() => (a && !["center", "left", "right"].includes(t) && console.warn(
    "F0Dialog: `width` prop is only applicable to center and side panel positions"
  ), a), [A, a, t]), O = Qe(() => m9({
    variant: A,
    position: t,
    width: U
  }), [A, t, U]), G = {
    title: f,
    description: l,
    module: u,
    otherActions: d,
    tabs: p,
    activeTabId: g,
    setActiveTabId: v
  };
  return I && e ? /* @__PURE__ */ s(
    $o,
    {
      isOpen: n,
      onClose: r,
      position: t,
      portalContainer: S,
      shownBottomSheet: !0,
      children: /* @__PURE__ */ T(xl, { open: n, onOpenChange: N, children: [
        /* @__PURE__ */ s(ml, { className: "bg-f1-background-overlay" }),
        /* @__PURE__ */ T(Cl, { ref: _, className: O, children: [
          /* @__PURE__ */ s(Yo, { ...G }),
          /* @__PURE__ */ s(Wo, { disableContentPadding: h, children: o }),
          /* @__PURE__ */ s(
            Zo,
            {
              primaryAction: i,
              secondaryAction: c
            }
          )
        ] })
      ] })
    }
  ) : /* @__PURE__ */ s(
    $o,
    {
      isOpen: n,
      onClose: r,
      position: t,
      portalContainer: S,
      children: /* @__PURE__ */ s(
        wl,
        {
          open: n,
          onOpenChange: N,
          modal: t === "center" || t === "fullscreen",
          children: /* @__PURE__ */ T(
            kl,
            {
              ref: _,
              withTranslateAnimation: !j,
              wrapperClassName: x9({
                variant: A,
                position: t
              }),
              className: O,
              onOpenAutoFocus: (Y) => Y.preventDefault(),
              container: m,
              children: [
                /* @__PURE__ */ s(Yo, { ...G }),
                /* @__PURE__ */ s(Wo, { disableContentPadding: h, children: o }),
                /* @__PURE__ */ s(
                  Zo,
                  {
                    primaryAction: i,
                    secondaryAction: c
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
}, Ga = (e) => /* @__PURE__ */ s(C9, { ...e });
Ga.displayName = "F0Dialog";
const w9 = aa(
  mn("F0Dialog", Ga)
);
var io = "Collapsible", [k9] = ra(io), [E9, so] = k9(io), za = de.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: r,
      open: n,
      defaultOpen: o,
      disabled: a,
      onOpenChange: i,
      ...c
    } = e, [f = !1, l] = G1({
      prop: n,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ s(
      E9,
      {
        scope: r,
        disabled: a,
        contentId: z1(),
        open: f,
        onOpenToggle: de.useCallback(() => l((u) => !u), [l]),
        children: /* @__PURE__ */ s(
          wt.div,
          {
            "data-state": lo(f),
            "data-disabled": a ? "" : void 0,
            ...c,
            ref: t
          }
        )
      }
    );
  }
);
za.displayName = io;
var Ka = "CollapsibleTrigger", Xa = de.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: r, ...n } = e, o = so(Ka, r);
    return /* @__PURE__ */ s(
      wt.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": lo(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...n,
        ref: t,
        onClick: ft(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Xa.displayName = Ka;
var co = "CollapsibleContent", Ya = de.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = so(co, e.__scopeCollapsible);
    return /* @__PURE__ */ s(xn, { present: r || o.open, children: ({ present: a }) => /* @__PURE__ */ s(L9, { ...n, ref: t, present: a }) });
  }
);
Ya.displayName = co;
var L9 = de.forwardRef((e, t) => {
  const { __scopeCollapsible: r, present: n, children: o, ...a } = e, i = so(co, r), [c, f] = de.useState(n), l = de.useRef(null), u = Hr(t, l), d = de.useRef(0), p = d.current, g = de.useRef(0), v = g.current, h = i.open || c, m = de.useRef(h), S = de.useRef(void 0);
  return de.useEffect(() => {
    const F = requestAnimationFrame(() => m.current = !1);
    return () => cancelAnimationFrame(F);
  }, []), Hn(() => {
    const F = l.current;
    if (F) {
      S.current = S.current || {
        transitionDuration: F.style.transitionDuration,
        animationName: F.style.animationName
      }, F.style.transitionDuration = "0s", F.style.animationName = "none";
      const _ = F.getBoundingClientRect();
      d.current = _.height, g.current = _.width, m.current || (F.style.transitionDuration = S.current.transitionDuration, F.style.animationName = S.current.animationName), f(n);
    }
  }, [i.open, n]), /* @__PURE__ */ s(
    wt.div,
    {
      "data-state": lo(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !h,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function lo(e) {
  return e ? "open" : "closed";
}
var _9 = za;
const T9 = _9, S9 = Xa, y9 = Ya, F9 = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 }
}, A9 = { duration: 0.15, ease: "easeOut" }, qa = M(
  ({
    valueToCopy: e,
    onCopy: t,
    copyTooltipLabel: r,
    copiedTooltipLabel: n,
    variant: o = "neutral",
    size: a = "sm",
    ...i
  }, c) => {
    const [f, l] = pe(!1), u = Pe(), d = r ?? u.actions.copy, g = f ? n ?? "Copied" : d;
    return Te(() => {
      let h = null;
      return f && (h = setTimeout(() => l(!1), 1e3)), () => {
        h && clearTimeout(h);
      };
    }, [f]), /* @__PURE__ */ s(
      xr,
      {
        ref: c,
        variant: o,
        size: a,
        onClick: (h) => {
          h.stopPropagation(), window.navigator.clipboard.writeText(e), l(!0), t?.(h);
        },
        "aria-live": "polite",
        "aria-label": g,
        title: g,
        ...i,
        compact: !0,
        children: /* @__PURE__ */ s(Ut, { mode: "wait", initial: !1, children: /* @__PURE__ */ s(
          Ae.span,
          {
            variants: F9,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            transition: A9,
            style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              verticalAlign: "middle"
            },
            children: /* @__PURE__ */ s(
              Ge,
              {
                size: a === "sm" ? "sm" : "md",
                icon: f ? Z0 : ha
              }
            )
          },
          f ? "check" : "copy"
        ) })
      }
    );
  }
);
qa.displayName = "ButtonCopy";
const M9 = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2
}, b9 = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 }
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1]
  }
}, R9 = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275]
}, N9 = {
  normal: {
    scale: 1
  },
  animate: {
    scale: [1, 0.9, 1]
  }
}, Ja = de.forwardRef(({ animate: e = "normal", ...t }, r) => /* @__PURE__ */ T(
  "svg",
  {
    ref: r,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "1.3",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...t,
    children: [
      /* @__PURE__ */ s(
        Ae.circle,
        {
          cx: "12",
          cy: "12",
          r: "8",
          initial: "normal",
          variants: N9,
          transition: R9,
          animate: e,
          vectorEffect: "non-scaling-stroke"
        }
      ),
      /* @__PURE__ */ s(
        Ae.path,
        {
          d: "M9.00003 12L11.4 14.4L15 9.6",
          initial: "normal",
          variants: b9,
          transition: M9,
          animate: e,
          vectorEffect: "non-scaling-stroke"
        }
      )
    ]
  }
));
Ja.displayName = "CheckCircleLineAnimated";
const qo = [
  {
    id: "bottom",
    delay: 2.6,
    transformOrigin: "center 89%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
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
  },
  {
    id: "left",
    delay: 2.2,
    transformOrigin: "11% center",
    rotateAxis: "0, 1, 0",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
  }
], O9 = (e, t) => {
  const r = i1(), {
    onAnimationStart: n,
    onAnimationEnd: o,
    onDragStart: a,
    onDragEnd: i,
    onDrag: c,
    ...f
  } = e;
  return /* @__PURE__ */ s("div", { className: "h-4 w-4 shrink-0", children: /* @__PURE__ */ T(
    Ae.svg,
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      initial: {
        rotate: "0deg",
        opacity: 0,
        scale: 0.8,
        filter: "blur(4px)"
      },
      animate: {
        "--gradient-angle": ["0deg", "360deg"],
        rotate: "360deg",
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      },
      transition: {
        "--gradient-angle": {
          duration: 3,
          ease: "linear",
          repeat: 1 / 0
        },
        rotate: {
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
          repeat: 1 / 0
        },
        opacity: {
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1]
        },
        scale: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 1.94]
        },
        filter: {
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1]
        }
      },
      style: {
        "--gradient-angle": "0deg",
        ...f.style
      },
      ...(({ style: l, ...u }) => u)(f),
      children: [
        /* @__PURE__ */ T("defs", { children: [
          /* @__PURE__ */ s("clipPath", { id: `${r}-circle`, children: /* @__PURE__ */ s("circle", { cx: "16", cy: "16", r: "16" }) }),
          qo.map((l) => /* @__PURE__ */ s("clipPath", { id: `${r}-${l.id}`, children: /* @__PURE__ */ s("path", { d: l.path }) }, l.id))
        ] }),
        /* @__PURE__ */ s("g", { clipPath: `url(#${r}-circle)`, children: qo.map((l) => /* @__PURE__ */ s(
          Ae.foreignObject,
          {
            x: "0",
            y: "0",
            width: "32",
            height: "32",
            clipPath: `url(#${r}-${l.id})`,
            animate: {
              "--scale": [1, 8, 1]
            },
            transition: {
              "--scale": {
                duration: 2,
                ease: [0.85, 0, 0.15, 1],
                repeat: 1 / 0,
                delay: 1
              }
            },
            style: {
              "--scale": 1,
              transform: "scale(var(--scale))",
              transformOrigin: l.transformOrigin,
              willChange: "transform"
            },
            children: /* @__PURE__ */ s(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
                }
              }
            )
          },
          l.id
        )) })
      ]
    }
  ) });
}, D9 = M(
  O9
), l1 = ({ title: e, status: t, inGroup: r }) => /* @__PURE__ */ T("div", { className: "flex w-full items-start gap-1 text-f1-foreground-secondary", children: [
  t === "inProgress" && /* @__PURE__ */ s("div", { className: "-mt-[2px] *:block", children: /* @__PURE__ */ s(
    Ge,
    {
      state: "animate",
      size: r ? "md" : "lg",
      icon: K0
    }
  ) }),
  t === "executing" && /* @__PURE__ */ s("div", { className: "-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center", children: /* @__PURE__ */ s(D9, {}) }),
  t === "completed" && /* @__PURE__ */ s("div", { className: "-mt-[2px] *:block", children: /* @__PURE__ */ s(
    Ge,
    {
      color: "secondary",
      state: "animate",
      size: r ? "md" : "lg",
      icon: Ja
    }
  ) }),
  /* @__PURE__ */ s("p", { className: ce("text-pretty", t === "executing" && "shine-text"), children: e })
] });
function I9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "pre",
    {
      ...t,
      className: ce(
        "relative mx-0 my-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        t.className
      ),
      children: e
    }
  );
}
function P9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "blockquote",
    {
      ...t,
      className: ce(
        "m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4",
        t.className
      ),
      children: e
    }
  );
}
function B9({ ...e }) {
  return /* @__PURE__ */ s(
    "hr",
    {
      ...e,
      className: ce("my-3 border-0 border-t border-f1-border", e.className)
    }
  );
}
function Qa({ id: e, label: t }) {
  const { entityResolvers: r } = Ye(), n = r?.person, o = Le(/* @__PURE__ */ new Map()), [a, i] = pe(
    () => o.current.get(e) ?? null
  ), [c, f] = pe(!1), [l, u] = pe(!1), d = Le(!0);
  Te(() => () => {
    d.current = !1;
  }, []);
  const p = ke(() => {
    if (!n || a || c) return;
    const g = o.current.get(e);
    if (g) {
      i(g);
      return;
    }
    f(!0), u(!1), n(e).then((v) => {
      o.current.set(e, v), d.current && i(v);
    }).catch(() => {
      d.current && u(!0);
    }).finally(() => {
      d.current && f(!1);
    });
  }, [n, e, a, c]);
  return n ? /* @__PURE__ */ T(
    El,
    {
      openDelay: 300,
      closeDelay: 100,
      onOpenChange: (g) => {
        g && p();
      },
      children: [
        /* @__PURE__ */ s(Ll, { asChild: !0, children: /* @__PURE__ */ T(
          "button",
          {
            type: "button",
            className: ce(
              "cursor-pointer font-medium text-f1-foreground-secondary hover:text-f1-foreground",
              o1()
            ),
            children: [
              "@",
              t
            ]
          }
        ) }),
        /* @__PURE__ */ s(
          _l,
          {
            side: "top",
            align: "start",
            className: "w-64 rounded-2xl border-none p-0 shadow-md",
            children: /* @__PURE__ */ s(
              H9,
              {
                id: e,
                profile: a,
                isLoading: c,
                hasError: l,
                fallbackName: t
              }
            )
          }
        )
      ]
    }
  ) : /* @__PURE__ */ s("span", { children: t });
}
function H9({
  id: e,
  profile: t,
  isLoading: r,
  hasError: n,
  fallbackName: o
}) {
  const a = `/employees/${e}`, i = Le(null), c = Pe(), f = () => {
    i.current?.click();
  };
  return r ? /* @__PURE__ */ s(k1.Skeleton, {}) : n || !t ? /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ s(Ir, { ref: i, href: a, className: "hidden" }),
    /* @__PURE__ */ s(
      k1,
      {
        title: o,
        primaryAction: {
          label: c.t("ai.viewProfile"),
          onClick: f
        }
      }
    )
  ] }) : /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ s(Ir, { ref: i, href: a, className: "hidden" }),
    /* @__PURE__ */ s(
      k1,
      {
        avatar: {
          type: "person",
          firstName: t.firstName,
          lastName: t.lastName,
          src: t.avatarUrl
        },
        title: `${t.firstName} ${t.lastName}`,
        description: t.jobTitle,
        secondaryActions: [
          {
            label: c.t("ai.viewProfile"),
            onClick: f
          }
        ]
      }
    )
  ] });
}
function B1(e) {
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(B1).join("") : e && typeof e == "object" && "props" in e ? B1(e.props.children) : "";
}
function V9({
  type: e,
  id: t,
  children: r
}) {
  if (!t)
    return /* @__PURE__ */ s("span", { children: r });
  const n = B1(r);
  return e === "person" ? /* @__PURE__ */ s(Qa, { id: t, label: n }) : /* @__PURE__ */ s("span", { children: r });
}
function U9({
  src: e,
  alt: t,
  ...r
}) {
  const n = () => {
    if (e) {
      const o = document.createElement("a");
      o.href = e, o.download = t || "image", document.body.appendChild(o), o.click(), document.body.removeChild(o);
    }
  };
  return /* @__PURE__ */ T("div", { className: "relative w-fit", children: [
    /* @__PURE__ */ s(
      "img",
      {
        ...r,
        src: e,
        alt: t,
        className: ce("max-w-full rounded-md", r.className)
      }
    ),
    /* @__PURE__ */ s("div", { className: "absolute right-2 top-2 rounded bg-f1-background-inverse-secondary", children: /* @__PURE__ */ s(
      Ft,
      {
        variant: "neutral",
        label: "Download",
        hideLabel: !0,
        icon: Vn,
        onClick: n
      }
    ) })
  ] });
}
function $9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(Tl, { ...t, variant: "link", href: t.href, children: e });
}
function j9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "ul",
    {
      ...t,
      className: ce(
        "list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function W9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "ol",
    {
      ...t,
      className: ce(
        "list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2",
        t.className
      ),
      children: e
    }
  );
}
function Z9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s("li", { ...t, className: ce("mb-2", t.className), children: e });
}
function G9({
  children: e,
  ...t
}) {
  const r = Le(null);
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ s("div", { className: "group/table scrollbar-macos overflow-x-auto rounded-md border border-solid border-f1-border-secondary", children: /* @__PURE__ */ s(
    "table",
    {
      ref: r,
      ...t,
      className: ce(
        "w-full border-separate border-spacing-0",
        t.className
      ),
      children: e
    }
  ) }) });
}
function z9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s("div", { className: "flex flex-col gap-2 text-base [&_*]:text-base", children: /* @__PURE__ */ s("div", { className: "scrollbar-macos overflow-x-auto rounded-md border border-solid border-f1-border-secondary", children: /* @__PURE__ */ s(
    "table",
    {
      ...t,
      className: ce(
        "w-full border-separate border-spacing-0",
        t.className
      ),
      children: e
    }
  ) }) });
}
function K9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "th",
    {
      ...t,
      className: ce(
        "sticky top-0 z-10 whitespace-nowrap border-0 border-b border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left font-medium text-f1-foreground-secondary",
        t.className
      ),
      children: e
    }
  );
}
function X9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "td",
    {
      ...t,
      className: ce(
        "max-w-80 truncate border-0 border-b border-solid border-f1-border-secondary px-3 py-2",
        t.className
      ),
      children: e
    }
  );
}
function Y9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s("p", { ...t, className: ce("text-base font-normal", t.className), children: e });
}
function q9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "h1",
    {
      ...t,
      className: ce(
        "mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function J9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "h2",
    {
      ...t,
      className: ce(
        "mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function Q9({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s(
    "h3",
    {
      ...t,
      className: ce(
        "mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0",
        t.className
      ),
      children: e
    }
  );
}
function ed({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s("strong", { ...t, className: ce("font-semibold", t.className), children: e });
}
function td({
  children: e,
  ...t
}) {
  return /* @__PURE__ */ s("em", { ...t, className: ce("italic", t.className), children: e });
}
const ei = {
  p: Y9,
  h1: q9,
  h2: J9,
  h3: Q9,
  a: $9,
  strong: ed,
  em: td,
  li: Z9,
  pre: I9,
  blockquote: P9,
  hr: B9,
  ul: j9,
  ol: W9,
  table: G9,
  th: K9,
  td: X9,
  img: U9,
  "entity-ref": V9
}, rd = {
  ...ei,
  table: z9
}, ti = ({
  isGenerating: e,
  isLoading: t,
  markdownTagRenderers: r,
  message: n
}) => {
  const o = n?.content || "", a = n?.role === "assistant" && n.toolCalls?.find(
    (u) => u.function.name === "orchestratorThinking"
  ), i = n?.generativeUI?.(
    a ? {
      status: t ? "executing" : "completed"
    } : void 0
  ), c = !o && !i, f = Pe(), { tracking: l } = Ye();
  return Te(() => {
    n?.id && !t && !e && l?.onMessage?.(n);
  }, [n, t, e, l]), !t && !e && c ? null : /* @__PURE__ */ T("div", { className: "relative isolate flex w-full flex-col items-start justify-center", children: [
    t && !i && /* @__PURE__ */ s(l1, { title: f.ai.thinking, status: "executing" }),
    n && /* @__PURE__ */ s("div", { className: "w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1", children: /* @__PURE__ */ s(
      ia,
      {
        content: o,
        components: { ...ei, ...r }
      }
    ) }),
    !!i && /* @__PURE__ */ s("div", { className: "w-full", children: i })
  ] });
}, ri = "f0-ai-pinned-threads";
function nd() {
  const e = La(ri, []);
  return new Set(Array.isArray(e) ? e : []);
}
function E1(e) {
  _a(ri, [...e]);
}
function od({
  enabled: e = !1
} = {}) {
  const { copilotApiConfig: t } = s1(), r = t.chatApiEndpoint, [n, o] = pe([]), [a, i] = pe(!1), [c, f] = pe(null), [l, u] = pe(nd), d = ke(async () => {
    i(!0), f(null);
    try {
      const h = await fetch(`${r}/chat-history/threads`, {
        credentials: "include",
        headers: {
          ...t.headers
        }
      });
      if (!h.ok)
        throw new Error(`Failed to fetch chat history: ${h.status}`);
      const m = await h.json();
      o(m.threads);
    } catch (h) {
      const m = h instanceof Error ? h.message : "Failed to fetch chat history";
      f(m), o([]);
    } finally {
      i(!1);
    }
  }, [r, t.headers]);
  Te(() => {
    e && d();
  }, [e, d]);
  const p = ke((h) => {
    u((m) => {
      const S = new Set(m);
      return S.add(h), E1(S), S;
    });
  }, []), g = ke((h) => {
    u((m) => {
      const S = new Set(m);
      return S.delete(h), E1(S), S;
    });
  }, []), v = ke(
    async (h) => {
      try {
        const m = await fetch(`${r}/chat-history/threads/${h}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            ...t.headers
          }
        });
        if (!m.ok && m.status !== 204)
          throw new Error(`Failed to delete thread: ${m.status}`);
        o((S) => S.filter((F) => F.id !== h)), u((S) => {
          if (!S.has(h)) return S;
          const F = new Set(S);
          return F.delete(h), E1(F), F;
        });
      } catch {
        d();
      }
    },
    [r, t.headers, d]
  );
  return {
    threads: n,
    isLoading: a,
    error: c,
    refetch: d,
    pinnedIds: l,
    pinThread: p,
    unpinThread: g,
    deleteThread: v
  };
}
function ad(e) {
  const t = new Date(e), r = /* @__PURE__ */ new Date(), n = new Date(r.getFullYear(), r.getMonth(), r.getDate()), o = new Date(n);
  o.setDate(o.getDate() - 1);
  const a = new Date(r.getFullYear(), r.getMonth(), 1);
  return t >= n ? "today" : t >= o ? "yesterday" : t >= a ? "thisMonth" : "older";
}
function id(e) {
  const t = {
    today: [],
    yesterday: [],
    thisMonth: [],
    older: []
  };
  for (const n of e) {
    const o = ad(n.updatedAt);
    t[o].push(n);
  }
  return ["today", "yesterday", "thisMonth", "older"].filter((n) => t[n].length > 0).map((n) => ({ key: n, threads: t[n] }));
}
function sd({
  thread: e,
  isPinned: t,
  onSelect: r,
  onPin: n,
  onUnpin: o,
  onDelete: a
}) {
  const i = Pe(), c = Qe(
    () => [
      {
        label: t ? i.ai.unpinChat : i.ai.pinChat,
        icon: sa,
        onClick: () => t ? o(e.id) : n(e.id)
      },
      {
        label: i.ai.deleteChat,
        icon: da,
        critical: !0,
        onClick: () => a(e.id)
      }
    ],
    [t, e.id, n, o, a]
  );
  return /* @__PURE__ */ T(
    "div",
    {
      className: ce(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        o1("rounded")
      ),
      role: "button",
      tabIndex: 0,
      onKeyDown: (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), r(e.id, e.title));
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "flex w-full items-center gap-2",
            onClick: () => r(e.id, e.title),
            children: /* @__PURE__ */ s(ir, { lines: 1, className: "text-left font-medium", children: e.title })
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex items-center", children: /* @__PURE__ */ s(Sl, { items: c, children: /* @__PURE__ */ s(
          Ft,
          {
            icon: X0,
            variant: "ghost",
            size: "md",
            label: i.ai.threadOptions,
            hideLabel: !0
          }
        ) }) })
      ]
    }
  );
}
function Jo({
  label: e,
  threads: t,
  pinnedIds: r,
  onSelect: n,
  onPin: o,
  onUnpin: a,
  onDelete: i
}) {
  const [c, f] = pe(!0), l = ke(() => {
    f((d) => !d);
  }, []), u = ke(
    (d) => {
      (d.key === "Enter" || d.key === " ") && (d.preventDefault(), l());
    },
    [l]
  );
  return /* @__PURE__ */ T("div", { children: [
    /* @__PURE__ */ T(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: l,
        onKeyDown: u,
        className: ce(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          o1("rounded")
        ),
        children: [
          /* @__PURE__ */ s("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: e }),
          /* @__PURE__ */ s(
            Ge,
            {
              icon: c ? hn : z0,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    c && /* @__PURE__ */ s("div", { className: "flex flex-col", children: t.map((d) => /* @__PURE__ */ s(
      sd,
      {
        thread: d,
        isPinned: r.has(d.id),
        onSelect: n,
        onPin: o,
        onUnpin: a,
        onDelete: i
      },
      d.id
    )) })
  ] });
}
const cd = ({
  onClose: e,
  onSelectThread: t,
  onNewChat: r
}) => {
  const n = Pe(), {
    threads: o,
    isLoading: a,
    error: i,
    pinnedIds: c,
    pinThread: f,
    unpinThread: l,
    deleteThread: u
  } = od({ enabled: !0 }), [d, p] = pe("");
  Te(() => {
    const j = (A) => {
      A.key === "Escape" && e();
    };
    return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [e]);
  const g = Qe(
    () => ({
      today: n.ai.today,
      yesterday: n.ai.yesterday,
      thisMonth: n.ai.thisMonth,
      older: n.ai.older
    }),
    [
      n.ai.today,
      n.ai.yesterday,
      n.ai.thisMonth,
      n.ai.older
    ]
  ), v = Qe(() => {
    if (!d.trim()) return o;
    const j = d.toLowerCase();
    return o.filter((A) => A.title.toLowerCase().includes(j));
  }, [o, d]), h = Qe(
    () => v.filter((j) => c.has(j.id)),
    [v, c]
  ), m = Qe(
    () => v.filter((j) => !c.has(j.id)),
    [v, c]
  ), S = Qe(
    () => id(m),
    [m]
  ), F = ke(
    (j, A) => {
      t(j, A), e();
    },
    [t, e]
  ), _ = ke(() => {
    r(), e();
  }, [r, e]), N = ke(
    (j) => {
      u(j);
    },
    [u]
  ), I = h.length > 0 || S.length > 0;
  return $l(
    /* @__PURE__ */ T(Ct, { children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: e,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": n.ai.chatHistory,
          className: ce(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ T(
            "div",
            {
              className: ce(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ T("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ s(Ge, { icon: Z1, color: "secondary", size: "md" }),
                  /* @__PURE__ */ s(
                    "input",
                    {
                      type: "text",
                      value: d,
                      onChange: (j) => p(j.target.value),
                      placeholder: n.ai.searchChats,
                      className: ce(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ T("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ s(
                    xr,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: _,
                      children: /* @__PURE__ */ T("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ s(Ge, { icon: J1, color: "default", size: "md" }),
                        /* @__PURE__ */ s(ir, { lines: 1, className: "text-left", children: n.ai.startNewChat })
                      ] })
                    }
                  ),
                  a && /* @__PURE__ */ s("div", { className: "flex flex-col gap-2 py-3", children: Array.from({ length: 5 }).map((j, A) => /* @__PURE__ */ T(
                    "div",
                    {
                      className: "flex items-center justify-between gap-3 rounded-lg px-3 py-2",
                      children: [
                        /* @__PURE__ */ s("div", { className: "h-5 w-full animate-pulse rounded bg-f1-background-secondary" }),
                        /* @__PURE__ */ s("div", { className: "h-5 w-6 animate-pulse rounded bg-f1-background-secondary" })
                      ]
                    },
                    A
                  )) }),
                  !a && i && /* @__PURE__ */ s("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: i }),
                  !a && !i && !I && /* @__PURE__ */ s("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: n.ai.noPreviousChats }),
                  !a && !i && h.length > 0 && /* @__PURE__ */ s(
                    Jo,
                    {
                      label: n.ai.pinnedChats,
                      threads: h,
                      pinnedIds: c,
                      onSelect: F,
                      onPin: f,
                      onUnpin: l,
                      onDelete: N
                    }
                  ),
                  !a && !i && S.map((j) => /* @__PURE__ */ s(
                    Jo,
                    {
                      label: g[j.key],
                      threads: j.threads,
                      pinnedIds: c,
                      onSelect: F,
                      onPin: f,
                      onUnpin: l,
                      onDelete: N
                    },
                    j.key
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
}, ld = (e) => {
  const { historyEnabled: t } = Ye();
  return t ? /* @__PURE__ */ s(fd, { ...e }) : /* @__PURE__ */ s(ud, { ...e });
}, fd = (e) => {
  const {
    setOpen: t,
    clear: r,
    loadThread: n,
    currentThreadTitle: o,
    visualizationMode: a,
    setVisualizationMode: i,
    lockVisualizationMode: c,
    tracking: f
  } = Ye(), l = a === "fullscreen", u = Pe(), [d, p] = pe(!1), g = ke(() => {
    l ? (i("sidepanel"), setTimeout(() => t(!1), 200)) : t(!1), f?.onClose?.();
  }, [l, i, t]), v = ke(
    (m, S) => {
      n(m, S);
    },
    [n]
  ), h = ke(() => {
    f?.onNewChat?.(), r();
  }, [f, r]);
  return /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ T(
      "header",
      {
        className: ce(
          "flex justify-between px-4 py-3 w-full overflow-hidden gap-3"
        ),
        children: [
          /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 items-center", children: !c && /* @__PURE__ */ s(
            xr,
            {
              variant: "ghost",
              size: "md",
              className: "min-w-0 max-w-full [&>div>span>span]:w-full",
              onClick: () => p(!0),
              children: /* @__PURE__ */ T("div", { className: "flex min-w-0 items-center gap-1", children: [
                /* @__PURE__ */ s(ir, { lines: 1, className: "min-w-0 text-left", children: o ?? u.ai.newConversation }),
                /* @__PURE__ */ s(Ge, { icon: hn, color: "default", size: "md" })
              ] })
            }
          ) }),
          /* @__PURE__ */ T(Ae.div, { className: "flex shrink-0 items-center", ...e, children: [
            !c && /* @__PURE__ */ s(
              yt,
              {
                variant: "ghost",
                hideLabel: !0,
                label: l ? u.ai.collapseChat : u.ai.expandChat,
                icon: l ? q1 : Y1,
                onClick: () => i(
                  (m) => m === "fullscreen" ? "sidepanel" : "fullscreen"
                )
              }
            ),
            /* @__PURE__ */ s(
              yt,
              {
                variant: "ghost",
                hideLabel: !0,
                label: u.ai.closeChat,
                icon: gn,
                onClick: g
              }
            )
          ] })
        ]
      }
    ),
    d && /* @__PURE__ */ s(
      cd,
      {
        onClose: () => p(!1),
        onSelectThread: v,
        onNewChat: h
      }
    )
  ] });
}, ud = (e) => {
  const { labels: t } = Hl(), { messages: r } = fr(), {
    setOpen: n,
    clear: o,
    visualizationMode: a,
    setVisualizationMode: i,
    lockVisualizationMode: c,
    tracking: f
  } = Ye(), l = a === "fullscreen", u = Pe(), d = t.title === "CopilotKit", p = r.length > 0, g = ke(() => {
    l ? (i("sidepanel"), setTimeout(() => n(!1), 200)) : n(!1), f?.onClose?.();
  }, [l, i, n]);
  return /* @__PURE__ */ T("header", { className: ce("flex justify-between px-4 py-3"), children: [
    /* @__PURE__ */ s("div", { className: "flex items-center", children: /* @__PURE__ */ s("h2", { className: "text-f1-foreground", children: d ? "" : t.title }) }),
    /* @__PURE__ */ T(Ae.div, { className: "flex items-center", ...e, children: [
      p && !c && /* @__PURE__ */ s(
        yt,
        {
          variant: "ghost",
          hideLabel: !0,
          label: u.ai.startNewChat,
          icon: J1,
          onClick: () => {
            f?.onNewChat?.(), o();
          }
        }
      ),
      !c && /* @__PURE__ */ s(
        yt,
        {
          variant: "ghost",
          hideLabel: !0,
          label: l ? u.ai.collapseChat : u.ai.expandChat,
          icon: l ? q1 : Y1,
          onClick: () => i(
            (v) => v === "fullscreen" ? "sidepanel" : "fullscreen"
          )
        }
      ),
      /* @__PURE__ */ s(
        yt,
        {
          variant: "ghost",
          hideLabel: !0,
          label: u.ai.closeChat,
          icon: gn,
          onClick: g
        }
      )
    ] })
  ] });
};
function dd({
  isOpen: e,
  results: t,
  isLoading: r,
  selectedIndex: n,
  position: o,
  onSelect: a
}) {
  const i = Le(null), c = Le(null);
  Te(() => {
    c.current?.scrollIntoView({ block: "nearest" });
  }, [n]);
  const f = r && t.length === 0, l = !r && t.length === 0;
  return !e || l ? null : /* @__PURE__ */ s(
    "div",
    {
      ref: i,
      role: "listbox",
      style: {
        position: "absolute",
        bottom: o ? `${o.bottom}px` : "100%",
        left: o ? `${o.left}px` : 0
      },
      className: ce(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      ),
      children: f ? Array.from({ length: 3 }, (u, d) => /* @__PURE__ */ T(
        "div",
        {
          className: "flex items-center gap-2 p-2",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ s(nr, { className: "size-5 shrink-0 rounded-full" }),
            /* @__PURE__ */ s(
              nr,
              {
                className: ce("h-4 rounded", d === 1 ? "w-24" : "w-32")
              }
            )
          ]
        },
        d
      )) : t.map((u, d) => {
        const p = d === n, g = `${u.firstName} ${u.lastName}`.trim();
        return /* @__PURE__ */ T(
          "div",
          {
            ref: p ? c : void 0,
            role: "option",
            "aria-selected": p,
            className: ce(
              "flex cursor-pointer items-center gap-2 p-2 rounded",
              "transition-colors",
              p ? "bg-f1-background-secondary" : "hover:bg-f1-background-secondary-hover"
            ),
            onMouseDown: (v) => {
              v.preventDefault(), a(u);
            },
            onMouseEnter: () => {
            },
            children: [
              /* @__PURE__ */ s(
                yl,
                {
                  firstName: u.firstName,
                  lastName: u.lastName,
                  src: u.avatarUrl,
                  size: "xsmall"
                }
              ),
              /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 flex-col", children: /* @__PURE__ */ s(ir, { className: "text-base font-medium text-f1-foreground", children: g }) })
            ]
          },
          String(u.id)
        );
      })
    }
  );
}
function hd({
  toolHints: e,
  activeToolHint: t,
  onChange: r
}) {
  const [n, o] = pe(!1), a = Pe(), i = K1(), c = ke(
    (l) => {
      t?.id === l.id ? r(null) : r(l), o(!1);
    },
    [t, r]
  ), f = ke(
    (l) => {
      l.stopPropagation(), r(null);
    },
    [r]
  );
  return /* @__PURE__ */ T("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ T(Fl, { open: n, onOpenChange: o, children: [
      /* @__PURE__ */ s(Al, { asChild: !0, children: /* @__PURE__ */ s(
        yt,
        {
          pressed: n,
          label: a.t("ai.tools"),
          hideLabel: !!t,
          icon: q0,
          variant: "outline",
          size: "md"
        }
      ) }),
      /* @__PURE__ */ s(
        Ml,
        {
          side: "top",
          align: "start",
          sideOffset: 8,
          className: "w-56 rounded-lg p-1",
          children: /* @__PURE__ */ s(Ut, { children: n && /* @__PURE__ */ s(
            Ae.div,
            {
              initial: { opacity: 0, scale: 0.95, y: 5 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 5 },
              transition: { duration: i ? 0 : 0.15 },
              className: "flex flex-col gap-0.5",
              children: e.map((l) => {
                const u = t?.id === l.id;
                return /* @__PURE__ */ s(
                  xr,
                  {
                    variant: "ghost",
                    size: "md",
                    onClick: () => c(l),
                    "aria-label": l.label,
                    className: ce(
                      bl({
                        variant: u ? "selected" : "ghost"
                      }),
                      "justify-start"
                    ),
                    children: /* @__PURE__ */ T("div", { className: "flex w-full items-start gap-1", children: [
                      l.icon && /* @__PURE__ */ s(
                        Ge,
                        {
                          icon: l.icon,
                          color: u ? "selected" : "default"
                        }
                      ),
                      /* @__PURE__ */ s("span", { className: "text-base", children: l.label })
                    ] })
                  },
                  l.id
                );
              })
            }
          ) })
        }
      )
    ] }),
    /* @__PURE__ */ s(Ut, { children: t && /* @__PURE__ */ T(
      Ae.button,
      {
        type: "button",
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
        transition: { duration: i ? 0 : 0.15 },
        onClick: f,
        className: ce(
          "flex items-center gap-1 rounded-sm px-2 py-1.5",
          "bg-f1-background-selected",
          "text-base font-medium text-f1-foreground-selected",
          "transition-colors",
          "hover:bg-f1-background-selected-hover"
        ),
        "aria-label": `Remove ${t.label}`,
        children: [
          t.icon && /* @__PURE__ */ s(Ge, { icon: t.icon, color: "currentColor" }),
          /* @__PURE__ */ s(ir, { children: t.label }),
          /* @__PURE__ */ s(Ge, { icon: gn, size: "md" })
        ]
      }
    ) })
  ] });
}
const pd = ({
  placeholders: e,
  defaultPlaceholder: t,
  inputValue: r,
  inProgress: n
}) => {
  const o = K1(), [a, i] = pe(""), [c, f] = pe(0), [l, u] = pe(!1), d = Le(null), p = Le(null), g = Le(null), v = e[c] ?? t;
  return Te(() => {
    const h = () => {
      p.current && (clearInterval(p.current), p.current = null), g.current && (clearInterval(g.current), g.current = null), d.current && (clearTimeout(d.current), d.current = null);
    };
    if (r.length > 0 || n) {
      u(!1), i(""), h();
      return;
    }
    if (o)
      return u(!1), i(v), h(), d.current = setTimeout(() => {
        const I = (c + 1) % Math.max(e.length, 1);
        f(I);
      }, 4e3), () => {
        h();
      };
    u(!0), i("");
    let m = 0;
    const S = 50, F = 30, _ = 2e3, N = 1e3;
    return p.current = setInterval(() => {
      m < v.length ? (i(v.slice(0, m + 1)), m++) : (p.current && (clearInterval(p.current), p.current = null), d.current = setTimeout(() => {
        g.current = setInterval(() => {
          m > 0 ? (m--, i(v.slice(0, m))) : (g.current && (clearInterval(g.current), g.current = null), d.current = setTimeout(() => {
            const I = (c + 1) % Math.max(e.length, 1);
            f(I);
          }, N));
        }, F);
      }, _));
    }, S), () => {
      h();
    };
  }, [
    r,
    n,
    v,
    c,
    e.length,
    o
  ]), r.length > 0 || n ? null : /* @__PURE__ */ s(Ut, { children: /* @__PURE__ */ s(
    Ae.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: o ? 0 : 0.4 },
      className: ce(
        "col-start-1 row-start-1",
        "pointer-events-none",
        "text-f1-foreground-secondary",
        "sm:text-[14px] text-[16px] leading-[20px] font-normal",
        "sm:pt-3 sm:px-3"
      ),
      children: /* @__PURE__ */ T(
        "div",
        {
          className: ce(
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "sm:whitespace-pre-wrap sm:break-words sm:overflow-visible"
          ),
          children: [
            a,
            l && !o && /* @__PURE__ */ s(
              Ae.span,
              {
                animate: { opacity: [1, 0] },
                transition: {
                  duration: 0.8,
                  repeat: 1 / 0,
                  ease: "easeInOut"
                },
                children: "|"
              }
            )
          ]
        }
      )
    }
  ) });
};
function Qo(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function gd(e, t, r) {
  const n = r?.cursorPosition ?? e.length, o = r?.inlineCompletion ?? null, a = [];
  for (const u of t) {
    const d = `@${u.name}`;
    let p = 0;
    for (; ; ) {
      const g = e.indexOf(d, p);
      if (g === -1) break;
      a.push({ start: g, end: g + d.length }), p = g + d.length;
    }
  }
  a.sort((u, d) => u.start - d.start);
  const i = [];
  let c = 0, f = !1;
  const l = (u) => {
    if (!o || f || n < c || n > u) {
      u > c && i.push({ type: "text", text: e.slice(c, u) }), c = u;
      return;
    }
    n > c && i.push({ type: "text", text: e.slice(c, n) }), i.push({ type: "ghost", text: o }), f = !0, n < u && i.push({ type: "text", text: e.slice(n, u) }), c = u;
  };
  for (const u of a)
    l(u.start), i.push({ type: "mention", text: e.slice(u.start, u.end) }), c = u.end;
  return l(e.length), !f && o && n >= c && i.push({ type: "ghost", text: o }), i.length === 0 ? [{ type: "text", text: e }] : i;
}
function vd(e, t, r) {
  const o = e.slice(0, t).lastIndexOf("@");
  if (o === -1) return null;
  if (o > 0) {
    const i = e[o - 1];
    if (i !== " " && i !== `
` && i !== "	")
      return null;
  }
  const a = e.slice(o + 1, t);
  if (a.includes(`
`)) return null;
  for (const i of r) {
    const c = e.slice(o + 1), f = o + 1 + i.name.length;
    if (c.startsWith(i.name) && t >= f) {
      const l = e[f];
      if (l === " " || l === `
` || l === "	")
        return null;
    }
  }
  return { atIndex: o, query: a };
}
const xd = [
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
function md(e, t) {
  const r = document.createElement("div"), n = r.style, o = window.getComputedStyle(e);
  n.whiteSpace = "pre-wrap", n.wordWrap = "break-word", n.position = "absolute", n.visibility = "hidden", n.overflow = "hidden";
  for (const f of xd)
    n.setProperty(f, o.getPropertyValue(f));
  r.textContent = e.value.substring(0, t);
  const a = document.createElement("span");
  a.textContent = e.value.substring(t) || "​", r.appendChild(a), document.body.appendChild(r);
  const i = a.offsetLeft, c = a.offsetTop - e.scrollTop;
  return document.body.removeChild(r), { left: i, top: c };
}
const Cd = 250;
function wd({
  inputValue: e,
  setInputValue: t,
  cursorPosition: r,
  entityResolvers: n,
  textareaRef: o
}) {
  const [a, i] = pe(!1), [c, f] = pe(""), [l, u] = pe([]), [d, p] = pe(!1), [g, v] = pe(0), [h, m] = pe([]), S = Le(-1), F = Le(null), _ = Le(0), N = Le(-1), I = n?.searchPersons;
  Te(() => {
    if (!I) {
      i(!1);
      return;
    }
    const W = vd(e, r, h);
    if (!W) {
      i(!1), f(""), u([]), v(0), S.current = -1, N.current = -1;
      return;
    }
    if (W.atIndex === N.current)
      return;
    S.current = W.atIndex, f(W.query), i(!0), v(0), p(!0), F.current && clearTimeout(F.current);
    const K = ++_.current;
    return F.current = setTimeout(() => {
      I(W.query).then((he) => {
        K === _.current && (u(he), v(0), he.length === 0 && W.query.length > 0 && (N.current = W.atIndex, i(!1)));
      }).catch(() => {
        K === _.current && u([]);
      }).finally(() => {
        K === _.current && p(!1);
      });
    }, Cd), () => {
      F.current && clearTimeout(F.current);
    };
  }, [e, r, I, h]);
  const j = ke(() => {
    i(!1), f(""), u([]), v(0), S.current = -1;
  }, []), A = ke(
    (W) => {
      const K = S.current;
      if (K === -1) return;
      const he = `${W.firstName} ${W.lastName}`.trim(), ae = String(W.id), ve = e.slice(0, K), ye = e.slice(r), ge = `@${he} `, me = ve + ge + ye, Fe = ve.length + ge.length;
      t(me), m((Ee) => [...Ee.filter((D) => !(D.id === ae && D.name === he)), { id: ae, name: he }]), j(), requestAnimationFrame(() => {
        const Ee = o.current;
        Ee && (Ee.focus(), Ee.setSelectionRange(Fe, Fe));
      });
    },
    [e, r, t, o, j]
  ), U = ke(
    (W) => {
      if (!a) return !1;
      if (W.key === "Escape")
        return W.preventDefault(), j(), !0;
      if (l.length === 0) return !1;
      switch (W.key) {
        case "ArrowDown":
          return W.preventDefault(), v((K) => (K + 1) % l.length), !0;
        case "ArrowUp":
          return W.preventDefault(), v(
            (K) => (K + l.length - 1) % l.length
          ), !0;
        case "Tab": {
          const K = l[g];
          if (K) {
            const he = `${K.firstName} ${K.lastName}`.trim();
            if (c.length === 0 || he.toLowerCase().startsWith(c.toLowerCase()))
              return W.preventDefault(), A(K), !0;
          }
          return !1;
        }
        case "Enter":
          return W.preventDefault(), l[g] && A(l[g]), !0;
        default:
          return !1;
      }
    },
    [a, l, g, c, A, j]
  ), O = ke(
    (W) => {
      if (h.length === 0) return W;
      let K = W;
      const he = [...h].sort((ae, ve) => ve.name.length - ae.name.length);
      for (const ae of he) {
        const ve = `@${ae.name}`, ye = `<entity-ref type="person" id="${Qo(ae.id)}">${Qo(ae.name)}</entity-ref>`;
        for (; K.includes(ve); )
          K = K.replace(ve, ye);
      }
      return K;
    },
    [h]
  );
  Te(() => {
    m(
      (W) => W.filter((K) => {
        const he = `@${K.name}`, ae = e.indexOf(he);
        if (ae === -1) return !1;
        const ve = e[ae + he.length];
        return ve === " " || ve === `
` || ve === "	";
      })
    );
  }, [e]);
  const G = Qe(() => {
    if (!a || S.current === -1) return null;
    const W = o.current;
    if (!W) return null;
    const K = md(W, S.current), he = W.offsetLeft + K.left, ve = (W.offsetParent ? W.offsetParent.offsetHeight : 0) - (W.offsetTop + K.top);
    return { left: he, bottom: ve };
  }, [a, e, r, o]), Y = Qe(() => {
    if (!a || l.length === 0) return null;
    const W = l[g];
    if (!W) return null;
    const K = `${W.firstName} ${W.lastName}`.trim();
    return c.length === 0 ? K : K.toLowerCase().startsWith(c.toLowerCase()) ? K.slice(c.length) : null;
  }, [a, l, g, c]);
  return {
    isOpen: a,
    query: c,
    results: l,
    isLoading: d,
    selectedIndex: g,
    mentions: h,
    popoverPosition: G,
    inlineCompletion: Y,
    handleKeyDown: U,
    selectPerson: A,
    transformMentions: O,
    close: j
  };
}
const kd = ({
  submitLabel: e,
  inProgress: t,
  onSend: r,
  onStop: n,
  placeholders: o = [],
  defaultPlaceholder: a,
  autoFocus: i = !0,
  entityResolvers: c,
  toolHints: f,
  activeToolHint: l,
  onActiveToolHintChange: u
}) => {
  const [d, p] = pe(""), [g, v] = pe(0), h = Le(null), m = Le(null), S = Le(null), F = Pe(), _ = wd({
    inputValue: d,
    setInputValue: p,
    cursorPosition: g,
    entityResolvers: c,
    textareaRef: m
  });
  Te(() => {
    i && typeof window < "u" && window.location.hash.length === 0 && m.current?.focus();
  }, [i]);
  const N = a ?? F.ai.inputPlaceholder, I = d.trim().length > 0, j = (K) => {
    if (K.preventDefault(), _.close(), t)
      n?.();
    else if (I) {
      const he = _.transformMentions(d.trim()), ae = l ? `<tool-context tool="${l.id}">${l.prompt}</tool-context>

${he}` : he;
      r(ae), p("");
    }
    m.current?.focus();
  }, A = (K) => {
    _.handleKeyDown(K) || K.key === "Enter" && !K.shiftKey && (K.preventDefault(), t || h.current?.requestSubmit());
  }, U = () => {
    v(m.current?.selectionStart ?? 0);
  }, O = () => {
    S.current && m.current && (S.current.scrollTop = m.current.scrollTop);
  }, G = o.length > 1, Y = Qe(() => gd(d, _.mentions, {
    cursorPosition: g,
    inlineCompletion: _.inlineCompletion
  }), [d, _.mentions, g, _.inlineCompletion]), W = _.mentions.length > 0 || _.inlineCompletion !== null;
  return /* @__PURE__ */ T(
    Ae.form,
    {
      "aria-busy": t,
      ref: h,
      className: ce(
        "relative isolate z-20",
        "flex flex-row items-end sm:flex-col sm:items-stretch gap-3",
        "rounded-lg border border-solid border-f1-border",
        "transition-all hover:cursor-text",
        "py-px pl-3 pr-1 sm:p-0",
        "before:pointer-events-none before:absolute before:inset-0 before:z-[-1]",
        "before:rounded-[inherit] before:bg-f1-background before:content-['']",
        "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2]",
        "after:rounded-[inherit] after:blur-[5px] after:content-['']",
        "after:scale-90 after:opacity-0",
        "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]",
        "from-[#E55619] via-[#A1ADE5] to-[#E51943]",
        "after:transition-all after:delay-200 after:duration-300",
        "has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100"
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
        m.current?.focus();
      },
      onSubmit: j,
      children: [
        /* @__PURE__ */ s(
          dd,
          {
            isOpen: _.isOpen,
            results: _.results,
            isLoading: _.isLoading,
            selectedIndex: _.selectedIndex,
            position: _.popoverPosition,
            onSelect: _.selectPerson
          }
        ),
        /* @__PURE__ */ T(
          "div",
          {
            className: ce(
              "grid flex-1 grid-cols-1 grid-rows-1",
              "min-h-[20px] py-2.5 sm:min-h-[20px] sm:py-0"
            ),
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  "aria-hidden": !0,
                  className: ce(
                    "col-start-1 row-start-1",
                    "pointer-events-none invisible",
                    "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]",
                    "whitespace-pre-wrap break-words",
                    "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
                    "sm:mt-3 sm:px-3"
                  ),
                  children: d.endsWith(`
`) ? d + "_" : d
                }
              ),
              W && /* @__PURE__ */ s(
                "div",
                {
                  ref: S,
                  "aria-hidden": !0,
                  className: ce(
                    "col-start-1 row-start-1",
                    "pointer-events-none",
                    "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px]",
                    "whitespace-pre-wrap break-words",
                    "sm:text-[14px] text-[16px] leading-[20px] font-normal text-f1-foreground",
                    "px-0 sm:mt-3 sm:px-3",
                    "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  ),
                  children: Y.map(
                    (K, he) => K.type === "mention" ? /* @__PURE__ */ s(
                      "span",
                      {
                        className: "font-medium text-f1-foreground-secondary",
                        children: K.text
                      },
                      he
                    ) : K.type === "ghost" ? /* @__PURE__ */ s(
                      "span",
                      {
                        className: "text-f1-foreground-secondary opacity-50",
                        children: K.text
                      },
                      he
                    ) : /* @__PURE__ */ s("span", { children: K.text }, he)
                  )
                }
              ),
              !d && !G && /* @__PURE__ */ s(
                "p",
                {
                  className: ce(
                    "col-start-1 row-start-1",
                    "pointer-events-none",
                    "text-f1-foreground-secondary",
                    "sm:text-[14px] text-[16px] leading-[20px] font-normal",
                    "sm:pt-3 sm:px-3",
                    "overflow-hidden text-ellipsis whitespace-nowrap"
                  ),
                  children: N
                }
              ),
              /* @__PURE__ */ s(
                "textarea",
                {
                  autoFocus: !1,
                  name: "one-ai-input",
                  rows: 1,
                  ref: m,
                  value: d,
                  onChange: (K) => {
                    p(K.target.value), v(K.target.selectionStart ?? 0);
                  },
                  onKeyDown: A,
                  onKeyUp: U,
                  onClick: U,
                  onSelect: U,
                  onScroll: O,
                  className: ce(
                    "col-start-1 row-start-1",
                    "min-h-[20px] max-h-[120px] sm:min-h-[20px] sm:max-h-[240px] sm:h-auto",
                    "resize-none",
                    "whitespace-pre-wrap break-words",
                    "sm:text-[14px] text-[16px] leading-[20px] font-normal",
                    "px-0 sm:mt-3 sm:px-3",
                    "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    "outline-none",
                    W ? "text-transparent caret-f1-foreground" : "text-f1-foreground",
                    !W && (d || !G ? "caret-f1-foreground" : "caret-transparent")
                  )
                }
              ),
              G && /* @__PURE__ */ s(
                pd,
                {
                  placeholders: o,
                  defaultPlaceholder: N,
                  inputValue: d,
                  inProgress: t
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ T("div", { className: "flex shrink-0 items-center justify-between p-1 sm:p-3", children: [
          /* @__PURE__ */ s("div", { className: "flex items-center", children: f && f.length > 0 && u && /* @__PURE__ */ s(
            hd,
            {
              toolHints: f,
              activeToolHint: l ?? null,
              onChange: u
            }
          ) }),
          /* @__PURE__ */ s("div", { className: "flex items-center", children: t ? /* @__PURE__ */ s(
            yt,
            {
              type: "submit",
              variant: "neutral",
              label: F.ai.stopAnswerGeneration,
              icon: va,
              hideLabel: !0
            }
          ) : /* @__PURE__ */ s(
            yt,
            {
              type: "submit",
              disabled: !I,
              variant: I ? "default" : "neutral",
              label: e || F.ai.sendMessage,
              icon: e ? void 0 : j0,
              hideLabel: !e
            }
          ) })
        ] })
      ]
    }
  );
}, ni = ({
  submitLabel: e,
  inProgress: t,
  onSend: r,
  onStop: n
}) => {
  const {
    placeholders: o,
    entityResolvers: a,
    toolHints: i,
    activeToolHint: c,
    setActiveToolHint: f
  } = Ye(), { messages: l, setMessages: u } = fr(), d = Pe(), p = Le(l);
  p.current = l;
  const g = ke(async () => {
    await n?.(), u([
      ...p.current,
      {
        id: c1(),
        role: "assistant",
        content: `*<!--response-stopped-->${d.ai.responseStopped}*`
      }
    ]);
  }, [n, u, d.ai.responseStopped]);
  return /* @__PURE__ */ s(
    kd,
    {
      submitLabel: e,
      inProgress: t,
      onSend: r,
      onStop: g,
      placeholders: o,
      entityResolvers: a,
      toolHints: i,
      activeToolHint: c,
      onActiveToolHintChange: f
    }
  );
}, Ed = ({
  onResize: e,
  onReset: t,
  isResizing: r,
  setIsResizing: n
}) => {
  const o = Le(0), a = ke(
    (c) => {
      c.preventDefault(), o.current = c.clientX, n(!0);
    },
    [n]
  ), i = ke(async () => {
    n(!0), await t(), n(!1);
  }, [t, n]);
  return Te(() => {
    if (!r) return;
    const c = (l) => {
      const u = o.current - l.clientX;
      o.current = l.clientX, e(u);
    }, f = () => {
      n(!1);
    };
    return document.addEventListener("mousemove", c), document.addEventListener("mouseup", f), () => {
      document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", f);
    };
  }, [r, e, n]), /* @__PURE__ */ s(
    "div",
    {
      className: ce(
        "flex h-full w-1 flex-shrink-0 cursor-ew-resize items-stretch justify-center transition-colors",
        "[&>div]:hover:bg-f1-background-secondary-hover",
        r && "[&>div]:bg-f1-background-secondary-hover"
      ),
      onMouseDown: a,
      onDoubleClick: i,
      children: /* @__PURE__ */ s("div", { className: "w-1 rounded-full" })
    }
  );
}, Ld = ({ children: e }) => {
  const {
    open: t,
    visualizationMode: r,
    shouldPlayEntranceAnimation: n,
    setShouldPlayEntranceAnimation: o,
    resizable: a,
    setChatWidth: i,
    resetChatWidth: c
  } = Ye(), f = r === "fullscreen", [l, u] = pe(!1), d = ke(
    (g) => {
      i((v) => {
        const h = v + g;
        return Math.max(N3, Math.min(O3, h));
      });
    },
    [i]
  ), p = Qe(() => l ? { duration: 0 } : n ? { duration: 0.3, ease: [0, 0, 0.1, 1] } : { duration: 0.3, ease: [0, 0, 0.1, 1] }, [l, n]);
  return /* @__PURE__ */ s(Ut, { children: t && /* @__PURE__ */ T(
    Ae.div,
    {
      className: "bg-f1-transparent pointer-events-auto relative ml-auto flex h-full py-1 pr-1 dark:bg-f1-background xs:rounded-xl",
      initial: n ? { opacity: 0, width: 0 } : !1,
      animate: {
        opacity: 1,
        width: "100%"
      },
      exit: { opacity: 0, width: 0 },
      transition: p,
      style: { transformOrigin: "right center" },
      onAnimationComplete: () => {
        n && o(!1);
      },
      children: [
        a && !f && /* @__PURE__ */ s(
          Ed,
          {
            onResize: d,
            onReset: c,
            isResizing: l,
            setIsResizing: u
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            "aria-hidden": !t,
            className: "relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
            children: /* @__PURE__ */ s(
              Ae.div,
              {
                className: "relative flex h-full w-full flex-col overflow-hidden",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: {
                  duration: n ? 0.3 : 0.05,
                  ease: "easeOut",
                  delay: n ? 0.2 : 0
                },
                children: e
              }
            )
          }
        )
      ]
    },
    "chat-wrapper"
  ) });
}, oi = ({
  icon: e,
  title: t,
  children: r
}) => {
  const [n, o] = pe(!1), a = K1();
  return /* @__PURE__ */ T(
    T9,
    {
      className: "mb-1 w-full",
      open: n,
      onOpenChange: o,
      children: [
        /* @__PURE__ */ T(S9, { className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90", children: [
          /* @__PURE__ */ s("span", { className: "mr-2 *:block", children: /* @__PURE__ */ s(Ge, { icon: e, className: "block" }) }),
          /* @__PURE__ */ s("span", { className: "mr-[2px]", children: t }),
          /* @__PURE__ */ s(
            Ge,
            {
              icon: pn,
              className: "h-4 w-4 transition-transform duration-200"
            }
          )
        ] }),
        /* @__PURE__ */ s(y9, { forceMount: !0, className: "data-[state=open]:mt-3", children: /* @__PURE__ */ s(
          Ae.div,
          {
            initial: !1,
            animate: {
              height: n ? "auto" : 0,
              opacity: n ? 1 : 0,
              visibility: n ? "visible" : "hidden"
            },
            transition: {
              duration: a ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "flex flex-col gap-2",
            children: r
          }
        ) })
      ]
    }
  );
}, H1 = ({ messages: e, title: t }) => {
  const r = Pe();
  return /* @__PURE__ */ s(
    oi,
    {
      icon: pa,
      title: t ?? r.ai.thoughtsGroupTitle,
      children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-2 pl-7", children: e.map((n, o) => /* @__PURE__ */ s("div", { children: n.role === "assistant" && n.generativeUI?.({
        status: "complete",
        result: { inGroup: !0 }
      }) }, o)) })
    }
  );
};
function _d({
  viewportRef: e,
  contentRef: t,
  endRef: r,
  lastTurnRef: n,
  turnsCount: o
}) {
  const [a, i] = pe(0), [c, f] = pe(!1), l = Le(o), u = ke(
    (p = "smooth") => {
      r.current?.scrollIntoView({ behavior: p });
    },
    [r]
  );
  Te(() => {
    const p = e.current, g = t.current;
    if (!p || !g) return;
    const v = new ResizeObserver(() => {
      const h = parseFloat(getComputedStyle(g).paddingTop) + parseFloat(getComputedStyle(g).paddingBottom) + 1;
      i(p.clientHeight - h);
    });
    return v.observe(p), v.observe(g), () => v.disconnect();
  }, [e, t]);
  const d = ke(() => {
    const p = e.current;
    if (!p) return;
    const { scrollTop: g, scrollHeight: v, clientHeight: h } = p, m = v - g - h;
    f(m > h);
  }, [e]);
  return Te(() => {
    const p = e.current;
    if (p)
      return p.addEventListener("scroll", d, { passive: !0 }), () => p.removeEventListener("scroll", d);
  }, [d, e]), Te(() => {
    o > l.current && requestAnimationFrame(() => {
      n.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }), o === 0 && f(!1), l.current = o;
  }, [o, n]), { showScrollBtn: c, turnMinHeight: a, scrollToBottom: u };
}
const ai = X1(null), ii = ({ children: e }) => {
  const [t, r] = pe(null), n = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (o, a) => r({ action: o, message: a }),
    close: () => r(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (o, a) => r({ action: o, message: a }),
    close: () => r(null)
  };
  return /* @__PURE__ */ s(ai.Provider, { value: n, children: e });
}, si = () => {
  const e = kn(ai);
  if (e === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return e;
};
function ci() {
  const e = si(), { threadId: t } = s1(), { onThumbsUp: r, onThumbsDown: n } = Ye();
  return { modal: e, handleSubmit: (i, c) => {
    (e.currentReaction === "like" ? r : n)?.(i, { threadId: t, feedback: c }), e.close();
  }, handleClose: (i) => {
    (e.currentReaction === "like" ? r : n)?.(i, { threadId: t, feedback: "" }), e.close();
  } };
}
function Td(e) {
  return e.role === "assistant" && e.agentName !== void 0;
}
function li(e, t, r, n) {
  const o = t === r - 1, a = !(n && o), i = e.some(
    (f) => !Array.isArray(f) && f.role === "assistant" && (!!f.content || f.toolCalls?.some((l) => l.function.name !== "orchestratorThinking"))
  ), c = !a && i && !Array.isArray(e[e.length - 1]);
  return { isLastTurn: o, turnIsComplete: a, showActivityIndicator: c };
}
function fi(e) {
  if (e.length === 0)
    return [];
  console.assert(
    e[0].role === "user",
    "Invariant violation! Assistant message received before user message"
  );
  const t = [];
  let r = null;
  for (const [n, o] of e.entries()) {
    if (o.role === "user") {
      t.push([o]), r = null;
      continue;
    }
    const a = t[t.length - 1];
    if (Td(o) && r) {
      if (n !== e.length - 1) {
        const i = a.indexOf(r);
        i !== -1 && a.splice(i, 1), a.push(o, r);
      }
      continue;
    }
    if (Sd(o)) {
      if (r) {
        const i = r[r.length - 1];
        e0(i) !== e0(o) && r.push(o);
      } else
        r = [o], a.length > 1 ? a.splice(1, 0, r) : a.push(r);
      continue;
    }
    a.push(o);
  }
  return t;
}
function ui(e) {
  const t = e.find((n) => Array.isArray(n)), r = e.filter((n) => !Array.isArray(n));
  return {
    thinkingGroup: t ?? null,
    restMessages: r
  };
}
function Sd(e) {
  return e.role === "assistant" && e.toolCalls?.some(
    (t) => t.function.name === "orchestratorThinking"
  ) === !0;
}
function e0(e) {
  return e.toolCalls?.find((r) => r.function.name === "orchestratorThinking")?.function.arguments || e.content || e.id;
}
const di = ({
  onClose: e,
  onSubmit: t,
  reactionType: r,
  message: n
}) => {
  const [o, a] = pe(""), i = Pe(), { title: c, label: f, placeholder: l } = r === "like" ? i.ai.feedbackModal.positive : i.ai.feedbackModal.negative, u = ke(() => {
    t(n, o);
  }, [o, n, t]), d = () => {
    e(n);
  };
  return Te(() => {
    const p = (g) => {
      g.key === "Enter" && (g.preventDefault(), u());
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [u]), /* @__PURE__ */ s(
    w9,
    {
      position: "center",
      isOpen: !0,
      onClose: d,
      width: "md",
      title: c,
      container: null,
      primaryAction: {
        label: i.actions.send,
        onClick: u
      },
      secondaryAction: {
        label: i.actions.cancel,
        onClick: d
      },
      children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ s(
        Rl,
        {
          autoFocus: !0,
          label: f,
          placeholder: l,
          value: o,
          onChange: (p) => a(p.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
}, t0 = ({ position: e }) => /* @__PURE__ */ s(
  Ae.div,
  {
    transition: { duration: 0.2, ease: "easeOut" },
    className: ce(
      "pointer-events-none absolute inset-x-0 z-10  after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']",
      e === "top" ? [
        "top-0",
        "h-6",
        "bg-gradient-to-b from-f1-background dark:from-f1-background-secondary to-transparent",
        "after:top-0"
      ] : [
        "bottom-0",
        "h-6",
        "bg-gradient-to-t from-f1-background dark:from-f1-background-secondary to-transparent",
        "after:bottom-0"
      ]
    )
  }
), hi = ({ messages: e, onCopy: t }) => {
  const r = Pe(), { open: n } = si(), [o, a] = pe(null), i = e.filter(
    (l) => !Array.isArray(l) && l.role === "assistant" && !!l.content
  ).map((l) => l.content).join(`

`), c = [...e].reverse().find((l) => !Array.isArray(l) && l.role === "assistant"), f = i.includes("<!--response-stopped-->");
  return !i || !c || f ? null : /* @__PURE__ */ T("div", { className: "flex", children: [
    /* @__PURE__ */ s(
      qa,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: i,
        onCopy: (l) => {
          l.currentTarget.blur(), t?.(i);
        }
      }
    ),
    /* @__PURE__ */ s(
      xr,
      {
        onClick: (l) => {
          const u = o === "like" ? null : "like";
          u && n(u, c), a(u), l.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": r.actions.thumbsUp,
        children: /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ s(
          Ge,
          {
            size: "md",
            icon: o === "like" ? ua : fa,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ s(
      xr,
      {
        onClick: (l) => {
          const u = o === "dislike" ? null : "dislike";
          u && n(u, c), a(u), l.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": r.actions.thumbsDown,
        children: /* @__PURE__ */ s("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ s(
          Ge,
          {
            size: "md",
            icon: o === "dislike" ? la : ca,
            color: "default"
          }
        ) })
      }
    )
  ] });
}, yd = 3;
function Fd(e, t = yd) {
  return [...e].sort(() => 0.5 - Math.random()).slice(0, t);
}
const pi = ({
  greeting: e,
  initialMessages: t = [],
  suggestions: r = []
}) => {
  const { sendMessage: n } = fr(), { visualizationMode: o, tracking: a } = Ye(), i = o === "fullscreen", c = Qe(
    () => Fd(r),
    [r]
  );
  return /* @__PURE__ */ s(Ut, { mode: "popLayout", children: /* @__PURE__ */ T(
    Ae.div,
    {
      className: "flex w-full flex-1 flex-col justify-end gap-6 sm:gap-4",
      initial: { opacity: 1 },
      children: [
        /* @__PURE__ */ T("div", { className: i ? "" : "pl-3", children: [
          /* @__PURE__ */ s(
            Ae.div,
            {
              className: "flex w-fit justify-center",
              initial: { opacity: 0, scale: 0.8, filter: "blur(6px)" },
              animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.4
              },
              children: /* @__PURE__ */ s(ya, { spin: !0, size: "lg", className: "my-4" })
            }
          ),
          e && !i && /* @__PURE__ */ s(
            Ae.p,
            {
              className: "text-lg font-semibold leading-[24px] text-f1-foreground-secondary",
              initial: { opacity: 0, filter: "blur(2px)", y: -8 },
              animate: { opacity: 1, filter: "blur(0px)", y: 0 },
              transition: {
                duration: 0.2,
                ease: "easeOut",
                delay: 0.5
              },
              children: e
            }
          ),
          t.map((f) => /* @__PURE__ */ s(
            Ae.p,
            {
              className: ce(
                "text-xl font-semibold leading-[24px] text-f1-foreground",
                i ? "text-3xl" : ""
              ),
              initial: { opacity: 0, filter: "blur(2px)", y: -8 },
              animate: { opacity: 1, filter: "blur(0px)", y: 0 },
              transition: {
                duration: 0.2,
                ease: "easeOut",
                delay: 0.7
              },
              children: f.content
            },
            f.id
          ))
        ] }),
        !!c.length && /* @__PURE__ */ s("div", { className: "flex flex-col items-start gap-[6px]", children: c.map((f, l) => /* @__PURE__ */ s(
          Ae.div,
          {
            className: "w-full",
            initial: { opacity: 0, filter: "blur(2px)", y: -8 },
            animate: { opacity: 1, filter: "blur(0px)", y: 0 },
            transition: {
              duration: 0.1,
              ease: "easeOut",
              delay: 0.9 + l * 0.1
            },
            children: /* @__PURE__ */ s(
              yt,
              {
                variant: "ghost",
                className: "border border-solid border-f1-border-secondary shadow sm:border-none sm:shadow-none",
                label: f.message,
                icon: f.icon,
                onClick: () => {
                  a?.onWelcomeSuggestionClick?.(f), n({
                    id: c1(),
                    role: "user",
                    content: f.prompt || f.message
                  });
                }
              }
            )
          },
          l
        )) })
      ]
    },
    "welcome"
  ) });
}, Ad = (e) => /* @__PURE__ */ s(ii, { children: /* @__PURE__ */ s(Md, { ...e }) }), Md = ({
  inProgress: e,
  children: t,
  RenderMessage: r,
  AssistantMessage: n,
  UserMessage: o,
  ImageRenderer: a,
  onRegenerate: i,
  onCopy: c,
  markdownTagRenderers: f
}) => {
  const { messages: l, interrupt: u } = fr(), { modal: d, handleSubmit: p, handleClose: g } = ci(), v = Pe(), {
    greeting: h,
    initialMessage: m,
    welcomeScreenSuggestions: S,
    isLoadingThread: F
  } = Ye(), _ = Qe(
    () => Rd(
      m || v.ai.defaultInitialMessage
    ),
    [m, v.ai.defaultInitialMessage]
  ), N = l.length === 0 && (h || _.length > 0), I = Qe(() => fi(l), [l]), j = Le(null), A = Le(null), U = Le(null), O = Le(null), G = Le(null), { showScrollBtn: Y, turnMinHeight: W, scrollToBottom: K } = _d({
    viewportRef: j,
    contentRef: A,
    endRef: U,
    lastTurnRef: G,
    turnsCount: I.length
  });
  return /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ T("div", { className: "relative flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ s(
        "div",
        {
          ref: j,
          className: ce(
            "flex-1 overflow-y-scroll",
            "[scrollbar-width:thin] [scrollbar-color:transparent_transparent]",
            "hover:[scrollbar-color:var(--scrollbar-thumb)_transparent]",
            "[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
            "hover:[&::-webkit-scrollbar-thumb]:bg-f1-background-inverse/30"
          ),
          children: /* @__PURE__ */ T(
            "div",
            {
              ref: A,
              className: "flex h-full flex-col items-center px-4 py-4",
              children: [
                /* @__PURE__ */ T(
                  "div",
                  {
                    className: ce(
                      N && !F ? "flex flex-1" : "flex flex-col gap-6",
                      "w-full max-w-[712px]"
                    ),
                    children: [
                      F && /* @__PURE__ */ s(bd, {}),
                      !F && N && /* @__PURE__ */ s(
                        pi,
                        {
                          greeting: h,
                          initialMessages: _,
                          suggestions: S
                        }
                      ),
                      !F && I.map((he, ae) => {
                        const { turnIsComplete: ve, showActivityIndicator: ye } = li(
                          he,
                          ae,
                          I.length,
                          e
                        ), { thinkingGroup: ge, restMessages: me } = ui(he), Fe = ae === I.length - 1;
                        return /* @__PURE__ */ T(
                          "div",
                          {
                            ref: Fe ? G : void 0,
                            className: ce(
                              "flex flex-col items-start justify-start gap-2",
                              Fe && "pb-5"
                            ),
                            style: {
                              minHeight: Fe && W || void 0
                            },
                            children: [
                              me.map((Ee, y) => {
                                const D = Fe && y === me.length - 1, R = Ee, b = me.findIndex(
                                  (oe) => oe.role === "assistant"
                                );
                                return /* @__PURE__ */ T(R1, { children: [
                                  ge && !(Fe && !ve) && y === b && /* @__PURE__ */ s(
                                    H1,
                                    {
                                      messages: ge,
                                      isActive: !1,
                                      inProgress: e,
                                      RenderMessage: r,
                                      AssistantMessage: n
                                    },
                                    `thinking-${ae}`
                                  ),
                                  /* @__PURE__ */ s(
                                    r,
                                    {
                                      message: R,
                                      inProgress: e,
                                      index: y,
                                      isCurrentMessage: D,
                                      AssistantMessage: n,
                                      UserMessage: o,
                                      ImageRenderer: a,
                                      onRegenerate: i,
                                      onCopy: c,
                                      markdownTagRenderers: f
                                    }
                                  )
                                ] }, `${ae}-${y}`);
                              }),
                              ge && Fe && !ve && !ye && /* @__PURE__ */ s(
                                r,
                                {
                                  message: ge[ge.length - 1],
                                  inProgress: e,
                                  index: me.length,
                                  isCurrentMessage: !0,
                                  AssistantMessage: n,
                                  UserMessage: o,
                                  ImageRenderer: a,
                                  onRegenerate: i,
                                  onCopy: c,
                                  markdownTagRenderers: f
                                },
                                `thinking-live-${ae}`
                              ),
                              ye && /* @__PURE__ */ s(l1, { title: "", status: "executing" }),
                              ve && /* @__PURE__ */ s(hi, { messages: he, onCopy: c })
                            ]
                          },
                          `turn-${ae}`
                        );
                      }),
                      u
                    ]
                  }
                ),
                /* @__PURE__ */ s("div", { ref: O, className: "h-px shrink-0", "aria-hidden": !0 }),
                /* @__PURE__ */ s("footer", { className: "copilotKitMessagesFooter", ref: U, children: t }),
                /* @__PURE__ */ s(Ut, { children: Y && /* @__PURE__ */ s(
                  Ae.div,
                  {
                    className: "sticky bottom-2 z-10 flex justify-center",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ s("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ s(
                      yt,
                      {
                        onClick: () => K(),
                        label: v.ai.scrollToBottom,
                        variant: "neutral",
                        icon: W1,
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
      /* @__PURE__ */ s(t0, { position: "top" }, "shadow-top"),
      /* @__PURE__ */ s(t0, { position: "bottom" }, "shadow-bottom")
    ] }),
    d.isOpen && /* @__PURE__ */ s(
      di,
      {
        onSubmit: p,
        onClose: g,
        reactionType: d.currentReaction,
        message: d.currentMessage
      }
    )
  ] });
}, bd = () => /* @__PURE__ */ s("div", { className: "flex h-full w-full max-w-[712px] flex-col gap-6", children: /* @__PURE__ */ T("div", { className: "flex flex-col gap-2", children: [
  /* @__PURE__ */ s("div", { className: "flex justify-end", children: /* @__PURE__ */ s(nr, { className: "h-12 w-2/5 rounded-full" }) }),
  /* @__PURE__ */ s(nr, { className: "mt-6 h-5 w-full rounded-md" }),
  /* @__PURE__ */ s(nr, { className: "h-5 w-2/5 rounded-md" }),
  /* @__PURE__ */ s(nr, { className: "h-5 w-4/5 rounded-md" })
] }) });
function Rd(e) {
  return e ? (Array.isArray(e) ? e : [e]).map((r) => ({
    id: r,
    role: "assistant",
    content: r
  })) : [];
}
function Nd(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e))
    return e.filter((t) => t.type === "text" && t.text).map((t) => t.text).join("");
}
const r0 = /<entity-ref\s+type="person"\s+id="([^"]+)">(.*?)<\/entity-ref>/g, Od = /<tool-context\s+tool="[^"]*">[\s\S]*?<\/tool-context>\s*/g;
function Dd(e) {
  const t = [];
  let r = 0, n;
  for (r0.lastIndex = 0; (n = r0.exec(e)) !== null; )
    n.index > r && t.push({
      kind: "text",
      text: e.slice(r, n.index)
    }), t.push({
      kind: "person-ref",
      id: n[1],
      name: n[2]
    }), r = n.index + n[0].length;
  return t.length === 0 ? null : (r < e.length && t.push({ kind: "text", text: e.slice(r) }), t);
}
function Id({
  content: e
}) {
  if (!e) return null;
  const t = e.replace(Od, ""), r = Dd(t);
  return r ? /* @__PURE__ */ s(Ct, { children: r.map((n, o) => n.kind === "text" ? /* @__PURE__ */ s("span", { children: n.text }, o) : /* @__PURE__ */ s(Qa, { id: n.id, label: n.name }, o)) }) : /* @__PURE__ */ s(Ct, { children: t });
}
const gi = ({ message: e, ImageRenderer: t }) => {
  const r = e && "image" in e && e.image, n = Le(null), a = !!kn(m1)?.setInProgress;
  if (Te(() => {
    !n.current || a || n.current.scrollIntoView({
      behavior: "smooth"
    });
  }, [a]), r) {
    const i = e;
    return /* @__PURE__ */ s("div", { className: "copilotKitMessage copilotKitUserMessage", children: /* @__PURE__ */ s(
      t,
      {
        image: i.image,
        content: i.content
      }
    ) });
  }
  return /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      className: "my-4 w-fit max-w-[90%] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
      children: /* @__PURE__ */ s(Id, { content: Nd(e?.content) })
    }
  );
}, Pd = () => {
  Qt({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [
      {
        name: "message",
        description: "User-friendly progress message",
        required: !0
      }
    ],
    // render only when backend wants to display the thinking
    available: "frontend",
    render: (e) => {
      const t = e.args.message ?? "thinking", r = e.result;
      return /* @__PURE__ */ s(
        l1,
        {
          title: t,
          status: e.status === "complete" ? "completed" : e.status,
          inGroup: r?.inGroup
        }
      );
    }
  });
}, Bd = (e) => F3[e] || Y0, Hd = ({ iconName: e }) => e ? /* @__PURE__ */ s("div", { className: "mr-1 flex items-center justify-center", children: /* @__PURE__ */ s(Ge, { icon: Bd(e), size: "md", color: "default" }) }) : null, Vd = ({ sources: e }) => {
  const t = Pe();
  return !e || e.length === 0 || !Array.isArray(e) ? null : /* @__PURE__ */ s(
    oi,
    {
      icon: Z1,
      title: t.ai.resourcesGroupTitle,
      children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2", children: e.map((r, n) => {
        const o = /* @__PURE__ */ s(Hd, { iconName: r.icon });
        return r.link ? /* @__PURE__ */ s(
          xr,
          {
            "aria-label": r.title,
            href: r.link,
            size: "md",
            target: r.targetBlank ? "_blank" : "_self",
            variant: "ghost",
            className: "justify-start truncate hover:bg-f1-background-hover",
            compact: !0,
            prepend: o,
            children: /* @__PURE__ */ s("div", { className: "flex w-full items-start", children: r.title })
          },
          n
        ) : /* @__PURE__ */ T(
          "div",
          {
            className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
            children: [
              o,
              r.title
            ]
          },
          n
        );
      }) })
    }
  );
}, Ud = () => {
  Qt({
    name: "messageSources",
    description: "Attach information sources to the assistant's response. Use this to show where the AI got its information from.",
    parameters: [
      {
        name: "sources",
        type: "object[]",
        description: "Array of source objects with title and link properties. Example: [{title: 'Documentation', link: 'https://example.com'}]",
        required: !0,
        attributes: [
          {
            name: "title",
            type: "string",
            description: "The title or name of the source",
            required: !0
          },
          {
            name: "link",
            type: "string",
            description: "The URL link to the source",
            required: !0
          },
          {
            name: "icon",
            type: "string",
            description: "The icon name to display for the source",
            required: !1
          },
          {
            name: "targetBlank",
            type: "boolean",
            description: "Whether to open the link in a new tab",
            required: !1
          }
        ]
      }
    ],
    // render only when backend wants to attach sources
    available: "frontend",
    render: (e) => {
      const t = e.args.sources ?? [];
      return /* @__PURE__ */ s(Vd, { sources: t });
    }
  });
};
var jn = {};
jn.version = "0.18.5";
var vi = 1252, $d = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], xi = function(e) {
  $d.indexOf(e) != -1 && (vi = e);
};
function jd() {
  xi(1252);
}
var an = function(e) {
  xi(e);
};
function Wd() {
  an(1200), jd();
}
var Mn = function(t) {
  return String.fromCharCode(t);
}, n0 = function(t) {
  return String.fromCharCode(t);
}, Wn, or = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function sn(e) {
  for (var t = "", r = 0, n = 0, o = 0, a = 0, i = 0, c = 0, f = 0, l = 0; l < e.length; )
    r = e.charCodeAt(l++), a = r >> 2, n = e.charCodeAt(l++), i = (r & 3) << 4 | n >> 4, o = e.charCodeAt(l++), c = (n & 15) << 2 | o >> 6, f = o & 63, isNaN(n) ? c = f = 64 : isNaN(o) && (f = 64), t += or.charAt(a) + or.charAt(i) + or.charAt(c) + or.charAt(f);
  return t;
}
function qt(e) {
  var t = "", r = 0, n = 0, o = 0, a = 0, i = 0, c = 0, f = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; )
    a = or.indexOf(e.charAt(l++)), i = or.indexOf(e.charAt(l++)), r = a << 2 | i >> 4, t += String.fromCharCode(r), c = or.indexOf(e.charAt(l++)), n = (i & 15) << 4 | c >> 2, c !== 64 && (t += String.fromCharCode(n)), f = or.indexOf(e.charAt(l++)), o = (c & 3) << 6 | f, f !== 64 && (t += String.fromCharCode(o));
  return t;
}
var be = /* @__PURE__ */ (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), er = /* @__PURE__ */ (function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = !0;
    }
    return e ? function(t, r) {
      return r ? new Buffer(t, r) : new Buffer(t);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})();
function mr(e) {
  return be ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function o0(e) {
  return be ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Bt = function(t) {
  return be ? er(t, "binary") : t.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function f1(e) {
  if (typeof ArrayBuffer > "u") return Bt(e);
  for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), n = 0; n != e.length; ++n) r[n] = e.charCodeAt(n) & 255;
  return t;
}
function En(e) {
  if (Array.isArray(e)) return e.map(function(n) {
    return String.fromCharCode(n);
  }).join("");
  for (var t = [], r = 0; r < e.length; ++r) t[r] = String.fromCharCode(e[r]);
  return t.join("");
}
function Zd(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
var at = be ? function(e) {
  return Buffer.concat(e.map(function(t) {
    return Buffer.isBuffer(t) ? t : er(t);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var t = 0, r = 0;
    for (t = 0; t < e.length; ++t) r += e[t].length;
    var n = new Uint8Array(r), o = 0;
    for (t = 0, r = 0; t < e.length; r += o, ++t)
      if (o = e[t].length, e[t] instanceof Uint8Array) n.set(e[t], r);
      else {
        if (typeof e[t] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[t]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(a) {
    return Array.isArray(a) ? a : [].slice.call(a);
  }));
};
function Gd(e) {
  for (var t = [], r = 0, n = e.length + 250, o = mr(e.length + 255), a = 0; a < e.length; ++a) {
    var i = e.charCodeAt(a);
    if (i < 128) o[r++] = i;
    else if (i < 2048)
      o[r++] = 192 | i >> 6 & 31, o[r++] = 128 | i & 63;
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var c = e.charCodeAt(++a) & 1023;
      o[r++] = 240 | i >> 8 & 7, o[r++] = 128 | i >> 2 & 63, o[r++] = 128 | c >> 6 & 15 | (i & 3) << 4, o[r++] = 128 | c & 63;
    } else
      o[r++] = 224 | i >> 12 & 15, o[r++] = 128 | i >> 6 & 63, o[r++] = 128 | i & 63;
    r > n && (t.push(o.slice(0, r)), r = 0, o = mr(65535), n = 65530);
  }
  return t.push(o.slice(0, r)), at(t);
}
var Qr = /\u0000/g, bn = /[\u0001-\u0006]/g;
function Rr(e) {
  for (var t = "", r = e.length - 1; r >= 0; ) t += e.charAt(r--);
  return t;
}
function Ht(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ze("0", t - r.length) + r;
}
function fo(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ze(" ", t - r.length) + r;
}
function Zn(e, t) {
  var r = "" + e;
  return r.length >= t ? r : r + Ze(" ", t - r.length);
}
function zd(e, t) {
  var r = "" + Math.round(e);
  return r.length >= t ? r : Ze("0", t - r.length) + r;
}
function Kd(e, t) {
  var r = "" + e;
  return r.length >= t ? r : Ze("0", t - r.length) + r;
}
var a0 = /* @__PURE__ */ Math.pow(2, 32);
function yr(e, t) {
  if (e > a0 || e < -a0) return zd(e, t);
  var r = Math.round(e);
  return Kd(r, t);
}
function Gn(e, t) {
  return t = t || 0, e.length >= 7 + t && (e.charCodeAt(t) | 32) === 103 && (e.charCodeAt(t + 1) | 32) === 101 && (e.charCodeAt(t + 2) | 32) === 110 && (e.charCodeAt(t + 3) | 32) === 101 && (e.charCodeAt(t + 4) | 32) === 114 && (e.charCodeAt(t + 5) | 32) === 97 && (e.charCodeAt(t + 6) | 32) === 108;
}
var i0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], L1 = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Xd(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var ze = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, s0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, Yd = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function zn(e, t, r) {
  for (var n = e < 0 ? -1 : 1, o = e * n, a = 0, i = 1, c = 0, f = 1, l = 0, u = 0, d = Math.floor(o); l < t && (d = Math.floor(o), c = d * i + a, u = d * l + f, !(o - d < 5e-8)); )
    o = 1 / (o - d), a = i, i = c, f = l, l = u;
  if (u > t && (l > t ? (u = f, c = a) : (u = l, c = i)), !r) return [0, n * c, u];
  var p = Math.floor(n * c / u);
  return [p, n * c - p * u, u];
}
function Rn(e, t, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0, o = Math.floor(86400 * (e - n)), a = 0, i = [], c = { D: n, T: o, u: 86400 * (e - n) - o, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(c.u) < 1e-6 && (c.u = 0), t && t.date1904 && (n += 1462), c.u > 0.9999 && (c.u = 0, ++o == 86400 && (c.T = o = 0, ++n, ++c.D)), n === 60)
    i = r ? [1317, 10, 29] : [1900, 2, 29], a = 3;
  else if (n === 0)
    i = r ? [1317, 8, 29] : [1900, 1, 0], a = 6;
  else {
    n > 60 && --n;
    var f = new Date(1900, 0, 1);
    f.setDate(f.getDate() + n - 1), i = [f.getFullYear(), f.getMonth() + 1, f.getDate()], a = f.getDay(), n < 60 && (a = (a + 6) % 7), r && (a = nh(f, i));
  }
  return c.y = i[0], c.m = i[1], c.d = i[2], c.S = o % 60, o = Math.floor(o / 60), c.M = o % 60, o = Math.floor(o / 60), c.H = o, c.q = a, c;
}
var mi = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), qd = /* @__PURE__ */ mi.getTime(), Jd = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Ci(e, t) {
  var r = /* @__PURE__ */ e.getTime();
  return t ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Jd && (r += 1440 * 60 * 1e3), (r - (qd + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ mi.getTimezoneOffset()) * 6e4)) / (1440 * 60 * 1e3);
}
function uo(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Qd(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function eh(e) {
  var t = e < 0 ? 12 : 11, r = uo(e.toFixed(12));
  return r.length <= t || (r = e.toPrecision(10), r.length <= t) ? r : e.toExponential(5);
}
function th(e) {
  var t = uo(e.toFixed(11));
  return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
}
function rh(e) {
  var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return t >= -4 && t <= -1 ? r = e.toPrecision(10 + t) : Math.abs(t) <= 9 ? r = eh(e) : t === 10 ? r = e.toFixed(10).substr(0, 12) : r = th(e), uo(Qd(r.toUpperCase()));
}
function V1(e, t) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : rh(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return sr(14, Ci(e, t && t.date1904), t);
  }
  throw new Error("unsupported value in General format: " + e);
}
function nh(e, t) {
  t[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function oh(e, t, r, n) {
  var o = "", a = 0, i = 0, c = r.y, f, l = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    /* falls through */
    case 121:
      switch (t.length) {
        case 1:
        case 2:
          f = c % 100, l = 2;
          break;
        default:
          f = c % 1e4, l = 4;
          break;
      }
      break;
    case 109:
      switch (t.length) {
        case 1:
        case 2:
          f = r.m, l = t.length;
          break;
        case 3:
          return L1[r.m - 1][1];
        case 5:
          return L1[r.m - 1][0];
        default:
          return L1[r.m - 1][2];
      }
      break;
    case 100:
      switch (t.length) {
        case 1:
        case 2:
          f = r.d, l = t.length;
          break;
        case 3:
          return i0[r.q][0];
        default:
          return i0[r.q][1];
      }
      break;
    case 104:
      switch (t.length) {
        case 1:
        case 2:
          f = 1 + (r.H + 11) % 12, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 72:
      switch (t.length) {
        case 1:
        case 2:
          f = r.H, l = t.length;
          break;
        default:
          throw "bad hour format: " + t;
      }
      break;
    case 77:
      switch (t.length) {
        case 1:
        case 2:
          f = r.M, l = t.length;
          break;
        default:
          throw "bad minute format: " + t;
      }
      break;
    case 115:
      if (t != "s" && t != "ss" && t != ".0" && t != ".00" && t != ".000") throw "bad second format: " + t;
      return r.u === 0 && (t == "s" || t == "ss") ? Ht(r.S, t.length) : (n >= 2 ? i = n === 3 ? 1e3 : 100 : i = n === 1 ? 10 : 1, a = Math.round(i * (r.S + r.u)), a >= 60 * i && (a = 0), t === "s" ? a === 0 ? "0" : "" + a / i : (o = Ht(a, 2 + n), t === "ss" ? o.substr(0, 2) : "." + o.substr(2, t.length - 1)));
    case 90:
      switch (t) {
        case "[h]":
        case "[hh]":
          f = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          f = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          f = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + t;
      }
      l = t.length === 3 ? 1 : 2;
      break;
    case 101:
      f = c, l = 1;
      break;
  }
  var u = l > 0 ? Ht(f, l) : "";
  return u;
}
function ar(e) {
  var t = 3;
  if (e.length <= t) return e;
  for (var r = e.length % t, n = e.substr(0, r); r != e.length; r += t) n += (n.length > 0 ? "," : "") + e.substr(r, t);
  return n;
}
var wi = /%/g;
function ah(e, t, r) {
  var n = t.replace(wi, ""), o = t.length - n.length;
  return Kt(e, n, r * Math.pow(10, 2 * o)) + Ze("%", o);
}
function ih(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return Kt(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function ki(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + ki(e, -t);
    var o = e.indexOf(".");
    o === -1 && (o = e.indexOf("E"));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % o;
    if (a < 0 && (a += o), r = (t / Math.pow(10, a)).toPrecision(n + 1 + (o + a) % o), r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + a) : r += "E+" + (i - a); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, o) + "." + r.substr(2 + o), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, u) {
      return f + l + u.substr(0, (o + a) % o) + "." + u.substr(a) + "E";
    });
  } else r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Ei = /# (\?+)( ?)\/( ?)(\d+)/;
function sh(e, t, r) {
  var n = parseInt(e[4], 10), o = Math.round(t * n), a = Math.floor(o / n), i = o - a * n, c = n;
  return r + (a === 0 ? "" : "" + a) + " " + (i === 0 ? Ze(" ", e[1].length + 1 + e[4].length) : fo(i, e[1].length) + e[2] + "/" + e[3] + Ht(c, e[4].length));
}
function ch(e, t, r) {
  return r + (t === 0 ? "" : "" + t) + Ze(" ", e[1].length + 2 + e[4].length);
}
var Li = /^#*0*\.([0#]+)/, _i = /\).*[0#]/, Ti = /\(###\) ###\\?-####/;
function pt(e) {
  for (var t = "", r, n = 0; n != e.length; ++n) switch (r = e.charCodeAt(n)) {
    case 35:
      break;
    case 63:
      t += " ";
      break;
    case 48:
      t += "0";
      break;
    default:
      t += String.fromCharCode(r);
  }
  return t;
}
function c0(e, t) {
  var r = Math.pow(10, t);
  return "" + Math.round(e * r) / r;
}
function l0(e, t) {
  var r = e - Math.floor(e), n = Math.pow(10, t);
  return t < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function lh(e, t) {
  return t < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, t))).length ? 1 : 0;
}
function fh(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function bt(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(_i)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? bt("n", n, r) : "(" + bt("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return ih(e, t, r);
  if (t.indexOf("%") !== -1) return ah(e, t, r);
  if (t.indexOf("E") !== -1) return ki(t, r);
  if (t.charCodeAt(0) === 36) return "$" + bt(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var o, a, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return l + yr(f, t.length);
  if (t.match(/^[#?]+$/))
    return o = yr(r, 0), o === "0" && (o = ""), o.length > t.length ? o : pt(t.substr(0, t.length - o.length)) + o;
  if (a = t.match(Ei)) return sh(a, f, l);
  if (t.match(/^#+0+$/)) return l + yr(f, t.length - t.indexOf("0"));
  if (a = t.match(Li))
    return o = c0(r, a[1].length).replace(/^([^\.]+)$/, "$1." + pt(a[1])).replace(/\.$/, "." + pt(a[1])).replace(/\.(\d*)$/, function(v, h) {
      return "." + h + Ze("0", pt(
        /*::(*/
        a[1]
      ).length - h.length);
    }), t.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), a = t.match(/^(0*)\.(#*)$/))
    return l + c0(f, a[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, a[1].length ? "0." : ".");
  if (a = t.match(/^#{1,3},##0(\.?)$/)) return l + ar(yr(f, 0));
  if (a = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + bt(e, t, -r) : ar("" + (Math.floor(r) + lh(r, a[1].length))) + "." + Ht(l0(r, a[1].length), a[1].length);
  if (a = t.match(/^#,#*,#0/)) return bt(e, t.replace(/^#,#*,/, ""), r);
  if (a = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return o = Rr(bt(e, t.replace(/[\\-]/g, ""), r)), i = 0, Rr(Rr(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return i < o.length ? o.charAt(i++) : v === "0" ? "0" : "";
    }));
  if (t.match(Ti))
    return o = bt(e, "##########", r), "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  var u = "";
  if (a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      a[4].length,
      7
    ), c = zn(f, Math.pow(10, i) - 1, !1), o = "" + l, u = Kt(
      "n",
      /*::String(*/
      a[1],
      c[1]
    ), u.charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"), o += u + /*::String(*/
    a[2] + "/" + /*::String(*/
    a[3], u = Zn(c[2], i), u.length < a[4].length && (u = pt(a[4].substr(a[4].length - u.length)) + u), o += u, o;
  if (a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(a[1].length, a[4].length), 7), c = zn(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? fo(c[1], i) + a[2] + "/" + a[3] + Zn(c[2], i) : Ze(" ", 2 * i + 1 + a[2].length + a[3].length));
  if (a = t.match(/^[#0?]+$/))
    return o = yr(r, 0), t.length <= o.length ? o : pt(t.substr(0, t.length - o.length)) + o;
  if (a = t.match(/^([#0?]+)\.([#0]+)$/)) {
    o = "" + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1"), i = o.indexOf(".");
    var d = t.indexOf(".") - i, p = t.length - o.length - d;
    return pt(t.substr(0, d) + o + t.substr(t.length - p));
  }
  if (a = t.match(/^00,000\.([#0]*0)$/))
    return i = l0(r, a[1].length), r < 0 ? "-" + bt(e, t, -r) : ar(fh(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Ht(0, 3 - v.length) : "") + v;
    }) + "." + Ht(i, a[1].length);
  switch (t) {
    case "###,##0.00":
      return bt(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var g = ar(yr(f, 0));
      return g !== "0" ? l + g : "";
    case "###,###.00":
      return bt(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return bt(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + t + "|");
}
function uh(e, t, r) {
  for (var n = t.length - 1; t.charCodeAt(n - 1) === 44; ) --n;
  return Kt(e, t.substr(0, n), r / Math.pow(10, 3 * (t.length - n)));
}
function dh(e, t, r) {
  var n = t.replace(wi, ""), o = t.length - n.length;
  return Kt(e, n, r * Math.pow(10, 2 * o)) + Ze("%", o);
}
function Si(e, t) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (t == 0) return "0.0E+0";
    if (t < 0) return "-" + Si(e, -t);
    var o = e.indexOf(".");
    o === -1 && (o = e.indexOf("E"));
    var a = Math.floor(Math.log(t) * Math.LOG10E) % o;
    if (a < 0 && (a += o), r = (t / Math.pow(10, a)).toPrecision(n + 1 + (o + a) % o), !r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(t) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + a) : r += "E+" + (i - a), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, u) {
      return f + l + u.substr(0, (o + a) % o) + "." + u.substr(a) + "E";
    });
  } else r = t.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function $t(e, t, r) {
  if (e.charCodeAt(0) === 40 && !t.match(_i)) {
    var n = t.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? $t("n", n, r) : "(" + $t("n", n, -r) + ")";
  }
  if (t.charCodeAt(t.length - 1) === 44) return uh(e, t, r);
  if (t.indexOf("%") !== -1) return dh(e, t, r);
  if (t.indexOf("E") !== -1) return Si(t, r);
  if (t.charCodeAt(0) === 36) return "$" + $t(e, t.substr(t.charAt(1) == " " ? 2 : 1), r);
  var o, a, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (t.match(/^00+$/)) return l + Ht(f, t.length);
  if (t.match(/^[#?]+$/))
    return o = "" + r, r === 0 && (o = ""), o.length > t.length ? o : pt(t.substr(0, t.length - o.length)) + o;
  if (a = t.match(Ei)) return ch(a, f, l);
  if (t.match(/^#+0+$/)) return l + Ht(f, t.length - t.indexOf("0"));
  if (a = t.match(Li))
    return o = ("" + r).replace(/^([^\.]+)$/, "$1." + pt(a[1])).replace(/\.$/, "." + pt(a[1])), o = o.replace(/\.(\d*)$/, function(v, h) {
      return "." + h + Ze("0", pt(a[1]).length - h.length);
    }), t.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
  if (t = t.replace(/^#+([0.])/, "$1"), a = t.match(/^(0*)\.(#*)$/))
    return l + ("" + f).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, a[1].length ? "0." : ".");
  if (a = t.match(/^#{1,3},##0(\.?)$/)) return l + ar("" + f);
  if (a = t.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + $t(e, t, -r) : ar("" + r) + "." + Ze("0", a[1].length);
  if (a = t.match(/^#,#*,#0/)) return $t(e, t.replace(/^#,#*,/, ""), r);
  if (a = t.match(/^([0#]+)(\\?-([0#]+))+$/))
    return o = Rr($t(e, t.replace(/[\\-]/g, ""), r)), i = 0, Rr(Rr(t.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return i < o.length ? o.charAt(i++) : v === "0" ? "0" : "";
    }));
  if (t.match(Ti))
    return o = $t(e, "##########", r), "(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6);
  var u = "";
  if (a = t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      a[4].length,
      7
    ), c = zn(f, Math.pow(10, i) - 1, !1), o = "" + l, u = Kt(
      "n",
      /*::String(*/
      a[1],
      c[1]
    ), u.charAt(u.length - 1) == " " && (u = u.substr(0, u.length - 1) + "0"), o += u + /*::String(*/
    a[2] + "/" + /*::String(*/
    a[3], u = Zn(c[2], i), u.length < a[4].length && (u = pt(a[4].substr(a[4].length - u.length)) + u), o += u, o;
  if (a = t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(a[1].length, a[4].length), 7), c = zn(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? fo(c[1], i) + a[2] + "/" + a[3] + Zn(c[2], i) : Ze(" ", 2 * i + 1 + a[2].length + a[3].length));
  if (a = t.match(/^[#0?]+$/))
    return o = "" + r, t.length <= o.length ? o : pt(t.substr(0, t.length - o.length)) + o;
  if (a = t.match(/^([#0]+)\.([#0]+)$/)) {
    o = "" + r.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1"), i = o.indexOf(".");
    var d = t.indexOf(".") - i, p = t.length - o.length - d;
    return pt(t.substr(0, d) + o + t.substr(t.length - p));
  }
  if (a = t.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + $t(e, t, -r) : ar("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Ht(0, 3 - v.length) : "") + v;
    }) + "." + Ht(0, a[1].length);
  switch (t) {
    case "###,###":
    case "##,###":
    case "#,###":
      var g = ar("" + f);
      return g !== "0" ? l + g : "";
    default:
      if (t.match(/\.[0#?]*$/)) return $t(e, t.slice(0, t.lastIndexOf(".")), r) + pt(t.slice(t.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + t + "|");
}
function Kt(e, t, r) {
  return (r | 0) === r ? $t(e, t, r) : bt(e, t, r);
}
function hh(e) {
  for (var t = [], r = !1, n = 0, o = 0; n < e.length; ++n) switch (
    /*cc=*/
    e.charCodeAt(n)
  ) {
    case 34:
      r = !r;
      break;
    case 95:
    case 42:
    case 92:
      ++n;
      break;
    case 59:
      t[t.length] = e.substr(o, n - o), o = n + 1;
  }
  if (t[t.length] = e.substr(o), r === !0) throw new Error("Format |" + e + "| unterminated string ");
  return t;
}
var yi = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Fi(e) {
  for (var t = 0, r = "", n = ""; t < e.length; )
    switch (r = e.charAt(t)) {
      case "G":
        Gn(e, t) && (t += 6), t++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++t) !== 34 && t < e.length;
        )
          ;
        ++t;
        break;
      case "\\":
        t += 2;
        break;
      case "_":
        t += 2;
        break;
      case "@":
        ++t;
        break;
      case "B":
      case "b":
        if (e.charAt(t + 1) === "1" || e.charAt(t + 1) === "2") return !0;
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(t, 3).toUpperCase() === "A/P" || e.substr(t, 5).toUpperCase() === "AM/PM" || e.substr(t, 5).toUpperCase() === "上午/下午") return !0;
        ++t;
        break;
      case "[":
        for (n = r; e.charAt(t++) !== "]" && t < e.length; ) n += e.charAt(t);
        if (n.match(yi)) return !0;
        break;
      case ".":
      /* falls through */
      case "0":
      case "#":
        for (; t < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++t)) > -1 || r == "\\" && e.charAt(t + 1) == "-" && "0#".indexOf(e.charAt(t + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++t) === r; )
          ;
        break;
      case "*":
        ++t, (e.charAt(t) == " " || e.charAt(t) == "*") && ++t;
        break;
      case "(":
      case ")":
        ++t;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; t < e.length && "0123456789".indexOf(e.charAt(++t)) > -1; )
          ;
        break;
      case " ":
        ++t;
        break;
      default:
        ++t;
        break;
    }
  return !1;
}
function ph(e, t, r, n) {
  for (var o = [], a = "", i = 0, c = "", f = "t", l, u, d, p = "H"; i < e.length; )
    switch (c = e.charAt(i)) {
      case "G":
        if (!Gn(e, i)) throw new Error("unrecognized character " + c + " in " + e);
        o[o.length] = { t: "G", v: "General" }, i += 7;
        break;
      case '"':
        for (a = ""; (d = e.charCodeAt(++i)) !== 34 && i < e.length; ) a += String.fromCharCode(d);
        o[o.length] = { t: "t", v: a }, ++i;
        break;
      case "\\":
        var g = e.charAt(++i), v = g === "(" || g === ")" ? g : "t";
        o[o.length] = { t: v, v: g }, ++i;
        break;
      case "_":
        o[o.length] = { t: "t", v: " " }, i += 2;
        break;
      case "@":
        o[o.length] = { t: "T", v: t }, ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (l == null && (l = Rn(t, r, e.charAt(i + 1) === "2"), l == null))
            return "";
          o[o.length] = { t: "X", v: e.substr(i, 2) }, f = c, i += 2;
          break;
        }
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (t < 0 || l == null && (l = Rn(t, r), l == null))
          return "";
        for (a = c; ++i < e.length && e.charAt(i).toLowerCase() === c; ) a += c;
        c === "m" && f.toLowerCase() === "h" && (c = "M"), c === "h" && (c = p), o[o.length] = { t: c, v: a }, f = c;
        break;
      case "A":
      case "a":
      case "上":
        var h = { t: c, v: c };
        if (l == null && (l = Rn(t, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (l != null && (h.v = l.H >= 12 ? "P" : "A"), h.t = "T", p = "h", i += 3) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (l != null && (h.v = l.H >= 12 ? "PM" : "AM"), h.t = "T", i += 5, p = "h") : e.substr(i, 5).toUpperCase() === "上午/下午" ? (l != null && (h.v = l.H >= 12 ? "下午" : "上午"), h.t = "T", i += 5, p = "h") : (h.t = "t", ++i), l == null && h.t === "T") return "";
        o[o.length] = h, f = c;
        break;
      case "[":
        for (a = c; e.charAt(i++) !== "]" && i < e.length; ) a += e.charAt(i);
        if (a.slice(-1) !== "]") throw 'unterminated "[" block: |' + a + "|";
        if (a.match(yi)) {
          if (l == null && (l = Rn(t, r), l == null))
            return "";
          o[o.length] = { t: "Z", v: a.toLowerCase() }, f = a.charAt(1);
        } else a.indexOf("$") > -1 && (a = (a.match(/\$([^-\[\]]*)/) || [])[1] || "$", Fi(e) || (o[o.length] = { t: "t", v: a }));
        break;
      /* Numbers */
      case ".":
        if (l != null) {
          for (a = c; ++i < e.length && (c = e.charAt(i)) === "0"; ) a += c;
          o[o.length] = { t: "s", v: a };
          break;
        }
      /* falls through */
      case "0":
      case "#":
        for (a = c; ++i < e.length && "0#?.,E+-%".indexOf(c = e.charAt(i)) > -1; ) a += c;
        o[o.length] = { t: "n", v: a };
        break;
      case "?":
        for (a = c; e.charAt(++i) === c; ) a += c;
        o[o.length] = { t: c, v: a }, f = c;
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      // **
      case "(":
      case ")":
        o[o.length] = { t: n === 1 ? "t" : c, v: c }, ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (a = c; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; ) a += e.charAt(i);
        o[o.length] = { t: "D", v: a };
        break;
      case " ":
        o[o.length] = { t: c, v: c }, ++i;
        break;
      case "$":
        o[o.length] = { t: "t", v: "$" }, ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + e);
        o[o.length] = { t: "t", v: c }, ++i;
        break;
    }
  var m = 0, S = 0, F;
  for (i = o.length - 1, f = "t"; i >= 0; --i)
    switch (o[i].t) {
      case "h":
      case "H":
        o[i].t = p, f = "h", m < 1 && (m = 1);
        break;
      case "s":
        (F = o[i].v.match(/\.0+$/)) && (S = Math.max(S, F[0].length - 1)), m < 3 && (m = 3);
      /* falls through */
      case "d":
      case "y":
      case "M":
      case "e":
        f = o[i].t;
        break;
      case "m":
        f === "s" && (o[i].t = "M", m < 2 && (m = 2));
        break;
      case "X":
        break;
      case "Z":
        m < 1 && o[i].v.match(/[Hh]/) && (m = 1), m < 2 && o[i].v.match(/[Mm]/) && (m = 2), m < 3 && o[i].v.match(/[Ss]/) && (m = 3);
    }
  switch (m) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H);
      break;
    case 2:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M);
      break;
  }
  var _ = "", N;
  for (i = 0; i < o.length; ++i)
    switch (o[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        o[i].v = "", o[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        o[i].v = oh(o[i].t.charCodeAt(0), o[i].v, l, S), o[i].t = "t";
        break;
      case "n":
      case "?":
        for (N = i + 1; o[N] != null && ((c = o[N].t) === "?" || c === "D" || (c === " " || c === "t") && o[N + 1] != null && (o[N + 1].t === "?" || o[N + 1].t === "t" && o[N + 1].v === "/") || o[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (o[N].v === "/" || o[N].v === " " && o[N + 1] != null && o[N + 1].t == "?")); )
          o[i].v += o[N].v, o[N] = { v: "", t: ";" }, ++N;
        _ += o[i].v, i = N - 1;
        break;
      case "G":
        o[i].t = "t", o[i].v = V1(t, r);
        break;
    }
  var I = "", j, A;
  if (_.length > 0) {
    _.charCodeAt(0) == 40 ? (j = t < 0 && _.charCodeAt(0) === 45 ? -t : t, A = Kt("n", _, j)) : (j = t < 0 && n > 1 ? -t : t, A = Kt("n", _, j), j < 0 && o[0] && o[0].t == "t" && (A = A.substr(1), o[0].v = "-" + o[0].v)), N = A.length - 1;
    var U = o.length;
    for (i = 0; i < o.length; ++i) if (o[i] != null && o[i].t != "t" && o[i].v.indexOf(".") > -1) {
      U = i;
      break;
    }
    var O = o.length;
    if (U === o.length && A.indexOf("E") === -1) {
      for (i = o.length - 1; i >= 0; --i)
        o[i] == null || "n?".indexOf(o[i].t) === -1 || (N >= o[i].v.length - 1 ? (N -= o[i].v.length, o[i].v = A.substr(N + 1, o[i].v.length)) : N < 0 ? o[i].v = "" : (o[i].v = A.substr(0, N + 1), N = -1), o[i].t = "t", O = i);
      N >= 0 && O < o.length && (o[O].v = A.substr(0, N + 1) + o[O].v);
    } else if (U !== o.length && A.indexOf("E") === -1) {
      for (N = A.indexOf(".") - 1, i = U; i >= 0; --i)
        if (!(o[i] == null || "n?".indexOf(o[i].t) === -1)) {
          for (u = o[i].v.indexOf(".") > -1 && i === U ? o[i].v.indexOf(".") - 1 : o[i].v.length - 1, I = o[i].v.substr(u + 1); u >= 0; --u)
            N >= 0 && (o[i].v.charAt(u) === "0" || o[i].v.charAt(u) === "#") && (I = A.charAt(N--) + I);
          o[i].v = I, o[i].t = "t", O = i;
        }
      for (N >= 0 && O < o.length && (o[O].v = A.substr(0, N + 1) + o[O].v), N = A.indexOf(".") + 1, i = U; i < o.length; ++i)
        if (!(o[i] == null || "n?(".indexOf(o[i].t) === -1 && i !== U)) {
          for (u = o[i].v.indexOf(".") > -1 && i === U ? o[i].v.indexOf(".") + 1 : 0, I = o[i].v.substr(0, u); u < o[i].v.length; ++u)
            N < A.length && (I += A.charAt(N++));
          o[i].v = I, o[i].t = "t", O = i;
        }
    }
  }
  for (i = 0; i < o.length; ++i) o[i] != null && "n?".indexOf(o[i].t) > -1 && (j = n > 1 && t < 0 && i > 0 && o[i - 1].v === "-" ? -t : t, o[i].v = Kt(o[i].t, o[i].v, j), o[i].t = "t");
  var G = "";
  for (i = 0; i !== o.length; ++i) o[i] != null && (G += o[i].v);
  return G;
}
var f0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function u0(e, t) {
  if (t == null) return !1;
  var r = parseFloat(t[2]);
  switch (t[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function gh(e, t) {
  var r = hh(e), n = r.length, o = r[n - 1].indexOf("@");
  if (n < 4 && o > -1 && --n, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof t != "number") return [4, r.length === 4 || o > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = o > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = o > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = o > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var a = t > 0 ? r[0] : t < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, a];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(f0), c = r[1].match(f0);
    return u0(t, i) ? [n, r[0]] : u0(t, c) ? [n, r[1]] : [n, r[i != null && c != null ? 2 : 1]];
  }
  return [n, a];
}
function sr(e, t, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : ze)[e], n == null && (n = r.table && r.table[s0[e]] || ze[s0[e]]), n == null && (n = Yd[e] || "General");
      break;
  }
  if (Gn(n, 0)) return V1(t, r);
  t instanceof Date && (t = Ci(t, r.date1904));
  var o = gh(n, t);
  if (Gn(o[1])) return V1(t, r);
  if (t === !0) t = "TRUE";
  else if (t === !1) t = "FALSE";
  else if (t === "" || t == null) return "";
  return ph(o[1], t, r, o[0]);
}
function Ai(e, t) {
  if (typeof t != "number") {
    t = +t || -1;
    for (var r = 0; r < 392; ++r) {
      if (ze[r] == null) {
        t < 0 && (t = r);
        continue;
      }
      if (ze[r] == e) {
        t = r;
        break;
      }
    }
    t < 0 && (t = 391);
  }
  return ze[t] = e, t;
}
function u1(e) {
  for (var t = 0; t != 392; ++t)
    e[t] !== void 0 && Ai(e[t], t);
}
function d1() {
  ze = Xd();
}
var Mi = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function vh(e) {
  var t = typeof e == "number" ? ze[e] : e;
  return t = t.replace(Mi, "(\\d+)"), new RegExp("^" + t + "$");
}
function xh(e, t, r) {
  var n = -1, o = -1, a = -1, i = -1, c = -1, f = -1;
  (t.match(Mi) || []).forEach(function(d, p) {
    var g = parseInt(r[p + 1], 10);
    switch (d.toLowerCase().charAt(0)) {
      case "y":
        n = g;
        break;
      case "d":
        a = g;
        break;
      case "h":
        i = g;
        break;
      case "s":
        f = g;
        break;
      case "m":
        i >= 0 ? c = g : o = g;
        break;
    }
  }), f >= 0 && c == -1 && o >= 0 && (c = o, o = -1);
  var l = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (o >= 1 ? o : 1)).slice(-2) + "-" + ("00" + (a >= 1 ? a : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var u = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
  return i == -1 && c == -1 && f == -1 ? l : n == -1 && o == -1 && a == -1 ? u : l + "T" + u;
}
var mh = /* @__PURE__ */ (function() {
  var e = {};
  e.version = "1.2.0";
  function t() {
    for (var A = 0, U = new Array(256), O = 0; O != 256; ++O)
      A = O, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, U[O] = A;
    return typeof Int32Array < "u" ? new Int32Array(U) : U;
  }
  var r = t();
  function n(A) {
    var U = 0, O = 0, G = 0, Y = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (G = 0; G != 256; ++G) Y[G] = A[G];
    for (G = 0; G != 256; ++G)
      for (O = A[G], U = 256 + G; U < 4096; U += 256) O = Y[U] = O >>> 8 ^ A[O & 255];
    var W = [];
    for (G = 1; G != 16; ++G) W[G - 1] = typeof Int32Array < "u" ? Y.subarray(G * 256, G * 256 + 256) : Y.slice(G * 256, G * 256 + 256);
    return W;
  }
  var o = n(r), a = o[0], i = o[1], c = o[2], f = o[3], l = o[4], u = o[5], d = o[6], p = o[7], g = o[8], v = o[9], h = o[10], m = o[11], S = o[12], F = o[13], _ = o[14];
  function N(A, U) {
    for (var O = U ^ -1, G = 0, Y = A.length; G < Y; ) O = O >>> 8 ^ r[(O ^ A.charCodeAt(G++)) & 255];
    return ~O;
  }
  function I(A, U) {
    for (var O = U ^ -1, G = A.length - 15, Y = 0; Y < G; ) O = _[A[Y++] ^ O & 255] ^ F[A[Y++] ^ O >> 8 & 255] ^ S[A[Y++] ^ O >> 16 & 255] ^ m[A[Y++] ^ O >>> 24] ^ h[A[Y++]] ^ v[A[Y++]] ^ g[A[Y++]] ^ p[A[Y++]] ^ d[A[Y++]] ^ u[A[Y++]] ^ l[A[Y++]] ^ f[A[Y++]] ^ c[A[Y++]] ^ i[A[Y++]] ^ a[A[Y++]] ^ r[A[Y++]];
    for (G += 15; Y < G; ) O = O >>> 8 ^ r[(O ^ A[Y++]) & 255];
    return ~O;
  }
  function j(A, U) {
    for (var O = U ^ -1, G = 0, Y = A.length, W = 0, K = 0; G < Y; )
      W = A.charCodeAt(G++), W < 128 ? O = O >>> 8 ^ r[(O ^ W) & 255] : W < 2048 ? (O = O >>> 8 ^ r[(O ^ (192 | W >> 6 & 31)) & 255], O = O >>> 8 ^ r[(O ^ (128 | W & 63)) & 255]) : W >= 55296 && W < 57344 ? (W = (W & 1023) + 64, K = A.charCodeAt(G++) & 1023, O = O >>> 8 ^ r[(O ^ (240 | W >> 8 & 7)) & 255], O = O >>> 8 ^ r[(O ^ (128 | W >> 2 & 63)) & 255], O = O >>> 8 ^ r[(O ^ (128 | K >> 6 & 15 | (W & 3) << 4)) & 255], O = O >>> 8 ^ r[(O ^ (128 | K & 63)) & 255]) : (O = O >>> 8 ^ r[(O ^ (224 | W >> 12 & 15)) & 255], O = O >>> 8 ^ r[(O ^ (128 | W >> 6 & 63)) & 255], O = O >>> 8 ^ r[(O ^ (128 | W & 63)) & 255]);
    return ~O;
  }
  return e.table = r, e.bstr = N, e.buf = I, e.str = j, e;
})(), Ie = /* @__PURE__ */ (function() {
  var t = {};
  t.version = "1.2.1";
  function r(x, k) {
    for (var C = x.split("/"), w = k.split("/"), E = 0, L = 0, B = Math.min(C.length, w.length); E < B; ++E) {
      if (L = C[E].length - w[E].length) return L;
      if (C[E] != w[E]) return C[E] < w[E] ? -1 : 1;
    }
    return C.length - w.length;
  }
  function n(x) {
    if (x.charAt(x.length - 1) == "/") return x.slice(0, -1).indexOf("/") === -1 ? x : n(x.slice(0, -1));
    var k = x.lastIndexOf("/");
    return k === -1 ? x : x.slice(0, k + 1);
  }
  function o(x) {
    if (x.charAt(x.length - 1) == "/") return o(x.slice(0, -1));
    var k = x.lastIndexOf("/");
    return k === -1 ? x : x.slice(k + 1);
  }
  function a(x, k) {
    typeof k == "string" && (k = new Date(k));
    var C = k.getHours();
    C = C << 6 | k.getMinutes(), C = C << 5 | k.getSeconds() >>> 1, x.write_shift(2, C);
    var w = k.getFullYear() - 1980;
    w = w << 4 | k.getMonth() + 1, w = w << 5 | k.getDate(), x.write_shift(2, w);
  }
  function i(x) {
    var k = x.read_shift(2) & 65535, C = x.read_shift(2) & 65535, w = /* @__PURE__ */ new Date(), E = C & 31;
    C >>>= 5;
    var L = C & 15;
    C >>>= 4, w.setMilliseconds(0), w.setFullYear(C + 1980), w.setMonth(L - 1), w.setDate(E);
    var B = k & 31;
    k >>>= 5;
    var X = k & 63;
    return k >>>= 6, w.setHours(k), w.setMinutes(X), w.setSeconds(B << 1), w;
  }
  function c(x) {
    _t(x, 0);
    for (var k = (
      /*::(*/
      {}
    ), C = 0; x.l <= x.length - 4; ) {
      var w = x.read_shift(2), E = x.read_shift(2), L = x.l + E, B = {};
      w === 21589 && (C = x.read_shift(1), C & 1 && (B.mtime = x.read_shift(4)), E > 5 && (C & 2 && (B.atime = x.read_shift(4)), C & 4 && (B.ctime = x.read_shift(4))), B.mtime && (B.mt = new Date(B.mtime * 1e3))), x.l = L, k[w] = B;
    }
    return k;
  }
  var f;
  function l() {
    return f || (f = {});
  }
  function u(x, k) {
    if (x[0] == 80 && x[1] == 75) return Vo(x, k);
    if ((x[0] | 32) == 109 && (x[1] | 32) == 105) return cc(x, k);
    if (x.length < 512) throw new Error("CFB file size " + x.length + " < 512");
    var C = 3, w = 512, E = 0, L = 0, B = 0, X = 0, P = 0, H = [], V = (
      /*::(*/
      x.slice(0, 512)
    );
    _t(V, 0);
    var J = d(V);
    switch (C = J[0], C) {
      case 3:
        w = 512;
        break;
      case 4:
        w = 4096;
        break;
      case 0:
        if (J[1] == 0) return Vo(x, k);
      /* falls through */
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + C);
    }
    w !== 512 && (V = /*::(*/
    x.slice(0, w), _t(
      V,
      28
      /* blob.l */
    ));
    var ne = x.slice(0, w);
    p(V, C);
    var fe = V.read_shift(4, "i");
    if (C === 3 && fe !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + fe);
    V.l += 4, B = V.read_shift(4, "i"), V.l += 4, V.chk("00100000", "Mini Stream Cutoff Size: "), X = V.read_shift(4, "i"), E = V.read_shift(4, "i"), P = V.read_shift(4, "i"), L = V.read_shift(4, "i");
    for (var Q = -1, ie = 0; ie < 109 && (Q = V.read_shift(4, "i"), !(Q < 0)); ++ie)
      H[ie] = Q;
    var xe = g(x, w);
    m(P, L, xe, w, H);
    var je = F(xe, B, H, w);
    je[B].name = "!Directory", E > 0 && X !== K && (je[X].name = "!MiniFAT"), je[H[0]].name = "!FAT", je.fat_addrs = H, je.ssz = w;
    var We = {}, lt = [], Gr = [], zr = [];
    _(B, je, xe, lt, E, We, Gr, X), v(Gr, zr, lt), lt.shift();
    var Kr = {
      FileIndex: Gr,
      FullPaths: zr
    };
    return k && k.raw && (Kr.raw = { header: ne, sectors: xe }), Kr;
  }
  function d(x) {
    if (x[x.l] == 80 && x[x.l + 1] == 75) return [0, 0];
    x.chk(he, "Header Signature: "), x.l += 16;
    var k = x.read_shift(2, "u");
    return [x.read_shift(2, "u"), k];
  }
  function p(x, k) {
    var C = 9;
    switch (x.l += 2, C = x.read_shift(2)) {
      case 9:
        if (k != 3) throw new Error("Sector Shift: Expected 9 saw " + C);
        break;
      case 12:
        if (k != 4) throw new Error("Sector Shift: Expected 12 saw " + C);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + C);
    }
    x.chk("0600", "Mini Sector Shift: "), x.chk("000000000000", "Reserved: ");
  }
  function g(x, k) {
    for (var C = Math.ceil(x.length / k) - 1, w = [], E = 1; E < C; ++E) w[E - 1] = x.slice(E * k, (E + 1) * k);
    return w[C - 1] = x.slice(C * k), w;
  }
  function v(x, k, C) {
    for (var w = 0, E = 0, L = 0, B = 0, X = 0, P = C.length, H = [], V = []; w < P; ++w)
      H[w] = V[w] = w, k[w] = C[w];
    for (; X < V.length; ++X)
      w = V[X], E = x[w].L, L = x[w].R, B = x[w].C, H[w] === w && (E !== -1 && H[E] !== E && (H[w] = H[E]), L !== -1 && H[L] !== L && (H[w] = H[L])), B !== -1 && (H[B] = w), E !== -1 && w != H[w] && (H[E] = H[w], V.lastIndexOf(E) < X && V.push(E)), L !== -1 && w != H[w] && (H[L] = H[w], V.lastIndexOf(L) < X && V.push(L));
    for (w = 1; w < P; ++w) H[w] === w && (L !== -1 && H[L] !== L ? H[w] = H[L] : E !== -1 && H[E] !== E && (H[w] = H[E]));
    for (w = 1; w < P; ++w)
      if (x[w].type !== 0) {
        if (X = w, X != H[X]) do
          X = H[X], k[w] = k[X] + "/" + k[w];
        while (X !== 0 && H[X] !== -1 && X != H[X]);
        H[w] = -1;
      }
    for (k[0] += "/", w = 1; w < P; ++w)
      x[w].type !== 2 && (k[w] += "/");
  }
  function h(x, k, C) {
    for (var w = x.start, E = x.size, L = [], B = w; C && E > 0 && B >= 0; )
      L.push(k.slice(B * W, B * W + W)), E -= W, B = gr(C, B * 4);
    return L.length === 0 ? z(0) : at(L).slice(0, x.size);
  }
  function m(x, k, C, w, E) {
    var L = K;
    if (x === K) {
      if (k !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (x !== -1) {
      var B = C[x], X = (w >>> 2) - 1;
      if (!B) return;
      for (var P = 0; P < X && (L = gr(B, P * 4)) !== K; ++P)
        E.push(L);
      m(gr(B, w - 4), k - 1, C, w, E);
    }
  }
  function S(x, k, C, w, E) {
    var L = [], B = [];
    E || (E = []);
    var X = w - 1, P = 0, H = 0;
    for (P = k; P >= 0; ) {
      E[P] = !0, L[L.length] = P, B.push(x[P]);
      var V = C[Math.floor(P * 4 / w)];
      if (H = P * 4 & X, w < 4 + H) throw new Error("FAT boundary crossed: " + P + " 4 " + w);
      if (!x[V]) break;
      P = gr(x[V], H);
    }
    return { nodes: L, data: C0([B]) };
  }
  function F(x, k, C, w) {
    var E = x.length, L = [], B = [], X = [], P = [], H = w - 1, V = 0, J = 0, ne = 0, fe = 0;
    for (V = 0; V < E; ++V)
      if (X = [], ne = V + k, ne >= E && (ne -= E), !B[ne]) {
        P = [];
        var Q = [];
        for (J = ne; J >= 0; ) {
          Q[J] = !0, B[J] = !0, X[X.length] = J, P.push(x[J]);
          var ie = C[Math.floor(J * 4 / w)];
          if (fe = J * 4 & H, w < 4 + fe) throw new Error("FAT boundary crossed: " + J + " 4 " + w);
          if (!x[ie] || (J = gr(x[ie], fe), Q[J])) break;
        }
        L[ne] = { nodes: X, data: C0([P]) };
      }
    return L;
  }
  function _(x, k, C, w, E, L, B, X) {
    for (var P = 0, H = w.length ? 2 : 0, V = k[x].data, J = 0, ne = 0, fe; J < V.length; J += 128) {
      var Q = (
        /*::(*/
        V.slice(J, J + 128)
      );
      _t(Q, 64), ne = Q.read_shift(2), fe = xo(Q, 0, ne - H), w.push(fe);
      var ie = {
        name: fe,
        type: Q.read_shift(1),
        color: Q.read_shift(1),
        L: Q.read_shift(4, "i"),
        R: Q.read_shift(4, "i"),
        C: Q.read_shift(4, "i"),
        clsid: Q.read_shift(16),
        state: Q.read_shift(4, "i"),
        start: 0,
        size: 0
      }, xe = Q.read_shift(2) + Q.read_shift(2) + Q.read_shift(2) + Q.read_shift(2);
      xe !== 0 && (ie.ct = N(Q, Q.l - 8));
      var je = Q.read_shift(2) + Q.read_shift(2) + Q.read_shift(2) + Q.read_shift(2);
      je !== 0 && (ie.mt = N(Q, Q.l - 8)), ie.start = Q.read_shift(4, "i"), ie.size = Q.read_shift(4, "i"), ie.size < 0 && ie.start < 0 && (ie.size = ie.type = 0, ie.start = K, ie.name = ""), ie.type === 5 ? (P = ie.start, E > 0 && P !== K && (k[P].name = "!StreamData")) : ie.size >= 4096 ? (ie.storage = "fat", k[ie.start] === void 0 && (k[ie.start] = S(C, ie.start, k.fat_addrs, k.ssz)), k[ie.start].name = ie.name, ie.content = k[ie.start].data.slice(0, ie.size)) : (ie.storage = "minifat", ie.size < 0 ? ie.size = 0 : P !== K && ie.start !== K && k[P] && (ie.content = h(ie, k[P].data, (k[X] || {}).data))), ie.content && _t(ie.content, 0), L[fe] = ie, B.push(ie);
    }
  }
  function N(x, k) {
    return new Date((St(x, k + 4) / 1e7 * Math.pow(2, 32) + St(x, k) / 1e7 - 11644473600) * 1e3);
  }
  function I(x, k) {
    return l(), u(f.readFileSync(x), k);
  }
  function j(x, k) {
    var C = k && k.type;
    switch (C || be && Buffer.isBuffer(x) && (C = "buffer"), C || "base64") {
      case "file":
        return I(x, k);
      case "base64":
        return u(Bt(qt(x)), k);
      case "binary":
        return u(Bt(x), k);
    }
    return u(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      x,
      k
    );
  }
  function A(x, k) {
    var C = k || {}, w = C.root || "Root Entry";
    if (x.FullPaths || (x.FullPaths = []), x.FileIndex || (x.FileIndex = []), x.FullPaths.length !== x.FileIndex.length) throw new Error("inconsistent CFB structure");
    x.FullPaths.length === 0 && (x.FullPaths[0] = w + "/", x.FileIndex[0] = { name: w, type: 5 }), C.CLSID && (x.FileIndex[0].clsid = C.CLSID), U(x);
  }
  function U(x) {
    var k = "Sh33tJ5";
    if (!Ie.find(x, "/" + k)) {
      var C = z(4);
      C[0] = 55, C[1] = C[3] = 50, C[2] = 54, x.FileIndex.push({ name: k, type: 2, content: C, size: 4, L: 69, R: 69, C: 69 }), x.FullPaths.push(x.FullPaths[0] + k), O(x);
    }
  }
  function O(x, k) {
    A(x);
    for (var C = !1, w = !1, E = x.FullPaths.length - 1; E >= 0; --E) {
      var L = x.FileIndex[E];
      switch (L.type) {
        case 0:
          w ? C = !0 : (x.FileIndex.pop(), x.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          w = !0, isNaN(L.R * L.L * L.C) && (C = !0), L.R > -1 && L.L > -1 && L.R == L.L && (C = !0);
          break;
        default:
          C = !0;
          break;
      }
    }
    if (!(!C && !k)) {
      var B = new Date(1987, 1, 19), X = 0, P = Object.create ? /* @__PURE__ */ Object.create(null) : {}, H = [];
      for (E = 0; E < x.FullPaths.length; ++E)
        P[x.FullPaths[E]] = !0, x.FileIndex[E].type !== 0 && H.push([x.FullPaths[E], x.FileIndex[E]]);
      for (E = 0; E < H.length; ++E) {
        var V = n(H[E][0]);
        w = P[V], w || (H.push([V, {
          name: o(V).replace("/", ""),
          type: 1,
          clsid: ve,
          ct: B,
          mt: B,
          content: null
        }]), P[V] = !0);
      }
      for (H.sort(function(fe, Q) {
        return r(fe[0], Q[0]);
      }), x.FullPaths = [], x.FileIndex = [], E = 0; E < H.length; ++E)
        x.FullPaths[E] = H[E][0], x.FileIndex[E] = H[E][1];
      for (E = 0; E < H.length; ++E) {
        var J = x.FileIndex[E], ne = x.FullPaths[E];
        if (J.name = o(ne).replace("/", ""), J.L = J.R = J.C = -(J.color = 1), J.size = J.content ? J.content.length : 0, J.start = 0, J.clsid = J.clsid || ve, E === 0)
          J.C = H.length > 1 ? 1 : -1, J.size = 0, J.type = 5;
        else if (ne.slice(-1) == "/") {
          for (X = E + 1; X < H.length && n(x.FullPaths[X]) != ne; ++X) ;
          for (J.C = X >= H.length ? -1 : X, X = E + 1; X < H.length && n(x.FullPaths[X]) != n(ne); ++X) ;
          J.R = X >= H.length ? -1 : X, J.type = 1;
        } else
          n(x.FullPaths[E + 1] || "") == n(ne) && (J.R = E + 1), J.type = 2;
      }
    }
  }
  function G(x, k) {
    var C = k || {};
    if (C.fileType == "mad") return lc(x, C);
    if (O(x), C.fileType === "zip")
      return rc(x, C);
    var w = (function(fe) {
      for (var Q = 0, ie = 0, xe = 0; xe < fe.FileIndex.length; ++xe) {
        var je = fe.FileIndex[xe];
        if (je.content) {
          var We = je.content.length;
          We > 0 && (We < 4096 ? Q += We + 63 >> 6 : ie += We + 511 >> 9);
        }
      }
      for (var lt = fe.FullPaths.length + 3 >> 2, Gr = Q + 7 >> 3, zr = Q + 127 >> 7, Kr = Gr + ie + lt + zr, hr = Kr + 127 >> 7, w1 = hr <= 109 ? 0 : Math.ceil((hr - 109) / 127); Kr + hr + w1 + 127 >> 7 > hr; ) w1 = ++hr <= 109 ? 0 : Math.ceil((hr - 109) / 127);
      var zt = [1, w1, hr, zr, lt, ie, Q, 0];
      return fe.FileIndex[0].size = Q << 6, zt[7] = (fe.FileIndex[0].start = zt[0] + zt[1] + zt[2] + zt[3] + zt[4] + zt[5]) + (zt[6] + 7 >> 3), zt;
    })(x), E = z(w[7] << 9), L = 0, B = 0;
    {
      for (L = 0; L < 8; ++L) E.write_shift(1, ae[L]);
      for (L = 0; L < 8; ++L) E.write_shift(2, 0);
      for (E.write_shift(2, 62), E.write_shift(2, 3), E.write_shift(2, 65534), E.write_shift(2, 9), E.write_shift(2, 6), L = 0; L < 3; ++L) E.write_shift(2, 0);
      for (E.write_shift(4, 0), E.write_shift(4, w[2]), E.write_shift(4, w[0] + w[1] + w[2] + w[3] - 1), E.write_shift(4, 0), E.write_shift(4, 4096), E.write_shift(4, w[3] ? w[0] + w[1] + w[2] - 1 : K), E.write_shift(4, w[3]), E.write_shift(-4, w[1] ? w[0] - 1 : K), E.write_shift(4, w[1]), L = 0; L < 109; ++L) E.write_shift(-4, L < w[2] ? w[1] + L : -1);
    }
    if (w[1])
      for (B = 0; B < w[1]; ++B) {
        for (; L < 236 + B * 127; ++L) E.write_shift(-4, L < w[2] ? w[1] + L : -1);
        E.write_shift(-4, B === w[1] - 1 ? K : B + 1);
      }
    var X = function(fe) {
      for (B += fe; L < B - 1; ++L) E.write_shift(-4, L + 1);
      fe && (++L, E.write_shift(-4, K));
    };
    for (B = L = 0, B += w[1]; L < B; ++L) E.write_shift(-4, ye.DIFSECT);
    for (B += w[2]; L < B; ++L) E.write_shift(-4, ye.FATSECT);
    X(w[3]), X(w[4]);
    for (var P = 0, H = 0, V = x.FileIndex[0]; P < x.FileIndex.length; ++P)
      V = x.FileIndex[P], V.content && (H = V.content.length, !(H < 4096) && (V.start = B, X(H + 511 >> 9)));
    for (X(w[6] + 7 >> 3); E.l & 511; ) E.write_shift(-4, ye.ENDOFCHAIN);
    for (B = L = 0, P = 0; P < x.FileIndex.length; ++P)
      V = x.FileIndex[P], V.content && (H = V.content.length, !(!H || H >= 4096) && (V.start = B, X(H + 63 >> 6)));
    for (; E.l & 511; ) E.write_shift(-4, ye.ENDOFCHAIN);
    for (L = 0; L < w[4] << 2; ++L) {
      var J = x.FullPaths[L];
      if (!J || J.length === 0) {
        for (P = 0; P < 17; ++P) E.write_shift(4, 0);
        for (P = 0; P < 3; ++P) E.write_shift(4, -1);
        for (P = 0; P < 12; ++P) E.write_shift(4, 0);
        continue;
      }
      V = x.FileIndex[L], L === 0 && (V.start = V.size ? V.start - 1 : K);
      var ne = L === 0 && C.root || V.name;
      if (H = 2 * (ne.length + 1), E.write_shift(64, ne, "utf16le"), E.write_shift(2, H), E.write_shift(1, V.type), E.write_shift(1, V.color), E.write_shift(-4, V.L), E.write_shift(-4, V.R), E.write_shift(-4, V.C), V.clsid) E.write_shift(16, V.clsid, "hex");
      else for (P = 0; P < 4; ++P) E.write_shift(4, 0);
      E.write_shift(4, V.state || 0), E.write_shift(4, 0), E.write_shift(4, 0), E.write_shift(4, 0), E.write_shift(4, 0), E.write_shift(4, V.start), E.write_shift(4, V.size), E.write_shift(4, 0);
    }
    for (L = 1; L < x.FileIndex.length; ++L)
      if (V = x.FileIndex[L], V.size >= 4096)
        if (E.l = V.start + 1 << 9, be && Buffer.isBuffer(V.content))
          V.content.copy(E, E.l, 0, V.size), E.l += V.size + 511 & -512;
        else {
          for (P = 0; P < V.size; ++P) E.write_shift(1, V.content[P]);
          for (; P & 511; ++P) E.write_shift(1, 0);
        }
    for (L = 1; L < x.FileIndex.length; ++L)
      if (V = x.FileIndex[L], V.size > 0 && V.size < 4096)
        if (be && Buffer.isBuffer(V.content))
          V.content.copy(E, E.l, 0, V.size), E.l += V.size + 63 & -64;
        else {
          for (P = 0; P < V.size; ++P) E.write_shift(1, V.content[P]);
          for (; P & 63; ++P) E.write_shift(1, 0);
        }
    if (be)
      E.l = E.length;
    else
      for (; E.l < E.length; ) E.write_shift(1, 0);
    return E;
  }
  function Y(x, k) {
    var C = x.FullPaths.map(function(P) {
      return P.toUpperCase();
    }), w = C.map(function(P) {
      var H = P.split("/");
      return H[H.length - (P.slice(-1) == "/" ? 2 : 1)];
    }), E = !1;
    k.charCodeAt(0) === 47 ? (E = !0, k = C[0].slice(0, -1) + k) : E = k.indexOf("/") !== -1;
    var L = k.toUpperCase(), B = E === !0 ? C.indexOf(L) : w.indexOf(L);
    if (B !== -1) return x.FileIndex[B];
    var X = !L.match(bn);
    for (L = L.replace(Qr, ""), X && (L = L.replace(bn, "!")), B = 0; B < C.length; ++B)
      if ((X ? C[B].replace(bn, "!") : C[B]).replace(Qr, "") == L || (X ? w[B].replace(bn, "!") : w[B]).replace(Qr, "") == L) return x.FileIndex[B];
    return null;
  }
  var W = 64, K = -2, he = "d0cf11e0a1b11ae1", ae = [208, 207, 17, 224, 161, 177, 26, 225], ve = "00000000000000000000000000000000", ye = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: K,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: he,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ve,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function ge(x, k, C) {
    l();
    var w = G(x, C);
    f.writeFileSync(k, w);
  }
  function me(x) {
    for (var k = new Array(x.length), C = 0; C < x.length; ++C) k[C] = String.fromCharCode(x[C]);
    return k.join("");
  }
  function Fe(x, k) {
    var C = G(x, k);
    switch (k && k.type || "buffer") {
      case "file":
        return l(), f.writeFileSync(k.filename, C), C;
      case "binary":
        return typeof C == "string" ? C : me(C);
      case "base64":
        return sn(typeof C == "string" ? C : me(C));
      case "buffer":
        if (be) return Buffer.isBuffer(C) ? C : er(C);
      /* falls through */
      case "array":
        return typeof C == "string" ? Bt(C) : C;
    }
    return C;
  }
  var Ee;
  function y(x) {
    try {
      var k = x.InflateRaw, C = new k();
      if (C._processChunk(new Uint8Array([3, 0]), C._finishFlushFlag), C.bytesRead) Ee = x;
      else throw new Error("zlib does not expose bytesRead");
    } catch (w) {
      console.error("cannot use native zlib: " + (w.message || w));
    }
  }
  function D(x, k) {
    if (!Ee) return Bo(x, k);
    var C = Ee.InflateRaw, w = new C(), E = w._processChunk(x.slice(x.l), w._finishFlushFlag);
    return x.l += w.bytesRead, E;
  }
  function R(x) {
    return Ee ? Ee.deflateRawSync(x) : Ro(x);
  }
  var b = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Z = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], oe = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function le(x) {
    var k = (x << 1 | x << 11) & 139536 | (x << 5 | x << 15) & 558144;
    return (k >> 16 | k >> 8 | k) & 255;
  }
  for (var se = typeof Uint8Array < "u", re = se ? new Uint8Array(256) : [], Se = 0; Se < 256; ++Se) re[Se] = le(Se);
  function Ce(x, k) {
    var C = re[x & 255];
    return k <= 8 ? C >>> 8 - k : (C = C << 8 | re[x >> 8 & 255], k <= 16 ? C >>> 16 - k : (C = C << 8 | re[x >> 16 & 255], C >>> 24 - k));
  }
  function Be(x, k) {
    var C = k & 7, w = k >>> 3;
    return (x[w] | (C <= 6 ? 0 : x[w + 1] << 8)) >>> C & 3;
  }
  function _e(x, k) {
    var C = k & 7, w = k >>> 3;
    return (x[w] | (C <= 5 ? 0 : x[w + 1] << 8)) >>> C & 7;
  }
  function ht(x, k) {
    var C = k & 7, w = k >>> 3;
    return (x[w] | (C <= 4 ? 0 : x[w + 1] << 8)) >>> C & 15;
  }
  function Ue(x, k) {
    var C = k & 7, w = k >>> 3;
    return (x[w] | (C <= 3 ? 0 : x[w + 1] << 8)) >>> C & 31;
  }
  function ue(x, k) {
    var C = k & 7, w = k >>> 3;
    return (x[w] | (C <= 1 ? 0 : x[w + 1] << 8)) >>> C & 127;
  }
  function xt(x, k, C) {
    var w = k & 7, E = k >>> 3, L = (1 << C) - 1, B = x[E] >>> w;
    return C < 8 - w || (B |= x[E + 1] << 8 - w, C < 16 - w) || (B |= x[E + 2] << 16 - w, C < 24 - w) || (B |= x[E + 3] << 24 - w), B & L;
  }
  function Dt(x, k, C) {
    var w = k & 7, E = k >>> 3;
    return w <= 5 ? x[E] |= (C & 7) << w : (x[E] |= C << w & 255, x[E + 1] = (C & 7) >> 8 - w), k + 3;
  }
  function Zt(x, k, C) {
    var w = k & 7, E = k >>> 3;
    return C = (C & 1) << w, x[E] |= C, k + 1;
  }
  function tr(x, k, C) {
    var w = k & 7, E = k >>> 3;
    return C <<= w, x[E] |= C & 255, C >>>= 8, x[E + 1] = C, k + 8;
  }
  function Fn(x, k, C) {
    var w = k & 7, E = k >>> 3;
    return C <<= w, x[E] |= C & 255, C >>>= 8, x[E + 1] = C & 255, x[E + 2] = C >>> 8, k + 16;
  }
  function Zr(x, k) {
    var C = x.length, w = 2 * C > k ? 2 * C : k + 5, E = 0;
    if (C >= k) return x;
    if (be) {
      var L = o0(w);
      if (x.copy) x.copy(L);
      else for (; E < x.length; ++E) L[E] = x[E];
      return L;
    } else if (se) {
      var B = new Uint8Array(w);
      if (B.set) B.set(x);
      else for (; E < C; ++E) B[E] = x[E];
      return B;
    }
    return x.length = w, x;
  }
  function Mt(x) {
    for (var k = new Array(x), C = 0; C < x; ++C) k[C] = 0;
    return k;
  }
  function Sr(x, k, C) {
    var w = 1, E = 0, L = 0, B = 0, X = 0, P = x.length, H = se ? new Uint16Array(32) : Mt(32);
    for (L = 0; L < 32; ++L) H[L] = 0;
    for (L = P; L < C; ++L) x[L] = 0;
    P = x.length;
    var V = se ? new Uint16Array(P) : Mt(P);
    for (L = 0; L < P; ++L)
      H[E = x[L]]++, w < E && (w = E), V[L] = 0;
    for (H[0] = 0, L = 1; L <= w; ++L) H[L + 16] = X = X + H[L - 1] << 1;
    for (L = 0; L < P; ++L)
      X = x[L], X != 0 && (V[L] = H[X + 16]++);
    var J = 0;
    for (L = 0; L < P; ++L)
      if (J = x[L], J != 0)
        for (X = Ce(V[L], w) >> w - J, B = (1 << w + 4 - J) - 1; B >= 0; --B)
          k[X | B << J] = J & 15 | L << 4;
    return w;
  }
  var He = se ? new Uint16Array(512) : Mt(512), Gt = se ? new Uint16Array(32) : Mt(32);
  if (!se) {
    for (var dr = 0; dr < 512; ++dr) He[dr] = 0;
    for (dr = 0; dr < 32; ++dr) Gt[dr] = 0;
  }
  (function() {
    for (var x = [], k = 0; k < 32; k++) x.push(5);
    Sr(x, Gt, 32);
    var C = [];
    for (k = 0; k <= 143; k++) C.push(8);
    for (; k <= 255; k++) C.push(9);
    for (; k <= 279; k++) C.push(7);
    for (; k <= 287; k++) C.push(8);
    Sr(C, He, 288);
  })();
  var Js = /* @__PURE__ */ (function() {
    for (var k = se ? new Uint8Array(32768) : [], C = 0, w = 0; C < oe.length - 1; ++C)
      for (; w < oe[C + 1]; ++w) k[w] = C;
    for (; w < 32768; ++w) k[w] = 29;
    var E = se ? new Uint8Array(259) : [];
    for (C = 0, w = 0; C < Z.length - 1; ++C)
      for (; w < Z[C + 1]; ++w) E[w] = C;
    function L(X, P) {
      for (var H = 0; H < X.length; ) {
        var V = Math.min(65535, X.length - H), J = H + V == X.length;
        for (P.write_shift(1, +J), P.write_shift(2, V), P.write_shift(2, ~V & 65535); V-- > 0; ) P[P.l++] = X[H++];
      }
      return P.l;
    }
    function B(X, P) {
      for (var H = 0, V = 0, J = se ? new Uint16Array(32768) : []; V < X.length; ) {
        var ne = (
          /* data.length - boff; */
          Math.min(65535, X.length - V)
        );
        if (ne < 10) {
          for (H = Dt(P, H, +(V + ne == X.length)), H & 7 && (H += 8 - (H & 7)), P.l = H / 8 | 0, P.write_shift(2, ne), P.write_shift(2, ~ne & 65535); ne-- > 0; ) P[P.l++] = X[V++];
          H = P.l * 8;
          continue;
        }
        H = Dt(P, H, +(V + ne == X.length) + 2);
        for (var fe = 0; ne-- > 0; ) {
          var Q = X[V];
          fe = (fe << 5 ^ Q) & 32767;
          var ie = -1, xe = 0;
          if ((ie = J[fe]) && (ie |= V & -32768, ie > V && (ie -= 32768), ie < V))
            for (; X[ie + xe] == X[V + xe] && xe < 250; ) ++xe;
          if (xe > 2) {
            Q = E[xe], Q <= 22 ? H = tr(P, H, re[Q + 1] >> 1) - 1 : (tr(P, H, 3), H += 5, tr(P, H, re[Q - 23] >> 5), H += 3);
            var je = Q < 8 ? 0 : Q - 4 >> 2;
            je > 0 && (Fn(P, H, xe - Z[Q]), H += je), Q = k[V - ie], H = tr(P, H, re[Q] >> 3), H -= 3;
            var We = Q < 4 ? 0 : Q - 2 >> 1;
            We > 0 && (Fn(P, H, V - ie - oe[Q]), H += We);
            for (var lt = 0; lt < xe; ++lt)
              J[fe] = V & 32767, fe = (fe << 5 ^ X[V]) & 32767, ++V;
            ne -= xe - 1;
          } else
            Q <= 143 ? Q = Q + 48 : H = Zt(P, H, 1), H = tr(P, H, re[Q]), J[fe] = V & 32767, ++V;
        }
        H = tr(P, H, 0) - 1;
      }
      return P.l = (H + 7) / 8 | 0, P.l;
    }
    return function(P, H) {
      return P.length < 8 ? L(P, H) : B(P, H);
    };
  })();
  function Ro(x) {
    var k = z(50 + Math.floor(x.length * 1.1)), C = Js(x, k);
    return k.slice(0, C);
  }
  var No = se ? new Uint16Array(32768) : Mt(32768), Oo = se ? new Uint16Array(32768) : Mt(32768), Do = se ? new Uint16Array(128) : Mt(128), Io = 1, Po = 1;
  function Qs(x, k) {
    var C = Ue(x, k) + 257;
    k += 5;
    var w = Ue(x, k) + 1;
    k += 5;
    var E = ht(x, k) + 4;
    k += 4;
    for (var L = 0, B = se ? new Uint8Array(19) : Mt(19), X = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], P = 1, H = se ? new Uint8Array(8) : Mt(8), V = se ? new Uint8Array(8) : Mt(8), J = B.length, ne = 0; ne < E; ++ne)
      B[b[ne]] = L = _e(x, k), P < L && (P = L), H[L]++, k += 3;
    var fe = 0;
    for (H[0] = 0, ne = 1; ne <= P; ++ne) V[ne] = fe = fe + H[ne - 1] << 1;
    for (ne = 0; ne < J; ++ne) (fe = B[ne]) != 0 && (X[ne] = V[fe]++);
    var Q = 0;
    for (ne = 0; ne < J; ++ne)
      if (Q = B[ne], Q != 0) {
        fe = re[X[ne]] >> 8 - Q;
        for (var ie = (1 << 7 - Q) - 1; ie >= 0; --ie) Do[fe | ie << Q] = Q & 7 | ne << 3;
      }
    var xe = [];
    for (P = 1; xe.length < C + w; )
      switch (fe = Do[ue(x, k)], k += fe & 7, fe >>>= 3) {
        case 16:
          for (L = 3 + Be(x, k), k += 2, fe = xe[xe.length - 1]; L-- > 0; ) xe.push(fe);
          break;
        case 17:
          for (L = 3 + _e(x, k), k += 3; L-- > 0; ) xe.push(0);
          break;
        case 18:
          for (L = 11 + ue(x, k), k += 7; L-- > 0; ) xe.push(0);
          break;
        default:
          xe.push(fe), P < fe && (P = fe);
          break;
      }
    var je = xe.slice(0, C), We = xe.slice(C);
    for (ne = C; ne < 286; ++ne) je[ne] = 0;
    for (ne = w; ne < 30; ++ne) We[ne] = 0;
    return Io = Sr(je, No, 286), Po = Sr(We, Oo, 30), k;
  }
  function ec(x, k) {
    if (x[0] == 3 && !(x[1] & 3))
      return [mr(k), 2];
    for (var C = 0, w = 0, E = o0(k || 1 << 18), L = 0, B = E.length >>> 0, X = 0, P = 0; (w & 1) == 0; ) {
      if (w = _e(x, C), C += 3, w >>> 1)
        w >> 1 == 1 ? (X = 9, P = 5) : (C = Qs(x, C), X = Io, P = Po);
      else {
        C & 7 && (C += 8 - (C & 7));
        var H = x[C >>> 3] | x[(C >>> 3) + 1] << 8;
        if (C += 32, H > 0)
          for (!k && B < L + H && (E = Zr(E, L + H), B = E.length); H-- > 0; )
            E[L++] = x[C >>> 3], C += 8;
        continue;
      }
      for (; ; ) {
        !k && B < L + 32767 && (E = Zr(E, L + 32767), B = E.length);
        var V = xt(x, C, X), J = w >>> 1 == 1 ? He[V] : No[V];
        if (C += J & 15, J >>>= 4, (J >>> 8 & 255) === 0) E[L++] = J;
        else {
          if (J == 256) break;
          J -= 257;
          var ne = J < 8 ? 0 : J - 4 >> 2;
          ne > 5 && (ne = 0);
          var fe = L + Z[J];
          ne > 0 && (fe += xt(x, C, ne), C += ne), V = xt(x, C, P), J = w >>> 1 == 1 ? Gt[V] : Oo[V], C += J & 15, J >>>= 4;
          var Q = J < 4 ? 0 : J - 2 >> 1, ie = oe[J];
          for (Q > 0 && (ie += xt(x, C, Q), C += Q), !k && B < fe && (E = Zr(E, fe + 100), B = E.length); L < fe; )
            E[L] = E[L - ie], ++L;
        }
      }
    }
    return k ? [E, C + 7 >>> 3] : [E.slice(0, L), C + 7 >>> 3];
  }
  function Bo(x, k) {
    var C = x.slice(x.l || 0), w = ec(C, k);
    return x.l += w[1], w[0];
  }
  function Ho(x, k) {
    if (x)
      typeof console < "u" && console.error(k);
    else throw new Error(k);
  }
  function Vo(x, k) {
    var C = (
      /*::(*/
      x
    );
    _t(C, 0);
    var w = [], E = [], L = {
      FileIndex: w,
      FullPaths: E
    };
    A(L, { root: k.root });
    for (var B = C.length - 4; (C[B] != 80 || C[B + 1] != 75 || C[B + 2] != 5 || C[B + 3] != 6) && B >= 0; ) --B;
    C.l = B + 4, C.l += 4;
    var X = C.read_shift(2);
    C.l += 6;
    var P = C.read_shift(4);
    for (C.l = P, B = 0; B < X; ++B) {
      C.l += 20;
      var H = C.read_shift(4), V = C.read_shift(4), J = C.read_shift(2), ne = C.read_shift(2), fe = C.read_shift(2);
      C.l += 8;
      var Q = C.read_shift(4), ie = c(
        /*::(*/
        C.slice(C.l + J, C.l + J + ne)
        /*:: :any)*/
      );
      C.l += J + ne + fe;
      var xe = C.l;
      C.l = Q + 4, tc(C, H, V, L, ie), C.l = xe;
    }
    return L;
  }
  function tc(x, k, C, w, E) {
    x.l += 2;
    var L = x.read_shift(2), B = x.read_shift(2), X = i(x);
    if (L & 8257) throw new Error("Unsupported ZIP encryption");
    for (var P = x.read_shift(4), H = x.read_shift(4), V = x.read_shift(4), J = x.read_shift(2), ne = x.read_shift(2), fe = "", Q = 0; Q < J; ++Q) fe += String.fromCharCode(x[x.l++]);
    if (ne) {
      var ie = c(
        /*::(*/
        x.slice(x.l, x.l + ne)
        /*:: :any)*/
      );
      (ie[21589] || {}).mt && (X = ie[21589].mt), ((E || {})[21589] || {}).mt && (X = E[21589].mt);
    }
    x.l += ne;
    var xe = x.slice(x.l, x.l + H);
    switch (B) {
      case 8:
        xe = D(x, V);
        break;
      case 0:
        break;
      // TODO: scan for magic number
      default:
        throw new Error("Unsupported ZIP Compression method " + B);
    }
    var je = !1;
    L & 8 && (P = x.read_shift(4), P == 134695760 && (P = x.read_shift(4), je = !0), H = x.read_shift(4), V = x.read_shift(4)), H != k && Ho(je, "Bad compressed size: " + k + " != " + H), V != C && Ho(je, "Bad uncompressed size: " + C + " != " + V), C1(w, fe, xe, { unsafe: !0, mt: X });
  }
  function rc(x, k) {
    var C = k || {}, w = [], E = [], L = z(1), B = C.compression ? 8 : 0, X = 0, P = 0, H = 0, V = 0, J = 0, ne = x.FullPaths[0], fe = ne, Q = x.FileIndex[0], ie = [], xe = 0;
    for (P = 1; P < x.FullPaths.length; ++P)
      if (fe = x.FullPaths[P].slice(ne.length), Q = x.FileIndex[P], !(!Q.size || !Q.content || fe == "Sh33tJ5")) {
        var je = V, We = z(fe.length);
        for (H = 0; H < fe.length; ++H) We.write_shift(1, fe.charCodeAt(H) & 127);
        We = We.slice(0, We.l), ie[J] = mh.buf(
          /*::((*/
          Q.content,
          0
        );
        var lt = Q.content;
        B == 8 && (lt = R(lt)), L = z(30), L.write_shift(4, 67324752), L.write_shift(2, 20), L.write_shift(2, X), L.write_shift(2, B), Q.mt ? a(L, Q.mt) : L.write_shift(4, 0), L.write_shift(-4, ie[J]), L.write_shift(4, lt.length), L.write_shift(
          4,
          /*::(*/
          Q.content.length
        ), L.write_shift(2, We.length), L.write_shift(2, 0), V += L.length, w.push(L), V += We.length, w.push(We), V += lt.length, w.push(lt), L = z(46), L.write_shift(4, 33639248), L.write_shift(2, 0), L.write_shift(2, 20), L.write_shift(2, X), L.write_shift(2, B), L.write_shift(4, 0), L.write_shift(-4, ie[J]), L.write_shift(4, lt.length), L.write_shift(
          4,
          /*::(*/
          Q.content.length
        ), L.write_shift(2, We.length), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(4, 0), L.write_shift(4, je), xe += L.l, E.push(L), xe += We.length, E.push(We), ++J;
      }
    return L = z(22), L.write_shift(4, 101010256), L.write_shift(2, 0), L.write_shift(2, 0), L.write_shift(2, J), L.write_shift(2, J), L.write_shift(4, xe), L.write_shift(4, V), L.write_shift(2, 0), at([at(w), at(E), L]);
  }
  var An = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function nc(x, k) {
    if (x.ctype) return x.ctype;
    var C = x.name || "", w = C.match(/\.([^\.]+)$/);
    return w && An[w[1]] || k && (w = (C = k).match(/[\.\\]([^\.\\])+$/), w && An[w[1]]) ? An[w[1]] : "application/octet-stream";
  }
  function oc(x) {
    for (var k = sn(x), C = [], w = 0; w < k.length; w += 76) C.push(k.slice(w, w + 76));
    return C.join(`\r
`) + `\r
`;
  }
  function ac(x) {
    var k = x.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(H) {
      var V = H.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (V.length == 1 ? "0" + V : V);
    });
    k = k.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), k.charAt(0) == `
` && (k = "=0D" + k.slice(1)), k = k.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var C = [], w = k.split(`\r
`), E = 0; E < w.length; ++E) {
      var L = w[E];
      if (L.length == 0) {
        C.push("");
        continue;
      }
      for (var B = 0; B < L.length; ) {
        var X = 76, P = L.slice(B, B + X);
        P.charAt(X - 1) == "=" ? X-- : P.charAt(X - 2) == "=" ? X -= 2 : P.charAt(X - 3) == "=" && (X -= 3), P = L.slice(B, B + X), B += X, B < L.length && (P += "="), C.push(P);
      }
    }
    return C.join(`\r
`);
  }
  function ic(x) {
    for (var k = [], C = 0; C < x.length; ++C) {
      for (var w = x[C]; C <= x.length && w.charAt(w.length - 1) == "="; ) w = w.slice(0, w.length - 1) + x[++C];
      k.push(w);
    }
    for (var E = 0; E < k.length; ++E) k[E] = k[E].replace(/[=][0-9A-Fa-f]{2}/g, function(L) {
      return String.fromCharCode(parseInt(L.slice(1), 16));
    });
    return Bt(k.join(`\r
`));
  }
  function sc(x, k, C) {
    for (var w = "", E = "", L = "", B, X = 0; X < 10; ++X) {
      var P = k[X];
      if (!P || P.match(/^\s*$/)) break;
      var H = P.match(/^(.*?):\s*([^\s].*)$/);
      if (H) switch (H[1].toLowerCase()) {
        case "content-location":
          w = H[2].trim();
          break;
        case "content-type":
          L = H[2].trim();
          break;
        case "content-transfer-encoding":
          E = H[2].trim();
          break;
      }
    }
    switch (++X, E.toLowerCase()) {
      case "base64":
        B = Bt(qt(k.slice(X).join("")));
        break;
      case "quoted-printable":
        B = ic(k.slice(X));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + E);
    }
    var V = C1(x, w.slice(C.length), B, { unsafe: !0 });
    L && (V.ctype = L);
  }
  function cc(x, k) {
    if (me(x.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var C = k && k.root || "", w = (be && Buffer.isBuffer(x) ? x.toString("binary") : me(x)).split(`\r
`), E = 0, L = "";
    for (E = 0; E < w.length; ++E)
      if (L = w[E], !!/^Content-Location:/i.test(L) && (L = L.slice(L.indexOf("file")), C || (C = L.slice(0, L.lastIndexOf("/") + 1)), L.slice(0, C.length) != C))
        for (; C.length > 0 && (C = C.slice(0, C.length - 1), C = C.slice(0, C.lastIndexOf("/") + 1), L.slice(0, C.length) != C); )
          ;
    var B = (w[1] || "").match(/boundary="(.*?)"/);
    if (!B) throw new Error("MAD cannot find boundary");
    var X = "--" + (B[1] || ""), P = [], H = [], V = {
      FileIndex: P,
      FullPaths: H
    };
    A(V);
    var J, ne = 0;
    for (E = 0; E < w.length; ++E) {
      var fe = w[E];
      fe !== X && fe !== X + "--" || (ne++ && sc(V, w.slice(J, E), C), J = E);
    }
    return V;
  }
  function lc(x, k) {
    var C = k || {}, w = C.boundary || "SheetJS";
    w = "------=" + w;
    for (var E = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + w.slice(2) + '"',
      "",
      "",
      ""
    ], L = x.FullPaths[0], B = L, X = x.FileIndex[0], P = 1; P < x.FullPaths.length; ++P)
      if (B = x.FullPaths[P].slice(L.length), X = x.FileIndex[P], !(!X.size || !X.content || B == "Sh33tJ5")) {
        B = B.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(xe) {
          return "_x" + xe.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(xe) {
          return "_u" + xe.charCodeAt(0).toString(16) + "_";
        });
        for (var H = X.content, V = be && Buffer.isBuffer(H) ? H.toString("binary") : me(H), J = 0, ne = Math.min(1024, V.length), fe = 0, Q = 0; Q <= ne; ++Q) (fe = V.charCodeAt(Q)) >= 32 && fe < 128 && ++J;
        var ie = J >= ne * 4 / 5;
        E.push(w), E.push("Content-Location: " + (C.root || "file:///C:/SheetJS/") + B), E.push("Content-Transfer-Encoding: " + (ie ? "quoted-printable" : "base64")), E.push("Content-Type: " + nc(X, B)), E.push(""), E.push(ie ? ac(V) : oc(V));
      }
    return E.push(w + `--\r
`), E.join(`\r
`);
  }
  function fc(x) {
    var k = {};
    return A(k, x), k;
  }
  function C1(x, k, C, w) {
    var E = w && w.unsafe;
    E || A(x);
    var L = !E && Ie.find(x, k);
    if (!L) {
      var B = x.FullPaths[0];
      k.slice(0, B.length) == B ? B = k : (B.slice(-1) != "/" && (B += "/"), B = (B + k).replace("//", "/")), L = { name: o(k), type: 2 }, x.FileIndex.push(L), x.FullPaths.push(B), E || Ie.utils.cfb_gc(x);
    }
    return L.content = C, L.size = C ? C.length : 0, w && (w.CLSID && (L.clsid = w.CLSID), w.mt && (L.mt = w.mt), w.ct && (L.ct = w.ct)), L;
  }
  function uc(x, k) {
    A(x);
    var C = Ie.find(x, k);
    if (C) {
      for (var w = 0; w < x.FileIndex.length; ++w) if (x.FileIndex[w] == C)
        return x.FileIndex.splice(w, 1), x.FullPaths.splice(w, 1), !0;
    }
    return !1;
  }
  function dc(x, k, C) {
    A(x);
    var w = Ie.find(x, k);
    if (w) {
      for (var E = 0; E < x.FileIndex.length; ++E) if (x.FileIndex[E] == w)
        return x.FileIndex[E].name = o(C), x.FullPaths[E] = C, !0;
    }
    return !1;
  }
  function hc(x) {
    O(x, !0);
  }
  return t.find = Y, t.read = j, t.parse = u, t.write = Fe, t.writeFile = ge, t.utils = {
    cfb_new: fc,
    cfb_add: C1,
    cfb_del: uc,
    cfb_mov: dc,
    cfb_gc: hc,
    ReadShift: tn,
    CheckField: Ki,
    prep_blob: _t,
    bconcat: at,
    use_zlib: y,
    _deflateRaw: Ro,
    _inflateRaw: Bo,
    consts: ye
  }, t;
})();
function Ch(e) {
  return typeof e == "string" ? f1(e) : Array.isArray(e) ? Zd(e) : e;
}
function Ln(e, t, r) {
  if (typeof Deno < "u") {
    if (r && typeof t == "string") switch (r) {
      case "utf8":
        t = new TextEncoder(r).encode(t);
        break;
      case "binary":
        t = f1(t);
        break;
      /* TODO: binary equivalent */
      default:
        throw new Error("Unsupported encoding " + r);
    }
    return Deno.writeFileSync(e, t);
  }
  var n = r == "utf8" ? ln(t) : t;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(n, e);
  if (typeof Blob < "u") {
    var o = new Blob([Ch(n)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(o, e);
    if (typeof saveAs < "u") return saveAs(o, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var a = URL.createObjectURL(o);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(a);
        }, 6e4), chrome.downloads.download({ url: a, filename: e, saveAs: !0 });
      var i = document.createElement("a");
      if (i.download != null)
        return i.download = e, i.href = a, document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(a);
        }, 6e4), a;
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var c = File(e);
    return c.open("w"), c.encoding = "binary", Array.isArray(t) && (t = En(t)), c.write(t), c.close(), t;
  } catch (f) {
    if (!f.message || !f.message.match(/onstruct/)) throw f;
  }
  throw new Error("cannot save file " + e);
}
function ct(e) {
  for (var t = Object.keys(e), r = [], n = 0; n < t.length; ++n) Object.prototype.hasOwnProperty.call(e, t[n]) && r.push(t[n]);
  return r;
}
function d0(e, t) {
  for (var r = [], n = ct(e), o = 0; o !== n.length; ++o) r[e[n[o]][t]] == null && (r[e[n[o]][t]] = n[o]);
  return r;
}
function ho(e) {
  for (var t = [], r = ct(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = r[n];
  return t;
}
function h1(e) {
  for (var t = [], r = ct(e), n = 0; n !== r.length; ++n) t[e[r[n]]] = parseInt(r[n], 10);
  return t;
}
function wh(e) {
  for (var t = [], r = ct(e), n = 0; n !== r.length; ++n)
    t[e[r[n]]] == null && (t[e[r[n]]] = []), t[e[r[n]]].push(r[n]);
  return t;
}
var Kn = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function kt(e, t) {
  var r = /* @__PURE__ */ e.getTime(), n = /* @__PURE__ */ Kn.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Kn.getTimezoneOffset()) * 6e4;
  return (r - n) / (1440 * 60 * 1e3);
}
var bi = /* @__PURE__ */ new Date(), kh = /* @__PURE__ */ Kn.getTime() + (/* @__PURE__ */ bi.getTimezoneOffset() - /* @__PURE__ */ Kn.getTimezoneOffset()) * 6e4, h0 = /* @__PURE__ */ bi.getTimezoneOffset();
function Ri(e) {
  var t = /* @__PURE__ */ new Date();
  return t.setTime(e * 24 * 60 * 60 * 1e3 + kh), t.getTimezoneOffset() !== h0 && t.setTime(t.getTime() + (t.getTimezoneOffset() - h0) * 6e4), t;
}
var p0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Ni = /* @__PURE__ */ isNaN(/* @__PURE__ */ p0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : p0, Eh = /* @__PURE__ */ Ni.getFullYear() == 2017;
function vt(e, t) {
  var r = new Date(e);
  if (Eh)
    return t > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : t < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (Ni.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var o = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], a = new Date(+o[0], +o[1] - 1, +o[2], +o[3] || 0, +o[4] || 0, +o[5] || 0);
  return e.indexOf("Z") > -1 && (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)), a;
}
function p1(e, t) {
  if (be && Buffer.isBuffer(e))
    return e.toString("binary");
  if (typeof TextDecoder < "u") try {
    var r = {
      "€": "",
      "‚": "",
      ƒ: "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      Š: "",
      "‹": "",
      Œ: "",
      Ž: "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      š: "",
      "›": "",
      œ: "",
      ž: "",
      Ÿ: ""
    };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(a) {
      return r[a] || a;
    });
  } catch {
  }
  for (var n = [], o = 0; o != e.length; ++o) n.push(String.fromCharCode(e[o]));
  return n.join("");
}
function Et(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = Et(e[r]));
  return t;
}
function Ze(e, t) {
  for (var r = ""; r.length < t; ) r += e;
  return r;
}
function Xt(e) {
  var t = Number(e);
  if (!isNaN(t)) return isFinite(t) ? t : NaN;
  if (!/\d/.test(e)) return t;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(t = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(o, a) {
    return r = -r, a;
  }), !isNaN(t = Number(n))) ? t / r : t;
}
var Lh = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function cn(e) {
  var t = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = t.getYear(), o = t.getMonth(), a = t.getDate();
  if (isNaN(a)) return r;
  var i = e.toLowerCase();
  if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), i.length > 3 && Lh.indexOf(i) == -1) return r;
  } else if (i.match(/[a-z]/)) return r;
  return n < 0 || n > 8099 ? r : (o > 0 || a > 1) && n != 101 ? t : e.match(/[^-0-9:,\/\\]/) ? r : t;
}
function we(e, t, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return be ? n = er(r) : n = Gd(r), Ie.utils.cfb_add(e, t, n);
    }
    Ie.utils.cfb_add(e, t, r);
  } else e.file(t, r);
}
function po() {
  return Ie.utils.cfb_new();
}
var qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, _h = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, go = /* @__PURE__ */ ho(_h), vo = /[&<>'"]/g, Th = /[\u0000-\u0008\u000b-\u001f]/g;
function Oe(e) {
  var t = e + "";
  return t.replace(vo, function(r) {
    return go[r];
  }).replace(Th, function(r) {
    return "_x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function g0(e) {
  return Oe(e).replace(/ /g, "_x0020_");
}
var Oi = /[\u0000-\u001f]/g;
function Sh(e) {
  var t = e + "";
  return t.replace(vo, function(r) {
    return go[r];
  }).replace(/\n/g, "<br/>").replace(Oi, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function yh(e) {
  var t = e + "";
  return t.replace(vo, function(r) {
    return go[r];
  }).replace(Oi, function(r) {
    return "&#x" + r.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
function Fh(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Ah(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    /* case '0': case 'false': case 'FALSE':*/
    default:
      return !1;
  }
}
function _1(e) {
  for (var t = "", r = 0, n = 0, o = 0, a = 0, i = 0, c = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      t += String.fromCharCode(n);
      continue;
    }
    if (o = e.charCodeAt(r++), n > 191 && n < 224) {
      i = (n & 31) << 6, i |= o & 63, t += String.fromCharCode(i);
      continue;
    }
    if (a = e.charCodeAt(r++), n < 240) {
      t += String.fromCharCode((n & 15) << 12 | (o & 63) << 6 | a & 63);
      continue;
    }
    i = e.charCodeAt(r++), c = ((n & 7) << 18 | (o & 63) << 12 | (a & 63) << 6 | i & 63) - 65536, t += String.fromCharCode(55296 + (c >>> 10 & 1023)), t += String.fromCharCode(56320 + (c & 1023));
  }
  return t;
}
function v0(e) {
  var t = mr(2 * e.length), r, n, o = 1, a = 0, i = 0, c;
  for (n = 0; n < e.length; n += o)
    o = 1, (c = e.charCodeAt(n)) < 128 ? r = c : c < 224 ? (r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63), o = 2) : c < 240 ? (r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), o = 3) : (o = 4, r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, i = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), i !== 0 && (t[a++] = i & 255, t[a++] = i >>> 8, i = 0), t[a++] = r % 256, t[a++] = r >>> 8;
  return t.slice(0, a).toString("ucs2");
}
function x0(e) {
  return er(e, "binary").toString("utf8");
}
var Nn = "foo bar bazâð£", en = be && (/* @__PURE__ */ x0(Nn) == /* @__PURE__ */ _1(Nn) && x0 || /* @__PURE__ */ v0(Nn) == /* @__PURE__ */ _1(Nn) && v0) || _1, ln = be ? function(e) {
  return er(e, "utf8").toString("binary");
} : function(e) {
  for (var t = [], r = 0, n = 0, o = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        t.push(String.fromCharCode(n));
        break;
      case n < 2048:
        t.push(String.fromCharCode(192 + (n >> 6))), t.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, o = e.charCodeAt(r++) - 56320 + (n << 10), t.push(String.fromCharCode(240 + (o >> 18 & 7))), t.push(String.fromCharCode(144 + (o >> 12 & 63))), t.push(String.fromCharCode(128 + (o >> 6 & 63))), t.push(String.fromCharCode(128 + (o & 63)));
        break;
      default:
        t.push(String.fromCharCode(224 + (n >> 12))), t.push(String.fromCharCode(128 + (n >> 6 & 63))), t.push(String.fromCharCode(128 + (n & 63)));
    }
  return t.join("");
}, Mh = /* @__PURE__ */ (function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(t) {
    return [new RegExp("&" + t[0] + ";", "ig"), t[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), o = 0; o < e.length; ++o) n = n.replace(e[o][0], e[o][1]);
    return n;
  };
})(), Di = /(^\s|\s$|\n)/;
function it(e, t) {
  return "<" + e + (t.match(Di) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e + ">";
}
function fn(e) {
  return ct(e).map(function(t) {
    return " " + t + '="' + e[t] + '"';
  }).join("");
}
function ee(e, t, r) {
  return "<" + e + (r != null ? fn(r) : "") + (t != null ? (t.match(Di) ? ' xml:space="preserve"' : "") + ">" + t + "</" + e : "/") + ">";
}
function U1(e, t) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (r) {
    if (t) throw r;
  }
  return "";
}
function bh(e, t) {
  switch (typeof e) {
    case "string":
      var r = ee("vt:lpwstr", Oe(e));
      return r = r.replace(/&quot;/g, "_x0022_"), r;
    case "number":
      return ee((e | 0) == e ? "vt:i4" : "vt:r8", Oe(String(e)));
    case "boolean":
      return ee("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return ee("vt:filetime", U1(e));
  throw new Error("Unable to serialize " + e);
}
var et = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Ur = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Tt = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function Rh(e, t) {
  for (var r = 1 - 2 * (e[t + 7] >>> 7), n = ((e[t + 7] & 127) << 4) + (e[t + 6] >>> 4 & 15), o = e[t + 6] & 15, a = 5; a >= 0; --a) o = o * 256 + e[t + a];
  return n == 2047 ? o == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, o += Math.pow(2, 52)), r * Math.pow(2, n - 52) * o);
}
function Nh(e, t, r) {
  var n = (t < 0 || 1 / t == -1 / 0 ? 1 : 0) << 7, o = 0, a = 0, i = n ? -t : t;
  isFinite(i) ? i == 0 ? o = a = 0 : (o = Math.floor(Math.log(i) / Math.LN2), a = i * Math.pow(2, 52 - o), o <= -1023 && (!isFinite(a) || a < Math.pow(2, 52)) ? o = -1022 : (a -= Math.pow(2, 52), o += 1023)) : (o = 2047, a = isNaN(t) ? 26985 : 0);
  for (var c = 0; c <= 5; ++c, a /= 256) e[r + c] = a & 255;
  e[r + 6] = (o & 15) << 4 | a & 15, e[r + 7] = o >> 4 | n;
}
var m0 = function(e) {
  for (var t = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var o = 0, a = e[0][n].length; o < a; o += r) t.push.apply(t, e[0][n].slice(o, o + r));
  return t;
}, C0 = be ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(t) {
    return Buffer.isBuffer(t) ? t : er(t);
  })) : m0(e);
} : m0, w0 = function(e, t, r) {
  for (var n = [], o = t; o < r; o += 2) n.push(String.fromCharCode(qr(e, o)));
  return n.join("").replace(Qr, "");
}, xo = be ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", t, r).replace(Qr, "") : w0(e, t, r);
} : w0, k0 = function(e, t, r) {
  for (var n = [], o = t; o < t + r; ++o) n.push(("0" + e[o].toString(16)).slice(-2));
  return n.join("");
}, Ii = be ? function(e, t, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", t, t + r) : k0(e, t, r);
} : k0, E0 = function(e, t, r) {
  for (var n = [], o = t; o < r; o++) n.push(String.fromCharCode(Mr(e, o)));
  return n.join("");
}, _n = be ? function(t, r, n) {
  return Buffer.isBuffer(t) ? t.toString("utf8", r, n) : E0(t, r, n);
} : E0, Pi = function(e, t) {
  var r = St(e, t);
  return r > 0 ? _n(e, t + 4, t + 4 + r - 1) : "";
}, Bi = Pi, Hi = function(e, t) {
  var r = St(e, t);
  return r > 0 ? _n(e, t + 4, t + 4 + r - 1) : "";
}, Vi = Hi, Ui = function(e, t) {
  var r = 2 * St(e, t);
  return r > 0 ? _n(e, t + 4, t + 4 + r - 1) : "";
}, $i = Ui, ji = function(t, r) {
  var n = St(t, r);
  return n > 0 ? xo(t, r + 4, r + 4 + n) : "";
}, Wi = ji, Zi = function(e, t) {
  var r = St(e, t);
  return r > 0 ? _n(e, t + 4, t + 4 + r) : "";
}, Gi = Zi, zi = function(e, t) {
  return Rh(e, t);
}, Xn = zi, mo = function(t) {
  return Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
};
be && (Bi = function(t, r) {
  if (!Buffer.isBuffer(t)) return Pi(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, Vi = function(t, r) {
  if (!Buffer.isBuffer(t)) return Hi(t, r);
  var n = t.readUInt32LE(r);
  return n > 0 ? t.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, $i = function(t, r) {
  if (!Buffer.isBuffer(t)) return Ui(t, r);
  var n = 2 * t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n - 1);
}, Wi = function(t, r) {
  if (!Buffer.isBuffer(t)) return ji(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf16le", r + 4, r + 4 + n);
}, Gi = function(t, r) {
  if (!Buffer.isBuffer(t)) return Zi(t, r);
  var n = t.readUInt32LE(r);
  return t.toString("utf8", r + 4, r + 4 + n);
}, Xn = function(t, r) {
  return Buffer.isBuffer(t) ? t.readDoubleLE(r) : zi(t, r);
}, mo = function(t) {
  return Buffer.isBuffer(t) || Array.isArray(t) || typeof Uint8Array < "u" && t instanceof Uint8Array;
});
var Mr = function(e, t) {
  return e[t];
}, qr = function(e, t) {
  return e[t + 1] * 256 + e[t];
}, Oh = function(e, t) {
  var r = e[t + 1] * 256 + e[t];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, St = function(e, t) {
  return e[t + 3] * (1 << 24) + (e[t + 2] << 16) + (e[t + 1] << 8) + e[t];
}, gr = function(e, t) {
  return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
}, Dh = function(e, t) {
  return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
};
function tn(e, t) {
  var r = "", n, o, a = [], i, c, f, l;
  switch (t) {
    case "dbcs":
      if (l = this.l, be && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (f = 0; f < e; ++f)
        r += String.fromCharCode(qr(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      r = _n(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = xo(this, this.l, this.l + e);
      break;
    case "wstr":
      return tn.call(this, e, "dbcs");
    /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
    case "lpstr-ansi":
      r = Bi(this, this.l), e = 4 + St(this, this.l);
      break;
    case "lpstr-cp":
      r = Vi(this, this.l), e = 4 + St(this, this.l);
      break;
    /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
    case "lpwstr":
      r = $i(this, this.l), e = 4 + 2 * St(this, this.l);
      break;
    /* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */
    case "lpp4":
      e = 4 + St(this, this.l), r = Wi(this, this.l), e & 2 && (e += 2);
      break;
    /* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */
    case "8lpp4":
      e = 4 + St(this, this.l), r = Gi(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = Mr(this, this.l + e++)) !== 0; ) a.push(Mn(i));
      r = a.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = qr(this, this.l + e)) !== 0; )
        a.push(Mn(i)), e += 2;
      e += 2, r = a.join("");
      break;
    /* sbcs and dbcs support continue records in the SST way TODO codepages */
    case "dbcs-cont":
      for (r = "", l = this.l, f = 0; f < e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = Mr(this, l), this.l = l + 1, c = tn.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), a.join("") + c;
        a.push(Mn(qr(this, l))), l += 2;
      }
      r = a.join(""), e *= 2;
      break;
    case "cpstr":
    /* falls through */
    case "sbcs-cont":
      for (r = "", l = this.l, f = 0; f != e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = Mr(this, l), this.l = l + 1, c = tn.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), a.join("") + c;
        a.push(Mn(Mr(this, l))), l += 1;
      }
      r = a.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = Mr(this, this.l), this.l++, n;
        case 2:
          return n = (t === "i" ? Oh : qr)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return t === "i" || (this[this.l + 3] & 128) === 0 ? (n = (e > 0 ? gr : Dh)(this, this.l), this.l += 4, n) : (o = St(this, this.l), this.l += 4, o);
        case 8:
        case -8:
          if (t === "f")
            return e == 8 ? o = Xn(this, this.l) : o = Xn([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, o;
          e = 8;
        /* falls through */
        case 16:
          r = Ii(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Ih = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24 & 255;
}, Ph = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >> 8 & 255, e[r + 2] = t >> 16 & 255, e[r + 3] = t >> 24 & 255;
}, Bh = function(e, t, r) {
  e[r] = t & 255, e[r + 1] = t >>> 8 & 255;
};
function Hh(e, t, r) {
  var n = 0, o = 0;
  if (r === "dbcs") {
    for (o = 0; o != t.length; ++o) Bh(this, t.charCodeAt(o), this.l + 2 * o);
    n = 2 * t.length;
  } else if (r === "sbcs") {
    for (t = t.replace(/[^\x00-\x7F]/g, "_"), o = 0; o != t.length; ++o) this[this.l + o] = t.charCodeAt(o) & 255;
    n = t.length;
  } else if (r === "hex") {
    for (; o < e; ++o)
      this[this.l++] = parseInt(t.slice(2 * o, 2 * o + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var a = Math.min(this.l + e, this.length);
    for (o = 0; o < Math.min(t.length, e); ++o) {
      var i = t.charCodeAt(o);
      this[this.l++] = i & 255, this[this.l++] = i >> 8;
    }
    for (; this.l < a; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      n = 1, this[this.l] = t & 255;
      break;
    case 2:
      n = 2, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255;
      break;
    case 3:
      n = 3, this[this.l] = t & 255, t >>>= 8, this[this.l + 1] = t & 255, t >>>= 8, this[this.l + 2] = t & 255;
      break;
    case 4:
      n = 4, Ih(this, t, this.l);
      break;
    case 8:
      if (n = 8, r === "f") {
        Nh(this, t, this.l);
        break;
      }
    /* falls through */
    case 16:
      break;
    case -4:
      n = 4, Ph(this, t, this.l);
      break;
  }
  return this.l += n, this;
}
function Ki(e, t) {
  var r = Ii(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(t + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function _t(e, t) {
  e.l = t, e.read_shift = /*::(*/
  tn, e.chk = Ki, e.write_shift = Hh;
}
function Wt(e, t) {
  e.l += t;
}
function z(e) {
  var t = mr(e);
  return _t(t, 0), t;
}
function mt() {
  var e = [], t = be ? 256 : 2048, r = function(l) {
    var u = z(l);
    return _t(u, 0), u;
  }, n = r(t), o = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, a = function(l) {
    return n && l < n.length - n.l ? n : (o(), n = r(Math.max(l + 1, t)));
  }, i = function() {
    return o(), at(e);
  }, c = function(l) {
    o(), n = l, n.l == null && (n.l = n.length), a(t);
  };
  return { next: a, push: c, end: i, _bufs: e };
}
function q(e, t, r, n) {
  var o = +t, a;
  if (!isNaN(o)) {
    n || (n = Rx[o].p || (r || []).length || 0), a = 1 + (o >= 128 ? 1 : 0) + 1, n >= 128 && ++a, n >= 16384 && ++a, n >= 2097152 && ++a;
    var i = e.next(a);
    o <= 127 ? i.write_shift(1, o) : (i.write_shift(1, (o & 127) + 128), i.write_shift(1, o >> 7));
    for (var c = 0; c != 4; ++c)
      if (n >= 128)
        i.write_shift(1, (n & 127) + 128), n >>= 7;
      else {
        i.write_shift(1, n);
        break;
      }
    /*:: length != null &&*/
    n > 0 && mo(r) && e.push(r);
  }
}
function rn(e, t, r) {
  var n = Et(e);
  if (t.s ? (n.cRel && (n.c += t.s.c), n.rRel && (n.r += t.s.r)) : (n.cRel && (n.c += t.c), n.rRel && (n.r += t.r)), !r || r.biff < 12) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function L0(e, t, r) {
  var n = Et(e);
  return n.s = rn(n.s, t.s, r), n.e = rn(n.e, t.s, r), n;
}
function nn(e, t) {
  if (e.cRel && e.c < 0)
    for (e = Et(e); e.c < 0; ) e.c += t > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Et(e); e.r < 0; ) e.r += t > 8 ? 1048576 : t > 5 ? 65536 : 16384;
  var r = De(e);
  return !e.cRel && e.cRel != null && (r = $h(r)), !e.rRel && e.rRel != null && (r = Vh(r)), r;
}
function T1(e, t) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (t.biff >= 12 ? 1048575 : t.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + ut(e.s.c) + ":" + (e.e.cRel ? "" : "$") + ut(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (t.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + st(e.s.r) + ":" + (e.e.rRel ? "" : "$") + st(e.e.r) : nn(e.s, t.biff) + ":" + nn(e.e, t.biff);
}
function Co(e) {
  return parseInt(Uh(e), 10) - 1;
}
function st(e) {
  return "" + (e + 1);
}
function Vh(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Uh(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function wo(e) {
  for (var t = jh(e), r = 0, n = 0; n !== t.length; ++n) r = 26 * r + t.charCodeAt(n) - 64;
  return r - 1;
}
function ut(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var t = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) t = String.fromCharCode((e - 1) % 26 + 65) + t;
  return t;
}
function $h(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function jh(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Wh(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function tt(e) {
  for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
    var o = e.charCodeAt(n);
    o >= 48 && o <= 57 ? t = 10 * t + (o - 48) : o >= 65 && o <= 90 && (r = 26 * r + (o - 64));
  }
  return { c: r - 1, r: t - 1 };
}
function De(e) {
  for (var t = e.c + 1, r = ""; t; t = (t - 1) / 26 | 0) r = String.fromCharCode((t - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function At(e) {
  var t = e.indexOf(":");
  return t == -1 ? { s: tt(e), e: tt(e) } : { s: tt(e.slice(0, t)), e: tt(e.slice(t + 1)) };
}
function Xe(e, t) {
  return typeof t > "u" || typeof t == "number" ? Xe(e.s, e.e) : (typeof e != "string" && (e = De(e)), typeof t != "string" && (t = De(t)), e == t ? e : e + ":" + t);
}
function Ve(e) {
  var t = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, o = 0, a = e.length;
  for (r = 0; n < a && !((o = e.charCodeAt(n) - 64) < 1 || o > 26); ++n)
    r = 26 * r + o;
  for (t.s.c = --r, r = 0; n < a && !((o = e.charCodeAt(n) - 48) < 0 || o > 9); ++n)
    r = 10 * r + o;
  if (t.s.r = --r, n === a || o != 10)
    return t.e.c = t.s.c, t.e.r = t.s.r, t;
  for (++n, r = 0; n != a && !((o = e.charCodeAt(n) - 64) < 1 || o > 26); ++n)
    r = 26 * r + o;
  for (t.e.c = --r, r = 0; n != a && !((o = e.charCodeAt(n) - 48) < 0 || o > 9); ++n)
    r = 10 * r + o;
  return t.e.r = --r, t;
}
function _0(e, t) {
  var r = e.t == "d" && t instanceof Date;
  if (e.z != null) try {
    return e.w = sr(e.z, r ? kt(t) : t);
  } catch {
  }
  try {
    return e.w = sr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? kt(t) : t);
  } catch {
    return "" + t;
  }
}
function Jt(e, t, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? Tn[e.v] || e.v : t == null ? _0(e, e.v) : _0(e, t));
}
function kr(e, t) {
  var r = t && t.sheet ? t.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function Xi(e, t, r) {
  var n = r || {}, o = e ? Array.isArray(e) : n.dense, a = e || (o ? [] : {}), i = 0, c = 0;
  if (a && n.origin != null) {
    if (typeof n.origin == "number") i = n.origin;
    else {
      var f = typeof n.origin == "string" ? tt(n.origin) : n.origin;
      i = f.r, c = f.c;
    }
    a["!ref"] || (a["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a["!ref"]) {
    var u = Ve(a["!ref"]);
    l.s.c = u.s.c, l.s.r = u.s.r, l.e.c = Math.max(l.e.c, u.e.c), l.e.r = Math.max(l.e.r, u.e.r), i == -1 && (l.e.r = i = u.e.r + 1);
  }
  for (var d = 0; d != t.length; ++d)
    if (t[d]) {
      if (!Array.isArray(t[d])) throw new Error("aoa_to_sheet expects an array of arrays");
      for (var p = 0; p != t[d].length; ++p)
        if (!(typeof t[d][p] > "u")) {
          var g = { v: t[d][p] }, v = i + d, h = c + p;
          if (l.s.r > v && (l.s.r = v), l.s.c > h && (l.s.c = h), l.e.r < v && (l.e.r = v), l.e.c < h && (l.e.c = h), t[d][p] && typeof t[d][p] == "object" && !Array.isArray(t[d][p]) && !(t[d][p] instanceof Date)) g = t[d][p];
          else if (Array.isArray(g.v) && (g.f = t[d][p][1], g.v = g.v[0]), g.v === null)
            if (g.f) g.t = "n";
            else if (n.nullError)
              g.t = "e", g.v = 0;
            else if (n.sheetStubs) g.t = "z";
            else continue;
          else typeof g.v == "number" ? g.t = "n" : typeof g.v == "boolean" ? g.t = "b" : g.v instanceof Date ? (g.z = n.dateNF || ze[14], n.cellDates ? (g.t = "d", g.w = sr(g.z, kt(g.v))) : (g.t = "n", g.v = kt(g.v), g.w = sr(g.z, g.v))) : g.t = "s";
          if (o)
            a[v] || (a[v] = []), a[v][h] && a[v][h].z && (g.z = a[v][h].z), a[v][h] = g;
          else {
            var m = De({ c: h, r: v });
            a[m] && a[m].z && (g.z = a[m].z), a[m] = g;
          }
        }
    }
  return l.s.c < 1e7 && (a["!ref"] = Xe(l)), a;
}
function $r(e, t) {
  return Xi(null, e, t);
}
function Zh(e) {
  return e.read_shift(4, "i");
}
function Vt(e, t) {
  return t || (t = z(4)), t.write_shift(4, e), t;
}
function dt(e) {
  var t = e.read_shift(4);
  return t === 0 ? "" : e.read_shift(t, "dbcs");
}
function rt(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(4 + 2 * e.length)), t.write_shift(4, e.length), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
function Gh(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function zh(e, t) {
  return t || (t = z(4)), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function ko(e, t) {
  var r = e.l, n = e.read_shift(1), o = dt(e), a = [], i = { t: o, h: o };
  if ((n & 1) !== 0) {
    for (var c = e.read_shift(4), f = 0; f != c; ++f) a.push(Gh(e));
    i.r = a;
  } else i.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + t, i;
}
function Kh(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(15 + 4 * e.t.length)), t.write_shift(1, 0), rt(e.t, t), r ? t.slice(0, t.l) : t;
}
var Xh = ko;
function Yh(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(23 + 4 * e.t.length)), t.write_shift(1, 1), rt(e.t, t), t.write_shift(4, 1), zh({}, t), r ? t.slice(0, t.l) : t;
}
function Ot(e) {
  var t = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: t, iStyleRef: r };
}
function Er(e, t) {
  return t == null && (t = z(8)), t.write_shift(-4, e.c), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
function Lr(e) {
  var t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: t };
}
function _r(e, t) {
  return t == null && (t = z(4)), t.write_shift(3, e.iStyleRef || e.s), t.write_shift(1, 0), t;
}
var qh = dt, Yi = rt;
function Eo(e) {
  var t = e.read_shift(4);
  return t === 0 || t === 4294967295 ? "" : e.read_shift(t, "dbcs");
}
function Yn(e, t) {
  var r = !1;
  return t == null && (r = !0, t = z(127)), t.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && t.write_shift(0, e, "dbcs"), r ? t.slice(0, t.l) : t;
}
var Jh = dt, $1 = Eo, Lo = Yn;
function qi(e) {
  var t = e.slice(e.l, e.l + 4), r = t[0] & 1, n = t[0] & 2;
  e.l += 4;
  var o = n === 0 ? Xn([0, 0, 0, 0, t[0] & 252, t[1], t[2], t[3]], 0) : gr(t, 0) >> 2;
  return r ? o / 100 : o;
}
function Ji(e, t) {
  t == null && (t = z(4));
  var r = 0, n = 0, o = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? n = 1 : o == (o | 0) && o >= -536870912 && o < 1 << 29 && (n = 1, r = 1), n) t.write_shift(-4, ((r ? o : e) << 2) + (r + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function Qi(e) {
  var t = { s: {}, e: {} };
  return t.s.r = e.read_shift(4), t.e.r = e.read_shift(4), t.s.c = e.read_shift(4), t.e.c = e.read_shift(4), t;
}
function Qh(e, t) {
  return t || (t = z(16)), t.write_shift(4, e.s.r), t.write_shift(4, e.e.r), t.write_shift(4, e.s.c), t.write_shift(4, e.e.c), t;
}
var Tr = Qi, jr = Qh;
function Wr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Cr(e, t) {
  return (t || z(8)).write_shift(8, e, "f");
}
function e8(e) {
  var t = {}, r = e.read_shift(1), n = r >>> 1, o = e.read_shift(1), a = e.read_shift(2, "i"), i = e.read_shift(1), c = e.read_shift(1), f = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      t.auto = 1;
      break;
    case 1:
      t.index = o;
      var l = l8[o];
      l && (t.rgb = D0(l));
      break;
    case 2:
      t.rgb = D0([i, c, f]);
      break;
    case 3:
      t.theme = o;
      break;
  }
  return a != 0 && (t.tint = a > 0 ? a / 32767 : a / 32768), t;
}
function qn(e, t) {
  if (t || (t = z(8)), !e || e.auto)
    return t.write_shift(4, 0), t.write_shift(4, 0), t;
  e.index != null ? (t.write_shift(1, 2), t.write_shift(1, e.index)) : e.theme != null ? (t.write_shift(1, 6), t.write_shift(1, e.theme)) : (t.write_shift(1, 5), t.write_shift(1, 0));
  var r = e.tint || 0;
  if (r > 0 ? r *= 32767 : r < 0 && (r *= 32768), t.write_shift(2, r), !e.rgb || e.theme != null)
    t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  else {
    var n = e.rgb || "FFFFFF";
    typeof n == "number" && (n = ("000000" + n.toString(16)).slice(-6)), t.write_shift(1, parseInt(n.slice(0, 2), 16)), t.write_shift(1, parseInt(n.slice(2, 4), 16)), t.write_shift(1, parseInt(n.slice(4, 6), 16)), t.write_shift(1, 255);
  }
  return t;
}
function t8(e) {
  var t = e.read_shift(1);
  e.l++;
  var r = {
    fBold: t & 1,
    fItalic: t & 2,
    fUnderline: t & 4,
    fStrikeout: t & 8,
    fOutline: t & 16,
    fShadow: t & 32,
    fCondense: t & 64,
    fExtend: t & 128
  };
  return r;
}
function r8(e, t) {
  t || (t = z(2));
  var r = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return t.write_shift(1, r), t.write_shift(1, 0), t;
}
var es = 2, Lt = 3, On = 11, Jn = 19, Dn = 64, n8 = 65, o8 = 71, a8 = 4108, i8 = 4126, ot = 80, T0 = {
  /*::[*/
  1: { n: "CodePage", t: es },
  /*::[*/
  2: { n: "Category", t: ot },
  /*::[*/
  3: { n: "PresentationFormat", t: ot },
  /*::[*/
  4: { n: "ByteCount", t: Lt },
  /*::[*/
  5: { n: "LineCount", t: Lt },
  /*::[*/
  6: { n: "ParagraphCount", t: Lt },
  /*::[*/
  7: { n: "SlideCount", t: Lt },
  /*::[*/
  8: { n: "NoteCount", t: Lt },
  /*::[*/
  9: { n: "HiddenCount", t: Lt },
  /*::[*/
  10: { n: "MultimediaClipCount", t: Lt },
  /*::[*/
  11: { n: "ScaleCrop", t: On },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: a8
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: i8
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: ot },
  /*::[*/
  15: { n: "Company", t: ot },
  /*::[*/
  16: { n: "LinksUpToDate", t: On },
  /*::[*/
  17: { n: "CharacterCount", t: Lt },
  /*::[*/
  19: { n: "SharedDoc", t: On },
  /*::[*/
  22: { n: "HyperlinksChanged", t: On },
  /*::[*/
  23: { n: "AppVersion", t: Lt, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: n8 },
  /*::[*/
  26: { n: "ContentType", t: ot },
  /*::[*/
  27: { n: "ContentStatus", t: ot },
  /*::[*/
  28: { n: "Language", t: ot },
  /*::[*/
  29: { n: "Version", t: ot },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Jn },
  /*::[*/
  2147483651: { n: "Behavior", t: Jn },
  /*::[*/
  1919054434: {}
}, S0 = {
  /*::[*/
  1: { n: "CodePage", t: es },
  /*::[*/
  2: { n: "Title", t: ot },
  /*::[*/
  3: { n: "Subject", t: ot },
  /*::[*/
  4: { n: "Author", t: ot },
  /*::[*/
  5: { n: "Keywords", t: ot },
  /*::[*/
  6: { n: "Comments", t: ot },
  /*::[*/
  7: { n: "Template", t: ot },
  /*::[*/
  8: { n: "LastAuthor", t: ot },
  /*::[*/
  9: { n: "RevNumber", t: ot },
  /*::[*/
  10: { n: "EditTime", t: Dn },
  /*::[*/
  11: { n: "LastPrinted", t: Dn },
  /*::[*/
  12: { n: "CreatedDate", t: Dn },
  /*::[*/
  13: { n: "ModifiedDate", t: Dn },
  /*::[*/
  14: { n: "PageCount", t: Lt },
  /*::[*/
  15: { n: "WordCount", t: Lt },
  /*::[*/
  16: { n: "CharCount", t: Lt },
  /*::[*/
  17: { n: "Thumbnail", t: o8 },
  /*::[*/
  18: { n: "Application", t: ot },
  /*::[*/
  19: { n: "DocSecurity", t: Lt },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Jn },
  /*::[*/
  2147483651: { n: "Behavior", t: Jn },
  /*::[*/
  1919054434: {}
};
function s8(e) {
  return e.map(function(t) {
    return [t >> 16 & 255, t >> 8 & 255, t & 255];
  });
}
var c8 = /* @__PURE__ */ s8([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), l8 = /* @__PURE__ */ Et(c8), Tn = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, f8 = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, In = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function ts() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function rs(e, t) {
  var r = wh(f8), n = [], o;
  n[n.length] = qe, n[n.length] = ee("Types", null, {
    xmlns: et.CT,
    "xmlns:xsd": et.xsd,
    "xmlns:xsi": et.xsi
  }), n = n.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(f) {
    return ee("Default", null, { Extension: f[0], ContentType: f[1] });
  }));
  var a = function(f) {
    e[f] && e[f].length > 0 && (o = e[f][0], n[n.length] = ee("Override", null, {
      PartName: (o[0] == "/" ? "" : "/") + o,
      ContentType: In[f][t.bookType] || In[f].xlsx
    }));
  }, i = function(f) {
    (e[f] || []).forEach(function(l) {
      n[n.length] = ee("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: In[f][t.bookType] || In[f].xlsx
      });
    });
  }, c = function(f) {
    (e[f] || []).forEach(function(l) {
      n[n.length] = ee("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: r[f][0]
      });
    });
  };
  return a("workbooks"), i("sheets"), i("charts"), c("themes"), ["strs", "styles"].forEach(a), ["coreprops", "extprops", "custprops"].forEach(c), c("vba"), c("comments"), c("threadedcomments"), c("drawings"), i("metadata"), c("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var Me = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function ns(e) {
  var t = e.lastIndexOf("/");
  return e.slice(0, t + 1) + "_rels/" + e.slice(t + 1) + ".rels";
}
function Nr(e) {
  var t = [qe, ee("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: et.RELS
  })];
  return ct(e["!id"]).forEach(function(r) {
    t[t.length] = ee("Relationship", null, e["!id"][r]);
  }), t.length > 2 && (t[t.length] = "</Relationships>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function Ne(e, t, r, n, o, a) {
  if (o || (o = {}), e["!id"] || (e["!id"] = {}), e["!idx"] || (e["!idx"] = 1), t < 0) for (t = e["!idx"]; e["!id"]["rId" + t]; ++t)
    ;
  if (e["!idx"] = t + 1, o.Id = "rId" + t, o.Type = n, o.Target = r, [Me.HLINK, Me.XPATH, Me.XMISS].indexOf(o.Type) > -1 && (o.TargetMode = "External"), e["!id"][o.Id]) throw new Error("Cannot rewrite rId " + t);
  return e["!id"][o.Id] = o, e[("/" + o.Target).replace("//", "/")] = o, t;
}
function u8(e) {
  var t = [qe];
  t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var r = 0; r < e.length; ++r) t.push('  <manifest:file-entry manifest:full-path="' + e[r][0] + '" manifest:media-type="' + e[r][1] + `"/>
`);
  return t.push("</manifest:manifest>"), t.join("");
}
function y0(e, t, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (r || "odf") + "#" + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function d8(e, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + t + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function h8(e) {
  var t = [qe];
  t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var r = 0; r != e.length; ++r)
    t.push(y0(e[r][0], e[r][1])), t.push(d8("", e[r][0]));
  return t.push(y0("", "Document", "pkg")), t.push("</rdf:RDF>"), t.join("");
}
function os() {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + jn.version + "</meta:generator></office:meta></office:document-meta>";
}
var vr = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function S1(e, t, r, n, o) {
  o[e] != null || t == null || t === "" || (o[e] = t, t = Oe(t), n[n.length] = r ? ee(e, t, r) : it(e, t));
}
function as(e, t) {
  var r = t || {}, n = [qe, ee("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": et.CORE_PROPS,
    "xmlns:dc": et.dc,
    "xmlns:dcterms": et.dcterms,
    "xmlns:dcmitype": et.dcmitype,
    "xmlns:xsi": et.xsi
  })], o = {};
  if (!e && !r.Props) return n.join("");
  e && (e.CreatedDate != null && S1("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : U1(e.CreatedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, o), e.ModifiedDate != null && S1("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : U1(e.ModifiedDate, r.WTF), { "xsi:type": "dcterms:W3CDTF" }, n, o));
  for (var a = 0; a != vr.length; ++a) {
    var i = vr[a], c = r.Props && r.Props[i[1]] != null ? r.Props[i[1]] : e ? e[i[1]] : null;
    c === !0 ? c = "1" : c === !1 ? c = "0" : typeof c == "number" && (c = String(c)), c != null && S1(i[0], c, null, n, o);
  }
  return n.length > 2 && (n[n.length] = "</cp:coreProperties>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var Or = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], is = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function ss(e) {
  var t = [], r = ee;
  return e || (e = {}), e.Application = "SheetJS", t[t.length] = qe, t[t.length] = ee("Properties", null, {
    xmlns: et.EXT_PROPS,
    "xmlns:vt": et.vt
  }), Or.forEach(function(n) {
    if (e[n[1]] !== void 0) {
      var o;
      switch (n[2]) {
        case "string":
          o = Oe(String(e[n[1]]));
          break;
        case "bool":
          o = e[n[1]] ? "true" : "false";
          break;
      }
      o !== void 0 && (t[t.length] = r(n[0], o));
    }
  }), t[t.length] = r("HeadingPairs", r("vt:vector", r("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + r("vt:variant", r("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), t[t.length] = r("TitlesOfParts", r("vt:vector", e.SheetNames.map(function(n) {
    return "<vt:lpstr>" + Oe(n) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function cs(e) {
  var t = [qe, ee("Properties", null, {
    xmlns: et.CUST_PROPS,
    "xmlns:vt": et.vt
  })];
  if (!e) return t.join("");
  var r = 1;
  return ct(e).forEach(function(o) {
    ++r, t[t.length] = ee("property", bh(e[o]), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: r,
      name: Oe(o)
    });
  }), t.length > 2 && (t[t.length] = "</Properties>", t[1] = t[1].replace("/>", ">")), t.join("");
}
var F0 = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
};
function p8(e, t) {
  var r = [];
  return ct(F0).map(function(n) {
    for (var o = 0; o < vr.length; ++o) if (vr[o][1] == n) return vr[o];
    for (o = 0; o < Or.length; ++o) if (Or[o][1] == n) return Or[o];
    throw n;
  }).forEach(function(n) {
    if (e[n[1]] != null) {
      var o = t && t.Props && t.Props[n[1]] != null ? t.Props[n[1]] : e[n[1]];
      n[2] === "date" && (o = new Date(o).toISOString().replace(/\.\d*Z/, "Z")), typeof o == "number" ? o = String(o) : o === !0 || o === !1 ? o = o ? "1" : "0" : o instanceof Date && (o = new Date(o).toISOString().replace(/\.\d*Z/, "")), r.push(it(F0[n[1]] || n[1], o));
    }
  }), ee("DocumentProperties", r.join(""), { xmlns: Tt.o });
}
function g8(e, t) {
  var r = ["Worksheets", "SheetNames"], n = "CustomDocumentProperties", o = [];
  return e && ct(e).forEach(function(a) {
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      for (var i = 0; i < vr.length; ++i) if (a == vr[i][1]) return;
      for (i = 0; i < Or.length; ++i) if (a == Or[i][1]) return;
      for (i = 0; i < r.length; ++i) if (a == r[i]) return;
      var c = e[a], f = "string";
      typeof c == "number" ? (f = "float", c = String(c)) : c === !0 || c === !1 ? (f = "boolean", c = c ? "1" : "0") : c = String(c), o.push(ee(g0(a), c, { "dt:dt": f }));
    }
  }), t && ct(t).forEach(function(a) {
    if (Object.prototype.hasOwnProperty.call(t, a) && !(e && Object.prototype.hasOwnProperty.call(e, a))) {
      var i = t[a], c = "string";
      typeof i == "number" ? (c = "float", i = String(i)) : i === !0 || i === !1 ? (c = "boolean", i = i ? "1" : "0") : i instanceof Date ? (c = "dateTime.tz", i = i.toISOString()) : i = String(i), o.push(ee(g0(a), i, { "dt:dt": c }));
    }
  }), "<" + n + ' xmlns="' + Tt.o + '">' + o.join("") + "</" + n + ">";
}
function v8(e) {
  var t = typeof e == "string" ? new Date(Date.parse(e)) : e, r = t.getTime() / 1e3 + 11644473600, n = r % Math.pow(2, 32), o = (r - n) / Math.pow(2, 32);
  n *= 1e7, o *= 1e7;
  var a = n / Math.pow(2, 32) | 0;
  a > 0 && (n = n % Math.pow(2, 32), o += a);
  var i = z(8);
  return i.write_shift(4, n), i.write_shift(4, o), i;
}
function A0(e, t) {
  var r = z(4), n = z(4);
  switch (r.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      n.write_shift(-4, t);
      break;
    case 5:
      n = z(8), n.write_shift(8, t, "f");
      break;
    case 11:
      n.write_shift(4, t ? 1 : 0);
      break;
    case 64:
      n = v8(t);
      break;
    case 31:
    case 80:
      for (n = z(4 + 2 * (t.length + 1) + (t.length % 2 ? 0 : 2)), n.write_shift(4, t.length + 1), n.write_shift(0, t, "dbcs"); n.l != n.length; ) n.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + t);
  }
  return at([r, n]);
}
var ls = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function x8(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function M0(e, t, r) {
  var n = z(8), o = [], a = [], i = 8, c = 0, f = z(8), l = z(8);
  if (f.write_shift(4, 2), f.write_shift(4, 1200), l.write_shift(4, 1), a.push(f), o.push(l), i += 8 + f.length, !t) {
    l = z(8), l.write_shift(4, 0), o.unshift(l);
    var u = [z(4)];
    for (u[0].write_shift(4, e.length), c = 0; c < e.length; ++c) {
      var d = e[c][0];
      for (f = z(8 + 2 * (d.length + 1) + (d.length % 2 ? 0 : 2)), f.write_shift(4, c + 2), f.write_shift(4, d.length + 1), f.write_shift(0, d, "dbcs"); f.l != f.length; ) f.write_shift(1, 0);
      u.push(f);
    }
    f = at(u), a.unshift(f), i += 8 + f.length;
  }
  for (c = 0; c < e.length; ++c)
    if (!(t && !t[e[c][0]]) && !(ls.indexOf(e[c][0]) > -1 || is.indexOf(e[c][0]) > -1) && e[c][1] != null) {
      var p = e[c][1], g = 0;
      if (t) {
        g = +t[e[c][0]];
        var v = r[g];
        if (v.p == "version" && typeof p == "string") {
          var h = p.split(".");
          p = (+h[0] << 16) + (+h[1] || 0);
        }
        f = A0(v.t, p);
      } else {
        var m = x8(p);
        m == -1 && (m = 31, p = String(p)), f = A0(m, p);
      }
      a.push(f), l = z(8), l.write_shift(4, t ? g : 2 + c), o.push(l), i += 8 + f.length;
    }
  var S = 8 * (a.length + 1);
  for (c = 0; c < a.length; ++c)
    o[c].write_shift(4, S), S += a[c].length;
  return n.write_shift(4, i), n.write_shift(4, a.length), at([n].concat(o).concat(a));
}
function b0(e, t, r, n, o, a) {
  var i = z(o ? 68 : 48), c = [i];
  i.write_shift(2, 65534), i.write_shift(2, 0), i.write_shift(4, 842412599), i.write_shift(16, Ie.utils.consts.HEADER_CLSID, "hex"), i.write_shift(4, o ? 2 : 1), i.write_shift(16, t, "hex"), i.write_shift(4, o ? 68 : 48);
  var f = M0(e, r, n);
  if (c.push(f), o) {
    var l = M0(o, null, null);
    i.write_shift(16, a, "hex"), i.write_shift(4, 68 + f.length), c.push(l);
  }
  return at(c);
}
function m8(e, t) {
  t || (t = z(e));
  for (var r = 0; r < e; ++r) t.write_shift(1, 0);
  return t;
}
function C8(e, t) {
  return e.read_shift(t) === 1;
}
function gt(e, t) {
  return t || (t = z(2)), t.write_shift(2, +!!e), t;
}
function fs(e) {
  return e.read_shift(2, "u");
}
function Rt(e, t) {
  return t || (t = z(2)), t.write_shift(2, e), t;
}
function us(e, t, r) {
  return r || (r = z(2)), r.write_shift(1, t == "e" ? +e : +!!e), r.write_shift(1, t == "e" ? 1 : 0), r;
}
function ds(e, t, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), o = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var a = e.read_shift(1);
    a && (o = "dbcs-cont");
  } else r.biff == 12 && (o = "wstr");
  r.biff >= 2 && r.biff <= 5 && (o = "cpstr");
  var i = n ? e.read_shift(n, o) : "";
  return i;
}
function w8(e) {
  var t = e.t || "", r = z(3);
  r.write_shift(2, t.length), r.write_shift(1, 1);
  var n = z(2 * t.length);
  n.write_shift(2 * t.length, t, "utf16le");
  var o = [r, n];
  return at(o);
}
function k8(e, t, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(t, "cpstr");
    if (r.biff >= 12) return e.read_shift(t, "dbcs-cont");
  }
  var o = e.read_shift(1);
  return o === 0 ? n = e.read_shift(t, "sbcs-cont") : n = e.read_shift(t, "dbcs-cont"), n;
}
function E8(e, t, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : k8(e, n, r);
}
function L8(e, t, r) {
  if (r.biff > 5) return E8(e, t, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function hs(e, t, r) {
  return r || (r = z(3 + 2 * e.length)), r.write_shift(2, e.length), r.write_shift(1, 1), r.write_shift(31, e, "utf16le"), r;
}
function R0(e, t) {
  t || (t = z(6 + e.length * 2)), t.write_shift(4, 1 + e.length);
  for (var r = 0; r < e.length; ++r) t.write_shift(2, e.charCodeAt(r));
  return t.write_shift(2, 0), t;
}
function _8(e) {
  var t = z(512), r = 0, n = e.Target;
  n.slice(0, 7) == "file://" && (n = n.slice(7));
  var o = n.indexOf("#"), a = o > -1 ? 31 : 23;
  switch (n.charAt(0)) {
    case "#":
      a = 28;
      break;
    case ".":
      a &= -3;
      break;
  }
  t.write_shift(4, 2), t.write_shift(4, a);
  var i = [8, 6815827, 6619237, 4849780, 83];
  for (r = 0; r < i.length; ++r) t.write_shift(4, i[r]);
  if (a == 28)
    n = n.slice(1), R0(n, t);
  else if (a & 2) {
    for (i = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), r = 0; r < i.length; ++r) t.write_shift(1, parseInt(i[r], 16));
    var c = o > -1 ? n.slice(0, o) : n;
    for (t.write_shift(4, 2 * (c.length + 1)), r = 0; r < c.length; ++r) t.write_shift(2, c.charCodeAt(r));
    t.write_shift(2, 0), a & 8 && R0(o > -1 ? n.slice(o + 1) : "", t);
  } else {
    for (i = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), r = 0; r < i.length; ++r) t.write_shift(1, parseInt(i[r], 16));
    for (var f = 0; n.slice(f * 3, f * 3 + 3) == "../" || n.slice(f * 3, f * 3 + 3) == "..\\"; ) ++f;
    for (t.write_shift(2, f), t.write_shift(4, n.length - 3 * f + 1), r = 0; r < n.length - 3 * f; ++r) t.write_shift(1, n.charCodeAt(r + 3 * f) & 255);
    for (t.write_shift(1, 0), t.write_shift(2, 65535), t.write_shift(2, 57005), r = 0; r < 6; ++r) t.write_shift(4, 0);
  }
  return t.slice(0, t.l);
}
function wr(e, t, r, n) {
  return n || (n = z(6)), n.write_shift(2, e), n.write_shift(2, t), n.write_shift(2, r || 0), n;
}
function T8(e, t, r) {
  var n = r.biff > 8 ? 4 : 2, o = e.read_shift(n), a = e.read_shift(n, "i"), i = e.read_shift(n, "i");
  return [o, a, i];
}
function S8(e) {
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), o = e.read_shift(2);
  return { s: { c: n, r: t }, e: { c: o, r } };
}
function ps(e, t) {
  return t || (t = z(8)), t.write_shift(2, e.s.r), t.write_shift(2, e.e.r), t.write_shift(2, e.s.c), t.write_shift(2, e.e.c), t;
}
function _o(e, t, r) {
  var n = 1536, o = 16;
  switch (r.bookType) {
    case "biff8":
      break;
    case "biff5":
      n = 1280, o = 8;
      break;
    case "biff4":
      n = 4, o = 6;
      break;
    case "biff3":
      n = 3, o = 6;
      break;
    case "biff2":
      n = 2, o = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var a = z(o);
  return a.write_shift(2, n), a.write_shift(2, t), o > 4 && a.write_shift(2, 29282), o > 6 && a.write_shift(2, 1997), o > 8 && (a.write_shift(2, 49161), a.write_shift(2, 1), a.write_shift(2, 1798), a.write_shift(2, 0)), a;
}
function y8(e, t) {
  var r = !t || t.biff == 8, n = z(r ? 112 : 54);
  for (n.write_shift(t.biff == 8 ? 2 : 1, 7), r && n.write_shift(1, 0), n.write_shift(4, 859007059), n.write_shift(4, 5458548 | (r ? 0 : 536870912)); n.l < n.length; ) n.write_shift(1, r ? 0 : 32);
  return n;
}
function F8(e, t) {
  var r = !t || t.biff >= 8 ? 2 : 1, n = z(8 + r * e.name.length);
  n.write_shift(4, e.pos), n.write_shift(1, e.hs || 0), n.write_shift(1, e.dt), n.write_shift(1, e.name.length), t.biff >= 8 && n.write_shift(1, 1), n.write_shift(r * e.name.length, e.name, t.biff < 8 ? "sbcs" : "utf16le");
  var o = n.slice(0, n.l);
  return o.l = n.l, o;
}
function A8(e, t) {
  var r = z(8);
  r.write_shift(4, e.Count), r.write_shift(4, e.Unique);
  for (var n = [], o = 0; o < e.length; ++o) n[o] = w8(e[o]);
  var a = at([r].concat(n));
  return a.parts = [r.length].concat(n.map(function(i) {
    return i.length;
  })), a;
}
function M8() {
  var e = z(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function b8(e) {
  var t = z(18), r = 1718;
  return e && e.RTL && (r |= 64), t.write_shift(2, r), t.write_shift(4, 0), t.write_shift(4, 64), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
function R8(e, t) {
  var r = e.name || "Arial", n = t && t.biff == 5, o = n ? 15 + r.length : 16 + 2 * r.length, a = z(o);
  return a.write_shift(2, e.sz * 20), a.write_shift(4, 0), a.write_shift(2, 400), a.write_shift(4, 0), a.write_shift(2, 0), a.write_shift(1, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le"), a;
}
function N8(e, t, r, n) {
  var o = z(10);
  return wr(e, t, n, o), o.write_shift(4, r), o;
}
function O8(e, t, r, n, o) {
  var a = !o || o.biff == 8, i = z(8 + +a + (1 + a) * r.length);
  return wr(e, t, n, i), i.write_shift(2, r.length), a && i.write_shift(1, 1), i.write_shift((1 + a) * r.length, r, a ? "utf16le" : "sbcs"), i;
}
function D8(e, t, r, n) {
  var o = r && r.biff == 5;
  n || (n = z(o ? 3 + t.length : 5 + 2 * t.length)), n.write_shift(2, e), n.write_shift(o ? 1 : 2, t.length), o || n.write_shift(1, 1), n.write_shift((o ? 1 : 2) * t.length, t, o ? "sbcs" : "utf16le");
  var a = n.length > n.l ? n.slice(0, n.l) : n;
  return a.l == null && (a.l = a.length), a;
}
function I8(e, t) {
  var r = t.biff == 8 || !t.biff ? 4 : 2, n = z(2 * r + 6);
  return n.write_shift(r, e.s.r), n.write_shift(r, e.e.r + 1), n.write_shift(2, e.s.c), n.write_shift(2, e.e.c + 1), n.write_shift(2, 0), n;
}
function N0(e, t, r, n) {
  var o = r && r.biff == 5;
  n || (n = z(o ? 16 : 20)), n.write_shift(2, 0), e.style ? (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, 65524)) : (n.write_shift(2, e.numFmtId || 0), n.write_shift(2, t << 4));
  var a = 0;
  return e.numFmtId > 0 && o && (a |= 1024), n.write_shift(4, a), n.write_shift(4, 0), o || n.write_shift(4, 0), n.write_shift(2, 0), n;
}
function P8(e) {
  var t = z(8);
  return t.write_shift(4, 0), t.write_shift(2, 0), t.write_shift(2, 0), t;
}
function B8(e, t, r, n, o, a) {
  var i = z(8);
  return wr(e, t, n, i), us(r, a, i), i;
}
function H8(e, t, r, n) {
  var o = z(14);
  return wr(e, t, n, o), Cr(r, o), o;
}
function V8(e, t, r) {
  if (r.biff < 8) return U8(e, t, r);
  for (var n = [], o = e.l + t, a = e.read_shift(r.biff > 8 ? 4 : 2); a-- !== 0; ) n.push(T8(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != o) throw new Error("Bad ExternSheet: " + e.l + " != " + o);
  return n;
}
function U8(e, t, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = ds(e, t, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function $8(e) {
  var t = z(2 + e.length * 8);
  t.write_shift(2, e.length);
  for (var r = 0; r < e.length; ++r) ps(e[r], t);
  return t;
}
function j8(e) {
  var t = z(24), r = tt(e[0]);
  t.write_shift(2, r.r), t.write_shift(2, r.r), t.write_shift(2, r.c), t.write_shift(2, r.c);
  for (var n = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), o = 0; o < 16; ++o) t.write_shift(1, parseInt(n[o], 16));
  return at([t, _8(e[1])]);
}
function W8(e) {
  var t = e[1].Tooltip, r = z(10 + 2 * (t.length + 1));
  r.write_shift(2, 2048);
  var n = tt(e[0]);
  r.write_shift(2, n.r), r.write_shift(2, n.r), r.write_shift(2, n.c), r.write_shift(2, n.c);
  for (var o = 0; o < t.length; ++o) r.write_shift(2, t.charCodeAt(o));
  return r.write_shift(2, 0), r;
}
function Z8(e) {
  return e || (e = z(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function G8(e, t, r) {
  if (!r.cellStyles) return Wt(e, t);
  var n = r && r.biff >= 12 ? 4 : 2, o = e.read_shift(n), a = e.read_shift(n), i = e.read_shift(n), c = e.read_shift(n), f = e.read_shift(2);
  n == 2 && (e.l += 2);
  var l = { s: o, e: a, w: i, ixfe: c, flags: f };
  return (r.biff >= 5 || !r.biff) && (l.level = f >> 8 & 7), l;
}
function z8(e, t) {
  var r = z(12);
  r.write_shift(2, t), r.write_shift(2, t), r.write_shift(2, e.width * 256), r.write_shift(2, 0);
  var n = 0;
  return e.hidden && (n |= 1), r.write_shift(1, n), n = e.level || 0, r.write_shift(1, n), r.write_shift(2, 0), r;
}
function K8(e) {
  for (var t = z(2 * e), r = 0; r < e; ++r) t.write_shift(2, r + 1);
  return t;
}
function X8(e, t, r) {
  var n = z(15);
  return yn(n, e, t), n.write_shift(8, r, "f"), n;
}
function Y8(e, t, r) {
  var n = z(9);
  return yn(n, e, t), n.write_shift(2, r), n;
}
var q8 = /* @__PURE__ */ (function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, t = ho({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(c, f) {
    var l = [], u = mr(1);
    switch (f.type) {
      case "base64":
        u = Bt(qt(c));
        break;
      case "binary":
        u = Bt(c);
        break;
      case "buffer":
      case "array":
        u = c;
        break;
    }
    _t(u, 0);
    var d = u.read_shift(1), p = !!(d & 136), g = !1, v = !1;
    switch (d) {
      case 2:
        break;
      // dBASE II
      case 3:
        break;
      // dBASE III
      case 48:
        g = !0, p = !0;
        break;
      // VFP
      case 49:
        g = !0, p = !0;
        break;
      // VFP with autoincrement
      // 0x43 dBASE IV SQL table files
      // 0x63 dBASE IV SQL system files
      case 131:
        break;
      // dBASE III with memo
      case 139:
        break;
      // dBASE IV with memo
      case 140:
        v = !0;
        break;
      // dBASE Level 7 with memo
      // case 0xCB dBASE IV SQL table files with memo
      case 245:
        break;
      // FoxPro 2.x with memo
      // case 0xFB FoxBASE
      default:
        throw new Error("DBF Unsupported Version: " + d.toString(16));
    }
    var h = 0, m = 521;
    d == 2 && (h = u.read_shift(2)), u.l += 3, d != 2 && (h = u.read_shift(4)), h > 1048576 && (h = 1e6), d != 2 && (m = u.read_shift(2));
    var S = u.read_shift(2), F = f.codepage || 1252;
    d != 2 && (u.l += 16, u.read_shift(1), u[u.l] !== 0 && (F = e[u[u.l]]), u.l += 1, u.l += 2), v && (u.l += 36);
    for (var _ = [], N = {}, I = Math.min(u.length, d == 2 ? 521 : m - 10 - (g ? 264 : 0)), j = v ? 32 : 11; u.l < I && u[u.l] != 13; )
      switch (N = {}, N.name = Wn.utils.decode(F, u.slice(u.l, u.l + j)).replace(/[\u0000\r\n].*$/g, ""), u.l += j, N.type = String.fromCharCode(u.read_shift(1)), d != 2 && !v && (N.offset = u.read_shift(4)), N.len = u.read_shift(1), d == 2 && (N.offset = u.read_shift(2)), N.dec = u.read_shift(1), N.name.length && _.push(N), d != 2 && (u.l += v ? 13 : 14), N.type) {
        case "B":
          (!g || N.len != 8) && f.WTF && console.log("Skipping " + N.name + ":" + N.type);
          break;
        case "G":
        // General (FoxPro and dBASE L7)
        case "P":
          f.WTF && console.log("Skipping " + N.name + ":" + N.type);
          break;
        case "+":
        // Autoincrement (dBASE L7 only)
        case "0":
        // _NullFlags (VFP only)
        case "@":
        // Timestamp (dBASE L7 only)
        case "C":
        // Character (dBASE II)
        case "D":
        // Date (dBASE III)
        case "F":
        // Float (dBASE IV)
        case "I":
        // Long (VFP and dBASE L7)
        case "L":
        // Logical (dBASE II)
        case "M":
        // Memo (dBASE III)
        case "N":
        // Number (dBASE II)
        case "O":
        // Double (dBASE L7 only)
        case "T":
        // Datetime (VFP only)
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + N.type);
      }
    if (u[u.l] !== 13 && (u.l = m - 1), u.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + u.l + " " + u[u.l]);
    u.l = m;
    var A = 0, U = 0;
    for (l[0] = [], U = 0; U != _.length; ++U) l[0][U] = _[U].name;
    for (; h-- > 0; ) {
      if (u[u.l] === 42) {
        u.l += S;
        continue;
      }
      for (++u.l, l[++A] = [], U = 0, U = 0; U != _.length; ++U) {
        var O = u.slice(u.l, u.l + _[U].len);
        u.l += _[U].len, _t(O, 0);
        var G = Wn.utils.decode(F, O);
        switch (_[U].type) {
          case "C":
            G.trim().length && (l[A][U] = G.replace(/\s+$/, ""));
            break;
          case "D":
            G.length === 8 ? l[A][U] = new Date(+G.slice(0, 4), +G.slice(4, 6) - 1, +G.slice(6, 8)) : l[A][U] = G;
            break;
          case "F":
            l[A][U] = parseFloat(G.trim());
            break;
          case "+":
          case "I":
            l[A][U] = v ? O.read_shift(-4, "i") ^ 2147483648 : O.read_shift(4, "i");
            break;
          case "L":
            switch (G.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[A][U] = !0;
                break;
              case "N":
              case "F":
                l[A][U] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + G + "|");
            }
            break;
          case "M":
            if (!p) throw new Error("DBF Unexpected MEMO for type " + d.toString(16));
            l[A][U] = "##MEMO##" + (v ? parseInt(G.trim(), 10) : O.read_shift(4));
            break;
          case "N":
            G = G.replace(/\u0000/g, "").trim(), G && G != "." && (l[A][U] = +G || 0);
            break;
          case "@":
            l[A][U] = new Date(O.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            l[A][U] = new Date((O.read_shift(4) - 2440588) * 864e5 + O.read_shift(4));
            break;
          case "Y":
            l[A][U] = O.read_shift(4, "i") / 1e4 + O.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[A][U] = -O.read_shift(-8, "f");
            break;
          case "B":
            if (g && _[U].len == 8) {
              l[A][U] = O.read_shift(8, "f");
              break;
            }
          /* falls through */
          case "G":
          case "P":
            O.l += _[U].len;
            break;
          case "0":
            if (_[U].name === "_NullFlags") break;
          /* falls through */
          default:
            throw new Error("DBF Unsupported data type " + _[U].type);
        }
      }
    }
    if (d != 2 && u.l < u.length && u[u.l++] != 26) throw new Error("DBF EOF Marker missing " + (u.l - 1) + " of " + u.length + " " + u[u.l - 1].toString(16));
    return f && f.sheetRows && (l = l.slice(0, f.sheetRows)), f.DBF = _, l;
  }
  function n(c, f) {
    var l = f || {};
    l.dateNF || (l.dateNF = "yyyymmdd");
    var u = $r(r(c, l), l);
    return u["!cols"] = l.DBF.map(function(d) {
      return {
        wch: d.len,
        DBF: d
      };
    }), delete l.DBF, u;
  }
  function o(c, f) {
    try {
      return kr(n(c, f), f);
    } catch (l) {
      if (f && f.WTF) throw l;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var a = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function i(c, f) {
    var l = f || {};
    if (+l.codepage >= 0 && an(+l.codepage), l.type == "string") throw new Error("Cannot write DBF to JS string");
    var u = mt(), d = n1(c, { header: 1, raw: !0, cellDates: !0 }), p = d[0], g = d.slice(1), v = c["!cols"] || [], h = 0, m = 0, S = 0, F = 1;
    for (h = 0; h < p.length; ++h) {
      if (((v[h] || {}).DBF || {}).name) {
        p[h] = v[h].DBF.name, ++S;
        continue;
      }
      if (p[h] != null) {
        if (++S, typeof p[h] == "number" && (p[h] = p[h].toString(10)), typeof p[h] != "string") throw new Error("DBF Invalid column name " + p[h] + " |" + typeof p[h] + "|");
        if (p.indexOf(p[h]) !== h) {
          for (m = 0; m < 1024; ++m)
            if (p.indexOf(p[h] + "_" + m) == -1) {
              p[h] += "_" + m;
              break;
            }
        }
      }
    }
    var _ = Ve(c["!ref"]), N = [], I = [], j = [];
    for (h = 0; h <= _.e.c - _.s.c; ++h) {
      var A = "", U = "", O = 0, G = [];
      for (m = 0; m < g.length; ++m)
        g[m][h] != null && G.push(g[m][h]);
      if (G.length == 0 || p[h] == null) {
        N[h] = "?";
        continue;
      }
      for (m = 0; m < G.length; ++m) {
        switch (typeof G[m]) {
          /* TODO: check if L2 compat is desired */
          case "number":
            U = "B";
            break;
          case "string":
            U = "C";
            break;
          case "boolean":
            U = "L";
            break;
          case "object":
            U = G[m] instanceof Date ? "D" : "C";
            break;
          default:
            U = "C";
        }
        O = Math.max(O, String(G[m]).length), A = A && A != U ? "C" : U;
      }
      O > 250 && (O = 250), U = ((v[h] || {}).DBF || {}).type, U == "C" && v[h].DBF.len > O && (O = v[h].DBF.len), A == "B" && U == "N" && (A = "N", j[h] = v[h].DBF.dec, O = v[h].DBF.len), I[h] = A == "C" || U == "N" ? O : a[A] || 0, F += I[h], N[h] = A;
    }
    var Y = u.next(32);
    for (Y.write_shift(4, 318902576), Y.write_shift(4, g.length), Y.write_shift(2, 296 + 32 * S), Y.write_shift(2, F), h = 0; h < 4; ++h) Y.write_shift(4, 0);
    for (Y.write_shift(4, 0 | (+t[
      /*::String(*/
      vi
      /*::)*/
    ] || 3) << 8), h = 0, m = 0; h < p.length; ++h)
      if (p[h] != null) {
        var W = u.next(32), K = (p[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        W.write_shift(1, K, "sbcs"), W.write_shift(1, N[h] == "?" ? "C" : N[h], "sbcs"), W.write_shift(4, m), W.write_shift(1, I[h] || a[N[h]] || 0), W.write_shift(1, j[h] || 0), W.write_shift(1, 2), W.write_shift(4, 0), W.write_shift(1, 0), W.write_shift(4, 0), W.write_shift(4, 0), m += I[h] || a[N[h]] || 0;
      }
    var he = u.next(264);
    for (he.write_shift(4, 13), h = 0; h < 65; ++h) he.write_shift(4, 0);
    for (h = 0; h < g.length; ++h) {
      var ae = u.next(F);
      for (ae.write_shift(1, 0), m = 0; m < p.length; ++m)
        if (p[m] != null)
          switch (N[m]) {
            case "L":
              ae.write_shift(1, g[h][m] == null ? 63 : g[h][m] ? 84 : 70);
              break;
            case "B":
              ae.write_shift(8, g[h][m] || 0, "f");
              break;
            case "N":
              var ve = "0";
              for (typeof g[h][m] == "number" && (ve = g[h][m].toFixed(j[m] || 0)), S = 0; S < I[m] - ve.length; ++S) ae.write_shift(1, 32);
              ae.write_shift(1, ve, "sbcs");
              break;
            case "D":
              g[h][m] ? (ae.write_shift(4, ("0000" + g[h][m].getFullYear()).slice(-4), "sbcs"), ae.write_shift(2, ("00" + (g[h][m].getMonth() + 1)).slice(-2), "sbcs"), ae.write_shift(2, ("00" + g[h][m].getDate()).slice(-2), "sbcs")) : ae.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ye = String(g[h][m] != null ? g[h][m] : "").slice(0, I[m]);
              for (ae.write_shift(1, ye, "sbcs"), S = 0; S < I[m] - ye.length; ++S) ae.write_shift(1, 32);
              break;
          }
    }
    return u.next(1).write_shift(1, 26), u.end();
  }
  return {
    to_workbook: o,
    to_sheet: n,
    from_sheet: i
  };
})(), J8 = /* @__PURE__ */ (function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, t = new RegExp("\x1BN(" + ct(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(p, g) {
    var v = e[g];
    return typeof v == "number" ? n0(v) : v;
  }, n = function(p, g, v) {
    var h = g.charCodeAt(0) - 32 << 4 | v.charCodeAt(0) - 48;
    return h == 59 ? p : n0(h);
  };
  e["|"] = 254;
  function o(p, g) {
    switch (g.type) {
      case "base64":
        return a(qt(p), g);
      case "binary":
        return a(p, g);
      case "buffer":
        return a(be && Buffer.isBuffer(p) ? p.toString("binary") : En(p), g);
      case "array":
        return a(p1(p), g);
    }
    throw new Error("Unrecognized type " + g.type);
  }
  function a(p, g) {
    var v = p.split(/[\n\r]+/), h = -1, m = -1, S = 0, F = 0, _ = [], N = [], I = null, j = {}, A = [], U = [], O = [], G = 0, Y;
    for (+g.codepage >= 0 && an(+g.codepage); S !== v.length; ++S) {
      G = 0;
      var W = v[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, r), K = W.replace(/;;/g, "\0").split(";").map(function(b) {
        return b.replace(/\u0000/g, ";");
      }), he = K[0], ae;
      if (W.length > 0) switch (he) {
        case "ID":
          break;
        /* header */
        case "E":
          break;
        /* EOF */
        case "B":
          break;
        /* dimensions */
        case "O":
          break;
        /* options? */
        case "W":
          break;
        /* window? */
        case "P":
          K[1].charAt(0) == "P" && N.push(W.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var ve = !1, ye = !1, ge = !1, me = !1, Fe = -1, Ee = -1;
          for (F = 1; F < K.length; ++F) switch (K[F].charAt(0)) {
            case "A":
              break;
            // TODO: comment
            case "X":
              m = parseInt(K[F].slice(1)) - 1, ye = !0;
              break;
            case "Y":
              for (h = parseInt(K[F].slice(1)) - 1, ye || (m = 0), Y = _.length; Y <= h; ++Y) _[Y] = [];
              break;
            case "K":
              ae = K[F].slice(1), ae.charAt(0) === '"' ? ae = ae.slice(1, ae.length - 1) : ae === "TRUE" ? ae = !0 : ae === "FALSE" ? ae = !1 : isNaN(Xt(ae)) ? isNaN(cn(ae).getDate()) || (ae = vt(ae)) : (ae = Xt(ae), I !== null && Fi(I) && (ae = Ri(ae))), ve = !0;
              break;
            case "E":
              me = !0;
              var y = Y7(K[F].slice(1), { r: h, c: m });
              _[h][m] = [_[h][m], y];
              break;
            case "S":
              ge = !0, _[h][m] = [_[h][m], "S5S"];
              break;
            case "G":
              break;
            // unknown
            case "R":
              Fe = parseInt(K[F].slice(1)) - 1;
              break;
            case "C":
              Ee = parseInt(K[F].slice(1)) - 1;
              break;
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + W);
          }
          if (ve && (_[h][m] && _[h][m].length == 2 ? _[h][m][0] = ae : _[h][m] = ae, I = null), ge) {
            if (me) throw new Error("SYLK shared formula cannot have own formula");
            var D = Fe > -1 && _[Fe][Ee];
            if (!D || !D[1]) throw new Error("SYLK shared formula cannot find base");
            _[h][m][1] = q7(D[1], { r: h - Fe, c: m - Ee });
          }
          break;
        case "F":
          var R = 0;
          for (F = 1; F < K.length; ++F) switch (K[F].charAt(0)) {
            case "X":
              m = parseInt(K[F].slice(1)) - 1, ++R;
              break;
            case "Y":
              for (h = parseInt(K[F].slice(1)) - 1, Y = _.length; Y <= h; ++Y) _[Y] = [];
              break;
            case "M":
              G = parseInt(K[F].slice(1)) / 20;
              break;
            case "F":
              break;
            /* ??? */
            case "G":
              break;
            /* hide grid */
            case "P":
              I = N[parseInt(K[F].slice(1))];
              break;
            case "S":
              break;
            /* cell style */
            case "D":
              break;
            /* column */
            case "N":
              break;
            /* font */
            case "W":
              for (O = K[F].slice(1).split(" "), Y = parseInt(O[0], 10); Y <= parseInt(O[1], 10); ++Y)
                G = parseInt(O[2], 10), U[Y - 1] = G === 0 ? { hidden: !0 } : { wch: G }, To(U[Y - 1]);
              break;
            case "C":
              m = parseInt(K[F].slice(1)) - 1, U[m] || (U[m] = {});
              break;
            case "R":
              h = parseInt(K[F].slice(1)) - 1, A[h] || (A[h] = {}), G > 0 ? (A[h].hpt = G, A[h].hpx = Cs(G)) : G === 0 && (A[h].hidden = !0);
              break;
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + W);
          }
          R < 1 && (I = null);
          break;
        default:
          if (g && g.WTF) throw new Error("SYLK bad record " + W);
      }
    }
    return A.length > 0 && (j["!rows"] = A), U.length > 0 && (j["!cols"] = U), g && g.sheetRows && (_ = _.slice(0, g.sheetRows)), [_, j];
  }
  function i(p, g) {
    var v = o(p, g), h = v[0], m = v[1], S = $r(h, g);
    return ct(m).forEach(function(F) {
      S[F] = m[F];
    }), S;
  }
  function c(p, g) {
    return kr(i(p, g), g);
  }
  function f(p, g, v, h) {
    var m = "C;Y" + (v + 1) + ";X" + (h + 1) + ";K";
    switch (p.t) {
      case "n":
        m += p.v || 0, p.f && !p.F && (m += ";E" + yo(p.f, { r: v, c: h }));
        break;
      case "b":
        m += p.v ? "TRUE" : "FALSE";
        break;
      case "e":
        m += p.w || p.v;
        break;
      case "d":
        m += '"' + (p.w || p.v) + '"';
        break;
      case "s":
        m += '"' + p.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return m;
  }
  function l(p, g) {
    g.forEach(function(v, h) {
      var m = "F;W" + (h + 1) + " " + (h + 1) + " ";
      v.hidden ? m += "0" : (typeof v.width == "number" && !v.wpx && (v.wpx = Qn(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = e1(v.wpx)), typeof v.wch == "number" && (m += Math.round(v.wch))), m.charAt(m.length - 1) != " " && p.push(m);
    });
  }
  function u(p, g) {
    g.forEach(function(v, h) {
      var m = "F;";
      v.hidden ? m += "M0;" : v.hpt ? m += "M" + 20 * v.hpt + ";" : v.hpx && (m += "M" + 20 * t1(v.hpx) + ";"), m.length > 2 && p.push(m + "R" + (h + 1));
    });
  }
  function d(p, g) {
    var v = ["ID;PWXL;N;E"], h = [], m = Ve(p["!ref"]), S, F = Array.isArray(p), _ = `\r
`;
    v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), p["!cols"] && l(v, p["!cols"]), p["!rows"] && u(v, p["!rows"]), v.push("B;Y" + (m.e.r - m.s.r + 1) + ";X" + (m.e.c - m.s.c + 1) + ";D" + [m.s.c, m.s.r, m.e.c, m.e.r].join(" "));
    for (var N = m.s.r; N <= m.e.r; ++N)
      for (var I = m.s.c; I <= m.e.c; ++I) {
        var j = De({ r: N, c: I });
        S = F ? (p[N] || [])[I] : p[j], !(!S || S.v == null && (!S.f || S.F)) && h.push(f(S, p, N, I));
      }
    return v.join(_) + _ + h.join(_) + _ + "E" + _;
  }
  return {
    to_workbook: c,
    to_sheet: i,
    from_sheet: d
  };
})(), Q8 = /* @__PURE__ */ (function() {
  function e(a, i) {
    switch (i.type) {
      case "base64":
        return t(qt(a), i);
      case "binary":
        return t(a, i);
      case "buffer":
        return t(be && Buffer.isBuffer(a) ? a.toString("binary") : En(a), i);
      case "array":
        return t(p1(a), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function t(a, i) {
    for (var c = a.split(`
`), f = -1, l = -1, u = 0, d = []; u !== c.length; ++u) {
      if (c[u].trim() === "BOT") {
        d[++f] = [], l = 0;
        continue;
      }
      if (!(f < 0)) {
        var p = c[u].trim().split(","), g = p[0], v = p[1];
        ++u;
        for (var h = c[u] || ""; (h.match(/["]/g) || []).length & 1 && u < c.length - 1; ) h += `
` + c[++u];
        switch (h = h.trim(), +g) {
          case -1:
            if (h === "BOT") {
              d[++f] = [], l = 0;
              continue;
            } else if (h !== "EOD") throw new Error("Unrecognized DIF special command " + h);
            break;
          case 0:
            h === "TRUE" ? d[f][l] = !0 : h === "FALSE" ? d[f][l] = !1 : isNaN(Xt(v)) ? isNaN(cn(v).getDate()) ? d[f][l] = v : d[f][l] = vt(v) : d[f][l] = Xt(v), ++l;
            break;
          case 1:
            h = h.slice(1, h.length - 1), h = h.replace(/""/g, '"'), h && h.match(/^=".*"$/) && (h = h.slice(2, -1)), d[f][l++] = h !== "" ? h : null;
            break;
        }
        if (h === "EOD") break;
      }
    }
    return i && i.sheetRows && (d = d.slice(0, i.sheetRows)), d;
  }
  function r(a, i) {
    return $r(e(a, i), i);
  }
  function n(a, i) {
    return kr(r(a, i), i);
  }
  var o = /* @__PURE__ */ (function() {
    var a = function(f, l, u, d, p) {
      f.push(l), f.push(u + "," + d), f.push('"' + p.replace(/"/g, '""') + '"');
    }, i = function(f, l, u, d) {
      f.push(l + "," + u), f.push(l == 1 ? '"' + d.replace(/"/g, '""') + '"' : d);
    };
    return function(f) {
      var l = [], u = Ve(f["!ref"]), d, p = Array.isArray(f);
      a(l, "TABLE", 0, 1, "sheetjs"), a(l, "VECTORS", 0, u.e.r - u.s.r + 1, ""), a(l, "TUPLES", 0, u.e.c - u.s.c + 1, ""), a(l, "DATA", 0, 0, "");
      for (var g = u.s.r; g <= u.e.r; ++g) {
        i(l, -1, 0, "BOT");
        for (var v = u.s.c; v <= u.e.c; ++v) {
          var h = De({ r: g, c: v });
          if (d = p ? (f[g] || [])[v] : f[h], !d) {
            i(l, 1, 0, "");
            continue;
          }
          switch (d.t) {
            case "n":
              var m = d.w;
              !m && d.v != null && (m = d.v), m == null ? d.f && !d.F ? i(l, 1, 0, "=" + d.f) : i(l, 1, 0, "") : i(l, 0, m, "V");
              break;
            case "b":
              i(l, 0, d.v ? 1 : 0, d.v ? "TRUE" : "FALSE");
              break;
            case "s":
              i(l, 1, 0, isNaN(d.v) ? d.v : '="' + d.v + '"');
              break;
            case "d":
              d.w || (d.w = sr(d.z || ze[14], kt(vt(d.v)))), i(l, 0, d.w, "V");
              break;
            default:
              i(l, 1, 0, "");
          }
        }
      }
      i(l, -1, 0, "EOD");
      var S = `\r
`, F = l.join(S);
      return F;
    };
  })();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: o
  };
})(), gs = /* @__PURE__ */ (function() {
  function e(d) {
    return d.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function t(d) {
    return d.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(d, p) {
    for (var g = d.split(`
`), v = -1, h = -1, m = 0, S = []; m !== g.length; ++m) {
      var F = g[m].trim().split(":");
      if (F[0] === "cell") {
        var _ = tt(F[1]);
        if (S.length <= _.r) for (v = S.length; v <= _.r; ++v) S[v] || (S[v] = []);
        switch (v = _.r, h = _.c, F[2]) {
          case "t":
            S[v][h] = e(F[3]);
            break;
          case "v":
            S[v][h] = +F[3];
            break;
          case "vtf":
            var N = F[F.length - 1];
          /* falls through */
          case "vtc":
            F[3] === "nl" ? S[v][h] = !!+F[4] : S[v][h] = +F[4], F[2] == "vtf" && (S[v][h] = [S[v][h], N]);
        }
      }
    }
    return p && p.sheetRows && (S = S.slice(0, p.sheetRows)), S;
  }
  function n(d, p) {
    return $r(r(d, p), p);
  }
  function o(d, p) {
    return kr(n(d, p), p);
  }
  var a = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), i = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), f = "--SocialCalcSpreadsheetControlSave--";
  function l(d) {
    if (!d || !d["!ref"]) return "";
    for (var p = [], g = [], v, h = "", m = At(d["!ref"]), S = Array.isArray(d), F = m.s.r; F <= m.e.r; ++F)
      for (var _ = m.s.c; _ <= m.e.c; ++_)
        if (h = De({ r: F, c: _ }), v = S ? (d[F] || [])[_] : d[h], !(!v || v.v == null || v.t === "z")) {
          switch (g = ["cell", h, "t"], v.t) {
            case "s":
            case "str":
              g.push(t(v.v));
              break;
            case "n":
              v.f ? (g[2] = "vtf", g[3] = "n", g[4] = v.v, g[5] = t(v.f)) : (g[2] = "v", g[3] = v.v);
              break;
            case "b":
              g[2] = "vt" + (v.f ? "f" : "c"), g[3] = "nl", g[4] = v.v ? "1" : "0", g[5] = t(v.f || (v.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var N = kt(vt(v.v));
              g[2] = "vtc", g[3] = "nd", g[4] = "" + N, g[5] = v.w || sr(v.z || ze[14], N);
              break;
            case "e":
              continue;
          }
          p.push(g.join(":"));
        }
    return p.push("sheet:c:" + (m.e.c - m.s.c + 1) + ":r:" + (m.e.r - m.s.r + 1) + ":tvf:1"), p.push("valueformat:1:text-wiki"), p.join(`
`);
  }
  function u(d) {
    return [a, i, c, i, l(d), f].join(`
`);
  }
  return {
    to_workbook: o,
    to_sheet: n,
    from_sheet: u
  };
})(), e7 = /* @__PURE__ */ (function() {
  function e(u, d, p, g, v) {
    v.raw ? d[p][g] = u : u === "" || (u === "TRUE" ? d[p][g] = !0 : u === "FALSE" ? d[p][g] = !1 : isNaN(Xt(u)) ? isNaN(cn(u).getDate()) ? d[p][g] = u : d[p][g] = vt(u) : d[p][g] = Xt(u));
  }
  function t(u, d) {
    var p = d || {}, g = [];
    if (!u || u.length === 0) return g;
    for (var v = u.split(/[\r\n]/), h = v.length - 1; h >= 0 && v[h].length === 0; ) --h;
    for (var m = 10, S = 0, F = 0; F <= h; ++F)
      S = v[F].indexOf(" "), S == -1 ? S = v[F].length : S++, m = Math.max(m, S);
    for (F = 0; F <= h; ++F) {
      g[F] = [];
      var _ = 0;
      for (e(v[F].slice(0, m).trim(), g, F, _, p), _ = 1; _ <= (v[F].length - m) / 10 + 1; ++_)
        e(v[F].slice(m + (_ - 1) * 10, m + _ * 10).trim(), g, F, _, p);
    }
    return p.sheetRows && (g = g.slice(0, p.sheetRows)), g;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function o(u) {
    for (var d = {}, p = !1, g = 0, v = 0; g < u.length; ++g)
      (v = u.charCodeAt(g)) == 34 ? p = !p : !p && v in r && (d[v] = (d[v] || 0) + 1);
    v = [];
    for (g in d) Object.prototype.hasOwnProperty.call(d, g) && v.push([d[g], g]);
    if (!v.length) {
      d = n;
      for (g in d) Object.prototype.hasOwnProperty.call(d, g) && v.push([d[g], g]);
    }
    return v.sort(function(h, m) {
      return h[0] - m[0] || n[h[1]] - n[m[1]];
    }), r[v.pop()[1]] || 44;
  }
  function a(u, d) {
    var p = d || {}, g = "", v = p.dense ? [] : {}, h = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    u.slice(0, 4) == "sep=" ? u.charCodeAt(5) == 13 && u.charCodeAt(6) == 10 ? (g = u.charAt(4), u = u.slice(7)) : u.charCodeAt(5) == 13 || u.charCodeAt(5) == 10 ? (g = u.charAt(4), u = u.slice(6)) : g = o(u.slice(0, 1024)) : p && p.FS ? g = p.FS : g = o(u.slice(0, 1024));
    var m = 0, S = 0, F = 0, _ = 0, N = 0, I = g.charCodeAt(0), j = !1, A = 0, U = u.charCodeAt(0);
    u = u.replace(/\r\n/mg, `
`);
    var O = p.dateNF != null ? vh(p.dateNF) : null;
    function G() {
      var Y = u.slice(_, N), W = {};
      if (Y.charAt(0) == '"' && Y.charAt(Y.length - 1) == '"' && (Y = Y.slice(1, -1).replace(/""/g, '"')), Y.length === 0) W.t = "z";
      else if (p.raw)
        W.t = "s", W.v = Y;
      else if (Y.trim().length === 0)
        W.t = "s", W.v = Y;
      else if (Y.charCodeAt(0) == 61)
        Y.charCodeAt(1) == 34 && Y.charCodeAt(Y.length - 1) == 34 ? (W.t = "s", W.v = Y.slice(2, -1).replace(/""/g, '"')) : J7(Y) ? (W.t = "n", W.f = Y.slice(1)) : (W.t = "s", W.v = Y);
      else if (Y == "TRUE")
        W.t = "b", W.v = !0;
      else if (Y == "FALSE")
        W.t = "b", W.v = !1;
      else if (!isNaN(F = Xt(Y)))
        W.t = "n", p.cellText !== !1 && (W.w = Y), W.v = F;
      else if (!isNaN(cn(Y).getDate()) || O && Y.match(O)) {
        W.z = p.dateNF || ze[14];
        var K = 0;
        O && Y.match(O) && (Y = xh(Y, p.dateNF, Y.match(O) || []), K = 1), p.cellDates ? (W.t = "d", W.v = vt(Y, K)) : (W.t = "n", W.v = kt(vt(Y, K))), p.cellText !== !1 && (W.w = sr(W.z, W.v instanceof Date ? kt(W.v) : W.v)), p.cellNF || delete W.z;
      } else
        W.t = "s", W.v = Y;
      if (W.t == "z" || (p.dense ? (v[m] || (v[m] = []), v[m][S] = W) : v[De({ c: S, r: m })] = W), _ = N + 1, U = u.charCodeAt(_), h.e.c < S && (h.e.c = S), h.e.r < m && (h.e.r = m), A == I) ++S;
      else if (S = 0, ++m, p.sheetRows && p.sheetRows <= m) return !0;
    }
    e: for (; N < u.length; ++N) switch (A = u.charCodeAt(N)) {
      case 34:
        U === 34 && (j = !j);
        break;
      case I:
      case 10:
      case 13:
        if (!j && G()) break e;
        break;
    }
    return N - _ > 0 && G(), v["!ref"] = Xe(h), v;
  }
  function i(u, d) {
    return !(d && d.PRN) || d.FS || u.slice(0, 4) == "sep=" || u.indexOf("	") >= 0 || u.indexOf(",") >= 0 || u.indexOf(";") >= 0 ? a(u, d) : $r(t(u, d), d);
  }
  function c(u, d) {
    var p = "", g = d.type == "string" ? [0, 0, 0, 0] : dm(u, d);
    switch (d.type) {
      case "base64":
        p = qt(u);
        break;
      case "binary":
        p = u;
        break;
      case "buffer":
        d.codepage == 65001 ? p = u.toString("utf8") : d.codepage && typeof Wn < "u" || (p = be && Buffer.isBuffer(u) ? u.toString("binary") : En(u));
        break;
      case "array":
        p = p1(u);
        break;
      case "string":
        p = u;
        break;
      default:
        throw new Error("Unrecognized type " + d.type);
    }
    return g[0] == 239 && g[1] == 187 && g[2] == 191 ? p = en(p.slice(3)) : d.type != "string" && d.type != "buffer" && d.codepage == 65001 ? p = en(p) : d.type == "binary" && typeof Wn < "u", p.slice(0, 19) == "socialcalc:version:" ? gs.to_sheet(d.type == "string" ? p : en(p), d) : i(p, d);
  }
  function f(u, d) {
    return kr(c(u, d), d);
  }
  function l(u) {
    for (var d = [], p = Ve(u["!ref"]), g, v = Array.isArray(u), h = p.s.r; h <= p.e.r; ++h) {
      for (var m = [], S = p.s.c; S <= p.e.c; ++S) {
        var F = De({ r: h, c: S });
        if (g = v ? (u[h] || [])[S] : u[F], !g || g.v == null) {
          m.push("          ");
          continue;
        }
        for (var _ = (g.w || (Jt(g), g.w) || "").slice(0, 10); _.length < 10; ) _ += " ";
        m.push(_ + (S === 0 ? " " : ""));
      }
      d.push(m.join(""));
    }
    return d.join(`
`);
  }
  return {
    to_workbook: f,
    to_sheet: c,
    from_sheet: l
  };
})(), O0 = /* @__PURE__ */ (function() {
  function e(y, D, R) {
    if (y) {
      _t(y, y.l || 0);
      for (var b = R.Enum || Fe; y.l < y.length; ) {
        var Z = y.read_shift(2), oe = b[Z] || b[65535], le = y.read_shift(2), se = y.l + le, re = oe.f && oe.f(y, le, R);
        if (y.l = se, D(re, oe, Z)) return;
      }
    }
  }
  function t(y, D) {
    switch (D.type) {
      case "base64":
        return r(Bt(qt(y)), D);
      case "binary":
        return r(Bt(y), D);
      case "buffer":
      case "array":
        return r(y, D);
    }
    throw "Unsupported type " + D.type;
  }
  function r(y, D) {
    if (!y) return y;
    var R = D || {}, b = R.dense ? [] : {}, Z = "Sheet1", oe = "", le = 0, se = {}, re = [], Se = [], Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Be = R.sheetRows || 0;
    if (y[2] == 0 && (y[3] == 8 || y[3] == 9) && y.length >= 16 && y[14] == 5 && y[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (y[2] == 2)
      R.Enum = Fe, e(y, function(ue, xt, Dt) {
        switch (Dt) {
          case 0:
            R.vers = ue, ue >= 4096 && (R.qpro = !0);
            break;
          case 6:
            Ce = ue;
            break;
          /* RANGE */
          case 204:
            ue && (oe = ue);
            break;
          /* SHEETNAMECS */
          case 222:
            oe = ue;
            break;
          /* SHEETNAMELP */
          case 15:
          /* LABEL */
          case 51:
            R.qpro || (ue[1].v = ue[1].v.slice(1));
          /* falls through */
          case 13:
          /* INTEGER */
          case 14:
          /* NUMBER */
          case 16:
            Dt == 14 && (ue[2] & 112) == 112 && (ue[2] & 15) > 1 && (ue[2] & 15) < 15 && (ue[1].z = R.dateNF || ze[14], R.cellDates && (ue[1].t = "d", ue[1].v = Ri(ue[1].v))), R.qpro && ue[3] > le && (b["!ref"] = Xe(Ce), se[Z] = b, re.push(Z), b = R.dense ? [] : {}, Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, le = ue[3], Z = oe || "Sheet" + (le + 1), oe = "");
            var Zt = R.dense ? (b[ue[0].r] || [])[ue[0].c] : b[De(ue[0])];
            if (Zt) {
              Zt.t = ue[1].t, Zt.v = ue[1].v, ue[1].z != null && (Zt.z = ue[1].z), ue[1].f != null && (Zt.f = ue[1].f);
              break;
            }
            R.dense ? (b[ue[0].r] || (b[ue[0].r] = []), b[ue[0].r][ue[0].c] = ue[1]) : b[De(ue[0])] = ue[1];
            break;
        }
      }, R);
    else if (y[2] == 26 || y[2] == 14)
      R.Enum = Ee, y[2] == 14 && (R.qpro = !0, y.l = 0), e(y, function(ue, xt, Dt) {
        switch (Dt) {
          case 204:
            Z = ue;
            break;
          /* SHEETNAMECS */
          case 22:
            ue[1].v = ue[1].v.slice(1);
          /* falls through */
          case 23:
          /* NUMBER17 */
          case 24:
          /* NUMBER18 */
          case 25:
          /* FORMULA19 */
          case 37:
          /* NUMBER25 */
          case 39:
          /* NUMBER27 */
          case 40:
            if (ue[3] > le && (b["!ref"] = Xe(Ce), se[Z] = b, re.push(Z), b = R.dense ? [] : {}, Ce = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, le = ue[3], Z = "Sheet" + (le + 1)), Be > 0 && ue[0].r >= Be) break;
            R.dense ? (b[ue[0].r] || (b[ue[0].r] = []), b[ue[0].r][ue[0].c] = ue[1]) : b[De(ue[0])] = ue[1], Ce.e.c < ue[0].c && (Ce.e.c = ue[0].c), Ce.e.r < ue[0].r && (Ce.e.r = ue[0].r);
            break;
          case 27:
            ue[14e3] && (Se[ue[14e3][0]] = ue[14e3][1]);
            break;
          case 1537:
            Se[ue[0]] = ue[1], ue[0] == le && (Z = ue[1]);
            break;
        }
      }, R);
    else throw new Error("Unrecognized LOTUS BOF " + y[2]);
    if (b["!ref"] = Xe(Ce), se[oe || Z] = b, re.push(oe || Z), !Se.length) return { SheetNames: re, Sheets: se };
    for (var _e = {}, ht = [], Ue = 0; Ue < Se.length; ++Ue) se[re[Ue]] ? (ht.push(Se[Ue] || re[Ue]), _e[Se[Ue]] = se[Se[Ue]] || se[re[Ue]]) : (ht.push(Se[Ue]), _e[Se[Ue]] = { "!ref": "A1" });
    return { SheetNames: ht, Sheets: _e };
  }
  function n(y, D) {
    var R = D || {};
    if (+R.codepage >= 0 && an(+R.codepage), R.type == "string") throw new Error("Cannot write WK1 to JS string");
    var b = mt(), Z = Ve(y["!ref"]), oe = Array.isArray(y), le = [];
    te(b, 0, a(1030)), te(b, 6, f(Z));
    for (var se = Math.min(Z.e.r, 8191), re = Z.s.r; re <= se; ++re)
      for (var Se = st(re), Ce = Z.s.c; Ce <= Z.e.c; ++Ce) {
        re === Z.s.r && (le[Ce] = ut(Ce));
        var Be = le[Ce] + Se, _e = oe ? (y[re] || [])[Ce] : y[Be];
        if (!(!_e || _e.t == "z"))
          if (_e.t == "n")
            (_e.v | 0) == _e.v && _e.v >= -32768 && _e.v <= 32767 ? te(b, 13, g(re, Ce, _e.v)) : te(b, 14, h(re, Ce, _e.v));
          else {
            var ht = Jt(_e);
            te(b, 15, d(re, Ce, ht.slice(0, 239)));
          }
      }
    return te(b, 1), b.end();
  }
  function o(y, D) {
    var R = D || {};
    if (+R.codepage >= 0 && an(+R.codepage), R.type == "string") throw new Error("Cannot write WK3 to JS string");
    var b = mt();
    te(b, 0, i(y));
    for (var Z = 0, oe = 0; Z < y.SheetNames.length; ++Z) (y.Sheets[y.SheetNames[Z]] || {})["!ref"] && te(b, 27, me(y.SheetNames[Z], oe++));
    var le = 0;
    for (Z = 0; Z < y.SheetNames.length; ++Z) {
      var se = y.Sheets[y.SheetNames[Z]];
      if (!(!se || !se["!ref"])) {
        for (var re = Ve(se["!ref"]), Se = Array.isArray(se), Ce = [], Be = Math.min(re.e.r, 8191), _e = re.s.r; _e <= Be; ++_e)
          for (var ht = st(_e), Ue = re.s.c; Ue <= re.e.c; ++Ue) {
            _e === re.s.r && (Ce[Ue] = ut(Ue));
            var ue = Ce[Ue] + ht, xt = Se ? (se[_e] || [])[Ue] : se[ue];
            if (!(!xt || xt.t == "z"))
              if (xt.t == "n")
                te(b, 23, G(_e, Ue, le, xt.v));
              else {
                var Dt = Jt(xt);
                te(b, 22, A(_e, Ue, le, Dt.slice(0, 239)));
              }
          }
        ++le;
      }
    }
    return te(b, 1), b.end();
  }
  function a(y) {
    var D = z(2);
    return D.write_shift(2, y), D;
  }
  function i(y) {
    var D = z(26);
    D.write_shift(2, 4096), D.write_shift(2, 4), D.write_shift(4, 0);
    for (var R = 0, b = 0, Z = 0, oe = 0; oe < y.SheetNames.length; ++oe) {
      var le = y.SheetNames[oe], se = y.Sheets[le];
      if (!(!se || !se["!ref"])) {
        ++Z;
        var re = At(se["!ref"]);
        R < re.e.r && (R = re.e.r), b < re.e.c && (b = re.e.c);
      }
    }
    return R > 8191 && (R = 8191), D.write_shift(2, R), D.write_shift(1, Z), D.write_shift(1, b), D.write_shift(2, 0), D.write_shift(2, 0), D.write_shift(1, 1), D.write_shift(1, 2), D.write_shift(4, 0), D.write_shift(4, 0), D;
  }
  function c(y, D, R) {
    var b = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return D == 8 && R.qpro ? (b.s.c = y.read_shift(1), y.l++, b.s.r = y.read_shift(2), b.e.c = y.read_shift(1), y.l++, b.e.r = y.read_shift(2), b) : (b.s.c = y.read_shift(2), b.s.r = y.read_shift(2), D == 12 && R.qpro && (y.l += 2), b.e.c = y.read_shift(2), b.e.r = y.read_shift(2), D == 12 && R.qpro && (y.l += 2), b.s.c == 65535 && (b.s.c = b.e.c = b.s.r = b.e.r = 0), b);
  }
  function f(y) {
    var D = z(8);
    return D.write_shift(2, y.s.c), D.write_shift(2, y.s.r), D.write_shift(2, y.e.c), D.write_shift(2, y.e.r), D;
  }
  function l(y, D, R) {
    var b = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return R.qpro && R.vers != 20768 ? (b[0].c = y.read_shift(1), b[3] = y.read_shift(1), b[0].r = y.read_shift(2), y.l += 2) : (b[2] = y.read_shift(1), b[0].c = y.read_shift(2), b[0].r = y.read_shift(2)), b;
  }
  function u(y, D, R) {
    var b = y.l + D, Z = l(y, D, R);
    if (Z[1].t = "s", R.vers == 20768) {
      y.l++;
      var oe = y.read_shift(1);
      return Z[1].v = y.read_shift(oe, "utf8"), Z;
    }
    return R.qpro && y.l++, Z[1].v = y.read_shift(b - y.l, "cstr"), Z;
  }
  function d(y, D, R) {
    var b = z(7 + R.length);
    b.write_shift(1, 255), b.write_shift(2, D), b.write_shift(2, y), b.write_shift(1, 39);
    for (var Z = 0; Z < b.length; ++Z) {
      var oe = R.charCodeAt(Z);
      b.write_shift(1, oe >= 128 ? 95 : oe);
    }
    return b.write_shift(1, 0), b;
  }
  function p(y, D, R) {
    var b = l(y, D, R);
    return b[1].v = y.read_shift(2, "i"), b;
  }
  function g(y, D, R) {
    var b = z(7);
    return b.write_shift(1, 255), b.write_shift(2, D), b.write_shift(2, y), b.write_shift(2, R, "i"), b;
  }
  function v(y, D, R) {
    var b = l(y, D, R);
    return b[1].v = y.read_shift(8, "f"), b;
  }
  function h(y, D, R) {
    var b = z(13);
    return b.write_shift(1, 255), b.write_shift(2, D), b.write_shift(2, y), b.write_shift(8, R, "f"), b;
  }
  function m(y, D, R) {
    var b = y.l + D, Z = l(y, D, R);
    if (Z[1].v = y.read_shift(8, "f"), R.qpro) y.l = b;
    else {
      var oe = y.read_shift(2);
      N(y.slice(y.l, y.l + oe), Z), y.l += oe;
    }
    return Z;
  }
  function S(y, D, R) {
    var b = D & 32768;
    return D &= -32769, D = (b ? y : 0) + (D >= 8192 ? D - 16384 : D), (b ? "" : "$") + (R ? ut(D) : st(D));
  }
  var F = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, _ = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function N(y, D) {
    _t(y, 0);
    for (var R = [], b = 0, Z = "", oe = "", le = "", se = ""; y.l < y.length; ) {
      var re = y[y.l++];
      switch (re) {
        case 0:
          R.push(y.read_shift(8, "f"));
          break;
        case 1:
          oe = S(D[0].c, y.read_shift(2), !0), Z = S(D[0].r, y.read_shift(2), !1), R.push(oe + Z);
          break;
        case 2:
          {
            var Se = S(D[0].c, y.read_shift(2), !0), Ce = S(D[0].r, y.read_shift(2), !1);
            oe = S(D[0].c, y.read_shift(2), !0), Z = S(D[0].r, y.read_shift(2), !1), R.push(Se + Ce + ":" + oe + Z);
          }
          break;
        case 3:
          if (y.l < y.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          R.push("(" + R.pop() + ")");
          break;
        case 5:
          R.push(y.read_shift(2));
          break;
        case 6:
          {
            for (var Be = ""; re = y[y.l++]; ) Be += String.fromCharCode(re);
            R.push('"' + Be.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          R.push("-" + R.pop());
          break;
        case 23:
          R.push("+" + R.pop());
          break;
        case 22:
          R.push("NOT(" + R.pop() + ")");
          break;
        case 20:
        case 21:
          se = R.pop(), le = R.pop(), R.push(["AND", "OR"][re - 20] + "(" + le + "," + se + ")");
          break;
        default:
          if (re < 32 && _[re])
            se = R.pop(), le = R.pop(), R.push(le + _[re] + se);
          else if (F[re]) {
            if (b = F[re][1], b == 69 && (b = y[y.l++]), b > R.length) {
              console.error("WK1 bad formula parse 0x" + re.toString(16) + ":|" + R.join("|") + "|");
              return;
            }
            var _e = R.slice(-b);
            R.length -= b, R.push(F[re][0] + "(" + _e.join(",") + ")");
          } else return re <= 7 ? console.error("WK1 invalid opcode " + re.toString(16)) : re <= 24 ? console.error("WK1 unsupported op " + re.toString(16)) : re <= 30 ? console.error("WK1 invalid opcode " + re.toString(16)) : re <= 115 ? console.error("WK1 unsupported function opcode " + re.toString(16)) : console.error("WK1 unrecognized opcode " + re.toString(16));
      }
    }
    R.length == 1 ? D[1].f = "" + R[0] : console.error("WK1 bad formula parse |" + R.join("|") + "|");
  }
  function I(y) {
    var D = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return D[0].r = y.read_shift(2), D[3] = y[y.l++], D[0].c = y[y.l++], D;
  }
  function j(y, D) {
    var R = I(y);
    return R[1].t = "s", R[1].v = y.read_shift(D - 4, "cstr"), R;
  }
  function A(y, D, R, b) {
    var Z = z(6 + b.length);
    Z.write_shift(2, y), Z.write_shift(1, R), Z.write_shift(1, D), Z.write_shift(1, 39);
    for (var oe = 0; oe < b.length; ++oe) {
      var le = b.charCodeAt(oe);
      Z.write_shift(1, le >= 128 ? 95 : le);
    }
    return Z.write_shift(1, 0), Z;
  }
  function U(y, D) {
    var R = I(y);
    R[1].v = y.read_shift(2);
    var b = R[1].v >> 1;
    if (R[1].v & 1)
      switch (b & 7) {
        case 0:
          b = (b >> 3) * 5e3;
          break;
        case 1:
          b = (b >> 3) * 500;
          break;
        case 2:
          b = (b >> 3) / 20;
          break;
        case 3:
          b = (b >> 3) / 200;
          break;
        case 4:
          b = (b >> 3) / 2e3;
          break;
        case 5:
          b = (b >> 3) / 2e4;
          break;
        case 6:
          b = (b >> 3) / 16;
          break;
        case 7:
          b = (b >> 3) / 64;
          break;
      }
    return R[1].v = b, R;
  }
  function O(y, D) {
    var R = I(y), b = y.read_shift(4), Z = y.read_shift(4), oe = y.read_shift(2);
    if (oe == 65535)
      return b === 0 && Z === 3221225472 ? (R[1].t = "e", R[1].v = 15) : b === 0 && Z === 3489660928 ? (R[1].t = "e", R[1].v = 42) : R[1].v = 0, R;
    var le = oe & 32768;
    return oe = (oe & 32767) - 16446, R[1].v = (1 - le * 2) * (Z * Math.pow(2, oe + 32) + b * Math.pow(2, oe)), R;
  }
  function G(y, D, R, b) {
    var Z = z(14);
    if (Z.write_shift(2, y), Z.write_shift(1, R), Z.write_shift(1, D), b == 0)
      return Z.write_shift(4, 0), Z.write_shift(4, 0), Z.write_shift(2, 65535), Z;
    var oe = 0, le = 0, se = 0, re = 0;
    return b < 0 && (oe = 1, b = -b), le = Math.log2(b) | 0, b /= Math.pow(2, le - 31), re = b >>> 0, (re & 2147483648) == 0 && (b /= 2, ++le, re = b >>> 0), b -= re, re |= 2147483648, re >>>= 0, b *= Math.pow(2, 32), se = b >>> 0, Z.write_shift(4, se), Z.write_shift(4, re), le += 16383 + (oe ? 32768 : 0), Z.write_shift(2, le), Z;
  }
  function Y(y, D) {
    var R = O(y);
    return y.l += D - 14, R;
  }
  function W(y, D) {
    var R = I(y), b = y.read_shift(4);
    return R[1].v = b >> 6, R;
  }
  function K(y, D) {
    var R = I(y), b = y.read_shift(8, "f");
    return R[1].v = b, R;
  }
  function he(y, D) {
    var R = K(y);
    return y.l += D - 10, R;
  }
  function ae(y, D) {
    return y[y.l + D - 1] == 0 ? y.read_shift(D, "cstr") : "";
  }
  function ve(y, D) {
    var R = y[y.l++];
    R > D - 1 && (R = D - 1);
    for (var b = ""; b.length < R; ) b += String.fromCharCode(y[y.l++]);
    return b;
  }
  function ye(y, D, R) {
    if (!(!R.qpro || D < 21)) {
      var b = y.read_shift(1);
      y.l += 17, y.l += 1, y.l += 2;
      var Z = y.read_shift(D - 21, "cstr");
      return [b, Z];
    }
  }
  function ge(y, D) {
    for (var R = {}, b = y.l + D; y.l < b; ) {
      var Z = y.read_shift(2);
      if (Z == 14e3) {
        for (R[Z] = [0, ""], R[Z][0] = y.read_shift(2); y[y.l]; )
          R[Z][1] += String.fromCharCode(y[y.l]), y.l++;
        y.l++;
      }
    }
    return R;
  }
  function me(y, D) {
    var R = z(5 + y.length);
    R.write_shift(2, 14e3), R.write_shift(2, D);
    for (var b = 0; b < y.length; ++b) {
      var Z = y.charCodeAt(b);
      R[R.l++] = Z > 127 ? 95 : Z;
    }
    return R[R.l++] = 0, R;
  }
  var Fe = {
    /*::[*/
    0: { n: "BOF", f: fs },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: c },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: p },
    /*::[*/
    14: { n: "NUMBER", f: v },
    /*::[*/
    15: { n: "LABEL", f: u },
    /*::[*/
    16: { n: "FORMULA", f: m },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: u },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: ae },
    /*::[*/
    222: { n: "SHEETNAMELP", f: ve },
    /*::[*/
    65535: { n: "" }
  }, Ee = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: j },
    /*::[*/
    23: { n: "NUMBER17", f: O },
    /*::[*/
    24: { n: "NUMBER18", f: U },
    /*::[*/
    25: { n: "FORMULA19", f: Y },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: ge },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: W },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: K },
    /*::[*/
    40: { n: "FORMULA28", f: he },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: ae },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: ye },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: o,
    to_workbook: t
  };
})(), t7 = /^\s|\s$|[\t\n\r]/;
function vs(e, t) {
  if (!t.bookSST) return "";
  var r = [qe];
  r[r.length] = ee("sst", null, {
    xmlns: Ur[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var n = 0; n != e.length; ++n)
    if (e[n] != null) {
      var o = e[n], a = "<si>";
      o.r ? a += o.r : (a += "<t", o.t || (o.t = ""), o.t.match(t7) && (a += ' xml:space="preserve"'), a += ">" + Oe(o.t) + "</t>"), a += "</si>", r[r.length] = a;
    }
  return r.length > 2 && (r[r.length] = "</sst>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function r7(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function n7(e, t) {
  return t || (t = z(8)), t.write_shift(4, e.Count), t.write_shift(4, e.Unique), t;
}
var o7 = Kh;
function a7(e) {
  var t = mt();
  q(t, 159, n7(e));
  for (var r = 0; r < e.length; ++r) q(t, 19, o7(e[r]));
  return q(
    t,
    160
    /* BrtEndSst */
  ), t.end();
}
function i7(e) {
  for (var t = [], r = e.split(""), n = 0; n < r.length; ++n) t[n] = r[n].charCodeAt(0);
  return t;
}
function xs(e) {
  var t = 0, r, n = i7(e), o = n.length + 1, a, i, c, f, l;
  for (r = mr(o), r[0] = n.length, a = 1; a != o; ++a) r[a] = n[a - 1];
  for (a = o - 1; a >= 0; --a)
    i = r[a], c = (t & 16384) === 0 ? 0 : 1, f = t << 1 & 32767, l = c | f, t = l ^ i;
  return t ^ 52811;
}
var s7 = /* @__PURE__ */ (function() {
  function e(o, a) {
    switch (a.type) {
      case "base64":
        return t(qt(o), a);
      case "binary":
        return t(o, a);
      case "buffer":
        return t(be && Buffer.isBuffer(o) ? o.toString("binary") : En(o), a);
      case "array":
        return t(p1(o), a);
    }
    throw new Error("Unrecognized type " + a.type);
  }
  function t(o, a) {
    var i = a || {}, c = i.dense ? [] : {}, f = o.match(/\\trowd.*?\\row\b/g);
    if (!f.length) throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: f.length - 1 } };
    return f.forEach(function(u, d) {
      Array.isArray(c) && (c[d] = []);
      for (var p = /\\\w+\b/g, g = 0, v, h = -1; v = p.exec(u); ) {
        switch (v[0]) {
          case "\\cell":
            var m = u.slice(g, p.lastIndex - v[0].length);
            if (m[0] == " " && (m = m.slice(1)), ++h, m.length) {
              var S = { v: m, t: "s" };
              Array.isArray(c) ? c[d][h] = S : c[De({ r: d, c: h })] = S;
            }
            break;
        }
        g = p.lastIndex;
      }
      h > l.e.c && (l.e.c = h);
    }), c["!ref"] = Xe(l), c;
  }
  function r(o, a) {
    return kr(e(o, a), a);
  }
  function n(o) {
    for (var a = ["{\\rtf1\\ansi"], i = Ve(o["!ref"]), c, f = Array.isArray(o), l = i.s.r; l <= i.e.r; ++l) {
      a.push("\\trowd\\trautofit1");
      for (var u = i.s.c; u <= i.e.c; ++u) a.push("\\cellx" + (u + 1));
      for (a.push("\\pard\\intbl"), u = i.s.c; u <= i.e.c; ++u) {
        var d = De({ r: l, c: u });
        c = f ? (o[l] || [])[u] : o[d], !(!c || c.v == null && (!c.f || c.F)) && (a.push(" " + (c.w || (Jt(c), c.w))), a.push("\\cell"));
      }
      a.push("\\pard\\intbl\\row");
    }
    return a.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
})();
function D0(e) {
  for (var t = 0, r = 1; t != 3; ++t) r = r * 256 + (e[t] > 255 ? 255 : e[t] < 0 ? 0 : e[t]);
  return r.toString(16).toUpperCase().slice(1);
}
var c7 = 6, Yt = c7;
function Qn(e) {
  return Math.floor((e + Math.round(128 / Yt) / 256) * Yt);
}
function e1(e) {
  return Math.floor((e - 5) / Yt * 100 + 0.5) / 100;
}
function j1(e) {
  return Math.round((e * Yt + 5) / Yt * 256) / 256;
}
function To(e) {
  e.width ? (e.wpx = Qn(e.width), e.wch = e1(e.wpx), e.MDW = Yt) : e.wpx ? (e.wch = e1(e.wpx), e.width = j1(e.wch), e.MDW = Yt) : typeof e.wch == "number" && (e.width = j1(e.wch), e.wpx = Qn(e.width), e.MDW = Yt), e.customWidth && delete e.customWidth;
}
var l7 = 96, ms = l7;
function t1(e) {
  return e * 96 / ms;
}
function Cs(e) {
  return e * ms / 96;
}
function f7(e) {
  var t = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(r) {
    for (var n = r[0]; n <= r[1]; ++n) e[n] != null && (t[t.length] = ee("numFmt", null, { numFmtId: n, formatCode: Oe(e[n]) }));
  }), t.length === 1 ? "" : (t[t.length] = "</numFmts>", t[0] = ee("numFmts", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function u7(e) {
  var t = [];
  return t[t.length] = ee("cellXfs", null), e.forEach(function(r) {
    t[t.length] = ee("xf", null, r);
  }), t[t.length] = "</cellXfs>", t.length === 2 ? "" : (t[0] = ee("cellXfs", null, { count: t.length - 2 }).replace("/>", ">"), t.join(""));
}
function ws(e, t) {
  var r = [qe, ee("styleSheet", null, {
    xmlns: Ur[0],
    "xmlns:vt": et.vt
  })], n;
  return e.SSF && (n = f7(e.SSF)) != null && (r[r.length] = n), r[r.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', r[r.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', r[r.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', r[r.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (n = u7(t.cellXfs)) && (r[r.length] = n), r[r.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', r[r.length] = '<dxfs count="0"/>', r[r.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', r.length > 2 && (r[r.length] = "</styleSheet>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function d7(e, t) {
  var r = e.read_shift(2), n = dt(e);
  return [r, n];
}
function h7(e, t, r) {
  r || (r = z(6 + 4 * t.length)), r.write_shift(2, e), rt(t, r);
  var n = r.length > r.l ? r.slice(0, r.l) : r;
  return r.l == null && (r.l = r.length), n;
}
function p7(e, t, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var o = t8(e);
  o.fItalic && (n.italic = 1), o.fCondense && (n.condense = 1), o.fExtend && (n.extend = 1), o.fShadow && (n.shadow = 1), o.fOutline && (n.outline = 1), o.fStrikeout && (n.strike = 1);
  var a = e.read_shift(2);
  switch (a === 700 && (n.bold = 1), e.read_shift(2)) {
    /* case 0: out.vertAlign = "baseline"; break; */
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (n.underline = i);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var f = e.read_shift(1);
  switch (f > 0 && (n.charset = f), e.l++, n.color = e8(e), e.read_shift(1)) {
    /* case 0: out.scheme = "none": break; */
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = dt(e), n;
}
function g7(e, t) {
  t || (t = z(153)), t.write_shift(2, e.sz * 20), r8(e, t), t.write_shift(2, e.bold ? 700 : 400);
  var r = 0;
  e.vertAlign == "superscript" ? r = 1 : e.vertAlign == "subscript" && (r = 2), t.write_shift(2, r), t.write_shift(1, e.underline || 0), t.write_shift(1, e.family || 0), t.write_shift(1, e.charset || 0), t.write_shift(1, 0), qn(e.color, t);
  var n = 0;
  return n = 2, t.write_shift(1, n), rt(e.name, t), t.length > t.l ? t.slice(0, t.l) : t;
}
var v7 = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], y1, x7 = Wt;
function I0(e, t) {
  t || (t = z(84)), y1 || (y1 = ho(v7));
  var r = y1[e.patternType];
  r == null && (r = 40), t.write_shift(4, r);
  var n = 0;
  if (r != 40)
    for (qn({ auto: 1 }, t), qn({ auto: 1 }, t); n < 12; ++n) t.write_shift(4, 0);
  else {
    for (; n < 4; ++n) t.write_shift(4, 0);
    for (; n < 12; ++n) t.write_shift(4, 0);
  }
  return t.length > t.l ? t.slice(0, t.l) : t;
}
function m7(e, t) {
  var r = e.l + t, n = e.read_shift(2), o = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: o };
}
function ks(e, t, r) {
  r || (r = z(16)), r.write_shift(2, t || 0), r.write_shift(2, e.numFmtId || 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  var n = 0;
  return r.write_shift(1, n), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(1, 0), r;
}
function Xr(e, t) {
  return t || (t = z(10)), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var C7 = Wt;
function w7(e, t) {
  return t || (t = z(51)), t.write_shift(1, 0), Xr(null, t), Xr(null, t), Xr(null, t), Xr(null, t), Xr(null, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function k7(e, t) {
  return t || (t = z(52)), t.write_shift(4, e.xfId), t.write_shift(2, 1), t.write_shift(1, 0), t.write_shift(1, 0), Yn(e.name || "", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function E7(e, t, r) {
  var n = z(2052);
  return n.write_shift(4, e), Yn(t, n), Yn(r, n), n.length > n.l ? n.slice(0, n.l) : n;
}
function L7(e, t) {
  if (t) {
    var r = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var o = n[0]; o <= n[1]; ++o) t[o] != null && ++r;
    }), r != 0 && (q(e, 615, Vt(r)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(n) {
      for (var o = n[0]; o <= n[1]; ++o) t[o] != null && q(e, 44, h7(o, t[o]));
    }), q(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function _7(e) {
  var t = 1;
  q(e, 611, Vt(t)), q(e, 43, g7({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2
  })), q(
    e,
    612
    /* BrtEndFonts */
  );
}
function T7(e) {
  var t = 2;
  q(e, 603, Vt(t)), q(e, 45, I0({ patternType: "none" })), q(e, 45, I0({ patternType: "gray125" })), q(
    e,
    604
    /* BrtEndFills */
  );
}
function S7(e) {
  var t = 1;
  q(e, 613, Vt(t)), q(e, 46, w7()), q(
    e,
    614
    /* BrtEndBorders */
  );
}
function y7(e) {
  var t = 1;
  q(e, 626, Vt(t)), q(e, 47, ks({
    numFmtId: 0
  }, 65535)), q(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function F7(e, t) {
  q(e, 617, Vt(t.length)), t.forEach(function(r) {
    q(e, 47, ks(r, 0));
  }), q(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function A7(e) {
  var t = 1;
  q(e, 619, Vt(t)), q(e, 48, k7({
    xfId: 0,
    name: "Normal"
  })), q(
    e,
    620
    /* BrtEndStyles */
  );
}
function M7(e) {
  var t = 0;
  q(e, 505, Vt(t)), q(
    e,
    506
    /* BrtEndDXFs */
  );
}
function b7(e) {
  var t = 0;
  q(e, 508, E7(t, "TableStyleMedium9", "PivotStyleMedium4")), q(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function R7(e, t) {
  var r = mt();
  return q(
    r,
    278
    /* BrtBeginStyleSheet */
  ), L7(r, e.SSF), _7(r), T7(r), S7(r), y7(r), F7(r, t.cellXfs), A7(r), M7(r), b7(r), q(
    r,
    279
    /* BrtEndStyleSheet */
  ), r.end();
}
function Es(e, t) {
  if (t && t.themeXLSX) return t.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var r = [qe];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function N7(e, t) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: dt(e)
  };
}
function O7(e) {
  var t = z(12 + 2 * e.name.length);
  return t.write_shift(4, e.flags), t.write_shift(4, e.version), rt(e.name, t), t.slice(0, t.l);
}
function D7(e) {
  for (var t = [], r = e.read_shift(4); r-- > 0; )
    t.push([e.read_shift(4), e.read_shift(4)]);
  return t;
}
function I7(e) {
  var t = z(4 + 8 * e.length);
  t.write_shift(4, e.length);
  for (var r = 0; r < e.length; ++r)
    t.write_shift(4, e[r][0]), t.write_shift(4, e[r][1]);
  return t;
}
function P7(e, t) {
  var r = z(8 + 2 * t.length);
  return r.write_shift(4, e), rt(t, r), r.slice(0, r.l);
}
function B7(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function H7(e, t) {
  var r = z(8);
  return r.write_shift(4, e), r.write_shift(4, 1), r;
}
function V7() {
  var e = mt();
  return q(e, 332), q(e, 334, Vt(1)), q(e, 335, O7({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), q(e, 336), q(e, 339, P7(1, "XLDAPR")), q(e, 52), q(e, 35, Vt(514)), q(e, 4096, Vt(0)), q(e, 4097, Rt(1)), q(e, 36), q(e, 53), q(e, 340), q(e, 337, H7(1)), q(e, 51, I7([[1, 0]])), q(e, 338), q(e, 333), e.end();
}
function Ls() {
  var e = [qe];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function U7(e) {
  var t = {};
  t.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), t.r = De(r);
  var n = e.read_shift(1);
  return n & 2 && (t.l = "1"), n & 8 && (t.a = "1"), t;
}
var br = 1024;
function _s(e, t) {
  for (var r = [21600, 21600], n = ["m0,0l0", r[1], r[0], r[1], r[0], "0xe"].join(","), o = [
    ee("xml", null, { "xmlns:v": Tt.v, "xmlns:o": Tt.o, "xmlns:x": Tt.x, "xmlns:mv": Tt.mv }).replace(/\/>/, ">"),
    ee("o:shapelayout", ee("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" }),
    ee("v:shapetype", [
      ee("v:stroke", null, { joinstyle: "miter" }),
      ee("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
    ].join(""), { id: "_x0000_t202", "o:spt": 202, coordsize: r.join(","), path: n })
  ]; br < e * 1e3; ) br += 1e3;
  return t.forEach(function(a) {
    var i = tt(a[0]), c = (
      /*::(*/
      { color2: "#BEFF82", type: "gradient" }
    );
    c.type == "gradient" && (c.angle = "-180");
    var f = c.type == "gradient" ? ee("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, l = ee("v:fill", f, c), u = { on: "t", obscured: "t" };
    ++br, o = o.concat([
      "<v:shape" + fn({
        id: "_x0000_s" + br,
        type: "#_x0000_t202",
        style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (a[1].hidden ? ";visibility:hidden" : ""),
        fillcolor: "#ECFAD4",
        strokecolor: "#edeaa1"
      }) + ">",
      l,
      ee("v:shadow", null, u),
      ee("v:path", null, { "o:connecttype": "none" }),
      '<v:textbox><div style="text-align:left"></div></v:textbox>',
      '<x:ClientData ObjectType="Note">',
      "<x:MoveWithCells/>",
      "<x:SizeWithCells/>",
      /* Part 4 19.4.2.3 Anchor (Anchor) */
      it("x:Anchor", [i.c + 1, 0, i.r + 1, 0, i.c + 3, 20, i.r + 5, 20].join(",")),
      it("x:AutoFill", "False"),
      it("x:Row", String(i.r)),
      it("x:Column", String(i.c)),
      a[1].hidden ? "" : "<x:Visible/>",
      "</x:ClientData>",
      "</v:shape>"
    ]);
  }), o.push("</xml>"), o.join("");
}
function Ts(e) {
  var t = [qe, ee("comments", null, { xmlns: Ur[0] })], r = [];
  return t.push("<authors>"), e.forEach(function(n) {
    n[1].forEach(function(o) {
      var a = Oe(o.a);
      r.indexOf(a) == -1 && (r.push(a), t.push("<author>" + a + "</author>")), o.T && o.ID && r.indexOf("tc=" + o.ID) == -1 && (r.push("tc=" + o.ID), t.push("<author>tc=" + o.ID + "</author>"));
    });
  }), r.length == 0 && (r.push("SheetJ5"), t.push("<author>SheetJ5</author>")), t.push("</authors>"), t.push("<commentList>"), e.forEach(function(n) {
    var o = 0, a = [];
    if (n[1][0] && n[1][0].T && n[1][0].ID ? o = r.indexOf("tc=" + n[1][0].ID) : n[1].forEach(function(f) {
      f.a && (o = r.indexOf(Oe(f.a))), a.push(f.t || "");
    }), t.push('<comment ref="' + n[0] + '" authorId="' + o + '"><text>'), a.length <= 1) t.push(it("t", Oe(a[0] || "")));
    else {
      for (var i = `Comment:
    ` + a[0] + `
`, c = 1; c < a.length; ++c) i += `Reply:
    ` + a[c] + `
`;
      t.push(it("t", Oe(i)));
    }
    t.push("</text></comment>");
  }), t.push("</commentList>"), t.length > 2 && (t[t.length] = "</comments>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function $7(e, t, r) {
  var n = [qe, ee("ThreadedComments", null, { xmlns: et.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(o) {
    var a = "";
    (o[1] || []).forEach(function(i, c) {
      if (!i.T) {
        delete i.ID;
        return;
      }
      i.a && t.indexOf(i.a) == -1 && t.push(i.a);
      var f = {
        ref: o[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + r.tcid++).slice(-12) + "}"
      };
      c == 0 ? a = f.id : f.parentId = a, i.ID = f.id, i.a && (f.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + t.indexOf(i.a)).slice(-12) + "}"), n.push(ee("threadedComment", it("text", i.t || ""), f));
    });
  }), n.push("</ThreadedComments>"), n.join("");
}
function j7(e) {
  var t = [qe, ee("personList", null, {
    xmlns: et.TCMNT,
    "xmlns:x": Ur[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(r, n) {
    t.push(ee("person", null, {
      displayName: r,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + n).slice(-12) + "}",
      userId: r,
      providerId: "None"
    }));
  }), t.push("</personList>"), t.join("");
}
function W7(e) {
  var t = {};
  t.iauthor = e.read_shift(4);
  var r = Tr(e);
  return t.rfx = r.s, t.ref = De(r.s), e.l += 16, t;
}
function Z7(e, t) {
  return t == null && (t = z(36)), t.write_shift(4, e[1].iauthor), jr(e[0], t), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t;
}
var G7 = dt;
function z7(e) {
  return rt(e.slice(0, 54));
}
function K7(e) {
  var t = mt(), r = [];
  return q(
    t,
    628
    /* BrtBeginComments */
  ), q(
    t,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(n) {
    n[1].forEach(function(o) {
      r.indexOf(o.a) > -1 || (r.push(o.a.slice(0, 54)), q(t, 632, z7(o.a)));
    });
  }), q(
    t,
    631
    /* BrtEndCommentAuthors */
  ), q(
    t,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(n) {
    n[1].forEach(function(o) {
      o.iauthor = r.indexOf(o.a);
      var a = { s: tt(n[0]), e: tt(n[0]) };
      q(t, 635, Z7([a, o])), o.t && o.t.length > 0 && q(t, 637, Yh(o)), q(
        t,
        636
        /* BrtEndComment */
      ), delete o.iauthor;
    });
  }), q(
    t,
    634
    /* BrtEndCommentList */
  ), q(
    t,
    629
    /* BrtEndComments */
  ), t.end();
}
function X7(e, t) {
  t.FullPaths.forEach(function(r, n) {
    if (n != 0) {
      var o = r.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      o.slice(-1) !== "/" && Ie.utils.cfb_add(e, o, t.FileIndex[n].content);
    }
  });
}
var Ss = ["xlsb", "xlsm", "xlam", "biff8", "xla"], Y7 = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, t = { r: 0, c: 0 };
  function r(n, o, a, i) {
    var c = !1, f = !1;
    a.length == 0 ? f = !0 : a.charAt(0) == "[" && (f = !0, a = a.slice(1, -1)), i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1));
    var l = a.length > 0 ? parseInt(a, 10) | 0 : 0, u = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    return c ? u += t.c : --u, f ? l += t.r : --l, o + (c ? "" : "$") + ut(u) + (f ? "" : "$") + st(l);
  }
  return function(o, a) {
    return t = a, o.replace(e, r);
  };
})(), So = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, yo = /* @__PURE__ */ (function() {
  return function(t, r) {
    return t.replace(So, function(n, o, a, i, c, f) {
      var l = wo(i) - (a ? 0 : r.c), u = Co(f) - (c ? 0 : r.r), d = u == 0 ? "" : c ? u + 1 : "[" + u + "]", p = l == 0 ? "" : a ? l + 1 : "[" + l + "]";
      return o + "R" + d + "C" + p;
    });
  };
})();
function q7(e, t) {
  return e.replace(So, function(r, n, o, a, i, c) {
    return n + (o == "$" ? o + a : ut(wo(a) + t.c)) + (i == "$" ? i + c : st(Co(c) + t.r));
  });
}
function J7(e) {
  return e.length != 1;
}
function Ke(e) {
  e.l += 1;
}
function cr(e, t) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function ys(e, t, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Fs(e);
    r.biff == 12 && (n = 4);
  }
  var o = e.read_shift(n), a = e.read_shift(n), i = cr(e), c = cr(e);
  return { s: { r: o, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: a, c: c[0], cRel: c[1], rRel: c[2] } };
}
function Fs(e) {
  var t = cr(e), r = cr(e), n = e.read_shift(1), o = e.read_shift(1);
  return { s: { r: t[0], c: n, cRel: t[1], rRel: t[2] }, e: { r: r[0], c: o, cRel: r[1], rRel: r[2] } };
}
function Q7(e, t, r) {
  if (r.biff < 8) return Fs(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), o = e.read_shift(r.biff == 12 ? 4 : 2), a = cr(e), i = cr(e);
  return { s: { r: n, c: a[0], cRel: a[1], rRel: a[2] }, e: { r: o, c: i[0], cRel: i[1], rRel: i[2] } };
}
function As(e, t, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return ep(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), o = cr(e);
  return { r: n, c: o[0], cRel: o[1], rRel: o[2] };
}
function ep(e) {
  var t = cr(e), r = e.read_shift(1);
  return { r: t[0], c: r, cRel: t[1], rRel: t[2] };
}
function tp(e) {
  var t = e.read_shift(2), r = e.read_shift(2);
  return { r: t, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function rp(e, t, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return np(e);
  var o = e.read_shift(n >= 12 ? 4 : 2), a = e.read_shift(2), i = (a & 16384) >> 14, c = (a & 32768) >> 15;
  if (a &= 16383, c == 1) for (; o > 524287; ) o -= 1048576;
  if (i == 1) for (; a > 8191; ) a = a - 16384;
  return { r: o, c: a, cRel: i, rRel: c };
}
function np(e) {
  var t = e.read_shift(2), r = e.read_shift(1), n = (t & 32768) >> 15, o = (t & 16384) >> 14;
  return t &= 16383, n == 1 && t >= 8192 && (t = t - 16384), o == 1 && r >= 128 && (r = r - 256), { r: t, c: r, cRel: o, rRel: n };
}
function op(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, o = ys(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, o];
}
function ap(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, o = e.read_shift(2, "i"), a = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, a = 6;
      break;
    case 12:
      a = 12;
      break;
  }
  var i = ys(e, a, r);
  return [n, o, i];
}
function ip(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function sp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, o = e.read_shift(2), a = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, a = 6;
      break;
    case 12:
      a = 12;
      break;
  }
  return e.l += a, [n, o];
}
function cp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, o = Q7(e, t - 1, r);
  return [n, o];
}
function lp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function P0(e) {
  var t = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [t, r];
}
function fp(e, t, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), o = [], a = 0; a <= n; ++a) o.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return o;
}
function up(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function dp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function hp(e) {
  var t = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [t, e.read_shift(2)];
}
function pp(e, t, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function Ms(e) {
  var t = e.read_shift(1), r = e.read_shift(1);
  return [t, r];
}
function gp(e) {
  return e.read_shift(2), Ms(e);
}
function vp(e) {
  return e.read_shift(2), Ms(e);
}
function xp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var o = As(e, 0, r);
  return [n, o];
}
function mp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var o = rp(e, 0, r);
  return [n, o];
}
function Cp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var o = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var a = As(e, 0, r);
  return [n, o, a];
}
function wp(e, t, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var o = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [wg[o], Ns[o], n];
}
function kp(e, t, r) {
  var n = e[e.l++], o = e.read_shift(1), a = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : Ep(e);
  return [o, (a[0] === 0 ? Ns : Cg)[a[1]]];
}
function Ep(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Lp(e, t, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function _p(e, t, r) {
  if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), o = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, o];
}
function Tp(e) {
  return e.l++, Tn[e.read_shift(1)];
}
function Sp(e) {
  return e.l++, e.read_shift(2);
}
function yp(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function Fp(e) {
  return e.l++, Wr(e);
}
function Ap(e, t, r) {
  return e.l++, ds(e, t - 1, r);
}
function Mp(e, t) {
  var r = [e.read_shift(1)];
  if (t == 12) switch (r[0]) {
    case 2:
      r[0] = 4;
      break;
    /* SerBool */
    case 4:
      r[0] = 16;
      break;
    /* SerErr */
    case 0:
      r[0] = 1;
      break;
    /* SerNum */
    case 1:
      r[0] = 2;
      break;
  }
  switch (r[0]) {
    case 4:
      r[1] = C8(e, 1) ? "TRUE" : "FALSE", t != 12 && (e.l += 7);
      break;
    case 37:
    /* appears to be an alias */
    case 16:
      r[1] = Tn[e[e.l]], e.l += t == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Wr(e);
      break;
    case 2:
      r[1] = L8(e, 0, { biff: t > 0 && t < 8 ? 2 : t });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function bp(e, t, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), o = [], a = 0; a != n; ++a) o.push((r.biff == 12 ? Tr : S8)(e));
  return o;
}
function Rp(e, t, r) {
  var n = 0, o = 0;
  r.biff == 12 ? (n = e.read_shift(4), o = e.read_shift(4)) : (o = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --o == 0 && (o = 256));
  for (var a = 0, i = []; a != n && (i[a] = []); ++a)
    for (var c = 0; c != o; ++c) i[a][c] = Mp(e, r.biff);
  return i;
}
function Np(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, o = !r || r.biff >= 8 ? 4 : 2, a = e.read_shift(o);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, a];
}
function Op(e, t, r) {
  if (r.biff == 5) return Dp(e);
  var n = e.read_shift(1) >>> 5 & 3, o = e.read_shift(2), a = e.read_shift(4);
  return [n, o, a];
}
function Dp(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [t, r, n];
}
function Ip(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var o = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, o];
}
function Pp(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3, o = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, o];
}
function Bp(e, t, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Hp(e, t, r) {
  var n = (e[e.l++] & 96) >> 5, o = e.read_shift(2), a = 4;
  if (r) switch (r.biff) {
    case 5:
      a = 15;
      break;
    case 12:
      a = 6;
      break;
  }
  return e.l += a, [n, o];
}
var Vp = Wt, Up = Wt, $p = Wt;
function Sn(e, t, r) {
  return e.l += 2, [tp(e)];
}
function Fo(e) {
  return e.l += 6, [];
}
var jp = Sn, Wp = Fo, Zp = Fo, Gp = Sn;
function bs(e) {
  return e.l += 2, [fs(e), e.read_shift(2) & 1];
}
var zp = Sn, Kp = bs, Xp = Fo, Yp = Sn, qp = Sn, Jp = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function Qp(e) {
  e.l += 2;
  var t = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), o = e.read_shift(2), a = e.read_shift(2), i = Jp[r >> 2 & 31];
  return { ixti: t, coltype: r & 3, rt: i, idx: n, c: o, C: a };
}
function eg(e) {
  return e.l += 2, [e.read_shift(4)];
}
function tg(e, t, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function rg(e, t, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function ng(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function og(e) {
  var t = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [t, r];
}
function ag(e) {
  return e.l += 4, [0, 0];
}
var B0 = {
  /*::[*/
  1: { n: "PtgExp", f: _p },
  /*::[*/
  2: { n: "PtgTbl", f: $p },
  /*::[*/
  3: { n: "PtgAdd", f: Ke },
  /*::[*/
  4: { n: "PtgSub", f: Ke },
  /*::[*/
  5: { n: "PtgMul", f: Ke },
  /*::[*/
  6: { n: "PtgDiv", f: Ke },
  /*::[*/
  7: { n: "PtgPower", f: Ke },
  /*::[*/
  8: { n: "PtgConcat", f: Ke },
  /*::[*/
  9: { n: "PtgLt", f: Ke },
  /*::[*/
  10: { n: "PtgLe", f: Ke },
  /*::[*/
  11: { n: "PtgEq", f: Ke },
  /*::[*/
  12: { n: "PtgGe", f: Ke },
  /*::[*/
  13: { n: "PtgGt", f: Ke },
  /*::[*/
  14: { n: "PtgNe", f: Ke },
  /*::[*/
  15: { n: "PtgIsect", f: Ke },
  /*::[*/
  16: { n: "PtgUnion", f: Ke },
  /*::[*/
  17: { n: "PtgRange", f: Ke },
  /*::[*/
  18: { n: "PtgUplus", f: Ke },
  /*::[*/
  19: { n: "PtgUminus", f: Ke },
  /*::[*/
  20: { n: "PtgPercent", f: Ke },
  /*::[*/
  21: { n: "PtgParen", f: Ke },
  /*::[*/
  22: { n: "PtgMissArg", f: Ke },
  /*::[*/
  23: { n: "PtgStr", f: Ap },
  /*::[*/
  26: { n: "PtgSheet", f: tg },
  /*::[*/
  27: { n: "PtgEndSheet", f: rg },
  /*::[*/
  28: { n: "PtgErr", f: Tp },
  /*::[*/
  29: { n: "PtgBool", f: yp },
  /*::[*/
  30: { n: "PtgInt", f: Sp },
  /*::[*/
  31: { n: "PtgNum", f: Fp },
  /*::[*/
  32: { n: "PtgArray", f: lp },
  /*::[*/
  33: { n: "PtgFunc", f: wp },
  /*::[*/
  34: { n: "PtgFuncVar", f: kp },
  /*::[*/
  35: { n: "PtgName", f: Np },
  /*::[*/
  36: { n: "PtgRef", f: xp },
  /*::[*/
  37: { n: "PtgArea", f: op },
  /*::[*/
  38: { n: "PtgMemArea", f: Ip },
  /*::[*/
  39: { n: "PtgMemErr", f: Vp },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Up },
  /*::[*/
  41: { n: "PtgMemFunc", f: Pp },
  /*::[*/
  42: { n: "PtgRefErr", f: Bp },
  /*::[*/
  43: { n: "PtgAreaErr", f: ip },
  /*::[*/
  44: { n: "PtgRefN", f: mp },
  /*::[*/
  45: { n: "PtgAreaN", f: cp },
  /*::[*/
  46: { n: "PtgMemAreaN", f: ng },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: og },
  /*::[*/
  57: { n: "PtgNameX", f: Op },
  /*::[*/
  58: { n: "PtgRef3d", f: Cp },
  /*::[*/
  59: { n: "PtgArea3d", f: ap },
  /*::[*/
  60: { n: "PtgRefErr3d", f: Hp },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: sp },
  /*::[*/
  255: {}
}, ig = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, sg = {
  /*::[*/
  1: { n: "PtgElfLel", f: bs },
  /*::[*/
  2: { n: "PtgElfRw", f: Yp },
  /*::[*/
  3: { n: "PtgElfCol", f: jp },
  /*::[*/
  6: { n: "PtgElfRwV", f: qp },
  /*::[*/
  7: { n: "PtgElfColV", f: Gp },
  /*::[*/
  10: { n: "PtgElfRadical", f: zp },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: Xp },
  /*::[*/
  13: { n: "PtgElfColS", f: Wp },
  /*::[*/
  15: { n: "PtgElfColSV", f: Zp },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: Kp },
  /*::[*/
  25: { n: "PtgList", f: Qp },
  /*::[*/
  29: { n: "PtgSxName", f: eg },
  /*::[*/
  255: {}
}, cg = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: ag },
  /*::[*/
  1: { n: "PtgAttrSemi", f: pp },
  /*::[*/
  2: { n: "PtgAttrIf", f: dp },
  /*::[*/
  4: { n: "PtgAttrChoose", f: fp },
  /*::[*/
  8: { n: "PtgAttrGoto", f: up },
  /*::[*/
  16: { n: "PtgAttrSum", f: Lp },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: P0 },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: P0 },
  /*::[*/
  64: { n: "PtgAttrSpace", f: gp },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: vp },
  /*::[*/
  128: { n: "PtgAttrIfError", f: hp },
  /*::[*/
  255: {}
};
function lg(e, t, r, n) {
  if (n.biff < 8) return Wt(e, t);
  for (var o = e.l + t, a = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = Rp(e, 0, n), a.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = bp(e, r[i][1], n), a.push(r[i][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[i][1][1] = e.read_shift(4), a.push(r[i][1]));
        break;
      case "PtgList":
      /* TODO: PtgList -> PtgExtraList */
      case "PtgElfRadicalS":
      /* TODO: PtgElfRadicalS -> PtgExtraElf */
      case "PtgElfColS":
      /* TODO: PtgElfColS -> PtgExtraElf */
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return t = o - e.l, t !== 0 && a.push(Wt(e, t)), a;
}
function fg(e, t, r) {
  for (var n = e.l + t, o, a, i = []; n != e.l; )
    t = n - e.l, a = e[e.l], o = B0[a] || B0[ig[a]], (a === 24 || a === 25) && (o = (a === 24 ? sg : cg)[e[e.l + 1]]), !o || !o.f ? Wt(e, t) : i.push([o.n, o.f(e, t, r)]);
  return i;
}
function ug(e) {
  for (var t = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], o = [], a = 0; a < n.length; ++a) {
      var i = n[a];
      i ? i[0] === 2 ? o.push('"' + i[1].replace(/"/g, '""') + '"') : o.push(i[1]) : o.push("");
    }
    t.push(o.join(","));
  }
  return t.join(";");
}
var dg = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function hg(e, t) {
  if (!e && !(t && t.biff <= 5 && t.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Rs(e, t, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[t])) return e.SheetNames[t];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[t];
  if (r.biff < 8)
    return t > 1e4 && (t -= 65536), t < 0 && (t = -t), t == 0 ? "" : e.XTI[t - 1];
  if (!n) return "SH33TJSERR1";
  var o = "";
  if (r.biff > 8) switch (e[n[0]][0]) {
    case 357:
      return o = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? o : o + ":" + e.SheetNames[n[2]];
    case 358:
      return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
    /* 'BrtSupBookSrc' */
    /* falls through */
    default:
      return "SH33TJSSRC" + e[n[0]][0];
  }
  switch (e[n[0]][0][0]) {
    case 1025:
      return o = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? o : o + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(a) {
        return a.Name;
      }).join(";;");
    //return "SH33TJSERR8";
    default:
      return e[n[0]][0][3] ? (o = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? o : o + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function H0(e, t, r) {
  var n = Rs(e, t, r);
  return n == "#REF" ? n : hg(n, r);
}
function Br(e, t, r, n, o) {
  var a = o && o.biff || 8, i = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 } }
  ), c = [], f, l, u, d = 0, p = 0, g, v = "";
  if (!e[0] || !e[0][0]) return "";
  for (var h = -1, m = "", S = 0, F = e[0].length; S < F; ++S) {
    var _ = e[0][S];
    switch (_[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      /* [MS-XLS] 2.5.198.26 */
      case "PtgConcat":
      /* [MS-XLS] 2.5.198.43 */
      case "PtgDiv":
      /* [MS-XLS] 2.5.198.45 */
      case "PtgEq":
      /* [MS-XLS] 2.5.198.56 */
      case "PtgGe":
      /* [MS-XLS] 2.5.198.64 */
      case "PtgGt":
      /* [MS-XLS] 2.5.198.65 */
      case "PtgLe":
      /* [MS-XLS] 2.5.198.68 */
      case "PtgLt":
      /* [MS-XLS] 2.5.198.69 */
      case "PtgMul":
      /* [MS-XLS] 2.5.198.75 */
      case "PtgNe":
      /* [MS-XLS] 2.5.198.78 */
      case "PtgPower":
      /* [MS-XLS] 2.5.198.82 */
      case "PtgSub":
        if (f = c.pop(), l = c.pop(), h >= 0) {
          switch (e[0][h][1][0]) {
            case 0:
              m = Ze(" ", e[0][h][1][1]);
              break;
            case 1:
              m = Ze("\r", e[0][h][1][1]);
              break;
            default:
              if (m = "", o.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          l = l + m, h = -1;
        }
        c.push(l + dg[_[0]] + f);
        break;
      case "PtgIsect":
        f = c.pop(), l = c.pop(), c.push(l + " " + f);
        break;
      case "PtgUnion":
        f = c.pop(), l = c.pop(), c.push(l + "," + f);
        break;
      case "PtgRange":
        f = c.pop(), l = c.pop(), c.push(l + ":" + f);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        u = rn(_[1][1], i, o), c.push(nn(u, a));
        break;
      case "PtgRefN":
        u = r ? rn(_[1][1], r, o) : _[1][1], c.push(nn(u, a));
        break;
      case "PtgRef3d":
        d = /*::Number(*/
        _[1][1], u = rn(_[1][2], i, o), v = H0(n, d, o), c.push(v + "!" + nn(u, a));
        break;
      case "PtgFunc":
      /* [MS-XLS] 2.5.198.62 */
      case "PtgFuncVar":
        var N = _[1][0], I = _[1][1];
        N || (N = 0), N &= 127;
        var j = N == 0 ? [] : c.slice(-N);
        c.length -= N, I === "User" && (I = j.shift()), c.push(I + "(" + j.join(",") + ")");
        break;
      case "PtgBool":
        c.push(_[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        c.push(String(_[1]));
        break;
      case "PtgStr":
        c.push('"' + _[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        g = L0(_[1][1], r ? { s: r } : i, o), c.push(T1(g, o));
        break;
      case "PtgArea":
        g = L0(_[1][1], i, o), c.push(T1(g, o));
        break;
      case "PtgArea3d":
        d = /*::Number(*/
        _[1][1], g = _[1][2], v = H0(n, d, o), c.push(v + "!" + T1(g, o));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      /* [MS-XLS] 2.5.198.33 */
      case "PtgAttrSemi":
        break;
      case "PtgName":
        p = _[1][2];
        var A = (n.names || [])[p - 1] || (n[0] || [])[p], U = A ? A.Name : "SH33TJSNAME" + String(p);
        U && U.slice(0, 6) == "_xlfn." && !o.xlfn && (U = U.slice(6)), c.push(U);
        break;
      case "PtgNameX":
        var O = _[1][1];
        p = _[1][2];
        var G;
        if (o.biff <= 5)
          O < 0 && (O = -O), n[O] && (G = n[O][p]);
        else {
          var Y = "";
          if (((n[O] || [])[0] || [])[0] == 14849 || (((n[O] || [])[0] || [])[0] == 1025 ? n[O][p] && n[O][p].itab > 0 && (Y = n.SheetNames[n[O][p].itab - 1] + "!") : Y = n.SheetNames[p - 1] + "!"), n[O] && n[O][p]) Y += n[O][p].Name;
          else if (n[0] && n[0][p]) Y += n[0][p].Name;
          else {
            var W = (Rs(n, O, o) || "").split(";;");
            W[p - 1] ? Y = W[p - 1] : Y += "SH33TJSERRX";
          }
          c.push(Y);
          break;
        }
        G || (G = { Name: "SH33TJSERRY" }), c.push(G.Name);
        break;
      case "PtgParen":
        var K = "(", he = ")";
        if (h >= 0) {
          switch (m = "", e[0][h][1][0]) {
            // $FlowIgnore
            case 2:
              K = Ze(" ", e[0][h][1][1]) + K;
              break;
            // $FlowIgnore
            case 3:
              K = Ze("\r", e[0][h][1][1]) + K;
              break;
            // $FlowIgnore
            case 4:
              he = Ze(" ", e[0][h][1][1]) + he;
              break;
            // $FlowIgnore
            case 5:
              he = Ze("\r", e[0][h][1][1]) + he;
              break;
            default:
              if (o.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][h][1][0]);
          }
          h = -1;
        }
        c.push(K + c.pop() + he);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        u = { c: _[1][1], r: _[1][0] };
        var ae = { c: r.c, r: r.r };
        if (n.sharedf[De(u)]) {
          var ve = n.sharedf[De(u)];
          c.push(Br(ve, i, ae, n, o));
        } else {
          var ye = !1;
          for (f = 0; f != n.arrayf.length; ++f)
            if (l = n.arrayf[f], !(u.c < l[0].s.c || u.c > l[0].e.c) && !(u.r < l[0].s.r || u.r > l[0].e.r)) {
              c.push(Br(l[1], i, ae, n, o)), ye = !0;
              break;
            }
          ye || c.push(
            /*::String(*/
            _[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        c.push("{" + ug(
          /*::(*/
          _[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      /* [MS-XLS] 2.5.198.38 */
      case "PtgAttrSpaceSemi":
        h = S;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      /* [MS-XLS] 2.5.198.46 */
      case "PtgElfColS":
      /* [MS-XLS] 2.5.198.47 */
      case "PtgElfColSV":
      /* [MS-XLS] 2.5.198.48 */
      case "PtgElfColV":
      /* [MS-XLS] 2.5.198.49 */
      case "PtgElfLel":
      /* [MS-XLS] 2.5.198.50 */
      case "PtgElfRadical":
      /* [MS-XLS] 2.5.198.51 */
      case "PtgElfRadicalLel":
      /* [MS-XLS] 2.5.198.52 */
      case "PtgElfRadicalS":
      /* [MS-XLS] 2.5.198.53 */
      case "PtgElfRw":
      /* [MS-XLS] 2.5.198.54 */
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(_));
      default:
        throw new Error("Unrecognized Formula Token: " + String(_));
    }
    var ge = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (o.biff != 3 && h >= 0 && ge.indexOf(e[0][S][0]) == -1) {
      _ = e[0][h];
      var me = !0;
      switch (_[1][0]) {
        /* note: some bad XLSB files omit the PtgParen */
        case 4:
          me = !1;
        /* falls through */
        case 0:
          m = Ze(" ", _[1][1]);
          break;
        case 5:
          me = !1;
        /* falls through */
        case 1:
          m = Ze("\r", _[1][1]);
          break;
        default:
          if (m = "", o.WTF) throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
      }
      c.push((me ? m : "") + c.pop() + (me ? "" : m)), h = -1;
    }
  }
  if (c.length > 1 && o.WTF) throw new Error("bad formula stack");
  return c[0];
}
function pg(e) {
  if (e == null) {
    var t = z(8);
    return t.write_shift(1, 3), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 65535), t;
  } else if (typeof e == "number") return Cr(e);
  return Cr(0);
}
function gg(e, t, r, n, o) {
  var a = wr(t, r, o), i = pg(e.v), c = z(6), f = 33;
  c.write_shift(2, f), c.write_shift(4, 0);
  for (var l = z(e.bf.length), u = 0; u < e.bf.length; ++u) l[u] = e.bf[u];
  var d = at([a, i, c, l]);
  return d;
}
function g1(e, t, r) {
  var n = e.read_shift(4), o = fg(e, n, r), a = e.read_shift(4), i = a > 0 ? lg(e, a, o, r) : null;
  return [o, i];
}
var vg = g1, v1 = g1, xg = g1, mg = g1, Cg = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Ns = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, wg = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function kg(e) {
  var t = "of:=" + e.replace(So, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return t.replace(/;/g, "|").replace(/,/g, ";");
}
function Eg(e) {
  return e.replace(/\./, "!");
}
var on = typeof Map < "u";
function Ao(e, t, r) {
  var n = 0, o = e.length;
  if (r) {
    if (on ? r.has(t) : Object.prototype.hasOwnProperty.call(r, t)) {
      for (var a = on ? r.get(t) : r[t]; n < a.length; ++n)
        if (e[a[n]].t === t)
          return e.Count++, a[n];
    }
  } else for (; n < o; ++n)
    if (e[n].t === t)
      return e.Count++, n;
  return e[o] = { t }, e.Count++, e.Unique++, r && (on ? (r.has(t) || r.set(t, []), r.get(t).push(o)) : (Object.prototype.hasOwnProperty.call(r, t) || (r[t] = []), r[t].push(o))), o;
}
function x1(e, t) {
  var r = { min: e + 1, max: e + 1 }, n = -1;
  return t.MDW && (Yt = t.MDW), t.width != null ? r.customWidth = 1 : t.wpx != null ? n = e1(t.wpx) : t.wch != null && (n = t.wch), n > -1 ? (r.width = j1(n), r.customWidth = 1) : t.width != null && (r.width = t.width), t.hidden && (r.hidden = !0), t.level != null && (r.outlineLevel = r.level = t.level), r;
}
function Os(e, t) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function ur(e, t, r) {
  var n = r.revssf[t.z != null ? t.z : "General"], o = 60, a = e.length;
  if (n == null && r.ssf) {
    for (; o < 392; ++o) if (r.ssf[o] == null) {
      Ai(t.z, o), r.ssf[o] = t.z, r.revssf[t.z] = n = o;
      break;
    }
  }
  for (o = 0; o != a; ++o) if (e[o].numFmtId === n) return o;
  return e[a] = {
    numFmtId: n,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, a;
}
function Lg(e, t, r) {
  if (e && e["!ref"]) {
    var n = Ve(e["!ref"]);
    if (n.e.c < n.s.c || n.e.r < n.s.r) throw new Error("Bad range (" + r + "): " + e["!ref"]);
  }
}
function _g(e) {
  if (e.length === 0) return "";
  for (var t = '<mergeCells count="' + e.length + '">', r = 0; r != e.length; ++r) t += '<mergeCell ref="' + Xe(e[r]) + '"/>';
  return t + "</mergeCells>";
}
function Tg(e, t, r, n, o) {
  var a = !1, i = {}, c = null;
  if (n.bookType !== "xlsx" && t.vbaraw) {
    var f = t.SheetNames[r];
    try {
      t.Workbook && (f = t.Workbook.Sheets[r].CodeName || f);
    } catch {
    }
    a = !0, i.codeName = ln(Oe(f));
  }
  if (e && e["!outline"]) {
    var l = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (l.summaryBelow = 0), e["!outline"].left && (l.summaryRight = 0), c = (c || "") + ee("outlinePr", null, l);
  }
  !a && !c || (o[o.length] = ee("sheetPr", c, i));
}
var Sg = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], yg = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function Fg(e) {
  var t = { sheet: 1 };
  return Sg.forEach(function(r) {
    e[r] != null && e[r] && (t[r] = "1");
  }), yg.forEach(function(r) {
    e[r] != null && !e[r] && (t[r] = "0");
  }), e.password && (t.password = xs(e.password).toString(16).toUpperCase()), ee("sheetProtection", null, t);
}
function Ag(e) {
  return Os(e), ee("pageMargins", null, e);
}
function Mg(e, t) {
  for (var r = ["<cols>"], n, o = 0; o != t.length; ++o)
    (n = t[o]) && (r[r.length] = ee("col", null, x1(o, n)));
  return r[r.length] = "</cols>", r.join("");
}
function bg(e, t, r, n) {
  var o = typeof e.ref == "string" ? e.ref : Xe(e.ref);
  r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
  var a = r.Workbook.Names, i = At(o);
  i.s.r == i.e.r && (i.e.r = At(t["!ref"]).e.r, o = Xe(i));
  for (var c = 0; c < a.length; ++c) {
    var f = a[c];
    if (f.Name == "_xlnm._FilterDatabase" && f.Sheet == n) {
      f.Ref = "'" + r.SheetNames[n] + "'!" + o;
      break;
    }
  }
  return c == a.length && a.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + o }), ee("autoFilter", null, { ref: o });
}
function Rg(e, t, r, n) {
  var o = { workbookViewId: "0" };
  return (((n || {}).Workbook || {}).Views || [])[0] && (o.rightToLeft = n.Workbook.Views[0].RTL ? "1" : "0"), ee("sheetViews", ee("sheetView", null, o), {});
}
function Ng(e, t, r, n) {
  if (e.c && r["!comments"].push([t, e.c]), e.v === void 0 && typeof e.f != "string" || e.t === "z" && !e.f) return "";
  var o = "", a = e.t, i = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      o = e.v ? "1" : "0";
      break;
    case "n":
      o = "" + e.v;
      break;
    case "e":
      o = Tn[e.v];
      break;
    case "d":
      n && n.cellDates ? o = vt(e.v, -1).toISOString() : (e = Et(e), e.t = "n", o = "" + (e.v = kt(vt(e.v)))), typeof e.z > "u" && (e.z = ze[14]);
      break;
    default:
      o = e.v;
      break;
  }
  var c = it("v", Oe(o)), f = { r: t }, l = ur(n.cellXfs, e, n);
  switch (l !== 0 && (f.s = l), e.t) {
    case "n":
      break;
    case "d":
      f.t = "d";
      break;
    case "b":
      f.t = "b";
      break;
    case "e":
      f.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
      if (n && n.bookSST) {
        c = it("v", "" + Ao(n.Strings, e.v, n.revStrings)), f.t = "s";
        break;
      }
      f.t = "str";
      break;
  }
  if (e.t != a && (e.t = a, e.v = i), typeof e.f == "string" && e.f) {
    var u = e.F && e.F.slice(0, t.length) == t ? { t: "array", ref: e.F } : null;
    c = ee("f", Oe(e.f), u) + (e.v != null ? c : "");
  }
  return e.l && r["!links"].push([t, e.l]), e.D && (f.cm = 1), ee("c", c, f);
}
function Og(e, t, r, n) {
  var o = [], a = [], i = Ve(e["!ref"]), c = "", f, l = "", u = [], d = 0, p = 0, g = e["!rows"], v = Array.isArray(e), h = { r: l }, m, S = -1;
  for (p = i.s.c; p <= i.e.c; ++p) u[p] = ut(p);
  for (d = i.s.r; d <= i.e.r; ++d) {
    for (a = [], l = st(d), p = i.s.c; p <= i.e.c; ++p) {
      f = u[p] + l;
      var F = v ? (e[d] || [])[p] : e[f];
      F !== void 0 && (c = Ng(F, f, e, t)) != null && a.push(c);
    }
    (a.length > 0 || g && g[d]) && (h = { r: l }, g && g[d] && (m = g[d], m.hidden && (h.hidden = 1), S = -1, m.hpx ? S = t1(m.hpx) : m.hpt && (S = m.hpt), S > -1 && (h.ht = S, h.customHeight = 1), m.level && (h.outlineLevel = m.level)), o[o.length] = ee("row", a.join(""), h));
  }
  if (g) for (; d < g.length; ++d)
    g && g[d] && (h = { r: d + 1 }, m = g[d], m.hidden && (h.hidden = 1), S = -1, m.hpx ? S = t1(m.hpx) : m.hpt && (S = m.hpt), S > -1 && (h.ht = S, h.customHeight = 1), m.level && (h.outlineLevel = m.level), o[o.length] = ee("row", "", h));
  return o.join("");
}
function Ds(e, t, r, n) {
  var o = [qe, ee("worksheet", null, {
    xmlns: Ur[0],
    "xmlns:r": et.r
  })], a = r.SheetNames[e], i = 0, c = "", f = r.Sheets[a];
  f == null && (f = {});
  var l = f["!ref"] || "A1", u = Ve(l);
  if (u.e.c > 16383 || u.e.r > 1048575) {
    if (t.WTF) throw new Error("Range " + l + " exceeds format limit A1:XFD1048576");
    u.e.c = Math.min(u.e.c, 16383), u.e.r = Math.min(u.e.c, 1048575), l = Xe(u);
  }
  n || (n = {}), f["!comments"] = [];
  var d = [];
  Tg(f, r, e, t, o), o[o.length] = ee("dimension", null, { ref: l }), o[o.length] = Rg(f, t, e, r), t.sheetFormat && (o[o.length] = ee("sheetFormatPr", null, {
    defaultRowHeight: t.sheetFormat.defaultRowHeight || "16",
    baseColWidth: t.sheetFormat.baseColWidth || "10",
    outlineLevelRow: t.sheetFormat.outlineLevelRow || "7"
  })), f["!cols"] != null && f["!cols"].length > 0 && (o[o.length] = Mg(f, f["!cols"])), o[i = o.length] = "<sheetData/>", f["!links"] = [], f["!ref"] != null && (c = Og(f, t), c.length > 0 && (o[o.length] = c)), o.length > i + 1 && (o[o.length] = "</sheetData>", o[i] = o[i].replace("/>", ">")), f["!protect"] && (o[o.length] = Fg(f["!protect"])), f["!autofilter"] != null && (o[o.length] = bg(f["!autofilter"], f, r, e)), f["!merges"] != null && f["!merges"].length > 0 && (o[o.length] = _g(f["!merges"]));
  var p = -1, g, v = -1;
  return (
    /*::(*/
    f["!links"].length > 0 && (o[o.length] = "<hyperlinks>", f["!links"].forEach(function(h) {
      h[1].Target && (g = { ref: h[0] }, h[1].Target.charAt(0) != "#" && (v = Ne(n, -1, Oe(h[1].Target).replace(/#.*$/, ""), Me.HLINK), g["r:id"] = "rId" + v), (p = h[1].Target.indexOf("#")) > -1 && (g.location = Oe(h[1].Target.slice(p + 1))), h[1].Tooltip && (g.tooltip = Oe(h[1].Tooltip)), o[o.length] = ee("hyperlink", null, g));
    }), o[o.length] = "</hyperlinks>"), delete f["!links"], f["!margins"] != null && (o[o.length] = Ag(f["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && (o[o.length] = it("ignoredErrors", ee("ignoredError", null, { numberStoredAsText: 1, sqref: l }))), d.length > 0 && (v = Ne(n, -1, "../drawings/drawing" + (e + 1) + ".xml", Me.DRAW), o[o.length] = ee("drawing", null, { "r:id": "rId" + v }), f["!drawing"] = d), f["!comments"].length > 0 && (v = Ne(n, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Me.VML), o[o.length] = ee("legacyDrawing", null, { "r:id": "rId" + v }), f["!legacy"] = v), o.length > 1 && (o[o.length] = "</worksheet>", o[1] = o[1].replace("/>", ">")), o.join("")
  );
}
function Dg(e, t) {
  var r = {}, n = e.l + t;
  r.r = e.read_shift(4), e.l += 4;
  var o = e.read_shift(2);
  e.l += 1;
  var a = e.read_shift(1);
  return e.l = n, a & 7 && (r.level = a & 7), a & 16 && (r.hidden = !0), a & 32 && (r.hpt = o / 20), r;
}
function Ig(e, t, r) {
  var n = z(145), o = (r["!rows"] || [])[e] || {};
  n.write_shift(4, e), n.write_shift(4, 0);
  var a = 320;
  o.hpx ? a = t1(o.hpx) * 20 : o.hpt && (a = o.hpt * 20), n.write_shift(2, a), n.write_shift(1, 0);
  var i = 0;
  o.level && (i |= o.level), o.hidden && (i |= 16), (o.hpx || o.hpt) && (i |= 32), n.write_shift(1, i), n.write_shift(1, 0);
  var c = 0, f = n.l;
  n.l += 4;
  for (var l = { r: e, c: 0 }, u = 0; u < 16; ++u)
    if (!(t.s.c > u + 1 << 10 || t.e.c < u << 10)) {
      for (var d = -1, p = -1, g = u << 10; g < u + 1 << 10; ++g) {
        l.c = g;
        var v = Array.isArray(r) ? (r[l.r] || [])[l.c] : r[De(l)];
        v && (d < 0 && (d = g), p = g);
      }
      d < 0 || (++c, n.write_shift(4, d), n.write_shift(4, p));
    }
  var h = n.l;
  return n.l = f, n.write_shift(4, c), n.l = h, n.length > n.l ? n.slice(0, n.l) : n;
}
function Pg(e, t, r, n) {
  var o = Ig(n, r, t);
  (o.length > 17 || (t["!rows"] || [])[n]) && q(e, 0, o);
}
var Bg = Tr, Hg = jr;
function Vg() {
}
function Ug(e, t) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = qh(e), r;
}
function $g(e, t, r) {
  r == null && (r = z(84 + 4 * e.length));
  var n = 192;
  t && (t.above && (n &= -65), t.left && (n &= -129)), r.write_shift(1, n);
  for (var o = 1; o < 3; ++o) r.write_shift(1, 0);
  return qn({ auto: 1 }, r), r.write_shift(-4, -1), r.write_shift(-4, -1), Yi(e, r), r.slice(0, r.l);
}
function jg(e) {
  var t = Ot(e);
  return [t];
}
function Wg(e, t, r) {
  return r == null && (r = z(8)), Er(t, r);
}
function Zg(e) {
  var t = Lr(e);
  return [t];
}
function Gg(e, t, r) {
  return r == null && (r = z(4)), _r(t, r);
}
function zg(e) {
  var t = Ot(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function Kg(e, t, r) {
  return r == null && (r = z(9)), Er(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function Xg(e) {
  var t = Lr(e), r = e.read_shift(1);
  return [t, r, "b"];
}
function Yg(e, t, r) {
  return r == null && (r = z(5)), _r(t, r), r.write_shift(1, e.v ? 1 : 0), r;
}
function qg(e) {
  var t = Ot(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function Jg(e, t, r) {
  return r == null && (r = z(9)), Er(t, r), r.write_shift(1, e.v), r;
}
function Qg(e) {
  var t = Lr(e), r = e.read_shift(1);
  return [t, r, "e"];
}
function ev(e, t, r) {
  return r == null && (r = z(8)), _r(t, r), r.write_shift(1, e.v), r.write_shift(2, 0), r.write_shift(1, 0), r;
}
function tv(e) {
  var t = Ot(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function rv(e, t, r) {
  return r == null && (r = z(12)), Er(t, r), r.write_shift(4, t.v), r;
}
function nv(e) {
  var t = Lr(e), r = e.read_shift(4);
  return [t, r, "s"];
}
function ov(e, t, r) {
  return r == null && (r = z(8)), _r(t, r), r.write_shift(4, t.v), r;
}
function av(e) {
  var t = Ot(e), r = Wr(e);
  return [t, r, "n"];
}
function iv(e, t, r) {
  return r == null && (r = z(16)), Er(t, r), Cr(e.v, r), r;
}
function sv(e) {
  var t = Lr(e), r = Wr(e);
  return [t, r, "n"];
}
function cv(e, t, r) {
  return r == null && (r = z(12)), _r(t, r), Cr(e.v, r), r;
}
function lv(e) {
  var t = Ot(e), r = qi(e);
  return [t, r, "n"];
}
function fv(e, t, r) {
  return r == null && (r = z(12)), Er(t, r), Ji(e.v, r), r;
}
function uv(e) {
  var t = Lr(e), r = qi(e);
  return [t, r, "n"];
}
function dv(e, t, r) {
  return r == null && (r = z(8)), _r(t, r), Ji(e.v, r), r;
}
function hv(e) {
  var t = Ot(e), r = ko(e);
  return [t, r, "is"];
}
function pv(e) {
  var t = Ot(e), r = dt(e);
  return [t, r, "str"];
}
function gv(e, t, r) {
  return r == null && (r = z(12 + 4 * e.v.length)), Er(t, r), rt(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function vv(e) {
  var t = Lr(e), r = dt(e);
  return [t, r, "str"];
}
function xv(e, t, r) {
  return r == null && (r = z(8 + 4 * e.v.length)), _r(t, r), rt(e.v, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function mv(e, t, r) {
  var n = e.l + t, o = Ot(e);
  o.r = r["!row"];
  var a = e.read_shift(1), i = [o, a, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = v1(e, n - e.l, r);
    i[3] = Br(c, null, o, r.supbooks, r);
  } else e.l = n;
  return i;
}
function Cv(e, t, r) {
  var n = e.l + t, o = Ot(e);
  o.r = r["!row"];
  var a = e.read_shift(1), i = [o, a, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = v1(e, n - e.l, r);
    i[3] = Br(c, null, o, r.supbooks, r);
  } else e.l = n;
  return i;
}
function wv(e, t, r) {
  var n = e.l + t, o = Ot(e);
  o.r = r["!row"];
  var a = Wr(e), i = [o, a, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = v1(e, n - e.l, r);
    i[3] = Br(c, null, o, r.supbooks, r);
  } else e.l = n;
  return i;
}
function kv(e, t, r) {
  var n = e.l + t, o = Ot(e);
  o.r = r["!row"];
  var a = dt(e), i = [o, a, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = v1(e, n - e.l, r);
    i[3] = Br(c, null, o, r.supbooks, r);
  } else e.l = n;
  return i;
}
var Ev = Tr, Lv = jr;
function _v(e, t) {
  return t == null && (t = z(4)), t.write_shift(4, e), t;
}
function Tv(e, t) {
  var r = e.l + t, n = Tr(e), o = Eo(e), a = dt(e), i = dt(e), c = dt(e);
  e.l = r;
  var f = { rfx: n, relId: o, loc: a, display: c };
  return i && (f.Tooltip = i), f;
}
function Sv(e, t) {
  var r = z(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  jr({ s: tt(e[0]), e: tt(e[0]) }, r), Lo("rId" + t, r);
  var n = e[1].Target.indexOf("#"), o = n == -1 ? "" : e[1].Target.slice(n + 1);
  return rt(o || "", r), rt(e[1].Tooltip || "", r), rt("", r), r.slice(0, r.l);
}
function yv() {
}
function Fv(e, t, r) {
  var n = e.l + t, o = Qi(e), a = e.read_shift(1), i = [o];
  if (i[2] = a, r.cellFormula) {
    var c = vg(e, n - e.l, r);
    i[1] = c;
  } else e.l = n;
  return i;
}
function Av(e, t, r) {
  var n = e.l + t, o = Tr(e), a = [o];
  if (r.cellFormula) {
    var i = mg(e, n - e.l, r);
    a[1] = i, e.l = n;
  } else e.l = n;
  return a;
}
function Mv(e, t, r) {
  r == null && (r = z(18));
  var n = x1(e, t);
  r.write_shift(-4, e), r.write_shift(-4, e), r.write_shift(4, (n.width || 10) * 256), r.write_shift(
    4,
    0
    /*ixfe*/
  );
  var o = 0;
  return t.hidden && (o |= 1), typeof n.width == "number" && (o |= 2), t.level && (o |= t.level << 8), r.write_shift(2, o), r;
}
var Is = ["left", "right", "top", "bottom", "header", "footer"];
function bv(e) {
  var t = {};
  return Is.forEach(function(r) {
    t[r] = Wr(e);
  }), t;
}
function Rv(e, t) {
  return t == null && (t = z(48)), Os(e), Is.forEach(function(r) {
    Cr(e[r], t);
  }), t;
}
function Nv(e) {
  var t = e.read_shift(2);
  return e.l += 28, { RTL: t & 32 };
}
function Ov(e, t, r) {
  r == null && (r = z(30));
  var n = 924;
  return (((t || {}).Views || [])[0] || {}).RTL && (n |= 32), r.write_shift(2, n), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 100), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(4, 0), r;
}
function Dv(e) {
  var t = z(24);
  return t.write_shift(4, 4), t.write_shift(4, 1), jr(e, t), t;
}
function Iv(e, t) {
  return t == null && (t = z(66)), t.write_shift(2, e.password ? xs(e.password) : 0), t.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(r) {
    r[1] ? t.write_shift(4, e[r[0]] != null && !e[r[0]] ? 1 : 0) : t.write_shift(4, e[r[0]] != null && e[r[0]] ? 0 : 1);
  }), t;
}
function Pv() {
}
function Bv() {
}
function Hv(e, t, r, n, o, a, i) {
  if (t.v === void 0) return !1;
  var c = "";
  switch (t.t) {
    case "b":
      c = t.v ? "1" : "0";
      break;
    case "d":
      t = Et(t), t.z = t.z || ze[14], t.v = kt(vt(t.v)), t.t = "n";
      break;
    /* falls through */
    case "n":
    case "e":
      c = "" + t.v;
      break;
    default:
      c = t.v;
      break;
  }
  var f = { r, c: n };
  switch (f.s = ur(o.cellXfs, t, o), t.l && a["!links"].push([De(f), t.l]), t.c && a["!comments"].push([De(f), t.c]), t.t) {
    case "s":
    case "str":
      return o.bookSST ? (c = Ao(o.Strings, t.v, o.revStrings), f.t = "s", f.v = c, i ? q(e, 18, ov(t, f)) : q(e, 7, rv(t, f))) : (f.t = "str", i ? q(e, 17, xv(t, f)) : q(e, 6, gv(t, f))), !0;
    case "n":
      return t.v == (t.v | 0) && t.v > -1e3 && t.v < 1e3 ? i ? q(e, 13, dv(t, f)) : q(e, 2, fv(t, f)) : i ? q(e, 16, cv(t, f)) : q(e, 5, iv(t, f)), !0;
    case "b":
      return f.t = "b", i ? q(e, 15, Yg(t, f)) : q(e, 4, Kg(t, f)), !0;
    case "e":
      return f.t = "e", i ? q(e, 14, ev(t, f)) : q(e, 3, Jg(t, f)), !0;
  }
  return i ? q(e, 12, Gg(t, f)) : q(e, 1, Wg(t, f)), !0;
}
function Vv(e, t, r, n) {
  var o = Ve(t["!ref"] || "A1"), a, i = "", c = [];
  q(
    e,
    145
    /* BrtBeginSheetData */
  );
  var f = Array.isArray(t), l = o.e.r;
  t["!rows"] && (l = Math.max(o.e.r, t["!rows"].length - 1));
  for (var u = o.s.r; u <= l; ++u) {
    i = st(u), Pg(e, t, o, u);
    var d = !1;
    if (u <= o.e.r) for (var p = o.s.c; p <= o.e.c; ++p) {
      u === o.s.r && (c[p] = ut(p)), a = c[p] + i;
      var g = f ? (t[u] || [])[p] : t[a];
      if (!g) {
        d = !1;
        continue;
      }
      d = Hv(e, g, u, p, n, t, d);
    }
  }
  q(
    e,
    146
    /* BrtEndSheetData */
  );
}
function Uv(e, t) {
  !t || !t["!merges"] || (q(e, 177, _v(t["!merges"].length)), t["!merges"].forEach(function(r) {
    q(e, 176, Lv(r));
  }), q(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function $v(e, t) {
  !t || !t["!cols"] || (q(
    e,
    390
    /* BrtBeginColInfos */
  ), t["!cols"].forEach(function(r, n) {
    r && q(e, 60, Mv(n, r));
  }), q(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function jv(e, t) {
  !t || !t["!ref"] || (q(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), q(e, 649, Dv(Ve(t["!ref"]))), q(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function Wv(e, t, r) {
  t["!links"].forEach(function(n) {
    if (n[1].Target) {
      var o = Ne(r, -1, n[1].Target.replace(/#.*$/, ""), Me.HLINK);
      q(e, 494, Sv(n, o));
    }
  }), delete t["!links"];
}
function Zv(e, t, r, n) {
  if (t["!comments"].length > 0) {
    var o = Ne(n, -1, "../drawings/vmlDrawing" + (r + 1) + ".vml", Me.VML);
    q(e, 551, Lo("rId" + o)), t["!legacy"] = o;
  }
}
function Gv(e, t, r, n) {
  if (t["!autofilter"]) {
    var o = t["!autofilter"], a = typeof o.ref == "string" ? o.ref : Xe(o.ref);
    r.Workbook || (r.Workbook = { Sheets: [] }), r.Workbook.Names || (r.Workbook.Names = []);
    var i = r.Workbook.Names, c = At(a);
    c.s.r == c.e.r && (c.e.r = At(t["!ref"]).e.r, a = Xe(c));
    for (var f = 0; f < i.length; ++f) {
      var l = i[f];
      if (l.Name == "_xlnm._FilterDatabase" && l.Sheet == n) {
        l.Ref = "'" + r.SheetNames[n] + "'!" + a;
        break;
      }
    }
    f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: "'" + r.SheetNames[n] + "'!" + a }), q(e, 161, jr(Ve(a))), q(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function zv(e, t, r) {
  q(
    e,
    133
    /* BrtBeginWsViews */
  ), q(e, 137, Ov(t, r)), q(
    e,
    138
    /* BrtEndWsView */
  ), q(
    e,
    134
    /* BrtEndWsViews */
  );
}
function Kv(e, t) {
  t["!protect"] && q(e, 535, Iv(t["!protect"]));
}
function Xv(e, t, r, n) {
  var o = mt(), a = r.SheetNames[e], i = r.Sheets[a] || {}, c = a;
  try {
    r && r.Workbook && (c = r.Workbook.Sheets[e].CodeName || c);
  } catch {
  }
  var f = Ve(i["!ref"] || "A1");
  if (f.e.c > 16383 || f.e.r > 1048575) {
    if (t.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    f.e.c = Math.min(f.e.c, 16383), f.e.r = Math.min(f.e.c, 1048575);
  }
  return i["!links"] = [], i["!comments"] = [], q(
    o,
    129
    /* BrtBeginSheet */
  ), (r.vbaraw || i["!outline"]) && q(o, 147, $g(c, i["!outline"])), q(o, 148, Hg(f)), zv(o, i, r.Workbook), $v(o, i), Vv(o, i, e, t), Kv(o, i), Gv(o, i, r, e), Uv(o, i), Wv(o, i, n), i["!margins"] && q(o, 476, Rv(i["!margins"])), (!t || t.ignoreEC || t.ignoreEC == null) && jv(o, i), Zv(o, i, e, n), q(
    o,
    130
    /* BrtEndSheet */
  ), o.end();
}
function Yv(e, t) {
  e.l += 10;
  var r = dt(e);
  return { name: r };
}
var qv = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
];
function Jv(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Ah(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var Qv = /* @__PURE__ */ "][*?/\\".split("");
function Ps(e, t) {
  if (e.length > 31)
    throw new Error("Sheet names cannot exceed 31 chars");
  var r = !0;
  return Qv.forEach(function(n) {
    if (e.indexOf(n) != -1)
      throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
  }), r;
}
function ex(e, t, r) {
  e.forEach(function(n, o) {
    Ps(n);
    for (var a = 0; a < o; ++a) if (n == e[a]) throw new Error("Duplicate Sheet Name: " + n);
    if (r) {
      var i = t && t[o] && t[o].CodeName || n;
      if (i.charCodeAt(0) == 95 && i.length > 22) throw new Error("Bad Code Name: Worksheet" + i);
    }
  });
}
function tx(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var t = e.Workbook && e.Workbook.Sheets || [];
  ex(e.SheetNames, t, !!e.vbaraw);
  for (var r = 0; r < e.SheetNames.length; ++r) Lg(e.Sheets[e.SheetNames[r]], e.SheetNames[r], r);
}
function Bs(e) {
  var t = [qe];
  t[t.length] = ee("workbook", null, {
    xmlns: Ur[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": et.r
  });
  var r = e.Workbook && (e.Workbook.Names || []).length > 0, n = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (qv.forEach(function(c) {
    e.Workbook.WBProps[c[0]] != null && e.Workbook.WBProps[c[0]] != c[1] && (n[c[0]] = e.Workbook.WBProps[c[0]]);
  }), e.Workbook.WBProps.CodeName && (n.codeName = e.Workbook.WBProps.CodeName, delete n.CodeName)), t[t.length] = ee("workbookPr", null, n);
  var o = e.Workbook && e.Workbook.Sheets || [], a = 0;
  if (o && o[0] && o[0].Hidden) {
    for (t[t.length] = "<bookViews>", a = 0; a != e.SheetNames.length && !(!o[a] || !o[a].Hidden); ++a)
      ;
    a == e.SheetNames.length && (a = 0), t[t.length] = '<workbookView firstSheet="' + a + '" activeTab="' + a + '"/>', t[t.length] = "</bookViews>";
  }
  for (t[t.length] = "<sheets>", a = 0; a != e.SheetNames.length; ++a) {
    var i = { name: Oe(e.SheetNames[a].slice(0, 31)) };
    if (i.sheetId = "" + (a + 1), i["r:id"] = "rId" + (a + 1), o[a]) switch (o[a].Hidden) {
      case 1:
        i.state = "hidden";
        break;
      case 2:
        i.state = "veryHidden";
        break;
    }
    t[t.length] = ee("sheet", null, i);
  }
  return t[t.length] = "</sheets>", r && (t[t.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(c) {
    var f = { name: c.Name };
    c.Comment && (f.comment = c.Comment), c.Sheet != null && (f.localSheetId = "" + c.Sheet), c.Hidden && (f.hidden = "1"), c.Ref && (t[t.length] = ee("definedName", Oe(c.Ref), f));
  }), t[t.length] = "</definedNames>"), t.length > 2 && (t[t.length] = "</workbook>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function rx(e, t) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = $1(e), r.name = dt(e), r;
}
function nx(e, t) {
  return t || (t = z(127)), t.write_shift(4, e.Hidden), t.write_shift(4, e.iTabID), Lo(e.strRelID, t), rt(e.name.slice(0, 31), t), t.length > t.l ? t.slice(0, t.l) : t;
}
function ox(e, t) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var o = t > 8 ? dt(e) : "";
  return o.length > 0 && (r.CodeName = o), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function ax(e, t) {
  t || (t = z(72));
  var r = 0;
  return e && e.filterPrivacy && (r |= 8), t.write_shift(4, r), t.write_shift(4, 0), Yi(e && e.CodeName || "ThisWorkbook", t), t.slice(0, t.l);
}
function ix(e, t, r) {
  var n = e.l + t;
  e.l += 4, e.l += 1;
  var o = e.read_shift(4), a = Jh(e), i = xg(e, 0, r), c = Eo(e);
  e.l = n;
  var f = { Name: a, Ptg: i };
  return o < 268435455 && (f.Sheet = o), c && (f.Comment = c), f;
}
function sx(e, t) {
  q(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var r = 0; r != t.SheetNames.length; ++r) {
    var n = t.Workbook && t.Workbook.Sheets && t.Workbook.Sheets[r] && t.Workbook.Sheets[r].Hidden || 0, o = { Hidden: n, iTabID: r + 1, strRelID: "rId" + (r + 1), name: t.SheetNames[r] };
    q(e, 156, nx(o));
  }
  q(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function cx(e, t) {
  t || (t = z(127));
  for (var r = 0; r != 4; ++r) t.write_shift(4, 0);
  return rt("SheetJS", t), rt(jn.version, t), rt(jn.version, t), rt("7262", t), t.length > t.l ? t.slice(0, t.l) : t;
}
function lx(e, t) {
  t || (t = z(29)), t.write_shift(-4, 0), t.write_shift(-4, 460), t.write_shift(4, 28800), t.write_shift(4, 17600), t.write_shift(4, 500), t.write_shift(4, e), t.write_shift(4, e);
  var r = 120;
  return t.write_shift(1, r), t.length > t.l ? t.slice(0, t.l) : t;
}
function fx(e, t) {
  if (!(!t.Workbook || !t.Workbook.Sheets)) {
    for (var r = t.Workbook.Sheets, n = 0, o = -1, a = -1; n < r.length; ++n)
      !r[n] || !r[n].Hidden && o == -1 ? o = n : r[n].Hidden == 1 && a == -1 && (a = n);
    a > o || (q(
      e,
      135
      /* BrtBeginBookViews */
    ), q(e, 158, lx(o)), q(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function ux(e, t) {
  var r = mt();
  return q(
    r,
    131
    /* BrtBeginBook */
  ), q(r, 128, cx()), q(r, 153, ax(e.Workbook && e.Workbook.WBProps || null)), fx(r, e), sx(r, e), q(
    r,
    132
    /* BrtEndBook */
  ), r.end();
}
function dx(e, t, r) {
  return (t.slice(-4) === ".bin" ? ux : Bs)(e);
}
function hx(e, t, r, n, o) {
  return (t.slice(-4) === ".bin" ? Xv : Ds)(e, r, n, o);
}
function px(e, t, r) {
  return (t.slice(-4) === ".bin" ? R7 : ws)(e, r);
}
function gx(e, t, r) {
  return (t.slice(-4) === ".bin" ? a7 : vs)(e, r);
}
function vx(e, t, r) {
  return (t.slice(-4) === ".bin" ? K7 : Ts)(e);
}
function xx(e) {
  return (e.slice(-4) === ".bin" ? V7 : Ls)();
}
function mx(e, t) {
  var r = [];
  return e.Props && r.push(p8(e.Props, t)), e.Custprops && r.push(g8(e.Props, e.Custprops)), r.join("");
}
function Cx() {
  return "";
}
function wx(e, t) {
  var r = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return t.cellXfs.forEach(function(n, o) {
    var a = [];
    a.push(ee("NumberFormat", null, { "ss:Format": Oe(ze[n.numFmtId]) }));
    var i = (
      /*::(*/
      { "ss:ID": "s" + (21 + o) }
    );
    r.push(ee("Style", a.join(""), i));
  }), ee("Styles", r.join(""));
}
function Hs(e) {
  return ee("NamedRange", null, { "ss:Name": e.Name, "ss:RefersTo": "=" + yo(e.Ref, { r: 0, c: 0 }) });
}
function kx(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var t = e.Workbook.Names, r = [], n = 0; n < t.length; ++n) {
    var o = t[n];
    o.Sheet == null && (o.Name.match(/^_xlfn\./) || r.push(Hs(o)));
  }
  return ee("Names", r.join(""));
}
function Ex(e, t, r, n) {
  if (!e || !((n || {}).Workbook || {}).Names) return "";
  for (var o = n.Workbook.Names, a = [], i = 0; i < o.length; ++i) {
    var c = o[i];
    c.Sheet == r && (c.Name.match(/^_xlfn\./) || a.push(Hs(c)));
  }
  return a.join("");
}
function Lx(e, t, r, n) {
  if (!e) return "";
  var o = [];
  if (e["!margins"] && (o.push("<PageSetup>"), e["!margins"].header && o.push(ee("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && o.push(ee("Footer", null, { "x:Margin": e["!margins"].footer })), o.push(ee("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), o.push("</PageSetup>")), n && n.Workbook && n.Workbook.Sheets && n.Workbook.Sheets[r])
    if (n.Workbook.Sheets[r].Hidden) o.push(ee("Visible", n.Workbook.Sheets[r].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var a = 0; a < r && !(n.Workbook.Sheets[a] && !n.Workbook.Sheets[a].Hidden); ++a) ;
      a == r && o.push("<Selected/>");
    }
  return ((((n || {}).Workbook || {}).Views || [])[0] || {}).RTL && o.push("<DisplayRightToLeft/>"), e["!protect"] && (o.push(it("ProtectContents", "True")), e["!protect"].objects && o.push(it("ProtectObjects", "True")), e["!protect"].scenarios && o.push(it("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? o.push(it("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && o.push(it("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(i) {
    e["!protect"][i[0]] && o.push("<" + i[1] + "/>");
  })), o.length == 0 ? "" : ee("WorksheetOptions", o.join(""), { xmlns: Tt.x });
}
function _x(e) {
  return e.map(function(t) {
    var r = Fh(t.t || ""), n = ee("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
    return ee("Comment", n, { "ss:Author": t.a });
  }).join("");
}
function Tx(e, t, r, n, o, a, i) {
  if (!e || e.v == null && e.f == null) return "";
  var c = {};
  if (e.f && (c["ss:Formula"] = "=" + Oe(yo(e.f, i))), e.F && e.F.slice(0, t.length) == t) {
    var f = tt(e.F.slice(t.length + 1));
    c["ss:ArrayRange"] = "RC:R" + (f.r == i.r ? "" : "[" + (f.r - i.r) + "]") + "C" + (f.c == i.c ? "" : "[" + (f.c - i.c) + "]");
  }
  if (e.l && e.l.Target && (c["ss:HRef"] = Oe(e.l.Target), e.l.Tooltip && (c["x:HRefScreenTip"] = Oe(e.l.Tooltip))), r["!merges"])
    for (var l = r["!merges"], u = 0; u != l.length; ++u)
      l[u].s.c != i.c || l[u].s.r != i.r || (l[u].e.c > l[u].s.c && (c["ss:MergeAcross"] = l[u].e.c - l[u].s.c), l[u].e.r > l[u].s.r && (c["ss:MergeDown"] = l[u].e.r - l[u].s.r));
  var d = "", p = "";
  switch (e.t) {
    case "z":
      if (!n.sheetStubs) return "";
      break;
    case "n":
      d = "Number", p = String(e.v);
      break;
    case "b":
      d = "Boolean", p = e.v ? "1" : "0";
      break;
    case "e":
      d = "Error", p = Tn[e.v];
      break;
    case "d":
      d = "DateTime", p = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || ze[14]);
      break;
    case "s":
      d = "String", p = yh(e.v || "");
      break;
  }
  var g = ur(n.cellXfs, e, n);
  c["ss:StyleID"] = "s" + (21 + g), c["ss:Index"] = i.c + 1;
  var v = e.v != null ? p : "", h = e.t == "z" ? "" : '<Data ss:Type="' + d + '">' + v + "</Data>";
  return (e.c || []).length > 0 && (h += _x(e.c)), ee("Cell", h, c);
}
function Sx(e, t) {
  var r = '<Row ss:Index="' + (e + 1) + '"';
  return t && (t.hpt && !t.hpx && (t.hpx = Cs(t.hpt)), t.hpx && (r += ' ss:AutoFitHeight="0" ss:Height="' + t.hpx + '"'), t.hidden && (r += ' ss:Hidden="1"')), r + ">";
}
function yx(e, t, r, n) {
  if (!e["!ref"]) return "";
  var o = Ve(e["!ref"]), a = e["!merges"] || [], i = 0, c = [];
  e["!cols"] && e["!cols"].forEach(function(m, S) {
    To(m);
    var F = !!m.width, _ = x1(S, m), N = { "ss:Index": S + 1 };
    F && (N["ss:Width"] = Qn(_.width)), m.hidden && (N["ss:Hidden"] = "1"), c.push(ee("Column", null, N));
  });
  for (var f = Array.isArray(e), l = o.s.r; l <= o.e.r; ++l) {
    for (var u = [Sx(l, (e["!rows"] || [])[l])], d = o.s.c; d <= o.e.c; ++d) {
      var p = !1;
      for (i = 0; i != a.length; ++i)
        if (!(a[i].s.c > d) && !(a[i].s.r > l) && !(a[i].e.c < d) && !(a[i].e.r < l)) {
          (a[i].s.c != d || a[i].s.r != l) && (p = !0);
          break;
        }
      if (!p) {
        var g = { r: l, c: d }, v = De(g), h = f ? (e[l] || [])[d] : e[v];
        u.push(Tx(h, v, e, t, r, n, g));
      }
    }
    u.push("</Row>"), u.length > 2 && c.push(u.join(""));
  }
  return c.join("");
}
function Fx(e, t, r) {
  var n = [], o = r.SheetNames[e], a = r.Sheets[o], i = a ? Ex(a, t, e, r) : "";
  return i.length > 0 && n.push("<Names>" + i + "</Names>"), i = a ? yx(a, t, e, r) : "", i.length > 0 && n.push("<Table>" + i + "</Table>"), n.push(Lx(a, t, e, r)), n.join("");
}
function Ax(e, t) {
  t || (t = {}), e.SSF || (e.SSF = Et(ze)), e.SSF && (d1(), u1(e.SSF), t.revssf = h1(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF, t.cellXfs = [], ur(t.cellXfs, {}, { revssf: { General: 0 } }));
  var r = [];
  r.push(mx(e, t)), r.push(Cx()), r.push(""), r.push("");
  for (var n = 0; n < e.SheetNames.length; ++n)
    r.push(ee("Worksheet", Fx(n, t, e), { "ss:Name": Oe(e.SheetNames[n]) }));
  return r[2] = wx(e, t), r[3] = kx(e), qe + ee("Workbook", r.join(""), {
    xmlns: Tt.ss,
    "xmlns:o": Tt.o,
    "xmlns:x": Tt.x,
    "xmlns:ss": Tt.ss,
    "xmlns:dt": Tt.dt,
    "xmlns:html": Tt.html
  });
}
var F1 = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Mx(e, t) {
  var r = [], n = [], o = [], a = 0, i, c = d0(T0, "n"), f = d0(S0, "n");
  if (e.Props)
    for (i = ct(e.Props), a = 0; a < i.length; ++a) (Object.prototype.hasOwnProperty.call(c, i[a]) ? r : Object.prototype.hasOwnProperty.call(f, i[a]) ? n : o).push([i[a], e.Props[i[a]]]);
  if (e.Custprops)
    for (i = ct(e.Custprops), a = 0; a < i.length; ++a) Object.prototype.hasOwnProperty.call(e.Props || {}, i[a]) || (Object.prototype.hasOwnProperty.call(c, i[a]) ? r : Object.prototype.hasOwnProperty.call(f, i[a]) ? n : o).push([i[a], e.Custprops[i[a]]]);
  var l = [];
  for (a = 0; a < o.length; ++a)
    ls.indexOf(o[a][0]) > -1 || is.indexOf(o[a][0]) > -1 || o[a][1] != null && l.push(o[a]);
  n.length && Ie.utils.cfb_add(t, "/SummaryInformation", b0(n, F1.SI, f, S0)), (r.length || l.length) && Ie.utils.cfb_add(t, "/DocumentSummaryInformation", b0(r, F1.DSI, c, T0, l.length ? l : null, F1.UDI));
}
function bx(e, t) {
  var r = t || {}, n = Ie.utils.cfb_new({ root: "R" }), o = "/Workbook";
  switch (r.bookType || "xls") {
    case "xls":
      r.bookType = "biff8";
    /* falls through */
    case "xla":
      r.bookType || (r.bookType = "xla");
    /* falls through */
    case "biff8":
      o = "/Workbook", r.biff = 8;
      break;
    case "biff5":
      o = "/Book", r.biff = 5;
      break;
    default:
      throw new Error("invalid type " + r.bookType + " for XLS CFB");
  }
  return Ie.utils.cfb_add(n, o, Vs(e, r)), r.biff == 8 && (e.Props || e.Custprops) && Mx(e, n), r.biff == 8 && e.vbaraw && X7(n, Ie.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), n;
}
var Rx = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: Dg
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: jg
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: lv
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: qg
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: zg
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: av
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: pv
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: tv
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: kv
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: wv
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: mv
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: Cv
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: Zg
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: uv
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: Qg
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: Xg
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: sv
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: vv
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: nv
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: ko
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: ix
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: p7
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: d7
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: x7
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: C7
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: m7
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Zh
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: D7
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: G8
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: hv
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: U7
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: Pv
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: Wt,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Nv
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: Ug
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: Bg,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: yv
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: ox
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: rx
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: r7
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: Tr
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: Ev
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: N7
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: B7,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: $1
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: V8
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: Fv
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: Av
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: bv
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: Vg
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Tv
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: $1
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: G7
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: W7
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: Xh
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: Yv
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: Bv
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
};
function te(e, t, r, n) {
  var o = t;
  if (!isNaN(o)) {
    var a = n || (r || []).length || 0, i = e.next(4);
    i.write_shift(2, o), i.write_shift(2, a), /*:: len != null &&*/
    a > 0 && mo(r) && e.push(r);
  }
}
function Nx(e, t, r, n) {
  var o = (r || []).length || 0;
  if (o <= 8224) return te(e, t, r, o);
  var a = t;
  if (!isNaN(a)) {
    for (var i = r.parts || [], c = 0, f = 0, l = 0; l + (i[c] || 8224) <= 8224; )
      l += i[c] || 8224, c++;
    var u = e.next(4);
    for (u.write_shift(2, a), u.write_shift(2, l), e.push(r.slice(f, f + l)), f += l; f < o; ) {
      for (u = e.next(4), u.write_shift(2, 60), l = 0; l + (i[c] || 8224) <= 8224; )
        l += i[c] || 8224, c++;
      u.write_shift(2, l), e.push(r.slice(f, f + l)), f += l;
    }
  }
}
function yn(e, t, r) {
  return e || (e = z(7)), e.write_shift(2, t), e.write_shift(2, r), e.write_shift(2, 0), e.write_shift(1, 0), e;
}
function Ox(e, t, r, n) {
  var o = z(9);
  return yn(o, e, t), us(r, n || "b", o), o;
}
function Dx(e, t, r) {
  var n = z(8 + 2 * r.length);
  return yn(n, e, t), n.write_shift(1, r.length), n.write_shift(r.length, r, "sbcs"), n.l < n.length ? n.slice(0, n.l) : n;
}
function Ix(e, t, r, n) {
  if (t.v != null) switch (t.t) {
    case "d":
    case "n":
      var o = t.t == "d" ? kt(vt(t.v)) : t.v;
      o == (o | 0) && o >= 0 && o < 65536 ? te(e, 2, Y8(r, n, o)) : te(e, 3, X8(r, n, o));
      return;
    case "b":
    case "e":
      te(e, 5, Ox(r, n, t.v, t.t));
      return;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      te(e, 4, Dx(r, n, (t.v || "").slice(0, 255)));
      return;
  }
  te(e, 1, yn(null, r, n));
}
function Px(e, t, r, n) {
  var o = Array.isArray(t), a = Ve(t["!ref"] || "A1"), i, c = "", f = [];
  if (a.e.c > 255 || a.e.r > 16383) {
    if (n.WTF) throw new Error("Range " + (t["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    a.e.c = Math.min(a.e.c, 255), a.e.r = Math.min(a.e.c, 16383), i = Xe(a);
  }
  for (var l = a.s.r; l <= a.e.r; ++l) {
    c = st(l);
    for (var u = a.s.c; u <= a.e.c; ++u) {
      l === a.s.r && (f[u] = ut(u)), i = f[u] + c;
      var d = o ? (t[l] || [])[u] : t[i];
      d && Ix(e, d, l, u);
    }
  }
}
function Bx(e, t) {
  for (var r = t || {}, n = mt(), o = 0, a = 0; a < e.SheetNames.length; ++a) e.SheetNames[a] == r.sheet && (o = a);
  if (o == 0 && r.sheet && e.SheetNames[0] != r.sheet) throw new Error("Sheet not found: " + r.sheet);
  return te(n, r.biff == 4 ? 1033 : r.biff == 3 ? 521 : 9, _o(e, 16, r)), Px(n, e.Sheets[e.SheetNames[o]], o, r), te(n, 10), n.end();
}
function Hx(e, t, r) {
  te(e, 49, R8({
    sz: 12,
    name: "Arial"
  }, r));
}
function Vx(e, t, r) {
  t && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(n) {
    for (var o = n[0]; o <= n[1]; ++o) t[o] != null && te(e, 1054, D8(o, t[o], r));
  });
}
function Ux(e, t) {
  var r = z(19);
  r.write_shift(4, 2151), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 1), r.write_shift(4, 0), te(e, 2151, r), r = z(39), r.write_shift(4, 2152), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(2, 3), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(2, 1), r.write_shift(4, 4), r.write_shift(2, 0), ps(Ve(t["!ref"] || "A1"), r), r.write_shift(4, 4), te(e, 2152, r);
}
function $x(e, t) {
  for (var r = 0; r < 16; ++r) te(e, 224, N0({ numFmtId: 0, style: !0 }, 0, t));
  t.cellXfs.forEach(function(n) {
    te(e, 224, N0(n, 0, t));
  });
}
function jx(e, t) {
  for (var r = 0; r < t["!links"].length; ++r) {
    var n = t["!links"][r];
    te(e, 440, j8(n)), n[1].Tooltip && te(e, 2048, W8(n));
  }
  delete t["!links"];
}
function Wx(e, t) {
  if (t) {
    var r = 0;
    t.forEach(function(n, o) {
      ++r <= 256 && n && te(e, 125, z8(x1(o, n), o));
    });
  }
}
function Zx(e, t, r, n, o) {
  var a = 16 + ur(o.cellXfs, t, o);
  if (t.v == null && !t.bf) {
    te(e, 513, wr(r, n, a));
    return;
  }
  if (t.bf) te(e, 6, gg(t, r, n, o, a));
  else switch (t.t) {
    case "d":
    case "n":
      var i = t.t == "d" ? kt(vt(t.v)) : t.v;
      te(e, 515, H8(r, n, i, a));
      break;
    case "b":
    case "e":
      te(e, 517, B8(r, n, t.v, a, o, t.t));
      break;
    /* TODO: codepage, sst */
    case "s":
    case "str":
      if (o.bookSST) {
        var c = Ao(o.Strings, t.v, o.revStrings);
        te(e, 253, N8(r, n, c, a));
      } else te(e, 516, O8(r, n, (t.v || "").slice(0, 255), a, o));
      break;
    default:
      te(e, 513, wr(r, n, a));
  }
}
function Gx(e, t, r) {
  var n = mt(), o = r.SheetNames[e], a = r.Sheets[o] || {}, i = (r || {}).Workbook || {}, c = (i.Sheets || [])[e] || {}, f = Array.isArray(a), l = t.biff == 8, u, d = "", p = [], g = Ve(a["!ref"] || "A1"), v = l ? 65536 : 16384;
  if (g.e.c > 255 || g.e.r >= v) {
    if (t.WTF) throw new Error("Range " + (a["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    g.e.c = Math.min(g.e.c, 255), g.e.r = Math.min(g.e.c, v - 1);
  }
  te(n, 2057, _o(r, 16, t)), te(n, 13, Rt(1)), te(n, 12, Rt(100)), te(n, 15, gt(!0)), te(n, 17, gt(!1)), te(n, 16, Cr(1e-3)), te(n, 95, gt(!0)), te(n, 42, gt(!1)), te(n, 43, gt(!1)), te(n, 130, Rt(1)), te(n, 128, P8()), te(n, 131, gt(!1)), te(n, 132, gt(!1)), l && Wx(n, a["!cols"]), te(n, 512, I8(g, t)), l && (a["!links"] = []);
  for (var h = g.s.r; h <= g.e.r; ++h) {
    d = st(h);
    for (var m = g.s.c; m <= g.e.c; ++m) {
      h === g.s.r && (p[m] = ut(m)), u = p[m] + d;
      var S = f ? (a[h] || [])[m] : a[u];
      S && (Zx(n, S, h, m, t), l && S.l && a["!links"].push([u, S.l]));
    }
  }
  var F = c.CodeName || c.name || o;
  return l && te(n, 574, b8((i.Views || [])[0])), l && (a["!merges"] || []).length && te(n, 229, $8(a["!merges"])), l && jx(n, a), te(n, 442, hs(F)), l && Ux(n, a), te(
    n,
    10
    /* EOF */
  ), n.end();
}
function zx(e, t, r) {
  var n = mt(), o = (e || {}).Workbook || {}, a = o.Sheets || [], i = (
    /*::((*/
    o.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), c = r.biff == 8, f = r.biff == 5;
  if (te(n, 2057, _o(e, 5, r)), r.bookType == "xla" && te(
    n,
    135
    /* Addin */
  ), te(n, 225, c ? Rt(1200) : null), te(n, 193, m8(2)), f && te(
    n,
    191
    /* ToolbarHdr */
  ), f && te(
    n,
    192
    /* ToolbarEnd */
  ), te(
    n,
    226
    /* InterfaceEnd */
  ), te(n, 92, y8("SheetJS", r)), te(n, 66, Rt(c ? 1200 : 1252)), c && te(n, 353, Rt(0)), c && te(
    n,
    448
    /* Excel9File */
  ), te(n, 317, K8(e.SheetNames.length)), c && e.vbaraw && te(
    n,
    211
    /* ObProj */
  ), c && e.vbaraw) {
    var l = i.CodeName || "ThisWorkbook";
    te(n, 442, hs(l));
  }
  te(n, 156, Rt(17)), te(n, 25, gt(!1)), te(n, 18, gt(!1)), te(n, 19, Rt(0)), c && te(n, 431, gt(!1)), c && te(n, 444, Rt(0)), te(n, 61, M8()), te(n, 64, gt(!1)), te(n, 141, Rt(0)), te(n, 34, gt(Jv(e) == "true")), te(n, 14, gt(!0)), c && te(n, 439, gt(!1)), te(n, 218, Rt(0)), Hx(n, e, r), Vx(n, e.SSF, r), $x(n, r), c && te(n, 352, gt(!1));
  var u = n.end(), d = mt();
  c && te(d, 140, Z8()), c && r.Strings && Nx(d, 252, A8(r.Strings)), te(
    d,
    10
    /* EOF */
  );
  var p = d.end(), g = mt(), v = 0, h = 0;
  for (h = 0; h < e.SheetNames.length; ++h) v += (c ? 12 : 11) + (c ? 2 : 1) * e.SheetNames[h].length;
  var m = u.length + v + p.length;
  for (h = 0; h < e.SheetNames.length; ++h) {
    var S = a[h] || {};
    te(g, 133, F8({ pos: m, hs: S.Hidden || 0, dt: 0, name: e.SheetNames[h] }, r)), m += t[h].length;
  }
  var F = g.end();
  if (v != F.length) throw new Error("BS8 " + v + " != " + F.length);
  var _ = [];
  return u.length && _.push(u), F.length && _.push(F), p.length && _.push(p), at(_);
}
function Kx(e, t) {
  var r = t || {}, n = [];
  e && !e.SSF && (e.SSF = Et(ze)), e && e.SSF && (d1(), u1(e.SSF), r.revssf = h1(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, Mo(r), r.cellXfs = [], ur(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var o = 0; o < e.SheetNames.length; ++o) n[n.length] = Gx(o, r, e);
  return n.unshift(zx(e, n, r)), at(n);
}
function Vs(e, t) {
  for (var r = 0; r <= e.SheetNames.length; ++r) {
    var n = e.Sheets[e.SheetNames[r]];
    if (!(!n || !n["!ref"])) {
      var o = At(n["!ref"]);
      o.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[r] + "' extends beyond column IV (255).  Data may be lost.");
    }
  }
  var a = t || {};
  switch (a.biff || 2) {
    case 8:
    case 5:
      return Kx(e, t);
    case 4:
    case 3:
    case 2:
      return Bx(e, t);
  }
  throw new Error("invalid type " + a.bookType + " for BIFF");
}
function Xx(e, t, r, n) {
  for (var o = e["!merges"] || [], a = [], i = t.s.c; i <= t.e.c; ++i) {
    for (var c = 0, f = 0, l = 0; l < o.length; ++l)
      if (!(o[l].s.r > r || o[l].s.c > i) && !(o[l].e.r < r || o[l].e.c < i)) {
        if (o[l].s.r < r || o[l].s.c < i) {
          c = -1;
          break;
        }
        c = o[l].e.r - o[l].s.r + 1, f = o[l].e.c - o[l].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var u = De({ r, c: i }), d = n.dense ? (e[r] || [])[i] : e[u], p = d && d.v != null && (d.h || Sh(d.w || (Jt(d), d.w) || "")) || "", g = {};
      c > 1 && (g.rowspan = c), f > 1 && (g.colspan = f), n.editable ? p = '<span contenteditable="true">' + p + "</span>" : d && (g["data-t"] = d && d.t || "z", d.v != null && (g["data-v"] = d.v), d.z != null && (g["data-z"] = d.z), d.l && (d.l.Target || "#").charAt(0) != "#" && (p = '<a href="' + d.l.Target + '">' + p + "</a>")), g.id = (n.id || "sjs") + "-" + u, a.push(ee("td", p, g));
    }
  }
  var v = "<tr>";
  return v + a.join("") + "</tr>";
}
var Yx = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', qx = "</body></html>";
function Jx(e, t, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Us(e, t) {
  var r = t || {}, n = r.header != null ? r.header : Yx, o = r.footer != null ? r.footer : qx, a = [n], i = At(e["!ref"]);
  r.dense = Array.isArray(e), a.push(Jx(e, i, r));
  for (var c = i.s.r; c <= i.e.r; ++c) a.push(Xx(e, i, c, r));
  return a.push("</table>" + o), a.join("");
}
function $s(e, t, r) {
  var n = r || {}, o = 0, a = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") o = n.origin;
    else {
      var i = typeof n.origin == "string" ? tt(n.origin) : n.origin;
      o = i.r, a = i.c;
    }
  var c = t.getElementsByTagName("tr"), f = Math.min(n.sheetRows || 1e7, c.length), l = { s: { r: 0, c: 0 }, e: { r: o, c: a } };
  if (e["!ref"]) {
    var u = At(e["!ref"]);
    l.s.r = Math.min(l.s.r, u.s.r), l.s.c = Math.min(l.s.c, u.s.c), l.e.r = Math.max(l.e.r, u.e.r), l.e.c = Math.max(l.e.c, u.e.c), o == -1 && (l.e.r = o = u.e.r + 1);
  }
  var d = [], p = 0, g = e["!rows"] || (e["!rows"] = []), v = 0, h = 0, m = 0, S = 0, F = 0, _ = 0;
  for (e["!cols"] || (e["!cols"] = []); v < c.length && h < f; ++v) {
    var N = c[v];
    if (V0(N)) {
      if (n.display) continue;
      g[h] = { hidden: !0 };
    }
    var I = N.children;
    for (m = S = 0; m < I.length; ++m) {
      var j = I[m];
      if (!(n.display && V0(j))) {
        var A = j.hasAttribute("data-v") ? j.getAttribute("data-v") : j.hasAttribute("v") ? j.getAttribute("v") : Mh(j.innerHTML), U = j.getAttribute("data-z") || j.getAttribute("z");
        for (p = 0; p < d.length; ++p) {
          var O = d[p];
          O.s.c == S + a && O.s.r < h + o && h + o <= O.e.r && (S = O.e.c + 1 - a, p = -1);
        }
        _ = +j.getAttribute("colspan") || 1, ((F = +j.getAttribute("rowspan") || 1) > 1 || _ > 1) && d.push({ s: { r: h + o, c: S + a }, e: { r: h + o + (F || 1) - 1, c: S + a + (_ || 1) - 1 } });
        var G = { t: "s", v: A }, Y = j.getAttribute("data-t") || j.getAttribute("t") || "";
        A != null && (A.length == 0 ? G.t = Y || "z" : n.raw || A.trim().length == 0 || Y == "s" || (A === "TRUE" ? G = { t: "b", v: !0 } : A === "FALSE" ? G = { t: "b", v: !1 } : isNaN(Xt(A)) ? isNaN(cn(A).getDate()) || (G = { t: "d", v: vt(A) }, n.cellDates || (G = { t: "n", v: kt(G.v) }), G.z = n.dateNF || ze[14]) : G = { t: "n", v: Xt(A) })), G.z === void 0 && U != null && (G.z = U);
        var W = "", K = j.getElementsByTagName("A");
        if (K && K.length) for (var he = 0; he < K.length && !(K[he].hasAttribute("href") && (W = K[he].getAttribute("href"), W.charAt(0) != "#")); ++he) ;
        W && W.charAt(0) != "#" && (G.l = { Target: W }), n.dense ? (e[h + o] || (e[h + o] = []), e[h + o][S + a] = G) : e[De({ c: S + a, r: h + o })] = G, l.e.c < S + a && (l.e.c = S + a), S += _;
      }
    }
    ++h;
  }
  return d.length && (e["!merges"] = (e["!merges"] || []).concat(d)), l.e.r = Math.max(l.e.r, h - 1 + o), e["!ref"] = Xe(l), h >= f && (e["!fullref"] = Xe((l.e.r = c.length - v + h - 1 + o, l))), e;
}
function js(e, t) {
  var r = t || {}, n = r.dense ? [] : {};
  return $s(n, e, t);
}
function Qx(e, t) {
  return kr(js(e, t), t);
}
function V0(e) {
  var t = "", r = em(e);
  return r && (t = r(e).getPropertyValue("display")), t || (t = e.style && e.style.display), t === "none";
}
function em(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
var tm = /* @__PURE__ */ (function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), t = "<office:document-styles " + fn({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return qe + t;
  };
})(), U0 = /* @__PURE__ */ (function() {
  var e = function(a) {
    return Oe(a).replace(/  +/g, function(i) {
      return '<text:s text:c="' + i.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, t = `          <table:table-cell />
`, r = `          <table:covered-table-cell/>
`, n = function(a, i, c) {
    var f = [];
    f.push('      <table:table table:name="' + Oe(i.SheetNames[c]) + `" table:style-name="ta1">
`);
    var l = 0, u = 0, d = At(a["!ref"] || "A1"), p = a["!merges"] || [], g = 0, v = Array.isArray(a);
    if (a["!cols"])
      for (u = 0; u <= d.e.c; ++u) f.push("        <table:table-column" + (a["!cols"][u] ? ' table:style-name="co' + a["!cols"][u].ods + '"' : "") + `></table:table-column>
`);
    var h = "", m = a["!rows"] || [];
    for (l = 0; l < d.s.r; ++l)
      h = m[l] ? ' table:style-name="ro' + m[l].ods + '"' : "", f.push("        <table:table-row" + h + `></table:table-row>
`);
    for (; l <= d.e.r; ++l) {
      for (h = m[l] ? ' table:style-name="ro' + m[l].ods + '"' : "", f.push("        <table:table-row" + h + `>
`), u = 0; u < d.s.c; ++u) f.push(t);
      for (; u <= d.e.c; ++u) {
        var S = !1, F = {}, _ = "";
        for (g = 0; g != p.length; ++g)
          if (!(p[g].s.c > u) && !(p[g].s.r > l) && !(p[g].e.c < u) && !(p[g].e.r < l)) {
            (p[g].s.c != u || p[g].s.r != l) && (S = !0), F["table:number-columns-spanned"] = p[g].e.c - p[g].s.c + 1, F["table:number-rows-spanned"] = p[g].e.r - p[g].s.r + 1;
            break;
          }
        if (S) {
          f.push(r);
          continue;
        }
        var N = De({ r: l, c: u }), I = v ? (a[l] || [])[u] : a[N];
        if (I && I.f && (F["table:formula"] = Oe(kg(I.f)), I.F && I.F.slice(0, N.length) == N)) {
          var j = At(I.F);
          F["table:number-matrix-columns-spanned"] = j.e.c - j.s.c + 1, F["table:number-matrix-rows-spanned"] = j.e.r - j.s.r + 1;
        }
        if (!I) {
          f.push(t);
          continue;
        }
        switch (I.t) {
          case "b":
            _ = I.v ? "TRUE" : "FALSE", F["office:value-type"] = "boolean", F["office:boolean-value"] = I.v ? "true" : "false";
            break;
          case "n":
            _ = I.w || String(I.v || 0), F["office:value-type"] = "float", F["office:value"] = I.v || 0;
            break;
          case "s":
          case "str":
            _ = I.v == null ? "" : I.v, F["office:value-type"] = "string";
            break;
          case "d":
            _ = I.w || vt(I.v).toISOString(), F["office:value-type"] = "date", F["office:date-value"] = vt(I.v).toISOString(), F["table:style-name"] = "ce1";
            break;
          //case 'e':
          default:
            f.push(t);
            continue;
        }
        var A = e(_);
        if (I.l && I.l.Target) {
          var U = I.l.Target;
          U = U.charAt(0) == "#" ? "#" + Eg(U.slice(1)) : U, U.charAt(0) != "#" && !U.match(/^\w+:/) && (U = "../" + U), A = ee("text:a", A, { "xlink:href": U.replace(/&/g, "&amp;") });
        }
        f.push("          " + ee("table:table-cell", ee("text:p", A, {}), F) + `
`);
      }
      f.push(`        </table:table-row>
`);
    }
    return f.push(`      </table:table>
`), f.join("");
  }, o = function(a, i) {
    a.push(` <office:automatic-styles>
`), a.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), a.push(`   <number:month number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:day number:style="long"/>
`), a.push(`   <number:text>/</number:text>
`), a.push(`   <number:year/>
`), a.push(`  </number:date-style>
`);
    var c = 0;
    i.SheetNames.map(function(l) {
      return i.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!cols"]) {
        for (var u = 0; u < l["!cols"].length; ++u) if (l["!cols"][u]) {
          var d = l["!cols"][u];
          if (d.width == null && d.wpx == null && d.wch == null) continue;
          To(d), d.ods = c;
          var p = l["!cols"][u].wpx + "px";
          a.push('  <style:style style:name="co' + c + `" style:family="table-column">
`), a.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + p + `"/>
`), a.push(`  </style:style>
`), ++c;
        }
      }
    });
    var f = 0;
    i.SheetNames.map(function(l) {
      return i.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!rows"]) {
        for (var u = 0; u < l["!rows"].length; ++u) if (l["!rows"][u]) {
          l["!rows"][u].ods = f;
          var d = l["!rows"][u].hpx + "px";
          a.push('  <style:style style:name="ro' + f + `" style:family="table-row">
`), a.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + d + `"/>
`), a.push(`  </style:style>
`), ++f;
        }
      }
    }), a.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), a.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), a.push(`  </style:style>
`), a.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), a.push(` </office:automatic-styles>
`);
  };
  return function(i, c) {
    var f = [qe], l = fn({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), u = fn({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    c.bookType == "fods" ? (f.push("<office:document" + l + u + `>
`), f.push(os().replace(/office:document-meta/g, "office:meta"))) : f.push("<office:document-content" + l + `>
`), o(f, i), f.push(`  <office:body>
`), f.push(`    <office:spreadsheet>
`);
    for (var d = 0; d != i.SheetNames.length; ++d) f.push(n(i.Sheets[i.SheetNames[d]], i, d));
    return f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), c.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
})();
function Ws(e, t) {
  if (t.bookType == "fods") return U0(e, t);
  var r = po(), n = "", o = [], a = [];
  return n = "mimetype", we(r, n, "application/vnd.oasis.opendocument.spreadsheet"), n = "content.xml", we(r, n, U0(e, t)), o.push([n, "text/xml"]), a.push([n, "ContentFile"]), n = "styles.xml", we(r, n, tm(e, t)), o.push([n, "text/xml"]), a.push([n, "StylesFile"]), n = "meta.xml", we(r, n, qe + os(
    /*::wb, opts*/
  )), o.push([n, "text/xml"]), a.push([n, "MetadataFile"]), n = "manifest.rdf", we(r, n, h8(
    a
    /*, opts*/
  )), o.push([n, "application/rdf+xml"]), n = "META-INF/manifest.xml", we(r, n, u8(
    o
    /*, opts*/
  )), r;
}
function r1(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function rm(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : Bt(ln(e));
}
function nm(e, t) {
  e:
    for (var r = 0; r <= e.length - t.length; ++r) {
      for (var n = 0; n < t.length; ++n)
        if (e[r + n] != t[n])
          continue e;
      return !0;
    }
  return !1;
}
function lr(e) {
  var t = e.reduce(function(o, a) {
    return o + a.length;
  }, 0), r = new Uint8Array(t), n = 0;
  return e.forEach(function(o) {
    r.set(o, n), n += o.length;
  }), r;
}
function om(e, t, r) {
  var n = Math.floor(r == 0 ? 0 : Math.LOG10E * Math.log(Math.abs(r))) + 6176 - 20, o = r / Math.pow(10, n - 6176);
  e[t + 15] |= n >> 7, e[t + 14] |= (n & 127) << 1;
  for (var a = 0; o >= 1; ++a, o /= 256)
    e[t + a] = o & 255;
  e[t + 15] |= r >= 0 ? 0 : 128;
}
function un(e, t) {
  var r = t ? t[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return t && (t[0] = r), n;
}
function Re(e) {
  var t = new Uint8Array(7);
  t[0] = e & 127;
  var r = 1;
  e:
    if (e > 127) {
      if (t[r - 1] |= 128, t[r] = e >> 7 & 127, ++r, e <= 16383 || (t[r - 1] |= 128, t[r] = e >> 14 & 127, ++r, e <= 2097151) || (t[r - 1] |= 128, t[r] = e >> 21 & 127, ++r, e <= 268435455) || (t[r - 1] |= 128, t[r] = e / 256 >>> 21 & 127, ++r, e <= 34359738367) || (t[r - 1] |= 128, t[r] = e / 65536 >>> 21 & 127, ++r, e <= 4398046511103))
        break e;
      t[r - 1] |= 128, t[r] = e / 16777216 >>> 21 & 127, ++r;
    }
  return t.slice(0, r);
}
function Dr(e) {
  var t = 0, r = e[t] & 127;
  e:
    if (e[t++] >= 128) {
      if (r |= (e[t] & 127) << 7, e[t++] < 128 || (r |= (e[t] & 127) << 14, e[t++] < 128) || (r |= (e[t] & 127) << 21, e[t++] < 128))
        break e;
      r |= (e[t] & 127) << 28;
    }
  return r;
}
function Je(e) {
  for (var t = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], o = un(e, r), a = o & 7;
    o = Math.floor(o / 8);
    var i = 0, c;
    if (o == 0)
      break;
    switch (a) {
      case 0:
        {
          for (var f = r[0]; e[r[0]++] >= 128; )
            ;
          c = e.slice(f, r[0]);
        }
        break;
      case 5:
        i = 4, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 1:
        i = 8, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 2:
        i = un(e, r), c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      default:
        throw new Error("PB Type ".concat(a, " for Field ").concat(o, " at offset ").concat(n));
    }
    var l = { data: c, type: a };
    t[o] == null ? t[o] = [l] : t[o].push(l);
  }
  return t;
}
function nt(e) {
  var t = [];
  return e.forEach(function(r, n) {
    r.forEach(function(o) {
      o.data && (t.push(Re(n * 8 + o.type)), o.type == 2 && t.push(Re(o.data.length)), t.push(o.data));
    });
  }), lr(t);
}
function It(e) {
  for (var t, r = [], n = [0]; n[0] < e.length; ) {
    var o = un(e, n), a = Je(e.slice(n[0], n[0] + o));
    n[0] += o;
    var i = {
      id: Dr(a[1][0].data),
      messages: []
    };
    a[2].forEach(function(c) {
      var f = Je(c.data), l = Dr(f[3][0].data);
      i.messages.push({
        meta: f,
        data: e.slice(n[0], n[0] + l)
      }), n[0] += l;
    }), (t = a[3]) != null && t[0] && (i.merge = Dr(a[3][0].data) >>> 0 > 0), r.push(i);
  }
  return r;
}
function Fr(e) {
  var t = [];
  return e.forEach(function(r) {
    var n = [];
    n[1] = [{ data: Re(r.id), type: 0 }], n[2] = [], r.merge != null && (n[3] = [{ data: Re(+!!r.merge), type: 0 }]);
    var o = [];
    r.messages.forEach(function(i) {
      o.push(i.data), i.meta[3] = [{ type: 0, data: Re(i.data.length) }], n[2].push({ data: nt(i.meta), type: 2 });
    });
    var a = nt(n);
    t.push(Re(a.length)), t.push(a), o.forEach(function(i) {
      return t.push(i);
    });
  }), lr(t);
}
function am(e, t) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = un(t, r), o = []; r[0] < t.length; ) {
    var a = t[r[0]] & 3;
    if (a == 0) {
      var i = t[r[0]++] >> 2;
      if (i < 60)
        ++i;
      else {
        var c = i - 59;
        i = t[r[0]], c > 1 && (i |= t[r[0] + 1] << 8), c > 2 && (i |= t[r[0] + 2] << 16), c > 3 && (i |= t[r[0] + 3] << 24), i >>>= 0, i++, r[0] += c;
      }
      o.push(t.slice(r[0], r[0] + i)), r[0] += i;
      continue;
    } else {
      var f = 0, l = 0;
      if (a == 1 ? (l = (t[r[0]] >> 2 & 7) + 4, f = (t[r[0]++] & 224) << 3, f |= t[r[0]++]) : (l = (t[r[0]++] >> 2) + 1, a == 2 ? (f = t[r[0]] | t[r[0] + 1] << 8, r[0] += 2) : (f = (t[r[0]] | t[r[0] + 1] << 8 | t[r[0] + 2] << 16 | t[r[0] + 3] << 24) >>> 0, r[0] += 4)), o = [lr(o)], f == 0)
        throw new Error("Invalid offset 0");
      if (f > o[0].length)
        throw new Error("Invalid offset beyond length");
      if (l >= f)
        for (o.push(o[0].slice(-f)), l -= f; l >= o[o.length - 1].length; )
          o.push(o[o.length - 1]), l -= o[o.length - 1].length;
      o.push(o[0].slice(-f, -f + l));
    }
  }
  var u = lr(o);
  if (u.length != n)
    throw new Error("Unexpected length: ".concat(u.length, " != ").concat(n));
  return u;
}
function Pt(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = e[r++], o = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, t.push(am(n, e.slice(r, r + o))), r += o;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return lr(t);
}
function Ar(e) {
  for (var t = [], r = 0; r < e.length; ) {
    var n = Math.min(e.length - r, 268435455), o = new Uint8Array(4);
    t.push(o);
    var a = Re(n), i = a.length;
    t.push(a), n <= 60 ? (i++, t.push(new Uint8Array([n - 1 << 2]))) : n <= 256 ? (i += 2, t.push(new Uint8Array([240, n - 1 & 255]))) : n <= 65536 ? (i += 3, t.push(new Uint8Array([244, n - 1 & 255, n - 1 >> 8 & 255]))) : n <= 16777216 ? (i += 4, t.push(new Uint8Array([248, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255]))) : n <= 4294967296 && (i += 5, t.push(new Uint8Array([252, n - 1 & 255, n - 1 >> 8 & 255, n - 1 >> 16 & 255, n - 1 >>> 24 & 255]))), t.push(e.slice(r, r + n)), i += n, o[0] = 0, o[1] = i & 255, o[2] = i >> 8 & 255, o[3] = i >> 16 & 255, r += n;
  }
  return lr(t);
}
function A1(e, t) {
  var r = new Uint8Array(32), n = r1(r), o = 12, a = 0;
  switch (r[0] = 5, e.t) {
    case "n":
      r[1] = 2, om(r, o, e.v), a |= 1, o += 16;
      break;
    case "b":
      r[1] = 6, n.setFloat64(o, e.v ? 1 : 0, !0), a |= 2, o += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[1] = 3, n.setUint32(o, t.indexOf(e.v), !0), a |= 8, o += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(8, a, !0), r.slice(0, o);
}
function M1(e, t) {
  var r = new Uint8Array(32), n = r1(r), o = 12, a = 0;
  switch (r[0] = 3, e.t) {
    case "n":
      r[2] = 2, n.setFloat64(o, e.v, !0), a |= 32, o += 8;
      break;
    case "b":
      r[2] = 6, n.setFloat64(o, e.v ? 1 : 0, !0), a |= 32, o += 8;
      break;
    case "s":
      if (t.indexOf(e.v) == -1)
        throw new Error("Value ".concat(e.v, " missing from SST!"));
      r[2] = 3, n.setUint32(o, t.indexOf(e.v), !0), a |= 16, o += 4;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return n.setUint32(4, a, !0), r.slice(0, o);
}
function rr(e) {
  var t = Je(e);
  return un(t[1][0].data);
}
function im(e, t, r) {
  var n, o, a, i;
  if (!((n = e[6]) != null && n[0]) || !((o = e[7]) != null && o[0]))
    throw "Mutation only works on post-BNC storages!";
  var c = ((i = (a = e[8]) == null ? void 0 : a[0]) == null ? void 0 : i.data) && Dr(e[8][0].data) > 0 || !1;
  if (c)
    throw "Math only works with normal offsets";
  for (var f = 0, l = r1(e[7][0].data), u = 0, d = [], p = r1(e[4][0].data), g = 0, v = [], h = 0; h < t.length; ++h) {
    if (t[h] == null) {
      l.setUint16(h * 2, 65535, !0), p.setUint16(h * 2, 65535);
      continue;
    }
    l.setUint16(h * 2, u, !0), p.setUint16(h * 2, g, !0);
    var m, S;
    switch (typeof t[h]) {
      case "string":
        m = A1({ t: "s", v: t[h] }, r), S = M1({ t: "s", v: t[h] }, r);
        break;
      case "number":
        m = A1({ t: "n", v: t[h] }, r), S = M1({ t: "n", v: t[h] }, r);
        break;
      case "boolean":
        m = A1({ t: "b", v: t[h] }, r), S = M1({ t: "b", v: t[h] }, r);
        break;
      default:
        throw new Error("Unsupported value " + t[h]);
    }
    d.push(m), u += m.length, v.push(S), g += S.length, ++f;
  }
  for (e[2][0].data = Re(f); h < e[7][0].data.length / 2; ++h)
    l.setUint16(h * 2, 65535, !0), p.setUint16(h * 2, 65535, !0);
  return e[6][0].data = lr(d), e[3][0].data = lr(v), f;
}
function sm(e, t) {
  if (!t || !t.numbers)
    throw new Error("Must pass a `numbers` option -- check the README");
  var r = e.Sheets[e.SheetNames[0]];
  e.SheetNames.length > 1 && console.error("The Numbers writer currently writes only the first table");
  var n = At(r["!ref"]);
  n.s.r = n.s.c = 0;
  var o = !1;
  n.e.c > 9 && (o = !0, n.e.c = 9), n.e.r > 49 && (o = !0, n.e.r = 49), o && console.error("The Numbers writer is currently limited to ".concat(Xe(n)));
  var a = n1(r, { range: n, header: 1 }), i = ["~Sh33tJ5~"];
  a.forEach(function(D) {
    return D.forEach(function(R) {
      typeof R == "string" && i.push(R);
    });
  });
  var c = {}, f = [], l = Ie.read(t.numbers, { type: "base64" });
  l.FileIndex.map(function(D, R) {
    return [D, l.FullPaths[R]];
  }).forEach(function(D) {
    var R = D[0], b = D[1];
    if (R.type == 2 && R.name.match(/\.iwa/)) {
      var Z = R.content, oe = Pt(Z), le = It(oe);
      le.forEach(function(se) {
        f.push(se.id), c[se.id] = { deps: [], location: b, type: Dr(se.messages[0].meta[1][0].data) };
      });
    }
  }), f.sort(function(D, R) {
    return D - R;
  });
  var u = f.filter(function(D) {
    return D > 1;
  }).map(function(D) {
    return [D, Re(D)];
  });
  l.FileIndex.map(function(D, R) {
    return [D, l.FullPaths[R]];
  }).forEach(function(D) {
    var R = D[0];
    if (D[1], !!R.name.match(/\.iwa/)) {
      var b = It(Pt(R.content));
      b.forEach(function(Z) {
        Z.messages.forEach(function(oe) {
          u.forEach(function(le) {
            Z.messages.some(function(se) {
              return Dr(se.meta[1][0].data) != 11006 && nm(se.data, le[1]);
            }) && c[le[0]].deps.push(Z.id);
          });
        });
      });
    }
  });
  for (var d = Ie.find(l, c[1].location), p = It(Pt(d.content)), g, v = 0; v < p.length; ++v) {
    var h = p[v];
    h.id == 1 && (g = h);
  }
  var m = rr(Je(g.messages[0].data)[1][0].data);
  for (d = Ie.find(l, c[m].location), p = It(Pt(d.content)), v = 0; v < p.length; ++v)
    h = p[v], h.id == m && (g = h);
  for (m = rr(Je(g.messages[0].data)[2][0].data), d = Ie.find(l, c[m].location), p = It(Pt(d.content)), v = 0; v < p.length; ++v)
    h = p[v], h.id == m && (g = h);
  for (m = rr(Je(g.messages[0].data)[2][0].data), d = Ie.find(l, c[m].location), p = It(Pt(d.content)), v = 0; v < p.length; ++v)
    h = p[v], h.id == m && (g = h);
  var S = Je(g.messages[0].data);
  {
    S[6][0].data = Re(n.e.r + 1), S[7][0].data = Re(n.e.c + 1);
    var F = rr(S[46][0].data), _ = Ie.find(l, c[F].location), N = It(Pt(_.content));
    {
      for (var I = 0; I < N.length && N[I].id != F; ++I)
        ;
      if (N[I].id != F)
        throw "Bad ColumnRowUIDMapArchive";
      var j = Je(N[I].messages[0].data);
      j[1] = [], j[2] = [], j[3] = [];
      for (var A = 0; A <= n.e.c; ++A) {
        var U = [];
        U[1] = U[2] = [{ type: 0, data: Re(A + 420690) }], j[1].push({ type: 2, data: nt(U) }), j[2].push({ type: 0, data: Re(A) }), j[3].push({ type: 0, data: Re(A) });
      }
      j[4] = [], j[5] = [], j[6] = [];
      for (var O = 0; O <= n.e.r; ++O)
        U = [], U[1] = U[2] = [{ type: 0, data: Re(O + 726270) }], j[4].push({ type: 2, data: nt(U) }), j[5].push({ type: 0, data: Re(O) }), j[6].push({ type: 0, data: Re(O) });
      N[I].messages[0].data = nt(j);
    }
    _.content = Ar(Fr(N)), _.size = _.content.length, delete S[46];
    var G = Je(S[4][0].data);
    {
      G[7][0].data = Re(n.e.r + 1);
      var Y = Je(G[1][0].data), W = rr(Y[2][0].data);
      _ = Ie.find(l, c[W].location), N = It(Pt(_.content));
      {
        if (N[0].id != W)
          throw "Bad HeaderStorageBucket";
        var K = Je(N[0].messages[0].data);
        for (O = 0; O < a.length; ++O) {
          var he = Je(K[2][0].data);
          he[1][0].data = Re(O), he[4][0].data = Re(a[O].length), K[2][O] = { type: K[2][0].type, data: nt(he) };
        }
        N[0].messages[0].data = nt(K);
      }
      _.content = Ar(Fr(N)), _.size = _.content.length;
      var ae = rr(G[2][0].data);
      _ = Ie.find(l, c[ae].location), N = It(Pt(_.content));
      {
        if (N[0].id != ae)
          throw "Bad HeaderStorageBucket";
        for (K = Je(N[0].messages[0].data), A = 0; A <= n.e.c; ++A)
          he = Je(K[2][0].data), he[1][0].data = Re(A), he[4][0].data = Re(n.e.r + 1), K[2][A] = { type: K[2][0].type, data: nt(he) };
        N[0].messages[0].data = nt(K);
      }
      _.content = Ar(Fr(N)), _.size = _.content.length;
      var ve = rr(G[4][0].data);
      (function() {
        for (var D = Ie.find(l, c[ve].location), R = It(Pt(D.content)), b, Z = 0; Z < R.length; ++Z) {
          var oe = R[Z];
          oe.id == ve && (b = oe);
        }
        var le = Je(b.messages[0].data);
        {
          le[3] = [];
          var se = [];
          i.forEach(function(Ce, Be) {
            se[1] = [{ type: 0, data: Re(Be) }], se[2] = [{ type: 0, data: Re(1) }], se[3] = [{ type: 2, data: rm(Ce) }], le[3].push({ type: 2, data: nt(se) });
          });
        }
        b.messages[0].data = nt(le);
        var re = Fr(R), Se = Ar(re);
        D.content = Se, D.size = D.content.length;
      })();
      var ye = Je(G[3][0].data);
      {
        var ge = ye[1][0];
        delete ye[2];
        var me = Je(ge.data);
        {
          var Fe = rr(me[2][0].data);
          (function() {
            for (var D = Ie.find(l, c[Fe].location), R = It(Pt(D.content)), b, Z = 0; Z < R.length; ++Z) {
              var oe = R[Z];
              oe.id == Fe && (b = oe);
            }
            var le = Je(b.messages[0].data);
            {
              delete le[6], delete ye[7];
              var se = new Uint8Array(le[5][0].data);
              le[5] = [];
              for (var re = 0, Se = 0; Se <= n.e.r; ++Se) {
                var Ce = Je(se);
                re += im(Ce, a[Se], i), Ce[1][0].data = Re(Se), le[5].push({ data: nt(Ce), type: 2 });
              }
              le[1] = [{ type: 0, data: Re(n.e.c + 1) }], le[2] = [{ type: 0, data: Re(n.e.r + 1) }], le[3] = [{ type: 0, data: Re(re) }], le[4] = [{ type: 0, data: Re(n.e.r + 1) }];
            }
            b.messages[0].data = nt(le);
            var Be = Fr(R), _e = Ar(Be);
            D.content = _e, D.size = D.content.length;
          })();
        }
        ge.data = nt(me);
      }
      G[3][0].data = nt(ye);
    }
    S[4][0].data = nt(G);
  }
  g.messages[0].data = nt(S);
  var Ee = Fr(p), y = Ar(Ee);
  return d.content = y, d.size = d.content.length, l;
}
function cm(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var o = e[n];
      r[o[0]] === void 0 && (r[o[0]] = o[1]), o[2] === "n" && (r[o[0]] = Number(r[o[0]]));
    }
  };
}
function Mo(e) {
  cm([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function lm(e, t) {
  return t.bookType == "ods" ? Ws(e, t) : t.bookType == "numbers" ? sm(e, t) : t.bookType == "xlsb" ? fm(e, t) : um(e, t);
}
function fm(e, t) {
  br = 1024, e && !e.SSF && (e.SSF = Et(ze)), e && e.SSF && (d1(), u1(e.SSF), t.revssf = h1(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, on ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = t.bookType == "xlsb" ? "bin" : "xml", n = Ss.indexOf(t.bookType) > -1, o = ts();
  Mo(t = t || {});
  var a = po(), i = "", c = 0;
  if (t.cellXfs = [], ur(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), i = "docProps/core.xml", we(a, i, as(e.Props, t)), o.coreprops.push(i), Ne(t.rels, 2, i, Me.CORE_PROPS), i = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var f = [], l = 0; l < e.SheetNames.length; ++l)
      (e.Workbook.Sheets[l] || {}).Hidden != 2 && f.push(e.SheetNames[l]);
    e.Props.SheetNames = f;
  }
  for (e.Props.Worksheets = e.Props.SheetNames.length, we(a, i, ss(e.Props)), o.extprops.push(i), Ne(t.rels, 3, i, Me.EXT_PROPS), e.Custprops !== e.Props && ct(e.Custprops || {}).length > 0 && (i = "docProps/custom.xml", we(a, i, cs(e.Custprops)), o.custprops.push(i), Ne(t.rels, 4, i, Me.CUST_PROPS)), c = 1; c <= e.SheetNames.length; ++c) {
    var u = { "!id": {} }, d = e.Sheets[e.SheetNames[c - 1]], p = (d || {})["!type"] || "sheet";
    if (i = "xl/worksheets/sheet" + c + "." + r, we(a, i, hx(c - 1, i, t, e, u)), o.sheets.push(i), Ne(t.wbrels, -1, "worksheets/sheet" + c + "." + r, Me.WS[0]), d) {
      var g = d["!comments"], v = !1, h = "";
      g && g.length > 0 && (h = "xl/comments" + c + "." + r, we(a, h, vx(g, h)), o.comments.push(h), Ne(u, -1, "../comments" + c + "." + r, Me.CMNT), v = !0), d["!legacy"] && v && we(a, "xl/drawings/vmlDrawing" + c + ".vml", _s(c, d["!comments"])), delete d["!comments"], delete d["!legacy"];
    }
    u["!id"].rId1 && we(a, ns(i), Nr(u));
  }
  return t.Strings != null && t.Strings.length > 0 && (i = "xl/sharedStrings." + r, we(a, i, gx(t.Strings, i, t)), o.strs.push(i), Ne(t.wbrels, -1, "sharedStrings." + r, Me.SST)), i = "xl/workbook." + r, we(a, i, dx(e, i)), o.workbooks.push(i), Ne(t.rels, 1, i, Me.WB), i = "xl/theme/theme1.xml", we(a, i, Es(e.Themes, t)), o.themes.push(i), Ne(t.wbrels, -1, "theme/theme1.xml", Me.THEME), i = "xl/styles." + r, we(a, i, px(e, i, t)), o.styles.push(i), Ne(t.wbrels, -1, "styles." + r, Me.STY), e.vbaraw && n && (i = "xl/vbaProject.bin", we(a, i, e.vbaraw), o.vba.push(i), Ne(t.wbrels, -1, "vbaProject.bin", Me.VBA)), i = "xl/metadata." + r, we(a, i, xx(i)), o.metadata.push(i), Ne(t.wbrels, -1, "metadata." + r, Me.XLMETA), we(a, "[Content_Types].xml", rs(o, t)), we(a, "_rels/.rels", Nr(t.rels)), we(a, "xl/_rels/workbook." + r + ".rels", Nr(t.wbrels)), delete t.revssf, delete t.ssf, a;
}
function um(e, t) {
  br = 1024, e && !e.SSF && (e.SSF = Et(ze)), e && e.SSF && (d1(), u1(e.SSF), t.revssf = h1(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), t.rels = {}, t.wbrels = {}, t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, on ? t.revStrings = /* @__PURE__ */ new Map() : (t.revStrings = {}, t.revStrings.foo = [], delete t.revStrings.foo);
  var r = "xml", n = Ss.indexOf(t.bookType) > -1, o = ts();
  Mo(t = t || {});
  var a = po(), i = "", c = 0;
  if (t.cellXfs = [], ur(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), i = "docProps/core.xml", we(a, i, as(e.Props, t)), o.coreprops.push(i), Ne(t.rels, 2, i, Me.CORE_PROPS), i = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var f = [], l = 0; l < e.SheetNames.length; ++l)
      (e.Workbook.Sheets[l] || {}).Hidden != 2 && f.push(e.SheetNames[l]);
    e.Props.SheetNames = f;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, we(a, i, ss(e.Props)), o.extprops.push(i), Ne(t.rels, 3, i, Me.EXT_PROPS), e.Custprops !== e.Props && ct(e.Custprops || {}).length > 0 && (i = "docProps/custom.xml", we(a, i, cs(e.Custprops)), o.custprops.push(i), Ne(t.rels, 4, i, Me.CUST_PROPS));
  var u = ["SheetJ5"];
  for (t.tcid = 0, c = 1; c <= e.SheetNames.length; ++c) {
    var d = { "!id": {} }, p = e.Sheets[e.SheetNames[c - 1]], g = (p || {})["!type"] || "sheet";
    if (i = "xl/worksheets/sheet" + c + "." + r, we(a, i, Ds(c - 1, t, e, d)), o.sheets.push(i), Ne(t.wbrels, -1, "worksheets/sheet" + c + "." + r, Me.WS[0]), p) {
      var v = p["!comments"], h = !1, m = "";
      if (v && v.length > 0) {
        var S = !1;
        v.forEach(function(F) {
          F[1].forEach(function(_) {
            _.T == !0 && (S = !0);
          });
        }), S && (m = "xl/threadedComments/threadedComment" + c + "." + r, we(a, m, $7(v, u, t)), o.threadedcomments.push(m), Ne(d, -1, "../threadedComments/threadedComment" + c + "." + r, Me.TCMNT)), m = "xl/comments" + c + "." + r, we(a, m, Ts(v)), o.comments.push(m), Ne(d, -1, "../comments" + c + "." + r, Me.CMNT), h = !0;
      }
      p["!legacy"] && h && we(a, "xl/drawings/vmlDrawing" + c + ".vml", _s(c, p["!comments"])), delete p["!comments"], delete p["!legacy"];
    }
    d["!id"].rId1 && we(a, ns(i), Nr(d));
  }
  return t.Strings != null && t.Strings.length > 0 && (i = "xl/sharedStrings." + r, we(a, i, vs(t.Strings, t)), o.strs.push(i), Ne(t.wbrels, -1, "sharedStrings." + r, Me.SST)), i = "xl/workbook." + r, we(a, i, Bs(e)), o.workbooks.push(i), Ne(t.rels, 1, i, Me.WB), i = "xl/theme/theme1.xml", we(a, i, Es(e.Themes, t)), o.themes.push(i), Ne(t.wbrels, -1, "theme/theme1.xml", Me.THEME), i = "xl/styles." + r, we(a, i, ws(e, t)), o.styles.push(i), Ne(t.wbrels, -1, "styles." + r, Me.STY), e.vbaraw && n && (i = "xl/vbaProject.bin", we(a, i, e.vbaraw), o.vba.push(i), Ne(t.wbrels, -1, "vbaProject.bin", Me.VBA)), i = "xl/metadata." + r, we(a, i, Ls()), o.metadata.push(i), Ne(t.wbrels, -1, "metadata." + r, Me.XLMETA), u.length > 1 && (i = "xl/persons/person.xml", we(a, i, j7(u)), o.people.push(i), Ne(t.wbrels, -1, "persons/person.xml", Me.PEOPLE)), we(a, "[Content_Types].xml", rs(o, t)), we(a, "_rels/.rels", Nr(t.rels)), we(a, "xl/_rels/workbook." + r + ".rels", Nr(t.wbrels)), delete t.revssf, delete t.ssf, a;
}
function dm(e, t) {
  var r = "";
  switch ((t || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = qt(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (t && t.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function Zs(e, t) {
  switch (t.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      t.type = "";
      break;
    case "file":
      return Ln(t.file, Ie.write(e, { type: be ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  return Ie.write(e, t);
}
function hm(e, t) {
  var r = Et(t || {}), n = lm(e, r);
  return pm(n, r);
}
function pm(e, t) {
  var r = {}, n = be ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (t.compression && (r.compression = "DEFLATE"), t.password) r.type = n;
  else switch (t.type) {
    case "base64":
      r.type = "base64";
      break;
    case "binary":
      r.type = "string";
      break;
    case "string":
      throw new Error("'string' output type invalid for '" + t.bookType + "' files");
    case "buffer":
    case "file":
      r.type = n;
      break;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
  var o = e.FullPaths ? Ie.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[r.type] || r.type
  ), compression: !!t.compression }) : e.generate(r);
  if (typeof Deno < "u" && typeof o == "string") {
    if (t.type == "binary" || t.type == "base64") return o;
    o = new Uint8Array(f1(o));
  }
  return t.password && typeof encrypt_agile < "u" ? Zs(encrypt_agile(o, t.password), t) : t.type === "file" ? Ln(t.file, o) : t.type == "string" ? en(
    /*::(*/
    o
    /*:: :any)*/
  ) : o;
}
function gm(e, t) {
  var r = t || {}, n = bx(e, r);
  return Zs(n, r);
}
function jt(e, t, r) {
  r || (r = "");
  var n = r + e;
  switch (t.type) {
    case "base64":
      return sn(ln(n));
    case "binary":
      return ln(n);
    case "string":
      return e;
    case "file":
      return Ln(t.file, n, "utf8");
    case "buffer":
      return be ? er(n, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(n) : jt(n, { type: "binary" }).split("").map(function(o) {
        return o.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function vm(e, t) {
  switch (t.type) {
    case "base64":
      return sn(e);
    case "binary":
      return e;
    case "string":
      return e;
    /* override in sheet_to_txt */
    case "file":
      return Ln(t.file, e, "binary");
    case "buffer":
      return be ? er(e, "binary") : e.split("").map(function(r) {
        return r.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + t.type);
}
function Pn(e, t) {
  switch (t.type) {
    case "string":
    case "base64":
    case "binary":
      for (var r = "", n = 0; n < e.length; ++n) r += String.fromCharCode(e[n]);
      return t.type == "base64" ? sn(r) : t.type == "string" ? en(r) : r;
    case "file":
      return Ln(t.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + t.type);
  }
}
function Gs(e, t) {
  Wd(), tx(e);
  var r = Et(t || {});
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), r.type == "array") {
    r.type = "binary";
    var n = Gs(e, r);
    return r.type = "array", f1(n);
  }
  var o = 0;
  if (r.sheet && (typeof r.sheet == "number" ? o = r.sheet : o = e.SheetNames.indexOf(r.sheet), !e.SheetNames[o]))
    throw new Error("Sheet not found: " + r.sheet + " : " + typeof r.sheet);
  switch (r.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return jt(Ax(e, r), r);
    case "slk":
    case "sylk":
      return jt(J8.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "htm":
    case "html":
      return jt(Us(e.Sheets[e.SheetNames[o]], r), r);
    case "txt":
      return vm(zs(e.Sheets[e.SheetNames[o]], r), r);
    case "csv":
      return jt(bo(e.Sheets[e.SheetNames[o]], r), r, "\uFEFF");
    case "dif":
      return jt(Q8.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "dbf":
      return Pn(q8.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "prn":
      return jt(e7.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "rtf":
      return jt(s7.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "eth":
      return jt(gs.from_sheet(e.Sheets[e.SheetNames[o]], r), r);
    case "fods":
      return jt(Ws(e, r), r);
    case "wk1":
      return Pn(O0.sheet_to_wk1(e.Sheets[e.SheetNames[o]], r), r);
    case "wk3":
      return Pn(O0.book_to_wk3(e, r), r);
    case "biff2":
      r.biff || (r.biff = 2);
    /* falls through */
    case "biff3":
      r.biff || (r.biff = 3);
    /* falls through */
    case "biff4":
      return r.biff || (r.biff = 4), Pn(Vs(e, r), r);
    case "biff5":
      r.biff || (r.biff = 5);
    /* falls through */
    case "biff8":
    case "xla":
    case "xls":
      return r.biff || (r.biff = 8), gm(e, r);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return hm(e, r);
    default:
      throw new Error("Unrecognized bookType |" + r.bookType + "|");
  }
}
function xm(e, t, r, n, o, a, i, c) {
  var f = st(r), l = c.defval, u = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), d = !0, p = o === 1 ? [] : {};
  if (o !== 1)
    if (Object.defineProperty) try {
      Object.defineProperty(p, "__rowNum__", { value: r, enumerable: !1 });
    } catch {
      p.__rowNum__ = r;
    }
    else p.__rowNum__ = r;
  if (!i || e[r]) for (var g = t.s.c; g <= t.e.c; ++g) {
    var v = i ? e[r][g] : e[n[g] + f];
    if (v === void 0 || v.t === void 0) {
      if (l === void 0) continue;
      a[g] != null && (p[a[g]] = l);
      continue;
    }
    var h = v.v;
    switch (v.t) {
      case "z":
        if (h == null) break;
        continue;
      case "e":
        h = h == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + v.t);
    }
    if (a[g] != null) {
      if (h == null)
        if (v.t == "e" && h === null) p[a[g]] = null;
        else if (l !== void 0) p[a[g]] = l;
        else if (u && h === null) p[a[g]] = null;
        else continue;
      else
        p[a[g]] = u && (v.t !== "n" || v.t === "n" && c.rawNumbers !== !1) ? h : Jt(v, h, c);
      h != null && (d = !1);
    }
  }
  return { row: p, isempty: d };
}
function n1(e, t) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 }, n = 0, o = 1, a = [], i = 0, c = "", f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = t || {}, u = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) ? n = 3 : l.header == null && (n = 0), typeof u) {
    case "string":
      f = Ve(u);
      break;
    case "number":
      f = Ve(e["!ref"]), f.s.r = u;
      break;
    default:
      f = u;
  }
  n > 0 && (o = 0);
  var d = st(f.s.r), p = [], g = [], v = 0, h = 0, m = Array.isArray(e), S = f.s.r, F = 0, _ = {};
  m && !e[S] && (e[S] = []);
  var N = l.skipHidden && e["!cols"] || [], I = l.skipHidden && e["!rows"] || [];
  for (F = f.s.c; F <= f.e.c; ++F)
    if (!(N[F] || {}).hidden)
      switch (p[F] = ut(F), r = m ? e[S][F] : e[p[F] + d], n) {
        case 1:
          a[F] = F - f.s.c;
          break;
        case 2:
          a[F] = p[F];
          break;
        case 3:
          a[F] = l.header[F - f.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), c = i = Jt(r, null, l), h = _[i] || 0, !h) _[i] = 1;
          else {
            do
              c = i + "_" + h++;
            while (_[c]);
            _[i] = h, _[c] = 1;
          }
          a[F] = c;
      }
  for (S = f.s.r + o; S <= f.e.r; ++S)
    if (!(I[S] || {}).hidden) {
      var j = xm(e, f, S, p, n, a, m, l);
      (j.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) && (g[v++] = j.row);
    }
  return g.length = v, g;
}
var $0 = /"/g;
function mm(e, t, r, n, o, a, i, c) {
  for (var f = !0, l = [], u = "", d = st(r), p = t.s.c; p <= t.e.c; ++p)
    if (n[p]) {
      var g = c.dense ? (e[r] || [])[p] : e[n[p] + d];
      if (g == null) u = "";
      else if (g.v != null) {
        f = !1, u = "" + (c.rawNumbers && g.t == "n" ? g.v : Jt(g, null, c));
        for (var v = 0, h = 0; v !== u.length; ++v) if ((h = u.charCodeAt(v)) === o || h === a || h === 34 || c.forceQuotes) {
          u = '"' + u.replace($0, '""') + '"';
          break;
        }
        u == "ID" && (u = '"ID"');
      } else g.f != null && !g.F ? (f = !1, u = "=" + g.f, u.indexOf(",") >= 0 && (u = '"' + u.replace($0, '""') + '"')) : u = "";
      l.push(u);
    }
  return c.blankrows === !1 && f ? null : l.join(i);
}
function bo(e, t) {
  var r = [], n = t ?? {};
  if (e == null || e["!ref"] == null) return "";
  var o = Ve(e["!ref"]), a = n.FS !== void 0 ? n.FS : ",", i = a.charCodeAt(0), c = n.RS !== void 0 ? n.RS : `
`, f = c.charCodeAt(0), l = new RegExp((a == "|" ? "\\|" : a) + "+$"), u = "", d = [];
  n.dense = Array.isArray(e);
  for (var p = n.skipHidden && e["!cols"] || [], g = n.skipHidden && e["!rows"] || [], v = o.s.c; v <= o.e.c; ++v) (p[v] || {}).hidden || (d[v] = ut(v));
  for (var h = 0, m = o.s.r; m <= o.e.r; ++m)
    (g[m] || {}).hidden || (u = mm(e, o, m, d, i, f, a, n), u != null && (n.strip && (u = u.replace(l, "")), (u || n.blankrows !== !1) && r.push((h++ ? c : "") + u)));
  return delete n.dense, r.join("");
}
function zs(e, t) {
  t || (t = {}), t.FS = "	", t.RS = `
`;
  var r = bo(e, t);
  return r;
}
function Cm(e) {
  var t = "", r, n = "";
  if (e == null || e["!ref"] == null) return [];
  var o = Ve(e["!ref"]), a = "", i = [], c, f = [], l = Array.isArray(e);
  for (c = o.s.c; c <= o.e.c; ++c) i[c] = ut(c);
  for (var u = o.s.r; u <= o.e.r; ++u)
    for (a = st(u), c = o.s.c; c <= o.e.c; ++c)
      if (t = i[c] + a, r = l ? (e[u] || [])[c] : e[t], n = "", r !== void 0) {
        if (r.F != null) {
          if (t = r.F, !r.f) continue;
          n = r.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == "z") continue;
          if (r.t == "n" && r.v != null) n = "" + r.v;
          else if (r.t == "b") n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        f[f.length] = t + "=" + n;
      }
  return f;
}
function Ks(e, t, r) {
  var n = r || {}, o = +!n.skipHeader, a = e || {}, i = 0, c = 0;
  if (a && n.origin != null)
    if (typeof n.origin == "number") i = n.origin;
    else {
      var f = typeof n.origin == "string" ? tt(n.origin) : n.origin;
      i = f.r, c = f.c;
    }
  var l, u = { s: { c: 0, r: 0 }, e: { c, r: i + t.length - 1 + o } };
  if (a["!ref"]) {
    var d = Ve(a["!ref"]);
    u.e.c = Math.max(u.e.c, d.e.c), u.e.r = Math.max(u.e.r, d.e.r), i == -1 && (i = d.e.r + 1, u.e.r = i + t.length - 1 + o);
  } else
    i == -1 && (i = 0, u.e.r = t.length - 1 + o);
  var p = n.header || [], g = 0;
  t.forEach(function(h, m) {
    ct(h).forEach(function(S) {
      (g = p.indexOf(S)) == -1 && (p[g = p.length] = S);
      var F = h[S], _ = "z", N = "", I = De({ c: c + g, r: i + m + o });
      l = dn(a, I), F && typeof F == "object" && !(F instanceof Date) ? a[I] = F : (typeof F == "number" ? _ = "n" : typeof F == "boolean" ? _ = "b" : typeof F == "string" ? _ = "s" : F instanceof Date ? (_ = "d", n.cellDates || (_ = "n", F = kt(F)), N = n.dateNF || ze[14]) : F === null && n.nullError && (_ = "e", F = 0), l ? (l.t = _, l.v = F, delete l.w, delete l.R, N && (l.z = N)) : a[I] = l = { t: _, v: F }, N && (l.z = N));
    });
  }), u.e.c = Math.max(u.e.c, c + p.length - 1);
  var v = st(i);
  if (o) for (g = 0; g < p.length; ++g) a[ut(g + c) + v] = { t: "s", v: p[g] };
  return a["!ref"] = Xe(u), a;
}
function wm(e, t) {
  return Ks(null, e, t);
}
function dn(e, t, r) {
  if (typeof t == "string") {
    if (Array.isArray(e)) {
      var n = tt(t);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[t] || (e[t] = { t: "z" });
  }
  return typeof t != "number" ? dn(e, De(t)) : dn(e, De({ r: t, c: r || 0 }));
}
function km(e, t) {
  if (typeof t == "number") {
    if (t >= 0 && e.SheetNames.length > t) return t;
    throw new Error("Cannot find sheet # " + t);
  } else if (typeof t == "string") {
    var r = e.SheetNames.indexOf(t);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + t + "|");
  } else throw new Error("Cannot find sheet |" + t + "|");
}
function Em() {
  return { SheetNames: [], Sheets: {} };
}
function Lm(e, t, r, n) {
  var o = 1;
  if (!r) for (; o <= 65535 && e.SheetNames.indexOf(r = "Sheet" + o) != -1; ++o, r = void 0) ;
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var a = r.match(/(^.*?)(\d+)$/);
    o = a && +a[2] || 0;
    var i = a && a[1] || r;
    for (++o; o <= 65535 && e.SheetNames.indexOf(r = i + o) != -1; ++o) ;
  }
  if (Ps(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = t, r;
}
function _m(e, t, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = km(e, t);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function Tm(e, t) {
  return e.z = t, e;
}
function Xs(e, t, r) {
  return t ? (e.l = { Target: t }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function Sm(e, t, r) {
  return Xs(e, "#" + t, r);
}
function ym(e, t, r) {
  e.c || (e.c = []), e.c.push({ t, a: r || "SheetJS" });
}
function Fm(e, t, r, n) {
  for (var o = typeof t != "string" ? t : Ve(t), a = typeof t == "string" ? t : Xe(t), i = o.s.r; i <= o.e.r; ++i) for (var c = o.s.c; c <= o.e.c; ++c) {
    var f = dn(e, i, c);
    f.t = "n", f.F = a, delete f.v, i == o.s.r && c == o.s.c && (f.f = r, n && (f.D = !0));
  }
  return e;
}
var b1 = {
  encode_col: ut,
  encode_row: st,
  encode_cell: De,
  encode_range: Xe,
  decode_col: wo,
  decode_row: Co,
  split_cell: Wh,
  decode_cell: tt,
  decode_range: At,
  format_cell: Jt,
  sheet_add_aoa: Xi,
  sheet_add_json: Ks,
  sheet_add_dom: $s,
  aoa_to_sheet: $r,
  json_to_sheet: wm,
  table_to_sheet: js,
  table_to_book: Qx,
  sheet_to_csv: bo,
  sheet_to_txt: zs,
  sheet_to_json: n1,
  sheet_to_html: Us,
  sheet_to_formulae: Cm,
  sheet_to_row_object_array: n1,
  sheet_get_cell: dn,
  book_new: Em,
  book_append_sheet: Lm,
  book_set_sheet_visibility: _m,
  cell_set_number_format: Tm,
  cell_set_hyperlink: Xs,
  cell_set_internal_link: Sm,
  cell_add_comment: ym,
  sheet_set_array_formula: Fm,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function Am(e, t) {
  const { columns: r, rows: n, columnLabels: o } = e, i = [
    r.map((p) => o?.[p] ?? p),
    ...n.map((p) => r.map((g) => p[g] ?? ""))
  ], c = b1.book_new(), f = b1.aoa_to_sheet(i);
  b1.book_append_sheet(c, f, "Data");
  const l = Gs(c, { type: "array", bookType: "xlsx" }), u = new Blob([l], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  }), d = document.createElement("a");
  d.href = URL.createObjectURL(u), d.download = `${t}.xlsx`, d.click(), URL.revokeObjectURL(d.href);
}
function Mm(e, t) {
  const { columns: r, rows: n, columnLabels: o } = e, a = r.map((u) => o?.[u] ?? u), i = (u) => {
    const d = u == null ? "" : String(u);
    return d.includes(",") || d.includes('"') || d.includes(`
`) ? `"${d.replace(/"/g, '""')}"` : d;
  }, c = [
    a.map(i).join(","),
    ...n.map((u) => r.map((d) => i(u[d])).join(","))
  ], f = new Blob([c.join(`
`)], {
    type: "text/csv;charset=utf-8;"
  }), l = document.createElement("a");
  l.href = URL.createObjectURL(f), l.download = `${t}.csv`, l.click(), URL.revokeObjectURL(l.href);
}
const bm = ({
  markdown: e,
  filename: t = "dataset",
  dataset: r
}) => {
  const n = Pe(), o = [
    {
      value: "excel",
      label: n.t("ai.dataDownload.download", { format: "Excel" }),
      icon: Vn
    },
    {
      value: "csv",
      label: n.t("ai.dataDownload.download", { format: "CSV" }),
      icon: Vn
    }
  ], a = ke(
    (l, u) => {
      l === "excel" ? Am(r, t) : l === "csv" ? Mm(r, t) : console.warn(`[F0DataDownload] Unknown download format: "${l}"`);
    },
    [r, t]
  ), { totalCount: i, previewCount: c } = r, f = i != null && c != null && i > c;
  return /* @__PURE__ */ T("div", { className: "flex flex-col gap-2 pb-2", children: [
    e && /* @__PURE__ */ s("div", { className: "w-fit max-w-full [&>div]:flex [&>div]:flex-col [&>div]:gap-1", children: /* @__PURE__ */ s(ia, { content: e, components: rd }) }),
    f && /* @__PURE__ */ s("p", { className: "text-sm font-medium text-f1-foreground-secondary", children: n.t("ai.dataDownloadPreview", {
      shown: c,
      total: i
    }) }),
    /* @__PURE__ */ s("div", { className: "flex justify-start", children: /* @__PURE__ */ s(
      ea,
      {
        variant: "outline",
        size: "md",
        items: o,
        value: "excel",
        onClick: a
      }
    ) })
  ] });
}, Rm = () => {
  Qt({
    name: "downloadData",
    description: "Display download buttons for query results. Sends the raw dataset to the frontend for client-side Excel and CSV generation, optionally with a markdown preview table.",
    parameters: [
      {
        name: "markdown",
        type: "string",
        description: "Optional markdown content to display above the download buttons (e.g. a table preview, description, or summary)",
        required: !1
      },
      {
        name: "filename",
        type: "string",
        description: "Descriptive filename (without extension) for the downloaded files, in the user's language. E.g. 'ventas_por_mes', 'team_salaries'.",
        required: !1
      },
      {
        name: "dataset",
        type: "object",
        description: "Raw dataset for client-side file generation. Contains column headers and row data.",
        required: !0,
        attributes: [
          {
            name: "columns",
            type: "string[]",
            description: "Column headers in display order",
            required: !0
          },
          {
            name: "rows",
            type: "object[]",
            description: "Array of row objects keyed by column name",
            required: !0
          },
          {
            name: "totalCount",
            type: "number",
            description: "Total number of rows returned by the query (before truncation)",
            required: !1
          },
          {
            name: "previewCount",
            type: "number",
            description: "Number of rows shown in the markdown preview table",
            required: !1
          },
          {
            name: "columnLabels",
            type: "object",
            description: "Map of raw column names to human-readable labels in the user's language. Used for Excel/CSV headers.",
            required: !1
          }
        ]
      }
    ],
    available: "frontend",
    render: (e) => {
      const t = e.args, r = {
        markdown: t.markdown,
        filename: t.filename,
        dataset: t.dataset ?? { columns: [], rows: [] }
      };
      return /* @__PURE__ */ s(bm, { ...r });
    }
  });
};
function Ys({
  config: e,
  onView: t,
  toolCallId: r
}) {
  Pl(
    Jr.subscribe,
    Jr.getSnapshot
  );
  const n = Pe(), o = (r ? Jr.get(r) : void 0) ?? e, { title: a } = o;
  return /* @__PURE__ */ T("div", { className: "flex flex-row items-center justify-between gap-3 rounded-lg border border-solid border-f1-border-secondary p-4", children: [
    /* @__PURE__ */ T("div", { className: "flex min-w-0 flex-row items-center gap-3", children: [
      /* @__PURE__ */ s(Nl, { module: "analytics", size: "lg" }),
      /* @__PURE__ */ T("div", { className: "flex min-w-0 flex-col", children: [
        /* @__PURE__ */ s(ir, { className: "text-lg font-semibold text-f1-foreground", children: a }),
        /* @__PURE__ */ s(ir, { className: "text-base text-f1-foreground-secondary", children: n.ai.reportCard.reportLabel })
      ] })
    ] }),
    /* @__PURE__ */ s(
      Ft,
      {
        variant: "neutral",
        size: "md",
        label: n.ai.reportCard.openButton,
        onClick: () => t(o)
      }
    )
  ] });
}
Ys.displayName = "F0ChatReportCard";
const Nm = () => {
  const { openCanvas: e } = Ye(), { copilotApiConfig: t } = s1(), r = Qe(
    () => ({
      baseUrl: t.chatApiEndpoint,
      headers: t.headers
    }),
    [t.chatApiEndpoint, t.headers]
  );
  Qt({
    name: "displayDashboard",
    description: "Display a data-driven report dashboard in a canvas panel. Data is computed server-side via the dashboard compute endpoint.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Dashboard title displayed in the canvas header",
        required: !0
      },
      {
        name: "items",
        type: "object[]",
        description: "Ordered list of dashboard items (chart, metric, or collection) with computation specs.",
        required: !0,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique item identifier",
            required: !0
          },
          {
            name: "type",
            type: "string",
            description: '"chart", "metric", or "collection"',
            required: !0
          },
          {
            name: "title",
            type: "string",
            description: "Item title",
            required: !0
          },
          {
            name: "description",
            type: "string",
            description: "Optional item description",
            required: !1
          },
          {
            name: "sourceDescription",
            type: "string",
            description: "Source attribution subtitle",
            required: !1
          },
          {
            name: "colSpan",
            type: "number",
            description: "Column span (1-12)",
            required: !1
          },
          {
            name: "rowSpan",
            type: "number",
            description: "Row span (1-10)",
            required: !1
          },
          {
            name: "computation",
            type: "object",
            description: "Declarative computation spec (datasetId, aggregation, axes, etc.)",
            required: !0
          },
          {
            name: "chart",
            type: "object",
            description: "Chart visual config (type, orientation, showLegend, etc.)",
            required: !1
          },
          {
            name: "format",
            type: "object",
            description: "Metric format (number, currency, percent, custom)",
            required: !1
          },
          {
            name: "decimals",
            type: "number",
            description: "Metric decimal places",
            required: !1
          },
          {
            name: "columns",
            type: "object[]",
            description: "Collection column definitions (id, label, width)",
            required: !1
          }
        ]
      },
      {
        name: "filters",
        type: "object",
        description: "Filter definitions keyed by filter ID.",
        required: !1
      },
      {
        name: "fetchSpecs",
        type: "object",
        description: "Fetch specs for server-side data retrieval, keyed by datasetId.",
        required: !1
      }
    ],
    available: "frontend",
    render: (n) => {
      const o = n.args, a = n.messageId;
      return n.status === "inProgress" || !o.title || !o.items || o.items.length === 0 ? /* @__PURE__ */ s(Ct, {}) : /* @__PURE__ */ s(
        Ys,
        {
          config: o,
          toolCallId: a,
          onView: (c) => e({
            type: "dashboard",
            title: c.title,
            config: c,
            apiConfig: r,
            toolCallId: a
          })
        }
      );
    }
  });
}, Om = ({
  onAction: e,
  actionHref: t
}) => {
  const n = Pe()?.ai?.growth?.bookAMeetingCard, o = n?.title ?? "Talk with an expert", a = n?.schedule ?? "Mon-Fri · 09:00-21:00 (CEST)", i = n?.actionLabel ?? "Book a meeting";
  return /* @__PURE__ */ T(Cn, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ T(wn, { className: "flex flex-col gap-3 p-0", children: [
      /* @__PURE__ */ s(Ge, { icon: W0, size: "lg" }),
      /* @__PURE__ */ T("div", { className: "flex flex-col gap-0.5", children: [
        /* @__PURE__ */ s("h3", { className: "text-base font-semibold text-f1-foreground", children: o }),
        /* @__PURE__ */ s("p", { className: "text-sm text-f1-foreground-secondary", children: a })
      ] })
    ] }),
    /* @__PURE__ */ s(a1, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: t ? /* @__PURE__ */ s(
      Ft,
      {
        variant: "default",
        size: "md",
        label: i,
        href: t,
        target: "_blank"
      }
    ) : /* @__PURE__ */ s(
      Ft,
      {
        type: "button",
        variant: "default",
        size: "md",
        label: i,
        onClick: e
      }
    ) })
  ] });
}, Dm = () => {
  Qt({
    name: "AiWidgets.UpsellKit.F0BookAMeetingCard",
    description: "Display a card to book a meeting with experts: avatars, title (e.g. 'Talk with an expert'), schedule (e.g. 'Mon-Fri · 09:00-21:00 (CEST)'), and a primary action button (e.g. 'Book a meeting').",
    parameters: [
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL for the action button (e.g. booking page)",
        required: !1
      },
      {
        name: "avatars",
        type: "object[]",
        description: "Optional list of expert avatars. Each object: { firstName, lastName, src? }",
        required: !1,
        attributes: [
          {
            name: "lastName",
            type: "string",
            description: "Last name of the expert",
            required: !0
          },
          {
            name: "src",
            type: "string",
            description: "Optional avatar image URL",
            required: !1
          }
        ]
      }
    ],
    available: "frontend",
    followUp: !1,
    render: (e) => {
      const t = e.args;
      return /* @__PURE__ */ s(
        Om,
        {
          actionHref: t.actionHref,
          onAction: t.actionHref ? void 0 : () => {
          }
        }
      );
    }
  });
}, Im = ({
  preview: e,
  moduleName: t,
  description: r,
  onAction: n,
  actionHref: o
}) => {
  const a = Pe(), i = a?.ai?.growth?.demoCard?.title ?? "Show {{moduleName}} in action", c = a?.ai?.growth?.demoCard?.actionLabel ?? "Start demo", f = i.replace("{{moduleName}}", t);
  return /* @__PURE__ */ T(Cn, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ T(wn, { className: "flex flex-col gap-4 p-0", children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: ce(
            "overflow-hidden rounded-lg border border-f1-border",
            "ring-1 ring-f1-border/50 bg-f1-background-inverse-secondary"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ T("div", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ s("h3", { className: "text-lg font-semibold text-f1-foreground", children: f }),
        /* @__PURE__ */ s("p", { className: "text-base text-f1-foreground-secondary", children: r })
      ] })
    ] }),
    /* @__PURE__ */ s(a1, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: o ? /* @__PURE__ */ s(
      Ft,
      {
        variant: "default",
        size: "md",
        label: c,
        href: o,
        target: "_blank"
      }
    ) : /* @__PURE__ */ s(
      Ft,
      {
        type: "button",
        variant: "default",
        size: "md",
        label: c,
        onClick: n
      }
    ) })
  ] });
}, Pm = /\.(mp4|webm|mov|ogg|ogv|m3u8)(\?|$)/i, Bm = (e) => Pm.test(e), Hm = () => /* @__PURE__ */ s(
  "div",
  {
    className: "flex min-h-[160px] w-full items-center justify-center bg-f1-background-tertiary",
    "aria-hidden": !0,
    children: /* @__PURE__ */ s("span", { className: "text-sm text-f1-foreground-secondary", children: "Preview" })
  }
), Vm = () => {
  Qt({
    name: "AiWidgets.UpsellKit.F0DemoCard",
    description: "Display a demo card with optional preview image or video, title, description, and a primary action button (e.g. for demos or guided walkthroughs).",
    parameters: [
      {
        name: "moduleName",
        type: "string",
        description: "Module name for the icon (e.g. company_projects, benefits, projects, calendar, reports)",
        required: !0
      },
      {
        name: "description",
        type: "string",
        description: "Description text below the title",
        required: !0
      },
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL for the action button (opens when user clicks)",
        required: !1
      },
      {
        name: "previewMediaUrl",
        type: "string",
        description: "Optional image or video URL for the preview area (type inferred from URL, e.g. .mp4, .webm for video)",
        required: !1
      }
    ],
    available: "frontend",
    followUp: !1,
    render: (e) => {
      const t = e.args, r = t.previewMediaUrl;
      let n = /* @__PURE__ */ s(Hm, {});
      return r && (Bm(r) ? n = /* @__PURE__ */ s(
        "video",
        {
          src: r,
          className: "h-auto w-full object-cover",
          autoPlay: !0,
          playsInline: !0,
          muted: !0,
          loop: !0,
          "aria-label": "Preview video"
        }
      ) : n = /* @__PURE__ */ s("img", { src: r, alt: "", className: "h-auto w-full object-cover" })), /* @__PURE__ */ s(
        Im,
        {
          moduleName: t.moduleName,
          description: t.description,
          preview: n,
          actionHref: t.actionHref,
          onAction: t.actionHref ? void 0 : () => {
          }
        }
      );
    }
  });
}, Um = ({ item: e, isExpanded: t, onToggle: r }) => /* @__PURE__ */ T(
  "div",
  {
    className: ce(
      "flex flex-col rounded-lg px-3 -mx-3 transition-colors duration-200",
      t && "bg-f1-background-secondary"
    ),
    children: [
      /* @__PURE__ */ T(
        "button",
        {
          type: "button",
          onClick: () => r(e.id),
          className: "flex w-full items-start justify-between gap-3 py-3 text-left transition-colors hover:opacity-80",
          "aria-expanded": t,
          "aria-controls": `faq-answer-${e.id}`,
          children: [
            /* @__PURE__ */ s("span", { className: "text-base font-medium text-f1-foreground", children: e.question }),
            /* @__PURE__ */ s("span", { className: "mt-0.5 flex-shrink-0 text-f1-foreground-secondary", children: /* @__PURE__ */ s(
              Ge,
              {
                icon: t ? hn : pn,
                size: "sm",
                className: ce(
                  "transition-transform duration-200",
                  t && "text-f1-foreground"
                )
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          id: `faq-answer-${e.id}`,
          role: "region",
          "aria-labelledby": `faq-question-${e.id}`,
          className: ce(
            "overflow-hidden transition-all duration-200",
            t ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          ),
          children: /* @__PURE__ */ s("p", { className: "pb-3 text-base text-f1-foreground-secondary", children: e.answer })
        }
      )
    ]
  }
), $m = ({
  headerIcon: e,
  items: t,
  defaultExpandedId: r,
  expandedId: n,
  onExpandedChange: o,
  allowMultiple: a = !1
}) => {
  const f = Pe()?.ai?.growth?.faqCard?.title ?? "Questions before getting started", l = e ?? ga, [u, d] = pe(
    () => new Set(r ? [r] : [])
  ), p = n !== void 0, g = ke(
    (h) => p ? n === h : u.has(h),
    [p, n, u]
  ), v = ke(
    (h) => {
      p ? o?.(n === h ? null : h) : d((m) => {
        const S = new Set(m);
        return S.has(h) ? S.delete(h) : (a || S.clear(), S.add(h)), S;
      });
    },
    [p, n, o, a]
  );
  return t.length === 0 ? null : /* @__PURE__ */ T(Cn, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ T(Ol, { className: "-mx-4 -mt-4 mb-2 flex flex-row items-center gap-2 rounded-t-xl bg-f1-background-secondary px-4 py-3", children: [
      /* @__PURE__ */ s("div", { className: "flex h-6 w-6 items-center justify-center rounded-full border border-f1-border-secondary", children: /* @__PURE__ */ s(
        Ge,
        {
          icon: l,
          size: "sm",
          className: "text-f1-foreground-secondary"
        }
      ) }),
      /* @__PURE__ */ s("h3", { className: "text-base font-semibold text-f1-foreground", children: f })
    ] }),
    /* @__PURE__ */ s(wn, { className: "flex flex-col divide-y divide-f1-border p-0", children: t.map((h) => /* @__PURE__ */ s(
      Um,
      {
        item: h,
        isExpanded: g(h.id),
        onToggle: v
      },
      h.id
    )) })
  ] });
}, jm = () => {
  Qt({
    name: "AiWidgets.UpsellKit.F0FAQCard",
    description: "Display an FAQ card with expandable questions and answers. Use this to show common questions and their answers in an accordion format.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Optional title for the card header (default: 'Questions before getting started')",
        required: !1
      },
      {
        name: "items",
        type: "object[]",
        description: "Array of FAQ items. Each object: { id, question, answer }",
        required: !0,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique identifier for the FAQ item",
            required: !0
          },
          {
            name: "question",
            type: "string",
            description: "The question text",
            required: !0
          },
          {
            name: "answer",
            type: "string",
            description: "The answer text",
            required: !0
          }
        ]
      },
      {
        name: "defaultExpandedId",
        type: "string",
        description: "Optional ID of the item to expand by default",
        required: !1
      },
      {
        name: "allowMultiple",
        type: "boolean",
        description: "Whether multiple items can be expanded at once (default: false)",
        required: !1
      }
    ],
    available: "frontend",
    followUp: !1,
    render: (e) => {
      const t = e.args;
      return /* @__PURE__ */ s(
        $m,
        {
          items: t.items ?? [],
          defaultExpandedId: t.defaultExpandedId,
          allowMultiple: t.allowMultiple
        }
      );
    }
  });
}, Wm = ({
  moduleName: e,
  description: t,
  onAction: r,
  actionHref: n,
  imageSrc: o
}) => {
  const i = Pe()?.ai?.growth?.moduleCard?.actionLabel ?? "Learn more";
  return /* @__PURE__ */ T(Cn, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ s(wn, { className: "flex flex-col gap-3 p-0", children: /* @__PURE__ */ T("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ s(
        Dl,
        {
          avatar: {
            type: "company",
            name: e || "",
            src: o || ""
          },
          size: "lg"
        }
      ),
      /* @__PURE__ */ T("div", { className: "flex min-w-0 flex-col gap-1", children: [
        /* @__PURE__ */ s("h3", { className: "text-lg font-semibold text-f1-foreground", children: e }),
        /* @__PURE__ */ s("p", { className: "text-base text-f1-foreground-secondary", children: t })
      ] })
    ] }) }),
    /* @__PURE__ */ s(a1, { className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: n ? /* @__PURE__ */ s(
      Ft,
      {
        variant: "outline",
        size: "md",
        label: i,
        href: n
      }
    ) : /* @__PURE__ */ s(
      Ft,
      {
        type: "button",
        variant: "outline",
        size: "md",
        label: i,
        onClick: r
      }
    ) })
  ] });
}, Zm = () => {
  Qt({
    name: "AiWidgets.UpsellKit.F0ModuleCard",
    description: "Display a module card with module icon, title, description, and an action button (e.g. 'Learn more') to redirect the user.",
    parameters: [
      {
        name: "moduleName",
        type: "string",
        description: "Module name for the icon (e.g. company_projects, benefits, projects, calendar, reports)",
        required: !0
      },
      {
        name: "imageSrc",
        type: "string",
        description: "Optional image source for the avatar",
        required: !1
      },
      {
        name: "description",
        type: "string",
        description: "Description text below the title",
        required: !0
      },
      {
        name: "actionHref",
        type: "string",
        description: "Optional URL for the action button (redirect)",
        required: !1
      }
    ],
    available: "frontend",
    followUp: !1,
    render: (e) => {
      const t = e.args;
      return /* @__PURE__ */ s(
        Wm,
        {
          imageSrc: t.imageSrc,
          moduleName: t.moduleName,
          description: t.description,
          actionHref: t.actionHref,
          onAction: t.actionHref ? void 0 : () => {
          }
        }
      );
    }
  });
}, Gm = ({
  steps: e,
  onComplete: t,
  onSkip: r,
  sendAsMessage: n = !1,
  onSendMessage: o
}) => {
  const [a, i] = pe(0), [c, f] = pe({}), l = Pe(), u = e.length, d = e[a], p = c[a] ?? [], g = ke(
    (_, N) => {
      f((I) => {
        const j = I[a] ?? [], A = N ? [...j, _] : j.filter((U) => U !== _);
        return { ...I, [a]: A };
      });
    },
    [a]
  ), v = ke(() => {
    a > 0 && i((_) => _ - 1);
  }, [a]), h = ke(() => {
    if (a < u - 1)
      i((_) => _ + 1);
    else {
      if (n && o) {
        const _ = Object.entries(c).map(([N, I]) => e[parseInt(N)].options.filter((A) => I.includes(A.id)).map((A) => A.label)).flat();
        _.length > 0 && o(_.join(", "));
      }
      t?.(c);
    }
  }, [
    a,
    u,
    n,
    o,
    c,
    e,
    t
  ]), m = a === u - 1, S = u > 1, F = r != null;
  return u === 0 || !d ? null : /* @__PURE__ */ T(Cn, { className: "flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ T(wn, { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ s("h3", { className: "text-base font-semibold text-f1-foreground", children: d.question }),
      /* @__PURE__ */ s("div", { className: "flex flex-col gap-3", children: d.options.map((_) => /* @__PURE__ */ s("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ s(
        Il,
        {
          id: _.id,
          title: _.label,
          checked: p.includes(_.id),
          onCheckedChange: (N) => g(_.id, N === !0)
        }
      ) }, _.id)) })
    ] }),
    /* @__PURE__ */ T(a1, { className: "-mx-4 -mb-4 mt-4 flex items-center justify-between rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3", children: [
      /* @__PURE__ */ s("div", { className: "flex min-w-[7.5rem] items-center justify-start gap-1", children: S && /* @__PURE__ */ T(Ct, { children: [
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: v,
            disabled: a <= 0,
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
            "aria-label": "Previous",
            children: /* @__PURE__ */ s(Ge, { icon: G0, size: "sm" })
          }
        ),
        /* @__PURE__ */ T("span", { className: "min-w-[2.5rem] text-center text-sm text-f1-foreground-secondary", children: [
          a + 1,
          "/",
          u
        ] }),
        /* @__PURE__ */ s(
          "button",
          {
            type: "button",
            onClick: h,
            disabled: a >= u - 1,
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
            "aria-label": "Next",
            children: /* @__PURE__ */ s(Ge, { icon: pn, size: "sm" })
          }
        )
      ] }) }),
      /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
        F && /* @__PURE__ */ s(
          Ft,
          {
            type: "button",
            variant: "ghost",
            size: "md",
            label: l?.ai?.growth?.questionCard?.skipLabel ?? "Skip",
            onClick: r
          }
        ),
        /* @__PURE__ */ s(
          Ft,
          {
            type: "button",
            variant: "outline",
            size: "md",
            label: m ? l?.ai?.growth?.questionCard?.sendLabel ?? "Send" : l?.ai?.growth?.questionCard?.actionLabel ?? "Next",
            onClick: h
          }
        )
      ] })
    ] })
  ] });
};
function zm({ args: e, steps: t }) {
  const { sendMessage: r } = Ye(), n = e.skipLabel != null && e.skipLabel !== "", o = e.sendAsMessage === !0;
  return /* @__PURE__ */ s(
    Gm,
    {
      steps: t,
      sendAsMessage: o,
      onSendMessage: o ? (a) => r(a) : void 0,
      onSkip: n ? () => {
      } : void 0
    }
  );
}
const Km = () => {
  Qt({
    name: "AiWidgets.UpsellKit.F0QuestionCard",
    description: "Display a question card that asks the user a question with multiple checkbox options, pagination (e.g. 1/n), Skip and Next buttons. Use before answering to gather user input. When sendAsMessage is true, Next sends the selected label(s) as a user message to trigger the next workflow turn.",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "Optional card title (e.g. 'AI Card Title')",
        required: !1
      },
      {
        name: "question",
        type: "string",
        description: "Question text shown above the options (used when steps is not provided)",
        required: !1
      },
      {
        name: "options",
        type: "object[]",
        description: "Checkbox options. Each object: { id: string, label: string }. Required when steps is not used. User can select one or more.",
        required: !1,
        attributes: [
          {
            name: "id",
            type: "string",
            description: "Unique id for the option",
            required: !0
          },
          {
            name: "label",
            type: "string",
            description: "Label text next to the checkbox",
            required: !0
          }
        ]
      },
      {
        name: "steps",
        type: "object[]",
        description: "Multi-step: array of { question: string, options: { id, label }[] }. When provided, pagination works and Prev/Next switch between steps.",
        required: !1,
        attributes: [
          {
            name: "question",
            type: "string",
            description: "Question text for this step",
            required: !0
          },
          {
            name: "options",
            type: "object[]",
            description: "Checkbox options for this step: { id: string, label: string }[]",
            required: !0,
            attributes: [
              { name: "id", type: "string", required: !0 },
              { name: "label", type: "string", required: !0 }
            ]
          }
        ]
      },
      {
        name: "currentStep",
        type: "number",
        description: "Current step (1-based) for pagination display (e.g. 1 for '1/n')",
        required: !1
      },
      {
        name: "totalSteps",
        type: "number",
        description: "Total number of steps for pagination (e.g. 3 for '1/3')",
        required: !1
      },
      {
        name: "nextLabel",
        type: "string",
        description: "Label for the Next button (default 'Next')",
        required: !1
      },
      {
        name: "skipLabel",
        type: "string",
        description: "Label for the Skip button (default 'Skip'). Omit Skip by not sending skipLabel if your backend does not support it.",
        required: !1
      },
      {
        name: "sendAsMessage",
        type: "boolean",
        description: "When true, clicking Next sends the selected option label(s) as a new user chat message, triggering a new workflow turn (e.g. AI recommends the module).",
        required: !1
      }
    ],
    available: "frontend",
    followUp: !1,
    render: (e) => {
      const t = e.args, r = (o) => o?.map((a) => ({ id: a.id, label: a.label })) ?? [], n = t.steps && t.steps.length > 0 ? t.steps.map((o) => ({
        question: o.question,
        options: r(o.options ?? [])
      })) : t.question != null && t.options != null ? [
        {
          question: t.question,
          options: r(t.options)
        }
      ] : [];
      return /* @__PURE__ */ s(zm, { args: t, steps: n });
    }
  });
}, qs = () => {
  Pd(), Ud(), Rm(), Vm(), Dm(), Km(), Zm(), jm(), Nm();
};
function Xm(e, t) {
  const { id: r, role: n, content: o } = e;
  if (typeof o == "string")
    return [{ id: r, role: n, content: o }];
  const a = o.parts;
  if (!a || a.length === 0)
    return [{ id: r, role: n, content: o.content ?? "" }];
  const i = [];
  let c = 0;
  for (const f of a) {
    if (f.type === "text")
      f.text && i.push({ id: `${r}_t${c}`, role: n, content: f.text });
    else {
      const { toolInvocation: l } = f, u = {
        id: l.toolCallId,
        type: "function",
        function: {
          name: l.toolName,
          arguments: JSON.stringify(l.args)
        }
      }, d = {
        id: `${r}_tc${c}`,
        role: n,
        content: "",
        toolCalls: [u]
      }, p = t?.[l.toolName];
      if (p?.render) {
        const g = p.render, v = l.args, h = l.result, m = l.toolCallId;
        d.generativeUI = (S) => g({
          status: "complete",
          args: v,
          result: h,
          toolCallId: m,
          respond: () => {
          },
          ...S
        });
      }
      i.push(d);
    }
    c++;
  }
  return i.length > 0 ? i : [{ id: r, role: n, content: o.content ?? "" }];
}
async function Ym(e, t, r, n) {
  const o = await fetch(
    `${e}/chat-history/threads/${r}/messages`,
    {
      credentials: "include",
      headers: { ...t }
    }
  );
  if (!o.ok)
    throw new Error(`Failed to fetch thread messages: ${o.status}`);
  return (await o.json()).messages.flatMap((i) => Xm(i, n));
}
function qm() {
  const e = Le(null), t = Le(null), [r, n] = pe(!1), o = ke((a = "smooth") => {
    e.current?.scrollIntoView({ behavior: a });
  }, []);
  return Te(() => {
    const a = t.current;
    if (!a) return;
    const i = () => {
      const c = a.scrollHeight - a.scrollTop - a.clientHeight;
      n(c > a.clientHeight);
    };
    return a.addEventListener("scroll", i, { passive: !0 }), () => a.removeEventListener("scroll", i);
  }, []), {
    messagesEndRef: e,
    messagesContainerRef: t,
    showScrollToBottom: r,
    scrollToBottom: o
  };
}
const Jm = (e) => /* @__PURE__ */ s(ii, { children: /* @__PURE__ */ s(Qm, { ...e }) }), Qm = ({
  inProgress: e,
  RenderMessage: t,
  AssistantMessage: r,
  UserMessage: n,
  ImageRenderer: o,
  onRegenerate: a,
  onCopy: i,
  markdownTagRenderers: c
}) => {
  const f = Le(null), { messages: l, interrupt: u, isLoading: d } = fr(), p = e ?? d, g = r ?? ti, v = n ?? gi, h = o ?? (({ image: ge, content: me }) => /* @__PURE__ */ s(
    "img",
    {
      src: ge,
      alt: me || "Assistant image",
      className: "max-w-full rounded-lg"
    }
  )), { setInProgress: m } = kn(m1), { modal: S, handleSubmit: F, handleClose: _ } = ci();
  Te(() => {
    m(p);
  }, [p, m]);
  const N = Pe(), { greeting: I, initialMessage: j, welcomeScreenSuggestions: A } = Ye(), U = Qe(
    () => eC(
      j || N.ai.defaultInitialMessage
    ),
    [j, N.ai.defaultInitialMessage]
  ), O = l.length === 0 && (I || U.length > 0), {
    messagesContainerRef: G,
    messagesEndRef: Y,
    showScrollToBottom: W,
    scrollToBottom: K
  } = qm(), he = Qe(() => fi(l), [l]), ae = Le(l.length), ve = l[l.length - 1]?.content || "", ye = Le(ve);
  return Te(() => {
    const ge = l.length > ae.current, me = l.length === ae.current && ve !== ye.current;
    if (ge || me) {
      const Ee = l[l.length - 1]?.role === "user", y = (D = "instant") => {
        const R = G.current;
        if (R) {
          const b = Ee ? 400 : 250, Z = R.scrollHeight - R.scrollTop - R.clientHeight < b;
          (Ee || Z) && K(D);
        }
      };
      if (ge) {
        y("instant");
        const D = [50, 150, 400].map(
          (R) => setTimeout(() => y("instant"), R)
        );
        return ae.current = l.length, ye.current = ve, () => D.forEach(clearTimeout);
      } else me && y("instant");
    }
    ae.current = l.length, ye.current = ve;
  }, [l.length, ve, K]), Te(() => {
    const ge = G.current;
    if (!ge) return;
    let me = !0;
    const Fe = () => {
      me = ge.scrollHeight - ge.scrollTop - ge.clientHeight < 150;
    }, Ee = () => {
      const oe = [50, 150, 300, 600].map(
        (le) => setTimeout(() => {
          me && K("instant");
        }, le)
      );
      return () => oe.forEach(clearTimeout);
    }, y = (Z) => {
      const oe = Z.target;
      (oe.tagName === "TEXTAREA" || oe.tagName === "INPUT" && oe.type === "text") && setTimeout(() => {
        K("instant"), setTimeout(() => K("instant"), 300);
      }, 100);
    }, D = (Z) => {
      ge._startY = Z.touches[0].pageY;
    }, R = (Z) => {
      const { scrollTop: oe, scrollHeight: le, clientHeight: se } = ge, re = oe <= 0, Se = oe + se >= le, Be = Z.touches[0].pageY, _e = ge._startY || Be, ht = Be > _e ? "down" : "up";
      (le <= se || re && ht === "down" || Se && ht === "up") && Z.cancelable && Z.preventDefault();
    }, b = new ResizeObserver(Ee);
    return b.observe(ge), ge.addEventListener("scroll", Fe), ge.addEventListener("touchstart", D, {
      passive: !0
    }), ge.addEventListener("touchmove", R, { passive: !1 }), window.addEventListener("resize", Ee), window.addEventListener("focusin", y), window.visualViewport && (window.visualViewport.addEventListener("resize", Ee), window.visualViewport.addEventListener("scroll", Ee)), () => {
      b.disconnect(), ge.removeEventListener("scroll", Fe), ge.removeEventListener("touchstart", D), ge.removeEventListener("touchmove", R), window.removeEventListener("resize", Ee), window.removeEventListener("focusin", y), window.visualViewport && (window.visualViewport.removeEventListener("resize", Ee), window.visualViewport.removeEventListener("scroll", Ee));
    };
  }, [K]), /* @__PURE__ */ T(Ct, { children: [
    /* @__PURE__ */ T(
      "div",
      {
        ref: G,
        className: ce(
          "scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4",
          O ? "justify-end pt-0" : "justify-start pt-3"
        ),
        style: {
          minHeight: 0,
          flex: "1 1 auto",
          overflowY: O ? "hidden" : "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: O ? "flex-end" : "flex-start",
          position: "relative",
          touchAction: O ? "none" : "pan-y",
          paddingTop: O ? 0 : void 0,
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          transform: "translateZ(0)",
          willChange: "scroll-position"
        },
        children: [
          /* @__PURE__ */ T(
            "div",
            {
              ref: f,
              className: O ? "flex flex-1" : "flex flex-col gap-8",
              style: {
                width: "100%",
                display: "flex",
                flexDirection: "column",
                minHeight: O ? "100%" : void 0,
                flexGrow: 1,
                flexShrink: 1,
                alignItems: "stretch",
                paddingBottom: O ? "12px" : void 0
              },
              children: [
                O && /* @__PURE__ */ s(
                  pi,
                  {
                    greeting: I,
                    initialMessages: U,
                    suggestions: A
                  }
                ),
                he.map((ge, me) => {
                  const { turnIsComplete: Fe, showActivityIndicator: Ee } = li(
                    ge,
                    me,
                    he.length,
                    p
                  ), { thinkingGroup: y, restMessages: D } = ui(ge), R = me === he.length - 1;
                  return /* @__PURE__ */ T(
                    "div",
                    {
                      className: "flex flex-col items-start justify-start gap-2",
                      children: [
                        D.map((b, Z) => {
                          const oe = R && Z === D.length - 1, le = b, se = D.findIndex(
                            (_e) => _e.role === "assistant"
                          ), re = y && !(R && !Fe) && Z === se, Se = {
                            key: `${me}-${Z}`,
                            message: le,
                            inProgress: p,
                            index: Z,
                            isCurrentMessage: oe,
                            AssistantMessage: g,
                            UserMessage: v,
                            ImageRenderer: h,
                            onRegenerate: a,
                            onCopy: i,
                            markdownTagRenderers: c,
                            rawData: le.rawData || {}
                          }, { key: Ce, ...Be } = Se;
                          return t ? /* @__PURE__ */ T(R1, { children: [
                            re && /* @__PURE__ */ s(
                              H1,
                              {
                                messages: y,
                                isActive: !1,
                                inProgress: p,
                                RenderMessage: t,
                                AssistantMessage: g
                              }
                            ),
                            /* @__PURE__ */ s(t, { ...Be })
                          ] }, Ce) : le.role === "user" ? /* @__PURE__ */ s(v, { ...Be }, Ce) : /* @__PURE__ */ T(R1, { children: [
                            re && /* @__PURE__ */ s(
                              H1,
                              {
                                messages: y,
                                isActive: !1,
                                inProgress: p,
                                RenderMessage: t,
                                AssistantMessage: g
                              }
                            ),
                            /* @__PURE__ */ s(
                              g,
                              {
                                ...Be,
                                isGenerating: p && oe,
                                isLoading: p && oe && !le.content
                              }
                            )
                          ] }, Ce);
                        }),
                        y && R && !Fe && !Ee && (() => {
                          const b = y[y.length - 1], Z = {
                            message: b,
                            inProgress: p,
                            index: D.length,
                            isCurrentMessage: !0,
                            AssistantMessage: g,
                            UserMessage: v,
                            ImageRenderer: h,
                            onRegenerate: a,
                            onCopy: i,
                            markdownTagRenderers: c,
                            rawData: b.rawData || {}
                          };
                          return t ? /* @__PURE__ */ s(
                            t,
                            {
                              ...Z
                            },
                            `thinking-live-${me}`
                          ) : /* @__PURE__ */ s(
                            g,
                            {
                              ...Z,
                              isGenerating: !0,
                              isLoading: !b.content
                            },
                            `thinking-live-${me}`
                          );
                        })(),
                        Ee && /* @__PURE__ */ s(l1, { title: "", status: "executing" }),
                        Fe && /* @__PURE__ */ s(hi, { messages: ge, onCopy: i })
                      ]
                    },
                    `turn-${me}`
                  );
                }),
                u,
                /* @__PURE__ */ s("div", { ref: Y, className: "h-2" })
              ]
            }
          ),
          /* @__PURE__ */ s(Ut, { children: W && /* @__PURE__ */ s(
            Ae.div,
            {
              className: "sticky bottom-20 z-10 flex justify-center",
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ s("div", { className: "rounded bg-f1-background", children: /* @__PURE__ */ s(
                yt,
                {
                  onClick: () => K(),
                  label: N.ai.scrollToBottom,
                  variant: "neutral",
                  icon: W1,
                  hideLabel: !0
                }
              ) })
            }
          ) })
        ]
      }
    ),
    S.isOpen && /* @__PURE__ */ s(
      di,
      {
        onSubmit: F,
        onClose: _,
        reactionType: S.currentReaction,
        message: S.currentMessage
      }
    )
  ] });
};
function eC(e) {
  const t = [];
  return e && (Array.isArray(e) ? t.push(...e) : t.push(e)), t.map((r) => ({
    id: r,
    role: "assistant",
    content: r
  }));
}
const m1 = X1({
  inProgress: !1,
  setInProgress: () => {
  }
}), tC = () => {
  const { sendMessage: e } = Ye(), { interrupt: t } = fr(), { inProgress: r } = kn(m1);
  return /* @__PURE__ */ s("div", { className: "w-full px-4 py-2", children: /* @__PURE__ */ s(
    ni,
    {
      inProgress: r,
      onSend: async (a) => (e(a), {
        id: "",
        role: "user",
        content: a
      }),
      onStop: () => {
        if (t && typeof t != "string") {
          const a = document.querySelector(
            '[aria-label*="Stop"]'
          );
          a && a.click();
        }
      }
    }
  ) });
}, rC = () => {
  const { enabled: e } = Ye(), [t, r] = pe(!1), n = Le(null);
  return qs(), Te(() => {
    const o = n.current;
    if (!o) return;
    const a = (i) => {
      i.cancelable && i.preventDefault();
    };
    return o.addEventListener("touchmove", a, { passive: !1 }), () => {
      o.removeEventListener("touchmove", a);
    };
  }, []), Te(() => {
    const o = document.createElement("style");
    return o.innerHTML = `
      html, body {
        overflow: hidden !important;
        height: 100% !important;
        width: 100% !important;
        margin: 0;
        padding: 0;
      }
      #root {
        height: 100% !important;
        width: 100% !important;
        overflow: hidden !important;
        display: flex;
        flex-direction: column;
      }
      ::-webkit-scrollbar {
        display: none !important;
      }
      * {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
        -webkit-tap-highlight-color: transparent;
      }
    `, document.head.appendChild(o), () => {
      document.head.removeChild(o);
    };
  }, []), e ? /* @__PURE__ */ s(m1.Provider, { value: { inProgress: t, setInProgress: r }, children: /* @__PURE__ */ T(
    "div",
    {
      className: "bg-white",
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        overscrollBehavior: "none"
      },
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            style: {
              flex: 1,
              minHeight: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden"
            },
            children: /* @__PURE__ */ s(Jm, {})
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            ref: n,
            className: ce(
              "flex-shrink-0 w-full bg-white border-t border-f1-border transition-all",
              "pb-[env(safe-area-inset-bottom,12px)] focus-within:pb-0"
            ),
            style: {
              flexShrink: 0,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              zIndex: 10,
              touchAction: "none"
            },
            children: /* @__PURE__ */ s(tC, {})
          }
        )
      ]
    }
  ) }) : null;
}, nC = ({
  enabled: e = !1,
  greeting: t,
  initialMessage: r,
  welcomeScreenSuggestions: n,
  disclaimer: o,
  resizable: a = !1,
  defaultVisualizationMode: i,
  lockVisualizationMode: c,
  historyEnabled: f,
  footer: l,
  entityResolvers: u,
  toolHints: d,
  onThumbsUp: p,
  onThumbsDown: g,
  children: v,
  agent: h,
  tracking: m,
  ...S
}) => /* @__PURE__ */ s(
  I3,
  {
    enabled: e,
    greeting: t,
    initialMessage: r,
    onThumbsUp: p,
    onThumbsDown: g,
    agent: h,
    welcomeScreenSuggestions: n,
    disclaimer: o,
    resizable: a,
    defaultVisualizationMode: i,
    lockVisualizationMode: c,
    historyEnabled: f,
    footer: l,
    tracking: m,
    entityResolvers: u,
    toolHints: d,
    children: /* @__PURE__ */ s(oC, { ...S, children: v })
  }
), oC = ({
  children: e,
  ...t
}) => {
  const { agent: r } = Ye();
  return /* @__PURE__ */ T(Bl, { runtimeUrl: "/copilotkit", agent: r, ...t, children: [
    /* @__PURE__ */ s(aC, {}),
    e
  ] });
}, aC = () => {
  const {
    setClearFunction: e,
    setLoadThreadFunction: t,
    setIsLoadingThread: r,
    setSendMessageFunction: n
  } = Ye(), { reset: o, setMessages: a, sendMessage: i } = fr(), { setThreadId: c, copilotApiConfig: f, actions: l } = s1();
  return Te(() => (e(() => {
    o(), c(c1());
  }), () => {
    e(null);
  }), [e, o, c]), Te(() => (t((u) => {
    a([]), r(!0), c(u), Ym(
      f.chatApiEndpoint,
      f.headers,
      u,
      l
    ).then(
      (d) => a(d),
      () => {
      }
      // Best-effort: if it fails, stay empty
    ).finally(() => r(!1));
  }), () => {
    t(null);
  }), [
    t,
    c,
    a,
    r,
    f,
    l
  ]), Te(() => (i && n(i), () => {
    n(null);
  }), [n, i]), null;
}, iC = (e) => {
  const { disclaimer: t, footer: r, visualizationMode: n, isLoadingThread: o } = Ye(), { messages: a } = fr(), i = Le(null), c = a.length === 0 && !o, f = n === "fullscreen", l = f && c;
  return Te(() => {
    i.current?.querySelector("textarea")?.focus();
  }, [n]), /* @__PURE__ */ T(
    "div",
    {
      ref: i,
      className: ce(
        "flex flex-col items-center gap-2 px-4 pb-4 pt-2",
        l && "flex-1"
      ),
      children: [
        /* @__PURE__ */ s(
          Ae.div,
          {
            layout: "position",
            className: "w-full max-w-[712px]",
            transition: {
              layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            },
            children: /* @__PURE__ */ s(ni, { ...e })
          }
        ),
        t?.text && /* @__PURE__ */ T(
          Ae.div,
          {
            layout: "position",
            className: "flex w-full max-w-[712px] flex-row items-center justify-center gap-1",
            transition: {
              layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
            },
            children: [
              /* @__PURE__ */ s(ir, { className: "text-sm font-medium text-f1-foreground-tertiary", children: t.text }),
              t.link && t.linkText && /* @__PURE__ */ s(
                Ir,
                {
                  href: t.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex-shrink-0 text-sm font-medium text-f1-foreground-tertiary",
                  children: t.linkText
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s(Ut, { children: r && c && /* @__PURE__ */ s(
          Ae.div,
          {
            className: ce(
              "w-full py-4 mx-auto max-w-[712px]",
              l && "mt-auto",
              f && "flex justify-center"
            ),
            initial: { opacity: 0, height: 0, overflow: "hidden" },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0, overflow: "hidden" },
            transition: { duration: 0.3, ease: "easeInOut" },
            children: r
          },
          "chat-footer"
        ) })
      ]
    }
  );
}, sC = () => {
  const { enabled: e, open: t, setOpen: r } = Ye();
  return qs(), e ? /* @__PURE__ */ s(
    Vl,
    {
      className: "h-full w-full",
      defaultOpen: t,
      onSetOpen: (n) => {
        r(n);
      },
      Window: Ld,
      Header: ld,
      Messages: Ad,
      Button: () => null,
      Input: iC,
      UserMessage: gi,
      AssistantMessage: ti
    }
  ) : null;
}, vC = mn("F0AiChat", sC), xC = mn(
  "F0AiFullscreenChat",
  rC
), mC = mn(
  "F0AiChatProvider",
  nC
);
export {
  p2 as $,
  $9 as A,
  P9 as B,
  D9 as C,
  Y2 as D,
  V9 as E,
  vC as F,
  v5 as G,
  B9 as H,
  U9 as I,
  k3 as J,
  G5 as K,
  Z9 as L,
  ou as M,
  R6 as N,
  W9 as O,
  I9 as P,
  da as Q,
  R2 as R,
  ed as S,
  G9 as T,
  j9 as U,
  C9 as V,
  n3 as W,
  Jl as X,
  g3 as Y,
  Hu as Z,
  f2 as _,
  mC as a,
  ha as a0,
  V4 as a1,
  f5 as a2,
  q1 as a3,
  Y1 as a4,
  w9 as a5,
  ma as a6,
  ka as a7,
  M3 as a8,
  Aa as a9,
  T9 as aA,
  y9 as aB,
  $5 as aC,
  G6 as aD,
  W6 as aE,
  va as aF,
  W4 as aG,
  _5 as aH,
  b3 as aI,
  h9 as aJ,
  p9 as aK,
  g9 as aL,
  d2 as aM,
  v2 as aN,
  E2 as aO,
  m2 as aP,
  _2 as aQ,
  w2 as aR,
  V2 as aS,
  Y4 as aT,
  C3 as aU,
  a3 as aV,
  zu as aW,
  qa as aX,
  xa as aa,
  t3 as ab,
  vu as ac,
  o4 as ad,
  e4 as ae,
  J5 as af,
  Y5 as ag,
  r4 as ah,
  w6 as ai,
  F4 as aj,
  M4 as ak,
  R4 as al,
  ju as am,
  $4 as an,
  L3 as ao,
  m5 as ap,
  m6 as aq,
  cu as ar,
  B2 as as,
  t6 as at,
  E5 as au,
  Un as av,
  ga as aw,
  d5 as ax,
  Iu as ay,
  Ru as az,
  xC as b,
  m1 as c,
  qs as d,
  Pd as e,
  Ud as f,
  l1 as g,
  oi as h,
  Ys as i,
  bm as j,
  ei as k,
  rd as l,
  z9 as m,
  X9 as n,
  K9 as o,
  td as p,
  q9 as q,
  J9 as r,
  Q9 as s,
  Y9 as t,
  Ye as u,
  Vd as v,
  ya as w,
  gC as x,
  H1 as y,
  kd as z
};
