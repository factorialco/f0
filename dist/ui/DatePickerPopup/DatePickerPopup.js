import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { useState as P, useEffect as w, useMemo as c } from "react";
import { F0Select as Y } from "../../components/F0Select/index.js";
import { getGranularityDefinitions as V } from "../../components/OneCalendar/granularities/index.js";
import { WeekStartDay as Z } from "../../components/OneCalendar/types.js";
import $ from "../../icons/app/ChevronLeft.js";
import "../../icons/app/Menu.js";
import { Popover as I, PopoverTrigger as ee, PopoverContent as te } from "../popover.js";
import { getCompareToValue as ne } from "./compareTo.js";
import { GranularitySelector as ae } from "./components/GranularitySelector.js";
import { PresetList as oe } from "./components/PresetList.js";
import { isSameDatePickerValue as M } from "./utils.js";
import { OneCalendar as re } from "../../components/OneCalendar/OneCalendar.js";
import { useI18n as le } from "../../lib/providers/i18n/i18n-provider.js";
import { useL10n as ie } from "../../lib/providers/l10n/l10n-provider.js";
import { F0Button as ce } from "../../components/F0Button/F0Button.js";
const L = "__custom__";
function be({
  onSelect: N,
  defaultValue: y,
  presets: l = [],
  granularities: S = ["day"],
  children: _,
  compareTo: D,
  defaultCompareTo: x,
  onCompareToChange: b,
  hideCalendarInput: G,
  value: m,
  asChild: j,
  weekStartsOn: B,
  ...s
}) {
  const i = le(), E = ie(), [t, k] = P(
    m || y
  ), f = B ?? E.date?.weekStartsOn ?? Z.Monday;
  w(() => {
    M(m, t) || k(m || y);
  }, [m, y]);
  const r = c(
    () => t?.granularity ?? "day",
    [t?.granularity]
  ), n = c(() => V(f)[r], [r, f]), F = c(() => n.calendarMode || "single", [n]), A = (e) => {
    C({
      value: n.toRange(e ?? void 0),
      granularity: r
    });
  }, C = (e) => {
    M(e, t) || (k(e), N?.(e));
  }, W = (e) => {
    T(e === L);
    const a = e ? l[+e] : void 0;
    if (!a) return;
    const h = V(f);
    C({
      value: h[a.granularity].toRange(
        typeof a.value == "function" ? a.value() : a.value
      ),
      granularity: a.granularity
    }), e !== L && s.onOpenChange?.(!1);
  }, [O, T] = P(!1), z = (e) => {
    C({
      value: t?.value,
      granularity: e
    });
  }, U = c(
    () => l.length > 0 && !O,
    [l, O]
  ), q = () => {
    T(!1);
  }, H = c(
    () => n.calendarView || "day",
    [n]
  ), [g, R] = P(x || void 0), v = c(() => {
    const e = (D ?? {})[r] || [];
    if (!t?.value)
      return [];
    const a = t.value, h = e.map((u, K) => {
      const p = typeof u.value == "function" ? u.value(n.toRange(a)) : ne(
        n.toRange(a),
        u.value.delta,
        u.value.units
      ), Q = Array.isArray(p) ? p.map((X) => n.toString(X, i)).join(", ") : n.toString(p, i);
      return {
        label: u.label,
        value: (K + 1).toString(),
        // This leaves index 0 spot vacant for the 'none' option.
        description: Q,
        dateValue: p
      };
    });
    return h.length === 0 ? [] : [
      {
        label: i.date.none,
        value: "0",
        description: "",
        dateValue: void 0
      },
      ...h
    ];
  }, [D, t, n, r]);
  w(() => {
    R(x || "0");
  }, [r, x]);
  const J = (e) => {
    R(e);
  };
  return w(() => {
    b?.(
      g ? v[+g]?.dateValue : void 0
    );
  }, [g, b, v]), /* @__PURE__ */ d(I, { open: s.open, onOpenChange: s.onOpenChange, children: [
    /* @__PURE__ */ o(ee, { asChild: j, children: _ }),
    /* @__PURE__ */ o(te, { className: "w-full overflow-auto", align: "start", children: U ? /* @__PURE__ */ o(
      oe,
      {
        presets: l,
        date: t,
        onSelect: W
      }
    ) : /* @__PURE__ */ d("div", { className: "flex gap-4", children: [
      (l.length > 0 || S.length > 1) && /* @__PURE__ */ d("div", { children: [
        l.length > 0 && /* @__PURE__ */ o(
          ce,
          {
            icon: $,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: q
          }
        ),
        S.length > 1 && /* @__PURE__ */ o(
          ae,
          {
            granularities: S,
            value: r,
            onChange: z
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "min-w-[300px] flex-1", children: [
        /* @__PURE__ */ o(
          re,
          {
            showInput: !G,
            mode: F,
            view: H,
            onSelect: A,
            defaultSelected: t?.value,
            minDate: s.minDate,
            maxDate: s.maxDate,
            weekStartsOn: f
          }
        ),
        v.length > 0 && /* @__PURE__ */ d("div", { className: "mt-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ o("div", { className: "text-gray-500 text-sm", children: i.date.compareTo }),
          /* @__PURE__ */ o(
            Y,
            {
              label: i.date.compareTo,
              hideLabel: !0,
              placeholder: i.date.compareTo,
              options: v.map((e) => ({
                label: e.label,
                value: e.value,
                description: e.description ?? ""
              })),
              onChange: J,
              value: g
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  be as DatePickerPopup
};
