//#region src/sds/chat/F0Chat/utils/delivery-status.ts
var e = (e, { isGroup: t, memberCount: n } = {}) => {
	if (!e.isMine) return null;
	if (e.status === "failed") return "failed";
	if (e.status !== "sent" && e.status !== "delivered" && e.status !== "read") return null;
	if (e.status !== "read") return "sent";
	let r = t && n != null ? Math.max(0, n - 1) : void 0;
	if (r == null || r === 0) return "read";
	let i = e.readBy?.length ?? e.readByCount;
	return i != null && i >= r ? "read" : "sent";
};
//#endregion
export { e as deliveryState };
