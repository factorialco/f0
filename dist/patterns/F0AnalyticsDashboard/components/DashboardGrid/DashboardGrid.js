import { jsx as c, jsxs as A, Fragment as se } from "react/jsx-runtime";
import { useRef as _, useState as T, useEffect as O, useMemo as ie, useCallback as b } from "react";
import { F0Icon as ce } from "../../../../components/F0Icon/index.js";
import ae from "../../../../icons/app/Handle.js";
import { cn as G } from "../../../../lib/utils.js";
import { ChartItem as le } from "../ChartItem/ChartItem.js";
import { CollectionItem as de } from "../CollectionItem/CollectionItem.js";
import { DashboardItem as ue } from "../DashboardItem/DashboardItem.js";
import { MetricItem as fe } from "../MetricItem/MetricItem.js";
const $ = 12, W = 4, he = 640, ge = {
  chart: 336,
  metric: 144,
  collection: 480
}, K = 336, pe = {
  chart: 240,
  metric: 120,
  collection: 300
}, J = 120;
function Se({
  items: n,
  filters: a,
  editMode: s,
  onLayoutChange: i,
  resetKey: o,
  onTransformChart: h,
  onFullscreenChange: f
}) {
  const m = _(null), [I, M] = T(!1), [y, j] = T(null);
  O(() => {
    f?.(!!y);
  }, [y, f]);
  const D = ie(() => {
    const e = /* @__PURE__ */ new Map();
    for (const t of n) e.set(t.id, t);
    return e;
  }, [n]), [x, H] = T(() => L(n)), B = _(n.map((e) => e.id).join(","));
  O(() => {
    const e = n.map((t) => t.id).join(",");
    e !== B.current && (B.current = e, H(L(n)));
  }, [n]);
  const X = _(o);
  O(() => {
    o !== void 0 && o !== X.current && (X.current = o, H(L(n)));
  }, [o, n]), O(() => {
    const e = m.current;
    if (!e) return;
    const t = new ResizeObserver((l) => {
      for (const r of l)
        M(r.contentRect.width < he);
    });
    return t.observe(e), () => t.disconnect();
  }, []), O(() => {
    y && !D.has(y) && j(null);
  }, [y, D]);
  const E = b(
    (e) => {
      if (!i) return;
      const t = [];
      let l = 0;
      for (const r of e) {
        const u = Math.floor(12 / Math.max(1, r.ids.length)), g = Math.round(r.height / 48), w = r.height;
        let v = 0;
        for (const R of r.ids)
          t.push({ id: R, colSpan: u, rowSpan: g, itemHeight: w, x: v, y: l }), v += u;
        l += g;
      }
      i(t);
    },
    [i]
  ), z = b(
    (e) => {
      H((t) => {
        const l = t.map((r) => ({
          ...r,
          ids: r.ids.filter((u) => u !== e)
        })).filter((r) => r.ids.length > 0);
        return E(l), l;
      });
    },
    [E]
  ), [p, Y] = T(null), [d, S] = T(null), ee = b((e) => {
    Y(e);
  }, []), te = b(() => {
    p && d && H((e) => {
      let t = e.map((u) => ({
        ...u,
        ids: u.ids.filter((g) => g !== p)
      }));
      const l = D.get(p), r = l ? U(l) : K;
      if (d.type === "new-row") {
        const u = d.afterRowIdx + 1;
        t.splice(u, 0, {
          ids: [p],
          height: r
        });
      } else if (d.rowIdx >= t.length)
        t.push({ ids: [p], height: r });
      else {
        const u = Math.min(
          d.position,
          t[d.rowIdx].ids.length
        );
        t[d.rowIdx].ids.splice(u, 0, p);
        const g = C(t[d.rowIdx], D);
        t[d.rowIdx].height < g && (t[d.rowIdx] = {
          ...t[d.rowIdx],
          height: g
        });
      }
      return t = t.filter((u) => u.ids.length > 0), E(t), t;
    }), Y(null), S(null);
  }, [p, d, E, D]), ne = b(
    (e, t) => {
      if (e.preventDefault(), e.dataTransfer.dropEffect = "move", t >= x.length) {
        S({ type: "new-row", afterRowIdx: x.length - 1 });
        return;
      }
      const l = x[t], r = p ? l.ids.includes(p) : !1;
      if (l.ids.length >= W && !r) return;
      if (r && l.ids.length === 1) {
        S(null);
        return;
      }
      const g = e.currentTarget.querySelectorAll("[data-card-id]");
      let w = l.ids.length;
      for (let v = 0; v < g.length; v++) {
        const R = g[v].getBoundingClientRect();
        if (e.clientX < R.left + R.width / 2) {
          w = v;
          break;
        }
      }
      S({ type: "into-row", rowIdx: t, position: w });
    },
    [x, p]
  ), q = b((e, t) => {
    e.preventDefault(), e.dataTransfer.dropEffect = "move", S({ type: "new-row", afterRowIdx: t });
  }, []), re = b(
    (e, t) => {
      const l = x[e].height, r = C(x[e], D), u = (w) => {
        const v = Math.max(r, l + w.clientY - t);
        H(
          (R) => R.map(
            (k, oe) => oe === e ? { ...k, height: v } : k
          )
        );
      }, g = () => {
        document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", g), H((w) => (E(w), w));
      };
      document.addEventListener("mousemove", u), document.addEventListener("mouseup", g);
    },
    [x, E]
  ), F = I ? x.flatMap(
    (e) => e.ids.map((t) => ({
      ids: [t],
      height: e.height
    }))
  ) : x, N = !!s && !I, Z = (e) => p && d?.type === "new-row" && d.afterRowIdx === e;
  if (n.length === 1) {
    const e = n[0];
    return /* @__PURE__ */ c("div", { ref: m, className: "flex h-full min-h-0 flex-col", children: /* @__PURE__ */ c(
      P,
      {
        item: e,
        filters: a,
        editMode: s,
        onDelete: z,
        onTransformChart: h,
        isFullscreen: !0
      }
    ) });
  }
  if (y) {
    const e = D.get(y);
    return e ? /* @__PURE__ */ c("div", { ref: m, className: "flex h-full min-h-0 flex-col", children: /* @__PURE__ */ c(
      P,
      {
        item: e,
        filters: a,
        editMode: s,
        onDelete: z,
        onTransformChart: h,
        isFullscreen: !0,
        onFullscreenChange: (t) => j(t ? y : null)
      }
    ) }) : null;
  }
  return /* @__PURE__ */ A("div", { ref: m, className: "flex flex-col", style: { gap: $ }, children: [
    F.map((e, t) => {
      const l = p && d?.type === "into-row" && d.rowIdx === t;
      return /* @__PURE__ */ A("div", { className: "relative", children: [
        N && t > 0 && /* @__PURE__ */ c(
          V,
          {
            active: !!Z(t - 1),
            isDragging: !!p,
            onDragOver: (r) => q(r, t - 1)
          }
        ),
        /* @__PURE__ */ c(
          "div",
          {
            className: G(
              "flex rounded-lg transition-colors duration-200",
              l && "bg-f1-background-hover"
            ),
            style: { gap: $, height: e.height },
            onDragOver: N ? (r) => ne(r, t) : void 0,
            onDrop: N ? () => {
            } : void 0,
            children: e.ids.map((r, u) => {
              const g = D.get(r);
              if (!g) return null;
              const w = p === r, v = l && d?.type === "into-row" && d.position === u, R = l && d?.type === "into-row" && d.position === e.ids.length && u === e.ids.length - 1;
              return /* @__PURE__ */ c(
                me,
                {
                  id: r,
                  isDragging: w,
                  showIndicatorBefore: !!v,
                  showIndicatorAfter: !!R,
                  draggable: N,
                  onDragStart: ee,
                  onDragEnd: te,
                  children: /* @__PURE__ */ c(
                    P,
                    {
                      item: g,
                      filters: a,
                      editMode: s,
                      onDelete: z,
                      onTransformChart: h,
                      onFullscreenChange: (k) => j(k ? r : null)
                    }
                  )
                },
                r
              );
            })
          }
        ),
        N && /* @__PURE__ */ c(
          "div",
          {
            className: "group/resize absolute -bottom-3.5 mx-auto flex h-3 w-full items-center justify-center hover:cursor-ns-resize",
            onMouseDown: (r) => {
              r.preventDefault(), re(t, r.clientY);
            },
            children: /* @__PURE__ */ c("div", { className: "h-1 w-16 rounded-full bg-transparent transition-colors group-hover/resize:bg-f1-foreground-tertiary" })
          }
        )
      ] }, t);
    }),
    N && /* @__PURE__ */ c(
      V,
      {
        active: !!Z(F.length - 1),
        isDragging: !!p,
        onDragOver: (e) => q(e, F.length - 1)
      }
    )
  ] });
}
function me({
  id: n,
  isDragging: a,
  showIndicatorBefore: s,
  showIndicatorAfter: i,
  draggable: o,
  onDragStart: h,
  onDragEnd: f,
  children: m
}) {
  const I = _(!1);
  return /* @__PURE__ */ A(se, { children: [
    s && /* @__PURE__ */ c(Q, {}),
    /* @__PURE__ */ A(
      "div",
      {
        "data-card-id": n,
        draggable: o,
        onDragStart: o ? (M) => {
          if (!I.current) {
            M.preventDefault();
            return;
          }
          M.dataTransfer.effectAllowed = "move", M.dataTransfer.setData("text/plain", n), h(n);
        } : void 0,
        onDragEnd: o ? () => {
          I.current = !1, f();
        } : void 0,
        className: G(
          "group/rowitem relative min-w-0 flex-1 transition-opacity duration-150",
          a && "opacity-40 scale-[0.97]"
        ),
        children: [
          o && /* @__PURE__ */ c(
            "div",
            {
              className: "shadow-sm absolute -left-3 top-2.5 z-20 flex cursor-grab items-center justify-center rounded bg-f1-background p-2 opacity-0 transition-opacity hover:bg-f1-background-hover active:cursor-grabbing group-hover/rowitem:opacity-100",
              onMouseDown: () => {
                I.current = !0;
              },
              onMouseUp: () => {
                I.current = !1;
              },
              "aria-label": "Drag to reorder",
              children: /* @__PURE__ */ c(ce, { icon: ae, size: "xs" })
            }
          ),
          m
        ]
      }
    ),
    i && /* @__PURE__ */ c(Q, {})
  ] });
}
function Q() {
  return /* @__PURE__ */ c("div", { className: "mx-[-2px] w-1 flex-shrink-0 self-stretch py-2", children: /* @__PURE__ */ c("div", { className: "h-full w-full rounded-full bg-f1-background-secondary-hover" }) });
}
function V({
  active: n,
  isDragging: a,
  onDragOver: s
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: G(
        "relative flex items-center justify-center transition-all",
        a ? "py-4" : ""
      ),
      style: { minHeight: a ? 32 : 0 },
      onDragOver: s,
      onDrop: (i) => i.preventDefault(),
      children: /* @__PURE__ */ c(
        "div",
        {
          className: G(
            "absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full transition-colors",
            n ? "bg-f1-background-secondary-hover" : "bg-transparent"
          )
        }
      )
    }
  );
}
function L(n) {
  return n.some((s) => s.y !== void 0) ? we(n) : ve(n);
}
function we(n) {
  const a = [...n].sort(
    (i, o) => (i.y ?? 0) - (o.y ?? 0) || (i.x ?? 0) - (o.x ?? 0)
  ), s = /* @__PURE__ */ new Map();
  for (const i of a) {
    const o = i.y ?? 0, h = U(i);
    let f = s.get(o);
    f || (f = { ids: [], maxHeight: 0 }, s.set(o, f)), f.ids.push(i.id), h > f.maxHeight && (f.maxHeight = h);
  }
  return [...s.entries()].sort(([i], [o]) => i - o).map(([, i]) => ({ ids: i.ids, height: i.maxHeight }));
}
function ve(n) {
  const a = [];
  let s = [], i = 0, o = 0;
  for (const h of n) {
    const f = Ie(h), m = U(h);
    i + f > W && s.length > 0 && (a.push({ ids: s, height: o }), s = [], i = 0, o = 0), s.push(h.id), i += f, m > o && (o = m);
  }
  return s.length > 0 && a.push({ ids: s, height: o }), a;
}
function C(n, a) {
  let s = J;
  for (const i of n.ids) {
    const o = a.get(i);
    if (!o) continue;
    const h = pe[o.type] ?? J;
    h > s && (s = h);
  }
  return s;
}
function Ie(n) {
  return n.type === "metric" ? 1 : n.type === "chart" ? 2 : n.type === "collection" ? W : 2;
}
function U(n) {
  return n.itemHeight && n.itemHeight > 0 ? n.itemHeight : n.rowSpan ? n.rowSpan * 48 : ge[n.type] ?? K;
}
function P({
  item: n,
  filters: a,
  actions: s,
  editMode: i,
  onDelete: o,
  onTransformChart: h,
  isFullscreen: f,
  onFullscreenChange: m
}) {
  switch (n.type) {
    case "chart":
      return /* @__PURE__ */ c(
        le,
        {
          item: n,
          filters: a,
          actions: s,
          editMode: i,
          handleDelete: o,
          onTransformChart: h,
          isFullscreen: f,
          onFullscreenChange: m
        }
      );
    case "metric":
      return /* @__PURE__ */ c(
        fe,
        {
          item: n,
          filters: a,
          actions: s,
          editMode: i,
          handleDelete: o,
          isFullscreen: f,
          onFullscreenChange: m
        }
      );
    case "collection":
      return /* @__PURE__ */ c(
        de,
        {
          item: n,
          filters: a,
          actions: s,
          editMode: i,
          handleDelete: o,
          isFullscreen: f,
          onFullscreenChange: m
        }
      );
    default: {
      const I = n;
      return /* @__PURE__ */ c(
        ue,
        {
          title: I.title ?? "Unknown",
          isLoading: !1,
          error: new Error(
            `Unknown dashboard item type: "${I.type}"`
          ),
          children: null
        }
      );
    }
  }
}
export {
  Se as DashboardGrid
};
