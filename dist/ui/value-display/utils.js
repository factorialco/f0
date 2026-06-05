import "../../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.js";
function r(t) {
  return typeof t == "object" && t !== null && "placeholder" in t && typeof t.placeholder == "string";
}
function d(t, e) {
  return r(t) ? typeof t == "object" && t !== null && e in t ? t[e] === void 0 : !0 : !1;
}
function l(t, e) {
  if (t !== void 0 && typeof t != "object")
    return t;
  if (!t || typeof t != "object")
    return;
  const n = e in t ? t[e] : void 0, o = r(t) ? t.placeholder : void 0;
  if (n !== void 0)
    return e === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (o !== void 0)
    return o;
}
function h(t) {
  if (i(t))
    try {
      return t.toLocaleDateString();
    } catch {
      return String(t);
    }
  const e = l(t, "date");
  if (i(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  else {
    if (typeof e == "string")
      return e;
    if (e != null)
      return String(e);
  }
  return "";
}
function i(t) {
  return !!(t instanceof Date || t && typeof t == "object" && ("toLocaleDateString" in t || "getTime" in t));
}
export {
  h as formatDateValue,
  r as hasPlaceholder,
  d as isShowingPlaceholder,
  l as resolveValue
};
