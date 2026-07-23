import { S as L, o as ye, u as Z, q as ne, r as Se, s as Re, i as ke, j as _e, k as Ne, t as Ce, l as Le, w as Fe, v as Ve, x as Te } from "./F0CanvasPanel-D0iQ51PW.js";
import { jsx as t, jsxs as y } from "react/jsx-runtime";
import { lazy as J, forwardRef as ae, Suspense as He, useState as V, useRef as A, useMemo as te, useCallback as w, useEffect as T } from "react";
import { e as Ee, D as Ue, P as je, c as De } from "./pdfWorker-C5Lf-9Yu.js";
import { F as We } from "./Printer-B7iDPx2r.js";
import './index.css';const Oe = ({
  label: o,
  width: a,
  height: e
}) => /* @__PURE__ */ t(
  "div",
  {
    role: "status",
    "aria-label": o,
    "aria-live": "polite",
    "aria-busy": !0,
    className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
    children: /* @__PURE__ */ t(
      L,
      {
        style: { width: a, height: e },
        className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
      }
    )
  }
), R = ({
  label: o,
  icon: a,
  onClick: e,
  size: i = "md"
}) => /* @__PURE__ */ t(
  ye,
  {
    label: o,
    icon: a,
    onClick: e,
    hideLabel: !0,
    variant: "outline",
    size: i
  }
), q = "flex flex-row items-center gap-2", $e = ({
  toolbarRef: o,
  currentPage: a,
  totalPages: e,
  hasDocument: i,
  selectedScale: l,
  scaleOptions: s,
  onPreviousPage: d,
  onNextPage: m,
  onZoomIn: g,
  onZoomOut: v,
  onScaleChange: k,
  rotatable: P,
  onRotate: p,
  onPrint: H,
  onDownload: x,
  actions: h
}) => {
  const { pdfViewer: c } = Z();
  return /* @__PURE__ */ y(
    "div",
    {
      ref: o,
      role: "toolbar",
      "aria-label": c.toolbar,
      className: ne(
        "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ y("div", { className: q, children: [
          i && /* @__PURE__ */ y(
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
          /* @__PURE__ */ t(
            R,
            {
              label: c.previousPage,
              onClick: d,
              icon: Se,
              size: "sm"
            }
          ),
          /* @__PURE__ */ t(
            R,
            {
              label: c.nextPage,
              onClick: m,
              icon: Re,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ y("div", { className: q, children: [
          /* @__PURE__ */ t(
            R,
            {
              label: c.zoomOut,
              onClick: v,
              icon: ke
            }
          ),
          /* @__PURE__ */ t(
            R,
            {
              label: c.zoomIn,
              onClick: g,
              icon: _e
            }
          ),
          /* @__PURE__ */ t(
            Ne,
            {
              hideLabel: !0,
              label: c.scaleSelector,
              options: s,
              value: l,
              onChange: (b) => k(b)
            }
          )
        ] }),
        /* @__PURE__ */ y("div", { className: q, children: [
          P && /* @__PURE__ */ t(
            R,
            {
              label: c.rotate,
              onClick: p,
              icon: Ce
            }
          ),
          /* @__PURE__ */ t(
            R,
            {
              label: c.print,
              onClick: H,
              icon: We
            }
          ),
          /* @__PURE__ */ t(
            R,
            {
              label: c.download,
              onClick: x,
              icon: Le
            }
          ),
          h?.map((b, _) => /* @__PURE__ */ t(
            R,
            {
              label: b.label,
              onClick: b.onClick,
              icon: b.icon
            },
            `${b.label}-${_}`
          ))
        ] })
      ]
    }
  );
}, re = async (o) => {
  const a = await o.saveDocument();
  return new Blob([new Uint8Array(a)], { type: "application/pdf" });
}, Be = async (o) => {
  if (!o) return;
  const a = URL.createObjectURL(await re(o)), e = document.createElement("iframe");
  e.style.display = "none", e.src = a, e.onload = () => {
    e.focus(), e.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(a), e.remove();
    };
    e.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(e);
}, ze = async (o, a) => {
  if (!o) return;
  const e = URL.createObjectURL(await re(o)), i = document.createElement("a");
  i.href = e, i.download = a.length > 0 ? a : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(e);
}, nt = async (o, a, e = !0) => {
  let i = o, l;
  try {
    const d = await fetch(o, {
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
], ie = G.map(Number), Me = (o) => ie.find((a) => a > o), Ie = (o) => [...ie].reverse().find((a) => a < o), Ae = (o, a, e) => {
  let i = null, l = 0;
  return a.forEach((s, d) => {
    if (!s) return;
    const m = s.offsetHeight, g = s.offsetTop, v = g + m, k = o.offsetHeight - e, P = o.scrollTop + e, p = P + k;
    if (!(P < v && p > g)) return;
    let x;
    if (P <= g)
      x = p > v ? m : p - g;
    else {
      let h = P - g;
      p < v && (h += v - p), x = m - h;
    }
    x > l && (l = x, i = d + 1);
  }), i;
};
Ee();
const qe = J(() => import("./SheetViewer-JAtlubTL.js")), Ge = J(() => import("./DocxViewer-DGqZrY3Q.js")), Ze = J(() => import("./TextViewer-C-s0Wb8V.js")), oe = 48, se = ae(
  (o, a) => {
    const { kind: e = "pdf", mimeType: i, ...l } = o;
    if (e === "pdf") return /* @__PURE__ */ t(le, { ref: a, ...l });
    const {
      url: s,
      filename: d,
      actions: m,
      withCredentials: g = !0,
      page: v,
      pagesToDisplay: k,
      initialScale: P,
      rotatable: p,
      initialRotation: H,
      onRotationChange: x,
      onPdfLoaded: h,
      onPageChange: c,
      ...b
    } = l;
    return /* @__PURE__ */ t(
      "div",
      {
        ref: a,
        ...b,
        className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
        children: /* @__PURE__ */ y(
          He,
          {
            fallback: /* @__PURE__ */ t(L, { className: "h-full w-full rounded-none" }),
            children: [
              e === "sheet" && /* @__PURE__ */ t(
                qe,
                {
                  url: s,
                  filename: d,
                  withCredentials: g,
                  actions: m
                }
              ),
              e === "docx" && /* @__PURE__ */ t(
                Ge,
                {
                  url: s,
                  filename: d,
                  withCredentials: g,
                  actions: m
                }
              ),
              e === "text" && /* @__PURE__ */ t(
                Ze,
                {
                  url: s,
                  name: d ?? "",
                  mimeType: i,
                  withCredentials: g,
                  actions: m
                }
              )
            ]
          }
        )
      }
    );
  }
);
se.displayName = "F0PdfViewer";
const le = ae((o, a) => {
  const {
    url: e,
    filename: i = "document.pdf",
    page: l = 0,
    pagesToDisplay: s = [],
    initialScale: d = "page-width",
    withCredentials: m = !0,
    rotatable: g = !1,
    initialRotation: v = 0,
    onRotationChange: k,
    onPdfLoaded: P,
    onPageChange: p,
    actions: H,
    ...x
  } = o, { pdfViewer: h } = Z(), [c, b] = V(null), [_, K] = V([]), [N, z] = V(1), [S, Q] = V(0), [U, M] = V(d), [E, ce] = V(v), I = A(null), j = A(null), D = A([]), W = s.length > 0 ? s.length : c?.numPages, X = _.find(Boolean), Y = (X?.originalWidth ?? 595) * N, ee = (X?.originalHeight ?? 842) * N, de = te(
    () => [
      { value: "page-width", label: h.pageWidth },
      { value: "page-fit", label: h.pageFit },
      ...G.map((n) => ({
        value: n,
        label: `${Number(n) * 100}%`
      }))
    ],
    [h.pageWidth, h.pageFit]
  ), fe = te(() => ({ url: e, withCredentials: m }), [e, m]), F = w(
    (n) => {
      const r = (W ?? 1) - 1, f = Math.min(Math.max(n, 0), r), u = D.current[f], C = u?.offsetParent;
      u && C instanceof HTMLElement && (C.scrollTop = u.offsetTop - (j.current?.offsetHeight ?? 0) - 10);
    },
    [W]
  ), O = w(
    (n) => {
      const r = _[S - 1], f = I.current;
      if (!r || !f) return;
      const u = j.current?.offsetHeight ?? 0, C = E === 90 || E === 270, B = C ? r.originalHeight : r.originalWidth, ve = C ? r.originalWidth : r.originalHeight, xe = n === "page-width" ? (f.clientWidth - oe) / B : (f.clientHeight - u - oe) / ve;
      z(xe), M(n);
    },
    [_, S, E]
  ), ue = w(
    (n) => {
      if (n === "page-width" || n === "page-fit") {
        O(n);
        return;
      }
      z(Number(n)), M(n);
    },
    [O]
  ), $ = w((n) => {
    if (n === void 0) return;
    z(n);
    const r = G.find((f) => Number(f) === n);
    r && M(r);
  }, []), ge = w(
    () => $(Me(N)),
    [N, $]
  ), me = w(
    () => $(Ie(N)),
    [N, $]
  ), pe = w(() => {
    ce((n) => {
      const r = (n + 90) % 360;
      return k?.(r), r;
    });
  }, [k]), he = w(
    (n) => {
      b(n), P?.(n), setTimeout(() => {
        Q(l + 1), F(l);
      }, 0);
    },
    [P, l, F]
  ), be = w((n) => {
    const r = n.target;
    if (!(r instanceof HTMLElement)) return;
    const f = Ae(
      r,
      D.current,
      j.current?.offsetHeight ?? 0
    );
    f && Q(f);
  }, []), we = w(() => {
    Be(c);
  }, [c]), Pe = w(() => {
    ze(c, i);
  }, [c, i]);
  return T(() => {
    b(null), K([]), D.current = [];
  }, [e]), T(() => {
    F(l);
  }, [l, F]), T(() => {
    S > 0 && p?.(S);
  }, [S, p]), T(() => {
    _.length > 0 && (d === "page-width" || d === "page-fit") && O(d);
  }, [_.length, d]), T(() => {
    (U === "page-width" || U === "page-fit") && O(U);
  }, [E]), T(() => {
    const n = I.current;
    if (!n) return;
    const r = (f) => {
      const u = f.target;
      u instanceof HTMLAnchorElement && (u.target = "_blank", u.rel = "noopener noreferrer");
    };
    return n.addEventListener("click", r, !0), () => n.removeEventListener("click", r, !0);
  }, []), /* @__PURE__ */ t(
    "div",
    {
      ref: a,
      ...x,
      className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
      children: /* @__PURE__ */ y(
        "div",
        {
          ref: I,
          onScroll: be,
          className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
          children: [
            /* @__PURE__ */ t(
              $e,
              {
                toolbarRef: j,
                currentPage: S,
                totalPages: W,
                hasDocument: !!c?.numPages,
                selectedScale: U,
                scaleOptions: de,
                onPreviousPage: () => F(S - 2),
                onNextPage: () => F(S),
                onZoomIn: ge,
                onZoomOut: me,
                onScaleChange: ue,
                rotatable: g,
                onRotate: pe,
                onPrint: we,
                onDownload: Pe,
                actions: H
              }
            ),
            e && /* @__PURE__ */ t(
              Ue,
              {
                file: fe,
                onLoadSuccess: he,
                loading: /* @__PURE__ */ t(
                  Oe,
                  {
                    label: h.loading,
                    width: Y,
                    height: ee
                  }
                ),
                children: c && Array.from({ length: W ?? 0 }).map((n, r) => {
                  const f = (s.length > 0 ? s[r] : r) + 1;
                  return /* @__PURE__ */ t(
                    "div",
                    {
                      className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
                      children: /* @__PURE__ */ t(
                        je,
                        {
                          className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
                          pageNumber: f,
                          scale: N,
                          rotate: E,
                          loading: /* @__PURE__ */ t(
                            L,
                            {
                              style: {
                                width: Y,
                                height: ee
                              }
                            }
                          ),
                          renderForms: !0,
                          renderTextLayer: !0,
                          inputRef: (u) => {
                            D.current[r] = u;
                          },
                          onLoadSuccess: (u) => {
                            K((C) => {
                              const B = [...C];
                              return B[r] = {
                                originalWidth: u.originalWidth,
                                originalHeight: u.originalHeight
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
          ]
        }
      )
    }
  );
});
le.displayName = "PdfViewerBase";
const Je = () => {
  const { pdfViewer: o } = Z();
  return /* @__PURE__ */ y(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "aria-label": o.loading,
      className: ne(
        "F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden",
        "border border-solid border-f1-border-secondary"
      ),
      children: [
        /* @__PURE__ */ y("div", { className: "flex flex-row items-center justify-between gap-2 px-6 py-4", children: [
          /* @__PURE__ */ t(L, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(L, { className: "h-8 w-40 rounded-md" }),
          /* @__PURE__ */ t(L, { className: "h-8 w-20 rounded-md" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-1 justify-center p-4", children: /* @__PURE__ */ t(L, { className: "h-full w-full max-w-[600px] rounded-md" }) })
      ]
    }
  );
}, Ke = [
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
], Qe = Fe(
  Ve(
    "F0PdfViewer",
    Te(se, Je)
  )
), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: Qe,
  configurePdfWorker: De,
  pdfScales: Ke
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qe as F,
  R as T,
  Ie as a,
  nt as d,
  G as f,
  at as i,
  Me as n,
  Ke as p
};
