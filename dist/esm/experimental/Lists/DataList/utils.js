//#region src/experimental/Lists/DataList/utils.ts
var e = (e, t) => e && e.type === "copy" ? {
	type: "copy",
	text: e.text ?? t
} : e;
//#endregion
export { e as getInternalAction };
