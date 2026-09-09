import { S as L, m as ye, u as Z, n as Se, o as Re, i as ke, j as _e, k as Ne, q as Ce, l as Le, w as Fe, r as Ve, s as Te } from "./F0CanvasPanel-BOIrOq18.js";
import { jsx as t, jsxs as y } from "react/jsx-runtime";
import { lazy as J, forwardRef as ne, Suspense as He, useState as V, useRef as A, useMemo as te, useCallback as w, useEffect as T } from "react";
import { e as Ee, D as Ue, P as je, c as De } from "./pdfWorker-vBMdZKEB.js";
import { F as We } from "./Printer-BD-FEi_2.js";
import { d as ae } from "./tooltip-CMBdJvJA.js";
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
  selectedScale: s,
  scaleOptions: l,
  onPreviousPage: d,
  onNextPage: p,
  onZoomIn: m,
  onZoomOut: v,
  onScaleChange: k,
  rotatable: P,
  onRotate: g,
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
      className: ae(
        "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ y("div", { className: q, children: [
          i ? /* @__PURE__ */ y(
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
          ) : null,
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
              onClick: p,
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
              onClick: m,
              icon: _e
            }
          ),
          /* @__PURE__ */ t(
            Ne,
            {
              hideLabel: !0,
              label: c.scaleSelector,
              options: l,
              value: s,
              onChange: (b) => k(b)
            }
          )
        ] }),
        /* @__PURE__ */ y("div", { className: q, children: [
          P ? /* @__PURE__ */ t(
            R,
            {
              label: c.rotate,
              onClick: g,
              icon: Ce
            }
          ) : null,
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
  if (!o)
    return;
  const a = URL.createObjectURL(await re(o)), e = document.createElement("iframe");
  e.style.display = "none", e.src = a, e.onload = () => {
    e.focus(), e.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(a), e.remove();
    };
    e.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(e);
}, ze = async (o, a) => {
  if (!o)
    return;
  const e = URL.createObjectURL(await re(o)), i = document.createElement("a");
  i.href = e, i.download = a.length > 0 ? a : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(e);
}, at = async (o, a, e = !0) => {
  let i = o, s;
  try {
    const d = await fetch(o, {
      credentials: e ? "include" : "same-origin"
    });
    if (!d.ok)
      throw new Error(`${d.status}`);
    s = URL.createObjectURL(await d.blob()), i = s;
  } catch {
  }
  const l = document.createElement("a");
  l.href = i, l.download = a ?? "", l.rel = "noreferrer", s || (l.target = "_blank"), document.body.appendChild(l), l.click(), l.remove(), s && URL.revokeObjectURL(s);
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
  let i = null, s = 0;
  return a.forEach((l, d) => {
    if (!l)
      return;
    const p = l.offsetHeight, m = l.offsetTop, v = m + p, k = o.offsetHeight - e, P = o.scrollTop + e, g = P + k;
    if (!(P < v && g > m))
      return;
    let x;
    if (P <= m)
      x = g > v ? p : g - m;
    else {
      let h = P - m;
      g < v && (h += v - g), x = p - h;
    }
    x > s && (s = x, i = d + 1);
  }), i;
};
Ee();
const qe = J(() => import("./SheetViewer-BIt3u2dd.js")), Ge = J(() => import("./DocxViewer-mqbSGgqw.js")), Ze = J(() => import("./TextViewer-NSYPWz7J.js")), oe = 48, le = ne(
  (o, a) => {
    const { kind: e = "pdf", mimeType: i, ...s } = o;
    if (e === "pdf")
      return /* @__PURE__ */ t(se, { ref: a, ...s });
    const {
      url: l,
      filename: d,
      actions: p,
      withCredentials: m = !0,
      page: v,
      pagesToDisplay: k,
      initialScale: P,
      rotatable: g,
      initialRotation: H,
      onRotationChange: x,
      onPdfLoaded: h,
      onPageChange: c,
      ...b
    } = s;
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
              e === "sheet" ? /* @__PURE__ */ t(
                qe,
                {
                  url: l,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ) : null,
              e === "docx" ? /* @__PURE__ */ t(
                Ge,
                {
                  url: l,
                  filename: d,
                  withCredentials: m,
                  actions: p
                }
              ) : null,
              e === "text" ? /* @__PURE__ */ t(
                Ze,
                {
                  url: l,
                  name: d ?? "",
                  mimeType: i,
                  withCredentials: m,
                  actions: p
                }
              ) : null
            ]
          }
        )
      }
    );
  }
);
le.displayName = "F0PdfViewer";
const se = ne((o, a) => {
  const {
    url: e,
    filename: i = "document.pdf",
    page: s = 0,
    pagesToDisplay: l = [],
    initialScale: d = "page-width",
    withCredentials: p = !0,
    rotatable: m = !1,
    initialRotation: v = 0,
    onRotationChange: k,
    onPdfLoaded: P,
    onPageChange: g,
    actions: H,
    ...x
  } = o, { pdfViewer: h } = Z(), [c, b] = V(null), [_, K] = V([]), [N, z] = V(1), [S, Q] = V(0), [U, M] = V(d), [E, ce] = V(v), I = A(null), j = A(null), D = A([]), W = l.length > 0 ? l.length : c?.numPages, X = _.find(Boolean), Y = (X?.originalWidth ?? 595) * N, ee = (X?.originalHeight ?? 842) * N, de = te(
    () => [
      { value: "page-width", label: h.pageWidth },
      { value: "page-fit", label: h.pageFit },
      ...G.map((n) => ({
        value: n,
        label: `${Number(n) * 100}%`
      }))
    ],
    [h.pageWidth, h.pageFit]
  ), fe = te(() => ({ url: e, withCredentials: p }), [e, p]), F = w(
    (n) => {
      const r = (W ?? 1) - 1, f = Math.min(Math.max(n, 0), r), u = D.current[f], C = u?.offsetParent;
      u && C instanceof HTMLElement && (C.scrollTop = u.offsetTop - (j.current?.offsetHeight ?? 0) - 10);
    },
    [W]
  ), O = w(
    (n) => {
      const r = _[S - 1], f = I.current;
      if (!r || !f)
        return;
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
    if (n === void 0)
      return;
    z(n);
    const r = G.find((f) => Number(f) === n);
    r && M(r);
  }, []), me = w(
    () => $(Me(N)),
    [N, $]
  ), pe = w(
    () => $(Ie(N)),
    [N, $]
  ), ge = w(() => {
    ce((n) => {
      const r = (n + 90) % 360;
      return k?.(r), r;
    });
  }, [k]), he = w(
    (n) => {
      b(n), P?.(n), setTimeout(() => {
        Q(s + 1), F(s);
      }, 0);
    },
    [P, s, F]
  ), be = w((n) => {
    const r = n.target;
    if (!(r instanceof HTMLElement))
      return;
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
    F(s);
  }, [s, F]), T(() => {
    S > 0 && g?.(S);
  }, [S, g]), T(() => {
    _.length > 0 && (d === "page-width" || d === "page-fit") && O(d);
  }, [_.length, d]), T(() => {
    (U === "page-width" || U === "page-fit") && O(U);
  }, [E]), T(() => {
    const n = I.current;
    if (!n)
      return;
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
                onZoomIn: me,
                onZoomOut: pe,
                onScaleChange: ue,
                rotatable: m,
                onRotate: ge,
                onPrint: we,
                onDownload: Pe,
                actions: H
              }
            ),
            e ? /* @__PURE__ */ t(
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
                children: c ? Array.from({ length: W ?? 0 }).map((n, r) => {
                  const f = (l.length > 0 ? l[r] : r) + 1;
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
                }) : null
              }
            ) : null
          ]
        }
      )
    }
  );
});
se.displayName = "PdfViewerBase";
const Je = () => {
  const { pdfViewer: o } = Z();
  return /* @__PURE__ */ y(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "aria-label": o.loading,
      className: ae(
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
    Te(le, Je)
  )
), rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: Qe,
  configurePdfWorker: De,
  pdfScales: Ke
}, Symbol.toStringTag, { value: "Module" }));
export {
  Qe as F,
  R as T,
  Ie as a,
  at as d,
  G as f,
  rt as i,
  Me as n,
  Ke as p
};
