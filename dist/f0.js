import { c as ve, P as H, a as b, f as be, b as xe, C as v, B as Ce, d as ye, L as we, e as Ne, V as Le, A as Pe, g as U, h as G, i as Se, j as W, S as Y, k as M, l as J, m as Fe, O as De, n as X, o as ke, p as Me, F as K, q as Te, r as Be, s as Ie, D as Re, t as Oe, u as $e, v as Ee, w as Q, x as w, U as Z, y as _e, z as je, E as V, G as Ve, H as ee, I as ze, J as qe, K as Ae, M as He, N as Ue, Q as Ge, X as We, R as Ye, T as Je, W as Xe, Y as Ke } from "./hooks-1W3oT6b-.js";
import { az as Ka, aB as Qa, aK as Za, $ as es, a0 as as, a1 as ss, a2 as rs, a3 as ts, a4 as os, a5 as ls, a6 as ns, a8 as is, a9 as cs, Z as ds, aa as us, ab as fs, ac as hs, aG as ms, _ as ps, ae as gs, af as vs, ag as bs, ah as xs, ak as Cs, al as ys, am as ws, an as Ns, ap as Ls, ad as Ps, ao as Ss, aj as Fs, aH as Ds, aA as ks, au as Ms, ax as Ts, at as Bs, aL as Is, as as Rs, ar as Os, a7 as $s, ai as Es, aq as _s, av as js, aC as Vs, aD as zs, aE as qs, aM as As, aw as Hs, aF as Us, aJ as Gs, ay as Ws, aI as Ys } from "./hooks-1W3oT6b-.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Qe, { useState as g, forwardRef as B, useRef as ae, useImperativeHandle as Ze, Children as ea, useEffect as se, createContext as aa } from "react";
const re = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote"
], sa = ["link"];
[
  ...re,
  ...sa
];
const te = ["sm", "md", "lg"], Fa = re, Da = te, ka = {
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
}, Ma = ["person", "team", "company", "file"], Ta = ["default", "outline", "neutral"], Ba = te;
var _ = "Progress", j = 100, [ra, Ia] = ve(_), [ta, oa] = ra(_), oe = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: o,
      getValueLabel: c = la,
      ...n
    } = a;
    (o || o === 0) && !z(o) && console.error(na(`${o}`, "Progress"));
    const i = z(o) ? o : j;
    t !== null && !q(t, i) && console.error(ia(`${t}`, "Progress"));
    const l = q(t, i) ? t : null, f = T(l) ? c(l, i) : void 0;
    return /* @__PURE__ */ e(ta, { scope: r, value: l, max: i, children: /* @__PURE__ */ e(
      H.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ie(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...n,
        ref: s
      }
    ) });
  }
);
oe.displayName = _;
var le = "ProgressIndicator", ne = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...t } = a, o = oa(le, r);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": ie(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
        ref: s
      }
    );
  }
);
ne.displayName = le;
function la(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function ie(a, s) {
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
var ce = oe, ca = ne;
const de = E.forwardRef(({ className: a, value: s, ...r }, t) => /* @__PURE__ */ e(
  ce,
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
de.displayName = ce.displayName;
const da = ({ value: a, max: s = 100, label: r, color: t }, o) => {
  const c = t || xe(0), n = a / s * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      de,
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
}, ua = be(da), Ra = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Pe
), Oa = v(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), $a = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ye
), Ea = v(
  {
    name: "LineChart",
    type: "info"
  },
  we
), _a = v(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), ja = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), Va = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ua
), za = ["sm", "md", "lg"], O = ({ count: a, list: s }) => {
  const [r, t] = g(!1), o = /* @__PURE__ */ e(M, { label: `+${a}` });
  return s != null && s.length ? /* @__PURE__ */ d(U, { open: r, onOpenChange: t, children: [
    /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Se("inline-flex flex-shrink-0 items-center"), children: o }) }),
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
  ] }) : o;
};
O.displayName = "ChipCounter";
const ue = ({
  chips: a,
  max: s = 4,
  remainingCount: r,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      De,
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
ue.displayName = "F0ChipList";
const qa = Fe(
  "F0ChipList",
  ue
), fa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ha = B(function({ widgets: s, children: r }, t) {
  const o = ae(null);
  Ze(t, () => o.current);
  const c = ea.toArray(s).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(X, { layout: "home", children: /* @__PURE__ */ d("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ke, { columns: fa, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), ma = B(
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
), A = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), pa = Me({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), fe = Qe.forwardRef(({ children: a, variant: s, className: r, ...t }, o) => /* @__PURE__ */ e(X, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: b("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(pa({ variant: s })), children: a })
  }
) }));
fe.displayName = "StandardLayout";
const Aa = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  fe
), Ha = v(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ma
), Ua = v(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ha
), ga = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(va, { text: s }, r)) }), va = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Be, { icon: Ie, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), he = B(
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
                c && /* @__PURE__ */ e(K, { module: c }),
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
he.displayName = "ProductBlankslate";
function ba({
  isOpen: a,
  onClose: s,
  title: r,
  children: t,
  module: o,
  portalContainer: c
}) {
  const [n, i] = g(a);
  return se(() => {
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
            o && /* @__PURE__ */ e(K, { module: o, size: "lg" }),
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
function Ga({
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
      ba,
      {
        isOpen: I,
        onClose: k,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          he,
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
      Z,
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
function xa({
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
  se(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ d(_e, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(je, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
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
    i && /* @__PURE__ */ e(Ve, { className: "p-3", children: i.map(
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
const Ca = B(
  function({ primaryAction: s, secondaryAction: r, ...t }, o) {
    const c = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
      ee,
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
      ze,
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
Ca.displayName = "UpsellingBanner";
function Wa({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: t = "promote",
  size: o = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: l = qe,
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
  }, me = () => {
    P(null), C(!1), D(null), s(!1);
  }, pe = a && !F, ge = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d($, { children: [
    /* @__PURE__ */ d(U, { open: pe, onOpenChange: k, children: [
      /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e(
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
        W,
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
              actions: ge,
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
        onClose: me,
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
const ya = aa(
  null
), wa = ({ children: a, fullScreen: s = !0 }) => {
  const r = ae(null), [t, o] = g(r.current);
  return Ke(() => {
    o(r.current);
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
}) => /* @__PURE__ */ e(Xe, { reducedMotion: "user", children: a }), Ya = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: c,
  l10n: n,
  isDev: i = !1,
  showExperimentalWarnings: l = !1
}) => /* @__PURE__ */ e(Na, { children: /* @__PURE__ */ e(
  Ae,
  {
    isDev: i,
    showExperimentalWarnings: l,
    children: /* @__PURE__ */ e(He, { ...n, children: /* @__PURE__ */ e(Ue, { ...c, children: /* @__PURE__ */ e(Ge, { ...r, children: /* @__PURE__ */ e(wa, { ...s, children: /* @__PURE__ */ e(We, { children: /* @__PURE__ */ e(
      Ye,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Je, { ...o, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Ra as AreaChart,
  Ka as Await,
  Oa as BarChart,
  $a as CategoryBarChart,
  Qa as DndProvider,
  Za as EmojiImage,
  es as F0Avatar,
  as as F0AvatarAlert,
  ss as F0AvatarCompany,
  rs as F0AvatarDate,
  ts as F0AvatarEmoji,
  os as F0AvatarFile,
  ls as F0AvatarIcon,
  ns as F0AvatarList,
  K as F0AvatarModule,
  is as F0AvatarPerson,
  cs as F0AvatarTeam,
  w as F0Button,
  ds as F0ButtonDropdown,
  us as F0ButtonToggle,
  fs as F0Card,
  hs as F0Checkbox,
  qa as F0ChipList,
  ms as F0EventCatcherProvider,
  Be as F0Icon,
  ps as F0Link,
  gs as F0TagAlert,
  vs as F0TagBalance,
  bs as F0TagCompany,
  xs as F0TagDot,
  Cs as F0TagList,
  ys as F0TagPerson,
  Te as F0TagRaw,
  ws as F0TagStatus,
  Ns as F0TagTeam,
  Ya as FactorialOneProvider,
  Ls as GROUP_ID_SYMBOL,
  Ua as HomeLayout,
  Ea as LineChart,
  Ps as OneFilterPicker,
  _a as PieChart,
  Ye as PrivacyModeProvider,
  he as ProductBlankslate,
  Ss as ProductCard,
  Ga as ProductModal,
  xa as ProductWidget,
  Va as ProgressBarChart,
  Aa as StandardLayout,
  Fs as TagCounter,
  Ha as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  Ca as UpsellingBanner,
  ee as UpsellingButton,
  Wa as UpsellingPopover,
  ja as VerticalBarChart,
  Ma as avatarVariants,
  Ds as buildTranslations,
  Ba as buttonDropdownSizes,
  Ta as buttonDropdownVariants,
  Da as buttonSizes,
  za as buttonToggleSizes,
  Fa as buttonVariants,
  ks as createAtlaskitDriver,
  Ms as createDataSourceDefinition,
  ka as defaultTranslations,
  Fe as experimental,
  Ts as getAnimationVariants,
  Bs as getDataSourcePaginationType,
  Is as getEmojiLabel,
  Rs as isInfiniteScrollPagination,
  Os as isPageBasedPagination,
  $s as modules,
  Es as tagDotColors,
  _s as useData,
  js as useDataSource,
  Vs as useDndEvents,
  zs as useDraggable,
  qs as useDroppableList,
  As as useEmojiConfetti,
  Hs as useGroups,
  Us as usePrivacyMode,
  Gs as useReducedMotion,
  Ws as useSelectable,
  Ys as useXRay
};
