import { jsxs as u, jsx as o } from "react/jsx-runtime";
import { useState as h } from "react";
import { ButtonInternal as p } from "../../F0Button/internal.js";
import { Dropdown as g } from "../../../experimental/Navigation/Dropdown/index.js";
import y from "../../../icons/app/Bookmark.js";
import v from "../../../icons/app/BookmarkFilled.js";
import b from "../../../icons/app/Ellipsis.js";
import "../../../icons/app/Menu.js";
import { cn as w } from "../../../lib/utils.js";
import { F0Checkbox as x } from "../../F0Checkbox/F0Checkbox.js";
import { useI18n as C } from "../../../lib/providers/i18n/i18n-provider.js";
function $({
  otherActions: t,
  selectable: i = !1,
  selected: s = !1,
  onSelect: m,
  bookmark: e,
  title: n,
  overlay: l = !1
}) {
  const d = C(), c = t && t.length > 0, [r, f] = h(!1);
  return !c && !i && !e ? null : /* @__PURE__ */ u(
    "div",
    {
      className: w(
        "flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]",
        // Stays visible (no hover needed) while the dropdown is open, the card is
        // selected, or the card is bookmarked — otherwise reveals on card hover.
        (r || s || e?.bookmarked) && "delay-0 sm:opacity-100",
        l && "pointer-events-auto absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"
      ),
      children: [
        c && /* @__PURE__ */ o("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ o(g, { items: t, open: r, onOpenChange: f, children: /* @__PURE__ */ o(
          p,
          {
            label: d.actions.other,
            icon: b,
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            pressed: r,
            compact: !0,
            "data-testid": "card-options-dropdown",
            onClick: (a) => a.stopPropagation()
          }
        ) }) }),
        i && /* @__PURE__ */ o("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ o(
          x,
          {
            title: n,
            checked: s,
            onCheckedChange: m,
            hideLabel: !0,
            stopPropagation: !0
          }
        ) }),
        e && /* @__PURE__ */ o("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ o(
          p,
          {
            label: e.label ?? n ?? d.actions.save,
            icon: e.bookmarked ? v : y,
            variant: "ghost",
            size: "sm",
            hideLabel: !0,
            pressed: e.bookmarked,
            compact: !0,
            "data-testid": "card-bookmark-toggle",
            onClick: (a) => {
              a.stopPropagation(), e.onBookmarkChange(!e.bookmarked);
            }
          }
        ) })
      ]
    }
  );
}
export {
  $ as CardOptions
};
