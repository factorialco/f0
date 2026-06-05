import { jsx as l } from "react/jsx-runtime";
import { useState as k, useCallback as b, useEffect as h } from "react";
import { F0Dialog as x } from "../../../../../patterns/F0Dialog/index.js";
import { useI18n as v } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0TextInput as y } from "../../../../../components/F0TextInput/F0TextInput.js";
const g = ({
  onClose: d,
  onSubmit: i,
  reactionType: s,
  message: o
}) => {
  const [n, m] = k(""), e = v(), { title: u, label: p, placeholder: f } = s === "like" ? e.ai.feedbackModal.positive : e.ai.feedbackModal.negative, a = b(() => {
    i(o, n);
  }, [n, o, i]), r = () => {
    d(o);
  };
  return h(() => {
    const t = (c) => {
      c.key === "Enter" && (c.preventDefault(), a());
    };
    return document.addEventListener("keydown", t), () => {
      document.removeEventListener("keydown", t);
    };
  }, [a]), /* @__PURE__ */ l(
    x,
    {
      position: "center",
      isOpen: !0,
      onClose: r,
      width: "md",
      title: u,
      container: null,
      primaryAction: {
        label: e.actions.send,
        onClick: a
      },
      secondaryAction: {
        label: e.actions.cancel,
        onClick: r
      },
      children: /* @__PURE__ */ l("div", { className: "flex flex-col gap-6", children: /* @__PURE__ */ l(
        y,
        {
          autoFocus: !0,
          label: p,
          placeholder: f,
          value: n,
          onChange: (t) => m(t.trim()),
          size: "md",
          type: "text"
        }
      ) })
    }
  );
};
export {
  g as FeedbackModal
};
