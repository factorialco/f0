import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as C, useRef as O, useEffect as j, useMemo as d } from "react";
import "../../../../node_modules/.pnpm/number-flow@0.5.8/node_modules/number-flow/dist/lite-BTIaQdTe.js";
import { N as D } from "../../../../node_modules/.pnpm/@number-flow_react@0.5.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@number-flow/react/dist/NumberFlow-client-48rw3j0J.js";
import { F0AvatarAlert as F } from "../../../../components/avatars/F0AvatarAlert/index.js";
import { F0ActionBar as z } from "../../../../components/F0ActionBar/index.js";
import { useI18n as I } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as R } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Button as E } from "../../../../components/F0Button/F0Button.js";
const T = ({ message: e }) => /* @__PURE__ */ c("div", { className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2", children: [
  /* @__PURE__ */ l(F, { type: "warning", size: "sm" }),
  /* @__PURE__ */ l("p", { className: "flex-1 font-medium text-f1-foreground-warning", children: e })
] });
function L(e) {
  const o = (t) => ({
    ...t,
    loading: !0,
    disabled: !0
  });
  return Array.isArray(e) ? e.length === 0 || !("items" in e[0]) ? e.map(o) : e.map((t) => ({
    ...t,
    items: t.items.map(o)
  })) : { ...e, items: e.items.map(o) };
}
const P = C(function({
  isOpen: o,
  primaryActions: t,
  secondaryActions: s,
  selectedNumber: i,
  onUnselect: p,
  warningMessage: r,
  allPagesSelection: g = !1,
  isAllItemsSelected: A = !1,
  totalItems: f,
  status: n
}, N) {
  const { t: x, ...m } = I(), h = g && A && f !== void 0, u = n === "loading" || n === "success", b = O(i ?? 0);
  j(() => {
    i && (b.current = i);
  }, [i]);
  const a = u && !i ? b.current : i, v = a === 1 ? m.status.selected.singular : m.status.selected.plural, w = n === "loading" ? "idle" : n, B = d(() => r || !t ? [] : n !== "loading" ? t : L(t), [t, n, r]), S = d(() => r || !s ? [] : n !== "loading" ? s : s.map((y) => ({ ...y, disabled: !0 })), [s, n, r]), k = d(() => !r && !a ? null : /* @__PURE__ */ c("div", { className: "flex w-full flex-col gap-2 sm:flex-row sm:items-center", children: [
    r && /* @__PURE__ */ l(T, { message: r }),
    !!a && /* @__PURE__ */ c("div", { className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0", children: [
      h ? /* @__PURE__ */ l("span", { className: "font-medium tabular-nums", children: x("status.selected.allItemsSelected", {
        total: f ?? 0
      }) }) : /* @__PURE__ */ c("span", { className: "flex items-center gap-1 font-medium tabular-nums", children: [
        /* @__PURE__ */ l(
          D,
          {
            value: a,
            className: "text-f1-foreground",
            spinTiming: {
              duration: 200,
              easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }
          }
        ),
        /* @__PURE__ */ l(R, { className: "text-f1-foreground", children: v })
      ] }),
      /* @__PURE__ */ l(
        E,
        {
          variant: "outline",
          label: m.actions.unselect,
          onClick: p,
          disabled: u,
          size: "sm"
        }
      )
    ] })
  ] }), [
    r,
    a,
    h,
    f,
    v,
    p,
    u,
    m.actions.unselect,
    x
  ]);
  return /* @__PURE__ */ l(
    z,
    {
      ref: N,
      isOpen: o,
      variant: "dark",
      status: w,
      leftContent: k,
      primaryActions: B,
      secondaryActions: S
    }
  );
});
P.displayName = "OneDataCollectionActionBar";
export {
  P as OneDataCollectionActionBar
};
