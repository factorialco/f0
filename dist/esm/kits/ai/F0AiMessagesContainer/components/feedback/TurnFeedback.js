import { F0Icon as e } from "../../../../../components/F0Icon/index.js";
import t from "../../../../../icons/app/ThumbsDown.js";
import n from "../../../../../icons/app/ThumbsDownFilled.js";
import r from "../../../../../icons/app/ThumbsUp.js";
import i from "../../../../../icons/app/ThumbsUpFilled.js";
import { useI18n as a } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { Action as o } from "../../../../../ui/Action/Action.js";
import { ButtonCopy as s } from "../../../../../ui/ButtonCopy/ButtonCopy.js";
import { useFeedbackModal as c } from "./FeedbackProvider.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/feedback/TurnFeedback.tsx
var f = ({ content: f, targetMessage: p, onCopy: m }) => {
	let h = a(), { open: g } = c(), [_, v] = l(null);
	return /* @__PURE__ */ d("div", {
		className: "flex",
		children: [
			/* @__PURE__ */ u(s, {
				size: "md",
				variant: "ghost",
				valueToCopy: f,
				onCopy: (e) => {
					e.currentTarget.blur(), m?.(f);
				}
			}),
			/* @__PURE__ */ u(o, {
				onClick: (e) => {
					let t = _ === "like" ? null : "like";
					t && g(t, p), v(t), e.currentTarget.blur();
				},
				compact: !0,
				mode: "only",
				variant: "ghost",
				"aria-label": h.actions.thumbsUp,
				children: /* @__PURE__ */ u("div", {
					className: "flex min-w-0 flex-1 items-center justify-center gap-1",
					children: /* @__PURE__ */ u(e, {
						size: "md",
						icon: _ === "like" ? i : r,
						color: "default"
					})
				})
			}),
			/* @__PURE__ */ u(o, {
				onClick: (e) => {
					let t = _ === "dislike" ? null : "dislike";
					t && g(t, p), v(t), e.currentTarget.blur();
				},
				compact: !0,
				mode: "only",
				variant: "ghost",
				"aria-label": h.actions.thumbsDown,
				children: /* @__PURE__ */ u("div", {
					className: "flex min-w-0 flex-1 items-center justify-center gap-1",
					children: /* @__PURE__ */ u(e, {
						size: "md",
						icon: _ === "dislike" ? n : t,
						color: "default"
					})
				})
			})
		]
	});
};
//#endregion
export { f as TurnFeedback };
