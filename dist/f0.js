import { C as g, L as ge, c as ve, P as G, a as b, f as be, g as z, A as xe, B as Ce, b as ye, d as we, e as Ne, V as Pe, h as M, i as H, j as U, k as Le, l as J, S as Y, m as X, n as Se, O as Fe, o as K, p as ke, q as De, F as Q, r as Me, s as Te, t as Ie, D as Re, u as Be, v as Oe, w as $e, x as Z, y as w, U as ee, z as Ee, E as _e, G as A, H as je, I as ae, J as ze, K as Ae, M as Ve, N as qe, Q as We, R as Ge, X as He, T as Ue, W as Je, Y as Ye, Z as Xe, _ as Ke } from "./hooks-CsReoQEo.js";
import { az as Ja, $ as Ya, aB as Xa, aK as Ka, a0 as Qa, a1 as Za, a2 as er, a3 as ar, a4 as rr, a5 as sr, a6 as tr, a7 as lr, a9 as or, aa as nr, ab as ir, ac as dr, aG as cr, ae as ur, af as fr, ag as mr, ah as hr, ak as pr, al as gr, am as vr, an as br, ap as xr, ad as Cr, ao as yr, aj as wr, aH as Nr, aA as Pr, au as Lr, ax as Sr, at as Fr, aL as kr, as as Dr, ar as Mr, a8 as Tr, ai as Ir, aq as Rr, av as Br, aC as Or, aD as $r, aE as Er, aM as _r, aw as jr, aF as zr, aJ as Ar, ay as Vr, aI as qr } from "./hooks-CsReoQEo.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Qe, { useState as v, forwardRef as I, useRef as re, useImperativeHandle as Ze, Children as ea, useEffect as se, createContext as aa } from "react";
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
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
  },
  toc: {
    search: "Search..."
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
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}"
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
}, ka = g({
  name: "Link",
  type: "info"
}, ge), Da = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var _ = "Progress", j = 100, [ra, Ma] = ve(_), [sa, ta] = ra(_), te = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: t,
      getValueLabel: i = la,
      ...n
    } = a;
    (t || t === 0) && !V(t) && console.error(oa(`${t}`, "Progress"));
    const d = V(t) ? t : j;
    l !== null && !q(l, d) && console.error(na(`${l}`, "Progress"));
    const o = q(l, d) ? l : null, f = T(o) ? i(o, d) : void 0;
    return /* @__PURE__ */ e(sa, { scope: s, value: o, max: d, children: /* @__PURE__ */ e(
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
        ref: r
      }
    ) });
  }
);
te.displayName = _;
var le = "ProgressIndicator", oe = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, t = ta(le, s);
    return /* @__PURE__ */ e(
      G.div,
      {
        "data-state": ne(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
        ref: r
      }
    );
  }
);
oe.displayName = le;
function la(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ne(a, r) {
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
var ie = te, ia = oe;
const de = E.forwardRef(({ className: a, value: r, ...s }, l) => e(ie, {
  ref: l,
  className: b("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...s,
  children: e(ia, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: s.color,
      transform: `translateX(-${100 - (r || 0)}%)`
    }
  })
}));
de.displayName = ie.displayName;
const da = ({ value: a, max: r = 100, label: s, color: l }, t) => {
  const i = l ? z(l) : z("categorical-1"), n = a / r * 100;
  return c("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [e("div", {
      className: "flex-grow",
      children: e(de, {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      })
    }), s && e("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: s
    })]
  });
}, ca = be(da), Ta = g(
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
), Ra = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  ye
), Ba = g(
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
  Pe
), Ea = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ca
), O = ({ count: a, list: r }) => {
  const [s, l] = v(!1), t = e(M, {
    label: `+${a}`
  });
  return r != null && r.length ? c(H, {
    open: s,
    onOpenChange: l,
    children: [e(U, {
      asChild: !0,
      children: e("button", {
        className: Le("inline-flex flex-shrink-0 items-center"),
        children: t
      })
    }), e(J, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: c(Y, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [r.map((i, n) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(M, {
            ...i
          })
        }, n)), e(X, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : t;
};
O.displayName = "ChipCounter";
const ce = ({ chips: a, max: r = 4, remainingCount: s, layout: l = "compact" }) => {
  if (l === "fill")
    return e(Fe, {
      items: a,
      renderListItem: (o) => e(M, {
        ...o
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: s !== void 0,
      renderOverflowIndicator: (o) => e(O, {
        count: (s ?? 0) + o,
        list: s ? void 0 : a.slice(a.length - o)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const t = a.slice(0, r), i = a.slice(r), n = s ?? a.length - r, d = n > 0;
  return c("div", {
    className: "flex items-center gap-2",
    children: [t.map((o, f) => e(M, {
      ...o
    }, f)), d && e(O, {
      count: n,
      list: s ? void 0 : i
    })]
  });
};
ce.displayName = "F0ChipList";
const _a = Se("F0ChipList", ce), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fa = I(function({ widgets: r, children: s }, l) {
  const t = re(null);
  Ze(l, () => t.current);
  const i = ea.toArray(r).filter((n) => !!n).map((n, d) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, d));
  return e(K, {
    layout: "home",
    children: c("div", {
      ref: t,
      className: "@container",
      children: [c("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(ke, {
          columns: ua,
          showArrows: !1,
          children: i
        }), e("main", {
          children: s
        })]
      }), c("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [e("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: i.slice(0, 3)
        }), e("main", {
          className: "col-span-2",
          children: s
        }), e("div", {
          className: "flex flex-1 flex-col gap-5",
          children: i.slice(3)
        })]
      })]
    })
  });
}), ma = I(function({ children: r, sideContent: s, mainColumnPosition: l = "left", sticky: t = !1 }, i) {
  return e("div", {
    ref: i,
    className: "h-full",
    children: c("div", {
      className: b("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", t && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: b("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(ha, {
        sticky: t,
        className: b("order-1", l === "right" ? "md:order-1" : "md:order-3"),
        children: s
      })]
    })
  });
}), ha = ({ children: a, className: r }) => e("aside", {
  className: b("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), pa = De({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ue = Qe.forwardRef(({ children: a, variant: r, className: s, ...l }, t) => e(K, {
  layout: "standard",
  children: e("section", {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...l,
    children: e("div", {
      className: b(pa({
        variant: r
      })),
      children: a
    })
  })
}));
ue.displayName = "StandardLayout";
const ja = g({
  name: "StandardLayout",
  type: "layout"
}, ue), za = g({
  name: "TwoColumnLayout",
  type: "layout"
}, ma), Aa = g({
  name: "HomeLayout",
  type: "layout"
}, fa), ga = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((r, s) => e(va, {
    text: r
  }, s))
}), va = ({ text: a }) => c("div", {
  className: "flex flex-row items-start gap-2",
  children: [e(Te, {
    icon: Ie,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), fe = I(({ title: a, image: r, benefits: s, actions: l, withShadow: t = !0, module: i, moduleName: n, tag: d }, o) => c("div", {
  ref: o,
  className: b("bg-white flex flex-row rounded-xl border border-f1-border-secondary", t && "shadow-md"),
  children: [e("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: e("img", {
      src: r,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), c("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [c("div", {
      className: "flex flex-col gap-5",
      children: [c("div", {
        className: "flex flex-col gap-2",
        children: [c("div", {
          className: "flex flex-row items-center gap-2",
          children: [i && e(Q, {
            module: i
          }), n && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: n
          })]
        }), d && e("div", {
          className: "flex justify-start",
          children: e(Me, {
            icon: d.icon,
            text: d.label
          })
        }), e("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: a
        })]
      }), e(ga, {
        benefits: s
      })]
    }), l && e("div", {
      className: "flex gap-3",
      children: l
    })]
  })]
}));
fe.displayName = "ProductBlankslate";
function ba({ isOpen: a, onClose: r, title: s, children: l, module: t, portalContainer: i }) {
  const [n, d] = v(a);
  return se(() => {
    d(a);
  }, [a]), e(Re, {
    open: n,
    onOpenChange: (f) => {
      d(f), f || r();
    },
    modal: !0,
    children: c(Be, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [c("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [c(Oe, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [t && e(Q, {
            module: t,
            size: "lg"
          }), s]
        }), e($e, {
          variant: "outline",
          icon: Z,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), c(Y, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [l, e(X, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Va({ isOpen: a, onClose: r, title: s, image: l, benefits: t, errorMessage: i, successMessage: n, loadingState: d, nextSteps: o, closeLabel: f, primaryAction: m, modalTitle: N, modalModule: P, secondaryAction: u, portalContainer: x, tag: S }) {
  const [R, F] = v(a), [C, y] = v(null), [L, h] = v(!1), k = async () => {
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
  }, B = L;
  return c($, {
    children: [e(ba, {
      isOpen: R,
      onClose: D,
      title: N,
      module: P,
      portalContainer: x,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(fe, {
          title: s,
          image: l,
          benefits: t,
          withShadow: !1,
          tag: S,
          actions: c("div", {
            className: "flex gap-3",
            children: [m && e(w, {
              variant: m.variant,
              label: B ? d.label : m.label,
              icon: m.icon || void 0,
              onClick: k,
              loading: m.loading,
              size: m.size
            }), u && e(w, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), C && e(ee, {
      open: !0,
      onClose: () => {
        D(), y(null);
      },
      success: C === "success",
      errorMessage: i,
      successMessage: n,
      nextSteps: o,
      closeLabel: f,
      portalContainer: x
    })]
  });
}
function xa({ mediaUrl: a, title: r, description: s, onClose: l, dismissible: t, width: i, trackVisibility: n, actions: d, showConfirmation: o = !0 }) {
  const [f, m] = v(!1), N = () => {
    m(!0), l && l();
  };
  se(() => {
    n && n(!f);
  }, [n, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return e($, {
    children: f ? null : c(Ee, {
      style: {
        width: i
      },
      className: "relative bg-f1-background p-1",
      children: [c(_e, {
        children: [t && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(w, {
            variant: "ghost",
            icon: Z,
            size: "sm",
            hideLabel: !0,
            onClick: N,
            label: "Close"
          })
        }), c("div", {
          children: [e("div", {
            children: a && (P ? e("video", {
              src: a,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : e("img", {
              src: a,
              alt: r,
              className: "h-full w-full rounded-md"
            }))
          }), c("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [e(A, {
              className: "text-lg font-medium",
              children: r
            }), e(A, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: s
            })]
          })]
        })]
      }), d && e(je, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? e(ae, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: o && u.showConfirmation,
          variant: u.variant
        }, u.label) : e(w, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const Ca = I(function({ primaryAction: r, secondaryAction: s, ...l }, t) {
  const i = (o) => o.variant === "promote" ? e(ae, {
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
  }) : e(w, {
    onClick: o.onClick,
    label: o.label,
    variant: o.variant || "default",
    size: "md",
    icon: o.icon
  }), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
  return c(ze, {
    ref: t,
    ...l,
    primaryAction: n,
    secondaryAction: d,
    children: [(r == null ? void 0 : r.variant) === "promote" && i(r), (s == null ? void 0 : s.variant) === "promote" && i(s)]
  });
});
Ca.displayName = "UpsellingBanner";
function qa({ isOpen: a, setIsOpen: r, label: s, variant: l = "promote", size: t = "md", showIcon: i = !0, side: n = "right", align: d = "center", icon: o = Ae, mediaUrl: f, title: m, description: N, width: P = "300px", trackVisibility: u, actions: x, onClick: S, hideLabel: R = !1 }) {
  const [F, C] = v(!1), [y, L] = v(null), [h, k] = v(null), D = (p) => {
    r(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      k(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), L("success"));
      } catch {
        C(!0), L("error");
      }
    }
  }, me = () => {
    L(null), C(!1), k(null), r(!1);
  }, he = a && !F, pe = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return c($, {
    children: [c(H, {
      open: he,
      onOpenChange: D,
      children: [e(U, {
        asChild: !0,
        children: e(w, {
          variant: l,
          label: s,
          size: t,
          icon: i ? o : void 0,
          onClick: () => r(a),
          hideLabel: R
        })
      }), e(J, {
        side: n,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(xa, {
          mediaUrl: f,
          title: m,
          description: N,
          onClose: () => r(!1),
          dismissible: !1,
          width: P,
          trackVisibility: u,
          actions: pe,
          showConfirmation: !1
        })
      })]
    }), (h == null ? void 0 : h.type) === "upsell" && h.showConfirmation && y && e(ee, {
      open: !0,
      onClose: me,
      success: y === "success",
      errorMessage: h.errorMessage,
      successMessage: h.successMessage,
      nextSteps: h.nextSteps,
      closeLabel: h.closeLabel,
      portalContainer: null
    })]
  });
}
const ya = aa(null), wa = ({ children: a, fullScreen: r = !0 }) => {
  const s = re(null), [l, t] = v(s.current);
  return Ke(() => {
    t(s.current);
  }, []), e(ya.Provider, {
    value: {
      element: l
    },
    children: e("div", {
      ref: s,
      id: "f0-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    })
  });
}, Na = ({ children: a }) => e(Xe, {
  reducedMotion: "user",
  children: a
}), Wa = ({ children: a, layout: r, link: s, privacyModeInitiallyEnabled: l, image: t, i18n: i, l10n: n, isDev: d = !1, dataCollectionStorageHandler: o, showExperimentalWarnings: f = !1 }) => e(Na, {
  children: e(Ve, {
    isDev: d,
    showExperimentalWarnings: f,
    children: e(qe, {
      ...n,
      children: e(We, {
        ...i,
        children: e(Ge, {
          ...s,
          children: e(wa, {
            ...r,
            children: e(He, {
              children: e(Ue, {
                initiallyEnabled: l,
                children: e(Je, {
                  ...t,
                  children: e(Ye, {
                    handler: o,
                    children: a
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), W = (a) => `datacollection-${a}`, Ga = {
  get: async (a) => JSON.parse(
    localStorage.getItem(W(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(W(a), JSON.stringify(r));
  }
};
export {
  Ta as AreaChart,
  Ja as Await,
  Ia as BarChart,
  w as Button,
  Ra as CategoryBarChart,
  Ya as CopyButton,
  Xa as DndProvider,
  Ka as EmojiImage,
  Qa as F0Avatar,
  Za as F0AvatarAlert,
  er as F0AvatarCompany,
  ar as F0AvatarDate,
  rr as F0AvatarEmoji,
  sr as F0AvatarFile,
  tr as F0AvatarIcon,
  lr as F0AvatarList,
  Q as F0AvatarModule,
  or as F0AvatarPerson,
  nr as F0AvatarTeam,
  ir as F0Card,
  dr as F0Checkbox,
  _a as F0ChipList,
  cr as F0EventCatcherProvider,
  Te as F0Icon,
  Wa as F0Provider,
  ur as F0TagAlert,
  fr as F0TagBalance,
  mr as F0TagCompany,
  hr as F0TagDot,
  pr as F0TagList,
  gr as F0TagPerson,
  Me as F0TagRaw,
  vr as F0TagStatus,
  br as F0TagTeam,
  xr as GROUP_ID_SYMBOL,
  Aa as HomeLayout,
  Ba as LineChart,
  ka as Link,
  Cr as OneFilterPicker,
  Oa as PieChart,
  Ue as PrivacyModeProvider,
  fe as ProductBlankslate,
  yr as ProductCard,
  Va as ProductModal,
  xa as ProductWidget,
  Ea as ProgressBarChart,
  ja as StandardLayout,
  wr as TagCounter,
  za as TwoColumnLayout,
  ee as UpsellRequestResponseDialog,
  Ca as UpsellingBanner,
  ae as UpsellingButton,
  qa as UpsellingPopover,
  $a as VerticalBarChart,
  Da as avatarVariants,
  Nr as buildTranslations,
  Pr as createAtlaskitDriver,
  Lr as createDataSourceDefinition,
  Ga as dataCollectionLocalStorageHandler,
  Fa as defaultTranslations,
  Se as experimental,
  Sr as getAnimationVariants,
  Fr as getDataSourcePaginationType,
  kr as getEmojiLabel,
  Dr as isInfiniteScrollPagination,
  Mr as isPageBasedPagination,
  Tr as modules,
  Ir as tagDotColors,
  Rr as useData,
  Br as useDataSource,
  Or as useDndEvents,
  $r as useDraggable,
  Er as useDroppableList,
  _r as useEmojiConfetti,
  jr as useGroups,
  zr as usePrivacyMode,
  Ar as useReducedMotion,
  Vr as useSelectable,
  qr as useXRay
};
