import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { useMemo as l } from "react";
import { Dropdown as u } from "../../../../experimental/Navigation/Dropdown/index.js";
import y from "../../../../icons/app/Delete.js";
import h from "../../../../icons/app/EllipsisHorizontal.js";
import "../../../../icons/app/Menu.js";
import w from "../../../../icons/app/PushPin.js";
import { cn as c, focusRing as x } from "../../../../lib/utils.js";
import { formatThreadDate as b } from "../utils.js";
import { useI18n as g } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as v } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as k } from "../../../../components/F0Button/F0Button.js";
function z({
  thread: t,
  isPinned: e,
  onSelect: a,
  onPin: n,
  onUnpin: m,
  onDelete: s
}) {
  const i = g(), p = l(
    () => [
      {
        label: e ? i.ai.unpinChat : i.ai.pinChat,
        icon: w,
        onClick: () => e ? m(t.id) : n(t.id)
      },
      {
        label: i.ai.deleteChat,
        icon: y,
        critical: !0,
        onClick: () => s(t.id)
      }
    ],
    [e, t.id, n, m, s]
  ), f = l(
    () => b(t.updatedAt, {
      today: i.ai.today,
      yesterday: i.ai.yesterday
    }),
    [t.updatedAt, i.ai.today, i.ai.yesterday]
  );
  return /* @__PURE__ */ d(
    "div",
    {
      className: c(
        "group flex cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover",
        x("rounded")
      ),
      role: "button",
      tabIndex: 0,
      onKeyDown: (r) => {
        (r.key === "Enter" || r.key === " ") && (r.preventDefault(), a(t.id, t.title));
      },
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "flex w-full min-w-0 items-center gap-1",
            onClick: () => a(t.id, t.title),
            children: [
              /* @__PURE__ */ o(v, { lines: 1, className: "text-left font-medium", children: t.title }),
              /* @__PURE__ */ o("span", { className: "shrink-0 font-medium text-f1-foreground-tertiary", children: `- ${f}` })
            ]
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            className: c(
              "flex items-center opacity-0 transition-opacity duration-150",
              "group-hover:opacity-100 focus-within:opacity-100",
              "has-[[aria-expanded=true]]:opacity-100"
            ),
            children: /* @__PURE__ */ o(u, { items: p, children: /* @__PURE__ */ o(
              k,
              {
                icon: h,
                variant: "ghost",
                size: "md",
                label: i.ai.threadOptions,
                hideLabel: !0
              }
            ) })
          }
        )
      ]
    }
  );
}
export {
  z as ThreadItem
};
