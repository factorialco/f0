function y(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function a(n) {
  return y(n) || Array.isArray(n);
}
function p() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function l(n, t) {
  const e = Object.keys(n), c = Object.keys(t);
  if (e.length !== c.length) return !1;
  const s = JSON.stringify(Object.keys(n.breakpoints || {})), u = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== u ? !1 : e.every((o) => {
    const r = n[o], i = t[o];
    return typeof r == "function" ? `${r}` == `${i}` : !a(r) || !a(i) ? r === i : l(r, i);
  });
}
function f(n) {
  return n.concat().sort((t, e) => t.name > e.name ? 1 : -1).map((t) => t.options);
}
function O(n, t) {
  if (n.length !== t.length) return !1;
  const e = f(n), c = f(t);
  return e.every((s, u) => {
    const o = c[u];
    return l(s, o);
  });
}
export {
  l as areOptionsEqual,
  O as arePluginsEqual,
  p as canUseDOM,
  f as sortAndMapPluginToOptions
};
