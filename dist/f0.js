import { C as h, L as he, c as ve, P as q, a as b, f as ge, b as be, A as xe, B as ye, d as Ce, e as we, g as Ne, V as Le, h as H, i as G, j as Pe, k as W, S as Y, l as M, m as J, n as Se, O as Fe, o as X, p as ke, q as De, F as K, r as Me, s as Te, t as Be, D as Ie, u as Re, v as Ae, w as Oe, x as Q, y as C, U as Z, z as $e, E as Ee, G as j, H as _e, I as ee, J as je, K as ze, M as Ue, N as Ve, Q as qe, R as He, X as Ge, T as We, W as Ye, Y as Je, Z as Xe, _ as Ke } from "./hooks-tFFDHc3V.js";
import { az as Ha, $ as Ga, aB as Wa, aK as Ya, a0 as Ja, a1 as Xa, a2 as Ka, a3 as Qa, a4 as Za, a5 as er, a6 as ar, a7 as rr, a9 as sr, aa as tr, ab as or, ac as lr, aG as nr, ae as ir, af as cr, ag as dr, ah as ur, ak as fr, al as mr, am as pr, an as hr, ap as vr, ad as gr, ao as br, aj as xr, aH as yr, aA as Cr, au as wr, ax as Nr, at as Lr, aL as Pr, as as Sr, ar as Fr, a8 as kr, ai as Dr, aq as Mr, av as Tr, aC as Br, aD as Ir, aE as Rr, aM as Ar, aw as Or, aF as $r, aJ as Er, ay as _r, aI as jr } from "./hooks-tFFDHc3V.js";
import { jsx as e, jsxs as d, Fragment as O } from "react/jsx-runtime";
import * as $ from "react";
import Qe, { useState as v, forwardRef as B, useRef as ae, useImperativeHandle as Ze, Children as ea, useEffect as re, createContext as aa } from "react";
const Sa = {
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
}, Fa = h(
  {
    name: "Link",
    type: "info"
  },
  he
), ka = ["person", "team", "company", "file"];
var E = "Progress", _ = 100, [ra] = ve(E), [sa, ta] = ra(E), se = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: o,
      getValueLabel: c = oa,
      ...n
    } = a;
    (o || o === 0) && !z(o) && console.error(la(`${o}`, "Progress"));
    const i = z(o) ? o : _;
    t !== null && !U(t, i) && console.error(na(`${t}`, "Progress"));
    const l = U(t, i) ? t : null, f = T(l) ? c(l, i) : void 0;
    return /* @__PURE__ */ e(sa, { scope: s, value: l, max: i, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": le(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...n,
        ref: r
      }
    ) });
  }
);
se.displayName = E;
var te = "ProgressIndicator", oe = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, o = ta(te, s);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": le(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
        ref: r
      }
    );
  }
);
oe.displayName = te;
function oa(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function le(a, r) {
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
function la(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${_}\`.`;
}
function na(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${_} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ne = se, ia = oe;
const ie = $.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  ne,
  {
    ref: t,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      ia,
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
ie.displayName = ne.displayName;
const ca = ({ value: a, max: r = 100, label: s, color: t }, o) => {
  const c = t || be(0), n = a / r * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ie,
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
}, da = ge(ca), Da = h(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Ma = h(
  {
    name: "BarChart",
    type: "info"
  },
  ye
), Ta = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ce
), Ba = h(
  {
    name: "LineChart",
    type: "info"
  },
  we
), Ia = h(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), Ra = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), Aa = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  da
), A = ({ count: a, list: r }) => {
  const [s, t] = v(!1), o = /* @__PURE__ */ e(M, { label: `+${a}` });
  return r?.length ? /* @__PURE__ */ d(H, { open: s, onOpenChange: t, children: [
    /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Pe("inline-flex flex-shrink-0 items-center"), children: o }) }),
    /* @__PURE__ */ e(
      W,
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
A.displayName = "ChipCounter";
const ce = ({
  chips: a,
  max: r = 4,
  remainingCount: s,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      Fe,
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
ce.displayName = "F0ChipList";
const Oa = Se(
  "F0ChipList",
  ce
), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fa = B(function({ widgets: r, children: s }, t) {
  const o = ae(null);
  Ze(t, () => o.current);
  const c = ea.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(X, { layout: "home", children: /* @__PURE__ */ d("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ke, { columns: ua, showArrows: !1, children: c }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: c.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: c.slice(3) })
    ] })
  ] }) });
}), ma = B(
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
), V = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), pa = De({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), de = Qe.forwardRef(({ children: a, variant: r, className: s, ...t }, o) => /* @__PURE__ */ e(X, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: b("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(pa({ variant: r })), children: a })
  }
) }));
de.displayName = "StandardLayout";
const $a = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  de
), Ea = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ma
), _a = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  fa
), ha = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(va, { text: r }, s)) }), va = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Te, { icon: Be, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ue = B(
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
                c && /* @__PURE__ */ e(K, { module: c }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              i && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Me, { icon: i.icon, text: i.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ha, { benefits: s })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
ue.displayName = "ProductBlankslate";
function ga({
  isOpen: a,
  onClose: r,
  title: s,
  children: t,
  module: o,
  portalContainer: c
}) {
  const [n, i] = v(a);
  return re(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Ie, { open: n, onOpenChange: (f) => {
    i(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ d(
    Re,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: c,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Ae, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(K, { module: o, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            Oe,
            {
              variant: "outline",
              icon: Q,
              onClick: r,
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
function ja({
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
  const [I, F] = v(a), [x, y] = v(null), [L, g] = v(!1), k = async () => {
    if (m?.onClick) {
      g(!0);
      try {
        await m.onClick(), F(!1), y("success");
      } catch {
        y("error");
      } finally {
        g(!1);
      }
    }
  }, D = () => {
    F(!1), r?.();
  }, R = L;
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ e(
      ga,
      {
        isOpen: I,
        onClose: D,
        title: w,
        module: N,
        portalContainer: P,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ue,
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
    x && /* @__PURE__ */ e(
      Z,
      {
        open: !0,
        onClose: () => {
          D(), y(null);
        },
        success: x === "success",
        errorMessage: c,
        successMessage: n,
        nextSteps: l,
        closeLabel: f,
        portalContainer: P
      }
    )
  ] });
}
function ba({
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
  const [f, m] = v(!1), w = () => {
    m(!0), t && t();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const N = a?.includes(".mp4");
  return /* @__PURE__ */ e(O, { children: f ? null : /* @__PURE__ */ d($e, { style: { width: c }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(Ee, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        C,
        {
          variant: "ghost",
          icon: Q,
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
    i && /* @__PURE__ */ e(_e, { className: "p-3", children: i.map(
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
const xa = B(
  function({ primaryAction: r, secondaryAction: s, ...t }, o) {
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
      je,
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
function za({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: o = "md",
  showIcon: c = !0,
  side: n = "right",
  align: i = "center",
  icon: l = ze,
  mediaUrl: f,
  title: m,
  description: w,
  width: N = "300px",
  trackVisibility: u,
  actions: P,
  onClick: S,
  hideLabel: I = !1
}) {
  const [F, x] = v(!1), [y, L] = v(null), [g, k] = v(null), D = (p) => {
    r(p), S && S();
  }, R = async (p) => {
    if (p.type === "upsell") {
      k(p);
      try {
        await p.onClick(), p.showConfirmation && (x(!0), L("success"));
      } catch {
        x(!0), L("error");
      }
    }
  }, fe = () => {
    L(null), x(!1), k(null), r(!1);
  }, me = a && !F, pe = P?.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ d(O, { children: [
    /* @__PURE__ */ d(H, { open: me, onOpenChange: D, children: [
      /* @__PURE__ */ e(G, { asChild: !0, children: /* @__PURE__ */ e(
        C,
        {
          variant: t,
          label: s,
          size: o,
          icon: c ? l : void 0,
          onClick: () => r(a),
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
            ba,
            {
              mediaUrl: f,
              title: m,
              description: w,
              onClose: () => r(!1),
              dismissible: !1,
              width: N,
              trackVisibility: u,
              actions: pe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    g?.type === "upsell" && g.showConfirmation && y && /* @__PURE__ */ e(
      Z,
      {
        open: !0,
        onClose: fe,
        success: y === "success",
        errorMessage: g.errorMessage,
        successMessage: g.successMessage,
        nextSteps: g.nextSteps,
        closeLabel: g.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ya = aa(
  null
), Ca = ({ children: a, fullScreen: r = !0 }) => {
  const s = ae(null), [t, o] = v(s.current);
  return Ke(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(ya.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
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
}, wa = ({
  children: a
}) => /* @__PURE__ */ e(Xe, { reducedMotion: "user", children: a }), Ua = ({
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
}) => /* @__PURE__ */ e(wa, { children: /* @__PURE__ */ e(
  Ue,
  {
    isDev: i,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(Ve, { ...n, children: /* @__PURE__ */ e(qe, { ...c, children: /* @__PURE__ */ e(He, { ...s, children: /* @__PURE__ */ e(Ca, { ...r, children: /* @__PURE__ */ e(Ge, { children: /* @__PURE__ */ e(
      We,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ye, { ...o, children: /* @__PURE__ */ e(
          Je,
          {
            handler: l,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) });
export {
  Da as AreaChart,
  Ha as Await,
  Ma as BarChart,
  C as Button,
  Ta as CategoryBarChart,
  Ga as CopyButton,
  Wa as DndProvider,
  Ya as EmojiImage,
  Ja as F0Avatar,
  Xa as F0AvatarAlert,
  Ka as F0AvatarCompany,
  Qa as F0AvatarDate,
  Za as F0AvatarEmoji,
  er as F0AvatarFile,
  ar as F0AvatarIcon,
  rr as F0AvatarList,
  K as F0AvatarModule,
  sr as F0AvatarPerson,
  tr as F0AvatarTeam,
  or as F0Card,
  lr as F0Checkbox,
  Oa as F0ChipList,
  nr as F0EventCatcherProvider,
  Te as F0Icon,
  Ua as F0Provider,
  ir as F0TagAlert,
  cr as F0TagBalance,
  dr as F0TagCompany,
  ur as F0TagDot,
  fr as F0TagList,
  mr as F0TagPerson,
  Me as F0TagRaw,
  pr as F0TagStatus,
  hr as F0TagTeam,
  vr as GROUP_ID_SYMBOL,
  _a as HomeLayout,
  Ba as LineChart,
  Fa as Link,
  gr as OneFilterPicker,
  Ia as PieChart,
  We as PrivacyModeProvider,
  ue as ProductBlankslate,
  br as ProductCard,
  ja as ProductModal,
  ba as ProductWidget,
  Aa as ProgressBarChart,
  $a as StandardLayout,
  xr as TagCounter,
  Ea as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  xa as UpsellingBanner,
  ee as UpsellingButton,
  za as UpsellingPopover,
  Ra as VerticalBarChart,
  ka as avatarVariants,
  yr as buildTranslations,
  Cr as createAtlaskitDriver,
  wr as createDataSourceDefinition,
  Sa as defaultTranslations,
  Se as experimental,
  Nr as getAnimationVariants,
  Lr as getDataSourcePaginationType,
  Pr as getEmojiLabel,
  Sr as isInfiniteScrollPagination,
  Fr as isPageBasedPagination,
  kr as modules,
  Dr as tagDotColors,
  Mr as useData,
  Tr as useDataSource,
  Br as useDndEvents,
  Ir as useDraggable,
  Rr as useDroppableList,
  Ar as useEmojiConfetti,
  Or as useGroups,
  $r as usePrivacyMode,
  Er as useReducedMotion,
  _r as useSelectable,
  jr as useXRay
};
