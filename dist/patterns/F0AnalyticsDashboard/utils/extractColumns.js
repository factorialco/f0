function r(t) {
  if (t.length === 0) return [];
  const n = t[0];
  return Object.keys(n).filter(
    (e) => typeof e == "string" && !e.startsWith("_")
  );
}
export {
  r as extractColumns
};
