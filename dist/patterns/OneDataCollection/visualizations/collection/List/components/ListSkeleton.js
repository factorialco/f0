import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { cn as s } from "../../../../../../lib/utils.js";
import { Skeleton as l } from "../../../../../../ui/skeleton.js";
const w = ({
  source: d,
  fields: t,
  count: i = 5,
  isInitialLoading: a,
  className: c
}) => /* @__PURE__ */ e(
  "div",
  {
    className: s(
      "relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      a ? "mx-4 mt-2 rounded-t-xl" : "border-t-0",
      c
    ),
    children: Array.from({ length: i }).map((o, m) => /* @__PURE__ */ r(
      "div",
      {
        "data-testid": "skeleton-item",
        className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
        children: [
          /* @__PURE__ */ r("div", { className: "flex flex-1 flex-row items-center gap-2", children: [
            d.selectable && /* @__PURE__ */ e("div", { className: "z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ e(l, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ r("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
              /* @__PURE__ */ e(l, { className: "h-8 w-8 rounded-full" }),
              /* @__PURE__ */ r("div", { className: "flex flex-1 flex-col gap-1", children: [
                /* @__PURE__ */ e("header", { children: /* @__PURE__ */ e(l, { className: "h-5 w-32" }) }),
                /* @__PURE__ */ e("aside", { children: /* @__PURE__ */ r("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2", children: [
                  /* @__PURE__ */ e(l, { className: "h-4 w-20" }),
                  /* @__PURE__ */ e(l, { className: "h-4 w-24" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: t.map((f, n) => /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center px-0 py-1 md:p-3", children: /* @__PURE__ */ e(l, { className: "h-4 w-20" }) }) }, `skeleton-field-${n}`)) }),
          d.itemActions && /* @__PURE__ */ e("div", { className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", children: /* @__PURE__ */ e(l, { className: "h-6 w-6" }) }),
          d.selectable && /* @__PURE__ */ e(
            "div",
            {
              className: s(
                "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
                d.itemActions && "right-12"
              ),
              children: /* @__PURE__ */ e(l, { className: "h-4 w-4" })
            }
          )
        ]
      },
      `skeleton-item-${m}`
    ))
  }
);
export {
  w as ListSkeleton
};
