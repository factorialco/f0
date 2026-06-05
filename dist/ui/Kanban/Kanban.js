import { jsxs as _, jsx as x } from "react/jsx-runtime";
import { dropTargetForElements as B } from "../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
import { useState as O, useRef as g, useEffect as G } from "react";
import { useDndEvents as tt } from "../../lib/dnd/hooks.js";
import { cn as T } from "../../lib/utils.js";
import { KanbanLane as et } from "./components/KanbanLane.js";
import { ScrollArea as nt } from "../scrollarea.js";
function lt(H) {
  const { lanes: y, renderCard: J, getKey: l, className: Q, dnd: U, loading: V, onCreate: R } = H, [M, S] = O(
    () => y
  ), w = g(""), I = g(null);
  G(() => {
    const t = y.map(
      (o) => `${o.id}:[${o.items.map((n, r) => l(n, r, o.id)).join(",")}]`
    ).join("|");
    if (I.current !== null)
      if (t === I.current)
        I.current = null, w.current = t, S(y);
      else
        return;
    else t !== w.current && (w.current = t, S(y));
  }, [y, l, M]);
  const [j, K] = O(!1), A = g(null), N = g(null), C = g(null), f = g(null), k = g(0), L = g(null);
  tt(({ phase: t }) => {
    t === "start" && K(!0), (t === "drop" || t === "cancel") && K(!1);
  }), G(() => {
    const t = () => {
      const i = performance.now(), v = L.current ?? i, u = (i - v) / 1e3;
      L.current = i;
      const a = C.current;
      if (!j || !a || k.current === 0) {
        f.current != null && (window.cancelAnimationFrame(f.current), f.current = null), L.current = null;
        return;
      }
      a.scrollLeft += k.current * u, f.current = window.requestAnimationFrame(t);
    }, o = (i) => {
      k.current = i, f.current == null && (L.current = null, f.current = window.requestAnimationFrame(t));
    }, n = () => {
      k.current = 0, f.current != null && (window.cancelAnimationFrame(f.current), f.current = null), L.current = null;
    }, r = [];
    return A.current && r.push(
      B({
        element: A.current,
        getData: () => ({ type: "board-scroll-edge", edge: "left" }),
        onDragEnter: () => o(-400),
        onDrag: () => o(-400),
        onDragLeave: () => n(),
        onDrop: () => n()
      })
    ), N.current && r.push(
      B({
        element: N.current,
        getData: () => ({ type: "board-scroll-edge", edge: "right" }),
        onDragEnter: () => o(400),
        onDrag: () => o(400),
        onDragLeave: () => n(),
        onDrop: () => n()
      })
    ), () => {
      r.forEach((i) => i()), n();
    };
  }, [j]);
  const W = (t, o) => {
    const n = M.find((r) => r.id === t);
    return n ? n.items.findIndex((r, i) => String(l(r, i, t)) === String(o)) : -1;
  }, X = async (t) => {
    const { fromLaneId: o, toLaneId: n, sourceId: r, indexOfTarget: i, position: v } = t, u = M;
    let a = u.findIndex((e) => e.id === o);
    const $ = u.findIndex((e) => e.id === n);
    if ($ === -1) return Promise.reject(new Error("Lane not found"));
    let p = -1;
    if (a !== -1 && (p = u[a].items.findIndex((e, c) => String(l(e, c, o)) === String(r))), p === -1)
      for (let e = 0; e < u.length; e++) {
        const c = u[e].id, s = u[e].items.findIndex((d, b) => String(l(d, b, c)) === String(r));
        if (s !== -1) {
          a = e, p = s;
          break;
        }
      }
    if (a === -1 || p === -1)
      return Promise.resolve(void 0);
    const F = u[a].items[p];
    let h = 0;
    i == null ? h = 0 : h = i + (v === "below" ? 1 : 0);
    const P = o === n, q = u.map((e, c) => {
      if (c === a && P) {
        const s = [...e.items];
        s.splice(p, 1);
        const d = p < h ? h - 1 : h;
        return s.splice(d, 0, F), { ...e, items: s };
      }
      if (c === a) {
        const s = [...e.items];
        s.splice(p, 1);
        const d = typeof e.total == "number" && !P ? Math.max(0, e.total - 1) : e.total;
        return { ...e, items: s, total: d };
      }
      if (c === $) {
        const s = [...e.items], d = Math.max(0, Math.min(h, s.length));
        s.splice(d, 0, F);
        const b = typeof e.total == "number" && !P ? e.total + 1 : e.total;
        return { ...e, items: s, total: b };
      }
      return e;
    });
    S(q);
    const z = q.map(
      (e) => `${e.id}:[${e.items.map((c, s) => l(c, s, e.id)).join(",")}]`
    ).join("|");
    I.current = z, w.current = z;
    try {
      const e = i == null ? null : u[$].items[i], c = await U?.onMove?.(
        o,
        n,
        F,
        e ? {
          record: e,
          position: v ?? "above"
        } : null
      );
      return c && S((s) => {
        const d = s.map((m) => {
          if (m.id !== n) return m;
          const D = [...m.items], E = D.findIndex((Y, Z) => String(l(Y, Z, n)) === String(r));
          return E !== -1 && D.splice(E, 1, c), { ...m, items: D };
        }), b = d.map(
          (m) => `${m.id}:[${m.items.map((D, E) => l(D, E, m.id)).join(",")}]`
        ).join("|");
        return w.current = b, d;
      }), c;
    } catch (e) {
      throw S(u), I.current = null, e;
    }
  };
  return /* @__PURE__ */ _("div", { className: T("relative h-full w-full px-6", Q), children: [
    /* @__PURE__ */ x(
      nt,
      {
        className: "relative h-full w-full [&>div>div]:h-full",
        viewportRef: C,
        children: /* @__PURE__ */ x("div", { className: "relative mb-2 flex h-full items-start gap-2", children: M.map(
          (t, o) => {
            const n = t.total ?? t.items.length;
            return /* @__PURE__ */ x(
              "div",
              {
                className: "relative shrink-0",
                "data-testid": `lane-${t.id ?? String(o)}`,
                children: /* @__PURE__ */ x(
                  et,
                  {
                    id: t.id,
                    getLaneResourceIndexById: t.id ? (r) => W(t.id, r) : void 0,
                    onMove: X,
                    title: t.title,
                    items: t.items,
                    getKey: (r, i) => l(r, i, t.id),
                    renderCard: (r, i) => J(r, i, n, t.id),
                    emptyState: t.emptyState,
                    loading: V || t.loading,
                    variant: t.variant,
                    total: n,
                    hasMore: t.hasMore,
                    loadingMore: t.loadingMore,
                    fetchMore: t.fetchMore,
                    onPrimaryAction: R && t.id ? () => R(t.id) : void 0,
                    onFooterAction: R && t.id ? () => R(t.id) : void 0
                  }
                )
              },
              t.id ?? String(o)
            );
          }
        ) })
      }
    ),
    /* @__PURE__ */ x(
      "div",
      {
        ref: A,
        className: T(
          "pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none",
          j ? "pointer-events-auto" : "opacity-0"
        ),
        "aria-hidden": !0
      }
    ),
    /* @__PURE__ */ x(
      "div",
      {
        ref: N,
        className: T(
          "pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none",
          j ? "pointer-events-auto" : "opacity-0"
        ),
        "aria-hidden": !0
      }
    )
  ] });
}
export {
  lt as Kanban
};
