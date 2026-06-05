function c() {
  return typeof window < "u";
}
function u(t) {
  return p(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function i(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function N(t) {
  var e;
  return (e = (p(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function p(t) {
  return c() ? t instanceof Node || t instanceof i(t).Node : !1;
}
function m(t) {
  return c() ? t instanceof Element || t instanceof i(t).Element : !1;
}
function w(t) {
  return c() ? t instanceof HTMLElement || t instanceof i(t).HTMLElement : !1;
}
function f(t) {
  return !c() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof i(t).ShadowRoot;
}
const E = /* @__PURE__ */ new Set(["inline", "contents"]);
function y(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: o,
    display: r
  } = S(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && !E.has(r);
}
const T = /* @__PURE__ */ new Set(["table", "td", "th"]);
function A(t) {
  return T.has(u(t));
}
const v = [":popover-open", ":modal"];
function L(t) {
  return v.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const D = ["transform", "translate", "scale", "rotate", "perspective"], C = ["transform", "translate", "scale", "rotate", "perspective", "filter"], k = ["paint", "layout", "strict", "content"];
function V(t) {
  const e = O(), n = m(t) ? S(t) : t;
  return D.some((o) => n[o] ? n[o] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || C.some((o) => (n.willChange || "").includes(o)) || k.some((o) => (n.contain || "").includes(o));
}
function B(t) {
  let e = s(t);
  for (; w(e) && !h(e); ) {
    if (V(e))
      return e;
    if (L(e))
      return null;
    e = s(e);
  }
  return null;
}
function O() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const R = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function h(t) {
  return R.has(u(t));
}
function S(t) {
  return i(t).getComputedStyle(t);
}
function F(t) {
  return m(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function s(t) {
  if (u(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    f(t) && t.host || // Fallback.
    N(t)
  );
  return f(e) ? e.host : e;
}
function b(t) {
  const e = s(t);
  return h(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : w(e) && y(e) ? e : b(e);
}
function d(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const r = b(t), g = r === ((o = t.ownerDocument) == null ? void 0 : o.body), l = i(r);
  if (g) {
    const a = _(l);
    return e.concat(l, l.visualViewport || [], y(r) ? r : [], a && n ? d(a) : []);
  }
  return e.concat(r, d(r, [], n));
}
function _(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
export {
  S as getComputedStyle,
  B as getContainingBlock,
  N as getDocumentElement,
  _ as getFrameElement,
  b as getNearestOverflowAncestor,
  u as getNodeName,
  F as getNodeScroll,
  d as getOverflowAncestors,
  s as getParentNode,
  i as getWindow,
  V as isContainingBlock,
  m as isElement,
  w as isHTMLElement,
  h as isLastTraversableNode,
  p as isNode,
  y as isOverflowElement,
  f as isShadowRoot,
  A as isTableElement,
  L as isTopLayer,
  O as isWebKit
};
