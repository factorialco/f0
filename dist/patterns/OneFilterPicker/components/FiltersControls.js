import { jsxs as s, jsx as e, Fragment as ee } from "react/jsx-runtime";
import { useControllableState as te } from "../../../node_modules/.pnpm/@radix-ui_react-use-controllable-state@1.2.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.js";
import { useState as B, useContext as re, useRef as P, useEffect as j, useMemo as F, useId as ie } from "react";
import { ButtonInternal as v } from "../../../components/F0Button/internal.js";
import { FilterPickerInternal as le } from "../../F0FilterPickerContent/internal.js";
import R from "../../../icons/app/ArrowLeft.js";
import w from "../../../icons/app/Filter.js";
import "../../../icons/app/Menu.js";
import { Popover as oe, PopoverTrigger as ne, PopoverContent as ae } from "../../../ui/popover.js";
import { getClearedFiltersValue as se } from "../internal/getClearedFiltersValue.js";
import { getActiveFilterKeys as V } from "../internal/getActiveFilterKeys.js";
import { FilterContent as z } from "./FilterContent.js";
import { FilterList as E } from "./FilterList.js";
import { F0DialogContext as ce } from "../../F0Dialog/components/F0DialogProvider.js";
import { AnimatePresence as K } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as x } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { useI18n as de } from "../../../lib/providers/i18n/i18n-provider.js";
import { getFilterType as M } from "../filterTypes/utils.js";
import { F0Button as A } from "../../../components/F0Button/F0Button.js";
const D = 388;
function He({
  filters: t,
  value: d,
  onChange: T,
  isOpen: U,
  onOpenChange: _,
  hideLabel: q,
  mode: m = "default",
  displayCounter: G = !1
}) {
  const W = Object.keys(t)[0] ?? null, [a, p] = B(m === "compact" ? null : W), l = de(), u = re(ce), $ = u.portalContainer && (u.position === "center" || u.position === "fullscreen") ? u.portalContainer : void 0, [r, L] = te({
    prop: U,
    defaultProp: !1,
    onChange: _
  }), S = P(r);
  j(() => {
    S.current = r;
  }, [r]);
  const C = P(!1), f = (o) => {
    const i = S.current;
    if (!C.current) {
      if (i) {
        C.current = !0, L(!1), setTimeout(() => {
          C.current = !1;
        }, 150);
        return;
      }
      L(o);
    }
  }, [n, b] = B(d);
  j(() => {
    b(d);
  }, [d]);
  const N = (o, i) => {
    b((c) => ({
      ...c,
      [o]: i
    }));
  }, h = () => {
    T(n), f(!1);
  }, J = () => {
    b(se(t));
  }, H = () => {
    a ? p(null) : (T(n), f(!1));
  }, Q = () => {
    b(d), f(!1);
  }, X = () => {
    H();
  };
  j(() => {
    const o = () => Object.entries(n || {}).find(([i, c]) => t[i] ? !M(t[i].type).isEmpty(c, {
      schema: t[i],
      i18n: l
    }) : !1);
    if (r && m === "default") {
      const i = o();
      if (i)
        p(i[0]);
      else {
        const c = Object.keys(t)[0];
        p(c);
      }
    }
  }, [r]);
  const Y = F(() => Object.entries(t).reduce((i, [c, y]) => {
    const O = M(y.type);
    return Math.max(i, O?.formHeight || D);
  }, 0), [t]), g = ie(), k = F(
    () => V(t, n, l),
    [t, n, l]
  ), Z = F(() => {
    const o = V(t, d, l).length;
    if (o !== 0)
      return o;
  }, [t, d, l]), I = F(() => k.length > 0 ? l.t("filters.activeFilters", {
    filters: k.map((o) => t[o].label).join(", ")
  }) : void 0, [k, t]);
  if (m === "inline") {
    const o = !!Object.values(n).length;
    return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ s("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          v,
          {
            variant: "outline",
            label: l.filters.label,
            icon: w,
            pressed: r,
            onClick: () => f(!r),
            "aria-controls": r ? g : void 0,
            hideLabel: !0,
            tooltip: I
          }
        ),
        o && /* @__PURE__ */ e("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })
      ] }),
      /* @__PURE__ */ e(K, { mode: "popLayout", propagate: !1, children: r && /* @__PURE__ */ e(
        x.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          transition: { type: "spring", duration: 0.3, bounce: 0 },
          className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
          children: /* @__PURE__ */ s("div", { className: "flex h-full flex-col flex-1 min-h-0 max-h-full", children: [
            /* @__PURE__ */ s("div", { className: "flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-2 py-1.5", children: [
              /* @__PURE__ */ e(
                v,
                {
                  variant: "ghost",
                  icon: R,
                  label: l.filters.label,
                  hideLabel: !0,
                  size: "sm",
                  onClick: Q
                }
              ),
              /* @__PURE__ */ e("span", { className: "text-base font-medium text-f1-foreground", children: l.filters.label })
            ] }),
            /* @__PURE__ */ s("div", { className: "flex flex-1 min-h-0 max-h-full", children: [
              /* @__PURE__ */ e(
                E,
                {
                  definition: t,
                  tempFilters: n,
                  selectedFilterKey: a,
                  onFilterSelect: (i) => p(i),
                  onClickApplyFilters: h
                }
              ),
              a && /* @__PURE__ */ e("div", { className: "flex-1 min-w-0 overflow-hidden", children: /* @__PURE__ */ e(
                z,
                {
                  selectedFilterKey: a,
                  definition: t,
                  tempFilters: n,
                  onFilterChange: N
                }
              ) })
            ] }),
            /* @__PURE__ */ e("div", { className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background", children: /* @__PURE__ */ e(
              A,
              {
                onClick: h,
                label: l.filters.applyFilters
              }
            ) })
          ] })
        }
      ) })
    ] });
  }
  if (m === "compact") {
    const o = !!Object.values(n).length, i = a ? l.t("filters.filteringBy", {
      label: t[a].label
    }) : l.t("filters.availableFilters"), c = /* @__PURE__ */ s("div", { className: "flex items-center gap-2 pl-1.5 py-1.5", children: [
      /* @__PURE__ */ e(
        A,
        {
          label: "Back",
          icon: R,
          hideLabel: !0,
          variant: "ghost",
          size: "sm",
          onClick: H
        }
      ),
      i
    ] }), y = /* @__PURE__ */ e(ee, { children: a && /* @__PURE__ */ e("div", { className: "sticky bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background", children: /* @__PURE__ */ e(
      A,
      {
        onClick: X,
        label: l.filters.applySelection
      }
    ) }) });
    return /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ s("div", { className: "relative", children: [
        /* @__PURE__ */ e(
          v,
          {
            variant: "outline",
            label: l.filters.label,
            icon: w,
            pressed: r,
            onClick: () => f(!r),
            "aria-controls": r ? g : void 0,
            hideLabel: !0,
            tooltip: I
          }
        ),
        o && /* @__PURE__ */ e("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })
      ] }),
      /* @__PURE__ */ e(K, { mode: "popLayout", propagate: !1, children: r && /* @__PURE__ */ e(
        x.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          transition: { type: "spring", duration: 0.3, bounce: 0 },
          className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
          children: /* @__PURE__ */ s("div", { className: "flex h-full flex-col transition-all flex-1 min-h-0 max-h-full", children: [
            c,
            /* @__PURE__ */ e("div", { className: "flex flex-1 min-h-0 max-h-full", children: a ? /* @__PURE__ */ e(
              x.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
                className: "h-full w-full bg-f1-background",
                children: /* @__PURE__ */ e(
                  z,
                  {
                    selectedFilterKey: a,
                    definition: t,
                    tempFilters: n,
                    onFilterChange: N,
                    isCompactMode: !0
                  }
                )
              },
              "filter-content"
            ) : /* @__PURE__ */ e(
              x.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
                className: "h-full w-full bg-f1-background",
                children: /* @__PURE__ */ e(
                  E,
                  {
                    definition: t,
                    tempFilters: n,
                    selectedFilterKey: a,
                    onFilterSelect: (O) => p(O),
                    onClickApplyFilters: h,
                    isCompactMode: !0
                  }
                )
              },
              "filter-list"
            ) }),
            y
          ] })
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ s(oe, { open: r, onOpenChange: f, modal: !0, children: [
    /* @__PURE__ */ e(ne, { asChild: !0, children: /* @__PURE__ */ e(
      v,
      {
        variant: "outline",
        label: l.filters.label,
        icon: w,
        pressed: r,
        hideLabel: q,
        "aria-controls": r ? g : void 0,
        counterValue: G ? Z : void 0
      }
    ) }),
    /* @__PURE__ */ e(
      ae,
      {
        className: "w-fit min-w-[600px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md",
        align: "start",
        side: "bottom",
        "aria-id": g,
        container: $,
        children: /* @__PURE__ */ e(
          le,
          {
            filters: t,
            tempFilters: n,
            selectedFilterKey: a,
            onFilterSelect: p,
            onFilterChange: N,
            onApply: h,
            onClear: J,
            height: Y || D
          }
        )
      }
    )
  ] }) });
}
export {
  He as FiltersControls
};
