import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { F0Avatar as v } from "../avatars/F0Avatar/index.js";
import { F0AvatarEmoji as k } from "../avatars/F0AvatarEmoji/index.js";
import { F0AvatarIcon as y } from "../avatars/F0AvatarIcon/index.js";
import { F0Icon as N } from "../F0Icon/index.js";
import w from "../../icons/app/Check.js";
import "../../icons/app/Menu.js";
import { useReducedMotion as I } from "../../lib/a11y.js";
import { withDataTestId as C } from "../../lib/data-testid/index.js";
import { useI18n as j } from "../../lib/providers/i18n/i18n-provider.js";
import { cn as i } from "../../lib/utils.js";
import { F0Link as F } from "../F0Link/F0Link.js";
import { motion as z } from "../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0AvatarFile as A } from "../avatars/F0AvatarFile/F0AvatarFile.js";
function D({ avatar: r }) {
  return r.type === "emoji" ? /* @__PURE__ */ e(k, { emoji: r.emoji, size: "md" }) : r.type === "file" ? /* @__PURE__ */ e(A, { file: r.file, size: "md" }) : r.type === "icon" ? /* @__PURE__ */ e(y, { icon: r.icon, size: "md" }) : /* @__PURE__ */ e(v, { avatar: r, size: "md" });
}
function R({ checked: r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: i(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors",
        r ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"
      ),
      children: r && /* @__PURE__ */ e("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
    }
  );
}
function L({ checked: r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      className: i(
        "flex h-5 w-5 shrink-0 items-center justify-center rounded-xs transition-colors",
        r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border bg-f1-background"
      ),
      children: r && /* @__PURE__ */ e(N, { icon: w, size: "sm" })
    }
  );
}
function S({ checked: r }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "aria-hidden": "true",
      className: i(
        "flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors",
        r ? "bg-f1-background-selected-bold" : "bg-f1-border"
      ),
      children: /* @__PURE__ */ e(
        "div",
        {
          className: i(
            "h-5 w-5 rounded-full bg-f1-background shadow-sm transition-transform",
            r ? "translate-x-4" : "translate-x-0"
          )
        }
      )
    }
  );
}
function P({
  item: r,
  selected: n,
  disabled: b,
  multiple: l,
  onSelect: u,
  isToggle: a,
  grouped: s
}) {
  const { forms: m } = j(), h = I(), t = b || r.disabled, c = () => {
    t || u();
  }, p = a ? "switch" : l ? "checkbox" : "radio", g = () => a ? /* @__PURE__ */ e(S, { checked: n }) : l ? /* @__PURE__ */ e(L, { checked: n }) : /* @__PURE__ */ e(R, { checked: n }), x = !!r.selectedContent;
  return /* @__PURE__ */ d(
    "div",
    {
      className: i(
        "relative flex flex-1 flex-col overflow-hidden transition-colors",
        s ? "" : i(
          "rounded-xl border border-solid",
          n && !a ? "border-f1-border-selected-bold bg-f1-background-selected-secondary" : "border-f1-border bg-f1-background hover:border-f1-border-hover"
        ),
        t && "cursor-not-allowed opacity-50"
      ),
      children: [
        /* @__PURE__ */ d(
          "div",
          {
            role: p,
            "aria-checked": n,
            "aria-disabled": t,
            tabIndex: t ? -1 : 0,
            onClick: c,
            onKeyDown: (o) => {
              const f = o.target;
              f.closest("a, button") && f !== o.currentTarget || (o.key === "Enter" || o.key === " ") && !t && (o.preventDefault(), c());
            },
            className: i(
              "flex cursor-pointer items-center gap-3",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring",
              s ? "px-4 py-3" : "p-4"
            ),
            children: [
              r.avatar && /* @__PURE__ */ e(D, { avatar: r.avatar }),
              /* @__PURE__ */ d("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [
                /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ d(
                    "span",
                    {
                      className: i(
                        "text-base text-f1-foreground",
                        s ? "font-medium" : "font-semibold"
                      ),
                      children: [
                        r.title,
                        r.required && /* @__PURE__ */ e("span", { className: "ml-0.5 text-f1-foreground-critical", children: "*" })
                      ]
                    }
                  ),
                  r.description && /* @__PURE__ */ e("span", { className: "text-base text-f1-foreground-secondary", children: r.description })
                ] }),
                r.moreInfoLink && /* @__PURE__ */ e(
                  F,
                  {
                    href: r.moreInfoLink.href,
                    target: "_blank",
                    variant: "link",
                    className: "self-start",
                    stopPropagation: !0,
                    children: r.moreInfoLink.label ?? m.moreInformation
                  }
                )
              ] }),
              g()
            ]
          }
        ),
        x && /* @__PURE__ */ e(
          z.div,
          {
            initial: !1,
            animate: {
              height: n ? "auto" : 0,
              opacity: n ? 1 : 0,
              visibility: n ? "visible" : "hidden"
            },
            transition: {
              duration: h ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            className: "overflow-hidden",
            children: /* @__PURE__ */ e(
              "div",
              {
                className: "border-0 border-t border-solid border-f1-border",
                onClick: (o) => o.stopPropagation(),
                onKeyDown: (o) => o.stopPropagation(),
                children: /* @__PURE__ */ e("div", { className: "flex flex-col gap-2 bg-f1-background-tertiary p-4", children: r.selectedContent })
              }
            )
          }
        )
      ]
    }
  );
}
const E = C(P), X = E;
export {
  X as CardSelectable
};
