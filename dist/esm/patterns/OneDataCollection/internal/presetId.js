//#region src/patterns/OneDataCollection/internal/presetId.ts
function e(e, t) {
	let n = e.trim().replace(/\s+/g, " ") || "preset", r = new Set(t);
	if (!r.has(n)) return n;
	let i = 2;
	for (; r.has(`${n} ${i}`);) i++;
	return `${n} ${i}`;
}
//#endregion
export { e as derivePresetId };
