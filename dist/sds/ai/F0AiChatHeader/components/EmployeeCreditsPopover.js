import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { useState as t, useCallback as y } from "react";
import { F0AvatarCompany as w } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { ButtonInternal as k } from "../../../../components/F0Button/internal.js";
import "../../../../icons/app/Menu.js";
import E from "../../../../icons/app/Sliders.js";
import { useReducedMotion as I } from "../../../../lib/a11y.js";
import { Popover as L, PopoverTrigger as M, PopoverContent as O } from "../../../../ui/popover.js";
import { motion as P } from "../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as j } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as u } from "../../../../lib/OneEllipsis/OneEllipsis.js";
const A = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function _({
  employeeCredits: r
}) {
  const o = j(), s = I(), [d, g] = t(!1), [i, c] = t(!1), [f, l] = t(!1), [n, p] = t(null), h = y(
    (m) => {
      g(m), m && r?.fetchUsage && (c(!0), l(!1), r.fetchUsage().then((v) => {
        p(v), l(!1);
      }).catch(() => {
        l(!0);
      }).finally(() => {
        c(!1);
      }));
    },
    [r]
  );
  if (!r) return null;
  const x = !!r.companyName, b = n && n.total > 0 ? Math.min(100, Math.round(n.used / n.total * 100)) : 0, N = n ? Math.max(0, n.total - n.used) : 0;
  return /* @__PURE__ */ a(L, { open: d, onOpenChange: h, children: [
    /* @__PURE__ */ e(M, { asChild: !0, children: /* @__PURE__ */ e(
      k,
      {
        variant: "ghost",
        hideLabel: !0,
        label: o.t("ai.credits.title"),
        icon: E,
        pressed: d
      }
    ) }),
    /* @__PURE__ */ a(
      O,
      {
        side: "bottom",
        align: "end",
        alignOffset: -68,
        sideOffset: 4,
        className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
        children: [
          x && /* @__PURE__ */ a("div", { className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground", children: [
            /* @__PURE__ */ e(
              w,
              {
                name: r.companyName ?? "",
                src: r.companyLogoUrl,
                size: "lg"
              }
            ),
            /* @__PURE__ */ a("div", { className: "flex min-w-0 flex-col", children: [
              /* @__PURE__ */ e(u, { tag: "span", className: "font-medium", children: r.companyName ?? "" }),
              r.planName && /* @__PURE__ */ e(
                u,
                {
                  tag: "span",
                  className: "text-sm font-medium text-f1-foreground-secondary",
                  children: r.planName
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-col rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-2 p-3", children: [
            i && /* @__PURE__ */ a(
              "div",
              {
                className: "flex flex-col gap-2",
                "aria-busy": "true",
                "aria-live": "polite",
                children: [
                  /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ e("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }),
                    /* @__PURE__ */ e("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
                  /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ e("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }),
                    /* @__PURE__ */ e("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })
                  ] })
                ]
              }
            ),
            f && /* @__PURE__ */ e("span", { className: "text-sm text-f1-foreground-secondary", children: o.t("ai.credits.creditsError") }),
            !i && !f && n && /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ a("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-base font-medium text-f1-foreground", children: o.t("ai.credits.employeeCredits") }),
                /* @__PURE__ */ e("span", { className: "font-medium text-f1-foreground-secondary", children: o.t("ai.credits.creditsLeft", {
                  total: N.toLocaleString()
                }) })
              ] }),
              /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", children: /* @__PURE__ */ e(
                P.div,
                {
                  className: "h-full rounded-full",
                  style: {
                    width: `${b}%`,
                    backgroundImage: A,
                    backgroundSize: "300% 100%"
                  },
                  animate: s ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
                  transition: {
                    duration: s ? 0 : 4,
                    ease: "linear",
                    repeat: s ? 0 : 1 / 0,
                    repeatType: "reverse"
                  }
                }
              ) }) }),
              /* @__PURE__ */ a("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ e("div", { className: "h-2 w-2 rounded-full bg-f1-border" }),
                /* @__PURE__ */ e("span", { className: "text-sm tabular-nums text-f1-foreground-secondary", children: o.t("ai.credits.monthlyCredits") })
              ] })
            ] })
          ] }) })
        ]
      }
    )
  ] });
}
export {
  _ as EmployeeCreditsPopover
};
