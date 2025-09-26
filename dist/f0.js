import { C as g, L as ge, c as ve, P as U, a as b, f as be, b as xe, A as Ce, B as ye, d as we, e as Ne, g as Le, V as Pe, h as G, i as W, j as Se, k as J, S as Y, l as M, m as X, n as Fe, O as ke, o as K, p as De, q as Me, F as Q, r as Te, s as Ie, t as Be, D as Re, u as Oe, v as $e, w as Ee, x as Z, y as w, U as ee, z as _e, E as je, G as z, H as ze, I as ae, J as Ve, K as qe, M as Ae, N as He, Q as Ue, R as Ge, X as We, T as Je, W as Ye, Y as Xe, Z as Ke, _ as Qe } from "./hooks-DFCbAmQD.js";
import { az as Ja, $ as Ya, aB as Xa, aK as Ka, a0 as Qa, a1 as Za, a2 as es, a3 as as, a4 as ss, a5 as rs, a6 as ts, a7 as ls, a9 as os, aa as ns, ab as is, ac as cs, aG as ds, ae as us, af as fs, ag as hs, ah as ms, ak as ps, al as gs, am as vs, an as bs, ap as xs, ad as Cs, ao as ys, aj as ws, aH as Ns, aA as Ls, au as Ps, ax as Ss, at as Fs, aL as ks, as as Ds, ar as Ms, a8 as Ts, ai as Is, aq as Bs, av as Rs, aC as Os, aD as $s, aE as Es, aM as _s, aw as js, aF as zs, aJ as Vs, ay as qs, aI as As } from "./hooks-DFCbAmQD.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Ze, { useState as v, forwardRef as I, useRef as se, useImperativeHandle as ea, Children as aa, useEffect as re, createContext as sa } from "react";
const Fa = {
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
}, ka = g(
  {
    name: "Link",
    type: "info"
  },
  ge
), Da = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [ra, Ma] = ve(_), [ta, la] = ra(_), te = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: l,
      getValueLabel: c = oa,
      ...n
    } = a;
    (l || l === 0) && !V(l) && console.error(na(`${l}`, "Progress"));
    const i = V(l) ? l : j;
    t !== null && !q(t, i) && console.error(ia(`${t}`, "Progress"));
    const o = q(t, i) ? t : null, f = T(o) ? c(o, i) : void 0;
    return /* @__PURE__ */ e(ta, { scope: r, value: o, max: i, children: /* @__PURE__ */ e(
      U.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ne(o, i),
        "data-value": o ?? void 0,
        "data-max": i,
        ...n,
        ref: s
      }
    ) });
  }
);
te.displayName = _;
var le = "ProgressIndicator", oe = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...t } = a, l = la(le, r);
    return /* @__PURE__ */ e(
      U.div,
      {
        "data-state": ne(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...t,
        ref: s
      }
    );
  }
);
oe.displayName = le;
function oa(a, s) {
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
var ie = te, ca = oe;
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
ce.displayName = ie.displayName;
const da = ({ value: a, max: s = 100, label: r, color: t }, l) => {
  const c = t || xe(0), n = a / s * 100;
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
}, ua = be(da), Ta = g(
  {
    name: "AreaChart",
    type: "info"
  },
  Ce
), Ia = g(
  {
    name: "BarChart",
    type: "info"
  },
  ye
), Ba = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  we
), Ra = g(
  {
    name: "LineChart",
    type: "info"
  },
  Ne
), Oa = g(
  {
    name: "PieChart",
    type: "info"
  },
  Le
), $a = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Pe
), Ea = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ua
), O = ({ count: a, list: s }) => {
  const [r, t] = v(!1), l = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ d(G, { open: r, onOpenChange: t, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Se("inline-flex flex-shrink-0 items-center"), children: l }) }),
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
  ] }) : l;
};
O.displayName = "ChipCounter";
const de = ({
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
  const l = a.slice(0, s), c = a.slice(s), n = r ?? a.length - s, i = n > 0;
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
    l.map((o, f) => /* @__PURE__ */ e(M, { ...o }, f)),
    i && /* @__PURE__ */ e(
      O,
      {
        count: n,
        list: r ? void 0 : c
      }
    )
  ] });
};
de.displayName = "F0ChipList";
const _a = Fe(
  "F0ChipList",
  de
), fa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ha = I(function({ widgets: s, children: r }, t) {
  const l = se(null);
  ea(t, () => l.current);
  const c = aa.toArray(s).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(K, { layout: "home", children: /* @__PURE__ */ d("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(De, { columns: fa, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), ma = I(
  function({ children: s, sideContent: r, mainColumnPosition: t = "left" }, l) {
    return /* @__PURE__ */ e("div", { ref: l, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
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
), A = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), pa = Me({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ue = Ze.forwardRef(({ children: a, variant: s, className: r, ...t }, l) => /* @__PURE__ */ e(K, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: b("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(pa({ variant: s })), children: a })
  }
) }));
ue.displayName = "StandardLayout";
const ja = g(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ue
), za = g(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ma
), Va = g(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ha
), ga = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(va, { text: s }, r)) }), va = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Ie, { icon: Be, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), fe = I(
  ({
    title: a,
    image: s,
    benefits: r,
    actions: t,
    withShadow: l = !0,
    module: c,
    moduleName: n,
    tag: i
  }, o) => /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        l && "shadow-md"
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
              i && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Te, { icon: i.icon, text: i.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ga, { benefits: r })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
fe.displayName = "ProductBlankslate";
function ba({
  isOpen: a,
  onClose: s,
  title: r,
  children: t,
  module: l,
  portalContainer: c
}) {
  const [n, i] = v(a);
  return re(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Re, { open: n, onOpenChange: (f) => {
    i(f), f || s();
  }, modal: !0, children: /* @__PURE__ */ d(
    Oe,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: c,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d($e, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            l && /* @__PURE__ */ e(Q, { module: l, size: "lg" }),
            r
          ] }),
          /* @__PURE__ */ e(
            Ee,
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
function qa({
  isOpen: a,
  onClose: s,
  title: r,
  image: t,
  benefits: l,
  errorMessage: c,
  successMessage: n,
  loadingState: i,
  nextSteps: o,
  closeLabel: f,
  primaryAction: h,
  modalTitle: N,
  modalModule: L,
  secondaryAction: u,
  portalContainer: x,
  tag: S
}) {
  const [B, F] = v(a), [C, y] = v(null), [P, m] = v(!1), k = async () => {
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
  }, D = () => {
    F(!1), s == null || s();
  }, R = P;
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ e(
      ba,
      {
        isOpen: B,
        onClose: D,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          fe,
          {
            title: r,
            image: t,
            benefits: l,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              h && /* @__PURE__ */ e(
                w,
                {
                  variant: h.variant,
                  label: R ? i.label : h.label,
                  icon: h.icon || void 0,
                  onClick: k,
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
          D(), y(null);
        },
        success: C === "success",
        errorMessage: c,
        successMessage: n,
        nextSteps: o,
        closeLabel: f,
        portalContainer: x
      }
    )
  ] });
}
function xa({
  mediaUrl: a,
  title: s,
  description: r,
  onClose: t,
  dismissible: l,
  width: c,
  trackVisibility: n,
  actions: i,
  showConfirmation: o = !0
}) {
  const [f, h] = v(!1), N = () => {
    h(!0), t && t();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ d(_e, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(je, { children: [
      l && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
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
    i && /* @__PURE__ */ e(ze, { className: "p-3", children: i.map(
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
const Ca = I(
  function({ primaryAction: s, secondaryAction: r, ...t }, l) {
    const c = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
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
    ), n = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0, i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
    return /* @__PURE__ */ d(
      Ve,
      {
        ref: l,
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
Ca.displayName = "UpsellingBanner";
function Aa({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: t = "promote",
  size: l = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: o = qe,
  mediaUrl: f,
  title: h,
  description: N,
  width: L = "300px",
  trackVisibility: u,
  actions: x,
  onClick: S,
  hideLabel: B = !1
}) {
  const [F, C] = v(!1), [y, P] = v(null), [m, k] = v(null), D = (p) => {
    s(p), S && S();
  }, R = async (p) => {
    if (p.type === "upsell") {
      k(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), P("success"));
      } catch {
        C(!0), P("error");
      }
    }
  }, he = () => {
    P(null), C(!1), k(null), s(!1);
  }, me = a && !F, pe = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(G, { open: me, onOpenChange: D, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: r,
          size: l,
          icon: c ? o : void 0,
          onClick: () => s(a),
          hideLabel: B
        }
      ) }),
      /* @__PURE__ */ e(
        J,
        {
          side: n,
          align: i,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            xa,
            {
              mediaUrl: f,
              title: h,
              description: N,
              onClose: () => s(!1),
              dismissible: !1,
              width: L,
              trackVisibility: u,
              actions: pe,
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
        onClose: he,
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
const ya = sa(
  null
), wa = ({ children: a, fullScreen: s = !0 }) => {
  const r = se(null), [t, l] = v(r.current);
  return Qe(() => {
    l(r.current);
  }, []), /* @__PURE__ */ e(ya.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
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
}, Na = ({
  children: a
}) => /* @__PURE__ */ e(Ke, { reducedMotion: "user", children: a }), Ha = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: l,
  i18n: c,
  l10n: n,
  isDev: i = !1,
  dataCollectionStorageHandler: o,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(Na, { children: /* @__PURE__ */ e(
  Ae,
  {
    isDev: i,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(He, { ...n, children: /* @__PURE__ */ e(Ue, { ...c, children: /* @__PURE__ */ e(Ge, { ...r, children: /* @__PURE__ */ e(wa, { ...s, children: /* @__PURE__ */ e(We, { children: /* @__PURE__ */ e(
      Je,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ye, { ...l, children: /* @__PURE__ */ e(
          Xe,
          {
            handler: o,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), H = (a) => `datacollection-${a}`, Ua = {
  get: async (a) => JSON.parse(
    localStorage.getItem(H(a)) ?? "{}"
  ),
  set: async (a, s) => {
    localStorage.setItem(H(a), JSON.stringify(s));
  }
};
export {
  Ta as AreaChart,
  Ja as Await,
  Ia as BarChart,
  w as Button,
  Ba as CategoryBarChart,
  Ya as CopyButton,
  Xa as DndProvider,
  Ka as EmojiImage,
  Qa as F0Avatar,
  Za as F0AvatarAlert,
  es as F0AvatarCompany,
  as as F0AvatarDate,
  ss as F0AvatarEmoji,
  rs as F0AvatarFile,
  ts as F0AvatarIcon,
  ls as F0AvatarList,
  Q as F0AvatarModule,
  os as F0AvatarPerson,
  ns as F0AvatarTeam,
  is as F0Card,
  cs as F0Checkbox,
  _a as F0ChipList,
  ds as F0EventCatcherProvider,
  Ie as F0Icon,
  Ha as F0Provider,
  us as F0TagAlert,
  fs as F0TagBalance,
  hs as F0TagCompany,
  ms as F0TagDot,
  ps as F0TagList,
  gs as F0TagPerson,
  Te as F0TagRaw,
  vs as F0TagStatus,
  bs as F0TagTeam,
  xs as GROUP_ID_SYMBOL,
  Va as HomeLayout,
  Ra as LineChart,
  ka as Link,
  Cs as OneFilterPicker,
  Oa as PieChart,
  Je as PrivacyModeProvider,
  fe as ProductBlankslate,
  ys as ProductCard,
  qa as ProductModal,
  xa as ProductWidget,
  Ea as ProgressBarChart,
  ja as StandardLayout,
  ws as TagCounter,
  za as TwoColumnLayout,
  ee as UpsellRequestResponseDialog,
  Ca as UpsellingBanner,
  ae as UpsellingButton,
  Aa as UpsellingPopover,
  $a as VerticalBarChart,
  Da as avatarVariants,
  Ns as buildTranslations,
  Ls as createAtlaskitDriver,
  Ps as createDataSourceDefinition,
  Ua as dataCollectionLocalStorageHandler,
  Fa as defaultTranslations,
  Fe as experimental,
  Ss as getAnimationVariants,
  Fs as getDataSourcePaginationType,
  ks as getEmojiLabel,
  Ds as isInfiniteScrollPagination,
  Ms as isPageBasedPagination,
  Ts as modules,
  Is as tagDotColors,
  Bs as useData,
  Rs as useDataSource,
  Os as useDndEvents,
  $s as useDraggable,
  Es as useDroppableList,
  _s as useEmojiConfetti,
  js as useGroups,
  zs as usePrivacyMode,
  Vs as useReducedMotion,
  qs as useSelectable,
  As as useXRay
};
