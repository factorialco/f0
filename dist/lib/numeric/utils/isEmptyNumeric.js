const t = (o) => o == null || typeof o == "object" && "value" in o && (o.value === void 0 || o.value === null) && // ----
typeof o == "object" && "value_x100" in o && (o.value_x100 === void 0 || o.value_x100 === null);
export {
  t as isEmptyNumeric
};
