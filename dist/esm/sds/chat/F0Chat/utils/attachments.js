//#region src/sds/chat/F0Chat/utils/attachments.ts
var e = /* @__PURE__ */ new Set([
	"m4v",
	"mov",
	"mp4",
	"ogv",
	"webm"
]), t = (e) => {
	if (e < 1024) return `${e} B`;
	if (e < 1048576) {
		let t = e / 1024;
		return `${Number.isInteger(t) ? t : t.toFixed(1)} KB`;
	}
	if (e < 1073741824) {
		let t = e / 1048576;
		return `${Number.isInteger(t) ? t : t.toFixed(1)} MB`;
	}
	let t = e / 1073741824;
	return `${Number.isInteger(t) ? t : t.toFixed(1)} GB`;
}, n = (t) => t.mimeType?.toLowerCase().startsWith("video/") ? !0 : [t.name, t.url].some((t) => {
	let n = (t.split(/[?#]/, 1)[0] ?? "").split(".").at(-1)?.toLowerCase();
	return n !== void 0 && e.has(n);
}), r = [
	["application/pdf", "pdf"],
	["spreadsheetml", "sheet"],
	["ms-excel", "sheet"],
	["text/csv", "sheet"],
	["wordprocessingml", "docx"],
	["text/markdown", "text"],
	["text/plain", "text"],
	["application/json", "text"]
], i = {
	pdf: "pdf",
	xlsx: "sheet",
	xls: "sheet",
	csv: "sheet",
	docx: "docx",
	txt: "text",
	md: "text",
	markdown: "text",
	log: "text",
	json: "text"
}, a = (e) => {
	let t = e.mimeType?.toLowerCase() ?? "";
	for (let [e, n] of r) if (t.includes(e)) return n;
	let n = e.name.toLowerCase(), a = n.lastIndexOf(".");
	return a <= 0 ? null : i[n.slice(a + 1)] ?? null;
}, o = {
	pdf: Infinity,
	sheet: 10485760,
	docx: 10485760,
	text: 2097152
}, s = (e, t) => (e.size ?? 0) <= o[t], c = (e) => e.kind === "image" ? "image" : n(e) ? "video" : a(e) ? "document" : "file", l = (e) => {
	let t = {
		images: [],
		videos: [],
		documents: [],
		files: [],
		locations: [],
		voices: [],
		cards: []
	};
	for (let r of e) {
		if (r.kind === "image") {
			t.images.push(r);
			continue;
		}
		if (r.kind === "card") {
			t.cards.push(r);
			continue;
		}
		if (r.kind === "location") {
			t.locations.push(r);
			continue;
		}
		if (r.kind === "voice") {
			t.voices.push(r);
			continue;
		}
		if (r.progress === void 0 && n(r)) {
			t.videos.push(r);
			continue;
		}
		let e = r.progress === void 0 ? a(r) : null;
		e && s(r, e) ? t.documents.push({
			file: r,
			kind: e
		}) : t.files.push(r);
	}
	return t;
};
//#endregion
export { c as attachedKindOf, a as documentPreviewKind, t as formatFileSize, n as isVideoFileAttachment, l as partitionChatAttachments, s as withinPreviewSizeLimit };
