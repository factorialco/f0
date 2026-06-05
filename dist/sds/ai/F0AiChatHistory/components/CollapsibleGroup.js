import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { useState as x, useCallback as i } from "react";
import { F0Icon as g } from "../../../../components/F0Icon/index.js";
import h from "../../../../icons/app/ChevronDown.js";
import b from "../../../../icons/app/ChevronUp.js";
import "../../../../icons/app/Menu.js";
import { cn as k, focusRing as v } from "../../../../lib/utils.js";
import { ThreadItem as y } from "./ThreadItem.js";
function j({
  label: a,
  threads: d,
  pinnedIds: s,
  onSelect: c,
  onPin: m,
  onUnpin: l,
  onDelete: p
}) {
  const [n, f] = x(!0), r = i(() => {
    f((e) => !e);
  }, []), u = i(
    (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), r());
    },
    [r]
  );
  return /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t(
      "div",
      {
        role: "button",
        tabIndex: 0,
        onClick: r,
        onKeyDown: u,
        className: k(
          "flex cursor-pointer items-center p-3 gap-1 hover:bg-f1-background-hover",
          v("rounded")
        ),
        children: [
          /* @__PURE__ */ o("span", { className: "text-sm font-medium capitalize tracking-wide text-f1-foreground-secondary", children: a }),
          /* @__PURE__ */ o(
            g,
            {
              icon: n ? h : b,
              color: "secondary",
              size: "xs"
            }
          )
        ]
      }
    ),
    n && /* @__PURE__ */ o("div", { className: "flex flex-col", children: d.map((e) => /* @__PURE__ */ o(
      y,
      {
        thread: e,
        isPinned: s.has(e.id),
        onSelect: c,
        onPin: m,
        onUnpin: l,
        onDelete: p
      },
      e.id
    )) })
  ] });
}
export {
  j as CollapsibleGroup
};
