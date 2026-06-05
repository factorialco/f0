const f = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function b(t, { maxDecimals: e }) {
  if (!t || t === "-")
    return {
      formattedValue: t ?? "",
      value: null
    };
  const n = t.match(f);
  if (!n) return null;
  let [N, a, l, o, r] = n;
  e && (r?.length ?? 0) > e ? r = r?.slice(0, e) : e === 0 && (r = ""), l = l?.replace(/^0+(\d)/, ($, c) => c) ?? "";
  const u = `${a}${l}${e !== 0 ? `${o ?? ""}${r ?? ""}` : ""}`, s = parseFloat(u.replace(",", "."));
  return {
    formattedValue: u,
    value: Number.isNaN(s) ? null : s
  };
}
export {
  b as extractNumber
};
