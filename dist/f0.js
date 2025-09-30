import { c as ve, P as H, a as b, f as be, b as xe, C as v, B as Ce, d as ye, L as we, e as Ne, V as Pe, A as Le, g as G, h as U, i as Se, j as W, S as J, k as M, l as Y, m as Fe, O as De, n as X, o as ke, p as Me, F as K, q as Te, r as Be, s as Ie, D as Re, t as Oe, u as $e, v as Ee, w as Q, x as w, U as Z, y as _e, z as je, E as z, G as ze, H as ee, I as Ve, J as Ae, K as qe, M as He, N as Ge, Q as Ue, X as We, R as Je, T as Ye, W as Xe, Y as Ke, Z as Qe } from "./hooks-DtUDiiaZ.js";
import { aA as es, aC as as, aL as ss, _ as rs, $ as ts, a0 as os, a1 as ls, a2 as ns, a3 as is, a4 as ds, a5 as cs, a7 as us, a8 as fs, a9 as ms, aa as hs, ab as ps, ac as gs, aH as vs, ad as bs, af as xs, ag as Cs, ah as ys, ai as ws, al as Ns, am as Ps, an as Ls, ao as Ss, aq as Fs, ae as Ds, ap as ks, ak as Ms, aI as Ts, aB as Bs, av as Is, ay as Rs, au as Os, aM as $s, at as Es, as as _s, a6 as js, aj as zs, ar as Vs, aw as As, aD as qs, aE as Hs, aF as Gs, aN as Us, ax as Ws, aG as Js, aK as Ys, az as Xs, aJ as Ks } from "./hooks-DtUDiiaZ.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Ze, { useState as g, forwardRef as B, useRef as ae, useImperativeHandle as ea, Children as aa, useEffect as se, createContext as sa } from "react";
const ka = {
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
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
  },
  toc: {
    search: "Search"
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
        long: "Week of {{day}} {{month}} {{year}}"
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
    initialMessage: "How can I help you today?",
    inputPlaceholder: "Write something here...",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message"
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, Ma = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [ra, Ta] = ve(_), [ta, oa] = ra(_), re = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: l = null,
      max: t,
      getValueLabel: i = la,
      ...n
    } = a;
    (t || t === 0) && !V(t) && console.error(na(`${t}`, "Progress"));
    const d = V(t) ? t : j;
    l !== null && !A(l, d) && console.error(ia(`${l}`, "Progress"));
    const o = A(l, d) ? l : null, f = T(o) ? i(o, d) : void 0;
    return /* @__PURE__ */ e(ta, { scope: r, value: o, max: d, children: /* @__PURE__ */ e(
      H.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": le(o, d),
        "data-value": o ?? void 0,
        "data-max": d,
        ...n,
        ref: s
      }
    ) });
  }
);
re.displayName = _;
var te = "ProgressIndicator", oe = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...l } = a, t = oa(te, r);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": le(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
        ref: s
      }
    );
  }
);
oe.displayName = te;
function la(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function le(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function V(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function A(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function na(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function ia(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ne = re, da = oe;
const ie = E.forwardRef(({ className: a, value: s, ...r }, l) => /* @__PURE__ */ e(
  ne,
  {
    ref: l,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      da,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: r.color,
          transform: `translateX(-${100 - (s || 0)}%)`
        }
      }
    )
  }
));
ie.displayName = ne.displayName;
const ca = ({ value: a, max: s = 100, label: r, color: l }, t) => {
  const i = l || xe(0), n = a / s * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ie,
      {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    r && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: r })
  ] });
}, ua = be(ca), Ba = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Le
), Ia = v(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), Ra = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ye
), Oa = v(
  {
    name: "LineChart",
    type: "info"
  },
  we
), $a = v(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), Ea = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Pe
), _a = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ua
), de = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote"
], fa = ["link"];
[
  ...de,
  ...fa
];
const ce = ["sm", "md", "lg"], ja = de, za = ce, Va = ["default", "outline", "neutral"], Aa = ce, qa = ["sm", "md", "lg"], O = ({ count: a, list: s }) => {
  const [r, l] = g(!1), t = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ c(G, { open: r, onOpenChange: l, children: [
    /* @__PURE__ */ e(U, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Se("inline-flex flex-shrink-0 items-center"), children: t }) }),
    /* @__PURE__ */ e(
      W,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          s.map((i, n) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(M, { ...i })
            },
            n
          )),
          /* @__PURE__ */ e(
            Y,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      }
    )
  ] }) : t;
};
O.displayName = "ChipCounter";
const ue = ({
  chips: a,
  max: s = 4,
  remainingCount: r,
  layout: l = "compact"
}) => {
  if (l === "fill")
    return /* @__PURE__ */ e(
      De,
      {
        items: a,
        renderListItem: (o) => /* @__PURE__ */ e(M, { ...o }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: r !== void 0,
        renderOverflowIndicator: (o) => /* @__PURE__ */ e(
          O,
          {
            count: (r ?? 0) + o,
            list: r ? void 0 : a.slice(a.length - o)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const t = a.slice(0, s), i = a.slice(s), n = r ?? a.length - s, d = n > 0;
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
    t.map((o, f) => /* @__PURE__ */ e(M, { ...o }, f)),
    d && /* @__PURE__ */ e(
      O,
      {
        count: n,
        list: r ? void 0 : i
      }
    )
  ] });
};
ue.displayName = "F0ChipList";
const Ha = Fe(
  "F0ChipList",
  ue
), ma = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ha = B(function({ widgets: s, children: r }, l) {
  const t = ae(null);
  ea(l, () => t.current);
  const i = aa.toArray(s).filter((n) => !!n).map((n, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, d));
  return /* @__PURE__ */ e(X, { layout: "home", children: /* @__PURE__ */ c("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ke, { columns: ma, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), pa = B(
  function({
    children: s,
    sideContent: r,
    mainColumnPosition: l = "left",
    sticky: t = !1
  }, i) {
    return /* @__PURE__ */ e("div", { ref: i, className: "h-full", children: /* @__PURE__ */ c(
      "div",
      {
        className: b(
          "flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row",
          "flex-col",
          "overflow-y-auto",
          t && "md:sticky md:top-0 md:max-h-full"
        ),
        children: [
          /* @__PURE__ */ e(
            "main",
            {
              className: b(
                "sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6",
                t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full",
                l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: s
            }
          ),
          /* @__PURE__ */ e(
            ga,
            {
              sticky: t,
              className: b(
                "order-1",
                l === "right" ? "md:order-1" : "md:order-3"
              ),
              children: r
            }
          )
        ]
      }
    ) });
  }
), ga = ({
  children: a,
  className: s
}) => /* @__PURE__ */ e(
  "aside",
  {
    className: b(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      s
    ),
    children: a
  }
), va = Me({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), fe = Ze.forwardRef(({ children: a, variant: s, className: r, ...l }, t) => /* @__PURE__ */ e(X, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", r),
    ...l,
    children: /* @__PURE__ */ e("div", { className: b(va({ variant: s })), children: a })
  }
) }));
fe.displayName = "StandardLayout";
const Ga = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  fe
), Ua = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  pa
), Wa = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ha
), ba = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(xa, { text: s }, r)) }), xa = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Be, { icon: Ie, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), me = B(
  ({
    title: a,
    image: s,
    benefits: r,
    actions: l,
    withShadow: t = !0,
    module: i,
    moduleName: n,
    tag: d
  }, o) => /* @__PURE__ */ c(
    "div",
    {
      ref: o,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        t && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: s,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ e(K, { module: i }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              d && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Te, { icon: d.icon, text: d.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ba, { benefits: r })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "flex gap-3", children: l })
        ] })
      ]
    }
  )
);
me.displayName = "ProductBlankslate";
function Ca({
  isOpen: a,
  onClose: s,
  title: r,
  children: l,
  module: t,
  portalContainer: i
}) {
  const [n, d] = g(a);
  return se(() => {
    d(a);
  }, [a]), /* @__PURE__ */ e(Re, { open: n, onOpenChange: (f) => {
    d(f), f || s();
  }, modal: !0, children: /* @__PURE__ */ c(
    Oe,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c($e, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            t && /* @__PURE__ */ e(K, { module: t, size: "lg" }),
            r
          ] }),
          /* @__PURE__ */ e(
            Ee,
            {
              variant: "outline",
              icon: Q,
              onClick: s,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          l,
          /* @__PURE__ */ e(
            Y,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
function Ja({
  isOpen: a,
  onClose: s,
  title: r,
  image: l,
  benefits: t,
  errorMessage: i,
  successMessage: n,
  loadingState: d,
  nextSteps: o,
  closeLabel: f,
  primaryAction: m,
  modalTitle: N,
  modalModule: P,
  secondaryAction: u,
  portalContainer: x,
  tag: S
}) {
  const [I, F] = g(a), [C, y] = g(null), [L, h] = g(!1), D = async () => {
    if (m != null && m.onClick) {
      h(!0);
      try {
        await m.onClick(), F(!1), y("success");
      } catch {
        y("error");
      } finally {
        h(!1);
      }
    }
  }, k = () => {
    F(!1), s == null || s();
  }, R = L;
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ e(
      Ca,
      {
        isOpen: I,
        onClose: k,
        title: N,
        module: P,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          me,
          {
            title: r,
            image: l,
            benefits: t,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ c("div", { className: "flex gap-3", children: [
              m && /* @__PURE__ */ e(
                w,
                {
                  variant: m.variant,
                  label: R ? d.label : m.label,
                  icon: m.icon || void 0,
                  onClick: D,
                  loading: m.loading,
                  size: m.size
                }
              ),
              u && /* @__PURE__ */ e(
                w,
                {
                  onClick: u.onClick,
                  label: u.label,
                  variant: u.variant,
                  size: u.size,
                  icon: u.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    C && /* @__PURE__ */ e(
      Z,
      {
        open: !0,
        onClose: () => {
          k(), y(null);
        },
        success: C === "success",
        errorMessage: i,
        successMessage: n,
        nextSteps: o,
        closeLabel: f,
        portalContainer: x
      }
    )
  ] });
}
function ya({
  mediaUrl: a,
  title: s,
  description: r,
  onClose: l,
  dismissible: t,
  width: i,
  trackVisibility: n,
  actions: d,
  showConfirmation: o = !0
}) {
  const [f, m] = g(!1), N = () => {
    m(!0), l && l();
  };
  se(() => {
    n && n(!f);
  }, [n, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ c(_e, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(je, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: Q,
          size: "sm",
          hideLabel: !0,
          onClick: N,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ c("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (P ? /* @__PURE__ */ e(
          "video",
          {
            src: a,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: s,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(z, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(z, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(ze, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        ee,
        {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: o && u.showConfirmation,
          variant: u.variant
        },
        u.label
      ) : /* @__PURE__ */ e(
        w,
        {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        },
        u.label
      )
    ) })
  ] }) });
}
const wa = B(
  function({ primaryAction: s, secondaryAction: r, ...l }, t) {
    const i = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
      ee,
      {
        label: o.label,
        onRequest: async () => {
          await o.onClick();
        },
        errorMessage: o.errorMessage,
        successMessage: o.successMessage,
        loadingState: o.loadingState,
        nextSteps: o.nextSteps,
        closeLabel: o.closeLabel,
        showIcon: o.showIcon,
        showConfirmation: o.showConfirmation,
        variant: o.variant
      }
    ) : /* @__PURE__ */ e(
      w,
      {
        onClick: o.onClick,
        label: o.label,
        variant: o.variant || "default",
        size: "md",
        icon: o.icon
      }
    ), n = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0, d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
    return /* @__PURE__ */ c(
      Ve,
      {
        ref: t,
        ...l,
        primaryAction: n,
        secondaryAction: d,
        children: [
          (s == null ? void 0 : s.variant) === "promote" && i(s),
          (r == null ? void 0 : r.variant) === "promote" && i(r)
        ]
      }
    );
  }
);
wa.displayName = "UpsellingBanner";
function Ya({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: l = "promote",
  size: t = "md",
  showIcon: i = !0,
  side: n = "right",
  align: d = "center",
  icon: o = Ae,
  mediaUrl: f,
  title: m,
  description: N,
  width: P = "300px",
  trackVisibility: u,
  actions: x,
  onClick: S,
  hideLabel: I = !1
}) {
  const [F, C] = g(!1), [y, L] = g(null), [h, D] = g(null), k = (p) => {
    s(p), S && S();
  }, R = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), L("success"));
      } catch {
        C(!0), L("error");
      }
    }
  }, he = () => {
    L(null), C(!1), D(null), s(!1);
  }, pe = a && !F, ge = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c(G, { open: pe, onOpenChange: k, children: [
      /* @__PURE__ */ e(U, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: l,
          label: r,
          size: t,
          icon: i ? o : void 0,
          onClick: () => s(a),
          hideLabel: I
        }
      ) }),
      /* @__PURE__ */ e(
        W,
        {
          side: n,
          align: d,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ya,
            {
              mediaUrl: f,
              title: m,
              description: N,
              onClose: () => s(!1),
              dismissible: !1,
              width: P,
              trackVisibility: u,
              actions: ge,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (h == null ? void 0 : h.type) === "upsell" && h.showConfirmation && y && /* @__PURE__ */ e(
      Z,
      {
        open: !0,
        onClose: he,
        success: y === "success",
        errorMessage: h.errorMessage,
        successMessage: h.successMessage,
        nextSteps: h.nextSteps,
        closeLabel: h.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Na = sa(
  null
), Pa = ({ children: a, fullScreen: s = !0 }) => {
  const r = ae(null), [l, t] = g(r.current);
  return Qe(() => {
    t(r.current);
  }, []), /* @__PURE__ */ e(Na.Provider, { value: { element: l }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      id: "f0-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": s
      }),
      children: a
    }
  ) });
}, La = ({
  children: a
}) => /* @__PURE__ */ e(Ke, { reducedMotion: "user", children: a }), Xa = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: l,
  image: t,
  i18n: i,
  l10n: n,
  isDev: d = !1,
  dataCollectionStorageHandler: o,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(La, { children: /* @__PURE__ */ e(
  qe,
  {
    isDev: d,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(He, { ...n, children: /* @__PURE__ */ e(Ge, { ...i, children: /* @__PURE__ */ e(Ue, { ...r, children: /* @__PURE__ */ e(Pa, { ...s, children: /* @__PURE__ */ e(We, { children: /* @__PURE__ */ e(
      Je,
      {
        initiallyEnabled: l,
        children: /* @__PURE__ */ e(Ye, { ...t, children: /* @__PURE__ */ e(
          Xe,
          {
            handler: o,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), q = (a) => `datacollection-${a}`, Ka = {
  get: async (a) => JSON.parse(
    localStorage.getItem(q(a)) ?? "{}"
  ),
  set: async (a, s) => {
    localStorage.setItem(q(a), JSON.stringify(s));
  }
};
export {
  Ba as AreaChart,
  es as Await,
  Ia as BarChart,
  Ra as CategoryBarChart,
  as as DndProvider,
  ss as EmojiImage,
  rs as F0Avatar,
  ts as F0AvatarAlert,
  os as F0AvatarCompany,
  ls as F0AvatarDate,
  ns as F0AvatarEmoji,
  is as F0AvatarFile,
  ds as F0AvatarIcon,
  cs as F0AvatarList,
  K as F0AvatarModule,
  us as F0AvatarPerson,
  fs as F0AvatarTeam,
  w as F0Button,
  ms as F0ButtonDropdown,
  hs as F0ButtonToggle,
  ps as F0Card,
  gs as F0Checkbox,
  Ha as F0ChipList,
  vs as F0EventCatcherProvider,
  Be as F0Icon,
  bs as F0Link,
  Xa as F0Provider,
  xs as F0TagAlert,
  Cs as F0TagBalance,
  ys as F0TagCompany,
  ws as F0TagDot,
  Ns as F0TagList,
  Ps as F0TagPerson,
  Te as F0TagRaw,
  Ls as F0TagStatus,
  Ss as F0TagTeam,
  Fs as GROUP_ID_SYMBOL,
  Wa as HomeLayout,
  Oa as LineChart,
  Ds as OneFilterPicker,
  $a as PieChart,
  Je as PrivacyModeProvider,
  me as ProductBlankslate,
  ks as ProductCard,
  Ja as ProductModal,
  ya as ProductWidget,
  _a as ProgressBarChart,
  Ga as StandardLayout,
  Ms as TagCounter,
  Ua as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  wa as UpsellingBanner,
  ee as UpsellingButton,
  Ya as UpsellingPopover,
  Ea as VerticalBarChart,
  Ma as avatarVariants,
  Ts as buildTranslations,
  Aa as buttonDropdownSizes,
  Va as buttonDropdownVariants,
  za as buttonSizes,
  qa as buttonToggleSizes,
  ja as buttonVariants,
  Bs as createAtlaskitDriver,
  Is as createDataSourceDefinition,
  Ka as dataCollectionLocalStorageHandler,
  ka as defaultTranslations,
  Fe as experimental,
  Rs as getAnimationVariants,
  Os as getDataSourcePaginationType,
  $s as getEmojiLabel,
  Es as isInfiniteScrollPagination,
  _s as isPageBasedPagination,
  js as modules,
  zs as tagDotColors,
  Vs as useData,
  As as useDataSource,
  qs as useDndEvents,
  Hs as useDraggable,
  Gs as useDroppableList,
  Us as useEmojiConfetti,
  Ws as useGroups,
  Js as usePrivacyMode,
  Ys as useReducedMotion,
  Xs as useSelectable,
  Ks as useXRay
};
