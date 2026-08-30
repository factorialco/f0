import { F0Card as e } from "../../../../components/F0Card/F0Card.js";
import { useF0ChatEmit as t } from "../providers/F0ChatProvider.js";
import { CHAT_MEDIA_WIDTH_CLASS as n } from "../utils/media-layout.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatCardAttachment.tsx
var i = ({ card: i }) => {
	let a = t(), { action: o } = i;
	return /* @__PURE__ */ r("div", {
		className: n,
		"data-testid": "chat-card-attachment",
		children: /* @__PURE__ */ r(e, {
			avatar: i.avatar,
			title: i.title,
			description: i.description,
			image: i.image,
			link: i.href,
			onClick: i.onClick && (() => {
				a.onCardActivated({ source: "card" }), i.onClick?.();
			}),
			secondaryActions: o?.href ? {
				label: o.label,
				href: o.href
			} : o?.onClick ? [{
				label: o.label,
				onClick: () => {
					a.onCardActivated({ source: "action" }), o.onClick?.();
				}
			}] : void 0
		})
	});
};
//#endregion
export { i as ChatCardAttachment };
