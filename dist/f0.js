import { C as v, L as be, c as ye, P as U, a as h, f as Ce, g as z, A as we, B as Ne, b as Le, d as Pe, e as Se, V as Fe, h as M, i as J, j as Y, k as ke, l as X, S as K, m as Q, n as Te, O as De, o as Z, p as Me, q as ee, r as Ie, F as ae, s as Be, t as Re, u as Oe, D as $e, v as Ee, w as _e, x as je, y as re, z as N, U as te, E as Ve, G as ze, H as A, I as Ae, J as se, K as He, M as qe, N as We, Q as Ge, R as Ue, T as Je, X as Ye, W as Xe, Y as Ke, Z as Qe, _ as Ze, $ as ea } from "./hooks-wjVk_fPE.js";
import { aA as ar, a0 as rr, aC as tr, aL as sr, a1 as or, a2 as lr, a3 as nr, a4 as ir, a5 as dr, a6 as cr, a7 as ur, a8 as fr, aa as mr, ab as pr, ac as gr, ad as hr, aH as vr, af as xr, ag as br, ah as yr, ai as Cr, al as wr, am as Nr, an as Lr, ao as Pr, aq as Sr, ae as Fr, ap as kr, ak as Tr, aI as Dr, aB as Mr, av as Ir, ay as Br, au as Rr, aM as Or, at as $r, as as Er, a9 as _r, aj as jr, ar as Vr, aw as zr, aD as Ar, aE as Hr, aF as qr, aN as Wr, ax as Gr, aG as Ur, aK as Jr, az as Yr, aJ as Xr } from "./hooks-wjVk_fPE.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import aa, { useState as x, forwardRef as b, createElement as ra, useRef as oe, useImperativeHandle as ta, Children as sa, useEffect as le, createContext as oa } from "react";
const Ra = {
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
}, Oa = v({
  name: "Link",
  type: "info"
}, be), $a = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var _ = "Progress", j = 100, [la, Ea] = ye(_), [na, ia] = la(_), ne = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: t,
      value: o = null,
      max: s,
      getValueLabel: n = da,
      ...i
    } = a;
    (s || s === 0) && !H(s) && console.error(ca(`${s}`, "Progress"));
    const d = H(s) ? s : j;
    o !== null && !q(o, d) && console.error(ua(`${o}`, "Progress"));
    const l = q(o, d) ? o : null, f = I(l) ? n(l, d) : void 0;
    return /* @__PURE__ */ e(na, { scope: t, value: l, max: d, children: /* @__PURE__ */ e(
      U.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": I(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ce(l, d),
        "data-value": l ?? void 0,
        "data-max": d,
        ...i,
        ref: r
      }
    ) });
  }
);
ne.displayName = _;
var ie = "ProgressIndicator", de = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: t, ...o } = a, s = ia(ie, t);
    return /* @__PURE__ */ e(
      U.div,
      {
        "data-state": ce(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...o,
        ref: r
      }
    );
  }
);
de.displayName = ie;
function da(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ce(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function I(a) {
  return typeof a == "number";
}
function H(a) {
  return I(a) && !isNaN(a) && a > 0;
}
function q(a, r) {
  return I(a) && !isNaN(a) && a <= r && a >= 0;
}
function ca(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function ua(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ue = ne, fa = de;
const fe = E.forwardRef(({ className: a, value: r, ...t }, o) => e(ue, {
  ref: o,
  className: h("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...t,
  children: e(fa, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: t.color,
      transform: `translateX(-${100 - (r || 0)}%)`
    }
  })
}));
fe.displayName = ue.displayName;
const ma = ({ value: a, max: r = 100, label: t, color: o }, s) => {
  const n = o ? z(o) : z("categorical-1"), i = a / r * 100;
  return c("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [e("div", {
      className: "flex-grow",
      children: e(fe, {
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
}, pa = Ce(ma), _a = v(
  {
    name: "AreaChart",
    type: "info"
  },
  we
), ja = v(
  {
    name: "BarChart",
    type: "info"
  },
  Ne
), Va = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Le
), za = v(
  {
    name: "LineChart",
    type: "info"
  },
  Pe
), Aa = v(
  {
    name: "PieChart",
    type: "info"
  },
  Se
), Ha = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Fe
), qa = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  pa
), O = ({ count: a, list: r }) => {
  const [t, o] = x(!1), s = e(M, {
    label: `+${a}`
  });
  return r != null && r.length ? c(J, {
    open: t,
    onOpenChange: o,
    children: [e(Y, {
      asChild: !0,
      children: e("button", {
        className: ke("inline-flex flex-shrink-0 items-center"),
        children: s
      })
    }), e(X, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: c(K, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [r.map((n, i) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(M, {
            ...n
          })
        }, i)), e(Q, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : s;
};
O.displayName = "ChipCounter";
const me = ({ chips: a, max: r = 4, remainingCount: t, layout: o = "compact" }) => {
  if (o === "fill")
    return e(De, {
      items: a,
      renderListItem: (l) => e(M, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (l) => e(O, {
        count: (t ?? 0) + l,
        list: t ? void 0 : a.slice(a.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const s = a.slice(0, r), n = a.slice(r), i = t ?? a.length - r, d = i > 0;
  return c("div", {
    className: "flex items-center gap-2",
    children: [s.map((l, f) => e(M, {
      ...l
    }, f)), d && e(O, {
      count: i,
      list: t ? void 0 : n
    })]
  });
};
me.displayName = "F0ChipList";
const Wa = Te("F0ChipList", me), W = Z({
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
}), ga = {
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
}, V = b(({ content: a, variant: r, align: t, className: o, as: s, ellipsis: n, noEllipsisTooltip: i, ...d }, l) => {
  const f = s ?? ga[r ?? "body"];
  return n !== void 0 ? e(Me, {
    ref: l,
    lines: typeof n == "number" ? n : 1,
    noTooltip: i,
    tag: f,
    className: h(W({
      variant: r,
      align: t
    }), o),
    ...d,
    children: a
  }) : ra(f, {
    ...d,
    className: h(W({
      variant: r,
      align: t
    }), o),
    ref: l
  }, a);
});
V.displayName = "Text";
const ha = b((a, r) => e(V, {
  ref: r,
  variant: "heading",
  ...a
}));
ha.displayName = "F0Heading";
const va = b((a, r) => e(V, {
  ref: r,
  ...a
}));
va.displayName = "F0Text";
const xa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ba = b(function({ widgets: r, children: t }, o) {
  const s = oe(null);
  ta(o, () => s.current);
  const n = sa.toArray(r).filter((i) => !!i).map((i, d) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: i
  }, d));
  return e(ee, {
    layout: "home",
    children: c("div", {
      ref: s,
      className: "@container",
      children: [c("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(Ie, {
          columns: xa,
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
}), ya = b(function({ children: r, sideContent: t, mainColumnPosition: o = "left", sticky: s = !1 }, n) {
  return e("div", {
    ref: n,
    className: "h-full",
    children: c("div", {
      className: h("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", s && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: h("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", s ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(Ca, {
        sticky: s,
        className: h("order-1", o === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Ca = ({ children: a, className: r }) => e("aside", {
  className: h("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), wa = Z({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), pe = aa.forwardRef(({ children: a, variant: r, className: t, ...o }, s) => e(ee, {
  layout: "standard",
  children: e("section", {
    ref: s,
    className: h("relative flex-1 overflow-auto", t),
    ...o,
    children: e("div", {
      className: h(wa({
        variant: r
      })),
      children: a
    })
  })
}));
pe.displayName = "StandardLayout";
const Ga = v({
  name: "StandardLayout",
  type: "layout"
}, pe), Ua = v({
  name: "TwoColumnLayout",
  type: "layout"
}, ya), Ja = v({
  name: "HomeLayout",
  type: "layout"
}, ba), Na = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((r, t) => e(La, {
    text: r
  }, t))
}), La = ({ text: a }) => c("div", {
  className: "flex flex-row items-start gap-2",
  children: [e(Re, {
    icon: Oe,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), ge = b(({ title: a, image: r, benefits: t, actions: o, withShadow: s = !0, module: n, moduleName: i, tag: d }, l) => c("div", {
  ref: l,
  className: h("bg-white flex flex-row rounded-xl border border-f1-border-secondary", s && "shadow-md"),
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
          children: [n && e(ae, {
            module: n
          }), i && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: i
          })]
        }), d && e("div", {
          className: "flex justify-start",
          children: e(Be, {
            icon: d.icon,
            text: d.label
          })
        }), e("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: a
        })]
      }), e(Na, {
        benefits: t
      })]
    }), o && e("div", {
      className: "flex gap-3",
      children: o
    })]
  })]
}));
ge.displayName = "ProductBlankslate";
function Pa({ isOpen: a, onClose: r, title: t, children: o, module: s, portalContainer: n }) {
  const [i, d] = x(a);
  return le(() => {
    d(a);
  }, [a]), e($e, {
    open: i,
    onOpenChange: (f) => {
      d(f), f || r();
    },
    modal: !0,
    children: c(Ee, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: n,
      children: [c("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [c(_e, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [s && e(ae, {
            module: s,
            size: "lg"
          }), t]
        }), e(je, {
          variant: "outline",
          icon: re,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), c(K, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [o, e(Q, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Ya({ isOpen: a, onClose: r, title: t, image: o, benefits: s, errorMessage: n, successMessage: i, loadingState: d, nextSteps: l, closeLabel: f, primaryAction: m, modalTitle: L, modalModule: P, secondaryAction: u, portalContainer: y, tag: F }) {
  const [B, k] = x(a), [C, w] = x(null), [S, p] = x(!1), T = async () => {
    if (m != null && m.onClick) {
      p(!0);
      try {
        await m.onClick(), k(!1), w("success");
      } catch {
        w("error");
      } finally {
        p(!1);
      }
    }
  }, D = () => {
    k(!1), r == null || r();
  }, R = S;
  return c($, {
    children: [e(Pa, {
      isOpen: B,
      onClose: D,
      title: L,
      module: P,
      portalContainer: y,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(ge, {
          title: t,
          image: o,
          benefits: s,
          withShadow: !1,
          tag: F,
          actions: c("div", {
            className: "flex gap-3",
            children: [m && e(N, {
              variant: m.variant,
              label: R ? d.label : m.label,
              icon: m.icon || void 0,
              onClick: T,
              loading: m.loading,
              size: m.size
            }), u && e(N, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), C && e(te, {
      open: !0,
      onClose: () => {
        D(), w(null);
      },
      success: C === "success",
      errorMessage: n,
      successMessage: i,
      nextSteps: l,
      closeLabel: f,
      portalContainer: y
    })]
  });
}
function Sa({ mediaUrl: a, title: r, description: t, onClose: o, dismissible: s, width: n, trackVisibility: i, actions: d, showConfirmation: l = !0 }) {
  const [f, m] = x(!1), L = () => {
    m(!0), o && o();
  };
  le(() => {
    i && i(!f);
  }, [i, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return e($, {
    children: f ? null : c(Ve, {
      style: {
        width: n
      },
      className: "relative bg-f1-background p-1",
      children: [c(ze, {
        children: [s && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(N, {
            variant: "ghost",
            icon: re,
            size: "sm",
            hideLabel: !0,
            onClick: L,
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
            children: [e(A, {
              className: "text-lg font-medium",
              children: r
            }), e(A, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), d && e(Ae, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? e(se, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: l && u.showConfirmation,
          variant: u.variant
        }, u.label) : e(N, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const Fa = b(function({ primaryAction: r, secondaryAction: t, ...o }, s) {
  const n = (l) => l.variant === "promote" ? e(se, {
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
  }) : e(N, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
  return c(He, {
    ref: s,
    ...o,
    primaryAction: i,
    secondaryAction: d,
    children: [(r == null ? void 0 : r.variant) === "promote" && n(r), (t == null ? void 0 : t.variant) === "promote" && n(t)]
  });
});
Fa.displayName = "UpsellingBanner";
function Xa({ isOpen: a, setIsOpen: r, label: t, variant: o = "promote", size: s = "md", showIcon: n = !0, side: i = "right", align: d = "center", icon: l = qe, mediaUrl: f, title: m, description: L, width: P = "300px", trackVisibility: u, actions: y, onClick: F, hideLabel: B = !1 }) {
  const [k, C] = x(!1), [w, S] = x(null), [p, T] = x(null), D = (g) => {
    r(g), F && F();
  }, R = async (g) => {
    if (g.type === "upsell") {
      T(g);
      try {
        await g.onClick(), g.showConfirmation && (C(!0), S("success"));
      } catch {
        C(!0), S("error");
      }
    }
  }, he = () => {
    S(null), C(!1), T(null), r(!1);
  }, ve = a && !k, xe = y == null ? void 0 : y.map((g) => g.type === "upsell" ? {
    ...g,
    onClick: () => R(g)
  } : g);
  return c($, {
    children: [c(J, {
      open: ve,
      onOpenChange: D,
      children: [e(Y, {
        asChild: !0,
        children: e(N, {
          variant: o,
          label: t,
          size: s,
          icon: n ? l : void 0,
          onClick: () => r(a),
          hideLabel: B
        })
      }), e(X, {
        side: i,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(Sa, {
          mediaUrl: f,
          title: m,
          description: L,
          onClose: () => r(!1),
          dismissible: !1,
          width: P,
          trackVisibility: u,
          actions: xe,
          showConfirmation: !1
        })
      })]
    }), (p == null ? void 0 : p.type) === "upsell" && p.showConfirmation && w && e(te, {
      open: !0,
      onClose: he,
      success: w === "success",
      errorMessage: p.errorMessage,
      successMessage: p.successMessage,
      nextSteps: p.nextSteps,
      closeLabel: p.closeLabel,
      portalContainer: null
    })]
  });
}
const ka = oa(null), Ta = ({ children: a, fullScreen: r = !0 }) => {
  const t = oe(null), [o, s] = x(t.current);
  return ea(() => {
    s(t.current);
  }, []), e(ka.Provider, {
    value: {
      element: o
    },
    children: e("div", {
      ref: t,
      id: "f0-layout",
      className: h({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    })
  });
}, Da = ({ children: a }) => e(Ze, {
  reducedMotion: "user",
  children: a
}), Ka = ({ children: a, layout: r, link: t, privacyModeInitiallyEnabled: o, image: s, i18n: n, l10n: i, isDev: d = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: f = !1 }) => e(Da, {
  children: e(We, {
    isDev: d,
    showExperimentalWarnings: f,
    children: e(Ge, {
      ...i,
      children: e(Ue, {
        ...n,
        children: e(Je, {
          ...t,
          children: e(Ta, {
            ...r,
            children: e(Ye, {
              children: e(Xe, {
                initiallyEnabled: o,
                children: e(Ke, {
                  ...s,
                  children: e(Qe, {
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
}), G = (a) => `datacollection-${a}`, Qa = {
  get: async (a) => JSON.parse(
    localStorage.getItem(G(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(G(a), JSON.stringify(r));
  }
};
export {
  _a as AreaChart,
  ar as Await,
  ja as BarChart,
  N as Button,
  Va as CategoryBarChart,
  rr as CopyButton,
  tr as DndProvider,
  sr as EmojiImage,
  or as F0Avatar,
  lr as F0AvatarAlert,
  nr as F0AvatarCompany,
  ir as F0AvatarDate,
  dr as F0AvatarEmoji,
  cr as F0AvatarFile,
  ur as F0AvatarIcon,
  fr as F0AvatarList,
  ae as F0AvatarModule,
  mr as F0AvatarPerson,
  pr as F0AvatarTeam,
  gr as F0Card,
  hr as F0Checkbox,
  Wa as F0ChipList,
  vr as F0EventCatcherProvider,
  ha as F0Heading,
  Re as F0Icon,
  Ka as F0Provider,
  xr as F0TagAlert,
  br as F0TagBalance,
  yr as F0TagCompany,
  Cr as F0TagDot,
  wr as F0TagList,
  Nr as F0TagPerson,
  Be as F0TagRaw,
  Lr as F0TagStatus,
  Pr as F0TagTeam,
  va as F0Text,
  Sr as GROUP_ID_SYMBOL,
  Ja as HomeLayout,
  za as LineChart,
  Oa as Link,
  Fr as OneFilterPicker,
  Aa as PieChart,
  Xe as PrivacyModeProvider,
  ge as ProductBlankslate,
  kr as ProductCard,
  Ya as ProductModal,
  Sa as ProductWidget,
  qa as ProgressBarChart,
  Ga as StandardLayout,
  Tr as TagCounter,
  Ua as TwoColumnLayout,
  te as UpsellRequestResponseDialog,
  Fa as UpsellingBanner,
  se as UpsellingButton,
  Xa as UpsellingPopover,
  Ha as VerticalBarChart,
  $a as avatarVariants,
  Dr as buildTranslations,
  Mr as createAtlaskitDriver,
  Ir as createDataSourceDefinition,
  Qa as dataCollectionLocalStorageHandler,
  Ra as defaultTranslations,
  Te as experimental,
  Br as getAnimationVariants,
  Rr as getDataSourcePaginationType,
  Or as getEmojiLabel,
  $r as isInfiniteScrollPagination,
  Er as isPageBasedPagination,
  _r as modules,
  jr as tagDotColors,
  Vr as useData,
  zr as useDataSource,
  Ar as useDndEvents,
  Hr as useDraggable,
  qr as useDroppableList,
  Wr as useEmojiConfetti,
  Gr as useGroups,
  Ur as usePrivacyMode,
  Jr as useReducedMotion,
  Yr as useSelectable,
  Xr as useXRay
};
