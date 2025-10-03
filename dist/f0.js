import { C as g, L as pe, c as ge, P as G, a as b, f as ve, b as be, A as xe, B as Ce, d as ye, e as we, g as Ne, V as Le, h as M, i as H, j as U, k as Pe, l as W, S as J, m as Y, n as Se, O as Fe, o as X, p as De, q as ke, F as K, r as Me, s as Te, t as Ie, D as Re, u as Be, v as Oe, w as $e, x as Q, y as w, U as Z, z as Ee, E as _e, G as z, H as je, I as ee, J as ze, K as Ve, M as Ae, N as qe, Q as Ge, R as He, X as Ue, T as We, W as Je, Y as Ye, Z as Xe, _ as Ke } from "./hooks-Bmk9XeWN.js";
import { az as Wa, $ as Ja, aB as Ya, aK as Xa, a0 as Ka, a1 as Qa, a2 as Za, a3 as er, a4 as ar, a5 as rr, a6 as sr, a7 as tr, a9 as lr, aa as or, ab as nr, ac as ir, aG as dr, ae as cr, af as ur, ag as fr, ah as mr, ak as hr, al as pr, am as gr, an as vr, ap as br, ad as xr, ao as Cr, aj as yr, aH as wr, aA as Nr, au as Lr, ax as Pr, at as Sr, aL as Fr, as as Dr, ar as kr, a8 as Mr, ai as Tr, aq as Ir, av as Rr, aC as Br, aD as Or, aE as $r, aM as Er, aw as _r, aF as jr, aJ as zr, ay as Vr, aI as Ar } from "./hooks-Bmk9XeWN.js";
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
}, Da = g({
  name: "Link",
  type: "info"
}, pe), ka = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var _ = "Progress", j = 100, [ra] = ge(_), [sa, ta] = ra(_), se = E.forwardRef(
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
      G.div,
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
      G.div,
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
const ie = E.forwardRef(({ className: a, value: r, ...s }, o) => e(ne, {
  ref: o,
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
ie.displayName = ne.displayName;
const da = ({ value: a, max: r = 100, label: s, color: o }, t) => {
  const i = o || be(0), n = a / r * 100;
  return c("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [e("div", {
      className: "flex-grow",
      children: e(ie, {
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
}, ca = ve(da), Ma = g(
  {
    name: "AreaChart",
    type: "info"
  },
  xe
), Ta = g(
  {
    name: "BarChart",
    type: "info"
  },
  Ce
), Ia = g(
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
), Ba = g(
  {
    name: "PieChart",
    type: "info"
  },
  Ne
), Oa = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Le
), $a = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ca
), O = ({ count: a, list: r }) => {
  const [s, o] = v(!1), t = e(M, {
    label: `+${a}`
  });
  return r != null && r.length ? c(H, {
    open: s,
    onOpenChange: o,
    children: [e(U, {
      asChild: !0,
      children: e("button", {
        className: Pe("inline-flex flex-shrink-0 items-center"),
        children: t
      })
    }), e(W, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: c(J, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [r.map((i, n) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(M, {
            ...i
          })
        }, n)), e(Y, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : t;
};
O.displayName = "ChipCounter";
const de = ({ chips: a, max: r = 4, remainingCount: s, layout: o = "compact" }) => {
  if (o === "fill")
    return e(Fe, {
      items: a,
      renderListItem: (l) => e(M, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: s !== void 0,
      renderOverflowIndicator: (l) => e(O, {
        count: (s ?? 0) + l,
        list: s ? void 0 : a.slice(a.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const t = a.slice(0, r), i = a.slice(r), n = s ?? a.length - r, d = n > 0;
  return c("div", {
    className: "flex items-center gap-2",
    children: [t.map((l, f) => e(M, {
      ...l
    }, f)), d && e(O, {
      count: n,
      list: s ? void 0 : i
    })]
  });
};
de.displayName = "F0ChipList";
const Ea = Se("F0ChipList", de), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fa = I(function({ widgets: r, children: s }, o) {
  const t = ae(null);
  Ze(o, () => t.current);
  const i = ea.toArray(r).filter((n) => !!n).map((n, d) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, d));
  return e(X, {
    layout: "home",
    children: c("div", {
      ref: t,
      className: "@container",
      children: [c("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(De, {
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
}), ma = I(function({ children: r, sideContent: s, mainColumnPosition: o = "left", sticky: t = !1 }, i) {
  return e("div", {
    ref: i,
    className: "h-full",
    children: c("div", {
      className: b("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", t && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: b("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(ha, {
        sticky: t,
        className: b("order-1", o === "right" ? "md:order-1" : "md:order-3"),
        children: s
      })]
    })
  });
}), ha = ({ children: a, className: r }) => e("aside", {
  className: b("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), pa = ke({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ce = Qe.forwardRef(({ children: a, variant: r, className: s, ...o }, t) => e(X, {
  layout: "standard",
  children: e("section", {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...o,
    children: e("div", {
      className: b(pa({
        variant: r
      })),
      children: a
    })
  })
}));
ce.displayName = "StandardLayout";
const _a = g({
  name: "StandardLayout",
  type: "layout"
}, ce), ja = g({
  name: "TwoColumnLayout",
  type: "layout"
}, ma), za = g({
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
}), ue = I(({ title: a, image: r, benefits: s, actions: o, withShadow: t = !0, module: i, moduleName: n, tag: d }, l) => c("div", {
  ref: l,
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
          children: [i && e(K, {
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
    }), o && e("div", {
      className: "flex gap-3",
      children: o
    })]
  })]
}));
ue.displayName = "ProductBlankslate";
function ba({ isOpen: a, onClose: r, title: s, children: o, module: t, portalContainer: i }) {
  const [n, d] = v(a);
  return re(() => {
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
          children: [t && e(K, {
            module: t,
            size: "lg"
          }), s]
        }), e($e, {
          variant: "outline",
          icon: Q,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), c(J, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [o, e(Y, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Va({ isOpen: a, onClose: r, title: s, image: o, benefits: t, errorMessage: i, successMessage: n, loadingState: d, nextSteps: l, closeLabel: f, primaryAction: m, modalTitle: N, modalModule: L, secondaryAction: u, portalContainer: x, tag: S }) {
  const [R, F] = v(a), [C, y] = v(null), [P, h] = v(!1), D = async () => {
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
  }, k = () => {
    F(!1), r == null || r();
  }, B = P;
  return c($, {
    children: [e(ba, {
      isOpen: R,
      onClose: k,
      title: N,
      module: L,
      portalContainer: x,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(ue, {
          title: s,
          image: o,
          benefits: t,
          withShadow: !1,
          tag: S,
          actions: c("div", {
            className: "flex gap-3",
            children: [m && e(w, {
              variant: m.variant,
              label: B ? d.label : m.label,
              icon: m.icon || void 0,
              onClick: D,
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
    }), C && e(Z, {
      open: !0,
      onClose: () => {
        k(), y(null);
      },
      success: C === "success",
      errorMessage: i,
      successMessage: n,
      nextSteps: l,
      closeLabel: f,
      portalContainer: x
    })]
  });
}
function xa({ mediaUrl: a, title: r, description: s, onClose: o, dismissible: t, width: i, trackVisibility: n, actions: d, showConfirmation: l = !0 }) {
  const [f, m] = v(!1), N = () => {
    m(!0), o && o();
  };
  re(() => {
    n && n(!f);
  }, [n, f]);
  const L = a == null ? void 0 : a.includes(".mp4");
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
            icon: Q,
            size: "sm",
            hideLabel: !0,
            onClick: N,
            label: "Close"
          })
        }), c("div", {
          children: [e("div", {
            children: a && (L ? e("video", {
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
            children: [e(z, {
              className: "text-lg font-medium",
              children: r
            }), e(z, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: s
            })]
          })]
        })]
      }), d && e(je, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? e(ee, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: l && u.showConfirmation,
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
const Ca = I(function({ primaryAction: r, secondaryAction: s, ...o }, t) {
  const i = (l) => l.variant === "promote" ? e(ee, {
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
  }) : e(w, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, d = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0;
  return c(ze, {
    ref: t,
    ...o,
    primaryAction: n,
    secondaryAction: d,
    children: [(r == null ? void 0 : r.variant) === "promote" && i(r), (s == null ? void 0 : s.variant) === "promote" && i(s)]
  });
});
Ca.displayName = "UpsellingBanner";
function Aa({ isOpen: a, setIsOpen: r, label: s, variant: o = "promote", size: t = "md", showIcon: i = !0, side: n = "right", align: d = "center", icon: l = Ve, mediaUrl: f, title: m, description: N, width: L = "300px", trackVisibility: u, actions: x, onClick: S, hideLabel: R = !1 }) {
  const [F, C] = v(!1), [y, P] = v(null), [h, D] = v(null), k = (p) => {
    r(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), P("success"));
      } catch {
        C(!0), P("error");
      }
    }
  }, fe = () => {
    P(null), C(!1), D(null), r(!1);
  }, me = a && !F, he = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return c($, {
    children: [c(H, {
      open: me,
      onOpenChange: k,
      children: [e(U, {
        asChild: !0,
        children: e(w, {
          variant: o,
          label: s,
          size: t,
          icon: i ? l : void 0,
          onClick: () => r(a),
          hideLabel: R
        })
      }), e(W, {
        side: n,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(xa, {
          mediaUrl: f,
          title: m,
          description: N,
          onClose: () => r(!1),
          dismissible: !1,
          width: L,
          trackVisibility: u,
          actions: he,
          showConfirmation: !1
        })
      })]
    }), (h == null ? void 0 : h.type) === "upsell" && h.showConfirmation && y && e(Z, {
      open: !0,
      onClose: fe,
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
  const s = ae(null), [o, t] = v(s.current);
  return Ke(() => {
    t(s.current);
  }, []), e(ya.Provider, {
    value: {
      element: o
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
}), qa = ({ children: a, layout: r, link: s, privacyModeInitiallyEnabled: o, image: t, i18n: i, l10n: n, isDev: d = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: f = !1 }) => e(Na, {
  children: e(Ae, {
    isDev: d,
    showExperimentalWarnings: f,
    children: e(qe, {
      ...n,
      children: e(Ge, {
        ...i,
        children: e(He, {
          ...s,
          children: e(wa, {
            ...r,
            children: e(Ue, {
              children: e(We, {
                initiallyEnabled: o,
                children: e(Je, {
                  ...t,
                  children: e(Ye, {
                    handler: l,
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
}), q = (a) => `datacollection-${a}`, Ga = {
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
  w as Button,
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
  K as F0AvatarModule,
  lr as F0AvatarPerson,
  or as F0AvatarTeam,
  nr as F0Card,
  ir as F0Checkbox,
  Ea as F0ChipList,
  dr as F0EventCatcherProvider,
  Te as F0Icon,
  qa as F0Provider,
  cr as F0TagAlert,
  ur as F0TagBalance,
  fr as F0TagCompany,
  mr as F0TagDot,
  hr as F0TagList,
  pr as F0TagPerson,
  Me as F0TagRaw,
  gr as F0TagStatus,
  vr as F0TagTeam,
  br as GROUP_ID_SYMBOL,
  za as HomeLayout,
  Ra as LineChart,
  Da as Link,
  xr as OneFilterPicker,
  Ba as PieChart,
  We as PrivacyModeProvider,
  ue as ProductBlankslate,
  Cr as ProductCard,
  Va as ProductModal,
  xa as ProductWidget,
  $a as ProgressBarChart,
  _a as StandardLayout,
  yr as TagCounter,
  ja as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  Ca as UpsellingBanner,
  ee as UpsellingButton,
  Aa as UpsellingPopover,
  Oa as VerticalBarChart,
  ka as avatarVariants,
  wr as buildTranslations,
  Nr as createAtlaskitDriver,
  Lr as createDataSourceDefinition,
  Ga as dataCollectionLocalStorageHandler,
  Fa as defaultTranslations,
  Se as experimental,
  Pr as getAnimationVariants,
  Sr as getDataSourcePaginationType,
  Fr as getEmojiLabel,
  Dr as isInfiniteScrollPagination,
  kr as isPageBasedPagination,
  Mr as modules,
  Tr as tagDotColors,
  Ir as useData,
  Rr as useDataSource,
  Br as useDndEvents,
  Or as useDraggable,
  $r as useDroppableList,
  Er as useEmojiConfetti,
  _r as useGroups,
  jr as usePrivacyMode,
  zr as useReducedMotion,
  Vr as useSelectable,
  Ar as useXRay
};
