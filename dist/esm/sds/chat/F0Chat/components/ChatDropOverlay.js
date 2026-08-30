import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Upload.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatDropOverlay.tsx
var o = ({ visible: o }) => {
	let s = r();
	return /* @__PURE__ */ a("div", {
		"aria-hidden": !o,
		className: e("pointer-events-none absolute inset-1 z-50 flex flex-col items-center justify-center gap-2 rounded-xl", "border border-dashed border-f1-border bg-f1-background-tertiary/80 backdrop-blur", "transition-opacity duration-150 ease-out motion-reduce:transition-none", o ? "opacity-100" : "opacity-0"),
		children: [/* @__PURE__ */ i(t, {
			icon: n,
			size: "lg",
			color: "bold"
		}), /* @__PURE__ */ i("p", {
			className: "text-base text-f1-foreground",
			children: s.chat.dropFilesHere
		})]
	});
};
//#endregion
export { o as ChatDropOverlay };
