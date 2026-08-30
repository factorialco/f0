//#region src/sds/chat/F0Chat/utils/reply-preview.ts
var e = (e) => e?.find((e) => e.kind === "image"), t = (t) => {
	let n = e(t);
	return n ? n.thumbnailUrl ?? n.url : void 0;
}, n = (e) => {
	let t = e?.filter((e) => e.kind === "image") ?? [], n = e?.filter((e) => e.kind === "file") ?? [], r = e?.filter((e) => e.kind === "location") ?? [], i = e?.filter((e) => e.kind === "voice") ?? [];
	return [
		t,
		n,
		r,
		i
	].filter((e) => e.length > 0).length > 1 ? {
		kind: "mixed",
		count: t.length + n.length + r.length + i.length
	} : t.length > 0 ? {
		kind: "photo",
		count: t.length
	} : n.length > 0 ? {
		kind: "file",
		count: n.length,
		name: n.length === 1 ? n[0].name : void 0
	} : r.length > 0 ? { kind: "location" } : i.length > 0 ? { kind: "voice" } : null;
};
//#endregion
export { t as replyThumbnailUrl, n as summariseAttachments };
