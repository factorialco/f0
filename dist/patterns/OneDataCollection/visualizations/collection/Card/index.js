import { jsxs as C, jsx as r, Fragment as j } from "react/jsx-runtime";
import { useMemo as U, useEffect as V } from "react";
import { cardPropertyRenderers as F } from "../../../../../components/F0Card/components/CardMetadata.js";
import { useGroups as R, getAnimationVariants as _ } from "../../../../../hooks/datasource/useGroups.js";
import { useSelectable as q } from "../../../../../hooks/datasource/useSelectable/useSelectable.js";
import "../../../../../icons/app/Menu.js";
import J from "../../../../../icons/app/Placeholder.js";
import { cn as D } from "../../../../../lib/utils.js";
import { Card as K, CardHeader as Q, CardTitle as X, CardContent as Y } from "../../../../../ui/Card/Card.js";
import { GroupHeader as Z } from "../../../../../ui/GroupHeader/GroupHeader.js";
import { Skeleton as H } from "../../../../../ui/skeleton.js";
import { useDataCollectionData as $ } from "../../../hooks/useDataCollectionData/useDataCollectionData.js";
import { AnimatePresence as z } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.js";
import { PagesPagination as B } from "../../../components/PagesPagination/PagesPagination.js";
import { motion as W } from "../../../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
import { F0Card as ee } from "../../../../../components/F0Card/F0Card.js";
const te = (n) => Math.ceil(n / 12) * 12, T = ({
  children: n,
  tmpFullWidth: c
}) => /* @__PURE__ */ r("div", { className: D("@container", c ? "px-0" : "px-page"), children: /* @__PURE__ */ r(
  "div",
  {
    className: D(
      "grid grid-cols-1 gap-4",
      "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"
    ),
    children: n
  }
) }), L = ({
  source: n,
  items: c,
  selectedItems: b,
  handleSelectItemChange: A,
  cardProperties: k,
  title: v,
  description: h,
  avatar: y,
  image: g,
  imageFit: x,
  imageSize: a,
  imageAspectRatio: O,
  blurredBackground: M,
  compact: N,
  tmpFullWidth: u
}) => {
  function w(e, d) {
    return d.map((o) => {
      if (o.hide?.(e))
        return null;
      const p = o.render(e);
      if (p === void 0)
        return null;
      const m = l(p);
      if (!m) return null;
      const s = {
        ...m,
        label: o.label
      };
      return s.type === "file" ? {
        property: s
      } : {
        icon: o.icon ?? J,
        property: s
      };
    }).filter((o) => o !== null);
  }
  function l(e) {
    return typeof e == "string" ? { type: "text", value: e } : typeof e == "number" ? { type: "number", value: e } : f(e) ? e : null;
  }
  function f(e) {
    if (typeof e != "object" || e === null || !("type" in e))
      return !1;
    const d = e.type;
    return typeof d == "string" && d in F;
  }
  return /* @__PURE__ */ r(T, { tmpFullWidth: u, children: c.map((e, d) => {
    const o = n.selectable ? n.selectable(e) : void 0, p = n.itemUrl ? n.itemUrl(e) : void 0, m = n.itemOnClick ? n.itemOnClick(e) : void 0, s = (n.itemActions ? n.itemActions(e) || [] : []).filter((t) => t.type !== "separator"), P = (s.filter(
      (t) => t.type === "other" || !t.type
    ) || []).map((t) => ({
      ...t,
      // Reconverts the type to DropdownItemObject
      type: "item"
    })), I = s.find((t) => t.type === "primary") || void 0, S = s.filter((t) => t.type === "secondary") || [], G = !!n.selectable && o !== void 0, i = w(e, k);
    return /* @__PURE__ */ r(
      W.div,
      {
        layout: !0,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        custom: d,
        variants: _({
          delay: 0.02,
          duration: 0.3
        }),
        children: /* @__PURE__ */ r(
          ee,
          {
            title: v(e),
            selectable: G,
            description: h ? h(e) : void 0,
            avatar: y ? y(e) : void 0,
            image: g ? g(e) : void 0,
            imageFit: x,
            imageSize: a,
            imageAspectRatio: O,
            blurredBackground: M,
            selected: G && b.has(o),
            onSelect: (t) => A(e, t),
            secondaryActions: S,
            primaryAction: I,
            otherActions: P,
            onClick: m,
            link: p,
            compact: N || !1,
            metadata: i,
            fullHeight: !0
          },
          d
        )
      },
      d
    );
  }) });
}, Ce = ({
  cardProperties: n,
  title: c,
  description: b,
  avatar: A,
  image: k,
  imageFit: v,
  imageSize: h,
  imageAspectRatio: y,
  blurredBackground: g,
  compact: x,
  source: a,
  onSelectItems: O,
  onLoadData: M,
  onLoadError: N,
  tmpFullWidth: u
}) => {
  const w = U(() => {
    if (a.dataAdapter.paginationType === "pages") {
      const i = a.dataAdapter.perPage, t = te(i ?? 24);
      return {
        ...a.dataAdapter,
        perPage: t
      };
    }
    return a.dataAdapter;
  }, [a.dataAdapter]), { data: l, paginationInfo: f, setPage: e, isInitialLoading: d } = $(
    {
      ...a,
      dataAdapter: w
    },
    {
      onError: (i) => {
        N(i);
      }
    }
  );
  V(() => {
    M({
      totalItems: f?.total || l.records.length,
      filters: a.currentFilters,
      search: a.currentSearch,
      isInitialLoading: d,
      data: l.records
    });
  }, [f?.total, l.records]);
  const {
    selectedItems: o,
    groupAllSelectedStatus: p,
    handleSelectItemChange: m,
    handleSelectGroupChange: s
  } = q({
    data: l,
    paginationInfo: f,
    source: a,
    onSelectItems: O,
    selectionMode: "multi",
    selectedState: a.defaultSelectedItems
  }), P = a.grouping?.collapsible, I = a.grouping?.defaultOpenGroups, { openGroups: S, setGroupOpen: G } = R(
    l?.type === "grouped" ? l.groups : [],
    I
  );
  return /* @__PURE__ */ C("div", { className: "flex h-full min-h-0 flex-1 flex-col gap-4", children: [
    /* @__PURE__ */ r("div", { className: "overflow-auto", children: d ? /* @__PURE__ */ r(T, { tmpFullWidth: u, children: Array.from({ length: 8 }).map((i, t) => /* @__PURE__ */ C(K, { children: [
      /* @__PURE__ */ r(Q, { children: /* @__PURE__ */ r(X, { "aria-label": "Loading card", children: /* @__PURE__ */ r(H, { className: "h-4 w-3/4" }) }) }),
      /* @__PURE__ */ r(Y, { className: "space-y-2", children: n.map((E) => /* @__PURE__ */ C("div", { className: "space-y-1", children: [
        /* @__PURE__ */ r(H, { className: "h-3 w-1/4" }),
        /* @__PURE__ */ r(H, { className: "h-3 w-1/2" })
      ] }, String(E.label))) })
    ] }, t)) }) : /* @__PURE__ */ C(j, { children: [
      l?.type === "grouped" && l.groups.map((i) => /* @__PURE__ */ C(j, { children: [
        /* @__PURE__ */ r(
          Z,
          {
            label: i.label,
            itemCount: i.itemCount,
            onOpenChange: (t) => G(i.key, t),
            open: S[i.key],
            selectable: !!a.selectable,
            showOpenChange: P,
            select: p[i.key]?.checked ? !0 : p[i.key]?.indeterminate ? "indeterminate" : !1,
            onSelectChange: (t) => s(i, t),
            className: "px-page pb-2 pt-4"
          }
        ),
        /* @__PURE__ */ r(z, { children: (!P || S[i.key]) && /* @__PURE__ */ r(
          L,
          {
            source: a,
            items: i.records,
            selectedItems: o,
            handleSelectItemChange: m,
            title: c,
            cardProperties: n,
            description: b,
            avatar: A,
            image: k,
            imageFit: v,
            imageSize: h,
            imageAspectRatio: y,
            blurredBackground: g,
            compact: x,
            tmpFullWidth: u
          },
          i.key
        ) })
      ] })),
      l?.type === "flat" && /* @__PURE__ */ r(
        L,
        {
          source: a,
          items: l.records,
          selectedItems: o,
          handleSelectItemChange: m,
          title: c,
          cardProperties: n,
          description: b,
          avatar: A,
          image: k,
          imageFit: v,
          imageSize: h,
          imageAspectRatio: y,
          blurredBackground: g,
          compact: x,
          tmpFullWidth: u
        }
      )
    ] }) }),
    /* @__PURE__ */ r(B, { paginationInfo: f, setPage: e })
  ] });
};
export {
  Ce as CardCollection
};
