import { jsxs as c, jsx as e, Fragment as F } from "react/jsx-runtime";
import { ItemActionsMobile as I } from "../../../../components/itemActions/ItemActionsMobile/ItemActionsMobile.js";
import { ItemActionsRow as j } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow.js";
import { ItemActionsRowContainer as O } from "../../../../components/itemActions/ItemActionsRowContainer.js";
import { useItemActions as D } from "../../../../components/itemActions/useItemActions.js";
import { cn as v } from "../../../../../../lib/utils.js";
import { renderProperty as z } from "../../../../property-render.js";
import { ItemTeaser as L } from "./ItemTeaser.js";
import { useI18n as R } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as b } from "../../../../../../components/F0Checkbox/F0Checkbox.js";
import { F0Link as M } from "../../../../../../components/F0Link/F0Link.js";
const K = ({
  source: t,
  item: r,
  selectedItems: d,
  handleSelectItemChange: m,
  fields: x,
  itemDefinition: u
}) => {
  const f = R(), { actions: g } = f, k = (n, o) => z(n, o, "list", f), a = t.itemUrl ? t.itemUrl(r) : void 0, l = t.itemOnClick ? t.itemOnClick(r) : void 0, w = !!a || !!l, i = t.selectable ? t.selectable(r) : void 0, s = u(r), {
    hasMobileItemActions: p,
    primaryItemActions: C,
    dropdownItemActions: y,
    mobileDropdownItemActions: N,
    handleDropDownOpenChange: h,
    dropDownOpen: A
  } = D({ source: t, item: r });
  return /* @__PURE__ */ c(
    "div",
    {
      className: v(
        "relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4",
        w && "cursor-pointer",
        "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"
      ),
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            onClick: l,
            className: "pointer-events-auto absolute inset-0"
          }
        ),
        /* @__PURE__ */ c("div", { className: "pointer-events-none flex flex-1 flex-row items-center gap-2", children: [
          t.selectable && i !== void 0 && // z-10 is needed here to prevent the checkbox from not being selectable when itemHref is provided
          /* @__PURE__ */ e("div", { className: "pointer-events-auto z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ e(
            b,
            {
              checked: d.has(i),
              onCheckedChange: (n) => m(r, n),
              title: `Select ${t.selectable(r)}`,
              hideLabel: !0
            }
          ) }),
          a && /* @__PURE__ */ e(
            M,
            {
              href: a,
              className: "pointer-events-auto absolute inset-0 block",
              tabIndex: 0,
              onClick: l,
              children: /* @__PURE__ */ e("span", { className: "sr-only", children: g.view })
            }
          ),
          /* @__PURE__ */ e(
            L,
            {
              title: s.title,
              avatar: s.avatar,
              description: s.description
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: (x || []).filter((n) => !n.hide?.(r)).map((n) => {
          const o = k(r, n);
          return o ? /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap", children: o }) }, String(n.label)) : null;
        }) }),
        t.itemActions && /* @__PURE__ */ c(F, { children: [
          /* @__PURE__ */ e(
            O,
            {
              dropDownOpen: A,
              className: "pointer-events-auto hidden md:flex",
              children: /* @__PURE__ */ e(
                j,
                {
                  primaryItemActions: C,
                  dropdownItemActions: y,
                  handleDropDownOpenChange: h
                }
              )
            }
          ),
          p && /* @__PURE__ */ e(
            I,
            {
              className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
              items: N,
              onOpenChange: h
            }
          )
        ] }),
        t.selectable && i !== void 0 && /* @__PURE__ */ e(
          "div",
          {
            className: v(
              "pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
              p && "right-12"
            ),
            children: /* @__PURE__ */ e(
              b,
              {
                checked: d.has(i),
                onCheckedChange: (n) => m(r, n),
                title: `Select ${t.selectable(r)}`,
                hideLabel: !0
              }
            )
          }
        )
      ]
    }
  );
};
export {
  K as Row
};
