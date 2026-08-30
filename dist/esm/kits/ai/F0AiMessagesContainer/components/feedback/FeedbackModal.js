import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as t } from "../../../../../F0Dialog.js";
import { F0TextInput as n } from "../../../../../components/F0TextInput/F0TextInput.js";
import { useCallback as r, useEffect as i, useState as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/feedback/FeedbackModal.tsx
var s = ({ onClose: s, onSubmit: c, reactionType: l, message: u }) => {
	let [d, f] = a(""), p = e(), { title: m, label: h, placeholder: g } = l === "like" ? p.ai.feedbackModal.positive : p.ai.feedbackModal.negative, _ = r(() => {
		c(u, d);
	}, [
		d,
		u,
		c
	]), v = () => {
		s(u);
	};
	return i(() => {
		let e = (e) => {
			e.key === "Enter" && (e.preventDefault(), _());
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [_]), /* @__PURE__ */ o(t, {
		position: "center",
		isOpen: !0,
		onClose: v,
		width: "md",
		title: m,
		container: null,
		primaryAction: {
			label: p.actions.send,
			onClick: _
		},
		secondaryAction: {
			label: p.actions.cancel,
			onClick: v
		},
		children: /* @__PURE__ */ o("div", {
			className: "flex flex-col gap-6",
			children: /* @__PURE__ */ o(n, {
				autoFocus: !0,
				label: h,
				placeholder: g,
				value: d,
				onChange: (e) => f(e.trim()),
				size: "md",
				type: "text"
			})
		})
	});
};
//#endregion
export { s as FeedbackModal };
