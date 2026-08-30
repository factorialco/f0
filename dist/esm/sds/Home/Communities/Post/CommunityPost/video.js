//#region src/sds/Home/Communities/Post/CommunityPost/video.ts
var e = /* @__PURE__ */ new Set([
	"avi",
	"mkv",
	"mov",
	"mpeg",
	"mp4",
	"webm",
	"wmv"
]), t = (t) => {
	if (!t) return !1;
	if (t.indexOf("//s3.") >= 0) return t.indexOf("response-content-type=video") >= 0;
	let n = (t?.split(".")).at(-1);
	return !!n && e.has(n);
};
//#endregion
export { t as isVideo };
