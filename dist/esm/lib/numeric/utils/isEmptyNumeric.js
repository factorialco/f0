//#region src/lib/numeric/utils/isEmptyNumeric.ts
var e = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null);
//#endregion
export { e as isEmptyNumeric };
