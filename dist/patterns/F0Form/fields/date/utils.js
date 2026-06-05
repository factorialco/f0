function o(t) {
  if (!t || !(t instanceof Date) || isNaN(t.getTime())) return "";
  const n = String(t.getHours()).padStart(2, "0"), e = String(t.getMinutes()).padStart(2, "0");
  return `${n}:${e}`;
}
function u(t) {
  if (!t) return;
  const [n, e] = t.split(":").map(Number);
  if (isNaN(n) || isNaN(e)) return;
  const s = /* @__PURE__ */ new Date();
  return s.setHours(n, e, 0, 0), s;
}
function a(t, n) {
  if (!t) return;
  const e = new Date(t);
  if (n) {
    const [s, r, i] = n.split(":").map(Number);
    e.setHours(s ?? 0, r ?? 0, i ?? 0, 0);
  } else
    e.setHours(0, 0, 0, 0);
  return e;
}
export {
  a as combineDateAndTime,
  o as dateToTimeString,
  u as timeStringToDate
};
