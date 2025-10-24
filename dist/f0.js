import { C as h, L as ge, c as ve, P as q, a as v, f as be, g as W, A as ye, B as xe, b as Ce, d as we, e as Ne, V as Le, h as D, i as G, j as Y, k as Pe, l as J, S as X, m as K, n as Se, O as ke, o as Q, p as Fe, q as Me, F as Z, r as De, s as Te, t as Ae, D as Ie, u as Be, v as Re, w as Oe, x as ee, y as C, U as ae, z as $e, E as Ee, G as z, H as _e, I as re, J as je, K as We, M as ze, N as Ue, Q as Ve, R as He, X as qe, T as Ge, W as Ye, Y as Je, Z as Xe, _ as Ke } from "./hooks-CpGAjLLx.js";
import { az as Ga, $ as Ya, aB as Ja, aK as Xa, a0 as Ka, a1 as Qa, a2 as Za, a3 as er, a4 as ar, a5 as rr, a6 as sr, a7 as tr, a9 as or, aa as lr, ab as nr, ac as ir, aG as cr, ae as dr, af as ur, ag as fr, ah as mr, ak as pr, al as hr, am as gr, an as vr, ap as br, ad as yr, ao as xr, aj as Cr, aH as wr, aA as Nr, au as Lr, ax as Pr, at as Sr, aL as kr, as as Fr, ar as Mr, a8 as Dr, ai as Tr, aq as Ar, av as Ir, aC as Br, aD as Rr, aE as Or, aM as $r, aw as Er, aF as _r, aJ as jr, ay as Wr, aI as zr } from "./hooks-CpGAjLLx.js";
import { jsx as e, jsxs as d, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import Qe, { useState as g, forwardRef as A, useRef as se, useImperativeHandle as Ze, Children as ea, useEffect as te, createContext as aa } from "react";
const ka = {
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
    send: "Send",
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
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        placeholder: "What did you like about this response? How could it be even better?",
        description: "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al."
      },
      negative: {
        title: "What could have been better in this response?",
        placeholder: "What could have been better in this response? How could it be even better?",
        description: "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al."
      }
    }
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, Fa = h({
  name: "Link",
  type: "info"
}, ge), Ma = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var _ = "Progress", j = 100, [ra] = ve(_), [sa, ta] = ra(_), oe = E.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: o = null,
      max: t,
      getValueLabel: i = oa,
      ...n
    } = a;
    (t || t === 0) && !U(t) && console.error(la(`${t}`, "Progress"));
    const c = U(t) ? t : j;
    o !== null && !V(o, c) && console.error(na(`${o}`, "Progress"));
    const l = V(o, c) ? o : null, f = T(l) ? i(l, c) : void 0;
    return /* @__PURE__ */ e(sa, { scope: s, value: l, max: c, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ie(l, c),
        "data-value": l ?? void 0,
        "data-max": c,
        ...n,
        ref: r
      }
    ) });
  }
);
oe.displayName = _;
var le = "ProgressIndicator", ne = E.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...o } = a, t = ta(le, s);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": ie(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...o,
        ref: r
      }
    );
  }
);
ne.displayName = le;
function oa(a, r) {
  return `${Math.round(a / r * 100)}%`;
}
function ie(a, r) {
  return a == null ? "indeterminate" : a === r ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function U(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function V(a, r) {
  return T(a) && !isNaN(a) && a <= r && a >= 0;
}
function la(a, r) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`;
}
function na(a, r) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ce = oe, ia = ne;
const de = E.forwardRef(({ className: a, value: r, ...s }, o) => e(ce, {
  ref: o,
  className: v("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...s,
  children: e(ia, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: s.color,
      transform: `translateX(-${100 - (r || 0)}%)`
    }
  })
}));
de.displayName = ce.displayName;
const ca = ({ value: a, max: r = 100, label: s, color: o }, t) => {
  const i = o ? W(o) : W("categorical-1"), n = a / r * 100;
  return d("div", {
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
}, da = be(ca), Da = h(
  {
    name: "AreaChart",
    type: "info"
  },
  ye
), Ta = h(
  {
    name: "BarChart",
    type: "info"
  },
  xe
), Aa = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ce
), Ia = h(
  {
    name: "LineChart",
    type: "info"
  },
  we
), Ba = h(
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
), Oa = h(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  da
), O = ({ count: a, list: r }) => {
  const [s, o] = g(!1), t = e(D, {
    label: `+${a}`
  });
  return r?.length ? d(G, {
    open: s,
    onOpenChange: o,
    children: [e(Y, {
      asChild: !0,
      children: e("button", {
        className: Pe("inline-flex flex-shrink-0 items-center"),
        children: t
      })
    }), e(J, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: d(X, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [r.map((i, n) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(D, {
            ...i
          })
        }, n)), e(K, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : t;
};
O.displayName = "ChipCounter";
const ue = ({ chips: a, max: r = 4, remainingCount: s, layout: o = "compact" }) => {
  if (o === "fill")
    return e(ke, {
      items: a,
      renderListItem: (l) => e(D, {
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
  const t = a.slice(0, r), i = a.slice(r), n = s ?? a.length - r, c = n > 0;
  return d("div", {
    className: "flex items-center gap-2",
    children: [t.map((l, f) => e(D, {
      ...l
    }, f)), c && e(O, {
      count: n,
      list: s ? void 0 : i
    })]
  });
};
ue.displayName = "F0ChipList";
const $a = Se("F0ChipList", ue), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fa = A(function({ widgets: r, children: s }, o) {
  const t = se(null);
  Ze(o, () => t.current);
  const i = ea.toArray(r).filter((n) => !!n).map((n, c) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, c));
  return e(Q, {
    layout: "home",
    children: d("div", {
      ref: t,
      className: "@container",
      children: [d("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(Fe, {
          columns: ua,
          showArrows: !1,
          children: i
        }), e("main", {
          children: s
        })]
      }), d("div", {
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
}), ma = A(function({ children: r, sideContent: s, mainColumnPosition: o = "left", sticky: t = !1 }, i) {
  return e("div", {
    ref: i,
    className: "h-full",
    children: d("div", {
      className: v("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", t && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: v("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(pa, {
        sticky: t,
        className: v("order-1", o === "right" ? "md:order-1" : "md:order-3"),
        children: s
      })]
    })
  });
}), pa = ({ children: a, className: r }) => e("aside", {
  className: v("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), ha = Me({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), fe = Qe.forwardRef(({ children: a, variant: r, className: s, ...o }, t) => e(Q, {
  layout: "standard",
  children: e("section", {
    ref: t,
    className: v("relative flex-1 overflow-auto", s),
    ...o,
    children: e("div", {
      className: v(ha({
        variant: r
      })),
      children: a
    })
  })
}));
fe.displayName = "StandardLayout";
const Ea = h({
  name: "StandardLayout",
  type: "layout"
}, fe), _a = h({
  name: "TwoColumnLayout",
  type: "layout"
}, ma), ja = h({
  name: "HomeLayout",
  type: "layout"
}, fa), ga = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((r, s) => e(va, {
    text: r
  }, s))
}), va = ({ text: a }) => d("div", {
  className: "flex flex-row items-start gap-2",
  children: [e(Te, {
    icon: Ae,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), me = A(({ title: a, image: r, benefits: s, actions: o, withShadow: t = !0, module: i, moduleName: n, tag: c }, l) => d("div", {
  ref: l,
  className: v("bg-white flex flex-row rounded-xl border border-f1-border-secondary", t && "shadow-md"),
  children: [e("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: e("img", {
      src: r,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), d("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [d("div", {
      className: "flex flex-col gap-5",
      children: [d("div", {
        className: "flex flex-col gap-2",
        children: [d("div", {
          className: "flex flex-row items-center gap-2",
          children: [i && e(Z, {
            module: i
          }), n && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: n
          })]
        }), c && e("div", {
          className: "flex justify-start",
          children: e(De, {
            icon: c.icon,
            text: c.label
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
me.displayName = "ProductBlankslate";
function ba({ isOpen: a, onClose: r, title: s, children: o, module: t, portalContainer: i }) {
  const [n, c] = g(a);
  return te(() => {
    c(a);
  }, [a]), e(Ie, {
    open: n,
    onOpenChange: (f) => {
      c(f), f || r();
    },
    modal: !0,
    children: d(Be, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [d("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [d(Re, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [t && e(Z, {
            module: t,
            size: "lg"
          }), s]
        }), e(Oe, {
          variant: "outline",
          icon: ee,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), d(X, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [o, e(K, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Wa({ isOpen: a, onClose: r, title: s, image: o, benefits: t, errorMessage: i, successMessage: n, loadingState: c, nextSteps: l, closeLabel: f, primaryAction: m, modalTitle: w, modalModule: N, secondaryAction: u, portalContainer: k, tag: F, showResponseDialog: L = !0 }) {
  const [I, x] = g(a), [P, y] = g(null), [b, S] = g(!1), B = async () => {
    if (m?.onClick) {
      S(!0);
      try {
        await m.onClick(), x(!1), L && y("success");
      } catch {
        L && y("error");
      } finally {
        S(!1);
      }
    }
  }, M = () => {
    x(!1), r?.();
  }, R = b;
  return d($, {
    children: [e(ba, {
      isOpen: I,
      onClose: M,
      title: w,
      module: N,
      portalContainer: k,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(me, {
          title: s,
          image: o,
          benefits: t,
          withShadow: !1,
          tag: F,
          actions: d("div", {
            className: "flex gap-3",
            children: [m && e(C, {
              variant: m.variant,
              label: R ? c.label : m.label,
              icon: m.icon || void 0,
              onClick: B,
              loading: m.loading,
              size: m.size
            }), u && e(C, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), P && L && e(ae, {
      open: !0,
      onClose: () => {
        M(), y(null);
      },
      success: P === "success",
      errorMessage: i,
      successMessage: n,
      nextSteps: l,
      closeLabel: f,
      portalContainer: k
    })]
  });
}
function ya({ mediaUrl: a, title: r, description: s, onClose: o, dismissible: t, width: i, trackVisibility: n, actions: c, showConfirmation: l = !0 }) {
  const [f, m] = g(!1), w = () => {
    m(!0), o && o();
  };
  te(() => {
    n && n(!f);
  }, [n, f]);
  const N = a?.includes(".mp4");
  return e($, {
    children: f ? null : d($e, {
      style: {
        width: i
      },
      className: "relative bg-f1-background p-1",
      children: [d(Ee, {
        children: [t && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(C, {
            variant: "ghost",
            icon: ee,
            size: "sm",
            hideLabel: !0,
            onClick: w,
            label: "Close"
          })
        }), d("div", {
          children: [e("div", {
            children: a && (N ? e("video", {
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
          }), d("div", {
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
      }), c && e(_e, {
        className: "p-3",
        children: c.map((u) => u.type === "upsell" ? e(re, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: l && u.showConfirmation,
          variant: u.variant
        }, u.label) : e(C, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const xa = A(function({ primaryAction: r, secondaryAction: s, ...o }, t) {
  const i = (l) => l.variant === "promote" ? e(re, {
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
  }) : e(C, {
    onClick: l.onClick,
    label: l.label,
    variant: l.variant || "default",
    size: "md",
    icon: l.icon
  }), n = r?.variant !== "promote" ? r : void 0, c = s?.variant !== "promote" ? s : void 0;
  return d(je, {
    ref: t,
    ...o,
    primaryAction: n,
    secondaryAction: c,
    children: [r?.variant === "promote" && i(r), s?.variant === "promote" && i(s)]
  });
});
xa.displayName = "UpsellingBanner";
function za({ isOpen: a, setIsOpen: r, label: s, variant: o = "promote", size: t = "md", showIcon: i = !0, side: n = "right", align: c = "center", icon: l = We, mediaUrl: f, title: m, description: w, width: N = "300px", trackVisibility: u, actions: k, onClick: F, hideLabel: L = !1 }) {
  const [I, x] = g(!1), [P, y] = g(null), [b, S] = g(null), B = (p) => {
    r(p), F && F();
  }, M = async (p) => {
    if (p.type === "upsell") {
      S(p);
      try {
        await p.onClick(), p.showConfirmation && (x(!0), y("success"));
      } catch {
        x(!0), y("error");
      }
    }
  }, R = () => {
    y(null), x(!1), S(null), r(!1);
  }, pe = a && !I, he = k?.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => M(p)
  } : p);
  return d($, {
    children: [d(G, {
      open: pe,
      onOpenChange: B,
      children: [e(Y, {
        asChild: !0,
        children: e(C, {
          variant: o,
          label: s,
          size: t,
          icon: i ? l : void 0,
          onClick: () => r(a),
          hideLabel: L
        })
      }), e(J, {
        side: n,
        align: c,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(ya, {
          mediaUrl: f,
          title: m,
          description: w,
          onClose: () => r(!1),
          dismissible: !1,
          width: N,
          trackVisibility: u,
          actions: he,
          showConfirmation: !1
        })
      })]
    }), b?.type === "upsell" && b.showConfirmation && P && e(ae, {
      open: !0,
      onClose: R,
      success: P === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const Ca = aa(null), wa = ({ children: a, fullScreen: r = !0 }) => {
  const s = se(null), [o, t] = g(s.current);
  return Ke(() => {
    t(s.current);
  }, []), e(Ca.Provider, {
    value: {
      element: o
    },
    children: e("div", {
      ref: s,
      id: "f0-layout",
      className: v({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: a
    })
  });
}, Na = ({ children: a }) => e(Xe, {
  reducedMotion: "user",
  children: a
}), Ua = ({ children: a, layout: r, link: s, privacyModeInitiallyEnabled: o, image: t, i18n: i, l10n: n, isDev: c = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: f = !1 }) => e(Na, {
  children: e(ze, {
    isDev: c,
    showExperimentalWarnings: f,
    children: e(Ue, {
      ...n,
      children: e(Ve, {
        ...i,
        children: e(He, {
          ...s,
          children: e(wa, {
            ...r,
            children: e(qe, {
              children: e(Ge, {
                initiallyEnabled: o,
                children: e(Ye, {
                  ...t,
                  children: e(Je, {
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
}), H = (a) => `datacollection-${a}`, Va = {
  get: async (a) => JSON.parse(
    localStorage.getItem(H(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(H(a), JSON.stringify(r));
  }
};
export {
  Da as AreaChart,
  Ga as Await,
  Ta as BarChart,
  C as Button,
  Aa as CategoryBarChart,
  Ya as CopyButton,
  Ja as DndProvider,
  Xa as EmojiImage,
  Ka as F0Avatar,
  Qa as F0AvatarAlert,
  Za as F0AvatarCompany,
  er as F0AvatarDate,
  ar as F0AvatarEmoji,
  rr as F0AvatarFile,
  sr as F0AvatarIcon,
  tr as F0AvatarList,
  Z as F0AvatarModule,
  or as F0AvatarPerson,
  lr as F0AvatarTeam,
  nr as F0Card,
  ir as F0Checkbox,
  $a as F0ChipList,
  cr as F0EventCatcherProvider,
  Te as F0Icon,
  Ua as F0Provider,
  dr as F0TagAlert,
  ur as F0TagBalance,
  fr as F0TagCompany,
  mr as F0TagDot,
  pr as F0TagList,
  hr as F0TagPerson,
  De as F0TagRaw,
  gr as F0TagStatus,
  vr as F0TagTeam,
  br as GROUP_ID_SYMBOL,
  ja as HomeLayout,
  Ia as LineChart,
  Fa as Link,
  yr as OneFilterPicker,
  Ba as PieChart,
  Ge as PrivacyModeProvider,
  me as ProductBlankslate,
  xr as ProductCard,
  Wa as ProductModal,
  ya as ProductWidget,
  Oa as ProgressBarChart,
  Ea as StandardLayout,
  Cr as TagCounter,
  _a as TwoColumnLayout,
  ae as UpsellRequestResponseDialog,
  xa as UpsellingBanner,
  re as UpsellingButton,
  za as UpsellingPopover,
  Ra as VerticalBarChart,
  Ma as avatarVariants,
  wr as buildTranslations,
  Nr as createAtlaskitDriver,
  Lr as createDataSourceDefinition,
  Va as dataCollectionLocalStorageHandler,
  ka as defaultTranslations,
  Se as experimental,
  Pr as getAnimationVariants,
  Sr as getDataSourcePaginationType,
  kr as getEmojiLabel,
  Fr as isInfiniteScrollPagination,
  Mr as isPageBasedPagination,
  Dr as modules,
  Tr as tagDotColors,
  Ar as useData,
  Ir as useDataSource,
  Br as useDndEvents,
  Rr as useDraggable,
  Or as useDroppableList,
  $r as useEmojiConfetti,
  Er as useGroups,
  _r as usePrivacyMode,
  jr as useReducedMotion,
  Wr as useSelectable,
  zr as useXRay
};
