import { jsx as t, jsxs as g } from "react/jsx-runtime";
import { useState as X, useRef as Y, useEffect as L, useMemo as T } from "react";
import { ScrollArea as Z } from "../../../../ui/scrollarea.js";
import { Spinner as F } from "../../../../ui/Spinner/index.js";
import { cn as O, focusRing as _ } from "../../../../lib/utils.js";
import { InFilterFlatOption as V } from "./components/InFilterFlatOption.js";
import { InFilterOptionRow as ee } from "./components/InFilterOptionRow.js";
import { optionMatchesSearch as te, collectNestedFilterKeys as le } from "./components/option-utils.js";
import { useLoadOptions as re, getCacheKey as se, cacheNestedLabel as ne, cacheLabel as j } from "./useLoadOptions.js";
import { F0SearchInput as ce } from "../../../../components/F0SearchInput/F0SearchInput.js";
import { useI18n as oe } from "../../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as ie } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import { F0Checkbox as ae } from "../../../../components/F0Checkbox/F0Checkbox.js";
function we({
  schema: c,
  value: r,
  onChange: y,
  isCompactMode: u,
  onFilterChange: S,
  allFiltersValue: f
}) {
  const o = oe(), [b, A] = X(""), v = Y(!0), { options: s, isLoading: d, error: z, loadOptions: B, loadMore: I } = re({
    schema: {
      ...c,
      type: "in"
    },
    search: b
  }), h = se(c);
  L(() => {
    if (!f || !s.length) return;
    const e = (n) => {
      for (const l of n)
        if (l.children) {
          const { filterKey: x, options: Q } = l.children, U = f[x] ?? [];
          for (const a of Q) {
            if (U.includes(a.value)) {
              const W = `${l.label} > ${a.label}`;
              ne(x, a.value, W), j(h, a.value, a.label);
            }
            a.children && e([a]);
          }
        }
    };
    e(s);
  }, [s, f, h]), L(() => {
    let e;
    return d ? v.current = !1 : e = setTimeout(() => {
      v.current = !0;
    }, 1e3), () => clearTimeout(e);
  }, [d]);
  const m = "source" in c.options;
  L(() => {
    A("");
  }, [c]);
  const p = b.toLowerCase(), i = T(
    () => m ? s : s.filter(
      (e) => te(e, p)
    ),
    [m, s, p]
  ), N = T(
    () => le(c.options),
    [c.options]
  ), k = T(
    () => N.reduce((e, n) => {
      const l = f?.[n];
      return e + (Array.isArray(l) ? l.length : 0);
    }, 0),
    [N, f]
  ), M = k > 0;
  if (d && !s.length)
    return /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-center py-4", children: /* @__PURE__ */ t(F, { size: "small" }) });
  if (z)
    return /* @__PURE__ */ g("div", { className: "text-f1-foreground-destructive flex w-full flex-col items-center justify-center gap-2 py-4", children: [
      /* @__PURE__ */ t("p", { className: "text-sm", children: o.filters.failedToLoadOptions }),
      /* @__PURE__ */ t(
        "button",
        {
          className: O(
            "text-f1-foreground-primary text-xs underline",
            _()
          ),
          onClick: () => {
            B(!0);
          },
          children: o.filters.retry
        }
      )
    ] });
  if (s.length === 0 && !m)
    return /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary", children: "No options available" });
  const P = s.length > 0 || m, E = i.length > 0 && i.every((e) => r.includes(e.value)), w = (r.length > 0 || M) && !E, q = () => {
    const n = [...r ?? []];
    i.forEach((l) => {
      n.includes(l.value) || (n.push(l.value), j(h, l.value, l.label));
    }), y(n);
  }, K = () => {
    y([]), S && N.forEach((e) => {
      S(e, []);
    });
  }, D = (e) => {
    w ? K() : e ? q() : K();
  }, G = () => {
    d || !I || !v.current || I();
  }, C = (e, n) => {
    const l = r.includes(e);
    l || j(h, e, n), y(
      l ? r.filter((x) => x !== e) : [...r, e]
    );
  }, R = r.length + k, H = `${R} ${R === 1 ? o.status.selected.singular : o.status.selected.plural}`.toLowerCase(), $ = i.some(
    (e) => !!e.children?.options.length
  ), J = !!p && $;
  return /* @__PURE__ */ g(
    "div",
    {
      className: "flex max-h-full w-full flex-col flex-1 min-h-0",
      role: "group",
      "aria-label": c.label,
      children: [
        P && /* @__PURE__ */ t("div", { className: "rounded-tr-xl p-2", children: /* @__PURE__ */ t(
          ce,
          {
            placeholder: o.filters.inFilter.searchPlaceholder,
            value: b,
            onChange: A,
            clearable: !0
          }
        ) }),
        /* @__PURE__ */ g(
          "div",
          {
            className: O(
              "flex w-full items-center justify-between gap-1 pb-1",
              u ? "px-2" : "px-3.5"
            ),
            children: [
              /* @__PURE__ */ t("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ t(ie, { className: "text-f1-foreground-secondary", children: H }) }),
              /* @__PURE__ */ t(
                ae,
                {
                  id: "select-all",
                  title: o.actions.selectAll,
                  checked: w || E,
                  indeterminate: w,
                  onCheckedChange: D,
                  presentational: !0,
                  hideLabel: !0
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ g(
          Z,
          {
            className: O(
              "[&>div]:pb-2",
              u && "px-1",
              u ? "max-h-[360px]" : "flex-1 min-h-0"
            ),
            onScrollBottom: G,
            scrollMargin: 50,
            children: [
              i.length === 0 && !d && /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-center py-4 text-sm text-f1-foreground-secondary", children: o.select.noResults }),
              $ ? i.map((e) => /* @__PURE__ */ t(
                ee,
                {
                  option: e,
                  isSelected: r.includes(e.value),
                  onToggle: () => C(e.value, e.label),
                  isCompactMode: u,
                  depth: 0,
                  onFilterChange: S,
                  allFiltersValue: f,
                  cacheKey: h,
                  searchTerm: p,
                  autoExpand: J
                },
                String(e.value)
              )) : i.map((e) => /* @__PURE__ */ t(
                V,
                {
                  option: e,
                  isSelected: r.includes(e.value),
                  onToggle: () => C(e.value, e.label),
                  isCompactMode: u
                },
                String(e.value)
              )),
              d && /* @__PURE__ */ t("div", { className: "flex w-full items-center justify-center py-4", children: /* @__PURE__ */ t(F, { size: "small" }) })
            ]
          }
        )
      ]
    }
  );
}
export {
  we as InFilter
};
