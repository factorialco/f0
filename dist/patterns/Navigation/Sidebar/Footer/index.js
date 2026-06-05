import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { F0AvatarPerson as c } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { Badge as f } from "../../../../ui/IconBadge/index.js";
import { Tooltip as d } from "../../../../experimental/Overlays/Tooltip/index.js";
import p from "../../../../icons/app/Bell.js";
import h from "../../../../icons/app/Circle.js";
import "../../../../icons/app/Menu.js";
import { cn as u, focusRing as g } from "../../../../lib/utils.js";
import { Dropdown as b } from "../../../../experimental/Navigation/Dropdown/index.js";
import { useI18n as N } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as v } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as x } from "../../../../components/F0Button/F0Button.js";
function E({
  user: i,
  options: t,
  showActivityButton: a = !1,
  activityButtonShortcut: n,
  onActivityButtonClick: s,
  onDropdownClick: l,
  hasActivityUpdates: m
}) {
  const e = N();
  return /* @__PURE__ */ r("div", { className: "flex flex-row items-center justify-between gap-1 p-3", children: [
    /* @__PURE__ */ o("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ o(b, { items: t, children: /* @__PURE__ */ r(
      "button",
      {
        className: u(
          "flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
          g("focus-visible:ring-inset")
        ),
        onClick: l,
        children: [
          /* @__PURE__ */ o(
            c,
            {
              src: i.avatarUrl,
              firstName: i.firstName,
              lastName: i.lastName,
              size: "xs"
            }
          ),
          /* @__PURE__ */ o(v, { children: `${i.firstName} ${i.lastName}` })
        ]
      }
    ) }) }),
    a && /* @__PURE__ */ o(d, { label: e.notifications, shortcut: n, children: /* @__PURE__ */ r("div", { className: "relative", children: [
      /* @__PURE__ */ o(
        x,
        {
          icon: p,
          label: e.notifications,
          onClick: s,
          variant: "ghost",
          hideLabel: !0
        }
      ),
      m && /* @__PURE__ */ o("div", { className: "absolute -right-1 -top-1 rounded-full bg-f1-background", children: /* @__PURE__ */ o(f, { type: "highlight", size: "sm", icon: h }) })
    ] }) })
  ] });
}
export {
  E as SidebarFooter
};
