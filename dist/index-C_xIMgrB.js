import { S as V, m as Re, u as J, n as ke, o as _e, i as Ne, j as Ce, k as Le, q as Fe, l as Ve, w as Te, r as He, s as Ee } from "./F0CanvasPanel-BeVQHrJo.js";
import { jsx as o, jsxs as S } from "react/jsx-runtime";
import { lazy as K, forwardRef as ie, Suspense as Ue, useState as L, useRef as q, useMemo as re, useCallback as P, useEffect as F } from "react";
import { e as je, D as De, P as Oe, c as We } from "./pdfWorker-BhRGUnkH.js";
import { F as $e } from "./Printer-B7iDPx2r.js";
import { d as se } from "./tooltip-BH6Se8A4.js";
import './index.css';const ze = ({
  label: n,
  width: r,
  height: e
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "aria-label": n,
    "aria-live": "polite",
    "aria-busy": !0,
    className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
    children: /* @__PURE__ */ o(
      V,
      {
        style: { width: r, height: e },
        className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
      }
    )
  }
), k = ({
  label: n,
  icon: r,
  onClick: e,
  size: i = "md"
}) => /* @__PURE__ */ o(
  Re,
  {
    label: n,
    icon: r,
    onClick: e,
    hideLabel: !0,
    variant: "outline",
    size: i
  }
), G = "flex flex-row items-center gap-2", Be = ({
  toolbarRef: n,
  currentPage: r,
  totalPages: e,
  hasDocument: i,
  selectedScale: l,
  scaleOptions: s,
  onPreviousPage: d,
  onNextPage: p,
  onZoomIn: m,
  onZoomOut: x,
  onScaleChange: _,
  rotatable: v,
  onRotate: g,
  onPrint: H,
  onDownload: y,
  actions: h
}) => {
  const { pdfViewer: c } = J();
  return /* @__PURE__ */ S(
    "div",
    {
      ref: n,
      role: "toolbar",
      "aria-label": c.toolbar,
      className: se(
        "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ S("div", { className: G, children: [
          i && /* @__PURE__ */ S(
            "span",
            {
              "aria-live": "polite",
              className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
              children: [
                r,
                " / ",
                e
              ]
            }
          ),
          /* @__PURE__ */ o(
            k,
            {
              label: c.previousPage,
              onClick: d,
              icon: ke,
              size: "sm"
            }
          ),
          /* @__PURE__ */ o(
            k,
            {
              label: c.nextPage,
              onClick: p,
              icon: _e,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ S("div", { className: G, children: [
          /* @__PURE__ */ o(
            k,
            {
              label: c.zoomOut,
              onClick: x,
              icon: Ne
            }
          ),
          /* @__PURE__ */ o(
            k,
            {
              label: c.zoomIn,
              onClick: m,
              icon: Ce
            }
          ),
          /* @__PURE__ */ o(
            Le,
            {
              hideLabel: !0,
              label: c.scaleSelector,
              options: s,
              value: l,
              onChange: (b) => _(b)
            }
          )
        ] }),
        /* @__PURE__ */ S("div", { className: G, children: [
          v && /* @__PURE__ */ o(
            k,
            {
              label: c.rotate,
              onClick: g,
              icon: Fe
            }
          ),
          /* @__PURE__ */ o(
            k,
            {
              label: c.print,
              onClick: H,
              icon: $e
            }
          ),
          /* @__PURE__ */ o(
            k,
            {
              label: c.download,
              onClick: y,
              icon: Ve
            }
          ),
          h?.map((b, N) => /* @__PURE__ */ o(
            k,
            {
              label: b.label,
              onClick: b.onClick,
              icon: b.icon
            },
            `${b.label}-${N}`
          ))
        ] })
      ]
    }
  );
}, le = async (n) => {
  const r = await n.saveDocument();
  return new Blob([new Uint8Array(r)], { type: "application/pdf" });
}, Me = async (n) => {
  if (!n) return;
  const r = URL.createObjectURL(await le(n)), e = document.createElement("iframe");
  e.style.display = "none", e.src = r, e.onload = () => {
    e.focus(), e.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(r), e.remove();
    };
    e.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(e);
}, Ie = async (n, r) => {
  if (!n) return;
  const e = URL.createObjectURL(await le(n)), i = document.createElement("a");
  i.href = e, i.download = r.length > 0 ? r : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(e);
}, it = async (n, r, e = !0) => {
  let i = n, l;
  try {
    const d = await fetch(n, {
      credentials: e ? "include" : "same-origin"
    });
    if (!d.ok) throw new Error(`${d.status}`);
    l = URL.createObjectURL(await d.blob()), i = l;
  } catch {
  }
  const s = document.createElement("a");
  s.href = i, s.download = r ?? "", s.rel = "noreferrer", l || (s.target = "_blank"), document.body.appendChild(s), s.click(), s.remove(), l && URL.revokeObjectURL(l);
}, Z = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4"
], ce = Z.map(Number), Ae = (n) => ce.find((r) => r > n), qe = (n) => [...ce].reverse().find((r) => r < n), Ge = (n, r, e) => {
  let i = null, l = 0;
  return r.forEach((s, d) => {
    if (!s) return;
    const p = s.offsetHeight, m = s.offsetTop, x = m + p, _ = n.offsetHeight - e, v = n.scrollTop + e, g = v + _;
    if (!(v < x && g > m)) return;
    let y;
    if (v <= m)
      y = g > x ? p : g - m;
    else {
      let h = v - m;
      g < x && (h += x - g), y = p - h;
    }
    y > l && (l = y, i = d + 1);
  }), i;
};
je();
const Ze = K(() => import("./SheetViewer-DiPC7ls2.js")), Je = K(() => import("./DocxViewer-_CtjFmKk.js")), Ke = K(() => import("./TextViewer-K9_N5Vs4.js")), ae = 48, de = ie(
  (n, r) => {
    const { kind: e = "pdf", mimeType: i, ...l } = n;
    if (e === "pdf") return /* @__PURE__ */ o(fe, { ref: r, ...l });
    const {
      url: s,
      filename: d,
      actions: p,
      withCredentials: m = !0,
      page: x,
      pagesToDisplay: _,
      initialScale: v,
      rotatable: g,
      initialRotation: H,
      onRotationChange: y,
      onPdfLoaded: h,
      onPageChange: c,
      ...b
    } = l;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: r,
        ...b,
        className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
        children: /* @__PURE__ */ S(
          Ue,
          {
            fallback: /* @__PURE__ */ o(V, { className: "h-full w-full rounded-none" }),
            children: [
              e === "sheet" && /* @__PURE__ */ o(
                Ze,
                {
                  url: s,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ),
              e === "docx" && /* @__PURE__ */ o(
                Je,
                {
                  url: s,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ),
              e === "text" && /* @__PURE__ */ o(
                Ke,
                {
                  url: s,
                  name: d ?? "",
                  mimeType: i,
                  withCredentials: m,
                  actions: p
                }
              )
            ]
          }
        )
      }
    );
  }
);
de.displayName = "F0PdfViewer";
const fe = ie((n, r) => {
  const {
    url: e,
    filename: i = "document.pdf",
    page: l = 0,
    pagesToDisplay: s = [],
    initialScale: d = "page-width",
    withCredentials: p = !0,
    rotatable: m = !1,
    initialRotation: x = 0,
    onRotationChange: _,
    onPdfLoaded: v,
    onPageChange: g,
    actions: H,
    ...y
  } = n, { pdfViewer: h } = J(), [c, b] = L(null), [N, Q] = L([]), [w, M] = L(1), [E, X] = L(1), [R, Y] = L(0), [j, I] = L(d), [U, ue] = L(x), A = q(null), D = q(null), O = q([]), W = s.length > 0 ? s.length : c?.numPages, ee = N.find(Boolean), te = (ee?.originalWidth ?? 595) * w, oe = (ee?.originalHeight ?? 842) * w, me = re(
    () => [
      { value: "page-width", label: h.pageWidth },
      { value: "page-fit", label: h.pageFit },
      ...Z.map((t) => ({
        value: t,
        label: `${Number(t) * 100}%`
      }))
    ],
    [h.pageWidth, h.pageFit]
  ), pe = re(() => ({ url: e, withCredentials: p }), [e, p]), T = P(
    (t) => {
      const a = (W ?? 1) - 1, f = Math.min(Math.max(t, 0), a), u = O.current[f], C = u?.offsetParent;
      u && C instanceof HTMLElement && (C.scrollTop = u.offsetTop - (D.current?.offsetHeight ?? 0) - 10);
    },
    [W]
  ), $ = P(
    (t) => {
      const a = N[R - 1], f = A.current;
      if (!a || !f) return;
      const u = D.current?.offsetHeight ?? 0, C = U === 90 || U === 270, B = C ? a.originalHeight : a.originalWidth, Se = C ? a.originalWidth : a.originalHeight, ne = t === "page-width" ? (f.clientWidth - ae) / B : (f.clientHeight - u - ae) / Se;
      M(ne), X(ne), I(t);
    },
    [N, R, U]
  ), ge = P(
    (t) => {
      if (t === "page-width" || t === "page-fit") {
        $(t);
        return;
      }
      M(Number(t)), I(t);
    },
    [$]
  ), z = P((t) => {
    if (t === void 0) return;
    M(t);
    const a = Z.find((f) => Number(f) === t);
    a && I(a);
  }, []), he = P(
    () => z(Ae(w)),
    [w, z]
  ), be = P(
    () => z(qe(w)),
    [w, z]
  ), we = P(() => {
    ue((t) => {
      const a = (t + 90) % 360;
      return _?.(a), a;
    });
  }, [_]), Pe = P(
    (t) => {
      b(t), v?.(t), setTimeout(() => {
        Y(l + 1), T(l);
      }, 0);
    },
    [v, l, T]
  ), ve = P((t) => {
    const a = t.target;
    if (!(a instanceof HTMLElement)) return;
    const f = Ge(
      a,
      O.current,
      D.current?.offsetHeight ?? 0
    );
    f && Y(f);
  }, []), xe = P(() => {
    Me(c);
  }, [c]), ye = P(() => {
    Ie(c, i);
  }, [c, i]);
  return F(() => {
    b(null), Q([]), O.current = [];
  }, [e]), F(() => {
    T(l);
  }, [l, T]), F(() => {
    R > 0 && g?.(R);
  }, [R, g]), F(() => {
    N.length > 0 && (d === "page-width" || d === "page-fit") && $(d);
  }, [N.length, d]), F(() => {
    (j === "page-width" || j === "page-fit") && $(j);
  }, [U]), F(() => {
    const t = A.current;
    if (!t) return;
    const a = (f) => {
      const u = f.target;
      u instanceof HTMLAnchorElement && (u.target = "_blank", u.rel = "noopener noreferrer");
    };
    return t.addEventListener("click", a, !0), () => t.removeEventListener("click", a, !0);
  }, []), F(() => {
    if (E === w) return;
    const t = setTimeout(() => X(w), 200);
    return () => clearTimeout(t);
  }, [w, E]), /* @__PURE__ */ o(
    "div",
    {
      ref: r,
      ...y,
      className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
      children: /* @__PURE__ */ S(
        "div",
        {
          ref: A,
          onScroll: ve,
          className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
          children: [
            /* @__PURE__ */ o(
              Be,
              {
                toolbarRef: D,
                currentPage: R,
                totalPages: W,
                hasDocument: !!c?.numPages,
                selectedScale: j,
                scaleOptions: me,
                onPreviousPage: () => T(R - 2),
                onNextPage: () => T(R),
                onZoomIn: he,
                onZoomOut: be,
                onScaleChange: ge,
                rotatable: m,
                onRotate: we,
                onPrint: xe,
                onDownload: ye,
                actions: H
              }
            ),
            e && /* @__PURE__ */ o(
              De,
              {
                file: pe,
                onLoadSuccess: Pe,
                loading: /* @__PURE__ */ o(
                  ze,
                  {
                    label: h.loading,
                    width: te,
                    height: oe
                  }
                ),
                children: c && Array.from({ length: W ?? 0 }).map((t, a) => {
                  const f = (s.length > 0 ? s[a] : a) + 1;
                  return /* @__PURE__ */ o(
                    "div",
                    {
                      className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
                      style: {
                        // Manual zoom scales the already-rendered page (GPU, no
                        // canvas rebuild) until renderScale catches up. Fit changes
                        // keep scale === renderScale, so this stays at 1 with no
                        // transition (no animation on load).
                        transformOrigin: "top center",
                        transform: `scale(${w / E})`,
                        transition: E === w ? "none" : "transform 180ms cubic-bezier(0.2, 0, 0, 1)"
                      },
                      children: /* @__PURE__ */ o(
                        Oe,
                        {
                          className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
                          pageNumber: f,
                          scale: E,
                          rotate: U,
                          loading: /* @__PURE__ */ o(
                            V,
                            {
                              style: {
                                width: te,
                                height: oe
                              }
                            }
                          ),
                          renderForms: !0,
                          renderTextLayer: !0,
                          inputRef: (u) => {
                            O.current[a] = u;
                          },
                          onLoadSuccess: (u) => {
                            Q((C) => {
                              const B = [...C];
                              return B[a] = {
                                originalWidth: u.originalWidth,
                                originalHeight: u.originalHeight
                              }, B;
                            });
                          }
                        }
                      )
                    },
                    a
                  );
                })
              }
            )
          ]
        }
      )
    }
  );
});
fe.displayName = "PdfViewerBase";
const Qe = () => {
  const { pdfViewer: n } = J();
  return /* @__PURE__ */ S(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "aria-label": n.loading,
      className: se(
        "F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden",
        "border border-solid border-f1-border-secondary"
      ),
      children: [
        /* @__PURE__ */ S("div", { className: "flex flex-row items-center justify-between gap-2 px-6 py-4", children: [
          /* @__PURE__ */ o(V, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ o(V, { className: "h-8 w-40 rounded-md" }),
          /* @__PURE__ */ o(V, { className: "h-8 w-20 rounded-md" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-1 justify-center p-4", children: /* @__PURE__ */ o(V, { className: "h-full w-full max-w-[600px] rounded-md" }) })
      ]
    }
  );
}, Xe = [
  "page-width",
  "page-fit",
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4"
], Ye = Te(
  He(
    "F0PdfViewer",
    Ee(de, Qe)
  )
), st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: Ye,
  configurePdfWorker: We,
  pdfScales: Xe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ye as F,
  k as T,
  qe as a,
  it as d,
  Z as f,
  st as i,
  Ae as n,
  Xe as p
};
