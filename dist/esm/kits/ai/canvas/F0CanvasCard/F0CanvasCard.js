import { cn as e } from "../../../../lib/utils.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as r } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarModule as i } from "../../../../components/avatars/F0AvatarModule/index.js";
import { F0AvatarFile as a } from "../../../../components/avatars/F0AvatarFile/F0AvatarFile.js";
import { F0AvatarIcon as o } from "../../../../components/avatars/F0AvatarIcon/index.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/canvas/F0CanvasCard/F0CanvasCard.tsx
function l({ avatar: l, title: u, description: d, isActive: f = !1, action: p, children: m }) {
	let h = t(), g = p.type === "open", _ = g ? f ? p.onClose : p.onOpen : void 0;
	return /* @__PURE__ */ c("div", {
		className: e("flex flex-col items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2", g && "cursor-pointer", f ? "border-f1-border-hover" : "border-f1-border-secondary"),
		onClick: _,
		children: [/* @__PURE__ */ c("div", {
			className: "flex w-full min-w-0 flex-row items-center gap-3",
			children: [
				l?.type === "module" && /* @__PURE__ */ s(i, {
					module: l.module,
					size: "md"
				}),
				l?.type === "file" && /* @__PURE__ */ s(a, {
					file: l.file,
					size: "lg"
				}),
				l?.type === "icon" && /* @__PURE__ */ s(o, {
					icon: l.icon,
					size: "md"
				}),
				/* @__PURE__ */ c("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ s(r, {
						className: "text-lg font-semibold text-f1-foreground",
						children: u
					}), d && /* @__PURE__ */ s(r, {
						className: "text-base text-f1-foreground-secondary",
						children: d
					})]
				}),
				p.type === "open" && p.showButton !== !1 && /* @__PURE__ */ s(n, {
					variant: "outline",
					size: "md",
					label: f ? h.actions.close : h.ai.reportCard.openButton,
					onClick: f ? p.onClose : p.onOpen
				}),
				p.type === "custom" && /* @__PURE__ */ s(n, {
					variant: "outline",
					size: "md",
					icon: p.icon,
					label: p.label,
					hideLabel: p.hideLabel,
					onClick: p.onClick
				})
			]
		}), m]
	});
}
l.displayName = "F0CanvasCard";
//#endregion
export { l as F0CanvasCard };
