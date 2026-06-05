const o = (r) => ({
  allSelected: r?.allSelected ?? !1,
  items: r?.items ?? /* @__PURE__ */ new Map(),
  groups: r?.groups ?? /* @__PURE__ */ new Map()
}), t = (r) => typeof r == "object" && r !== null && !Array.isArray(r) && "key" in r && "records" in r, n = (r, e) => typeof r == "object" && r !== null && !Array.isArray(r) && e;
export {
  t as isGroupRecord,
  n as isRecordItem,
  o as parseSelectedState
};
