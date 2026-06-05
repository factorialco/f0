var i = "top", o = "bottom", n = "right", f = "left", c = "auto", a = [i, o, n, f], t = "start", v = "end", w = "clippingParents", M = "viewport", R = "popper", W = "reference", h = /* @__PURE__ */ a.reduce(function(e, r) {
  return e.concat([r + "-" + t, r + "-" + v]);
}, []), x = /* @__PURE__ */ [].concat(a, [c]).reduce(function(e, r) {
  return e.concat([r, r + "-" + t, r + "-" + v]);
}, []), p = "beforeRead", d = "read", s = "afterRead", b = "beforeMain", u = "main", m = "afterMain", P = "beforeWrite", g = "write", l = "afterWrite", j = [p, d, s, b, u, m, P, g, l];
export {
  m as afterMain,
  s as afterRead,
  l as afterWrite,
  c as auto,
  a as basePlacements,
  b as beforeMain,
  p as beforeRead,
  P as beforeWrite,
  o as bottom,
  w as clippingParents,
  v as end,
  f as left,
  u as main,
  j as modifierPhases,
  x as placements,
  R as popper,
  d as read,
  W as reference,
  n as right,
  t as start,
  i as top,
  h as variationPlacements,
  M as viewport,
  g as write
};
