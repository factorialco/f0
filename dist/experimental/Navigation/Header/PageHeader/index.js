import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { useRef as k, useState as P } from "react";
import { ButtonInternal as h } from "../../../../components/F0Button/internal.js";
import { F0TagStatus as w } from "../../../../components/tags/F0TagStatus/index.js";
import { OneSwitch as j } from "../../../AiPromotionChat/OneSwitch.js";
import { Dropdown as R } from "../../Dropdown/index.js";
import { Tooltip as z } from "../../../Overlays/Tooltip/index.js";
import A from "../../../../icons/app/ChevronDown.js";
import M from "../../../../icons/app/ChevronLeft.js";
import $ from "../../../../icons/app/ChevronUp.js";
import D from "../../../../icons/app/Menu.js";
import { Link as G } from "../../../../lib/linkHandler.js";
import { cn as g } from "../../../../lib/utils.js";
import { useSidebar as I } from "../../../../patterns/ApplicationFrame/FrameProvider.js";
import { Skeleton as H } from "../../../../ui/skeleton.js";
import { Breadcrumbs as U } from "../Breadcrumbs/index.js";
import { FavoriteButton as V } from "../Favorites/index.js";
import { ProductUpdates as q } from "../ProductUpdates/index.js";
import { AnimatePresence as E } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as J } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0OneSwitch as K } from "../../../../sds/ai/F0OneSwitch/F0OneSwitch.js";
import { F0Button as p } from "../../../../components/F0Button/F0Button.js";
function N({
  icon: r,
  href: t,
  label: n,
  disabled: a
}) {
  const i = k(null);
  return /* @__PURE__ */ e(
    p,
    {
      href: t,
      title: n,
      "aria-label": n,
      disabled: a,
      ref: i,
      size: "sm",
      variant: "outline",
      label: n,
      icon: r,
      hideLabel: !0
    }
  );
}
function be({
  module: r,
  statusTag: t = void 0,
  breadcrumbs: n = [],
  actions: a = [],
  embedded: i = !1,
  navigation: l,
  productUpdates: u,
  favorites: c,
  oneSwitchTooltip: y,
  oneSwitchAutoOpen: C
}) {
  const { sidebarState: S, toggleSidebar: B } = I(), s = [
    {
      id: r.href,
      label: r.name,
      href: r.href,
      module: r.id
    },
    ...n
  ], b = t && Object.keys(t).length !== 0, F = i && n.length > 0, m = !i && a.length > 0, d = !i && !!u?.isVisible, x = s[s.length - 1], v = "navigation" in window ? window.navigation : null, f = i && (v ? !!v.canGoBack : window.history.length > 1);
  return /* @__PURE__ */ o(
    "div",
    {
      className: g(
        "flex items-center justify-between px-page py-4",
        i ? "h-12" : "h-16"
      ),
      children: [
        /* @__PURE__ */ o("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ e(E, { children: !i && S !== "locked" && /* @__PURE__ */ e(
            J.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ e("div", { className: "mr-3", children: /* @__PURE__ */ e(
                p,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  onClick: () => B(),
                  label: "Open main menu",
                  icon: D
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o(
            "div",
            {
              className: g(
                "flex flex-grow items-center gap-2",
                f && "justify-center"
              ),
              children: [
                i && f && /* @__PURE__ */ e("div", { className: "absolute left-4", children: /* @__PURE__ */ e(
                  p,
                  {
                    variant: "ghost",
                    hideLabel: !0,
                    label: "Back",
                    icon: M,
                    onClick: () => window.history.back()
                  }
                ) }),
                f || F ? /* @__PURE__ */ e("div", { className: "text-lg font-semibold text-f1-foreground", children: "loading" in x ? /* @__PURE__ */ e(H, { className: "h-4 w-24" }) : x.label }) : /* @__PURE__ */ e(
                  U,
                  {
                    breadcrumbs: s,
                    append: c !== void 0 && /* @__PURE__ */ e(
                      V,
                      {
                        label: c.label,
                        isMarked: c.isMarked,
                        onChange: c?.onChange
                      }
                    )
                  },
                  s[0].id
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
          !i && b && /* @__PURE__ */ e("div", { children: t.tooltip ? /* @__PURE__ */ e(z, { label: t.tooltip, children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            w,
            {
              text: t.text,
              variant: t.variant,
              additionalAccessibleText: t.tooltip
            }
          ) }) }) : /* @__PURE__ */ e(w, { text: t.text, variant: t.variant }) }),
          !i && b && (l || m || d) && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          l && /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            l.counter && /* @__PURE__ */ o("span", { className: "text-sm text-f1-foreground-secondary", children: [
              l.counter.current,
              "/",
              l.counter.total
            ] }),
            /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                N,
                {
                  icon: $,
                  label: l.previous?.title || "Previous",
                  href: l.previous?.url || "",
                  disabled: !l.previous
                }
              ),
              /* @__PURE__ */ e(
                N,
                {
                  icon: A,
                  label: l.next?.title || "Next",
                  href: l.next?.url || "",
                  disabled: !l.next
                }
              )
            ] })
          ] }),
          l && m && /* @__PURE__ */ e("div", { className: "h-4 w-px bg-f1-border-secondary" }),
          (d || m) && /* @__PURE__ */ o("div", { className: "flex items-center gap-2", children: [
            d && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: /* @__PURE__ */ e(
              q,
              {
                ...u,
                currentModule: r.name
              }
            ) }),
            m && /* @__PURE__ */ e("div", { className: "items-right flex gap-2", children: a.map((L, O) => /* @__PURE__ */ e(Q, { action: L }, O)) })
          ] }),
          /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e(
              K,
              {
                tooltip: y,
                autoOpen: C
              }
            ),
            /* @__PURE__ */ e(j, {})
          ] })
        ] })
      ]
    }
  );
}
function Q({ action: r }) {
  const t = k(null), [n, a] = P(!1), i = r.variant ?? "outline";
  return "actions" in r ? /* @__PURE__ */ e(R, { items: r.actions, open: n, onOpenChange: a, children: /* @__PURE__ */ e(
    h,
    {
      size: "md",
      variant: i,
      label: r.label,
      icon: r.icon,
      hideLabel: !0,
      pressed: n
    }
  ) }) : "onClick" in r ? /* @__PURE__ */ e(
    h,
    {
      size: "md",
      variant: i,
      label: r.label,
      icon: r.icon,
      hideLabel: !0,
      onClick: r.onClick
    }
  ) : /* @__PURE__ */ e(
    G,
    {
      href: r.href,
      title: r.label,
      "aria-label": r.label,
      ref: t,
      children: /* @__PURE__ */ e(
        h,
        {
          size: "md",
          variant: i,
          label: r.label,
          icon: r.icon,
          hideLabel: !0,
          onClick: (l) => {
            l.preventDefault(), t.current?.click();
          }
        }
      )
    }
  );
}
export {
  be as PageHeader
};
