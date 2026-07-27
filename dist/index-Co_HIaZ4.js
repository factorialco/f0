import { S as F, m as Se, u as Z, n as re, o as Re, q as _e, i as ke, j as Ne, k as Ce, r as Le, l as Fe, w as Ve, s as Te, t as Ee } from "./F0CanvasPanel-DvAledR4.js";
import { jsx as o, jsxs as S } from "react/jsx-runtime";
import { lazy as J, forwardRef as ie, Suspense as He, useState as C, useRef as A, useMemo as ne, useCallback as P, useEffect as L } from "react";
import { e as Ue, D as je, P as De, c as Oe } from "./pdfWorker-CqQpWr5o.js";
import { F as We } from "./Printer-B7iDPx2r.js";
import './index.css';const $e = ({
  label: n,
  width: a,
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
      F,
      {
        style: { width: a, height: e },
        className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
      }
    )
  }
), _ = ({
  label: n,
  icon: a,
  onClick: e,
  size: i = "md"
}) => /* @__PURE__ */ o(
  Se,
  {
    label: n,
    icon: a,
    onClick: e,
    hideLabel: !0,
    variant: "outline",
    size: i
  }
), q = "flex flex-row items-center gap-2", Be = ({
  toolbarRef: n,
  currentPage: a,
  totalPages: e,
  hasDocument: i,
  selectedScale: l,
  scaleOptions: s,
  onPreviousPage: d,
  onNextPage: p,
  onZoomIn: m,
  onZoomOut: v,
  onScaleChange: k,
  rotatable: x,
  onRotate: g,
  onPrint: E,
  onDownload: y,
  actions: h
}) => {
  const { pdfViewer: c } = Z();
  return /* @__PURE__ */ S(
    "div",
    {
      ref: n,
      role: "toolbar",
      "aria-label": c.toolbar,
      className: re(
        "F0PdfViewer__surface flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ S("div", { className: q, children: [
          i && /* @__PURE__ */ S(
            "span",
            {
              "aria-live": "polite",
              className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
              children: [
                a,
                " / ",
                e
              ]
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: c.previousPage,
              onClick: d,
              icon: Re,
              size: "sm"
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: c.nextPage,
              onClick: p,
              icon: _e,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ S("div", { className: q, children: [
          /* @__PURE__ */ o(
            _,
            {
              label: c.zoomOut,
              onClick: v,
              icon: ke
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: c.zoomIn,
              onClick: m,
              icon: Ne
            }
          ),
          /* @__PURE__ */ o(
            Ce,
            {
              hideLabel: !0,
              label: c.scaleSelector,
              options: s,
              value: l,
              onChange: (b) => k(b)
            }
          )
        ] }),
        /* @__PURE__ */ S("div", { className: q, children: [
          x && /* @__PURE__ */ o(
            _,
            {
              label: c.rotate,
              onClick: g,
              icon: Le
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: c.print,
              onClick: E,
              icon: We
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: c.download,
              onClick: y,
              icon: Fe
            }
          ),
          h?.map((b, N) => /* @__PURE__ */ o(
            _,
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
}, se = async (n) => {
  const a = await n.saveDocument();
  return new Blob([new Uint8Array(a)], { type: "application/pdf" });
}, ze = async (n) => {
  if (!n) return;
  const a = URL.createObjectURL(await se(n)), e = document.createElement("iframe");
  e.style.display = "none", e.src = a, e.onload = () => {
    e.focus(), e.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(a), e.remove();
    };
    e.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(e);
}, Me = async (n, a) => {
  if (!n) return;
  const e = URL.createObjectURL(await se(n)), i = document.createElement("a");
  i.href = e, i.download = a.length > 0 ? a : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(e);
}, at = async (n, a, e = !0) => {
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
  s.href = i, s.download = a ?? "", s.rel = "noreferrer", l || (s.target = "_blank"), document.body.appendChild(s), s.click(), s.remove(), l && URL.revokeObjectURL(l);
}, G = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4"
], le = G.map(Number), Ie = (n) => le.find((a) => a > n), Ae = (n) => [...le].reverse().find((a) => a < n), qe = (n, a, e) => {
  let i = null, l = 0;
  return a.forEach((s, d) => {
    if (!s) return;
    const p = s.offsetHeight, m = s.offsetTop, v = m + p, k = n.offsetHeight - e, x = n.scrollTop + e, g = x + k;
    if (!(x < v && g > m)) return;
    let y;
    if (x <= m)
      y = g > v ? p : g - m;
    else {
      let h = x - m;
      g < v && (h += v - g), y = p - h;
    }
    y > l && (l = y, i = d + 1);
  }), i;
};
Ue();
const Ge = J(() => import("./SheetViewer-CVuvM6N6.js")), Ze = J(() => import("./DocxViewer-DyyaLCxn.js")), Je = J(() => import("./TextViewer-CoUMtjqd.js")), ae = 48, ce = ie(
  (n, a) => {
    const { kind: e = "pdf", mimeType: i, ...l } = n;
    if (e === "pdf") return /* @__PURE__ */ o(de, { ref: a, ...l });
    const {
      url: s,
      filename: d,
      actions: p,
      withCredentials: m = !0,
      page: v,
      pagesToDisplay: k,
      initialScale: x,
      rotatable: g,
      initialRotation: E,
      onRotationChange: y,
      onPdfLoaded: h,
      onPageChange: c,
      ...b
    } = l;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        ...b,
        className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
        children: /* @__PURE__ */ S(
          He,
          {
            fallback: /* @__PURE__ */ o(F, { className: "h-full w-full rounded-none" }),
            children: [
              e === "sheet" && /* @__PURE__ */ o(
                Ge,
                {
                  url: s,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ),
              e === "docx" && /* @__PURE__ */ o(
                Ze,
                {
                  url: s,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ),
              e === "text" && /* @__PURE__ */ o(
                Je,
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
ce.displayName = "F0PdfViewer";
const de = ie((n, a) => {
  const {
    url: e,
    filename: i = "document.pdf",
    page: l = 0,
    pagesToDisplay: s = [],
    initialScale: d = "page-width",
    withCredentials: p = !0,
    rotatable: m = !1,
    initialRotation: v = 0,
    onRotationChange: k,
    onPdfLoaded: x,
    onPageChange: g,
    actions: E,
    ...y
  } = n, { pdfViewer: h } = Z(), [c, b] = C(null), [N, K] = C([]), [w, z] = C(1), [H, Q] = C(1), [R, X] = C(0), [j, M] = C(d), [U, fe] = C(v), I = A(null), ue = A(null), D = A([]), O = s.length > 0 ? s.length : c?.numPages, Y = N.find(Boolean), ee = (Y?.originalWidth ?? 595) * w, te = (Y?.originalHeight ?? 842) * w, me = ne(
    () => [
      { value: "page-width", label: h.pageWidth },
      { value: "page-fit", label: h.pageFit },
      ...G.map((t) => ({
        value: t,
        label: `${Number(t) * 100}%`
      }))
    ],
    [h.pageWidth, h.pageFit]
  ), pe = ne(() => ({ url: e, withCredentials: p }), [e, p]), V = P(
    (t) => {
      const r = (O ?? 1) - 1, u = Math.min(Math.max(t, 0), r), f = D.current[u], T = f?.offsetParent;
      f && T instanceof HTMLElement && (T.scrollTop = f.offsetTop - 10);
    },
    [O]
  ), W = P(
    (t) => {
      const r = N[R - 1], u = I.current;
      if (!r || !u) return;
      const f = U === 90 || U === 270, T = f ? r.originalHeight : r.originalWidth, B = f ? r.originalWidth : r.originalHeight, oe = t === "page-width" ? (u.clientWidth - ae) / T : (u.clientHeight - ae) / B;
      z(oe), Q(oe), M(t);
    },
    [N, R, U]
  ), ge = P(
    (t) => {
      if (t === "page-width" || t === "page-fit") {
        W(t);
        return;
      }
      z(Number(t)), M(t);
    },
    [W]
  ), $ = P((t) => {
    if (t === void 0) return;
    z(t);
    const r = G.find((u) => Number(u) === t);
    r && M(r);
  }, []), he = P(
    () => $(Ie(w)),
    [w, $]
  ), be = P(
    () => $(Ae(w)),
    [w, $]
  ), we = P(() => {
    fe((t) => {
      const r = (t + 90) % 360;
      return k?.(r), r;
    });
  }, [k]), Pe = P(
    (t) => {
      b(t), x?.(t), setTimeout(() => {
        X(l + 1), V(l);
      }, 0);
    },
    [x, l, V]
  ), xe = P((t) => {
    const r = t.target;
    if (!(r instanceof HTMLElement)) return;
    const u = qe(r, D.current, 0);
    u && X(u);
  }, []), ve = P(() => {
    ze(c);
  }, [c]), ye = P(() => {
    Me(c, i);
  }, [c, i]);
  return L(() => {
    b(null), K([]), D.current = [];
  }, [e]), L(() => {
    V(l);
  }, [l, V]), L(() => {
    R > 0 && g?.(R);
  }, [R, g]), L(() => {
    N.length > 0 && (d === "page-width" || d === "page-fit") && W(d);
  }, [N.length, d]), L(() => {
    (j === "page-width" || j === "page-fit") && W(j);
  }, [U]), L(() => {
    const t = I.current;
    if (!t) return;
    const r = (u) => {
      const f = u.target;
      f instanceof HTMLAnchorElement && (f.target = "_blank", f.rel = "noopener noreferrer");
    };
    return t.addEventListener("click", r, !0), () => t.removeEventListener("click", r, !0);
  }, []), L(() => {
    if (H === w) return;
    const t = setTimeout(() => Q(w), 200);
    return () => clearTimeout(t);
  }, [w, H]), /* @__PURE__ */ S(
    "div",
    {
      ref: a,
      ...y,
      className: "F0PdfViewer__surface relative flex h-full w-full min-w-0 flex-col overflow-hidden border border-solid border-f1-border-secondary",
      children: [
        /* @__PURE__ */ o(
          Be,
          {
            toolbarRef: ue,
            currentPage: R,
            totalPages: O,
            hasDocument: !!c?.numPages,
            selectedScale: j,
            scaleOptions: me,
            onPreviousPage: () => V(R - 2),
            onNextPage: () => V(R),
            onZoomIn: he,
            onZoomOut: be,
            onScaleChange: ge,
            rotatable: m,
            onRotate: we,
            onPrint: ve,
            onDownload: ye,
            actions: E
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            ref: I,
            onScroll: xe,
            className: "F0PdfViewer__surface relative flex min-h-0 min-w-0 flex-1 flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
            children: e && /* @__PURE__ */ o(
              je,
              {
                file: pe,
                onLoadSuccess: Pe,
                loading: /* @__PURE__ */ o(
                  $e,
                  {
                    label: h.loading,
                    width: ee,
                    height: te
                  }
                ),
                children: c && Array.from({ length: O ?? 0 }).map((t, r) => {
                  const u = (s.length > 0 ? s[r] : r) + 1;
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
                        transform: `scale(${w / H})`,
                        transition: H === w ? "none" : "transform 180ms cubic-bezier(0.2, 0, 0, 1)"
                      },
                      children: /* @__PURE__ */ o(
                        De,
                        {
                          className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
                          pageNumber: u,
                          scale: H,
                          rotate: U,
                          loading: /* @__PURE__ */ o(
                            F,
                            {
                              style: {
                                width: ee,
                                height: te
                              }
                            }
                          ),
                          renderForms: !0,
                          renderTextLayer: !0,
                          inputRef: (f) => {
                            D.current[r] = f;
                          },
                          onLoadSuccess: (f) => {
                            K((T) => {
                              const B = [...T];
                              return B[r] = {
                                originalWidth: f.originalWidth,
                                originalHeight: f.originalHeight
                              }, B;
                            });
                          }
                        }
                      )
                    },
                    r
                  );
                })
              }
            )
          }
        )
      ]
    }
  );
});
de.displayName = "PdfViewerBase";
const Ke = () => {
  const { pdfViewer: n } = Z();
  return /* @__PURE__ */ S(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "aria-label": n.loading,
      className: re(
        "F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden",
        "border border-solid border-f1-border-secondary"
      ),
      children: [
        /* @__PURE__ */ S("div", { className: "flex flex-row items-center justify-between gap-2 px-6 py-4", children: [
          /* @__PURE__ */ o(F, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ o(F, { className: "h-8 w-40 rounded-md" }),
          /* @__PURE__ */ o(F, { className: "h-8 w-20 rounded-md" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-1 justify-center p-4", children: /* @__PURE__ */ o(F, { className: "h-full w-full max-w-[600px] rounded-md" }) })
      ]
    }
  );
}, Qe = [
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
], Xe = Ve(
  Te(
    "F0PdfViewer",
    Ee(ce, Ke)
  )
), rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: Xe,
  configurePdfWorker: Oe,
  pdfScales: Qe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Xe as F,
  _ as T,
  Ae as a,
  at as d,
  G as f,
  rt as i,
  Ie as n,
  Qe as p
};
