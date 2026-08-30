//#region src/sds/chat/F0Chat/utils/capabilities.ts
var e = (t, n, r) => {
	let i = r?.[t];
	return i === void 0 ? n === "announcement" ? !1 : t !== "canReply" || e("canSend", n, r) : i;
};
//#endregion
export { e as chatPermission };
