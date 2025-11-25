import { jsx as m, Fragment as ee, jsxs as D } from "react/jsx-runtime";
import { useCopilotChatInternal as ne, useCopilotContext as Ti, useCopilotAction as $e, CopilotKit as Po } from "@copilotkit/react-core";
import { Markdown as Mo, useChatContext as Do, CopilotSidebar as Vo, CopilotChat as Eo } from "@copilotkit/react-ui";
import { F0Icon as Ht, F0Button as We, F0Link as Ro, experimental as dn } from "@factorialco/f0-react";
import * as w from "react";
import { createContext as at, useRef as j, useLayoutEffect as ko, useEffect as nt, useId as se, useContext as B, useInsertionEffect as wi, useMemo as st, useCallback as Ot, Children as No, isValidElement as Oo, useState as K, forwardRef as hn, Fragment as Si, createElement as Lo, Component as Io } from "react";
import { clsx as Ci } from "clsx";
import { twMerge as Fo } from "tailwind-merge";
import Bo from "@factorialco/f0-react/icons/animated/CheckCircleLine";
import jo from "@factorialco/f0-react/icons/app/DottedCircle";
import Uo from "@factorialco/f0-react/icons/app/ExternalLink";
import $o from "@factorialco/f0-react/icons/app/Search";
import Wo from "@factorialco/f0-react/icons/app/ChevronRight";
import { useMediaQuery as _o, useResizeObserver as Ko, useEventListener as zo } from "usehooks-ts";
import "react-dom";
import { Action as Go } from "@factorialco/f0-react/ui/Action";
import { ButtonInternal as lt } from "@factorialco/f0-react/components/F0Button/internal";
import { ThumbsUpFilled as Ho, ThumbsUp as Yo, ThumbsDownFilled as qo, ThumbsDown as Xo, SolidStop as Zo, ArrowUp as Jo, ArrowDown as Ai } from "@factorialco/f0-react/icons/app";
import Qo from "@factorialco/f0-react/icons/app/Download";
import { ButtonCopy as ta } from "@factorialco/f0-react/ui/ButtonCopy";
import { Input as ea } from "@factorialco/f0-react/experimental/Forms/Fields/Input";
import { OneModal as ce } from "@factorialco/f0-react/experimental/Modals/OneModal";
import na from "@factorialco/f0-react/icons/app/Lightbulb";
import { randomId as sa } from "@copilotkit/shared";
import ia from "@factorialco/f0-react/icons/app/Cross";
import './index.css';function E(...t) {
  return Fo(Ci(t));
}
const fn = at({});
function mn(t) {
  const e = j(null);
  return e.current === null && (e.current = t()), e.current;
}
const pn = typeof window < "u", Pi = pn ? ko : nt, Ae = /* @__PURE__ */ at(null), gn = at({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Mi(t) {
  return typeof t == "object" && t !== null;
}
function yn(t) {
  return Mi(t) && "offsetHeight" in t;
}
class ra extends w.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = yn(s) && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function oa({ children: t, isPresent: e, anchorX: n }) {
  const s = se(), i = j(null), o = j({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: r } = B(gn);
  return wi(() => {
    const { width: a, height: l, top: u, left: c, right: d } = o.current;
    if (e || !i.current || !a || !l)
      return;
    const h = n === "left" ? `left: ${c}` : `right: ${d}`;
    i.current.dataset.motionPopId = s;
    const f = document.createElement("style");
    return r && (f.nonce = r), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `), () => {
      document.head.contains(f) && document.head.removeChild(f);
    };
  }, [e]), m(ra, { isPresent: e, childRef: i, sizeRef: o, children: w.cloneElement(t, { ref: i }) });
}
const aa = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a }) => {
  const l = mn(la), u = se();
  let c = !0, d = st(() => (c = !1, {
    id: u,
    initial: e,
    isPresent: n,
    custom: i,
    onExitComplete: (h) => {
      l.set(h, !0);
      for (const f of l.values())
        if (!f)
          return;
      s && s();
    },
    register: (h) => (l.set(h, !1), () => l.delete(h))
  }), [n, l, s]);
  return o && c && (d = { ...d }), st(() => {
    l.forEach((h, f) => l.set(f, !1));
  }, [n]), w.useEffect(() => {
    !n && !l.size && s && s();
  }, [n]), r === "popLayout" && (t = m(oa, { isPresent: n, anchorX: a, children: t })), m(Ae.Provider, { value: d, children: t });
};
function la() {
  return /* @__PURE__ */ new Map();
}
function Di(t = !0) {
  const e = B(Ae);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = se();
  nt(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = Ot(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const ue = (t) => t.key || "";
function es(t) {
  const e = [];
  return No.forEach(t, (n) => {
    Oo(n) && e.push(n);
  }), e;
}
const ie = ({ children: t, custom: e, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left" }) => {
  const [l, u] = Di(r), c = st(() => es(t), [t]), d = r && !l ? [] : c.map(ue), h = j(!0), f = j(c), p = mn(() => /* @__PURE__ */ new Map()), [g, b] = K(c), [y, T] = K(c);
  Pi(() => {
    h.current = !1, f.current = c;
    for (let x = 0; x < y.length; x++) {
      const S = ue(y[x]);
      d.includes(S) ? p.delete(S) : p.get(S) !== !0 && p.set(S, !1);
    }
  }, [y, d.length, d.join("-")]);
  const v = [];
  if (c !== g) {
    let x = [...c];
    for (let S = 0; S < y.length; S++) {
      const M = y[S], A = ue(M);
      d.includes(A) || (x.splice(S, 0, M), v.push(M));
    }
    return o === "wait" && v.length && (x = v), T(es(x)), b(c), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: C } = B(fn);
  return m(ee, { children: y.map((x) => {
    const S = ue(x), M = r && !l ? !1 : c === y || d.includes(S), A = () => {
      if (p.has(S))
        p.set(S, !0);
      else
        return;
      let R = !0;
      p.forEach((k) => {
        k || (R = !1);
      }), R && (C == null || C(), T(f.current), r && (u == null || u()), s && s());
    };
    return m(aa, { isPresent: M, initial: !h.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: i, mode: o, onExitComplete: M ? void 0 : A, anchorX: a, children: x }, S);
  }) });
}, de = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], ns = {
  value: null
};
function ca(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, l = 0;
  function u(d) {
    r.has(d) && (c.schedule(d), t()), l++, d(a);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (d, h = !1, f = !1) => {
      const g = f && i ? n : s;
      return h && r.add(d), g.has(d) || g.add(d), d;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (d) => {
      s.delete(d), r.delete(d);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (d) => {
      if (a = d, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(u), e && ns.value && ns.value.frameloop[e].push(l), l = 0, n.clear(), i = !1, o && (o = !1, c.process(d));
    }
  };
  return c;
}
const ct = {}, ua = 40;
function Vi(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = de.reduce((v, C) => (v[C] = ca(o, e ? C : void 0), v), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: h, render: f, postRender: p } = r, g = () => {
    const v = ct.useManualTiming ? i.timestamp : performance.now();
    n = !1, ct.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, ua), 1)), i.timestamp = v, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), d.process(i), h.process(i), f.process(i), p.process(i), i.isProcessing = !1, n && e && (s = !1, t(g));
  }, b = () => {
    n = !0, s = !0, i.isProcessing || t(g);
  };
  return { schedule: de.reduce((v, C) => {
    const x = r[C];
    return v[C] = (S, M = !1, A = !1) => (n || b(), x.schedule(S, M, A)), v;
  }, {}), cancel: (v) => {
    for (let C = 0; C < de.length; C++)
      r[de[C]].cancel(v);
  }, state: i, steps: r };
}
const J = /* @__NO_SIDE_EFFECTS__ */ (t) => t, { schedule: I, cancel: mt, state: _, steps: Ve } = /* @__PURE__ */ Vi(typeof requestAnimationFrame < "u" ? requestAnimationFrame : J, !0), Ei = at({ strict: !1 }), ss = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Lt = {};
for (const t in ss)
  Lt[t] = {
    isEnabled: (e) => ss[t].some((n) => !!e[n])
  };
function da(t) {
  for (const e in t)
    Lt[e] = {
      ...Lt[e],
      ...t[e]
    };
}
const ha = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function be(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || ha.has(t);
}
let Ri = (t) => !be(t);
function fa(t) {
  t && (Ri = (e) => e.startsWith("on") ? !be(e) : t(e));
}
try {
  fa(require("@emotion/is-prop-valid").default);
} catch {
}
function ma(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (Ri(i) || n === !0 && be(i) || !e && !be(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const is = /* @__PURE__ */ new Set();
function vn(t, e, n) {
  t || is.has(e) || (console.warn(e), is.add(e));
}
function pa(t) {
  if (typeof Proxy > "u")
    return t;
  const e = /* @__PURE__ */ new Map(), n = (...s) => (process.env.NODE_ENV !== "production" && vn(!1, "motion() is deprecated. Use motion.create() instead."), t(...s));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => i === "create" ? t : (e.has(i) || e.set(i, t(i)), e.get(i))
  });
}
const Pe = /* @__PURE__ */ at({});
function Me(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Yt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const bn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], xn = ["initial", ...bn];
function De(t) {
  return Me(t.animate) || xn.some((e) => Yt(t[e]));
}
function ki(t) {
  return !!(De(t) || t.variants);
}
function ga(t, e) {
  if (De(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Yt(n) ? n : void 0,
      animate: Yt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function ya(t) {
  const { initial: e, animate: n } = ga(t, B(Pe));
  return st(() => ({ initial: e, animate: n }), [rs(e), rs(n)]);
}
function rs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const va = Symbol.for("motionComponentSymbol");
function Dt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function ba(t, e, n) {
  return Ot(
    (s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : Dt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Tn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), xa = "framerAppearId", Ni = "data-" + Tn(xa), Oi = at({}), { schedule: wn } = /* @__PURE__ */ Vi(queueMicrotask, !1);
function Ta(t, e, n, s, i) {
  var g, b;
  const { visualElement: o } = B(Pe), r = B(Ei), a = B(Ae), l = B(gn).reducedMotion, u = j(null);
  s = s || r.renderer, !u.current && s && (u.current = s(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, d = B(Oi);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && wa(u.current, n, i, d);
  const h = j(!1);
  wi(() => {
    c && h.current && c.update(n, a);
  });
  const f = n[Ni], p = j(!!f && !((g = window.MotionHandoffIsComplete) != null && g.call(window, f)) && ((b = window.MotionHasOptimisedAnimation) == null ? void 0 : b.call(window, f)));
  return Pi(() => {
    c && (h.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), wn.render(c.render), p.current && c.animationState && c.animationState.animateChanges());
  }), nt(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      var y;
      (y = window.MotionHandoffMarkAsComplete) == null || y.call(window, f);
    }), p.current = !1));
  }), c;
}
function wa(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Li(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && Dt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Li(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Li(t.parent);
}
let Ft = () => {
}, ut = () => {
};
process.env.NODE_ENV !== "production" && (Ft = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, ut = (t, e) => {
  if (!t)
    throw new Error(e);
});
function Sa({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  t && da(t);
  function o(a, l) {
    let u;
    const c = {
      ...B(gn),
      ...a,
      layoutId: Ca(a)
    }, { isStatic: d } = c, h = ya(a), f = s(a, d);
    if (!d && pn) {
      Aa(c, t);
      const p = Pa(c);
      u = p.MeasureLayout, h.visualElement = Ta(i, f, c, e, p.ProjectionNode);
    }
    return D(Pe.Provider, { value: h, children: [u && h.visualElement ? m(u, { visualElement: h.visualElement, ...c }) : null, n(i, a, ba(f, h.visualElement, l), f, d, h.visualElement)] });
  }
  o.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const r = hn(o);
  return r[va] = i, r;
}
function Ca({ layoutId: t }) {
  const e = B(fn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function Aa(t, e) {
  const n = B(Ei).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Ft(!1, s) : ut(!1, s);
  }
}
function Pa(t) {
  const { drag: e, layout: n } = Lt;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e != null && e.isEnabled(t) || n != null && n.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
const Ii = (t) => (e) => typeof e == "string" && e.startsWith(t), Sn = /* @__PURE__ */ Ii("--"), Ma = /* @__PURE__ */ Ii("var(--"), Cn = (t) => Ma(t) ? Da.test(t.split("/*")[0].trim()) : !1, Da = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, qt = {};
function Va(t) {
  for (const e in t)
    qt[e] = t[e], Sn(e) && (qt[e].isCSSVariable = !0);
}
const Bt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], jt = new Set(Bt);
function Fi(t, { layout: e, layoutId: n }) {
  return jt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!qt[t] || t === "opacity");
}
const Bi = (t, e) => e && typeof t == "number" ? e.transform(t) : t, dt = (t, e, n) => n > e ? e : n < t ? t : n, Ut = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Xt = {
  ...Ut,
  transform: (t) => dt(0, 1, t)
}, he = {
  ...Ut,
  default: 1
}, os = {
  ...Ut,
  transform: Math.round
}, re = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ft = /* @__PURE__ */ re("deg"), rt = /* @__PURE__ */ re("%"), P = /* @__PURE__ */ re("px"), Ea = /* @__PURE__ */ re("vh"), Ra = /* @__PURE__ */ re("vw"), as = {
  ...rt,
  parse: (t) => rt.parse(t) / 100,
  transform: (t) => rt.transform(t * 100)
}, ka = {
  rotate: ft,
  rotateX: ft,
  rotateY: ft,
  rotateZ: ft,
  scale: he,
  scaleX: he,
  scaleY: he,
  scaleZ: he,
  skew: ft,
  skewX: ft,
  skewY: ft,
  distance: P,
  translateX: P,
  translateY: P,
  translateZ: P,
  x: P,
  y: P,
  z: P,
  perspective: P,
  transformPerspective: P,
  opacity: Xt,
  originX: as,
  originY: as,
  originZ: P
}, An = {
  // Border props
  borderWidth: P,
  borderTopWidth: P,
  borderRightWidth: P,
  borderBottomWidth: P,
  borderLeftWidth: P,
  borderRadius: P,
  radius: P,
  borderTopLeftRadius: P,
  borderTopRightRadius: P,
  borderBottomRightRadius: P,
  borderBottomLeftRadius: P,
  // Positioning props
  width: P,
  maxWidth: P,
  height: P,
  maxHeight: P,
  top: P,
  right: P,
  bottom: P,
  left: P,
  // Spacing props
  padding: P,
  paddingTop: P,
  paddingRight: P,
  paddingBottom: P,
  paddingLeft: P,
  margin: P,
  marginTop: P,
  marginRight: P,
  marginBottom: P,
  marginLeft: P,
  // Misc
  backgroundPositionX: P,
  backgroundPositionY: P,
  ...ka,
  zIndex: os,
  // SVG
  fillOpacity: Xt,
  strokeOpacity: Xt,
  numOctaves: os
}, Na = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Oa = Bt.length;
function La(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < Oa; o++) {
    const r = Bt[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Bi(a, An[r]);
      if (!l) {
        i = !1;
        const c = Na[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function Pn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (jt.has(l)) {
      r = !0;
      continue;
    } else if (Sn(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Bi(u, An[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = La(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Mn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), G = (t) => !!(t && t.getVelocity);
function ji(t, e, n) {
  for (const s in e)
    !G(e[s]) && !Fi(s, n) && (t[s] = e[s]);
}
function Ia({ transformTemplate: t }, e) {
  return st(() => {
    const n = Mn();
    return Pn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Fa(t, e) {
  const n = t.style || {}, s = {};
  return ji(s, n, t), Object.assign(s, Ia(t, e)), s;
}
function Ba(t, e) {
  const n = {}, s = Fa(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const ja = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Ua = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function $a(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? ja : Ua;
  t[o.offset] = P.transform(-s);
  const r = P.transform(e), a = P.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Ui(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (Pn(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: h } = t;
  d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete d.transformBox), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), i !== void 0 && $a(d, i, o, r, !1);
}
const $i = () => ({
  ...Mn(),
  attrs: {}
}), Wi = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Wa(t, e, n, s) {
  const i = st(() => {
    const o = $i();
    return Ui(o, e, Wi(s), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ji(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const _a = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Dn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(_a.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ka(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (Dn(n) ? Wa : Ba)(s, o, r, n), u = ma(s, typeof n == "string", t), c = n !== Si ? { ...u, ...l, ref: i } : {}, { children: d } = s, h = st(() => G(d) ? d.get() : d, [d]);
    return Lo(n, {
      ...c,
      children: h
    });
  };
}
function ls(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Vn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = ls(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = ls(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function pe(t) {
  return G(t) ? t.get() : t;
}
function za({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return {
    latestValues: Ga(n, s, i, t),
    renderState: e()
  };
}
const _i = (t) => (e, n) => {
  const s = B(Pe), i = B(Ae), o = () => za(t, e, s, i);
  return n ? o() : mn(o);
};
function Ga(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const h in o)
    i[h] = pe(o[h]);
  let { initial: r, animate: a } = t;
  const l = De(t), u = ki(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const d = c ? a : r;
  if (d && typeof d != "boolean" && !Me(d)) {
    const h = Array.isArray(d) ? d : [d];
    for (let f = 0; f < h.length; f++) {
      const p = Vn(t, h[f]);
      if (p) {
        const { transitionEnd: g, transition: b, ...y } = p;
        for (const T in y) {
          let v = y[T];
          if (Array.isArray(v)) {
            const C = c ? v.length - 1 : 0;
            v = v[C];
          }
          v !== null && (i[T] = v);
        }
        for (const T in g)
          i[T] = g[T];
      }
    }
  }
  return i;
}
function En(t, e, n) {
  var o;
  const { style: s } = t, i = {};
  for (const r in s)
    (G(s[r]) || e.style && G(e.style[r]) || Fi(r, t) || ((o = n == null ? void 0 : n.getValue(r)) == null ? void 0 : o.liveStyle) !== void 0) && (i[r] = s[r]);
  return i;
}
const Ha = {
  useVisualState: _i({
    scrapeMotionValuesFromProps: En,
    createRenderState: Mn
  })
};
function Ki(t, e, n) {
  const s = En(t, e, n);
  for (const i in t)
    if (G(t[i]) || G(e[i])) {
      const o = Bt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
const Ya = {
  useVisualState: _i({
    scrapeMotionValuesFromProps: Ki,
    createRenderState: $i
  })
};
function qa(t, e) {
  return function(s, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const r = {
      ...Dn(s) ? Ya : Ha,
      preloadedFeatures: t,
      useRender: Ka(i),
      createVisualElement: e,
      Component: s
    };
    return Sa(r);
  };
}
function Zt(t, e, n) {
  const s = t.getProps();
  return Vn(s, e, n !== void 0 ? n : s.custom, t);
}
const _e = (t) => Array.isArray(t);
let ge;
function Xa() {
  ge = void 0;
}
const Y = {
  now: () => (ge === void 0 && Y.set(_.isProcessing || ct.useManualTiming ? _.timestamp : performance.now()), ge),
  set: (t) => {
    ge = t, queueMicrotask(Xa);
  }
};
function Rn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function kn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class Nn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return Rn(this.subscriptions, e), () => kn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function zi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const cs = 30, Za = (t) => !isNaN(parseFloat(t));
class Ja {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      var r, a;
      const o = Y.now();
      if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && ((r = this.events.change) == null || r.notify(this.current), this.dependents))
        for (const l of this.dependents)
          l.dirty();
      i && ((a = this.events.renderRequest) == null || a.notify(this.current));
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = Y.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Za(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && vn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new Nn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), I.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var e;
    (e = this.events.change) == null || e.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = Y.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > cs)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, cs);
    return zi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var e, n;
    (e = this.dependents) == null || e.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function It(t, e) {
  return new Ja(t, e);
}
function Qa(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, It(n));
}
function tl(t) {
  return _e(t) ? t[t.length - 1] || 0 : t;
}
function el(t, e) {
  const n = Zt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = tl(o[r]);
    Qa(t, r, a);
  }
}
function nl(t) {
  return !!(G(t) && t.add);
}
function Ke(t, e) {
  const n = t.getValue("willChange");
  if (nl(n))
    return n.add(e);
  if (!n && ct.WillChange) {
    const s = new ct.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Gi(t) {
  return t.props[Ni];
}
const sl = (t) => t !== null;
function il(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(sl), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const rl = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ol = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), al = {
  type: "keyframes",
  duration: 0.8
}, ll = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, cl = (t, { keyframes: e }) => e.length > 2 ? al : jt.has(t) ? t.startsWith("scale") ? ol(e[1]) : rl : ll;
function ul({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
function On(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const et = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ot = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, _t = (t) => Math.round(t * 1e5) / 1e5, Ln = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function dl(t) {
  return t == null;
}
const hl = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, In = (t, e) => (n) => !!(typeof n == "string" && hl.test(n) && n.startsWith(t) || e && !dl(n) && Object.prototype.hasOwnProperty.call(n, e)), Hi = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(Ln);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, fl = (t) => dt(0, 255, t), Ee = {
  ...Ut,
  transform: (t) => Math.round(fl(t))
}, xt = {
  test: /* @__PURE__ */ In("rgb", "red"),
  parse: /* @__PURE__ */ Hi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + Ee.transform(t) + ", " + Ee.transform(e) + ", " + Ee.transform(n) + ", " + _t(Xt.transform(s)) + ")"
};
function ml(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const ze = {
  test: /* @__PURE__ */ In("#"),
  parse: ml,
  transform: xt.transform
}, Vt = {
  test: /* @__PURE__ */ In("hsl", "hue"),
  parse: /* @__PURE__ */ Hi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + rt.transform(_t(e)) + ", " + rt.transform(_t(n)) + ", " + _t(Xt.transform(s)) + ")"
}, z = {
  test: (t) => xt.test(t) || ze.test(t) || Vt.test(t),
  parse: (t) => xt.test(t) ? xt.parse(t) : Vt.test(t) ? Vt.parse(t) : ze.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? xt.transform(t) : Vt.transform(t)
}, pl = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gl(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Ln)) == null ? void 0 : e.length) || 0) + (((n = t.match(pl)) == null ? void 0 : n.length) || 0) > 0;
}
const Yi = "number", qi = "color", yl = "var", vl = "var(", us = "${}", bl = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Jt(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(bl, (l) => (z.test(l) ? (s.color.push(o), i.push(qi), n.push(z.parse(l))) : l.startsWith(vl) ? (s.var.push(o), i.push(yl), n.push(l)) : (s.number.push(o), i.push(Yi), n.push(parseFloat(l))), ++o, us)).split(us);
  return { values: n, split: a, indexes: s, types: i };
}
function Xi(t) {
  return Jt(t).values;
}
function Zi(t) {
  const { split: e, types: n } = Jt(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === Yi ? o += _t(i[r]) : a === qi ? o += z.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const xl = (t) => typeof t == "number" ? 0 : t;
function Tl(t) {
  const e = Xi(t);
  return Zi(t)(e.map(xl));
}
const pt = {
  test: gl,
  parse: Xi,
  createTransformer: Zi,
  getAnimatableNone: Tl
};
function Re(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function wl({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = Re(l, a, t + 1 / 3), o = Re(l, a, t), r = Re(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function xe(t, e) {
  return (n) => n > 0 ? e : t;
}
const L = (t, e, n) => t + (e - t) * n, ke = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Sl = [ze, xt, Vt], Cl = (t) => Sl.find((e) => e.test(t));
function ds(t) {
  const e = Cl(t);
  if (Ft(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === Vt && (n = wl(n)), n;
}
const hs = (t, e) => {
  const n = ds(t), s = ds(e);
  if (!n || !s)
    return xe(t, e);
  const i = { ...n };
  return (o) => (i.red = ke(n.red, s.red, o), i.green = ke(n.green, s.green, o), i.blue = ke(n.blue, s.blue, o), i.alpha = L(n.alpha, s.alpha, o), xt.transform(i));
}, Ge = /* @__PURE__ */ new Set(["none", "hidden"]);
function Al(t, e) {
  return Ge.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
const Pl = (t, e) => (n) => e(t(n)), oe = (...t) => t.reduce(Pl);
function Ml(t, e) {
  return (n) => L(t, e, n);
}
function Fn(t) {
  return typeof t == "number" ? Ml : typeof t == "string" ? Cn(t) ? xe : z.test(t) ? hs : El : Array.isArray(t) ? Ji : typeof t == "object" ? z.test(t) ? hs : Dl : xe;
}
function Ji(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Fn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function Dl(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = Fn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function Vl(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const El = (t, e) => {
  const n = pt.createTransformer(e), s = Jt(t), i = Jt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Ge.has(t) && !i.values.length || Ge.has(e) && !s.values.length ? Al(t, e) : oe(Ji(Vl(s, i), i.values), n) : (Ft(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), xe(t, e));
};
function Qi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? L(t, e, n) : Fn(t)(t, e);
}
const Rl = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => I.update(e, n),
    stop: () => mt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => _.isProcessing ? _.timestamp : Y.now()
  };
}, tr = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, Te = 2e4;
function Bn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Te; )
    e += n, s = t.next(e);
  return e >= Te ? 1 / 0 : e;
}
function kl(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(Bn(s), Te);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: /* @__PURE__ */ ot(i)
  };
}
const Nl = 5;
function er(t, e, n) {
  const s = Math.max(e - Nl, 0);
  return zi(n - t(s), e - s);
}
const O = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, fs = 1e-3;
function Ol({ duration: t = O.duration, bounce: e = O.bounce, velocity: n = O.velocity, mass: s = O.mass }) {
  let i, o;
  Ft(t <= /* @__PURE__ */ et(O.maxDuration), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = dt(O.minDamping, O.maxDamping, r), t = dt(O.minDuration, O.maxDuration, /* @__PURE__ */ ot(t)), r < 1 ? (i = (u) => {
    const c = u * r, d = c * t, h = c - n, f = He(u, r), p = Math.exp(-d);
    return fs - h / f * p;
  }, o = (u) => {
    const d = u * r * t, h = d * n + n, f = Math.pow(r, 2) * Math.pow(u, 2) * t, p = Math.exp(-d), g = He(Math.pow(u, 2), r);
    return (-i(u) + fs > 0 ? -1 : 1) * ((h - f) * p) / g;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), d = (u - n) * t + 1;
    return -1e-3 + c * d;
  }, o = (u) => {
    const c = Math.exp(-u * t), d = (n - u) * (t * t);
    return c * d;
  });
  const a = 5 / t, l = Il(i, o, a);
  if (t = /* @__PURE__ */ et(t), isNaN(l))
    return {
      stiffness: O.stiffness,
      damping: O.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const Ll = 12;
function Il(t, e, n) {
  let s = n;
  for (let i = 1; i < Ll; i++)
    s = s - t(s) / e(s);
  return s;
}
function He(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Fl = ["duration", "bounce"], Bl = ["stiffness", "damping", "mass"];
function ms(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function jl(t) {
  let e = {
    velocity: O.velocity,
    stiffness: O.stiffness,
    damping: O.damping,
    mass: O.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!ms(t, Bl) && ms(t, Fl))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * dt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: O.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Ol(t);
      e = {
        ...e,
        ...n,
        mass: O.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function we(t = O.visualDuration, e = O.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: d, velocity: h, isResolvedFromDuration: f } = jl({
    ...n,
    velocity: -/* @__PURE__ */ ot(n.velocity || 0)
  }), p = h || 0, g = u / (2 * Math.sqrt(l * c)), b = r - o, y = /* @__PURE__ */ ot(Math.sqrt(l / c)), T = Math.abs(b) < 5;
  s || (s = T ? O.restSpeed.granular : O.restSpeed.default), i || (i = T ? O.restDelta.granular : O.restDelta.default);
  let v;
  if (g < 1) {
    const x = He(y, g);
    v = (S) => {
      const M = Math.exp(-g * y * S);
      return r - M * ((p + g * y * b) / x * Math.sin(x * S) + b * Math.cos(x * S));
    };
  } else if (g === 1)
    v = (x) => r - Math.exp(-y * x) * (b + (p + y * b) * x);
  else {
    const x = y * Math.sqrt(g * g - 1);
    v = (S) => {
      const M = Math.exp(-g * y * S), A = Math.min(x * S, 300);
      return r - M * ((p + g * y * b) * Math.sinh(A) + x * b * Math.cosh(A)) / x;
    };
  }
  const C = {
    calculatedDuration: f && d || null,
    next: (x) => {
      const S = v(x);
      if (f)
        a.done = x >= d;
      else {
        let M = x === 0 ? p : 0;
        g < 1 && (M = x === 0 ? /* @__PURE__ */ et(p) : er(v, x, S));
        const A = Math.abs(M) <= s, R = Math.abs(r - S) <= i;
        a.done = A && R;
      }
      return a.value = a.done ? r : S, a;
    },
    toString: () => {
      const x = Math.min(Bn(C), Te), S = tr((M) => C.next(x * M).value, x, 30);
      return x + "ms " + S;
    },
    toTransition: () => {
    }
  };
  return C;
}
we.applyToOptions = (t) => {
  const e = kl(t, 100, we);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ et(e.duration), t.type = "keyframes", t;
};
function Ye({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = t[0], h = {
    done: !1,
    value: d
  }, f = (A) => a !== void 0 && A < a || l !== void 0 && A > l, p = (A) => a === void 0 ? l : l === void 0 || Math.abs(a - A) < Math.abs(l - A) ? a : l;
  let g = n * e;
  const b = d + g, y = r === void 0 ? b : r(b);
  y !== b && (g = y - d);
  const T = (A) => -g * Math.exp(-A / s), v = (A) => y + T(A), C = (A) => {
    const R = T(A), k = v(A);
    h.done = Math.abs(R) <= u, h.value = h.done ? y : k;
  };
  let x, S;
  const M = (A) => {
    f(h.value) && (x = A, S = we({
      keyframes: [h.value, p(h.value)],
      velocity: er(v, A, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return M(0), {
    calculatedDuration: null,
    next: (A) => {
      let R = !1;
      return !S && x === void 0 && (R = !0, C(A), M(A)), x !== void 0 && A >= x ? S.next(A - x) : (!R && C(A), h);
    }
  };
}
const Qt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
};
function Ul(t, e, n) {
  const s = [], i = n || ct.mix || Qi, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || J : e;
      a = oe(l, a);
    }
    s.push(a);
  }
  return s;
}
function $l(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (ut(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Ul(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let d = 0;
    if (l > 1)
      for (; d < t.length - 2 && !(c < t[d + 1]); d++)
        ;
    const h = /* @__PURE__ */ Qt(t[d], t[d + 1], c);
    return a[d](h);
  };
  return n ? (c) => u(dt(t[0], t[o - 1], c)) : u;
}
function Wl(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Qt(0, e, s);
    t.push(L(n, 1, i));
  }
}
function _l(t) {
  const e = [0];
  return Wl(e, t.length - 1), e;
}
function Kl(t, e) {
  return t.map((n) => n * e);
}
const nr = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, zl = 1e-7, Gl = 12;
function Hl(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = nr(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > zl && ++a < Gl);
  return r;
}
function ae(t, e, n, s) {
  if (t === e && n === s)
    return J;
  const i = (o) => Hl(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : nr(i(o), e, s);
}
const Yl = /* @__PURE__ */ ae(0.42, 0, 1, 1), ql = /* @__PURE__ */ ae(0, 0, 0.58, 1), sr = /* @__PURE__ */ ae(0.42, 0, 0.58, 1), Xl = (t) => Array.isArray(t) && typeof t[0] != "number", ir = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, rr = (t) => (e) => 1 - t(1 - e), or = /* @__PURE__ */ ae(0.33, 1.53, 0.69, 0.99), jn = /* @__PURE__ */ rr(or), ar = /* @__PURE__ */ ir(jn), lr = (t) => (t *= 2) < 1 ? 0.5 * jn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Un = (t) => 1 - Math.sin(Math.acos(t)), cr = rr(Un), ur = ir(Un), dr = (t) => Array.isArray(t) && typeof t[0] == "number", ps = {
  linear: J,
  easeIn: Yl,
  easeInOut: sr,
  easeOut: ql,
  circIn: Un,
  circInOut: ur,
  circOut: cr,
  backIn: jn,
  backInOut: ar,
  backOut: or,
  anticipate: lr
}, Zl = (t) => typeof t == "string", gs = (t) => {
  if (dr(t)) {
    ut(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return ae(e, n, s, i);
  } else if (Zl(t))
    return ut(ps[t] !== void 0, `Invalid easing type '${t}'`), ps[t];
  return t;
};
function Jl(t, e) {
  return t.map(() => e || sr).splice(0, t.length - 1);
}
function Et({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = Xl(s) ? s.map(gs) : gs(s), o = {
    done: !1,
    value: e[0]
  }, r = Kl(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : _l(e),
    t
  ), a = $l(r, e, {
    ease: Array.isArray(i) ? i : Jl(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const Ql = (t) => t !== null;
function $n(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Ql), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const tc = {
  decay: Ye,
  inertia: Ye,
  tween: Et,
  keyframes: Et,
  spring: we
};
function hr(t) {
  typeof t.type == "string" && (t.type = tc[t.type]);
}
class Wn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const ec = (t) => t / 100;
class _n extends Wn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var s, i;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Y.now() && this.tick(Y.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (s = this.options).onStop) == null || i.call(s));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    hr(e);
    const { type: n = Et, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Et;
    process.env.NODE_ENV !== "production" && l !== Et && ut(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`), l !== Et && typeof a[0] != "number" && (this.mixKeyframes = oe(ec, Qi(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = Bn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: h, repeatDelay: f, type: p, onUpdate: g, finalKeyframe: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const y = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), T = this.playbackSpeed >= 0 ? y < 0 : y > i;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let v = this.currentTime, C = s;
    if (d) {
      const A = Math.min(this.currentTime, i) / a;
      let R = Math.floor(A), k = A % 1;
      !k && A >= 1 && (k = 1), k === 1 && R--, R = Math.min(R, d + 1), !!(R % 2) && (h === "reverse" ? (k = 1 - k, f && (k -= f / a)) : h === "mirror" && (C = r)), v = dt(0, 1, k) * a;
    }
    const x = T ? { done: !1, value: c[0] } : C.next(v);
    o && (x.value = o(x.value));
    let { done: S } = x;
    !T && l !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return M && p !== Ye && (x.value = $n(c, this.options, b, this.speed)), g && g(x.value), M && this.finish(), x;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ ot(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ ot(this.currentTime);
  }
  set time(e) {
    var n;
    e = /* @__PURE__ */ et(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(Y.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ ot(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped)
      return;
    const { driver: e = Rl, startTime: n } = this.options;
    this.driver || (this.driver = e((r) => this.tick(r))), (o = (i = this.options).onPlay) == null || o.call(i);
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Y.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var e, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (e = this.options).onComplete) == null || n.call(e);
  }
  cancel() {
    var e, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (e = this.options).onCancel) == null || n.call(e);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), e.observe(this);
  }
}
function nc(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Tt = (t) => t * 180 / Math.PI, qe = (t) => {
  const e = Tt(Math.atan2(t[1], t[0]));
  return Xe(e);
}, sc = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: qe,
  rotateZ: qe,
  skewX: (t) => Tt(Math.atan(t[1])),
  skewY: (t) => Tt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Xe = (t) => (t = t % 360, t < 0 && (t += 360), t), ys = qe, vs = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), bs = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ic = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: vs,
  scaleY: bs,
  scale: (t) => (vs(t) + bs(t)) / 2,
  rotateX: (t) => Xe(Tt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Xe(Tt(Math.atan2(-t[2], t[0]))),
  rotateZ: ys,
  rotate: ys,
  skewX: (t) => Tt(Math.atan(t[4])),
  skewY: (t) => Tt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Ze(t) {
  return t.includes("scale") ? 1 : 0;
}
function Je(t, e) {
  if (!t || t === "none")
    return Ze(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = ic, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = sc, i = a;
  }
  if (!i)
    return Ze(e);
  const o = s[e], r = i[1].split(",").map(oc);
  return typeof o == "function" ? o(r) : r[o];
}
const rc = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Je(n, e);
};
function oc(t) {
  return parseFloat(t.trim());
}
const xs = (t) => t === Ut || t === P, ac = /* @__PURE__ */ new Set(["x", "y", "z"]), lc = Bt.filter((t) => !ac.has(t));
function cc(t) {
  const e = [];
  return lc.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const wt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Je(e, "x"),
  y: (t, { transform: e }) => Je(e, "y")
};
wt.translateX = wt.x;
wt.translateY = wt.y;
const St = /* @__PURE__ */ new Set();
let Qe = !1, tn = !1, en = !1;
function fr() {
  if (tn) {
    const t = Array.from(St).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = cc(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var a;
        (a = s.getValue(o)) == null || a.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  tn = !1, Qe = !1, St.forEach((t) => t.complete(en)), St.clear();
}
function mr() {
  St.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (tn = !0);
  });
}
function uc() {
  en = !0, mr(), fr(), en = !1;
}
class Kn {
  constructor(e, n, s, i, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (St.add(this), Qe || (Qe = !0, I.read(mr), I.resolveKeyframes(fr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    nc(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), St.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (St.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dc = (t) => t.startsWith("--");
function hc(t, e, n) {
  dc(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
// @__NO_SIDE_EFFECTS__
function zn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const fc = /* @__PURE__ */ zn(() => window.ScrollTimeline !== void 0), mc = {};
function pc(t, e) {
  const n = /* @__PURE__ */ zn(t);
  return () => mc[e] ?? n();
}
const pr = /* @__PURE__ */ pc(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Wt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, Ts = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Wt([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Wt([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Wt([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Wt([0.33, 1.53, 0.69, 0.99])
};
function gr(t, e) {
  if (t)
    return typeof t == "function" ? pr() ? tr(t, e) : "ease-out" : dr(t) ? Wt(t) : Array.isArray(t) ? t.map((n) => gr(n, e) || Ts.easeOut) : Ts[t];
}
function gc(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const d = gr(a, i);
  Array.isArray(d) && (c.easing = d);
  const h = {
    delay: s,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (h.pseudoElement = u), t.animate(c, h);
}
function yr(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function yc({ type: t, ...e }) {
  return yr(t) && pr() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class vc extends Wn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, ut(typeof e.type != "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
    const u = yc(e);
    this.animation = gc(n, s, i, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = $n(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : hc(n, s, c), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var e, n;
    (n = (e = this.animation).finish) == null || n.call(e);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var e, n;
    this.isPseudoElement || (n = (e = this.animation).commitStyles) == null || n.call(e);
  }
  get duration() {
    var n, s;
    const e = ((s = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : s.call(n).duration) || 0;
    return /* @__PURE__ */ ot(Number(e));
  }
  get time() {
    return /* @__PURE__ */ ot(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ et(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    var s;
    return this.allowFlatten && ((s = this.animation.effect) == null || s.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && fc() ? (this.animation.timeline = e, J) : n(this);
  }
}
const vr = {
  anticipate: lr,
  backInOut: ar,
  circInOut: ur
};
function bc(t) {
  return t in vr;
}
function xc(t) {
  typeof t.ease == "string" && bc(t.ease) && (t.ease = vr[t.ease]);
}
const ws = 10;
class Tc extends vc {
  constructor(e) {
    xc(e), hr(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new _n({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ et(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - ws).value, a.sample(l).value, ws), a.stop();
  }
}
const Ss = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(pt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function wc(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Sc(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = Ss(i, e), a = Ss(o, e);
  return Ft(r === a, `You are trying to animate ${e} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !r || !a ? !1 : wc(t) || (n === "spring" || yr(n)) && s;
}
const Cc = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Ac = /* @__PURE__ */ zn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Pc(t) {
  var u;
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r } = t;
  if (!yn((u = e == null ? void 0 : e.owner) == null ? void 0 : u.current))
    return !1;
  const { onUpdate: a, transformTemplate: l } = e.owner.getProps();
  return Ac() && n && Cc.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !a && !s && i !== "mirror" && o !== 0 && r !== "inertia";
}
const Mc = 40;
class Dc extends Wn {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...d }) {
    var p;
    super(), this.stop = () => {
      var g, b;
      this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (b = this.keyframeResolver) == null || b.cancel();
    }, this.createdAt = Y.now();
    const h = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: c,
      ...d
    }, f = (c == null ? void 0 : c.KeyframeResolver) || Kn;
    this.keyframeResolver = new f(a, (g, b, y) => this.onKeyframesResolved(g, b, h, !y), l, u, c), (p = this.keyframeResolver) == null || p.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = Y.now(), Sc(e, o, r, a) || ((ct.instantAnimations || !l) && (c == null || c($n(e, s, n))), e[0] = e[e.length - 1], s.duration = 0, s.repeat = 0);
    const h = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Mc ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: e
    }, f = !u && Pc(h) ? new Tc({
      ...h,
      element: h.motionValue.owner.current
    }) : new _n(h);
    f.finished.then(() => this.notifyFinished()).catch(J), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var e;
    return this._animation || ((e = this.keyframeResolver) == null || e.resume(), uc()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var e;
    this._animation && this.animation.cancel(), (e = this.keyframeResolver) == null || e.cancel();
  }
}
const Gn = (t, e, n, s = {}, i, o) => (r) => {
  const a = On(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ et(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (h) => {
      e.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  ul(a) || Object.assign(c, cl(t, c)), c.duration && (c.duration = /* @__PURE__ */ et(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ et(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), (ct.instantAnimations || ct.skipAnimations) && (d = !0, c.duration = 0, c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !o && e.get() !== void 0) {
    const h = il(c.keyframes, a);
    if (h !== void 0) {
      I.update(() => {
        c.onUpdate(h), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new _n(c) : new Dc(c);
}, br = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Bt
]);
function Vc({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function xr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const c in a) {
    const d = t.getValue(c, t.latestValues[c] ?? null), h = a[c];
    if (h === void 0 || u && Vc(u, c))
      continue;
    const f = {
      delay: n,
      ...On(o || {}, c)
    }, p = d.get();
    if (p !== void 0 && !d.isAnimating && !Array.isArray(h) && h === p && !f.velocity)
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const y = Gi(t);
      if (y) {
        const T = window.MotionHandoffAnimation(y, c, I);
        T !== null && (f.startTime = T, g = !0);
      }
    }
    Ke(t, c), d.start(Gn(c, d, h, t.shouldReduceMotion && br.has(c) ? { type: !1 } : f, t, g));
    const b = d.animation;
    b && l.push(b);
  }
  return r && Promise.all(l).then(() => {
    I.update(() => {
      r && el(t, r);
    });
  }), l;
}
function nn(t, e, n = {}) {
  var l;
  const s = Zt(t, e, n.type === "exit" ? (l = t.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(xr(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: h } = i;
    return Ec(t, e, c + u, d, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function Ec(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (u = 0) => u * s : (u = 0) => a - u * s;
  return Array.from(t.variantChildren).sort(Rc).forEach((u, c) => {
    u.notify("AnimationStart", e), r.push(nn(u, e, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function Rc(t, e) {
  return t.sortNodePosition(e);
}
function kc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => nn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = nn(t, e, n);
  else {
    const i = typeof e == "function" ? Zt(t, e, n.custom) : e;
    s = Promise.all(xr(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Tr(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
const Nc = xn.length;
function wr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? wr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Nc; n++) {
    const s = xn[n], i = t.props[s];
    (Yt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Oc = [...bn].reverse(), Lc = bn.length;
function Ic(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => kc(t, n, s)));
}
function Fc(t) {
  let e = Ic(t), n = Cs(), s = !0;
  const i = (l) => (u, c) => {
    var h;
    const d = Zt(t, c, l === "exit" ? (h = t.presenceContext) == null ? void 0 : h.custom : void 0);
    if (d) {
      const { transition: f, transitionEnd: p, ...g } = d;
      u = { ...u, ...g, ...p };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = wr(t.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
    let f = {}, p = 1 / 0;
    for (let b = 0; b < Lc; b++) {
      const y = Oc[b], T = n[y], v = u[y] !== void 0 ? u[y] : c[y], C = Yt(v), x = y === l ? T.isActive : null;
      x === !1 && (p = b);
      let S = v === c[y] && v !== u[y] && C;
      if (S && s && t.manuallyAnimateOnMount && (S = !1), T.protectedKeys = { ...f }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && x === null || // If we didn't and don't have any defined prop for this animation type
      !v && !T.prevProp || // Or if the prop doesn't define an animation
      Me(v) || typeof v == "boolean")
        continue;
      const M = Bc(T.prevProp, v);
      let A = M || // If we're making this variant active, we want to always make it active
      y === l && T.isActive && !S && C || // If we removed a higher-priority variant (i is in reverse order)
      b > p && C, R = !1;
      const k = Array.isArray(v) ? v : [v];
      let it = k.reduce(i(y), {});
      x === !1 && (it = {});
      const { prevResolvedValues: At = {} } = T, Pt = {
        ...At,
        ...it
      }, q = (V) => {
        A = !0, h.has(V) && (R = !0, h.delete(V)), T.needsAnimating[V] = !0;
        const U = t.getValue(V);
        U && (U.liveStyle = !1);
      };
      for (const V in Pt) {
        const U = it[V], ht = At[V];
        if (f.hasOwnProperty(V))
          continue;
        let Mt = !1;
        _e(U) && _e(ht) ? Mt = !Tr(U, ht) : Mt = U !== ht, Mt ? U != null ? q(V) : h.add(V) : U !== void 0 && h.has(V) ? q(V) : T.protectedKeys[V] = !0;
      }
      T.prevProp = v, T.prevResolvedValues = it, T.isActive && (f = { ...f, ...it }), s && t.blockInitialAnimation && (A = !1), A && (!(S && M) || R) && d.push(...k.map((V) => ({
        animation: V,
        options: { type: y }
      })));
    }
    if (h.size) {
      const b = {};
      if (typeof u.initial != "boolean") {
        const y = Zt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        y && y.transition && (b.transition = y.transition);
      }
      h.forEach((y) => {
        const T = t.getBaseTarget(y), v = t.getValue(y);
        v && (v.liveStyle = !0), b[y] = T ?? null;
      }), d.push({ animation: b });
    }
    let g = !!d.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (g = !1), s = !1, g ? e(d) : Promise.resolve();
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = t.variantChildren) == null || d.forEach((h) => {
      var f;
      return (f = h.animationState) == null ? void 0 : f.setActive(l, u);
    }), n[l].isActive = u;
    const c = r(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Cs(), s = !0;
    }
  };
}
function Bc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Tr(e, t) : !1;
}
function vt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Cs() {
  return {
    animate: vt(!0),
    whileInView: vt(),
    whileHover: vt(),
    whileTap: vt(),
    whileDrag: vt(),
    whileFocus: vt(),
    exit: vt()
  };
}
class gt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class jc extends gt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Fc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Me(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var e;
    this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
  }
}
let Uc = 0;
class $c extends gt {
  constructor() {
    super(...arguments), this.id = Uc++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Wc = {
  animation: {
    Feature: jc
  },
  exit: {
    Feature: $c
  }
};
function te(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Hn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function le(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const _c = (t) => (e) => Hn(e) && t(e, le(e));
function Kt(t, e, n, s) {
  return te(t, e, _c(n), s);
}
function Sr({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function Kc({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function zc(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
const Cr = 1e-4, Gc = 1 - Cr, Hc = 1 + Cr, Ar = 0.01, Yc = 0 - Ar, qc = 0 + Ar;
function H(t) {
  return t.max - t.min;
}
function Xc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function As(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = L(e.min, e.max, t.origin), t.scale = H(n) / H(e), t.translate = L(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Gc && t.scale <= Hc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Yc && t.translate <= qc || isNaN(t.translate)) && (t.translate = 0);
}
function zt(t, e, n, s) {
  As(t.x, e.x, n.x, s ? s.originX : void 0), As(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Ps(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + H(e);
}
function Zc(t, e, n) {
  Ps(t.x, e.x, n.x), Ps(t.y, e.y, n.y);
}
function Ms(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + H(e);
}
function Gt(t, e, n) {
  Ms(t.x, e.x, n.x), Ms(t.y, e.y, n.y);
}
const Ds = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rt = () => ({
  x: Ds(),
  y: Ds()
}), Vs = () => ({ min: 0, max: 0 }), F = () => ({
  x: Vs(),
  y: Vs()
});
function Z(t) {
  return [t("x"), t("y")];
}
function Ne(t) {
  return t === void 0 || t === 1;
}
function sn({ scale: t, scaleX: e, scaleY: n }) {
  return !Ne(t) || !Ne(e) || !Ne(n);
}
function bt(t) {
  return sn(t) || Pr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Pr(t) {
  return Es(t.x) || Es(t.y);
}
function Es(t) {
  return t && t !== "0%";
}
function Se(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Rs(t, e, n, s, i) {
  return i !== void 0 && (t = Se(t, i, s)), Se(t, n, s) + e;
}
function rn(t, e = 0, n = 1, s, i) {
  t.min = Rs(t.min, e, n, s, i), t.max = Rs(t.max, e, n, s, i);
}
function Mr(t, { x: e, y: n }) {
  rn(t.x, e.translate, e.scale, e.originPoint), rn(t.y, n.translate, n.scale, n.originPoint);
}
const ks = 0.999999999999, Ns = 1.0000000000001;
function Jc(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Nt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Mr(t, r)), s && bt(o.latestValues) && Nt(t, o.latestValues));
  }
  e.x < Ns && e.x > ks && (e.x = 1), e.y < Ns && e.y > ks && (e.y = 1);
}
function kt(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Os(t, e, n, s, i = 0.5) {
  const o = L(t.min, t.max, i);
  rn(t, e, n, o, s);
}
function Nt(t, e) {
  Os(t.x, e.x, e.scaleX, e.scale, e.originX), Os(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Dr(t, e) {
  return Sr(zc(t.getBoundingClientRect(), e));
}
function Qc(t, e, n) {
  const s = Dr(t, n), { scroll: i } = e;
  return i && (kt(s.x, i.offset.x), kt(s.y, i.offset.y)), s;
}
const Vr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Ls = (t, e) => Math.abs(t - e);
function tu(t, e) {
  const n = Ls(t.x, e.x), s = Ls(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Er {
  constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Le(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, f = tu(d.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !f)
        return;
      const { point: p } = d, { timestamp: g } = _;
      this.history.push({ ...p, timestamp: g });
      const { onStart: b, onMove: y } = this.handlers;
      h || (b && b(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, h) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = Oe(h, this.transformPagePoint), I.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, h) => {
      this.end();
      const { onEnd: f, onSessionEnd: p, resumeAnimation: g } = this.handlers;
      if (this.dragSnapToOrigin && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = Le(d.type === "pointercancel" ? this.lastMoveEventInfo : Oe(h, this.transformPagePoint), this.history);
      this.startEvent && f && f(d, b), p && p(d, b);
    }, !Hn(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = le(e), a = Oe(r, this.transformPagePoint), { point: l } = a, { timestamp: u } = _;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(e, Le(a, this.history)), this.removeListeners = oe(Kt(this.contextWindow, "pointermove", this.handlePointerMove), Kt(this.contextWindow, "pointerup", this.handlePointerUp), Kt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), mt(this.updatePoint);
  }
}
function Oe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Is(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Le({ point: t }, e) {
  return {
    point: t,
    delta: Is(t, Rr(e)),
    offset: Is(t, eu(e)),
    velocity: nu(e, 0.1)
  };
}
function eu(t) {
  return t[0];
}
function Rr(t) {
  return t[t.length - 1];
}
function nu(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = Rr(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ et(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ ot(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function su(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? L(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? L(n, t, s.max) : Math.min(t, n)), t;
}
function Fs(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function iu(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Fs(t.x, n, i),
    y: Fs(t.y, e, s)
  };
}
function Bs(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function ru(t, e) {
  return {
    x: Bs(t.x, e.x),
    y: Bs(t.y, e.y)
  };
}
function ou(t, e) {
  let n = 0.5;
  const s = H(t), i = H(e);
  return i > s ? n = /* @__PURE__ */ Qt(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ Qt(t.min, t.max - i, e.min)), dt(0, 1, n);
}
function au(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const on = 0.35;
function lu(t = on) {
  return t === !1 ? t = 0 : t === !0 && (t = on), {
    x: js(t, "left", "right"),
    y: js(t, "top", "bottom")
  };
}
function js(t, e, n) {
  return {
    min: Us(t, e),
    max: Us(t, n)
  };
}
function Us(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const tt = {
  x: !1,
  y: !1
};
function kr() {
  return tt.x || tt.y;
}
function cu(t) {
  return t === "x" || t === "y" ? tt[t] ? null : (tt[t] = !0, () => {
    tt[t] = !1;
  }) : tt.x || tt.y ? null : (tt.x = tt.y = !0, () => {
    tt.x = tt.y = !1;
  });
}
const uu = /* @__PURE__ */ new WeakMap();
class du {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = F(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(le(c).point);
    }, o = (c, d) => {
      const { drag: h, dragPropagation: f, onDragStart: p } = this.getProps();
      if (h && !f && (this.openDragLock && this.openDragLock(), this.openDragLock = cu(h), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Z((b) => {
        let y = this.getAxisMotionValue(b).get() || 0;
        if (rt.test(y)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const v = T.layout.layoutBox[b];
            v && (y = H(v) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[b] = y;
      }), p && I.postRender(() => p(c, d)), Ke(this.visualElement, "transform");
      const { animationState: g } = this.visualElement;
      g && g.setActive("whileDrag", !0);
    }, r = (c, d) => {
      const { dragPropagation: h, dragDirectionLock: f, onDirectionLock: p, onDrag: g } = this.getProps();
      if (!h && !this.openDragLock)
        return;
      const { offset: b } = d;
      if (f && this.currentDirection === null) {
        this.currentDirection = hu(b), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, b), this.updateAxis("y", d.point, b), this.visualElement.render(), g && g(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => Z((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) == null ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Er(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Vr(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && I.postRender(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !fe(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = su(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (o = this.visualElement.projection) == null ? void 0 : o.layout, i = this.constraints;
    e && Dt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = iu(s.layoutBox, e) : this.constraints = !1, this.elastic = lu(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Z((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = au(s.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Dt(e))
      return !1;
    const s = e.current;
    ut(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Qc(s, i.root, this.visualElement.getTransformPagePoint());
    let r = ru(i.layout.layoutBox, o);
    if (n) {
      const a = n(Kc(r));
      this.hasMutatedConstraints = !!a, a && (r = Sr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = Z((c) => {
      if (!fe(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      r && (d = { min: 0, max: 0 });
      const h = i ? 200 : 1e6, f = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: h,
        bounceDamping: f,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...d
      };
      return this.startAxisValueAnimation(c, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return Ke(this.visualElement, e), s.start(Gn(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Z((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    Z((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    Z((n) => {
      const { drag: s } = this.getProps();
      if (!fe(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - L(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Dt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Z((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = ou({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), Z((r) => {
      if (!fe(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(L(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    uu.set(this.visualElement, this);
    const e = this.visualElement.current, n = Kt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      Dt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), I.read(s);
    const r = te(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Z((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = on, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function fe(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function hu(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class fu extends gt {
  constructor(e) {
    super(e), this.removeGroupControls = J, this.removeListeners = J, this.controls = new du(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || J;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const $s = (t) => (e, n) => {
  t && I.postRender(() => t(e, n));
};
class mu extends gt {
  constructor() {
    super(...arguments), this.removePointerDownListener = J;
  }
  onPointerDown(e) {
    this.session = new Er(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Vr(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: $s(e),
      onStart: $s(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && I.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Kt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ye = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Ws(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const $t = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (P.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Ws(t, e.target.x), s = Ws(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, pu = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = pt.parse(t);
    if (i.length > 5)
      return s;
    const o = pt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = L(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
class gu extends Io {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    Va(yu), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), ye.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, { projection: r } = s;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || I.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), wn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Nr(t) {
  const [e, n] = Di(), s = B(fn);
  return m(gu, { ...t, layoutGroup: s, switchLayoutGroup: B(Oi), isPresent: e, safeToRemove: n });
}
const yu = {
  borderRadius: {
    ...$t,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: $t,
  borderTopRightRadius: $t,
  borderBottomLeftRadius: $t,
  borderBottomRightRadius: $t,
  boxShadow: pu
};
function vu(t, e, n) {
  const s = G(t) ? t : It(t);
  return s.start(Gn("", s, e, n)), s.animation;
}
const bu = (t, e) => t.depth - e.depth;
class xu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    Rn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    kn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(bu), this.isDirty = !1, this.children.forEach(e);
  }
}
function Tu(t, e) {
  const n = Y.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (mt(s), t(o - e));
  };
  return I.setup(s, !0), () => mt(s);
}
const Or = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], wu = Or.length, _s = (t) => typeof t == "string" ? parseFloat(t) : t, Ks = (t) => typeof t == "number" || P.test(t);
function Su(t, e, n, s, i, o) {
  i ? (t.opacity = L(0, n.opacity ?? 1, Cu(s)), t.opacityExit = L(e.opacity ?? 1, 0, Au(s))) : o && (t.opacity = L(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < wu; r++) {
    const a = `border${Or[r]}Radius`;
    let l = zs(e, a), u = zs(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ks(l) === Ks(u) ? (t[a] = Math.max(L(_s(l), _s(u), s), 0), (rt.test(u) || rt.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, s));
}
function zs(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Cu = /* @__PURE__ */ Lr(0, 0.5, cr), Au = /* @__PURE__ */ Lr(0.5, 0.95, J);
function Lr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Qt(t, e, s));
}
function Gs(t, e) {
  t.min = e.min, t.max = e.max;
}
function X(t, e) {
  Gs(t.x, e.x), Gs(t.y, e.y);
}
function Hs(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Ys(t, e, n, s, i) {
  return t -= e, t = Se(t, 1 / n, s), i !== void 0 && (t = Se(t, 1 / i, s)), t;
}
function Pu(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (rt.test(e) && (e = parseFloat(e), e = L(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = L(o.min, o.max, s);
  t === o && (a -= e), t.min = Ys(t.min, e, n, a, i), t.max = Ys(t.max, e, n, a, i);
}
function qs(t, e, [n, s, i], o, r) {
  Pu(t, e[n], e[s], e[i], e.scale, o, r);
}
const Mu = ["x", "scaleX", "originX"], Du = ["y", "scaleY", "originY"];
function Xs(t, e, n, s) {
  qs(t.x, e, Mu, n ? n.x : void 0, s ? s.x : void 0), qs(t.y, e, Du, n ? n.y : void 0, s ? s.y : void 0);
}
function Zs(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ir(t) {
  return Zs(t.x) && Zs(t.y);
}
function Js(t, e) {
  return t.min === e.min && t.max === e.max;
}
function Vu(t, e) {
  return Js(t.x, e.x) && Js(t.y, e.y);
}
function Qs(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Fr(t, e) {
  return Qs(t.x, e.x) && Qs(t.y, e.y);
}
function ti(t) {
  return H(t.x) / H(t.y);
}
function ei(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class Eu {
  constructor() {
    this.members = [];
  }
  add(e) {
    Rn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (kn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ru(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: h, skewX: f, skewY: p } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), d && (s += `rotateX(${d}deg) `), h && (s += `rotateY(${h}deg) `), f && (s += `skewX(${f}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
function Br(t) {
  return Mi(t) && "ownerSVGElement" in t;
}
function ku(t) {
  return Br(t) && t.tagName === "svg";
}
const Ie = ["", "X", "Y", "Z"], Nu = { visibility: "hidden" }, Ou = 1e3;
let Lu = 0;
function Fe(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function jr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Gi(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", I, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && jr(s);
}
function Ur({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Lu++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Bu), this.nodes.forEach(_u), this.nodes.forEach(Ku), this.nodes.forEach(ju);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new Nn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = Br(r) && !ku(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c;
        const d = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, c && c(), c = Tu(d, 250), ye.hasAnimatedSinceResize && (ye.hasAnimatedSinceResize = !1, this.nodes.forEach(si));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: h, layout: f }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || qu, { onLayoutAnimationStart: g, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !Fr(this.targetLayout, f), T = !d && h;
        if (this.options.layoutRoot || this.resumeFrom || T || d && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...On(p, "layout"),
            onPlay: g,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(c, T);
        } else
          d || si(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = f;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), mt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(zu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && jr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ni);
        return;
      }
      this.isUpdating || this.nodes.forEach($u), this.isUpdating = !1, this.nodes.forEach(Wu), this.nodes.forEach(Iu), this.nodes.forEach(Fu), this.clearAllSnapshots();
      const a = Y.now();
      _.delta = dt(0, 1e3 / 60, a - _.timestamp), _.timestamp = a, _.isProcessing = !0, Ve.update.process(_), Ve.preRender.process(_), Ve.render.process(_), _.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, wn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Uu), this.sharedNodes.forEach(Gu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, I.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      I.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !H(this.snapshot.measuredBox.x) && !H(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = F(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ir(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || bt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Xu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: r } = this.options;
      if (!r)
        return F();
      const a = r.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Zu))) {
        const { scroll: c } = this.root;
        c && (kt(a.x, c.offset.x), kt(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var l;
      const a = F();
      if (X(a, r), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: h } = c;
        c !== this.root && d && h.layoutScroll && (d.wasRoot && X(a, r), kt(a.x, d.offset.x), kt(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = F();
      X(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Nt(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), bt(c.latestValues) && Nt(l, c.latestValues);
      }
      return bt(this.latestValues) && Nt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = F();
      X(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !bt(u.latestValues))
          continue;
        sn(u.latestValues) && u.updateSnapshot();
        const c = F(), d = u.measurePageBox();
        X(c, d), Xs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Xs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (this.resolvedRelativeTargetAt = _.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = F(), this.relativeTargetOrigin = F(), Gt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = F(), this.targetWithTransforms = F()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Zc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : X(this.target, this.layout.layoutBox), Mr(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = F(), this.relativeTargetOrigin = F(), Gt(this.relativeTargetOrigin, this.target, f.target), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sn(this.parent.latestValues) || Pr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var p;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === _.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      X(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, h = this.treeScale.y;
      Jc(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = F());
      const { target: f } = r;
      if (!f) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hs(this.prevProjectionDelta.x, this.projectionDelta.x), Hs(this.prevProjectionDelta.y, this.projectionDelta.y)), zt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !ei(this.projectionDelta.x, this.prevProjectionDelta.x) || !ei(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), r) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Rt(), this.projectionDelta = Rt(), this.projectionDeltaWithTransform = Rt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Rt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = F(), f = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, g = f !== p, b = this.getStack(), y = !b || b.members.length <= 1, T = !!(g && !y && this.options.crossfade === !0 && !this.path.some(Yu));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (C) => {
        const x = C / 1e3;
        ii(d.x, r.x, x), ii(d.y, r.y, x), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Gt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Hu(this.relativeTarget, this.relativeTargetOrigin, h, x), v && Vu(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = F()), X(v, this.relativeTarget)), g && (this.animationValues = c, Su(c, u, this.latestValues, x, T, y)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = x;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (mt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = I.update(() => {
        ye.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = It(0)), this.currentAnimation = vu(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (c) => {
            this.mixTargetDelta(c), r.onUpdate && r.onUpdate(c);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ou), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && $r(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || F();
          const d = H(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + d;
          const h = H(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + h;
        }
        X(a, l), Nt(a, c), zt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new Eu()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: r } = this.options;
      return r ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Fe("z", r, u, this.animationValues);
      for (let c = 0; c < Ie.length; c++)
        Fe(`rotate${Ie[c]}`, r, u, this.animationValues), Fe(`skew${Ie[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Nu;
      const a = {
        visibility: ""
      }, l = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, a.opacity = "", a.pointerEvents = pe(r == null ? void 0 : r.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none", a;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const f = {};
        return this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = pe(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !bt(this.latestValues) && (f.transform = l ? l({}, "") : "none", this.hasProjected = !1), f;
      }
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), a.transform = Ru(this.projectionDeltaWithTransform, this.treeScale, c), l && (a.transform = l(c, a.transform));
      const { x: d, y: h } = this.projectionDelta;
      a.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`, u.animationValues ? a.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : a.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const f in qt) {
        if (c[f] === void 0)
          continue;
        const { correct: p, applyTo: g, isCSSVariable: b } = qt[f], y = a.transform === "none" ? c[f] : p(c[f], u);
        if (g) {
          const T = g.length;
          for (let v = 0; v < T; v++)
            a[g[v]] = y;
        } else
          b ? this.options.visualElement.renderState.vars[f] = y : a[f] = y;
      }
      return this.options.layoutId && (a.pointerEvents = u === this ? pe(r == null ? void 0 : r.pointerEvents) || "" : "none"), a;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(ni), this.root.sharedNodes.clear();
    }
  };
}
function Iu(t) {
  t.updateLayout();
}
function Fu(t) {
  var n;
  const e = ((n = t.resumeFrom) == null ? void 0 : n.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = e.source !== t.layout.source;
    o === "size" ? Z((d) => {
      const h = r ? e.measuredBox[d] : e.layoutBox[d], f = H(h);
      h.min = s[d].min, h.max = h.min + f;
    }) : $r(o, e.layoutBox, s) && Z((d) => {
      const h = r ? e.measuredBox[d] : e.layoutBox[d], f = H(s[d]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[d].max = t.relativeTarget[d].min + f);
    });
    const a = Rt();
    zt(a, s, e.layoutBox);
    const l = Rt();
    r ? zt(l, t.applyTransform(i, !0), e.measuredBox) : zt(l, s, e.layoutBox);
    const u = !Ir(a);
    let c = !1;
    if (!t.resumeFrom) {
      const d = t.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: f } = d;
        if (h && f) {
          const p = F();
          Gt(p, e.layoutBox, h.layoutBox);
          const g = F();
          Gt(g, s, f.layoutBox), Fr(p, g) || (c = !0), d.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = d);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: e,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Bu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function ju(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Uu(t) {
  t.clearSnapshot();
}
function ni(t) {
  t.clearMeasurements();
}
function $u(t) {
  t.isLayoutDirty = !1;
}
function Wu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function si(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function _u(t) {
  t.resolveTargetDelta();
}
function Ku(t) {
  t.calcProjection();
}
function zu(t) {
  t.resetSkewAndRotation();
}
function Gu(t) {
  t.removeLeadSnapshot();
}
function ii(t, e, n) {
  t.translate = L(e.translate, 0, n), t.scale = L(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ri(t, e, n, s) {
  t.min = L(e.min, n.min, s), t.max = L(e.max, n.max, s);
}
function Hu(t, e, n, s) {
  ri(t.x, e.x, n.x, s), ri(t.y, e.y, n.y, s);
}
function Yu(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const qu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, oi = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ai = oi("applewebkit/") && !oi("chrome/") ? Math.round : J;
function li(t) {
  t.min = ai(t.min), t.max = ai(t.max);
}
function Xu(t) {
  li(t.x), li(t.y);
}
function $r(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Xc(ti(e), ti(n), 0.2);
}
function Zu(t) {
  var e;
  return t !== t.root && ((e = t.scroll) == null ? void 0 : e.wasRoot);
}
const Ju = Ur({
  attachResizeListener: (t, e) => te(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Be = {
  current: void 0
}, Wr = Ur({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Be.current) {
      const t = new Ju({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Be.current = t;
    }
    return Be.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Qu = {
  pan: {
    Feature: mu
  },
  drag: {
    Feature: fu,
    ProjectionNode: Wr,
    MeasureLayout: Nr
  }
};
function td(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const i = (n == null ? void 0 : n[t]) ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
function _r(t, e) {
  const n = td(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function ci(t) {
  return !(t.pointerType === "touch" || kr());
}
function ed(t, e, n = {}) {
  const [s, i, o] = _r(t, n), r = (a) => {
    if (!ci(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (d) => {
      ci(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
function ui(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && I.postRender(() => o(e, le(e)));
}
class nd extends gt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ed(e, (n, s) => (ui(this.node, s, "Start"), (i) => ui(this.node, i, "End"))));
  }
  unmount() {
  }
}
class sd extends gt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = oe(te(this.node.current, "focus", () => this.onFocus()), te(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Kr = (t, e) => e ? t === e ? !0 : Kr(t, e.parentElement) : !1, id = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function rd(t) {
  return id.has(t.tagName) || t.tabIndex !== -1;
}
const ve = /* @__PURE__ */ new WeakSet();
function di(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function je(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const od = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = di(() => {
    if (ve.has(n))
      return;
    je(n, "down");
    const i = di(() => {
      je(n, "up");
    }), o = () => je(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function hi(t) {
  return Hn(t) && !kr();
}
function ad(t, e, n = {}) {
  const [s, i, o] = _r(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!hi(a))
      return;
    ve.add(l);
    const u = e(l, a), c = (f, p) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), ve.has(l) && ve.delete(l), hi(f) && typeof u == "function" && u(f, { success: p });
    }, d = (f) => {
      c(f, l === window || l === document || n.useGlobalTarget || Kr(l, f.target));
    }, h = (f) => {
      c(f, !1);
    };
    window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), yn(a) && (a.addEventListener("focus", (u) => od(u, i)), !rd(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function fi(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && I.postRender(() => o(e, le(e)));
}
class ld extends gt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ad(e, (n, s) => (fi(this.node, s, "Start"), (i, { success: o }) => fi(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const an = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), cd = (t) => {
  const e = an.get(t.target);
  e && e(t);
}, ud = (t) => {
  t.forEach(cd);
};
function dd({ root: t, ...e }) {
  const n = t || document;
  Ue.has(n) || Ue.set(n, {});
  const s = Ue.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(ud, { root: t, ...e })), s[i];
}
function hd(t, e, n) {
  const s = dd(e);
  return an.set(t, n), s.observe(t), () => {
    an.delete(t), s.unobserve(t);
  };
}
const fd = {
  some: 0,
  all: 1
};
class md extends gt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : fd[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), h = u ? c : d;
      h && h(l);
    };
    return hd(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(pd(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function pd({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const gd = {
  inView: {
    Feature: md
  },
  tap: {
    Feature: ld
  },
  focus: {
    Feature: sd
  },
  hover: {
    Feature: nd
  }
}, yd = {
  layout: {
    ProjectionNode: Wr,
    MeasureLayout: Nr
  }
}, ln = { current: null }, zr = { current: !1 };
function vd() {
  if (zr.current = !0, !!pn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ln.current = t.matches;
      t.addListener(e), e();
    } else
      ln.current = !1;
}
const bd = /* @__PURE__ */ new WeakMap();
function xd(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (G(i))
      t.addValue(s, i);
    else if (G(o))
      t.addValue(s, It(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, It(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const Gr = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Hr = (t) => /^0[^.\s]+$/u.test(t), Td = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Yr = (t) => (e) => e.test(t), qr = [Ut, P, rt, ft, Ra, Ea, Td], mi = (t) => qr.find(Yr(t)), wd = [...qr, z, pt], Sd = (t) => wd.find(Yr(t)), Cd = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ad(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Ln) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = Cd.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const Pd = /\b([a-z-]*)\(.*?\)/gu, cn = {
  ...pt,
  getAnimatableNone: (t) => {
    const e = t.match(Pd);
    return e ? e.map(Ad).join(" ") : t;
  }
}, Md = {
  ...An,
  // Color props
  color: z,
  backgroundColor: z,
  outlineColor: z,
  fill: z,
  stroke: z,
  // Border props
  borderColor: z,
  borderTopColor: z,
  borderRightColor: z,
  borderBottomColor: z,
  borderLeftColor: z,
  filter: cn,
  WebkitFilter: cn
}, Xr = (t) => Md[t];
function Zr(t, e) {
  let n = Xr(t);
  return n !== cn && (n = pt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const pi = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Dd {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Kn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = Y.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, I.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = De(n), this.isVariantNode = ki(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in d) {
      const f = d[h];
      l[h] !== void 0 && G(f) && f.set(l[h], !1);
    }
  }
  mount(e) {
    this.current = e, bd.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), zr.current || vd(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ln.current, process.env.NODE_ENV !== "production" && vn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), mt(this.notifyUpdate), mt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = jt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && I.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o(), r && r(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in Lt) {
      const n = Lt[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : F();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < pi.length; s++) {
      const i = pi[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = xd(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = It(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Gr(s) || Hr(s)) ? s = parseFloat(s) : !Sd(s) && pt.test(n) && (s = Zr(e, n)), this.setBaseTarget(e, G(s) ? s.get() : s)), G(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var o;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const r = Vn(this.props, n, (o = this.presenceContext) == null ? void 0 : o.custom);
      r && (s = r[e]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !G(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new Nn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
const Vd = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Ed(t) {
  const e = Vd.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const Rd = 4;
function Jr(t, e, n = 1) {
  ut(n <= Rd, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = Ed(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Gr(r) ? parseFloat(r) : r;
  }
  return Cn(i) ? Jr(i, e, n + 1) : i;
}
function kd(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Hr(t) : !0;
}
const Nd = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Od(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !Nd.has(o) && Jt(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = Zr(n, i);
}
class Ld extends Kn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Cn(u))) {
        const c = Jr(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !br.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = mi(i), a = mi(o);
    if (r !== a)
      if (xs(r) && xs(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else wt[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || kd(e[i])) && s.push(i);
    s.length && Od(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = wt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, r = s[o];
    s[o] = wt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      e.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
class Qr extends Dd {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ld;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    G(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function to(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
function Id(t) {
  return window.getComputedStyle(t);
}
class Fd extends Qr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = to;
  }
  readValueFromInstance(e, n) {
    var s;
    if (jt.has(n))
      return (s = this.projection) != null && s.isProjecting ? Ze(n) : rc(e, n);
    {
      const i = Id(e), o = (Sn(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Dr(e, n);
  }
  build(e, n, s) {
    Pn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return En(e, n, s);
  }
}
const eo = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Bd(t, e, n, s) {
  to(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(eo.has(i) ? i : Tn(i), e.attrs[i]);
}
class jd extends Qr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = F;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (jt.has(n)) {
      const s = Xr(n);
      return s && s.default || 0;
    }
    return n = eo.has(n) ? n : Tn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Ki(e, n, s);
  }
  build(e, n, s) {
    Ui(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Bd(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Wi(e.tagName), super.mount(e);
  }
}
const Ud = (t, e) => Dn(t) ? new jd(e) : new Fd(e, {
  allowProjection: t !== Si
}), $d = /* @__PURE__ */ qa({
  ...Wc,
  ...gd,
  ...Qu,
  ...yd
}, Ud), $ = /* @__PURE__ */ pa($d), gi = [{
  id: "bottom",
  delay: 2.6,
  transformOrigin: "center 89%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
}, {
  id: "right",
  delay: 2.4,
  transformOrigin: "88.5% center",
  rotateAxis: "0, 1, 0",
  path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
}, {
  id: "top",
  delay: 2,
  transformOrigin: "center 11%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
}, {
  id: "left",
  delay: 2.2,
  transformOrigin: "11% center",
  rotateAxis: "0, 1, 0",
  path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
}], Wd = (t, e) => {
  const n = se(), { onAnimationStart: s, onAnimationEnd: i, onDragStart: o, onDragEnd: r, onDrag: a, ...l } = t;
  return m("div", {
    className: "h-4 w-4 shrink-0",
    children: D($.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
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
        ...l.style
      },
      ...(({ style: u, ...c }) => c)(l),
      children: [D("defs", {
        children: [m("clipPath", {
          id: `${n}-circle`,
          children: m("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), gi.map((u) => m("clipPath", {
          id: `${n}-${u.id}`,
          children: m("path", {
            d: u.path
          })
        }, u.id))]
      }), m("g", {
        clipPath: `url(#${n}-circle)`,
        children: gi.map((u) => m($.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${n}-${u.id})`,
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
            transformOrigin: u.transformOrigin,
            willChange: "transform"
          },
          children: m("div", {
            style: {
              width: "100%",
              height: "100%",
              background: "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, u.id))
      })]
    })
  });
}, _d = hn(Wd), Yn = ({ title: t, status: e, inGroup: n }) => D("div", {
  className: "flex w-full items-start gap-1 text-f1-foreground-secondary",
  children: [e === "inProgress" && m("div", {
    className: "-mt-[2px] *:block",
    children: m(Ht, {
      state: "animate",
      size: n ? "md" : "lg",
      icon: jo
    })
  }), e === "executing" && m("div", {
    className: "-mt-[2px] grid h-6 w-6 shrink-0 items-center justify-items-center",
    children: m(_d, {})
  }), e === "completed" && m("div", {
    className: "-mt-[2px] *:block",
    children: m(Ht, {
      color: "secondary",
      state: "animate",
      size: n ? "md" : "lg",
      icon: Bo
    })
  }), m("p", {
    className: E("text-pretty", e === "executing" && "shine-text"),
    children: t
  })]
}), Kd = () => _o("(prefers-reduced-motion: reduce)", {
  initializeWithValue: !0,
  defaultValue: !1
});
function zd(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (t == null || t(i), n === !1 || !i.defaultPrevented)
      return e == null ? void 0 : e(i);
  };
}
function Gd(t, e = []) {
  let n = [];
  function s(o, r) {
    const a = w.createContext(r), l = n.length;
    n = [...n, r];
    const u = (d) => {
      var y;
      const { scope: h, children: f, ...p } = d, g = ((y = h == null ? void 0 : h[t]) == null ? void 0 : y[l]) || a, b = w.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ m(g.Provider, { value: b, children: f });
    };
    u.displayName = o + "Provider";
    function c(d, h) {
      var g;
      const f = ((g = h == null ? void 0 : h[t]) == null ? void 0 : g[l]) || a, p = w.useContext(f);
      if (p) return p;
      if (r !== void 0) return r;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((r) => w.createContext(r));
    return function(a) {
      const l = (a == null ? void 0 : a[t]) || o;
      return w.useMemo(
        () => ({ [`__scope${t}`]: { ...a, [t]: l } }),
        [a, l]
      );
    };
  };
  return i.scopeName = t, [s, Hd(i, ...e)];
}
function Hd(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const s = t.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const r = s.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(o)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return w.useMemo(() => ({ [`__scope${e.scopeName}`]: r }), [r]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
function no(t) {
  const e = w.useRef(t);
  return w.useEffect(() => {
    e.current = t;
  }), w.useMemo(() => (...n) => {
    var s;
    return (s = e.current) == null ? void 0 : s.call(e, ...n);
  }, []);
}
function Yd({
  prop: t,
  defaultProp: e,
  onChange: n = () => {
  }
}) {
  const [s, i] = qd({ defaultProp: e, onChange: n }), o = t !== void 0, r = o ? t : s, a = no(n), l = w.useCallback(
    (u) => {
      if (o) {
        const d = typeof u == "function" ? u(t) : u;
        d !== t && a(d);
      } else
        i(u);
    },
    [o, t, i, a]
  );
  return [r, l];
}
function qd({
  defaultProp: t,
  onChange: e
}) {
  const n = w.useState(t), [s] = n, i = w.useRef(s), o = no(e);
  return w.useEffect(() => {
    i.current !== s && (o(s), i.current = s);
  }, [s, i, o]), n;
}
var Ce = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
};
function yi(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function so(...t) {
  return (e) => {
    let n = !1;
    const s = t.map((i) => {
      const o = yi(i, e);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < s.length; i++) {
          const o = s[i];
          typeof o == "function" ? o() : yi(t[i], null);
        }
      };
  };
}
function io(...t) {
  return w.useCallback(so(...t), t);
}
var ro = w.forwardRef((t, e) => {
  const { children: n, ...s } = t, i = w.Children.toArray(n), o = i.find(Zd);
  if (o) {
    const r = o.props.children, a = i.map((l) => l === o ? w.Children.count(r) > 1 ? w.Children.only(null) : w.isValidElement(r) ? r.props.children : null : l);
    return /* @__PURE__ */ m(un, { ...s, ref: e, children: w.isValidElement(r) ? w.cloneElement(r, void 0, a) : null });
  }
  return /* @__PURE__ */ m(un, { ...s, ref: e, children: n });
});
ro.displayName = "Slot";
var un = w.forwardRef((t, e) => {
  const { children: n, ...s } = t;
  if (w.isValidElement(n)) {
    const i = Qd(n);
    return w.cloneElement(n, {
      ...Jd(s, n.props),
      // @ts-ignore
      ref: e ? so(e, i) : i
    });
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
un.displayName = "SlotClone";
var Xd = ({ children: t }) => /* @__PURE__ */ m(ee, { children: t });
function Zd(t) {
  return w.isValidElement(t) && t.type === Xd;
}
function Jd(t, e) {
  const n = { ...e };
  for (const s in e) {
    const i = t[s], o = e[s];
    /^on[A-Z]/.test(s) ? i && o ? n[s] = (...a) => {
      o(...a), i(...a);
    } : i && (n[s] = i) : s === "style" ? n[s] = { ...i, ...o } : s === "className" && (n[s] = [i, o].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function Qd(t) {
  var s, i;
  let e = (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : s.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (i = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : i.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var th = [
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
  "span",
  "svg",
  "ul"
], qn = th.reduce((t, e) => {
  const n = w.forwardRef((s, i) => {
    const { asChild: o, ...r } = s, a = o ? ro : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(a, { ...r, ref: i });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function eh(t, e) {
  return w.useReducer((n, s) => e[n][s] ?? n, t);
}
var oo = (t) => {
  const { present: e, children: n } = t, s = nh(e), i = typeof n == "function" ? n({ present: s.isPresent }) : w.Children.only(n), o = io(s.ref, sh(i));
  return typeof n == "function" || s.isPresent ? w.cloneElement(i, { ref: o }) : null;
};
oo.displayName = "Presence";
function nh(t) {
  const [e, n] = w.useState(), s = w.useRef({}), i = w.useRef(t), o = w.useRef("none"), r = t ? "mounted" : "unmounted", [a, l] = eh(r, {
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
  return w.useEffect(() => {
    const u = me(s.current);
    o.current = a === "mounted" ? u : "none";
  }, [a]), Ce(() => {
    const u = s.current, c = i.current;
    if (c !== t) {
      const h = o.current, f = me(u);
      t ? l("MOUNT") : f === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && h !== f ? "ANIMATION_OUT" : "UNMOUNT"), i.current = t;
    }
  }, [t, l]), Ce(() => {
    if (e) {
      let u;
      const c = e.ownerDocument.defaultView ?? window, d = (f) => {
        const g = me(s.current).includes(f.animationName);
        if (f.target === e && g && (l("ANIMATION_END"), !i.current)) {
          const b = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = b);
          });
        }
      }, h = (f) => {
        f.target === e && (o.current = me(s.current));
      };
      return e.addEventListener("animationstart", h), e.addEventListener("animationcancel", d), e.addEventListener("animationend", d), () => {
        c.clearTimeout(u), e.removeEventListener("animationstart", h), e.removeEventListener("animationcancel", d), e.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [e, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: w.useCallback((u) => {
      u && (s.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function me(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function sh(t) {
  var s, i;
  let e = (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : s.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (i = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : i.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
var ih = w.useId || (() => {
}), rh = 0;
function oh(t) {
  const [e, n] = w.useState(ih());
  return Ce(() => {
    n((s) => s ?? String(rh++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
var Xn = "Collapsible", [ah, bf] = Gd(Xn), [lh, Zn] = ah(Xn), ao = w.forwardRef(
  (t, e) => {
    const {
      __scopeCollapsible: n,
      open: s,
      defaultOpen: i,
      disabled: o,
      onOpenChange: r,
      ...a
    } = t, [l = !1, u] = Yd({
      prop: s,
      defaultProp: i,
      onChange: r
    });
    return /* @__PURE__ */ m(
      lh,
      {
        scope: n,
        disabled: o,
        contentId: oh(),
        open: l,
        onOpenToggle: w.useCallback(() => u((c) => !c), [u]),
        children: /* @__PURE__ */ m(
          qn.div,
          {
            "data-state": Qn(l),
            "data-disabled": o ? "" : void 0,
            ...a,
            ref: e
          }
        )
      }
    );
  }
);
ao.displayName = Xn;
var lo = "CollapsibleTrigger", co = w.forwardRef(
  (t, e) => {
    const { __scopeCollapsible: n, ...s } = t, i = Zn(lo, n);
    return /* @__PURE__ */ m(
      qn.button,
      {
        type: "button",
        "aria-controls": i.contentId,
        "aria-expanded": i.open || !1,
        "data-state": Qn(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        ...s,
        ref: e,
        onClick: zd(t.onClick, i.onOpenToggle)
      }
    );
  }
);
co.displayName = lo;
var Jn = "CollapsibleContent", uo = w.forwardRef(
  (t, e) => {
    const { forceMount: n, ...s } = t, i = Zn(Jn, t.__scopeCollapsible);
    return /* @__PURE__ */ m(oo, { present: n || i.open, children: ({ present: o }) => /* @__PURE__ */ m(ch, { ...s, ref: e, present: o }) });
  }
);
uo.displayName = Jn;
var ch = w.forwardRef((t, e) => {
  const { __scopeCollapsible: n, present: s, children: i, ...o } = t, r = Zn(Jn, n), [a, l] = w.useState(s), u = w.useRef(null), c = io(e, u), d = w.useRef(0), h = d.current, f = w.useRef(0), p = f.current, g = r.open || a, b = w.useRef(g), y = w.useRef(void 0);
  return w.useEffect(() => {
    const T = requestAnimationFrame(() => b.current = !1);
    return () => cancelAnimationFrame(T);
  }, []), Ce(() => {
    const T = u.current;
    if (T) {
      y.current = y.current || {
        transitionDuration: T.style.transitionDuration,
        animationName: T.style.animationName
      }, T.style.transitionDuration = "0s", T.style.animationName = "none";
      const v = T.getBoundingClientRect();
      d.current = v.height, f.current = v.width, b.current || (T.style.transitionDuration = y.current.transitionDuration, T.style.animationName = y.current.animationName), l(s);
    }
  }, [r.open, s]), /* @__PURE__ */ m(
    qn.div,
    {
      "data-state": Qn(r.open),
      "data-disabled": r.disabled ? "" : void 0,
      id: r.contentId,
      hidden: !g,
      ...o,
      ref: c,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": p ? `${p}px` : void 0,
        ...t.style
      },
      children: g && i
    }
  );
});
function Qn(t) {
  return t ? "open" : "closed";
}
var uh = ao;
const dh = uh, hh = co, fh = uo, ho = ({ icon: t, title: e, children: n }) => {
  const [s, i] = K(!1), o = Kd();
  return D(dh, {
    className: "mb-1 w-full",
    open: s,
    onOpenChange: i,
    children: [D(hh, {
      className: "flex w-full items-center text-base text-f1-foreground-secondary transition-colors duration-150 hover:text-f1-foreground [&[data-state=open]>svg]:rotate-90",
      children: [m("span", {
        className: "mr-2 *:block",
        children: m(Ht, {
          icon: t,
          className: "block"
        })
      }), m("span", {
        className: "mr-[2px]",
        children: e
      }), m(Ht, {
        icon: Wo,
        className: "h-4 w-4 transition-transform duration-200"
      })]
    }), m(fh, {
      forceMount: !0,
      className: "data-[state=open]:mt-3",
      children: m($.div, {
        initial: !1,
        animate: {
          height: s ? "auto" : 0,
          opacity: s ? 1 : 0,
          visibility: s ? "visible" : "hidden"
        },
        transition: {
          duration: o ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        className: "flex flex-col gap-2",
        children: n
      })
    })]
  });
}, fo = at(null), mh = (t, e) => {
  const n = t.split(".");
  let s = e;
  for (const i of n)
    if (s && typeof s == "object" && i in s)
      s = s[i];
    else
      return;
  return typeof s == "string" ? s : void 0;
};
function xf({ children: t, translations: e }) {
  const n = (s, i = {}) => {
    let o = mh(s, e);
    if (o === void 0)
      return console.warn(`Translation key ${s} not found`), s;
    for (const [r, a] of Object.entries(i))
      o = o.replace(`{{${r}}}`, a.toString());
    return o;
  };
  return m(fo.Provider, {
    value: {
      ...e,
      t: n
    },
    children: t
  });
}
function Ct() {
  const t = B(fo);
  if (t === null)
    throw new Error("useI18n must be used within an I18nProvider");
  return t;
}
const Tf = (t) => t, wf = {
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: {
      label: "Main navigation",
      companySelector: {
        label: "Select a company",
        placeholder: "Select a company"
      }
    },
    previous: "Previous",
    next: "Next"
  },
  inputs: {
    password: {
      show: "Show password",
      hide: "Hide password"
    }
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    send: "Send",
    cancel: "Cancel",
    copy: "Copy",
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle",
    toggleDropdownMenu: "Toggle dropdown menu"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected"
    }
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry",
    number: {
      value: "Value",
      equal: "Equal to",
      equalTo: "Equal to {{value}}",
      lessOrEqual: "Less or equal to",
      greaterOrEqual: "Greater or equal to",
      equalShort: "= {{value}}",
      greaterThanOrEqualShort: ">= {{value}}",
      lessThanOrEqualShort: "<= {{value}}",
      rangeTitle: "Use range",
      range: "Between {{min}} and {{max}}"
    }
  },
  toc: {
    search: "Search..."
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      kanban: "Kanban view",
      pagination: {
        of: "of"
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default"
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week",
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications",
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn’t work"
      }
    }
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  },
  numberInput: {
    between: "It should be between {{min}} and {{max}}",
    greaterThan: "It should be greater than {{min}}",
    lessThan: "It should be less than {{max}}"
  }
}, ph = {
  p: ({ children: t, ...e }) => m("p", {
    ...e,
    className: E("text-base font-normal", e.className),
    children: t
  }),
  h1: ({ children: t, ...e }) => m("h1", {
    ...e,
    className: E("mb-2.5 mt-4 text-2xl font-medium first:mt-0 last:mb-0", e.className),
    children: t
  }),
  h2: ({ children: t, ...e }) => m("h2", {
    ...e,
    className: E("mb-2.5 mt-4 text-lg font-medium leading-6 first:mt-0 last:mb-0", e.className),
    children: t
  }),
  h3: ({ children: t, ...e }) => m("h3", {
    ...e,
    className: E("mb-2 mt-3.5 text-base font-semibold first:mt-0 last:mb-0", e.className),
    children: t
  }),
  a: ({ children: t, ...e }) => m(Ro, {
    ...e,
    variant: "link",
    href: e.href,
    children: t
  }),
  strong: ({ children: t, ...e }) => m("strong", {
    ...e,
    className: E("font-semibold", e.className),
    children: t
  }),
  em: ({ children: t, ...e }) => m("em", {
    ...e,
    className: E("italic", e.className),
    children: t
  }),
  li: ({ children: t, ...e }) => m("li", {
    ...e,
    className: E("mb-2", e.className),
    children: t
  }),
  pre: ({ children: t, ...e }) => m("pre", {
    ...e,
    className: E("relative mx-0 my-4 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2", e.className),
    children: t
  }),
  blockquote: ({ children: t, ...e }) => m("blockquote", {
    ...e,
    className: E("m-0 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-4", e.className),
    children: t
  }),
  hr: ({ ...t }) => m("hr", {
    ...t,
    className: E("my-3 border-0 border-t border-f1-border", t.className)
  }),
  ul: ({ children: t, ...e }) => m("ul", {
    ...e,
    className: E("list-disc pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", e.className),
    children: t
  }),
  ol: ({ children: t, ...e }) => m("ol", {
    ...e,
    className: E("list-decimal pl-5 [&>li>ol]:mt-2 [&>li>ul]:mt-2", e.className),
    children: t
  }),
  table: ({ children: t, ...e }) => m("table", {
    ...e,
    className: E("mb-2 w-full border-separate border-spacing-0 overflow-hidden rounded-md border border-solid border-f1-border-secondary", e.className),
    children: t
  }),
  th: ({ children: t, ...e }) => m("th", {
    ...e,
    className: E("border-0 border-b border-solid border-f1-border-secondary px-3 py-2 text-left font-medium text-f1-foreground-secondary", e.className),
    children: t
  }),
  td: ({ children: t, ...e }) => m("td", {
    ...e,
    className: E("border-0 border-b border-solid border-f1-border-secondary px-3 py-2", e.className),
    children: t
  }),
  img: ({ src: t, alt: e, ...n }) => {
    const s = () => {
      if (t) {
        const i = document.createElement("a");
        i.href = t, i.download = e || "image", document.body.appendChild(i), i.click(), document.body.removeChild(i);
      }
    };
    return D("div", {
      className: "relative w-fit",
      children: [m("img", {
        ...n,
        src: t,
        alt: e,
        className: E("max-w-full rounded-md", n.className)
      }), m("div", {
        className: "absolute right-2 top-2 rounded bg-f1-background-inverse-secondary",
        children: m(We, {
          variant: "neutral",
          label: "t.actions.save",
          hideLabel: !0,
          icon: Qo,
          onClick: s
        })
      })]
    });
  }
}, mo = at(null), po = ({ children: t }) => {
  const [e, n] = K(null), s = e ? {
    isOpen: !0,
    currentReaction: e.action,
    currentMessage: e.message,
    open: (i, o) => n({
      action: i,
      message: o
    }),
    close: () => n(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (i, o) => n({
      action: i,
      message: o
    }),
    close: () => n(null)
  };
  return m(mo.Provider, {
    value: s,
    children: t
  });
}, ts = () => {
  const t = B(mo);
  if (t === null)
    throw new Error("useFeedbackModal must be used within a FeedbackModalProvider");
  return t;
}, go = ({ isGenerating: t, isLoading: e, markdownTagRenderers: n, message: s, onCopy: i }) => {
  var T, v;
  const o = (s == null ? void 0 : s.content) || "", r = (s == null ? void 0 : s.role) === "assistant" && ((T = s.toolCalls) == null ? void 0 : T.find((C) => C.function.name === "orchestratorThinking")), a = (v = s == null ? void 0 : s.generativeUI) == null ? void 0 : v.call(s, r ? {
    status: e ? "executing" : "completed"
  } : void 0), l = !o && !a, u = Ct(), { open: c } = ts(), [d, h] = K(null), [f, p] = K(!1), g = j(), b = Ot(() => {
    g.current && clearTimeout(g.current), !e && !t && !a && p(!0);
  }, [t, e, a]), y = Ot(() => {
    g.current = setTimeout(() => {
      p(!1);
    }, 150);
  }, []);
  return !e && !t && l ? null : D("div", {
    className: "relative isolate flex w-full flex-col items-start justify-center",
    onMouseEnter: b,
    onMouseLeave: y,
    children: [e && !a && m(Yn, {
      title: u.ai.thinking,
      status: "executing"
    }), s && D(ee, {
      children: [m("div", {
        className: "w-fit max-w-[min(90%,330px)] [&>div]:flex [&>div]:flex-col [&>div]:gap-1",
        children: m(Mo, {
          content: o,
          components: {
            ...ph,
            ...n
          }
        })
      }), m("div", {
        className: E("invisible absolute left-0 top-full py-1 pr-4 focus-within:visible", f && !t && "visible"),
        onMouseEnter: b,
        children: D("div", {
          className: "flex gap-1",
          children: [m("div", {
            children: m(ta, {
              variant: "ghost",
              valueToCopy: o,
              disabled: t,
              onCopy: (C) => {
                C.currentTarget.blur(), i == null || i(o);
              }
            })
          }), m("div", {
            children: m(We, {
              variant: "ghost",
              size: "sm",
              label: u.actions.thumbsUp,
              icon: d === "like" ? Ho : Yo,
              hideLabel: !0,
              disabled: t,
              onClick: (C) => {
                const x = d === "like" ? null : "like";
                x && c(x, s), h(x), C.currentTarget.blur();
              }
            })
          }), m("div", {
            children: m(We, {
              variant: "ghost",
              size: "sm",
              label: u.actions.thumbsDown,
              icon: d === "dislike" ? qo : Xo,
              hideLabel: !0,
              disabled: t,
              onClick: (C) => {
                const x = d === "dislike" ? null : "dislike";
                x && c(x, s), h(x), C.currentTarget.blur();
              }
            })
          })]
        })
      })]
    }), !!a && m("div", {
      className: "w-full",
      children: a
    })]
  });
}, gh = () => null, yo = at(null), yh = 15, vh = ({ children: t, enabled: e, agent: n, initialMessage: s, welcomeScreenSuggestions: i = [], onThumbsDown: o, onThumbsUp: r, ...a }) => {
  const [l, u] = K(e), [c, d] = K(!1), [h, f] = K(!0), [p, g] = K(n), [b, y] = K(i), [T, v] = K(yh), [C, x] = K(s), S = j(null), M = (k) => {
    g(k);
  }, A = (k) => {
    S.current = k;
  }, R = () => {
    S.current && S.current();
  };
  return nt(() => {
    u(e);
  }, [e]), nt(() => {
    if (!c) {
      const k = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      f(!k);
    }
  }, [c]), m(yo.Provider, {
    value: {
      ...a,
      enabled: l,
      setEnabled: u,
      open: c,
      setOpen: d,
      shouldPlayEntranceAnimation: h,
      setShouldPlayEntranceAnimation: f,
      agent: p,
      tmp_setAgent: M,
      setAutoClearMinutes: v,
      autoClearMinutes: l ? T : null,
      initialMessage: C,
      setInitialMessage: x,
      welcomeScreenSuggestions: b,
      setWelcomeScreenSuggestions: y,
      onThumbsUp: r,
      onThumbsDown: o,
      clear: R,
      setClearFunction: A
    },
    children: t
  });
}, Q = () => {
};
function yt() {
  const t = B(yo);
  return t === null ? {
    enabled: !1,
    setEnabled: Q,
    open: !1,
    setOpen: Q,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Q,
    agent: void 0,
    tmp_setAgent: Q,
    setAutoClearMinutes: Q,
    clear: Q,
    setClearFunction: Q,
    autoClearMinutes: null,
    initialMessage: void 0,
    setInitialMessage: Q,
    welcomeScreenSuggestions: [],
    setWelcomeScreenSuggestions: Q,
    onThumbsUp: Q,
    onThumbsDown: Q
  } : t;
}
const bh = (t) => {
  const { labels: e } = Do(), { setOpen: n } = yt(), s = Ct(), i = e.title === "CopilotKit";
  return D("header", {
    className: E("flex justify-between border-0 border-solid border-f1-border-secondary p-3"),
    children: [m("h2", {
      className: "text-f1-foreground",
      children: i ? "" : e.title
    }), m($.div, {
      layout: !0,
      className: "flex items-center gap-x-2",
      ...t,
      children: m(lt, {
        variant: "ghost",
        hideLabel: !0,
        label: s.ai.closeChat,
        icon: ia,
        onClick: () => n(!1)
      })
    })]
  });
}, vo = ({ inProgress: t, onSend: e, onStop: n }) => {
  const [s, i] = K(""), [o, r] = K(!1), a = j(null), l = j(null), u = Ct(), c = s.trim().length > 0;
  nt(() => {
    if (l.current && s.length > 0) {
      const { scrollHeight: f } = l.current;
      r(f > 240);
    } else
      r(!1);
  }, [s]);
  const d = (f) => {
    var p;
    f.preventDefault(), t ? n == null || n() : c && (e(s.trim()), i("")), (p = l.current) == null || p.focus();
  }, h = (f) => {
    var p;
    f.key === "Enter" && !f.shiftKey && (f.preventDefault(), t || (p = a.current) == null || p.requestSubmit());
  };
  return D($.form, {
    layout: !0,
    "aria-busy": t,
    ref: a,
    className: E("relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border hover:cursor-text", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']", "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "after:transition-all after:delay-200 after:duration-300 has-[textarea:focus]:after:scale-100 has-[textarea:focus]:after:opacity-100", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-['']"),
    animate: {
      "--gradient-angle": ["0deg", "360deg"]
    },
    transition: {
      default: {
        duration: 6,
        ease: "linear",
        repeat: 1 / 0
      },
      layout: {
        duration: 0.3
      }
    },
    style: {
      "--gradient-angle": "180deg"
    },
    onClick: () => {
      var f;
      (f = l.current) == null || f.focus();
    },
    onSubmit: d,
    children: [D("div", {
      className: "grid grid-cols-1 grid-rows-1",
      children: [m("div", {
        "aria-hidden": !0,
        className: "pointer-events-none invisible col-start-1 row-start-1 mb-0 mt-3 max-h-[240px] whitespace-pre-wrap break-words px-3 text-f1-foreground",
        children: s.endsWith(`
`) ? s + "_" : s
      }), m(ie, {
        children: o && m($.div, {
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 0.5
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.2,
            ease: "easeOut"
          },
          className: E("pointer-events-none absolute inset-x-0 z-10 h-3 rounded-t-xl after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']", "-top-px bg-gradient-to-b from-f1-background-selected to-transparent after:-top-px")
        })
      }), m("textarea", {
        autoFocus: !0,
        name: "one-ai-input",
        ref: l,
        value: s,
        onChange: (f) => {
          i(f.target.value);
        },
        onKeyDown: h,
        placeholder: u.ai.inputPlaceholder,
        className: E("col-start-1 row-start-1", "mb-0 mt-3 max-h-[240px] flex-1 resize-none px-3 outline-none transition-all", "whitespace-pre-wrap break-words", "text-f1-foreground placeholder:text-f1-foreground-secondary", o ? "scrollbar-macos overflow-y-scroll" : "overflow-y-hidden")
      })]
    }), m("div", {
      className: "flex flex-row-reverse p-3 pt-0",
      children: t ? m(lt, {
        type: "submit",
        variant: "neutral",
        label: u.ai.stopAnswerGeneration,
        icon: Zo,
        hideLabel: !0
      }) : m(lt, {
        type: "submit",
        disabled: !c,
        variant: c ? "default" : "neutral",
        label: u.ai.sendMessage,
        icon: Jo,
        hideLabel: !0
      })
    })]
  });
}, xh = ({
  autoClearMinutes: t,
  reset: e,
  isOpen: n
}) => {
  const s = j(null);
  nt(() => (n ? s.current && (clearTimeout(s.current), s.current = null) : t !== null && (s.current = setTimeout(
    () => {
      e();
    },
    t * 60 * 1e3
  )), () => {
    s.current && (clearTimeout(s.current), s.current = null);
  }), [e, n, t]);
}, Th = ({ children: t }) => {
  const { open: e, shouldPlayEntranceAnimation: n, setShouldPlayEntranceAnimation: s, autoClearMinutes: i } = yt(), { reset: o } = ne();
  return xh({
    reset: o,
    isOpen: e,
    autoClearMinutes: i
  }), m(ie, {
    children: e && m($.div, {
      "aria-hidden": !e,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: n ? {
        opacity: 0,
        width: 0
      } : !1,
      animate: {
        opacity: 1,
        width: 360
      },
      exit: {
        opacity: 0,
        width: 0
      },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        n && s(!1);
      },
      children: m($.div, {
        className: "relative flex h-full w-[360px] flex-col overflow-hidden",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: n ? 0.3 : 0.05,
          ease: "easeOut",
          delay: n ? 0.2 : 0
        },
        children: t
      })
    }, "chat-window")
  });
};
function wh(t) {
  return t.role === "assistant" && t.agentName !== void 0;
}
const bo = ({ onClose: t, onSubmit: e, reactionType: n, message: s }) => {
  const [i, o] = K(""), r = Ct(), { title: a, label: l, placeholder: u } = n === "like" ? r.ai.feedbackModal.positive : r.ai.feedbackModal.negative, c = Ot(() => {
    e(s, i);
  }, [i, s, e]), d = () => {
    t(s);
  };
  return nt(() => {
    const h = (f) => {
      f.key === "Enter" && (f.preventDefault(), c());
    };
    return document.addEventListener("keydown", h), () => {
      document.removeEventListener("keydown", h);
    };
  }, [c]), D(ce, {
    position: "center",
    isOpen: !0,
    onClose: d,
    contentPadding: "sm",
    children: [m(ce.Header, {
      title: a
    }), m(ce.Content, {
      children: m("div", {
        className: "flex flex-col gap-6 p-4",
        children: m(ea, {
          autoFocus: !0,
          label: l,
          placeholder: u,
          value: i,
          onChange: (h) => o(h.trim()),
          size: "md",
          type: "text"
        })
      })
    }), m(ce.Footer, {
      children: D("div", {
        className: "flex flex-1 flex-row-reverse gap-3",
        children: [m(lt, {
          onClick: c,
          label: r.actions.send
        }), m(lt, {
          onClick: d,
          label: r.actions.cancel,
          variant: "outline"
        })]
      })
    })]
  });
}, xo = ({ messages: t }) => {
  const e = Ct();
  return m(ho, {
    icon: na,
    title: e.ai.thoughtsGroupTitle,
    children: m("div", {
      className: "flex flex-col gap-2 pl-7",
      children: t.map((n, s) => {
        var i;
        return m("div", {
          children: n.role === "assistant" && ((i = n.generativeUI) == null ? void 0 : i.call(n, {
            status: "complete",
            result: {
              inGroup: !0
            }
          }))
        }, s);
      })
    })
  });
}, vi = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Sh = (t) => {
  const e = function() {
    for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
      o[r] = arguments[r];
    return Ci(o);
  };
  return {
    compose: function() {
      for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
        o[r] = arguments[r];
      return (a) => {
        const l = Object.fromEntries(Object.entries(a || {}).filter((u) => {
          let [c] = u;
          return ![
            "class",
            "className"
          ].includes(c);
        }));
        return e(o.map((u) => u(l)), a == null ? void 0 : a.class, a == null ? void 0 : a.className);
      };
    },
    cva: (i) => (o) => {
      var r;
      if ((i == null ? void 0 : i.variants) == null) return e(i == null ? void 0 : i.base, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
      const { variants: a, defaultVariants: l } = i, u = Object.keys(a).map((h) => {
        const f = o == null ? void 0 : o[h], p = l == null ? void 0 : l[h], g = vi(f) || vi(p);
        return a[h][g];
      }), c = {
        ...l,
        // remove `undefined` props
        ...o && Object.entries(o).reduce((h, f) => {
          let [p, g] = f;
          return typeof g > "u" ? h : {
            ...h,
            [p]: g
          };
        }, {})
      }, d = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((h, f) => {
        let { class: p, className: g, ...b } = f;
        return Object.entries(b).every((y) => {
          let [T, v] = y;
          const C = c[T];
          return Array.isArray(v) ? v.includes(C) : C === v;
        }) ? [
          ...h,
          p,
          g
        ] : h;
      }, []);
      return e(i == null ? void 0 : i.base, u, d, o == null ? void 0 : o.class, o == null ? void 0 : o.className);
    },
    cx: e
  };
}, { cva: Ch } = Sh(), Ah = Ch({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), bi = [{
  id: "bottom",
  delay: 2.6,
  transformOrigin: "center 89%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
}, {
  id: "left",
  delay: 2.2,
  transformOrigin: "11% center",
  rotateAxis: "0, 1, 0",
  path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
}, {
  id: "right",
  delay: 2.4,
  transformOrigin: "88.5% center",
  rotateAxis: "0, 1, 0",
  path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
}, {
  id: "top",
  delay: 2,
  transformOrigin: "center 11%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
}], Ph = ({ spin: t = !1, size: e = "md", background: n, hover: s = !1, ...i }, o) => {
  const r = se(), { onAnimationStart: a, onAnimationEnd: l, onDragStart: u, onDragEnd: c, onDrag: d, className: h, ...f } = i;
  return m("div", {
    className: E(Ah({
      size: e
    }), h),
    style: {
      background: "transparent",
      perspective: t ? "10px" : void 0,
      transformStyle: t ? "preserve-3d" : void 0
    },
    children: D($.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: o,
      animate: {
        "--gradient-angle": ["0deg", "360deg"]
      },
      transition: n ? void 0 : {
        "--gradient-angle": {
          duration: 6,
          ease: "linear",
          repeat: 1 / 0
        }
      },
      style: {
        "--gradient-angle": "0deg",
        ...f.style
      },
      ...(({ style: p, ...g }) => g)(f),
      children: [D("defs", {
        children: [m("clipPath", {
          id: `${r}-circle`,
          children: m("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), bi.map((p) => m("clipPath", {
          id: `${r}-${p.id}`,
          children: m("path", {
            d: p.path
          })
        }, p.id))]
      }), m("g", {
        clipPath: `url(#${r}-circle)`,
        children: bi.map((p) => m($.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${r}-${p.id})`,
          animate: {
            "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
            "--scale": s ? 8 : 1,
            "--rotate": s ? "90deg" : "0deg",
            opacity: s ? p.id === "left" ? 1 : 0 : 1,
            filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
          },
          transition: {
            "--rotate3d-angle": {
              delay: t ? p.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.99, 0.9999, 1]
            },
            "--scale": {
              duration: s ? 0.6 : 0.35,
              ease: [0.55, 0, 0.1, 1]
            },
            "--rotate": {
              duration: 0.35,
              ease: "easeInOut"
            },
            opacity: {
              duration: s ? 0.8 : 0.1,
              ease: "easeInOut"
            },
            filter: {
              delay: t ? p.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.5, 1]
            }
          },
          style: {
            "--rotate3d-angle": "0deg",
            "--scale": 1,
            "--rotate": "0deg",
            transform: t ? `rotate3d(${p.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
            transformOrigin: p.transformOrigin,
            willChange: "transform"
          },
          children: m("div", {
            style: {
              width: "100%",
              height: "100%",
              background: n ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, p.id))
      })]
    })
  });
}, Mh = hn(Ph), Dh = 3;
function Vh(t, e = Dh) {
  return [...t].sort(() => 0.5 - Math.random()).slice(0, e);
}
const To = ({ greeting: t, initialMessages: e = [], suggestions: n = [] }) => {
  const { sendMessage: s } = ne(), i = Vh(n);
  return m(ie, {
    mode: "popLayout",
    children: D($.div, {
      className: "flex w-full flex-1 flex-col justify-end gap-4",
      initial: {
        opacity: 1
      },
      children: [D("div", {
        className: "px-2",
        children: [m($.div, {
          className: "flex w-fit justify-center",
          initial: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(6px)"
          },
          animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.4
            },
            scale: {
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 1.94]
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.4
            }
          },
          children: m(Mh, {
            spin: !0,
            size: "lg",
            className: "my-4"
          })
        }), t && m($.p, {
          className: "text-lg font-semibold text-f1-foreground-secondary",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.5
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.5
            },
            translateY: {
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.5
            }
          },
          children: t
        }), e.map((o) => m($.p, {
          className: "text-lg font-semibold text-f1-foreground",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7
            },
            filter: {
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7
            },
            translateY: {
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.7
            }
          },
          children: o.content
        }, o.id))]
      }), m("div", {
        className: "-ml-2 flex flex-col items-start gap-[6px]",
        children: i.map((o, r) => m($.div, {
          className: "w-full",
          initial: {
            opacity: 0,
            filter: "blur(2px)",
            translateY: -8
          },
          animate: {
            opacity: 1,
            filter: "blur(0px)",
            translateY: 0
          },
          transition: {
            opacity: {
              duration: 0.1,
              ease: "easeOut",
              delay: 0.9 + r * 0.1
            },
            filter: {
              duration: 0.1,
              ease: "easeOut",
              delay: 0.9 + r * 0.1
            },
            translateY: {
              duration: 0.1,
              ease: [0.25, 0.46, 0.45, 1.94],
              delay: 0.9 + r * 0.1
            }
          },
          children: m(lt, {
            className: "w-full items-start justify-start overflow-x-hidden",
            variant: "ghost",
            label: o.message,
            icon: o.icon,
            onClick: () => s({
              id: sa(),
              role: "user",
              content: o.prompt || o.message
            })
          })
        }, r))
      })]
    }, "welcome")
  });
}, Eh = (t) => m(po, {
  children: m(Rh, {
    ...t
  })
}), Rh = ({ inProgress: t, children: e, RenderMessage: n, AssistantMessage: s, UserMessage: i, ImageRenderer: o, onRegenerate: r, onCopy: a, markdownTagRenderers: l }) => {
  const u = j(null), { messages: c, interrupt: d } = ne(), { threadId: h } = Ti(), { close: f, currentReaction: p, currentMessage: g, isOpen: b } = ts(), y = Ct(), { greeting: T, initialMessage: v, welcomeScreenSuggestions: C, onThumbsUp: x, onThumbsDown: S } = yt(), M = st(() => kh(v || y.ai.defaultInitialMessage), [v, y.ai.defaultInitialMessage]), A = c.length == 0 && (T || M.length > 0), { messagesContainerRef: R, messagesEndRef: k, showScrollToBottom: it, scrollToBottom: At } = wo(), { height: Pt = 0 } = Ko({
    ref: R,
    box: "border-box"
  }), q = st(() => So(c), [c]);
  return D(ee, {
    children: [D($.div, {
      layout: !0,
      className: E("scrollbar-macos relative isolate flex flex-1 flex-col px-4 pt-3", "overflow-y-scroll"),
      ref: R,
      children: [D($.div, {
        layout: "position",
        ref: u,
        className: A ? "flex flex-1 pb-3" : "flex flex-col gap-8",
        children: [A && m(To, {
          greeting: T,
          initialMessages: M,
          suggestions: C
        }), q.map((W, N) => {
          const V = N === q.length - 1;
          return m("div", {
            className: "flex flex-col items-start justify-start gap-2",
            style: {
              minHeight: V ? Pt * 0.8 : void 0
            },
            children: W.map((U, ht) => {
              const Mt = N === q.length - 1 && ht === W.length - 1;
              return Array.isArray(U) && !Mt ? m(xo, {
                messages: U,
                isActive: !1,
                inProgress: t,
                RenderMessage: n,
                AssistantMessage: s
              }, `${N}-${ht}`) : m(n, {
                message: Array.isArray(U) ? U[U.length - 1] : U,
                inProgress: t,
                index: ht,
                isCurrentMessage: Mt,
                AssistantMessage: s,
                UserMessage: i,
                ImageRenderer: o,
                onRegenerate: r,
                onCopy: a,
                markdownTagRenderers: l
              }, `${N}-${ht}`);
            })
          }, `turn-${N}`);
        }), d]
      }), m("footer", {
        className: "copilotKitMessagesFooter",
        ref: k,
        children: e
      }), m(ie, {
        children: it && m($.div, {
          className: "sticky bottom-2 z-10 flex justify-center",
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.2
          },
          children: m("div", {
            className: "rounded bg-f1-background",
            children: m(lt, {
              onClick: () => At(),
              label: y.ai.scrollToBottom,
              variant: "neutral",
              icon: Ai,
              hideLabel: !0
            })
          })
        })
      })]
    }), b && m(bo, {
      onSubmit: (W, N) => {
        const V = p === "like" ? x : S;
        V == null || V(W, {
          threadId: h,
          feedback: N
        }), f();
      },
      onClose: (W) => {
        const N = p === "like" ? x : S;
        N == null || N(W, {
          threadId: h,
          feedback: ""
        }), f();
      },
      reactionType: p,
      message: g
    })]
  });
};
function kh(t) {
  const e = [];
  return t && (Array.isArray(t) ? e.push(...t) : e.push(t)), e.map((n) => ({
    id: n,
    role: "assistant",
    content: n
  }));
}
function wo() {
  const t = j(null), e = j(null), n = j(!1), s = j(!1), [i, o] = K(!1), r = (c = "smooth") => {
    e.current && t.current && (o(!1), n.current = !0, t.current.scrollIntoView({
      behavior: c
    }));
  }, a = () => {
    if (e.current) {
      const { scrollTop: c, scrollHeight: d, clientHeight: h } = e.current, f = 20;
      s.current = c + h + f < d;
    } else
      s.current = !1;
  }, l = () => {
    if (!e.current) {
      o(!1);
      return;
    }
    const { scrollTop: c, scrollHeight: d, clientHeight: h } = e.current, f = c < d - 3 * h;
    o(f);
  }, u = Ot(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    a(), l();
  }, []);
  return zo("scroll", u, e), nt(() => {
    const c = e.current;
    if (!c)
      return;
    r("instant");
    const d = new MutationObserver(() => {
      l();
    });
    return d.observe(c, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => {
      d.disconnect();
    };
  }, []), {
    messagesEndRef: t,
    messagesContainerRef: e,
    showScrollToBottom: i,
    scrollToBottom: r
  };
}
function So(t) {
  if (t.length === 0)
    return [];
  console.assert(t[0].role === "user", "Invariant violation! Assistant message received before user message");
  const e = [];
  for (const [n, s] of t.entries()) {
    if (s.role === "user") {
      e.push([s]);
      continue;
    }
    const i = e[e.length - 1];
    if (wh(s) && xi(i)) {
      if (n !== t.length - 1) {
        const o = i.pop();
        i.push(s, o);
      }
      continue;
    }
    if (Nh(s)) {
      xi(i) ? i.at(-1).push(s) : i.push([s]);
      continue;
    }
    i.push(s);
  }
  return e;
}
function Nh(t) {
  var e;
  return t.role === "assistant" && ((e = t.toolCalls) == null ? void 0 : e.some((n) => n.function.name === "orchestratorThinking")) === !0;
}
function xi(t) {
  const e = t.at(-1);
  return Array.isArray(e);
}
const Oh = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work"
      }
    }
  }
}, Lh = at(null);
function Ih() {
  const t = B(Lh);
  return t || Oh;
}
const Fh = (t) => m(po, {
  children: m(Bh, {
    ...t
  })
}), Bh = ({ inProgress: t, children: e, RenderMessage: n, AssistantMessage: s, UserMessage: i, ImageRenderer: o, onRegenerate: r, onCopy: a, markdownTagRenderers: l }) => {
  const u = j(null), { messages: c, interrupt: d } = ne(), { threadId: h } = Ti(), { close: f, currentReaction: p, currentMessage: g, isOpen: b } = ts(), y = Ih(), { greeting: T, initialMessage: v, welcomeScreenSuggestions: C, onThumbsUp: x, onThumbsDown: S } = yt(), M = st(() => jh(v || y.ai.defaultInitialMessage), [v, y.ai.defaultInitialMessage]), A = c.length === 0 && (T || M.length > 0), { messagesContainerRef: R, messagesEndRef: k, showScrollToBottom: it, scrollToBottom: At } = wo(), Pt = st(() => So(c), [c]);
  return D(ee, {
    children: [D("div", {
      className: "flex h-full w-full flex-col overflow-hidden",
      style: {
        position: "relative",
        minHeight: 0
      },
      children: [D("div", {
        ref: R,
        className: E("scrollbar-macos flex flex-1 flex-col overflow-y-auto px-4 pt-3", A ? "justify-end" : "justify-start"),
        style: {
          minHeight: 0
        },
        children: [D("div", {
          ref: u,
          className: A ? "flex pb-3" : "flex flex-col gap-8",
          style: {
            width: "100%"
          },
          children: [A && m(To, {
            greeting: T,
            initialMessages: M,
            suggestions: C
          }), Pt.map((q, W) => m("div", {
            className: "flex flex-col items-start justify-start gap-2",
            children: q.map((N, V) => {
              const U = W === Pt.length - 1 && V === q.length - 1;
              return Array.isArray(N) && !U ? m(xo, {
                messages: N,
                isActive: !1,
                inProgress: t,
                RenderMessage: n,
                AssistantMessage: s
              }, `${W}-${V}`) : m(n, {
                message: Array.isArray(N) ? N[N.length - 1] : N,
                inProgress: t,
                index: V,
                isCurrentMessage: U,
                AssistantMessage: s,
                UserMessage: i,
                ImageRenderer: o,
                onRegenerate: r,
                onCopy: a,
                markdownTagRenderers: l
              }, `${W}-${V}`);
            })
          }, `turn-${W}`)), d, m("div", {
            ref: k,
            className: "h-2"
          })]
        }), m(ie, {
          children: it && m($.div, {
            className: "sticky bottom-20 z-10 flex justify-center",
            initial: {
              opacity: 0,
              scale: 0.8
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            exit: {
              opacity: 0,
              scale: 0.8
            },
            transition: {
              duration: 0.2
            },
            children: m("div", {
              className: "rounded bg-f1-background",
              children: m(lt, {
                onClick: () => At(),
                label: y.ai.scrollToBottom,
                variant: "neutral",
                icon: Ai,
                hideLabel: !0
              })
            })
          })
        })]
      }), m("footer", {
        className: "copilotKitMessagesFooter bg-white border-gray-200 w-full border-t",
        style: {
          position: "sticky",
          bottom: 0,
          zIndex: 10,
          flexShrink: 0
        },
        children: e
      })]
    }), b && m(bo, {
      onSubmit: (q, W) => {
        const N = p === "like" ? x : S;
        N == null || N(q, {
          threadId: h,
          feedback: W
        }), f();
      },
      onClose: (q) => {
        const W = p === "like" ? x : S;
        W == null || W(q, {
          threadId: h,
          feedback: ""
        }), f();
      },
      reactionType: p,
      message: g
    })]
  });
};
function jh(t) {
  const e = [];
  return t && (Array.isArray(t) ? e.push(...t) : e.push(t)), e.map((n) => ({
    id: n,
    role: "assistant",
    content: n
  }));
}
const Uh = (t) => Uo, $h = ({ sources: t }) => {
  const e = Ct();
  return !t || t.length === 0 || !Array.isArray(t) ? null : m(ho, {
    icon: $o,
    title: e.ai.resourcesGroupTitle,
    children: m("div", {
      className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2",
      children: t.map((n, s) => m(Go, {
        "aria-label": n.title,
        href: n.link,
        size: "md",
        target: n.targetBlank ? "_blank" : "_self",
        variant: "ghost",
        className: "justify-start truncate hover:bg-f1-background-hover",
        compact: !0,
        prepend: n.icon && m("div", {
          className: "mr-1 flex items-center justify-center",
          children: m(Ht, {
            icon: Uh(n.icon),
            size: "md",
            color: "default"
          })
        }),
        children: n.title
      }, s))
    })
  });
}, Co = ({ suggestions: t, onSuggestionClick: e }) => m("div", {
  children: t.map((n, s) => m(lt, {
    variant: "ghost",
    className: "font-medium",
    onClick: () => e(n.message),
    label: n.message
  }, s))
}), Ao = ({ message: t, ImageRenderer: e }) => {
  const n = t && "image" in t && t.image, s = j(null);
  if (nt(() => {
    s.current && s.current.scrollIntoView({
      behavior: "smooth"
    });
  }, []), n) {
    const i = t;
    return m("div", {
      className: "copilotKitMessage copilotKitUserMessage",
      children: m(e, {
        image: i.image,
        content: i.content
      })
    });
  }
  return m("div", {
    ref: s,
    className: "my-4 w-fit max-w-[min(90%,330px)] self-end whitespace-pre-wrap rounded-2xl border border-solid border-f1-border-secondary bg-f1-background-tertiary px-4 py-3 first:mt-0 last:mb-0",
    children: t == null ? void 0 : t.content
  });
}, Wh = ({ enabled: t = !1, greeting: e, initialMessage: n, welcomeScreenSuggestions: s, onThumbsUp: i, onThumbsDown: o, children: r, agent: a, ...l }) => m(vh, {
  enabled: t,
  greeting: e,
  initialMessage: n,
  onThumbsUp: i,
  onThumbsDown: o,
  agent: a,
  welcomeScreenSuggestions: s,
  children: m(_h, {
    ...l,
    children: r
  })
}), _h = ({ children: t, ...e }) => {
  const { agent: n } = yt();
  return D(Po, {
    runtimeUrl: "/copilotkit",
    agent: n,
    ...e,
    children: [m(Kh, {}), t]
  });
}, Kh = () => {
  const { setClearFunction: t } = yt(), { reset: e } = ne();
  return nt(() => (t(e), () => {
    t(null);
  }), [t, e]), null;
}, zh = () => {
  const { enabled: t, open: e, setOpen: n } = yt();
  return $e({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (s) => {
      var i;
      return m("div", {
        className: s.status ? "-ml-1" : void 0,
        children: m(Yn, {
          title: s.args.message ?? "thinking",
          status: s.status === "complete" ? "completed" : s.status,
          inGroup: (i = s.result) == null ? void 0 : i.inGroup
        })
      });
    }
  }), $e({
    name: "messageSources",
    description: "Attach information sources to the assistant's response. Use this to show where the AI got its information from.",
    parameters: [{
      name: "sources",
      type: "object[]",
      description: "Array of source objects with title and link properties. Example: [{title: 'Documentation', link: 'https://example.com'}]",
      required: !0,
      attributes: [{
        name: "title",
        type: "string",
        description: "The title or name of the source",
        required: !0
      }, {
        name: "link",
        type: "string",
        description: "The URL link to the source",
        required: !0
      }, {
        name: "icon",
        type: "string",
        description: "The icon name to display for the source",
        required: !1
      }, {
        name: "targetBlank",
        type: "boolean",
        description: "Whether to open the link in a new tab",
        required: !1
      }]
    }],
    available: "disabled",
    render: (s) => m($h, {
      sources: s.args.sources || []
    })
  }), t ? m(Vo, {
    className: E("h-full", e && "py-1 xs:pr-1"),
    defaultOpen: e,
    onSetOpen: (s) => {
      n(s);
    },
    Window: Th,
    Header: bh,
    Messages: Eh,
    Button: gh,
    Input: vo,
    UserMessage: Ao,
    AssistantMessage: go,
    RenderSuggestionsList: Co
  }) : null;
}, Sf = dn("AiChat", zh), Gh = () => {
  const { enabled: t } = yt();
  return $e({
    name: "orchestratorThinking",
    description: "Display orchestrator thinking process (non-blocking)",
    parameters: [{
      name: "message",
      description: "User-friendly progress message",
      required: !0
    }],
    available: "disabled",
    render: (e) => {
      var n;
      return m("div", {
        className: e.status ? "-ml-1" : void 0,
        children: m(Yn, {
          title: e.args.message ?? "thinking",
          status: e.status === "complete" ? "completed" : e.status,
          inGroup: (n = e.result) == null ? void 0 : n.inGroup
        })
      });
    }
  }), t ? m("div", {
    className: "bg-white flex h-full w-full flex-col overflow-hidden",
    children: m("div", {
      className: "relative flex flex-1 flex-col overflow-hidden",
      children: m("div", {
        className: "grid h-full w-full grid-rows-[1fr_auto]",
        children: m("div", {
          className: "overflow-y-auto",
          children: m(Eo, {
            Messages: Fh,
            Input: vo,
            UserMessage: Ao,
            AssistantMessage: go,
            RenderSuggestionsList: Co
          })
        })
      })
    })
  }) : null;
}, Cf = dn("AiChat", Gh), Af = dn("AiChatProvider", Wh);
export {
  Yn as A,
  xf as I,
  Sf as a,
  Af as b,
  Tf as c,
  wf as d,
  Ct as e,
  Cf as f,
  yt as u
};
