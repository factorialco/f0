import { C as h, L as he, c as ge, P as q, a as b, f as ve, b as be, A as xe, B as ye, d as Ce, e as we, g as Ne, V as Le, h as M, i as G, j as H, k as Pe, l as W, S as J, m as Y, n as Se, O as Fe, o as X, p as De, q as ke, F as K, r as Me, s as Te, t as Ie, D as Re, u as Be, v as Ae, w as Oe, x as Q, y as C, U as Z, z as $e, E as Ee, G as j, H as _e, I as ee, J as je, K as ze, M as Ue, N as Ve, Q as qe, R as Ge, X as He, T as We, W as Je, Y as Ye, Z as Xe, _ as Ke } from "./hooks-Df0R4Rc5.js";
import { az as Wa, $ as Ja, aB as Ya, aK as Xa, a0 as Ka, a1 as Qa, a2 as Za, a3 as er, a4 as ar, a5 as rr, a6 as sr, a7 as tr, a9 as or, aa as lr, ab as nr, ac as ir, aG as cr, ae as dr, af as ur, ag as mr, ah as fr, ak as pr, al as hr, am as gr, an as vr, ap as br, ad as xr, ao as yr, aj as Cr, aH as wr, aA as Nr, au as Lr, ax as Pr, at as Sr, aL as Fr, as as Dr, ar as kr, a8 as Mr, ai as Tr, aq as Ir, av as Rr, aC as Br, aD as Ar, aE as Or, aM as $r, aw as Er, aF as _r, aJ as jr, ay as zr, aI as Ur } from "./hooks-Df0R4Rc5.js";
import { jsx as e, jsxs as d, Fragment as O } from "react/jsx-runtime";
import * as $ from "react";
import Qe, { useState as g, forwardRef as I, useRef as ae, useImperativeHandle as Ze, Children as ea, useEffect as re, createContext as aa } from "react";
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
}, Da = h({
  name: "Link",
  type: "info"
}, he), ka = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var E = "Progress", _ = 100, [ra] = ge(E), [sa, ta] = ra(E), se = $.forwardRef(
  (a, r) => {
    const {
      __scopeProgress: s,
      value: l = null,
      max: t,
      getValueLabel: i = oa,
      ...n
    } = a;
    (t || t === 0) && !z(t) && console.error(la(`${t}`, "Progress"));
    const c = z(t) ? t : _;
    l !== null && !U(l, c) && console.error(na(`${l}`, "Progress"));
    const o = U(l, c) ? l : null, m = T(o) ? i(o, c) : void 0;
    return /* @__PURE__ */ e(sa, { scope: s, value: o, max: c, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": c,
        "aria-valuemin": 0,
        "aria-valuenow": T(o) ? o : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": le(o, c),
        "data-value": o ?? void 0,
        "data-max": c,
        ...n,
        ref: r
      }
    ) });
  }
);
se.displayName = E;
var te = "ProgressIndicator", oe = $.forwardRef(
  (a, r) => {
    const { __scopeProgress: s, ...l } = a, t = ta(te, s);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": le(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...l,
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
const ie = $.forwardRef(({ className: a, value: r, ...s }, l) => e(ne, {
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
ie.displayName = ne.displayName;
const ca = ({ value: a, max: r = 100, label: s, color: l }, t) => {
  const i = l || be(0), n = a / r * 100;
  return d("div", {
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
}, da = ve(ca), Ma = h(
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
  ye
), Ia = h(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ce
), Ra = h(
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
), Aa = h(
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
), A = ({ count: a, list: r }) => {
  const [s, l] = g(!1), t = e(M, {
    label: `+${a}`
  });
  return r?.length ? d(G, {
    open: s,
    onOpenChange: l,
    children: [e(H, {
      asChild: !0,
      children: e("button", {
        className: Pe("inline-flex flex-shrink-0 items-center"),
        children: t
      })
    }), e(W, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: d(J, {
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
A.displayName = "ChipCounter";
const ce = ({ chips: a, max: r = 4, remainingCount: s, layout: l = "compact" }) => {
  if (l === "fill")
    return e(Fe, {
      items: a,
      renderListItem: (o) => e(M, {
        ...o
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: s !== void 0,
      renderOverflowIndicator: (o) => e(A, {
        count: (s ?? 0) + o,
        list: s ? void 0 : a.slice(a.length - o)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const t = a.slice(0, r), i = a.slice(r), n = s ?? a.length - r, c = n > 0;
  return d("div", {
    className: "flex items-center gap-2",
    children: [t.map((o, m) => e(M, {
      ...o
    }, m)), c && e(A, {
      count: n,
      list: s ? void 0 : i
    })]
  });
};
ce.displayName = "F0ChipList";
const $a = Se("F0ChipList", ce), ua = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ma = I(function({ widgets: r, children: s }, l) {
  const t = ae(null);
  Ze(l, () => t.current);
  const i = ea.toArray(r).filter((n) => !!n).map((n, c) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, c));
  return e(X, {
    layout: "home",
    children: d("div", {
      ref: t,
      className: "@container",
      children: [d("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(De, {
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
}), fa = I(function({ children: r, sideContent: s, mainColumnPosition: l = "left", sticky: t = !1 }, i) {
  return e("div", {
    ref: i,
    className: "h-full",
    children: d("div", {
      className: b("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", t && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: b("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", l === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: r
      }), e(pa, {
        sticky: t,
        className: b("order-1", l === "right" ? "md:order-1" : "md:order-3"),
        children: s
      })]
    })
  });
}), pa = ({ children: a, className: r }) => e("aside", {
  className: b("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", r),
  children: a
}), ha = ke({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), de = Qe.forwardRef(({ children: a, variant: r, className: s, ...l }, t) => e(X, {
  layout: "standard",
  children: e("section", {
    ref: t,
    className: b("relative flex-1 overflow-auto", s),
    ...l,
    children: e("div", {
      className: b(ha({
        variant: r
      })),
      children: a
    })
  })
}));
de.displayName = "StandardLayout";
const Ea = h({
  name: "StandardLayout",
  type: "layout"
}, de), _a = h({
  name: "TwoColumnLayout",
  type: "layout"
}, fa), ja = h({
  name: "HomeLayout",
  type: "layout"
}, ma), ga = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((r, s) => e(va, {
    text: r
  }, s))
}), va = ({ text: a }) => d("div", {
  className: "flex flex-row items-start gap-2",
  children: [e(Te, {
    icon: Ie,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), ue = I(({ title: a, image: r, benefits: s, actions: l, withShadow: t = !0, module: i, moduleName: n, tag: c }, o) => d("div", {
  ref: o,
  className: b("bg-white flex flex-row rounded-xl border border-f1-border-secondary", t && "shadow-md"),
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
          children: [i && e(K, {
            module: i
          }), n && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: n
          })]
        }), c && e("div", {
          className: "flex justify-start",
          children: e(Me, {
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
    }), l && e("div", {
      className: "flex gap-3",
      children: l
    })]
  })]
}));
ue.displayName = "ProductBlankslate";
function ba({ isOpen: a, onClose: r, title: s, children: l, module: t, portalContainer: i }) {
  const [n, c] = g(a);
  return re(() => {
    c(a);
  }, [a]), e(Re, {
    open: n,
    onOpenChange: (m) => {
      c(m), m || r();
    },
    modal: !0,
    children: d(Be, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [d("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [d(Ae, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [t && e(K, {
            module: t,
            size: "lg"
          }), s]
        }), e(Oe, {
          variant: "outline",
          icon: Q,
          onClick: r,
          label: "Close modal",
          hideLabel: !0
        })]
      }), d(J, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [l, e(Y, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function za({ isOpen: a, onClose: r, title: s, image: l, benefits: t, errorMessage: i, successMessage: n, loadingState: c, nextSteps: o, closeLabel: m, primaryAction: f, modalTitle: w, modalModule: N, secondaryAction: u, portalContainer: P, tag: S }) {
  const [R, F] = g(a), [x, y] = g(null), [L, v] = g(!1), D = async () => {
    if (f?.onClick) {
      v(!0);
      try {
        await f.onClick(), F(!1), y("success");
      } catch {
        y("error");
      } finally {
        v(!1);
      }
    }
  }, k = () => {
    F(!1), r?.();
  }, B = L;
  return d(O, {
    children: [e(ba, {
      isOpen: R,
      onClose: k,
      title: w,
      module: N,
      portalContainer: P,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(ue, {
          title: s,
          image: l,
          benefits: t,
          withShadow: !1,
          tag: S,
          actions: d("div", {
            className: "flex gap-3",
            children: [f && e(C, {
              variant: f.variant,
              label: B ? c.label : f.label,
              icon: f.icon || void 0,
              onClick: D,
              loading: f.loading,
              size: f.size
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
    }), x && e(Z, {
      open: !0,
      onClose: () => {
        k(), y(null);
      },
      success: x === "success",
      errorMessage: i,
      successMessage: n,
      nextSteps: o,
      closeLabel: m,
      portalContainer: P
    })]
  });
}
function xa({ mediaUrl: a, title: r, description: s, onClose: l, dismissible: t, width: i, trackVisibility: n, actions: c, showConfirmation: o = !0 }) {
  const [m, f] = g(!1), w = () => {
    f(!0), l && l();
  };
  re(() => {
    n && n(!m);
  }, [n, m]);
  const N = a?.includes(".mp4");
  return e(O, {
    children: m ? null : d($e, {
      style: {
        width: i
      },
      className: "relative bg-f1-background p-1",
      children: [d(Ee, {
        children: [t && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(C, {
            variant: "ghost",
            icon: Q,
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
            children: [e(j, {
              className: "text-lg font-medium",
              children: r
            }), e(j, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: s
            })]
          })]
        })]
      }), c && e(_e, {
        className: "p-3",
        children: c.map((u) => u.type === "upsell" ? e(ee, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: o && u.showConfirmation,
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
const ya = I(function({ primaryAction: r, secondaryAction: s, ...l }, t) {
  const i = (o) => o.variant === "promote" ? e(ee, {
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
  }) : e(C, {
    onClick: o.onClick,
    label: o.label,
    variant: o.variant || "default",
    size: "md",
    icon: o.icon
  }), n = r?.variant !== "promote" ? r : void 0, c = s?.variant !== "promote" ? s : void 0;
  return d(je, {
    ref: t,
    ...l,
    primaryAction: n,
    secondaryAction: c,
    children: [r?.variant === "promote" && i(r), s?.variant === "promote" && i(s)]
  });
});
ya.displayName = "UpsellingBanner";
function Ua({ isOpen: a, setIsOpen: r, label: s, variant: l = "promote", size: t = "md", showIcon: i = !0, side: n = "right", align: c = "center", icon: o = ze, mediaUrl: m, title: f, description: w, width: N = "300px", trackVisibility: u, actions: P, onClick: S, hideLabel: R = !1 }) {
  const [F, x] = g(!1), [y, L] = g(null), [v, D] = g(null), k = (p) => {
    r(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (x(!0), L("success"));
      } catch {
        x(!0), L("error");
      }
    }
  }, me = () => {
    L(null), x(!1), D(null), r(!1);
  }, fe = a && !F, pe = P?.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return d(O, {
    children: [d(G, {
      open: fe,
      onOpenChange: k,
      children: [e(H, {
        asChild: !0,
        children: e(C, {
          variant: l,
          label: s,
          size: t,
          icon: i ? o : void 0,
          onClick: () => r(a),
          hideLabel: R
        })
      }), e(W, {
        side: n,
        align: c,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(xa, {
          mediaUrl: m,
          title: f,
          description: w,
          onClose: () => r(!1),
          dismissible: !1,
          width: N,
          trackVisibility: u,
          actions: pe,
          showConfirmation: !1
        })
      })]
    }), v?.type === "upsell" && v.showConfirmation && y && e(Z, {
      open: !0,
      onClose: me,
      success: y === "success",
      errorMessage: v.errorMessage,
      successMessage: v.successMessage,
      nextSteps: v.nextSteps,
      closeLabel: v.closeLabel,
      portalContainer: null
    })]
  });
}
const Ca = aa(null), wa = ({ children: a, fullScreen: r = !0 }) => {
  const s = ae(null), [l, t] = g(s.current);
  return Ke(() => {
    t(s.current);
  }, []), e(Ca.Provider, {
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
}), Va = ({ children: a, layout: r, link: s, privacyModeInitiallyEnabled: l, image: t, i18n: i, l10n: n, isDev: c = !1, dataCollectionStorageHandler: o, showExperimentalWarnings: m = !1 }) => e(Na, {
  children: e(Ue, {
    isDev: c,
    showExperimentalWarnings: m,
    children: e(Ve, {
      ...n,
      children: e(qe, {
        ...i,
        children: e(Ge, {
          ...s,
          children: e(wa, {
            ...r,
            children: e(He, {
              children: e(We, {
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
}), V = (a) => `datacollection-${a}`, qa = {
  get: async (a) => JSON.parse(
    localStorage.getItem(V(a)) ?? "{}"
  ),
  set: async (a, r) => {
    localStorage.setItem(V(a), JSON.stringify(r));
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
  K as F0AvatarModule,
  or as F0AvatarPerson,
  lr as F0AvatarTeam,
  nr as F0Card,
  ir as F0Checkbox,
  $a as F0ChipList,
  cr as F0EventCatcherProvider,
  Te as F0Icon,
  Va as F0Provider,
  dr as F0TagAlert,
  ur as F0TagBalance,
  mr as F0TagCompany,
  fr as F0TagDot,
  pr as F0TagList,
  hr as F0TagPerson,
  Me as F0TagRaw,
  gr as F0TagStatus,
  vr as F0TagTeam,
  br as GROUP_ID_SYMBOL,
  ja as HomeLayout,
  Ra as LineChart,
  Da as Link,
  xr as OneFilterPicker,
  Ba as PieChart,
  We as PrivacyModeProvider,
  ue as ProductBlankslate,
  yr as ProductCard,
  za as ProductModal,
  xa as ProductWidget,
  Oa as ProgressBarChart,
  Ea as StandardLayout,
  Cr as TagCounter,
  _a as TwoColumnLayout,
  Z as UpsellRequestResponseDialog,
  ya as UpsellingBanner,
  ee as UpsellingButton,
  Ua as UpsellingPopover,
  Aa as VerticalBarChart,
  ka as avatarVariants,
  wr as buildTranslations,
  Nr as createAtlaskitDriver,
  Lr as createDataSourceDefinition,
  qa as dataCollectionLocalStorageHandler,
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
  Ar as useDraggable,
  Or as useDroppableList,
  $r as useEmojiConfetti,
  Er as useGroups,
  _r as usePrivacyMode,
  jr as useReducedMotion,
  zr as useSelectable,
  Ur as useXRay
};
