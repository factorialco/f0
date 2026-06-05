import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { Root as y, Trigger as w, Portal as C, Content as R } from "../../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import { useState as p } from "react";
import { ButtonInternal as F } from "../../../../F0Button/internal.js";
import { F0Icon as L } from "../../../../F0Icon/index.js";
import { Badge as P } from "../../../../../ui/IconBadge/index.js";
import z from "../../../../../icons/app/Alert.js";
import A from "../../../../../icons/app/Check.js";
import I from "../../../../../icons/app/Cross.js";
import N from "../../../../../icons/app/CrossedCircle.js";
import m from "../../../../../icons/app/Link.js";
import "../../../../../icons/app/Menu.js";
import { cn as u, focusRing as U } from "../../../../../lib/utils.js";
import { F0ButtonToggle as B } from "../../../../F0ButtonToggle/F0ButtonToggle.js";
import { AnimatePresence as T } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as $ } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as D } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as h } from "../../../../F0Button/F0Button.js";
const te = ({ editor: o, disabled: d }) => {
  const i = D(), [a, l] = p(!1), [t, n] = p(o.getAttributes("link").href || ""), g = (e) => {
    d || l(!a);
  }, s = (e) => {
    const x = e.trim();
    return /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/i.test(
      x
    );
  }, f = () => {
    const e = t.trim();
    e && s(e) && (o.chain().focus().extendMarkRange("link").setLink({ href: e }).run(), l(!1));
  }, k = () => {
    n(""), navigator.clipboard.readText().then((e) => {
      n(e);
    });
  }, b = () => {
    o.chain().focus().unsetLink().run(), n("");
  }, v = () => {
    l(!1);
  };
  return /* @__PURE__ */ c(
    y,
    {
      open: a,
      onOpenChange: (e) => {
        l(e), e && n(o.getAttributes("link").href || "");
      },
      children: [
        /* @__PURE__ */ r(w, { asChild: !0, children: /* @__PURE__ */ r(
          B,
          {
            selected: o.isActive("link") || a,
            label: i.richTextEditor.link,
            icon: m,
            disabled: d,
            onSelectedChange: () => g()
          }
        ) }),
        /* @__PURE__ */ r(C, { container: document.body, children: /* @__PURE__ */ r(
          R,
          {
            side: "top",
            align: "start",
            sideOffset: 10,
            collisionPadding: 10,
            alignOffset: -5,
            style: { zIndex: 9999 },
            children: /* @__PURE__ */ r(T, { children: a && /* @__PURE__ */ r(
              $.div,
              {
                initial: { opacity: 0, y: 10, scale: 0.95 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 10, scale: 0.95 },
                transition: { duration: 0.2 },
                "aria-label": "Link popup",
                children: /* @__PURE__ */ c("div", { className: "dark z-50 flex w-max flex-row gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm", children: [
                  /* @__PURE__ */ r(
                    F,
                    {
                      compact: !0,
                      variant: "ghost",
                      size: "md",
                      onClick: (e) => {
                        e.preventDefault(), v();
                      },
                      className: "[&>button]:aspect-square [&>button]:px-0",
                      label: "Close link popup",
                      hideLabel: !0,
                      icon: I
                    }
                  ),
                  /* @__PURE__ */ c(
                    "div",
                    {
                      className: u(
                        "flex w-80 appearance-none items-center gap-2 rounded border-0 bg-f1-background py-1 pl-2 pr-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary",
                        o.isActive("link") ? "cursor-auto" : U("focus:ring-f1-border-hover") + "hover:ring-f1-border-hover"
                      ),
                      children: [
                        /* @__PURE__ */ r(
                          "div",
                          {
                            className: u(
                              "flex items-center justify-center",
                              t.length > 0 ? "w-6" : "w-4"
                            ),
                            children: /* @__PURE__ */ r(
                              P,
                              {
                                icon: t.length > 0 ? s(t) ? A : z : m,
                                type: t ? s(t) ? "positive" : "warning" : "neutral",
                                size: t.length > 0 ? "sm" : "lg"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ r(
                          "input",
                          {
                            className: "w-full shrink text-f1-foreground disabled:cursor-not-allowed",
                            type: "text",
                            placeholder: i.richTextEditor.linkPlaceholder,
                            value: t,
                            onChange: (e) => n(e.target.value),
                            onKeyDown: (e) => {
                              e.key === "Enter" && f();
                            }
                          }
                        ),
                        o.isActive("link") && /* @__PURE__ */ r(
                          L,
                          {
                            size: "md",
                            icon: N,
                            className: "cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary",
                            onClick: b
                          }
                        ),
                        /* @__PURE__ */ r(
                          h,
                          {
                            variant: "outline",
                            type: "button",
                            size: "sm",
                            onClick: k,
                            label: i.actions.paste
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ r(
                    h,
                    {
                      variant: "default",
                      type: "button",
                      size: "sm",
                      onClick: (e) => {
                        e.preventDefault(), f();
                      },
                      label: i.actions.save
                    }
                  )
                ] })
              }
            ) })
          }
        ) })
      ]
    }
  );
};
export {
  te as LinkPopup
};
