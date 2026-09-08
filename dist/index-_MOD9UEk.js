import { jsxs as q, jsx as n, Fragment as de } from "react/jsx-runtime";
import { useMemo as x, useEffect as C, useCallback as P, useState as B, useRef as d } from "react";
import { m as Pe, n as Be, o as he, q as je, r as qe, s as Qe, t as _e, v as Xe, u as $e } from "./F0CanvasPanel-CNzjQ3Am.js";
import { c as W, f as ge, u as He } from "./tooltip-DVUyzeYN.js";
import { F as Me, u as Je, S as We } from "./CoachmarkProvider-MAfs43u7.js";
import { F as Ge, a as Ue, R as fe } from "./F0Map-s8aNUxCS.js";
const j = 3, Ve = ({
  title: r,
  count: s,
  ariaLabel: o,
  avatars: l,
  onClick: f,
  dataTestId: m
}) => /* @__PURE__ */ q(
  "button",
  {
    type: "button",
    onClick: f,
    "aria-label": o,
    "data-testid": m,
    className: W(
      "flex h-8 items-center gap-2 rounded-md pl-3 pr-1.5",
      "hover:bg-f1-background-hover",
      ge()
    ),
    children: [
      /* @__PURE__ */ n("span", { className: "whitespace-nowrap", children: /* @__PURE__ */ n(
        Pe,
        {
          variant: "label",
          content: r,
          markdown: !1,
          className: "text-f1-foreground-secondary"
        }
      ) }),
      l && l.length > 0 ? (
        // Three faces, then the count for the rest. `sm`, not `xs`: at `xs`
        // F0AvatarList draws that bubble as an ellipsis icon and leaves the
        // number to screen readers, and the number is the whole point here - this
        // control is a count of what the map is not showing. The rest go in as
        // `remainingCount` rather than as items, which keeps the bubble a plain
        // element - given the items themselves it becomes a disclosure button, a
        // button inside this button.
        /* @__PURE__ */ n(
          Be,
          {
            type: "person",
            avatars: l.slice(0, j),
            remainingCount: s > j ? s - j : void 0,
            size: "sm",
            max: j,
            noTooltip: !0
          }
        )
      ) : /* @__PURE__ */ n(he, { value: s, size: "sm" })
    ]
  }
), me = ({
  title: r,
  count: s,
  open: o,
  onOpenChange: l,
  defaultOpen: f = !0,
  children: m,
  dataTestId: g
}) => {
  const [c = f, w] = He({
    prop: o,
    defaultProp: f,
    onChange: l
  });
  return /* @__PURE__ */ q(je, { open: c, onOpenChange: w, "data-testid": g, children: [
    /* @__PURE__ */ n(qe, { asChild: !0, children: /* @__PURE__ */ q(
      "button",
      {
        type: "button",
        className: W(
          // Wider than the rows it heads, and 10px of its own so the title
          // still starts where their content does: the header spans the
          // panel, the rows sit inside it.
          "flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left",
          "hover:bg-f1-background-hover",
          ge()
        ),
        children: [
          /* @__PURE__ */ n("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ n(Me, { variant: "label", content: r, markdown: !1, ellipsis: !0 }) }),
          /* @__PURE__ */ n(he, { value: s, size: "sm" }),
          /* @__PURE__ */ n(
            "span",
            {
              className: W(
                "flex shrink-0 text-f1-icon transition-transform duration-200 motion-reduce:transition-none",
                c && "rotate-180"
              ),
              children: /* @__PURE__ */ n(Qe, { icon: _e, size: "sm" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n(Xe, { className: "px-0.5", children: m })
  ] });
}, Ye = (r) => {
  const s = [];
  for (const o of r) {
    if (o.variant !== "employee")
      return null;
    s.push({ firstName: o.firstName, lastName: o.lastName, src: o.src });
  }
  return s;
}, sn = ({
  source: r,
  coordinates: s,
  label: o,
  marker: l,
  getRecordId: f,
  selectedRecordId: m,
  onSelect: g,
  revealRecordId: c,
  searchSelectionNonce: w,
  viewportInset: ve,
  initialViewport: Ce,
  showControls: ke,
  projection: xe,
  markerLimit: be,
  ariaLabel: ye,
  sidebar: b,
  sidebarSearchText: R,
  detail: Q,
  onSidebarToggle: F,
  onLoadData: Ne,
  onLoadError: Se
}) => {
  const G = Math.min(
    be ?? fe,
    fe
  ), Ae = x(() => r.dataAdapter.paginationType !== "pages" ? r.dataAdapter : { ...r.dataAdapter, perPage: G }, [r.dataAdapter, G]), { data: Oe, paginationInfo: U, isInitialLoading: V, isLoading: Y } = Je({ ...r, dataAdapter: Ae }, { onError: Se }), i = Oe.records;
  C(() => {
    Ne({
      totalItems: U?.total || i.length,
      filters: r.currentFilters,
      search: r.currentSearch,
      isInitialLoading: V,
      data: i
    });
  }, [U?.total, i]);
  const a = P(
    (e) => f ? f(e) : String(e.id),
    [f]
  ), { points: Z, placedIds: y, placedRecords: E, unplaced: u, unplacedKinds: ee } = x(() => {
    const e = [], t = /* @__PURE__ */ new Set(), v = [], H = [], J = /* @__PURE__ */ new Map();
    for (const p of i) {
      const O = s(p);
      if (O === null) {
        H.push({ record: p, kind: null }), J.set(a(p), null);
        continue;
      }
      if (!Array.isArray(O)) {
        H.push({ record: p, kind: O.kind }), J.set(a(p), O.kind);
        continue;
      }
      const pe = a(p);
      t.add(pe), v.push(p), e.push({
        id: pe,
        coordinates: O,
        label: o?.(p),
        ...l?.(p) ?? { variant: "default" }
      });
    }
    return { points: e, placedIds: t, placedRecords: v, unplaced: H, unplacedKinds: J };
  }, [i, s, o, l, a]), [we, Re] = B(
    null
  ), h = m !== void 0 ? m : we, M = d(!1), N = P(
    (e) => {
      m === void 0 && Re(e), M.current = !1, g && g(
        e ? i.find((t) => a(t) === e) ?? null : null
      );
    },
    [g, i, a, m]
  ), ne = d(g);
  ne.current = g, C(() => () => ne.current?.(null), []);
  const k = d(null), [Fe, te] = B(!1), Ee = P(() => {
    te((e) => {
      const t = !e;
      return F?.(t), t;
    });
  }, [F]), [Ie, re] = B(!1), [_, ae] = B(""), Te = P(() => {
    re(!0), ae(""), te((e) => (e || F?.(!0), !0));
  }, [F]), I = x(
    () => ({
      select: (e) => {
        const t = e ? a(e) : null, v = t !== null && y.has(t);
        v && k.current?.focusMarker(t), N(t), v && (M.current = !0);
      },
      selectedRecordId: h,
      placement: (e) => {
        const t = a(e);
        return y.has(t) ? "placed" : ee.get(t) ?? "unplaced";
      }
    }),
    [N, a, h, y, ee]
  ), T = h ? i.find((e) => a(e) === h) ?? null : null, se = d(null);
  T && (se.current = T);
  const oe = T ?? se.current, z = Z.map((e) => e.id).join(","), D = JSON.stringify({
    filters: r.currentFilters ?? {},
    search: r.currentSearch ?? ""
  }), K = d(null), S = d(null);
  C(() => {
    if (K.current === null) {
      K.current = D;
      return;
    }
    K.current !== D && (K.current = D, S.current = z);
  }, [D, z]), C(() => {
    S.current === null || Y || S.current !== z && (S.current = null, k.current?.fitToMarkers());
  }, [Y, z]);
  const le = d(null);
  C(() => {
    const e = le.current;
    le.current = h, !(!e || h) && (M.current && k.current?.fitToMarkers(), M.current = !1);
  }, [h]);
  const L = r.currentSearch, ce = d(L);
  C(() => {
    const e = ce.current;
    ce.current = L, !(!e || L) && (M.current && S.current === null && k.current?.fitToMarkers(), M.current = !1);
  }, [L]);
  const ie = d(null);
  C(() => {
    if (!c)
      return;
    const e = `${c}:${w ?? 0}`;
    if (ie.current === e)
      return;
    const t = y.has(c);
    !t && !i.some((v) => a(v) === c) || (ie.current = e, t && k.current?.focusMarker(c), N(c), M.current = t);
  }, [
    c,
    w,
    y,
    i,
    a,
    N
  ]);
  const A = $e(), X = x(
    () => u.map((e) => e.record),
    [u]
  ), $ = x(() => {
    const e = _.trim().toLowerCase();
    return !R || !e ? null : [...X, ...E].filter(
      (t) => R(t).toLowerCase().includes(e)
    );
  }, [R, _, X, E]), ze = b ? (
    // The panel hands over its whole body, header row aside: this owns the
    // insets and the scrolling. 4px horizontally rather than the 6px a row
    // gets, so a section header spans wider than the rows under it.
    /* @__PURE__ */ n("div", { className: "flex h-full min-h-0 flex-col gap-1 overflow-y-auto px-1 pb-1.5 pt-0.5", children: $ ? (
      // The 2px a section's rows step in by, so a match sits exactly where
      // the same row sat before the search.
      /* @__PURE__ */ n("div", { className: "px-0.5", "data-testid": "map-panel-search-results", children: $.length > 0 ? b($, I) : (
        // `select`'s own phrase rather than a key of the map's: it is the
        // same sentence, and every consumer already translates that one.
        /* @__PURE__ */ n("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ n(
          Me,
          {
            variant: "description",
            content: A.select.noResults,
            markdown: !1
          }
        ) })
      ) })
    ) : /* @__PURE__ */ q(de, { children: [
      u.length > 0 ? /* @__PURE__ */ n(
        me,
        {
          title: A.collections.map.notOnMap,
          count: u.length,
          open: Ie,
          onOpenChange: re,
          dataTestId: "map-panel-not-on-map",
          children: b(X, I)
        }
      ) : null,
      /* @__PURE__ */ n(
        me,
        {
          title: A.collections.map.onMap,
          count: E.length,
          dataTestId: "map-panel-on-map",
          children: b(E, I)
        }
      )
    ] }) })
  ) : void 0, De = b && R ? /* @__PURE__ */ n(
    We,
    {
      value: _,
      onChange: (e) => ae(e ?? ""),
      variant: "ghost",
      expandedWidth: "fill"
    }
  ) : void 0, Ke = x(
    () => l ? Ye(u.map((e) => l(e.record))) : null,
    [u, l]
  ), Le = u.length > 0 ? /* @__PURE__ */ n(
    Ve,
    {
      title: A.collections.map.notOnMap,
      count: u.length,
      ariaLabel: A.t("collections.map.notOnMapCount", {
        count: u.length
      }),
      avatars: Ke,
      onClick: Te,
      dataTestId: "map-not-on-map"
    }
  ) : void 0, ue = "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary";
  return V ? /* @__PURE__ */ n("div", { className: ue, children: /* @__PURE__ */ n(Ge, {}) }) : /* @__PURE__ */ n("div", { className: ue, children: /* @__PURE__ */ n(
    Ue,
    {
      ref: k,
      markers: Z,
      selectedMarkerId: h,
      onMarkerSelect: N,
      centerOnMarkerClick: !0,
      viewportInset: ve,
      initialViewport: Ce,
      showControls: ke,
      projection: xe,
      ariaLabel: ye,
      sidebar: ze,
      sidebarExpanded: Fe,
      onSidebarToggle: Ee,
      sidebarToggleAddon: Le,
      sidebarHeaderStart: De,
      detail: Q ? oe ? Q(oe, I) : (
        // oxlint-disable-next-line react/jsx-no-useless-fragment -- must stay a node, not null: see above
        /* @__PURE__ */ n(de, {})
      ) : null,
      detailOpen: !!T,
      clearSelectionOnBackgroundClick: !Q,
      fullScreen: !0
    }
  ) });
};
export {
  sn as MapCollection
};
