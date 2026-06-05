function o(l, r) {
  (r == null || r > l.length) && (r = l.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = l[t];
  return n;
}
export {
  o as default
};
