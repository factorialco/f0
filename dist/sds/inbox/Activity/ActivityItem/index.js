import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { useIntersectionObserver as h } from "../../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { F0AvatarIcon as v } from "../../../../components/avatars/F0AvatarIcon/index.js";
import x from "../../../../icons/app/Bell.js";
import "../../../../icons/app/Menu.js";
import { getDisplayDateBasedOnDuration as N } from "../../../../lib/date.js";
import { experimentalComponent as g } from "../../../../lib/experimental.js";
import { withSkeleton as b } from "../../../../lib/skeleton.js";
import { Skeleton as o } from "../../../../ui/skeleton.js";
const w = ({
  id: r,
  createdAt: a,
  title: s,
  description: t,
  icon: c,
  category: n,
  isUnread: i = !1,
  onClick: m,
  onVisible: f
}) => {
  const { ref: d } = h({
    threshold: 0.1,
    onChange(p) {
      p && f?.(r);
    }
  }), u = N(a, {
    yesterdayRelative: !1
  });
  return /* @__PURE__ */ l(
    "div",
    {
      ref: d,
      className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
      onClick: () => {
        m(r);
      },
      children: [
        /* @__PURE__ */ e(v, { icon: c ?? x }),
        /* @__PURE__ */ l("div", { className: "flex-1", children: [
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 font-medium text-f1-foreground",
              title: s,
              children: s
            }
          ),
          /* @__PURE__ */ e(
            "p",
            {
              className: "line-clamp-2 text-f1-foreground-secondary",
              title: t,
              children: t
            }
          ),
          /* @__PURE__ */ e("div", { className: "mt-1.5 flex flex-row", children: /* @__PURE__ */ e("p", { className: "text-f1-foreground-secondary", children: `${n} · ${u}` }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "ml-1", children: i && /* @__PURE__ */ e("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" }) })
      ]
    }
  );
}, y = () => /* @__PURE__ */ l("div", { className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3", children: [
  /* @__PURE__ */ e(o, { className: "size-9 rounded-md" }),
  /* @__PURE__ */ l("div", { className: "flex-1", children: [
    /* @__PURE__ */ e(o, { className: "mb-1 h-5 w-full" }),
    /* @__PURE__ */ e(o, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(o, { className: "mb-1 h-4 w-full" }),
    /* @__PURE__ */ e(o, { className: "mt-1.5 h-4 w-1/3" })
  ] })
] }), O = g(
  "ActivityItem",
  b(w, y)
);
export {
  O as ActivityItem,
  y as ActivityItemSkeleton,
  w as BaseActivityItem
};
