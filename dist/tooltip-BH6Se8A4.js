import { jsx as O, Fragment as Rn, jsxs as Sn } from "react/jsx-runtime";
import * as d from "react";
import { useLayoutEffect as On, useEffect as Tn } from "react";
import * as Ct from "react-dom";
import kn from "react-dom";
function At(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = At(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Ln() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = At(e)) && (o && (o += " "), o += t);
  return o;
}
const Ye = "-", Mn = (e) => {
  const t = Dn(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(Ye);
      return a[0] === "" && a.length !== 1 && a.shift(), Et(a, t) || Nn(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const c = n[i] || [];
      return a && o[i] ? [...c, ...o[i]] : c;
    }
  };
}, Et = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? Et(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ye);
  return t.validators.find(({
    validator: i
  }) => i(s))?.classGroupId;
}, it = /^\[(.+)\]$/, Nn = (e) => {
  if (it.test(e)) {
    const t = it.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Dn = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return In(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    We(i, o, s, t);
  }), o;
}, We = (e, t, n, o) => {
  e.forEach((r) => {
    if (typeof r == "string") {
      const s = r === "" ? t : at(t, r);
      s.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (_n(r)) {
        We(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([s, i]) => {
      We(i, at(t, s), n, o);
    });
  });
}, at = (e, t) => {
  let n = e;
  return t.split(Ye).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, _n = (e) => e.isThemeGetter, In = (e, t) => t ? e.map(([n, o]) => {
  const r = o.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, r];
}) : e, zn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = o.get(s)) !== void 0)
        return r(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : r(s, i);
    }
  };
}, Pt = "!", $n = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, o = t.length === 1, r = t[0], s = t.length, i = (a) => {
    const c = [];
    let l = 0, u = 0, f;
    for (let b = 0; b < a.length; b++) {
      let y = a[b];
      if (l === 0) {
        if (y === r && (o || a.slice(b, b + s) === t)) {
          c.push(a.slice(u, b)), u = b + s;
          continue;
        }
        if (y === "/") {
          f = b;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    const m = c.length === 0 ? a : a.substring(u), p = m.startsWith(Pt), g = p ? m.substring(1) : m, h = f && f > u ? f - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: i
  }) : i;
}, Fn = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Wn = (e) => ({
  cache: zn(e.cacheSize),
  parseClassName: $n(e),
  ...Mn(e)
}), Hn = /\s+/, Bn = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, s = [], i = e.trim().split(Hn);
  let a = "";
  for (let c = i.length - 1; c >= 0; c -= 1) {
    const l = i[c], {
      modifiers: u,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: p
    } = n(l);
    let g = !!p, h = o(g ? m.substring(0, p) : m);
    if (!h) {
      if (!g) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = o(m), !h) {
        a = l + (a.length > 0 ? " " + a : a);
        continue;
      }
      g = !1;
    }
    const b = Fn(u).join(":"), y = f ? b + Pt : b, w = y + h;
    if (s.includes(w))
      continue;
    s.push(w);
    const x = r(h, g);
    for (let v = 0; v < x.length; ++v) {
      const A = x[v];
      s.push(y + A);
    }
    a = l + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Vn() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Rt(t)) && (o && (o += " "), o += n);
  return o;
}
const Rt = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Rt(e[o])) && (n && (n += " "), n += t);
  return n;
};
function jn(e, ...t) {
  let n, o, r, s = i;
  function i(c) {
    const l = t.reduce((u, f) => f(u), e());
    return n = Wn(l), o = n.cache.get, r = n.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = o(c);
    if (l)
      return l;
    const u = Bn(c, n);
    return r(c, u), u;
  }
  return function() {
    return s(Vn.apply(null, arguments));
  };
}
const M = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, St = /^\[(?:([a-z-]+):)?(.+)\]$/i, Gn = /^\d+\/\d+$/, Un = /* @__PURE__ */ new Set(["px", "full", "screen"]), Yn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Kn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, K = (e) => ce(e) || Un.has(e) || Gn.test(e), ee = (e) => fe(e, "length", so), ce = (e) => !!e && !Number.isNaN(Number(e)), ze = (e) => fe(e, "number", ce), he = (e) => !!e && Number.isInteger(Number(e)), Jn = (e) => e.endsWith("%") && ce(e.slice(0, -1)), P = (e) => St.test(e), te = (e) => Yn.test(e), Qn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), eo = (e) => fe(e, Qn, Ot), to = (e) => fe(e, "position", Ot), no = /* @__PURE__ */ new Set(["image", "url"]), oo = (e) => fe(e, no, ao), ro = (e) => fe(e, "", io), be = () => !0, fe = (e, t, n) => {
  const o = St.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, so = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xn.test(e) && !qn.test(e)
), Ot = () => !1, io = (e) => Kn.test(e), ao = (e) => Zn.test(e), co = () => {
  const e = M("colors"), t = M("spacing"), n = M("blur"), o = M("brightness"), r = M("borderColor"), s = M("borderRadius"), i = M("borderSpacing"), a = M("borderWidth"), c = M("contrast"), l = M("grayscale"), u = M("hueRotate"), f = M("invert"), m = M("gap"), p = M("gradientColorStops"), g = M("gradientColorStopPositions"), h = M("inset"), b = M("margin"), y = M("opacity"), w = M("padding"), x = M("saturate"), v = M("scale"), A = M("sepia"), E = M("skew"), C = M("space"), L = M("translate"), z = () => ["auto", "contain", "none"], T = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", P, t], R = () => [P, t], D = () => ["", K, ee], k = () => ["auto", ce, P], F = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], N = () => ["solid", "dashed", "dotted", "double", "none"], _ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], S = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", P], W = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], V = () => [ce, P];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [be],
      spacing: [K, ee],
      blur: ["none", "", te, P],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", te, P],
      borderSpacing: R(),
      borderWidth: D(),
      contrast: V(),
      grayscale: I(),
      hueRotate: V(),
      invert: I(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Jn, ee],
      inset: $(),
      margin: $(),
      opacity: V(),
      padding: R(),
      saturate: V(),
      scale: V(),
      sepia: I(),
      skew: V(),
      space: R(),
      translate: R()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", P]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [te]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": W()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": W()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...F(), P]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: T()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": T()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": T()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", he, P]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: I()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: I()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", he, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [be]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", he, P]
        }, P]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [be]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [he, P]
        }, P]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", P]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", P]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...S()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...S(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...S(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [C]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [C]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", P, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [P, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [P, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [te]
        }, te]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [P, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [P, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [P, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", te, ee]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ze]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [be]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ce, ze]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", K, P]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", P]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", P]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...N(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", K, ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", K, P]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", P]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...F(), to]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", eo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, oo]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...N(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: N()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [r]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...N()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [K, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [K, ee]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: D()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [K, ee]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", te, ro]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [be]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [..._(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": _()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", te, P]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: V()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: V()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", P]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [he, P]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", P]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [K, ee, ze]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, lo = /* @__PURE__ */ jn(co);
function Tt(...e) {
  return lo(Ln(e));
}
function Ns(e) {
  return Tt(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
    e
  );
}
function Z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e?.(r), n === !1 || !r.defaultPrevented)
      return t?.(r);
  };
}
function ct(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function kt(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = ct(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : ct(e[r], null);
        }
      };
  };
}
function ae(...e) {
  return d.useCallback(kt(...e), e);
}
function Lt(e, t = []) {
  let n = [];
  function o(s, i) {
    const a = d.createContext(i), c = n.length;
    n = [...n, i];
    const l = (f) => {
      const { scope: m, children: p, ...g } = f, h = m?.[e]?.[c] || a, b = d.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ O(h.Provider, { value: b, children: p });
    };
    l.displayName = s + "Provider";
    function u(f, m) {
      const p = m?.[e]?.[c] || a, g = d.useContext(p);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [l, u];
  }
  const r = () => {
    const s = n.map((i) => d.createContext(i));
    return function(a) {
      const c = a?.[e] || s;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return r.scopeName = e, [o, uo(r, ...t)];
}
function uo(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(s) {
      const i = o.reduce((a, { useScope: c, scopeName: l }) => {
        const f = c(s)[`__scope${l}`];
        return { ...a, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ fo(e), n = d.forwardRef((o, r) => {
    const { children: s, ...i } = o, a = d.Children.toArray(s), c = a.find(mo);
    if (c) {
      const l = c.props.children, u = a.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ O(t, { ...i, ref: r, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ O(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ds = /* @__PURE__ */ Mt("Slot");
// @__NO_SIDE_EFFECTS__
function fo(e) {
  const t = d.forwardRef((n, o) => {
    const { children: r, ...s } = n;
    if (d.isValidElement(r)) {
      const i = ho(r), a = go(s, r.props);
      return r.type !== d.Fragment && (a.ref = o ? kt(o, i) : i), d.cloneElement(r, a);
    }
    return d.Children.count(r) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Nt = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function po(e) {
  const t = ({ children: n }) => /* @__PURE__ */ O(Rn, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = Nt, t;
}
function mo(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Nt;
}
function go(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
      const c = s(...a);
      return r(...a), c;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function ho(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var bo = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], se = bo.reduce((e, t) => {
  const n = /* @__PURE__ */ Mt(`Primitive.${t}`), o = d.forwardRef((r, s) => {
    const { asChild: i, ...a } = r, c = i ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O(c, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function yo(e, t) {
  e && Ct.flushSync(() => e.dispatchEvent(t));
}
function ke(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => t.current?.(...n), []);
}
function wo(e, t = globalThis?.document) {
  const n = ke(e);
  d.useEffect(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o, { capture: !0 }), () => t.removeEventListener("keydown", o, { capture: !0 });
  }, [n, t]);
}
var vo = "DismissableLayer", He = "dismissableLayer.update", xo = "dismissableLayer.pointerDownOutside", Co = "dismissableLayer.focusOutside", lt, Dt = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _t = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: o,
      onPointerDownOutside: r,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, l = d.useContext(Dt), [u, f] = d.useState(null), m = u?.ownerDocument ?? globalThis?.document, [, p] = d.useState({}), g = ae(t, (C) => f(C)), h = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(b), w = u ? h.indexOf(u) : -1, x = l.layersWithOutsidePointerEventsDisabled.size > 0, v = w >= y, A = Po((C) => {
      const L = C.target, z = [...l.branches].some((T) => T.contains(L));
      !v || z || (r?.(C), i?.(C), C.defaultPrevented || a?.());
    }, m), E = Ro((C) => {
      const L = C.target;
      [...l.branches].some((T) => T.contains(L)) || (s?.(C), i?.(C), C.defaultPrevented || a?.());
    }, m);
    return wo((C) => {
      w === l.layers.size - 1 && (o?.(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
    }, m), d.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (lt = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), ut(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = lt);
        };
    }, [u, m, n, l]), d.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), ut());
    }, [u, l]), d.useEffect(() => {
      const C = () => p({});
      return document.addEventListener(He, C), () => document.removeEventListener(He, C);
    }, []), /* @__PURE__ */ O(
      se.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: x ? v ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Z(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Z(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Z(
          e.onPointerDownCapture,
          A.onPointerDownCapture
        )
      }
    );
  }
);
_t.displayName = vo;
var Ao = "DismissableLayerBranch", Eo = d.forwardRef((e, t) => {
  const n = d.useContext(Dt), o = d.useRef(null), r = ae(t, o);
  return d.useEffect(() => {
    const s = o.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ O(se.div, { ...e, ref: r });
});
Eo.displayName = Ao;
function Po(e, t = globalThis?.document) {
  const n = ke(e), o = d.useRef(!1), r = d.useRef(() => {
  });
  return d.useEffect(() => {
    const s = (a) => {
      if (a.target && !o.current) {
        let c = function() {
          It(
            xo,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = c, t.addEventListener("click", r.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Ro(e, t = globalThis?.document) {
  const n = ke(e), o = d.useRef(!1);
  return d.useEffect(() => {
    const r = (s) => {
      s.target && !o.current && It(Co, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ut() {
  const e = new CustomEvent(He);
  document.dispatchEvent(e);
}
function It(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? yo(r, s) : r.dispatchEvent(s);
}
var ne = globalThis?.document ? d.useLayoutEffect : () => {
}, So = d[" useId ".trim().toString()] || (() => {
}), Oo = 0;
function To(e) {
  const [t, n] = d.useState(So());
  return ne(() => {
    n((o) => o ?? String(Oo++));
  }, [e]), t ? `radix-${t}` : "";
}
const ko = ["top", "right", "bottom", "left"], oe = Math.min, H = Math.max, Re = Math.round, Ae = Math.floor, Y = (e) => ({
  x: e,
  y: e
}), Lo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mo = {
  start: "end",
  end: "start"
};
function Be(e, t, n) {
  return H(e, oe(t, n));
}
function J(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Q(e) {
  return e.split("-")[0];
}
function pe(e) {
  return e.split("-")[1];
}
function Xe(e) {
  return e === "x" ? "y" : "x";
}
function qe(e) {
  return e === "y" ? "height" : "width";
}
const No = /* @__PURE__ */ new Set(["top", "bottom"]);
function U(e) {
  return No.has(Q(e)) ? "y" : "x";
}
function Ke(e) {
  return Xe(U(e));
}
function Do(e, t, n) {
  n === void 0 && (n = !1);
  const o = pe(e), r = Ke(e), s = qe(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Se(i)), [i, Se(i)];
}
function _o(e) {
  const t = Se(e);
  return [Ve(e), t, Ve(t)];
}
function Ve(e) {
  return e.replace(/start|end/g, (t) => Mo[t]);
}
const dt = ["left", "right"], ft = ["right", "left"], Io = ["top", "bottom"], zo = ["bottom", "top"];
function $o(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ft : dt : t ? dt : ft;
    case "left":
    case "right":
      return t ? Io : zo;
    default:
      return [];
  }
}
function Fo(e, t, n, o) {
  const r = pe(e);
  let s = $o(Q(e), n === "start", o);
  return r && (s = s.map((i) => i + "-" + r), t && (s = s.concat(s.map(Ve)))), s;
}
function Se(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lo[t]);
}
function Wo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zt(e) {
  return typeof e != "number" ? Wo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Oe(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function pt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const s = U(t), i = Ke(t), a = qe(i), c = Q(t), l = s === "y", u = o.x + o.width / 2 - r.width / 2, f = o.y + o.height / 2 - r.height / 2, m = o[a] / 2 - r[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: f
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (pe(t)) {
    case "start":
      p[i] -= m * (n && l ? -1 : 1);
      break;
    case "end":
      p[i] += m * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Ho(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = J(t, e), g = zt(p), b = a[m ? f === "floating" ? "reference" : "floating" : f], y = Oe(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = f === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), v = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Oe(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: x,
    strategy: c
  }) : w);
  return {
    top: (y.top - A.top + g.top) / v.y,
    bottom: (A.bottom - y.bottom + g.bottom) / v.y,
    left: (y.left - A.left + g.left) / v.x,
    right: (A.right - y.right + g.right) / v.x
  };
}
const Bo = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: f
  } = pt(l, o, c), m = o, p = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    var h;
    const {
      name: y,
      fn: w
    } = a[b], {
      x,
      y: v,
      data: A,
      reset: E
    } = await w({
      x: u,
      y: f,
      initialPlacement: o,
      placement: m,
      strategy: r,
      middlewareData: p,
      rects: l,
      platform: {
        ...i,
        detectOverflow: (h = i.detectOverflow) != null ? h : Ho
      },
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, f = v ?? f, p = {
      ...p,
      [y]: {
        ...p[y],
        ...A
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (l = E.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : E.rects), {
      x: u,
      y: f
    } = pt(l, m, c)), b = -1);
  }
  return {
    x: u,
    y: f,
    placement: m,
    strategy: r,
    middlewareData: p
  };
}, Vo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = J(e, t) || {};
    if (l == null)
      return {};
    const f = zt(u), m = {
      x: n,
      y: o
    }, p = Ke(r), g = qe(p), h = await i.getDimensions(l), b = p === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", x = b ? "clientHeight" : "clientWidth", v = s.reference[g] + s.reference[p] - m[p] - s.floating[g], A = m[p] - s.reference[p], E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
    let C = E ? E[x] : 0;
    (!C || !await (i.isElement == null ? void 0 : i.isElement(E))) && (C = a.floating[x] || s.floating[g]);
    const L = v / 2 - A / 2, z = C / 2 - h[g] / 2 - 1, T = oe(f[y], z), $ = oe(f[w], z), R = T, D = C - h[g] - $, k = C / 2 - h[g] / 2 + L, F = Be(R, k, D), N = !c.arrow && pe(r) != null && k !== F && s.reference[g] / 2 - (k < R ? T : $) - h[g] / 2 < 0, _ = N ? k < R ? k - R : k - D : 0;
    return {
      [p]: m[p] + _,
      data: {
        [p]: F,
        centerOffset: k - F - _,
        ...N && {
          alignmentOffset: _
        }
      },
      reset: N
    };
  }
}), jo = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: h = !0,
        ...b
      } = J(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Q(r), w = U(a), x = Q(a) === a, v = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), A = m || (x || !h ? [Se(a)] : _o(a)), E = g !== "none";
      !m && E && A.push(...Fo(a, h, g, v));
      const C = [a, ...A], L = await c.detectOverflow(t, b), z = [];
      let T = ((o = s.flip) == null ? void 0 : o.overflows) || [];
      if (u && z.push(L[y]), f) {
        const k = Do(r, i, v);
        z.push(L[k[0]], L[k[1]]);
      }
      if (T = [...T, {
        placement: r,
        overflows: z
      }], !z.every((k) => k <= 0)) {
        var $, R;
        const k = ((($ = s.flip) == null ? void 0 : $.index) || 0) + 1, F = C[k];
        if (F && (!(f === "alignment" ? w !== U(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((S) => U(S.placement) === w ? S.overflows[0] > 0 : !0)))
          return {
            data: {
              index: k,
              overflows: T
            },
            reset: {
              placement: F
            }
          };
        let N = (R = T.filter((_) => _.overflows[0] <= 0).sort((_, S) => _.overflows[1] - S.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!N)
          switch (p) {
            case "bestFit": {
              var D;
              const _ = (D = T.filter((S) => {
                if (E) {
                  const I = U(S.placement);
                  return I === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  I === "y";
                }
                return !0;
              }).map((S) => [S.placement, S.overflows.filter((I) => I > 0).reduce((I, W) => I + W, 0)]).sort((S, I) => S[1] - I[1])[0]) == null ? void 0 : D[0];
              _ && (N = _);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function mt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function gt(e) {
  return ko.some((t) => e[t] >= 0);
}
const Go = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = J(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await o.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = mt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: gt(a)
            }
          };
        }
        case "escaped": {
          const i = await o.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = mt(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: gt(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, $t = /* @__PURE__ */ new Set(["left", "top"]);
async function Uo(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, s = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = Q(n), a = pe(n), c = U(n) === "y", l = $t.has(i) ? -1 : 1, u = s && c ? -1 : 1, f = J(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), c ? {
    x: p * u,
    y: m * l
  } : {
    x: m * l,
    y: p * u
  };
}
const Yo = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: s,
        placement: i,
        middlewareData: a
      } = t, c = await Uo(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, Xo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x: w,
              y: x
            } = y;
            return {
              x: w,
              y: x
            };
          }
        },
        ...l
      } = J(e, t), u = {
        x: n,
        y: o
      }, f = await s.detectOverflow(t, l), m = U(Q(r)), p = Xe(m);
      let g = u[p], h = u[m];
      if (i) {
        const y = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", x = g + f[y], v = g - f[w];
        g = Be(x, g, v);
      }
      if (a) {
        const y = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", x = h + f[y], v = h - f[w];
        h = Be(x, h, v);
      }
      const b = c.fn({
        ...t,
        [p]: g,
        [m]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - o,
          enabled: {
            [p]: i,
            [m]: a
          }
        }
      };
    }
  };
}, qo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = J(e, t), u = {
        x: n,
        y: o
      }, f = U(r), m = Xe(f);
      let p = u[m], g = u[f];
      const h = J(a, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const x = m === "y" ? "height" : "width", v = s.reference[m] - s.floating[x] + b.mainAxis, A = s.reference[m] + s.reference[x] - b.mainAxis;
        p < v ? p = v : p > A && (p = A);
      }
      if (l) {
        var y, w;
        const x = m === "y" ? "width" : "height", v = $t.has(Q(r)), A = s.reference[f] - s.floating[x] + (v && ((y = i.offset) == null ? void 0 : y[f]) || 0) + (v ? 0 : b.crossAxis), E = s.reference[f] + s.reference[x] + (v ? 0 : ((w = i.offset) == null ? void 0 : w[f]) || 0) - (v ? b.crossAxis : 0);
        g < A ? g = A : g > E && (g = E);
      }
      return {
        [m]: p,
        [f]: g
      };
    }
  };
}, Ko = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...l
      } = J(e, t), u = await i.detectOverflow(t, l), f = Q(r), m = pe(r), p = U(r) === "y", {
        width: g,
        height: h
      } = s.floating;
      let b, y;
      f === "top" || f === "bottom" ? (b = f, y = m === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = f, b = m === "end" ? "top" : "bottom");
      const w = h - u.top - u.bottom, x = g - u.left - u.right, v = oe(h - u[b], w), A = oe(g - u[y], x), E = !t.middlewareData.shift;
      let C = v, L = A;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (L = x), (o = t.middlewareData.shift) != null && o.enabled.y && (C = w), E && !m) {
        const T = H(u.left, 0), $ = H(u.right, 0), R = H(u.top, 0), D = H(u.bottom, 0);
        p ? L = g - 2 * (T !== 0 || $ !== 0 ? T + $ : H(u.left, u.right)) : C = h - 2 * (R !== 0 || D !== 0 ? R + D : H(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: L,
        availableHeight: C
      });
      const z = await i.getDimensions(a.floating);
      return g !== z.width || h !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Le() {
  return typeof window < "u";
}
function me(e) {
  return Ft(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function B(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function q(e) {
  var t;
  return (t = (Ft(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ft(e) {
  return Le() ? e instanceof Node || e instanceof B(e).Node : !1;
}
function j(e) {
  return Le() ? e instanceof Element || e instanceof B(e).Element : !1;
}
function X(e) {
  return Le() ? e instanceof HTMLElement || e instanceof B(e).HTMLElement : !1;
}
function ht(e) {
  return !Le() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof B(e).ShadowRoot;
}
const Zo = /* @__PURE__ */ new Set(["inline", "contents"]);
function ve(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = G(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !Zo.has(r);
}
const Jo = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Qo(e) {
  return Jo.has(me(e));
}
const er = [":popover-open", ":modal"];
function Me(e) {
  return er.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const tr = ["transform", "translate", "scale", "rotate", "perspective"], nr = ["transform", "translate", "scale", "rotate", "perspective", "filter"], or = ["paint", "layout", "strict", "content"];
function Ze(e) {
  const t = Je(), n = j(e) ? G(e) : e;
  return tr.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || nr.some((o) => (n.willChange || "").includes(o)) || or.some((o) => (n.contain || "").includes(o));
}
function rr(e) {
  let t = re(e);
  for (; X(t) && !ue(t); ) {
    if (Ze(t))
      return t;
    if (Me(t))
      return null;
    t = re(t);
  }
  return null;
}
function Je() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const sr = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ue(e) {
  return sr.has(me(e));
}
function G(e) {
  return B(e).getComputedStyle(e);
}
function Ne(e) {
  return j(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function re(e) {
  if (me(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ht(e) && e.host || // Fallback.
    q(e)
  );
  return ht(t) ? t.host : t;
}
function Wt(e) {
  const t = re(e);
  return ue(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : X(t) && ve(t) ? t : Wt(t);
}
function ye(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Wt(e), s = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = B(r);
  if (s) {
    const a = je(i);
    return t.concat(i, i.visualViewport || [], ve(r) ? r : [], a && n ? ye(a) : []);
  }
  return t.concat(r, ye(r, [], n));
}
function je(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ht(e) {
  const t = G(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = X(e), s = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, a = Re(n) !== s || Re(o) !== i;
  return a && (n = s, o = i), {
    width: n,
    height: o,
    $: a
  };
}
function Qe(e) {
  return j(e) ? e : e.contextElement;
}
function le(e) {
  const t = Qe(e);
  if (!X(t))
    return Y(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: s
  } = Ht(t);
  let i = (s ? Re(n.width) : n.width) / o, a = (s ? Re(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const ir = /* @__PURE__ */ Y(0);
function Bt(e) {
  const t = B(e);
  return !Je() || !t.visualViewport ? ir : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ar(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== B(e) ? !1 : t;
}
function ie(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), s = Qe(e);
  let i = Y(1);
  t && (o ? j(o) && (i = le(o)) : i = le(e));
  const a = ar(s, n, o) ? Bt(s) : Y(0);
  let c = (r.left + a.x) / i.x, l = (r.top + a.y) / i.y, u = r.width / i.x, f = r.height / i.y;
  if (s) {
    const m = B(s), p = o && j(o) ? B(o) : o;
    let g = m, h = je(g);
    for (; h && o && p !== g; ) {
      const b = le(h), y = h.getBoundingClientRect(), w = G(h), x = y.left + (h.clientLeft + parseFloat(w.paddingLeft)) * b.x, v = y.top + (h.clientTop + parseFloat(w.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, f *= b.y, c += x, l += v, g = B(h), h = je(g);
    }
  }
  return Oe({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function De(e, t) {
  const n = Ne(e).scrollLeft;
  return t ? t.left + n : ie(q(e)).left + n;
}
function Vt(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - De(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function cr(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const s = r === "fixed", i = q(o), a = t ? Me(t.floating) : !1;
  if (o === i || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Y(1);
  const u = Y(0), f = X(o);
  if ((f || !f && !s) && ((me(o) !== "body" || ve(i)) && (c = Ne(o)), X(o))) {
    const p = ie(o);
    l = le(o), u.x = p.x + o.clientLeft, u.y = p.y + o.clientTop;
  }
  const m = i && !f && !s ? Vt(i, c) : Y(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + m.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + m.y
  };
}
function lr(e) {
  return Array.from(e.getClientRects());
}
function ur(e) {
  const t = q(e), n = Ne(e), o = e.ownerDocument.body, r = H(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), s = H(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + De(e);
  const a = -n.scrollTop;
  return G(o).direction === "rtl" && (i += H(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: s,
    x: i,
    y: a
  };
}
const bt = 25;
function dr(e, t) {
  const n = B(e), o = q(e), r = n.visualViewport;
  let s = o.clientWidth, i = o.clientHeight, a = 0, c = 0;
  if (r) {
    s = r.width, i = r.height;
    const u = Je();
    (!u || u && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  const l = De(o);
  if (l <= 0) {
    const u = o.ownerDocument, f = u.body, m = getComputedStyle(f), p = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, g = Math.abs(o.clientWidth - f.clientWidth - p);
    g <= bt && (s -= g);
  } else l <= bt && (s += l);
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
const fr = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function pr(e, t) {
  const n = ie(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, s = X(e) ? le(e) : Y(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = r * s.x, l = o * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: l
  };
}
function yt(e, t, n) {
  let o;
  if (t === "viewport")
    o = dr(e, n);
  else if (t === "document")
    o = ur(q(e));
  else if (j(t))
    o = pr(t, n);
  else {
    const r = Bt(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return Oe(o);
}
function jt(e, t) {
  const n = re(e);
  return n === t || !j(n) || ue(n) ? !1 : G(n).position === "fixed" || jt(n, t);
}
function mr(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = ye(e, [], !1).filter((a) => j(a) && me(a) !== "body"), r = null;
  const s = G(e).position === "fixed";
  let i = s ? re(e) : e;
  for (; j(i) && !ue(i); ) {
    const a = G(i), c = Ze(i);
    !c && a.position === "fixed" && (r = null), (s ? !c && !r : !c && a.position === "static" && !!r && fr.has(r.position) || ve(i) && !c && jt(e, i)) ? o = o.filter((u) => u !== i) : r = a, i = re(i);
  }
  return t.set(e, o), o;
}
function gr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Me(t) ? [] : mr(t, this._c) : [].concat(n), o], a = i[0], c = i.reduce((l, u) => {
    const f = yt(t, u, r);
    return l.top = H(f.top, l.top), l.right = oe(f.right, l.right), l.bottom = oe(f.bottom, l.bottom), l.left = H(f.left, l.left), l;
  }, yt(t, a, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function hr(e) {
  const {
    width: t,
    height: n
  } = Ht(e);
  return {
    width: t,
    height: n
  };
}
function br(e, t, n) {
  const o = X(t), r = q(t), s = n === "fixed", i = ie(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Y(0);
  function l() {
    c.x = De(r);
  }
  if (o || !o && !s)
    if ((me(t) !== "body" || ve(r)) && (a = Ne(t)), o) {
      const p = ie(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else r && l();
  s && !o && r && l();
  const u = r && !o && !s ? Vt(r, a) : Y(0), f = i.left + a.scrollLeft - c.x - u.x, m = i.top + a.scrollTop - c.y - u.y;
  return {
    x: f,
    y: m,
    width: i.width,
    height: i.height
  };
}
function $e(e) {
  return G(e).position === "static";
}
function wt(e, t) {
  if (!X(e) || G(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return q(e) === n && (n = n.ownerDocument.body), n;
}
function Gt(e, t) {
  const n = B(e);
  if (Me(e))
    return n;
  if (!X(e)) {
    let r = re(e);
    for (; r && !ue(r); ) {
      if (j(r) && !$e(r))
        return r;
      r = re(r);
    }
    return n;
  }
  let o = wt(e, t);
  for (; o && Qo(o) && $e(o); )
    o = wt(o, t);
  return o && ue(o) && $e(o) && !Ze(o) ? n : o || rr(e) || n;
}
const yr = async function(e) {
  const t = this.getOffsetParent || Gt, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: br(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function wr(e) {
  return G(e).direction === "rtl";
}
const vr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cr,
  getDocumentElement: q,
  getClippingRect: gr,
  getOffsetParent: Gt,
  getElementRects: yr,
  getClientRects: lr,
  getDimensions: hr,
  getScale: le,
  isElement: j,
  isRTL: wr
};
function Ut(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function xr(e, t) {
  let n = null, o;
  const r = q(e);
  function s() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: m,
      height: p
    } = l;
    if (a || t(), !m || !p)
      return;
    const g = Ae(f), h = Ae(r.clientWidth - (u + m)), b = Ae(r.clientHeight - (f + p)), y = Ae(u), x = {
      rootMargin: -g + "px " + -h + "px " + -b + "px " + -y + "px",
      threshold: H(0, oe(1, c)) || 1
    };
    let v = !0;
    function A(E) {
      const C = E[0].intersectionRatio;
      if (C !== c) {
        if (!v)
          return i();
        C ? i(!1, C) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ut(l, e.getBoundingClientRect()) && i(), v = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...x,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, x);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Cr(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, l = Qe(e), u = r || s ? [...l ? ye(l) : [], ...ye(t)] : [];
  u.forEach((y) => {
    r && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const f = l && a ? xr(l, n) : null;
  let m = -1, p = null;
  i && (p = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === l && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let g, h = c ? ie(e) : null;
  c && b();
  function b() {
    const y = ie(e);
    h && !Ut(h, y) && n(), h = y, g = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    u.forEach((w) => {
      r && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), f?.(), (y = p) == null || y.disconnect(), p = null, c && cancelAnimationFrame(g);
  };
}
const Ar = Yo, Er = Xo, Pr = jo, Rr = Ko, Sr = Go, vt = Vo, Or = qo, Tr = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: vr,
    ...n
  }, s = {
    ...r.platform,
    _c: o
  };
  return Bo(e, t, {
    ...r,
    platform: s
  });
};
var Pe = typeof document < "u" ? On : Tn;
function Te(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!Te(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const s = r[o];
      if (!(s === "_owner" && e.$$typeof) && !Te(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Yt(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xt(e, t) {
  const n = Yt(e);
  return Math.round(t * n) / n;
}
function Fe(e) {
  const t = d.useRef(e);
  return Pe(() => {
    t.current = e;
  }), t;
}
function kr(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, f] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, p] = d.useState(o);
  Te(m, o) || p(o);
  const [g, h] = d.useState(null), [b, y] = d.useState(null), w = d.useCallback((S) => {
    S !== E.current && (E.current = S, h(S));
  }, []), x = d.useCallback((S) => {
    S !== C.current && (C.current = S, y(S));
  }, []), v = s || g, A = i || b, E = d.useRef(null), C = d.useRef(null), L = d.useRef(u), z = c != null, T = Fe(c), $ = Fe(r), R = Fe(l), D = d.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const S = {
      placement: t,
      strategy: n,
      middleware: m
    };
    $.current && (S.platform = $.current), Tr(E.current, C.current, S).then((I) => {
      const W = {
        ...I,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      k.current && !Te(L.current, W) && (L.current = W, Ct.flushSync(() => {
        f(W);
      }));
    });
  }, [m, t, n, $, R]);
  Pe(() => {
    l === !1 && L.current.isPositioned && (L.current.isPositioned = !1, f((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [l]);
  const k = d.useRef(!1);
  Pe(() => (k.current = !0, () => {
    k.current = !1;
  }), []), Pe(() => {
    if (v && (E.current = v), A && (C.current = A), v && A) {
      if (T.current)
        return T.current(v, A, D);
      D();
    }
  }, [v, A, D, T, z]);
  const F = d.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: w,
    setFloating: x
  }), [w, x]), N = d.useMemo(() => ({
    reference: v,
    floating: A
  }), [v, A]), _ = d.useMemo(() => {
    const S = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return S;
    const I = xt(N.floating, u.x), W = xt(N.floating, u.y);
    return a ? {
      ...S,
      transform: "translate(" + I + "px, " + W + "px)",
      ...Yt(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: I,
      top: W
    };
  }, [n, a, N.floating, u.x, u.y]);
  return d.useMemo(() => ({
    ...u,
    update: D,
    refs: F,
    elements: N,
    floatingStyles: _
  }), [u, D, F, N, _]);
}
const Lr = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? vt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? vt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Mr = (e, t) => ({
  ...Ar(e),
  options: [e, t]
}), Nr = (e, t) => ({
  ...Er(e),
  options: [e, t]
}), Dr = (e, t) => ({
  ...Or(e),
  options: [e, t]
}), _r = (e, t) => ({
  ...Pr(e),
  options: [e, t]
}), Ir = (e, t) => ({
  ...Rr(e),
  options: [e, t]
}), zr = (e, t) => ({
  ...Sr(e),
  options: [e, t]
}), $r = (e, t) => ({
  ...Lr(e),
  options: [e, t]
});
var Fr = "Arrow", Xt = d.forwardRef((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...s } = e;
  return /* @__PURE__ */ O(
    se.svg,
    {
      ...s,
      ref: t,
      width: o,
      height: r,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ O("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Xt.displayName = Fr;
var Wr = Xt;
function Hr(e) {
  const [t, n] = d.useState(void 0);
  return ne(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const s = r[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, a = l.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var et = "Popper", [qt, Kt] = Lt(et), [Br, Zt] = qt(et), Jt = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = d.useState(null);
  return /* @__PURE__ */ O(Br, { scope: t, anchor: o, onAnchorChange: r, children: n });
};
Jt.displayName = et;
var Qt = "PopperAnchor", en = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: o, ...r } = e, s = Zt(Qt, n), i = d.useRef(null), a = ae(t, i), c = d.useRef(null);
    return d.useEffect(() => {
      const l = c.current;
      c.current = o?.current || i.current, l !== c.current && s.onAnchorChange(c.current);
    }), o ? null : /* @__PURE__ */ O(se.div, { ...r, ref: a });
  }
);
en.displayName = Qt;
var tt = "PopperContent", [Vr, jr] = qt(tt), tn = d.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: o = "bottom",
      sideOffset: r = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: g,
      ...h
    } = e, b = Zt(tt, n), [y, w] = d.useState(null), x = ae(t, (ge) => w(ge)), [v, A] = d.useState(null), E = Hr(v), C = E?.width ?? 0, L = E?.height ?? 0, z = o + (s !== "center" ? "-" + s : ""), T = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, $ = Array.isArray(l) ? l : [l], R = $.length > 0, D = {
      padding: T,
      boundary: $.filter(Ur),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: k, floatingStyles: F, placement: N, isPositioned: _, middlewareData: S } = kr({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: z,
      whileElementsMounted: (...ge) => Cr(...ge, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Mr({ mainAxis: r + L, alignmentAxis: i }),
        c && Nr({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Dr() : void 0,
          ...D
        }),
        c && _r({ ...D }),
        Ir({
          ...D,
          apply: ({ elements: ge, rects: st, availableWidth: Cn, availableHeight: An }) => {
            const { width: En, height: Pn } = st.reference, Ce = ge.floating.style;
            Ce.setProperty("--radix-popper-available-width", `${Cn}px`), Ce.setProperty("--radix-popper-available-height", `${An}px`), Ce.setProperty("--radix-popper-anchor-width", `${En}px`), Ce.setProperty("--radix-popper-anchor-height", `${Pn}px`);
          }
        }),
        v && $r({ element: v, padding: a }),
        Yr({ arrowWidth: C, arrowHeight: L }),
        m && zr({ strategy: "referenceHidden", ...D })
      ]
    }), [I, W] = rn(N), V = ke(g);
    ne(() => {
      _ && V?.();
    }, [_, V]);
    const bn = S.arrow?.x, yn = S.arrow?.y, wn = S.arrow?.centerOffset !== 0, [vn, xn] = d.useState();
    return ne(() => {
      y && xn(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ O(
      "div",
      {
        ref: k.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...F,
          transform: _ ? F.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: vn,
          "--radix-popper-transform-origin": [
            S.transformOrigin?.x,
            S.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...S.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ O(
          Vr,
          {
            scope: n,
            placedSide: I,
            onArrowChange: A,
            arrowX: bn,
            arrowY: yn,
            shouldHideArrow: wn,
            children: /* @__PURE__ */ O(
              se.div,
              {
                "data-side": I,
                "data-align": W,
                ...h,
                ref: x,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: _ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
tn.displayName = tt;
var nn = "PopperArrow", Gr = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, on = d.forwardRef(function(t, n) {
  const { __scopePopper: o, ...r } = t, s = jr(nn, o), i = Gr[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ O(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ O(
          Wr,
          {
            ...r,
            ref: n,
            style: {
              ...r.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
on.displayName = nn;
function Ur(e) {
  return e !== null;
}
var Yr = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, i = r.arrow?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [l, u] = rn(n), f = { start: "0%", center: "50%", end: "100%" }[u], m = (r.arrow?.x ?? 0) + a / 2, p = (r.arrow?.y ?? 0) + c / 2;
    let g = "", h = "";
    return l === "bottom" ? (g = i ? f : `${m}px`, h = `${-c}px`) : l === "top" ? (g = i ? f : `${m}px`, h = `${o.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, h = i ? f : `${p}px`) : l === "left" && (g = `${o.floating.width + c}px`, h = i ? f : `${p}px`), { data: { x: g, y: h } };
  }
});
function rn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Xr = Jt, qr = en, Kr = tn, Zr = on, Jr = "Portal", sn = d.forwardRef((e, t) => {
  const { container: n, ...o } = e, [r, s] = d.useState(!1);
  ne(() => s(!0), []);
  const i = n || r && globalThis?.document?.body;
  return i ? kn.createPortal(/* @__PURE__ */ O(se.div, { ...o, ref: t }), i) : null;
});
sn.displayName = Jr;
function Qr(e, t) {
  return d.useReducer((n, o) => t[n][o] ?? n, e);
}
var nt = (e) => {
  const { present: t, children: n } = e, o = es(t), r = typeof n == "function" ? n({ present: o.isPresent }) : d.Children.only(n), s = ae(o.ref, ts(r));
  return typeof n == "function" || o.isPresent ? d.cloneElement(r, { ref: s }) : null;
};
nt.displayName = "Presence";
function es(e) {
  const [t, n] = d.useState(), o = d.useRef(null), r = d.useRef(e), s = d.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = Qr(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return d.useEffect(() => {
    const l = Ee(o.current);
    s.current = a === "mounted" ? l : "none";
  }, [a]), ne(() => {
    const l = o.current, u = r.current;
    if (u !== e) {
      const m = s.current, p = Ee(l);
      e ? c("MOUNT") : p === "none" || l?.display === "none" ? c("UNMOUNT") : c(u && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, c]), ne(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, f = (p) => {
        const h = Ee(o.current).includes(CSS.escape(p.animationName));
        if (p.target === t && h && (c("ANIMATION_END"), !r.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (p) => {
        p.target === t && (s.current = Ee(o.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: d.useCallback((l) => {
      o.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Ee(e) {
  return e?.animationName || "none";
}
function ts(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ns = d[" useInsertionEffect ".trim().toString()] || ne;
function os({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: o
}) {
  const [r, s, i] = rs({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : r;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const f = u.current;
      f !== a && console.warn(
        `${o} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, o]);
  }
  const l = d.useCallback(
    (u) => {
      if (a) {
        const f = ss(u) ? u(e) : u;
        f !== e && i.current?.(f);
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [c, l];
}
function rs({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = d.useState(e), r = d.useRef(n), s = d.useRef(t);
  return ns(() => {
    s.current = t;
  }, [t]), d.useEffect(() => {
    r.current !== n && (s.current?.(n), r.current = n);
  }, [n, r]), [n, o, s];
}
function ss(e) {
  return typeof e == "function";
}
var is = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), as = "VisuallyHidden", an = d.forwardRef(
  (e, t) => /* @__PURE__ */ O(
    se.span,
    {
      ...e,
      ref: t,
      style: { ...is, ...e.style }
    }
  )
);
an.displayName = as;
var cs = an, [_e] = Lt("Tooltip", [
  Kt
]), Ie = Kt(), cn = "TooltipProvider", ls = 700, Ge = "tooltip.open", [us, ot] = _e(cn), ln = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = ls,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: s
  } = e, i = d.useRef(!0), a = d.useRef(!1), c = d.useRef(0);
  return d.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ O(
    us,
    {
      scope: t,
      isOpenDelayedRef: i,
      delayDuration: n,
      onOpen: d.useCallback(() => {
        window.clearTimeout(c.current), i.current = !1;
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => i.current = !0,
          o
        );
      }, [o]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: d.useCallback((l) => {
        a.current = l;
      }, []),
      disableHoverableContent: r,
      children: s
    }
  );
};
ln.displayName = cn;
var we = "Tooltip", [ds, xe] = _e(we), un = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: s,
    disableHoverableContent: i,
    delayDuration: a
  } = e, c = ot(we, e.__scopeTooltip), l = Ie(t), [u, f] = d.useState(null), m = To(), p = d.useRef(0), g = i ?? c.disableHoverableContent, h = a ?? c.delayDuration, b = d.useRef(!1), [y, w] = os({
    prop: o,
    defaultProp: r ?? !1,
    onChange: (C) => {
      C ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ge))) : c.onClose(), s?.(C);
    },
    caller: we
  }), x = d.useMemo(() => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y]), v = d.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b.current = !1, w(!0);
  }, [w]), A = d.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, w(!1);
  }, [w]), E = d.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      b.current = !0, w(!0), p.current = 0;
    }, h);
  }, [h, w]);
  return d.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ O(Xr, { ...l, children: /* @__PURE__ */ O(
    ds,
    {
      scope: t,
      contentId: m,
      open: y,
      stateAttribute: x,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: d.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : v();
      }, [c.isOpenDelayedRef, E, v]),
      onTriggerLeave: d.useCallback(() => {
        g ? A() : (window.clearTimeout(p.current), p.current = 0);
      }, [A, g]),
      onOpen: v,
      onClose: A,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
un.displayName = we;
var Ue = "TooltipTrigger", dn = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = xe(Ue, n), s = ot(Ue, n), i = Ie(n), a = d.useRef(null), c = ae(t, a, r.onTriggerChange), l = d.useRef(!1), u = d.useRef(!1), f = d.useCallback(() => l.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ O(qr, { asChild: !0, ...i, children: /* @__PURE__ */ O(
      se.button,
      {
        "aria-describedby": r.open ? r.contentId : void 0,
        "data-state": r.stateAttribute,
        ...o,
        ref: c,
        onPointerMove: Z(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (r.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Z(e.onPointerLeave, () => {
          r.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Z(e.onPointerDown, () => {
          r.open && r.onClose(), l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: Z(e.onFocus, () => {
          l.current || r.onOpen();
        }),
        onBlur: Z(e.onBlur, r.onClose),
        onClick: Z(e.onClick, r.onClose)
      }
    ) });
  }
);
dn.displayName = Ue;
var rt = "TooltipPortal", [fs, ps] = _e(rt, {
  forceMount: void 0
}), fn = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, s = xe(rt, t);
  return /* @__PURE__ */ O(fs, { scope: t, forceMount: n, children: /* @__PURE__ */ O(nt, { present: n || s.open, children: /* @__PURE__ */ O(sn, { asChild: !0, container: r, children: o }) }) });
};
fn.displayName = rt;
var de = "TooltipContent", pn = d.forwardRef(
  (e, t) => {
    const n = ps(de, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...s } = e, i = xe(de, e.__scopeTooltip);
    return /* @__PURE__ */ O(nt, { present: o || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ O(mn, { side: r, ...s, ref: t }) : /* @__PURE__ */ O(ms, { side: r, ...s, ref: t }) });
  }
), ms = d.forwardRef((e, t) => {
  const n = xe(de, e.__scopeTooltip), o = ot(de, e.__scopeTooltip), r = d.useRef(null), s = ae(t, r), [i, a] = d.useState(null), { trigger: c, onClose: l } = n, u = r.current, { onPointerInTransitChange: f } = o, m = d.useCallback(() => {
    a(null), f(!1);
  }, [f]), p = d.useCallback(
    (g, h) => {
      const b = g.currentTarget, y = { x: g.clientX, y: g.clientY }, w = ws(y, b.getBoundingClientRect()), x = vs(y, w), v = xs(h.getBoundingClientRect()), A = As([...x, ...v]);
      a(A), f(!0);
    },
    [f]
  );
  return d.useEffect(() => () => m(), [m]), d.useEffect(() => {
    if (c && u) {
      const g = (b) => p(b, u), h = (b) => p(b, c);
      return c.addEventListener("pointerleave", g), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", h);
      };
    }
  }, [c, u, p, m]), d.useEffect(() => {
    if (i) {
      const g = (h) => {
        const b = h.target, y = { x: h.clientX, y: h.clientY }, w = c?.contains(b) || u?.contains(b), x = !Cs(y, i);
        w ? m() : x && (m(), l());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, u, i, l, m]), /* @__PURE__ */ O(mn, { ...e, ref: s });
}), [gs, hs] = _e(we, { isInside: !1 }), bs = /* @__PURE__ */ po("TooltipContent"), mn = d.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: o,
      "aria-label": r,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      ...a
    } = e, c = xe(de, n), l = Ie(n), { onClose: u } = c;
    return d.useEffect(() => (document.addEventListener(Ge, u), () => document.removeEventListener(Ge, u)), [u]), d.useEffect(() => {
      if (c.trigger) {
        const f = (m) => {
          m.target?.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ O(
      _t,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ Sn(
          Kr,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ O(bs, { children: o }),
              /* @__PURE__ */ O(gs, { scope: n, isInside: !0, children: /* @__PURE__ */ O(cs, { id: c.contentId, role: "tooltip", children: r || o }) })
            ]
          }
        )
      }
    );
  }
);
pn.displayName = de;
var gn = "TooltipArrow", ys = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...o } = e, r = Ie(n);
    return hs(
      gn,
      n
    ).isInside ? null : /* @__PURE__ */ O(Zr, { ...r, ...o, ref: t });
  }
);
ys.displayName = gn;
function ws(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, s)) {
    case s:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vs(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
function xs(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
function Cs(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s], c = t[i], l = a.x, u = a.y, f = c.x, m = c.y;
    u > o != m > o && n < (f - l) * (o - u) / (m - u) + l && (r = !r);
  }
  return r;
}
function As(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), Es(t);
}
function Es(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], i = t[t.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], i = n[n.length - 2];
      if ((s.x - i.x) * (r.y - i.y) >= (s.y - i.y) * (r.x - i.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Ps = ln, Rs = un, Ss = dn, Os = fn, hn = pn;
const _s = Ps, Is = Rs, zs = Ss, Ts = d.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ O(Os, { children: /* @__PURE__ */ O(
  hn,
  {
    ref: o,
    sideOffset: t,
    className: Tt(
      "z-50 overflow-hidden rounded bg-f1-background border border-solid border-f1-border-secondary dark px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left",
      "break-words",
      e
    ),
    ...n
  }
) }));
Ts.displayName = hn.displayName;
export {
  qr as A,
  zr as B,
  Kr as C,
  _t as D,
  Dr as E,
  Cr as F,
  ne as G,
  se as P,
  Xr as R,
  Ds as S,
  _s as T,
  is as V,
  Is as a,
  zs as b,
  Ts as c,
  Tt as d,
  Ln as e,
  Ns as f,
  Lt as g,
  Z as h,
  ae as i,
  Hr as j,
  Mt as k,
  ke as l,
  To as m,
  Kt as n,
  nt as o,
  sn as p,
  kt as q,
  yo as r,
  Zr as s,
  kr as t,
  os as u,
  Mr as v,
  Nr as w,
  _r as x,
  Ir as y,
  $r as z
};
