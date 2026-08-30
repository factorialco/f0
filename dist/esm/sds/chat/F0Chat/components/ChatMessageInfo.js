import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import n from "../../../../icons/app/ArrowLeft.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as i } from "../../../../components/F0Button/internal.js";
import { F0Avatar as a } from "../../../../components/avatars/F0Avatar/index.js";
import { useF0Chat as o } from "../providers/F0ChatProvider.js";
import { formatSeparator as s } from "../utils/natural-time.js";
import { useEffect as c, useRef as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatMessageInfo.tsx
var f = ({ label: e, value: t }) => /* @__PURE__ */ d("div", {
	className: "flex flex-col items-start",
	children: [/* @__PURE__ */ u("span", {
		className: "text-base font-medium text-f1-foreground",
		children: e
	}), t && /* @__PURE__ */ u("span", {
		className: "text-base font-normal text-f1-foreground-secondary",
		children: t
	})]
}), p = ({ user: e }) => /* @__PURE__ */ d("div", {
	className: "flex w-full items-center gap-2 px-0 py-1 text-f1-foreground",
	children: [/* @__PURE__ */ u(a, {
		size: "sm",
		avatar: e.avatar ?? {
			type: "person",
			firstName: e.name,
			lastName: ""
		}
	}), /* @__PURE__ */ u("span", {
		className: "text-base font-normal",
		children: e.name
	})]
}), m = ({ message: a, onBack: m }) => {
	let h = r(), { channel: g } = o(), _ = l(null), v = {
		today: h.date.groups.today,
		yesterday: h.date.groups.yesterday
	}, y = /* @__PURE__ */ new Date(), b = g.type === "group", x = a.readBy?.length ?? a.readByCount ?? 0, S = h.t(x === 1 ? "chat.readBy.one" : "chat.readBy.other", { count: x });
	return c(() => {
		_.current?.focus();
	}, []), /* @__PURE__ */ d("div", {
		className: "flex flex-col",
		children: [/* @__PURE__ */ d("div", {
			className: "flex items-center gap-1 border-0 border-b border-solid border-f1-border-secondary px-2 py-2.5",
			children: [/* @__PURE__ */ u(i, {
				ref: _,
				icon: n,
				onClick: m,
				label: h.chat.back,
				variant: "ghost",
				hideLabel: !0,
				size: "sm"
			}), /* @__PURE__ */ u("span", {
				className: "text-base font-medium text-f1-foreground",
				children: h.chat.info
			})]
		}), /* @__PURE__ */ u("div", {
			"aria-label": h.chat.info,
			className: e("max-h-80 overflow-y-auto rounded-b-lg", t("focus-visible:ring-inset")),
			role: "region",
			tabIndex: 0,
			children: /* @__PURE__ */ d("div", {
				className: "flex flex-col gap-4 px-3 py-3",
				children: [/* @__PURE__ */ u(f, {
					label: h.chat.delivered,
					value: s(new Date(a.createdAt), y, v)
				}), a.isMine && (b ? /* @__PURE__ */ d("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ u(f, { label: S }), a.readBy && a.readBy.length > 0 && /* @__PURE__ */ u("ul", {
						"aria-label": S,
						className: "m-0 flex list-none flex-col gap-1 p-0",
						role: "list",
						children: a.readBy.map((e) => /* @__PURE__ */ u("li", { children: /* @__PURE__ */ u(p, { user: e }) }, e.id))
					})]
				}) : a.readAt && /* @__PURE__ */ u(f, {
					label: h.chat.read,
					value: s(new Date(a.readAt), y, v)
				}))]
			})
		})]
	});
};
//#endregion
export { m as ChatMessageInfoView };
