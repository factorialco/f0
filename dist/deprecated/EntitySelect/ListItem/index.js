import { jsx as t, jsxs as p, Fragment as L } from "react/jsx-runtime";
import { useState as j } from "react";
import { F0AvatarPerson as z } from "../../../components/avatars/F0AvatarPerson/index.js";
import { F0Icon as N } from "../../../components/F0Icon/index.js";
import { Counter as E } from "../../../ui/Counter/index.js";
import T from "../../../icons/app/CheckCircle.js";
import q from "../../../icons/app/LogoAvatar.js";
import "../../../icons/app/Menu.js";
import { cn as w } from "../../../lib/utils.js";
import { Checkbox as y } from "../../../ui/checkbox.js";
import { HighlightText as D } from "../HighLightText/index.js";
import B from "../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import O from "../../../node_modules/.pnpm/lucide-react@0.383.0_react@18.3.1/node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { F0Button as U } from "../../../components/F0Button/F0Button.js";
function C(o, r) {
  const e = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), a = e.indexOf(o);
  a >= 0 && a < e.length - 1 ? e[a + 1].focus() : e.length > 0 && r?.();
}
function A(o, r) {
  const e = Array.from(
    document.querySelectorAll('[data-avatarname-navigator-element="true"]')
  ), a = e.indexOf(o);
  a > 0 ? e[a - 1].focus() : e.length > 0 && r?.();
}
const G = ({
  entity: o,
  selected: r,
  onSelect: f,
  onRemove: e,
  marginLeft: a,
  search: m,
  goToFirst: h,
  goToLast: d,
  singleSelector: n = !1,
  disabled: i = !1,
  hiddenAvatar: b = !1
}) => {
  const g = o.name.split(" "), x = g[0] || "", k = g.slice(1).join(" "), c = (l) => {
    l.preventDefault(), l.stopPropagation(), !i && (r ? e(o) : f(o));
  }, u = (l) => {
    if (l.key === "Enter" || l.key === " ") {
      if (l.preventDefault(), i) return;
      r ? r && e(o) : f(o);
    } else l.key === "ArrowDown" ? C(l.currentTarget, h) : l.key === "ArrowUp" && A(l.currentTarget, d);
  };
  return /* @__PURE__ */ t("div", { className: "w-full pl-1 pr-1", children: /* @__PURE__ */ p(
    "label",
    {
      "aria-label": o.name,
      className: w(
        a,
        "flex flex-row flex-wrap items-center gap-2 rounded border px-2 py-1.5 hover:cursor-pointer",
        "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover",
        r && n ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""
      ),
      children: [
        !b && /* @__PURE__ */ t(
          z,
          {
            src: o.avatar,
            firstName: x,
            lastName: k,
            size: "xs",
            deactivated: o.deactivated
          }
        ),
        /* @__PURE__ */ t("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ t(
          "div",
          {
            className: w(
              "flex flex-1 flex-row items-center gap-2 break-all",
              o.deactivated ? "text-f1-foreground/[0.61]" : void 0
            ),
            children: /* @__PURE__ */ t(
              D,
              {
                text: o.name,
                search: m,
                searchKeys: o.searchKeys
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          y,
          {
            "data-avatarname-navigator-element": "true",
            checked: r,
            disabled: i,
            onClick: c,
            onKeyDown: u,
            className: w(
              "pointer-events-none ml-auto",
              n ? "opacity-0" : ""
            )
          }
        ),
        n && r && /* @__PURE__ */ t(
          N,
          {
            className: "text-f1-icon-selected",
            icon: T,
            size: "md"
          }
        )
      ]
    }
  ) });
}, H = ({
  groupView: o,
  expanded: r,
  search: f,
  entity: e,
  selected: a,
  partialSelected: m,
  onSelect: h,
  onRemove: d,
  onExpand: n,
  goToFirst: i,
  goToLast: b,
  isChild: g = !1,
  hideLine: x = !1,
  showGroupIcon: k = !1,
  singleSelector: c = !1,
  disabled: u = !1,
  hiddenAvatar: l = !1
}) => {
  const [F, v] = j(!1);
  if (!o)
    return /* @__PURE__ */ t(
      G,
      {
        marginLeft: g ? "ml-6" : "ml-0",
        entity: e,
        search: f,
        selected: a,
        onSelect: h,
        onRemove: d,
        singleSelector: c,
        goToFirst: i,
        goToLast: b,
        disabled: u,
        hiddenAvatar: l
      }
    );
  const I = (s) => {
    if (s.key === " ")
      s.preventDefault(), n(!r);
    else if (s.key === "Enter" && c)
      n(!r);
    else if (s.key === "Enter") {
      if (u) return;
      !a || m ? h(e) : a && d(e);
    } else s.key === "ArrowDown" ? C(s.currentTarget, i) : s.key === "ArrowUp" && A(s.currentTarget, b);
  }, K = () => {
    if (F)
      n(!r), v(!1);
    else {
      if (u || c) return;
      a ? d(e) : h(e);
    }
  };
  if (!e.subItems?.length) return null;
  const P = a || m;
  return /* @__PURE__ */ p(L, { children: [
    /* @__PURE__ */ p("div", { className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1", children: [
      /* @__PURE__ */ t(
        U,
        {
          hideLabel: !0,
          icon: r ? B : O,
          onClick: () => n(!r),
          label: r ? "Collapse" : "Expand",
          size: "sm",
          variant: "ghost",
          type: "button"
        }
      ),
      /* @__PURE__ */ p(
        "label",
        {
          "aria-label": e.name,
          onPointerDown: () => {
            v(!0);
          },
          className: "flex flex-1 flex-row items-center gap-2 rounded border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
          children: [
            k && /* @__PURE__ */ t(
              N,
              {
                icon: q,
                className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
              }
            ),
            /* @__PURE__ */ p("div", { className: "flex flex-grow flex-row items-center gap-2 break-all", children: [
              /* @__PURE__ */ t(
                D,
                {
                  semiBold: !0,
                  text: e.name,
                  search: f,
                  searchKeys: e.searchKeys
                }
              ),
              /* @__PURE__ */ t(E, { value: e.subItems?.length ?? 0 })
            ] }),
            /* @__PURE__ */ t(
              y,
              {
                checked: P,
                disabled: u,
                onClick: K,
                onKeyDown: I,
                indeterminate: m,
                onPointerDown: (s) => {
                  s.stopPropagation(), v(!1);
                },
                "data-avatarname-navigator-element": "true",
                className: w("ml-auto", c ? "opacity-0" : "")
              }
            )
          ]
        }
      )
    ] }),
    !x && !r && /* @__PURE__ */ t("div", { className: "h-[1px] w-full bg-f1-border-secondary" })
  ] });
};
H.displayName = "EntitySelectListItem";
export {
  H as EntitySelectListItem,
  G as ListItemSingleContent,
  C as focusNextFocusable,
  A as focusPreviousFocusable
};
