//#region src/sds/chat/F0Chat/utils/sanitize-text.ts
var e = /(\p{M}{3})\p{M}+/gu, t = /[\u202A-\u202E\u2066-\u2069]/g, n = (n) => n.normalize("NFC").replace(e, "$1").replace(t, "");
//#endregion
export { n as sanitizeDisplayText };
