//#region src/lib/objectPaths.ts
function e(e, t) {
	if (!e || typeof e != "object") return;
	let n = t.split("."), r = e;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return r;
}
//#endregion
export { e as getValueByPath };
