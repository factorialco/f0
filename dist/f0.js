import { c as ve, P as G, a as b, f as be, g as j, C as v, B as xe, b as Ce, L as ye, d as we, V as Ne, A as Pe, e as Se, h as H, i as Le, j as M, k as U, l as J, m as Fe, n as Y, S as X, o as K, p as De, O as ke, q as Q, r as Me, s as Te, F as Z, t as Be, u as Ie, v as Re, D as Oe, w as $e, x as Ee, y as _e, z as ee, E as w, U as ae, G as Ve, H as je, I as z, J as ze, K as se, M as Ae, N as qe, Q as We, R as Ge, T as He, W as Ue, X as Je, Y as Ye, Z as Xe, _ as Ke, $ as Qe, a0 as Ze } from "./hooks-pJpUu1hG.js";
import { aD as as, aF as ss, aO as rs, a1 as ts, a2 as os, a3 as ls, a4 as ns, a5 as is, a6 as ds, a7 as cs, a8 as us, aa as fs, ab as ms, ac as hs, ad as ps, ae as gs, af as vs, aK as bs, ag as xs, ai as Cs, aj as ys, ak as ws, al as Ns, ao as Ps, ap as Ss, aq as Ls, ar as Fs, at as Ds, ah as ks, as as Ms, an as Ts, aL as Bs, aE as Is, ay as Rs, aB as Os, ax as $s, aP as Es, aw as _s, av as Vs, a9 as js, am as zs, au as As, az as qs, aG as Ws, aH as Gs, aI as Hs, aQ as Us, aA as Js, aJ as Ys, aN as Xs, aC as Ks, aM as Qs } from "./hooks-pJpUu1hG.js";
import { jsx as e, jsxs as c, Fragment as $ } from "react/jsx-runtime";
import * as E from "react";
import ea, { useState as g, forwardRef as B, useRef as re, useImperativeHandle as aa, Children as sa, useEffect as te, createContext as ra } from "react";
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
}, Ma = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
var _ = "Progress", V = 100, [ta, Ta] = ve(_), [oa, la] = ta(_), oe = E.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: o = null,
      max: t,
      getValueLabel: i = na,
      ...n
    } = a;
    (t || t === 0) && !A(t) && console.error(ia(`${t}`, "Progress"));
    const d = A(t) ? t : V;
    o !== null && !q(o, d) && console.error(da(`${o}`, "Progress"));
    const l = q(o, d) ? o : null, f = T(l) ? i(l, d) : void 0;
    return /* @__PURE__ */ e(oa, { scope: r, value: l, max: d, children: /* @__PURE__ */ e(
      G.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": T(l) ? l : void 0,
        "aria-valuetext": f,
        role: "progressbar",
        "data-state": ie(l, d),
        "data-value": l ?? void 0,
        "data-max": d,
        ...n,
        ref: s
      }
    ) });
  }
);
oe.displayName = _;
var le = "ProgressIndicator", ne = E.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...o } = a, t = la(le, r);
    return /* @__PURE__ */ e(
      G.div,
      {
        "data-state": ie(t.value, t.max),
        "data-value": t.value ?? void 0,
        "data-max": t.max,
        ...o,
        ref: s
      }
    );
  }
);
ne.displayName = le;
function na(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function ie(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function T(a) {
  return typeof a == "number";
}
function A(a) {
  return T(a) && !isNaN(a) && a > 0;
}
function q(a, s) {
  return T(a) && !isNaN(a) && a <= s && a >= 0;
}
function ia(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${V}\`.`;
}
function da(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${V} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var de = oe, ca = ne;
const ce = E.forwardRef(({ className: a, value: s, ...r }, o) => e(de, {
  ref: o,
  className: b("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...r,
  children: e(ca, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (s || 0)}%)`
    }
  })
}));
ce.displayName = de.displayName;
const ua = ({ value: a, max: s = 100, label: r, color: o }, t) => {
  const i = o ? j(o) : j("categorical-1"), n = a / s * 100;
  return c("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [e("div", {
      className: "flex-grow",
      children: e(ce, {
        color: i,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      })
    }), r && e("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: r
    })]
  });
}, fa = be(ua), Ba = v(
  {
    name: "AreaChart",
    type: "info"
  },
  Pe
), Ia = v(
  {
    name: "BarChart",
    type: "info"
  },
  xe
), Ra = v(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Ce
), Oa = v(
  {
    name: "LineChart",
    type: "info"
  },
  ye
), $a = v(
  {
    name: "PieChart",
    type: "info"
  },
  we
), Ea = v(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Ne
), _a = v(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  fa
), Va = Se, ja = H, za = ["default", "outline", "neutral"], Aa = H, qa = ["sm", "md", "lg"], Wa = Le, O = ({ count: a, list: s }) => {
  const [r, o] = g(!1), t = e(M, {
    label: `+${a}`
  });
  return s != null && s.length ? c(U, {
    open: r,
    onOpenChange: o,
    children: [e(J, {
      asChild: !0,
      children: e("button", {
        className: Fe("inline-flex flex-shrink-0 items-center"),
        children: t
      })
    }), e(Y, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: c(X, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [s.map((i, n) => e("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: e(M, {
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
const ue = ({ chips: a, max: s = 4, remainingCount: r, layout: o = "compact" }) => {
  if (o === "fill")
    return e(ke, {
      items: a,
      renderListItem: (l) => e(M, {
        ...l
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (l) => e(O, {
        count: (r ?? 0) + l,
        list: r ? void 0 : a.slice(a.length - l)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const t = a.slice(0, s), i = a.slice(s), n = r ?? a.length - s, d = n > 0;
  return c("div", {
    className: "flex items-center gap-2",
    children: [t.map((l, f) => e(M, {
      ...l
    }, f)), d && e(O, {
      count: n,
      list: r ? void 0 : i
    })]
  });
};
ue.displayName = "F0ChipList";
const Ga = De("F0ChipList", ue), ma = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ha = B(function({ widgets: s, children: r }, o) {
  const t = re(null);
  aa(o, () => t.current);
  const i = sa.toArray(s).filter((n) => !!n).map((n, d) => e("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, d));
  return e(Q, {
    layout: "home",
    children: c("div", {
      ref: t,
      className: "@container",
      children: [c("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [e(Me, {
          columns: ma,
          showArrows: !1,
          children: i
        }), e("main", {
          children: r
        })]
      }), c("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [e("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: i.slice(0, 3)
        }), e("main", {
          className: "col-span-2",
          children: r
        }), e("div", {
          className: "flex flex-1 flex-col gap-5",
          children: i.slice(3)
        })]
      })]
    })
  });
}), pa = B(function({ children: s, sideContent: r, mainColumnPosition: o = "left", sticky: t = !1 }, i) {
  return e("div", {
    ref: i,
    className: "h-full",
    children: c("div", {
      className: b("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", t && "md:sticky md:top-0 md:max-h-full"),
      children: [e("main", {
        className: b("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", t ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", o === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: s
      }), e(ga, {
        sticky: t,
        className: b("order-1", o === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), ga = ({ children: a, className: s }) => e("aside", {
  className: b("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", s),
  children: a
}), va = Te({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), fe = ea.forwardRef(({ children: a, variant: s, className: r, ...o }, t) => e(Q, {
  layout: "standard",
  children: e("section", {
    ref: t,
    className: b("relative flex-1 overflow-auto", r),
    ...o,
    children: e("div", {
      className: b(va({
        variant: s
      })),
      children: a
    })
  })
}));
fe.displayName = "StandardLayout";
const Ha = v({
  name: "StandardLayout",
  type: "layout"
}, fe), Ua = v({
  name: "TwoColumnLayout",
  type: "layout"
}, pa), Ja = v({
  name: "HomeLayout",
  type: "layout"
}, ha), ba = ({ benefits: a }) => e("div", {
  className: "flex flex-col gap-2",
  children: a.map((s, r) => e(xa, {
    text: s
  }, r))
}), xa = ({ text: a }) => c("div", {
  className: "flex flex-row items-start gap-2",
  children: [e(Ie, {
    icon: Re,
    size: "md",
    className: "text-f1-icon-positive"
  }), e("span", {
    children: a
  })]
}), me = B(({ title: a, image: s, benefits: r, actions: o, withShadow: t = !0, module: i, moduleName: n, tag: d }, l) => c("div", {
  ref: l,
  className: b("bg-white flex flex-row rounded-xl border border-f1-border-secondary", t && "shadow-md"),
  children: [e("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: e("img", {
      src: s,
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
          children: [i && e(Z, {
            module: i
          }), n && e("p", {
            className: "text-base font-medium text-f1-foreground",
            children: n
          })]
        }), d && e("div", {
          className: "flex justify-start",
          children: e(Be, {
            icon: d.icon,
            text: d.label
          })
        }), e("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: a
        })]
      }), e(ba, {
        benefits: r
      })]
    }), o && e("div", {
      className: "flex gap-3",
      children: o
    })]
  })]
}));
me.displayName = "ProductBlankslate";
function Ca({ isOpen: a, onClose: s, title: r, children: o, module: t, portalContainer: i }) {
  const [n, d] = g(a);
  return te(() => {
    d(a);
  }, [a]), e(Oe, {
    open: n,
    onOpenChange: (f) => {
      d(f), f || s();
    },
    modal: !0,
    children: c($e, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [c("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [c(Ee, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [t && e(Z, {
            module: t,
            size: "lg"
          }), r]
        }), e(_e, {
          variant: "outline",
          icon: ee,
          onClick: s,
          label: "Close modal",
          hideLabel: !0
        })]
      }), c(X, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [o, e(K, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Ya({ isOpen: a, onClose: s, title: r, image: o, benefits: t, errorMessage: i, successMessage: n, loadingState: d, nextSteps: l, closeLabel: f, primaryAction: m, modalTitle: N, modalModule: P, secondaryAction: u, portalContainer: x, tag: L }) {
  const [I, F] = g(a), [C, y] = g(null), [S, h] = g(!1), D = async () => {
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
    F(!1), s == null || s();
  }, R = S;
  return c($, {
    children: [e(Ca, {
      isOpen: I,
      onClose: k,
      title: N,
      module: P,
      portalContainer: x,
      children: e("div", {
        className: "pb-4 pl-4",
        children: e(me, {
          title: r,
          image: o,
          benefits: t,
          withShadow: !1,
          tag: L,
          actions: c("div", {
            className: "flex gap-3",
            children: [m && e(w, {
              variant: m.variant,
              label: R ? d.label : m.label,
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
    }), C && e(ae, {
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
function ya({ mediaUrl: a, title: s, description: r, onClose: o, dismissible: t, width: i, trackVisibility: n, actions: d, showConfirmation: l = !0 }) {
  const [f, m] = g(!1), N = () => {
    m(!0), o && o();
  };
  te(() => {
    n && n(!f);
  }, [n, f]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return e($, {
    children: f ? null : c(Ve, {
      style: {
        width: i
      },
      className: "relative bg-f1-background p-1",
      children: [c(je, {
        children: [t && e("div", {
          className: "absolute right-2 top-2 z-10",
          children: e(w, {
            variant: "ghost",
            icon: ee,
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
              alt: s,
              className: "h-full w-full rounded-md"
            }))
          }), c("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [e(z, {
              className: "text-lg font-medium",
              children: s
            }), e(z, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), d && e(ze, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? e(se, {
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
const wa = B(function({ primaryAction: s, secondaryAction: r, ...o }, t) {
  const i = (l) => l.variant === "promote" ? e(se, {
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
  }), n = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0, d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return c(Ae, {
    ref: t,
    ...o,
    primaryAction: n,
    secondaryAction: d,
    children: [(s == null ? void 0 : s.variant) === "promote" && i(s), (r == null ? void 0 : r.variant) === "promote" && i(r)]
  });
});
wa.displayName = "UpsellingBanner";
function Xa({ isOpen: a, setIsOpen: s, label: r, variant: o = "promote", size: t = "md", showIcon: i = !0, side: n = "right", align: d = "center", icon: l = qe, mediaUrl: f, title: m, description: N, width: P = "300px", trackVisibility: u, actions: x, onClick: L, hideLabel: I = !1 }) {
  const [F, C] = g(!1), [y, S] = g(null), [h, D] = g(null), k = (p) => {
    s(p), L && L();
  }, R = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (C(!0), S("success"));
      } catch {
        C(!0), S("error");
      }
    }
  }, he = () => {
    S(null), C(!1), D(null), s(!1);
  }, pe = a && !F, ge = x == null ? void 0 : x.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => R(p)
  } : p);
  return c($, {
    children: [c(U, {
      open: pe,
      onOpenChange: k,
      children: [e(J, {
        asChild: !0,
        children: e(w, {
          variant: o,
          label: r,
          size: t,
          icon: i ? l : void 0,
          onClick: () => s(a),
          hideLabel: I
        })
      }), e(Y, {
        side: n,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: e(ya, {
          mediaUrl: f,
          title: m,
          description: N,
          onClose: () => s(!1),
          dismissible: !1,
          width: P,
          trackVisibility: u,
          actions: ge,
          showConfirmation: !1
        })
      })]
    }), (h == null ? void 0 : h.type) === "upsell" && h.showConfirmation && y && e(ae, {
      open: !0,
      onClose: he,
      success: y === "success",
      errorMessage: h.errorMessage,
      successMessage: h.successMessage,
      nextSteps: h.nextSteps,
      closeLabel: h.closeLabel,
      portalContainer: null
    })]
  });
}
const Na = ra(null), Pa = ({ children: a, fullScreen: s = !0 }) => {
  const r = re(null), [o, t] = g(r.current);
  return Ze(() => {
    t(r.current);
  }, []), e(Na.Provider, {
    value: {
      element: o
    },
    children: e("div", {
      ref: r,
      id: "f0-layout",
      className: b({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": s
      }),
      children: a
    })
  });
}, Sa = ({ children: a }) => e(Qe, {
  reducedMotion: "user",
  children: a
}), Ka = ({ children: a, layout: s, link: r, privacyModeInitiallyEnabled: o, image: t, i18n: i, l10n: n, isDev: d = !1, dataCollectionStorageHandler: l, showExperimentalWarnings: f = !1 }) => e(Sa, {
  children: e(We, {
    isDev: d,
    showExperimentalWarnings: f,
    children: e(Ge, {
      ...n,
      children: e(He, {
        ...i,
        children: e(Ue, {
          ...r,
          children: e(Pa, {
            ...s,
            children: e(Je, {
              children: e(Ye, {
                initiallyEnabled: o,
                children: e(Xe, {
                  ...t,
                  children: e(Ke, {
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
}), W = (a) => `datacollection-${a}`, Qa = {
  get: async (a) => JSON.parse(
    localStorage.getItem(W(a)) ?? "{}"
  ),
  set: async (a, s) => {
    localStorage.setItem(W(a), JSON.stringify(s));
  }
};
export {
  Ba as AreaChart,
  as as Await,
  Ia as BarChart,
  Ra as CategoryBarChart,
  ss as DndProvider,
  rs as EmojiImage,
  ts as F0Avatar,
  os as F0AvatarAlert,
  ls as F0AvatarCompany,
  ns as F0AvatarDate,
  is as F0AvatarEmoji,
  ds as F0AvatarFile,
  cs as F0AvatarIcon,
  us as F0AvatarList,
  Z as F0AvatarModule,
  fs as F0AvatarPerson,
  ms as F0AvatarTeam,
  w as F0Button,
  hs as F0ButtonDropdown,
  ps as F0ButtonToggle,
  gs as F0Card,
  vs as F0Checkbox,
  Ga as F0ChipList,
  bs as F0EventCatcherProvider,
  Ie as F0Icon,
  xs as F0Link,
  Ka as F0Provider,
  Cs as F0TagAlert,
  ys as F0TagBalance,
  ws as F0TagCompany,
  Ns as F0TagDot,
  Ps as F0TagList,
  Ss as F0TagPerson,
  Be as F0TagRaw,
  Ls as F0TagStatus,
  Fs as F0TagTeam,
  Ds as GROUP_ID_SYMBOL,
  Ja as HomeLayout,
  Oa as LineChart,
  ks as OneFilterPicker,
  $a as PieChart,
  Ye as PrivacyModeProvider,
  me as ProductBlankslate,
  Ms as ProductCard,
  Ya as ProductModal,
  ya as ProductWidget,
  _a as ProgressBarChart,
  Ha as StandardLayout,
  Ts as TagCounter,
  Ua as TwoColumnLayout,
  ae as UpsellRequestResponseDialog,
  wa as UpsellingBanner,
  se as UpsellingButton,
  Xa as UpsellingPopover,
  Ea as VerticalBarChart,
  Ma as avatarVariants,
  Bs as buildTranslations,
  Aa as buttonDropdownSizes,
  za as buttonDropdownVariants,
  ja as buttonSizes,
  qa as buttonToggleSizes,
  Va as buttonVariants,
  Is as createAtlaskitDriver,
  Rs as createDataSourceDefinition,
  Qa as dataCollectionLocalStorageHandler,
  ka as defaultTranslations,
  De as experimental,
  Os as getAnimationVariants,
  $s as getDataSourcePaginationType,
  Es as getEmojiLabel,
  _s as isInfiniteScrollPagination,
  Vs as isPageBasedPagination,
  Wa as linkVariants,
  js as modules,
  zs as tagDotColors,
  As as useData,
  qs as useDataSource,
  Ws as useDndEvents,
  Gs as useDraggable,
  Hs as useDroppableList,
  Us as useEmojiConfetti,
  Js as useGroups,
  Ys as usePrivacyMode,
  Xs as useReducedMotion,
  Ks as useSelectable,
  Qs as useXRay
};
