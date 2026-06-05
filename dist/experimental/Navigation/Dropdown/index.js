import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useState as u } from "react";
import { ButtonInternal as x } from "../../../components/F0Button/internal.js";
import { F0Icon as g } from "../../../components/F0Icon/index.js";
import h from "../../../icons/app/EllipsisHorizontal.js";
import "../../../icons/app/Menu.js";
import { DataTestIdWrapper as f } from "../../../lib/data-testid/index.js";
import { experimentalComponent as d } from "../../../lib/experimental.js";
import { Link as b } from "../../../lib/linkHandler.js";
import { cn as s } from "../../../lib/utils.js";
import { Drawer as w, DrawerTrigger as D, DrawerOverlay as N, DrawerContent as v } from "../../../ui/drawer.js";
import { DropdownItemContent as y } from "./DropdownItem.js";
import { DropdownInternal as C } from "./internal.js";
const k = [], I = (n) => {
  const { open: c, onOpenChange: i, dataTestId: t, ...a } = n, r = k.reduce((o, l) => {
    const { [l]: T, ...m } = o;
    return m;
  }, a);
  return /* @__PURE__ */ e(f, { dataTestId: t, children: /* @__PURE__ */ e(
    C,
    {
      ...r,
      open: c,
      onOpenChange: i,
      align: n.align || "end"
    }
  ) });
}, A = d("Dropdown", I), O = ({ items: n, children: c, dataTestId: i }) => {
  const [t, a] = u(!1);
  return /* @__PURE__ */ e(f, { dataTestId: i, children: /* @__PURE__ */ p(w, { open: t, onOpenChange: a, children: [
    /* @__PURE__ */ e(D, { asChild: !0, children: c || /* @__PURE__ */ e(
      x,
      {
        label: "Other actions",
        icon: h,
        variant: "outline",
        size: "lg",
        pressed: t,
        noTitle: !0
      }
    ) }),
    /* @__PURE__ */ e(N, { className: "bg-f1-background-overlay" }),
    /* @__PURE__ */ e(v, { className: "bg-f1-background", children: /* @__PURE__ */ e("div", { className: "flex flex-col px-2 pb-3 pt-2", children: n.map((r, o) => r.type === "separator" ? /* @__PURE__ */ e(
      "div",
      {
        className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
      },
      `separator-${o}`
    ) : r.type === "label" ? /* @__PURE__ */ e(
      "span",
      {
        className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
        children: r.text
      },
      `label-${o}`
    ) : r.href ? /* @__PURE__ */ e(
      b,
      {
        href: r.href,
        className: s(
          "flex w-full items-start gap-1.5",
          r.critical && "text-f1-foreground-critical",
          "text-f1-foreground no-underline hover:cursor-pointer"
        ),
        children: /* @__PURE__ */ e(y, { item: r })
      },
      `link-${o}`
    ) : /* @__PURE__ */ p(
      "button",
      {
        onClick: (l) => {
          l.preventDefault(), l.stopPropagation(), r.onClick?.(), a(!1);
        },
        className: "flex w-full cursor-pointer items-center gap-2 p-3",
        children: [
          r.icon && /* @__PURE__ */ e(
            "span",
            {
              className: s(
                "h-5 w-5 text-f1-icon",
                r.critical && "text-f1-icon-critical"
              ),
              children: /* @__PURE__ */ e(g, { icon: r.icon, size: "md" })
            }
          ),
          /* @__PURE__ */ e(
            "span",
            {
              className: s(
                "font-medium",
                r.critical ? "text-f1-foreground-critical" : "text-f1-foreground"
              ),
              children: r.label
            }
          )
        ]
      },
      r.label
    )) }) })
  ] }) });
}, E = d(
  "MobileDropdown",
  O
);
export {
  A as Dropdown,
  E as MobileDropdown
};
