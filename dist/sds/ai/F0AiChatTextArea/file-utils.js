function f(t, r) {
  if (r === "*/*") return !0;
  if (r.endsWith("/*")) {
    const n = r.slice(0, r.indexOf("/"));
    return t.startsWith(n + "/");
  }
  return t === r;
}
function c(t, r) {
  if (!r) return t;
  const n = Array.isArray(r) ? r : [r];
  return n.length === 0 ? t : t.filter(
    (i) => n.some((u) => f(i.type, u))
  );
}
export {
  c as filterByMimeType,
  f as matchesMimeType
};
