import { jsxs as s, Fragment as j, jsx as r } from "react/jsx-runtime";
import { useState as P, useEffect as R, useMemo as c, useCallback as p } from "react";
import { createPortal as A } from "react-dom";
import { F0Icon as C } from "../../../components/F0Icon/index.js";
import H from "../../../icons/app/New.js";
import L from "../../../icons/app/Search.js";
import { cn as u } from "../../../lib/utils.js";
import { Action as T } from "../../../ui/Action/Action.js";
import { CollapsibleGroup as E } from "./components/CollapsibleGroup.js";
import { ThreadListSkeleton as q } from "./components/ThreadListSkeleton.js";
import { groupThreadsByDate as B } from "./utils.js";
import { useI18n as G } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as K } from "../../../lib/OneEllipsis/OneEllipsis.js";
const te = ({
  onClose: a,
  onSelectThread: y,
  onNewChat: x,
  threads: f,
  isLoading: i,
  error: n,
  pinnedIds: o,
  onPinThread: v,
  onUnpinThread: b,
  onDeleteThread: g
}) => {
  const t = G(), [d, F] = P("");
  R(() => {
    const e = (l) => {
      l.key === "Escape" && a();
    };
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
  }, [a]);
  const S = c(
    () => ({
      today: t.ai.today,
      yesterday: t.ai.yesterday,
      thisMonth: t.ai.thisMonth,
      older: t.ai.older
    }),
    [
      t.ai.today,
      t.ai.yesterday,
      t.ai.thisMonth,
      t.ai.older
    ]
  ), m = c(() => {
    if (!d.trim()) return f;
    const e = d.toLowerCase();
    return f.filter((l) => l.title.toLowerCase().includes(e));
  }, [f, d]), h = c(
    () => m.filter((e) => o.has(e.id)),
    [m, o]
  ), w = c(
    () => m.filter((e) => !o.has(e.id)),
    [m, o]
  ), k = c(
    () => B(w),
    [w]
  ), N = p(
    (e, l) => {
      y(e, l), a();
    },
    [y, a]
  ), D = p(() => {
    x(), a();
  }, [x, a]), z = p(
    (e) => {
      g(e);
    },
    [g]
  ), M = h.length > 0 || k.length > 0;
  return A(
    /* @__PURE__ */ s(j, { children: [
      /* @__PURE__ */ r(
        "div",
        {
          className: "fixed inset-0 z-50 bg-f1-background-overlay animate-in fade-in-0",
          onClick: a,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ r(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": t.ai.chatHistory,
          className: u(
            "fixed inset-0 z-50 flex items-center justify-center",
            "pointer-events-none",
            "animate-in fade-in-0 zoom-in-95"
          ),
          children: /* @__PURE__ */ s(
            "div",
            {
              className: u(
                "pointer-events-auto relative flex w-full max-w-[600px] flex-col",
                "rounded-xl bg-f1-background shadow-lg",
                "max-h-[min(600px,80vh)]"
              ),
              children: [
                /* @__PURE__ */ s("div", { className: "flex flex-shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary py-2 pl-5 pr-3", children: [
                  /* @__PURE__ */ r(C, { icon: L, color: "secondary", size: "md" }),
                  /* @__PURE__ */ r(
                    "input",
                    {
                      type: "text",
                      value: d,
                      onChange: (e) => F(e.target.value),
                      placeholder: t.ai.searchChats,
                      className: u(
                        "w-full",
                        "py-2.5 pr-3",
                        "text-base text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary focus:outline-none",
                        "outline-none"
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ s("div", { className: "flex flex-1 flex-col gap-1 overflow-y-auto p-2", children: [
                  /* @__PURE__ */ r(
                    T,
                    {
                      variant: "ghost",
                      size: "md",
                      className: "py-1 [&>div>span>span]:w-full",
                      onClick: D,
                      children: /* @__PURE__ */ s("div", { className: "flex w-full items-center gap-2", children: [
                        /* @__PURE__ */ r(C, { icon: H, color: "default", size: "md" }),
                        /* @__PURE__ */ r(K, { lines: 1, className: "text-left", children: t.ai.startNewChat })
                      ] })
                    }
                  ),
                  i && /* @__PURE__ */ r(q, {}),
                  !i && n && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: n }),
                  !i && !n && !M && /* @__PURE__ */ r("p", { className: "py-8 text-center text-base text-f1-foreground-tertiary", children: t.ai.noPreviousChats }),
                  !i && !n && h.length > 0 && /* @__PURE__ */ r(
                    E,
                    {
                      label: t.ai.pinnedChats,
                      threads: h,
                      pinnedIds: o,
                      onSelect: N,
                      onPin: v,
                      onUnpin: b,
                      onDelete: z
                    }
                  ),
                  !i && !n && k.map((e) => /* @__PURE__ */ r(
                    E,
                    {
                      label: S[e.key],
                      threads: e.threads,
                      pinnedIds: o,
                      onSelect: N,
                      onPin: v,
                      onUnpin: b,
                      onDelete: z
                    },
                    e.key
                  ))
                ] })
              ]
            }
          )
        }
      )
    ] }),
    document.body
  );
};
export {
  te as F0AiChatHistory
};
