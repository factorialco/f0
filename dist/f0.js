import { C as v, L as ye, c as Ce, P as J, a as g, f as we, g as A, A as Ne, B as Le, b as Pe, d as Se, e as Fe, V as ke, h as D, i as Y, j as X, k as Te, l as K, S as Q, m as Z, n as Me, O as De, o as ee, p as Ie, q as Be, r as ae, s as Re, F as re, t as Oe, u as $e, v as Ee, D as _e, w as je, x as Ve, y as ze, z as te, E as L, U as se, G as Ae, H as He, I as H, J as qe, K as oe, M as We, N as Ge, Q as Ue, R as Je, T as Ye, W as Xe, X as Ke, Y as Qe, Z as Ze, _ as ea, $ as aa, a0 as ra } from "./hooks-BwgEsacf.js";
import { aB as rr, a1 as tr, aD as sr, aM as or, a2 as lr, a3 as nr, a4 as ir, a5 as dr, a6 as cr, a7 as ur, a8 as fr, a9 as mr, ab as gr, ac as pr, ad as hr, ae as vr, aI as xr, ag as br, ah as yr, ai as Cr, aj as wr, am as Nr, an as Lr, ao as Pr, ap as Sr, ar as Fr, af as kr, aq as Tr, al as Mr, aJ as Dr, aC as Ir, aw as Br, az as Rr, av as Or, aN as $r, au as Er, at as _r, aa as jr, ak as Vr, as as zr, ax as Ar, aE as Hr, aF as qr, aG as Wr, aO as Gr, ay as Ur, aH as Jr, aL as Yr, aA as Xr, aK as Kr } from "./hooks-BwgEsacf.js";
import { jsx as e, jsxs as c, Fragment as E } from "react/jsx-runtime";
import * as _ from "react";
import ta, { useState as x, forwardRef as y, createElement as q, useRef as le, useImperativeHandle as sa, Children as oa, useEffect as ne, createContext as la } from "react";
const Oa = {
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next"
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    copy: "Copy",
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected"
    }
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
  },
  toc: {
    search: "Search..."
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      kanban: "Kanban view",
      pagination: {
        of: "of"
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default"
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week",
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications",
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Write something here...",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection"
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, $a = v({
  name: "Link",
  type: "info"
}, ye), Ea = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var j = "Progress", V = 100, [na, _a] = Ce(j), [ia, da] = na(j), ie = _.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: t,
      value: s = null,
      max: o,
      getValueLabel: n = ca,
      ...i
    } = a;
    (o || o === 0) && !W(o) && console.error(ua(`${o}`, "Progress"));
    const d = W(o) ? o : V;
    s !== null && !G(s, d) && console.error(fa(`${s}`, "Progress"));
    const l = G(s, d) ? s : null, f = I(l) ? n(l, d) : void 0;
    return /* @__PURE__ */ e(ia, { scope: t, value: l, max: d, children: /* @__PURE__ */ e(
      J.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": I(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ue(l, d),
        "data-value": l ?? void 0,
        "data-max": d,
        ...i,
        ref: r
      }
    ) });
  }
);
ie.displayName = j;
var de = "ProgressIndicator", ce = _.forwardRef(
  (a, r) => {
    const { __scopeProgress: t, ...s } = a, o = da(de, t);
    return /* @__PURE__ */ e(
      J.div,
      {
        "data-state": ue(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...s,
        ref: r
      }
    );
  }
);
ce.displayName = de;
function ca(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ue(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function I(a) {
  return typeof a == "number";
}
function W(a) {
  return I(a) && !isNaN(a) && a > 0;
}
function G(a, r) {
  return I(a) && !isNaN(a) && a <= r && a >= 0;
}
function ua(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${V}\`.`;
}
function fa(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${V} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var fe = ie, ma = ce;
const me = _.forwardRef(({ className: a, value: r, ...t }, s) => e(fe, {
  ref: s,
  className: g("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...t,
  children: e(ma, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: t.color,
      transform: `translateX(-${100 - (r || 0)}%)`
    }
  })
}));
me.displayName = fe.displayName;
const ga = ({ value: a, max: r = 100, label: t, color: s }, o) => {
  const n = s ? A(s) : A("categorical-1"), i = a / r * 100;
  return c("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [e("div", {
      className: "flex-grow",
      children: e(me, {
        color: n,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${i.toFixed(1)}%`
      })
    }), t && e("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, pa = we(ga), ja = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Ne
), Va = v(
  {
    name: "BarChart",
    type: "info"
  },
  Le
), za = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Pe
), Aa = v(
  {
    name: "LineChart",
    type: "info"
  },
  Se
), Ha = v(
  {
    name: "PieChart",
    type: "info"
  },
  Fe
), qa = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ke
), Wa = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  pa
), $ = ({ count: a, list: r }) => {
  const [t, s] = x(!1), o = e(D, {
    label: `+${a}`
  });
  return r != null && r.length ? c(Y, {
    open: t,
    onOpenChange: s,
    children: [e(X, {
      asChild: !0,
      children: e("button", {
        className: Te("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), e(K, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: c(Q, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [r.map((n, i) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(D, {
            ...n
          })
        }, i)), e(Z, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : o;
};
$.displayName = "ChipCounter";
const ge = ({ chips: a, max: r = 4, remainingCount: t, layout: s = "compact" }) => {
  if (s === "fill")
    return e(De, {
      items: a,
      renderListItem: (l) => e(D, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => e($, {
        count: (t ?? 0) + l,
        list: t ? void 0 : a.slice(a.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = a.slice(0, r), n = a.slice(r), i = t ?? a.length - r, d = i > 0;
  return c("div", {
    className: "flex items-center gap-2",
    children: [o.map((l, f) => e(D, {
      ...l
    }, f)), d && e($, {
      count: i,
      list: t ? void 0 : n
    })]
  });
};
ge.displayName = "F0ChipList";
const Ga = Me("F0ChipList", ge), O = ee({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), ha = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, z = y(({ content: a, variant: r, align: t, className: s, as: o, ellipsis: n, noEllipsisTooltip: i, markdown: d, ...l }, f) => {
  const m = o ?? ha[r ?? "body"];
  if (n !== void 0)
    return e(Ie, {
      ref: f,
      lines: typeof n == "number" ? n : 1,
      noTooltip: i,
      tag: m,
      className: g(O({
        variant: r,
        align: t
      }), s),
      markdown: d,
      ...l,
      children: a
    });
  if (d) {
    const b = Be(a);
    return q(m, {
      ...l,
      className: g(O({
        variant: r,
        align: t
      }), s),
      ref: f,
      dangerouslySetInnerHTML: {
        __html: b
      }
    });
  }
  return q(m, {
    ...l,
    className: g(O({
      variant: r,
      align: t
    }), s),
    ref: f
  }, a);
});
z.displayName = "Text";
const va = y((a, r) => e(z, {
  ref: r,
  variant: "heading",
  ...a
}));
va.displayName = "F0Heading";
const xa = y((a, r) => e(z, {
  ref: r,
  markdown: a.markdown ?? !0,
  ...a
}));
xa.displayName = "F0Text";
const ba = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ya = y(function({ widgets: r, children: t }, s) {
  const o = le(null);
  sa(s, () => o.current);
  const n = oa.toArray(r).filter((i) => !!i).map((i, d) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: i
  }, d));
  return e(ae, {
    layout: "home",
    children: c("div", {
      ref: o,
      className: "@container",
      children: [c("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(Re, {
          columns: ba,
          showArrows: !1,
          children: n
        }), e("main", {
          children: t
        })]
      }), c("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [e("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: n.slice(0, 3)
        }), e("main", {
          className: "col-span-2",
          children: t
        }), e("div", {
          className: "flex flex-1 flex-col gap-5",
          children: n.slice(3)
        })]
      })]
    })
  });
}), Ca = y(function({ children: r, sideContent: t, mainColumnPosition: s = "left", sticky: o = !1 }, n) {
  return e("div", {
    ref: n,
    className: "h-full",
    children: c("div", {
      className: g("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: g("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", s === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(wa, {
        sticky: o,
        className: g("order-1", s === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), wa = ({ children: a, className: r }) => e("aside", {
  className: g("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), Na = ee({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), pe = ta.forwardRef(({ children: a, variant: r, className: t, ...s }, o) => e(ae, {
  layout: "standard",
  children: e("section", {
    ref: o,
    className: g("relative flex-1 overflow-auto", t),
    ...s,
    children: e("div", {
      className: g(Na({
        variant: r
      })),
      children: a
    })
  })
}));
pe.displayName = "StandardLayout";
const Ua = v({
  name: "StandardLayout",
  type: "layout"
}, pe), Ja = v({
  name: "TwoColumnLayout",
  type: "layout"
}, Ca), Ya = v({
  name: "HomeLayout",
  type: "layout"
}, ya), La = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((r, t) => e(Pa, {
    text: r
  }, t))
}), Pa = ({ text: a }) => c("div", {
  className: "flex flex-row items-start gap-2",
  children: [e($e, {
    icon: Ee,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), he = y(({ title: a, image: r, benefits: t, actions: s, withShadow: o = !0, module: n, moduleName: i, tag: d }, l) => c("div", {
  ref: l,
  className: g("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
  children: [e("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: e("img", {
      src: r,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), c("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [c("div", {
      className: "flex flex-col gap-5",
      children: [c("div", {
        className: "flex flex-col gap-2",
        children: [c("div", {
          className: "flex flex-row items-center gap-2",
          children: [n && e(re, {
            module: n
          }), i && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: i
          })]
        }), d && e("div", {
          className: "flex justify-start",
          children: e(Oe, {
            icon: d.icon,
            text: d.label
          })
        }), e("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: a
        })]
      }), e(La, {
        benefits: t
      })]
    }), s && e("div", {
      className: "flex gap-3",
      children: s
    })]
  })]
}));
he.displayName = "ProductBlankslate";
function Sa({ isOpen: a, onClose: r, title: t, children: s, module: o, portalContainer: n }) {
  const [i, d] = x(a);
  return ne(() => {
    d(a);
  }, [a]), e(_e, {
    open: i,
    onOpenChange: (f) => {
      d(f), f || r();
    },
    modal: !0,
    children: c(je, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: n,
      children: [c("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [c(Ve, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && e(re, {
            module: o,
            size: "lg"
          }), t]
        }), e(ze, {
          variant: "outline",
          icon: te,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), c(Q, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [s, e(Z, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Xa({ isOpen: a, onClose: r, title: t, image: s, benefits: o, errorMessage: n, successMessage: i, loadingState: d, nextSteps: l, closeLabel: f, primaryAction: m, modalTitle: b, modalModule: P, secondaryAction: u, portalContainer: C, tag: F }) {
  const [B, k] = x(a), [w, N] = x(null), [S, p] = x(!1), T = async () => {
    if (m != null && m.onClick) {
      p(!0);
      try {
        await m.onClick(), k(!1), N("success");
      } catch {
        N("error");
      } finally {
        p(!1);
      }
    }
  }, M = () => {
    k(!1), r == null || r();
  }, R = S;
  return c(E, {
    children: [e(Sa, {
      isOpen: B,
      onClose: M,
      title: b,
      module: P,
      portalContainer: C,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(he, {
          title: t,
          image: s,
          benefits: o,
          withShadow: !1,
          tag: F,
          actions: c("div", {
            className: "flex gap-3",
            children: [m && e(L, {
              variant: m.variant,
              label: R ? d.label : m.label,
              icon: m.icon || void 0,
              onClick: T,
              loading: m.loading,
              size: m.size
            }), u && e(L, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), w && e(se, {
      open: !0,
      onClose: () => {
        M(), N(null);
      },
      success: w === "success",
      errorMessage: n,
      successMessage: i,
      nextSteps: l,
      closeLabel: f,
      portalContainer: C
    })]
  });
}
function Fa({ mediaUrl: a, title: r, description: t, onClose: s, dismissible: o, width: n, trackVisibility: i, actions: d, showConfirmation: l = !0 }) {
  const [f, m] = x(!1), b = () => {
    m(!0), s && s();
  };
  ne(() => {
    i && i(!f);
  }, [i, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return e(E, {
    children: f ? null : c(Ae, {
      style: {
        width: n
      },
      className: "relative bg-f1-background p-1",
      children: [c(He, {
        children: [o && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(L, {
            variant: "ghost",
            icon: te,
            size: "sm",
            hideLabel: !0,
            onClick: b,
            label: "Close"
          })
        }), c("div", {
          children: [e("div", {
            children: a && (P ? e("video", {
              src: a,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : e("img", {
              src: a,
              alt: r,
              className: "h-full w-full rounded-md"
            }))
          }), c("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [e(H, {
              className: "text-lg font-medium",
              children: r
            }), e(H, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), d && e(qe, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? e(oe, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: l && u.showConfirmation,
          variant: u.variant
        }, u.label) : e(L, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const ka = y(function({ primaryAction: r, secondaryAction: t, ...s }, o) {
  const n = (l) => l.variant === "promote" ? e(oe, {
    label: l.label,
    onRequest: async () => {
      await l.onClick();
    },
    errorMessage: l.errorMessage,
    successMessage: l.successMessage,
    loadingState: l.loadingState,
    nextSteps: l.nextSteps,
    closeLabel: l.closeLabel,
    showIcon: l.showIcon,
    showConfirmation: l.showConfirmation,
    variant: l.variant
  }) : e(L, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
  return c(We, {
    ref: o,
    ...s,
    primaryAction: i,
    secondaryAction: d,
    children: [(r == null ? void 0 : r.variant) === "promote" && n(r), (t == null ? void 0 : t.variant) === "promote" && n(t)]
  });
});
ka.displayName = "UpsellingBanner";
function Ka({ isOpen: a, setIsOpen: r, label: t, variant: s = "promote", size: o = "md", showIcon: n = !0, side: i = "right", align: d = "center", icon: l = Ge, mediaUrl: f, title: m, description: b, width: P = "300px", trackVisibility: u, actions: C, onClick: F, hideLabel: B = !1 }) {
  const [k, w] = x(!1), [N, S] = x(null), [p, T] = x(null), M = (h) => {
    r(h), F && F();
  }, R = async (h) => {
    if (h.type === "upsell") {
      T(h);
      try {
        await h.onClick(), h.showConfirmation && (w(!0), S("success"));
      } catch {
        w(!0), S("error");
      }
    }
  }, ve = () => {
    S(null), w(!1), T(null), r(!1);
  }, xe = a && !k, be = C == null ? void 0 : C.map((h) => h.type === "upsell" ? {
    ...h,
    onClick: () => R(h)
  } : h);
  return c(E, {
    children: [c(Y, {
      open: xe,
      onOpenChange: M,
      children: [e(X, {
        asChild: !0,
        children: e(L, {
          variant: s,
          label: t,
          size: o,
          icon: n ? l : void 0,
          onClick: () => r(a),
          hideLabel: B
        })
      }), e(K, {
        side: i,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(Fa, {
          mediaUrl: f,
          title: m,
          description: b,
          onClose: () => r(!1),
          dismissible: !1,
          width: P,
          trackVisibility: u,
          actions: be,
          showConfirmation: !1
        })
      })]
    }), (p == null ? void 0 : p.type) === "upsell" && p.showConfirmation && N && e(se, {
      open: !0,
      onClose: ve,
      success: N === "success",
      errorMessage: p.errorMessage,
      successMessage: p.successMessage,
      nextSteps: p.nextSteps,
      closeLabel: p.closeLabel,
      portalContainer: null
    })]
  });
}
const Ta = la(null), Ma = ({ children: a, fullScreen: r = !0 }) => {
  const t = le(null), [s, o] = x(t.current);
  return ra(() => {
    o(t.current);
  }, []), e(Ta.Provider, {
    value: {
      element: s
    },
    children: e("div", {
      ref: t,
      id: "f0-layout",
      className: g({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    })
  });
}, Da = ({ children: a }) => e(aa, {
  reducedMotion: "user",
  children: a
}), Qa = ({ children: a, layout: r, link: t, privacyModeInitiallyEnabled: s, image: o, i18n: n, l10n: i, isDev: d = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: f = !1 }) => e(Da, {
  children: e(Ue, {
    isDev: d,
    showExperimentalWarnings: f,
    children: e(Je, {
      ...i,
      children: e(Ye, {
        ...n,
        children: e(Xe, {
          ...t,
          children: e(Ma, {
            ...r,
            children: e(Ke, {
              children: e(Qe, {
                initiallyEnabled: s,
                children: e(Ze, {
                  ...o,
                  children: e(ea, {
                    handler: l,
                    children: a
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), U = (a) => `datacollection-${a}`, Za = {
  get: async (a) => JSON.parse(
    localStorage.getItem(U(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(U(a), JSON.stringify(r));
  }
};
export {
  ja as AreaChart,
  rr as Await,
  Va as BarChart,
  L as Button,
  za as CategoryBarChart,
  tr as CopyButton,
  sr as DndProvider,
  or as EmojiImage,
  lr as F0Avatar,
  nr as F0AvatarAlert,
  ir as F0AvatarCompany,
  dr as F0AvatarDate,
  cr as F0AvatarEmoji,
  ur as F0AvatarFile,
  fr as F0AvatarIcon,
  mr as F0AvatarList,
  re as F0AvatarModule,
  gr as F0AvatarPerson,
  pr as F0AvatarTeam,
  hr as F0Card,
  vr as F0Checkbox,
  Ga as F0ChipList,
  xr as F0EventCatcherProvider,
  va as F0Heading,
  $e as F0Icon,
  Qa as F0Provider,
  br as F0TagAlert,
  yr as F0TagBalance,
  Cr as F0TagCompany,
  wr as F0TagDot,
  Nr as F0TagList,
  Lr as F0TagPerson,
  Oe as F0TagRaw,
  Pr as F0TagStatus,
  Sr as F0TagTeam,
  xa as F0Text,
  Fr as GROUP_ID_SYMBOL,
  Ya as HomeLayout,
  Aa as LineChart,
  $a as Link,
  kr as OneFilterPicker,
  Ha as PieChart,
  Qe as PrivacyModeProvider,
  he as ProductBlankslate,
  Tr as ProductCard,
  Xa as ProductModal,
  Fa as ProductWidget,
  Wa as ProgressBarChart,
  Ua as StandardLayout,
  Mr as TagCounter,
  Ja as TwoColumnLayout,
  se as UpsellRequestResponseDialog,
  ka as UpsellingBanner,
  oe as UpsellingButton,
  Ka as UpsellingPopover,
  qa as VerticalBarChart,
  Ea as avatarVariants,
  Dr as buildTranslations,
  Ir as createAtlaskitDriver,
  Br as createDataSourceDefinition,
  Za as dataCollectionLocalStorageHandler,
  Oa as defaultTranslations,
  Me as experimental,
  Rr as getAnimationVariants,
  Or as getDataSourcePaginationType,
  $r as getEmojiLabel,
  Er as isInfiniteScrollPagination,
  _r as isPageBasedPagination,
  jr as modules,
  Vr as tagDotColors,
  zr as useData,
  Ar as useDataSource,
  Hr as useDndEvents,
  qr as useDraggable,
  Wr as useDroppableList,
  Gr as useEmojiConfetti,
  Ur as useGroups,
  Jr as usePrivacyMode,
  Yr as useReducedMotion,
  Xr as useSelectable,
  Kr as useXRay
};
