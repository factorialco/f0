import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/F0Icon.js";
import n from "../../../../icons/app/Messages.js";
import r from "../../../../icons/app/Upload.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/DropOverlay.tsx
var s = ({ visible: s, onFilesDropped: c, mode: l = "files" }) => {
	let u = i(), d = l === "discuss";
	return /* @__PURE__ */ o("div", {
		"aria-hidden": !s,
		"aria-live": s ? "polite" : void 0,
		role: s ? "status" : void 0,
		className: e("absolute inset-1 z-50 flex flex-col items-center gap-2 justify-center rounded-[calc(theme(borderRadius.xl)-4px)] backdrop-blur bg-f1-background-tertiary/80 border border-dashed border-f1-border", "transition-opacity duration-150 ease-out motion-reduce:transition-none", s ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"),
		onDragEnter: (e) => {
			e.preventDefault();
		},
		onDragOver: (e) => {
			e.preventDefault();
		},
		onDragLeave: (e) => {
			e.preventDefault();
		},
		onDrop: (e) => {
			if (e.preventDefault(), !c) return;
			let t = Array.from(e.dataTransfer.files);
			t.length > 0 && c(t);
		},
		children: [/* @__PURE__ */ a(t, {
			icon: d ? n : r,
			size: "lg",
			color: "bold"
		}), /* @__PURE__ */ a("p", {
			className: "text-base font-normal text-f1-foreground",
			children: d ? u.ai.dropWidgetToDiscuss : u.ai.dropFilesHere
		})]
	});
};
//#endregion
export { s as DropOverlay };
