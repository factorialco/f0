import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/ChevronDown.js";
import i from "../../../../icons/app/ChevronUp.js";
import { ThreadItem as a } from "./ThreadItem.js";
import { useCallback as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatHistory/components/CollapsibleGroup.tsx
function u({ label: u, threads: d, pinnedIds: f, onSelect: p, onPin: m, onUnpin: h, onDelete: g }) {
	let [_, v] = s(!0), y = o(() => {
		v((e) => !e);
	}, []), b = o((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), y());
	}, [y]);
	return /* @__PURE__ */ l("div", { children: [/* @__PURE__ */ l("div", {
		role: "button",
		tabIndex: 0,
		onClick: y,
		onKeyDown: b,
		className: e("flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover", t("rounded")),
		children: [/* @__PURE__ */ c("span", {
			className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary",
			children: u
		}), /* @__PURE__ */ c(n, {
			icon: _ ? r : i,
			color: "secondary",
			size: "xs"
		})]
	}), _ && /* @__PURE__ */ c("div", {
		className: "flex flex-col",
		children: d.map((e) => /* @__PURE__ */ c(a, {
			thread: e,
			isPinned: f.has(e.id),
			onSelect: p,
			onPin: m,
			onUnpin: h,
			onDelete: g
		}, e.id))
	})] });
}
//#endregion
export { u as CollapsibleGroup };
