import { jsxs as K, jsx as n, Fragment as ue } from "react/jsx-runtime";
import { useMemo as k, useEffect as C, useCallback as B, useState as j, useRef as p } from "react";
import { m as Le, n as Pe, o as fe, q as Be, r as je, s as qe, t as Ke, v as Qe, u as _e } from "./F0CanvasPanel-CNzjQ3Am.js";
import { c as J, f as me, u as Xe } from "./tooltip-DVUyzeYN.js";
import { F as he, u as $e, S as He } from "./CoachmarkProvider-CFtPINp3.js";
import { F as Je, a as We, R as pe } from "./F0Map-FQGMyEkK.js";
const q = 3, Ge = ({
  title: r,
  count: a,
  ariaLabel: s,
  avatars: o,
  onClick: d,
  dataTestId: f
}) => /* @__PURE__ */ K(
  "button",
  {
    type: "button",
    onClick: d,
    "aria-label": s,
    "data-testid": f,
    className: J(
      "flex h-8 items-center gap-2 rounded-md pl-3 pr-1.5",
      "hover:bg-f1-background-hover",
      me()
    ),
    children: [
      /* @__PURE__ */ n("span", { className: "whitespace-nowrap", children: /* @__PURE__ */ n(
        Le,
        {
          variant: "label",
          content: r,
          markdown: !1,
          className: "text-f1-foreground-secondary"
        }
      ) }),
      o && o.length > 0 ? (
        // Three faces, then the count for the rest. `sm`, not `xs`: at `xs`
        // F0AvatarList draws that bubble as an ellipsis icon and leaves the
        // number to screen readers, and the number is the whole point here - this
        // control is a count of what the map is not showing. The rest go in as
        // `remainingCount` rather than as items, which keeps the bubble a plain
        // element - given the items themselves it becomes a disclosure button, a
        // button inside this button.
        /* @__PURE__ */ n(
          Pe,
          {
            type: "person",
            avatars: o.slice(0, q),
            remainingCount: a > q ? a - q : void 0,
            size: "sm",
            max: q,
            noTooltip: !0
          }
        )
      ) : /* @__PURE__ */ n(fe, { value: a, size: "sm" })
    ]
  }
), de = ({
  title: r,
  count: a,
  open: s,
  onOpenChange: o,
  defaultOpen: d = !0,
  children: f,
  dataTestId: h
}) => {
  const [l = d, A] = Xe({
    prop: s,
    defaultProp: d,
    onChange: o
  });
  return /* @__PURE__ */ K(Be, { open: l, onOpenChange: A, "data-testid": h, children: [
    /* @__PURE__ */ n(je, { asChild: !0, children: /* @__PURE__ */ K(
      "button",
      {
        type: "button",
        className: J(
          // Wider than the rows it heads, and 10px of its own so the title
          // still starts where their content does: the header spans the
          // panel, the rows sit inside it.
          "flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left",
          "hover:bg-f1-background-hover",
          me()
        ),
        children: [
          /* @__PURE__ */ n("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ n(he, { variant: "label", content: r, markdown: !1, ellipsis: !0 }) }),
          /* @__PURE__ */ n(fe, { value: a, size: "sm" }),
          /* @__PURE__ */ n(
            "span",
            {
              className: J(
                "flex shrink-0 text-f1-icon transition-transform duration-200 motion-reduce:transition-none",
                l && "rotate-180"
              ),
              children: /* @__PURE__ */ n(qe, { icon: Ke, size: "sm" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n(Qe, { className: "px-0.5", children: f })
  ] });
}, Ue = (r) => {
  const a = [];
  for (const s of r) {
    if (s.variant !== "employee")
      return null;
    a.push({ firstName: s.firstName, lastName: s.lastName, src: s.src });
  }
  return a;
}, rn = ({
  source: r,
  coordinates: a,
  label: s,
  marker: o,
  getRecordId: d,
  selectedRecordId: f,
  onSelect: h,
  revealRecordId: l,
  searchSelectionNonce: A,
  viewportInset: ge,
  initialViewport: Me,
  showControls: ve,
  projection: Ce,
  markerLimit: xe,
  ariaLabel: ke,
  sidebar: b,
  sidebarSearchText: O,
  detail: Q,
  onSidebarToggle: R,
  onLoadData: be,
  onLoadError: ye
}) => {
  const W = Math.min(
    xe ?? pe,
    pe
  ), Ne = k(() => r.dataAdapter.paginationType !== "pages" ? r.dataAdapter : { ...r.dataAdapter, perPage: W }, [r.dataAdapter, W]), { data: Se, paginationInfo: G, isInitialLoading: U, isLoading: V } = $e({ ...r, dataAdapter: Ne }, { onError: ye }), c = Se.records;
  C(() => {
    be({
      totalItems: G?.total || c.length,
      filters: r.currentFilters,
      search: r.currentSearch,
      isInitialLoading: U,
      data: c
    });
  }, [G?.total, c]);
  const i = B(
    (e) => d ? d(e) : String(e.id),
    [d]
  ), { points: Y, placedIds: w, placedRecords: F, unplaced: u } = k(() => {
    const e = [], t = /* @__PURE__ */ new Set(), M = [], H = [];
    for (const v of c) {
      const P = a(v);
      if (P === null) {
        H.push({ record: v, kind: null });
        continue;
      }
      if (!Array.isArray(P)) {
        H.push({ record: v, kind: P.kind });
        continue;
      }
      const ie = i(v);
      t.add(ie), M.push(v), e.push({
        id: ie,
        coordinates: P,
        label: s?.(v),
        ...o?.(v) ?? { variant: "default" }
      });
    }
    return { points: e, placedIds: t, placedRecords: M, unplaced: H };
  }, [c, a, s, o, i]), [Ae, Oe] = j(
    null
  ), m = f !== void 0 ? f : Ae, g = p(!1), y = B(
    (e) => {
      f === void 0 && Oe(e), g.current = !1, h && h(
        e ? c.find((t) => i(t) === e) ?? null : null
      );
    },
    [h, c, i, f]
  ), Z = p(h);
  Z.current = h, C(() => () => Z.current?.(null), []);
  const x = p(null), [Re, ee] = j(!1), we = B(() => {
    ee((e) => {
      const t = !e;
      return R?.(t), t;
    });
  }, [R]), [Fe, ne] = j(!1), [_, te] = j(""), Ee = B(() => {
    ne(!0), te(""), ee((e) => (e || R?.(!0), !0));
  }, [R]), E = k(
    () => ({
      select: (e) => {
        const t = e ? i(e) : null, M = t !== null && w.has(t);
        M && x.current?.focusMarker(t), y(t), M && (g.current = !0);
      },
      selectedRecordId: m
    }),
    [y, i, m, w]
  ), I = m ? c.find((e) => i(e) === m) ?? null : null, re = p(null);
  I && (re.current = I);
  const ae = I ?? re.current, T = Y.map((e) => e.id).join(","), z = JSON.stringify({
    filters: r.currentFilters ?? {},
    search: r.currentSearch ?? ""
  }), D = p(null), N = p(null);
  C(() => {
    if (D.current === null) {
      D.current = z;
      return;
    }
    D.current !== z && (D.current = z, N.current = T);
  }, [z, T]), C(() => {
    N.current === null || V || N.current !== T && (N.current = null, x.current?.fitToMarkers());
  }, [V, T]);
  const se = p(null);
  C(() => {
    const e = se.current;
    se.current = m, !(!e || m) && (g.current && x.current?.fitToMarkers(), g.current = !1);
  }, [m]);
  const L = r.currentSearch, oe = p(L);
  C(() => {
    const e = oe.current;
    oe.current = L, !(!e || L) && (g.current && N.current === null && x.current?.fitToMarkers(), g.current = !1);
  }, [L]);
  const le = p(null);
  C(() => {
    if (!l)
      return;
    const e = `${l}:${A ?? 0}`;
    if (le.current === e)
      return;
    const t = w.has(l);
    !t && !c.some((M) => i(M) === l) || (le.current = e, t && x.current?.focusMarker(l), y(l), g.current = t);
  }, [
    l,
    A,
    w,
    c,
    i,
    y
  ]);
  const S = _e(), X = k(
    () => u.map((e) => e.record),
    [u]
  ), $ = k(() => {
    const e = _.trim().toLowerCase();
    return !O || !e ? null : [...X, ...F].filter(
      (t) => O(t).toLowerCase().includes(e)
    );
  }, [O, _, X, F]), Ie = b ? (
    // The panel hands over its whole body, header row aside: this owns the
    // insets and the scrolling. 4px horizontally rather than the 6px a row
    // gets, so a section header spans wider than the rows under it.
    /* @__PURE__ */ n("div", { className: "flex h-full min-h-0 flex-col gap-1 overflow-y-auto px-1 pb-1.5 pt-0.5", children: $ ? (
      // The 2px a section's rows step in by, so a match sits exactly where
      // the same row sat before the search.
      /* @__PURE__ */ n("div", { className: "px-0.5", "data-testid": "map-panel-search-results", children: $.length > 0 ? b($, E) : (
        // `select`'s own phrase rather than a key of the map's: it is the
        // same sentence, and every consumer already translates that one.
        /* @__PURE__ */ n("div", { className: "px-2 py-1.5", children: /* @__PURE__ */ n(
          he,
          {
            variant: "description",
            content: S.select.noResults,
            markdown: !1
          }
        ) })
      ) })
    ) : /* @__PURE__ */ K(ue, { children: [
      u.length > 0 ? /* @__PURE__ */ n(
        de,
        {
          title: S.collections.map.notOnMap,
          count: u.length,
          open: Fe,
          onOpenChange: ne,
          dataTestId: "map-panel-not-on-map",
          children: b(X, E)
        }
      ) : null,
      /* @__PURE__ */ n(
        de,
        {
          title: S.collections.map.onMap,
          count: F.length,
          dataTestId: "map-panel-on-map",
          children: b(F, E)
        }
      )
    ] }) })
  ) : void 0, Te = b && O ? /* @__PURE__ */ n(
    He,
    {
      value: _,
      onChange: (e) => te(e ?? ""),
      variant: "ghost",
      expandedWidth: "fill"
    }
  ) : void 0, ze = k(
    () => o ? Ue(u.map((e) => o(e.record))) : null,
    [u, o]
  ), De = u.length > 0 ? /* @__PURE__ */ n(
    Ge,
    {
      title: S.collections.map.notOnMap,
      count: u.length,
      ariaLabel: S.t("collections.map.notOnMapCount", {
        count: u.length
      }),
      avatars: ze,
      onClick: Ee,
      dataTestId: "map-not-on-map"
    }
  ) : void 0, ce = "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary";
  return U ? /* @__PURE__ */ n("div", { className: ce, children: /* @__PURE__ */ n(Je, {}) }) : /* @__PURE__ */ n("div", { className: ce, children: /* @__PURE__ */ n(
    We,
    {
      ref: x,
      markers: Y,
      selectedMarkerId: m,
      onMarkerSelect: y,
      centerOnMarkerClick: !0,
      viewportInset: ge,
      initialViewport: Me,
      showControls: ve,
      projection: Ce,
      ariaLabel: ke,
      sidebar: Ie,
      sidebarExpanded: Re,
      onSidebarToggle: we,
      sidebarToggleAddon: De,
      sidebarHeaderStart: Te,
      detail: Q ? ae ? Q(ae, E) : (
        // oxlint-disable-next-line react/jsx-no-useless-fragment -- must stay a node, not null: see above
        /* @__PURE__ */ n(ue, {})
      ) : null,
      detailOpen: !!I,
      clearSelectionOnBackgroundClick: !Q,
      fullScreen: !0
    }
  ) });
};
export {
  rn as MapCollection
};
