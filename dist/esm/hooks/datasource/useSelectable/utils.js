//#region src/hooks/datasource/useSelectable/utils.ts
var e = (e) => ({
	allSelected: e?.allSelected ?? !1,
	items: e?.items ?? /* @__PURE__ */ new Map(),
	groups: e?.groups ?? /* @__PURE__ */ new Map()
}), t = (e) => typeof e == "object" && !!e && !Array.isArray(e) && "key" in e && "records" in e, n = (e, t) => typeof e == "object" && !!e && !Array.isArray(e) && t;
//#endregion
export { t as isGroupRecord, n as isRecordItem, e as parseSelectedState };
