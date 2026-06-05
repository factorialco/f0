import { jsx as o, jsxs as b } from "react/jsx-runtime";
import { useMemo as w } from "react";
import { cn as S, focusRing as p } from "../../../lib/utils.js";
import { Counter as v } from "../../../ui/Counter/index.js";
import { Preset as x } from "../../../ui/OnePreset/index.js";
import { OverflowList as h } from "../../../ui/OverflowList/index.js";
import { Skeleton as c } from "../../../ui/skeleton.js";
import { isPresetSelected as C } from "../internal/isPresetSelected.js";
import { Await as j } from "../../../lib/Await/Await.js";
const A = 4, R = ({
  presets: n,
  value: l,
  onPresetsChange: a,
  presetsLoading: k = !1
}) => {
  const m = w(() => l != null && typeof l == "object" && !Array.isArray(l) ? l : {}, [l]), f = (e) => {
    const t = C(e, m);
    return { isSelected: t, handleClick: () => {
      a?.(t ? {} : { ...e.filter });
    } };
  }, N = (e, t, r = !0) => {
    const { isSelected: d, handleClick: s } = f(e), i = e.itemsCount?.(m);
    return /* @__PURE__ */ o(
      x,
      {
        label: e.label,
        selected: d,
        onClick: s,
        "data-visible": r,
        number: i
      },
      `${e.label}-${t}`
    );
  }, g = (e, t) => {
    const { isSelected: r, handleClick: d } = f(e), s = e.itemsCount?.(m);
    return /* @__PURE__ */ b(
      "button",
      {
        className: S(
          "flex w-full cursor-pointer items-center justify-between rounded-sm p-2 text-left font-medium text-f1-foreground hover:bg-f1-background-secondary",
          r && "bg-f1-background-selected hover:bg-f1-background-selected",
          p()
        ),
        onClick: d,
        "data-visible": !0,
        children: [
          e.label,
          s !== void 0 && /* @__PURE__ */ o(
            j,
            {
              resolve: s,
              fallback: /* @__PURE__ */ o(c, { className: "h-4 w-6" }),
              children: (i) => i !== void 0 && /* @__PURE__ */ o(
                v,
                {
                  value: i,
                  type: r ? "selected" : "default"
                }
              )
            }
          )
        ]
      },
      `${e.label}-${t}`
    );
  }, y = (e, t, r = !0) => /* @__PURE__ */ o(
    c,
    {
      className: "h-8 w-32 rounded-md",
      "data-visible": r
    },
    t
  ), I = (e, t) => /* @__PURE__ */ b(
    "div",
    {
      className: "flex w-full items-center justify-between rounded-sm p-2",
      "data-visible": !0,
      children: [
        /* @__PURE__ */ o(c, { className: "h-4 w-24" }),
        /* @__PURE__ */ o(c, { className: "h-4 w-6" })
      ]
    },
    t
  ), u = w(() => !n || n.length === 0 ? [] : n.filter(
    (e) => e && e.filter != null && typeof e.filter == "object" && !Array.isArray(e.filter)
  ), [n]);
  if (k) {
    const e = Array.from(
      { length: A },
      (t, r) => r
    );
    return /* @__PURE__ */ o(
      h,
      {
        items: e,
        renderListItem: y,
        renderDropdownItem: I,
        className: "min-w-0 flex-1"
      }
    );
  }
  return u.length > 0 && /* @__PURE__ */ o(
    h,
    {
      items: u,
      renderListItem: N,
      renderDropdownItem: g,
      className: "min-w-0 flex-1",
      min: 1
    }
  );
};
export {
  R as FiltersPresets
};
