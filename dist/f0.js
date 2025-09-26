import { C as h, L as ge, c as ve, P as H, a as b, f as be, b as ye, A as xe, B as Ce, d as we, e as Ne, g as Le, V as Pe, h as G, i as W, j as Se, k as J, S as Y, l as M, m as X, n as Fe, O as ke, o as K, p as De, q as Me, F as Q, r as Te, s as Ie, t as Be, D as Re, u as Ae, v as Oe, w as $e, x as Z, y as C, U as ee, z as Ee, E as _e, G as j, H as je, I as ae, J as ze, K as Ue, M as Ve, N as qe, Q as He, R as Ge, X as We, T as Je, W as Ye, Y as Xe, Z as Ke, _ as Qe } from "./hooks-D5Rg-vWS.js";
import { az as Wa, $ as Ja, aB as Ya, aK as Xa, a0 as Ka, a1 as Qa, a2 as Za, a3 as er, a4 as ar, a5 as rr, a6 as sr, a7 as tr, a9 as or, aa as lr, ab as nr, ac as ir, aG as cr, ae as dr, af as ur, ag as fr, ah as mr, ak as pr, al as hr, am as gr, an as vr, ap as br, ad as yr, ao as xr, aj as Cr, aH as wr, aA as Nr, au as Lr, ax as Pr, at as Sr, aL as Fr, as as kr, ar as Dr, a8 as Mr, ai as Tr, aq as Ir, av as Br, aC as Rr, aD as Ar, aE as Or, aM as $r, aw as Er, aF as _r, aJ as jr, ay as zr, aI as Ur } from "./hooks-D5Rg-vWS.js";
import { jsx as e, jsxs as d, Fragment as O } from "react/jsx-runtime";
import * as $ from "react";
import Ze, { useState as g, forwardRef as I, useRef as re, useImperativeHandle as ea, Children as aa, useEffect as se, createContext as ra } from "react";
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
}, ka = h(
  {
    name: "Link",
    type: "info"
  },
  ge
), Da = ["person", "team", "company", "file"];
var E = "Progress", _ = 100, [sa] = ve(E), [ta, oa] = sa(E), te = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: o,
      getValueLabel: c = la,
      ...n
    } = a;
    (o || o === 0) && !z(o) && console.error(na(`${o}`, "Progress"));
    const i = z(o) ? o : _;
    t !== null && !U(t, i) && console.error(ia(`${t}`, "Progress"));
    const l = U(t, i) ? t : null, f = T(l) ? c(l, i) : void 0;
    return /* @__PURE__ */ e(ta, { scope: s, value: l, max: i, children: /* @__PURE__ */ e(
      H.div,
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
        ref: r
      }
    ) });
  }
);
te.displayName = E;
var oe = "ProgressIndicator", le = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, o = oa(oe, s);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": ne(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
        ref: r
      }
    );
  }
);
le.displayName = oe;
function la(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ne(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function z(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function U(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function na(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${_}\`.`;
}
function ia(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${_} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ie = te, ca = le;
const ce = $.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  ie,
  {
    ref: t,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      ca,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: s.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
ce.displayName = ie.displayName;
const da = ({ value: a, max: r = 100, label: s, color: t }, o) => {
  const c = t || ye(0), n = a / r * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ce,
      {
        color: c,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, ua = be(da), Ma = h(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Ta = h(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), Ia = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  we
), Ba = h(
  {
    name: "LineChart",
    type: "info"
  },
  Ne
), Ra = h(
  {
    name: "PieChart",
    type: "info"
  },
  Le
), Aa = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Pe
), Oa = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ua
), A = ({ count: a, list: r }) => {
  const [s, t] = g(!1), o = /* @__PURE__ */ e(M, { label: `+${a}` });
  return r?.length ? /* @__PURE__ */ d(G, { open: s, onOpenChange: t, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Se("inline-flex flex-shrink-0 items-center"), children: o }) }),
    /* @__PURE__ */ e(
      J,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ d(Y, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          r.map((c, n) => /* @__PURE__ */ e(
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
A.displayName = "ChipCounter";
const de = ({
  chips: a,
  max: r = 4,
  remainingCount: s,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      ke,
      {
        items: a,
        renderListItem: (l) => /* @__PURE__ */ e(M, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: s !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ e(
          A,
          {
            count: (s ?? 0) + l,
            list: s ? void 0 : a.slice(a.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const o = a.slice(0, r), c = a.slice(r), n = s ?? a.length - r, i = n > 0;
  return /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
    o.map((l, f) => /* @__PURE__ */ e(M, { ...l }, f)),
    i && /* @__PURE__ */ e(
      A,
      {
        count: n,
        list: s ? void 0 : c
      }
    )
  ] });
};
de.displayName = "F0ChipList";
const $a = Fe(
  "F0ChipList",
  de
), fa = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ma = I(function({ widgets: r, children: s }, t) {
  const o = re(null);
  ea(t, () => o.current);
  const c = aa.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(K, { layout: "home", children: /* @__PURE__ */ d("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(De, { columns: fa, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), pa = I(
  function({ children: r, sideContent: s, mainColumnPosition: t = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
      "div",
      {
        className: b(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(V, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: b(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          t === "left" && /* @__PURE__ */ e(V, { children: s })
        ]
      }
    ) });
  }
), V = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ha = Me({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ue = Ze.forwardRef(({ children: a, variant: r, className: s, ...t }, o) => /* @__PURE__ */ e(K, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: b("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(ha({ variant: r })), children: a })
  }
) }));
ue.displayName = "StandardLayout";
const Ea = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ue
), _a = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  pa
), ja = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ma
), ga = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(va, { text: r }, s)) }), va = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Ie, { icon: Be, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), fe = I(
  ({
    title: a,
    image: r,
    benefits: s,
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
            src: r,
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
            /* @__PURE__ */ e(ga, { benefits: s })
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
  onClose: r,
  title: s,
  children: t,
  module: o,
  portalContainer: c
}) {
  const [n, i] = g(a);
  return se(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Re, { open: n, onOpenChange: (f) => {
    i(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ d(
    Ae,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: c,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Oe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(Q, { module: o, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            $e,
            {
              variant: "outline",
              icon: Z,
              onClick: r,
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
function za({
  isOpen: a,
  onClose: r,
  title: s,
  image: t,
  benefits: o,
  errorMessage: c,
  successMessage: n,
  loadingState: i,
  nextSteps: l,
  closeLabel: f,
  primaryAction: m,
  modalTitle: w,
  modalModule: N,
  secondaryAction: u,
  portalContainer: P,
  tag: S
}) {
  const [B, F] = g(a), [y, x] = g(null), [L, v] = g(!1), k = async () => {
    if (m?.onClick) {
      v(!0);
      try {
        await m.onClick(), F(!1), x("success");
      } catch {
        x("error");
      } finally {
        v(!1);
      }
    }
  }, D = () => {
    F(!1), r?.();
  }, R = L;
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e(
      ba,
      {
        isOpen: B,
        onClose: D,
        title: w,
        module: N,
        portalContainer: P,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          fe,
          {
            title: s,
            image: t,
            benefits: o,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              m && /* @__PURE__ */ e(
                C,
                {
                  variant: m.variant,
                  label: R ? i.label : m.label,
                  icon: m.icon || void 0,
                  onClick: k,
                  loading: m.loading,
                  size: m.size
                }
              ),
              u && /* @__PURE__ */ e(
                C,
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
    y && /* @__PURE__ */ e(
      ee,
      {
        open: !0,
        onClose: () => {
          D(), x(null);
        },
        success: y === "success",
        errorMessage: c,
        successMessage: n,
        nextSteps: l,
        closeLabel: f,
        portalContainer: P
      }
    )
  ] });
}
function ya({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: t,
  dismissible: o,
  width: c,
  trackVisibility: n,
  actions: i,
  showConfirmation: l = !0
}) {
  const [f, m] = g(!1), w = () => {
    m(!0), t && t();
  };
  se(() => {
    n && n(!f);
  }, [n, f]);
  const N = a?.includes(".mp4");
  return /* @__PURE__ */ e(O, { children: f ? null : /* @__PURE__ */ d(Ee, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(_e, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        C,
        {
          variant: "ghost",
          icon: Z,
          size: "sm",
          hideLabel: !0,
          onClick: w,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (N ? /* @__PURE__ */ e(
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
            alt: r,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ d("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(j, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(j, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    i && /* @__PURE__ */ e(je, { className: "p-3", children: i.map(
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
        C,
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
const xa = I(
  function({ primaryAction: r, secondaryAction: s, ...t }, o) {
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
      C,
      {
        onClick: l.onClick,
        label: l.label,
        variant: l.variant || "default",
        size: "md",
        icon: l.icon
      }
    ), n = r?.variant !== "promote" ? r : void 0, i = s?.variant !== "promote" ? s : void 0;
    return /* @__PURE__ */ d(
      ze,
      {
        ref: o,
        ...t,
        primaryAction: n,
        secondaryAction: i,
        children: [
          r?.variant === "promote" && c(r),
          s?.variant === "promote" && c(s)
        ]
      }
    );
  }
);
xa.displayName = "UpsellingBanner";
function Ua({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: o = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: l = Ue,
  mediaUrl: f,
  title: m,
  description: w,
  width: N = "300px",
  trackVisibility: u,
  actions: P,
  onClick: S,
  hideLabel: B = !1
}) {
  const [F, y] = g(!1), [x, L] = g(null), [v, k] = g(null), D = (p) => {
    r(p), S && S();
  }, R = async (p) => {
    if (p.type === "upsell") {
      k(p);
      try {
        await p.onClick(), p.showConfirmation && (y(!0), L("success"));
      } catch {
        y(!0), L("error");
      }
    }
  }, me = () => {
    L(null), y(!1), k(null), r(!1);
  }, pe = a && !F, he = P?.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ d(G, { open: pe, onOpenChange: D, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
        C,
        {
          variant: t,
          label: s,
          size: o,
          icon: c ? l : void 0,
          onClick: () => r(a),
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
            ya,
            {
              mediaUrl: f,
              title: m,
              description: w,
              onClose: () => r(!1),
              dismissible: !1,
              width: N,
              trackVisibility: u,
              actions: he,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    v?.type === "upsell" && v.showConfirmation && x && /* @__PURE__ */ e(
      ee,
      {
        open: !0,
        onClose: me,
        success: x === "success",
        errorMessage: v.errorMessage,
        successMessage: v.successMessage,
        nextSteps: v.nextSteps,
        closeLabel: v.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Ca = ra(
  null
), wa = ({ children: a, fullScreen: r = !0 }) => {
  const s = re(null), [t, o] = g(s.current);
  return Qe(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(Ca.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "f0-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, Na = ({
  children: a
}) => /* @__PURE__ */ e(Ke, { reducedMotion: "user", children: a }), Va = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: c,
  l10n: n,
  isDev: i = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(Na, { children: /* @__PURE__ */ e(
  Ve,
  {
    isDev: i,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(qe, { ...n, children: /* @__PURE__ */ e(He, { ...c, children: /* @__PURE__ */ e(Ge, { ...s, children: /* @__PURE__ */ e(wa, { ...r, children: /* @__PURE__ */ e(We, { children: /* @__PURE__ */ e(
      Je,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ye, { ...o, children: /* @__PURE__ */ e(
          Xe,
          {
            handler: l,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), q = (a) => `datacollection-${a}`, qa = {
  get: async (a) => JSON.parse(
    localStorage.getItem(q(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(q(a), JSON.stringify(r));
  }
};
export {
  Ma as AreaChart,
  Wa as Await,
  Ta as BarChart,
  C as Button,
  Ia as CategoryBarChart,
  Ja as CopyButton,
  Ya as DndProvider,
  Xa as EmojiImage,
  Ka as F0Avatar,
  Qa as F0AvatarAlert,
  Za as F0AvatarCompany,
  er as F0AvatarDate,
  ar as F0AvatarEmoji,
  rr as F0AvatarFile,
  sr as F0AvatarIcon,
  tr as F0AvatarList,
  Q as F0AvatarModule,
  or as F0AvatarPerson,
  lr as F0AvatarTeam,
  nr as F0Card,
  ir as F0Checkbox,
  $a as F0ChipList,
  cr as F0EventCatcherProvider,
  Ie as F0Icon,
  Va as F0Provider,
  dr as F0TagAlert,
  ur as F0TagBalance,
  fr as F0TagCompany,
  mr as F0TagDot,
  pr as F0TagList,
  hr as F0TagPerson,
  Te as F0TagRaw,
  gr as F0TagStatus,
  vr as F0TagTeam,
  br as GROUP_ID_SYMBOL,
  ja as HomeLayout,
  Ba as LineChart,
  ka as Link,
  yr as OneFilterPicker,
  Ra as PieChart,
  Je as PrivacyModeProvider,
  fe as ProductBlankslate,
  xr as ProductCard,
  za as ProductModal,
  ya as ProductWidget,
  Oa as ProgressBarChart,
  Ea as StandardLayout,
  Cr as TagCounter,
  _a as TwoColumnLayout,
  ee as UpsellRequestResponseDialog,
  xa as UpsellingBanner,
  ae as UpsellingButton,
  Ua as UpsellingPopover,
  Aa as VerticalBarChart,
  Da as avatarVariants,
  wr as buildTranslations,
  Nr as createAtlaskitDriver,
  Lr as createDataSourceDefinition,
  qa as dataCollectionLocalStorageHandler,
  Fa as defaultTranslations,
  Fe as experimental,
  Pr as getAnimationVariants,
  Sr as getDataSourcePaginationType,
  Fr as getEmojiLabel,
  kr as isInfiniteScrollPagination,
  Dr as isPageBasedPagination,
  Mr as modules,
  Tr as tagDotColors,
  Ir as useData,
  Br as useDataSource,
  Rr as useDndEvents,
  Ar as useDraggable,
  Or as useDroppableList,
  $r as useEmojiConfetti,
  Er as useGroups,
  _r as usePrivacyMode,
  jr as useReducedMotion,
  zr as useSelectable,
  Ur as useXRay
};
