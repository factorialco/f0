import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { HoverCard as t, HoverCardContent as n, HoverCardTrigger as r } from "../../../../ui/hover-card.js";
import { F0Card as i } from "../../../../components/F0Card/F0Card.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatUserHoverCard.tsx
var s = ({ user: s, children: c }) => {
	let l = e();
	return /* @__PURE__ */ o(t, {
		openDelay: 150,
		closeDelay: 100,
		children: [/* @__PURE__ */ a(r, {
			asChild: !0,
			children: c
		}), /* @__PURE__ */ a(n, {
			align: "start",
			className: "w-72 border-none bg-f1-background p-0 text-f1-foreground shadow-none",
			children: /* @__PURE__ */ a(i, {
				avatar: s.avatar ?? {
					type: "person",
					firstName: s.name,
					lastName: ""
				},
				title: s.name,
				description: s.subtitle,
				secondaryActions: s.profileHref ? {
					label: l.chat.viewProfile,
					href: s.profileHref
				} : void 0
			})
		})]
	});
};
//#endregion
export { s as ChatUserHoverCard };
