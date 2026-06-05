function n(e, r) {
  if (r === 0) return "0%";
  const t = e / r * 100;
  return t === 100 ? "100%" : `${t.toFixed(1)}%`;
}
export {
  n as formatPercent
};
