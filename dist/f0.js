import { c as be, P as U, a as b, f as xe, b as Ce, C as v, B as ye, d as we, L as Ne, e as Le, V as Pe, A as Se, g as G, h as W, i as Fe, j as J, S as Y, k as M, l as X, m as De, O as ke, n as K, o as Me, p as Te, F as Q, q as Be, r as Ie, s as Re, D as Oe, t as $e, u as Ee, v as _e, w as Z, x as w, U as ee, y as je, z as ze, E as z, G as Ve, H as ae, I as qe, J as Ae, K as He, M as Ue, N as Ge, Q as We, X as Je, R as Ye, T as Xe, W as Ke, Y as Qe, Z as Ze } from "./hooks-BDkmC3tr.js";
import { aA as es, aC as as, aL as ss, _ as rs, $ as ts, a0 as os, a1 as ls, a2 as ns, a3 as is, a4 as cs, a5 as ds, a7 as us, a8 as fs, a9 as hs, aa as ms, ab as ps, ac as gs, aH as vs, ad as bs, af as xs, ag as Cs, ah as ys, ai as ws, al as Ns, am as Ls, an as Ps, ao as Ss, aq as Fs, ae as Ds, ap as ks, ak as Ms, aI as Ts, aB as Bs, av as Is, ay as Rs, au as Os, aM as $s, at as Es, as as _s, a6 as js, aj as zs, ar as Vs, aw as qs, aD as As, aE as Hs, aF as Us, aN as Gs, ax as Ws, aG as Js, aK as Ys, az as Xs, aJ as Ks } from "./hooks-BDkmC3tr.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
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
      settings: "{%visualizationName} settings"
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
        long: "Week of %{day} %{month} %{year}"
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
    initialMessage: "How can I help you today?"
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, Ma = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [ta, Ta] = be(_), [oa, la] = ta(_), te = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: o,
      getValueLabel: c = na,
      ...n
    } = a;
    (o || o === 0) && !V(o) && console.error(ia(`${o}`, "Progress"));
    const i = V(o) ? o : j;
    t !== null && !q(t, i) && console.error(ca(`${t}`, "Progress"));
    const l = q(t, i) ? t : null, f = T(l) ? c(l, i) : void 0;
    return /* @__PURE__ */ e(oa, { scope: r, value: l, max: i, children: /* @__PURE__ */ e(
      U.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ne(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...n,
        ref: s
      }
    ) });
  }
);
te.displayName = _;
var oe = "ProgressIndicator", le = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...t } = a, o = la(oe, r);
    return /* @__PURE__ */ e(
      U.div,
      {
        "data-state": ne(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
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
function V(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function q(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function ia(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function ca(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ie = te, da = le;
const ce = E.forwardRef(({ className: a, value: s, ...r }, t) => /* @__PURE__ */ e(
  ie,
  {
    ref: t,
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
ce.displayName = ie.displayName;
const ua = ({ value: a, max: s = 100, label: r, color: t }, o) => {
  const c = t || Ce(0), n = a / s * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ce,
      {
        color: c,
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
}, fa = xe(ua), Ba = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Se
), Ia = v(
  {
    name: "BarChart",
    type: "info"
  },
  ye
), Ra = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  we
), Oa = v(
  {
    name: "LineChart",
    type: "info"
  },
  Ne
), $a = v(
  {
    name: "PieChart",
    type: "info"
  },
  Le
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
  fa
), de = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote"
], ha = ["link"];
[
  ...de,
  ...ha
];
const ue = ["sm", "md", "lg"], ja = de, za = ue, Va = ["default", "outline", "neutral"], qa = ue, Aa = ["sm", "md", "lg"], O = ({ count: a, list: s }) => {
  const [r, t] = g(!1), o = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ d(G, { open: r, onOpenChange: t, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Fe("inline-flex flex-shrink-0 items-center"), children: o }) }),
    /* @__PURE__ */ e(
      J,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ d(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          s.map((c, n) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(M, { ...c })
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
  ] }) : o;
};
O.displayName = "ChipCounter";
const fe = ({
  chips: a,
  max: s = 4,
  remainingCount: r,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      ke,
      {
        items: a,
        renderListItem: (l) => /* @__PURE__ */ e(M, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: r !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ e(
          O,
          {
            count: (r ?? 0) + l,
            list: r ? void 0 : a.slice(a.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const o = a.slice(0, s), c = a.slice(s), n = r ?? a.length - s, i = n > 0;
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
    o.map((l, f) => /* @__PURE__ */ e(M, { ...l }, f)),
    i && /* @__PURE__ */ e(
      O,
      {
        count: n,
        list: r ? void 0 : c
      }
    )
  ] });
};
fe.displayName = "F0ChipList";
const Ha = De(
  "F0ChipList",
  fe
), ma = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, pa = B(function({ widgets: s, children: r }, t) {
  const o = se(null);
  aa(t, () => o.current);
  const c = sa.toArray(s).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(K, { layout: "home", children: /* @__PURE__ */ d("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(Me, { columns: ma, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), ga = B(
  function({ children: s, sideContent: r, mainColumnPosition: t = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
      "div",
      {
        className: b(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(A, { children: r }),
          /* @__PURE__ */ e(
            "main",
            {
              className: b(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: s
            }
          ),
          t === "left" && /* @__PURE__ */ e(A, { children: r })
        ]
      }
    ) });
  }
), A = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), va = Te({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), he = ea.forwardRef(({ children: a, variant: s, className: r, ...t }, o) => /* @__PURE__ */ e(K, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: b("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(va({ variant: s })), children: a })
  }
) }));
he.displayName = "StandardLayout";
const Ua = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  he
), Ga = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ga
), Wa = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  pa
), ba = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(xa, { text: s }, r)) }), xa = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Ie, { icon: Re, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), me = B(
  ({
    title: a,
    image: s,
    benefits: r,
    actions: t,
    withShadow: o = !0,
    module: c,
    moduleName: n,
    tag: i
  }, l) => /* @__PURE__ */ d(
    "div",
    {
      ref: l,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        o && "shadow-md"
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
        /* @__PURE__ */ d("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ d("div", { className: "flex flex-row items-center gap-2", children: [
                c && /* @__PURE__ */ e(Q, { module: c }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              i && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Be, { icon: i.icon, text: i.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ba, { benefits: r })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
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
  children: t,
  module: o,
  portalContainer: c
}) {
  const [n, i] = g(a);
  return re(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Oe, { open: n, onOpenChange: (f) => {
    i(f), f || s();
  }, modal: !0, children: /* @__PURE__ */ d(
    $e,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: c,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Ee, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(Q, { module: o, size: "lg" }),
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
        /* @__PURE__ */ d(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          t,
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
function Ja({
  isOpen: a,
  onClose: s,
  title: r,
  image: t,
  benefits: o,
  errorMessage: c,
  successMessage: n,
  loadingState: i,
  nextSteps: l,
  closeLabel: f,
  primaryAction: h,
  modalTitle: N,
  modalModule: L,
  secondaryAction: u,
  portalContainer: x,
  tag: S
}) {
  const [I, F] = g(a), [C, y] = g(null), [P, m] = g(!1), D = async () => {
    if (h != null && h.onClick) {
      m(!0);
      try {
        await h.onClick(), F(!1), y("success");
      } catch {
        y("error");
      } finally {
        m(!1);
      }
    }
  }, k = () => {
    F(!1), s == null || s();
  }, R = P;
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ e(
      Ca,
      {
        isOpen: I,
        onClose: k,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          me,
          {
            title: r,
            image: t,
            benefits: o,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              h && /* @__PURE__ */ e(
                w,
                {
                  variant: h.variant,
                  label: R ? i.label : h.label,
                  icon: h.icon || void 0,
                  onClick: D,
                  loading: h.loading,
                  size: h.size
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
        errorMessage: c,
        successMessage: n,
        nextSteps: l,
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
  onClose: t,
  dismissible: o,
  width: c,
  trackVisibility: n,
  actions: i,
  showConfirmation: l = !0
}) {
  const [f, h] = g(!1), N = () => {
    h(!0), t && t();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ d(je, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(ze, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
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
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (L ? /* @__PURE__ */ e(
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
        /* @__PURE__ */ d("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(z, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(z, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(Ve, { className: "p-3", children: i.map(
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
          showConfirmation: l && u.showConfirmation,
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
  function({ primaryAction: s, secondaryAction: r, ...t }, o) {
    const c = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
      ae,
      {
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
      }
    ) : /* @__PURE__ */ e(
      w,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), n = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0, i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
    return /* @__PURE__ */ d(
      qe,
      {
        ref: o,
        ...t,
        primaryAction: n,
        secondaryAction: i,
        children: [
          (s == null ? void 0 : s.variant) === "promote" && c(s),
          (r == null ? void 0 : r.variant) === "promote" && c(r)
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
  variant: t = "promote",
  size: o = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: l = Ae,
  mediaUrl: f,
  title: h,
  description: N,
  width: L = "300px",
  trackVisibility: u,
  actions: x,
  onClick: S,
  hideLabel: I = !1
}) {
  const [F, C] = g(!1), [y, P] = g(null), [m, D] = g(null), k = (p) => {
    s(p), S && S();
  }, R = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), P("success"));
      } catch {
        C(!0), P("error");
      }
    }
  }, pe = () => {
    P(null), C(!1), D(null), s(!1);
  }, ge = a && !F, ve = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(G, { open: ge, onOpenChange: k, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: r,
          size: o,
          icon: c ? l : void 0,
          onClick: () => s(a),
          hideLabel: I
        }
      ) }),
      /* @__PURE__ */ e(
        J,
        {
          side: n,
          align: i,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ya,
            {
              mediaUrl: f,
              title: h,
              description: N,
              onClose: () => s(!1),
              dismissible: !1,
              width: L,
              trackVisibility: u,
              actions: ve,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && y && /* @__PURE__ */ e(
      ee,
      {
        open: !0,
        onClose: pe,
        success: y === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Na = ra(
  null
), La = ({ children: a, fullScreen: s = !0 }) => {
  const r = se(null), [t, o] = g(r.current);
  return Ze(() => {
    o(r.current);
  }, []), /* @__PURE__ */ e(Na.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
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
}, Pa = ({
  children: a
}) => /* @__PURE__ */ e(Qe, { reducedMotion: "user", children: a }), Xa = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: c,
  l10n: n,
  isDev: i = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(Pa, { children: /* @__PURE__ */ e(
  He,
  {
    isDev: i,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(Ue, { ...n, children: /* @__PURE__ */ e(Ge, { ...c, children: /* @__PURE__ */ e(We, { ...r, children: /* @__PURE__ */ e(La, { ...s, children: /* @__PURE__ */ e(Je, { children: /* @__PURE__ */ e(
      Ye,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Xe, { ...o, children: /* @__PURE__ */ e(
          Ke,
          {
            handler: l,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), H = (a) => `datacollection-${a}`, Ka = {
  get: async (a) => JSON.parse(
    localStorage.getItem(H(a)) ?? "{}"
  ),
  set: async (a, s) => {
    localStorage.setItem(H(a), JSON.stringify(s));
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
  cs as F0AvatarIcon,
  ds as F0AvatarList,
  Q as F0AvatarModule,
  us as F0AvatarPerson,
  fs as F0AvatarTeam,
  w as F0Button,
  hs as F0ButtonDropdown,
  ms as F0ButtonToggle,
  ps as F0Card,
  gs as F0Checkbox,
  Ha as F0ChipList,
  vs as F0EventCatcherProvider,
  Ie as F0Icon,
  bs as F0Link,
  Xa as F0Provider,
  xs as F0TagAlert,
  Cs as F0TagBalance,
  ys as F0TagCompany,
  ws as F0TagDot,
  Ns as F0TagList,
  Ls as F0TagPerson,
  Be as F0TagRaw,
  Ps as F0TagStatus,
  Ss as F0TagTeam,
  Fs as GROUP_ID_SYMBOL,
  Wa as HomeLayout,
  Oa as LineChart,
  Ds as OneFilterPicker,
  $a as PieChart,
  Ye as PrivacyModeProvider,
  me as ProductBlankslate,
  ks as ProductCard,
  Ja as ProductModal,
  ya as ProductWidget,
  _a as ProgressBarChart,
  Ua as StandardLayout,
  Ms as TagCounter,
  Ga as TwoColumnLayout,
  ee as UpsellRequestResponseDialog,
  wa as UpsellingBanner,
  ae as UpsellingButton,
  Ya as UpsellingPopover,
  Ea as VerticalBarChart,
  Ma as avatarVariants,
  Ts as buildTranslations,
  qa as buttonDropdownSizes,
  Va as buttonDropdownVariants,
  za as buttonSizes,
  Aa as buttonToggleSizes,
  ja as buttonVariants,
  Bs as createAtlaskitDriver,
  Is as createDataSourceDefinition,
  Ka as dataCollectionLocalStorageHandler,
  ka as defaultTranslations,
  De as experimental,
  Rs as getAnimationVariants,
  Os as getDataSourcePaginationType,
  $s as getEmojiLabel,
  Es as isInfiniteScrollPagination,
  _s as isPageBasedPagination,
  js as modules,
  zs as tagDotColors,
  Vs as useData,
  qs as useDataSource,
  As as useDndEvents,
  Hs as useDraggable,
  Us as useDroppableList,
  Gs as useEmojiConfetti,
  Ws as useGroups,
  Js as usePrivacyMode,
  Ys as useReducedMotion,
  Xs as useSelectable,
  Ks as useXRay
};
