import { jsx as U, jsxs as ie } from "react/jsx-runtime";
import { monitorForElements as ce } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js";
import { useRef as D, useState as O, useEffect as Y, useLayoutEffect as ue, isValidElement as de, cloneElement as fe } from "react";
import { useDroppableList as me, useDndEvents as pe } from "../../../lib/dnd/hooks.js";
import { cn as ge } from "../../../lib/utils.js";
import { findTypeOfDropForLane as he, optimisticSameLaneOverCard as be, optimisticDifferentLaneInsertOverCard as Ie, optimisticSameLaneOverEmpty as ve, optimisticDifferentLaneInsertOverEmpty as we } from "./kanbanLane.handlers.js";
import { Lane as Le } from "../../Lane/Lane.js";
function Ae({
  id: a,
  getLaneResourceIndexById: k,
  onMove: M,
  ...m
}) {
  const C = D(null), z = D(null), _ = D(null), [ne, j] = O(!1), [G, re] = O(null), oe = !!(a && k), ae = D(null), H = D(null), d = D(null), w = D(0), L = D(null), [y, V] = O(!1), [g, x] = O(null), [h, T] = O(null), [X, R] = O(!1), [q, K] = O(-1);
  return me(
    oe ? {
      ref: C,
      id: a,
      accepts: ["list-card"]
    } : void 0
  ), Y(() => {
    const o = () => {
      const n = performance.now(), e = L.current ?? n, s = (n - e) / 1e3;
      L.current = n;
      const t = H.current;
      if (!y || w.current === 0) {
        d.current != null && (window.cancelAnimationFrame(d.current), d.current = null), L.current = null;
        return;
      }
      t && (t.scrollTop += w.current * s), d.current = window.requestAnimationFrame(o);
    };
    return d.current == null && y && w.current !== 0 && (L.current = null, d.current = window.requestAnimationFrame(o)), () => {
      d.current != null && (window.cancelAnimationFrame(d.current), d.current = null), L.current = null, w.current = 0;
    };
  }, [y]), Y(() => {
    if (!a) return;
    const o = () => {
      d.current == null && w.current !== 0 && (L.current = null, d.current = window.requestAnimationFrame(() => {
        const e = performance.now();
        L.current = e, d.current = window.requestAnimationFrame(function s() {
          const t = L.current ?? performance.now(), l = performance.now(), S = (l - t) / 1e3;
          L.current = l;
          const f = H.current;
          if (!y || w.current === 0) {
            d.current != null && (window.cancelAnimationFrame(d.current), d.current = null);
            return;
          }
          f && (f.scrollTop += w.current * S), d.current = window.requestAnimationFrame(s);
        });
      }));
    }, n = (e) => he(a, e);
    return ce({
      onDropTargetChange: ({ location: e, source: s }) => {
        const t = e.current.dropTargets.some((r) => {
          const p = r.data;
          return p.type === "list-droppable" && p.id === a;
        });
        j(t);
        const l = String(s.data.id), f = String(
          s.data.data?.laneId ?? ""
        ) || String(
          e.initial.dropTargets.find(
            (r) => r.data.type === "list-droppable"
          )?.data?.id ?? ""
        ), b = String(f) === String(a), I = m.items.findIndex((r, p) => String(m.getKey(r, p)) === l);
        if (t && b ? K(I) : (!t || !b) && K(-1), t && y && m.items.length === 0 ? (R(!0), x(null), T(null)) : t && y && m.items.length > 0 && R(!1), t && y) {
          const r = H.current || C.current;
          if (r) {
            const p = r.getBoundingClientRect(), i = e.current.input?.clientY, c = e.current.input?.clientX;
            if (typeof i == "number" && typeof c == "number") {
              const u = p.top + p.height / 2, v = i - u, F = 24, se = 300, $ = p.height / 2;
              let Z = 0;
              if (Math.abs(v) > F) {
                const B = Math.min(
                  Math.abs(v) - F,
                  $
                ) / $;
                Z = Math.sign(v) * se * B;
              }
              if (w.current = Z, o(), e.current.dropTargets.some((N) => N.data.type === "list-card-target"))
                (g !== null || h !== null) && (x(null), T(null));
              else {
                const N = C.current;
                if (N) {
                  const B = Array.from(
                    N.querySelectorAll(
                      `[data-kanban-card="true"][data-lane-id="${a}"]`
                    )
                  );
                  if (B.length > 0) {
                    let E = -1, J = Number.POSITIVE_INFINITY, A = "top";
                    for (const Q of B) {
                      const W = Q.getAttribute("data-index"), le = W ? Number(W) : -1, P = Q.getBoundingClientRect(), ee = P.top + P.height / 2, te = Math.abs(i - ee);
                      te < J && (J = te, E = le, A = i < ee ? "top" : "bottom");
                    }
                    b && I >= 0 && // 1. Above itself
                    (E === I && A === "top" || // 2. Below itself
                    E === I && A === "bottom" || // 3. Below the card above (stays in same position)
                    E === I - 1 && A === "bottom" || // 4. Above the card below (stays in same position)
                    E === I + 1 && A === "top") ? (x(null), T(null)) : (x(E >= 0 ? E : null), T(E >= 0 ? A : null));
                  }
                }
              }
            }
          }
        } else
          w.current = 0, t || (x(null), T(null), R(!1), K(-1));
      },
      onDrop: async ({ location: e, source: s }) => {
        j(!1), R(!1);
        const t = String(s.data.id);
        s.data.data;
        const l = m.items.findIndex((c, u) => String(m.getKey(c, u)) === t), f = String(
          s.data.data?.laneId ?? ""
        ) || String(
          e.initial.dropTargets.find(
            (c) => c.data.type === "list-droppable"
          )?.data?.id ?? ""
        ), b = String(f) !== String(a);
        if (!b && l >= 0) {
          const c = e.current.dropTargets.find((u) => u.data.type === "list-card-target");
          if (c) {
            const u = c.data.index, v = c.data.closestEdge;
            if (u !== void 0 && v) {
              let F = !1;
              if ((u === l || u === l - 1 && v === "bottom" || u === l + 1 && v === "top") && (F = !0), F)
                return;
            }
          }
        }
        if (!b && g !== null && h !== null && (g === l && h === "top" || g === l && h === "bottom" || g === l - 1 && h === "bottom" || g === l + 1 && h === "top")) {
          x(null), T(null);
          return;
        }
        if (!e.current.dropTargets.some((c) => {
          const u = c.data;
          return u.type === "list-droppable" && u.id === a;
        }))
          return;
        let r = null;
        const { type: p, cardTarget: i } = n(
          e.current.dropTargets
        );
        if (b ? i && i.data ? r = Ie({
          cardTarget: i,
          fromLaneId: f,
          toLaneId: a,
          sourceId: t
        }) : g !== null && h ? r = {
          fromLaneId: f,
          toLaneId: a,
          sourceId: t,
          indexOfTarget: g,
          position: h === "bottom" ? "below" : "above"
        } : r = we({
          fromLaneId: f,
          toLaneId: a,
          sourceId: t
        }) : p === "sameLaneOverCard" && i && i.data ? r = be({
          cardTarget: i,
          fromLaneId: f,
          toLaneId: a,
          sourceId: t
        }) : g !== null && h ? r = {
          fromLaneId: f,
          toLaneId: a,
          sourceId: t,
          indexOfTarget: g,
          position: h === "bottom" ? "below" : "above"
        } : r = ve({
          fromLaneId: f,
          toLaneId: a,
          sourceId: t
        }), !!r) {
          if (!b && r.indexOfTarget !== void 0) {
            const c = r.indexOfTarget, u = r.position;
            if (c === l && u === "above" || c === l && u === "below" || c === l - 1 && u === "below" || c === l + 1 && u === "above")
              return;
          }
          await M?.(r), x(null), T(null);
        }
      }
    });
  }, [
    a,
    k,
    M,
    y,
    m.items,
    m.getKey,
    g,
    h
  ]), Y(() => {
    const o = () => {
      const s = C.current;
      return s ? (H.current = s.querySelector(
        "[data-scroll-container]"
      ), H.current) : null;
    };
    o();
    const n = C.current;
    if (!n) return;
    const e = new MutationObserver(() => {
      o();
    });
    return e.observe(n, { subtree: !0, childList: !0 }), () => e.disconnect();
  }, [a]), pe(({ phase: o }) => {
    o === "start" && V(!0), (o === "drop" || o === "cancel") && (V(!1), R(!1), x(null), T(null), K(-1));
  }), Y(() => {
    const o = (n) => {
      if (!a) return;
      const e = n.detail;
      e && e.toLaneId === a && M?.(e).catch(() => {
      });
    };
    return window.addEventListener("kanban-test-move", o), () => window.removeEventListener("kanban-test-move", o);
  }, [a, M]), ue(() => {
    const o = _.current, n = z.current;
    if (!o || !n) return;
    let e = null, s = null;
    const t = () => {
      const b = n.parentElement?.parentElement;
      if (!b) return;
      const I = b.offsetHeight, r = n.style.height;
      n.style.height = "auto", o.offsetHeight;
      const p = o.scrollHeight;
      n.style.height = r;
      let i;
      I < 100 ? i = Math.max(p, 400) : i = Math.min(p, I), (s === null || Math.abs(i - s) > 1) && (s = i, re(i));
    };
    t();
    const l = () => {
      e !== null && cancelAnimationFrame(e), e = requestAnimationFrame(() => {
        t(), e = null;
      });
    }, S = new ResizeObserver(l);
    S.observe(o);
    const f = n.parentElement?.parentElement;
    return f && S.observe(f), () => {
      e !== null && cancelAnimationFrame(e), S.disconnect();
    };
  }, [m.items.length, m.loading, X]), /* @__PURE__ */ U(
    "div",
    {
      ref: z,
      className: "relative rounded",
      style: {
        height: G ? `${G}px` : void 0
      },
      children: /* @__PURE__ */ ie(
        "div",
        {
          ref: C,
          className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
          style: {
            backgroundColor: ne ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)"
          },
          children: [
            /* @__PURE__ */ U(
              "div",
              {
                ref: ae,
                className: ge(
                  "pointer-events-none absolute inset-0 z-[1]",
                  "bg-transparent"
                ),
                "aria-hidden": !0
              }
            ),
            /* @__PURE__ */ U("div", { ref: _, className: "flex h-full flex-col", children: /* @__PURE__ */ U(
              Le,
              {
                ...m,
                dropPlaceholderIndex: X && m.items.length === 0 ? 0 : void 0,
                renderCard: (o, n) => {
                  const e = m.renderCard(o, n);
                  if (de(e)) {
                    const s = n === g ? h : null, t = [];
                    return q >= 0 && (n === q ? t.push("top", "bottom") : n === q - 1 ? t.push("bottom") : n === q + 1 && t.push("top")), fe(
                      e,
                      {
                        forcedEdge: s,
                        disabledEdges: t
                      }
                    );
                  }
                  return e;
                }
              }
            ) })
          ]
        }
      )
    }
  );
}
export {
  Ae as KanbanLane
};
