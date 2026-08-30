import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { filterByMimeType as t } from "./file-utils.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
//#region src/kits/ai/F0AiChatTextArea/useFileAttachments.ts
var s = 4e3;
function c(c) {
	let [l, u] = o([]), [d, f] = o(null), p = a(null), m = a(null), h = e(), g = c?.onUploadFiles, _ = c?.allowedMimeTypes, v = c?.maxFiles, y = i(() => {
		if (_) return Array.isArray(_) ? _.join(",") : _;
	}, [_]), b = v !== void 0 && l.length >= v, x = a(0);
	r(() => {
		x.current = l.length;
	}, [l]);
	let S = n((e) => {
		p.current && clearTimeout(p.current), f(e), p.current = setTimeout(() => {
			f(null), p.current = null;
		}, s);
	}, []);
	r(() => () => {
		p.current && clearTimeout(p.current);
	}, []);
	let C = n(async (e) => {
		if (e.length === 0 || !g) return;
		let n = t(e, _);
		if (n.length === 0) return;
		if (v !== void 0 && x.current + n.length > v) {
			S(h.ai.tooManyFilesError.replace("{{maxFiles}}", String(v)));
			return;
		}
		let r = n.map((e) => ({
			id: crypto.randomUUID(),
			file: e,
			status: "uploading"
		})), i = r.map((e) => e.id);
		u((e) => [...e, ...r]);
		let a = (e) => u((t) => t.map((t) => i.includes(t.id) ? {
			...t,
			status: "error",
			errorMessage: e
		} : t));
		try {
			let e = await g(n);
			if (!Array.isArray(e) || e.length !== n.length) {
				a(h.ai.fileUploadError);
				return;
			}
			u((t) => t.map((t) => {
				let n = r.findIndex((e) => e.id === t.id);
				return n === -1 ? t : e[n] ? {
					...t,
					status: "uploaded",
					uploadedFile: e[n]
				} : {
					...t,
					status: "error",
					errorMessage: h.ai.fileUploadError
				};
			}));
		} catch (e) {
			a(e instanceof Error && e.message ? e.message : h.ai.fileUploadError);
		}
	}, [
		g,
		v,
		_,
		h.ai.tooManyFilesError,
		h.ai.fileUploadError,
		S
	]);
	return {
		attachedFiles: l,
		fileInputRef: m,
		onUploadFiles: g,
		acceptValue: y,
		isAtMaxFiles: b,
		maxFiles: v,
		processFiles: C,
		handleFileSelect: n(async (e) => {
			await C(Array.from(e.target.files ?? [])), e.target.value = "";
		}, [C]),
		handleRemoveFile: n((e) => {
			u((t) => t.filter((t) => t.id !== e));
		}, []),
		clearFiles: n(() => {
			u([]);
		}, []),
		transientError: d,
		showTransientError: S
	};
}
//#endregion
export { c as useFileAttachments };
