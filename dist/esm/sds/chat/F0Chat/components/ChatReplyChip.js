import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/Cross.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as i } from "../../../../components/F0Button/internal.js";
import { OneEllipsis as a } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { useReplyPreview as o } from "../hooks/useReplyPreview.js";
import { senderNameColorClass as s } from "../utils/sender-color.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatReplyChip.tsx
var u = ({ message: u, onRemove: d }) => {
	let f = r(), { icon: p, label: m, thumbnailUrl: h } = o(u);
	return /* @__PURE__ */ c("div", {
		className: "p-1",
		children: /* @__PURE__ */ l("div", {
			className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5",
			children: [
				h && /* @__PURE__ */ c("img", {
					src: h,
					alt: "",
					loading: "lazy",
					decoding: "async",
					className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
				}),
				/* @__PURE__ */ l("div", {
					className: "min-w-0 flex-1 gap-0.5 p-1",
					children: [/* @__PURE__ */ c(a, {
						className: e("text-sm font-medium", s(u.author)),
						children: u.isMine ? f.chat.you : u.author.name
					}), /* @__PURE__ */ l("span", {
						className: "flex min-w-0 items-center gap-1 text-f1-foreground-secondary",
						children: [p && /* @__PURE__ */ c(t, {
							icon: p,
							size: "xs",
							color: "default"
						}), /* @__PURE__ */ c(a, {
							className: "min-w-0 text-base",
							lines: 1,
							children: m
						})]
					})]
				}),
				/* @__PURE__ */ c("div", {
					className: "flex flex-col",
					children: /* @__PURE__ */ c(i, {
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						label: f.chat.removeQuote,
						icon: n,
						onClick: d
					})
				})
			]
		})
	});
};
//#endregion
export { u as ChatReplyChip };
