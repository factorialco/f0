import { jsxs as a, jsx as e, Fragment as N } from "react/jsx-runtime";
import { useState as l, useCallback as v } from "react";
import { F0AvatarCompany as y } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { ButtonInternal as w } from "../../../../components/F0Button/internal.js";
import "../../../../icons/app/Menu.js";
import k from "../../../../icons/app/Sliders.js";
import C from "../../../../icons/app/Upsell.js";
import { Popover as P, PopoverTrigger as E, PopoverContent as j } from "../../../../ui/popover.js";
import { motion as F } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as L } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as f } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as O } from "../../../../components/F0Button/F0Button.js";
function q({ credits: r }) {
  const n = L(), [d, u] = l(!1), [s, i] = l(!1), [c, t] = l(!1), [o, p] = l(null), g = v(
    (m) => {
      u(m), m && r?.fetchUsage && (i(!0), t(!1), r.fetchUsage().then((x) => {
        p(x), t(!1);
      }).catch(() => {
        t(!0);
      }).finally(() => {
        i(!1);
      }));
    },
    [r]
  );
  if (!r) return null;
  const h = o ? Math.min(100, Math.round(o.used / o.total * 100)) : 0, b = r.companyName;
  return /* @__PURE__ */ a(P, { open: d, onOpenChange: g, children: [
    /* @__PURE__ */ e(E, { asChild: !0, children: /* @__PURE__ */ e(
      w,
      {
        variant: "ghost",
        hideLabel: !0,
        label: n.t("ai.credits.title"),
        icon: k,
        pressed: d
      }
    ) }),
    /* @__PURE__ */ a(
      j,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          b && /* @__PURE__ */ a("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ e(
              y,
              {
                name: r.companyName ?? "",
                src: r.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ e(f, { tag: "span", className: "font-medium", children: r.companyName ?? "" }),
              r.planName && /* @__PURE__ */ e(
                f,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: r.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: [
            /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3", children: [
              s && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ e("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                  /* @__PURE__ */ e("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                ] }),
                /* @__PURE__ */ e("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ e("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                ] })
              ] }),
              c && /* @__PURE__ */ e("span", { className: "text-sm text-f1-foreground-secondary", children: n.t("ai.credits.creditsError") }),
              !s && !c && o && /* @__PURE__ */ a(N, { children: [
                /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ e("span", { className: "text-base font-medium text-f1-foreground", children: n.t("ai.credits.title") }),
                  /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground-secondary", children: n.t("ai.credits.creditsLeft", {
                    total: Math.max(
                      0,
                      o.total - o.used
                    ).toLocaleString()
                  }) })
                ] }),
                /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ e(
                  F.div,
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${h}%`,
                      backgroundImage: "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
                      backgroundSize: "300% 100%"
                    },
                    animate: {
                      backgroundPosition: ["0% 0%", "100% 0%"]
                    },
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: 1 / 0,
                      repeatType: "reverse"
                    }
                  }
                ) }) }),
                /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                  /* @__PURE__ */ e("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: n.t("ai.credits.monthlyCredits") })
                ] })
              ] })
            ] }),
            r.upgradePlanUrl && /* @__PURE__ */ a("div", { className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3", children: [
              /* @__PURE__ */ e("span", { children: n.t("ai.credits.needMoreCredits") }),
              /* @__PURE__ */ e(
                O,
                {
                  variant: "outlinePromote",
                  href: r.upgradePlanUrl,
                  label: n.t("ai.credits.upgradePlan"),
                  icon: C
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  q as CreditsPopover
};
