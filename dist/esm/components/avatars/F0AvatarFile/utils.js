//#region src/components/avatars/F0AvatarFile/utils.tsx
var e = {
	pdf: {
		type: "PDF",
		color: "text-f1-foreground-accent"
	},
	image: {
		type: "IMG",
		color: "text-f1-foreground-info"
	},
	doc: {
		type: "DOC",
		color: "text-f1-foreground-info"
	},
	excel: {
		type: "XLS",
		color: "text-f1-foreground-positive"
	},
	ppt: {
		type: "PPT",
		color: "text-f1-foreground-warning"
	},
	txt: {
		type: "TXT",
		color: "text-f1-foreground-secondary"
	},
	video: {
		type: "VID",
		color: "text-f1-foreground-info"
	},
	audio: {
		type: "AUD",
		color: "text-f1-foreground-accent"
	},
	archive: {
		type: "ZIP",
		color: "text-f1-foreground-warning"
	},
	csv: {
		type: "CSV",
		color: "text-f1-foreground-positive"
	},
	html: {
		type: "HTML",
		color: "text-f1-foreground-accent"
	},
	markdown: {
		type: "MD",
		color: "text-f1-foreground-secondary"
	},
	default: {
		type: "FILE",
		color: "text-f1-foreground"
	},
	xml: {
		type: "XML",
		color: "text-f1-foreground-positive"
	}
}, t = {
	pdf: "pdf",
	image: "image",
	spreadsheetml: "excel",
	wordprocessingml: "doc",
	presentationml: "ppt",
	word: "doc",
	excel: "excel",
	powerpoint: "ppt",
	csv: "csv",
	text: "txt",
	video: "video",
	audio: "audio",
	archive: "archive",
	html: "html",
	markdown: "markdown",
	zip: "archive",
	rar: "archive",
	tar: "archive",
	gz: "archive",
	"7z": "archive",
	xml: "xml"
}, n = {
	pdf: "pdf",
	jpg: "image",
	jpeg: "image",
	png: "image",
	gif: "image",
	svg: "image",
	doc: "doc",
	docx: "doc",
	xls: "excel",
	xlsx: "excel",
	csv: "csv",
	ppt: "ppt",
	pptx: "ppt",
	txt: "txt",
	mp4: "video",
	mov: "video",
	mkv: "video",
	avi: "video",
	webm: "video",
	mp3: "audio",
	wav: "audio",
	flac: "audio",
	ogg: "audio",
	zip: "archive",
	rar: "archive",
	tar: "archive",
	gz: "archive",
	"7z": "archive",
	html: "html",
	htm: "html",
	md: "markdown",
	markdown: "markdown",
	xml: "xml"
}, r = (r) => {
	let i = (r.type || "").toLowerCase(), a = Object.keys(t).find((e) => i.includes(e));
	if (a) return e[t[a]];
	let o = (r.name || "").toLowerCase().split(".").pop();
	return o && n[o] ? e[n[o]] : e.default;
}, i = (e) => {
	let t = {
		lg: "sm",
		sm: "sm"
	};
	return e && t[e] ? t[e] : t.sm;
}, a = (e) => {
	let t = {
		lg: "xs",
		sm: "xs"
	};
	return e && t[e] ? t[e] : t.sm;
};
//#endregion
export { a as getAvatarSize, i as getBadgeSize, r as getFileTypeInfo };
