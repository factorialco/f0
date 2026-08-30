import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Cross.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
import { F0AvatarFile as r } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/file/FileAttachment.tsx
function u(e) {
	return e < 1024 ? `${e} B` : e < 1048576 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`;
}
var d = {
	single: "rounded-xl",
	top: "rounded-t-xl rounded-b-none",
	middle: "rounded-none",
	bottom: "rounded-b-xl rounded-t-none"
};
function f({ entry: f, useUpload: p, onUploadComplete: m, onRemove: h, onError: g, disabled: _, position: v = "single", className: y, translations: b }) {
	let x = !!f.file, S = p?.(), C = S?.upload, w = S?.cancelUpload, T = S?.progress ?? 0, E = S?.status ?? "idle", [D, O] = s(null), k = o(!1), A = i(async () => {
		if (!(!x || !f.file || !C) && !k.current) {
			k.current = !0;
			try {
				let e = await C(f.file);
				e.type === "success" ? m(e.value) : h();
			} catch {
				let e = b.uploadFailed;
				O(e), g(e);
			}
		}
	}, [
		x,
		f.file,
		C,
		m,
		h,
		g,
		b
	]);
	a(() => {
		x && A();
	}, [x, A]);
	let j = i(() => {
		x && (E === "uploading" || E === "processing") && w?.(), h();
	}, [
		x,
		E,
		w,
		h
	]), M = x && (E === "uploading" || E === "processing"), N = Math.round(T * 100), P = f.file ?? {
		name: f.initialFile?.name ?? "",
		type: f.initialFile?.type ?? ""
	}, F = f.file?.name ?? f.initialFile?.name ?? "", I = f.file?.size ?? f.initialFile?.size, L = D || (M ? E === "processing" ? b.processing : `${b.uploading} ${N}%` : I == null ? null : u(I));
	return /* @__PURE__ */ l("div", {
		className: e("flex items-center gap-[10px] border border-solid bg-f1-background p-3", d[v], D ? "border-f1-border-critical" : "border-f1-border-secondary", y),
		children: [
			/* @__PURE__ */ c(r, {
				file: P,
				size: "lg"
			}),
			/* @__PURE__ */ l("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ c("span", {
					className: "truncate text-sm font-medium text-f1-foreground",
					children: F
				}), L && /* @__PURE__ */ c("span", {
					className: "text-sm text-f1-foreground-secondary",
					children: L
				})]
			}),
			!_ && /* @__PURE__ */ c(n, {
				variant: "outline",
				size: "sm",
				label: b.remove,
				onClick: j,
				icon: t,
				hideLabel: !0
			})
		]
	});
}
//#endregion
export { f as FileAttachment };
