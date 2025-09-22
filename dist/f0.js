import { C as h, L as xe, c as be, P as U, a as x, f as ye, b as Ce, A as we, B as Ne, d as Le, e as Pe, g as Se, V as Fe, h as G, i as W, j as ke, k as Y, S as J, l as M, m as X, n as Te, O as De, o as K, p as Me, q as Q, r as Ie, F as Z, s as Be, t as Re, u as Oe, D as $e, v as Ee, w as _e, x as je, y as ee, z as w, U as ae, E as Ve, G as ze, H as V, I as qe, J as re, K as Ae, M as He, N as Ue, Q as Ge, R as We, T as Ye, X as Je, W as Xe, Y as Ke, Z as Qe, _ as Ze } from "./hooks-BG4MksjZ.js";
import { az as Qa, $ as Za, aB as er, aK as ar, a0 as rr, a1 as sr, a2 as tr, a3 as or, a4 as lr, a5 as nr, a6 as ir, a7 as dr, a9 as cr, aa as ur, ab as fr, ac as pr, aG as mr, ae as gr, af as hr, ag as vr, ah as xr, ak as br, al as yr, am as Cr, an as wr, ap as Nr, ad as Lr, ao as Pr, aj as Sr, aH as Fr, aA as kr, au as Tr, ax as Dr, at as Mr, aL as Ir, as as Br, ar as Rr, a8 as Or, ai as $r, aq as Er, av as _r, aC as jr, aD as Vr, aE as zr, aM as qr, aw as Ar, aF as Hr, aJ as Ur, ay as Gr, aI as Wr } from "./hooks-BG4MksjZ.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import ea, { useState as v, forwardRef as N, createElement as aa, useRef as se, useImperativeHandle as ra, Children as sa, useEffect as te, createContext as ta } from "react";
const Ia = {
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
}, Ba = h(
  {
    name: "Link",
    type: "info"
  },
  xe
), Ra = ["person", "team", "company", "file"];
var _ = "Progress", j = 100, [oa, Oa] = be(_), [la, na] = oa(_), oe = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: t = null,
      max: o,
      getValueLabel: n = ia,
      ...i
    } = a;
    (o || o === 0) && !z(o) && console.error(da(`${o}`, "Progress"));
    const d = z(o) ? o : j;
    t !== null && !q(t, d) && console.error(ca(`${t}`, "Progress"));
    const l = q(t, d) ? t : null, f = I(l) ? n(l, d) : void 0;
    return /* @__PURE__ */ e(la, { scope: s, value: l, max: d, children: /* @__PURE__ */ e(
      U.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": I(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ie(l, d),
        "data-value": l ?? void 0,
        "data-max": d,
        ...i,
        ref: r
      }
    ) });
  }
);
oe.displayName = _;
var le = "ProgressIndicator", ne = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...t } = a, o = na(le, s);
    return /* @__PURE__ */ e(
      U.div,
      {
        "data-state": ie(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...t,
        ref: r
      }
    );
  }
);
ne.displayName = le;
function ia(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ie(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function I(a) {
  return typeof a == "number";
}
function z(a) {
  return I(a) && !isNaN(a) && a > 0;
}
function q(a, r) {
  return I(a) && !isNaN(a) && a <= r && a >= 0;
}
function da(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function ca(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var de = oe, ua = ne;
const ce = E.forwardRef(({ className: a, value: r, ...s }, t) => /* @__PURE__ */ e(
  de,
  {
    ref: t,
    className: x(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...s,
    children: /* @__PURE__ */ e(
      ua,
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
ce.displayName = de.displayName;
const fa = ({ value: a, max: r = 100, label: s, color: t }, o) => {
  const n = t || Ce(0), i = a / r * 100;
  return /* @__PURE__ */ c("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ce,
      {
        color: n,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${i.toFixed(1)}%`
      }
    ) }),
    s && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: s })
  ] });
}, pa = ye(fa), $a = h(
  {
    name: "AreaChart",
    type: "info"
  },
  we
), Ea = h(
  {
    name: "BarChart",
    type: "info"
  },
  Ne
), _a = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Le
), ja = h(
  {
    name: "LineChart",
    type: "info"
  },
  Pe
), Va = h(
  {
    name: "PieChart",
    type: "info"
  },
  Se
), za = h(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Fe
), qa = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  pa
), O = ({ count: a, list: r }) => {
  const [s, t] = v(!1), o = /* @__PURE__ */ e(M, { label: `+${a}` });
  return r != null && r.length ? /* @__PURE__ */ c(G, { open: s, onOpenChange: t, children: [
    /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e("button", { className: ke("inline-flex flex-shrink-0 items-center"), children: o }) }),
    /* @__PURE__ */ e(
      Y,
      {
        className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
        align: "end",
        children: /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col", children: [
          r.map((n, i) => /* @__PURE__ */ e(
            "div",
            {
              className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
              children: /* @__PURE__ */ e(M, { ...n })
            },
            i
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
const ue = ({
  chips: a,
  max: r = 4,
  remainingCount: s,
  layout: t = "compact"
}) => {
  if (t === "fill")
    return /* @__PURE__ */ e(
      De,
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
  const o = a.slice(0, r), n = a.slice(r), i = s ?? a.length - r, d = i > 0;
  return /* @__PURE__ */ c("div", { className: "flex items-center gap-2", children: [
    o.map((l, f) => /* @__PURE__ */ e(M, { ...l }, f)),
    d && /* @__PURE__ */ e(
      O,
      {
        count: i,
        list: s ? void 0 : n
      }
    )
  ] });
};
ue.displayName = "F0ChipList";
const Aa = Te(
  "F0ChipList",
  ue
), A = K({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), ma = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, fe = N(
  ({
    children: a,
    variant: r,
    align: s,
    className: t,
    as: o,
    ellipsis: n,
    noEllipsisTooltip: i,
    ...d
  }, l) => {
    const f = o ?? ma[r ?? "body"];
    return n !== void 0 ? /* @__PURE__ */ e(
      Me,
      {
        ref: l,
        lines: typeof n == "number" ? n : 1,
        noTooltip: i,
        tag: f,
        className: x(A({ variant: r, align: s }), t),
        ...d,
        children: a
      }
    ) : aa(
      f,
      {
        ...d,
        className: x(A({ variant: r, align: s }), t),
        ref: l
      },
      a
    );
  }
);
fe.displayName = "TextInternal";
const ga = ["className"], ha = N((a) => {
  const r = ga.reduce((s, t) => {
    const { [t]: o, ...n } = s;
    return n;
  }, a);
  return /* @__PURE__ */ e(fe, { ...r });
});
ha.displayName = "F0Text";
const va = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, xa = N(function({ widgets: r, children: s }, t) {
  const o = se(null);
  ra(t, () => o.current);
  const n = sa.toArray(r).filter((i) => !!i).map((i, d) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, d));
  return /* @__PURE__ */ e(Q, { layout: "home", children: /* @__PURE__ */ c("div", { ref: o, className: "@container", children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(Ie, { columns: va, showArrows: !1, children: n }),
      /* @__PURE__ */ e("main", { children: s })
    ] }),
    /* @__PURE__ */ c("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: n.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: s }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: n.slice(3) })
    ] })
  ] }) });
}), ba = N(
  function({ children: r, sideContent: s, mainColumnPosition: t = "left" }, o) {
    return /* @__PURE__ */ e("div", { ref: o, className: "h-full overflow-auto", children: /* @__PURE__ */ c(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(H, { children: s }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          t === "left" && /* @__PURE__ */ e(H, { children: s })
        ]
      }
    ) });
  }
), H = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), ya = K({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), pe = ea.forwardRef(({ children: a, variant: r, className: s, ...t }, o) => /* @__PURE__ */ e(Q, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: o,
    className: x("relative flex-1 overflow-auto", s),
    ...t,
    children: /* @__PURE__ */ e("div", { className: x(ya({ variant: r })), children: a })
  }
) }));
pe.displayName = "StandardLayout";
const Ha = h(
  {
    name: "StandardLayout",
    type: "layout"
  },
  pe
), Ua = h(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ba
), Ga = h(
  {
    name: "HomeLayout",
    type: "layout"
  },
  xa
), Ca = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((r, s) => /* @__PURE__ */ e(wa, { text: r }, s)) }), wa = ({ text: a }) => /* @__PURE__ */ c("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(Re, { icon: Oe, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), me = N(
  ({
    title: a,
    image: r,
    benefits: s,
    actions: t,
    withShadow: o = !0,
    module: n,
    moduleName: i,
    tag: d
  }, l) => /* @__PURE__ */ c(
    "div",
    {
      ref: l,
      className: x(
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
        /* @__PURE__ */ c("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ c("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ c("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ c("div", { className: "flex flex-row items-center gap-2", children: [
                n && /* @__PURE__ */ e(Z, { module: n }),
                i && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              d && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(Be, { icon: d.icon, text: d.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(Ca, { benefits: s })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
me.displayName = "ProductBlankslate";
function Na({
  isOpen: a,
  onClose: r,
  title: s,
  children: t,
  module: o,
  portalContainer: n
}) {
  const [i, d] = v(a);
  return te(() => {
    d(a);
  }, [a]), /* @__PURE__ */ e($e, { open: i, onOpenChange: (f) => {
    d(f), f || r();
  }, modal: !0, children: /* @__PURE__ */ c(
    Ee,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: n,
      children: [
        /* @__PURE__ */ c("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ c(_e, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            o && /* @__PURE__ */ e(Z, { module: o, size: "lg" }),
            s
          ] }),
          /* @__PURE__ */ e(
            je,
            {
              variant: "outline",
              icon: ee,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ c(J, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
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
function Wa({
  isOpen: a,
  onClose: r,
  title: s,
  image: t,
  benefits: o,
  errorMessage: n,
  successMessage: i,
  loadingState: d,
  nextSteps: l,
  closeLabel: f,
  primaryAction: p,
  modalTitle: L,
  modalModule: P,
  secondaryAction: u,
  portalContainer: b,
  tag: F
}) {
  const [B, k] = v(a), [y, C] = v(null), [S, m] = v(!1), T = async () => {
    if (p != null && p.onClick) {
      m(!0);
      try {
        await p.onClick(), k(!1), C("success");
      } catch {
        C("error");
      } finally {
        m(!1);
      }
    }
  }, D = () => {
    k(!1), r == null || r();
  }, R = S;
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ e(
      Na,
      {
        isOpen: B,
        onClose: D,
        title: L,
        module: P,
        portalContainer: b,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          me,
          {
            title: s,
            image: t,
            benefits: o,
            withShadow: !1,
            tag: F,
            actions: /* @__PURE__ */ c("div", { className: "flex gap-3", children: [
              p && /* @__PURE__ */ e(
                w,
                {
                  variant: p.variant,
                  label: R ? d.label : p.label,
                  icon: p.icon || void 0,
                  onClick: T,
                  loading: p.loading,
                  size: p.size
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
    y && /* @__PURE__ */ e(
      ae,
      {
        open: !0,
        onClose: () => {
          D(), C(null);
        },
        success: y === "success",
        errorMessage: n,
        successMessage: i,
        nextSteps: l,
        closeLabel: f,
        portalContainer: b
      }
    )
  ] });
}
function La({
  mediaUrl: a,
  title: r,
  description: s,
  onClose: t,
  dismissible: o,
  width: n,
  trackVisibility: i,
  actions: d,
  showConfirmation: l = !0
}) {
  const [f, p] = v(!1), L = () => {
    p(!0), t && t();
  };
  te(() => {
    i && i(!f);
  }, [i, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e($, { children: f ? null : /* @__PURE__ */ c(Ve, { style: { width: n }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ c(ze, { children: [
      o && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: ee,
          size: "sm",
          hideLabel: !0,
          onClick: L,
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
            alt: r,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ c("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(V, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ e(V, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: s })
        ] })
      ] })
    ] }),
    d && /* @__PURE__ */ e(qe, { className: "p-3", children: d.map(
      (u) => u.type === "upsell" ? /* @__PURE__ */ e(
        re,
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
const Pa = N(
  function({ primaryAction: r, secondaryAction: s, ...t }, o) {
    const n = (l) => l.variant === "promote" ? /* @__PURE__ */ e(
      re,
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
    ), i = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
    return /* @__PURE__ */ c(
      Ae,
      {
        ref: o,
        ...t,
        primaryAction: i,
        secondaryAction: d,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && n(r),
          (s == null ? void 0 : s.variant) === "promote" && n(s)
        ]
      }
    );
  }
);
Pa.displayName = "UpsellingBanner";
function Ya({
  isOpen: a,
  setIsOpen: r,
  label: s,
  variant: t = "promote",
  size: o = "md",
  showIcon: n = !0,
  side: i = "right",
  align: d = "center",
  icon: l = He,
  mediaUrl: f,
  title: p,
  description: L,
  width: P = "300px",
  trackVisibility: u,
  actions: b,
  onClick: F,
  hideLabel: B = !1
}) {
  const [k, y] = v(!1), [C, S] = v(null), [m, T] = v(null), D = (g) => {
    r(g), F && F();
  }, R = async (g) => {
    if (g.type === "upsell") {
      T(g);
      try {
        await g.onClick(), g.showConfirmation && (y(!0), S("success"));
      } catch {
        y(!0), S("error");
      }
    }
  }, ge = () => {
    S(null), y(!1), T(null), r(!1);
  }, he = a && !k, ve = b == null ? void 0 : b.map((g) => g.type === "upsell" ? {
    ...g,
    onClick: () => R(g)
  } : g);
  return /* @__PURE__ */ c($, { children: [
    /* @__PURE__ */ c(G, { open: he, onOpenChange: D, children: [
      /* @__PURE__ */ e(W, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: s,
          size: o,
          icon: n ? l : void 0,
          onClick: () => r(a),
          hideLabel: B
        }
      ) }),
      /* @__PURE__ */ e(
        Y,
        {
          side: i,
          align: d,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            La,
            {
              mediaUrl: f,
              title: p,
              description: L,
              onClose: () => r(!1),
              dismissible: !1,
              width: P,
              trackVisibility: u,
              actions: ve,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && C && /* @__PURE__ */ e(
      ae,
      {
        open: !0,
        onClose: ge,
        success: C === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const Sa = ta(
  null
), Fa = ({ children: a, fullScreen: r = !0 }) => {
  const s = se(null), [t, o] = v(s.current);
  return Ze(() => {
    o(s.current);
  }, []), /* @__PURE__ */ e(Sa.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: s,
      id: "f0-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    }
  ) });
}, ka = ({
  children: a
}) => /* @__PURE__ */ e(Qe, { reducedMotion: "user", children: a }), Ja = ({
  children: a,
  layout: r,
  link: s,
  privacyModeInitiallyEnabled: t,
  image: o,
  i18n: n,
  l10n: i,
  isDev: d = !1,
  showExperimentalWarnings: l = !1
}) => /* @__PURE__ */ e(ka, { children: /* @__PURE__ */ e(
  Ue,
  {
    isDev: d,
    showExperimentalWarnings: l,
    children: /* @__PURE__ */ e(Ge, { ...i, children: /* @__PURE__ */ e(We, { ...n, children: /* @__PURE__ */ e(Ye, { ...s, children: /* @__PURE__ */ e(Fa, { ...r, children: /* @__PURE__ */ e(Je, { children: /* @__PURE__ */ e(
      Xe,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(Ke, { ...o, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  $a as AreaChart,
  Qa as Await,
  Ea as BarChart,
  w as Button,
  _a as CategoryBarChart,
  Za as CopyButton,
  er as DndProvider,
  ar as EmojiImage,
  rr as F0Avatar,
  sr as F0AvatarAlert,
  tr as F0AvatarCompany,
  or as F0AvatarDate,
  lr as F0AvatarEmoji,
  nr as F0AvatarFile,
  ir as F0AvatarIcon,
  dr as F0AvatarList,
  Z as F0AvatarModule,
  cr as F0AvatarPerson,
  ur as F0AvatarTeam,
  fr as F0Card,
  pr as F0Checkbox,
  Aa as F0ChipList,
  mr as F0EventCatcherProvider,
  Re as F0Icon,
  gr as F0TagAlert,
  hr as F0TagBalance,
  vr as F0TagCompany,
  xr as F0TagDot,
  br as F0TagList,
  yr as F0TagPerson,
  Be as F0TagRaw,
  Cr as F0TagStatus,
  wr as F0TagTeam,
  ha as F0Text,
  Ja as FactorialOneProvider,
  Nr as GROUP_ID_SYMBOL,
  Ga as HomeLayout,
  ja as LineChart,
  Ba as Link,
  Lr as OneFilterPicker,
  Va as PieChart,
  Xe as PrivacyModeProvider,
  me as ProductBlankslate,
  Pr as ProductCard,
  Wa as ProductModal,
  La as ProductWidget,
  qa as ProgressBarChart,
  Ha as StandardLayout,
  Sr as TagCounter,
  Ua as TwoColumnLayout,
  ae as UpsellRequestResponseDialog,
  Pa as UpsellingBanner,
  re as UpsellingButton,
  Ya as UpsellingPopover,
  za as VerticalBarChart,
  Ra as avatarVariants,
  Fr as buildTranslations,
  kr as createAtlaskitDriver,
  Tr as createDataSourceDefinition,
  Ia as defaultTranslations,
  Te as experimental,
  Dr as getAnimationVariants,
  Mr as getDataSourcePaginationType,
  Ir as getEmojiLabel,
  Br as isInfiniteScrollPagination,
  Rr as isPageBasedPagination,
  Or as modules,
  $r as tagDotColors,
  Er as useData,
  _r as useDataSource,
  jr as useDndEvents,
  Vr as useDraggable,
  zr as useDroppableList,
  qr as useEmojiConfetti,
  Ar as useGroups,
  Hr as usePrivacyMode,
  Ur as useReducedMotion,
  Gr as useSelectable,
  Wr as useXRay
};
