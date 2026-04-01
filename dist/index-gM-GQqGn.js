import { jsx as U, jsxs as Ae, Fragment as Gn } from "react/jsx-runtime";
import * as er from "react";
import A, { isValidElement as ht, Children as Or, PureComponent as tt, forwardRef as ef, useRef as ma, useImperativeHandle as hx, useState as Di, useCallback as va, useEffect as tf, useMemo as rf, cloneElement as Me, createElement as Dm, useContext as _t, createContext as nr, Component as Lm, useLayoutEffect as vx } from "react";
import { bT as Li, bU as Bi, bV as mt, bW as yx, bX as Bm, bG as ye, bY as mx, bZ as Pn, b as ae, b_ as gx, b$ as qm, c0 as nf, c1 as Fm, c2 as Wm, c3 as bx, c4 as xx, c5 as zm, c6 as Ox, c7 as wx, c8 as Px, c9 as wo, ca as Ax, cb as Sx, cc as _x, cd as Ex, i as tr, ce as Tx, cf as jx, h as Mt, r as $x, b7 as Mx, aG as Ix, as as Cx } from "./index-DyAxXmVo.js";
const kx = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Rx = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += kx[r[e] & 63];
  return t;
};
var nu, od;
function An() {
  if (od) return nu;
  od = 1;
  var e = Li(), t = Bi(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return nu = n, nu;
}
var iu, ud;
function af() {
  if (ud) return iu;
  ud = 1;
  var e = mt(), t = An(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return iu = i, iu;
}
var au, cd;
function Um() {
  if (cd) return au;
  cd = 1;
  var e = yx(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, u = i ? i.apply(this, o) : o[0], c = a.cache;
      if (c.has(u))
        return c.get(u);
      var s = n.apply(this, o);
      return a.cache = c.set(u, s) || c, s;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, au = r, au;
}
var ou, sd;
function Nx() {
  if (sd) return ou;
  sd = 1;
  var e = Um(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return ou = r, ou;
}
var uu, ld;
function Dx() {
  if (ld) return uu;
  ld = 1;
  var e = Nx(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, u, c, s) {
      a.push(c ? s.replace(r, "$1") : u || o);
    }), a;
  });
  return uu = n, uu;
}
var cu, fd;
function of() {
  if (fd) return cu;
  fd = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return cu = e, cu;
}
var su, dd;
function Lx() {
  if (dd) return su;
  dd = 1;
  var e = Bm(), t = of(), r = mt(), n = An(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return a ? a.call(u) : "";
    var c = u + "";
    return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
  }
  return su = o, su;
}
var lu, pd;
function Km() {
  if (pd) return lu;
  pd = 1;
  var e = Lx();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return lu = t, lu;
}
var fu, hd;
function Hm() {
  if (hd) return fu;
  hd = 1;
  var e = mt(), t = af(), r = Dx(), n = Km();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return fu = i, fu;
}
var du, vd;
function Po() {
  if (vd) return du;
  vd = 1;
  var e = An();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return du = t, du;
}
var pu, yd;
function uf() {
  if (yd) return pu;
  yd = 1;
  var e = Hm(), t = Po();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return pu = r, pu;
}
var hu, md;
function Gm() {
  if (md) return hu;
  md = 1;
  var e = uf();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return hu = t, hu;
}
var Bx = Gm();
const Je = /* @__PURE__ */ ye(Bx);
var vu, gd;
function qx() {
  if (gd) return vu;
  gd = 1;
  function e(t) {
    return t == null;
  }
  return vu = e, vu;
}
var Fx = qx();
const ne = /* @__PURE__ */ ye(Fx);
var yu, bd;
function Wx() {
  if (bd) return yu;
  bd = 1;
  var e = Li(), t = mt(), r = Bi(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return yu = i, yu;
}
var zx = Wx();
const qi = /* @__PURE__ */ ye(zx);
var Ux = mx();
const Q = /* @__PURE__ */ ye(Ux);
var Kx = Pn();
const Sn = /* @__PURE__ */ ye(Kx);
var Qi = { exports: {} }, le = {};
var xd;
function Hx() {
  if (xd) return le;
  xd = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), s = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y;
  y = /* @__PURE__ */ Symbol.for("react.module.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var g = h.$$typeof;
      switch (g) {
        case e:
          switch (h = h.type, h) {
            case r:
            case i:
            case n:
            case s:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case o:
                case c:
                case d:
                case f:
                case a:
                  return h;
                default:
                  return g;
              }
          }
        case t:
          return g;
      }
    }
  }
  return le.ContextConsumer = o, le.ContextProvider = a, le.Element = e, le.ForwardRef = c, le.Fragment = r, le.Lazy = d, le.Memo = f, le.Portal = t, le.Profiler = i, le.StrictMode = n, le.Suspense = s, le.SuspenseList = l, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(h) {
    return v(h) === o;
  }, le.isContextProvider = function(h) {
    return v(h) === a;
  }, le.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, le.isForwardRef = function(h) {
    return v(h) === c;
  }, le.isFragment = function(h) {
    return v(h) === r;
  }, le.isLazy = function(h) {
    return v(h) === d;
  }, le.isMemo = function(h) {
    return v(h) === f;
  }, le.isPortal = function(h) {
    return v(h) === t;
  }, le.isProfiler = function(h) {
    return v(h) === i;
  }, le.isStrictMode = function(h) {
    return v(h) === n;
  }, le.isSuspense = function(h) {
    return v(h) === s;
  }, le.isSuspenseList = function(h) {
    return v(h) === l;
  }, le.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === i || h === n || h === s || h === l || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === a || h.$$typeof === o || h.$$typeof === c || h.$$typeof === y || h.getModuleId !== void 0);
  }, le.typeOf = v, le;
}
var fe = {};
var Od;
function Gx() {
  return Od || (Od = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.server_context"), c = /* @__PURE__ */ Symbol.for("react.forward_ref"), s = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y = !1, v = !1, h = !1, g = !1, b = !1, x;
    x = /* @__PURE__ */ Symbol.for("react.module.reference");
    function w(z) {
      return !!(typeof z == "string" || typeof z == "function" || z === r || z === i || b || z === n || z === s || z === l || g || z === p || y || v || h || typeof z == "object" && z !== null && (z.$$typeof === d || z.$$typeof === f || z.$$typeof === a || z.$$typeof === o || z.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      z.$$typeof === x || z.getModuleId !== void 0));
    }
    function m(z) {
      if (typeof z == "object" && z !== null) {
        var ge = z.$$typeof;
        switch (ge) {
          case e:
            var we = z.type;
            switch (we) {
              case r:
              case i:
              case n:
              case s:
              case l:
                return we;
              default:
                var De = we && we.$$typeof;
                switch (De) {
                  case u:
                  case o:
                  case c:
                  case d:
                  case f:
                  case a:
                    return De;
                  default:
                    return ge;
                }
            }
          case t:
            return ge;
        }
      }
    }
    var O = o, P = a, S = e, _ = c, $ = r, E = d, j = f, M = t, C = i, k = n, R = s, L = l, F = !1, K = !1;
    function I(z) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(z) {
      return K || (K = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(z) {
      return m(z) === o;
    }
    function H(z) {
      return m(z) === a;
    }
    function V(z) {
      return typeof z == "object" && z !== null && z.$$typeof === e;
    }
    function J(z) {
      return m(z) === c;
    }
    function ee(z) {
      return m(z) === r;
    }
    function ie(z) {
      return m(z) === d;
    }
    function re(z) {
      return m(z) === f;
    }
    function q(z) {
      return m(z) === t;
    }
    function G(z) {
      return m(z) === i;
    }
    function Z(z) {
      return m(z) === n;
    }
    function T(z) {
      return m(z) === s;
    }
    function ue(z) {
      return m(z) === l;
    }
    fe.ContextConsumer = O, fe.ContextProvider = P, fe.Element = S, fe.ForwardRef = _, fe.Fragment = $, fe.Lazy = E, fe.Memo = j, fe.Portal = M, fe.Profiler = C, fe.StrictMode = k, fe.Suspense = R, fe.SuspenseList = L, fe.isAsyncMode = I, fe.isConcurrentMode = D, fe.isContextConsumer = B, fe.isContextProvider = H, fe.isElement = V, fe.isForwardRef = J, fe.isFragment = ee, fe.isLazy = ie, fe.isMemo = re, fe.isPortal = q, fe.isProfiler = G, fe.isStrictMode = Z, fe.isSuspense = T, fe.isSuspenseList = ue, fe.isValidElementType = w, fe.typeOf = m;
  })()), fe;
}
var wd;
function Vx() {
  return wd || (wd = 1, process.env.NODE_ENV === "production" ? Qi.exports = Hx() : Qi.exports = Gx()), Qi.exports;
}
var Yx = Vx(), mu, Pd;
function Vm() {
  if (Pd) return mu;
  Pd = 1;
  var e = Li(), t = Bi(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return mu = n, mu;
}
var gu, Ad;
function Xx() {
  if (Ad) return gu;
  Ad = 1;
  var e = Vm();
  function t(r) {
    return e(r) && r != +r;
  }
  return gu = t, gu;
}
var Zx = Xx();
const _n = /* @__PURE__ */ ye(Zx);
var Jx = Vm();
const Qx = /* @__PURE__ */ ye(Jx);
var ze = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, yr = function(t) {
  return qi(t) && t.indexOf("%") === t.length - 1;
}, W = function(t) {
  return Qx(t) && !_n(t);
}, Ce = function(t) {
  return W(t) || qi(t);
}, eO = 0, jr = function(t) {
  var r = ++eO;
  return "".concat(t || "").concat(r);
}, Ue = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!W(t) && !qi(t))
    return n;
  var a;
  if (yr(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return _n(a) && (a = n), i && a > r && (a = r), a;
}, Xt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, tO = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Se = function(t, r) {
  return W(t) && W(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function ga(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Je(n, t)) === r;
  });
}
var mD = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, i = 0, a = 0, o = 0, u = 1 / 0, c = -1 / 0, s = 0, l = 0, f = 0; f < r; f++)
    s = t[f].cx || 0, l = t[f].cy || 0, n += s, i += l, a += s * l, o += s * s, u = Math.min(u, s), c = Math.max(c, s);
  var d = r * o !== n * n ? (r * a - n * i) / (r * o - n * n) : 0;
  return {
    xmin: u,
    xmax: c,
    a: d,
    b: (i - d * n) / r
  };
};
function Kr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function $s(e) {
  "@babel/helpers - typeof";
  return $s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $s(e);
}
var rO = ["viewBox", "children"], nO = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Sd = ["points", "pathLength"], bu = {
  svg: rO,
  polygon: Sd,
  polyline: Sd
}, cf = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], ba = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ ht(t) && (n = t.props), !Sn(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    cf.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, iO = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, _r = function(t, r, n) {
  if (!Sn(t) || $s(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    cf.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = iO(o, r, n));
  }), i;
}, aO = ["children"], oO = ["children"];
function _d(e, t) {
  if (e == null) return {};
  var r = uO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ms(e) {
  "@babel/helpers - typeof";
  return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ms(e);
}
var Ed = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, Nt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Td = null, xu = null, sf = function e(t) {
  if (t === Td && Array.isArray(xu))
    return xu;
  var r = [];
  return Or.forEach(t, function(n) {
    ne(n) || (Yx.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), xu = r, Td = t, r;
};
function Qe(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Nt(i);
  }) : n = [Nt(t)], sf(e).forEach(function(i) {
    var a = Je(i, "type.displayName") || Je(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Xe(e, t) {
  var r = Qe(e, t);
  return r && r[0];
}
var jd = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!W(n) || n <= 0 || !W(i) || i <= 0);
}, cO = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], sO = function(t) {
  return t && t.type && qi(t.type) && cO.indexOf(t.type) >= 0;
}, Ym = function(t) {
  return t && Ms(t) === "object" && "clipDot" in t;
}, lO = function(t, r, n, i) {
  var a, o = (a = bu?.[i]) !== null && a !== void 0 ? a : [];
  return !Q(t) && (i && o.includes(r) || nO.includes(r)) || n && cf.includes(r);
}, X = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ ht(t) && (i = t.props), !Sn(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    lO((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Is = function e(t, r) {
  if (t === r)
    return !0;
  var n = Or.count(t);
  if (n !== Or.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return $d(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!$d(a, o))
      return !1;
  }
  return !0;
}, $d = function(t, r) {
  if (ne(t) && ne(r))
    return !0;
  if (!ne(t) && !ne(r)) {
    var n = t.props || {}, i = n.children, a = _d(n, aO), o = r.props || {}, u = o.children, c = _d(o, oO);
    return i && u ? Kr(a, c) && Is(i, u) : !i && !u ? Kr(a, c) : !1;
  }
  return !1;
}, Md = function(t, r) {
  var n = [], i = {};
  return sf(t).forEach(function(a, o) {
    if (sO(a))
      n.push(a);
    else if (a) {
      var u = Nt(a.type), c = r[u] || {}, s = c.handler, l = c.once;
      if (s && (!l || !i[u])) {
        var f = s(a, u, o);
        n.push(f), i[u] = !0;
      }
    }
  }), n;
}, fO = function(t) {
  var r = t && t.type;
  return r && Ed[r] ? Ed[r] : null;
}, dO = function(t, r) {
  return sf(r).indexOf(t);
}, pO = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Cs() {
  return Cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Cs.apply(this, arguments);
}
function hO(e, t) {
  if (e == null) return {};
  var r = vO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ks(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, c = e.desc, s = hO(e, pO), l = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = ae("recharts-surface", a);
  return /* @__PURE__ */ A.createElement("svg", Cs({}, X(s, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ A.createElement("title", null, u), /* @__PURE__ */ A.createElement("desc", null, c), t);
}
var yO = ["children", "className"];
function Rs() {
  return Rs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rs.apply(this, arguments);
}
function mO(e, t) {
  if (e == null) return {};
  var r = gO(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gO(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var oe = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = mO(e, yO), a = ae("recharts-layer", n);
  return /* @__PURE__ */ A.createElement("g", Rs({
    className: a
  }, X(i, !0), {
    ref: t
  }), r);
}), bO = process.env.NODE_ENV !== "production", vt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (bO && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
}, Ou, Id;
function xO() {
  if (Id) return Ou;
  Id = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return Ou = e, Ou;
}
var wu, Cd;
function OO() {
  if (Cd) return wu;
  Cd = 1;
  var e = xO();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return wu = t, wu;
}
var Pu, kd;
function Xm() {
  if (kd) return Pu;
  kd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + i + a + "]");
  function c(s) {
    return u.test(s);
  }
  return Pu = c, Pu;
}
var Au, Rd;
function wO() {
  if (Rd) return Au;
  Rd = 1;
  function e(t) {
    return t.split("");
  }
  return Au = e, Au;
}
var Su, Nd;
function PO() {
  if (Nd) return Su;
  Nd = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + i + "]", c = "\\ud83c[\\udffb-\\udfff]", s = "(?:" + u + "|" + c + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = s + "?", v = "[" + a + "]?", h = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + v + y + ")*", g = v + y + h, b = "(?:" + [l + u + "?", u, f, d, o].join("|") + ")", x = RegExp(c + "(?=" + c + ")|" + b + g, "g");
  function w(m) {
    return m.match(x) || [];
  }
  return Su = w, Su;
}
var _u, Dd;
function AO() {
  if (Dd) return _u;
  Dd = 1;
  var e = wO(), t = Xm(), r = PO();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return _u = n, _u;
}
var Eu, Ld;
function SO() {
  if (Ld) return Eu;
  Ld = 1;
  var e = OO(), t = Xm(), r = AO(), n = Km();
  function i(a) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, c = u ? u[0] : o.charAt(0), s = u ? e(u, 1).join("") : o.slice(1);
      return c[a]() + s;
    };
  }
  return Eu = i, Eu;
}
var Tu, Bd;
function _O() {
  if (Bd) return Tu;
  Bd = 1;
  var e = SO(), t = e("toUpperCase");
  return Tu = t, Tu;
}
var EO = _O();
const Ao = /* @__PURE__ */ ye(EO);
function xe(e) {
  return function() {
    return e;
  };
}
const Zm = Math.cos, xa = Math.sin, gt = Math.sqrt, Oa = Math.PI, So = 2 * Oa, Ns = Math.PI, Ds = 2 * Ns, pr = 1e-6, TO = Ds - pr;
function Jm(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function jO(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Jm;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class $O {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Jm : jO(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, c = n - t, s = i - r, l = o - t, f = u - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > pr) if (!(Math.abs(f * c - s * l) > pr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, y = i - u, v = c * c + s * s, h = p * p + y * y, g = Math.sqrt(v), b = Math.sqrt(d), x = a * Math.tan((Ns - Math.acos((v + d - h) / (2 * g * b))) / 2), w = x / b, m = x / g;
      Math.abs(w - 1) > pr && this._append`L${t + w * l},${r + w * f}`, this._append`A${a},${a},0,0,${+(f * p > l * y)},${this._x1 = t + m * c},${this._y1 = r + m * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), c = n * Math.sin(i), s = t + u, l = r + c, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${l}` : (Math.abs(this._x1 - s) > pr || Math.abs(this._y1 - l) > pr) && this._append`L${s},${l}`, n && (d < 0 && (d = d % Ds + Ds), d > TO ? this._append`A${n},${n},0,1,${f},${t - u},${r - c}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = l}` : d > pr && this._append`A${n},${n},0,${+(d >= Ns)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function lf(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new $O(t);
}
function ff(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Qm(e) {
  this._context = e;
}
Qm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function _o(e) {
  return new Qm(e);
}
function eg(e) {
  return e[0];
}
function tg(e) {
  return e[1];
}
function rg(e, t) {
  var r = xe(!0), n = null, i = _o, a = null, o = lf(u);
  e = typeof e == "function" ? e : e === void 0 ? eg : xe(e), t = typeof t == "function" ? t : t === void 0 ? tg : xe(t);
  function u(c) {
    var s, l = (c = ff(c)).length, f, d = !1, p;
    for (n == null && (a = i(p = o())), s = 0; s <= l; ++s)
      !(s < l && r(f = c[s], s, c)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, s, c), +t(f, s, c));
    if (p) return a = null, p + "" || null;
  }
  return u.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : xe(+c), u) : e;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : xe(+c), u) : t;
  }, u.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : xe(!!c), u) : r;
  }, u.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), u) : i;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), u) : n;
  }, u;
}
function ea(e, t, r) {
  var n = null, i = xe(!0), a = null, o = _o, u = null, c = lf(s);
  e = typeof e == "function" ? e : e === void 0 ? eg : xe(+e), t = typeof t == "function" ? t : xe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? tg : xe(+r);
  function s(f) {
    var d, p, y, v = (f = ff(f)).length, h, g = !1, b, x = new Array(v), w = new Array(v);
    for (a == null && (u = o(b = c())), d = 0; d <= v; ++d) {
      if (!(d < v && i(h = f[d], d, f)) === g)
        if (g = !g)
          p = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = d - 1; y >= p; --y)
            u.point(x[y], w[y]);
          u.lineEnd(), u.areaEnd();
        }
      g && (x[d] = +e(h, d, f), w[d] = +t(h, d, f), u.point(n ? +n(h, d, f) : x[d], r ? +r(h, d, f) : w[d]));
    }
    if (b) return u = null, b + "" || null;
  }
  function l() {
    return rg().defined(i).curve(o).context(a);
  }
  return s.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : xe(+f), n = null, s) : e;
  }, s.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : xe(+f), s) : e;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : xe(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : xe(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : xe(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : xe(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return l().x(e).y(t);
  }, s.lineY1 = function() {
    return l().x(e).y(r);
  }, s.lineX1 = function() {
    return l().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : xe(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), s) : a;
  }, s;
}
class ng {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function MO(e) {
  return new ng(e, !0);
}
function IO(e) {
  return new ng(e, !1);
}
const df = {
  draw(e, t) {
    const r = gt(t / Oa);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, So);
  }
}, CO = {
  draw(e, t) {
    const r = gt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, ig = gt(1 / 3), kO = ig * 2, RO = {
  draw(e, t) {
    const r = gt(t / kO), n = r * ig;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, NO = {
  draw(e, t) {
    const r = gt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, DO = 0.8908130915292852, ag = xa(Oa / 10) / xa(7 * Oa / 10), LO = xa(So / 10) * ag, BO = -Zm(So / 10) * ag, qO = {
  draw(e, t) {
    const r = gt(t * DO), n = LO * r, i = BO * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = So * a / 5, u = Zm(o), c = xa(o);
      e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i);
    }
    e.closePath();
  }
}, ju = gt(3), FO = {
  draw(e, t) {
    const r = -gt(t / (ju * 3));
    e.moveTo(0, r * 2), e.lineTo(-ju * r, -r), e.lineTo(ju * r, -r), e.closePath();
  }
}, rt = -0.5, nt = gt(3) / 2, Ls = 1 / gt(12), WO = (Ls / 2 + 1) * 3, zO = {
  draw(e, t) {
    const r = gt(t / WO), n = r / 2, i = r * Ls, a = n, o = r * Ls + r, u = -a, c = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, c), e.lineTo(rt * n - nt * i, nt * n + rt * i), e.lineTo(rt * a - nt * o, nt * a + rt * o), e.lineTo(rt * u - nt * c, nt * u + rt * c), e.lineTo(rt * n + nt * i, rt * i - nt * n), e.lineTo(rt * a + nt * o, rt * o - nt * a), e.lineTo(rt * u + nt * c, rt * c - nt * u), e.closePath();
  }
};
function UO(e, t) {
  let r = null, n = lf(i);
  e = typeof e == "function" ? e : xe(e || df), t = typeof t == "function" ? t : xe(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : xe(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : xe(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function wa() {
}
function Pa(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function og(e) {
  this._context = e;
}
og.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Pa(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function KO(e) {
  return new og(e);
}
function ug(e) {
  this._context = e;
}
ug.prototype = {
  areaStart: wa,
  areaEnd: wa,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function HO(e) {
  return new ug(e);
}
function cg(e) {
  this._context = e;
}
cg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Pa(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function GO(e) {
  return new cg(e);
}
function sg(e) {
  this._context = e;
}
sg.prototype = {
  areaStart: wa,
  areaEnd: wa,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function VO(e) {
  return new sg(e);
}
function qd(e) {
  return e < 0 ? -1 : 1;
}
function Fd(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (qd(a) + qd(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Wd(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function $u(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Aa(e) {
  this._context = e;
}
Aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        $u(this, this._t0, Wd(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, $u(this, Wd(this, r = Fd(this, e, t)), r);
          break;
        default:
          $u(this, this._t0, r = Fd(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function lg(e) {
  this._context = new fg(e);
}
(lg.prototype = Object.create(Aa.prototype)).point = function(e, t) {
  Aa.prototype.point.call(this, t, e);
};
function fg(e) {
  this._context = e;
}
fg.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function YO(e) {
  return new Aa(e);
}
function XO(e) {
  return new lg(e);
}
function dg(e) {
  this._context = e;
}
dg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = zd(e), i = zd(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function zd(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function ZO(e) {
  return new dg(e);
}
function Eo(e, t) {
  this._context = e, this._t = t;
}
Eo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function JO(e) {
  return new Eo(e, 0.5);
}
function QO(e) {
  return new Eo(e, 0);
}
function ew(e) {
  return new Eo(e, 1);
}
function Vr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Bs(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function tw(e, t) {
  return e[t];
}
function rw(e) {
  const t = [];
  return t.key = e, t;
}
function nw() {
  var e = xe([]), t = Bs, r = Vr, n = tw;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), rw), u, c = o.length, s = -1, l;
    for (const f of a)
      for (u = 0, ++s; u < c; ++u)
        (o[u][s] = [0, +n(f, o[u].key, s, a)]).data = f;
    for (u = 0, l = ff(t(o)); u < c; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : xe(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : xe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Bs : typeof a == "function" ? a : xe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Vr, i) : r;
  }, i;
}
function iw(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Vr(e, t);
  }
}
function aw(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Vr(e, t);
  }
}
function ow(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, y = 0; y < u; ++y) {
          var v = e[t[y]], h = v[n][1] || 0, g = v[n - 1][1] || 0;
          p += h - g;
        }
        c += f, s += p * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, Vr(e, t);
  }
}
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
var uw = ["type", "size", "sizeType"];
function qs() {
  return qs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qs.apply(this, arguments);
}
function Ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ud(Object(r), !0).forEach(function(n) {
      cw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cw(e, t, r) {
  return t = sw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sw(e) {
  var t = lw(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function lw(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fw(e, t) {
  if (e == null) return {};
  var r = dw(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var pg = {
  symbolCircle: df,
  symbolCross: CO,
  symbolDiamond: RO,
  symbolSquare: NO,
  symbolStar: qO,
  symbolTriangle: FO,
  symbolWye: zO
}, pw = Math.PI / 180, hw = function(t) {
  var r = "symbol".concat(Ao(t));
  return pg[r] || df;
}, vw = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * pw;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, yw = function(t, r) {
  pg["symbol".concat(Ao(t))] = r;
}, pf = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, c = fw(t, uw), s = Kd(Kd({}, c), {}, {
    type: n,
    size: a,
    sizeType: u
  }), l = function() {
    var h = hw(n), g = UO().type(h).size(vw(a, u, n));
    return g();
  }, f = s.className, d = s.cx, p = s.cy, y = X(s, !0);
  return d === +d && p === +p && a === +a ? /* @__PURE__ */ A.createElement("path", qs({}, y, {
    className: ae("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
pf.registerSymbol = yw;
function Yr(e) {
  "@babel/helpers - typeof";
  return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yr(e);
}
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fs.apply(this, arguments);
}
function Hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(r), !0).forEach(function(n) {
      ri(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vg(n.key), n);
  }
}
function xw(e, t, r) {
  return t && bw(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ow(e, t, r) {
  return t = Sa(t), ww(e, hg() ? Reflect.construct(t, r || [], Sa(e).constructor) : t.apply(e, r));
}
function ww(e, t) {
  if (t && (Yr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pw(e);
}
function Pw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hg = function() {
    return !!e;
  })();
}
function Sa(e) {
  return Sa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sa(e);
}
function Aw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ws(e, t);
}
function Ws(e, t) {
  return Ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ws(e, t);
}
function ri(e, t, r) {
  return t = vg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vg(e) {
  var t = Sw(e, "string");
  return Yr(t) == "symbol" ? t : t + "";
}
function Sw(e, t) {
  if (Yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var it = 32, hf = /* @__PURE__ */ (function(e) {
  function t() {
    return gw(this, t), Ow(this, t, arguments);
  }
  return Aw(t, e), xw(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = it / 2, o = it / 6, u = it / 3, c = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ A.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: it,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ A.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(it, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ A.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(it / 8, "h").concat(it, "v").concat(it * 3 / 4, "h").concat(-it, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ A.isValidElement(n.legendIcon)) {
          var s = mw({}, n);
          return delete s.legendIcon, /* @__PURE__ */ A.cloneElement(n.legendIcon, s);
        }
        return /* @__PURE__ */ A.createElement(pf, {
          fill: c,
          cx: a,
          cy: a,
          size: it,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, c = i.formatter, s = i.inactiveColor, l = {
        x: 0,
        y: 0,
        width: it,
        height: it
      }, f = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(p, y) {
        var v = p.formatter || c, h = ae(ri(ri({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var g = Q(p.value) ? null : p.value;
        vt(
          !Q(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = p.inactive ? s : p.color;
        return /* @__PURE__ */ A.createElement("li", Fs({
          className: h,
          style: f,
          key: "legend-item-".concat(y)
        }, _r(n.props, p, y)), /* @__PURE__ */ A.createElement(ks, {
          width: o,
          height: o,
          viewBox: l,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ A.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: b
          }
        }, v ? v(g, p, y) : g));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
})(tt);
ri(hf, "displayName", "Legend");
ri(hf, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Mu, Gd;
function _w() {
  if (Gd) return Mu;
  Gd = 1;
  var e = gx(), t = qm(), r = 1, n = 2;
  function i(a, o, u, c) {
    var s = u.length, l = s, f = !c;
    if (a == null)
      return !l;
    for (a = Object(a); s--; ) {
      var d = u[s];
      if (f && d[2] ? d[1] !== a[d[0]] : !(d[0] in a))
        return !1;
    }
    for (; ++s < l; ) {
      d = u[s];
      var p = d[0], y = a[p], v = d[1];
      if (f && d[2]) {
        if (y === void 0 && !(p in a))
          return !1;
      } else {
        var h = new e();
        if (c)
          var g = c(y, v, p, a, o, h);
        if (!(g === void 0 ? t(v, y, r | n, c, h) : g))
          return !1;
      }
    }
    return !0;
  }
  return Mu = i, Mu;
}
var Iu, Vd;
function yg() {
  if (Vd) return Iu;
  Vd = 1;
  var e = Pn();
  function t(r) {
    return r === r && !e(r);
  }
  return Iu = t, Iu;
}
var Cu, Yd;
function Ew() {
  if (Yd) return Cu;
  Yd = 1;
  var e = yg(), t = nf();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return Cu = r, Cu;
}
var ku, Xd;
function mg() {
  if (Xd) return ku;
  Xd = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return ku = e, ku;
}
var Ru, Zd;
function Tw() {
  if (Zd) return Ru;
  Zd = 1;
  var e = _w(), t = Ew(), r = mg();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return Ru = n, Ru;
}
var Nu, Jd;
function jw() {
  if (Jd) return Nu;
  Jd = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Nu = e, Nu;
}
var Du, Qd;
function $w() {
  if (Qd) return Du;
  Qd = 1;
  var e = Hm(), t = Fm(), r = mt(), n = Wm(), i = bx(), a = Po();
  function o(u, c, s) {
    c = e(c, u);
    for (var l = -1, f = c.length, d = !1; ++l < f; ) {
      var p = a(c[l]);
      if (!(d = u != null && s(u, p)))
        break;
      u = u[p];
    }
    return d || ++l != f ? d : (f = u == null ? 0 : u.length, !!f && i(f) && n(p, f) && (r(u) || t(u)));
  }
  return Du = o, Du;
}
var Lu, ep;
function Mw() {
  if (ep) return Lu;
  ep = 1;
  var e = jw(), t = $w();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return Lu = r, Lu;
}
var Bu, tp;
function Iw() {
  if (tp) return Bu;
  tp = 1;
  var e = qm(), t = Gm(), r = Mw(), n = af(), i = yg(), a = mg(), o = Po(), u = 1, c = 2;
  function s(l, f) {
    return n(l) && i(f) ? a(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, u | c);
    };
  }
  return Bu = s, Bu;
}
var qu, rp;
function En() {
  if (rp) return qu;
  rp = 1;
  function e(t) {
    return t;
  }
  return qu = e, qu;
}
var Fu, np;
function Cw() {
  if (np) return Fu;
  np = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Fu = e, Fu;
}
var Wu, ip;
function kw() {
  if (ip) return Wu;
  ip = 1;
  var e = uf();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Wu = t, Wu;
}
var zu, ap;
function Rw() {
  if (ap) return zu;
  ap = 1;
  var e = Cw(), t = kw(), r = af(), n = Po();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return zu = i, zu;
}
var Uu, op;
function Et() {
  if (op) return Uu;
  op = 1;
  var e = Tw(), t = Iw(), r = En(), n = mt(), i = Rw();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return Uu = a, Uu;
}
var Ku, up;
function gg() {
  if (up) return Ku;
  up = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Ku = e, Ku;
}
var Hu, cp;
function Nw() {
  if (cp) return Hu;
  cp = 1;
  function e(t) {
    return t !== t;
  }
  return Hu = e, Hu;
}
var Gu, sp;
function Dw() {
  if (sp) return Gu;
  sp = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return Gu = e, Gu;
}
var Vu, lp;
function Lw() {
  if (lp) return Vu;
  lp = 1;
  var e = gg(), t = Nw(), r = Dw();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return Vu = n, Vu;
}
var Yu, fp;
function Bw() {
  if (fp) return Yu;
  fp = 1;
  var e = Lw();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return Yu = t, Yu;
}
var Xu, dp;
function qw() {
  if (dp) return Xu;
  dp = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return Xu = e, Xu;
}
var Zu, pp;
function Fw() {
  if (pp) return Zu;
  pp = 1;
  function e() {
  }
  return Zu = e, Zu;
}
var Ju, hp;
function Ww() {
  if (hp) return Ju;
  hp = 1;
  var e = xx(), t = Fw(), r = zm(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return Ju = i, Ju;
}
var Qu, vp;
function zw() {
  if (vp) return Qu;
  vp = 1;
  var e = Ox(), t = Bw(), r = qw(), n = wx(), i = Ww(), a = zm(), o = 200;
  function u(c, s, l) {
    var f = -1, d = t, p = c.length, y = !0, v = [], h = v;
    if (l)
      y = !1, d = r;
    else if (p >= o) {
      var g = s ? null : i(c);
      if (g)
        return a(g);
      y = !1, d = n, h = new e();
    } else
      h = s ? [] : v;
    e:
      for (; ++f < p; ) {
        var b = c[f], x = s ? s(b) : b;
        if (b = l || b !== 0 ? b : 0, y && x === x) {
          for (var w = h.length; w--; )
            if (h[w] === x)
              continue e;
          s && h.push(x), v.push(b);
        } else d(h, x, l) || (h !== v && h.push(x), v.push(b));
      }
    return v;
  }
  return Qu = u, Qu;
}
var ec, yp;
function Uw() {
  if (yp) return ec;
  yp = 1;
  var e = Et(), t = zw();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return ec = r, ec;
}
var Kw = Uw();
const mp = /* @__PURE__ */ ye(Kw);
function bg(e, t, r) {
  return t === !0 ? mp(e, r) : Q(t) ? mp(e, t) : e;
}
function Xr(e) {
  "@babel/helpers - typeof";
  return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xr(e);
}
var Hw = ["ref"];
function gp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gp(Object(r), !0).forEach(function(n) {
      To(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Og(n.key), n);
  }
}
function Vw(e, t, r) {
  return t && bp(e.prototype, t), r && bp(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Yw(e, t, r) {
  return t = _a(t), Xw(e, xg() ? Reflect.construct(t, r || [], _a(e).constructor) : t.apply(e, r));
}
function Xw(e, t) {
  if (t && (Xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Zw(e);
}
function Zw(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xg = function() {
    return !!e;
  })();
}
function _a(e) {
  return _a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _a(e);
}
function Jw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zs(e, t);
}
function zs(e, t) {
  return zs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zs(e, t);
}
function To(e, t, r) {
  return t = Og(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Og(e) {
  var t = Qw(e, "string");
  return Xr(t) == "symbol" ? t : t + "";
}
function Qw(e, t) {
  if (Xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function e1(e, t) {
  if (e == null) return {};
  var r = t1(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t1(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function r1(e) {
  return e.value;
}
function n1(e, t) {
  if (/* @__PURE__ */ A.isValidElement(e))
    return /* @__PURE__ */ A.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ A.createElement(e, t);
  t.ref;
  var r = e1(t, Hw);
  return /* @__PURE__ */ A.createElement(hf, r);
}
var xp = 1, wr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    Gw(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = Yw(this, t, [].concat(i)), To(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return Jw(t, e), Vw(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > xp || Math.abs(i.height - this.lastBoundingBox.height) > xp) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? jt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, c = i.margin, s = i.chartWidth, l = i.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var p = this.getBBoxSnapshot();
          f = {
            left: ((s || 0) - p.width) / 2
          };
        } else
          f = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((l || 0) - y.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return jt(jt({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, c = i.wrapperStyle, s = i.payloadUniqBy, l = i.payload, f = jt(jt({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ A.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, n1(a, jt(jt({}, this.props), {}, {
        payload: bg(l, s, r1)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = jt(jt({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && W(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
})(tt);
To(wr, "displayName", "Legend");
To(wr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var tc, Op;
function i1() {
  if (Op) return tc;
  Op = 1;
  var e = Bm(), t = Fm(), r = mt(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return tc = i, tc;
}
var rc, wp;
function wg() {
  if (wp) return rc;
  wp = 1;
  var e = Px(), t = i1();
  function r(n, i, a, o, u) {
    var c = -1, s = n.length;
    for (a || (a = t), u || (u = []); ++c < s; ) {
      var l = n[c];
      i > 0 && a(l) ? i > 1 ? r(l, i - 1, a, o, u) : e(u, l) : o || (u[u.length] = l);
    }
    return u;
  }
  return rc = r, rc;
}
var nc, Pp;
function a1() {
  if (Pp) return nc;
  Pp = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), c = u.length; c--; ) {
        var s = u[t ? c : ++a];
        if (n(o[s], s, o) === !1)
          break;
      }
      return r;
    };
  }
  return nc = e, nc;
}
var ic, Ap;
function o1() {
  if (Ap) return ic;
  Ap = 1;
  var e = a1(), t = e();
  return ic = t, ic;
}
var ac, Sp;
function Pg() {
  if (Sp) return ac;
  Sp = 1;
  var e = o1(), t = nf();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return ac = r, ac;
}
var oc, _p;
function u1() {
  if (_p) return oc;
  _p = 1;
  var e = wo();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, u = n ? o : -1, c = Object(i); (n ? u-- : ++u < o) && a(c[u], u, c) !== !1; )
        ;
      return i;
    };
  }
  return oc = t, oc;
}
var uc, Ep;
function vf() {
  if (Ep) return uc;
  Ep = 1;
  var e = Pg(), t = u1(), r = t(e);
  return uc = r, uc;
}
var cc, Tp;
function Ag() {
  if (Tp) return cc;
  Tp = 1;
  var e = vf(), t = wo();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, c, s) {
      o[++a] = i(u, c, s);
    }), o;
  }
  return cc = r, cc;
}
var sc, jp;
function c1() {
  if (jp) return sc;
  jp = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return sc = e, sc;
}
var lc, $p;
function s1() {
  if ($p) return lc;
  $p = 1;
  var e = An();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, u = e(r), c = n !== void 0, s = n === null, l = n === n, f = e(n);
      if (!s && !f && !u && r > n || u && c && l && !s && !f || a && c && l || !i && l || !o)
        return 1;
      if (!a && !u && !f && r < n || f && i && o && !a && !u || s && i && o || !c && o || !l)
        return -1;
    }
    return 0;
  }
  return lc = t, lc;
}
var fc, Mp;
function l1() {
  if (Mp) return fc;
  Mp = 1;
  var e = s1();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, c = o.length, s = i.length; ++a < c; ) {
      var l = e(o[a], u[a]);
      if (l) {
        if (a >= s)
          return l;
        var f = i[a];
        return l * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return fc = t, fc;
}
var dc, Ip;
function f1() {
  if (Ip) return dc;
  Ip = 1;
  var e = of(), t = uf(), r = Et(), n = Ag(), i = c1(), a = Ax(), o = l1(), u = En(), c = mt();
  function s(l, f, d) {
    f.length ? f = e(f, function(v) {
      return c(v) ? function(h) {
        return t(h, v.length === 1 ? v[0] : v);
      } : v;
    }) : f = [u];
    var p = -1;
    f = e(f, a(r));
    var y = n(l, function(v, h, g) {
      var b = e(f, function(x) {
        return x(v);
      });
      return { criteria: b, index: ++p, value: v };
    });
    return i(y, function(v, h) {
      return o(v, h, d);
    });
  }
  return dc = s, dc;
}
var pc, Cp;
function d1() {
  if (Cp) return pc;
  Cp = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return pc = e, pc;
}
var hc, kp;
function p1() {
  if (kp) return hc;
  kp = 1;
  var e = d1(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, u = -1, c = t(o.length - i, 0), s = Array(c); ++u < c; )
        s[u] = o[i + u];
      u = -1;
      for (var l = Array(i + 1); ++u < i; )
        l[u] = o[u];
      return l[i] = a(s), e(n, this, l);
    };
  }
  return hc = r, hc;
}
var vc, Rp;
function h1() {
  if (Rp) return vc;
  Rp = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return vc = e, vc;
}
var yc, Np;
function Sg() {
  if (Np) return yc;
  Np = 1;
  var e = Sx(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return yc = t, yc;
}
var mc, Dp;
function v1() {
  if (Dp) return mc;
  Dp = 1;
  var e = h1(), t = Sg(), r = En(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return mc = n, mc;
}
var gc, Lp;
function y1() {
  if (Lp) return gc;
  Lp = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var u = r(), c = t - (u - o);
      if (o = u, c > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return gc = n, gc;
}
var bc, Bp;
function m1() {
  if (Bp) return bc;
  Bp = 1;
  var e = v1(), t = y1(), r = t(e);
  return bc = r, bc;
}
var xc, qp;
function g1() {
  if (qp) return xc;
  qp = 1;
  var e = En(), t = p1(), r = m1();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return xc = n, xc;
}
var Oc, Fp;
function jo() {
  if (Fp) return Oc;
  Fp = 1;
  var e = _x(), t = wo(), r = Wm(), n = Pn();
  function i(a, o, u) {
    if (!n(u))
      return !1;
    var c = typeof o;
    return (c == "number" ? t(u) && r(o, u.length) : c == "string" && o in u) ? e(u[o], a) : !1;
  }
  return Oc = i, Oc;
}
var wc, Wp;
function b1() {
  if (Wp) return wc;
  Wp = 1;
  var e = wg(), t = f1(), r = g1(), n = jo(), i = r(function(a, o) {
    if (a == null)
      return [];
    var u = o.length;
    return u > 1 && n(a, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return wc = i, wc;
}
var x1 = b1();
const yf = /* @__PURE__ */ ye(x1);
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function Us() {
  return Us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Us.apply(this, arguments);
}
function O1(e, t) {
  return S1(e) || A1(e, t) || P1(e, t) || w1();
}
function w1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P1(e, t) {
  if (e) {
    if (typeof e == "string") return zp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zp(e, t);
  }
}
function zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function A1(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function S1(e) {
  if (Array.isArray(e)) return e;
}
function Up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Up(Object(r), !0).forEach(function(n) {
      _1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _1(e, t, r) {
  return t = E1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E1(e) {
  var t = T1(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function T1(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j1(e) {
  return Array.isArray(e) && Ce(e[0]) && Ce(e[1]) ? e.join(" ~ ") : e;
}
var $1 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, c = t.labelStyle, s = c === void 0 ? {} : c, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, v = t.label, h = t.labelFormatter, g = t.accessibilityLayer, b = g === void 0 ? !1 : g, x = function() {
    if (l && l.length) {
      var j = {
        padding: 0,
        margin: 0
      }, M = (d ? yf(l, d) : l).map(function(C, k) {
        if (C.type === "none")
          return null;
        var R = Pc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: C.color || "#000"
        }, u), L = C.formatter || f || j1, F = C.value, K = C.name, I = F, D = K;
        if (L && I != null && D != null) {
          var B = L(F, K, C, k, l);
          if (Array.isArray(B)) {
            var H = O1(B, 2);
            I = H[0], D = H[1];
          } else
            I = B;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ A.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(k),
            style: R
          }, Ce(D) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, D) : null, Ce(D) ? /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, I), /* @__PURE__ */ A.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, C.unit || ""))
        );
      });
      return /* @__PURE__ */ A.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: j
      }, M);
    }
    return null;
  }, w = Pc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), m = Pc({
    margin: 0
  }, s), O = !ne(v), P = O ? v : "", S = ae("recharts-default-tooltip", p), _ = ae("recharts-tooltip-label", y);
  O && h && l !== void 0 && l !== null && (P = h(v, l));
  var $ = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ A.createElement("div", Us({
    className: S,
    style: w
  }, $), /* @__PURE__ */ A.createElement("p", {
    className: _,
    style: m
  }, /* @__PURE__ */ A.isValidElement(P) ? P : "".concat(P)), x());
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function ta(e, t, r) {
  return t = M1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M1(e) {
  var t = I1(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function I1(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dn = "recharts-tooltip-wrapper", C1 = {
  visibility: "hidden"
};
function k1(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return ae(Dn, ta(ta(ta(ta({}, "".concat(Dn, "-right"), W(r) && t && W(t.x) && r >= t.x), "".concat(Dn, "-left"), W(r) && t && W(t.x) && r < t.x), "".concat(Dn, "-bottom"), W(n) && t && W(t.y) && n >= t.y), "".concat(Dn, "-top"), W(n) && t && W(t.y) && n < t.y));
}
function Kp(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, c = e.viewBox, s = e.viewBoxDimension;
  if (a && W(a[n]))
    return a[n];
  var l = r[n] - u - i, f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var d = l, p = c[n];
    return d < p ? Math.max(f, c[n]) : Math.max(l, c[n]);
  }
  var y = f + u, v = c[n] + s;
  return y > v ? Math.max(l, c[n]) : Math.max(f, c[n]);
}
function R1(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function N1(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, c = e.viewBox, s, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Kp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), f = Kp({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), s = R1({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : s = C1, {
    cssProperties: s,
    cssClasses: k1({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
function Hp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hp(Object(r), !0).forEach(function(n) {
      Hs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Eg(n.key), n);
  }
}
function B1(e, t, r) {
  return t && L1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q1(e, t, r) {
  return t = Ea(t), F1(e, _g() ? Reflect.construct(t, r || [], Ea(e).constructor) : t.apply(e, r));
}
function F1(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W1(e);
}
function W1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_g = function() {
    return !!e;
  })();
}
function Ea(e) {
  return Ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ea(e);
}
function z1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ks(e, t);
}
function Ks(e, t) {
  return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ks(e, t);
}
function Hs(e, t, r) {
  return t = Eg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Eg(e) {
  var t = U1(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function U1(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vp = 1, K1 = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    D1(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = q1(this, t, [].concat(i)), Hs(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Hs(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, c, s, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0 ? u : 0,
            y: (s = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && s !== void 0 ? s : 0
          }
        });
      }
    }), r;
  }
  return z1(t, e), B1(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Vp || Math.abs(n.height - this.state.lastBoundingBox.height) > Vp) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.children, l = i.coordinate, f = i.hasPayload, d = i.isAnimationActive, p = i.offset, y = i.position, v = i.reverseDirection, h = i.useTranslate3d, g = i.viewBox, b = i.wrapperStyle, x = N1({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: y,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: h,
        viewBox: g
      }), w = x.cssClasses, m = x.cssProperties, O = Gp(Gp({
        transition: d && a ? "transform ".concat(u, "ms ").concat(c) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ A.createElement("div", {
          tabIndex: -1,
          className: w,
          style: O,
          ref: function(S) {
            n.wrapperNode = S;
          }
        }, s)
      );
    }
  }]);
})(tt), H1 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Wt = {
  isSsr: H1()
};
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
function Yp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yp(Object(r), !0).forEach(function(n) {
      mf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jg(n.key), n);
  }
}
function Y1(e, t, r) {
  return t && V1(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function X1(e, t, r) {
  return t = Ta(t), Z1(e, Tg() ? Reflect.construct(t, r || [], Ta(e).constructor) : t.apply(e, r));
}
function Z1(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return J1(e);
}
function J1(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Tg = function() {
    return !!e;
  })();
}
function Ta(e) {
  return Ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ta(e);
}
function Q1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gs(e, t);
}
function Gs(e, t) {
  return Gs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gs(e, t);
}
function mf(e, t, r) {
  return t = jg(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jg(e) {
  var t = eP(e, "string");
  return Jr(t) == "symbol" ? t : t + "";
}
function eP(e, t) {
  if (Jr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function tP(e) {
  return e.dataKey;
}
function rP(e, t) {
  return /* @__PURE__ */ A.isValidElement(e) ? /* @__PURE__ */ A.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ A.createElement(e, t) : /* @__PURE__ */ A.createElement($1, t);
}
var bt = /* @__PURE__ */ (function(e) {
  function t() {
    return G1(this, t), X1(this, t, arguments);
  }
  return Q1(t, e), Y1(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.content, l = i.coordinate, f = i.filterNull, d = i.isAnimationActive, p = i.offset, y = i.payload, v = i.payloadUniqBy, h = i.position, g = i.reverseDirection, b = i.useTranslate3d, x = i.viewBox, w = i.wrapperStyle, m = y ?? [];
      f && m.length && (m = bg(y.filter(function(P) {
        return P.value != null && (P.hide !== !0 || n.props.includeHidden);
      }), v, tP));
      var O = m.length > 0;
      return /* @__PURE__ */ A.createElement(K1, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: c,
        isAnimationActive: d,
        active: a,
        coordinate: l,
        hasPayload: O,
        offset: p,
        position: h,
        reverseDirection: g,
        useTranslate3d: b,
        viewBox: x,
        wrapperStyle: w
      }, rP(s, Xp(Xp({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(tt);
mf(bt, "displayName", "Tooltip");
mf(bt, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Wt.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Ac, Zp;
function nP() {
  if (Zp) return Ac;
  Zp = 1;
  var e = Ex(), t = function() {
    return e.Date.now();
  };
  return Ac = t, Ac;
}
var Sc, Jp;
function iP() {
  if (Jp) return Sc;
  Jp = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Sc = t, Sc;
}
var _c, Qp;
function aP() {
  if (Qp) return _c;
  Qp = 1;
  var e = iP(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return _c = r, _c;
}
var Ec, eh;
function $g() {
  if (eh) return Ec;
  eh = 1;
  var e = aP(), t = Pn(), r = An(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function c(s) {
    if (typeof s == "number")
      return s;
    if (r(s))
      return n;
    if (t(s)) {
      var l = typeof s.valueOf == "function" ? s.valueOf() : s;
      s = t(l) ? l + "" : l;
    }
    if (typeof s != "string")
      return s === 0 ? s : +s;
    s = e(s);
    var f = a.test(s);
    return f || o.test(s) ? u(s.slice(2), f ? 2 : 8) : i.test(s) ? n : +s;
  }
  return Ec = c, Ec;
}
var Tc, th;
function oP() {
  if (th) return Tc;
  th = 1;
  var e = Pn(), t = nP(), r = $g(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(u, c, s) {
    var l, f, d, p, y, v, h = 0, g = !1, b = !1, x = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    c = r(c) || 0, e(s) && (g = !!s.leading, b = "maxWait" in s, d = b ? i(r(s.maxWait) || 0, c) : d, x = "trailing" in s ? !!s.trailing : x);
    function w(M) {
      var C = l, k = f;
      return l = f = void 0, h = M, p = u.apply(k, C), p;
    }
    function m(M) {
      return h = M, y = setTimeout(S, c), g ? w(M) : p;
    }
    function O(M) {
      var C = M - v, k = M - h, R = c - C;
      return b ? a(R, d - k) : R;
    }
    function P(M) {
      var C = M - v, k = M - h;
      return v === void 0 || C >= c || C < 0 || b && k >= d;
    }
    function S() {
      var M = t();
      if (P(M))
        return _(M);
      y = setTimeout(S, O(M));
    }
    function _(M) {
      return y = void 0, x && l ? w(M) : (l = f = void 0, p);
    }
    function $() {
      y !== void 0 && clearTimeout(y), h = 0, l = v = f = y = void 0;
    }
    function E() {
      return y === void 0 ? p : _(t());
    }
    function j() {
      var M = t(), C = P(M);
      if (l = arguments, f = this, v = M, C) {
        if (y === void 0)
          return m(v);
        if (b)
          return clearTimeout(y), y = setTimeout(S, c), w(v);
      }
      return y === void 0 && (y = setTimeout(S, c)), p;
    }
    return j.cancel = $, j.flush = E, j;
  }
  return Tc = o, Tc;
}
var jc, rh;
function uP() {
  if (rh) return jc;
  rh = 1;
  var e = oP(), t = Pn(), r = "Expected a function";
  function n(i, a, o) {
    var u = !0, c = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, c = "trailing" in o ? !!o.trailing : c), e(i, a, {
      leading: u,
      maxWait: a,
      trailing: c
    });
  }
  return jc = n, jc;
}
var cP = uP();
const Mg = /* @__PURE__ */ ye(cP);
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function nh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nh(Object(r), !0).forEach(function(n) {
      sP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sP(e, t, r) {
  return t = lP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = fP(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function fP(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dP(e, t) {
  return yP(e) || vP(e, t) || hP(e, t) || pP();
}
function pP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hP(e, t) {
  if (e) {
    if (typeof e == "string") return ih(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ih(e, t);
  }
}
function ih(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function yP(e) {
  if (Array.isArray(e)) return e;
}
var mP = /* @__PURE__ */ ef(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, c = u === void 0 ? "100%" : u, s = e.minWidth, l = s === void 0 ? 0 : s, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, v = y === void 0 ? 0 : y, h = e.id, g = e.className, b = e.onResize, x = e.style, w = x === void 0 ? {} : x, m = ma(null), O = ma();
  O.current = b, hx(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var P = Di({
    containerWidth: i.width,
    containerHeight: i.height
  }), S = dP(P, 2), _ = S[0], $ = S[1], E = va(function(M, C) {
    $(function(k) {
      var R = Math.round(M), L = Math.round(C);
      return k.containerWidth === R && k.containerHeight === L ? k : {
        containerWidth: R,
        containerHeight: L
      };
    });
  }, []);
  tf(function() {
    var M = function(K) {
      var I, D = K[0].contentRect, B = D.width, H = D.height;
      E(B, H), (I = O.current) === null || I === void 0 || I.call(O, B, H);
    };
    v > 0 && (M = Mg(M, v, {
      trailing: !0,
      leading: !1
    }));
    var C = new ResizeObserver(M), k = m.current.getBoundingClientRect(), R = k.width, L = k.height;
    return E(R, L), C.observe(m.current), function() {
      C.disconnect();
    };
  }, [E, v]);
  var j = rf(function() {
    var M = _.containerWidth, C = _.containerHeight;
    if (M < 0 || C < 0)
      return null;
    vt(yr(o) || yr(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), vt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var k = yr(o) ? M : o, R = yr(c) ? C : c;
    r && r > 0 && (k ? R = k / r : R && (k = R * r), d && R > d && (R = d)), vt(k > 0 || R > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, k, R, o, c, l, f, r);
    var L = !Array.isArray(p) && Nt(p.type).endsWith("Chart");
    return A.Children.map(p, function(F) {
      return /* @__PURE__ */ A.isValidElement(F) ? /* @__PURE__ */ Me(F, ra({
        width: k,
        height: R
      }, L ? {
        style: ra({
          height: "100%",
          width: "100%",
          maxHeight: R,
          maxWidth: k
        }, F.props.style)
      } : {})) : F;
    });
  }, [r, p, c, d, f, l, _, o]);
  return /* @__PURE__ */ A.createElement("div", {
    id: h ? "".concat(h) : void 0,
    className: ae("recharts-responsive-container", g),
    style: ra(ra({}, w), {}, {
      width: o,
      height: c,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, j);
}), $o = function(t) {
  return null;
};
$o.displayName = "Cell";
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
function ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ah(Object(r), !0).forEach(function(n) {
      gP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gP(e, t, r) {
  return t = bP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bP(e) {
  var t = xP(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function xP(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Nr = {
  widthCache: {},
  cacheCount: 0
}, OP = 2e3, wP = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, oh = "recharts_measurement_span";
function PP(e) {
  var t = Vs({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Vn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Wt.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = PP(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Nr.widthCache[i])
    return Nr.widthCache[i];
  try {
    var a = document.getElementById(oh);
    a || (a = document.createElement("span"), a.setAttribute("id", oh), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Vs(Vs({}, wP), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), c = {
      width: u.width,
      height: u.height
    };
    return Nr.widthCache[i] = c, ++Nr.cacheCount > OP && (Nr.cacheCount = 0, Nr.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, AP = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function ja(e, t) {
  return TP(e) || EP(e, t) || _P(e, t) || SP();
}
function SP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _P(e, t) {
  if (e) {
    if (typeof e == "string") return uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e, t);
  }
}
function uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function EP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function TP(e) {
  if (Array.isArray(e)) return e;
}
function jP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ch(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, MP(n.key), n);
  }
}
function $P(e, t, r) {
  return t && ch(e.prototype, t), r && ch(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MP(e) {
  var t = IP(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function IP(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var sh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, lh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, CP = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, kP = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Ig = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, RP = Object.keys(Ig), qr = "NaN";
function NP(e, t) {
  return e * Ig[t];
}
var na = /* @__PURE__ */ (function() {
  function e(t, r) {
    jP(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !CP.test(r) && (this.num = NaN, this.unit = ""), RP.includes(r) && (this.num = NP(t, r), this.unit = "px");
  }
  return $P(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = kP.exec(r)) !== null && n !== void 0 ? n : [], a = ja(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
})();
function Cg(e) {
  if (e.includes(qr))
    return qr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = sh.exec(t)) !== null && r !== void 0 ? r : [], i = ja(n, 4), a = i[1], o = i[2], u = i[3], c = na.parse(a ?? ""), s = na.parse(u ?? ""), l = o === "*" ? c.multiply(s) : c.divide(s);
    if (l.isNaN())
      return qr;
    t = t.replace(sh, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = lh.exec(t)) !== null && f !== void 0 ? f : [], p = ja(d, 4), y = p[1], v = p[2], h = p[3], g = na.parse(y ?? ""), b = na.parse(h ?? ""), x = v === "+" ? g.add(b) : g.subtract(b);
    if (x.isNaN())
      return qr;
    t = t.replace(lh, x.toString());
  }
  return t;
}
var fh = /\(([^()]*)\)/;
function DP(e) {
  for (var t = e; t.includes("("); ) {
    var r = fh.exec(t), n = ja(r, 2), i = n[1];
    t = t.replace(fh, Cg(i));
  }
  return t;
}
function LP(e) {
  var t = e.replace(/\s+/g, "");
  return t = DP(t), t = Cg(t), t;
}
function BP(e) {
  try {
    return LP(e);
  } catch {
    return qr;
  }
}
function $c(e) {
  var t = BP(e.slice(5, -1));
  return t === qr ? "" : t;
}
var qP = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], FP = ["dx", "dy", "angle", "className", "breakAll"];
function Ys() {
  return Ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ys.apply(this, arguments);
}
function dh(e, t) {
  if (e == null) return {};
  var r = WP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function WP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ph(e, t) {
  return HP(e) || KP(e, t) || UP(e, t) || zP();
}
function zP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UP(e, t) {
  if (e) {
    if (typeof e == "string") return hh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hh(e, t);
  }
}
function hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function HP(e) {
  if (Array.isArray(e)) return e;
}
var kg = /[ \f\n\r\t\v\u2028\u2029]+/, Rg = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    ne(r) || (n ? a = r.toString().split("") : a = r.toString().split(kg));
    var o = a.map(function(c) {
      return {
        word: c,
        width: Vn(c, i).width
      };
    }), u = n ? 0 : Vn(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, GP = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, c = t.style, s = t.breakAll, l = W(o), f = u, d = function() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return k.reduce(function(R, L) {
      var F = L.word, K = L.width, I = R[R.length - 1];
      if (I && (i == null || a || I.width + K + n < Number(i)))
        I.words.push(F), I.width += K + n;
      else {
        var D = {
          words: [F],
          width: K
        };
        R.push(D);
      }
      return R;
    }, []);
  }, p = d(r), y = function(k) {
    return k.reduce(function(R, L) {
      return R.width > L.width ? R : L;
    });
  };
  if (!l)
    return p;
  for (var v = "…", h = function(k) {
    var R = f.slice(0, k), L = Rg({
      breakAll: s,
      style: c,
      children: R + v
    }).wordsWithComputedWidth, F = d(L), K = F.length > o || y(F).width > Number(i);
    return [K, F];
  }, g = 0, b = f.length - 1, x = 0, w; g <= b && x <= f.length - 1; ) {
    var m = Math.floor((g + b) / 2), O = m - 1, P = h(O), S = ph(P, 2), _ = S[0], $ = S[1], E = h(m), j = ph(E, 1), M = j[0];
    if (!_ && !M && (g = m + 1), _ && M && (b = m - 1), !_ && M) {
      w = $;
      break;
    }
    x++;
  }
  return w || p;
}, vh = function(t) {
  var r = ne(t) ? [] : t.toString().split(kg);
  return [{
    words: r
  }];
}, VP = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Wt.isSsr) {
    var c, s, l = Rg({
      breakAll: o,
      children: i,
      style: a
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      c = f, s = d;
    } else
      return vh(i);
    return GP({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, c, s, r, n);
  }
  return vh(i);
}, yh = "#808080", rr = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, c = t.capHeight, s = c === void 0 ? "0.71em" : c, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, v = y === void 0 ? "end" : y, h = t.fill, g = h === void 0 ? yh : h, b = dh(t, qP), x = rf(function() {
    return VP({
      breakAll: b.breakAll,
      children: b.children,
      maxLines: b.maxLines,
      scaleToFit: f,
      style: b.style,
      width: b.width
    });
  }, [b.breakAll, b.children, b.maxLines, f, b.style, b.width]), w = b.dx, m = b.dy, O = b.angle, P = b.className, S = b.breakAll, _ = dh(b, FP);
  if (!Ce(n) || !Ce(a))
    return null;
  var $ = n + (W(w) ? w : 0), E = a + (W(m) ? m : 0), j;
  switch (v) {
    case "start":
      j = $c("calc(".concat(s, ")"));
      break;
    case "middle":
      j = $c("calc(".concat((x.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
      break;
    default:
      j = $c("calc(".concat(x.length - 1, " * -").concat(u, ")"));
      break;
  }
  var M = [];
  if (f) {
    var C = x[0].width, k = b.width;
    M.push("scale(".concat((W(k) ? k / C : 1) / C, ")"));
  }
  return O && M.push("rotate(".concat(O, ", ").concat($, ", ").concat(E, ")")), M.length && (_.transform = M.join(" ")), /* @__PURE__ */ A.createElement("text", Ys({}, X(_, !0), {
    x: $,
    y: E,
    className: ae("recharts-text", P),
    textAnchor: p,
    fill: g.includes("url") ? yh : g
  }), x.map(function(R, L) {
    var F = R.words.join(S ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ A.createElement("tspan", {
        x: $,
        dy: L === 0 ? j : u,
        key: "".concat(F, "-").concat(L)
      }, F)
    );
  }));
};
function Qt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function YP(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function gf(e) {
  let t, r, n;
  e.length !== 2 ? (t = Qt, r = (u, c) => Qt(e(u), c), n = (u, c) => e(u) - c) : (t = e === Qt || e === YP ? e : XP, r = e, n = e);
  function i(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        r(u[f], c) < 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function a(u, c, s = 0, l = u.length) {
    if (s < l) {
      if (t(c, c) !== 0) return l;
      do {
        const f = s + l >>> 1;
        r(u[f], c) <= 0 ? s = f + 1 : l = f;
      } while (s < l);
    }
    return s;
  }
  function o(u, c, s = 0, l = u.length) {
    const f = i(u, c, s, l - 1);
    return f > s && n(u[f - 1], c) > -n(u[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function XP() {
  return 0;
}
function Ng(e) {
  return e === null ? NaN : +e;
}
function* ZP(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const JP = gf(Qt), Fi = JP.right;
gf(Ng).center;
class mh extends Map {
  constructor(t, r = tA) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(gh(this, t));
  }
  has(t) {
    return super.has(gh(this, t));
  }
  set(t, r) {
    return super.set(QP(this, t), r);
  }
  delete(t) {
    return super.delete(eA(this, t));
  }
}
function gh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function QP({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function eA({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function tA(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function rA(e = Qt) {
  if (e === Qt) return Dg;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Dg(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const nA = Math.sqrt(50), iA = Math.sqrt(10), aA = Math.sqrt(2);
function $a(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= nA ? 10 : a >= iA ? 5 : a >= aA ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e * s), c = Math.round(t * s), u / s < e && ++u, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e / s), c = Math.round(t / s), u * s < e && ++u, c * s > t && --c), c < u && 0.5 <= r && r < 2 ? $a(e, t, r * 2) : [u, c, s];
}
function Xs(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? $a(t, e, r) : $a(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, c = new Array(u);
  if (n)
    if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o;
    else for (let s = 0; s < u; ++s) c[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * o;
  return c;
}
function Zs(e, t, r) {
  return t = +t, e = +e, r = +r, $a(e, t, r)[2];
}
function Js(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Zs(t, e, r) : Zs(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function bh(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function xh(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Lg(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Dg : rA(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, l = Math.log(c), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (c - f) / c) * (s - c / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - s * f / c + d)), y = Math.min(n, Math.floor(t + (c - s) * f / c + d));
      Lg(e, t, p, y, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Ln(e, r, t), i(e[n], a) > 0 && Ln(e, r, n); o < u; ) {
      for (Ln(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? Ln(e, r, u) : (++u, Ln(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Ln(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function oA(e, t, r) {
  if (e = Float64Array.from(ZP(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return xh(e);
    if (t >= 1) return bh(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = bh(Lg(e, a).subarray(0, a + 1)), u = xh(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function uA(e, t, r = Ng) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function cA(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function st(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function zt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Qs = /* @__PURE__ */ Symbol("implicit");
function bf() {
  var e = new mh(), t = [], r = [], n = Qs;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Qs) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new mh();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return bf(t, r).unknown(n);
  }, st.apply(i, arguments), i;
}
function ci() {
  var e = bf().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, c = 0, s = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = i < n, y = p ? i : n, v = p ? n : i;
    a = (v - y) / Math.max(1, d - c + s * 2), u && (a = Math.floor(a)), y += (v - y - a * (d - c)) * l, o = a * (1 - c), u && (y = Math.round(y), o = Math.round(o));
    var h = cA(d).map(function(g) {
      return y + a * g;
    });
    return r(p ? h.reverse() : h);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (c = Math.min(1, s = +d), f()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), f()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, f()) : s;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return ci(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(l);
  }, st.apply(f(), arguments);
}
function Bg(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Bg(t());
  }, e;
}
function Yn() {
  return Bg(ci.apply(null, arguments).paddingInner(1));
}
function xf(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function qg(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Wi() {
}
var si = 0.7, Ma = 1 / si, Hr = "\\s*([+-]?\\d+)\\s*", li = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", sA = /^#([0-9a-f]{3,8})$/, lA = new RegExp(`^rgb\\(${Hr},${Hr},${Hr}\\)$`), fA = new RegExp(`^rgb\\(${wt},${wt},${wt}\\)$`), dA = new RegExp(`^rgba\\(${Hr},${Hr},${Hr},${li}\\)$`), pA = new RegExp(`^rgba\\(${wt},${wt},${wt},${li}\\)$`), hA = new RegExp(`^hsl\\(${li},${wt},${wt}\\)$`), vA = new RegExp(`^hsla\\(${li},${wt},${wt},${li}\\)$`), Oh = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
xf(Wi, fi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: wh,
  // Deprecated! Use color.formatHex.
  formatHex: wh,
  formatHex8: yA,
  formatHsl: mA,
  formatRgb: Ph,
  toString: Ph
});
function wh() {
  return this.rgb().formatHex();
}
function yA() {
  return this.rgb().formatHex8();
}
function mA() {
  return Fg(this).formatHsl();
}
function Ph() {
  return this.rgb().formatRgb();
}
function fi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = sA.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ah(t) : r === 3 ? new He(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ia(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ia(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = lA.exec(e)) ? new He(t[1], t[2], t[3], 1) : (t = fA.exec(e)) ? new He(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = dA.exec(e)) ? ia(t[1], t[2], t[3], t[4]) : (t = pA.exec(e)) ? ia(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = hA.exec(e)) ? Eh(t[1], t[2] / 100, t[3] / 100, 1) : (t = vA.exec(e)) ? Eh(t[1], t[2] / 100, t[3] / 100, t[4]) : Oh.hasOwnProperty(e) ? Ah(Oh[e]) : e === "transparent" ? new He(NaN, NaN, NaN, 0) : null;
}
function Ah(e) {
  return new He(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ia(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new He(e, t, r, n);
}
function gA(e) {
  return e instanceof Wi || (e = fi(e)), e ? (e = e.rgb(), new He(e.r, e.g, e.b, e.opacity)) : new He();
}
function el(e, t, r, n) {
  return arguments.length === 1 ? gA(e) : new He(e, t, r, n ?? 1);
}
function He(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
xf(He, el, qg(Wi, {
  brighter(e) {
    return e = e == null ? Ma : Math.pow(Ma, e), new He(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? si : Math.pow(si, e), new He(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new He(Pr(this.r), Pr(this.g), Pr(this.b), Ia(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Sh,
  // Deprecated! Use color.formatHex.
  formatHex: Sh,
  formatHex8: bA,
  formatRgb: _h,
  toString: _h
}));
function Sh() {
  return `#${mr(this.r)}${mr(this.g)}${mr(this.b)}`;
}
function bA() {
  return `#${mr(this.r)}${mr(this.g)}${mr(this.b)}${mr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function _h() {
  const e = Ia(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Pr(this.r)}, ${Pr(this.g)}, ${Pr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ia(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Pr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function mr(e) {
  return e = Pr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Eh(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new pt(e, t, r, n);
}
function Fg(e) {
  if (e instanceof pt) return new pt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wi || (e = fi(e)), !e) return new pt();
  if (e instanceof pt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, c = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new pt(o, u, c, e.opacity);
}
function xA(e, t, r, n) {
  return arguments.length === 1 ? Fg(e) : new pt(e, t, r, n ?? 1);
}
function pt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
xf(pt, xA, qg(Wi, {
  brighter(e) {
    return e = e == null ? Ma : Math.pow(Ma, e), new pt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? si : Math.pow(si, e), new pt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new He(
      Mc(e >= 240 ? e - 240 : e + 120, i, n),
      Mc(e, i, n),
      Mc(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new pt(Th(this.h), aa(this.s), aa(this.l), Ia(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ia(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Th(this.h)}, ${aa(this.s) * 100}%, ${aa(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Th(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function aa(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Mc(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Of = (e) => () => e;
function OA(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function wA(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function PA(e) {
  return (e = +e) == 1 ? Wg : function(t, r) {
    return r - t ? wA(t, r, e) : Of(isNaN(t) ? r : t);
  };
}
function Wg(e, t) {
  var r = t - e;
  return r ? OA(e, r) : Of(isNaN(e) ? t : e);
}
const jh = (function e(t) {
  var r = PA(t);
  function n(i, a) {
    var o = r((i = el(i)).r, (a = el(a)).r), u = r(i.g, a.g), c = r(i.b, a.b), s = Wg(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = c(l), i.opacity = s(l), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function AA(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function SA(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _A(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Tn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function EA(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ca(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function TA(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Tn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var tl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ic = new RegExp(tl.source, "g");
function jA(e) {
  return function() {
    return e;
  };
}
function $A(e) {
  return function(t) {
    return e(t) + "";
  };
}
function MA(e, t) {
  var r = tl.lastIndex = Ic.lastIndex = 0, n, i, a, o = -1, u = [], c = [];
  for (e = e + "", t = t + ""; (n = tl.exec(e)) && (i = Ic.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, c.push({ i: o, x: Ca(n, i) })), r = Ic.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? c[0] ? $A(c[0].x) : jA(t) : (t = c.length, function(s) {
    for (var l = 0, f; l < t; ++l) u[(f = c[l]).i] = f.x(s);
    return u.join("");
  });
}
function Tn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Of(t) : (r === "number" ? Ca : r === "string" ? (n = fi(t)) ? (t = n, jh) : MA : t instanceof fi ? jh : t instanceof Date ? EA : SA(t) ? AA : Array.isArray(t) ? _A : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? TA : Ca)(e, t);
}
function wf(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function IA(e, t) {
  t === void 0 && (t = e, e = Tn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function CA(e) {
  return function() {
    return e;
  };
}
function ka(e) {
  return +e;
}
var $h = [0, 1];
function Ke(e) {
  return e;
}
function rl(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : CA(isNaN(t) ? NaN : 0.5);
}
function kA(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function RA(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = rl(i, n), a = r(o, a)) : (n = rl(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function NA(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = rl(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var c = Fi(e, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Mo() {
  var e = $h, t = $h, r = Tn, n, i, a, o = Ke, u, c, s;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== Ke && (o = kA(e[0], e[d - 1])), u = d > 2 ? NA : RA, c = s = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (c || (c = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((s || (s = u(t, e.map(n), Ca)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ka), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = wf, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ke, l()) : o !== Ke;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, p) {
    return n = d, i = p, l();
  };
}
function Pf() {
  return Mo()(Ke, Ke);
}
function DA(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ra(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Qr(e) {
  return e = Ra(Math.abs(e)), e ? e[1] : NaN;
}
function LA(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring(i -= u, i + u)), !((c += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function BA(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var qA = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function di(e) {
  if (!(t = qA.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Af({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
di.prototype = Af.prototype;
function Af(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Af.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function FA(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var zg;
function WA(e, t) {
  var r = Ra(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (zg = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Ra(e, Math.max(0, t + a - 1))[0];
}
function Mh(e, t) {
  var r = Ra(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Ih = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: DA,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Mh(e * 100, t),
  r: Mh,
  s: WA,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ch(e) {
  return e;
}
var kh = Array.prototype.map, Rh = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function zA(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ch : LA(kh.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ch : BA(kh.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(f) {
    f = di(f);
    var d = f.fill, p = f.align, y = f.sign, v = f.symbol, h = f.zero, g = f.width, b = f.comma, x = f.precision, w = f.trim, m = f.type;
    m === "n" ? (b = !0, m = "g") : Ih[m] || (x === void 0 && (x = 12), w = !0, m = "g"), (h || d === "0" && p === "=") && (h = !0, d = "0", p = "=");
    var O = v === "$" ? r : v === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = v === "$" ? n : /[%p]/.test(m) ? o : "", S = Ih[m], _ = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function $(E) {
      var j = O, M = P, C, k, R;
      if (m === "c")
        M = S(E) + M, E = "";
      else {
        E = +E;
        var L = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? c : S(Math.abs(E), x), w && (E = FA(E)), L && +E == 0 && y !== "+" && (L = !1), j = (L ? y === "(" ? y : u : y === "-" || y === "(" ? "" : y) + j, M = (m === "s" ? Rh[8 + zg / 3] : "") + M + (L && y === "(" ? ")" : ""), _) {
          for (C = -1, k = E.length; ++C < k; )
            if (R = E.charCodeAt(C), 48 > R || R > 57) {
              M = (R === 46 ? i + E.slice(C + 1) : E.slice(C)) + M, E = E.slice(0, C);
              break;
            }
        }
      }
      b && !h && (E = t(E, 1 / 0));
      var F = j.length + E.length + M.length, K = F < g ? new Array(g - F + 1).join(d) : "";
      switch (b && h && (E = t(K + E, K.length ? g - M.length : 1 / 0), K = ""), p) {
        case "<":
          E = j + E + M + K;
          break;
        case "=":
          E = j + K + E + M;
          break;
        case "^":
          E = K.slice(0, F = K.length >> 1) + j + E + M + K.slice(F);
          break;
        default:
          E = K + j + E + M;
          break;
      }
      return a(E);
    }
    return $.toString = function() {
      return f + "";
    }, $;
  }
  function l(f, d) {
    var p = s((f = di(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Qr(d) / 3))) * 3, v = Math.pow(10, -y), h = Rh[8 + y / 3];
    return function(g) {
      return p(v * g) + h;
    };
  }
  return {
    format: s,
    formatPrefix: l
  };
}
var oa, Sf, Ug;
UA({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function UA(e) {
  return oa = zA(e), Sf = oa.format, Ug = oa.formatPrefix, oa;
}
function KA(e) {
  return Math.max(0, -Qr(Math.abs(e)));
}
function HA(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Qr(t) / 3))) * 3 - Qr(Math.abs(e)));
}
function GA(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Qr(t) - Qr(e)) + 1;
}
function Kg(e, t, r, n) {
  var i = Js(e, t, r), a;
  switch (n = di(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = HA(i, o)) && (n.precision = a), Ug(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = GA(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = KA(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Sf(n);
}
function ir(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Xs(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Kg(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], c, s, l = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); l-- > 0; ) {
      if (s = Zs(o, u, r), s === c)
        return n[i] = o, n[a] = u, t(n);
      if (s > 0)
        o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      c = s;
    }
    return e;
  }, e;
}
function Na() {
  var e = Pf();
  return e.copy = function() {
    return zi(e, Na());
  }, st.apply(e, arguments), ir(e);
}
function Hg(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ka), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Hg(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ka) : [0, 1], ir(r);
}
function Gg(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Nh(e) {
  return Math.log(e);
}
function Dh(e) {
  return Math.exp(e);
}
function VA(e) {
  return -Math.log(-e);
}
function YA(e) {
  return -Math.exp(-e);
}
function XA(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function ZA(e) {
  return e === 10 ? XA : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function JA(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Lh(e) {
  return (t, r) => -e(-t, r);
}
function _f(e) {
  const t = e(Nh, Dh), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = JA(n), a = ZA(n), r()[0] < 0 ? (i = Lh(i), a = Lh(a), e(VA, YA)) : e(Nh, Dh), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const c = r();
    let s = c[0], l = c[c.length - 1];
    const f = l < s;
    f && ([s, l] = [l, s]);
    let d = i(s), p = i(l), y, v;
    const h = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && p - d < h) {
      if (d = Math.floor(d), p = Math.ceil(p), s > 0) {
        for (; d <= p; ++d)
          for (y = 1; y < n; ++y)
            if (v = d < 0 ? y / a(-d) : y * a(d), !(v < s)) {
              if (v > l) break;
              g.push(v);
            }
      } else for (; d <= p; ++d)
        for (y = n - 1; y >= 1; --y)
          if (v = d > 0 ? y / a(-d) : y * a(d), !(v < s)) {
            if (v > l) break;
            g.push(v);
          }
      g.length * 2 < h && (g = Xs(s, l, h));
    } else
      g = Xs(d, p, Math.min(p - d, h)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (u, c) => {
    if (u == null && (u = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = di(c)).precision == null && (c.trim = !0), c = Sf(c)), u === 1 / 0) return c;
    const s = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= s ? c(l) : "";
    };
  }, t.nice = () => r(Gg(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Vg() {
  const e = _f(Mo()).domain([1, 10]);
  return e.copy = () => zi(e, Vg()).base(e.base()), st.apply(e, arguments), e;
}
function Bh(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function qh(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Ef(e) {
  var t = 1, r = e(Bh(t), qh(t));
  return r.constant = function(n) {
    return arguments.length ? e(Bh(t = +n), qh(t)) : t;
  }, ir(r);
}
function Yg() {
  var e = Ef(Mo());
  return e.copy = function() {
    return zi(e, Yg()).constant(e.constant());
  }, st.apply(e, arguments);
}
function Fh(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function QA(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function eS(e) {
  return e < 0 ? -e * e : e * e;
}
function Tf(e) {
  var t = e(Ke, Ke), r = 1;
  function n() {
    return r === 1 ? e(Ke, Ke) : r === 0.5 ? e(QA, eS) : e(Fh(r), Fh(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, ir(t);
}
function jf() {
  var e = Tf(Mo());
  return e.copy = function() {
    return zi(e, jf()).exponent(e.exponent());
  }, st.apply(e, arguments), e;
}
function tS() {
  return jf.apply(null, arguments).exponent(0.5);
}
function Wh(e) {
  return Math.sign(e) * e * e;
}
function rS(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Xg() {
  var e = Pf(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = rS(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Wh(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ka)).map(Wh)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Xg(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, st.apply(i, arguments), ir(i);
}
function Zg() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = uA(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Fi(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Qt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Zg().domain(e).range(t).unknown(n);
  }, st.apply(a, arguments);
}
function Jg() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[Fi(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(c) {
    var s = i.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Jg().domain([e, t]).range(i).unknown(a);
  }, st.apply(ir(o), arguments);
}
function Qg() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Fi(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Qg().domain(e).range(t).unknown(r);
  }, st.apply(i, arguments);
}
const Cc = /* @__PURE__ */ new Date(), kc = /* @__PURE__ */ new Date();
function ke(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const c = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (s < a && a < o);
    return c;
  }, i.filter = (a) => ke((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Cc.setTime(+a), kc.setTime(+o), e(Cc), e(kc), Math.floor(r(Cc, kc))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Da = ke(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Da.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ke((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Da);
Da.range;
const Ct = 1e3, ot = Ct * 60, kt = ot * 60, Lt = kt * 24, $f = Lt * 7, zh = Lt * 30, Rc = Lt * 365, gr = ke((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ct);
}, (e, t) => (t - e) / Ct, (e) => e.getUTCSeconds());
gr.range;
const Mf = ke((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ct);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
Mf.range;
const If = ke((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
If.range;
const Cf = ke((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ct - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * kt);
}, (e, t) => (t - e) / kt, (e) => e.getHours());
Cf.range;
const kf = ke((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * kt);
}, (e, t) => (t - e) / kt, (e) => e.getUTCHours());
kf.range;
const Ui = ke(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / Lt,
  (e) => e.getDate() - 1
);
Ui.range;
const Io = ke((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => e.getUTCDate() - 1);
Io.range;
const eb = ke((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Lt, (e) => Math.floor(e / Lt));
eb.range;
function $r(e) {
  return ke((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / $f);
}
const Co = $r(0), La = $r(1), nS = $r(2), iS = $r(3), en = $r(4), aS = $r(5), oS = $r(6);
Co.range;
La.range;
nS.range;
iS.range;
en.range;
aS.range;
oS.range;
function Mr(e) {
  return ke((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / $f);
}
const ko = Mr(0), Ba = Mr(1), uS = Mr(2), cS = Mr(3), tn = Mr(4), sS = Mr(5), lS = Mr(6);
ko.range;
Ba.range;
uS.range;
cS.range;
tn.range;
sS.range;
lS.range;
const Rf = ke((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rf.range;
const Nf = ke((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Nf.range;
const Bt = ke((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Bt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ke((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Bt.range;
const qt = ke((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ke((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
qt.range;
function tb(e, t, r, n, i, a) {
  const o = [
    [gr, 1, Ct],
    [gr, 5, 5 * Ct],
    [gr, 15, 15 * Ct],
    [gr, 30, 30 * Ct],
    [a, 1, ot],
    [a, 5, 5 * ot],
    [a, 15, 15 * ot],
    [a, 30, 30 * ot],
    [i, 1, kt],
    [i, 3, 3 * kt],
    [i, 6, 6 * kt],
    [i, 12, 12 * kt],
    [n, 1, Lt],
    [n, 2, 2 * Lt],
    [r, 1, $f],
    [t, 1, zh],
    [t, 3, 3 * zh],
    [e, 1, Rc]
  ];
  function u(s, l, f) {
    const d = l < s;
    d && ([s, l] = [l, s]);
    const p = f && typeof f.range == "function" ? f : c(s, l, f), y = p ? p.range(s, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function c(s, l, f) {
    const d = Math.abs(l - s) / f, p = gf(([, , h]) => h).right(o, d);
    if (p === o.length) return e.every(Js(s / Rc, l / Rc, f));
    if (p === 0) return Da.every(Math.max(Js(s, l, f), 1));
    const [y, v] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(v);
  }
  return [u, c];
}
const [fS, dS] = tb(qt, Nf, ko, eb, kf, If), [pS, hS] = tb(Bt, Rf, Co, Ui, Cf, Mf);
function Nc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Bn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function vS(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, c = e.shortMonths, s = qn(i), l = Fn(i), f = qn(a), d = Fn(a), p = qn(o), y = Fn(o), v = qn(u), h = Fn(u), g = qn(c), b = Fn(c), x = {
    a: L,
    A: F,
    b: K,
    B: I,
    c: null,
    d: Yh,
    e: Yh,
    f: LS,
    g: VS,
    G: XS,
    H: RS,
    I: NS,
    j: DS,
    L: rb,
    m: BS,
    M: qS,
    p: D,
    q: B,
    Q: Jh,
    s: Qh,
    S: FS,
    u: WS,
    U: zS,
    V: US,
    w: KS,
    W: HS,
    x: null,
    X: null,
    y: GS,
    Y: YS,
    Z: ZS,
    "%": Zh
  }, w = {
    a: H,
    A: V,
    b: J,
    B: ee,
    c: null,
    d: Xh,
    e: Xh,
    f: t_,
    g: f_,
    G: p_,
    H: JS,
    I: QS,
    j: e_,
    L: ib,
    m: r_,
    M: n_,
    p: ie,
    q: re,
    Q: Jh,
    s: Qh,
    S: i_,
    u: a_,
    U: o_,
    V: u_,
    w: c_,
    W: s_,
    x: null,
    X: null,
    y: l_,
    Y: d_,
    Z: h_,
    "%": Zh
  }, m = {
    a: $,
    A: E,
    b: j,
    B: M,
    c: C,
    d: Gh,
    e: Gh,
    f: MS,
    g: Hh,
    G: Kh,
    H: Vh,
    I: Vh,
    j: ES,
    L: $S,
    m: _S,
    M: TS,
    p: _,
    q: SS,
    Q: CS,
    s: kS,
    S: jS,
    u: xS,
    U: OS,
    V: wS,
    w: bS,
    W: PS,
    x: k,
    X: R,
    y: Hh,
    Y: Kh,
    Z: AS,
    "%": IS
  };
  x.x = O(r, x), x.X = O(n, x), x.c = O(t, x), w.x = O(r, w), w.X = O(n, w), w.c = O(t, w);
  function O(q, G) {
    return function(Z) {
      var T = [], ue = -1, z = 0, ge = q.length, we, De, Gt;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++ue < ge; )
        q.charCodeAt(ue) === 37 && (T.push(q.slice(z, ue)), (De = Uh[we = q.charAt(++ue)]) != null ? we = q.charAt(++ue) : De = we === "e" ? " " : "0", (Gt = G[we]) && (we = Gt(Z, De)), T.push(we), z = ue + 1);
      return T.push(q.slice(z, ue)), T.join("");
    };
  }
  function P(q, G) {
    return function(Z) {
      var T = Bn(1900, void 0, 1), ue = S(T, q, Z += "", 0), z, ge;
      if (ue != Z.length) return null;
      if ("Q" in T) return new Date(T.Q);
      if ("s" in T) return new Date(T.s * 1e3 + ("L" in T ? T.L : 0));
      if (G && !("Z" in T) && (T.Z = 0), "p" in T && (T.H = T.H % 12 + T.p * 12), T.m === void 0 && (T.m = "q" in T ? T.q : 0), "V" in T) {
        if (T.V < 1 || T.V > 53) return null;
        "w" in T || (T.w = 1), "Z" in T ? (z = Dc(Bn(T.y, 0, 1)), ge = z.getUTCDay(), z = ge > 4 || ge === 0 ? Ba.ceil(z) : Ba(z), z = Io.offset(z, (T.V - 1) * 7), T.y = z.getUTCFullYear(), T.m = z.getUTCMonth(), T.d = z.getUTCDate() + (T.w + 6) % 7) : (z = Nc(Bn(T.y, 0, 1)), ge = z.getDay(), z = ge > 4 || ge === 0 ? La.ceil(z) : La(z), z = Ui.offset(z, (T.V - 1) * 7), T.y = z.getFullYear(), T.m = z.getMonth(), T.d = z.getDate() + (T.w + 6) % 7);
      } else ("W" in T || "U" in T) && ("w" in T || (T.w = "u" in T ? T.u % 7 : "W" in T ? 1 : 0), ge = "Z" in T ? Dc(Bn(T.y, 0, 1)).getUTCDay() : Nc(Bn(T.y, 0, 1)).getDay(), T.m = 0, T.d = "W" in T ? (T.w + 6) % 7 + T.W * 7 - (ge + 5) % 7 : T.w + T.U * 7 - (ge + 6) % 7);
      return "Z" in T ? (T.H += T.Z / 100 | 0, T.M += T.Z % 100, Dc(T)) : Nc(T);
    };
  }
  function S(q, G, Z, T) {
    for (var ue = 0, z = G.length, ge = Z.length, we, De; ue < z; ) {
      if (T >= ge) return -1;
      if (we = G.charCodeAt(ue++), we === 37) {
        if (we = G.charAt(ue++), De = m[we in Uh ? G.charAt(ue++) : we], !De || (T = De(q, Z, T)) < 0) return -1;
      } else if (we != Z.charCodeAt(T++))
        return -1;
    }
    return T;
  }
  function _(q, G, Z) {
    var T = s.exec(G.slice(Z));
    return T ? (q.p = l.get(T[0].toLowerCase()), Z + T[0].length) : -1;
  }
  function $(q, G, Z) {
    var T = p.exec(G.slice(Z));
    return T ? (q.w = y.get(T[0].toLowerCase()), Z + T[0].length) : -1;
  }
  function E(q, G, Z) {
    var T = f.exec(G.slice(Z));
    return T ? (q.w = d.get(T[0].toLowerCase()), Z + T[0].length) : -1;
  }
  function j(q, G, Z) {
    var T = g.exec(G.slice(Z));
    return T ? (q.m = b.get(T[0].toLowerCase()), Z + T[0].length) : -1;
  }
  function M(q, G, Z) {
    var T = v.exec(G.slice(Z));
    return T ? (q.m = h.get(T[0].toLowerCase()), Z + T[0].length) : -1;
  }
  function C(q, G, Z) {
    return S(q, t, G, Z);
  }
  function k(q, G, Z) {
    return S(q, r, G, Z);
  }
  function R(q, G, Z) {
    return S(q, n, G, Z);
  }
  function L(q) {
    return o[q.getDay()];
  }
  function F(q) {
    return a[q.getDay()];
  }
  function K(q) {
    return c[q.getMonth()];
  }
  function I(q) {
    return u[q.getMonth()];
  }
  function D(q) {
    return i[+(q.getHours() >= 12)];
  }
  function B(q) {
    return 1 + ~~(q.getMonth() / 3);
  }
  function H(q) {
    return o[q.getUTCDay()];
  }
  function V(q) {
    return a[q.getUTCDay()];
  }
  function J(q) {
    return c[q.getUTCMonth()];
  }
  function ee(q) {
    return u[q.getUTCMonth()];
  }
  function ie(q) {
    return i[+(q.getUTCHours() >= 12)];
  }
  function re(q) {
    return 1 + ~~(q.getUTCMonth() / 3);
  }
  return {
    format: function(q) {
      var G = O(q += "", x);
      return G.toString = function() {
        return q;
      }, G;
    },
    parse: function(q) {
      var G = P(q += "", !1);
      return G.toString = function() {
        return q;
      }, G;
    },
    utcFormat: function(q) {
      var G = O(q += "", w);
      return G.toString = function() {
        return q;
      }, G;
    },
    utcParse: function(q) {
      var G = P(q += "", !0);
      return G.toString = function() {
        return q;
      }, G;
    }
  };
}
var Uh = { "-": "", _: " ", 0: "0" }, Ne = /^\s*\d+/, yS = /^%/, mS = /[\\^$*+?|[\]().{}]/g;
function ce(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function gS(e) {
  return e.replace(mS, "\\$&");
}
function qn(e) {
  return new RegExp("^(?:" + e.map(gS).join("|") + ")", "i");
}
function Fn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function bS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function xS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function OS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function wS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function PS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Kh(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Hh(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function AS(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function SS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function _S(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Gh(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function ES(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Vh(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function TS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function jS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function $S(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function MS(e, t, r) {
  var n = Ne.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function IS(e, t, r) {
  var n = yS.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function CS(e, t, r) {
  var n = Ne.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function kS(e, t, r) {
  var n = Ne.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Yh(e, t) {
  return ce(e.getDate(), t, 2);
}
function RS(e, t) {
  return ce(e.getHours(), t, 2);
}
function NS(e, t) {
  return ce(e.getHours() % 12 || 12, t, 2);
}
function DS(e, t) {
  return ce(1 + Ui.count(Bt(e), e), t, 3);
}
function rb(e, t) {
  return ce(e.getMilliseconds(), t, 3);
}
function LS(e, t) {
  return rb(e, t) + "000";
}
function BS(e, t) {
  return ce(e.getMonth() + 1, t, 2);
}
function qS(e, t) {
  return ce(e.getMinutes(), t, 2);
}
function FS(e, t) {
  return ce(e.getSeconds(), t, 2);
}
function WS(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function zS(e, t) {
  return ce(Co.count(Bt(e) - 1, e), t, 2);
}
function nb(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? en(e) : en.ceil(e);
}
function US(e, t) {
  return e = nb(e), ce(en.count(Bt(e), e) + (Bt(e).getDay() === 4), t, 2);
}
function KS(e) {
  return e.getDay();
}
function HS(e, t) {
  return ce(La.count(Bt(e) - 1, e), t, 2);
}
function GS(e, t) {
  return ce(e.getFullYear() % 100, t, 2);
}
function VS(e, t) {
  return e = nb(e), ce(e.getFullYear() % 100, t, 2);
}
function YS(e, t) {
  return ce(e.getFullYear() % 1e4, t, 4);
}
function XS(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? en(e) : en.ceil(e), ce(e.getFullYear() % 1e4, t, 4);
}
function ZS(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ce(t / 60 | 0, "0", 2) + ce(t % 60, "0", 2);
}
function Xh(e, t) {
  return ce(e.getUTCDate(), t, 2);
}
function JS(e, t) {
  return ce(e.getUTCHours(), t, 2);
}
function QS(e, t) {
  return ce(e.getUTCHours() % 12 || 12, t, 2);
}
function e_(e, t) {
  return ce(1 + Io.count(qt(e), e), t, 3);
}
function ib(e, t) {
  return ce(e.getUTCMilliseconds(), t, 3);
}
function t_(e, t) {
  return ib(e, t) + "000";
}
function r_(e, t) {
  return ce(e.getUTCMonth() + 1, t, 2);
}
function n_(e, t) {
  return ce(e.getUTCMinutes(), t, 2);
}
function i_(e, t) {
  return ce(e.getUTCSeconds(), t, 2);
}
function a_(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function o_(e, t) {
  return ce(ko.count(qt(e) - 1, e), t, 2);
}
function ab(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? tn(e) : tn.ceil(e);
}
function u_(e, t) {
  return e = ab(e), ce(tn.count(qt(e), e) + (qt(e).getUTCDay() === 4), t, 2);
}
function c_(e) {
  return e.getUTCDay();
}
function s_(e, t) {
  return ce(Ba.count(qt(e) - 1, e), t, 2);
}
function l_(e, t) {
  return ce(e.getUTCFullYear() % 100, t, 2);
}
function f_(e, t) {
  return e = ab(e), ce(e.getUTCFullYear() % 100, t, 2);
}
function d_(e, t) {
  return ce(e.getUTCFullYear() % 1e4, t, 4);
}
function p_(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? tn(e) : tn.ceil(e), ce(e.getUTCFullYear() % 1e4, t, 4);
}
function h_() {
  return "+0000";
}
function Zh() {
  return "%";
}
function Jh(e) {
  return +e;
}
function Qh(e) {
  return Math.floor(+e / 1e3);
}
var Dr, ob, ub;
v_({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function v_(e) {
  return Dr = vS(e), ob = Dr.format, Dr.parse, ub = Dr.utcFormat, Dr.utcParse, Dr;
}
function y_(e) {
  return new Date(e);
}
function m_(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Df(e, t, r, n, i, a, o, u, c, s) {
  var l = Pf(), f = l.invert, d = l.domain, p = s(".%L"), y = s(":%S"), v = s("%I:%M"), h = s("%I %p"), g = s("%a %d"), b = s("%b %d"), x = s("%B"), w = s("%Y");
  function m(O) {
    return (c(O) < O ? p : u(O) < O ? y : o(O) < O ? v : a(O) < O ? h : n(O) < O ? i(O) < O ? g : b : r(O) < O ? x : w)(O);
  }
  return l.invert = function(O) {
    return new Date(f(O));
  }, l.domain = function(O) {
    return arguments.length ? d(Array.from(O, m_)) : d().map(y_);
  }, l.ticks = function(O) {
    var P = d();
    return e(P[0], P[P.length - 1], O ?? 10);
  }, l.tickFormat = function(O, P) {
    return P == null ? m : s(P);
  }, l.nice = function(O) {
    var P = d();
    return (!O || typeof O.range != "function") && (O = t(P[0], P[P.length - 1], O ?? 10)), O ? d(Gg(P, O)) : l;
  }, l.copy = function() {
    return zi(l, Df(e, t, r, n, i, a, o, u, c, s));
  }, l;
}
function g_() {
  return st.apply(Df(pS, hS, Bt, Rf, Co, Ui, Cf, Mf, gr, ob).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function b_() {
  return st.apply(Df(fS, dS, qt, Nf, ko, Io, kf, If, gr, ub).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Ro() {
  var e = 0, t = 1, r, n, i, a, o = Ke, u = !1, c;
  function s(f) {
    return f == null || isNaN(f = +f) ? c : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(f) {
    return arguments.length ? (u = !!f, s) : u;
  }, s.interpolator = function(f) {
    return arguments.length ? (o = f, s) : o;
  };
  function l(f) {
    return function(d) {
      var p, y;
      return arguments.length ? ([p, y] = d, o = f(p, y), s) : [o(0), o(1)];
    };
  }
  return s.range = l(Tn), s.rangeRound = l(wf), s.unknown = function(f) {
    return arguments.length ? (c = f, s) : c;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function ar(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function cb() {
  var e = ir(Ro()(Ke));
  return e.copy = function() {
    return ar(e, cb());
  }, zt.apply(e, arguments);
}
function sb() {
  var e = _f(Ro()).domain([1, 10]);
  return e.copy = function() {
    return ar(e, sb()).base(e.base());
  }, zt.apply(e, arguments);
}
function lb() {
  var e = Ef(Ro());
  return e.copy = function() {
    return ar(e, lb()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function Lf() {
  var e = Tf(Ro());
  return e.copy = function() {
    return ar(e, Lf()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function x_() {
  return Lf.apply(null, arguments).exponent(0.5);
}
function fb() {
  var e = [], t = Ke;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Fi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Qt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => oA(e, a / n));
  }, r.copy = function() {
    return fb(t).domain(e);
  }, zt.apply(r, arguments);
}
function No() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, c, s = Ke, l, f = !1, d;
  function p(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +l(v)) - a) * (n * v < n * a ? u : c), s(f ? Math.max(0, Math.min(1, v)) : v));
  }
  p.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(v) {
    return arguments.length ? (f = !!v, p) : f;
  }, p.interpolator = function(v) {
    return arguments.length ? (s = v, p) : s;
  };
  function y(v) {
    return function(h) {
      var g, b, x;
      return arguments.length ? ([g, b, x] = h, s = IA(v, [g, b, x]), p) : [s(0), s(0.5), s(1)];
    };
  }
  return p.range = y(Tn), p.rangeRound = y(wf), p.unknown = function(v) {
    return arguments.length ? (d = v, p) : d;
  }, function(v) {
    return l = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function db() {
  var e = ir(No()(Ke));
  return e.copy = function() {
    return ar(e, db());
  }, zt.apply(e, arguments);
}
function pb() {
  var e = _f(No()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ar(e, pb()).base(e.base());
  }, zt.apply(e, arguments);
}
function hb() {
  var e = Ef(No());
  return e.copy = function() {
    return ar(e, hb()).constant(e.constant());
  }, zt.apply(e, arguments);
}
function Bf() {
  var e = Tf(No());
  return e.copy = function() {
    return ar(e, Bf()).exponent(e.exponent());
  }, zt.apply(e, arguments);
}
function O_() {
  return Bf.apply(null, arguments).exponent(0.5);
}
const ev = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ci,
  scaleDiverging: db,
  scaleDivergingLog: pb,
  scaleDivergingPow: Bf,
  scaleDivergingSqrt: O_,
  scaleDivergingSymlog: hb,
  scaleIdentity: Hg,
  scaleImplicit: Qs,
  scaleLinear: Na,
  scaleLog: Vg,
  scaleOrdinal: bf,
  scalePoint: Yn,
  scalePow: jf,
  scaleQuantile: Zg,
  scaleQuantize: Jg,
  scaleRadial: Xg,
  scaleSequential: cb,
  scaleSequentialLog: sb,
  scaleSequentialPow: Lf,
  scaleSequentialQuantile: fb,
  scaleSequentialSqrt: x_,
  scaleSequentialSymlog: lb,
  scaleSqrt: tS,
  scaleSymlog: Yg,
  scaleThreshold: Qg,
  scaleTime: g_,
  scaleUtc: b_,
  tickFormat: Kg
}, Symbol.toStringTag, { value: "Module" }));
var Lc, tv;
function Do() {
  if (tv) return Lc;
  tv = 1;
  var e = An();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a], c = n(u);
      if (c != null && (s === void 0 ? c === c && !e(c) : i(c, s)))
        var s = c, l = u;
    }
    return l;
  }
  return Lc = t, Lc;
}
var Bc, rv;
function vb() {
  if (rv) return Bc;
  rv = 1;
  function e(t, r) {
    return t > r;
  }
  return Bc = e, Bc;
}
var qc, nv;
function w_() {
  if (nv) return qc;
  nv = 1;
  var e = Do(), t = vb(), r = En();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return qc = n, qc;
}
var P_ = w_();
const Zt = /* @__PURE__ */ ye(P_);
var Fc, iv;
function yb() {
  if (iv) return Fc;
  iv = 1;
  function e(t, r) {
    return t < r;
  }
  return Fc = e, Fc;
}
var Wc, av;
function A_() {
  if (av) return Wc;
  av = 1;
  var e = Do(), t = yb(), r = En();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return Wc = n, Wc;
}
var S_ = A_();
const Lo = /* @__PURE__ */ ye(S_);
var zc, ov;
function __() {
  if (ov) return zc;
  ov = 1;
  var e = of(), t = Et(), r = Ag(), n = mt();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return zc = i, zc;
}
var Uc, uv;
function E_() {
  if (uv) return Uc;
  uv = 1;
  var e = wg(), t = __();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return Uc = r, Uc;
}
var T_ = E_();
const j_ = /* @__PURE__ */ ye(T_);
var jn = 1e9, $_ = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Ff, Pe = !0, ut = "[DecimalError] ", Ar = ut + "Invalid argument: ", qf = ut + "Exponent out of range: ", $n = Math.floor, hr = Math.pow, M_ = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ze, Re = 1e7, Oe = 7, mb = 9007199254740991, qa = $n(mb / Oe), Y = {};
Y.absoluteValue = Y.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
Y.comparedTo = Y.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
Y.decimalPlaces = Y.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Oe;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
Y.dividedBy = Y.div = function(e) {
  return Dt(this, new this.constructor(e));
};
Y.dividedToIntegerBy = Y.idiv = function(e) {
  var t = this, r = t.constructor;
  return me(Dt(t, new r(e), 0, 1), r.precision);
};
Y.equals = Y.eq = function(e) {
  return !this.cmp(e);
};
Y.exponent = function() {
  return je(this);
};
Y.greaterThan = Y.gt = function(e) {
  return this.cmp(e) > 0;
};
Y.greaterThanOrEqualTo = Y.gte = function(e) {
  return this.cmp(e) >= 0;
};
Y.isInteger = Y.isint = function() {
  return this.e > this.d.length - 2;
};
Y.isNegative = Y.isneg = function() {
  return this.s < 0;
};
Y.isPositive = Y.ispos = function() {
  return this.s > 0;
};
Y.isZero = function() {
  return this.s === 0;
};
Y.lessThan = Y.lt = function(e) {
  return this.cmp(e) < 0;
};
Y.lessThanOrEqualTo = Y.lte = function(e) {
  return this.cmp(e) < 1;
};
Y.logarithm = Y.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Ze)) throw Error(ut + "NaN");
  if (r.s < 1) throw Error(ut + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Ze) ? new n(0) : (Pe = !1, t = Dt(pi(r, a), pi(e, a), a), Pe = !0, me(t, i));
};
Y.minus = Y.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? xb(t, e) : gb(t, (e.s = -e.s, e));
};
Y.modulo = Y.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ut + "NaN");
  return r.s ? (Pe = !1, t = Dt(r, e, 0, 1).times(e), Pe = !0, r.minus(t)) : me(new n(r), i);
};
Y.naturalExponential = Y.exp = function() {
  return bb(this);
};
Y.naturalLogarithm = Y.ln = function() {
  return pi(this);
};
Y.negated = Y.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
Y.plus = Y.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? gb(t, e) : xb(t, (e.s = -e.s, e));
};
Y.precision = Y.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ar + e);
  if (t = je(i) + 1, n = i.d.length - 1, r = n * Oe + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
Y.squareRoot = Y.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, c = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new c(0);
    throw Error(ut + "NaN");
  }
  for (e = je(u), Pe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = xt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = $n((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Dt(u, a, o + 2)).times(0.5), xt(a.d).slice(0, o) === (t = xt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (me(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Pe = !0, me(n, r);
};
Y.times = Y.mul = function(e) {
  var t, r, n, i, a, o, u, c, s, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, c = d.length, s = p.length, c < s && (a = d, d = p, p = a, o = c, c = s, s = o), a = [], o = c + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      u = a[i] + p[n] * d[i - n - 1] + t, a[i--] = u % Re | 0, t = u / Re | 0;
    a[i] = (a[i] + t) % Re | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Pe ? me(e, f.precision) : e;
};
Y.toDecimalPlaces = Y.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (St(e, 0, jn), t === void 0 ? t = n.rounding : St(t, 0, 8), me(r, e + je(r) + 1, t));
};
Y.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Er(n, !0) : (St(e, 0, jn), t === void 0 ? t = i.rounding : St(t, 0, 8), n = me(new i(n), e + 1, t), r = Er(n, !0, e + 1)), r;
};
Y.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Er(i) : (St(e, 0, jn), t === void 0 ? t = a.rounding : St(t, 0, 8), n = me(new a(i), e + je(i) + 1, t), r = Er(n.abs(), !1, e + je(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
Y.toInteger = Y.toint = function() {
  var e = this, t = e.constructor;
  return me(new t(e), je(e) + 1, t.rounding);
};
Y.toNumber = function() {
  return +this;
};
Y.toPower = Y.pow = function(e) {
  var t, r, n, i, a, o, u = this, c = u.constructor, s = 12, l = +(e = new c(e));
  if (!e.s) return new c(Ze);
  if (u = new c(u), !u.s) {
    if (e.s < 1) throw Error(ut + "Infinity");
    return u;
  }
  if (u.eq(Ze)) return u;
  if (n = c.precision, e.eq(Ze)) return me(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= mb) {
      for (i = new c(Ze), t = Math.ceil(n / Oe + 4), Pe = !1; r % 2 && (i = i.times(u), sv(i.d, t)), r = $n(r / 2), r !== 0; )
        u = u.times(u), sv(u.d, t);
      return Pe = !0, e.s < 0 ? new c(Ze).div(i) : me(i, n);
    }
  } else if (a < 0) throw Error(ut + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, Pe = !1, i = e.times(pi(u, n + s)), Pe = !0, i = bb(i), i.s = a, i;
};
Y.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = je(i), n = Er(i, r <= a.toExpNeg || r >= a.toExpPos)) : (St(e, 1, jn), t === void 0 ? t = a.rounding : St(t, 0, 8), i = me(new a(i), e, t), r = je(i), n = Er(i, e <= r || r <= a.toExpNeg, e)), n;
};
Y.toSignificantDigits = Y.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (St(e, 1, jn), t === void 0 ? t = n.rounding : St(t, 0, 8)), me(new n(r), e, t);
};
Y.toString = Y.valueOf = Y.val = Y.toJSON = Y[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = je(e), r = e.constructor;
  return Er(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function gb(e, t) {
  var r, n, i, a, o, u, c, s, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Pe ? me(t, f) : t;
  if (c = e.d, s = t.d, o = e.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, u = s.length) : (n = s, i = o, u = c.length), o = Math.ceil(f / Oe), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = c.length, a = s.length, u - a < 0 && (a = u, n = s, s = c, c = n), r = 0; a; )
    r = (c[--a] = c[a] + s[a] + r) / Re | 0, c[a] %= Re;
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
  return t.d = c, t.e = i, Pe ? me(t, f) : t;
}
function St(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ar + e);
}
function xt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = Oe - n.length, r && (a += Yt(r)), a += n;
    o = e[t], n = o + "", r = Oe - n.length, r && (a += Yt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Dt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Re | 0, o = a / Re | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o)
      c = a > o ? 1 : -1;
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Re + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, c, s, l, f, d, p, y, v, h, g, b, x, w, m, O, P, S, _ = n.constructor, $ = n.s == i.s ? 1 : -1, E = n.d, j = i.d;
    if (!n.s) return new _(n);
    if (!i.s) throw Error(ut + "Division by zero");
    for (c = n.e - i.e, P = j.length, m = E.length, p = new _($), y = p.d = [], s = 0; j[s] == (E[s] || 0); ) ++s;
    if (j[s] > (E[s] || 0) && --c, a == null ? b = a = _.precision : o ? b = a + (je(n) - je(i)) + 1 : b = a, b < 0) return new _(0);
    if (b = b / Oe + 2 | 0, s = 0, P == 1)
      for (l = 0, j = j[0], b++; (s < m || l) && b--; s++)
        x = l * Re + (E[s] || 0), y[s] = x / j | 0, l = x % j | 0;
    else {
      for (l = Re / (j[0] + 1) | 0, l > 1 && (j = e(j, l), E = e(E, l), P = j.length, m = E.length), w = P, v = E.slice(0, P), h = v.length; h < P; ) v[h++] = 0;
      S = j.slice(), S.unshift(0), O = j[0], j[1] >= Re / 2 && ++O;
      do
        l = 0, u = t(j, v, P, h), u < 0 ? (g = v[0], P != h && (g = g * Re + (v[1] || 0)), l = g / O | 0, l > 1 ? (l >= Re && (l = Re - 1), f = e(j, l), d = f.length, h = v.length, u = t(f, v, d, h), u == 1 && (l--, r(f, P < d ? S : j, d))) : (l == 0 && (u = l = 1), f = j.slice()), d = f.length, d < h && f.unshift(0), r(v, f, h), u == -1 && (h = v.length, u = t(j, v, P, h), u < 1 && (l++, r(v, P < h ? S : j, h))), h = v.length) : u === 0 && (l++, v = [0]), y[s++] = l, u && v[0] ? v[h++] = E[w] || 0 : (v = [E[w]], h = 1);
      while ((w++ < m || v[0] !== void 0) && b--);
    }
    return y[0] || y.shift(), p.e = c, me(p, o ? a + je(p) + 1 : a);
  };
})();
function bb(e, t) {
  var r, n, i, a, o, u, c = 0, s = 0, l = e.constructor, f = l.precision;
  if (je(e) > 16) throw Error(qf + je(e));
  if (!e.s) return new l(Ze);
  for (Pe = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), s += 5;
  for (n = Math.log(hr(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(Ze), l.precision = u; ; ) {
    if (i = me(i.times(e), u), r = r.times(++c), o = a.plus(Dt(i, r, u)), xt(o.d).slice(0, u) === xt(a.d).slice(0, u)) {
      for (; s--; ) a = me(a.times(a), u);
      return l.precision = f, t == null ? (Pe = !0, me(a, f)) : a;
    }
    a = o;
  }
}
function je(e) {
  for (var t = e.e * Oe, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Kc(e, t, r) {
  if (t > e.LN10.sd())
    throw Pe = !0, r && (e.precision = r), Error(ut + "LN10 precision limit exceeded");
  return me(new e(e.LN10), t);
}
function Yt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function pi(e, t) {
  var r, n, i, a, o, u, c, s, l, f = 1, d = 10, p = e, y = p.d, v = p.constructor, h = v.precision;
  if (p.s < 1) throw Error(ut + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(Ze)) return new v(0);
  if (t == null ? (Pe = !1, s = h) : s = t, p.eq(10))
    return t == null && (Pe = !0), Kc(v, s);
  if (s += d, v.precision = s, r = xt(y), n = r.charAt(0), a = je(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = xt(p.d), n = r.charAt(0), f++;
    a = je(p), n > 1 ? (p = new v("0." + r), a++) : p = new v(n + "." + r.slice(1));
  } else
    return c = Kc(v, s + 2, h).times(a + ""), p = pi(new v(n + "." + r.slice(1)), s - d).plus(c), v.precision = h, t == null ? (Pe = !0, me(p, h)) : p;
  for (u = o = p = Dt(p.minus(Ze), p.plus(Ze), s), l = me(p.times(p), s), i = 3; ; ) {
    if (o = me(o.times(l), s), c = u.plus(Dt(o, new v(i), s)), xt(c.d).slice(0, s) === xt(u.d).slice(0, s))
      return u = u.times(2), a !== 0 && (u = u.plus(Kc(v, s + 2, h).times(a + ""))), u = Dt(u, new v(f), s), v.precision = h, t == null ? (Pe = !0, me(u, h)) : u;
    u = c, i += 2;
  }
}
function cv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = $n(r / Oe), e.d = [], n = (r + 1) % Oe, r < 0 && (n += Oe), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Oe; n < i; ) e.d.push(+t.slice(n, n += Oe));
      t = t.slice(n), n = Oe - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Pe && (e.e > qa || e.e < -qa)) throw Error(qf + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function me(e, t, r) {
  var n, i, a, o, u, c, s, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += Oe, i = t, s = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / Oe), a = f.length, l >= a) return e;
    for (s = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= Oe, i = n - Oe + o;
  }
  if (r !== void 0 && (a = hr(10, o - i - 1), u = s / a % 10 | 0, c = t < 0 || f[l + 1] !== void 0 || s % a, c = r < 4 ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / hr(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return c ? (a = je(e), f.length = 1, t = t - a - 1, f[0] = hr(10, (Oe - t % Oe) % Oe), e.e = $n(-t / Oe) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = hr(10, Oe - n), f[l] = i > 0 ? (s / hr(10, o - i) % hr(10, i) | 0) * a : 0), c)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == Re && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != Re) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Pe && (e.e > qa || e.e < -qa))
    throw Error(qf + je(e));
  return e;
}
function xb(e, t) {
  var r, n, i, a, o, u, c, s, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Pe ? me(t, p) : t;
  if (c = e.d, f = t.d, n = t.e, s = e.e, c = c.slice(), o = s - n, o) {
    for (l = o < 0, l ? (r = c, o = -o, u = f.length) : (r = f, n = s, u = c.length), i = Math.max(Math.ceil(p / Oe), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (c[i] != f[i]) {
        l = c[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = c, c = f, f = r, t.s = -t.s), u = c.length, i = f.length - u; i > 0; --i) c[u++] = 0;
  for (i = f.length; i > o; ) {
    if (c[--i] < f[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = Re - 1;
      --c[a], c[i] += Re;
    }
    c[i] -= f[i];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, Pe ? me(t, p) : t) : new d(0);
}
function Er(e, t, r) {
  var n, i = je(e), a = xt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Yt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Yt(-i - 1) + a, r && (n = r - o) > 0 && (a += Yt(n))) : i >= o ? (a += Yt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Yt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Yt(n))), e.s < 0 ? "-" + a : a;
}
function sv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Ob(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Ar + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return cv(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Ar + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, M_.test(a)) cv(o, a);
    else throw Error(Ar + a);
  }
  if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Ob, i.config = i.set = I_, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function I_(e) {
  if (!e || typeof e != "object")
    throw Error(ut + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    jn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if ($n(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ar + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ar + r + ": " + n);
  return this;
}
var Ff = Ob($_);
Ze = new Ff(1);
const ve = Ff;
function C_(e) {
  return D_(e) || N_(e) || R_(e) || k_();
}
function k_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R_(e, t) {
  if (e) {
    if (typeof e == "string") return nl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nl(e, t);
  }
}
function N_(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function D_(e) {
  if (Array.isArray(e)) return nl(e);
}
function nl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var L_ = function(t) {
  return t;
}, wb = {}, Pb = function(t) {
  return t === wb;
}, lv = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Pb(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, B_ = function e(t, r) {
  return t === 1 ? r : lv(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== wb;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, lv(function() {
      for (var u = arguments.length, c = new Array(u), s = 0; s < u; s++)
        c[s] = arguments[s];
      var l = i.map(function(f) {
        return Pb(f) ? c.shift() : f;
      });
      return r.apply(void 0, C_(l).concat(c));
    }));
  });
}, Bo = function(t) {
  return B_(t.length, t);
}, il = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, q_ = Bo(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), F_ = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return L_;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, c) {
      return c(u);
    }, a.apply(void 0, arguments));
  };
}, al = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Ab = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, c) {
      return u === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function W_(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ve(e).abs().log(10).toNumber()) + 1, t;
}
function z_(e, t, r) {
  for (var n = new ve(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var U_ = Bo(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), K_ = Bo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), H_ = Bo(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const qo = {
  rangeStep: z_,
  getDigitCount: W_,
  interpolateNumber: U_,
  uninterpolateNumber: K_,
  uninterpolateTruncation: H_
};
function ol(e) {
  return Y_(e) || V_(e) || Sb(e) || G_();
}
function G_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V_(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function Y_(e) {
  if (Array.isArray(e)) return ul(e);
}
function hi(e, t) {
  return J_(e) || Z_(e, t) || Sb(e, t) || X_();
}
function X_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sb(e, t) {
  if (e) {
    if (typeof e == "string") return ul(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ul(e, t);
  }
}
function ul(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Z_(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function J_(e) {
  if (Array.isArray(e)) return e;
}
function _b(e) {
  var t = hi(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function Eb(e, t, r) {
  if (e.lte(0))
    return new ve(0);
  var n = qo.getDigitCount(e.toNumber()), i = new ve(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ve(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = u.mul(i);
  return t ? c : new ve(Math.ceil(c));
}
function Q_(e, t, r) {
  var n = 1, i = new ve(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ve(10).pow(qo.getDigitCount(e) - 1), i = new ve(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ve(Math.floor(e)));
  } else e === 0 ? i = new ve(Math.floor((t - 1) / 2)) : r || (i = new ve(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = F_(q_(function(c) {
    return i.add(new ve(c - o).mul(n)).toNumber();
  }), il);
  return u(0, t);
}
function Tb(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ve(0),
      tickMin: new ve(0),
      tickMax: new ve(0)
    };
  var a = Eb(new ve(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ve(0) : (o = new ve(e).add(t).div(2), o = o.sub(new ve(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), c = Math.ceil(new ve(t).sub(o).div(a).toNumber()), s = u + c + 1;
  return s > r ? Tb(e, t, r, n, i + 1) : (s < r && (c = t > 0 ? c + (r - s) : c, u = t > 0 ? u : u + (r - s)), {
    step: a,
    tickMin: o.sub(new ve(u).mul(a)),
    tickMax: o.add(new ve(c).mul(a))
  });
}
function eE(e) {
  var t = hi(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = _b([r, n]), c = hi(u, 2), s = c[0], l = c[1];
  if (s === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [s].concat(ol(il(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ol(il(0, i - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? al(f) : f;
  }
  if (s === l)
    return Q_(s, i, a);
  var d = Tb(s, l, o, a), p = d.step, y = d.tickMin, v = d.tickMax, h = qo.rangeStep(y, v.add(new ve(0.1).mul(p)), p);
  return r > n ? al(h) : h;
}
function tE(e, t) {
  var r = hi(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = _b([n, i]), u = hi(o, 2), c = u[0], s = u[1];
  if (c === -1 / 0 || s === 1 / 0)
    return [n, i];
  if (c === s)
    return [c];
  var l = Math.max(t, 2), f = Eb(new ve(s).sub(c).div(l - 1), a, 0), d = [].concat(ol(qo.rangeStep(new ve(c), new ve(s).sub(new ve(0.99).mul(f)), f)), [s]);
  return n > i ? al(d) : d;
}
var rE = Ab(eE), nE = Ab(tE), iE = process.env.NODE_ENV === "production", Hc = "Invariant failed";
function Ge(e, t) {
  if (iE)
    throw new Error(Hc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Hc, ": ").concat(r) : Hc;
  throw new Error(n);
}
var aE = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
function oE(e, t) {
  return lE(e) || sE(e, t) || cE(e, t) || uE();
}
function uE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cE(e, t) {
  if (e) {
    if (typeof e == "string") return fv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fv(e, t);
  }
}
function fv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function lE(e) {
  if (Array.isArray(e)) return e;
}
function fE(e, t) {
  if (e == null) return {};
  var r = dE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function dE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function pE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Mb(n.key), n);
  }
}
function vE(e, t, r) {
  return t && hE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yE(e, t, r) {
  return t = Wa(t), mE(e, jb() ? Reflect.construct(t, r || [], Wa(e).constructor) : t.apply(e, r));
}
function mE(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return gE(e);
}
function gE(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jb() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (jb = function() {
    return !!e;
  })();
}
function Wa(e) {
  return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wa(e);
}
function bE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && cl(e, t);
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, cl(e, t);
}
function $b(e, t, r) {
  return t = Mb(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Mb(e) {
  var t = xE(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function xE(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ki = /* @__PURE__ */ (function(e) {
  function t() {
    return pE(this, t), yE(this, t, arguments);
  }
  return bE(t, e), vE(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, c = n.data, s = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = fE(n, aE), p = X(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? Ge(!1, 'ErrorBar requires Axis type property to be "number".') : Ge());
      var y = c.map(function(v) {
        var h = s(v, u), g = h.x, b = h.y, x = h.value, w = h.errorVal;
        if (!w)
          return null;
        var m = [], O, P;
        if (Array.isArray(w)) {
          var S = oE(w, 2);
          O = S[0], P = S[1];
        } else
          O = P = w;
        if (a === "vertical") {
          var _ = l.scale, $ = b + i, E = $ + o, j = $ - o, M = _(x - O), C = _(x + P);
          m.push({
            x1: C,
            y1: E,
            x2: C,
            y2: j
          }), m.push({
            x1: M,
            y1: $,
            x2: C,
            y2: $
          }), m.push({
            x1: M,
            y1: E,
            x2: M,
            y2: j
          });
        } else if (a === "horizontal") {
          var k = f.scale, R = g + i, L = R - o, F = R + o, K = k(x - O), I = k(x + P);
          m.push({
            x1: L,
            y1: I,
            x2: F,
            y2: I
          }), m.push({
            x1: R,
            y1: K,
            x2: R,
            y2: I
          }), m.push({
            x1: L,
            y1: K,
            x2: F,
            y2: K
          });
        }
        return /* @__PURE__ */ A.createElement(oe, Fa({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(D) {
            return "".concat(D.x1, "-").concat(D.x2, "-").concat(D.y1, "-").concat(D.y2);
          }))
        }, p), m.map(function(D) {
          return /* @__PURE__ */ A.createElement("line", Fa({}, D, {
            key: "line-".concat(D.x1, "-").concat(D.x2, "-").concat(D.y1, "-").concat(D.y2)
          }));
        }));
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(A.Component);
$b(Ki, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
$b(Ki, "displayName", "ErrorBar");
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
function dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dv(Object(r), !0).forEach(function(n) {
      OE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OE(e, t, r) {
  return t = wE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wE(e) {
  var t = PE(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function PE(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ib = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Xe(r, wr);
  if (!o)
    return null;
  var u = wr.defaultProps, c = u !== void 0 ? lr(lr({}, u), o.props) : {}, s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(l, f) {
    var d = f.item, p = f.props, y = p.sectors || p.data || [];
    return l.concat(y.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : s = (n || []).map(function(l) {
    var f = l.item, d = f.type.defaultProps, p = d !== void 0 ? lr(lr({}, d), f.props) : {}, y = p.dataKey, v = p.name, h = p.legendType, g = p.hide;
    return {
      inactive: g,
      dataKey: y,
      type: c.iconType || h || "square",
      color: Wf(f),
      value: v || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), lr(lr(lr({}, c), wr.getWithHeight(o, i)), {}, {
    payload: s,
    item: o
  });
};
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function pv(e) {
  return EE(e) || _E(e) || SE(e) || AE();
}
function AE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SE(e, t) {
  if (e) {
    if (typeof e == "string") return sl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sl(e, t);
  }
}
function _E(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EE(e) {
  if (Array.isArray(e)) return sl(e);
}
function sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hv(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gr(e, t, r) {
  return t = TE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TE(e) {
  var t = jE(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function jE(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _e(e, t, r) {
  return ne(e) || ne(t) ? r : Ce(t) ? Je(e, t, r) : Q(t) ? t(e) : r;
}
function Xn(e, t, r, n) {
  var i = j_(e, function(u) {
    return _e(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return W(u) || parseFloat(u);
    });
    return a.length ? [Lo(a), Zt(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !ne(u);
  }) : i;
  return o.map(function(u) {
    return Ce(u) || u instanceof Date ? u : "";
  });
}
var $E = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var c = a.range, s = 0; s < u; s++) {
      var l = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate, f = i[s].coordinate, d = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate, p = void 0;
      if (ze(f - l) !== ze(d - f)) {
        var y = [];
        if (ze(d - f) === ze(c[1] - c[0])) {
          p = d;
          var v = f + c[1] - c[0];
          y[0] = Math.min(v, (v + l) / 2), y[1] = Math.max(v, (v + l) / 2);
        } else {
          p = l;
          var h = d + c[1] - c[0];
          y[0] = Math.min(f, (h + f) / 2), y[1] = Math.max(f, (h + f) / 2);
        }
        var g = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
        if (t > g[0] && t <= g[1] || t >= y[0] && t <= y[1]) {
          o = i[s].index;
          break;
        }
      } else {
        var b = Math.min(l, d), x = Math.max(l, d);
        if (t > (b + f) / 2 && t <= (x + f) / 2) {
          o = i[s].index;
          break;
        }
      }
    }
  else
    for (var w = 0; w < u; w++)
      if (w === 0 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w > 0 && w < u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2 && t <= (n[w].coordinate + n[w + 1].coordinate) / 2 || w === u - 1 && t > (n[w].coordinate + n[w - 1].coordinate) / 2) {
        o = n[w].index;
        break;
      }
  return o;
}, Wf = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, c;
  switch (i) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : u;
      break;
    default:
      c = u;
      break;
  }
  return c;
}, ME = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++)
    for (var l = a[u[c]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], v = y.items, h = y.cateAxisId, g = v.filter(function(P) {
        return Nt(P.type).indexOf("Bar") >= 0;
      });
      if (g && g.length) {
        var b = g[0].type.defaultProps, x = b !== void 0 ? Ee(Ee({}, b), g[0].props) : g[0].props, w = x.barSize, m = x[h];
        o[m] || (o[m] = []);
        var O = ne(w) ? r : w;
        o[m].push({
          item: g[0],
          stackList: g.slice(1),
          barSize: ne(O) ? void 0 : Ue(O, n, 0)
        });
      }
    }
  return o;
}, IE = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var s = Ue(r, i, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = i / c, y = o.reduce(function(w, m) {
      return w + m.barSize || 0;
    }, 0);
    y += (c - 1) * s, y >= i && (y -= (c - 1) * s, s = 0), y >= i && p > 0 && (d = !0, p *= 0.9, y = c * p);
    var v = (i - y) / 2 >> 0, h = {
      offset: v - s,
      size: 0
    };
    l = o.reduce(function(w, m) {
      var O = {
        item: m.item,
        position: {
          offset: h.offset + h.size + s,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : m.barSize
        }
      }, P = [].concat(pv(w), [O]);
      return h = P[P.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        P.push({
          item: S,
          position: h
        });
      }), P;
    }, f);
  } else {
    var g = Ue(n, i, 0, !0);
    i - 2 * g - (c - 1) * s <= 0 && (s = 0);
    var b = (i - 2 * g - (c - 1) * s) / c;
    b > 1 && (b >>= 0);
    var x = u === +u ? Math.min(b, u) : b;
    l = o.reduce(function(w, m, O) {
      var P = [].concat(pv(w), [{
        item: m.item,
        position: {
          offset: g + (b + s) * O + (b - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(S) {
        P.push({
          item: S,
          position: P[P.length - 1].position
        });
      }), P;
    }, f);
  }
  return l;
}, CE = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, c = o - (u.left || 0) - (u.right || 0), s = Ib({
    children: a,
    legendWidth: c
  });
  if (s) {
    var l = i || {}, f = l.width, d = l.height, p = s.align, y = s.verticalAlign, v = s.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && p !== "center" && W(t[p]))
      return Ee(Ee({}, t), {}, Gr({}, p, t[p] + (f || 0)));
    if ((v === "horizontal" || v === "vertical" && p === "center") && y !== "middle" && W(t[y]))
      return Ee(Ee({}, t), {}, Gr({}, y, t[y] + (d || 0)));
  }
  return t;
}, kE = function(t, r, n) {
  return ne(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, Cb = function(t, r, n, i, a) {
  var o = r.props.children, u = Qe(o, Ki).filter(function(s) {
    return kE(i, a, s.props.direction);
  });
  if (u && u.length) {
    var c = u.map(function(s) {
      return s.props.dataKey;
    });
    return t.reduce(function(s, l) {
      var f = _e(l, n);
      if (ne(f)) return s;
      var d = Array.isArray(f) ? [Lo(f), Zt(f)] : [f, f], p = c.reduce(function(y, v) {
        var h = _e(l, v, 0), g = d[0] - Math.abs(Array.isArray(h) ? h[0] : h), b = d[1] + Math.abs(Array.isArray(h) ? h[1] : h);
        return [Math.min(g, y[0]), Math.max(b, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, RE = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return Cb(t, u, n, a, i);
  }).filter(function(u) {
    return !ne(u);
  });
  return o && o.length ? o.reduce(function(u, c) {
    return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, kb = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var s = c.props.dataKey;
    return n === "number" && s && Cb(t, c, s, i) || Xn(t, s, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, s) {
        return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(c, s) {
    for (var l = 0, f = s.length; l < f; l++)
      u[s[l]] || (u[s[l]] = !0, c.push(s[l]));
    return c;
  }, []);
}, Rb = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Nb = function(t, r, n, i) {
  if (i)
    return t.map(function(c) {
      return c.coordinate;
    });
  var a, o, u = t.map(function(c) {
    return c.coordinate === r && (a = !0), c.coordinate === n && (o = !0), c.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Rt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (s = t.axisType === "angleAxis" && u?.length >= 2 ? ze(u[0] - u[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var d = a ? a.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(d) + s,
        value: f,
        offset: s
      };
    });
    return l.filter(function(f) {
      return !_n(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: i(f) + s,
      value: f,
      index: d,
      offset: s
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: i(f) + s,
      value: f,
      offset: s
    };
  }) : i.domain().map(function(f, d) {
    return {
      coordinate: i(f) + s,
      value: a ? a[f] : f,
      index: d,
      offset: s
    };
  });
}, Gc = /* @__PURE__ */ new WeakMap(), ua = function(t, r) {
  if (typeof r != "function")
    return t;
  Gc.has(t) || Gc.set(t, /* @__PURE__ */ new WeakMap());
  var n = Gc.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, Db = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: ci(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Na(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Yn(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: ci(),
      realScaleType: "band"
    } : {
      scale: Na(),
      realScaleType: "linear"
    };
  if (qi(i)) {
    var c = "scale".concat(Ao(i));
    return {
      scale: (ev[c] || Yn)(),
      realScaleType: ev[c] ? c : "point"
    };
  }
  return Q(i) ? {
    scale: i
  } : {
    scale: Yn(),
    realScaleType: "point"
  };
}, vv = 1e-4, Lb = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - vv, o = Math.max(i[0], i[1]) + vv, u = t(r[0]), c = t(r[n - 1]);
    (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, NE = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, DE = function(t, r) {
  if (!r || r.length !== 2 || !W(r[0]) || !W(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!W(t[0]) || t[0] < n) && (a[0] = n), (!W(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, LE = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var c = _n(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + c, o = t[u][n][1]);
      }
}, BE = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = _n(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, qE = {
  sign: LE,
  // @ts-expect-error definitelytyped types are incorrect
  expand: iw,
  // @ts-expect-error definitelytyped types are incorrect
  none: Vr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: aw,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: ow,
  positive: BE
}, FE = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = qE[n], o = nw().keys(i).value(function(u, c) {
    return +_e(u, c, 0);
  }).order(Bs).offset(a);
  return o(t);
}, WE = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, c = {}, s = u.reduce(function(f, d) {
    var p, y = (p = d.type) !== null && p !== void 0 && p.defaultProps ? Ee(Ee({}, d.type.defaultProps), d.props) : d.props, v = y.stackId, h = y.hide;
    if (h)
      return f;
    var g = y[n], b = f[g] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ce(v)) {
      var x = b.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      x.items.push(d), b.hasStack = !0, b.stackGroups[v] = x;
    } else
      b.stackGroups[jr("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [d]
      };
    return Ee(Ee({}, f), {}, Gr({}, g, b));
  }, c), l = {};
  return Object.keys(s).reduce(function(f, d) {
    var p = s[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(v, h) {
        var g = p.stackGroups[h];
        return Ee(Ee({}, v), {}, Gr({}, h, {
          numericAxisId: n,
          cateAxisId: i,
          items: g.items,
          stackedData: FE(t, g.items, a)
        }));
      }, y);
    }
    return Ee(Ee({}, f), {}, Gr({}, d, p));
  }, l);
}, Bb = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var s = t.domain();
    if (!s.length)
      return null;
    var l = rE(s, a, u);
    return t.domain([Lo(l), Zt(l)]), {
      niceTicks: l
    };
  }
  if (a && i === "number") {
    var f = t.domain(), d = nE(f, a, u);
    return {
      niceTicks: d
    };
  }
  return null;
};
function za(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !ne(i[t.dataKey])) {
      var u = ga(r, "value", i[t.dataKey]);
      if (u)
        return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = _e(i, ne(o) ? t.dataKey : o);
  return ne(c) ? null : t.scale(c);
}
var yv = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var c = _e(o, r.dataKey, r.domain[u]);
  return ne(c) ? null : r.scale(c) - a / 2 + i;
}, zE = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, UE = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Ce(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, KE = function(t) {
  return t.reduce(function(r, n) {
    return [Lo(n.concat([r[0]]).filter(W)), Zt(n.concat([r[1]]).filter(W))];
  }, [1 / 0, -1 / 0]);
}, qb = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, c = u.reduce(function(s, l) {
      var f = KE(l.slice(r, n + 1));
      return [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, mv = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, gv = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ll = function(t, r, n) {
  if (Q(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (W(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (mv.test(t[0])) {
    var a = +mv.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Q(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (W(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (gv.test(t[1])) {
    var o = +gv.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Q(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Ua = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = yf(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, u = 1, c = a.length; u < c; u++) {
      var s = a[u], l = a[u - 1];
      o = Math.min((s.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, bv = function(t, r, n) {
  return !t || !t.length || tr(t, Je(n, "type.defaultProps.domain")) ? r : t;
}, Fb = function(t, r) {
  var n = t.type.defaultProps ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, c = n.tooltipType, s = n.chartType, l = n.hide;
  return Ee(Ee({}, X(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: Wf(t),
    value: _e(r, i),
    type: c,
    payload: r,
    chartType: s,
    hide: l
  });
};
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xv(Object(r), !0).forEach(function(n) {
      Wb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wb(e, t, r) {
  return t = HE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HE(e) {
  var t = GE(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function GE(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VE(e, t) {
  return JE(e) || ZE(e, t) || XE(e, t) || YE();
}
function YE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XE(e, t) {
  if (e) {
    if (typeof e == "string") return Ov(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ov(e, t);
  }
}
function Ov(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function JE(e) {
  if (Array.isArray(e)) return e;
}
var Ka = Math.PI / 180, QE = function(t) {
  return t * 180 / Math.PI;
}, se = function(t, r, n, i) {
  return {
    x: t + Math.cos(-Ka * i) * n,
    y: r + Math.sin(-Ka * i) * n
  };
}, zb = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, Ub = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.startAngle, s = t.endAngle, l = Ue(t.cx, o, o / 2), f = Ue(t.cy, u, u / 2), d = zb(o, u, n), p = Ue(t.innerRadius, d, 0), y = Ue(t.outerRadius, d, d * 0.8), v = Object.keys(r);
  return v.reduce(function(h, g) {
    var b = r[g], x = b.domain, w = b.reversed, m;
    if (ne(b.range))
      i === "angleAxis" ? m = [c, s] : i === "radiusAxis" && (m = [p, y]), w && (m = [m[1], m[0]]);
    else {
      m = b.range;
      var O = m, P = VE(O, 2);
      c = P[0], s = P[1];
    }
    var S = Db(b, a), _ = S.realScaleType, $ = S.scale;
    $.domain(x).range(m), Lb($);
    var E = Bb($, $t($t({}, b), {}, {
      realScaleType: _
    })), j = $t($t($t({}, b), E), {}, {
      range: m,
      radius: y,
      realScaleType: _,
      scale: $,
      cx: l,
      cy: f,
      innerRadius: p,
      outerRadius: y,
      startAngle: c,
      endAngle: s
    });
    return $t($t({}, h), {}, Wb({}, g, j));
  }, {});
}, eT = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, tT = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = eT({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var c = (n - a) / u, s = Math.acos(c);
  return i > o && (s = 2 * Math.PI - s), {
    radius: u,
    angle: QE(s),
    angleInRadian: s
  };
}, rT = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, nT = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, wv = function(t, r) {
  var n = t.x, i = t.y, a = tT({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, c = r.innerRadius, s = r.outerRadius;
  if (o < c || o > s)
    return !1;
  if (o === 0)
    return !0;
  var l = rT(r), f = l.startAngle, d = l.endAngle, p = u, y;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    y = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    y = p >= d && p <= f;
  }
  return y ? $t($t({}, r), {}, {
    radius: o,
    angle: nT(p, r)
  }) : null;
}, Kb = function(t) {
  return !/* @__PURE__ */ ht(t) && !Q(t) && typeof t != "boolean" ? t.className : "";
};
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
var iT = ["offset"];
function aT(e) {
  return sT(e) || cT(e) || uT(e) || oT();
}
function oT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uT(e, t) {
  if (e) {
    if (typeof e == "string") return fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fl(e, t);
  }
}
function cT(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sT(e) {
  if (Array.isArray(e)) return fl(e);
}
function fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lT(e, t) {
  if (e == null) return {};
  var r = fT(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Pv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pv(Object(r), !0).forEach(function(n) {
      dT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dT(e, t, r) {
  return t = pT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pT(e) {
  var t = hT(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function hT(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bi.apply(this, arguments);
}
var vT = function(t) {
  var r = t.value, n = t.formatter, i = ne(t.children) ? r : t.children;
  return Q(n) ? n(i) : i;
}, yT = function(t, r) {
  var n = ze(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, mT = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, c = a, s = c.cx, l = c.cy, f = c.innerRadius, d = c.outerRadius, p = c.startAngle, y = c.endAngle, v = c.clockWise, h = (f + d) / 2, g = yT(p, y), b = g >= 0 ? 1 : -1, x, w;
  i === "insideStart" ? (x = p + b * o, w = v) : i === "insideEnd" ? (x = y - b * o, w = !v) : i === "end" && (x = y + b * o, w = v), w = g <= 0 ? w : !w;
  var m = se(s, l, h, x), O = se(s, l, h, x + (w ? 1 : -1) * 359), P = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(h, ",").concat(h, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(O.x, ",").concat(O.y), S = ne(t.id) ? jr("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ A.createElement("text", bi({}, n, {
    dominantBaseline: "central",
    className: ae("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("path", {
    id: S,
    d: P
  })), /* @__PURE__ */ A.createElement("textPath", {
    xlinkHref: "#".concat(S)
  }, r));
}, gT = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, c = a.innerRadius, s = a.outerRadius, l = a.startAngle, f = a.endAngle, d = (l + f) / 2;
  if (i === "outside") {
    var p = se(o, u, s + n, d), y = p.x, v = p.y;
    return {
      x: y,
      y: v,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var h = (c + s) / 2, g = se(o, u, h, d), b = g.x, x = g.y;
  return {
    x: b,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, bT = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, c = o.y, s = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * i, p = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", v = s >= 0 ? 1 : -1, h = v * i, g = v > 0 ? "end" : "start", b = v > 0 ? "start" : "end";
  if (a === "top") {
    var x = {
      x: u + s / 2,
      y: c - f * i,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return $e($e({}, x), n ? {
      height: Math.max(c - n.y, 0),
      width: s
    } : {});
  }
  if (a === "bottom") {
    var w = {
      x: u + s / 2,
      y: c + l + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return $e($e({}, w), n ? {
      height: Math.max(n.y + n.height - (c + l), 0),
      width: s
    } : {});
  }
  if (a === "left") {
    var m = {
      x: u - h,
      y: c + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return $e($e({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (a === "right") {
    var O = {
      x: u + s + h,
      y: c + l / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return $e($e({}, O), n ? {
      width: Math.max(n.x + n.width - O.x, 0),
      height: l
    } : {});
  }
  var P = n ? {
    width: s,
    height: l
  } : {};
  return a === "insideLeft" ? $e({
    x: u + h,
    y: c + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, P) : a === "insideRight" ? $e({
    x: u + s - h,
    y: c + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, P) : a === "insideTop" ? $e({
    x: u + s / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, P) : a === "insideBottom" ? $e({
    x: u + s / 2,
    y: c + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, P) : a === "insideTopLeft" ? $e({
    x: u + h,
    y: c + d,
    textAnchor: b,
    verticalAnchor: y
  }, P) : a === "insideTopRight" ? $e({
    x: u + s - h,
    y: c + d,
    textAnchor: g,
    verticalAnchor: y
  }, P) : a === "insideBottomLeft" ? $e({
    x: u + h,
    y: c + l - d,
    textAnchor: b,
    verticalAnchor: p
  }, P) : a === "insideBottomRight" ? $e({
    x: u + s - h,
    y: c + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, P) : Sn(a) && (W(a.x) || yr(a.x)) && (W(a.y) || yr(a.y)) ? $e({
    x: u + Ue(a.x, s),
    y: c + Ue(a.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, P) : $e({
    x: u + s / 2,
    y: c + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, P);
}, xT = function(t) {
  return "cx" in t && W(t.cx);
};
function Ie(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = lT(e, iT), i = $e({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, c = i.children, s = i.content, l = i.className, f = l === void 0 ? "" : l, d = i.textBreakAll;
  if (!a || ne(u) && ne(c) && !/* @__PURE__ */ ht(s) && !Q(s))
    return null;
  if (/* @__PURE__ */ ht(s))
    return /* @__PURE__ */ Me(s, i);
  var p;
  if (Q(s)) {
    if (p = /* @__PURE__ */ Dm(s, i), /* @__PURE__ */ ht(p))
      return p;
  } else
    p = vT(i);
  var y = xT(a), v = X(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return mT(i, p, v);
  var h = y ? gT(i) : bT(i);
  return /* @__PURE__ */ A.createElement(rr, bi({
    className: ae("recharts-label", f)
  }, v, h, {
    breakAll: d
  }), p);
}
Ie.displayName = "Label";
var Hb = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, c = t.radius, s = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, p = t.top, y = t.left, v = t.width, h = t.height, g = t.clockWise, b = t.labelViewBox;
  if (b)
    return b;
  if (W(v) && W(h)) {
    if (W(f) && W(d))
      return {
        x: f,
        y: d,
        width: v,
        height: h
      };
    if (W(p) && W(y))
      return {
        x: p,
        y,
        width: v,
        height: h
      };
  }
  return W(f) && W(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : W(r) && W(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: s || 0,
    outerRadius: l || c || u || 0,
    clockWise: g
  } : t.viewBox ? t.viewBox : {};
}, OT = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ A.createElement(Ie, {
    key: "label-implicit",
    viewBox: r
  }) : Ce(t) ? /* @__PURE__ */ A.createElement(Ie, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ ht(t) ? t.type === Ie ? /* @__PURE__ */ Me(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ A.createElement(Ie, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Q(t) ? /* @__PURE__ */ A.createElement(Ie, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Sn(t) ? /* @__PURE__ */ A.createElement(Ie, bi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, wT = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = Hb(t), o = Qe(i, Ie).map(function(c, s) {
    return /* @__PURE__ */ Me(c, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(s)
    });
  });
  if (!n)
    return o;
  var u = OT(t.label, r || a);
  return [u].concat(aT(o));
};
Ie.parseViewBox = Hb;
Ie.renderCallByParent = wT;
var Vc, Av;
function PT() {
  if (Av) return Vc;
  Av = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Vc = e, Vc;
}
var AT = PT();
const Gb = /* @__PURE__ */ ye(AT);
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
var ST = ["valueAccessor"], _T = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function ET(e) {
  return MT(e) || $T(e) || jT(e) || TT();
}
function TT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jT(e, t) {
  if (e) {
    if (typeof e == "string") return dl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dl(e, t);
  }
}
function $T(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function MT(e) {
  if (Array.isArray(e)) return dl(e);
}
function dl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function Sv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sv(Object(r), !0).forEach(function(n) {
      IT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IT(e, t, r) {
  return t = CT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CT(e) {
  var t = kT(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function kT(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ev(e, t) {
  if (e == null) return {};
  var r = RT(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RT(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var NT = function(t) {
  return Array.isArray(t.value) ? Gb(t.value) : t.value;
};
function et(e) {
  var t = e.valueAccessor, r = t === void 0 ? NT : t, n = Ev(e, ST), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, c = n.textBreakAll, s = Ev(n, _T);
  return !i || !i.length ? null : /* @__PURE__ */ A.createElement(oe, {
    className: "recharts-label-list"
  }, i.map(function(l, f) {
    var d = ne(a) ? r(l, f) : _e(l && l.payload, a), p = ne(u) ? {} : {
      id: "".concat(u, "-").concat(f)
    };
    return /* @__PURE__ */ A.createElement(Ie, Ha({}, X(l, !0), s, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: Ie.parseViewBox(ne(o) ? l : _v(_v({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
et.displayName = "LabelList";
function DT(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ A.createElement(et, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ A.isValidElement(e) || Q(e) ? /* @__PURE__ */ A.createElement(et, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Sn(e) ? /* @__PURE__ */ A.createElement(et, Ha({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function LT(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = Qe(n, et).map(function(o, u) {
    return /* @__PURE__ */ Me(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = DT(e.label, t);
  return [a].concat(ET(i));
}
et.renderCallByParent = LT;
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function pl() {
  return pl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pl.apply(this, arguments);
}
function Tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tv(Object(r), !0).forEach(function(n) {
      BT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BT(e, t, r) {
  return t = qT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qT(e) {
  var t = FT(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function FT(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var WT = function(t, r) {
  var n = ze(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, ca = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, c = t.cornerRadius, s = t.cornerIsExternal, l = c * (u ? 1 : -1) + i, f = Math.asin(c / l) / Ka, d = s ? a : a + o * f, p = se(r, n, l, d), y = se(r, n, i, d), v = s ? a - o * f : a, h = se(r, n, l * Math.cos(f * Ka), v);
  return {
    center: p,
    circleTangency: y,
    lineTangency: h,
    theta: f
  };
}, Vb = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, c = WT(o, u), s = o + c, l = se(r, n, a, o), f = se(r, n, a, s), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > s), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (i > 0) {
    var p = se(r, n, i, o), y = se(r, n, i, s);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= s), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, zT = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, c = t.cornerIsExternal, s = t.startAngle, l = t.endAngle, f = ze(l - s), d = ca({
    cx: r,
    cy: n,
    radius: a,
    angle: s,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: c
  }), p = d.circleTangency, y = d.lineTangency, v = d.theta, h = ca({
    cx: r,
    cy: n,
    radius: a,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: c
  }), g = h.circleTangency, b = h.lineTangency, x = h.theta, w = c ? Math.abs(s - l) : Math.abs(s - l) - v - x;
  if (w < 0)
    return u ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Vb({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: s,
      endAngle: l
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(w > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(b.x, ",").concat(b.y, `
  `);
  if (i > 0) {
    var O = ca({
      cx: r,
      cy: n,
      radius: i,
      angle: s,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), P = O.circleTangency, S = O.lineTangency, _ = O.theta, $ = ca({
      cx: r,
      cy: n,
      radius: i,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), E = $.circleTangency, j = $.lineTangency, M = $.theta, C = c ? Math.abs(s - l) : Math.abs(s - l) - _ - M;
    if (C < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(j.x, ",").concat(j.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(C > 180), ",").concat(+(f > 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(S.x, ",").concat(S.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, UT = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Yb = function(t) {
  var r = jv(jv({}, UT), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, c = r.forceCornerRadius, s = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < a || l === f)
    return null;
  var p = ae("recharts-sector", d), y = o - a, v = Ue(u, y, 0, !0), h;
  return v > 0 && Math.abs(l - f) < 360 ? h = zT({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, y / 2),
    forceCornerRadius: c,
    cornerIsExternal: s,
    startAngle: l,
    endAngle: f
  }) : h = Vb({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ A.createElement("path", pl({}, X(r, !0), {
    className: p,
    d: h,
    role: "img"
  }));
};
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function hl() {
  return hl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hl.apply(this, arguments);
}
function $v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $v(Object(r), !0).forEach(function(n) {
      KT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $v(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KT(e, t, r) {
  return t = HT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HT(e) {
  var t = GT(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function GT(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Iv = {
  curveBasisClosed: HO,
  curveBasisOpen: GO,
  curveBasis: KO,
  curveBumpX: MO,
  curveBumpY: IO,
  curveLinearClosed: VO,
  curveLinear: _o,
  curveMonotoneX: YO,
  curveMonotoneY: XO,
  curveNatural: ZO,
  curveStep: JO,
  curveStepAfter: ew,
  curveStepBefore: QO
}, sa = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Wn = function(t) {
  return t.x;
}, zn = function(t) {
  return t.y;
}, VT = function(t, r) {
  if (Q(t))
    return t;
  var n = "curve".concat(Ao(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Iv["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Iv[n] || _o;
}, YT = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, c = t.connectNulls, s = c === void 0 ? !1 : c, l = VT(n, u), f = s ? a.filter(function(v) {
    return sa(v);
  }) : a, d;
  if (Array.isArray(o)) {
    var p = s ? o.filter(function(v) {
      return sa(v);
    }) : o, y = f.map(function(v, h) {
      return Mv(Mv({}, v), {}, {
        base: p[h]
      });
    });
    return u === "vertical" ? d = ea().y(zn).x1(Wn).x0(function(v) {
      return v.base.x;
    }) : d = ea().x(Wn).y1(zn).y0(function(v) {
      return v.base.y;
    }), d.defined(sa).curve(l), d(y);
  }
  return u === "vertical" && W(o) ? d = ea().y(zn).x1(Wn).x0(o) : W(o) ? d = ea().x(Wn).y1(zn).y0(o) : d = rg().x(Wn).y(zn), d.defined(sa).curve(l), d(f);
}, Sr = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? YT(t) : i;
  return /* @__PURE__ */ A.createElement("path", hl({}, X(t, !1), ba(t), {
    className: ae("recharts-curve", r),
    d: o,
    ref: a
  }));
}, la = { exports: {} }, fa = { exports: {} }, de = {};
var Cv;
function XT() {
  if (Cv) return de;
  Cv = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, u = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, s = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, g = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function x(m) {
    if (typeof m == "object" && m !== null) {
      var O = m.$$typeof;
      switch (O) {
        case t:
          switch (m = m.type, m) {
            case c:
            case s:
            case n:
            case a:
            case i:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case u:
                case l:
                case y:
                case p:
                case o:
                  return m;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function w(m) {
    return x(m) === s;
  }
  return de.AsyncMode = c, de.ConcurrentMode = s, de.ContextConsumer = u, de.ContextProvider = o, de.Element = t, de.ForwardRef = l, de.Fragment = n, de.Lazy = y, de.Memo = p, de.Portal = r, de.Profiler = a, de.StrictMode = i, de.Suspense = f, de.isAsyncMode = function(m) {
    return w(m) || x(m) === c;
  }, de.isConcurrentMode = w, de.isContextConsumer = function(m) {
    return x(m) === u;
  }, de.isContextProvider = function(m) {
    return x(m) === o;
  }, de.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, de.isForwardRef = function(m) {
    return x(m) === l;
  }, de.isFragment = function(m) {
    return x(m) === n;
  }, de.isLazy = function(m) {
    return x(m) === y;
  }, de.isMemo = function(m) {
    return x(m) === p;
  }, de.isPortal = function(m) {
    return x(m) === r;
  }, de.isProfiler = function(m) {
    return x(m) === a;
  }, de.isStrictMode = function(m) {
    return x(m) === i;
  }, de.isSuspense = function(m) {
    return x(m) === f;
  }, de.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === s || m === a || m === i || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === p || m.$$typeof === o || m.$$typeof === u || m.$$typeof === l || m.$$typeof === h || m.$$typeof === g || m.$$typeof === b || m.$$typeof === v);
  }, de.typeOf = x, de;
}
var pe = {};
var kv;
function ZT() {
  return kv || (kv = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, u = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, s = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, v = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, h = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, g = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, b = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === n || T === s || T === a || T === i || T === f || T === d || typeof T == "object" && T !== null && (T.$$typeof === y || T.$$typeof === p || T.$$typeof === o || T.$$typeof === u || T.$$typeof === l || T.$$typeof === h || T.$$typeof === g || T.$$typeof === b || T.$$typeof === v);
    }
    function w(T) {
      if (typeof T == "object" && T !== null) {
        var ue = T.$$typeof;
        switch (ue) {
          case t:
            var z = T.type;
            switch (z) {
              case c:
              case s:
              case n:
              case a:
              case i:
              case f:
                return z;
              default:
                var ge = z && z.$$typeof;
                switch (ge) {
                  case u:
                  case l:
                  case y:
                  case p:
                  case o:
                    return ge;
                  default:
                    return ue;
                }
            }
          case r:
            return ue;
        }
      }
    }
    var m = c, O = s, P = u, S = o, _ = t, $ = l, E = n, j = y, M = p, C = r, k = a, R = i, L = f, F = !1;
    function K(T) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(T) || w(T) === c;
    }
    function I(T) {
      return w(T) === s;
    }
    function D(T) {
      return w(T) === u;
    }
    function B(T) {
      return w(T) === o;
    }
    function H(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function V(T) {
      return w(T) === l;
    }
    function J(T) {
      return w(T) === n;
    }
    function ee(T) {
      return w(T) === y;
    }
    function ie(T) {
      return w(T) === p;
    }
    function re(T) {
      return w(T) === r;
    }
    function q(T) {
      return w(T) === a;
    }
    function G(T) {
      return w(T) === i;
    }
    function Z(T) {
      return w(T) === f;
    }
    pe.AsyncMode = m, pe.ConcurrentMode = O, pe.ContextConsumer = P, pe.ContextProvider = S, pe.Element = _, pe.ForwardRef = $, pe.Fragment = E, pe.Lazy = j, pe.Memo = M, pe.Portal = C, pe.Profiler = k, pe.StrictMode = R, pe.Suspense = L, pe.isAsyncMode = K, pe.isConcurrentMode = I, pe.isContextConsumer = D, pe.isContextProvider = B, pe.isElement = H, pe.isForwardRef = V, pe.isFragment = J, pe.isLazy = ee, pe.isMemo = ie, pe.isPortal = re, pe.isProfiler = q, pe.isStrictMode = G, pe.isSuspense = Z, pe.isValidElementType = x, pe.typeOf = w;
  })()), pe;
}
var Rv;
function Xb() {
  return Rv || (Rv = 1, process.env.NODE_ENV === "production" ? fa.exports = XT() : fa.exports = ZT()), fa.exports;
}
var Yc, Nv;
function JT() {
  if (Nv) return Yc;
  Nv = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        s[l] = l;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Yc = i() ? Object.assign : function(a, o) {
    for (var u, c = n(a), s, l = 1; l < arguments.length; l++) {
      u = Object(arguments[l]);
      for (var f in u)
        t.call(u, f) && (c[f] = u[f]);
      if (e) {
        s = e(u);
        for (var d = 0; d < s.length; d++)
          r.call(u, s[d]) && (c[s[d]] = u[s[d]]);
      }
    }
    return c;
  }, Yc;
}
var Xc, Dv;
function zf() {
  if (Dv) return Xc;
  Dv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xc = e, Xc;
}
var Zc, Lv;
function Zb() {
  return Lv || (Lv = 1, Zc = Function.call.bind(Object.prototype.hasOwnProperty)), Zc;
}
var Jc, Bv;
function QT() {
  if (Bv) return Jc;
  Bv = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ zf(), r = {}, n = /* @__PURE__ */ Zb();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, u, c, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in a)
        if (n(a, l)) {
          var f;
          try {
            if (typeof a[l] != "function") {
              var d = Error(
                (c || "React class") + ": " + u + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = a[l](o, l, c, u, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + u + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = s ? s() : "";
            e(
              "Failed " + u + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jc = i, Jc;
}
var Qc, qv;
function ej() {
  if (qv) return Qc;
  qv = 1;
  var e = Xb(), t = JT(), r = /* @__PURE__ */ zf(), n = /* @__PURE__ */ Zb(), i = /* @__PURE__ */ QT(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var c = "Warning: " + u;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Qc = function(u, c) {
    var s = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(I) {
      var D = I && (s && I[s] || I[l]);
      if (typeof D == "function")
        return D;
    }
    var d = "<<anonymous>>", p = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: b(),
      arrayOf: x,
      element: w(),
      elementType: m(),
      instanceOf: O,
      node: $(),
      objectOf: S,
      oneOf: P,
      oneOfType: _,
      shape: j,
      exact: M
    };
    function y(I, D) {
      return I === D ? I !== 0 || 1 / I === 1 / D : I !== I && D !== D;
    }
    function v(I, D) {
      this.message = I, this.data = D && typeof D == "object" ? D : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function h(I) {
      if (process.env.NODE_ENV !== "production")
        var D = {}, B = 0;
      function H(J, ee, ie, re, q, G, Z) {
        if (re = re || d, G = G || ie, Z !== r) {
          if (c) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ue = re + ":" + ie;
            !D[ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), D[ue] = !0, B++);
          }
        }
        return ee[ie] == null ? J ? ee[ie] === null ? new v("The " + q + " `" + G + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new v("The " + q + " `" + G + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : I(ee, ie, re, q, G);
      }
      var V = H.bind(null, !1);
      return V.isRequired = H.bind(null, !0), V;
    }
    function g(I) {
      function D(B, H, V, J, ee, ie) {
        var re = B[H], q = R(re);
        if (q !== I) {
          var G = L(re);
          return new v(
            "Invalid " + J + " `" + ee + "` of type " + ("`" + G + "` supplied to `" + V + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return h(D);
    }
    function b() {
      return h(o);
    }
    function x(I) {
      function D(B, H, V, J, ee) {
        if (typeof I != "function")
          return new v("Property `" + ee + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var ie = B[H];
        if (!Array.isArray(ie)) {
          var re = R(ie);
          return new v("Invalid " + J + " `" + ee + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an array."));
        }
        for (var q = 0; q < ie.length; q++) {
          var G = I(ie, q, V, J, ee + "[" + q + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return h(D);
    }
    function w() {
      function I(D, B, H, V, J) {
        var ee = D[B];
        if (!u(ee)) {
          var ie = R(ee);
          return new v("Invalid " + V + " `" + J + "` of type " + ("`" + ie + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(I);
    }
    function m() {
      function I(D, B, H, V, J) {
        var ee = D[B];
        if (!e.isValidElementType(ee)) {
          var ie = R(ee);
          return new v("Invalid " + V + " `" + J + "` of type " + ("`" + ie + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(I);
    }
    function O(I) {
      function D(B, H, V, J, ee) {
        if (!(B[H] instanceof I)) {
          var ie = I.name || d, re = K(B[H]);
          return new v("Invalid " + J + " `" + ee + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected ") + ("instance of `" + ie + "`."));
        }
        return null;
      }
      return h(D);
    }
    function P(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function D(B, H, V, J, ee) {
        for (var ie = B[H], re = 0; re < I.length; re++)
          if (y(ie, I[re]))
            return null;
        var q = JSON.stringify(I, function(Z, T) {
          var ue = L(T);
          return ue === "symbol" ? String(T) : T;
        });
        return new v("Invalid " + J + " `" + ee + "` of value `" + String(ie) + "` " + ("supplied to `" + V + "`, expected one of " + q + "."));
      }
      return h(D);
    }
    function S(I) {
      function D(B, H, V, J, ee) {
        if (typeof I != "function")
          return new v("Property `" + ee + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var ie = B[H], re = R(ie);
        if (re !== "object")
          return new v("Invalid " + J + " `" + ee + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an object."));
        for (var q in ie)
          if (n(ie, q)) {
            var G = I(ie, q, V, J, ee + "." + q, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return h(D);
    }
    function _(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var D = 0; D < I.length; D++) {
        var B = I[D];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(B) + " at index " + D + "."
          ), o;
      }
      function H(V, J, ee, ie, re) {
        for (var q = [], G = 0; G < I.length; G++) {
          var Z = I[G], T = Z(V, J, ee, ie, re, r);
          if (T == null)
            return null;
          T.data && n(T.data, "expectedType") && q.push(T.data.expectedType);
        }
        var ue = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new v("Invalid " + ie + " `" + re + "` supplied to " + ("`" + ee + "`" + ue + "."));
      }
      return h(H);
    }
    function $() {
      function I(D, B, H, V, J) {
        return C(D[B]) ? null : new v("Invalid " + V + " `" + J + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return h(I);
    }
    function E(I, D, B, H, V) {
      return new v(
        (I || "React class") + ": " + D + " type `" + B + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function j(I) {
      function D(B, H, V, J, ee) {
        var ie = B[H], re = R(ie);
        if (re !== "object")
          return new v("Invalid " + J + " `" + ee + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var q in I) {
          var G = I[q];
          if (typeof G != "function")
            return E(V, J, ee, q, L(G));
          var Z = G(ie, q, V, J, ee + "." + q, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return h(D);
    }
    function M(I) {
      function D(B, H, V, J, ee) {
        var ie = B[H], re = R(ie);
        if (re !== "object")
          return new v("Invalid " + J + " `" + ee + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
        var q = t({}, B[H], I);
        for (var G in q) {
          var Z = I[G];
          if (n(I, G) && typeof Z != "function")
            return E(V, J, ee, G, L(Z));
          if (!Z)
            return new v(
              "Invalid " + J + " `" + ee + "` key `" + G + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(B[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var T = Z(ie, G, V, J, ee + "." + G, r);
          if (T)
            return T;
        }
        return null;
      }
      return h(D);
    }
    function C(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(C);
          if (I === null || u(I))
            return !0;
          var D = f(I);
          if (D) {
            var B = D.call(I), H;
            if (D !== I.entries) {
              for (; !(H = B.next()).done; )
                if (!C(H.value))
                  return !1;
            } else
              for (; !(H = B.next()).done; ) {
                var V = H.value;
                if (V && !C(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function k(I, D) {
      return I === "symbol" ? !0 : D ? D["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && D instanceof Symbol : !1;
    }
    function R(I) {
      var D = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : k(D, I) ? "symbol" : D;
    }
    function L(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var D = R(I);
      if (D === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return D;
    }
    function F(I) {
      var D = L(I);
      switch (D) {
        case "array":
        case "object":
          return "an " + D;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + D;
        default:
          return D;
      }
    }
    function K(I) {
      return !I.constructor || !I.constructor.name ? d : I.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, Qc;
}
var es, Fv;
function tj() {
  if (Fv) return es;
  Fv = 1;
  var e = /* @__PURE__ */ zf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, es = function() {
    function n(o, u, c, s, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, es;
}
var Wv;
function rj() {
  if (Wv) return la.exports;
  if (Wv = 1, process.env.NODE_ENV !== "production") {
    var e = Xb(), t = !0;
    la.exports = /* @__PURE__ */ ej()(e.isElement, t);
  } else
    la.exports = /* @__PURE__ */ tj()();
  return la.exports;
}
var nj = /* @__PURE__ */ rj();
const he = /* @__PURE__ */ ye(nj);
var ij = Object.getOwnPropertyNames, aj = Object.getOwnPropertySymbols, oj = Object.prototype.hasOwnProperty;
function zv(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function da(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var c = e(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Uv(e) {
  return ij(e).concat(aj(e));
}
var uj = Object.hasOwn || (function(e, t) {
  return oj.call(e, t);
});
function Ir(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var cj = "__v", sj = "__o", lj = "_owner", Kv = Object.getOwnPropertyDescriptor, Hv = Object.keys;
function fj(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function dj(e, t) {
  return Ir(e.getTime(), t.getTime());
}
function pj(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function hj(e, t) {
  return e === t;
}
function Gv(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.entries(), o, u, c = 0; (o = a.next()) && !o.done; ) {
    for (var s = t.entries(), l = !1, f = 0; (u = s.next()) && !u.done; ) {
      if (i[f]) {
        f++;
        continue;
      }
      var d = o.value, p = u.value;
      if (r.equals(d[0], p[0], c, f, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
        l = i[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    c++;
  }
  return !0;
}
var vj = Ir;
function yj(e, t, r) {
  var n = Hv(e), i = n.length;
  if (Hv(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!Jb(e, t, r, n[i]))
      return !1;
  return !0;
}
function Un(e, t, r) {
  var n = Uv(e), i = n.length;
  if (Uv(t).length !== i)
    return !1;
  for (var a, o, u; i-- > 0; )
    if (a = n[i], !Jb(e, t, r, a) || (o = Kv(e, a), u = Kv(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function mj(e, t) {
  return Ir(e.valueOf(), t.valueOf());
}
function gj(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Vv(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var i = new Array(n), a = e.values(), o, u; (o = a.next()) && !o.done; ) {
    for (var c = t.values(), s = !1, l = 0; (u = c.next()) && !u.done; ) {
      if (!i[l] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        s = i[l] = !0;
        break;
      }
      l++;
    }
    if (!s)
      return !1;
  }
  return !0;
}
function bj(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function xj(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Jb(e, t, r, n) {
  return (n === lj || n === sj || n === cj) && (e.$$typeof || t.$$typeof) ? !0 : uj(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var Oj = "[object Arguments]", wj = "[object Boolean]", Pj = "[object Date]", Aj = "[object Error]", Sj = "[object Map]", _j = "[object Number]", Ej = "[object Object]", Tj = "[object RegExp]", jj = "[object Set]", $j = "[object String]", Mj = "[object URL]", Ij = Array.isArray, Yv = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Xv = Object.assign, Cj = Object.prototype.toString.call.bind(Object.prototype.toString);
function kj(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, i = e.areFunctionsEqual, a = e.areMapsEqual, o = e.areNumbersEqual, u = e.areObjectsEqual, c = e.arePrimitiveWrappersEqual, s = e.areRegExpsEqual, l = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(y, v, h) {
    if (y === v)
      return !0;
    if (y == null || v == null)
      return !1;
    var g = typeof y;
    if (g !== typeof v)
      return !1;
    if (g !== "object")
      return g === "number" ? o(y, v, h) : g === "function" ? i(y, v, h) : !1;
    var b = y.constructor;
    if (b !== v.constructor)
      return !1;
    if (b === Object)
      return u(y, v, h);
    if (Ij(y))
      return t(y, v, h);
    if (Yv != null && Yv(y))
      return f(y, v, h);
    if (b === Date)
      return r(y, v, h);
    if (b === RegExp)
      return s(y, v, h);
    if (b === Map)
      return a(y, v, h);
    if (b === Set)
      return l(y, v, h);
    var x = Cj(y);
    return x === Pj ? r(y, v, h) : x === Tj ? s(y, v, h) : x === Sj ? a(y, v, h) : x === jj ? l(y, v, h) : x === Ej ? typeof y.then != "function" && typeof v.then != "function" && u(y, v, h) : x === Mj ? d(y, v, h) : x === Aj ? n(y, v, h) : x === Oj ? u(y, v, h) : x === wj || x === _j || x === $j ? c(y, v, h) : !1;
  };
}
function Rj(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? Un : fj,
    areDatesEqual: dj,
    areErrorsEqual: pj,
    areFunctionsEqual: hj,
    areMapsEqual: n ? zv(Gv, Un) : Gv,
    areNumbersEqual: vj,
    areObjectsEqual: n ? Un : yj,
    arePrimitiveWrappersEqual: mj,
    areRegExpsEqual: gj,
    areSetsEqual: n ? zv(Vv, Un) : Vv,
    areTypedArraysEqual: n ? Un : bj,
    areUrlsEqual: xj
  };
  if (r && (i = Xv({}, i, r(i))), t) {
    var a = da(i.areArraysEqual), o = da(i.areMapsEqual), u = da(i.areObjectsEqual), c = da(i.areSetsEqual);
    i = Xv({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: c
    });
  }
  return i;
}
function Nj(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function Dj(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(c, s) {
      var l = n(), f = l.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, p = l.meta;
      return r(c, s, {
        cache: d,
        equals: i,
        meta: p,
        strict: a
      });
    };
  if (t)
    return function(c, s) {
      return r(c, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(c, s) {
    return r(c, s, o);
  };
}
var Lj = or();
or({ strict: !0 });
or({ circular: !0 });
or({
  circular: !0,
  strict: !0
});
or({
  createInternalComparator: function() {
    return Ir;
  }
});
or({
  strict: !0,
  createInternalComparator: function() {
    return Ir;
  }
});
or({
  circular: !0,
  createInternalComparator: function() {
    return Ir;
  }
});
or({
  circular: !0,
  createInternalComparator: function() {
    return Ir;
  },
  strict: !0
});
function or(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, u = Rj(e), c = kj(u), s = n ? n(c) : Nj(c);
  return Dj({ circular: r, comparator: c, createState: i, equals: s, strict: o });
}
function Bj(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Zv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : Bj(i);
  };
  requestAnimationFrame(n);
}
function vl(e) {
  "@babel/helpers - typeof";
  return vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vl(e);
}
function qj(e) {
  return Uj(e) || zj(e) || Wj(e) || Fj();
}
function Fj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wj(e, t) {
  if (e) {
    if (typeof e == "string") return Jv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jv(e, t);
  }
}
function Jv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zj(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Uj(e) {
  if (Array.isArray(e)) return e;
}
function Kj() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = qj(o), c = u[0], s = u.slice(1);
        if (typeof c == "number") {
          Zv(i.bind(null, s), c);
          return;
        }
        i(c), Zv(i.bind(null, s));
        return;
      }
      vl(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Pi(e) {
  "@babel/helpers - typeof";
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(e);
}
function Qv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qv(Object(r), !0).forEach(function(n) {
      Qb(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qb(e, t, r) {
  return t = Hj(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hj(e) {
  var t = Gj(e, "string");
  return Pi(t) === "symbol" ? t : String(t);
}
function Gj(e, t) {
  if (Pi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vj = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Yj = function(t) {
  return t;
}, Xj = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Zn = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return ey(ey({}, n), {}, Qb({}, i, t(i, r[i])));
  }, {});
}, ty = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Xj(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, Zj = process.env.NODE_ENV !== "production", Ga = function(t, r, n, i, a, o, u, c) {
  if (Zj && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = [n, i, a, o, u, c], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return s[l++];
      }));
    }
};
function Jj(e, t) {
  return t$(e) || e$(e, t) || e0(e, t) || Qj();
}
function Qj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function t$(e) {
  if (Array.isArray(e)) return e;
}
function r$(e) {
  return a$(e) || i$(e) || e0(e) || n$();
}
function n$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e0(e, t) {
  if (e) {
    if (typeof e == "string") return yl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yl(e, t);
  }
}
function i$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function a$(e) {
  if (Array.isArray(e)) return yl(e);
}
function yl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Va = 1e-4, t0 = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, r0 = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, ry = function(t, r) {
  return function(n) {
    var i = t0(t, r);
    return r0(i, n);
  };
}, o$ = function(t, r) {
  return function(n) {
    var i = t0(t, r), a = [].concat(r$(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return r0(a, n);
  };
}, ny = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var s = c[1].split(")")[0].split(",").map(function(h) {
            return parseFloat(h);
          }), l = Jj(s, 4);
          i = l[0], a = l[1], o = l[2], u = l[3];
        } else
          Ga(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Ga([i, o, a, u].every(function(h) {
    return typeof h == "number" && h >= 0 && h <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = ry(i, o), d = ry(a, u), p = o$(i, o), y = function(g) {
    return g > 1 ? 1 : g < 0 ? 0 : g;
  }, v = function(g) {
    for (var b = g > 1 ? 1 : g, x = b, w = 0; w < 8; ++w) {
      var m = f(x) - b, O = p(x);
      if (Math.abs(m - b) < Va || O < Va)
        return d(x);
      x = y(x - m / O);
    }
    return d(x);
  };
  return v.isStepper = !1, v;
}, u$ = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, c = function(l, f, d) {
    var p = -(l - f) * n, y = d * a, v = d + (p - y) * u / 1e3, h = d * u / 1e3 + l;
    return Math.abs(h - f) < Va && Math.abs(v) < Va ? [f, 0] : [h, v];
  };
  return c.isStepper = !0, c.dt = u, c;
}, c$ = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return ny(i);
      case "spring":
        return u$();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return ny(i);
        Ga(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (Ga(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function iy(e) {
  return f$(e) || l$(e) || n0(e) || s$();
}
function s$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function f$(e) {
  if (Array.isArray(e)) return gl(e);
}
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      ml(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ml(e, t, r) {
  return t = d$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d$(e) {
  var t = p$(e, "string");
  return Ai(t) === "symbol" ? t : String(t);
}
function p$(e, t) {
  if (Ai(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h$(e, t) {
  return m$(e) || y$(e, t) || n0(e, t) || v$();
}
function v$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n0(e, t) {
  if (e) {
    if (typeof e == "string") return gl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gl(e, t);
  }
}
function gl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function y$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function m$(e) {
  if (Array.isArray(e)) return e;
}
var Ya = function(t, r, n) {
  return t + (r - t) * n;
}, bl = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, g$ = function e(t, r, n) {
  var i = Zn(function(a, o) {
    if (bl(o)) {
      var u = t(o.from, o.to, o.velocity), c = h$(u, 2), s = c[0], l = c[1];
      return Le(Le({}, o), {}, {
        from: s,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Zn(function(a, o) {
    return bl(o) ? Le(Le({}, o), {}, {
      velocity: Ya(o.velocity, i[a].velocity, n),
      from: Ya(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const b$ = (function(e, t, r, n, i) {
  var a = Vj(e, t), o = a.reduce(function(h, g) {
    return Le(Le({}, h), {}, ml({}, g, [e[g], t[g]]));
  }, {}), u = a.reduce(function(h, g) {
    return Le(Le({}, h), {}, ml({}, g, {
      from: e[g],
      velocity: 0,
      to: t[g]
    }));
  }, {}), c = -1, s, l, f = function() {
    return null;
  }, d = function() {
    return Zn(function(g, b) {
      return b.from;
    }, u);
  }, p = function() {
    return !Object.values(u).filter(bl).length;
  }, y = function(g) {
    s || (s = g);
    var b = g - s, x = b / r.dt;
    u = g$(r, u, x), i(Le(Le(Le({}, e), t), d())), s = g, p() || (c = requestAnimationFrame(f));
  }, v = function(g) {
    l || (l = g);
    var b = (g - l) / n, x = Zn(function(m, O) {
      return Ya.apply(void 0, iy(O).concat([r(b)]));
    }, o);
    if (i(Le(Le(Le({}, e), t), x)), b < 1)
      c = requestAnimationFrame(f);
    else {
      var w = Zn(function(m, O) {
        return Ya.apply(void 0, iy(O).concat([r(1)]));
      }, o);
      i(Le(Le(Le({}, e), t), w));
    }
  };
  return f = r.isStepper ? y : v, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(c);
    };
  };
});
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var x$ = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function O$(e, t) {
  if (e == null) return {};
  var r = w$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function w$(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ts(e) {
  return _$(e) || S$(e) || A$(e) || P$();
}
function P$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A$(e, t) {
  if (e) {
    if (typeof e == "string") return xl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return xl(e, t);
  }
}
function S$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _$(e) {
  if (Array.isArray(e)) return xl(e);
}
function xl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oy(Object(r), !0).forEach(function(n) {
      Hn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Hn(e, t, r) {
  return t = i0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function T$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, i0(n.key), n);
  }
}
function j$(e, t, r) {
  return t && T$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function i0(e) {
  var t = $$(e, "string");
  return nn(t) === "symbol" ? t : String(t);
}
function $$(e, t) {
  if (nn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function M$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ol(e, t);
}
function Ol(e, t) {
  return Ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ol(e, t);
}
function I$(e) {
  var t = C$();
  return function() {
    var n = Xa(e), i;
    if (t) {
      var a = Xa(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return wl(this, i);
  };
}
function wl(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Pl(e);
}
function Pl(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function C$() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Xa(e) {
  return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xa(e);
}
var ct = /* @__PURE__ */ (function(e) {
  M$(r, e);
  var t = I$(r);
  function r(n, i) {
    var a;
    E$(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, c = o.attributeName, s = o.from, l = o.to, f = o.steps, d = o.children, p = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Pl(a)), a.changeStyle = a.changeStyle.bind(Pl(a)), !u || p <= 0)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: l
      }), wl(a);
    if (f && f.length)
      a.state = {
        style: f[0].style
      };
    else if (s) {
      if (typeof d == "function")
        return a.state = {
          style: s
        }, wl(a);
      a.state = {
        style: c ? Hn({}, c, s) : s
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return j$(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, c = a.attributeName, s = a.shouldReAnimate, l = a.to, f = a.from, d = this.state.style;
      if (u) {
        if (!o) {
          var p = {
            style: c ? Hn({}, c, l) : l
          };
          this.state && d && (c && d[c] !== l || !c && d !== l) && this.setState(p);
          return;
        }
        if (!(Lj(i.to, l) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = y || s ? f : i.to;
          if (this.state && d) {
            var h = {
              style: c ? Hn({}, c, v) : v
            };
            (c && d[c] !== v || !c && d !== v) && this.setState(h);
          }
          this.runAnimation(lt(lt({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, u = i.to, c = i.duration, s = i.easing, l = i.begin, f = i.onAnimationEnd, d = i.onAnimationStart, p = b$(o, u, c$(s), c, this.changeStyle), y = function() {
        a.stopJSAnimation = p();
      };
      this.manager.start([d, l, y, c, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, c = i.onAnimationStart, s = o[0], l = s.style, f = s.duration, d = f === void 0 ? 0 : f, p = function(v, h, g) {
        if (g === 0)
          return v;
        var b = h.duration, x = h.easing, w = x === void 0 ? "ease" : x, m = h.style, O = h.properties, P = h.onAnimationEnd, S = g > 0 ? o[g - 1] : h, _ = O || Object.keys(m);
        if (typeof w == "function" || w === "spring")
          return [].concat(ts(v), [a.runJSAnimation.bind(a, {
            from: S.style,
            to: m,
            duration: b,
            easing: w
          }), b]);
        var $ = ty(_, b, w), E = lt(lt(lt({}, S.style), m), {}, {
          transition: $
        });
        return [].concat(ts(v), [E, b, P]).filter(Yj);
      };
      return this.manager.start([c].concat(ts(o.reduce(p, [l, Math.max(d, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = Kj());
      var a = i.begin, o = i.duration, u = i.attributeName, c = i.to, s = i.easing, l = i.onAnimationStart, f = i.onAnimationEnd, d = i.steps, p = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof s == "function" || typeof p == "function" || s === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = u ? Hn({}, u, c) : c, h = ty(Object.keys(v), o, s);
      y.start([l, a, lt(lt({}, v), {}, {
        transition: h
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var c = O$(i, x$), s = Or.count(a), l = this.state.style;
      if (typeof a == "function")
        return a(l);
      if (!u || s === 0 || o <= 0)
        return a;
      var f = function(p) {
        var y = p.props, v = y.style, h = v === void 0 ? {} : v, g = y.className, b = /* @__PURE__ */ Me(p, lt(lt({}, c), {}, {
          style: lt(lt({}, h), l),
          className: g
        }));
        return b;
      };
      return s === 1 ? f(Or.only(a)) : /* @__PURE__ */ A.createElement("div", null, Or.map(a, function(d) {
        return f(d);
      }));
    }
  }]), r;
})(tt);
ct.displayName = "Animate";
ct.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
ct.propTypes = {
  from: he.oneOfType([he.object, he.string]),
  to: he.oneOfType([he.object, he.string]),
  attributeName: he.string,
  // animation duration
  duration: he.number,
  begin: he.number,
  easing: he.oneOfType([he.string, he.func]),
  steps: he.arrayOf(he.shape({
    duration: he.number.isRequired,
    style: he.object.isRequired,
    easing: he.oneOfType([he.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), he.func]),
    // transition css properties(dash case), optional
    properties: he.arrayOf("string"),
    onAnimationEnd: he.func
  })),
  children: he.oneOfType([he.node, he.func]),
  isActive: he.bool,
  canBegin: he.bool,
  onAnimationEnd: he.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: he.bool,
  onAnimationStart: he.func,
  onAnimationReStart: he.func
};
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Za.apply(this, arguments);
}
function k$(e, t) {
  return L$(e) || D$(e, t) || N$(e, t) || R$();
}
function R$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N$(e, t) {
  if (e) {
    if (typeof e == "string") return uy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uy(e, t);
  }
}
function uy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function D$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function L$(e) {
  if (Array.isArray(e)) return e;
}
function cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cy(Object(r), !0).forEach(function(n) {
      B$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B$(e, t, r) {
  return t = q$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q$(e) {
  var t = F$(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function F$(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ly = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, s = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && a instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = a[d] > o ? o : a[d];
    l = "M".concat(t, ",").concat(r + u * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(s, ",").concat(t + c * f[0], ",").concat(r)), l += "L ".concat(t + n - c * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + u * f[1])), l += "L ".concat(t + n, ",").concat(r + i - u * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(s, `,
        `).concat(t + n - c * f[2], ",").concat(r + i)), l += "L ".concat(t + c * f[3], ",").concat(r + i), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + i - u * f[3])), l += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    l = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + c * y, ",").concat(r, `
            L `).concat(t + n - c * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t + n - c * y, ",").concat(r + i, `
            L `).concat(t + c * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(s, ",").concat(t, ",").concat(r + i - u * y, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return l;
}, W$ = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, c = r.height;
  if (Math.abs(u) > 0 && Math.abs(c) > 0) {
    var s = Math.min(a, a + u), l = Math.max(a, a + u), f = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= s && n <= l && i >= f && i <= d;
  }
  return !1;
}, z$ = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Uf = function(t) {
  var r = sy(sy({}, z$), t), n = ma(), i = Di(-1), a = k$(i, 2), o = a[0], u = a[1];
  tf(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, l = r.width, f = r.height, d = r.radius, p = r.className, y = r.animationEasing, v = r.animationDuration, h = r.animationBegin, g = r.isAnimationActive, b = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var x = ae("recharts-rectangle", p);
  return b ? /* @__PURE__ */ A.createElement(ct, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: c,
      y: s
    },
    to: {
      width: l,
      height: f,
      x: c,
      y: s
    },
    duration: v,
    animationEasing: y,
    isActive: b
  }, function(w) {
    var m = w.width, O = w.height, P = w.x, S = w.y;
    return /* @__PURE__ */ A.createElement(ct, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: v,
      isActive: g,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", Za({}, X(r, !0), {
      className: x,
      d: ly(P, S, m, O, d),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("path", Za({}, X(r, !0), {
    className: x,
    d: ly(c, s, l, f, d)
  }));
}, U$ = ["points", "className", "baseLinePoints", "connectNulls"];
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fr.apply(this, arguments);
}
function K$(e, t) {
  if (e == null) return {};
  var r = H$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function H$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function fy(e) {
  return X$(e) || Y$(e) || V$(e) || G$();
}
function G$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V$(e, t) {
  if (e) {
    if (typeof e == "string") return Al(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Al(e, t);
  }
}
function Y$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function X$(e) {
  if (Array.isArray(e)) return Al(e);
}
function Al(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var dy = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, Z$ = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    dy(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), dy(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Jn = function(t, r) {
  var n = Z$(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(fy(a), fy(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, u, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(u.x, ",").concat(u.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, J$ = function(t, r, n) {
  var i = Jn(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(Jn(r.reverse(), n).slice(1));
}, a0 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = K$(t, U$);
  if (!r || !r.length)
    return null;
  var u = ae("recharts-polygon", n);
  if (i && i.length) {
    var c = o.stroke && o.stroke !== "none", s = J$(r, i, a);
    return /* @__PURE__ */ A.createElement("g", {
      className: u
    }, /* @__PURE__ */ A.createElement("path", Fr({}, X(o, !0), {
      fill: s.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: s
    })), c ? /* @__PURE__ */ A.createElement("path", Fr({}, X(o, !0), {
      fill: "none",
      d: Jn(r, a)
    })) : null, c ? /* @__PURE__ */ A.createElement("path", Fr({}, X(o, !0), {
      fill: "none",
      d: Jn(i, a)
    })) : null);
  }
  var l = Jn(r, a);
  return /* @__PURE__ */ A.createElement("path", Fr({}, X(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: u,
    d: l
  }));
};
function Sl() {
  return Sl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sl.apply(this, arguments);
}
var Mn = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = ae("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ A.createElement("circle", Sl({}, X(t, !1), ba(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
var Q$ = ["x", "y", "top", "left", "width", "height", "className"];
function _l() {
  return _l = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _l.apply(this, arguments);
}
function py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? py(Object(r), !0).forEach(function(n) {
      tM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : py(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tM(e, t, r) {
  return t = rM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rM(e) {
  var t = nM(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function nM(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function iM(e, t) {
  if (e == null) return {};
  var r = aM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var oM = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, uM = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, c = t.left, s = c === void 0 ? 0 : c, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, v = iM(t, Q$), h = eM({
    x: n,
    y: a,
    top: u,
    left: s,
    width: f,
    height: p
  }, v);
  return !W(n) || !W(a) || !W(f) || !W(p) || !W(u) || !W(s) ? null : /* @__PURE__ */ A.createElement("path", _l({}, X(h, !0), {
    className: ae("recharts-cross", y),
    d: oM(n, a, f, p, u, s)
  }));
}, cM = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function sM(e, t) {
  if (e == null) return {};
  var r = lM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function lM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      fM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fM(e, t, r) {
  return t = dM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dM(e) {
  var t = pM(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function pM(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hM = function(t, r, n, i) {
  var a = "";
  return i.forEach(function(o, u) {
    var c = se(r, n, t, o);
    u ? a += "L ".concat(c.x, ",").concat(c.y) : a += "M ".concat(c.x, ",").concat(c.y);
  }), a += "Z", a;
}, vM = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.polarAngles, u = t.radialLines;
  if (!o || !o.length || !u)
    return null;
  var c = Ti({
    stroke: "#ccc"
  }, X(t, !1));
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, o.map(function(s) {
    var l = se(r, n, i, s), f = se(r, n, a, s);
    return /* @__PURE__ */ A.createElement("line", Ft({}, c, {
      key: "line-".concat(s),
      x1: l.x,
      y1: l.y,
      x2: f.x,
      y2: f.y
    }));
  }));
}, yM = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.index, o = Ti(Ti({
    stroke: "#ccc"
  }, X(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("circle", Ft({}, o, {
    className: ae("recharts-polar-grid-concentric-circle", t.className),
    key: "circle-".concat(a),
    cx: r,
    cy: n,
    r: i
  }));
}, mM = function(t) {
  var r = t.radius, n = t.index, i = Ti(Ti({
    stroke: "#ccc"
  }, X(t, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ A.createElement("path", Ft({}, i, {
    className: ae("recharts-polar-grid-concentric-polygon", t.className),
    key: "path-".concat(n),
    d: hM(r, t.cx, t.cy, t.polarAngles)
  }));
}, gM = function(t) {
  var r = t.polarRadius, n = t.gridType;
  return !r || !r.length ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, r.map(function(i, a) {
    var o = a;
    return n === "circle" ? /* @__PURE__ */ A.createElement(yM, Ft({
      key: o
    }, t, {
      radius: i,
      index: a
    })) : /* @__PURE__ */ A.createElement(mM, Ft({
      key: o
    }, t, {
      radius: i,
      index: a
    }));
  }));
}, o0 = function(t) {
  var r = t.cx, n = r === void 0 ? 0 : r, i = t.cy, a = i === void 0 ? 0 : i, o = t.innerRadius, u = o === void 0 ? 0 : o, c = t.outerRadius, s = c === void 0 ? 0 : c, l = t.gridType, f = l === void 0 ? "polygon" : l, d = t.radialLines, p = d === void 0 ? !0 : d, y = sM(t, cM);
  return s <= 0 ? null : /* @__PURE__ */ A.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ A.createElement(vM, Ft({
    cx: n,
    cy: a,
    innerRadius: u,
    outerRadius: s,
    gridType: f,
    radialLines: p
  }, y)), /* @__PURE__ */ A.createElement(gM, Ft({
    cx: n,
    cy: a,
    innerRadius: u,
    outerRadius: s,
    gridType: f,
    radialLines: p
  }, y)));
};
o0.displayName = "PolarGrid";
var rs, vy;
function bM() {
  if (vy) return rs;
  vy = 1;
  var e = Do(), t = vb(), r = Et();
  function n(i, a) {
    return i && i.length ? e(i, r(a, 2), t) : void 0;
  }
  return rs = n, rs;
}
var xM = bM();
const OM = /* @__PURE__ */ ye(xM);
var ns, yy;
function wM() {
  if (yy) return ns;
  yy = 1;
  var e = Do(), t = Et(), r = yb();
  function n(i, a) {
    return i && i.length ? e(i, t(a, 2), r) : void 0;
  }
  return ns = n, ns;
}
var PM = wM();
const AM = /* @__PURE__ */ ye(PM);
var SM = ["cx", "cy", "angle", "ticks", "axisLine"], _M = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qn.apply(this, arguments);
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      Fo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gy(e, t) {
  if (e == null) return {};
  var r = EM(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function TM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function by(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, c0(n.key), n);
  }
}
function jM(e, t, r) {
  return t && by(e.prototype, t), r && by(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $M(e, t, r) {
  return t = Ja(t), MM(e, u0() ? Reflect.construct(t, r || [], Ja(e).constructor) : t.apply(e, r));
}
function MM(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IM(e);
}
function IM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (u0 = function() {
    return !!e;
  })();
}
function Ja(e) {
  return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ja(e);
}
function CM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && El(e, t);
}
function El(e, t) {
  return El = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, El(e, t);
}
function Fo(e, t, r) {
  return t = c0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c0(e) {
  var t = kM(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function kM(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var In = /* @__PURE__ */ (function(e) {
  function t() {
    return TM(this, t), $M(this, t, arguments);
  }
  return CM(t, e), jM(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, u = a.cx, c = a.cy;
        return se(u, c, i, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = OM(u, function(l) {
        return l.coordinate || 0;
      }), s = AM(u, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: s.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = n.axisLine, s = gy(n, SM), l = u.reduce(function(y, v) {
        return [Math.min(y[0], v.coordinate), Math.max(y[1], v.coordinate)];
      }, [1 / 0, -1 / 0]), f = se(i, a, l[0], o), d = se(i, a, l[1], o), p = fr(fr(fr({}, X(s, !1)), {}, {
        fill: "none"
      }, X(c, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ A.createElement("line", Qn({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.angle, c = i.tickFormatter, s = i.stroke, l = gy(i, _M), f = this.getTickTextAnchor(), d = X(l, !1), p = X(o, !1), y = a.map(function(v, h) {
        var g = n.getTickValueCoord(v), b = fr(fr(fr(fr({
          textAnchor: f,
          transform: "rotate(".concat(90 - u, ", ").concat(g.x, ", ").concat(g.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: s
        }, p), {}, {
          index: h
        }, g), {}, {
          payload: v
        });
        return /* @__PURE__ */ A.createElement(oe, Qn({
          className: ae("recharts-polar-radius-axis-tick", Kb(o)),
          key: "tick-".concat(v.coordinate)
        }, _r(n.props, v, h)), t.renderTickItem(o, b, c ? c(v.value, h) : v.value));
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ A.createElement(oe, {
        className: ae("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), o && this.renderTicks(), Ie.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, i) : Q(n) ? o = n(i) : o = /* @__PURE__ */ A.createElement(rr, Qn({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]);
})(tt);
Fo(In, "displayName", "PolarRadiusAxis");
Fo(In, "axisType", "radiusAxis");
Fo(In, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vr.apply(this, arguments);
}
function xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xy(Object(r), !0).forEach(function(n) {
      Wo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l0(n.key), n);
  }
}
function NM(e, t, r) {
  return t && Oy(e.prototype, t), r && Oy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function DM(e, t, r) {
  return t = Qa(t), LM(e, s0() ? Reflect.construct(t, r || [], Qa(e).constructor) : t.apply(e, r));
}
function LM(e, t) {
  if (t && (on(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return BM(e);
}
function BM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function s0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (s0 = function() {
    return !!e;
  })();
}
function Qa(e) {
  return Qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qa(e);
}
function qM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tl(e, t);
}
function Tl(e, t) {
  return Tl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Tl(e, t);
}
function Wo(e, t, r) {
  return t = l0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l0(e) {
  var t = FM(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function FM(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var WM = Math.PI / 180, wy = 1e-5, Cn = /* @__PURE__ */ (function(e) {
  function t() {
    return RM(this, t), DM(this, t, arguments);
  }
  return qM(t, e), NM(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, o = i.cy, u = i.radius, c = i.orientation, s = i.tickSize, l = s || 8, f = se(a, o, u, n.coordinate), d = se(a, o, u + (c === "inner" ? -1 : 1) * l, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * WM), o;
      return a > wy ? o = i === "outer" ? "start" : "end" : a < -wy ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, u = n.axisLine, c = n.axisLineType, s = dr(dr({}, X(this.props, !1)), {}, {
        fill: "none"
      }, X(u, !1));
      if (c === "circle")
        return /* @__PURE__ */ A.createElement(Mn, vr({
          className: "recharts-polar-angle-axis-line"
        }, s, {
          cx: i,
          cy: a,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return se(i, a, o, d.coordinate);
      });
      return /* @__PURE__ */ A.createElement(a0, vr({
        className: "recharts-polar-angle-axis-line"
      }, s, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.tickLine, c = i.tickFormatter, s = i.stroke, l = X(this.props, !1), f = X(o, !1), d = dr(dr({}, l), {}, {
        fill: "none"
      }, X(u, !1)), p = a.map(function(y, v) {
        var h = n.getTickLineCoord(y), g = n.getTickTextAnchor(y), b = dr(dr(dr({
          textAnchor: g
        }, l), {}, {
          stroke: "none",
          fill: s
        }, f), {}, {
          index: v,
          payload: y,
          x: h.x2,
          y: h.y2
        });
        return /* @__PURE__ */ A.createElement(oe, vr({
          className: ae("recharts-polar-angle-axis-tick", Kb(o)),
          key: "tick-".concat(y.coordinate)
        }, _r(n.props, y, v)), u && /* @__PURE__ */ A.createElement("line", vr({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, h)), o && t.renderTickItem(o, b, c ? c(y.value, v) : y.value));
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ A.createElement(oe, {
        className: ae("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, i) : Q(n) ? o = n(i) : o = /* @__PURE__ */ A.createElement(rr, vr({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]);
})(tt);
Wo(Cn, "displayName", "PolarAngleAxis");
Wo(Cn, "axisType", "angleAxis");
Wo(Cn, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var is, Py;
function zM() {
  if (Py) return is;
  Py = 1;
  var e = Tx(), t = e(Object.getPrototypeOf, Object);
  return is = t, is;
}
var as, Ay;
function UM() {
  if (Ay) return as;
  Ay = 1;
  var e = Li(), t = zM(), r = Bi(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, u = a.hasOwnProperty, c = o.call(Object);
  function s(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var d = u.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == c;
  }
  return as = s, as;
}
var KM = UM();
const HM = /* @__PURE__ */ ye(KM);
var os, Sy;
function GM() {
  if (Sy) return os;
  Sy = 1;
  var e = Li(), t = Bi(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return os = n, os;
}
var VM = GM();
const YM = /* @__PURE__ */ ye(VM);
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, eo.apply(this, arguments);
}
function XM(e, t) {
  return eI(e) || QM(e, t) || JM(e, t) || ZM();
}
function ZM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JM(e, t) {
  if (e) {
    if (typeof e == "string") return _y(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _y(e, t);
  }
}
function _y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function eI(e) {
  if (Array.isArray(e)) return e;
}
function Ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ty(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ey(Object(r), !0).forEach(function(n) {
      tI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ey(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tI(e, t, r) {
  return t = rI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rI(e) {
  var t = nI(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function nI(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jy = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, iI = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, aI = function(t) {
  var r = Ty(Ty({}, iI), t), n = ma(), i = Di(-1), a = XM(i, 2), o = a[0], u = a[1];
  tf(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && u(x);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, l = r.upperWidth, f = r.lowerWidth, d = r.height, p = r.className, y = r.animationEasing, v = r.animationDuration, h = r.animationBegin, g = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || l !== +l || f !== +f || d !== +d || l === 0 && f === 0 || d === 0)
    return null;
  var b = ae("recharts-trapezoid", p);
  return g ? /* @__PURE__ */ A.createElement(ct, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: s
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: d,
      x: c,
      y: s
    },
    duration: v,
    animationEasing: y,
    isActive: g
  }, function(x) {
    var w = x.upperWidth, m = x.lowerWidth, O = x.height, P = x.x, S = x.y;
    return /* @__PURE__ */ A.createElement(ct, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: h,
      duration: v,
      easing: y
    }, /* @__PURE__ */ A.createElement("path", eo({}, X(r, !0), {
      className: b,
      d: jy(P, S, w, m, O),
      ref: n
    })));
  }) : /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", eo({}, X(r, !0), {
    className: b,
    d: jy(c, s, l, f, d)
  })));
}, oI = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function uI(e, t) {
  if (e == null) return {};
  var r = cI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function $y(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function to(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $y(Object(r), !0).forEach(function(n) {
      sI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $y(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sI(e, t, r) {
  return t = lI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lI(e) {
  var t = fI(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function fI(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dI(e, t) {
  return to(to({}, t), e);
}
function pI(e, t) {
  return e === "symbols";
}
function My(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ A.createElement(Uf, r);
    case "trapezoid":
      return /* @__PURE__ */ A.createElement(aI, r);
    case "sector":
      return /* @__PURE__ */ A.createElement(Yb, r);
    case "symbols":
      if (pI(t))
        return /* @__PURE__ */ A.createElement(pf, r);
      break;
    default:
      return null;
  }
}
function hI(e) {
  return /* @__PURE__ */ ht(e) ? e.props : e;
}
function f0(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? dI : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, c = uI(e, oI), s;
  if (/* @__PURE__ */ ht(t))
    s = /* @__PURE__ */ Me(t, to(to({}, c), hI(t)));
  else if (Q(t))
    s = t(c);
  else if (HM(t) && !YM(t)) {
    var l = i(t, c);
    s = /* @__PURE__ */ A.createElement(My, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = c;
    s = /* @__PURE__ */ A.createElement(My, {
      shapeType: r,
      elementProps: f
    });
  }
  return u ? /* @__PURE__ */ A.createElement(oe, {
    className: o
  }, s) : s;
}
function zo(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Uo(e, t) {
  return t != null && "sectors" in e.props;
}
function Mi(e, t) {
  return t != null && "points" in e.props;
}
function vI(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function yI(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function mI(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function gI(e, t) {
  var r;
  return zo(e, t) ? r = vI : Uo(e, t) ? r = yI : Mi(e, t) && (r = mI), r;
}
function bI(e, t) {
  var r;
  return zo(e, t) ? r = "trapezoids" : Uo(e, t) ? r = "sectors" : Mi(e, t) && (r = "points"), r;
}
function xI(e, t) {
  if (zo(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Uo(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Mi(e, t) ? t.payload : {};
}
function OI(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = bI(r, t), a = xI(r, t), o = n.filter(function(c, s) {
    var l = tr(a, c), f = r.props[i].filter(function(y) {
      var v = gI(r, t);
      return v(y, t);
    }), d = r.props[i].indexOf(f[f.length - 1]), p = s === d;
    return l && p;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var ya;
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
function Iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Iy(Object(r), !0).forEach(function(n) {
      at(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p0(n.key), n);
  }
}
function PI(e, t, r) {
  return t && Cy(e.prototype, t), r && Cy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AI(e, t, r) {
  return t = ro(t), SI(e, d0() ? Reflect.construct(t, r || [], ro(e).constructor) : t.apply(e, r));
}
function SI(e, t) {
  if (t && (un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _I(e);
}
function _I(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (d0 = function() {
    return !!e;
  })();
}
function ro(e) {
  return ro = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ro(e);
}
function EI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jl(e, t);
}
function jl(e, t) {
  return jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jl(e, t);
}
function at(e, t, r) {
  return t = p0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p0(e) {
  var t = TI(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function TI(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ut = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return wI(this, t), n = AI(this, t, [r]), at(n, "pieRef", null), at(n, "sectorRefs", []), at(n, "id", jr("recharts-pie-")), at(n, "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Q(i) && i();
    }), at(n, "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Q(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return EI(t, e), PI(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.label, u = a.labelLine, c = a.dataKey, s = a.valueKey, l = X(this.props, !1), f = X(o, !1), d = X(u, !1), p = o && o.offsetRadius || 20, y = n.map(function(v, h) {
        var g = (v.startAngle + v.endAngle) / 2, b = se(v.cx, v.cy, v.outerRadius + p, g), x = be(be(be(be({}, l), v), {}, {
          stroke: "none"
        }, f), {}, {
          index: h,
          textAnchor: t.getTextAnchor(b.x, v.cx)
        }, b), w = be(be(be(be({}, l), v), {}, {
          fill: "none",
          stroke: v.fill
        }, d), {}, {
          index: h,
          points: [se(v.cx, v.cy, v.outerRadius, g), b]
        }), m = c;
        return ne(c) && ne(s) ? m = "value" : ne(c) && (m = s), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ A.createElement(oe, {
          key: "label-".concat(v.startAngle, "-").concat(v.endAngle, "-").concat(v.midAngle, "-").concat(h)
        }, u && t.renderLabelLineItem(u, w, "line"), t.renderLabelItem(o, x, _e(v, m)));
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, u = a.blendStroke, c = a.inactiveShape;
      return n.map(function(s, l) {
        if (s?.startAngle === 0 && s?.endAngle === 0 && n.length !== 1) return null;
        var f = i.isActiveIndex(l), d = c && i.hasActiveIndex() ? c : null, p = f ? o : d, y = be(be({}, s), {}, {
          stroke: u ? s.fill : s.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ A.createElement(oe, Wr({
          ref: function(h) {
            h && !i.sectorRefs.includes(h) && i.sectorRefs.push(h);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, _r(i.props, s, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(s?.startAngle, "-").concat(s?.endAngle, "-").concat(s.midAngle, "-").concat(l)
        }), /* @__PURE__ */ A.createElement(f0, Wr({
          option: p,
          isActive: f,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, l = i.animationId, f = this.state, d = f.prevSectors, p = f.prevIsAnimationActive;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var v = y.t, h = [], g = a && a[0], b = g.startAngle;
        return a.forEach(function(x, w) {
          var m = d && d[w], O = w > 0 ? Je(x, "paddingAngle", 0) : 0;
          if (m) {
            var P = Se(m.endAngle - m.startAngle, x.endAngle - x.startAngle), S = be(be({}, x), {}, {
              startAngle: b + O,
              endAngle: b + P(v) + O
            });
            h.push(S), b = S.endAngle;
          } else {
            var _ = x.endAngle, $ = x.startAngle, E = Se(0, _ - $), j = E(v), M = be(be({}, x), {}, {
              startAngle: b + O,
              endAngle: b + j + O
            });
            h.push(M), b = M.endAngle;
          }
        }), /* @__PURE__ */ A.createElement(oe, null, n.renderSectorsStatically(h));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var u = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[u].focus(), i.setState({
                sectorToFocus: u
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !tr(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, u = i.className, c = i.label, s = i.cx, l = i.cy, f = i.innerRadius, d = i.outerRadius, p = i.isAnimationActive, y = this.state.isAnimationFinished;
      if (a || !o || !o.length || !W(s) || !W(l) || !W(f) || !W(d))
        return null;
      var v = ae("recharts-pie", u);
      return /* @__PURE__ */ A.createElement(oe, {
        tabIndex: this.props.rootTabIndex,
        className: v,
        ref: function(g) {
          n.pieRef = g;
        }
      }, this.renderSectors(), c && this.renderLabels(o), Ie.renderCallByParent(this.props, null, !1), (!p || y) && et.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, i);
      if (Q(n))
        return n(i);
      var o = ae("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ A.createElement(Sr, Wr({}, i, {
        key: a,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ A.isValidElement(n))
        return /* @__PURE__ */ A.cloneElement(n, i);
      var o = a;
      if (Q(n) && (o = n(i), /* @__PURE__ */ A.isValidElement(o)))
        return o;
      var u = ae("recharts-pie-label-text", typeof n != "boolean" && !Q(n) ? n.className : "");
      return /* @__PURE__ */ A.createElement(rr, Wr({}, i, {
        alignmentBaseline: "middle",
        className: u
      }), o);
    }
  }]);
})(tt);
ya = Ut;
at(Ut, "displayName", "Pie");
at(Ut, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
at(Ut, "parseDeltaAngle", function(e, t) {
  var r = ze(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
at(Ut, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = X(e, !1), i = Qe(r, $o);
  return t && t.length ? t.map(function(a, o) {
    return be(be(be({
      payload: a
    }, n), a), i && i[o] && i[o].props);
  }) : i && i.length ? i.map(function(a) {
    return be(be({}, n), a.props);
  }) : [];
});
at(Ut, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = zb(i, a), u = n + Ue(e.cx, i, i / 2), c = r + Ue(e.cy, a, a / 2), s = Ue(e.innerRadius, o, 0), l = Ue(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: u,
    cy: c,
    innerRadius: s,
    outerRadius: l,
    maxRadius: f
  };
});
at(Ut, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? be(be({}, t.type.defaultProps), t.props) : t.props, i = ya.getRealPieData(n);
  if (!i || !i.length)
    return null;
  var a = n.cornerRadius, o = n.startAngle, u = n.endAngle, c = n.paddingAngle, s = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = ya.parseCoordinateOfPie(n, r), v = ya.parseDeltaAngle(o, u), h = Math.abs(v), g = s;
  ne(s) && ne(f) ? (vt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = "value") : ne(s) && (vt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), g = f);
  var b = i.filter(function(S) {
    return _e(S, g, 0) !== 0;
  }).length, x = (h >= 360 ? b : b - 1) * c, w = h - b * p - x, m = i.reduce(function(S, _) {
    var $ = _e(_, g, 0);
    return S + (W($) ? $ : 0);
  }, 0), O;
  if (m > 0) {
    var P;
    O = i.map(function(S, _) {
      var $ = _e(S, g, 0), E = _e(S, l, _), j = (W($) ? $ : 0) / m, M;
      _ ? M = P.endAngle + ze(v) * c * ($ !== 0 ? 1 : 0) : M = o;
      var C = M + ze(v) * (($ !== 0 ? p : 0) + j * w), k = (M + C) / 2, R = (y.innerRadius + y.outerRadius) / 2, L = [{
        name: E,
        value: $,
        payload: S,
        dataKey: g,
        type: d
      }], F = se(y.cx, y.cy, R, k);
      return P = be(be(be({
        percent: j,
        cornerRadius: a,
        name: E,
        tooltipPayload: L,
        midAngle: k,
        middleRadius: R,
        tooltipPosition: F
      }, S), y), {}, {
        value: _e(S, g),
        startAngle: M,
        endAngle: C,
        payload: S,
        paddingAngle: ze(v) * c
      }), P;
    });
  }
  return be(be({}, y), {}, {
    sectors: O,
    data: i
  });
});
var us, ky;
function jI() {
  if (ky) return us;
  ky = 1;
  function e(t) {
    return t && t.length ? t[0] : void 0;
  }
  return us = e, us;
}
var cs, Ry;
function $I() {
  return Ry || (Ry = 1, cs = jI()), cs;
}
var MI = $I();
const II = /* @__PURE__ */ ye(MI);
var CI = ["key"];
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function kI(e, t) {
  if (e == null) return {};
  var r = RI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function RI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, no.apply(this, arguments);
}
function Ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ny(Object(r), !0).forEach(function(n) {
      It(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v0(n.key), n);
  }
}
function DI(e, t, r) {
  return t && Dy(e.prototype, t), r && Dy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function LI(e, t, r) {
  return t = io(t), BI(e, h0() ? Reflect.construct(t, r || [], io(e).constructor) : t.apply(e, r));
}
function BI(e, t) {
  if (t && (cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qI(e);
}
function qI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function h0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (h0 = function() {
    return !!e;
  })();
}
function io(e) {
  return io = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, io(e);
}
function FI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $l(e, t);
}
function $l(e, t) {
  return $l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $l(e, t);
}
function It(e, t, r) {
  return t = v0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v0(e) {
  var t = WI(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    NI(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = LI(this, t, [].concat(i)), It(r, "state", {
      isAnimationFinished: !1
    }), It(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Q(o) && o();
    }), It(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Q(o) && o();
    }), It(r, "handleMouseEnter", function(o) {
      var u = r.props.onMouseEnter;
      u && u(r.props, o);
    }), It(r, "handleMouseLeave", function(o) {
      var u = r.props.onMouseLeave;
      u && u(r.props, o);
    }), r;
  }
  return FI(t, e), DI(t, [{
    key: "renderDots",
    value: function(n) {
      var i = this.props, a = i.dot, o = i.dataKey, u = X(this.props, !1), c = X(a, !0), s = n.map(function(l, f) {
        var d = We(We(We({
          key: "dot-".concat(f),
          r: 3
        }, u), c), {}, {
          dataKey: o,
          cx: l.x,
          cy: l.y,
          index: f,
          payload: l
        });
        return t.renderDotItem(a, d);
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-radar-dots"
      }, s);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(n) {
      var i = this.props, a = i.shape, o = i.dot, u = i.isRange, c = i.baseLinePoints, s = i.connectNulls, l;
      return /* @__PURE__ */ A.isValidElement(a) ? l = /* @__PURE__ */ A.cloneElement(a, We(We({}, this.props), {}, {
        points: n
      })) : Q(a) ? l = a(We(We({}, this.props), {}, {
        points: n
      })) : l = /* @__PURE__ */ A.createElement(a0, no({}, X(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: n,
        baseLinePoints: u ? c : null,
        connectNulls: s
      })), /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-radar-polygon"
      }, l, o ? this.renderDots(n) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.points, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, l = i.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(d) {
        var p = d.t, y = f && f.length / a.length, v = a.map(function(h, g) {
          var b = f && f[Math.floor(g * y)];
          if (b) {
            var x = Se(b.x, h.x), w = Se(b.y, h.y);
            return We(We({}, h), {}, {
              x: x(p),
              y: w(p)
            });
          }
          var m = Se(h.cx, h.x), O = Se(h.cy, h.y);
          return We(We({}, h), {}, {
            x: m(p),
            y: O(p)
          });
        });
        return n.renderPolygonStatically(v);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var n = this.props, i = n.points, a = n.isAnimationActive, o = n.isRange, u = this.state.prevPoints;
      return a && i && i.length && !o && (!u || !tr(u, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.className, o = n.points, u = n.isAnimationActive;
      if (i || !o || !o.length)
        return null;
      var c = this.state.isAnimationFinished, s = ae("recharts-radar", a);
      return /* @__PURE__ */ A.createElement(oe, {
        className: s
      }, this.renderPolygon(), (!u || c) && et.renderCallByParent(this.props, o));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ A.isValidElement(n))
        a = /* @__PURE__ */ A.cloneElement(n, i);
      else if (Q(n))
        a = n(i);
      else {
        var o = i.key, u = kI(i, CI);
        a = /* @__PURE__ */ A.createElement(Mn, no({}, u, {
          key: o,
          className: ae("recharts-radar-dot", typeof n != "boolean" ? n.className : "")
        }));
      }
      return a;
    }
  }]);
})(tt);
It(Hi, "displayName", "Radar");
It(Hi, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
It(Hi, "getComposedData", function(e) {
  var t = e.radiusAxis, r = e.angleAxis, n = e.displayedData, i = e.dataKey, a = e.bandSize, o = r.cx, u = r.cy, c = !1, s = [], l = r.type !== "number" ? a ?? 0 : 0;
  n.forEach(function(d, p) {
    var y = _e(d, r.dataKey, p), v = _e(d, i), h = r.scale(y) + l, g = Array.isArray(v) ? Gb(v) : v, b = ne(g) ? void 0 : t.scale(g);
    Array.isArray(v) && v.length >= 2 && (c = !0), s.push(We(We({}, se(o, u, b, h)), {}, {
      name: y,
      value: v,
      cx: o,
      cy: u,
      radius: b,
      angle: h,
      payload: d
    }));
  });
  var f = [];
  return c && s.forEach(function(d) {
    if (Array.isArray(d.value)) {
      var p = II(d.value), y = ne(p) ? void 0 : t.scale(p);
      f.push(We(We({}, d), {}, {
        radius: y
      }, se(o, u, y, d.angle)));
    } else
      f.push(d);
  }), {
    points: s,
    isRange: c,
    baseLinePoints: f
  };
});
var ss, Ly;
function zI() {
  if (Ly) return ss;
  Ly = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, c = t(e((i - n) / (a || 1)), 0), s = Array(c); c--; )
      s[o ? c : ++u] = n, n += a;
    return s;
  }
  return ss = r, ss;
}
var ls, By;
function y0() {
  if (By) return ls;
  By = 1;
  var e = $g(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return ls = n, ls;
}
var fs, qy;
function UI() {
  if (qy) return fs;
  qy = 1;
  var e = zI(), t = jo(), r = y0();
  function n(i) {
    return function(a, o, u) {
      return u && typeof u != "number" && t(a, o, u) && (o = u = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), u = u === void 0 ? a < o ? 1 : -1 : r(u), e(a, o, u, i);
    };
  }
  return fs = n, fs;
}
var ds, Fy;
function KI() {
  if (Fy) return ds;
  Fy = 1;
  var e = UI(), t = e();
  return ds = t, ds;
}
var HI = KI();
const ao = /* @__PURE__ */ ye(HI);
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
function Wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wy(Object(r), !0).forEach(function(n) {
      m0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function m0(e, t, r) {
  return t = GI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GI(e) {
  var t = VI(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function VI(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YI = ["Webkit", "Moz", "O", "ms"], XI = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = YI.reduce(function(a, o) {
    return zy(zy({}, a), {}, m0({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oo.apply(this, arguments);
}
function Uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uy(Object(r), !0).forEach(function(n) {
      Ye(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ZI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ky(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b0(n.key), n);
  }
}
function JI(e, t, r) {
  return t && Ky(e.prototype, t), r && Ky(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function QI(e, t, r) {
  return t = uo(t), eC(e, g0() ? Reflect.construct(t, r || [], uo(e).constructor) : t.apply(e, r));
}
function eC(e, t) {
  if (t && (sn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tC(e);
}
function tC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (g0 = function() {
    return !!e;
  })();
}
function uo(e) {
  return uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uo(e);
}
function rC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ml(e, t);
}
function Ml(e, t) {
  return Ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ml(e, t);
}
function Ye(e, t, r) {
  return t = b0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b0(e) {
  var t = nC(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function nC(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var iC = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, s = Yn().domain(ao(0, c)).range([a, a + o - u]), l = s.domain().map(function(f) {
    return s(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: s(n),
    endX: s(i),
    scale: s,
    scaleValues: l
  };
}, Hy = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, ln = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return ZI(this, t), n = QI(this, t, [r]), Ye(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ye(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ye(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o?.({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), Ye(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ye(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Ye(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Ye(n, "handleSlideDragStart", function(i) {
      var a = Hy(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return rC(t, e), JI(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, c = u.gap, s = u.data, l = s.length - 1, f = Math.min(i, a), d = Math.max(i, a), p = t.getIndexInRange(o, f), y = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % c,
        endIndex: y === l ? l : y - y % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, c = _e(a[n], u, n);
      return Q(o) ? o(c, n) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, c = this.props, s = c.x, l = c.width, f = c.travellerWidth, d = c.startIndex, p = c.endIndex, y = c.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, s + l - f - u, s + l - f - o) : v < 0 && (v = Math.max(v, s - o, s - u));
      var h = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (h.startIndex !== d || h.endIndex !== p) && y && y(h), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = Hy(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, c = i.startX, s = this.state[o], l = this.props, f = l.x, d = l.width, p = l.travellerWidth, y = l.onChange, v = l.gap, h = l.data, g = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = n.pageX - a;
      b > 0 ? b = Math.min(b, f + d - p - s) : b < 0 && (b = Math.max(b, f - s)), g[o] = s + b;
      var x = this.getIndex(g), w = x.startIndex, m = x.endIndex, O = function() {
        var S = h.length - 1;
        return o === "startX" && (u > c ? w % v === 0 : m % v === 0) || u < c && m === S || o === "endX" && (u > c ? m % v === 0 : w % v === 0) || u > c && m === S;
      };
      this.setState(Ye(Ye({}, o, s + b), "brushMoveStartX", n.pageX), function() {
        y && O() && y(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, c = o.startX, s = o.endX, l = this.state[i], f = u.indexOf(l);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= u.length)) {
          var p = u[d];
          i === "startX" && p >= s || i === "endX" && p <= c || this.setState(Ye({}, i, p), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.fill, s = n.stroke;
      return /* @__PURE__ */ A.createElement("rect", {
        stroke: s,
        fill: c,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.data, s = n.children, l = n.padding, f = Or.only(s);
      return f ? /* @__PURE__ */ A.cloneElement(f, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: l,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, c = this.props, s = c.y, l = c.travellerWidth, f = c.height, d = c.traveller, p = c.ariaLabel, y = c.data, v = c.startIndex, h = c.endIndex, g = Math.max(n, this.props.x), b = ps(ps({}, X(this.props, !1)), {}, {
        x: g,
        y: s,
        width: l,
        height: f
      }), x = p || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[h]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ A.createElement(oe, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), u.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, b));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, c = a.stroke, s = a.travellerWidth, l = Math.min(n, i) + s, f = Math.max(Math.abs(i - n) - s, 0);
      return /* @__PURE__ */ A.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: l,
        y: o,
        width: f,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, c = n.travellerWidth, s = n.stroke, l = this.state, f = l.startX, d = l.endX, p = 5, y = {
        pointerEvents: "none",
        fill: s
      };
      return /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ A.createElement(rr, oo({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + u / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ A.createElement(rr, oo({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + c + p,
        y: o + u / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, c = n.y, s = n.width, l = n.height, f = n.alwaysShowText, d = this.state, p = d.startX, y = d.endX, v = d.isTextActive, h = d.isSlideMoving, g = d.isTravellerMoving, b = d.isTravellerFocused;
      if (!i || !i.length || !W(u) || !W(c) || !W(s) || !W(l) || s <= 0 || l <= 0)
        return null;
      var x = ae("recharts-brush", a), w = A.Children.count(o) === 1, m = XI("userSelect", "none");
      return /* @__PURE__ */ A.createElement(oe, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(p, y), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(y, "endX"), (v || h || g || b || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, c = n.stroke, s = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: i + 1,
        y1: s,
        x2: i + o - 1,
        y2: s,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ A.createElement("line", {
        x1: i + 1,
        y1: s + 2,
        x2: i + o - 1,
        y2: s + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ A.isValidElement(n) ? a = /* @__PURE__ */ A.cloneElement(n, i) : Q(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, c = n.travellerWidth, s = n.updateId, l = n.startIndex, f = n.endIndex;
      if (a !== i.prevData || s !== i.prevUpdateId)
        return ps({
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o
        }, a && a.length ? iC({
          data: a,
          width: o,
          x: u,
          travellerWidth: c,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - c]);
        var d = i.scale.domain().map(function(p) {
          return i.scale(p);
        });
        return {
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var c = Math.floor((o + u) / 2);
        n[c] > i ? u = c : o = c;
      }
      return i >= n[u] ? u : o;
    }
  }]);
})(tt);
Ye(ln, "displayName", "Brush");
Ye(ln, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var hs, Gy;
function aC() {
  if (Gy) return hs;
  Gy = 1;
  var e = vf();
  function t(r, n) {
    var i;
    return e(r, function(a, o, u) {
      return i = n(a, o, u), !i;
    }), !!i;
  }
  return hs = t, hs;
}
var vs, Vy;
function oC() {
  if (Vy) return vs;
  Vy = 1;
  var e = jx(), t = Et(), r = aC(), n = mt(), i = jo();
  function a(o, u, c) {
    var s = n(o) ? e : r;
    return c && i(o, u, c) && (u = void 0), s(o, t(u, 3));
  }
  return vs = a, vs;
}
var uC = oC();
const cC = /* @__PURE__ */ ye(uC);
var Pt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, ys, Yy;
function sC() {
  if (Yy) return ys;
  Yy = 1;
  var e = Sg();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return ys = t, ys;
}
var ms, Xy;
function lC() {
  if (Xy) return ms;
  Xy = 1;
  var e = sC(), t = Pg(), r = Et();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(u, c, s) {
      e(o, c, a(u, c, s));
    }), o;
  }
  return ms = n, ms;
}
var fC = lC();
const dC = /* @__PURE__ */ ye(fC);
var gs, Zy;
function pC() {
  if (Zy) return gs;
  Zy = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return gs = e, gs;
}
var bs, Jy;
function hC() {
  if (Jy) return bs;
  Jy = 1;
  var e = vf();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, u) {
      return i = !!n(a, o, u), i;
    }), i;
  }
  return bs = t, bs;
}
var xs, Qy;
function vC() {
  if (Qy) return xs;
  Qy = 1;
  var e = pC(), t = hC(), r = Et(), n = mt(), i = jo();
  function a(o, u, c) {
    var s = n(o) ? e : t;
    return c && i(o, u, c) && (u = void 0), s(o, r(u, 3));
  }
  return xs = a, xs;
}
var yC = vC();
const x0 = /* @__PURE__ */ ye(yC);
var mC = ["x", "y"];
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Il() {
  return Il = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Il.apply(this, arguments);
}
function em(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? em(Object(r), !0).forEach(function(n) {
      gC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gC(e, t, r) {
  return t = bC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bC(e) {
  var t = xC(e, "string");
  return fn(t) == "symbol" ? t : t + "";
}
function xC(e, t) {
  if (fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function OC(e, t) {
  if (e == null) return {};
  var r = wC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function PC(e, t) {
  var r = e.x, n = e.y, i = OC(e, mC), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), c = parseInt(u, 10), s = "".concat(t.height || i.height), l = parseInt(s, 10), f = "".concat(t.width || i.width), d = parseInt(f, 10);
  return Kn(Kn(Kn(Kn(Kn({}, t), i), o ? {
    x: o
  } : {}), c ? {
    y: c
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function tm(e) {
  return /* @__PURE__ */ A.createElement(f0, Il({
    shapeType: "rectangle",
    propTransformer: PC,
    activeClassName: "recharts-active-bar"
  }, e));
}
var AC = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? Ge(!1, "minPointSize callback function received a value with type of ".concat(fn(n), ". Currently only numbers are supported.")) : Ge()), r);
  };
}, SC = ["value", "background"], O0;
function dn(e) {
  "@babel/helpers - typeof";
  return dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dn(e);
}
function _C(e, t) {
  if (e == null) return {};
  var r = EC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, co.apply(this, arguments);
}
function rm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rm(Object(r), !0).forEach(function(n) {
      Jt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, P0(n.key), n);
  }
}
function jC(e, t, r) {
  return t && nm(e.prototype, t), r && nm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $C(e, t, r) {
  return t = so(t), MC(e, w0() ? Reflect.construct(t, r || [], so(e).constructor) : t.apply(e, r));
}
function MC(e, t) {
  if (t && (dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IC(e);
}
function IC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (w0 = function() {
    return !!e;
  })();
}
function so(e) {
  return so = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, so(e);
}
function CC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cl(e, t);
}
function Cl(e, t) {
  return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cl(e, t);
}
function Jt(e, t, r) {
  return t = P0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P0(e) {
  var t = kC(e, "string");
  return dn(t) == "symbol" ? t : t + "";
}
function kC(e, t) {
  if (dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ur = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    TC(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = $C(this, t, [].concat(i)), Jt(r, "state", {
      isAnimationFinished: !1
    }), Jt(r, "id", jr("recharts-bar-")), Jt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Jt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return CC(t, e), jC(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, c = a.activeIndex, s = a.activeBar, l = X(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === c, y = p ? s : o, v = Te(Te(Te({}, l), f), {}, {
          isActive: p,
          option: y,
          index: d,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ A.createElement(oe, co({
          className: "recharts-bar-rectangle"
        }, _r(i.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ A.createElement(tm, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, c = i.animationBegin, s = i.animationDuration, l = i.animationEasing, f = i.animationId, d = this.state.prevData;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: c,
        duration: s,
        isActive: u,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var y = p.t, v = a.map(function(h, g) {
          var b = d && d[g];
          if (b) {
            var x = Se(b.x, h.x), w = Se(b.y, h.y), m = Se(b.width, h.width), O = Se(b.height, h.height);
            return Te(Te({}, h), {}, {
              x: x(y),
              y: w(y),
              width: m(y),
              height: O(y)
            });
          }
          if (o === "horizontal") {
            var P = Se(0, h.height), S = P(y);
            return Te(Te({}, h), {}, {
              y: h.y + h.height - S,
              height: S
            });
          }
          var _ = Se(0, h.width), $ = _(y);
          return Te(Te({}, h), {}, {
            width: $
          });
        });
        return /* @__PURE__ */ A.createElement(oe, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !tr(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, c = X(this.props.background, !1);
      return a.map(function(s, l) {
        s.value;
        var f = s.background, d = _C(s, SC);
        if (!f)
          return null;
        var p = Te(Te(Te(Te(Te({}, d), {}, {
          fill: "#eee"
        }, f), c), _r(n.props, s, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ A.createElement(tm, co({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === u
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, c = a.yAxis, s = a.layout, l = a.children, f = Qe(l, Ki);
      if (!f)
        return null;
      var d = s === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(h, g) {
        var b = Array.isArray(h.value) ? h.value[1] : h.value;
        return {
          x: h.x,
          y: h.y,
          value: b,
          errorVal: _e(h, g)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(oe, y, f.map(function(v) {
        return /* @__PURE__ */ A.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: c,
          layout: s,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, c = n.yAxis, s = n.left, l = n.top, f = n.width, d = n.height, p = n.isAnimationActive, y = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var h = this.state.isAnimationFinished, g = ae("recharts-bar", o), b = u && u.allowDataOverflow, x = c && c.allowDataOverflow, w = b || x, m = ne(v) ? this.id : v;
      return /* @__PURE__ */ A.createElement(oe, {
        className: g
      }, b || x ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: b ? s : s - f / 2,
        y: x ? l : l - d / 2,
        width: b ? f : f * 2,
        height: x ? d : d * 2
      }))) : null, /* @__PURE__ */ A.createElement(oe, {
        className: "recharts-bar-rectangles",
        clipPath: w ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(w, m), (!p || h) && et.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(tt);
O0 = ur;
Jt(ur, "displayName", "Bar");
Jt(ur, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Jt(ur, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, c = e.yAxisTicks, s = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = NE(n, r);
  if (!p)
    return null;
  var y = t.layout, v = r.type.defaultProps, h = v !== void 0 ? Te(Te({}, v), r.props) : r.props, g = h.dataKey, b = h.children, x = h.minPointSize, w = y === "horizontal" ? o : a, m = s ? w.scale.domain() : null, O = zE({
    numericAxis: w
  }), P = Qe(b, $o), S = f.map(function(_, $) {
    var E, j, M, C, k, R;
    s ? E = DE(s[l + $], m) : (E = _e(_, g), Array.isArray(E) || (E = [O, E]));
    var L = AC(x, O0.defaultProps.minPointSize)(E[1], $);
    if (y === "horizontal") {
      var F, K = [o.scale(E[0]), o.scale(E[1])], I = K[0], D = K[1];
      j = yv({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: p.offset,
        entry: _,
        index: $
      }), M = (F = D ?? I) !== null && F !== void 0 ? F : void 0, C = p.size;
      var B = I - D;
      if (k = Number.isNaN(B) ? 0 : B, R = {
        x: j,
        y: o.y,
        width: C,
        height: o.height
      }, Math.abs(L) > 0 && Math.abs(k) < Math.abs(L)) {
        var H = ze(k || L) * (Math.abs(L) - Math.abs(k));
        M -= H, k += H;
      }
    } else {
      var V = [a.scale(E[0]), a.scale(E[1])], J = V[0], ee = V[1];
      if (j = J, M = yv({
        axis: o,
        ticks: c,
        bandSize: i,
        offset: p.offset,
        entry: _,
        index: $
      }), C = ee - J, k = p.size, R = {
        x: a.x,
        y: M,
        width: a.width,
        height: k
      }, Math.abs(L) > 0 && Math.abs(C) < Math.abs(L)) {
        var ie = ze(C || L) * (Math.abs(L) - Math.abs(C));
        C += ie;
      }
    }
    return Te(Te(Te({}, _), {}, {
      x: j,
      y: M,
      width: C,
      height: k,
      value: s ? E : E[1],
      payload: _,
      background: R
    }, P && P[$] && P[$].props), {}, {
      tooltipPayload: [Fb(r, _)],
      tooltipPosition: {
        x: j + C / 2,
        y: M + k / 2
      }
    });
  });
  return Te({
    data: S,
    layout: y
  }, d);
});
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function RC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function im(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, A0(n.key), n);
  }
}
function NC(e, t, r) {
  return t && im(e.prototype, t), r && im(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? am(Object(r), !0).forEach(function(n) {
      Ko(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ko(e, t, r) {
  return t = A0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A0(e) {
  var t = DC(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function DC(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kf = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.layout, s = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, d = !!Xe(s, ur);
  return l.reduce(function(p, y) {
    var v = r[y], h = v.orientation, g = v.domain, b = v.padding, x = b === void 0 ? {} : b, w = v.mirror, m = v.reversed, O = "".concat(h).concat(w ? "Mirror" : ""), P, S, _, $, E;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var j = g[1] - g[0], M = 1 / 0, C = v.categoricalDomain.sort();
      if (C.forEach(function(V, J) {
        J > 0 && (M = Math.min((V || 0) - (C[J - 1] || 0), M));
      }), Number.isFinite(M)) {
        var k = M / j, R = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (P = k * R / 2), v.padding === "no-gap") {
          var L = Ue(t.barCategoryGap, k * R), F = k * R / 2;
          P = F - L - (F - L) / R * L;
        }
      }
    }
    i === "xAxis" ? S = [n.left + (x.left || 0) + (P || 0), n.left + n.width - (x.right || 0) - (P || 0)] : i === "yAxis" ? S = c === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (P || 0), n.top + n.height - (x.bottom || 0) - (P || 0)] : S = v.range, m && (S = [S[1], S[0]]);
    var K = Db(v, a, d), I = K.scale, D = K.realScaleType;
    I.domain(g).range(S), Lb(I);
    var B = Bb(I, ft(ft({}, v), {}, {
      realScaleType: D
    }));
    i === "xAxis" ? (E = h === "top" && !w || h === "bottom" && w, _ = n.left, $ = f[O] - E * v.height) : i === "yAxis" && (E = h === "left" && !w || h === "right" && w, _ = f[O] - E * v.width, $ = n.top);
    var H = ft(ft(ft({}, v), B), {}, {
      realScaleType: D,
      x: _,
      y: $,
      scale: I,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return H.bandSize = Ua(H, B), !v.hide && i === "xAxis" ? f[O] += (E ? -1 : 1) * H.height : v.hide || (f[O] += (E ? -1 : 1) * H.width), ft(ft({}, p), {}, Ko({}, y, H));
  }, {});
}, S0 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, LC = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return S0({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, _0 = /* @__PURE__ */ (function() {
  function e(t) {
    RC(this, e), this.scale = t;
  }
  return NC(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
Ko(_0, "EPS", 1e-4);
var Hf = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return ft(ft({}, n), {}, Ko({}, i, _0.create(t[i])));
  }, {});
  return ft(ft({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return dC(i, function(c, s) {
        return r[s].apply(c, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return x0(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function BC(e) {
  return (e % 180 + 180) % 180;
}
var qC = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = BC(i), o = a * Math.PI / 180, u = Math.atan(n / r), c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, Os, om;
function FC() {
  if (om) return Os;
  om = 1;
  var e = Et(), t = wo(), r = nf();
  function n(i) {
    return function(a, o, u) {
      var c = Object(a);
      if (!t(a)) {
        var s = e(o, 3);
        a = r(a), o = function(f) {
          return s(c[f], f, c);
        };
      }
      var l = i(a, o, u);
      return l > -1 ? c[s ? a[l] : l] : void 0;
    };
  }
  return Os = n, Os;
}
var ws, um;
function WC() {
  if (um) return ws;
  um = 1;
  var e = y0();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return ws = t, ws;
}
var Ps, cm;
function zC() {
  if (cm) return Ps;
  cm = 1;
  var e = gg(), t = Et(), r = WC(), n = Math.max;
  function i(a, o, u) {
    var c = a == null ? 0 : a.length;
    if (!c)
      return -1;
    var s = u == null ? 0 : r(u);
    return s < 0 && (s = n(c + s, 0)), e(a, t(o, 3), s);
  }
  return Ps = i, Ps;
}
var As, sm;
function UC() {
  if (sm) return As;
  sm = 1;
  var e = FC(), t = zC(), r = e(t);
  return As = r, As;
}
var KC = UC();
const HC = /* @__PURE__ */ ye(KC);
var GC = Um();
const VC = /* @__PURE__ */ ye(GC);
var YC = VC(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function lo(e) {
  "@babel/helpers - typeof";
  return lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lo(e);
}
var Gf = /* @__PURE__ */ nr(void 0), Vf = /* @__PURE__ */ nr(void 0), E0 = /* @__PURE__ */ nr(void 0), T0 = /* @__PURE__ */ nr({}), j0 = /* @__PURE__ */ nr(void 0), $0 = /* @__PURE__ */ nr(0), M0 = /* @__PURE__ */ nr(0), lm = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, c = t.width, s = t.height, l = YC(a);
  return /* @__PURE__ */ A.createElement(Gf.Provider, {
    value: n
  }, /* @__PURE__ */ A.createElement(Vf.Provider, {
    value: i
  }, /* @__PURE__ */ A.createElement(T0.Provider, {
    value: a
  }, /* @__PURE__ */ A.createElement(E0.Provider, {
    value: l
  }, /* @__PURE__ */ A.createElement(j0.Provider, {
    value: o
  }, /* @__PURE__ */ A.createElement($0.Provider, {
    value: s
  }, /* @__PURE__ */ A.createElement(M0.Provider, {
    value: c
  }, u)))))));
}, XC = function() {
  return _t(j0);
};
function I0(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var C0 = function(t) {
  var r = _t(Gf);
  r == null && (process.env.NODE_ENV !== "production" ? Ge(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ge());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Ge(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(lo(t), "]. ").concat(I0(r))) : Ge()), n;
}, ZC = function() {
  var t = _t(Gf);
  return Xt(t);
}, JC = function() {
  var t = _t(Vf), r = HC(t, function(n) {
    return x0(n.domain, Number.isFinite);
  });
  return r || Xt(t);
}, k0 = function(t) {
  var r = _t(Vf);
  r == null && (process.env.NODE_ENV !== "production" ? Ge(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : Ge());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? Ge(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(lo(t), "]. ").concat(I0(r))) : Ge()), n;
}, QC = function() {
  var t = _t(E0);
  return t;
}, ek = function() {
  return _t(T0);
}, Yf = function() {
  return _t(M0);
}, Xf = function() {
  return _t($0);
};
function pn(e) {
  "@babel/helpers - typeof";
  return pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pn(e);
}
function tk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, N0(n.key), n);
  }
}
function nk(e, t, r) {
  return t && rk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ik(e, t, r) {
  return t = fo(t), ak(e, R0() ? Reflect.construct(t, r || [], fo(e).constructor) : t.apply(e, r));
}
function ak(e, t) {
  if (t && (pn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ok(e);
}
function ok(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function R0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (R0 = function() {
    return !!e;
  })();
}
function fo(e) {
  return fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fo(e);
}
function uk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kl(e, t);
}
function kl(e, t) {
  return kl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kl(e, t);
}
function fm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fm(Object(r), !0).forEach(function(n) {
      Zf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zf(e, t, r) {
  return t = N0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N0(e) {
  var t = ck(e, "string");
  return pn(t) == "symbol" ? t : t + "";
}
function ck(e, t) {
  if (pn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function sk(e, t) {
  return pk(e) || dk(e, t) || fk(e, t) || lk();
}
function lk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fk(e, t) {
  if (e) {
    if (typeof e == "string") return pm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pm(e, t);
  }
}
function pm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function pk(e) {
  if (Array.isArray(e)) return e;
}
function Rl() {
  return Rl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rl.apply(this, arguments);
}
var hk = function(t, r) {
  var n;
  return /* @__PURE__ */ A.isValidElement(t) ? n = /* @__PURE__ */ A.cloneElement(t, r) : Q(t) ? n = t(r) : n = /* @__PURE__ */ A.createElement("line", Rl({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, vk = function(t, r, n, i, a, o, u, c, s) {
  var l = a.x, f = a.y, d = a.width, p = a.height;
  if (n) {
    var y = s.y, v = t.y.apply(y, {
      position: o
    });
    if (Pt(s, "discard") && !t.y.isInRange(v))
      return null;
    var h = [{
      x: l + d,
      y: v
    }, {
      x: l,
      y: v
    }];
    return c === "left" ? h.reverse() : h;
  }
  if (r) {
    var g = s.x, b = t.x.apply(g, {
      position: o
    });
    if (Pt(s, "discard") && !t.x.isInRange(b))
      return null;
    var x = [{
      x: b,
      y: f + p
    }, {
      x: b,
      y: f
    }];
    return u === "top" ? x.reverse() : x;
  }
  if (i) {
    var w = s.segment, m = w.map(function(O) {
      return t.apply(O, {
        position: o
      });
    });
    return Pt(s, "discard") && cC(m, function(O) {
      return !t.isInRange(O);
    }) ? null : m;
  }
  return null;
};
function yk(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, c = e.alwaysShow, s = XC(), l = C0(i), f = k0(a), d = QC();
  if (!s || !d)
    return null;
  vt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Hf({
    x: l.scale,
    y: f.scale
  }), y = Ce(t), v = Ce(r), h = n && n.length === 2, g = vk(p, y, v, h, d, e.position, l.orientation, f.orientation, e);
  if (!g)
    return null;
  var b = sk(g, 2), x = b[0], w = x.x, m = x.y, O = b[1], P = O.x, S = O.y, _ = Pt(e, "hidden") ? "url(#".concat(s, ")") : void 0, $ = dm(dm({
    clipPath: _
  }, X(e, !0)), {}, {
    x1: w,
    y1: m,
    x2: P,
    y2: S
  });
  return /* @__PURE__ */ A.createElement(oe, {
    className: ae("recharts-reference-line", u)
  }, hk(o, $), Ie.renderCallByParent(e, LC({
    x1: w,
    y1: m,
    x2: P,
    y2: S
  })));
}
var Jf = /* @__PURE__ */ (function(e) {
  function t() {
    return tk(this, t), ik(this, t, arguments);
  }
  return uk(t, e), nk(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(yk, this.props);
    }
  }]);
})(A.Component);
Zf(Jf, "displayName", "ReferenceLine");
Zf(Jf, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Nl() {
  return Nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nl.apply(this, arguments);
}
function hn(e) {
  "@babel/helpers - typeof";
  return hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hn(e);
}
function hm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hm(Object(r), !0).forEach(function(n) {
      Ho(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gk(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, L0(n.key), n);
  }
}
function bk(e, t, r) {
  return t && gk(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xk(e, t, r) {
  return t = po(t), Ok(e, D0() ? Reflect.construct(t, r || [], po(e).constructor) : t.apply(e, r));
}
function Ok(e, t) {
  if (t && (hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wk(e);
}
function wk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function D0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (D0 = function() {
    return !!e;
  })();
}
function po(e) {
  return po = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, po(e);
}
function Pk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dl(e, t);
}
function Dl(e, t) {
  return Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dl(e, t);
}
function Ho(e, t, r) {
  return t = L0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function L0(e) {
  var t = Ak(e, "string");
  return hn(t) == "symbol" ? t : t + "";
}
function Ak(e, t) {
  if (hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Sk = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Hf({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Pt(t, "discard") && !o.isInRange(u) ? null : u;
}, Go = /* @__PURE__ */ (function(e) {
  function t() {
    return mk(this, t), xk(this, t, arguments);
  }
  return Pk(t, e), bk(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, c = n.clipPathId, s = Ce(i), l = Ce(a);
      if (vt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !l)
        return null;
      var f = Sk(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, v = y.shape, h = y.className, g = Pt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, b = vm(vm({
        clipPath: g
      }, X(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ A.createElement(oe, {
        className: ae("recharts-reference-dot", h)
      }, t.renderDot(v, b), Ie.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(A.Component);
Ho(Go, "displayName", "ReferenceDot");
Ho(Go, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Ho(Go, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : Q(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Mn, Nl({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Ll() {
  return Ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ll.apply(this, arguments);
}
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vn(e);
}
function ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), !0).forEach(function(n) {
      Vo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _k(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ek(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, q0(n.key), n);
  }
}
function Tk(e, t, r) {
  return t && Ek(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jk(e, t, r) {
  return t = ho(t), $k(e, B0() ? Reflect.construct(t, r || [], ho(e).constructor) : t.apply(e, r));
}
function $k(e, t) {
  if (t && (vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Mk(e);
}
function Mk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function B0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (B0 = function() {
    return !!e;
  })();
}
function ho(e) {
  return ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ho(e);
}
function Ik(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bl(e, t);
}
function Bl(e, t) {
  return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bl(e, t);
}
function Vo(e, t, r) {
  return t = q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function q0(e) {
  var t = Ck(e, "string");
  return vn(t) == "symbol" ? t : t + "";
}
function Ck(e, t) {
  if (vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var kk = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, c = a.y1, s = a.y2, l = a.xAxis, f = a.yAxis;
  if (!l || !f) return null;
  var d = Hf({
    x: l.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(s, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Pt(a, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : S0(p, y);
}, Yo = /* @__PURE__ */ (function(e) {
  function t() {
    return _k(this, t), jk(this, t, arguments);
  }
  return Ik(t, e), Tk(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, c = n.className, s = n.alwaysShow, l = n.clipPathId;
      vt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ce(i), d = Ce(a), p = Ce(o), y = Ce(u), v = this.props.shape;
      if (!f && !d && !p && !y && !v)
        return null;
      var h = kk(f, d, p, y, this.props);
      if (!h && !v)
        return null;
      var g = Pt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ A.createElement(oe, {
        className: ae("recharts-reference-area", c)
      }, t.renderRect(v, mm(mm({
        clipPath: g
      }, X(this.props, !0)), h)), Ie.renderCallByParent(this.props, h));
    }
  }]);
})(A.Component);
Vo(Yo, "displayName", "ReferenceArea");
Vo(Yo, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
Vo(Yo, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ A.isValidElement(e) ? r = /* @__PURE__ */ A.cloneElement(e, t) : Q(e) ? r = e(t) : r = /* @__PURE__ */ A.createElement(Uf, Ll({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function F0(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function Rk(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return qC(n, r);
}
function Nk(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function vo(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function Dk(e, t) {
  return F0(e, t + 1);
}
function Lk(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, c = 0, s = 1, l = o, f = function() {
    var y = n?.[c];
    if (y === void 0)
      return {
        v: F0(n, s)
      };
    var v = c, h, g = function() {
      return h === void 0 && (h = r(y, v)), h;
    }, b = y.coordinate, x = c === 0 || vo(e, b, g, l, u);
    x || (c = 0, l = o, s += 1), x && (l = b + e * (g() / 2 + i), c += s);
  }, d; s <= a.length; )
    if (d = f(), d) return d.v;
  return [];
}
function ki(e) {
  "@babel/helpers - typeof";
  return ki = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ki(e);
}
function gm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gm(Object(r), !0).forEach(function(n) {
      Bk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Bk(e, t, r) {
  return t = qk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qk(e) {
  var t = Fk(e, "string");
  return ki(t) == "symbol" ? t : t + "";
}
function Fk(e, t) {
  if (ki(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ki(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wk(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, c = t.end, s = function(d) {
    var p = a[d], y, v = function() {
      return y === void 0 && (y = r(p, d)), y;
    };
    if (d === o - 1) {
      var h = e * (p.coordinate + e * v() / 2 - c);
      a[d] = p = Be(Be({}, p), {}, {
        tickCoord: h > 0 ? p.coordinate - h * e : p.coordinate
      });
    } else
      a[d] = p = Be(Be({}, p), {}, {
        tickCoord: p.coordinate
      });
    var g = vo(e, p.tickCoord, v, u, c);
    g && (c = p.tickCoord - e * (v() / 2 + i), a[d] = Be(Be({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    s(l);
  return a;
}
function zk(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, c = t.start, s = t.end;
  if (a) {
    var l = n[u - 1], f = r(l, u - 1), d = e * (l.coordinate + e * f / 2 - s);
    o[u - 1] = l = Be(Be({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = vo(e, l.tickCoord, function() {
      return f;
    }, c, s);
    p && (s = l.tickCoord - e * (f / 2 + i), o[u - 1] = Be(Be({}, l), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? u - 1 : u, v = function(b) {
    var x = o[b], w, m = function() {
      return w === void 0 && (w = r(x, b)), w;
    };
    if (b === 0) {
      var O = e * (x.coordinate - e * m() / 2 - c);
      o[b] = x = Be(Be({}, x), {}, {
        tickCoord: O < 0 ? x.coordinate - O * e : x.coordinate
      });
    } else
      o[b] = x = Be(Be({}, x), {}, {
        tickCoord: x.coordinate
      });
    var P = vo(e, x.tickCoord, m, c, s);
    P && (c = x.tickCoord + e * (m() / 2 + i), o[b] = Be(Be({}, x), {}, {
      isShow: !0
    }));
  }, h = 0; h < y; h++)
    v(h);
  return o;
}
function Qf(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, u = e.orientation, c = e.interval, s = e.tickFormatter, l = e.unit, f = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (W(c) || Wt.isSsr)
    return Dk(i, typeof c == "number" && W(c) ? c : 0);
  var d = [], p = u === "top" || u === "bottom" ? "width" : "height", y = l && p === "width" ? Vn(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, v = function(x, w) {
    var m = Q(s) ? s(x.value, w) : x.value;
    return p === "width" ? Rk(Vn(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : Vn(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, h = i.length >= 2 ? ze(i[1].coordinate - i[0].coordinate) : 1, g = Nk(a, h, p);
  return c === "equidistantPreserveStart" ? Lk(h, g, v, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? d = zk(h, g, v, i, o, c === "preserveStartEnd") : d = Wk(h, g, v, i, o), d.filter(function(b) {
    return b.isShow;
  }));
}
var Uk = ["viewBox"], Kk = ["viewBox"], Hk = ["ticks"];
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yn(e);
}
function zr() {
  return zr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zr.apply(this, arguments);
}
function bm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bm(Object(r), !0).forEach(function(n) {
      ed(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ss(e, t) {
  if (e == null) return {};
  var r = Gk(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Gk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, z0(n.key), n);
  }
}
function Yk(e, t, r) {
  return t && xm(e.prototype, t), r && xm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Xk(e, t, r) {
  return t = yo(t), Zk(e, W0() ? Reflect.construct(t, r || [], yo(e).constructor) : t.apply(e, r));
}
function Zk(e, t) {
  if (t && (yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Jk(e);
}
function Jk(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (W0 = function() {
    return !!e;
  })();
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yo(e);
}
function Qk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ql(e, t);
}
function ql(e, t) {
  return ql = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ql(e, t);
}
function ed(e, t, r) {
  return t = z0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z0(e) {
  var t = eR(e, "string");
  return yn(t) == "symbol" ? t : t + "";
}
function eR(e, t) {
  if (yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var kn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return Vk(this, t), n = Xk(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return Qk(t, e), Yk(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = Ss(n, Uk), u = this.props, c = u.viewBox, s = Ss(u, Kk);
      return !Kr(a, c) || !Kr(o, s) || !Kr(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, u = i.width, c = i.height, s = i.orientation, l = i.tickSize, f = i.mirror, d = i.tickMargin, p, y, v, h, g, b, x = f ? -1 : 1, w = n.tickSize || l, m = W(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (s) {
        case "top":
          p = y = n.coordinate, h = o + +!f * c, v = h - x * w, b = v - x * d, g = m;
          break;
        case "left":
          v = h = n.coordinate, y = a + +!f * u, p = y - x * w, g = p - x * d, b = m;
          break;
        case "right":
          v = h = n.coordinate, y = a + +f * u, p = y + x * w, g = p + x * d, b = m;
          break;
        default:
          p = y = n.coordinate, h = o + +f * c, v = h + x * w, b = v + x * d, g = m;
          break;
      }
      return {
        line: {
          x1: p,
          y1: v,
          x2: y,
          y2: h
        },
        tick: {
          x: g,
          y: b
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.orientation, s = n.mirror, l = n.axisLine, f = Fe(Fe(Fe({}, X(this.props, !1)), X(l, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var d = +(c === "top" && !s || c === "bottom" && s);
        f = Fe(Fe({}, f), {}, {
          x1: i,
          y1: a + d * u,
          x2: i + o,
          y2: a + d * u
        });
      } else {
        var p = +(c === "left" && !s || c === "right" && s);
        f = Fe(Fe({}, f), {}, {
          x1: i + p * o,
          y1: a,
          x2: i + p * o,
          y2: a + u
        });
      }
      return /* @__PURE__ */ A.createElement("line", zr({}, f, {
        className: ae("recharts-cartesian-axis-line", Je(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, u = this.props, c = u.tickLine, s = u.stroke, l = u.tick, f = u.tickFormatter, d = u.unit, p = Qf(Fe(Fe({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), h = X(this.props, !1), g = X(l, !1), b = Fe(Fe({}, h), {}, {
          fill: "none"
        }, X(c, !1)), x = p.map(function(w, m) {
          var O = o.getTickLineCoord(w), P = O.line, S = O.tick, _ = Fe(Fe(Fe(Fe({
            textAnchor: y,
            verticalAnchor: v
          }, h), {}, {
            stroke: "none",
            fill: s
          }, g), S), {}, {
            index: m,
            payload: w,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ A.createElement(oe, zr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(w.value, "-").concat(w.coordinate, "-").concat(w.tickCoord)
          }, _r(o.props, w, m)), c && /* @__PURE__ */ A.createElement("line", zr({}, b, P, {
            className: ae("recharts-cartesian-axis-tick-line", Je(c, "className"))
          })), l && t.renderTickItem(l, _, "".concat(Q(f) ? f(w.value, m) : w.value).concat(d || "")));
        });
        return /* @__PURE__ */ A.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, x);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, c = i.ticksGenerator, s = i.className, l = i.hide;
      if (l)
        return null;
      var f = this.props, d = f.ticks, p = Ss(f, Hk), y = d;
      return Q(c) && (y = d && d.length > 0 ? c(this.props) : c(p)), o <= 0 || u <= 0 || !y || !y.length ? null : /* @__PURE__ */ A.createElement(oe, {
        className: ae("recharts-cartesian-axis", s),
        ref: function(h) {
          n.layerReference = h;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ie.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ A.isValidElement(n) ? o = /* @__PURE__ */ A.cloneElement(n, i) : Q(n) ? o = n(i) : o = /* @__PURE__ */ A.createElement(rr, zr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
})(Lm);
ed(kn, "displayName", "CartesianAxis");
ed(kn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var tR = ["x1", "y1", "x2", "y2", "key"], rR = ["offset"];
function Tr(e) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e);
}
function Om(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Om(Object(r), !0).forEach(function(n) {
      nR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Om(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nR(e, t, r) {
  return t = iR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iR(e) {
  var t = aR(e, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function aR(e, t) {
  if (Tr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, br.apply(this, arguments);
}
function wm(e, t) {
  if (e == null) return {};
  var r = oR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var uR = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, u = t.height, c = t.ry;
  return /* @__PURE__ */ A.createElement("rect", {
    x: i,
    y: a,
    ry: c,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function U0(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (Q(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, u = t.key, c = wm(t, tR), s = X(c, !1);
    s.offset;
    var l = wm(s, rR);
    r = /* @__PURE__ */ A.createElement("line", br({}, l, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function cR(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, c) {
    var s = qe(qe({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(c),
      index: c
    });
    return U0(i, s);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function sR(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, c) {
    var s = qe(qe({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(c),
      index: c
    });
    return U0(i, s);
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function lR(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, u = e.horizontalPoints, c = e.horizontal, s = c === void 0 ? !0 : c;
  if (!s || !t || !t.length)
    return null;
  var l = u.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, p) {
    return d - p;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var y = !l[p + 1], v = y ? i + o - d : l[p + 1] - d;
    if (v <= 0)
      return null;
    var h = p % t.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[h],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function fR(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, u = e.width, c = e.height, s = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = s.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, p) {
    return d - p;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var y = !l[p + 1], v = y ? a + u - d : l[p + 1] - d;
    if (v <= 0)
      return null;
    var h = p % n.length;
    return /* @__PURE__ */ A.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: v,
      height: c,
      stroke: "none",
      fill: n[h],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var dR = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return Nb(Qf(qe(qe(qe({}, kn.defaultProps), n), {}, {
    ticks: Rt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, pR = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return Nb(Qf(qe(qe(qe({}, kn.defaultProps), n), {}, {
    ticks: Rt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Lr = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Gi(e) {
  var t, r, n, i, a, o, u = Yf(), c = Xf(), s = ek(), l = qe(qe({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Lr.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Lr.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Lr.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Lr.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Lr.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Lr.verticalFill,
    x: W(e.x) ? e.x : s.left,
    y: W(e.y) ? e.y : s.top,
    width: W(e.width) ? e.width : s.width,
    height: W(e.height) ? e.height : s.height
  }), f = l.x, d = l.y, p = l.width, y = l.height, v = l.syncWithTicks, h = l.horizontalValues, g = l.verticalValues, b = ZC(), x = JC();
  if (!W(p) || p <= 0 || !W(y) || y <= 0 || !W(f) || f !== +f || !W(d) || d !== +d)
    return null;
  var w = l.verticalCoordinatesGenerator || dR, m = l.horizontalCoordinatesGenerator || pR, O = l.horizontalPoints, P = l.verticalPoints;
  if ((!O || !O.length) && Q(m)) {
    var S = h && h.length, _ = m({
      yAxis: x ? qe(qe({}, x), {}, {
        ticks: S ? h : x.ticks
      }) : void 0,
      width: u,
      height: c,
      offset: s
    }, S ? !0 : v);
    vt(Array.isArray(_), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Tr(_), "]")), Array.isArray(_) && (O = _);
  }
  if ((!P || !P.length) && Q(w)) {
    var $ = g && g.length, E = w({
      xAxis: b ? qe(qe({}, b), {}, {
        ticks: $ ? g : b.ticks
      }) : void 0,
      width: u,
      height: c,
      offset: s
    }, $ ? !0 : v);
    vt(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Tr(E), "]")), Array.isArray(E) && (P = E);
  }
  return /* @__PURE__ */ A.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ A.createElement(uR, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ A.createElement(cR, br({}, l, {
    offset: s,
    horizontalPoints: O,
    xAxis: b,
    yAxis: x
  })), /* @__PURE__ */ A.createElement(sR, br({}, l, {
    offset: s,
    verticalPoints: P,
    xAxis: b,
    yAxis: x
  })), /* @__PURE__ */ A.createElement(lR, br({}, l, {
    horizontalPoints: O
  })), /* @__PURE__ */ A.createElement(fR, br({}, l, {
    verticalPoints: P
  })));
}
Gi.displayName = "CartesianGrid";
var hR = ["type", "layout", "connectNulls", "ref"], vR = ["key"];
function mn(e) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e);
}
function Pm(e, t) {
  if (e == null) return {};
  var r = yR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function yR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function Am(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Am(Object(r), !0).forEach(function(n) {
      dt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Am(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Br(e) {
  return xR(e) || bR(e) || gR(e) || mR();
}
function mR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function gR(e, t) {
  if (e) {
    if (typeof e == "string") return Fl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fl(e, t);
  }
}
function bR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xR(e) {
  if (Array.isArray(e)) return Fl(e);
}
function Fl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, H0(n.key), n);
  }
}
function wR(e, t, r) {
  return t && Sm(e.prototype, t), r && Sm(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PR(e, t, r) {
  return t = mo(t), AR(e, K0() ? Reflect.construct(t, r || [], mo(e).constructor) : t.apply(e, r));
}
function AR(e, t) {
  if (t && (mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return SR(e);
}
function SR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function K0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (K0 = function() {
    return !!e;
  })();
}
function mo(e) {
  return mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mo(e);
}
function _R(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wl(e, t);
}
function Wl(e, t) {
  return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wl(e, t);
}
function dt(e, t, r) {
  return t = H0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H0(e) {
  var t = ER(e, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function ER(e, t) {
  if (mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    OR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = PR(this, t, [].concat(i)), dt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), dt(r, "generateSimpleStrokeDasharray", function(o, u) {
      return "".concat(u, "px ").concat(o - u, "px");
    }), dt(r, "getStrokeDasharray", function(o, u, c) {
      var s = c.reduce(function(g, b) {
        return g + b;
      });
      if (!s)
        return r.generateSimpleStrokeDasharray(u, o);
      for (var l = Math.floor(o / s), f = o % s, d = u - o, p = [], y = 0, v = 0; y < c.length; v += c[y], ++y)
        if (v + c[y] > f) {
          p = [].concat(Br(c.slice(0, y)), [f - v]);
          break;
        }
      var h = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(Br(t.repeat(c, l)), Br(p), h).map(function(g) {
        return "".concat(g, "px");
      }).join(", ");
    }), dt(r, "id", jr("recharts-line-")), dt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), dt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), dt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return _R(t, e), wR(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.points, u = a.xAxis, c = a.yAxis, s = a.layout, l = a.children, f = Qe(l, Ki);
      if (!f)
        return null;
      var d = function(v, h) {
        return {
          x: v.x,
          y: v.y,
          value: v.value,
          errorVal: _e(v.payload, h)
        };
      }, p = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ A.createElement(oe, p, f.map(function(y) {
        return /* @__PURE__ */ A.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: c,
          layout: s,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var u = this.props, c = u.dot, s = u.points, l = u.dataKey, f = X(this.props, !1), d = X(c, !0), p = s.map(function(v, h) {
        var g = Ve(Ve(Ve({
          key: "dot-".concat(h),
          r: 3
        }, f), d), {}, {
          value: v.value,
          dataKey: l,
          cx: v.x,
          cy: v.y,
          index: h,
          payload: v.payload
        });
        return t.renderDotItem(c, g);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(oe, ei({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, o) {
      var u = this.props, c = u.type, s = u.layout, l = u.connectNulls;
      u.ref;
      var f = Pm(u, hR), d = Ve(Ve(Ve({}, X(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, o), {}, {
        type: c,
        layout: s,
        connectNulls: l
      });
      return /* @__PURE__ */ A.createElement(Sr, ei({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, u = o.points, c = o.strokeDasharray, s = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, y = o.animateNewValues, v = o.width, h = o.height, g = this.state, b = g.prevPoints, x = g.totalLength;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: l,
        duration: f,
        isActive: s,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(w) {
        var m = w.t;
        if (b) {
          var O = b.length / u.length, P = u.map(function(j, M) {
            var C = Math.floor(M * O);
            if (b[C]) {
              var k = b[C], R = Se(k.x, j.x), L = Se(k.y, j.y);
              return Ve(Ve({}, j), {}, {
                x: R(m),
                y: L(m)
              });
            }
            if (y) {
              var F = Se(v * 2, j.x), K = Se(h / 2, j.y);
              return Ve(Ve({}, j), {}, {
                x: F(m),
                y: K(m)
              });
            }
            return Ve(Ve({}, j), {}, {
              x: j.x,
              y: j.y
            });
          });
          return a.renderCurveStatically(P, n, i);
        }
        var S = Se(0, x), _ = S(m), $;
        if (c) {
          var E = "".concat(c).split(/[,\s]+/gim).map(function(j) {
            return parseFloat(j);
          });
          $ = a.getStrokeDasharray(_, x, E);
        } else
          $ = a.generateSimpleStrokeDasharray(x, _);
        return a.renderCurveStatically(u, n, i, {
          strokeDasharray: $
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, o = a.points, u = a.isAnimationActive, c = this.state, s = c.prevPoints, l = c.totalLength;
      return u && o && o.length && (!s && l > 0 || !tr(s, o)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(o, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, u = i.points, c = i.className, s = i.xAxis, l = i.yAxis, f = i.top, d = i.left, p = i.width, y = i.height, v = i.isAnimationActive, h = i.id;
      if (a || !u || !u.length)
        return null;
      var g = this.state.isAnimationFinished, b = u.length === 1, x = ae("recharts-line", c), w = s && s.allowDataOverflow, m = l && l.allowDataOverflow, O = w || m, P = ne(h) ? this.id : h, S = (n = X(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, _ = S.r, $ = _ === void 0 ? 3 : _, E = S.strokeWidth, j = E === void 0 ? 2 : E, M = Ym(o) ? o : {}, C = M.clipDot, k = C === void 0 ? !0 : C, R = $ * 2 + j;
      return /* @__PURE__ */ A.createElement(oe, {
        className: x
      }, w || m ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(P)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? d : d - p / 2,
        y: m ? f : f - y / 2,
        width: w ? p : p * 2,
        height: m ? y : y * 2
      })), !k && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(P)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: d - R / 2,
        y: f - R / 2,
        width: p + R,
        height: y + R
      }))) : null, !b && this.renderCurve(O, P), this.renderErrorBar(O, P), (b || o) && this.renderDots(O, k, P), (!v || g) && et.renderCallByParent(this.props, u));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(Br(n), [0]) : n, o = [], u = 0; u < i; ++u)
        o = [].concat(Br(o), Br(a));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ A.isValidElement(n))
        a = /* @__PURE__ */ A.cloneElement(n, i);
      else if (Q(n))
        a = n(i);
      else {
        var o = i.key, u = Pm(i, vR), c = ae("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ A.createElement(Mn, ei({
          key: o
        }, u, {
          className: c
        }));
      }
      return a;
    }
  }]);
})(tt);
dt(Vi, "displayName", "Line");
dt(Vi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Wt.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
dt(Vi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, o = e.dataKey, u = e.bandSize, c = e.displayedData, s = e.offset, l = t.layout, f = c.map(function(d, p) {
    var y = _e(d, o);
    return l === "horizontal" ? {
      x: za({
        axis: r,
        ticks: i,
        bandSize: u,
        entry: d,
        index: p
      }),
      y: ne(y) ? null : n.scale(y),
      value: y,
      payload: d
    } : {
      x: ne(y) ? null : r.scale(y),
      y: za({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: d,
        index: p
      }),
      value: y,
      payload: d
    };
  });
  return Ve({
    points: f,
    layout: l
  }, s);
});
var TR = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], jR = ["key"], G0;
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function V0(e, t) {
  if (e == null) return {};
  var r = $R(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $R(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      Ot(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Em(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X0(n.key), n);
  }
}
function IR(e, t, r) {
  return t && Em(e.prototype, t), r && Em(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function CR(e, t, r) {
  return t = go(t), kR(e, Y0() ? Reflect.construct(t, r || [], go(e).constructor) : t.apply(e, r));
}
function kR(e, t) {
  if (t && (gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return RR(e);
}
function RR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Y0 = function() {
    return !!e;
  })();
}
function go(e) {
  return go = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, go(e);
}
function NR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zl(e, t);
}
function zl(e, t) {
  return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zl(e, t);
}
function Ot(e, t, r) {
  return t = X0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X0(e) {
  var t = DR(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function DR(e, t) {
  if (gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var cr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    MR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = CR(this, t, [].concat(i)), Ot(r, "state", {
      isAnimationFinished: !0
    }), Ot(r, "id", jr("recharts-area-")), Ot(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Q(o) && o();
    }), Ot(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Q(o) && o();
    }), r;
  }
  return NR(t, e), IR(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var o = this.props.isAnimationActive, u = this.state.isAnimationFinished;
      if (o && !u)
        return null;
      var c = this.props, s = c.dot, l = c.points, f = c.dataKey, d = X(this.props, !1), p = X(s, !0), y = l.map(function(h, g) {
        var b = Vt(Vt(Vt({
          key: "dot-".concat(g),
          r: 3
        }, d), p), {}, {
          index: g,
          cx: h.x,
          cy: h.y,
          dataKey: f,
          value: h.value,
          payload: h.payload,
          points: l
        });
        return t.renderDotItem(s, b);
      }), v = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ A.createElement(oe, xr({
        className: "recharts-area-dots"
      }, v), y);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, o = i.points, u = i.strokeWidth, c = o[0].x, s = o[o.length - 1].x, l = n * Math.abs(c - s), f = Zt(o.map(function(d) {
        return d.y || 0;
      }));
      return W(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(Zt(a.map(function(d) {
        return d.y || 0;
      })), f)), W(f) ? /* @__PURE__ */ A.createElement("rect", {
        x: c < s ? c : c - l,
        y: 0,
        width: l,
        height: Math.floor(f + (u ? parseInt("".concat(u), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, o = i.points, u = i.strokeWidth, c = o[0].y, s = o[o.length - 1].y, l = n * Math.abs(c - s), f = Zt(o.map(function(d) {
        return d.x || 0;
      }));
      return W(a) && typeof a == "number" ? f = Math.max(a, f) : a && Array.isArray(a) && a.length && (f = Math.max(Zt(a.map(function(d) {
        return d.x || 0;
      })), f)), W(f) ? /* @__PURE__ */ A.createElement("rect", {
        x: 0,
        y: c < s ? c : c - l,
        width: f + (u ? parseInt("".concat(u), 10) : 1),
        height: Math.floor(l)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var i = this.props.layout;
      return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, i, a, o) {
      var u = this.props, c = u.layout, s = u.type, l = u.stroke, f = u.connectNulls, d = u.isRange;
      u.ref;
      var p = V0(u, TR);
      return /* @__PURE__ */ A.createElement(oe, {
        clipPath: a ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ A.createElement(Sr, xr({}, X(p, !0), {
        points: n,
        connectNulls: f,
        type: s,
        baseLine: i,
        layout: c,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ A.createElement(Sr, xr({}, X(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: s,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ A.createElement(Sr, xr({}, X(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: s,
        connectNulls: f,
        fill: "none",
        points: i
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, i) {
      var a = this, o = this.props, u = o.points, c = o.baseLine, s = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, y = this.state, v = y.prevPoints, h = y.prevBaseLine;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: l,
        duration: f,
        isActive: s,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(g) {
        var b = g.t;
        if (v) {
          var x = v.length / u.length, w = u.map(function(S, _) {
            var $ = Math.floor(_ * x);
            if (v[$]) {
              var E = v[$], j = Se(E.x, S.x), M = Se(E.y, S.y);
              return Vt(Vt({}, S), {}, {
                x: j(b),
                y: M(b)
              });
            }
            return S;
          }), m;
          if (W(c) && typeof c == "number") {
            var O = Se(h, c);
            m = O(b);
          } else if (ne(c) || _n(c)) {
            var P = Se(h, 0);
            m = P(b);
          } else
            m = c.map(function(S, _) {
              var $ = Math.floor(_ * x);
              if (h[$]) {
                var E = h[$], j = Se(E.x, S.x), M = Se(E.y, S.y);
                return Vt(Vt({}, S), {}, {
                  x: j(b),
                  y: M(b)
                });
              }
              return S;
            });
          return a.renderAreaStatically(w, m, n, i);
        }
        return /* @__PURE__ */ A.createElement(oe, null, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(b))), /* @__PURE__ */ A.createElement(oe, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(u, c, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, o = a.points, u = a.baseLine, c = a.isAnimationActive, s = this.state, l = s.prevPoints, f = s.prevBaseLine, d = s.totalLength;
      return c && o && o.length && (!l && d > 0 || !tr(l, o) || !tr(f, u)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(o, u, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, o = i.dot, u = i.points, c = i.className, s = i.top, l = i.left, f = i.xAxis, d = i.yAxis, p = i.width, y = i.height, v = i.isAnimationActive, h = i.id;
      if (a || !u || !u.length)
        return null;
      var g = this.state.isAnimationFinished, b = u.length === 1, x = ae("recharts-area", c), w = f && f.allowDataOverflow, m = d && d.allowDataOverflow, O = w || m, P = ne(h) ? this.id : h, S = (n = X(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, _ = S.r, $ = _ === void 0 ? 3 : _, E = S.strokeWidth, j = E === void 0 ? 2 : E, M = Ym(o) ? o : {}, C = M.clipDot, k = C === void 0 ? !0 : C, R = $ * 2 + j;
      return /* @__PURE__ */ A.createElement(oe, {
        className: x
      }, w || m ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(P)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: w ? l : l - p / 2,
        y: m ? s : s - y / 2,
        width: w ? p : p * 2,
        height: m ? y : y * 2
      })), !k && /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-dots-".concat(P)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: l - R / 2,
        y: s - R / 2,
        width: p + R,
        height: y + R
      }))) : null, b ? null : this.renderArea(O, P), (o || b) && this.renderDots(O, k, P), (!v || g) && et.renderCallByParent(this.props, u));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: i.curPoints,
        prevBaseLine: i.curBaseLine
      } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]);
})(tt);
G0 = cr;
Ot(cr, "displayName", "Area");
Ot(cr, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Wt.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Ot(cr, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, o = t.props.baseValue, u = o ?? a;
  if (W(u) && typeof u == "number")
    return u;
  var c = i === "horizontal" ? n : r, s = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(s[0], s[1]), f = Math.min(s[0], s[1]);
    return u === "dataMin" ? f : u === "dataMax" || l < 0 ? l : Math.max(Math.min(s[0], s[1]), 0);
  }
  return u === "dataMin" ? s[0] : u === "dataMax" ? s[1] : s[0];
});
Ot(cr, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, o = e.yAxisTicks, u = e.bandSize, c = e.dataKey, s = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = s && s.length, v = G0.getBaseValue(t, r, n, i), h = p === "horizontal", g = !1, b = f.map(function(w, m) {
    var O;
    y ? O = s[l + m] : (O = _e(w, c), Array.isArray(O) ? g = !0 : O = [v, O]);
    var P = O[1] == null || y && _e(w, c) == null;
    return h ? {
      x: za({
        axis: n,
        ticks: a,
        bandSize: u,
        entry: w,
        index: m
      }),
      y: P ? null : i.scale(O[1]),
      value: O,
      payload: w
    } : {
      x: P ? null : n.scale(O[1]),
      y: za({
        axis: i,
        ticks: o,
        bandSize: u,
        entry: w,
        index: m
      }),
      value: O,
      payload: w
    };
  }), x;
  return y || g ? x = b.map(function(w) {
    var m = Array.isArray(w.value) ? w.value[0] : null;
    return h ? {
      x: w.x,
      y: m != null && w.y != null ? i.scale(m) : null
    } : {
      x: m != null ? n.scale(m) : null,
      y: w.y
    };
  }) : x = h ? i.scale(v) : n.scale(v), Vt({
    points: b,
    baseLine: x,
    layout: p,
    isRange: g
  }, d);
});
Ot(cr, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ A.isValidElement(e))
    r = /* @__PURE__ */ A.cloneElement(e, t);
  else if (Q(e))
    r = e(t);
  else {
    var n = ae("recharts-area-dot", typeof e != "boolean" ? e.className : ""), i = t.key, a = V0(t, jR);
    r = /* @__PURE__ */ A.createElement(Mn, xr({}, a, {
      key: i,
      className: n
    }));
  }
  return r;
});
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
function LR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function BR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Q0(n.key), n);
  }
}
function qR(e, t, r) {
  return t && BR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function FR(e, t, r) {
  return t = bo(t), WR(e, Z0() ? Reflect.construct(t, r || [], bo(e).constructor) : t.apply(e, r));
}
function WR(e, t) {
  if (t && (bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zR(e);
}
function zR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Z0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Z0 = function() {
    return !!e;
  })();
}
function bo(e) {
  return bo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bo(e);
}
function UR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ul(e, t);
}
function Ul(e, t) {
  return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ul(e, t);
}
function J0(e, t, r) {
  return t = Q0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q0(e) {
  var t = KR(e, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function KR(e, t) {
  if (bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Kl() {
  return Kl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kl.apply(this, arguments);
}
function HR(e) {
  var t = e.xAxisId, r = Yf(), n = Xf(), i = C0(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ A.createElement(kn, Kl({}, i, {
      className: ae("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Rt(o, !0);
      }
    }))
  );
}
var Kt = /* @__PURE__ */ (function(e) {
  function t() {
    return LR(this, t), FR(this, t, arguments);
  }
  return UR(t, e), qR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(HR, this.props);
    }
  }]);
})(A.Component);
J0(Kt, "displayName", "XAxis");
J0(Kt, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function GR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rx(n.key), n);
  }
}
function YR(e, t, r) {
  return t && VR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XR(e, t, r) {
  return t = xo(t), ZR(e, ex() ? Reflect.construct(t, r || [], xo(e).constructor) : t.apply(e, r));
}
function ZR(e, t) {
  if (t && (xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JR(e);
}
function JR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ex() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ex = function() {
    return !!e;
  })();
}
function xo(e) {
  return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xo(e);
}
function QR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hl(e, t);
}
function Hl(e, t) {
  return Hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hl(e, t);
}
function tx(e, t, r) {
  return t = rx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rx(e) {
  var t = eN(e, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function eN(e, t) {
  if (xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Gl() {
  return Gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gl.apply(this, arguments);
}
var tN = function(t) {
  var r = t.yAxisId, n = Yf(), i = Xf(), a = k0(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ A.createElement(kn, Gl({}, a, {
      className: ae("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return Rt(u, !0);
      }
    }))
  );
}, Ht = /* @__PURE__ */ (function(e) {
  function t() {
    return GR(this, t), XR(this, t, arguments);
  }
  return QR(t, e), YR(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ A.createElement(tN, this.props);
    }
  }]);
})(A.Component);
tx(Ht, "displayName", "YAxis");
tx(Ht, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Tm(e) {
  return aN(e) || iN(e) || nN(e) || rN();
}
function rN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nN(e, t) {
  if (e) {
    if (typeof e == "string") return Vl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vl(e, t);
  }
}
function iN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function aN(e) {
  if (Array.isArray(e)) return Vl(e);
}
function Vl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Yl = function(t, r, n, i, a) {
  var o = Qe(t, Jf), u = Qe(t, Go), c = [].concat(Tm(o), Tm(u)), s = Qe(t, Yo), l = "".concat(i, "Id"), f = i[0], d = r;
  if (c.length && (d = c.reduce(function(v, h) {
    if (h.props[l] === n && Pt(h.props, "extendDomain") && W(h.props[f])) {
      var g = h.props[f];
      return [Math.min(v[0], g), Math.max(v[1], g)];
    }
    return v;
  }, d)), s.length) {
    var p = "".concat(f, "1"), y = "".concat(f, "2");
    d = s.reduce(function(v, h) {
      if (h.props[l] === n && Pt(h.props, "extendDomain") && W(h.props[p]) && W(h.props[y])) {
        var g = h.props[p], b = h.props[y];
        return [Math.min(v[0], g, b), Math.max(v[1], g, b)];
      }
      return v;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(v, h) {
    return W(h) ? [Math.min(v[0], h), Math.max(v[1], h)] : v;
  }, d)), d;
}, _s = { exports: {} }, jm;
function oN() {
  return jm || (jm = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(c, s, l) {
      this.fn = c, this.context = s, this.once = l || !1;
    }
    function a(c, s, l, f, d) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var p = new i(l, f || c, d), y = r ? r + s : s;
      return c._events[y] ? c._events[y].fn ? c._events[y] = [c._events[y], p] : c._events[y].push(p) : (c._events[y] = p, c._eventsCount++), c;
    }
    function o(c, s) {
      --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var s = [], l, f;
      if (this._eventsCount === 0) return s;
      for (f in l = this._events)
        t.call(l, f) && s.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(l)) : s;
    }, u.prototype.listeners = function(s) {
      var l = r ? r + s : s, f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, p = f.length, y = new Array(p); d < p; d++)
        y[d] = f[d].fn;
      return y;
    }, u.prototype.listenerCount = function(s) {
      var l = r ? r + s : s, f = this._events[l];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(s, l, f, d, p, y) {
      var v = r ? r + s : s;
      if (!this._events[v]) return !1;
      var h = this._events[v], g = arguments.length, b, x;
      if (h.fn) {
        switch (h.once && this.removeListener(s, h.fn, void 0, !0), g) {
          case 1:
            return h.fn.call(h.context), !0;
          case 2:
            return h.fn.call(h.context, l), !0;
          case 3:
            return h.fn.call(h.context, l, f), !0;
          case 4:
            return h.fn.call(h.context, l, f, d), !0;
          case 5:
            return h.fn.call(h.context, l, f, d, p), !0;
          case 6:
            return h.fn.call(h.context, l, f, d, p, y), !0;
        }
        for (x = 1, b = new Array(g - 1); x < g; x++)
          b[x - 1] = arguments[x];
        h.fn.apply(h.context, b);
      } else {
        var w = h.length, m;
        for (x = 0; x < w; x++)
          switch (h[x].once && this.removeListener(s, h[x].fn, void 0, !0), g) {
            case 1:
              h[x].fn.call(h[x].context);
              break;
            case 2:
              h[x].fn.call(h[x].context, l);
              break;
            case 3:
              h[x].fn.call(h[x].context, l, f);
              break;
            case 4:
              h[x].fn.call(h[x].context, l, f, d);
              break;
            default:
              if (!b) for (m = 1, b = new Array(g - 1); m < g; m++)
                b[m - 1] = arguments[m];
              h[x].fn.apply(h[x].context, b);
          }
      }
      return !0;
    }, u.prototype.on = function(s, l, f) {
      return a(this, s, l, f, !1);
    }, u.prototype.once = function(s, l, f) {
      return a(this, s, l, f, !0);
    }, u.prototype.removeListener = function(s, l, f, d) {
      var p = r ? r + s : s;
      if (!this._events[p]) return this;
      if (!l)
        return o(this, p), this;
      var y = this._events[p];
      if (y.fn)
        y.fn === l && (!d || y.once) && (!f || y.context === f) && o(this, p);
      else {
        for (var v = 0, h = [], g = y.length; v < g; v++)
          (y[v].fn !== l || d && !y[v].once || f && y[v].context !== f) && h.push(y[v]);
        h.length ? this._events[p] = h.length === 1 ? h[0] : h : o(this, p);
      }
      return this;
    }, u.prototype.removeAllListeners = function(s) {
      var l;
      return s ? (l = r ? r + s : s, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(_s)), _s.exports;
}
var uN = oN();
const cN = /* @__PURE__ */ ye(uN);
var Es = new cN(), Ts = "recharts.syncMouseEvents";
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function sN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nx(n.key), n);
  }
}
function fN(e, t, r) {
  return t && lN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function js(e, t, r) {
  return t = nx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nx(e) {
  var t = dN(e, "string");
  return Ri(t) == "symbol" ? t : t + "";
}
function dN(e, t) {
  if (Ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var pN = /* @__PURE__ */ (function() {
  function e() {
    sN(this, e), js(this, "activeIndex", 0), js(this, "coordinateList", []), js(this, "layout", "horizontal");
  }
  return fN(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, c = r.layout, s = c === void 0 ? null : c, l = r.offset, f = l === void 0 ? null : l, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = s ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, c = this.coordinateList[this.activeIndex].coordinate, s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = a + c + s, d = o + this.offset.top + u / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
})();
function hN(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], i = e?.[1];
    if (n && i && W(n) && W(i))
      return !0;
  }
  return !1;
}
function vN(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function ix(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = se(t, r, n, i), u = se(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function yN(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, c = t.cy, s = t.innerRadius, l = t.outerRadius, f = t.angle, d = se(u, c, s, f), p = se(u, c, l, f);
      n = d.x, i = d.y, a = p.x, o = p.y;
    } else
      return ix(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Ni(e) {
  "@babel/helpers - typeof";
  return Ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ni(e);
}
function $m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $m(Object(r), !0).forEach(function(n) {
      mN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mN(e, t, r) {
  return t = gN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gN(e) {
  var t = bN(e, "string");
  return Ni(t) == "symbol" ? t : t + "";
}
function bN(e, t) {
  if (Ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xN(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, c = e.offset, s = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !a || !o || d !== "ScatterChart" && i !== "axis")
    return null;
  var y, v = Sr;
  if (d === "ScatterChart")
    y = o, v = uM;
  else if (d === "BarChart")
    y = vN(f, o, c, l), v = Uf;
  else if (f === "radial") {
    var h = ix(o), g = h.cx, b = h.cy, x = h.radius, w = h.startAngle, m = h.endAngle;
    y = {
      cx: g,
      cy: b,
      startAngle: w,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, v = Yb;
  } else
    y = {
      points: yN(f, o, c)
    }, v = Sr;
  var O = pa(pa(pa(pa({
    stroke: "#ccc",
    pointerEvents: "none"
  }, c), y), X(p, !1)), {}, {
    payload: u,
    payloadIndex: s,
    className: ae("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ ht(p) ? /* @__PURE__ */ Me(p, O) : /* @__PURE__ */ Dm(v, O);
}
var ON = ["item"], wN = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ur.apply(this, arguments);
}
function Mm(e, t) {
  return SN(e) || AN(e, t) || ox(e, t) || PN();
}
function PN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0) ;
    } catch (l) {
      s = !0, i = l;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function SN(e) {
  if (Array.isArray(e)) return e;
}
function Im(e, t) {
  if (e == null) return {};
  var r = _N(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _N(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function EN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ux(n.key), n);
  }
}
function jN(e, t, r) {
  return t && TN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $N(e, t, r) {
  return t = Oo(t), MN(e, ax() ? Reflect.construct(t, r || [], Oo(e).constructor) : t.apply(e, r));
}
function MN(e, t) {
  if (t && (On(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IN(e);
}
function IN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ax() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ax = function() {
    return !!e;
  })();
}
function Oo(e) {
  return Oo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oo(e);
}
function CN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xl(e, t);
}
function Xl(e, t) {
  return Xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xl(e, t);
}
function wn(e) {
  return NN(e) || RN(e) || ox(e) || kN();
}
function kN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ox(e, t) {
  if (e) {
    if (typeof e == "string") return Zl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zl(e, t);
  }
}
function RN(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function NN(e) {
  if (Array.isArray(e)) return Zl(e);
}
function Zl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cm(Object(r), !0).forEach(function(n) {
      te(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function te(e, t, r) {
  return t = ux(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ux(e) {
  var t = DN(e, "string");
  return On(t) == "symbol" ? t : t + "";
}
function DN(e, t) {
  if (On(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (On(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var LN = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, BN = {
  width: "100%",
  height: "100%"
}, cx = {
  x: 0,
  y: 0
};
function ha(e) {
  return e;
}
var qN = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, FN = function(t, r, n, i) {
  var a = r.find(function(l) {
    return l && l.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return N(N(N({}, i), se(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var c = a.coordinate, s = i.angle;
    return N(N(N({}, i), se(i.cx, i.cy, c, s)), {}, {
      angle: s,
      radius: c
    });
  }
  return cx;
}, Xo = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, c) {
    var s = c.props.data;
    return s && s.length ? [].concat(wn(u), wn(s)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && W(i) && W(a) ? t.slice(i, a + 1) : [];
};
function sx(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Jl = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = Xo(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(c, s) {
    var l, f = (l = s.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? u : f;
      d = ga(p, o.dataKey, i);
    } else
      d = f && f[n] || u[n];
    return d ? [].concat(wn(c), [Fb(s, d)]) : c;
  }, []);
}, km = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = qN(a, n), u = t.orderedTooltipTicks, c = t.tooltipAxis, s = t.tooltipTicks, l = $E(o, u, s, c);
  if (l >= 0 && s) {
    var f = s[l] && s[l].value, d = Jl(t, r, l, f), p = FN(n, u, l, a);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, WN = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = Rb(l, a);
  return n.reduce(function(y, v) {
    var h, g = v.type.defaultProps !== void 0 ? N(N({}, v.type.defaultProps), v.props) : v.props, b = g.type, x = g.dataKey, w = g.allowDataOverflow, m = g.allowDuplicatedCategory, O = g.scale, P = g.ticks, S = g.includeHidden, _ = g[o];
    if (y[_])
      return y;
    var $ = Xo(t.data, {
      graphicalItems: i.filter(function(B) {
        var H, V = o in B.props ? B.props[o] : (H = B.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return V === _;
      }),
      dataStartIndex: c,
      dataEndIndex: s
    }), E = $.length, j, M, C;
    hN(g.domain, w, b) && (j = ll(g.domain, null, w), p && (b === "number" || O !== "auto") && (C = Xn($, x, "category")));
    var k = sx(b);
    if (!j || j.length === 0) {
      var R, L = (R = g.domain) !== null && R !== void 0 ? R : k;
      if (x) {
        if (j = Xn($, x, b), b === "category" && p) {
          var F = tO(j);
          m && F ? (M = j, j = ao(0, E)) : m || (j = bv(L, j, v).reduce(function(B, H) {
            return B.indexOf(H) >= 0 ? B : [].concat(wn(B), [H]);
          }, []));
        } else if (b === "category")
          m ? j = j.filter(function(B) {
            return B !== "" && !ne(B);
          }) : j = bv(L, j, v).reduce(function(B, H) {
            return B.indexOf(H) >= 0 || H === "" || ne(H) ? B : [].concat(wn(B), [H]);
          }, []);
        else if (b === "number") {
          var K = RE($, i.filter(function(B) {
            var H, V, J = o in B.props ? B.props[o] : (H = B.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ee = "hide" in B.props ? B.props.hide : (V = B.type.defaultProps) === null || V === void 0 ? void 0 : V.hide;
            return J === _ && (S || !ee);
          }), x, a, l);
          K && (j = K);
        }
        p && (b === "number" || O !== "auto") && (C = Xn($, x, "category"));
      } else p ? j = ao(0, E) : u && u[_] && u[_].hasStack && b === "number" ? j = d === "expand" ? [0, 1] : qb(u[_].stackGroups, c, s) : j = kb($, i.filter(function(B) {
        var H = o in B.props ? B.props[o] : B.type.defaultProps[o], V = "hide" in B.props ? B.props.hide : B.type.defaultProps.hide;
        return H === _ && (S || !V);
      }), b, l, !0);
      if (b === "number")
        j = Yl(f, j, _, a, P), L && (j = ll(L, j, w));
      else if (b === "category" && L) {
        var I = L, D = j.every(function(B) {
          return I.indexOf(B) >= 0;
        });
        D && (j = I);
      }
    }
    return N(N({}, y), {}, te({}, _, N(N({}, g), {}, {
      axisType: a,
      domain: j,
      categoricalDomain: C,
      duplicateDomain: M,
      originalDomain: (h = g.domain) !== null && h !== void 0 ? h : k,
      isCategorical: p,
      layout: l
    })));
  }, {});
}, zN = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.layout, f = t.children, d = Xo(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: s
  }), p = d.length, y = Rb(l, a), v = -1;
  return n.reduce(function(h, g) {
    var b = g.type.defaultProps !== void 0 ? N(N({}, g.type.defaultProps), g.props) : g.props, x = b[o], w = sx("number");
    if (!h[x]) {
      v++;
      var m;
      return y ? m = ao(0, p) : u && u[x] && u[x].hasStack ? (m = qb(u[x].stackGroups, c, s), m = Yl(f, m, x, a)) : (m = ll(w, kb(d, n.filter(function(O) {
        var P, S, _ = o in O.props ? O.props[o] : (P = O.type.defaultProps) === null || P === void 0 ? void 0 : P[o], $ = "hide" in O.props ? O.props.hide : (S = O.type.defaultProps) === null || S === void 0 ? void 0 : S.hide;
        return _ === x && !$;
      }), "number", l), i.defaultProps.allowDataOverflow), m = Yl(f, m, x, a)), N(N({}, h), {}, te({}, x, N(N({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Je(LN, "".concat(a, ".").concat(v % 2), null),
        domain: m,
        originalDomain: w,
        isCategorical: y,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return h;
  }, {});
}, UN = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, l = t.children, f = "".concat(i, "Id"), d = Qe(l, a), p = {};
  return d && d.length ? p = WN(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  }) : o && o.length && (p = zN(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: f,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  })), p;
}, KN = function(t) {
  var r = Xt(t), n = Rt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: yf(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Ua(r, n)
  };
}, Rm = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Xe(r, ln), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, HN = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Nt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Nm = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, GN = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, c = u === void 0 ? {} : u, s = n.width, l = n.height, f = n.children, d = n.margin || {}, p = Xe(f, ln), y = Xe(f, wr), v = Object.keys(c).reduce(function(m, O) {
    var P = c[O], S = P.orientation;
    return !P.mirror && !P.hide ? N(N({}, m), {}, te({}, S, m[S] + P.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), h = Object.keys(o).reduce(function(m, O) {
    var P = o[O], S = P.orientation;
    return !P.mirror && !P.hide ? N(N({}, m), {}, te({}, S, Je(m, "".concat(S)) + P.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), g = N(N({}, h), v), b = g.bottom;
  p && (g.bottom += p.props.height || ln.defaultProps.height), y && r && (g = CE(g, i, n, r));
  var x = s - g.left - g.right, w = l - g.top - g.bottom;
  return N(N({
    brushBottom: b
  }, g), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(w, 0)
  });
}, VN = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Yi = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, c = t.axisComponents, s = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(g, b) {
    var x = b.graphicalItems, w = b.stackGroups, m = b.offset, O = b.updateId, P = b.dataStartIndex, S = b.dataEndIndex, _ = g.barSize, $ = g.layout, E = g.barGap, j = g.barCategoryGap, M = g.maxBarSize, C = Nm($), k = C.numericAxisName, R = C.cateAxisName, L = HN(x), F = [];
    return x.forEach(function(K, I) {
      var D = Xo(g.data, {
        graphicalItems: [K],
        dataStartIndex: P,
        dataEndIndex: S
      }), B = K.type.defaultProps !== void 0 ? N(N({}, K.type.defaultProps), K.props) : K.props, H = B.dataKey, V = B.maxBarSize, J = B["".concat(k, "Id")], ee = B["".concat(R, "Id")], ie = {}, re = c.reduce(function(sr, Tt) {
        var eu, tu, ru = b["".concat(Tt.axisType, "Map")], id = B["".concat(Tt.axisType, "Id")];
        ru && ru[id] || Tt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? Ge(!1, "Specifying a(n) ".concat(Tt.axisType, "Id requires a corresponding ").concat(
          Tt.axisType,
          "Id on the targeted graphical component "
        ).concat((eu = K == null || (tu = K.type) === null || tu === void 0 ? void 0 : tu.displayName) !== null && eu !== void 0 ? eu : "")) : Ge());
        var ad = ru[id];
        return N(N({}, sr), {}, te(te({}, Tt.axisType, ad), "".concat(Tt.axisType, "Ticks"), Rt(ad)));
      }, ie), q = re[R], G = re["".concat(R, "Ticks")], Z = w && w[J] && w[J].hasStack && UE(K, w[J].stackGroups), T = Nt(K.type).indexOf("Bar") >= 0, ue = Ua(q, G), z = [], ge = L && ME({
        barSize: _,
        stackGroups: w,
        totalSize: VN(re, R)
      });
      if (T) {
        var we, De, Gt = ne(V) ? M : V, Rr = (we = (De = Ua(q, G, !0)) !== null && De !== void 0 ? De : Gt) !== null && we !== void 0 ? we : 0;
        z = IE({
          barGap: E,
          barCategoryGap: j,
          bandSize: Rr !== ue ? Rr : ue,
          sizeList: ge[ee],
          maxBarSize: Gt
        }), Rr !== ue && (z = z.map(function(sr) {
          return N(N({}, sr), {}, {
            position: N(N({}, sr.position), {}, {
              offset: sr.position.offset - Rr / 2
            })
          });
        }));
      }
      var Ji = K && K.type && K.type.getComposedData;
      Ji && F.push({
        props: N(N({}, Ji(N(N({}, re), {}, {
          displayedData: D,
          props: g,
          dataKey: H,
          item: K,
          bandSize: ue,
          barPosition: z,
          offset: m,
          stackedData: Z,
          layout: $,
          dataStartIndex: P,
          dataEndIndex: S
        }))), {}, te(te(te({
          key: K.key || "item-".concat(I)
        }, k, re[k]), R, re[R]), "animationId", O)),
        childIndex: dO(K, g.children),
        item: K
      });
    }), F;
  }, p = function(g, b) {
    var x = g.props, w = g.dataStartIndex, m = g.dataEndIndex, O = g.updateId;
    if (!jd({
      props: x
    }))
      return null;
    var P = x.children, S = x.layout, _ = x.stackOffset, $ = x.data, E = x.reverseStackOrder, j = Nm(S), M = j.numericAxisName, C = j.cateAxisName, k = Qe(P, n), R = WE($, k, "".concat(M, "Id"), "".concat(C, "Id"), _, E), L = c.reduce(function(B, H) {
      var V = "".concat(H.axisType, "Map");
      return N(N({}, B), {}, te({}, V, UN(x, N(N({}, H), {}, {
        graphicalItems: k,
        stackGroups: H.axisType === M && R,
        dataStartIndex: w,
        dataEndIndex: m
      }))));
    }, {}), F = GN(N(N({}, L), {}, {
      props: x,
      graphicalItems: k
    }), b?.legendBBox);
    Object.keys(L).forEach(function(B) {
      L[B] = l(x, L[B], F, B.replace("Map", ""), r);
    });
    var K = L["".concat(C, "Map")], I = KN(K), D = d(x, N(N({}, L), {}, {
      dataStartIndex: w,
      dataEndIndex: m,
      updateId: O,
      graphicalItems: k,
      stackGroups: R,
      offset: F
    }));
    return N(N({
      formattedGraphicalItems: D,
      graphicalItems: k,
      offset: F,
      stackGroups: R
    }, I), L);
  }, y = /* @__PURE__ */ (function(h) {
    function g(b) {
      var x, w, m;
      return EN(this, g), m = $N(this, g, [b]), te(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), te(m, "accessibilityManager", new pN()), te(m, "handleLegendBBoxUpdate", function(O) {
        if (O) {
          var P = m.state, S = P.dataStartIndex, _ = P.dataEndIndex, $ = P.updateId;
          m.setState(N({
            legendBBox: O
          }, p({
            props: m.props,
            dataStartIndex: S,
            dataEndIndex: _,
            updateId: $
          }, N(N({}, m.state), {}, {
            legendBBox: O
          }))));
        }
      }), te(m, "handleReceiveSyncEvent", function(O, P, S) {
        if (m.props.syncId === O) {
          if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(P);
        }
      }), te(m, "handleBrushChange", function(O) {
        var P = O.startIndex, S = O.endIndex;
        if (P !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
          var _ = m.state.updateId;
          m.setState(function() {
            return N({
              dataStartIndex: P,
              dataEndIndex: S
            }, p({
              props: m.props,
              dataStartIndex: P,
              dataEndIndex: S,
              updateId: _
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: P,
            dataEndIndex: S
          });
        }
      }), te(m, "handleMouseEnter", function(O) {
        var P = m.getMouseInfo(O);
        if (P) {
          var S = N(N({}, P), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var _ = m.props.onMouseEnter;
          Q(_) && _(S, O);
        }
      }), te(m, "triggeredAfterMouseMove", function(O) {
        var P = m.getMouseInfo(O), S = P ? N(N({}, P), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var _ = m.props.onMouseMove;
        Q(_) && _(S, O);
      }), te(m, "handleItemMouseEnter", function(O) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: O,
            activePayload: O.tooltipPayload,
            activeCoordinate: O.tooltipPosition || {
              x: O.cx,
              y: O.cy
            }
          };
        });
      }), te(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), te(m, "handleMouseMove", function(O) {
        O.persist(), m.throttleTriggeredAfterMouseMove(O);
      }), te(m, "handleMouseLeave", function(O) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var P = {
          isTooltipActive: !1
        };
        m.setState(P), m.triggerSyncEvent(P);
        var S = m.props.onMouseLeave;
        Q(S) && S(P, O);
      }), te(m, "handleOuterEvent", function(O) {
        var P = fO(O), S = Je(m.props, "".concat(P));
        if (P && Q(S)) {
          var _, $;
          /.*touch.*/i.test(P) ? $ = m.getMouseInfo(O.changedTouches[0]) : $ = m.getMouseInfo(O), S((_ = $) !== null && _ !== void 0 ? _ : {}, O);
        }
      }), te(m, "handleClick", function(O) {
        var P = m.getMouseInfo(O);
        if (P) {
          var S = N(N({}, P), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var _ = m.props.onClick;
          Q(_) && _(S, O);
        }
      }), te(m, "handleMouseDown", function(O) {
        var P = m.props.onMouseDown;
        if (Q(P)) {
          var S = m.getMouseInfo(O);
          P(S, O);
        }
      }), te(m, "handleMouseUp", function(O) {
        var P = m.props.onMouseUp;
        if (Q(P)) {
          var S = m.getMouseInfo(O);
          P(S, O);
        }
      }), te(m, "handleTouchMove", function(O) {
        O.changedTouches != null && O.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(O.changedTouches[0]);
      }), te(m, "handleTouchStart", function(O) {
        O.changedTouches != null && O.changedTouches.length > 0 && m.handleMouseDown(O.changedTouches[0]);
      }), te(m, "handleTouchEnd", function(O) {
        O.changedTouches != null && O.changedTouches.length > 0 && m.handleMouseUp(O.changedTouches[0]);
      }), te(m, "handleDoubleClick", function(O) {
        var P = m.props.onDoubleClick;
        if (Q(P)) {
          var S = m.getMouseInfo(O);
          P(S, O);
        }
      }), te(m, "handleContextMenu", function(O) {
        var P = m.props.onContextMenu;
        if (Q(P)) {
          var S = m.getMouseInfo(O);
          P(S, O);
        }
      }), te(m, "triggerSyncEvent", function(O) {
        m.props.syncId !== void 0 && Es.emit(Ts, m.props.syncId, O, m.eventEmitterSymbol);
      }), te(m, "applySyncEvent", function(O) {
        var P = m.props, S = P.layout, _ = P.syncMethod, $ = m.state.updateId, E = O.dataStartIndex, j = O.dataEndIndex;
        if (O.dataStartIndex !== void 0 || O.dataEndIndex !== void 0)
          m.setState(N({
            dataStartIndex: E,
            dataEndIndex: j
          }, p({
            props: m.props,
            dataStartIndex: E,
            dataEndIndex: j,
            updateId: $
          }, m.state)));
        else if (O.activeTooltipIndex !== void 0) {
          var M = O.chartX, C = O.chartY, k = O.activeTooltipIndex, R = m.state, L = R.offset, F = R.tooltipTicks;
          if (!L)
            return;
          if (typeof _ == "function")
            k = _(F, O);
          else if (_ === "value") {
            k = -1;
            for (var K = 0; K < F.length; K++)
              if (F[K].value === O.activeLabel) {
                k = K;
                break;
              }
          }
          var I = N(N({}, L), {}, {
            x: L.left,
            y: L.top
          }), D = Math.min(M, I.x + I.width), B = Math.min(C, I.y + I.height), H = F[k] && F[k].value, V = Jl(m.state, m.props.data, k), J = F[k] ? {
            x: S === "horizontal" ? F[k].coordinate : D,
            y: S === "horizontal" ? B : F[k].coordinate
          } : cx;
          m.setState(N(N({}, O), {}, {
            activeLabel: H,
            activeCoordinate: J,
            activePayload: V,
            activeTooltipIndex: k
          }));
        } else
          m.setState(O);
      }), te(m, "renderCursor", function(O) {
        var P, S = m.state, _ = S.isTooltipActive, $ = S.activeCoordinate, E = S.activePayload, j = S.offset, M = S.activeTooltipIndex, C = S.tooltipAxisBandSize, k = m.getTooltipEventType(), R = (P = O.props.active) !== null && P !== void 0 ? P : _, L = m.props.layout, F = O.key || "_recharts-cursor";
        return /* @__PURE__ */ A.createElement(xN, {
          key: F,
          activeCoordinate: $,
          activePayload: E,
          activeTooltipIndex: M,
          chartName: r,
          element: O,
          isActive: R,
          layout: L,
          offset: j,
          tooltipAxisBandSize: C,
          tooltipEventType: k
        });
      }), te(m, "renderPolarAxis", function(O, P, S) {
        var _ = Je(O, "type.axisType"), $ = Je(m.state, "".concat(_, "Map")), E = O.type.defaultProps, j = E !== void 0 ? N(N({}, E), O.props) : O.props, M = $ && $[j["".concat(_, "Id")]];
        return /* @__PURE__ */ Me(O, N(N({}, M), {}, {
          className: ae(_, M.className),
          key: O.key || "".concat(P, "-").concat(S),
          ticks: Rt(M, !0)
        }));
      }), te(m, "renderPolarGrid", function(O) {
        var P = O.props, S = P.radialLines, _ = P.polarAngles, $ = P.polarRadius, E = m.state, j = E.radiusAxisMap, M = E.angleAxisMap, C = Xt(j), k = Xt(M), R = k.cx, L = k.cy, F = k.innerRadius, K = k.outerRadius;
        return /* @__PURE__ */ Me(O, {
          polarAngles: Array.isArray(_) ? _ : Rt(k, !0).map(function(I) {
            return I.coordinate;
          }),
          polarRadius: Array.isArray($) ? $ : Rt(C, !0).map(function(I) {
            return I.coordinate;
          }),
          cx: R,
          cy: L,
          innerRadius: F,
          outerRadius: K,
          key: O.key || "polar-grid",
          radialLines: S
        });
      }), te(m, "renderLegend", function() {
        var O = m.state.formattedGraphicalItems, P = m.props, S = P.children, _ = P.width, $ = P.height, E = m.props.margin || {}, j = _ - (E.left || 0) - (E.right || 0), M = Ib({
          children: S,
          formattedGraphicalItems: O,
          legendWidth: j,
          legendContent: s
        });
        if (!M)
          return null;
        var C = M.item, k = Im(M, ON);
        return /* @__PURE__ */ Me(C, N(N({}, k), {}, {
          chartWidth: _,
          chartHeight: $,
          margin: E,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), te(m, "renderTooltip", function() {
        var O, P = m.props, S = P.children, _ = P.accessibilityLayer, $ = Xe(S, bt);
        if (!$)
          return null;
        var E = m.state, j = E.isTooltipActive, M = E.activeCoordinate, C = E.activePayload, k = E.activeLabel, R = E.offset, L = (O = $.props.active) !== null && O !== void 0 ? O : j;
        return /* @__PURE__ */ Me($, {
          viewBox: N(N({}, R), {}, {
            x: R.left,
            y: R.top
          }),
          active: L,
          label: k,
          payload: L ? C : [],
          coordinate: M,
          accessibilityLayer: _
        });
      }), te(m, "renderBrush", function(O) {
        var P = m.props, S = P.margin, _ = P.data, $ = m.state, E = $.offset, j = $.dataStartIndex, M = $.dataEndIndex, C = $.updateId;
        return /* @__PURE__ */ Me(O, {
          key: O.key || "_recharts-brush",
          onChange: ua(m.handleBrushChange, O.props.onChange),
          data: _,
          x: W(O.props.x) ? O.props.x : E.left,
          y: W(O.props.y) ? O.props.y : E.top + E.height + E.brushBottom - (S.bottom || 0),
          width: W(O.props.width) ? O.props.width : E.width,
          startIndex: j,
          endIndex: M,
          updateId: "brush-".concat(C)
        });
      }), te(m, "renderReferenceElement", function(O, P, S) {
        if (!O)
          return null;
        var _ = m, $ = _.clipPathId, E = m.state, j = E.xAxisMap, M = E.yAxisMap, C = E.offset, k = O.type.defaultProps || {}, R = O.props, L = R.xAxisId, F = L === void 0 ? k.xAxisId : L, K = R.yAxisId, I = K === void 0 ? k.yAxisId : K;
        return /* @__PURE__ */ Me(O, {
          key: O.key || "".concat(P, "-").concat(S),
          xAxis: j[F],
          yAxis: M[I],
          viewBox: {
            x: C.left,
            y: C.top,
            width: C.width,
            height: C.height
          },
          clipPathId: $
        });
      }), te(m, "renderActivePoints", function(O) {
        var P = O.item, S = O.activePoint, _ = O.basePoint, $ = O.childIndex, E = O.isRange, j = [], M = P.props.key, C = P.item.type.defaultProps !== void 0 ? N(N({}, P.item.type.defaultProps), P.item.props) : P.item.props, k = C.activeDot, R = C.dataKey, L = N(N({
          index: $,
          dataKey: R,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: Wf(P.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value
        }, X(k, !1)), ba(k));
        return j.push(g.renderActiveDot(k, L, "".concat(M, "-activePoint-").concat($))), _ ? j.push(g.renderActiveDot(k, N(N({}, L), {}, {
          cx: _.x,
          cy: _.y
        }), "".concat(M, "-basePoint-").concat($))) : E && j.push(null), j;
      }), te(m, "renderGraphicChild", function(O, P, S) {
        var _ = m.filterFormatItem(O, P, S);
        if (!_)
          return null;
        var $ = m.getTooltipEventType(), E = m.state, j = E.isTooltipActive, M = E.tooltipAxis, C = E.activeTooltipIndex, k = E.activeLabel, R = m.props.children, L = Xe(R, bt), F = _.props, K = F.points, I = F.isRange, D = F.baseLine, B = _.item.type.defaultProps !== void 0 ? N(N({}, _.item.type.defaultProps), _.item.props) : _.item.props, H = B.activeDot, V = B.hide, J = B.activeBar, ee = B.activeShape, ie = !!(!V && j && L && (H || J || ee)), re = {};
        $ !== "axis" && L && L.props.trigger === "click" ? re = {
          onClick: ua(m.handleItemMouseEnter, O.props.onClick)
        } : $ !== "axis" && (re = {
          onMouseLeave: ua(m.handleItemMouseLeave, O.props.onMouseLeave),
          onMouseEnter: ua(m.handleItemMouseEnter, O.props.onMouseEnter)
        });
        var q = /* @__PURE__ */ Me(O, N(N({}, _.props), re));
        function G(Tt) {
          return typeof M.dataKey == "function" ? M.dataKey(Tt.payload) : null;
        }
        if (ie)
          if (C >= 0) {
            var Z, T;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var ue = typeof M.dataKey == "function" ? G : "payload.".concat(M.dataKey.toString());
              Z = ga(K, ue, k), T = I && D && ga(D, ue, k);
            } else
              Z = K?.[C], T = I && D && D[C];
            if (ee || J) {
              var z = O.props.activeIndex !== void 0 ? O.props.activeIndex : C;
              return [/* @__PURE__ */ Me(O, N(N(N({}, _.props), re), {}, {
                activeIndex: z
              })), null, null];
            }
            if (!ne(Z))
              return [q].concat(wn(m.renderActivePoints({
                item: _,
                activePoint: Z,
                basePoint: T,
                childIndex: C,
                isRange: I
              })));
          } else {
            var ge, we = (ge = m.getItemByXY(m.state.activeCoordinate)) !== null && ge !== void 0 ? ge : {
              graphicalItem: q
            }, De = we.graphicalItem, Gt = De.item, Rr = Gt === void 0 ? O : Gt, Ji = De.childIndex, sr = N(N(N({}, _.props), re), {}, {
              activeIndex: Ji
            });
            return [/* @__PURE__ */ Me(Rr, sr), null, null];
          }
        return I ? [q, null, null] : [q, null];
      }), te(m, "renderCustomized", function(O, P, S) {
        return /* @__PURE__ */ Me(O, N(N({
          key: "recharts-customized-".concat(S)
        }, m.props), m.state));
      }), te(m, "renderMap", {
        CartesianGrid: {
          handler: ha,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: ha
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: ha
        },
        YAxis: {
          handler: ha
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((x = b.id) !== null && x !== void 0 ? x : jr("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = Mg(m.triggeredAfterMouseMove, (w = b.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), m.state = {}, m;
    }
    return CN(g, h), jN(g, [{
      key: "componentDidMount",
      value: function() {
        var x, w;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
            top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var x = this.props, w = x.children, m = x.data, O = x.height, P = x.layout, S = Xe(w, bt);
        if (S) {
          var _ = S.props.defaultIndex;
          if (!(typeof _ != "number" || _ < 0 || _ > this.state.tooltipTicks.length - 1)) {
            var $ = this.state.tooltipTicks[_] && this.state.tooltipTicks[_].value, E = Jl(this.state, m, _, $), j = this.state.tooltipTicks[_].coordinate, M = (this.state.offset.top + O) / 2, C = P === "horizontal", k = C ? {
              x: j,
              y: M
            } : {
              y: j,
              x: M
            }, R = this.state.formattedGraphicalItems.find(function(F) {
              var K = F.item;
              return K.type.name === "Scatter";
            });
            R && (k = N(N({}, k), R.props.points[_].tooltipPosition), E = R.props.points[_].tooltipPayload);
            var L = {
              activeTooltipIndex: _,
              isTooltipActive: !0,
              activeLabel: $,
              activePayload: E,
              activeCoordinate: k
            };
            this.setState(L), this.renderCursor(S), this.accessibilityManager.setIndex(_);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x, w) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== x.margin) {
          var m, O;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(x) {
        Is([Xe(x.children, bt)], [Xe(this.props.children, bt)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = Xe(this.props.children, bt);
        if (x && typeof x.props.shared == "boolean") {
          var w = x.props.shared ? "axis" : "item";
          return u.indexOf(w) >= 0 ? w : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(x) {
        if (!this.container)
          return null;
        var w = this.container, m = w.getBoundingClientRect(), O = AP(m), P = {
          chartX: Math.round(x.pageX - O.left),
          chartY: Math.round(x.pageY - O.top)
        }, S = m.width / w.offsetWidth || 1, _ = this.inRange(P.chartX, P.chartY, S);
        if (!_)
          return null;
        var $ = this.state, E = $.xAxisMap, j = $.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && E && j) {
          var C = Xt(E).scale, k = Xt(j).scale, R = C && C.invert ? C.invert(P.chartX) : null, L = k && k.invert ? k.invert(P.chartY) : null;
          return N(N({}, P), {}, {
            xValue: R,
            yValue: L
          });
        }
        var F = km(this.state, this.props.data, this.props.layout, _);
        return F ? N(N({}, P), F) : null;
      }
    }, {
      key: "inRange",
      value: function(x, w) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, O = this.props.layout, P = x / m, S = w / m;
        if (O === "horizontal" || O === "vertical") {
          var _ = this.state.offset, $ = P >= _.left && P <= _.left + _.width && S >= _.top && S <= _.top + _.height;
          return $ ? {
            x: P,
            y: S
          } : null;
        }
        var E = this.state, j = E.angleAxisMap, M = E.radiusAxisMap;
        if (j && M) {
          var C = Xt(j);
          return wv({
            x: P,
            y: S
          }, C);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, w = this.getTooltipEventType(), m = Xe(x, bt), O = {};
        m && w === "axis" && (m.props.trigger === "click" ? O = {
          onClick: this.handleClick
        } : O = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var P = ba(this.props, this.handleOuterEvent);
        return N(N({}, P), O);
      }
    }, {
      key: "addListener",
      value: function() {
        Es.on(Ts, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Es.removeListener(Ts, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, w, m) {
        for (var O = this.state.formattedGraphicalItems, P = 0, S = O.length; P < S; P++) {
          var _ = O[P];
          if (_.item === x || _.props.key === x.key || w === Nt(_.item.type) && m === _.childIndex)
            return _;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, w = this.state.offset, m = w.left, O = w.top, P = w.height, S = w.width;
        return /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ A.createElement("rect", {
          x: m,
          y: O,
          height: P,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(w, m) {
          var O = Mm(m, 2), P = O[0], S = O[1];
          return N(N({}, w), {}, te({}, P, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(w, m) {
          var O = Mm(m, 2), P = O[0], S = O[1];
          return N(N({}, w), {}, te({}, P, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(x) {
        var w;
        return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[x]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(x) {
        var w;
        return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[x]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(x) {
        var w = this.state, m = w.formattedGraphicalItems, O = w.activeItem;
        if (m && m.length)
          for (var P = 0, S = m.length; P < S; P++) {
            var _ = m[P], $ = _.props, E = _.item, j = E.type.defaultProps !== void 0 ? N(N({}, E.type.defaultProps), E.props) : E.props, M = Nt(E.type);
            if (M === "Bar") {
              var C = ($.data || []).find(function(F) {
                return W$(x, F);
              });
              if (C)
                return {
                  graphicalItem: _,
                  payload: C
                };
            } else if (M === "RadialBar") {
              var k = ($.data || []).find(function(F) {
                return wv(x, F);
              });
              if (k)
                return {
                  graphicalItem: _,
                  payload: k
                };
            } else if (zo(_, O) || Uo(_, O) || Mi(_, O)) {
              var R = OI({
                graphicalItem: _,
                activeTooltipItem: O,
                itemData: j.data
              }), L = j.activeIndex === void 0 ? R : j.activeIndex;
              return {
                graphicalItem: N(N({}, _), {}, {
                  childIndex: L
                }),
                payload: Mi(_, O) ? j.data[R] : _.props.data[R]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!jd(this))
          return null;
        var w = this.props, m = w.children, O = w.className, P = w.width, S = w.height, _ = w.style, $ = w.compact, E = w.title, j = w.desc, M = Im(w, wN), C = X(M, !1);
        if ($)
          return /* @__PURE__ */ A.createElement(lm, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ A.createElement(ks, Ur({}, C, {
            width: P,
            height: S,
            title: E,
            desc: j
          }), this.renderClipPath(), Md(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var k, R;
          C.tabIndex = (k = this.props.tabIndex) !== null && k !== void 0 ? k : 0, C.role = (R = this.props.role) !== null && R !== void 0 ? R : "application", C.onKeyDown = function(F) {
            x.accessibilityManager.keyboardEvent(F);
          }, C.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var L = this.parseEventsOfWrapper();
        return /* @__PURE__ */ A.createElement(lm, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ A.createElement("div", Ur({
          className: ae("recharts-wrapper", O),
          style: N({
            position: "relative",
            cursor: "default",
            width: P,
            height: S
          }, _)
        }, L, {
          ref: function(K) {
            x.container = K;
          }
        }), /* @__PURE__ */ A.createElement(ks, Ur({}, C, {
          width: P,
          height: S,
          title: E,
          desc: j,
          style: BN
        }), this.renderClipPath(), Md(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(Lm);
  te(y, "displayName", r), te(y, "defaultProps", N({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), te(y, "getDerivedStateFromProps", function(h, g) {
    var b = h.dataKey, x = h.data, w = h.children, m = h.width, O = h.height, P = h.layout, S = h.stackOffset, _ = h.margin, $ = g.dataStartIndex, E = g.dataEndIndex;
    if (g.updateId === void 0) {
      var j = Rm(h);
      return N(N(N({}, j), {}, {
        updateId: 0
      }, p(N(N({
        props: h
      }, j), {}, {
        updateId: 0
      }), g)), {}, {
        prevDataKey: b,
        prevData: x,
        prevWidth: m,
        prevHeight: O,
        prevLayout: P,
        prevStackOffset: S,
        prevMargin: _,
        prevChildren: w
      });
    }
    if (b !== g.prevDataKey || x !== g.prevData || m !== g.prevWidth || O !== g.prevHeight || P !== g.prevLayout || S !== g.prevStackOffset || !Kr(_, g.prevMargin)) {
      var M = Rm(h), C = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: g.chartX,
        chartY: g.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: g.isTooltipActive
      }, k = N(N({}, km(g, x, P)), {}, {
        updateId: g.updateId + 1
      }), R = N(N(N({}, M), C), k);
      return N(N(N({}, R), p(N({
        props: h
      }, R), g)), {}, {
        prevDataKey: b,
        prevData: x,
        prevWidth: m,
        prevHeight: O,
        prevLayout: P,
        prevStackOffset: S,
        prevMargin: _,
        prevChildren: w
      });
    }
    if (!Is(w, g.prevChildren)) {
      var L, F, K, I, D = Xe(w, ln), B = D && (L = (F = D.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && L !== void 0 ? L : $, H = D && (K = (I = D.props) === null || I === void 0 ? void 0 : I.endIndex) !== null && K !== void 0 ? K : E, V = B !== $ || H !== E, J = !ne(x), ee = J && !V ? g.updateId : g.updateId + 1;
      return N(N({
        updateId: ee
      }, p(N(N({
        props: h
      }, g), {}, {
        updateId: ee,
        dataStartIndex: B,
        dataEndIndex: H
      }), g)), {}, {
        prevChildren: w,
        dataStartIndex: B,
        dataEndIndex: H
      });
    }
    return null;
  }), te(y, "renderActiveDot", function(h, g, b) {
    var x;
    return /* @__PURE__ */ ht(h) ? x = /* @__PURE__ */ Me(h, g) : Q(h) ? x = h(g) : x = /* @__PURE__ */ A.createElement(Mn, g), /* @__PURE__ */ A.createElement(oe, {
      className: "recharts-active-dot",
      key: b
    }, x);
  });
  var v = /* @__PURE__ */ ef(function(g, b) {
    return /* @__PURE__ */ A.createElement(y, Ur({}, g, {
      ref: b
    }));
  });
  return v.displayName = y.displayName, v;
}, YN = Yi({
  chartName: "LineChart",
  GraphicalChild: Vi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ht
  }],
  formatAxisMap: Kf
}), lx = Yi({
  chartName: "BarChart",
  GraphicalChild: ur,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ht
  }],
  formatAxisMap: Kf
}), XN = Yi({
  chartName: "PieChart",
  GraphicalChild: Ut,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Cn
  }, {
    axisType: "radiusAxis",
    AxisComp: In
  }],
  formatAxisMap: Ub,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), ZN = Yi({
  chartName: "RadarChart",
  GraphicalChild: Hi,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Cn
  }, {
    axisType: "radiusAxis",
    AxisComp: In
  }],
  formatAxisMap: Ub,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), JN = Yi({
  chartName: "AreaChart",
  GraphicalChild: cr,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Kt
  }, {
    axisType: "yAxis",
    AxisComp: Ht
  }],
  formatAxisMap: Kf
});
const QN = $x({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), eD = { light: "", dark: ".dark" }, fx = er.createContext(null);
function dx() {
  const e = er.useContext(fx);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const tD = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, o) => {
  const u = er.useId(), c = `chart-${e || u.replace(/:/g, "")}`, s = er.useRef(null), [l, f] = Di(), d = rf(() => new ResizeObserver(
    (p) => f(p[0].contentRect.height)
  ), []);
  return vx(() => {
    const p = o && "current" in o ? o.current : s.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, s]), /* @__PURE__ */ U(fx.Provider, { value: { config: i }, children: /* @__PURE__ */ Ae(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": c,
      ref: o || s,
      className: Mt(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? QN({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ U(rD, { id: c, config: i }),
        /* @__PURE__ */ U(
          mP,
          {
            height: l,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, Cr = er.forwardRef(tD);
Cr.displayName = "Chart";
const rD = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([i, a]) => a.theme || a.color);
  if (!r.length)
    return null;
  const n = Object.entries(eD).map(
    ([i, a]) => `
${a} [data-chart=${e}] {
${r.map(([o, u]) => {
      const c = u.theme?.[i] || u.color;
      return c ? `  --color-${o}: ${c};` : null;
    }).join(`
`)}
}
`
  );
  return /* @__PURE__ */ U(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Mx.sanitize(n.join(`
`))
      }
    }
  );
}, Rn = bt, kr = er.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: o,
    labelFormatter: u,
    labelClassName: c,
    formatter: s,
    yAxisFormatter: l,
    color: f,
    nameKey: d,
    labelKey: p
  }, y) => {
    const { config: v } = dx(), h = er.useMemo(() => {
      if (i || !t?.length)
        return null;
      const [b] = t, x = `${p || b.dataKey || b.name || "value"}`, w = Ql(v, b, x), m = !p && typeof o == "string" ? v[o]?.label || o : w?.label;
      return u ? /* @__PURE__ */ U("div", { className: Mt("font-medium", c), children: u(m, t) }) : m ? /* @__PURE__ */ U("div", { className: Mt("font-medium", c), children: m }) : null;
    }, [
      o,
      u,
      t,
      i,
      c,
      v,
      p
    ]);
    if (!e || !t?.length)
      return null;
    const g = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ Ae(
      "div",
      {
        ref: y,
        className: Mt(
          "grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur",
          r
        ),
        children: [
          g ? null : h,
          /* @__PURE__ */ U("div", { className: "grid gap-2", children: t.map((b, x) => {
            const w = `${d || b.name || b.dataKey || "value"}`, m = Ql(v, b, w), O = f || b.payload.fill || b.color;
            return /* @__PURE__ */ U(
              "div",
              {
                className: Mt(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: s && b?.value !== void 0 && b.name ? s(b.value, b.name, b, x, b.payload) : /* @__PURE__ */ Ae(Gn, { children: [
                  m?.icon ? /* @__PURE__ */ U(m.icon, {}) : !a && /* @__PURE__ */ U(
                    "div",
                    {
                      className: Mt(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": g && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": O,
                        "--color-border": O
                      }
                    }
                  ),
                  /* @__PURE__ */ Ae(
                    "div",
                    {
                      className: Mt(
                        "flex flex-1 justify-between text-sm leading-none",
                        g ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ Ae("div", { className: "grid gap-2", children: [
                          g ? h : null,
                          /* @__PURE__ */ U("span", { className: "pr-2 text-f1-foreground", children: m?.label || b.name })
                        ] }),
                        b.value && /* @__PURE__ */ U("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: l ? l(String(b.value)) : b.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              b.dataKey
            );
          }) })
        ]
      }
    );
  }
);
kr.displayName = "ChartTooltip";
const Zo = wr, Xi = er.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    hiddenKey: a,
    leftShift: o = 0
  }, u) => {
    const { config: c } = dx();
    return r?.length ? /* @__PURE__ */ U(
      "div",
      {
        ref: u,
        className: Mt(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: o },
        children: r.map((s) => {
          const l = `${i || s.dataKey || "value"}`, f = Ql(
            c,
            s,
            l,
            a
          );
          return /* @__PURE__ */ Ae(
            "div",
            {
              className: Mt(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                f?.icon && !t ? /* @__PURE__ */ U(f.icon, {}) : f && /* @__PURE__ */ U(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: {
                      backgroundColor: s.color
                    }
                  }
                ),
                /* @__PURE__ */ U("span", { className: "text-f1-foreground", children: f?.label })
              ]
            },
            JSON.stringify(s)
          );
        })
      }
    ) : null;
  }
);
Xi.displayName = "ChartLegend";
function Ql(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const i = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let a = r;
  if (r in t && typeof t[r] == "string" ? a = t[r] : i && r in i && typeof i[r] == "string" ? a = i[r] : "dataKey" in t && typeof t.dataKey == "string" && (a = t.dataKey), !(n && n === a))
    return a in e ? e[a] : e[r];
}
const px = nr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), gD = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = Di(e), i = va(() => {
    n(!0);
  }, []), a = va(() => n(!1), []), o = va(() => n((u) => !u), []);
  return /* @__PURE__ */ U(px.Provider, { value: { enable: i, disable: a, toggle: o, enabled: r }, children: t });
}, nD = () => {
  const e = _t(px);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, yt = (e, t) => {
  const r = [
    "categorical-1",
    "categorical-2",
    "categorical-3",
    "categorical-4",
    "categorical-5",
    "categorical-6",
    "categorical-7",
    "categorical-8"
  ];
  return At(r[e % r.length], t);
}, At = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Zi(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const td = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), rd = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e?.domain,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), Jo = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), Qo = (e = !1) => ({
  cursor: !0,
  offset: e ? 0 : 20,
  position: { y: e ? void 0 : 0, x: e ? 120 : void 0 },
  animationDuration: 100,
  isAnimationActive: !0
});
function Nn(e) {
  return ef(e);
}
function nd(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const iD = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, o = e === t - 1;
  return /* @__PURE__ */ U(rr, { ...i, textAnchor: a ? "start" : o ? "end" : "middle", children: n?.(r.value, r.index) ?? r.value });
}, aD = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  canBeBlurred: i,
  blurArea: a,
  lineType: o = "monotoneX",
  aspect: u,
  marginTop: c = 0
}, s) => {
  const { enabled: l } = nD(), f = Object.keys(t), d = Rx(12), p = nd(e), y = Math.max(
    ...p.flatMap(
      (x) => f.map(
        (w) => Zi(
          n?.tickFormatter ? n.tickFormatter(`${x[w]}`) : `${x[w]}`
        )
      )
    )
  ), v = n?.width ?? y + 20, h = !n?.hide, g = !r?.hide, b = !i || !l;
  return /* @__PURE__ */ U(Cr, { config: t, ref: s, aspect: u, children: /* @__PURE__ */ Ae(
    JN,
    {
      accessibilityLayer: !0,
      data: p,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ Ae("defs", { children: [
          /* @__PURE__ */ Ae(
            "linearGradient",
            {
              id: `${d}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${h ? v : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                (a === "l" || a === "lr") && /* @__PURE__ */ Ae(Gn, { children: [
                  /* @__PURE__ */ U("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                  /* @__PURE__ */ U("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ U("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" })
                ] }),
                (a === "r" || a === "lr") && /* @__PURE__ */ Ae(Gn, { children: [
                  /* @__PURE__ */ U("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ U("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                  /* @__PURE__ */ U("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
                ] }),
                !a && /* @__PURE__ */ Ae(Gn, { children: [
                  /* @__PURE__ */ U("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
                  /* @__PURE__ */ U("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ U(
            "mask",
            {
              id: `${d}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ U(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${d}-fadeGradient)`
                }
              )
            }
          ),
          f.map((x, w) => /* @__PURE__ */ Ae(
            "linearGradient",
            {
              id: `fill${String(x)}-${d}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ U(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[x].color ? At(t[x].color) : yt(w),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ U(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[x].color ? At(t[x].color) : yt(w),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            w
          ))
        ] }),
        /* @__PURE__ */ U(
          Gi,
          {
            ...Jo(),
            mask: `url(#${d}-transparent-edges)`
          }
        ),
        g && /* @__PURE__ */ U(
          Kt,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: r?.tickFormatter,
            ticks: r?.ticks,
            domain: r?.domain,
            interval: 0,
            tick: iD
          }
        ),
        h && /* @__PURE__ */ U(
          Ht,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n?.tickCount,
            tickFormatter: i && l ? () => "**" : n?.tickFormatter,
            ticks: n?.ticks,
            domain: n?.domain,
            width: v
          }
        ),
        b && /* @__PURE__ */ U(
          Rn,
          {
            ...Qo(),
            content: /* @__PURE__ */ U(
              kr,
              {
                indicator: "dot",
                yAxisFormatter: n?.tickFormatter
              }
            )
          }
        ),
        f.map((x, w) => /* @__PURE__ */ U(
          cr,
          {
            isAnimationActive: !1,
            dataKey: x,
            type: o,
            mask: `url(#${d}-transparent-edges)`,
            fill: `url(#fill${x}-${d})`,
            fillOpacity: t[x].dashed ? 0 : 0.4,
            stroke: t[x].color ? At(t[x].color) : yt(w),
            strokeWidth: 1.5,
            strokeDasharray: t[x].dashed ? "4 4" : void 0
          },
          x
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ U(
          Zo,
          {
            className: "flex justify-start",
            content: /* @__PURE__ */ U(Xi, {})
          }
        )
      ]
    }
  ) });
}, bD = Nn(aD), oD = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  hideTooltip: o = !1,
  hideGrid: u = !1,
  aspect: c,
  legend: s,
  showValueUnderLabel: l = !1,
  highlightLastBar: f = !1,
  onClick: d
}, p) => {
  const y = Object.keys(e), v = nd(t).map((g, b, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...g,
    fill: b === x.length - 1 ? yt(b) : yt(b, 0.5)
  } : g), h = Math.max(
    ...v.flatMap(
      (g) => y.map(
        (b) => Zi(
          n?.tickFormatter ? n.tickFormatter(`${g[b]}`) : `${g[b]}`
        )
      )
    )
  );
  return /* @__PURE__ */ U(Cr, { config: e, ref: p, aspect: c, children: /* @__PURE__ */ Ae(
    lx,
    {
      accessibilityLayer: !0,
      data: v,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0,
        bottom: l ? 24 : 12
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      onClick: (g) => {
        if (!d || !g.activeLabel || !g.activePayload)
          return;
        const b = {
          label: g.activeLabel,
          values: {}
        };
        for (const x of g.activePayload)
          b.values[x.name] = x.value;
        d(b);
      },
      children: [
        !o && /* @__PURE__ */ U(
          Rn,
          {
            ...Qo(),
            content: /* @__PURE__ */ U(kr, { yAxisFormatter: n.tickFormatter })
          }
        ),
        !u && /* @__PURE__ */ U(Gi, { ...Jo() }),
        /* @__PURE__ */ U(
          Ht,
          {
            ...rd(n),
            tick: !0,
            width: n.width ?? h + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ U(
          Kt,
          {
            ...td(r),
            hide: r?.hide,
            tick: l ? (g) => {
              const { x: b, y: x, payload: w } = g, m = t.find((S) => S.label === w.value)?.values || "", O = Object.keys(m).length === 1 ? Object.values(m)?.[0] : void 0, P = O !== void 0 && n.tickFormatter ? n.tickFormatter(`${O}`) : O.toLocaleString();
              return /* @__PURE__ */ Ae("g", { transform: `translate(${b},${x})`, children: [
                /* @__PURE__ */ U(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: w.value
                  }
                ),
                !!O && /* @__PURE__ */ U(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: P
                  }
                )
              ] });
            } : void 0
          }
        ),
        y.map((g, b) => /* @__PURE__ */ U(
          ur,
          {
            isAnimationActive: !1,
            dataKey: g,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: f ? ((x) => x.fill) : e[g].color ? At(e[g].color) : yt(b),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ U(
              et,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${g}`
            )
          },
          `bar-${g}`
        )),
        s && /* @__PURE__ */ U(
          Zo,
          {
            content: /* @__PURE__ */ U(Xi, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, xD = Nn(oD), uD = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a,
  hideTooltip: o = !1,
  hideGrid: u = !1
}, c) => {
  const s = Object.keys(t), l = nd(e), f = Math.max(
    ...l.flatMap(
      (d) => s.map(
        (p) => Zi(
          n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`
        )
      )
    )
  );
  return /* @__PURE__ */ U(Cr, { config: t, ref: c, aspect: a, children: /* @__PURE__ */ Ae(
    YN,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        !u && /* @__PURE__ */ U(Gi, { ...Jo() }),
        !r?.hide && /* @__PURE__ */ U(Kt, { ...td(r) }),
        !n?.hide && /* @__PURE__ */ U(
          Ht,
          {
            ...rd(n),
            width: n.width ?? f + 20
          }
        ),
        !o && /* @__PURE__ */ U(
          Rn,
          {
            ...Qo(),
            content: /* @__PURE__ */ U(kr, { yAxisFormatter: n?.tickFormatter })
          }
        ),
        s.map((d, p) => /* @__PURE__ */ U(
          Vi,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color ? At(t[d].color) : yt(p),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, OD = Nn(uD), cD = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const o = e.map((l, f) => ({
    ...l,
    fill: t[l.label]?.color ? At(t[l.label].color) : yt(f)
  })), c = e.map((l) => l.value).reduce((l, f) => l + f, 0), s = c === 0 ? 1 : c;
  return c === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), /* @__PURE__ */ U(
    Cr,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ Ae(XN, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        c !== 0 && /* @__PURE__ */ U(
          Rn,
          {
            isAnimationActive: !1,
            content: /* @__PURE__ */ U(kr, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ Ae(
          Ut,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: o,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: [
              o.map((l, f) => {
                const d = i ? i(String(l.value)) : l.value;
                return /* @__PURE__ */ U(
                  $o,
                  {
                    fill: l.fill,
                    "aria-label": `${l.label}: ${d} (${(l.value / s * 100).toFixed(0)}%)`
                  },
                  `cell-${f}`
                );
              }),
              /* @__PURE__ */ U(
                Ie,
                {
                  content: ({ viewBox: l }) => {
                    if (l && "cx" in l && "cy" in l)
                      return /* @__PURE__ */ Ae(
                        "text",
                        {
                          x: l.cx,
                          y: l.cy,
                          textAnchor: "middle",
                          dominantBaseline: "middle",
                          children: [
                            /* @__PURE__ */ U(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) + 8,
                                className: "fill-f1-foreground text-4xl font-semibold",
                                children: r?.number ? i ? i(String(r.number)) : r.number : null
                              }
                            ),
                            /* @__PURE__ */ U(
                              "tspan",
                              {
                                x: l.cx,
                                y: (l.cy || 0) - 16,
                                className: "fill-f1-foreground-secondary",
                                children: r?.label
                              }
                            )
                          ]
                        }
                      );
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ U(
          Zo,
          {
            content: /* @__PURE__ */ U(Xi, { nameKey: "label", hiddenKey: "-" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, wD = Nn(cD);
function sD(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const lD = (e) => {
  const t = Ix.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, o]) => {
        n < o && (n = o, r = a);
      }
    );
  }), r;
}, fD = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a,
  hideTooltip: o = !1,
  hideGrid: u = !1,
  showRatio: c = !1,
  valueFormatter: s
}, l) => {
  const f = Object.keys(e), d = sD(t), p = Math.max(
    ...d.map((g) => Zi(`${g.x}`))
  ), y = f.reduce(
    (g, b) => (g[b] = t.reduce(
      (x, w) => x + w.values[b],
      0
    ), g),
    {}
  ), v = {
    ...td(r),
    type: "number",
    dataKey: lD(d)
  }, h = {
    ...rd(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ U(Cr, { config: e, ref: l, aspect: a, children: /* @__PURE__ */ Ae(
    lx,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: i || c ? 100 : 0
      },
      children: [
        !o && /* @__PURE__ */ U(
          Rn,
          {
            ...Qo(!0),
            content: /* @__PURE__ */ U(kr, { yAxisFormatter: n?.tickFormatter })
          }
        ),
        !u && /* @__PURE__ */ U(
          Gi,
          {
            ...Jo(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ U(Kt, { ...v, hide: r?.hide }),
        /* @__PURE__ */ U(
          Ht,
          {
            ...h,
            hide: n?.hide,
            width: n?.width ?? p + 20
          }
        ),
        f.map((g, b) => /* @__PURE__ */ U(Gn, { children: /* @__PURE__ */ U(
          ur,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: g,
            fill: e[g].color ? At(e[g].color) : yt(b),
            radius: 4,
            maxBarSize: 24,
            children: (i || c) && /* @__PURE__ */ U(
              et,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12,
                formatter: s,
                content: c ? /* @__PURE__ */ U(
                  dD,
                  {
                    valueFormatter: s,
                    total: y[g],
                    showLabel: i
                  }
                ) : void 0
              },
              `label-{${g}}`
            )
          },
          `bar-${g}`
        ) }))
      ]
    }
  ) });
}, PD = Nn(fD), dD = ({
  viewBox: e,
  offset: t = 0,
  value: r,
  valueFormatter: n,
  total: i,
  showLabel: a
}) => {
  const { x: o = 0, y: u = 0, width: c = 0, height: s = 0 } = e, l = o + c + t, f = u + s / 2, d = n ? n(r) : r, p = Zi(`${d}`), y = i > 0 ? Math.round(Number(r) / i * 100) : 0;
  return /* @__PURE__ */ Ae("g", { transform: `translate(${l},${f + 4})`, children: [
    a && /* @__PURE__ */ U(
      "text",
      {
        x: 0,
        textAnchor: "start",
        className: "fill-f1-foreground-secondary text-sm font-medium",
        children: d
      }
    ),
    /* @__PURE__ */ Ae(
      "text",
      {
        x: a ? p + 8 : 0,
        textAnchor: "start",
        className: "fill-f1-foreground text-sm font-medium",
        children: [
          y,
          "%"
        ]
      }
    )
  ] });
}, pD = ({
  data: e,
  dataConfig: t,
  scaleMin: r,
  scaleMax: n,
  aspect: i,
  dataTestId: a
}, o) => {
  const u = Object.keys(t), c = e.map((s) => ({
    subject: s.label,
    ...s.values
  }));
  return /* @__PURE__ */ U(Cx, { dataTestId: a, children: /* @__PURE__ */ U(
    Cr,
    {
      config: t,
      ref: o,
      aspect: i,
      "data-chromatic": "ignore",
      children: /* @__PURE__ */ Ae(ZN, { accessibilityLayer: !0, data: c, children: [
        /* @__PURE__ */ U(
          Rn,
          {
            cursor: !0,
            content: /* @__PURE__ */ U(kr, { indicator: "dot" })
          }
        ),
        /* @__PURE__ */ U(o0, { gridType: "circle" }),
        /* @__PURE__ */ U(Cn, { dataKey: "subject" }),
        /* @__PURE__ */ U(
          In,
          {
            angle: 90,
            type: "number",
            domain: [r ?? "dataMin", n ?? "dataMax"]
          }
        ),
        u.map((s, l) => /* @__PURE__ */ U(
          Hi,
          {
            dataKey: s,
            fill: t[s].color ? At(t[s].color) : yt(l),
            stroke: t[s].color ? At(t[s].color) : yt(l),
            strokeWidth: 1.5,
            fillOpacity: 0.3,
            label: t[s].label,
            isAnimationActive: !1
          },
          s
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ U(Zo, { iconType: "star", content: /* @__PURE__ */ U(Xi, {}) })
      ] })
    }
  ) });
}, AD = Nn(pD);
export {
  Ut as $,
  ct as A,
  ur as B,
  Sr as C,
  Gi as D,
  Ki as E,
  Jo as F,
  Wt as G,
  rd as H,
  td as I,
  Zo as J,
  Xi as K,
  oe as L,
  bD as M,
  xD as N,
  OD as O,
  wD as P,
  nD as Q,
  AD as R,
  f0 as S,
  Rx as T,
  Mg as U,
  PD as V,
  yf as W,
  Kt as X,
  Ht as Y,
  XN as Z,
  pD as _,
  pf as a,
  wg as a0,
  gD as a1,
  _r as b,
  Qe as c,
  mD as d,
  Q as e,
  X as f,
  _e as g,
  ne as h,
  Se as i,
  et as j,
  $o as k,
  za as l,
  Yi as m,
  Vi as n,
  cr as o,
  Kf as p,
  Nn as q,
  At as r,
  yt as s,
  nd as t,
  jr as u,
  Zi as v,
  Cr as w,
  Rn as x,
  Qo as y,
  kr as z
};
