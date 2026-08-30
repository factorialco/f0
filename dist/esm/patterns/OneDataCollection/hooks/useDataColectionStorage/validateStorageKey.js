//#region src/patterns/OneDataCollection/hooks/useDataColectionStorage/validateStorageKey.ts
var e = (e) => {
	if (!e || typeof e != "string") return !1;
	let t = e.lastIndexOf("/");
	if (t === -1) return !1;
	let n = e.substring(0, t), r = e.substring(t + 1);
	return !(!n || n.trim() === "" || !r || !/^v[0-9]+$/.test(r));
};
//#endregion
export { e as validateStorageKey };
