import { jsx as n, jsxs as O } from "react/jsx-runtime";
import pe, { useMemo as j, useCallback as v } from "react";
import { F0Select as xe } from "../../../../components/F0Select/index.js";
import { cn as R } from "../../../../lib/utils.js";
import { Spinner as he } from "../../../../ui/Spinner/index.js";
import { VirtualList as G } from "../../../../lib/VirtualList/index.js";
import { CreateItem as J } from "../../CreateItem/index.js";
import { EntitySelectListItem as w } from "../../ListItem/index.js";
import { Footer as ie } from "./Footer.js";
import { Searcher as Se } from "./Searcher.js";
const q = 384, z = 36, ye = 37, Q = 1, W = 200, X = '[data-avatarname-navigator-element="true"]', Oe = ({
  groupView: d,
  entities: r,
  groups: c,
  selectedGroup: S,
  search: f,
  onSelect: M,
  onRemove: A,
  onSubItemRemove: P,
  onSubItemSelect: Z,
  onClear: Y,
  onSelectAll: $,
  onSearch: V,
  selectedEntities: I = [],
  onGroupChange: ee,
  onToggleExpand: g,
  searchPlaceholder: te,
  selectAllLabel: B,
  clearLabel: C,
  notFoundTitle: se,
  notFoundSubtitle: re,
  className: le,
  actions: k,
  onCreate: u,
  onCreateLabel: K,
  singleSelector: m = !1,
  loading: i = !1,
  disabled: T = !1,
  hiddenAvatar: N = !1
}) => {
  const E = pe.useRef(null), H = j(
    () => d ? r.reduce(
      (e, t) => e + (t.subItems?.length ?? 0),
      0
    ) : r.length,
    [r, d]
  ), p = v(() => {
    setTimeout(() => {
      E.current?.scrollTo({ top: 0 });
    }, Q), setTimeout(() => {
      Array.from(
        document.querySelectorAll(X)
      )[0]?.focus();
    }, W);
  }, []), x = v(() => {
    setTimeout(() => {
      E.current?.scrollTo({ top: E.current?.scrollHeight });
    }, Q), setTimeout(() => {
      const e = Array.from(
        document.querySelectorAll(X)
      );
      e[e.length - 1]?.focus();
    }, W);
  }, []), F = j(
    () => new Map(I.map((e) => [e.id, e])),
    [I]
  ), D = v(
    (e) => {
      const t = F.get(e.id);
      if (!d)
        return {
          selected: !!t,
          partialSelected: !!t
        };
      const l = (e.subItems ?? []).filter(
        (a) => t?.subItems?.some(
          (b) => b.subId === a.subId
        )
      ), s = (e.subItems?.length ?? 0) === l.length, o = !s && l.length > 0;
      return { selected: s, partialSelected: o };
    },
    [d, F]
  ), ne = v(
    (e) => {
      if (e.index === 0 && u)
        return /* @__PURE__ */ n(
          J,
          {
            label: K ?? "",
            onCreate: () => u?.(f),
            goToFirst: p,
            goToLast: x
          }
        );
      const t = u ? e.index - 1 : e.index, l = r[t], { selected: s, partialSelected: o } = D(l);
      return /* @__PURE__ */ n(
        w,
        {
          expanded: l.expanded ?? !1,
          onExpand: () => g(l, !0),
          search: f,
          groupView: d,
          entity: l,
          onSelect: M,
          onRemove: A,
          selected: s,
          partialSelected: o,
          showGroupIcon: Te(c, S),
          singleSelector: m,
          goToFirst: p,
          goToLast: x,
          disabled: T,
          hiddenAvatar: N
        },
        l.id
      );
    },
    [
      u,
      K,
      T,
      r,
      D,
      p,
      x,
      d,
      c,
      N,
      A,
      M,
      g,
      f,
      S,
      m
    ]
  ), y = j(() => d ? r.flatMap((e) => {
    const t = U(
      I ?? [],
      e.id
    );
    return [
      {
        parent: null,
        subItem: {
          subId: e.id,
          subName: e.name,
          subAvatar: e.avatar,
          expanded: e.expanded ?? t?.expanded ?? !1,
          subItems: e.subItems,
          subSearchKeys: e.searchKeys
        }
      },
      ...(e.subItems ?? []).map((l) => ({
        parent: {
          ...e,
          expanded: e.expanded ?? t?.expanded ?? !1
        },
        subItem: l
      }))
    ];
  }).filter(
    (e) => (!e.parent || e.parent.expanded) && (!!e.parent || !!e.subItem.subItems && e.subItem.subItems.length > 0)
  ) : r.map((e) => ({
    parent: null,
    subItem: {
      subId: e.id,
      subName: e.name,
      subAvatar: e.avatar,
      subSearchKeys: e.searchKeys
    }
  })), [d, r, I]), ae = v(
    (e) => {
      if (e.index === 0 && u)
        return /* @__PURE__ */ n(
          J,
          {
            label: K ?? "",
            onCreate: () => u?.(f),
            goToFirst: p,
            goToLast: x
          }
        );
      const t = u ? e.index - 1 : e.index, l = y[t].parent, s = y[t].subItem;
      if (!l) {
        const a = {
          id: s.subId,
          name: s.subName,
          avatar: s.subAvatar,
          subItems: s.subItems,
          expanded: s.expanded,
          searchKeys: s.subSearchKeys
        }, b = U(
          I,
          a.id
        ), h = (a?.subItems ?? []).filter(
          (_) => b?.subItems?.some(
            (Ie) => Ie.subId === _.subId
          )
        ), L = (a.subItems?.length ?? 0) === h.length, fe = !L && h.length > 0;
        return /* @__PURE__ */ n(
          w,
          {
            groupView: !0,
            expanded: a.expanded ?? !1,
            onExpand: (_) => g(a, _),
            search: f,
            entity: a,
            onSelect: M,
            onRemove: A,
            selected: L,
            partialSelected: fe,
            showGroupIcon: c.find((_) => _.value === S)?.groupType === "team",
            singleSelector: m,
            goToFirst: p,
            goToLast: x,
            hideLine: t === y.length - 1,
            disabled: T,
            hiddenAvatar: N
          }
        );
      }
      let o = !!U(I, s.subId);
      if (!o) {
        const a = U(
          I,
          l.id
        );
        o = !!(l?.subItems ?? []).filter(
          (h) => a?.subItems?.some(
            (L) => L.subId === h.subId
          )
        ).find((h) => h.subId === s.subId);
      }
      return /* @__PURE__ */ n(
        w,
        {
          expanded: !1,
          onExpand: () => null,
          search: f,
          groupView: !1,
          entity: {
            id: s.subId,
            name: s.subName,
            avatar: s.subAvatar,
            searchKeys: s.subSearchKeys
          },
          onSelect: () => {
            Z(l, s);
          },
          onRemove: () => P(l, s),
          selected: !!o,
          partialSelected: !1,
          singleSelector: m,
          goToFirst: p,
          goToLast: x,
          isChild: !0,
          hiddenAvatar: N
        }
      );
    },
    [
      y,
      I,
      f,
      m,
      p,
      x,
      M,
      A,
      c,
      T,
      g,
      S,
      Z,
      P,
      N,
      u,
      K
    ]
  ), [de, ue] = j(() => {
    if (!r.length)
      return [!1, !1];
    let e = 0, t = 0;
    if (!d)
      e = r.length, t = r.reduce(
        (o, { id: a }) => o + (F.has(a) ? 1 : 0),
        0
      );
    else {
      const o = new Set(
        [...F.values()].flatMap(
          (a) => a.subItems?.map((b) => b.subId) ?? []
        )
      );
      r.forEach((a) => {
        const b = a.subItems ?? [];
        e += b.length, t += b.filter(
          (h) => o.has(h.subId)
        ).length;
      });
    }
    const l = e > 0 && t === e, s = t > 0;
    return [l, s];
  }, [r, F, d]), ce = y.length, oe = !m && (B || C), me = k && k.length > 0, be = !i && (!m && oe || me);
  return /* @__PURE__ */ O(
    "div",
    {
      className: R(
        "flex w-full flex-col rounded-l-xl border-0",
        m || i ? "rounded-r-xl" : "",
        le
      ),
      children: [
        /* @__PURE__ */ O(
          "header",
          {
            className: R(
              "flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl",
              m || i ? "rounded-t-xl border-r-0" : ""
            ),
            children: [
              /* @__PURE__ */ n("div", { className: "flex-1", children: /* @__PURE__ */ n(
                Se,
                {
                  search: f,
                  onSearch: V,
                  searchPlaceholder: te,
                  goToFirst: p,
                  goToLast: x
                }
              ) }),
              c && c.length > 1 && /* @__PURE__ */ n("div", { className: "flex-1", children: /* @__PURE__ */ n(
                xe,
                {
                  label: "Group",
                  hideLabel: !0,
                  disabled: i,
                  onChange: ee,
                  options: c,
                  value: S,
                  className: R(
                    "h-8 rounded bg-transparent py-[5px]",
                    S === "all" ? "text-f1-foreground-secondary" : ""
                  )
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ O(
          "section",
          {
            className: R(
              "flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background",
              be ? "" : "rounded-b-xl border-r-0"
            ),
            children: [
              i && /* @__PURE__ */ n("div", { className: "flex h-full w-full flex-row items-center justify-center", children: /* @__PURE__ */ n(he, {}) }),
              !i && !H && /* @__PURE__ */ O(
                "div",
                {
                  className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
                  style: {
                    height: q
                  },
                  children: [
                    /* @__PURE__ */ n("span", { className: "text-lg font-medium", children: se }),
                    /* @__PURE__ */ n("span", { className: "text-center text-f1-foreground-secondary", children: re })
                  ]
                }
              ),
              !i && (!!H || u) && /* @__PURE__ */ n("div", { className: "h-full", children: d ? /* @__PURE__ */ n(
                G,
                {
                  height: q,
                  itemCount: ce + (u ? 1 : 0),
                  itemSize: (e) => {
                    if (e === 0 && u) return z;
                    const t = u ? e - 1 : e;
                    return y[t]?.parent === null ? ye : z;
                  },
                  renderer: ae,
                  ref: E
                }
              ) : /* @__PURE__ */ n(
                G,
                {
                  height: q,
                  itemCount: r.length + (u ? 1 : 0),
                  itemSize: z,
                  renderer: ne,
                  ref: E
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ n(
          ie,
          {
            onSelectAll: $,
            onClear: Y,
            singleSelector: m,
            totalFilteredEntities: H,
            allVisibleSelected: de,
            anyVisibleSelected: ue,
            selectAllLabel: B,
            clearLabel: C,
            disabled: T,
            actions: k
          }
        )
      ]
    }
  );
}, U = (d, r) => d.find((c) => c.id === r), Te = (d, r) => d.find((c) => c.value === r)?.groupType === "team";
export {
  Oe as MainContent
};
