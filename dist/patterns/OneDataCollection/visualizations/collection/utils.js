const n = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, t = (e) => (e || []).map((r) => r.type === "separator" ? r : {
  ...r,
  type: "item"
});
export {
  t as actionsToDropdownItems,
  n as statusToChecked
};
