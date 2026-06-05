const e = 220, n = 520;
function M(r) {
  return r === 0 ? "lg" : r < 220 ? "sm" : r < 520 ? "md" : "lg";
}
export {
  n as MD_MAX_WIDTH,
  e as SM_MAX_WIDTH,
  M as resolveChartSize
};
