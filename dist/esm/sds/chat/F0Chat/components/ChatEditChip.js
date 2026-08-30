import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as t } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import n from "../../../../icons/app/Cross.js";
import r from "../../../../icons/app/Pencil.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { useReplyPreview as o } from "../hooks/useReplyPreview.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatEditChip.tsx
var l = ({ message: l, onRemove: u }) => {
	let d = i(), { icon: f, label: p, thumbnailUrl: m } = o(l);
	return /* @__PURE__ */ s("div", {
		className: "p-1",
		children: /* @__PURE__ */ c("div", {
			className: "flex items-stretch gap-2 overflow-hidden rounded-[10px] bg-f1-background-tertiary py-1.5 pl-2 pr-1.5",
			children: [
				m && /* @__PURE__ */ s("img", {
					src: m,
					alt: "",
					loading: "lazy",
					decoding: "async",
					className: "h-9 w-9 shrink-0 self-center rounded-sm object-cover"
				}),
				/* @__PURE__ */ c("div", {
					className: "min-w-0 flex-1 gap-0.5 p-1",
					children: [/* @__PURE__ */ c("span", {
						className: "flex w-fit items-center gap-1 text-sm font-medium text-f1-foreground-info",
						children: [/* @__PURE__ */ s(e, {
							icon: r,
							size: "xs"
						}), d.chat.editing]
					}), /* @__PURE__ */ c("span", {
						className: "mt-0.5 flex min-w-0 items-center gap-1 text-f1-foreground-secondary",
						children: [f && /* @__PURE__ */ s(e, {
							icon: f,
							size: "xs",
							color: "default"
						}), /* @__PURE__ */ s(t, {
							className: "min-w-0 text-base",
							lines: 1,
							children: p
						})]
					})]
				}),
				/* @__PURE__ */ s("div", {
					className: "flex flex-col",
					children: /* @__PURE__ */ s(a, {
						variant: "ghost",
						size: "sm",
						hideLabel: !0,
						label: d.chat.cancelEdit,
						icon: n,
						onClick: u
					})
				})
			]
		})
	});
};
//#endregion
export { l as ChatEditChip };
