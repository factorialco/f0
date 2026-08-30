//#region src/sds/chat/F0Chat/utils/download.ts
var e = (e, t) => {
	let n = document.createElement("a");
	n.href = e, n.download = t, n.rel = "noreferrer", n.click();
};
//#endregion
export { e as triggerDownload };
