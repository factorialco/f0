import { jsxs as D, jsx as n, Fragment as Fe } from "react/jsx-runtime";
import { useMemo as S, useEffect as x, useCallback as z, useState as K, useRef as p } from "react";
import { m as Te, n as we, o as le, q as Ee, r as Ie, s as ze, t as De, v as Be, u as Le } from "./F0CanvasPanel-CNzjQ3Am.js";
import { c as q, f as ce, u as Pe } from "./tooltip-DVUyzeYN.js";
import { F as je, u as Ke } from "./CoachmarkProvider-Cenp2Alt.js";
import { F as _e, a as qe, R as se } from "./F0Map-C-kvmVYt.js";
const _ = 3, Xe = ({
  title: t,
  count: o,
  ariaLabel: a,
  avatars: s,
  onClick: d,
  dataTestId: f
}) => /* @__PURE__ */ D(
  "button",
  {
    type: "button",
    onClick: d,
    "aria-label": a,
    "data-testid": f,
    className: q(
      "flex h-8 items-center gap-2 rounded-md pl-3 pr-1.5",
      "hover:bg-f1-background-hover",
      ce()
    ),
    children: [
      /* @__PURE__ */ n("span", { className: "whitespace-nowrap", children: /* @__PURE__ */ n(
        Te,
        {
          variant: "label",
          content: t,
          markdown: !1,
          className: "text-f1-foreground-secondary"
        }
      ) }),
      s && s.length > 0 ? (
        // Three faces, then the bubble for the rest. At `xs` F0AvatarList draws
        // that bubble as an ellipsis icon, with the number for screen readers
        // only. The rest go in as `remainingCount` rather than as items, which
        // keeps the bubble a plain element - given the items themselves it
        // becomes a disclosure button, a button inside this button.
        /* @__PURE__ */ n(
          we,
          {
            type: "person",
            avatars: s.slice(0, _),
            remainingCount: Math.max(o - _, 0),
            size: "xs",
            max: _,
            noTooltip: !0
          }
        )
      ) : /* @__PURE__ */ n(le, { value: o, size: "sm" })
    ]
  }
), oe = ({
  title: t,
  count: o,
  open: a,
  onOpenChange: s,
  defaultOpen: d = !0,
  children: f,
  dataTestId: h
}) => {
  const [l = d, A] = Pe({
    prop: a,
    defaultProp: d,
    onChange: s
  });
  return /* @__PURE__ */ D(Ee, { open: l, onOpenChange: A, "data-testid": h, children: [
    /* @__PURE__ */ n(Ie, { asChild: !0, children: /* @__PURE__ */ D(
      "button",
      {
        type: "button",
        className: q(
          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left",
          "hover:bg-f1-background-hover",
          ce()
        ),
        children: [
          /* @__PURE__ */ n("span", { className: "min-w-0 flex-1", children: /* @__PURE__ */ n(je, { variant: "label", content: t, markdown: !1, ellipsis: !0 }) }),
          /* @__PURE__ */ n(le, { value: o, size: "sm" }),
          /* @__PURE__ */ n(
            "span",
            {
              className: q(
                "flex shrink-0 text-f1-icon transition-transform duration-200 motion-reduce:transition-none",
                l && "rotate-180"
              ),
              children: /* @__PURE__ */ n(ze, { icon: De, size: "sm" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ n(Be, { children: f })
  ] });
}, $e = (t) => {
  const o = [];
  for (const a of t) {
    if (a.variant !== "employee")
      return null;
    o.push({ firstName: a.firstName, lastName: a.lastName, src: a.src });
  }
  return o;
}, We = ({
  source: t,
  coordinates: o,
  label: a,
  marker: s,
  getRecordId: d,
  selectedRecordId: f,
  onSelect: h,
  revealRecordId: l,
  searchSelectionNonce: A,
  viewportInset: ie,
  initialViewport: ue,
  showControls: pe,
  projection: de,
  markerLimit: fe,
  ariaLabel: me,
  sidebar: B,
  detail: L,
  onSidebarToggle: N,
  onLoadData: he,
  onLoadError: ge
}) => {
  const X = Math.min(
    fe ?? se,
    se
  ), Me = S(() => t.dataAdapter.paginationType !== "pages" ? t.dataAdapter : { ...t.dataAdapter, perPage: X }, [t.dataAdapter, X]), { data: be, paginationInfo: $, isInitialLoading: J, isLoading: Q } = Ke({ ...t, dataAdapter: Me }, { onError: ge }), c = be.records;
  x(() => {
    he({
      totalItems: $?.total || c.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: J,
      data: c
    });
  }, [$?.total, c]);
  const i = z(
    (e) => d ? d(e) : String(e.id),
    [d]
  ), { points: G, placedIds: O, placedRecords: H, unplaced: u } = S(() => {
    const e = [], r = /* @__PURE__ */ new Set(), M = [], j = [];
    for (const b of c) {
      const I = o(b);
      if (I === null) {
        j.push({ record: b, kind: null });
        continue;
      }
      if (!Array.isArray(I)) {
        j.push({ record: b, kind: I.kind });
        continue;
      }
      const ae = i(b);
      r.add(ae), M.push(b), e.push({
        id: ae,
        coordinates: I,
        label: a?.(b),
        ...s?.(b) ?? { variant: "default" }
      });
    }
    return { points: e, placedIds: r, placedRecords: M, unplaced: j };
  }, [c, o, a, s, i]), [xe, ke] = K(
    null
  ), m = f !== void 0 ? f : xe, g = p(!1), C = z(
    (e) => {
      f === void 0 && ke(e), g.current = !1, h && h(
        e ? c.find((r) => i(r) === e) ?? null : null
      );
    },
    [h, c, i, f]
  ), U = p(h);
  U.current = h, x(() => () => U.current?.(null), []);
  const k = p(null), [Ce, V] = K(!1), ve = z(() => {
    V((e) => {
      const r = !e;
      return N?.(r), r;
    });
  }, [N]), [Se, W] = K(!0), Ae = z(() => {
    W(!0), V((e) => (e || N?.(!0), !0));
  }, [N]), P = S(
    () => ({
      select: (e) => {
        const r = e ? i(e) : null, M = r !== null && O.has(r);
        M && k.current?.focusMarker(r), C(r), M && (g.current = !0);
      },
      selectedRecordId: m
    }),
    [C, i, m, O]
  ), y = m ? c.find((e) => i(e) === m) ?? null : null, Y = p(null);
  y && (Y.current = y);
  const Z = y ?? Y.current, R = G.map((e) => e.id).join(","), F = JSON.stringify({
    filters: t.currentFilters ?? {},
    search: t.currentSearch ?? ""
  }), T = p(null), v = p(null);
  x(() => {
    if (T.current === null) {
      T.current = F;
      return;
    }
    T.current !== F && (T.current = F, v.current = R);
  }, [F, R]), x(() => {
    v.current === null || Q || v.current !== R && (v.current = null, k.current?.fitToMarkers());
  }, [Q, R]);
  const ee = p(null);
  x(() => {
    const e = ee.current;
    ee.current = m, !(!e || m) && (g.current && k.current?.fitToMarkers(), g.current = !1);
  }, [m]);
  const w = t.currentSearch, ne = p(w);
  x(() => {
    const e = ne.current;
    ne.current = w, !(!e || w) && (g.current && v.current === null && k.current?.fitToMarkers(), g.current = !1);
  }, [w]);
  const te = p(null);
  x(() => {
    if (!l)
      return;
    const e = `${l}:${A ?? 0}`;
    if (te.current === e)
      return;
    const r = O.has(l);
    !r && !c.some((M) => i(M) === l) || (te.current = e, r && k.current?.focusMarker(l), C(l), g.current = r);
  }, [
    l,
    A,
    O,
    c,
    i,
    C
  ]);
  const E = Le(), Ne = S(
    () => u.map((e) => e.record),
    [u]
  ), Oe = B ? /* @__PURE__ */ D("div", { className: "flex flex-col gap-1", children: [
    u.length > 0 ? /* @__PURE__ */ n(
      oe,
      {
        title: E.collections.map.notOnMap,
        count: u.length,
        open: Se,
        onOpenChange: W,
        dataTestId: "map-panel-not-on-map",
        children: B(Ne, P)
      }
    ) : null,
    /* @__PURE__ */ n(
      oe,
      {
        title: E.collections.map.onMap,
        count: H.length,
        dataTestId: "map-panel-on-map",
        children: B(H, P)
      }
    )
  ] }) : void 0, ye = S(
    () => s ? $e(u.map((e) => s(e.record))) : null,
    [u, s]
  ), Re = u.length > 0 ? /* @__PURE__ */ n(
    Xe,
    {
      title: E.collections.map.notOnMap,
      count: u.length,
      ariaLabel: E.t("collections.map.notOnMapCount", {
        count: u.length
      }),
      avatars: ye,
      onClick: Ae,
      dataTestId: "map-not-on-map"
    }
  ) : void 0, re = "flex h-full min-h-0 flex-1 flex-col border-0 border-t border-solid border-f1-border-secondary";
  return J ? /* @__PURE__ */ n("div", { className: re, children: /* @__PURE__ */ n(_e, {}) }) : /* @__PURE__ */ n("div", { className: re, children: /* @__PURE__ */ n(
    qe,
    {
      ref: k,
      markers: G,
      selectedMarkerId: m,
      onMarkerSelect: C,
      centerOnMarkerClick: !0,
      viewportInset: ie,
      initialViewport: ue,
      showControls: pe,
      projection: de,
      ariaLabel: me,
      sidebar: Oe,
      sidebarExpanded: Ce,
      onSidebarToggle: ve,
      sidebarToggleAddon: Re,
      detail: L ? Z ? L(Z, P) : (
        // oxlint-disable-next-line react/jsx-no-useless-fragment -- must stay a node, not null: see above
        /* @__PURE__ */ n(Fe, {})
      ) : null,
      detailOpen: !!y,
      clearSelectionOnBackgroundClick: !L,
      fullScreen: !0
    }
  ) });
};
export {
  We as MapCollection
};
