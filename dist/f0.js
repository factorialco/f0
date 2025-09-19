import { C as v, L as pe, c as ve, P as H, a as b, f as ge, b as be, A as xe, B as Ce, d as ye, e as we, g as Ne, V as Le, h as U, i as W, j as Pe, k as Y, S as G, l as D, m as X, n as ke, O as Fe, o as J, p as Se, q as Me, F as K, r as De, s as Te, t as Be, D as Re, u as Ie, v as $e, w as Oe, x as Q, y as w, U as Z, z as Ee, E as _e, G as z, H as je, I as ee, J as ze, K as Ve, M as qe, N as Ae, Q as He, R as Ue, X as We, T as Ye, W as Ge, Y as Xe, Z as Je } from "./hooks-C89NmioF.js";
import { ao as Ua, _ as Wa, aq as Ya, az as Ga, $ as Xa, a0 as Ja, a1 as Ka, a2 as Qa, a3 as Za, a4 as er, a5 as ar, a6 as rr, a8 as sr, a9 as tr, aa as lr, ab as or, av as nr, ad as ir, ae as dr, af as cr, ag as ur, aj as fr, ak as hr, al as mr, am as pr, ac as vr, an as gr, ai as br, aw as xr, ap as Cr, aA as yr, a7 as wr, ah as Nr, ar as Lr, as as Pr, at as kr, aB as Fr, au as Sr, ay as Mr, ax as Dr } from "./hooks-C89NmioF.js";
import { jsx as e, jsxs as c, Fragment as O } from "react/jsx-runtime";
import * as E from "react";
import Ke, { useState as g, forwardRef as B, useRef as ae, useImperativeHandle as Qe, Children as Ze, useEffect as re, createContext as ea } from "react";
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
    description: "Chat with AI",
    expandChat: "Expand chat",
    minimizeChat: "Minimize chat window",
    openChat: "Open Chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "I'm One. Ask or make anything.",
    initialMessage: "How can I help you today?"
  }
}, ka = v(
  {
    name: "Link",
    type: "info"
  },
  pe
), Fa = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [aa, Sa] = ve(_), [ra, sa] = aa(_), se = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: l,
      getValueLabel: d = ta,
      ...n
    } = a;
    (l || l === 0) && !V(l) && console.error(la(`${l}`, "Progress"));
    const i = V(l) ? l : j;
    t !== null && !q(t, i) && console.error(oa(`${t}`, "Progress"));
    const o = q(t, i) ? t : null, f = T(o) ? d(o, i) : void 0;
    return /* @__PURE__ */ e(ra, { scope: s, value: o, max: i, children: /* @__PURE__ */ e(
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
        ref: r
      }
    ) });
  }
);
se.displayName = _;
var te = "ProgressIndicator", le = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, l = sa(te, s);
    return /* @__PURE__ */ e(
      H.div,
      {
        "data-state": oe(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...t,
        ref: r
      }
    );
  }
);
le.displayName = te;
function ta(a, r) {
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
function q(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function la(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function oa(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ne = se, na = le;
const ie = E.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  ne,
  {
    ref: t,
    className: b(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      na,
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
const ia = ({ value: a, max: r = 100, label: s, color: t }, l) => {
  const d = t || be(0), n = a / r * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ie,
      {
        color: d,
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
}, da = ge(ia), Ma = v(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Da = v(
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
), Ra = v(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), Ia = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), $a = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  da
), $ = ({ count: a, list: r }) => {
  const [s, t] = g(!1), l = /* @__PURE__ */ e(D, { label: `+${a}` });
  return r != null && r.length ? /* @__PURE__ */ c(U, { open: s, onOpenChange: t, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: Pe("inline-flex flex-shrink-0 items-center"), children: l }) }),
    /* @__PURE__ */ e(
      Y,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ c(G, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          r.map((d, n) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(D, { ...d })
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
$.displayName = "ChipCounter";
const de = ({
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
        renderListItem: (o) => /* @__PURE__ */ e(D, { ...o }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: s !== void 0,
        renderOverflowIndicator: (o) => /* @__PURE__ */ e(
          $,
          {
            count: (s ?? 0) + o,
            list: s ? void 0 : a.slice(a.length - o)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const l = a.slice(0, r), d = a.slice(r), n = s ?? a.length - r, i = n > 0;
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
    l.map((o, f) => /* @__PURE__ */ e(D, { ...o }, f)),
    i && /* @__PURE__ */ e(
      $,
      {
        count: n,
        list: s ? void 0 : d
      }
    )
  ] });
};
de.displayName = "F0ChipList";
const Oa = ke(
  "F0ChipList",
  de
), ca = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ua = B(function({ widgets: r, children: s }, t) {
  const l = ae(null);
  Qe(t, () => l.current);
  const d = Ze.toArray(r).filter((n) => !!n).map((n, i) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: n }, i));
  return /* @__PURE__ */ e(J, { layout: "home", children: /* @__PURE__ */ c("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(Se, { columns: ca, showArrows: !1, children: d }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: d.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: d.slice(3) })
    ] })
  ] }) });
}), fa = B(
  function({ children: r, sideContent: s, mainColumnPosition: t = "left" }, l) {
    return /* @__PURE__ */ e("div", { ref: l, className: "h-full overflow-auto", children: /* @__PURE__ */ c(
      "div",
      {
        className: b(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(A, { children: s }),
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
          t === "left" && /* @__PURE__ */ e(A, { children: s })
        ]
      }
    ) });
  }
), A = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ha = Me({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ce = Ke.forwardRef(({ children: a, variant: r, className: s, ...t }, l) => /* @__PURE__ */ e(J, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: b("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: b(ha({ variant: r })), children: a })
  }
) }));
ce.displayName = "StandardLayout";
const Ea = v(
  {
    name: "StandardLayout",
    type: "layout"
  },
  ce
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
), ma = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(pa, { text: r }, s)) }), pa = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Te, { icon: Be, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), ue = B(
  ({
    title: a,
    image: r,
    benefits: s,
    actions: t,
    withShadow: l = !0,
    module: d,
    moduleName: n,
    tag: i
  }, o) => /* @__PURE__ */ c(
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
            src: r,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                d && /* @__PURE__ */ e(K, { module: d }),
                n && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: n })
              ] }),
              i && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(De, { icon: i.icon, text: i.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ma, { benefits: s })
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
  onClose: r,
  title: s,
  children: t,
  module: l,
  portalContainer: d
}) {
  const [n, i] = g(a);
  return re(() => {
    i(a);
  }, [a]), /* @__PURE__ */ e(Re, { open: n, onOpenChange: (f) => {
    i(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ c(
    Ie,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: d,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c($e, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            l && /* @__PURE__ */ e(K, { module: l, size: "lg" }),
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
        /* @__PURE__ */ c(G, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
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
  benefits: l,
  errorMessage: d,
  successMessage: n,
  loadingState: i,
  nextSteps: o,
  closeLabel: f,
  primaryAction: h,
  modalTitle: N,
  modalModule: L,
  secondaryAction: u,
  portalContainer: x,
  tag: k
}) {
  const [R, F] = g(a), [C, y] = g(null), [P, m] = g(!1), S = async () => {
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
  }, M = () => {
    F(!1), r == null || r();
  }, I = P;
  return /* @__PURE__ */ c(O, { children: [
    /* @__PURE__ */ e(
      va,
      {
        isOpen: R,
        onClose: M,
        title: N,
        module: L,
        portalContainer: x,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          ue,
          {
            title: s,
            image: t,
            benefits: l,
            withShadow: !1,
            tag: k,
            actions: /* @__PURE__ */ c("div", { className: "flex gap-3", children: [
              h && /* @__PURE__ */ e(
                w,
                {
                  variant: h.variant,
                  label: I ? i.label : h.label,
                  icon: h.icon || void 0,
                  onClick: S,
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
          M(), y(null);
        },
        success: C === "success",
        errorMessage: d,
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
  title: r,
  description: s,
  onClose: t,
  dismissible: l,
  width: d,
  trackVisibility: n,
  actions: i,
  showConfirmation: o = !0
}) {
  const [f, h] = g(!1), N = () => {
    h(!0), t && t();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(O, { children: f ? null : /* @__PURE__ */ c(Ee, { style: { width: d }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(_e, { children: [
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
  function({ primaryAction: r, secondaryAction: s, ...t }, l) {
    const d = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
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
    ), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, i = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ c(
      ze,
      {
        ref: l,
        ...t,
        primaryAction: n,
        secondaryAction: i,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && d(r),
          (s == null ? void 0 : s.variant) === "promote" && d(s)
        ]
      }
    );
  }
);
ba.displayName = "UpsellingBanner";
function Va({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: l = "md",
  showIcon: d = !0,
  side: n = "right",
  align: i = "center",
  icon: o = Ve,
  mediaUrl: f,
  title: h,
  description: N,
  width: L = "300px",
  trackVisibility: u,
  actions: x,
  onClick: k,
  hideLabel: R = !1
}) {
  const [F, C] = g(!1), [y, P] = g(null), [m, S] = g(null), M = (p) => {
    r(p), k && k();
  }, I = async (p) => {
    if (p.type === "upsell") {
      S(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), P("success"));
      } catch {
        C(!0), P("error");
      }
    }
  }, fe = () => {
    P(null), C(!1), S(null), r(!1);
  }, he = a && !F, me = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => I(p)
  } : p);
  return /* @__PURE__ */ c(O, { children: [
    /* @__PURE__ */ c(U, { open: he, onOpenChange: M, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: s,
          size: l,
          icon: d ? o : void 0,
          onClick: () => r(a),
          hideLabel: R
        }
      ) }),
      /* @__PURE__ */ e(
        Y,
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
              onClose: () => r(!1),
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
), Ca = ({ children: a, fullScreen: r = !0 }) => {
  const s = ae(null), [t, l] = g(s.current);
  return Je(() => {
    l(s.current);
  }, []), /* @__PURE__ */ e(xa.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
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
}, ya = ({
  children: a
}) => /* @__PURE__ */ e(Xe, { reducedMotion: "user", children: a }), qa = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: t,
  image: l,
  i18n: d,
  l10n: n,
  isDev: i = !1,
  showExperimentalWarnings: o = !1
}) => /* @__PURE__ */ e(ya, { children: /* @__PURE__ */ e(
  qe,
  {
    isDev: i,
    showExperimentalWarnings: o,
    children: /* @__PURE__ */ e(Ae, { ...n, children: /* @__PURE__ */ e(He, { ...d, children: /* @__PURE__ */ e(Ue, { ...s, children: /* @__PURE__ */ e(Ca, { ...r, children: /* @__PURE__ */ e(We, { children: /* @__PURE__ */ e(
      Ye,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ge, { ...l, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Ma as AreaChart,
  Ua as Await,
  Da as BarChart,
  w as Button,
  Ta as CategoryBarChart,
  Wa as CopyButton,
  Ya as DndProvider,
  Ga as EmojiImage,
  Xa as F0Avatar,
  Ja as F0AvatarAlert,
  Ka as F0AvatarCompany,
  Qa as F0AvatarDate,
  Za as F0AvatarEmoji,
  er as F0AvatarFile,
  ar as F0AvatarIcon,
  rr as F0AvatarList,
  K as F0AvatarModule,
  sr as F0AvatarPerson,
  tr as F0AvatarTeam,
  lr as F0Card,
  or as F0Checkbox,
  Oa as F0ChipList,
  nr as F0EventCatcherProvider,
  Te as F0Icon,
  ir as F0TagAlert,
  dr as F0TagBalance,
  cr as F0TagCompany,
  ur as F0TagDot,
  fr as F0TagList,
  hr as F0TagPerson,
  De as F0TagRaw,
  mr as F0TagStatus,
  pr as F0TagTeam,
  qa as FactorialOneProvider,
  ja as HomeLayout,
  Ba as LineChart,
  ka as Link,
  vr as OneFilterPicker,
  Ra as PieChart,
  Ye as PrivacyModeProvider,
  ue as ProductBlankslate,
  gr as ProductCard,
  za as ProductModal,
  ga as ProductWidget,
  $a as ProgressBarChart,
  Ea as StandardLayout,
  br as TagCounter,
  _a as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  ba as UpsellingBanner,
  ee as UpsellingButton,
  Va as UpsellingPopover,
  Ia as VerticalBarChart,
  Fa as avatarVariants,
  xr as buildTranslations,
  Cr as createAtlaskitDriver,
  Pa as defaultTranslations,
  ke as experimental,
  yr as getEmojiLabel,
  wr as modules,
  Nr as tagDotColors,
  Lr as useDndEvents,
  Pr as useDraggable,
  kr as useDroppableList,
  Fr as useEmojiConfetti,
  Sr as usePrivacyMode,
  Mr as useReducedMotion,
  Dr as useXRay
};
