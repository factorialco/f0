var N = function(r) {
  return r.tagName === "TEXTAREA";
}, b = function(r, e) {
  if (!(r instanceof Element))
    return !1;
  var t = window.getComputedStyle(r);
  return (
    // not-not-scrollable
    t[e] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !N(r) && t[e] === "visible")
  );
}, D = function(r) {
  return b(r, "overflowY");
}, E = function(r) {
  return b(r, "overflowX");
}, T = function(r, e) {
  var t = e.ownerDocument, l = e;
  do {
    typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host);
    var f = g(r, l);
    if (f) {
      var n = m(r, l), i = n[1], o = n[2];
      if (i > o)
        return !0;
    }
    l = l.parentNode;
  } while (l && l !== t.body);
  return !1;
}, H = function(r) {
  var e = r.scrollTop, t = r.scrollHeight, l = r.clientHeight;
  return [
    e,
    t,
    l
  ];
}, p = function(r) {
  var e = r.scrollLeft, t = r.scrollWidth, l = r.clientWidth;
  return [
    e,
    t,
    l
  ];
}, g = function(r, e) {
  return r === "v" ? D(e) : E(e);
}, m = function(r, e) {
  return r === "v" ? H(e) : p(e);
}, B = function(r, e) {
  return r === "h" && e === "rtl" ? -1 : 1;
}, V = function(r, e, t, l, f) {
  var n = B(r, window.getComputedStyle(e).direction), i = n * l, o = t.target, d = e.contains(o), c = !1, s = i > 0, h = 0, S = 0;
  do {
    if (!o)
      break;
    var u = m(r, o), v = u[0], C = u[1], y = u[2], w = C - y - n * v;
    (v || w) && g(r, o) && (h += w, S += v);
    var a = o.parentNode;
    o = a && a.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? a.host : a;
  } while (
    // portaled content
    !d && o !== document.body || // self content
    d && (e.contains(o) || e === o)
  );
  return (s && Math.abs(h) < 1 || !s && Math.abs(S) < 1) && (c = !0), c;
};
export {
  V as handleScroll,
  T as locationCouldBeScrolled
};
