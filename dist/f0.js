import { C as g, L as pe, c as ge, P as H, a as b, f as ve, b as be, A as xe, B as Ce, d as ye, e as we, g as Ne, V as Le, h as G, i as U, j as Pe, k as W, S as J, l as M, m as Y, n as Se, O as Fe, o as X, p as ke, q as De, F as K, r as Me, s as Te, t as Ie, D as Be, u as Re, v as Oe, w as $e, x as Q, y as w, U as Z, z as Ee, E as _e, G as z, H as je, I as ee, J as ze, K as Ve, M as Ae, N as qe, Q as He, R as Ge, X as Ue, T as We, W as Je, Y as Ye, Z as Xe, _ as Ke } from "./hooks-D6vFHkhK.js";
import { az as Ya, $ as Xa, aB as Ka, aK as Qa, a0 as Za, a1 as er, a2 as ar, a3 as rr, a4 as sr, a5 as tr, a6 as lr, a7 as or, a9 as nr, aa as ir, ab as dr, ac as cr, aG as ur, af as fr, ag as mr, ah as hr, ai as pr, ak as gr, al as vr, am as br, an as xr, ap as Cr, ad as yr, ao as wr, ae as Nr, aj as Lr, aH as Pr, aA as Sr, au as Fr, ax as kr, at as Dr, aL as Mr, as as Tr, ar as Ir, a8 as Br, aq as Rr, av as Or, aC as $r, aD as Er, aE as _r, aM as jr, aw as zr, aF as Vr, aJ as Ar, ay as qr, aI as Hr } from "./hooks-D6vFHkhK.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Qe, { useState as v, forwardRef as I, useRef as ae, useImperativeHandle as Ze, Children as ea, useEffect as re, createContext as aa } from "react";
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
}, ka = g(
  {
    name: "Link",
    type: "info"
  },
  pe
), Da = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [ra, Ma] = ge(_), [sa, ta] = ra(_), se = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: o = null,
      max: t,
      getValueLabel: i = la,
      ...n
    } = a;
    (t || t === 0) && !V(t) && console.error(oa(`${t}`, "Progress"));
    const d = V(t) ? t : j;
    o !== null && !A(o, d) && console.error(na(`${o}`, "Progress"));
    const l = A(o, d) ? o : null, f = T(l) ? i(l, d) : void 0;
    return /* @__PURE__ */ e(sa, { scope: s, value: l, max: d, children: /* @__PURE__ */ e(
      H.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": oe(l, d),
        "data-value": l ?? void 0,
        "data-max": d,
        ...n,
        ref: r
      }
    ) });
  }
);
se.displayName = _;
var te = "ProgressIndicator", le = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...o } = a, t = ta(te, s);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": oe(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...o,
        ref: r
      }
    );
  }
);
le.displayName = te;
function la(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function oe(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function V(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function A(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function oa(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function na(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ne = se, ia = le;
const ie = E.forwardRef(({ className: a, value: r, ...s }, o) => /* @__PURE__ */ e(
  ne,
  {
    ref: o,
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
const da = ({ value: a, max: r = 100, label: s, color: o }, t) => {
  const i = o || be(0), n = a / r * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ie,
      {
        color: i,
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
}, ca = ve(da), Ta = g(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Ia = g(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), Ba = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ye
), Ra = g(
  {
    name: "LineChart",
    type: "info"
  },
  we
), Oa = g(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), $a = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), Ea = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ca
), _a = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], O = ({ count: a, list: r }) => {
  const [s, o] = v(!1), t = /* @__PURE__ */ e(M, { label: `+${a}` });
  return r != null && r.length ? /* @__PURE__ */ c(G, { open: s, onOpenChange: o, children: [
    /* @__PURE__ */ e(U, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Pe("inline-flex flex-shrink-0 items-center"), children: t }) }),
    /* @__PURE__ */ e(
      W,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          r.map((i, n) => /* @__PURE__ */ e(
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
const de = ({
  chips: a,
  max: r = 4,
  remainingCount: s,
  layout: o = "compact"
}) => {
  if (o === "fill")
    return /* @__PURE__ */ e(
      Fe,
      {
        items: a,
        renderListItem: (l) => /* @__PURE__ */ e(M, { ...l }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: s !== void 0,
        renderOverflowIndicator: (l) => /* @__PURE__ */ e(
          O,
          {
            count: (s ?? 0) + l,
            list: s ? void 0 : a.slice(a.length - l)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const t = a.slice(0, r), i = a.slice(r), n = s ?? a.length - r, d = n > 0;
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
    t.map((l, f) => /* @__PURE__ */ e(M, { ...l }, f)),
    d && /* @__PURE__ */ e(
      O,
      {
        count: n,
        list: s ? void 0 : i
      }
    )
  ] });
};
de.displayName = "F0ChipList";
const ja = Se(
  "F0ChipList",
  de
), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fa = I(function({ widgets: r, children: s }, o) {
  const t = ae(null);
  Ze(o, () => t.current);
  const i = ea.toArray(r).filter((n) => !!n).map((n, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, d));
  return /* @__PURE__ */ e(X, { layout: "home", children: /* @__PURE__ */ c("div", { ref: t, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ke, { columns: ua, showArrows: !1, children: i }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: i.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: i.slice(3) })
    ] })
  ] }) });
}), ma = I(
  function({
    children: r,
    sideContent: s,
    mainColumnPosition: o = "left",
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
                o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary",
                "border-t border-solid border-t-f1-border-secondary sm:border-t-0"
              ),
              children: r
            }
          ),
          /* @__PURE__ */ e(
            ha,
            {
              sticky: t,
              className: b(
                "order-1",
                o === "right" ? "md:order-1" : "md:order-3"
              ),
              children: s
            }
          )
        ]
      }
    ) });
  }
), ha = ({
  children: a,
  className: r
}) => /* @__PURE__ */ e(
  "aside",
  {
    className: b(
      "min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2",
      r
    ),
    children: a
  }
), pa = De({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ce = Qe.forwardRef(({ children: a, variant: r, className: s, ...o }, t) => /* @__PURE__ */ e(X, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...o,
    children: /* @__PURE__ */ e("div", { className: b(pa({ variant: r })), children: a })
  }
) }));
ce.displayName = "StandardLayout";
const za = g(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ce
), Va = g(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ma
), Aa = g(
  {
    name: "HomeLayout",
    type: "layout"
  },
  fa
), ga = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(va, { text: r }, s)) }), va = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Te, { icon: Ie, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ue = I(
  ({
    title: a,
    image: r,
    benefits: s,
    actions: o,
    withShadow: t = !0,
    module: i,
    moduleName: n,
    tag: d
  }, l) => /* @__PURE__ */ c(
    "div",
    {
      ref: l,
      className: b(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        t && "shadow-md"
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
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                i && /* @__PURE__ */ e(K, { module: i }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              d && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Me, { icon: d.icon, text: d.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ga, { benefits: s })
          ] }),
          o && /* @__PURE__ */ e("div", { className: "flex gap-3", children: o })
        ] })
      ]
    }
  )
);
ue.displayName = "ProductBlankslate";
function ba({
  isOpen: a,
  onClose: r,
  title: s,
  children: o,
  module: t,
  portalContainer: i
}) {
  const [n, d] = v(a);
  return re(() => {
    d(a);
  }, [a]), /* @__PURE__ */ e(Be, { open: n, onOpenChange: (f) => {
    d(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ c(
    Re,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c(Oe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            t && /* @__PURE__ */ e(K, { module: t, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            $e,
            {
              variant: "outline",
              icon: Q,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          o,
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
function qa({
  isOpen: a,
  onClose: r,
  title: s,
  image: o,
  benefits: t,
  errorMessage: i,
  successMessage: n,
  loadingState: d,
  nextSteps: l,
  closeLabel: f,
  primaryAction: m,
  modalTitle: N,
  modalModule: L,
  secondaryAction: u,
  portalContainer: x,
  tag: S
}) {
  const [B, F] = v(a), [C, y] = v(null), [P, h] = v(!1), k = async () => {
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
  }, D = () => {
    F(!1), r == null || r();
  }, R = P;
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ e(
      ba,
      {
        isOpen: B,
        onClose: D,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ue,
          {
            title: s,
            image: o,
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
                  onClick: k,
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
          D(), y(null);
        },
        success: C === "success",
        errorMessage: i,
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
  title: r,
  description: s,
  onClose: o,
  dismissible: t,
  width: i,
  trackVisibility: n,
  actions: d,
  showConfirmation: l = !0
}) {
  const [f, m] = v(!1), N = () => {
    m(!0), o && o();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ c(Ee, { style: { width: i }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(_e, { children: [
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
            alt: r,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(z, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(z, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(je, { className: "p-3", children: d.map(
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
const Ca = I(
  function({ primaryAction: r, secondaryAction: s, ...o }, t) {
    const i = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
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
    ), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ c(
      ze,
      {
        ref: t,
        ...o,
        primaryAction: n,
        secondaryAction: d,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && i(r),
          (s == null ? void 0 : s.variant) === "promote" && i(s)
        ]
      }
    );
  }
);
Ca.displayName = "UpsellingBanner";
function Ha({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: o = "promote",
  size: t = "md",
  showIcon: i = !0,
  side: n = "right",
  align: d = "center",
  icon: l = Ve,
  mediaUrl: f,
  title: m,
  description: N,
  width: L = "300px",
  trackVisibility: u,
  actions: x,
  onClick: S,
  hideLabel: B = !1
}) {
  const [F, C] = v(!1), [y, P] = v(null), [h, k] = v(null), D = (p) => {
    r(p), S && S();
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
    P(null), C(!1), k(null), r(!1);
  }, me = a && !F, he = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c(G, { open: me, onOpenChange: D, children: [
      /* @__PURE__ */ e(U, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: o,
          label: s,
          size: t,
          icon: i ? l : void 0,
          onClick: () => r(a),
          hideLabel: B
        }
      ) }),
      /* @__PURE__ */ e(
        W,
        {
          side: n,
          align: d,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            xa,
            {
              mediaUrl: f,
              title: m,
              description: N,
              onClose: () => r(!1),
              dismissible: !1,
              width: L,
              trackVisibility: u,
              actions: he,
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
        onClose: fe,
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
const ya = aa(
  null
), wa = ({ children: a, fullScreen: r = !0 }) => {
  const s = ae(null), [o, t] = v(s.current);
  return Ke(() => {
    t(s.current);
  }, []), /* @__PURE__ */ e(ya.Provider, { value: { element: o }, children: /* @__PURE__ */ e(
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
}) => /* @__PURE__ */ e(Xe, { reducedMotion: "user", children: a }), Ga = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: o,
  image: t,
  i18n: i,
  l10n: n,
  isDev: d = !1,
  dataCollectionStorageHandler: l,
  showExperimentalWarnings: f = !1
}) => /* @__PURE__ */ e(Na, { children: /* @__PURE__ */ e(
  Ae,
  {
    isDev: d,
    showExperimentalWarnings: f,
    children: /* @__PURE__ */ e(qe, { ...n, children: /* @__PURE__ */ e(He, { ...i, children: /* @__PURE__ */ e(Ge, { ...s, children: /* @__PURE__ */ e(wa, { ...r, children: /* @__PURE__ */ e(Ue, { children: /* @__PURE__ */ e(
      We,
      {
        initiallyEnabled: o,
        children: /* @__PURE__ */ e(Je, { ...t, children: /* @__PURE__ */ e(
          Ye,
          {
            handler: l,
            children: a
          }
        ) })
      }
    ) }) }) }) }) })
  }
) }), q = (a) => `datacollection-${a}`, Ua = {
  get: async (a) => JSON.parse(
    localStorage.getItem(q(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(q(a), JSON.stringify(r));
  }
};
export {
  Ta as AreaChart,
  Ya as Await,
  Ia as BarChart,
  w as Button,
  Ba as CategoryBarChart,
  Xa as CopyButton,
  Ka as DndProvider,
  Qa as EmojiImage,
  Za as F0Avatar,
  er as F0AvatarAlert,
  ar as F0AvatarCompany,
  rr as F0AvatarDate,
  sr as F0AvatarEmoji,
  tr as F0AvatarFile,
  lr as F0AvatarIcon,
  or as F0AvatarList,
  K as F0AvatarModule,
  nr as F0AvatarPerson,
  ir as F0AvatarTeam,
  dr as F0Card,
  cr as F0Checkbox,
  ja as F0ChipList,
  ur as F0EventCatcherProvider,
  Te as F0Icon,
  Ga as F0Provider,
  fr as F0TagAlert,
  mr as F0TagBalance,
  hr as F0TagCompany,
  pr as F0TagDot,
  gr as F0TagList,
  vr as F0TagPerson,
  Me as F0TagRaw,
  br as F0TagStatus,
  xr as F0TagTeam,
  Cr as GROUP_ID_SYMBOL,
  Aa as HomeLayout,
  Ra as LineChart,
  ka as Link,
  yr as OneFilterPicker,
  Oa as PieChart,
  We as PrivacyModeProvider,
  ue as ProductBlankslate,
  wr as ProductCard,
  qa as ProductModal,
  xa as ProductWidget,
  Ea as ProgressBarChart,
  za as StandardLayout,
  Nr as Tag,
  Lr as TagCounter,
  Va as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  Ca as UpsellingBanner,
  ee as UpsellingButton,
  Ha as UpsellingPopover,
  $a as VerticalBarChart,
  Da as avatarVariants,
  Pr as buildTranslations,
  Sr as createAtlaskitDriver,
  Fr as createDataSourceDefinition,
  Ua as dataCollectionLocalStorageHandler,
  Fa as defaultTranslations,
  Se as experimental,
  kr as getAnimationVariants,
  Dr as getDataSourcePaginationType,
  Mr as getEmojiLabel,
  Tr as isInfiniteScrollPagination,
  Ir as isPageBasedPagination,
  Br as modules,
  _a as tagDotColors,
  Rr as useData,
  Or as useDataSource,
  $r as useDndEvents,
  Er as useDraggable,
  _r as useDroppableList,
  jr as useEmojiConfetti,
  zr as useGroups,
  Vr as usePrivacyMode,
  Ar as useReducedMotion,
  qr as useSelectable,
  Hr as useXRay
};
