//#region src/lib/providers/events/normalize.ts
var e = (t) => {
	if (t != null) {
		if (typeof t == "string" || typeof t == "number" || typeof t == "boolean") return t;
		if (t instanceof Date) return t.toISOString();
		if (Array.isArray(t)) return t.map((t) => e(t) ?? null);
		if (typeof t == "object") {
			let n = {};
			for (let [r, i] of Object.entries(t)) {
				let t = e(i);
				t !== void 0 && (n[r] = t);
			}
			return n;
		}
	}
};
//#endregion
export { e as normalizeEventValue };
