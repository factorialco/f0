import { focusRing as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/AlertCircle.js";
import r from "../../../../icons/app/Cross.js";
import { Tooltip as i } from "../../../../experimental/Overlays/Tooltip/index.js";
import { Skeleton as a } from "../../../../ui/skeleton.js";
import { F0FileItem as o } from "../../../../components/F0FileItem/F0FileItem.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/AttachedFilesList.tsx
var l = ({ attachedFiles: e, isUploading: t, onRemove: n, removeLabel: i }) => e.length === 0 ? null : /* @__PURE__ */ s("div", {
	"aria-live": "polite",
	"aria-busy": t,
	className: "flex flex-wrap gap-1 px-1 pt-1",
	children: e.map((e) => e.status === "uploading" ? /* @__PURE__ */ s(a, { className: "h-9 w-36 rounded-[10px]" }, e.id) : e.status === "error" ? /* @__PURE__ */ s(u, {
		att: e,
		onRemove: n,
		removeLabel: i
	}, e.id) : /* @__PURE__ */ s(o, {
		file: e.file,
		size: "md",
		actions: [{
			label: i,
			icon: r,
			onClick: () => n(e.id)
		}]
	}, e.id))
});
function u({ att: a, onRemove: o, removeLabel: l }) {
	let u = /* @__PURE__ */ c("div", {
		className: "flex items-center gap-1.5 rounded-lg border border-f1-border-critical bg-f1-background-critical/10 px-2.5 py-1.5",
		children: [
			/* @__PURE__ */ s(t, {
				icon: n,
				size: "md",
				color: "critical"
			}),
			/* @__PURE__ */ s("span", {
				className: "max-w-40 truncate text-sm font-medium text-f1-foreground-critical",
				children: a.file.name
			}),
			/* @__PURE__ */ s("button", {
				type: "button",
				"aria-label": l,
				className: e("rounded-full text-f1-foreground-critical hover:text-f1-foreground-critical/80"),
				onClick: () => o(a.id),
				children: /* @__PURE__ */ s(t, {
					icon: r,
					size: "md",
					"aria-hidden": "true"
				})
			})
		]
	});
	return a.errorMessage ? /* @__PURE__ */ s(i, {
		label: a.errorMessage,
		children: u
	}) : u;
}
//#endregion
export { l as AttachedFilesList };
