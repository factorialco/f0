const t = (r) => r == null ? {
  value: void 0
} : typeof r == "number" ? { value: r } : r;
export {
  t as toNumericValue
};
