//#region src/kits/ai/F0AiChatTextArea/file-utils.ts
function e(e, t) {
	if (t === "*/*") return !0;
	if (t.endsWith("/*")) {
		let n = t.slice(0, t.indexOf("/"));
		return e.startsWith(n + "/");
	}
	return e === t;
}
function t(t, n) {
	if (!n) return t;
	let r = Array.isArray(n) ? n : [n];
	return r.length === 0 ? t : t.filter((t) => r.some((n) => e(t.type, n)));
}
//#endregion
export { t as filterByMimeType, e as matchesMimeType };
