import { jsxs as v, jsx as l } from "react/jsx-runtime";
import { useState as u, useMemo as K, useCallback as G, useEffect as C } from "react";
import { withDataTestId as Q } from "../../lib/data-testid/index.js";
import X from "../../icons/app/ChevronLeft.js";
import Y from "../../icons/app/ChevronRight.js";
import "../../icons/app/Menu.js";
import { cn as B } from "../../lib/utils.js";
import { Input as M } from "../../ui/input.js";
import { granularityDefinitions as $, getGranularityDefinitions as Z } from "./granularities/index.js";
import { WeekStartDay as ee } from "./types.js";
import { isActiveDate as te, toDateRange as j } from "./utils.js";
import { useI18n as ne } from "../../lib/providers/i18n/i18n-provider.js";
import { useL10n as oe } from "../../lib/providers/l10n/l10n-provider.js";
import { F0Button as U } from "../F0Button/F0Button.js";
const re = ["compact"], ye = (o) => {
  const a = $[o];
  if (!a)
    throw new Error(
      `Granularity simple definition for view ${o} not found`
    );
  return {
    toRangeString: a.toRangeString,
    toString: a.toString
  };
}, Se = (o) => {
  const a = $[o];
  if (!a)
    throw new Error(`Granularity definition ${o} not found`);
  return a;
}, ae = ({
  mode: o = "single",
  view: a = "month",
  onSelect: h,
  defaultMonth: y = /* @__PURE__ */ new Date(),
  defaultSelected: g = null,
  showNavigation: S = !0,
  showInput: P = !1,
  minDate: b,
  maxDate: k,
  compact: I = !1,
  weekStartsOn: W
}) => {
  const n = ne(), N = oe(), R = W ?? N.date?.weekStartsOn ?? ee.Monday, [f, d] = u(y), [p, H] = u(
    g
  ), [T, _] = u(1), t = K(() => Z(R)[a], [a, R]), V = G(
    (e) => {
      H(e), c(t.toRangeString(e, n));
      const r = t.getViewDateFromDate(
        e instanceof Date ? e : e?.from || e?.to || /* @__PURE__ */ new Date()
      );
      r !== t.getViewDateFromDate(f) && d(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only needs to be rebuilt when the granularity changes
    [t]
  );
  C(() => {
    V(g);
  }, [g]);
  const A = (e) => {
    const r = t.navigateUIView(f, e);
    _(e), d(r);
  }, q = () => t.label(f, n, N.locale), x = (e) => {
    e && (e = t.toRange(e), V(e), h?.(e));
  }, [i, c] = u({
    from: "",
    to: ""
  }), [E, J] = u({
    from: !1,
    to: !1
  }), w = (e) => {
    F(e, i);
  }, O = G(
    (e) => e ? te(e, t, {
      minDate: b,
      maxDate: k
    }) : !1,
    [t, b, k]
  ), F = (e, r) => {
    const s = t.fromString(r, n), m = !O(s?.[e]);
    J((D) => ({
      ...D,
      [e]: m
    })), m || x(s);
  };
  C(
    () => {
      const e = j(p);
      if (!e) return;
      const r = o === "range" ? t.toRange(e) : t.toRange(e.from);
      x(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we dont want to re-render when the granularity changes
    [t]
  ), C(() => {
    const e = j(p), { from: r, to: s } = t.toRangeString(
      e || { from: /* @__PURE__ */ new Date(), to: void 0 },
      n
    );
    c({
      from: r || "",
      to: s || ""
    });
  }, [t, p]);
  const L = (e, r) => {
    const s = i[e] ? t.fromString(i[e], n) : void 0, m = s ? t.navigate(s.from, r) : void 0;
    if (O(m)) {
      const D = {
        ...i,
        [e]: t.toRangeString(m, n).from
      };
      F(e, D), c(D);
    }
  };
  return /* @__PURE__ */ v("div", { className: "flex flex-col", children: [
    P && /* @__PURE__ */ v("div", { className: "mb-2 flex gap-2", children: [
      /* @__PURE__ */ l(
        M,
        {
          label: n.date.from,
          hideLabel: !0,
          error: !!E.from,
          value: i.from,
          placeholder: o === "range" ? n.date.from : n.date.date,
          onBlur: () => w("from"),
          onKeyDown: (e) => {
            e.key === "Enter" && w("from"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), L("from", e.key === "ArrowDown" ? -1 : 1));
          },
          onChange: (e) => c({ ...i, from: e })
        }
      ),
      o === "range" && /* @__PURE__ */ l(
        M,
        {
          label: n.date.to,
          hideLabel: !0,
          error: !!E.to,
          value: i.to,
          placeholder: n.date.to,
          onBlur: () => w("to"),
          onKeyDown: (e) => {
            e.key === "Enter" && w("to"), (e.key === "ArrowUp" || e.key === "ArrowDown") && (e.preventDefault(), L("to", e.key === "ArrowDown" ? -1 : 1));
          },
          onChange: (e) => c({ ...i, to: e })
        }
      )
    ] }),
    S && /* @__PURE__ */ v(
      "div",
      {
        className: B(
          "flex items-center justify-between",
          I ? "mx-2 pb-2" : "pb-3"
        ),
        children: [
          /* @__PURE__ */ l(
            "div",
            {
              className: B(
                "font-medium text-f1-foreground",
                I ? "text-md" : "text-lg"
              ),
              children: q()
            }
          ),
          /* @__PURE__ */ v("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(
              U,
              {
                onClick: () => A(-1),
                variant: "outline",
                label: n.navigation.previous,
                hideLabel: !0,
                icon: X,
                size: "sm"
              }
            ),
            /* @__PURE__ */ l(
              U,
              {
                onClick: () => A(1),
                variant: "outline",
                label: n.navigation.next,
                hideLabel: !0,
                icon: Y,
                size: "sm"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ l("div", { className: "relative", children: t.render({
      mode: o,
      selected: p,
      onSelect: x,
      month: f,
      onMonthChange: d,
      motionDirection: T,
      setViewDate: d,
      viewDate: f,
      minDate: b,
      maxDate: k,
      compact: I,
      weekStartsOn: R
    }) })
  ] });
}, z = (o) => {
  const a = re.reduce((h, y) => {
    const { [y]: g, ...S } = h;
    return S;
  }, o);
  return /* @__PURE__ */ l(ae, { ...a });
};
z.displayName = "OneCalendar";
const be = Q(z);
export {
  be as OneCalendar,
  ae as OneCalendarInternal,
  Se as getGranularityDefinition,
  ye as getGranularitySimpleDefinition
};
