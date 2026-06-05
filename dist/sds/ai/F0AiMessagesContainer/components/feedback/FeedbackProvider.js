import { jsx as r } from "react/jsx-runtime";
import { useState as s, createContext as u, useContext as d } from "react";
const c = u(null), m = ({ children: e }) => {
  const [t, o] = s(null), l = t ? {
    isOpen: !0,
    currentReaction: t.action,
    currentMessage: t.message,
    open: (n, a) => o({ action: n, message: a }),
    close: () => o(null)
  } : {
    isOpen: !1,
    currentReaction: null,
    currentMessage: null,
    open: (n, a) => o({ action: n, message: a }),
    close: () => o(null)
  };
  return /* @__PURE__ */ r(c.Provider, { value: l, children: e });
}, b = () => {
  const e = d(c);
  if (e === null)
    throw new Error(
      "useFeedbackModal must be used within a FeedbackModalProvider"
    );
  return e;
};
function p(e) {
  const t = b();
  return { modal: t, handleSubmit: (n, a) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(n, { threadId: e.threadId, feedback: a }), t.close();
  }, handleClose: (n) => {
    (t.currentReaction === "like" ? e.onThumbsUp : e.onThumbsDown)?.(n, { threadId: e.threadId, feedback: "" }), t.close();
  } };
}
export {
  m as FeedbackModalProvider,
  b as useFeedbackModal,
  p as useFeedbackSubmit
};
