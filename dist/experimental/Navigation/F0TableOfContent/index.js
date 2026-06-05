import { jsx as s, jsxs as ce, Fragment as Te } from "react/jsx-runtime";
import { useRef as v, useMemo as me, useState as K, useEffect as he, useCallback as E } from "react";
import { OneEllipsis as Se } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { dropTargetForElements as Ce } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
import { createAtlaskitDriver as Ne } from "../../../lib/dnd/atlaskitDriver.js";
import { DndProvider as we } from "../../../lib/dnd/context.js";
import { useDndEvents as ye } from "../../../lib/dnd/hooks.js";
import { withDataTestId as Oe } from "../../../lib/data-testid/index.js";
import { experimentalComponent as ke } from "../../../lib/experimental.js";
import { cn as ie } from "../../../lib/utils.js";
import { ScrollArea as Fe } from "../../../ui/scrollarea.js";
import { Item as de } from "./Item/index.js";
import { ItemSectionHeader as te } from "./ItemSectionHeader/index.js";
import { filterTree as ve, findExpandedPath as Pe, updateItemInTree as Ee, convertToIds as le, findItemInTree as A, wouldCreateCycle as De, removeItemFromTree as Ae, calculateAdjustedIndex as Le, insertItemInTree as Re } from "./utils.js";
import { useI18n as je } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0SearchInput as Be } from "../../../components/F0SearchInput/F0SearchInput.js";
function ge(n, o, N, w, L, m, y, R, p, k, x, ue, D, oe, j, I, Q, B, i) {
  const g = n.children ? te : de, W = y?.has(n.id) ?? !0, U = ue === n.id, V = !!(x && x !== n.id && k && n.children !== void 0 && // Item must have children property (is a section)
  !De(k, x, n.id)), se = !!(x && x !== n.id && U && D === "before"), X = !!(x && x !== n.id && U && D === "after"), F = j === null ? k?.[0]?.id === n.id : !k || !j ? !1 : A(k, j)?.item.children?.[0]?.id === n.id;
  return /* @__PURE__ */ ce(Te, { children: [
    se && /* @__PURE__ */ s(
      "div",
      {
        className: ie(
          "pointer-events-none h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40",
          F ? "mt-0" : "mt-0.5",
          "mb-0.5"
        )
      }
    ),
    g === de ? /* @__PURE__ */ s(
      de,
      {
        item: n,
        isActive: w === n.id,
        sortable: o,
        collapsible: !1,
        isExpanded: !1,
        onToggleExpanded: R,
        onDragOver: I,
        onDragLeave: Q,
        onDrop: B,
        canDropInside: !1,
        currentParentId: j,
        draggedItemId: x,
        justDropped: i === n.id
      },
      n.id
    ) : /* @__PURE__ */ s(
      g,
      {
        item: n,
        isActive: w === n.id,
        collapsible: L && n.children && n.children.length > 0,
        isExpanded: W,
        onToggleExpanded: R,
        sortable: o,
        hideChildrenCounter: m,
        canDropInside: V,
        onDragOver: g === te ? I : void 0,
        onDragLeave: g === te ? Q : void 0,
        onDrop: g === te ? B : void 0,
        currentParentId: j,
        draggedItemId: x,
        children: n.children && (g === te || W) && /* @__PURE__ */ ce(
          "div",
          {
            className: ie(
              "flex flex-col",
              // Show placeholder background when dragging inside this section
              U && D === "inside" && V && "rounded-md bg-f1-background-hover/20 p-1"
            ),
            children: [
              n.children.map((Y) => ge(
                Y,
                o,
                N + 1,
                w,
                L,
                m,
                y,
                R,
                p,
                k,
                x,
                ue,
                D,
                o ? oe : void 0,
                n.id,
                I,
                Q,
                B,
                i
              )),
              U && D === "inside" && V && (!W || n.children.length === 0) && /* @__PURE__ */ s("div", { className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary", children: "Drop here" })
            ]
          }
        )
      },
      n.id
    ),
    X && /* @__PURE__ */ s("div", { className: "pointer-events-none my-0.5 h-10 rounded border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40" })
  ] });
}
function xe({
  targetItemId: n,
  position: o,
  onDragOver: N,
  onDragLeave: w,
  onDrop: L,
  visible: m
}) {
  const y = v(null);
  return he(() => {
    if (y.current)
      return Ce({
        element: y.current,
        canDrop: ({ source: R }) => {
          const p = R.data;
          return p.kind === "toc-item" && p.id !== n;
        },
        onDragEnter: () => {
          N(n, o);
        },
        onDrag: () => {
          N(n, o);
        },
        onDragLeave: () => {
          w();
        },
        onDrop: () => {
          L(n, o);
        }
      });
  }, [n, o, N, w, L]), /* @__PURE__ */ s(
    "div",
    {
      ref: y,
      className: ie(
        "w-full shrink-0 transition-[height]",
        m ? "h-5" : "h-1"
      )
    }
  );
}
function Me({
  title: n,
  items: o,
  className: N,
  activeItem: w,
  collapsible: L = !1,
  sortable: m = !1,
  showSearchBox: y = !1,
  searchPlaceholder: R,
  onReorder: p,
  hideChildrenCounter: k = !1,
  scrollable: x = !0
}) {
  const ue = je(), [D, oe] = K(""), j = (e) => {
    oe(e);
  }, I = me(() => ve(o, D), [o, D]), [Q, B] = K(
    Pe(o, w)
  ), [i, g] = K(o);
  he(() => {
    g(o);
  }, [o]);
  const W = v(null), U = E(
    (e) => {
      B((r) => {
        const t = new Set(r);
        return t.has(e) ? t.delete(e) : t.add(e), t;
      });
    },
    [B]
  ), V = E(
    (e, r) => {
      const t = Ee(i, e, r);
      g(t), p && p(le(t));
    },
    [i, p]
  ), se = E(
    (e) => (r) => {
      const t = A(i, e);
      if (t) {
        const u = { ...t.item, children: r };
        V(e, u);
      } else
        e == null && (g(r), p && p(le(r)));
    },
    [i, V, p, le]
  ), X = E(
    (e, r, t) => {
      if (De(i, e, r))
        return;
      const u = A(i, e);
      if (!u) return;
      const d = u.item;
      let c = Ae(i, e);
      const T = Le(
        i,
        e,
        r,
        t
      );
      c = Re(
        c,
        d,
        r,
        T
      ), g(c), r !== null && B((C) => {
        const a = new Set(C);
        return a.add(r), a;
      }), p && p(le(c));
    },
    [i, p, le]
  ), F = me(() => ve(i, D), [i, D]), [Y, ee] = K(null), [H, J] = K(null), [Z, _] = K(null), [be, pe] = K(
    null
  ), P = v(null), S = v(!1), M = v(null), $ = v(null), l = v(null), O = v(null), q = v(null), z = v(0), ne = v(0), b = v(!1), h = v(null), ae = E(
    (e, r) => {
      l.current && (clearTimeout(l.current), l.current = null);
      const u = (m ? F : I).findIndex((a) => a.id === e), d = q.current !== null && u < q.current;
      q.current = u;
      const c = `${e}-${r}`, T = H && Z ? `${H}-${Z}` : null;
      if (c === T)
        return;
      O.current = { itemId: e, position: r };
      const C = d ? 50 : 30;
      l.current = setTimeout(() => {
        const a = O.current;
        if (a) {
          J(a.itemId), _(a.position), M.current = a.itemId, $.current = a.position;
          const f = Date.now();
          z.current = f, ne.current = f;
          const Ie = (m ? F : I)[0];
          a.itemId === Ie?.id && a.position === "before" && (b.current = !0);
        }
        l.current = null;
      }, C);
    },
    [
      H,
      Z,
      m,
      F,
      I
    ]
  );
  he(() => () => {
    l.current && clearTimeout(l.current);
  }, []);
  const fe = E(() => {
    if (S.current)
      return;
    l.current && clearTimeout(l.current);
    const e = b.current ? 1e3 : 800;
    l.current = setTimeout(() => {
      if (S.current) {
        l.current = null;
        return;
      }
      const r = Date.now(), t = r - z.current, u = r - ne.current, d = b.current ? 800 : 500;
      if (u < d) {
        l.current = null;
        return;
      }
      const c = b.current ? 800 : 500;
      if (t < c) {
        l.current = null;
        return;
      }
      if (b.current) {
        const C = (m ? F : I)[0];
        if (H === C?.id && Z === "before") {
          if (u < 2e3) {
            l.current = null;
            return;
          }
          b.current = !1;
        } else
          b.current = !1;
      }
      q.current = null, z.current = 0, J(null), _(null), M.current = null, $.current = null, l.current = null;
    }, e);
  }, [
    H,
    Z,
    m,
    F,
    I
  ]), re = E(
    (e, r) => {
      S.current = !0;
      const t = P.current;
      if (b.current = !1, J(null), _(null), M.current = null, $.current = null, l.current && (clearTimeout(l.current), l.current = null), !t || t === e) {
        P.current = null, ee(null), J(null), _(null);
        return;
      }
      const u = A(i, e), d = A(i, t);
      if (u && d) {
        let c = null, T = 0;
        if (r === "inside")
          c = e, T = u.item.children?.length ?? 0;
        else if (r === "before")
          if (u.parentPath.length > 0 ? c = u.parentPath[u.parentPath.length - 1] : c = null, c === null)
            T = i.findIndex((f) => f.id === e);
          else {
            const f = A(i, c);
            f && (T = f.item.children?.findIndex((G) => G.id === e) ?? 0);
          }
        else if (r === "after")
          if (u.parentPath.length > 0 ? c = u.parentPath[u.parentPath.length - 1] : c = null, c === null)
            T = i.findIndex((f) => f.id === e) + 1;
          else {
            const f = A(i, c);
            f && (T = (f.item.children?.findIndex(
              (G) => G.id === e
            ) ?? 0) + 1);
          }
        const C = d.parentPath.length > 0 ? d.parentPath[d.parentPath.length - 1] : null;
        let a = -1;
        if (C === null)
          a = i.findIndex(
            (f) => f.id === t
          );
        else {
          const f = A(i, C);
          f && (a = f.item.children?.findIndex(
            (G) => G.id === t
          ) ?? -1);
        }
        (c !== C || c === C && a !== T) && (pe(t), X(t, c, T), setTimeout(() => {
          pe(null);
        }, 300));
      }
      b.current = !1, P.current = null, S.current = !0, q.current = null, z.current = 0, ne.current = 0, h.current && (clearTimeout(h.current), h.current = null), ee(null), setTimeout(() => {
        S.current = !1;
      }, 600);
    },
    [i, X]
  );
  return ye(
    E(
      (e) => {
        if (e.phase === "start" && e.source.kind === "toc-item")
          l.current && (clearTimeout(l.current), l.current = null), h.current && (clearTimeout(h.current), h.current = null), P.current = e.source.id, S.current = !1, O.current = null, ee(e.source.id);
        else if (e.phase === "cancel")
          b.current = !1, S.current = !1, O.current = null, q.current = null, z.current = 0, ne.current = 0, l.current && (clearTimeout(l.current), l.current = null), h.current && (clearTimeout(h.current), h.current = null), J(null), _(null), M.current = null, $.current = null, ee(null), P.current = null;
        else if (e.phase === "drop") {
          l.current && (clearTimeout(l.current), l.current = null), b.current = !1;
          const r = M.current || O.current?.itemId, t = $.current || O.current?.position;
          !S.current && r && t && P.current && P.current !== r && requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (!S.current) {
                const d = M.current || O.current?.itemId, c = $.current || O.current?.position;
                d && c && re(d, c);
              }
            });
          }), h.current && (clearTimeout(h.current), h.current = null);
          const u = setTimeout(() => {
            S.current || (O.current = null, q.current = null, z.current = 0, ne.current = 0, J(null), _(null), M.current = null, $.current = null, ee(null), P.current = null), h.current === u && (h.current = null);
          }, 500);
          h.current = u;
        }
      },
      [re]
    )
  ), /* @__PURE__ */ ce(
    "nav",
    {
      className: ie("flex w-[248px] flex-col overflow-hidden", N),
      "aria-label": n,
      ref: W,
      children: [
        (n || y) && /* @__PURE__ */ ce("div", { className: "shrink-0 bg-f1-background pb-2 pl-5 pr-4 pt-5", children: [
          y && /* @__PURE__ */ s("div", { className: "mb-4", children: /* @__PURE__ */ s(
            Be,
            {
              placeholder: R ?? ue.toc.search,
              onChange: j,
              value: D,
              clearable: !0
            }
          ) }),
          n && /* @__PURE__ */ s(
            Se,
            {
              lines: 1,
              tag: "h2",
              className: "text-[14px] font-medium text-f1-foreground-secondary",
              children: n
            }
          )
        ] }),
        (() => {
          const e = m ? F : I, r = e[0], t = e[e.length - 1], u = !!Y, d = /* @__PURE__ */ ce(Te, { children: [
            m && r && /* @__PURE__ */ s(
              xe,
              {
                targetItemId: r.id,
                position: "before",
                onDragOver: ae,
                onDragLeave: fe,
                onDrop: re,
                visible: u
              }
            ),
            e.map(
              (c) => ge(
                c,
                m,
                0,
                w,
                L,
                k,
                Q,
                U,
                X,
                i,
                Y,
                H,
                Z,
                m ? se : void 0,
                null,
                ae,
                fe,
                re,
                be
              )
            ),
            m && t && /* @__PURE__ */ s(
              xe,
              {
                targetItemId: t.id,
                position: "after",
                onDragOver: ae,
                onDragLeave: fe,
                onDrop: re,
                visible: u
              }
            )
          ] });
          return x ? /* @__PURE__ */ s(Fe, { className: "min-h-0 flex-1", children: /* @__PURE__ */ s("div", { className: "px-3 pb-2", children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-0.5", children: d }) }) }) : /* @__PURE__ */ s("div", { className: "min-h-0 flex-1 overflow-hidden px-2 pb-2", children: /* @__PURE__ */ s("div", { className: "flex flex-col gap-0.5", children: d }) });
        })()
      ]
    }
  );
}
function $e(n) {
  const o = v(/* @__PURE__ */ Symbol("f0-table-of-contents")), N = me(() => Ne(o.current), []);
  return /* @__PURE__ */ s(we, { driver: N, children: /* @__PURE__ */ s(Me, { ...n }) });
}
const rn = Oe(
  ke("F0TableOfContent", $e)
);
export {
  rn as F0TableOfContent,
  de as Item,
  te as ItemSectionHeader
};
