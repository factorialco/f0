import { jsxs as a, jsx as e, Fragment as j } from "react/jsx-runtime";
import { Item as R } from "../../../../node_modules/.pnpm/@radix-ui_react-dropdown-menu@2.1.16_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@1_ylzjwukrbrzeggdpzvpwzctmwa/node_modules/@radix-ui/react-dropdown-menu/dist/index.js";
import { useState as N, useEffect as P, useCallback as B } from "react";
import { ButtonInternal as $ } from "../../../../components/F0Button/internal.js";
import { F0Icon as F } from "../../../../components/F0Icon/index.js";
import { ProductCard as E } from "../../../../sds/UpsellingKit/ProductCard/index.js";
import { Carousel as H } from "../../Carousel/index.js";
import O from "../../../../icons/app/AlertCircle.js";
import S from "../../../../icons/app/ChevronRight.js";
import T from "../../../../icons/app/Cross.js";
import I from "../../../../icons/app/Megaphone.js";
import { Image as W } from "../../../../lib/imageHandler.js";
import { Link as g } from "../../../../lib/linkHandler.js";
import { cn as b } from "../../../../lib/utils.js";
import { DropdownMenu as _, DropdownMenuTrigger as A, DropdownMenuPortal as G, DropdownMenuContent as q, DropdownMenuItem as J, DropdownMenuSeparator as K } from "../../../../ui/dropdown-menu.js";
import { Skeleton as h } from "../../../../ui/skeleton.js";
import { F0Button as v } from "../../../../components/F0Button/F0Button.js";
const ge = ({
  currentModule: r,
  label: o,
  getUpdates: t,
  updatesPageUrl: l,
  emptyScreen: i,
  errorScreen: n,
  onOpenChange: f = () => {
  },
  onHeaderClick: m = () => {
  },
  onItemClick: s = () => {
  },
  hasUnread: M = !1,
  crossSelling: p
}) => {
  const [u, x] = N("idle"), [c, y] = N(null), [U, ...V] = c ?? [], [k, C] = N(!1);
  P(() => {
    y(null), x("idle");
  }, [r]);
  const D = B(async () => {
    try {
      x("fetching");
      const d = await t();
      x("idle"), y(d);
    } catch {
      x("error");
    }
  }, [t]);
  return /* @__PURE__ */ a(
    _,
    {
      open: k,
      onOpenChange: async (d) => {
        C(d), d && c === null && D(), f(d);
      },
      children: [
        /* @__PURE__ */ e(A, { asChild: !0, children: /* @__PURE__ */ e(
          $,
          {
            variant: "outline",
            icon: I,
            hideLabel: !0,
            label: o,
            pressed: k,
            append: M && /* @__PURE__ */ e(w, { className: "absolute -right-0.5 -top-[1px]" })
          }
        ) }),
        /* @__PURE__ */ e(G, { children: /* @__PURE__ */ a(
          q,
          {
            sideOffset: 8,
            collisionPadding: 20,
            align: "end",
            hideWhenDetached: !0,
            className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
            style: { maxHeight: "min(90vh, 760px)" },
            children: [
              /* @__PURE__ */ e(Y, { title: o, url: l, onClick: m }),
              u === "fetching" && /* @__PURE__ */ e(re, {}),
              /* @__PURE__ */ a("div", { className: "scrollbar-macos flex-1 overflow-y-auto", children: [
                u === "idle" && c !== null && c.length === 0 && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(Z, { ...i, buttonUrl: l }) }),
                u === "idle" && c !== null && c.length > 0 && /* @__PURE__ */ a("div", { className: "px-1", children: [
                  /* @__PURE__ */ e(
                    Q,
                    {
                      ...U,
                      onClick: s
                    }
                  ),
                  c.length > 1 && /* @__PURE__ */ e(j, { children: /* @__PURE__ */ e("div", { className: "pb-1", children: V.map((d, L) => /* @__PURE__ */ e(
                    X,
                    {
                      ...d,
                      onClick: s
                    },
                    L
                  )) }) })
                ] }),
                u === "error" && /* @__PURE__ */ e("div", { className: "p-2 pt-0", children: /* @__PURE__ */ e(
                  ee,
                  {
                    ...n,
                    onClick: () => {
                      D();
                    }
                  }
                ) })
              ] }),
              u === "idle" && p && p.isVisible && /* @__PURE__ */ e(
                te,
                {
                  isVisible: p.isVisible,
                  onClose: p.onClose,
                  crossSelling: p,
                  onDropdownClose: () => C(!1)
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}, Q = ({
  title: r,
  href: o,
  mediaUrl: t,
  unread: l,
  updated: i,
  onClick: n
}) => {
  const f = "flex flex-col items-stretch w-full", m = t?.includes(".mp4");
  return /* @__PURE__ */ e(
    R,
    {
      onClick: n,
      asChild: !0,
      className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      children: /* @__PURE__ */ a(
        g,
        {
          href: o,
          target: "_blank",
          referrerPolicy: "no-referrer",
          rel: "noopener noreferrer",
          className: b(f, "text-f1-foreground no-underline"),
          children: [
            /* @__PURE__ */ e("div", { className: "px-1 pt-1", children: m ? /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              "video",
              {
                src: t,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0
              }
            ) }) : /* @__PURE__ */ e("div", { className: "overflow-clip rounded border border-solid border-f1-border-secondary", children: /* @__PURE__ */ e(
              W,
              {
                fetchPriority: "high",
                src: t,
                className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
              }
            ) }) }),
            /* @__PURE__ */ e("div", { className: "py-2 pl-2 pr-4", children: /* @__PURE__ */ a("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ a("div", { className: "flex-1 *:text-base", children: [
                /* @__PURE__ */ e("h3", { className: "font-medium", children: r }),
                /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: i })
              ] }),
              l && /* @__PURE__ */ e(w, { className: "mt-1.5" })
            ] }) })
          ]
        }
      )
    }
  );
}, X = ({
  title: r,
  href: o,
  updated: t,
  unread: l = !1,
  onClick: i
}) => {
  const n = b("flex flex-col items-stretch gap-3 w-full");
  return /* @__PURE__ */ e(J, { asChild: !0, className: n, onClick: i, children: /* @__PURE__ */ e(
    g,
    {
      href: o,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: b(
        n,
        "text-f1-foreground no-underline hover:cursor-pointer"
      ),
      children: /* @__PURE__ */ a("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ a("div", { className: "flex-1 *:text-base", children: [
          /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: r }),
          /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: t })
        ] }),
        l && /* @__PURE__ */ e(w, { className: "mt-1.5" })
      ] })
    }
  ) });
}, Y = ({
  title: r,
  url: o,
  onClick: t
}) => /* @__PURE__ */ a(
  "a",
  {
    href: o,
    className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
    children: [
      /* @__PURE__ */ e("h2", { className: "text-base font-medium", children: r }),
      /* @__PURE__ */ e(
        v,
        {
          variant: "outline",
          size: "sm",
          icon: S,
          label: r,
          hideLabel: !0,
          onClick: t
        }
      )
    ]
  }
), z = ({
  icon: r,
  button: o,
  title: t,
  description: l,
  iconWrapperClassName: i
}) => /* @__PURE__ */ e("div", { className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12", children: /* @__PURE__ */ a("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ e(
    "div",
    {
      className: b(
        "grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block",
        i
      ),
      children: r
    }
  ),
  /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-1 text-center *:text-base", children: [
    /* @__PURE__ */ e("h3", { className: "text-pretty font-medium", children: t }),
    /* @__PURE__ */ e("p", { className: "font-normal text-f1-foreground-secondary", children: l })
  ] }),
  o
] }) }), Z = ({
  title: r,
  buttonText: o,
  buttonUrl: t,
  description: l
}) => /* @__PURE__ */ e(
  z,
  {
    title: r,
    description: l,
    icon: /* @__PURE__ */ e(F, { icon: I, size: "lg", className: "block" }),
    button: /* @__PURE__ */ e(g, { href: t, children: /* @__PURE__ */ e(v, { label: o }) })
  }
), ee = ({
  title: r,
  description: o,
  buttonText: t,
  onClick: l
}) => /* @__PURE__ */ e(
  z,
  {
    title: r,
    description: o,
    iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
    icon: /* @__PURE__ */ e(F, { icon: O, size: "lg" }),
    button: /* @__PURE__ */ e(v, { variant: "outline", label: t, onClick: l })
  }
), re = () => /* @__PURE__ */ e(
  "div",
  {
    className: "flex flex-col",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: /* @__PURE__ */ a("div", { className: "p-2", children: [
      /* @__PURE__ */ e(h, { className: "h-56 w-full rounded" }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(h, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(h, { className: "h-3 w-1/3" })
      ] }) }),
      /* @__PURE__ */ e("div", { className: "flex basis-1/3 flex-row justify-between gap-2 p-3", children: /* @__PURE__ */ a("div", { className: "flex flex-1 flex-col gap-2 py-1", children: [
        /* @__PURE__ */ e(h, { className: "h-3 w-2/3" }),
        /* @__PURE__ */ e(h, { className: "h-3 w-1/3" })
      ] }) })
    ] })
  }
), w = ({ className: r = "" }) => /* @__PURE__ */ e(
  "div",
  {
    "aria-hidden": "true",
    className: b("size-2 rounded bg-f1-background-selected-bold", r)
  }
), te = ({
  isVisible: r,
  onClose: o,
  crossSelling: t,
  onDropdownClose: l
}) => {
  const [i, n] = N(r);
  P(() => {
    n(r);
  }, [r]);
  const f = () => {
    n(!1), o && o();
  }, m = (s) => {
    n(!1), l(), s && s();
  };
  return i && /* @__PURE__ */ a(j, { children: [
    /* @__PURE__ */ e(K, {}),
    /* @__PURE__ */ a("div", { className: "px-1 pb-2", children: [
      /* @__PURE__ */ a("div", { className: "flex flex-row items-center justify-between px-3", children: [
        /* @__PURE__ */ e("p", { className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary", children: t?.sectionTitle }),
        o && /* @__PURE__ */ e("div", { className: "relative z-10 h-6 w-6", children: /* @__PURE__ */ e(
          v,
          {
            variant: "ghost",
            icon: T,
            size: "sm",
            hideLabel: !0,
            onClick: f,
            label: "Close"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(
        H,
        {
          columns: {
            default: 1
          },
          showDots: !0,
          showArrows: !1,
          children: t?.products.map((s) => /* @__PURE__ */ e(
            E,
            {
              ...s,
              isVisible: !0,
              trackVisibility: s.trackVisibility,
              onClick: () => m(s.onClick)
            },
            s.title
          ))
        }
      )
    ] })
  ] });
};
export {
  ge as ProductUpdates
};
