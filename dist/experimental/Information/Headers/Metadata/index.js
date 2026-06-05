import { jsx as a, jsxs as l } from "react/jsx-runtime";
import { memo as g, Fragment as y, useState as v } from "react";
import { F0Icon as p } from "../../../../components/F0Icon/index.js";
import { MobileDropdown as w } from "../../../Navigation/Dropdown/index.js";
import { Tooltip as u } from "../../../Overlays/Tooltip/index.js";
import M from "../../../../icons/app/InfoCircleLine.js";
import "../../../../icons/app/Menu.js";
import { experimentalComponent as N } from "../../../../lib/experimental.js";
import { cn as c } from "../../../../lib/utils.js";
import { ButtonCopy as k } from "../../../../ui/ButtonCopy/ButtonCopy.js";
import { MetadataValue as m } from "./MetadataValue.js";
import { AnimatePresence as C } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as h } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0Button as $ } from "../../../../components/F0Button/F0Button.js";
const j = (e) => e?.type !== "copy", A = (e) => e?.type === "copy";
function z({ item: e }) {
  const [d, o] = v(!1), n = e.value.type === "data-list" && e.value.data.length > 1 || e.value.type === "tag-list" && e.value.tags.length > 1, r = !!e.actions?.length, i = r || n, x = (t, s) => {
    if (s)
      return s;
    let f;
    switch (t.type) {
      case "text":
        return t.content;
      case "avatar":
        return t.text;
      case "status":
      case "dot-tag":
        return t.label;
      case "date":
        return t.formattedDate;
      case "tag-list":
        return t.tags.join(", ");
      case "data-list":
        return t.data.join(", ");
      case "list":
        return "";
      case "progress-bar": {
        const b = typeof t.max == "number" && t.max > 0 ? t.max : 100;
        return t.label ?? `${t.value}/${b}`;
      }
      default:
        return f = t, f;
    }
  };
  return /* @__PURE__ */ l("div", { className: "flex h-8 items-center gap-2", children: [
    e.icon && /* @__PURE__ */ a("span", { className: "flex shrink-0 items-center text-f1-foreground-secondary", children: /* @__PURE__ */ a(p, { icon: e.icon, size: "md" }) }),
    /* @__PURE__ */ l(
      "div",
      {
        className: c(
          "flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit",
          e.hideLabel && "md:hidden"
        ),
        children: [
          e.label,
          e.info && /* @__PURE__ */ a("div", { className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help", children: /* @__PURE__ */ a(
            u,
            {
              label: e.info.title,
              description: e.info.description,
              children: /* @__PURE__ */ a(p, { icon: M, size: "sm" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        tabIndex: i ? 0 : -1,
        onMouseEnter: () => i && o(!0),
        onMouseLeave: () => i && o(!1),
        onFocus: () => i && o(!0),
        onBlur: () => i && o(!1),
        className: "relative flex h-5 w-fit items-center hover:cursor-default",
        "aria-label": `${e.label} actions`,
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              className: c(
                "hidden font-medium text-f1-foreground md:block",
                !r && "block"
              ),
              children: /* @__PURE__ */ a(m, { item: e, collapse: !0 })
            }
          ),
          r && /* @__PURE__ */ a("div", { className: "w-full md:hidden", children: /* @__PURE__ */ a(
            w,
            {
              items: e.actions?.filter(j).map((t) => ({
                label: t.label,
                icon: t.icon,
                onClick: t.onClick
              })) ?? [],
              children: /* @__PURE__ */ a(m, { item: e, collapse: !0 })
            }
          ) }),
          /* @__PURE__ */ a(C, { children: d && i && /* @__PURE__ */ l(
            h.div,
            {
              className: c(
                "absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex",
                !n && "h-8 items-start",
                r ? "pr-1" : "pr-1.5"
              ),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.1 },
              children: [
                /* @__PURE__ */ a(
                  "div",
                  {
                    className: c(
                      "flex h-6 items-center font-medium text-f1-foreground",
                      n && "h-auto items-start pt-0.5"
                    ),
                    children: /* @__PURE__ */ a(m, { item: e })
                  }
                ),
                r && /* @__PURE__ */ a(
                  h.div,
                  {
                    className: "flex gap-1",
                    initial: { x: -16 },
                    animate: { x: 0 },
                    exit: { x: -16 },
                    transition: { duration: 0.1 },
                    children: e.actions?.map((t, s) => A(t) ? /* @__PURE__ */ a(
                      k,
                      {
                        valueToCopy: x(
                          e.value,
                          t.copyValue
                        )
                      },
                      `copy-${s}`
                    ) : /* @__PURE__ */ a(u, { label: t.label, children: /* @__PURE__ */ a(
                      $,
                      {
                        size: "sm",
                        variant: "neutral",
                        label: t.label,
                        hideLabel: !0,
                        icon: t.icon,
                        onClick: t.onClick
                      },
                      `action-${s}`
                    ) }, `tooltip-${s}`))
                  }
                )
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const F = g(function({ items: d }) {
  const o = d.filter((n) => typeof n == "object");
  return /* @__PURE__ */ a("div", { className: "flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center", children: o.map((n, r) => /* @__PURE__ */ l(y, { children: [
    /* @__PURE__ */ a(z, { item: n }),
    r < o.length - 1 && /* @__PURE__ */ a("div", { className: "hidden h-4 w-[1px] bg-f1-border md:block" })
  ] }, `metadata-item-${r}`)) });
}), J = N("Metadata", F);
export {
  J as Metadata
};
