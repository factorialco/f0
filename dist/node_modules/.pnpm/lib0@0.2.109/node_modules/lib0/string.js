const C = String.fromCharCode, f = (e) => e.toLowerCase(), l = /^\s*/g, s = (e) => e.replace(l, ""), a = /([A-Z])/g, g = (e, t) => s(e.replace(a, (n) => `${t}${f(n)}`)), i = (e) => {
  const t = unescape(encodeURIComponent(e)), n = t.length, c = new Uint8Array(n);
  for (let o = 0; o < n; o++)
    c[o] = /** @type {number} */
    t.codePointAt(o);
  return c;
}, d = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), u = (e) => d.encode(e), m = d ? u : i;
let r = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
r && r.decode(new Uint8Array()).length === 1 && (r = null);
export {
  u as _encodeUtf8Native,
  i as _encodeUtf8Polyfill,
  m as encodeUtf8,
  g as fromCamelCase,
  C as fromCharCode,
  s as trimLeft,
  r as utf8TextDecoder,
  d as utf8TextEncoder
};
