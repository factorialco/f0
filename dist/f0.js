import { c as ge, P as G, a as b, f as ve, b as be, C as v, B as xe, d as Ce, L as ye, e as we, V as Ne, A as Pe, g as Le, h as H, i as Se, j as U, k as W, l as Fe, m as J, S as Y, n as M, o as X, p as De, O as ke, q as K, r as Me, s as Te, F as Q, t as Be, u as Ie, v as Re, D as Oe, w as $e, x as Ee, y as _e, z as Z, E as w, U as ee, G as Ve, H as je, I as j, J as ze, K as ae, M as Ae, N as qe, Q as Ge, R as He, T as Ue, W as We, X as Je, Y as Ye, Z as Xe, _ as Ke, $ as Qe, a0 as Ze } from "./hooks-osPYNzmu.js";
import { aD as as, aF as ss, aO as rs, a1 as ts, a2 as os, a3 as ls, a4 as ns, a5 as is, a6 as ds, a7 as cs, a8 as us, aa as fs, ab as ms, ac as hs, ad as ps, ae as gs, af as vs, aK as bs, ag as xs, ai as Cs, aj as ys, ak as ws, al as Ns, ao as Ps, ap as Ls, aq as Ss, ar as Fs, at as Ds, ah as ks, as as Ms, an as Ts, aL as Bs, aE as Is, ay as Rs, aB as Os, ax as $s, aP as Es, aw as _s, av as Vs, a9 as js, am as zs, au as As, az as qs, aG as Gs, aH as Hs, aI as Us, aQ as Ws, aA as Js, aJ as Ys, aN as Xs, aC as Ks, aM as Qs } from "./hooks-osPYNzmu.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import ea, { useState as g, forwardRef as B, useRef as se, useImperativeHandle as aa, Children as sa, useEffect as re, createContext as ra } from "react";
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
}, Ma = ["person", "team", "company", "file"];
var _ = "Progress", V = 100, [ta, Ta] = ge(_), [oa, la] = ta(_), te = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: l = null,
      max: t,
      getValueLabel: i = na,
      ...n
    } = a;
    (t || t === 0) && !z(t) && console.error(ia(`${t}`, "Progress"));
    const d = z(t) ? t : V;
    l !== null && !A(l, d) && console.error(da(`${l}`, "Progress"));
    const o = A(l, d) ? l : null, f = T(o) ? i(o, d) : void 0;
    return /* @__PURE__ */ e(oa, { scope: r, value: o, max: d, children: /* @__PURE__ */ e(
      G.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ne(o, d),
        "data-value": o ?? void 0,
        "data-max": d,
        ...n,
        ref: s
      }
    ) });
  }
);
te.displayName = _;
var oe = "ProgressIndicator", le = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...l } = a, t = la(oe, r);
    return /* @__PURE__ */ e(
      G.div,
      {
        "data-state": ne(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
        ref: s
      }
    );
  }
);
le.displayName = oe;
function na(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function ne(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function z(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function A(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function ia(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${V}\`.`;
}
function da(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${V} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ie = te, ca = le;
const de = E.forwardRef(({ className: a, value: s, ...r }, l) => /* @__PURE__ */ e(
  ie,
  {
    ref: l,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      ca,
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
de.displayName = ie.displayName;
const ua = ({ value: a, max: s = 100, label: r, color: l }, t) => {
  const i = l || be(0), n = a / s * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      de,
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
}, fa = ve(ua), Ba = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Pe
), Ia = v(
  {
    name: "BarChart",
    type: "info"
  },
  xe
), Ra = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ce
), Oa = v(
  {
    name: "LineChart",
    type: "info"
  },
  ye
), $a = v(
  {
    name: "PieChart",
    type: "info"
  },
  we
), Ea = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Ne
), _a = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  fa
), Va = Le, ja = H, za = ["default", "outline", "neutral"], Aa = H, qa = ["sm", "md", "lg"], Ga = Se, O = ({ count: a, list: s }) => {
  const [r, l] = g(!1), t = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ c(U, { open: r, onOpenChange: l, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Fe("inline-flex flex-shrink-0 items-center"), children: t }) }),
    /* @__PURE__ */ e(
      J,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ c(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          s.map((i, n) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(M, { ...i })
            },
            n
          )),
          /* @__PURE__ */ e(
            X,
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
const ce = ({
  chips: a,
  max: s = 4,
  remainingCount: r,
  layout: l = "compact"
}) => {
  if (l === "fill")
    return /* @__PURE__ */ e(
      ke,
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
ce.displayName = "F0ChipList";
const Ha = De(
  "F0ChipList",
  ce
), ma = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ha = B(function({ widgets: s, children: r }, l) {
  const t = se(null);
  aa(l, () => t.current);
  const i = sa.toArray(s).filter((n) => !!n).map((n, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, d));
  return /* @__PURE__ */ e(K, { layout: "home", children: /* @__PURE__ */ c("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(Me, { columns: ma, showArrows: !1, children: i }),
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
), va = Te({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ue = ea.forwardRef(({ children: a, variant: s, className: r, ...l }, t) => /* @__PURE__ */ e(K, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", r),
    ...l,
    children: /* @__PURE__ */ e("div", { className: b(va({ variant: s })), children: a })
  }
) }));
ue.displayName = "StandardLayout";
const Ua = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ue
), Wa = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  pa
), Ja = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ha
), ba = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(xa, { text: s }, r)) }), xa = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Ie, { icon: Re, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), fe = B(
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
                i && /* @__PURE__ */ e(Q, { module: i }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              d && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Be, { icon: d.icon, text: d.label }) }),
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
fe.displayName = "ProductBlankslate";
function Ca({
  isOpen: a,
  onClose: s,
  title: r,
  children: l,
  module: t,
  portalContainer: i
}) {
  const [n, d] = g(a);
  return re(() => {
    d(a);
  }, [a]), /* @__PURE__ */ e(Oe, { open: n, onOpenChange: (f) => {
    d(f), f || s();
  }, modal: !0, children: /* @__PURE__ */ c(
    $e,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c(Ee, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            t && /* @__PURE__ */ e(Q, { module: t, size: "lg" }),
            r
          ] }),
          /* @__PURE__ */ e(
            _e,
            {
              variant: "outline",
              icon: Z,
              onClick: s,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          l,
          /* @__PURE__ */ e(
            X,
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
function Ya({
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
          fe,
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
      ee,
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
  re(() => {
    n && n(!f);
  }, [n, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ c(Ve, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(je, { children: [
      t && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: Z,
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
          /* @__PURE__ */ e(j, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(j, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(ze, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        ae,
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
      ae,
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
      Ae,
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
function Xa({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: l = "promote",
  size: t = "md",
  showIcon: i = !0,
  side: n = "right",
  align: d = "center",
  icon: o = qe,
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
  }, me = () => {
    L(null), C(!1), D(null), s(!1);
  }, he = a && !F, pe = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c(U, { open: he, onOpenChange: k, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
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
        J,
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
              actions: pe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (h == null ? void 0 : h.type) === "upsell" && h.showConfirmation && y && /* @__PURE__ */ e(
      ee,
      {
        open: !0,
        onClose: me,
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
const Na = ra(
  null
), Pa = ({ children: a, fullScreen: s = !0 }) => {
  const r = se(null), [l, t] = g(r.current);
  return Ze(() => {
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
}) => /* @__PURE__ */ e(Qe, { reducedMotion: "user", children: a }), Ka = ({
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
  Ge,
  {
    isDev: d,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(He, { ...n, children: /* @__PURE__ */ e(Ue, { ...i, children: /* @__PURE__ */ e(We, { ...r, children: /* @__PURE__ */ e(Pa, { ...s, children: /* @__PURE__ */ e(Je, { children: /* @__PURE__ */ e(
      Ye,
      {
        initiallyEnabled: l,
        children: /* @__PURE__ */ e(Xe, { ...t, children: /* @__PURE__ */ e(
          Ke,
          {
            handler: o,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), q = (a) => `datacollection-${a}`, Qa = {
  get: async (a) => JSON.parse(
    localStorage.getItem(q(a)) ?? "{}"
  ),
  set: async (a, s) => {
    localStorage.setItem(q(a), JSON.stringify(s));
  }
};
export {
  Ba as AreaChart,
  as as Await,
  Ia as BarChart,
  Ra as CategoryBarChart,
  ss as DndProvider,
  rs as EmojiImage,
  ts as F0Avatar,
  os as F0AvatarAlert,
  ls as F0AvatarCompany,
  ns as F0AvatarDate,
  is as F0AvatarEmoji,
  ds as F0AvatarFile,
  cs as F0AvatarIcon,
  us as F0AvatarList,
  Q as F0AvatarModule,
  fs as F0AvatarPerson,
  ms as F0AvatarTeam,
  w as F0Button,
  hs as F0ButtonDropdown,
  ps as F0ButtonToggle,
  gs as F0Card,
  vs as F0Checkbox,
  Ha as F0ChipList,
  bs as F0EventCatcherProvider,
  Ie as F0Icon,
  xs as F0Link,
  Ka as F0Provider,
  Cs as F0TagAlert,
  ys as F0TagBalance,
  ws as F0TagCompany,
  Ns as F0TagDot,
  Ps as F0TagList,
  Ls as F0TagPerson,
  Be as F0TagRaw,
  Ss as F0TagStatus,
  Fs as F0TagTeam,
  Ds as GROUP_ID_SYMBOL,
  Ja as HomeLayout,
  Oa as LineChart,
  ks as OneFilterPicker,
  $a as PieChart,
  Ye as PrivacyModeProvider,
  fe as ProductBlankslate,
  Ms as ProductCard,
  Ya as ProductModal,
  ya as ProductWidget,
  _a as ProgressBarChart,
  Ua as StandardLayout,
  Ts as TagCounter,
  Wa as TwoColumnLayout,
  ee as UpsellRequestResponseDialog,
  wa as UpsellingBanner,
  ae as UpsellingButton,
  Xa as UpsellingPopover,
  Ea as VerticalBarChart,
  Ma as avatarVariants,
  Bs as buildTranslations,
  Aa as buttonDropdownSizes,
  za as buttonDropdownVariants,
  ja as buttonSizes,
  qa as buttonToggleSizes,
  Va as buttonVariants,
  Is as createAtlaskitDriver,
  Rs as createDataSourceDefinition,
  Qa as dataCollectionLocalStorageHandler,
  ka as defaultTranslations,
  De as experimental,
  Os as getAnimationVariants,
  $s as getDataSourcePaginationType,
  Es as getEmojiLabel,
  _s as isInfiniteScrollPagination,
  Vs as isPageBasedPagination,
  Ga as linkVariants,
  js as modules,
  zs as tagDotColors,
  As as useData,
  qs as useDataSource,
  Gs as useDndEvents,
  Hs as useDraggable,
  Us as useDroppableList,
  Ws as useEmojiConfetti,
  Js as useGroups,
  Ys as usePrivacyMode,
  Xs as useReducedMotion,
  Ks as useSelectable,
  Qs as useXRay
};
