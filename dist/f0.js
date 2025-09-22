import { C as v, L as pe, c as ve, P as H, a as b, f as ge, b as be, A as xe, B as Ce, d as ye, e as we, g as Ne, V as Le, h as U, i as G, j as Pe, k as W, S as Y, l as M, m as J, n as Se, O as Fe, o as X, p as ke, q as De, F as K, r as Me, s as Te, t as Be, D as Ie, u as Re, v as Oe, w as $e, x as Q, y as w, U as Z, z as Ee, E as _e, G as V, H as je, I as ee, J as Ve, K as ze, M as qe, N as Ae, Q as He, R as Ue, X as Ge, T as We, W as Ye, Y as Je, Z as Xe } from "./hooks-DT1C-hbB.js";
import { ay as Ua, _ as Ga, aA as Wa, aJ as Ya, $ as Ja, a0 as Xa, a1 as Ka, a2 as Qa, a3 as Za, a4 as es, a5 as as, a6 as ss, a8 as rs, a9 as ts, aa as ls, ab as os, aF as ns, ad as is, ae as cs, af as ds, ag as us, aj as fs, ak as hs, al as ms, am as ps, ao as vs, ac as gs, an as bs, ai as xs, aG as Cs, az as ys, at as ws, aw as Ns, as as Ls, aK as Ps, ar as Ss, aq as Fs, a7 as ks, ah as Ds, ap as Ms, au as Ts, aB as Bs, aC as Is, aD as Rs, aL as Os, av as $s, aE as Es, aI as _s, ax as js, aH as Vs } from "./hooks-DT1C-hbB.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Ke, { useState as g, forwardRef as B, useRef as ae, useImperativeHandle as Qe, Children as Ze, useEffect as se, createContext as ea } from "react";
const Pa = {
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
      }
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
    welcome: "I'm One. Ask or make anything.",
    initialMessage: "How can I help you today?"
  }
}, Sa = v(
  {
    name: "Link",
    type: "info"
  },
  pe
), Fa = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [aa, ka] = ve(_), [sa, ra] = aa(_), re = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: l,
      getValueLabel: c = ta,
      ...n
    } = a;
    (l || l === 0) && !z(l) && console.error(la(`${l}`, "Progress"));
    const i = z(l) ? l : j;
    t !== null && !q(t, i) && console.error(oa(`${t}`, "Progress"));
    const o = q(t, i) ? t : null, f = T(o) ? c(o, i) : void 0;
    return /* @__PURE__ */ e(sa, { scope: r, value: o, max: i, children: /* @__PURE__ */ e(
      H.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": oe(o, i),
        "data-value": o ?? void 0,
        "data-max": i,
        ...n,
        ref: s
      }
    ) });
  }
);
re.displayName = _;
var te = "ProgressIndicator", le = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...t } = a, l = ra(te, r);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": oe(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...t,
        ref: s
      }
    );
  }
);
le.displayName = te;
function ta(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function oe(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function z(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function q(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function la(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function oa(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ne = re, na = le;
const ie = E.forwardRef(({ className: a, value: s, ...r }, t) => /* @__PURE__ */ e(
  ne,
  {
    ref: t,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      na,
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
const ia = ({ value: a, max: s = 100, label: r, color: t }, l) => {
  const c = t || be(0), n = a / s * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ie,
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
}, ca = ge(ia), Da = v(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Ma = v(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), Ta = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ye
), Ba = v(
  {
    name: "LineChart",
    type: "info"
  },
  we
), Ia = v(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), Ra = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), Oa = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ca
), O = ({ count: a, list: s }) => {
  const [r, t] = g(!1), l = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ d(U, { open: r, onOpenChange: t, children: [
    /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Pe("inline-flex flex-shrink-0 items-center"), children: l }) }),
    /* @__PURE__ */ e(
      W,
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
            J,
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
const ce = ({
  chips: a,
  max: s = 4,
  remainingCount: r,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      Fe,
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
ce.displayName = "F0ChipList";
const $a = Se(
  "F0ChipList",
  ce
), da = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ua = B(function({ widgets: s, children: r }, t) {
  const l = ae(null);
  Qe(t, () => l.current);
  const c = Ze.toArray(s).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(X, { layout: "home", children: /* @__PURE__ */ d("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ke, { columns: da, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), fa = B(
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
), A = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ha = De({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), de = Ke.forwardRef(({ children: a, variant: s, className: r, ...t }, l) => /* @__PURE__ */ e(X, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: b("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(ha({ variant: s })), children: a })
  }
) }));
de.displayName = "StandardLayout";
const Ea = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  de
), _a = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  fa
), ja = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ua
), ma = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(pa, { text: s }, r)) }), pa = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Te, { icon: Be, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ue = B(
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
                c && /* @__PURE__ */ e(K, { module: c }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              i && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Me, { icon: i.icon, text: i.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ma, { benefits: r })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
ue.displayName = "ProductBlankslate";
function va({
  isOpen: a,
  onClose: s,
  title: r,
  children: t,
  module: l,
  portalContainer: c
}) {
  const [n, i] = g(a);
  return se(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Ie, { open: n, onOpenChange: (f) => {
    i(f), f || s();
  }, modal: !0, children: /* @__PURE__ */ d(
    Re,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: c,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Oe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            l && /* @__PURE__ */ e(K, { module: l, size: "lg" }),
            r
          ] }),
          /* @__PURE__ */ e(
            $e,
            {
              variant: "outline",
              icon: Q,
              onClick: s,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ d(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          t,
          /* @__PURE__ */ e(
            J,
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
function Va({
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
  const [I, F] = g(a), [C, y] = g(null), [P, m] = g(!1), k = async () => {
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
      va,
      {
        isOpen: I,
        onClose: D,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ue,
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
      Z,
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
function ga({
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
  const [f, h] = g(!1), N = () => {
    h(!0), t && t();
  };
  se(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ d(Ee, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(_e, { children: [
      l && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
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
          /* @__PURE__ */ e(V, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(V, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(je, { className: "p-3", children: i.map(
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
const ba = B(
  function({ primaryAction: s, secondaryAction: r, ...t }, l) {
    const c = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
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
ba.displayName = "UpsellingBanner";
function za({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: t = "promote",
  size: l = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: o = ze,
  mediaUrl: f,
  title: h,
  description: N,
  width: L = "300px",
  trackVisibility: u,
  actions: x,
  onClick: S,
  hideLabel: I = !1
}) {
  const [F, C] = g(!1), [y, P] = g(null), [m, k] = g(null), D = (p) => {
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
  }, fe = () => {
    P(null), C(!1), k(null), s(!1);
  }, he = a && !F, me = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(U, { open: he, onOpenChange: D, children: [
      /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: r,
          size: l,
          icon: c ? o : void 0,
          onClick: () => s(a),
          hideLabel: I
        }
      ) }),
      /* @__PURE__ */ e(
        W,
        {
          side: n,
          align: i,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ga,
            {
              mediaUrl: f,
              title: h,
              description: N,
              onClose: () => s(!1),
              dismissible: !1,
              width: L,
              trackVisibility: u,
              actions: me,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && y && /* @__PURE__ */ e(
      Z,
      {
        open: !0,
        onClose: fe,
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
const xa = ea(
  null
), Ca = ({ children: a, fullScreen: s = !0 }) => {
  const r = ae(null), [t, l] = g(r.current);
  return Xe(() => {
    l(r.current);
  }, []), /* @__PURE__ */ e(xa.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
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
}, ya = ({
  children: a
}) => /* @__PURE__ */ e(Je, { reducedMotion: "user", children: a }), qa = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: l,
  i18n: c,
  l10n: n,
  isDev: i = !1,
  showExperimentalWarnings: o = !1
}) => /* @__PURE__ */ e(ya, { children: /* @__PURE__ */ e(
  qe,
  {
    isDev: i,
    showExperimentalWarnings: o,
    children: /* @__PURE__ */ e(Ae, { ...n, children: /* @__PURE__ */ e(He, { ...c, children: /* @__PURE__ */ e(Ue, { ...r, children: /* @__PURE__ */ e(Ca, { ...s, children: /* @__PURE__ */ e(Ge, { children: /* @__PURE__ */ e(
      We,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ye, { ...l, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Da as AreaChart,
  Ua as Await,
  Ma as BarChart,
  w as Button,
  Ta as CategoryBarChart,
  Ga as CopyButton,
  Wa as DndProvider,
  Ya as EmojiImage,
  Ja as F0Avatar,
  Xa as F0AvatarAlert,
  Ka as F0AvatarCompany,
  Qa as F0AvatarDate,
  Za as F0AvatarEmoji,
  es as F0AvatarFile,
  as as F0AvatarIcon,
  ss as F0AvatarList,
  K as F0AvatarModule,
  rs as F0AvatarPerson,
  ts as F0AvatarTeam,
  ls as F0Card,
  os as F0Checkbox,
  $a as F0ChipList,
  ns as F0EventCatcherProvider,
  Te as F0Icon,
  is as F0TagAlert,
  cs as F0TagBalance,
  ds as F0TagCompany,
  us as F0TagDot,
  fs as F0TagList,
  hs as F0TagPerson,
  Me as F0TagRaw,
  ms as F0TagStatus,
  ps as F0TagTeam,
  qa as FactorialOneProvider,
  vs as GROUP_ID_SYMBOL,
  ja as HomeLayout,
  Ba as LineChart,
  Sa as Link,
  gs as OneFilterPicker,
  Ia as PieChart,
  We as PrivacyModeProvider,
  ue as ProductBlankslate,
  bs as ProductCard,
  Va as ProductModal,
  ga as ProductWidget,
  Oa as ProgressBarChart,
  Ea as StandardLayout,
  xs as TagCounter,
  _a as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  ba as UpsellingBanner,
  ee as UpsellingButton,
  za as UpsellingPopover,
  Ra as VerticalBarChart,
  Fa as avatarVariants,
  Cs as buildTranslations,
  ys as createAtlaskitDriver,
  ws as createDataSourceDefinition,
  Pa as defaultTranslations,
  Se as experimental,
  Ns as getAnimationVariants,
  Ls as getDataSourcePaginationType,
  Ps as getEmojiLabel,
  Ss as isInfiniteScrollPagination,
  Fs as isPageBasedPagination,
  ks as modules,
  Ds as tagDotColors,
  Ms as useData,
  Ts as useDataSource,
  Bs as useDndEvents,
  Is as useDraggable,
  Rs as useDroppableList,
  Os as useEmojiConfetti,
  $s as useGroups,
  Es as usePrivacyMode,
  _s as useReducedMotion,
  js as useSelectable,
  Vs as useXRay
};
