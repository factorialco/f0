import { jsxs as N, jsx as i } from "react/jsx-runtime";
import { forwardRef as L, useMemo as c, useState as T, useEffect as B } from "react";
import { ButtonInternal as E } from "../../../components/F0Button/internal.js";
import { granularityDefinitions as F } from "../../../components/OneCalendar/granularities/index.js";
import { isAfterOrEqual as O, isBeforeOrEqual as q } from "../../../components/OneCalendar/utils.js";
import M from "../../../icons/app/ChevronLeft.js";
import W from "../../../icons/app/ChevronRight.js";
import "../../../icons/app/Menu.js";
import { cn as g, focusRing as G } from "../../../lib/utils.js";
import { useI18n as U } from "../../../lib/providers/i18n/i18n-provider.js";
import { useL10n as $ } from "../../../lib/providers/l10n/l10n-provider.js";
import { F0Button as b } from "../../../components/F0Button/F0Button.js";
const H = L(
  ({
    value: o,
    compareToValue: a,
    onDateChange: v,
    disabled: D,
    error: R,
    className: w,
    highlighted: z,
    onClick: C,
    navigation: f,
    granularity: e,
    hideGoToCurrent: j,
    ...n
  }, P) => {
    const s = U(), x = $(), h = c(() => {
      if (!o || !o.value)
        return [s.date.selectDate];
      const r = e || F[o.granularity];
      return [
        o.value,
        Array.isArray(a) ? a[0] : a
      ].filter((t) => t !== void 0).sort((t, A) => t?.from.getTime() - A?.from.getTime()).map(
        (t) => r.toString(t, s, "long", x.locale)
      );
    }, [o, s, a, e, x.locale]), S = c(() => Object.values(h).join(" ⸱ "), [h]), p = (r) => {
      r && v?.(r);
    }, m = c(() => {
      if (n.minDate)
        return e?.toRange(n.minDate)?.from;
    }, [n.minDate, e]), d = c(() => {
      if (n.maxDate)
        return e?.toRange(n.maxDate)?.to;
    }, [n.maxDate, e]), [y, u] = T(null);
    B(() => {
      u(e?.toRange(/* @__PURE__ */ new Date()) ?? null);
      const r = () => {
        const t = e?.toRange(/* @__PURE__ */ new Date()) ?? null;
        t && O(t.from, m) && q(t.to || t.from, d) ? u(t) : u(null);
      }, k = setInterval(() => {
        r();
      }, 6e4);
      return r(), () => clearInterval(k);
    }, [e, m, d]);
    const l = o?.value ? e?.getPrevNext(o?.value, {
      min: m,
      max: d
    }) : void 0, I = () => {
      const r = e?.toRange(/* @__PURE__ */ new Date());
      r && v?.(r);
    };
    return /* @__PURE__ */ N(
      "div",
      {
        ref: P,
        className: g(
          "inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
          "[%>*] py-1",
          G("focus:ring-f1-border-hover"),
          D && "cursor-not-allowed bg-f1-background-secondary opacity-50",
          R && "ring-f1-border-critical-bold",
          w
        ),
        onClick: (r) => r.stopPropagation(),
        children: [
          /* @__PURE__ */ N(
            "div",
            {
              className: g(
                "flex flex-1 gap-1",
                f ? "justify-between" : "justify-center"
              ),
              children: [
                f && /* @__PURE__ */ i(
                  b,
                  {
                    size: "sm",
                    variant: "ghost",
                    icon: M,
                    label: "Previous",
                    hideLabel: !0,
                    disabled: !l?.prev,
                    onClick: () => p(l?.prev ?? !1)
                  }
                ),
                /* @__PURE__ */ i(
                  E,
                  {
                    fontSize: "md",
                    size: "sm",
                    variant: "ghost",
                    label: S,
                    onClick: C,
                    disabled: D,
                    style: { minWidth: e?.toStringMaxWidth() },
                    className: g(z && "bg-f1-background-secondary-hover")
                  }
                ),
                f && /* @__PURE__ */ i(
                  b,
                  {
                    variant: "ghost",
                    icon: W,
                    label: "Next",
                    hideLabel: !0,
                    size: "sm",
                    fontSize: "md",
                    disabled: !l?.next,
                    onClick: () => p(l?.next ?? !1)
                  }
                )
              ]
            }
          ),
          !j && y && /* @__PURE__ */ i("div", { className: "border-l-solid flex-shrink-0 border-[#f00]", children: /* @__PURE__ */ i(
            b,
            {
              fontSize: "md",
              size: "sm",
              variant: "ghost",
              label: s.date.granularities[o?.granularity ?? "day"]?.currentDate,
              onClick: I
            }
          ) })
        ]
      }
    );
  }
);
H.displayName = "DatePickerTrigger";
export {
  H as DatePickerTrigger
};
