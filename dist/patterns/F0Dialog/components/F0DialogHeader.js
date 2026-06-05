import { jsxs as a, Fragment as v, jsx as r } from "react/jsx-runtime";
import { ButtonInternal as m } from "../../../components/F0Button/internal.js";
import { DropdownInternal as w } from "../../../experimental/Navigation/Dropdown/internal.js";
import { BreadcrumbItem as y } from "../../../experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.js";
import { Tabs as N } from "../../Navigation/Tabs/index.js";
import D from "../../../icons/app/Cross.js";
import F from "../../../icons/app/Ellipsis.js";
import "../../../icons/app/Menu.js";
import { cn as C } from "../../../lib/utils.js";
import { BreadcrumbList as I } from "../../../ui/breadcrumb.js";
import { DialogTitle as k } from "../../../ui/Dialog/components/DialogTitle.js";
import { DrawerDescription as L } from "../../../ui/drawer.js";
import { useF0Dialog as j } from "./F0DialogProvider.js";
import { useI18n as B } from "../../../lib/providers/i18n/i18n-provider.js";
const Q = ({
  title: s,
  description: c,
  module: e,
  otherActions: t,
  tabs: n,
  activeTabId: f,
  setActiveTabId: d
}) => {
  const p = B(), { onClose: b } = j(), u = !!n, x = () => /* @__PURE__ */ r("div", { className: "h-4 w-px self-center bg-f1-background-secondary" }), i = t?.filter(
    (l) => l.type !== "separator" && l.type !== "label"
  ) ?? [], h = () => {
    if (!i.length || !t) return null;
    const l = i.some((o) => o.critical);
    return i.length <= 2 && !l ? /* @__PURE__ */ r("div", { className: "flex flex-row gap-2", children: i.map((o) => /* @__PURE__ */ r(
      m,
      {
        variant: "outline",
        icon: o.icon,
        onClick: o.onClick,
        label: o.label,
        hideLabel: !0
      },
      o.label
    )) }) : /* @__PURE__ */ r(w, { items: t, icon: F });
  }, g = () => e ? /* @__PURE__ */ r(I, { children: /* @__PURE__ */ r(
    y,
    {
      item: {
        id: e.id,
        label: e.label,
        href: e.href,
        module: e.id
      },
      isLast: !1,
      isFirst: !0
    }
  ) }) : null;
  return /* @__PURE__ */ a(v, { children: [
    /* @__PURE__ */ a(
      "div",
      {
        className: C(
          "flex flex-row items-start justify-between gap-3 px-4 py-3",
          !u && "border border-x-0 border-b border-t-0 border-solid border-f1-border-secondary"
        ),
        children: [
          /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: [
            e ? /* @__PURE__ */ r(g, {}) : s && /* @__PURE__ */ r(k, { className: "py-1 text-lg font-semibold text-f1-foreground", children: s }),
            !!c && /* @__PURE__ */ r(L, { className: "text-base text-f1-foreground-secondary", children: c })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ r(h, {}),
            t && /* @__PURE__ */ r(x, {}),
            /* @__PURE__ */ r(
              m,
              {
                variant: "outline",
                icon: D,
                onClick: b,
                label: p.actions.close,
                hideLabel: !0
              }
            )
          ] })
        ]
      }
    ),
    n && /* @__PURE__ */ r("div", { className: "-mx-2", children: /* @__PURE__ */ r(
      N,
      {
        tabs: n,
        activeTabId: f,
        setActiveTabId: d
      }
    ) })
  ] });
};
export {
  Q as F0DialogHeader
};
