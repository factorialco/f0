import { jsxs as r, jsx as e, Fragment as n } from "react/jsx-runtime";
import { f1Colors as f } from "../../../../../packages/core/dist/index.js";
import { CalendarEvent as u } from "../../../../../experimental/Widgets/Content/CalendarEvent/index.js";
import { formatTime as m } from "../../../../../lib/date.js";
import { withSkeleton as p } from "../../../../../lib/skeleton.js";
import { Skeleton as o } from "../../../../../ui/skeleton.js";
import { isVideo as g } from "../CommunityPost/video.js";
const h = ({
  title: t,
  mediaUrl: l,
  place: a,
  date: d
}) => {
  let s = m(d);
  const i = (c) => {
    c.stopPropagation();
  };
  return a && (s = `${s} · ${a}`), /* @__PURE__ */ r("div", { className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow dark:bg-f1-background-tertiary", children: [
    l && /* @__PURE__ */ e("div", { className: "relative aspect-video w-full overflow-hidden rounded-md", children: g(l) ? /* @__PURE__ */ e(
      "video",
      {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: i,
        children: /* @__PURE__ */ e("source", { src: l })
      }
    ) : /* @__PURE__ */ r(n, { children: [
      /* @__PURE__ */ e(
        "img",
        {
          src: l,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }
      ),
      /* @__PURE__ */ e(o, { className: "absolute inset-0 h-full w-full" })
    ] }) }),
    /* @__PURE__ */ e(
      u,
      {
        title: t,
        description: s,
        color: f.special.highlight,
        isPending: !1,
        toDate: d,
        noBackground: !0
      }
    )
  ] });
}, b = () => /* @__PURE__ */ r(
  "div",
  {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 dark:bg-f1-background-tertiary",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    children: [
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(o, { className: "aspect-video h-full w-full rounded-lg" }) }),
      /* @__PURE__ */ r("div", { className: "flex h-full flex-row gap-3 p-2", children: [
        /* @__PURE__ */ e(o, { className: "w-1 shrink-0 self-stretch rounded-full" }),
        /* @__PURE__ */ r("div", { className: "flex grow flex-col gap-1.5 py-1", children: [
          /* @__PURE__ */ e(o, { className: "mt-px h-3 w-1/2" }),
          /* @__PURE__ */ e(o, { className: "mb-px h-3 w-1/4" })
        ] })
      ] })
    ]
  }
), j = p(h, b);
export {
  h as BasePostEvent,
  j as PostEvent,
  b as PostEventSkeleton
};
