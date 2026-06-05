import { jsxs as u, Fragment as T, jsx as a } from "react/jsx-runtime";
import { useDeepCompareEffect as b } from "../../../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as F, useMemo as N } from "react";
import { NumberInputInternal as p } from "../../../../components/F0NumberInput/internal.js";
import { Switch as k } from "../../../../experimental/Forms/Fields/Switch/index.js";
import E from "../../../../icons/app/EqualGreater.js";
import O from "../../../../icons/app/EqualLess.js";
import R from "../../../../icons/app/Greater.js";
import q from "../../../../icons/app/Less.js";
import "../../../../icons/app/Menu.js";
import { useI18n as y } from "../../../../lib/providers/i18n/i18n-provider.js";
import { useL10n as j } from "../../../../lib/providers/l10n/l10n-provider.js";
import { F0Button as I } from "../../../../components/F0Button/F0Button.js";
function P({
  value: s,
  onChange: i,
  schema: c,
  isCompactMode: h
}) {
  const r = {
    mode: c.options?.modes?.[0] ?? "single",
    ...c.options
  }, l = y(), f = j(), x = () => {
    i(void 0);
  }, C = r.modes === void 0 || r.modes?.length > 1, [e, n] = F(
    s ?? {
      mode: "single",
      value: void 0
    }
  );
  b(() => {
    n(s);
  }, [s]);
  const w = (o) => {
    n(o ? {
      mode: "range",
      from: {
        value: e?.mode === "single" ? e?.value : e?.from?.value,
        closed: !0
      },
      to: {
        value: e?.mode === "single" ? e?.value : e?.to?.value,
        closed: !0
      }
    } : {
      mode: "single",
      value: e?.mode === "single" ? e?.value : e?.from?.value
    });
  }, g = (o, m) => {
    e?.mode === "range" && n({
      ...e,
      [o]: {
        ...e?.[o],
        closed: m
      }
    });
  }, v = (o, m) => {
    n((d) => d?.mode === "range" ? {
      ...d,
      [m]: {
        ...d?.[m] ?? {},
        value: o ?? void 0
      }
    } : {
      ...d ?? {
        mode: "single",
        value: void 0
      },
      value: o ?? void 0
    });
  };
  b(() => {
    e?.mode === "range" ? i({
      mode: "range",
      from: {
        value: e?.from?.value,
        closed: e?.from?.closed ?? !1
      },
      to: {
        value: e?.to?.value,
        closed: e?.to?.closed ?? !1
      }
    }) : i({
      mode: "single",
      value: e?.value
    });
  }, [e]);
  const t = N(() => ({
    from: {
      value: e?.mode === "range" ? e?.from?.value : e?.value,
      closed: e?.mode === "range" ? e?.from?.closed : !0
    },
    to: {
      value: e?.mode === "range" ? e?.to?.value : e?.value,
      closed: e?.mode === "range" ? e?.to?.closed : !0
    }
  }), [e]);
  return /* @__PURE__ */ u(T, { children: [
    /* @__PURE__ */ u("div", { className: "flex flex-col gap-2 space-y-4 overflow-x-hidden p-6", children: [
      /* @__PURE__ */ u("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ a("div", { className: "min-w-1/2 flex-1", children: /* @__PURE__ */ a(
          p,
          {
            label: e?.mode === "range" ? e?.from?.closed ? l.filters.number.greaterOrEqual : l.filters.number.greaterThan : l.filters.number.value,
            locale: f.locale,
            value: t.from.value,
            onChange: (o) => v(o, "from"),
            max: r.max,
            min: r.min,
            buttonToggle: e?.mode === "range" && r.openCloseToggle ? {
              label: [
                l.filters.number.greaterThan,
                l.filters.number.greaterOrEqual
              ],
              icon: [R, E],
              selected: t.from.closed,
              onChange: (o) => g("from", o)
            } : void 0
          }
        ) }),
        e?.mode === "range" && /* @__PURE__ */ a("div", { className: "min-w-1/2 flex-1", children: /* @__PURE__ */ a(
          p,
          {
            label: e?.to?.closed ? l.filters.number.lessOrEqual : l.filters.number.lessThan,
            locale: f.locale,
            value: t.to.value,
            onChange: (o) => v(o, "to"),
            max: r.max,
            min: r.min,
            buttonToggle: e?.mode === "range" && r.openCloseToggle ? {
              label: [
                l.filters.number.lessThan,
                l.filters.number.lessOrEqual
              ],
              icon: [q, O],
              selected: t.to.closed,
              onChange: (o) => g("to", o)
            } : void 0
          }
        ) })
      ] }),
      C && /* @__PURE__ */ a(
        k,
        {
          title: l.filters.number.rangeTitle,
          checked: e?.mode === "range",
          onCheckedChange: w
        }
      )
    ] }),
    !h && /* @__PURE__ */ a("div", { className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]", children: /* @__PURE__ */ a(
      I,
      {
        variant: "ghost",
        label: l.actions.clear,
        onClick: () => x(),
        disabled: !s,
        size: "sm"
      }
    ) })
  ] });
}
export {
  P as NumberFilter
};
