import { jsxs as m, jsx as e } from "react/jsx-runtime";
import g from "../../../../_virtual/sortBy.js";
import h from "../../../../_virtual/throttle.js";
import S from "react";
import { categorizeItemsByDate as v } from "../../../../lib/date.js";
import { experimentalComponent as O } from "../../../../lib/experimental.js";
import { withSkeleton as _ } from "../../../../lib/skeleton.js";
import { ActivityItem as k } from "../ActivityItem/index.js";
import { Section as n } from "./Section/index.js";
import { useI18n as p } from "../../../../lib/providers/i18n/i18n-provider.js";
const A = 3, b = ["today", "yesterday", "lastWeek", "lastMonth"], N = (o) => g(o, ([i]) => {
  const r = b.indexOf(i);
  return r === -1 ? -Number(i) : r - 4e3;
}), a = () => /* @__PURE__ */ e("div", { className: "-mx-2 h-px bg-f1-background-secondary" }), R = ({
  items: o,
  loadingMoreItems: i = !1,
  onClickItem: r,
  onEndReached: f,
  onEndReachedItemsThreshold: u = 5
}) => {
  const l = p(), c = v(o, "createdAt"), I = Object.values(c).slice().flatMap((t) => t.map((s) => s.id)).slice(-u), y = h((t) => {
    I.includes(t) && f?.();
  }, 1e3), d = N(
    Object.entries(c).filter(([t, s]) => !!s.length)
  );
  return /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 p-2", children: [
    d.map(([t, s], x) => /* @__PURE__ */ m(S.Fragment, { children: [
      /* @__PURE__ */ e(
        n,
        {
          title: t in l.date.groups ? l.date.groups[t] : t,
          items: s,
          onClickItem: r,
          onItemVisible: y
        }
      ),
      x !== d.length - 1 && /* @__PURE__ */ e(a, {})
    ] }, t)),
    i && new Array(A).fill(null).map((t, s) => /* @__PURE__ */ e(k.Skeleton, {}, s))
  ] });
}, L = () => {
  const o = p();
  return /* @__PURE__ */ m("div", { className: "flex flex-col gap-2 p-2", children: [
    /* @__PURE__ */ e(n.Skeleton, { title: o.date.groups.today, numItems: 1 }),
    /* @__PURE__ */ e(a, {}),
    /* @__PURE__ */ e(
      n.Skeleton,
      {
        title: o.date.groups.yesterday,
        numItems: 3
      }
    ),
    /* @__PURE__ */ e(a, {}),
    /* @__PURE__ */ e(
      n.Skeleton,
      {
        title: o.date.groups.lastMonth,
        numItems: 5
      }
    )
  ] });
}, U = O(
  "ActivityItemList",
  _(R, L)
);
export {
  U as ActivityItemList,
  L as ActivityItemListSkeleton,
  R as BaseActivityItemList
};
