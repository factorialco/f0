import e from "../../../../icons/app/File.js";
import t from "../../../../icons/app/Image.js";
import n from "../../../../icons/app/Marker.js";
import r from "../../../../icons/app/Microphone.js";
import i from "../../../../icons/app/Paperclip.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { replyThumbnailUrl as o, summariseAttachments as s } from "../utils/reply-preview.js";
import { sanitizeDisplayText as c } from "../utils/sanitize-text.js";
//#region src/sds/chat/F0Chat/hooks/useReplyPreview.ts
var l = (l) => {
	let u = a(), d = c(l.body?.trim() ?? ""), f = o(l.attachments), p = s(l.attachments);
	if (!p) return {
		label: d,
		thumbnailUrl: f
	};
	let m = p.kind === "photo" ? {
		icon: t,
		label: p.count === 1 ? u.chat.photo : u.t("chat.photoCount.other", { count: p.count })
	} : p.kind === "file" ? {
		icon: e,
		label: p.name ?? u.t("chat.fileCount.other", { count: p.count })
	} : p.kind === "location" ? {
		icon: n,
		label: u.chat.location
	} : p.kind === "voice" ? {
		icon: r,
		label: u.chat.voiceNote
	} : {
		icon: i,
		label: u.t("chat.attachmentCount.other", { count: p.count })
	};
	return {
		icon: m.icon,
		label: d || m.label,
		thumbnailUrl: f
	};
};
//#endregion
export { l as useReplyPreview };
