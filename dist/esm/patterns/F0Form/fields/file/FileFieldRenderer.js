import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/AlertCircle.js";
import i from "../../../../icons/app/Upload.js";
import { useI18n as ee } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0AvatarIcon as a } from "../../../../components/avatars/F0AvatarIcon/index.js";
import { useOptionalF0FormContext as o } from "../../context.js";
import { FileAttachment as s } from "./FileAttachment.js";
import { useCallback as c, useEffect as l, useId as u, useMemo as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/file/FileFieldRenderer.tsx
var g = /* @__PURE__ */ new Set([
	"image",
	"video",
	"audio",
	"text",
	"application"
]);
function _(e) {
	return g.has(e) ? `${e}/*` : e;
}
var v = {
	"application/pdf": "PDF",
	"application/msword": "DOC",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": "DOCX",
	"application/vnd.ms-excel": "XLS",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "XLSX",
	"application/vnd.ms-powerpoint": "PPT",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": "PPTX",
	"application/zip": "ZIP",
	"application/json": "JSON",
	"text/plain": "TXT",
	"text/csv": "CSV",
	"text/html": "HTML",
	"text/markdown": "Markdown",
	"image/jpeg": "JPEG",
	"image/png": "PNG",
	"image/gif": "GIF",
	"image/webp": "WebP",
	"image/svg+xml": "SVG",
	"image/heic": "HEIC",
	"image/bmp": "BMP",
	"image/tiff": "TIFF",
	"video/mp4": "MP4",
	"video/webm": "WebM",
	"video/quicktime": "MOV",
	"audio/mpeg": "MP3",
	"audio/ogg": "OGG",
	"audio/wav": "WAV"
}, y = {
	"image/*": "Images",
	"video/*": "Videos",
	"audio/*": "Audio",
	"text/*": "Text files",
	"application/*": "Documents"
};
function te(e) {
	if (!e || e.length === 0) return;
	let t = [];
	for (let n of e) {
		let e = _(n);
		if (y[e]) t.push(y[e]);
		else if (v[e]) t.push(v[e]);
		else {
			let n = e.split("/")[1];
			n && t.push(n.toUpperCase());
		}
	}
	return t.length > 0 ? t.join(", ") : void 0;
}
function ne({ isDragOver: e, hasCriticalStatus: t, statusType: n }) {
	return e ? "border-f1-border-selected-bold bg-f1-background-selected" : t ? "border-f1-border-critical-bold bg-f1-background-critical/10" : n === "warning" ? "border-f1-border-warning-bold bg-f1-background" : n === "info" ? "border-f1-border-info-bold bg-f1-background" : "border-f1-border bg-f1-background";
}
function b(e, t, n) {
	if (!e?.length) return [];
	let r = n ? Array.isArray(t) ? t : [] : typeof t == "string" && t ? [t] : [];
	if (r.length === 0) return [];
	let i = new Map(e.map((e) => [e.value, e]));
	return r.map((e) => i.get(e)).filter((e) => e != null).map((e) => ({
		key: `initial-${e.value}`,
		initialFile: e,
		value: e.value
	}));
}
function x({ field: g, formField: v, error: y, statusType: x, initialFiles: S }) {
	let { forms: C } = ee(), w = o(), T = w?.useUpload ?? g.useUpload, E = S ?? w?.initialFiles, D = w?.isLoadingInitialFiles ?? !1, O = u(), k = f(null), [A, j] = p(!1), M = g.multiple ?? !1, [N, P] = p(() => b(E, v.value, M)), F = f(E != null);
	l(() => {
		F.current || E != null && (M ? Array.isArray(v.value) && v.value.length > 0 : v.value) && (F.current = !0, P((e) => {
			let t = e.filter((e) => e.file), n = new Set(t.map((e) => e.value).filter((e) => e != null));
			return [...b(E, v.value, M).filter((e) => e.value == null || !n.has(e.value)), ...t];
		}));
	}, [
		E,
		v.value,
		M
	]);
	let [I, L] = p(null), R = C.file, z = N.length > 0, B = !!T && N.some((e) => e.file && !e.value && !e.error), V = w?.registerUploadState;
	l(() => {
		V?.(O, B);
	}, [
		V,
		O,
		B
	]), l(() => () => V?.(O, !1), [V, O]);
	let H = !(M && g.maxFiles != null && N.length >= g.maxFiles) && (M || !z), U = g.accept ? g.accept.map(_).join(",") : void 0, W = d(() => te(g.accept), [g.accept]), G = c((e) => g.accept && !g.accept.some((t) => {
		let n = _(t);
		return n.endsWith("/*") ? e.type.startsWith(n.replace("/*", "/")) : e.type === n;
	}) ? R.invalidFileType.replace("{{types}}", W ?? "") : g.maxSizeMB && e.size > g.maxSizeMB * 1024 * 1024 ? R.fileTooLarge.replace("{{maxSize}}", String(g.maxSizeMB)) : null, [
		g.accept,
		g.maxSizeMB,
		R,
		W
	]), K = c((e) => {
		if (L(null), !M) {
			let t = e[0], n = G(t);
			if (n) {
				L(n);
				return;
			}
			T || console.warn("[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config.");
			let r = `${t.name}-${t.size}-${Date.now()}-${Math.random()}`;
			P([{
				key: r,
				file: t
			}]);
			return;
		}
		let t = g.maxFiles == null ? Infinity : g.maxFiles - N.length;
		if (t <= 0) {
			L(R.maxFilesReached.replace("{{maxFiles}}", String(g.maxFiles)));
			return;
		}
		let n = e.slice(0, t), r = e.length > t ? R.maxFilesReached.replace("{{maxFiles}}", String(g.maxFiles)) : null, i = [];
		for (let e of n) {
			let t = G(e);
			if (t) {
				r = t;
				continue;
			}
			T || console.warn("[F0Form] No useUpload hook provided. Pass useUpload to <F0Form> or to the file field config."), i.push({
				key: `${e.name}-${e.size}-${Date.now()}-${Math.random()}`,
				file: e
			});
		}
		r !== null && L(r), i.length > 0 && P((e) => [...e, ...i]);
	}, [
		M,
		g.maxFiles,
		G,
		T,
		R,
		N.length
	]), q = c((e) => {
		e.preventDefault(), e.stopPropagation(), g.disabled || j(!0);
	}, [g.disabled]), J = c((e) => {
		e.preventDefault(), e.stopPropagation(), j(!1);
	}, []), Y = c((e) => {
		if (e.preventDefault(), e.stopPropagation(), j(!1), g.disabled) return;
		let t = Array.from(e.dataTransfer.files);
		t.length > 0 && K(t);
	}, [g.disabled, K]), X = c((e) => {
		let t = Array.from(e.target.files ?? []);
		t.length > 0 && K(t), k.current && (k.current.value = "");
	}, [K]), Z = c(() => {
		g.disabled || k.current?.click();
	}, [g.disabled]), Q = c((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), Z());
	}, [Z]), re = c((e, t) => {
		if (P((n) => n.map((n) => n.key === e ? {
			...n,
			value: t
		} : n)), M) {
			let e = Array.isArray(v.value) ? v.value : [];
			v.onChange([...e, t]);
		} else v.onChange(t);
	}, [M, v]), ie = c((e) => {
		let t = N.find((t) => t.key === e);
		if (P((t) => t.filter((t) => t.key !== e)), t?.value) {
			if (M) {
				let e = Array.isArray(v.value) ? v.value : [];
				v.onChange(e.filter((e) => e !== t.value));
			} else v.onChange(void 0);
		} else M || v.onChange(void 0);
		v.onBlur();
	}, [
		N,
		M,
		v
	]), ae = c((e, t) => {
		P((n) => n.map((n) => n.key === e ? {
			...n,
			error: t
		} : n));
	}, []), oe = A ? R.dropzoneActive : g.description ?? (M ? R.dropzoneMultiple : R.dropzone), $ = !!(y || I || x === "error"), se = $ || x === "warning" || x === "info", ce = ne({
		isDragOver: A,
		hasCriticalStatus: $,
		statusType: x
	});
	return /* @__PURE__ */ h("div", {
		className: "flex flex-col gap-4",
		children: [
			D && !z && /* @__PURE__ */ h("div", {
				className: "flex animate-pulse flex-col gap-2 rounded-xl border border-dashed border-f1-border px-4 py-10",
				children: [/* @__PURE__ */ m("div", { className: "mx-auto h-8 w-8 rounded-full bg-f1-background-secondary" }), /* @__PURE__ */ m("div", { className: "mx-auto h-4 w-32 rounded bg-f1-background-secondary" })]
			}),
			!D && H && /* @__PURE__ */ h("div", {
				role: "button",
				tabIndex: g.disabled ? -1 : 0,
				onDragOver: q,
				onDragLeave: J,
				onDrop: Y,
				onClick: Z,
				onKeyDown: Q,
				"aria-disabled": g.disabled,
				className: e("flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-[1px] border-dashed px-4 py-10 transition-colors", ce, !g.disabled && !A && !se && "hover:border-f1-border-hover hover:bg-f1-background-secondary", g.disabled && "cursor-not-allowed opacity-50", t("rounded-xl")),
				children: [/* @__PURE__ */ m(a, {
					icon: i,
					size: "md"
				}), /* @__PURE__ */ h("div", {
					className: "flex flex-col items-center gap-0.5",
					children: [/* @__PURE__ */ m("span", {
						className: "text-center text-base font-medium text-f1-foreground",
						children: oe
					}), W && /* @__PURE__ */ m("span", {
						className: "text-center text-base text-f1-foreground-secondary",
						children: R.acceptedTypes.replace("{{types}}", W)
					})]
				})]
			}),
			/* @__PURE__ */ m("input", {
				ref: k,
				id: O,
				type: "file",
				accept: U,
				multiple: M,
				onChange: X,
				className: "hidden",
				"aria-hidden": "true",
				tabIndex: -1
			}),
			I && /* @__PURE__ */ h("div", {
				className: "-mt-2 flex items-center gap-1",
				children: [/* @__PURE__ */ m(n, {
					icon: r,
					color: "critical"
				}), /* @__PURE__ */ m("p", {
					className: "text-base font-medium text-f1-foreground-critical",
					children: I
				})]
			}),
			N.length > 0 && /* @__PURE__ */ m("div", {
				className: "flex flex-col",
				children: N.map((e, t) => {
					let n = N.length, r = n === 1 ? "single" : t === 0 ? "top" : t === n - 1 ? "bottom" : "middle";
					return /* @__PURE__ */ m(s, {
						className: t > 0 ? "-mt-px" : void 0,
						entry: e,
						useUpload: e.file ? T : void 0,
						onUploadComplete: (t) => re(e.key, t),
						onRemove: () => ie(e.key),
						onError: (t) => ae(e.key, t),
						disabled: g.disabled,
						position: r,
						translations: {
							remove: R.remove,
							uploading: R.uploading,
							processing: R.processing,
							uploadFailed: R.uploadFailed
						}
					}, e.key);
				})
			})
		]
	});
}
//#endregion
export { x as FileFieldRenderer };
