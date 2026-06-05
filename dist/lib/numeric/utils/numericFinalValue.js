const l = (v) => "value" in v ? v.value : v.value_x100 !== void 0 && v.value_x100 !== null ? v.value_x100 / 100 : void 0;
export {
  l as numericFinalValue
};
