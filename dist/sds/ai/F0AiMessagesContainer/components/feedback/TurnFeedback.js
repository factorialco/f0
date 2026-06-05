import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { useState as f } from "react";
import { F0Icon as m } from "../../../../../components/F0Icon/index.js";
import "../../../../../icons/app/Menu.js";
import p from "../../../../../icons/app/ThumbsDown.js";
import k from "../../../../../icons/app/ThumbsDownFilled.js";
import b from "../../../../../icons/app/ThumbsUp.js";
import h from "../../../../../icons/app/ThumbsUpFilled.js";
import { Action as s } from "../../../../../ui/Action/Action.js";
import { ButtonCopy as w } from "../../../../../ui/ButtonCopy/ButtonCopy.js";
import { useFeedbackModal as x } from "./FeedbackProvider.js";
import { useI18n as F } from "../../../../../lib/providers/i18n/i18n-provider.js";
const A = ({
  content: i,
  targetMessage: l,
  onCopy: u
}) => {
  const n = F(), { open: a } = x(), [t, c] = f(null);
  return /* @__PURE__ */ d("div", { className: "flex", children: [
    /* @__PURE__ */ o(
      w,
      {
        size: "md",
        variant: "ghost",
        valueToCopy: i,
        onCopy: (r) => {
          r.currentTarget.blur(), u?.(i);
        }
      }
    ),
    /* @__PURE__ */ o(
      s,
      {
        onClick: (r) => {
          const e = t === "like" ? null : "like";
          e && a(e, l), c(e), r.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsUp,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          m,
          {
            size: "md",
            icon: t === "like" ? h : b,
            color: "default"
          }
        ) })
      }
    ),
    /* @__PURE__ */ o(
      s,
      {
        onClick: (r) => {
          const e = t === "dislike" ? null : "dislike";
          e && a(e, l), c(e), r.currentTarget.blur();
        },
        compact: !0,
        mode: "only",
        variant: "ghost",
        "aria-label": n.actions.thumbsDown,
        children: /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-1", children: /* @__PURE__ */ o(
          m,
          {
            size: "md",
            icon: t === "dislike" ? k : p,
            color: "default"
          }
        ) })
      }
    )
  ] });
};
export {
  A as TurnFeedback
};
