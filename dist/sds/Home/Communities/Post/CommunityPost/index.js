import { jsxs as r, jsx as e, Fragment as b } from "react/jsx-runtime";
import { F0AvatarIcon as O } from "../../../../../components/avatars/F0AvatarIcon/index.js";
import { F0AvatarPerson as j } from "../../../../../components/avatars/F0AvatarPerson/index.js";
import { Reactions as _ } from "../../../../../kits/Social/Reactions/index.js";
import { Dropdown as B } from "../../../../../experimental/Navigation/Dropdown/index.js";
import U from "../../../../../icons/app/Comment.js";
import S from "../../../../../icons/app/EllipsisHorizontal.js";
import "../../../../../icons/app/Menu.js";
import $ from "../../../../../icons/app/Person.js";
import { getDisplayDateBasedOnDuration as ee } from "../../../../../lib/date.js";
import { useI18n as le } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { withSkeleton as oe } from "../../../../../lib/skeleton.js";
import { cn as p, focusRing as H } from "../../../../../lib/utils.js";
import { Skeleton as i } from "../../../../../ui/skeleton.js";
import { useId as q, useRef as re, useState as A, useEffect as g } from "react";
import { PostDescription as L } from "../PostDescription/index.js";
import { PostEvent as V } from "../PostEvent/index.js";
import { isVideo as se } from "./video.js";
import { F0Link as u } from "../../../../../components/F0Link/F0Link.js";
import { F0Button as ne } from "../../../../../components/F0Button/F0Button.js";
const ie = ({
  describedBy: s,
  controls: l,
  expanded: d,
  onClick: x
}) => {
  const h = le();
  return /* @__PURE__ */ e("div", { className: "text-base text-f1-foreground", children: /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: p(
        "inline cursor-pointer rounded-none border-0 bg-transparent p-0 text-base text-f1-foreground underline underline-offset-2 hover:text-f1-foreground-secondary",
        H()
      ),
      "aria-controls": l,
      "aria-describedby": s,
      "aria-expanded": d,
      onClick: x,
      children: h.actions.seeMore
    }
  ) });
}, te = ({
  id: s,
  author: l,
  group: d,
  createdAt: x,
  title: h,
  description: t,
  onClick: E,
  mediaUrl: c,
  event: N,
  counters: k,
  reactions: y,
  inLabel: M,
  comment: m,
  actions: G,
  dropdownItems: v,
  noReactionsButton: J = !1,
  descriptionExpandable: a = !1
}) => {
  const C = q(), D = q(), w = re(null), [P, z] = A(null), [K, F] = A(!1), Q = [k.views, k.comments].filter(Boolean).join(" · "), n = a && P?.id === s && P.description === t, T = !n, W = ee(x), X = () => {
    E(s);
  }, Y = (o) => {
    o.stopPropagation();
  }, f = l ? `${l.firstName} ${l.lastName}` : void 0, Z = (o) => {
    o.preventDefault(), o.stopPropagation(), t && z({ id: s, description: t });
  };
  return g(() => {
    n && w.current?.focus();
  }, [n]), g(() => {
    a || z(null);
  }, [a]), g(() => {
    const o = w.current;
    if (!a || !o || n) {
      F(!1);
      return;
    }
    const R = () => {
      F(
        o.scrollHeight > o.clientHeight
      );
    };
    if (R(), typeof ResizeObserver > "u") return;
    const I = new ResizeObserver(R);
    return I.observe(o), () => I.disconnect();
  }, [a, n, t]), /* @__PURE__ */ r(
    "div",
    {
      className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
      onClick: X,
      id: `community-post-${s}`,
      children: [
        /* @__PURE__ */ e("div", { className: "hidden md:block", children: l ? /* @__PURE__ */ e(
          u,
          {
            href: l.url || "#",
            title: f,
            stopPropagation: !0,
            children: /* @__PURE__ */ e(
              j,
              {
                firstName: l.firstName,
                lastName: l.lastName,
                src: l.avatarUrl
              }
            )
          }
        ) : /* @__PURE__ */ e(O, { icon: $ }) }),
        /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 flex-col gap-3", children: [
          /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-col gap-2", children: [
            /* @__PURE__ */ r("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-1", children: [
                l ? /* @__PURE__ */ r(b, { children: [
                  /* @__PURE__ */ e(
                    u,
                    {
                      href: l.url,
                      className: "block md:hidden",
                      title: f,
                      stopPropagation: !0,
                      children: /* @__PURE__ */ e("span", { className: "flex items-center", children: /* @__PURE__ */ e(
                        j,
                        {
                          firstName: l.firstName,
                          lastName: l.lastName,
                          src: l.avatarUrl,
                          size: "xs"
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ e(
                    u,
                    {
                      href: l.url,
                      title: f,
                      className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                      stopPropagation: !0,
                      children: f
                    }
                  )
                ] }) : /* @__PURE__ */ e("div", { className: "block md:hidden", children: /* @__PURE__ */ e(O, { icon: $, size: "sm" }) }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: p(
                      "text-f1-foreground-secondary",
                      !l && "capitalize"
                    ),
                    children: M
                  }
                ),
                /* @__PURE__ */ e(
                  u,
                  {
                    onClick: d.onClick,
                    title: d.title,
                    className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                    stopPropagation: !0,
                    href: "#",
                    children: d.title
                  }
                )
              ] }),
              /* @__PURE__ */ r("div", { className: "flex flex-row gap-2", children: [
                /* @__PURE__ */ r("div", { className: "hidden flex-row gap-2 md:flex", children: [
                  G?.map((o) => /* @__PURE__ */ e(
                    ne,
                    {
                      hideLabel: !o.label,
                      ...o.icon && { icon: o.icon },
                      variant: "outline",
                      size: "md",
                      onClick: o.onClick,
                      label: o.label ?? "",
                      title: o.label ?? ""
                    },
                    o.label
                  )),
                  v?.length && /* @__PURE__ */ e(
                    B,
                    {
                      items: v,
                      icon: S,
                      size: "sm"
                    }
                  )
                ] }),
                /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(
                  B,
                  {
                    items: [
                      {
                        label: m.label,
                        onClick: m.onClick
                      },
                      ...v ?? []
                    ],
                    icon: S,
                    size: "sm"
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ e("span", { className: "-mt-3 text-sm text-f1-foreground-secondary", children: W }),
            /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-col gap-1 text-f1-foreground", children: [
              /* @__PURE__ */ e(
                "p",
                {
                  id: C,
                  className: p(
                    "text-xl font-semibold",
                    "line-clamp-2 break-words"
                  ),
                  children: h
                }
              ),
              t && /* @__PURE__ */ r(b, { children: [
                /* @__PURE__ */ e(
                  L,
                  {
                    ref: w,
                    id: D,
                    content: t,
                    collapsed: T,
                    tabIndex: n ? -1 : void 0,
                    className: p(n && H())
                  }
                ),
                a && K && !n && /* @__PURE__ */ e(
                  ie,
                  {
                    describedBy: C,
                    controls: D,
                    expanded: n,
                    onClick: Z
                  }
                )
              ] })
            ] })
          ] }),
          c && !N && /* @__PURE__ */ e("div", { className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]", children: se(c) ? /* @__PURE__ */ e(
            "video",
            {
              controls: !0,
              className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
              onClick: Y,
              children: /* @__PURE__ */ e("source", { src: c })
            }
          ) : /* @__PURE__ */ r(b, { children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: c,
                role: "presentation",
                loading: "lazy",
                className: "aspect-video h-full w-full object-cover"
              }
            ),
            /* @__PURE__ */ e(i, { className: "absolute inset-0 -z-10 h-full w-full" })
          ] }) }),
          N && /* @__PURE__ */ e("div", { className: "w-full md:max-w-[480px]", children: /* @__PURE__ */ e(V, { ...N }) }),
          /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: Q }),
          !J && /* @__PURE__ */ e(
            _,
            {
              items: y?.items ?? [],
              onInteraction: y?.onInteraction,
              action: {
                label: m.label,
                onClick: m.onClick,
                icon: U
              }
            }
          )
        ] })
      ]
    }
  );
}, ae = ({
  withEvent: s,
  withImage: l
}) => /* @__PURE__ */ r("div", { className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3", children: [
  /* @__PURE__ */ e("div", { className: "hidden md:block", children: /* @__PURE__ */ e(i, { className: "aspect-square w-8 rounded-full" }) }),
  /* @__PURE__ */ r("div", { className: "w-full", children: [
    /* @__PURE__ */ r("div", { className: "flex h-6 flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "md:hidden", children: /* @__PURE__ */ e(i, { className: "aspect-square w-4 rounded-full" }) }),
      /* @__PURE__ */ e(i, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(i, { className: "h-2.5 w-18 rounded-2xs" })
    ] }),
    /* @__PURE__ */ e(i, { className: "mt-3.5 h-3.5 w-1/5 rounded-2xs" }),
    /* @__PURE__ */ e("div", { className: "mt-3", children: /* @__PURE__ */ e(L.Skeleton, {}) }),
    l && !s && /* @__PURE__ */ e("div", { className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3", children: /* @__PURE__ */ e(i, { className: "h-full w-full rounded-2xs" }) }),
    s && /* @__PURE__ */ e("div", { className: "mt-3 w-full md:w-2/3", children: /* @__PURE__ */ e(V.Skeleton, {}) }),
    /* @__PURE__ */ r("div", { className: "mt-3 flex flex-row items-center gap-1 py-1", children: [
      /* @__PURE__ */ e(i, { className: "h-2.5 w-14 rounded-2xs" }),
      /* @__PURE__ */ e(i, { className: "h-2.5 w-14 rounded-2xs" })
    ] })
  ] })
] }), Re = oe(
  te,
  ae
);
export {
  te as BaseCommunityPost,
  Re as CommunityPost,
  ae as CommunityPostSkeleton
};
