//#region src/lib/numeric/utils/numericFinalValue.ts
var e = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0;
//#endregion
export { e as numericFinalValue };
