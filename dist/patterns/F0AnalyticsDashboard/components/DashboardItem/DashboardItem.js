import { jsxs as o, jsx as e, Fragment as O } from "react/jsx-runtime";
import { useState as S } from "react";
import { ButtonInternal as E } from "../../../../components/F0Button/internal.js";
import { F0ButtonToggleGroup as P } from "../../../../components/F0ButtonToggleGroup/index.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import { RichTextDisplay as V } from "../../../../components/RichText/RichTextDisplay/index.js";
import q from "../../../../icons/app/Delete.js";
import W from "../../../../icons/app/Download.js";
import H from "../../../../icons/app/Ellipsis.js";
import J from "../../../../icons/app/InfoCircleLine.js";
import K from "../../../../icons/app/Maximize.js";
import "../../../../icons/app/Menu.js";
import L from "../../../../icons/app/Minimize.js";
import { cn as p } from "../../../../lib/utils.js";
import { DropdownMenu as Q, DropdownMenuTrigger as U, DropdownMenuContent as X, DropdownMenuGroup as h, DropdownMenuItem as u, DropdownMenuSub as Y, DropdownMenuSubTrigger as Z, DropdownMenuPortal as _, DropdownMenuSubContent as ee } from "../../../../ui/dropdown-menu.js";
import { useI18n as re } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEmptyState as oe } from "../../../../components/OneEmptyState/OneEmptyState.js";
import { OneEllipsis as x } from "../../../../lib/OneEllipsis/OneEllipsis.js";
function Ne({
  title: b,
  description: t,
  isLoading: d,
  error: w,
  onRetry: g,
  skeleton: R,
  children: $,
  actions: F = [],
  editMode: z,
  handleDelete: v,
  itemId: N,
  chartTypeOptions: l,
  explanation: s,
  isFullscreen: i = !1,
  onFullscreenChange: c
}) {
  const [m, B] = S(!1), [y, D] = S(!1), a = re(), T = (r) => {
    B(r), r || D(!1);
  }, C = F.filter(
    (r) => !("type" in r) || r.type === "item" || r.type === void 0
  ), k = C.length > 0, I = z && v && N, M = l && l.length > 0, f = !!s && s.trim().length > 0, j = !!c, A = k || I || M || f;
  return w ? /* @__PURE__ */ o("div", { className: "flex h-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary", children: [
    /* @__PURE__ */ o("div", { className: "flex shrink-0 flex-col p-4", children: [
      /* @__PURE__ */ e("h3", { className: "text-base font-medium text-f1-foreground", children: b }),
      t && /* @__PURE__ */ e("p", { className: "text-base text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ e("div", { className: "min-h-0 flex-1 overflow-auto", children: /* @__PURE__ */ e(
      oe,
      {
        variant: "critical",
        title: a.ai.dashboardItem.errorTitle,
        description: w.message,
        actions: g ? [
          {
            type: "default",
            label: a.ai.dashboardItem.retry,
            onClick: g
          }
        ] : []
      }
    ) })
  ] }) : /* @__PURE__ */ o(
    "div",
    {
      className: "group/dashitem flex h-full flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background",
      "aria-busy": d ? "true" : void 0,
      "aria-live": d ? "polite" : void 0,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-start px-4 py-3", children: [
          /* @__PURE__ */ o("div", { className: "flex min-w-0 flex-1 flex-col", children: [
            /* @__PURE__ */ e(
              x,
              {
                tag: "h3",
                className: "text-base font-semibold text-f1-foreground",
                children: b
              }
            ),
            t && /* @__PURE__ */ e(x, { className: "text-base text-f1-foreground-secondary", children: t })
          ] }),
          /* @__PURE__ */ o(
            "div",
            {
              className: p(
                "flex flex-shrink-0 gap-0.5",
                !i && `opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover/dashitem:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover/dashitem:sm:opacity-100 ${m ? "delay-0 sm:opacity-100" : ""}`
              ),
              children: [
                j && /* @__PURE__ */ e(
                  E,
                  {
                    label: i ? a.actions.collapse : a.actions.expand,
                    icon: i ? L : K,
                    variant: "ghost",
                    size: "md",
                    hideLabel: !0,
                    compact: !0,
                    onClick: () => c?.(!i)
                  }
                ),
                A && /* @__PURE__ */ o(
                  Q,
                  {
                    open: m,
                    onOpenChange: T,
                    children: [
                      /* @__PURE__ */ e(U, { asChild: !0, children: /* @__PURE__ */ e(
                        E,
                        {
                          label: a.actions.other,
                          icon: H,
                          variant: "ghost",
                          size: "md",
                          hideLabel: !0,
                          pressed: m,
                          compact: !0,
                          onClick: (r) => r.stopPropagation()
                        }
                      ) }),
                      /* @__PURE__ */ e(
                        X,
                        {
                          align: "end",
                          className: p("py-1", y && "w-96 max-w-[90vw]"),
                          children: y && f ? /* @__PURE__ */ e("div", { className: "px-3 py-2 text-base text-f1-foreground [&>div]:flex [&>div]:flex-col [&>div]:gap-2", children: /* @__PURE__ */ e(
                            V,
                            {
                              content: s,
                              format: "markdown"
                            }
                          ) }) : /* @__PURE__ */ o(O, { children: [
                            M && /* @__PURE__ */ o("div", { className: "mb-1 flex flex-col items-start gap-2 border-0 border-b border-solid border-f1-border-secondary p-3", children: [
                              /* @__PURE__ */ e(x, { className: "text-base font-medium text-f1-foreground-tertiary", children: a.ai.dashboardItem.chartType }),
                              /* @__PURE__ */ e(
                                P,
                                {
                                  items: l.map((r) => ({
                                    value: r.value,
                                    icon: r.icon,
                                    label: r.label
                                  })),
                                  value: l.find((r) => r.isActive)?.value,
                                  onChange: (r) => {
                                    l.find((G) => G.value === r)?.onSelect();
                                  },
                                  size: "lg",
                                  required: !0,
                                  withBorder: !1,
                                  fullWidth: !0
                                }
                              )
                            ] }),
                            f && /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(
                              u,
                              {
                                onSelect: (r) => {
                                  r.preventDefault(), D(!0);
                                },
                                children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ e(n, { icon: J }),
                                  /* @__PURE__ */ e("span", { className: "flex-1", children: a.ai.dashboardItem.dataExplanation })
                                ] })
                              }
                            ) }),
                            k && /* @__PURE__ */ e(h, { children: /* @__PURE__ */ o(Y, { children: [
                              /* @__PURE__ */ e(Z, { className: "mx-1 rounded-sm px-2", children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2 pr-2", children: [
                                /* @__PURE__ */ e(n, { icon: W }),
                                /* @__PURE__ */ e("span", { className: "flex-1 text-base font-medium", children: a.ai.dataDownload.title })
                              ] }) }),
                              /* @__PURE__ */ e(_, { children: /* @__PURE__ */ e(ee, { children: C.map((r) => /* @__PURE__ */ e(
                                u,
                                {
                                  onClick: r.onClick,
                                  children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                    r.icon && /* @__PURE__ */ e(n, { icon: r.icon }),
                                    /* @__PURE__ */ e("span", { className: "flex-1", children: r.label })
                                  ] })
                                },
                                r.label
                              )) }) })
                            ] }) }),
                            I && /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e(
                              u,
                              {
                                onClick: () => {
                                  i && c?.(!1), v(N);
                                },
                                className: p("text-f1-foreground-critical"),
                                children: /* @__PURE__ */ o("div", { className: "flex w-full flex-row items-center gap-2", children: [
                                  /* @__PURE__ */ e(n, { icon: q }),
                                  /* @__PURE__ */ e("span", { className: "flex-1", children: a.actions.delete })
                                ] })
                              }
                            ) })
                          ] })
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: "min-h-0 flex-1", children: d ? R : $ })
      ]
    }
  );
}
export {
  Ne as DashboardItem
};
