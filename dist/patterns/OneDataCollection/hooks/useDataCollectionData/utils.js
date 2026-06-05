function c(s, l) {
  const t = { ...s };
  for (const [r, e] of Object.entries(l)) {
    const n = s[r];
    if (Array.isArray(n) && Array.isArray(e) && n.length > 0 && e.length > 0) {
      const i = n.filter(
        (o) => e.includes(o)
      );
      t[r] = i.length > 0 ? i : e;
    } else
      t[r] = e;
  }
  return t;
}
export {
  c as mergeFiltersWithIntersection
};
