import { createContext as e, useContext as t, useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessagesContainer/components/feedback/FeedbackProvider.tsx
var i = e(null), a = ({ children: e }) => {
	let [t, a] = n(null), o = t ? {
		isOpen: !0,
		currentReaction: t.action,
		currentMessage: t.message,
		open: (e, t) => a({
			action: e,
			message: t
		}),
		close: () => a(null)
	} : {
		isOpen: !1,
		currentReaction: null,
		currentMessage: null,
		open: (e, t) => a({
			action: e,
			message: t
		}),
		close: () => a(null)
	};
	return /* @__PURE__ */ r(i.Provider, {
		value: o,
		children: e
	});
}, o = () => {
	let e = t(i);
	if (e === null) throw Error("useFeedbackModal must be used within a FeedbackModalProvider");
	return e;
};
function s(e) {
	let t = o();
	return {
		modal: t,
		handleSubmit: (n, r) => {
			(t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(n, {
				threadId: e.threadId,
				feedback: r
			}), t.close();
		},
		handleClose: (n) => {
			(t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(n, {
				threadId: e.threadId,
				feedback: ""
			}), t.close();
		}
	};
}
//#endregion
export { a as FeedbackModalProvider, o as useFeedbackModal, s as useFeedbackSubmit };
