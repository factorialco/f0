import { jsx as L } from "react/jsx-runtime";
import { useDeepCompareEffect as J } from "../../../node_modules/.pnpm/@reactuses_core@6.1.5_react@18.3.1/node_modules/@reactuses/core/dist/index.js";
import { useState as w, useRef as y, useMemo as K, useEffect as m, useCallback as Q } from "react";
import { GridStackContext as X } from "./grid-stack-context.js";
import { convertWidgetRecursive as S } from "./widget-utils.js";
import { motion as Y } from "../../../node_modules/.pnpm/motion@12.17.0_@emotion_is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.js";
const Z = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y"
], g = 200;
function j(x) {
  const C = x.cloneNode(!0);
  return x.querySelectorAll("canvas").forEach((d) => {
    if (d.width > 0 && d.height > 0)
      try {
        const u = d.toDataURL("image/png"), T = C.querySelectorAll("canvas"), v = Array.from(
          x.querySelectorAll("canvas")
        ).indexOf(d), e = T[v];
        if (e && e.parentElement) {
          const p = document.createElement("img");
          p.src = u, p.style.width = `${d.width}px`, p.style.height = `${d.height}px`, p.style.display = "block", d.className && (p.className = d.className), d.id && (p.id = d.id), e.parentElement.replaceChild(p, e);
        }
      } catch (u) {
        console.warn("Failed to convert canvas to image:", u);
      }
  }), C.innerHTML;
}
function ie({
  children: x,
  options: C,
  onResizeStop: q,
  onChange: d,
  widgets: u,
  static: T,
  forcePositionSync: v
}) {
  const [e, p] = w(null), P = y(null), z = y(!1), M = K(() => ({
    ...C,
    children: (u || []).map((a) => S(a))
  }), [C, u]), [G, O] = w(() => {
    const a = /* @__PURE__ */ new Map(), s = u || [], c = (o) => {
      o.id && o.content && a.set(o.id, o.content), o.subGridOpts?.children && o.subGridOpts.children.forEach((l) => {
        c(l);
      });
    };
    return s.forEach((o) => {
      c(o);
    }), a;
  }), W = y(G);
  m(() => {
    W.current = G;
  }, [G]);
  const [U, b] = w(() => {
    const a = /* @__PURE__ */ new Map(), s = u || [], c = (o) => {
      o.id && o._originalContent !== void 0 && a.set(o.id, o._originalContent), o.subGridOpts?.children && o.subGridOpts.children.forEach((l) => {
        c(l);
      });
    };
    return s.forEach((o) => {
      c(o);
    }), a;
  }), R = y(U);
  m(() => {
    R.current = U;
  }, [U]);
  const D = y(d);
  m(() => {
    D.current = d;
  }, [d]);
  const [V, I] = w(() => {
    const a = /* @__PURE__ */ new Map(), s = u || [], c = (o) => {
      if (o.id) {
        const l = S(o);
        a.set(o.id, l);
      }
      o.subGridOpts?.children && o.subGridOpts.children.forEach((l) => {
        c(l);
      });
    };
    return s.forEach((o) => {
      c(o);
    }), a;
  });
  J(() => {
    if (!e) return;
    const a = e.save();
    if (!Array.isArray(a))
      return;
    const s = a.map((r) => r.id), c = u || [], o = c.map((r) => r.id), l = c.filter(
      (r) => !s.includes(r.id)
    );
    l.length > 0 && (l.forEach((r) => {
      r.content && W.current.set(r.id, r.content), r._originalContent !== void 0 && R.current.set(r.id, r._originalContent);
    }), l.forEach((r) => {
      const t = S(r);
      e.addWidget(t);
    }), I((r) => {
      const t = new Map(r);
      return l.forEach((n) => {
        const i = S(n);
        t.set(n.id, i);
      }), t;
    }), O((r) => {
      const t = new Map(r);
      return l.forEach((n) => {
        n.content && t.set(n.id, n.content);
      }), t;
    }), b((r) => {
      const t = new Map(r);
      return l.forEach((n) => {
        n._originalContent !== void 0 && t.set(n.id, n._originalContent);
      }), t;
    }));
    const k = a.filter(
      (r) => !o.includes(r.id)
    );
    if (k.length > 0) {
      const r = k.map((t) => t.id).filter(Boolean);
      r.forEach((t) => {
        setTimeout(() => {
          W.current.delete(t), R.current.delete(t);
        }, g);
      }), k.forEach((t) => {
        const n = e.el.querySelector(
          `[gs-id="${t.id}"]`
        );
        n && setTimeout(() => {
          e.removeWidget(n, !0);
        }, g);
      }), I((t) => {
        const n = new Map(t);
        return r.forEach((i) => {
          setTimeout(() => {
            n.delete(i);
          }, g);
        }), n;
      }), O((t) => {
        const n = new Map(t);
        return r.forEach((i) => {
          if (n.get(i)) {
            const A = e.el.querySelector(
              `[gs-id="${i}"] .grid-stack-item-content`
            );
            let N = "";
            A && (N = j(A)), n.set(
              i,
              /* @__PURE__ */ L(
                Y.div,
                {
                  className: "h-full w-full",
                  initial: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  animate: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  exit: { opacity: 0, scale: 0.85, filter: "blur(14px)" },
                  transition: {
                    opacity: {
                      duration: g / 1e3,
                      ease: [0.32, 0, 0.67, 0]
                    },
                    scale: {
                      duration: g / 1e3,
                      ease: [0.65, 0, 0.35, 1]
                    },
                    filter: {
                      duration: g / 1e3,
                      ease: "linear"
                    }
                  },
                  dangerouslySetInnerHTML: { __html: N }
                }
              )
            );
          }
          setTimeout(() => {
            n.delete(i);
          }, g);
        }), n;
      }), b((t) => {
        const n = new Map(t);
        return r.forEach((i) => {
          setTimeout(() => {
            n.delete(i);
          }, g);
        }), n;
      });
    }
    const E = c.filter(
      (r) => s.includes(r.id)
    );
    if (E.length > 0) {
      const r = [];
      E.forEach((t) => {
        const n = a.find(
          (f) => f.id === t.id
        );
        if (!n)
          return;
        const i = Z.filter(
          (f) => n[f] !== t[f]
        );
        if (i.length > 0) {
          const f = {}, A = ["w", "h", "x", "y"], N = ["noMove", "noResize", "locked"], B = i.filter(
            (h) => A.includes(h)
          ), F = i.filter(
            (h) => N.includes(h)
          );
          if (B.length > 0 && F.length > 0 && B.length + F.length === i.length ? F.forEach((h) => {
            const _ = t[h];
            _ !== void 0 && (f[h] = _);
          }) : i.forEach((h) => {
            const _ = t[h];
            _ !== void 0 && (f[h] = _);
          }), Object.keys(f).length > 0) {
            const h = e.el.querySelector(
              `[gs-id="${t.id}"]`
            );
            h && r.push({
              id: t.id,
              element: h,
              updateOptions: f
            });
          }
        }
      }), E.forEach((t) => {
        t.content && W.current.set(t.id, t.content), t._originalContent !== void 0 && R.current.set(t.id, t._originalContent);
      }), r.forEach(({ element: t, updateOptions: n }) => {
        try {
          e.update(t, n);
        } catch (i) {
          console.warn("Error updating widget:", i);
        }
      }), I((t) => {
        const n = new Map(t);
        return E.forEach((i) => {
          const f = S(i);
          n.set(i.id, f);
        }), n;
      }), O((t) => {
        const n = new Map(t);
        return E.forEach((i) => {
          i.content && n.set(i.id, i.content);
        }), n;
      }), b((t) => {
        const n = new Map(t);
        return E.forEach((i) => {
          i._originalContent !== void 0 && n.set(i.id, i._originalContent);
        }), n;
      });
    }
    z.current || (z.current = !0);
  }, [u]), m(() => {
    !e || T === void 0 || e.setStatic(T);
  }, [e, T]);
  const H = y(v);
  m(() => {
    if (!e || v === void 0 || v === H.current)
      return;
    H.current = v;
    const a = u || [];
    e.batchUpdate(), a.forEach((s) => {
      const c = e.el.querySelector(
        `[gs-id="${s.id}"]`
      );
      c && e.update(c, {
        x: s.x ?? 0,
        y: s.y ?? 0,
        w: s.w ?? 1,
        h: s.h ?? 1
      });
    }), e.batchUpdate(!1);
  }, [e, v]), m(() => {
    if (!e || !M.handle) return;
    e.opts && (e.opts.handle = M.handle);
    const a = setTimeout(() => {
      if (e && e.el && M.handle && e.el.querySelectorAll(
        M.handle
      ).length > 0)
        try {
          !e.opts?.disableResize && (e.disable(!1), e.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(a);
  }, [e, M.handle, M.children]);
  const $ = Q(() => {
    if (!e)
      return;
    const a = e.save();
    if (Array.isArray(a)) {
      const s = a.map((c) => {
        const o = c.id;
        if (!o) return null;
        const l = W.current.get(o), k = R.current.get(o), E = c;
        return {
          ...c,
          id: o,
          w: c.w ?? 1,
          h: c.h ?? 1,
          x: c.x ?? 0,
          y: c.y ?? 0,
          // Preserve meta if it exists (GridStack preserves custom properties)
          meta: E.meta,
          // Use _originalContent from originalContentMapRef
          _originalContent: k,
          // Use React content from reactContentMapRef
          content: l ?? /* @__PURE__ */ L("div", { children: "No content" })
        };
      }).filter((c) => c !== null);
      D.current?.(s);
    }
  }, [e]);
  return m(() => {
    if (!e || !e.el || !e.el.parentElement)
      return;
    const a = (s, c) => {
      q?.(s, c);
    };
    try {
      e.on("resizestop", a), e.on("change added removed", $);
    } catch (s) {
      console.error("Error attaching GridStack event listeners:", s);
      return;
    }
    return () => {
      const s = P.current;
      if (s && s.el)
        try {
          s.off("resizestop"), s.off("change added removed");
        } catch (c) {
          console.warn("Error cleaning up GridStack event listeners:", c);
        }
    };
  }, [e, q, $]), m(() => {
    P.current = e;
  }, [e]), m(() => {
    e && e.el && e.el.parentElement && z.current && $();
  }, [e]), /* @__PURE__ */ L(
    X.Provider,
    {
      value: {
        options: M,
        gridStack: e,
        _gridStack: {
          value: e,
          set: p
        },
        _rawWidgetMetaMap: {
          value: V,
          set: I
        },
        _reactContentMap: {
          value: G,
          set: O
        }
      },
      children: x
    }
  );
}
export {
  ie as GridStackProvider
};
