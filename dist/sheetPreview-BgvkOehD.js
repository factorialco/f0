import { read as d, utils as c } from "./xlsx-CF422ARu.js";
const i = (n, { maxRows: o, maxCols: s }) => {
  const r = d(n, { type: "array" });
  return r.SheetNames.map((t) => {
    const a = r.Sheets[t], f = a?.["!ref"];
    if (!a || !f) return { name: t, rows: [], truncatedRows: !1 };
    const e = c.decode_range(f), h = e.e.r - e.s.r + 1 > o;
    e.e.r = Math.min(e.e.r, e.s.r + o - 1), e.e.c = Math.min(e.e.c, e.s.c + s - 1);
    const u = c.sheet_to_json(a, {
      header: 1,
      raw: !1,
      // formatted text, not raw values
      defval: "",
      range: e
    });
    return { name: t, rows: u, truncatedRows: h };
  });
}, w = (n) => {
  const o = n.reduce((s, r) => Math.max(s, r.length), 0);
  return Array.from({ length: o }, (s, r) => c.encode_col(r));
}, k = async (n, {
  maxRows: o,
  maxCols: s,
  withCredentials: r = !0
}) => {
  const t = await fetch(n, {
    credentials: r ? "include" : "same-origin"
  });
  if (!t.ok) throw new Error(`Failed to fetch sheet: ${t.status}`);
  return i(await t.arrayBuffer(), { maxRows: o, maxCols: s });
};
export {
  w as c,
  k as f
};
