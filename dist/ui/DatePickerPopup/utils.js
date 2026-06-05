const t = (e, r) => !e && !r ? !0 : !e || !r ? !1 : e.value?.from.getTime() === r.value?.from.getTime() && e.value?.to.getTime() === r.value?.to.getTime() && e.granularity === r.granularity;
export {
  t as isSameDatePickerValue
};
