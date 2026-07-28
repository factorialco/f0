import { S as H, m as He, u as te, n as Ee, o as Ue, i as We, j as je, k as De, q as Oe, l as ze, r as $e, w as Me, s as Be, t as Ie } from "./F0CanvasPanel-BUkMDRtW.js";
import { jsx as t, jsxs as R } from "react/jsx-runtime";
import { lazy as oe, forwardRef as ce, Suspense as Ae, useState as T, useRef as q, useMemo as se, useCallback as P, useEffect as V } from "react";
import { e as qe, D as Ge, P as Ze, c as Je } from "./pdfWorker-DvOO0C4X.js";
import { F as Ke } from "./Printer-B7iDPx2r.js";
import { d as de } from "./tooltip-BH6Se8A4.js";
import './index.css';const Qe = ({
  label: n,
  width: r,
  height: e
}) => /* @__PURE__ */ t(
  "div",
  {
    role: "status",
    "aria-label": n,
    "aria-live": "polite",
    "aria-busy": !0,
    className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
    children: /* @__PURE__ */ t(
      H,
      {
        style: { width: r, height: e },
        className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
      }
    )
  }
), _ = ({
  label: n,
  icon: r,
  onClick: e,
  size: i = "md"
}) => /* @__PURE__ */ t(
  He,
  {
    label: n,
    icon: r,
    onClick: e,
    hideLabel: !0,
    variant: "outline",
    size: i
  }
), Y = "flex flex-row items-center gap-2", Xe = ({
  toolbarRef: n,
  currentPage: r,
  totalPages: e,
  hasDocument: i,
  selectedScale: l,
  scaleOptions: s,
  onPreviousPage: d,
  onNextPage: g,
  onZoomIn: u,
  onZoomOut: y,
  onScaleChange: F,
  rotatable: v,
  onRotate: p,
  onPrint: W,
  onDownload: x,
  actions: b
}) => {
  const { pdfViewer: c } = te();
  return /* @__PURE__ */ R(
    "div",
    {
      ref: n,
      role: "toolbar",
      "aria-label": c.toolbar,
      className: de(
        "F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ R("div", { className: Y, children: [
          i && /* @__PURE__ */ R(
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
          /* @__PURE__ */ t(
            _,
            {
              label: c.previousPage,
              onClick: d,
              icon: Ee,
              size: "sm"
            }
          ),
          /* @__PURE__ */ t(
            _,
            {
              label: c.nextPage,
              onClick: g,
              icon: Ue,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: Y, children: [
          /* @__PURE__ */ t(
            _,
            {
              label: c.zoomOut,
              onClick: y,
              icon: We
            }
          ),
          /* @__PURE__ */ t(
            _,
            {
              label: c.zoomIn,
              onClick: u,
              icon: je
            }
          ),
          /* @__PURE__ */ t(
            De,
            {
              hideLabel: !0,
              label: c.scaleSelector,
              options: s,
              value: l,
              onChange: (w) => F(w)
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: Y, children: [
          v && /* @__PURE__ */ t(
            _,
            {
              label: c.rotate,
              onClick: p,
              icon: Oe
            }
          ),
          /* @__PURE__ */ t(
            _,
            {
              label: c.print,
              onClick: W,
              icon: Ke
            }
          ),
          /* @__PURE__ */ t(
            _,
            {
              label: c.download,
              onClick: x,
              icon: ze
            }
          ),
          b?.map((w, S) => /* @__PURE__ */ t(
            _,
            {
              label: w.label,
              onClick: w.onClick,
              icon: w.icon
            },
            `${w.label}-${S}`
          ))
        ] })
      ]
    }
  );
}, fe = async (n) => {
  const r = await n.saveDocument();
  return new Blob([new Uint8Array(r)], { type: "application/pdf" });
}, Ye = async (n) => {
  if (!n) return;
  const r = URL.createObjectURL(await fe(n)), e = document.createElement("iframe");
  e.style.display = "none", e.src = r, e.onload = () => {
    e.focus(), e.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(r), e.remove();
    };
    e.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(e);
}, et = async (n, r) => {
  if (!n) return;
  const e = URL.createObjectURL(await fe(n)), i = document.createElement("a");
  i.href = e, i.download = r.length > 0 ? r : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(e);
}, pt = async (n, r, e = !0) => {
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
}, ee = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4"
], ue = ee.map(Number), tt = (n) => ue.find((r) => r > n), ot = (n) => [...ue].reverse().find((r) => r < n), nt = (n, r, e) => {
  let i = null, l = 0;
  return r.forEach((s, d) => {
    if (!s) return;
    const g = s.offsetHeight, u = s.offsetTop, y = u + g, F = n.offsetHeight - e, v = n.scrollTop + e, p = v + F;
    if (!(v < y && p > u)) return;
    let x;
    if (v <= u)
      x = p > y ? g : p - u;
    else {
      let b = v - u;
      p < y && (b += y - p), x = g - b;
    }
    x > l && (l = x, i = d + 1);
  }), i;
};
qe();
const rt = oe(() => import("./SheetViewer-3dqO1ks3.js")), at = oe(() => import("./DocxViewer-D2jQitYM.js")), it = oe(() => import("./TextViewer-BW_9CBZr.js")), le = 48, me = ce(
  (n, r) => {
    const { kind: e = "pdf", mimeType: i, ...l } = n;
    if (e === "pdf") return /* @__PURE__ */ t(ge, { ref: r, ...l });
    const {
      url: s,
      filename: d,
      actions: g,
      withCredentials: u = !0,
      page: y,
      pagesToDisplay: F,
      initialScale: v,
      rotatable: p,
      initialRotation: W,
      onRotationChange: x,
      onPdfLoaded: b,
      onPageChange: c,
      ...w
    } = l;
    return /* @__PURE__ */ t(
      "div",
      {
        ref: r,
        ...w,
        className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
        children: /* @__PURE__ */ R(
          Ae,
          {
            fallback: /* @__PURE__ */ t(H, { className: "h-full w-full rounded-none" }),
            children: [
              e === "sheet" && /* @__PURE__ */ t(
                rt,
                {
                  url: s,
                  filename: d,
                  withCredentials: u,
                  actions: g
                }
              ),
              e === "docx" && /* @__PURE__ */ t(
                at,
                {
                  url: s,
                  filename: d,
                  withCredentials: u,
                  actions: g
                }
              ),
              e === "text" && /* @__PURE__ */ t(
                it,
                {
                  url: s,
                  name: d ?? "",
                  mimeType: i,
                  withCredentials: u,
                  actions: g
                }
              )
            ]
          }
        )
      }
    );
  }
);
me.displayName = "F0PdfViewer";
const ge = ce((n, r) => {
  const {
    url: e,
    filename: i = "document.pdf",
    page: l = 0,
    pagesToDisplay: s = [],
    initialScale: d = "page-width",
    withCredentials: g = !0,
    rotatable: u = !1,
    initialRotation: y = 0,
    onRotationChange: F,
    onPdfLoaded: v,
    onPageChange: p,
    actions: W,
    ...x
  } = n, { pdfViewer: b } = te(), [c, w] = T(null), [S, ne] = T([]), [m, G] = T(1), [C, he] = T(1), [k, re] = T(0), [j, Z] = T(d), [L, pe] = T(y), J = q(null), D = q(null), O = q([]), K = q(!1), be = $e(), z = s.length > 0 ? s.length : c?.numPages, Q = S.find(Boolean), we = (Q?.originalWidth ?? 595) * m, Pe = (Q?.originalHeight ?? 842) * m, ve = se(
    () => [
      { value: "page-width", label: b.pageWidth },
      { value: "page-fit", label: b.pageFit },
      ...ee.map((o) => ({
        value: o,
        label: `${Number(o) * 100}%`
      }))
    ],
    [b.pageWidth, b.pageFit]
  ), ye = se(() => ({ url: e, withCredentials: g }), [e, g]), E = P(
    (o) => {
      const a = (z ?? 1) - 1, f = Math.min(Math.max(o, 0), a), h = O.current[f], N = h?.offsetParent;
      h && N instanceof HTMLElement && (N.scrollTop = h.offsetTop - (D.current?.offsetHeight ?? 0) - 10);
    },
    [z]
  ), $ = P(
    (o) => {
      const a = S[k - 1], f = J.current;
      if (!a || !f) return;
      const h = D.current?.offsetHeight ?? 0, N = L === 90 || L === 270, B = N ? a.originalHeight : a.originalWidth, I = N ? a.originalWidth : a.originalHeight, U = o === "page-width" ? (f.clientWidth - le) / B : (f.clientHeight - h - le) / I;
      !Number.isFinite(U) || U <= 0 || (G(U), Z(o));
    },
    [S, k, L]
  ), xe = P(
    (o) => {
      if (K.current = !0, o === "page-width" || o === "page-fit") {
        $(o);
        return;
      }
      G(Number(o)), Z(o);
    },
    [$]
  ), M = P((o) => {
    if (o === void 0) return;
    K.current = !0, G(o);
    const a = ee.find((f) => Number(f) === o);
    a && Z(a);
  }, []), Re = P(
    () => M(tt(m)),
    [m, M]
  ), Se = P(
    () => M(ot(m)),
    [m, M]
  ), ke = P(() => {
    pe((o) => {
      const a = (o + 90) % 360;
      return F?.(a), a;
    });
  }, [F]), Ne = P(
    (o) => {
      w(o), v?.(o), setTimeout(() => {
        re(l + 1), E(l);
      }, 0);
    },
    [v, l, E]
  ), _e = P((o) => {
    const a = o.target;
    if (!(a instanceof HTMLElement)) return;
    const f = nt(
      a,
      O.current,
      D.current?.offsetHeight ?? 0
    );
    f && re(f);
  }, []), Fe = P(() => {
    Ye(c);
  }, [c]), Ce = P(() => {
    et(c, i);
  }, [c, i]);
  V(() => {
    w(null), ne([]), O.current = [];
  }, [e]), V(() => {
    E(l);
  }, [l, E]), V(() => {
    k > 0 && p?.(k);
  }, [k, p]), V(() => {
    S.length > 0 && (d === "page-width" || d === "page-fit") && $(d);
  }, [S.length, d]), V(() => {
    (j === "page-width" || j === "page-fit") && $(j);
  }, [L]), V(() => {
    const o = J.current;
    if (!o) return;
    const a = (f) => {
      const h = f.target;
      h instanceof HTMLAnchorElement && (h.target = "_blank", h.rel = "noopener noreferrer");
    };
    return o.addEventListener("click", a, !0), () => o.removeEventListener("click", a, !0);
  }, []), V(() => {
    if (C === m) return;
    const o = setTimeout(() => he(m), 200);
    return () => clearTimeout(o);
  }, [m, C]);
  const X = m / C, Le = Number.isFinite(X) && X > 0 ? X : 1, Te = K.current && C !== m && !be;
  return /* @__PURE__ */ t(
    "div",
    {
      ref: r,
      ...x,
      className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
      children: /* @__PURE__ */ R(
        "div",
        {
          ref: J,
          onScroll: _e,
          className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
          children: [
            /* @__PURE__ */ t(
              Xe,
              {
                toolbarRef: D,
                currentPage: k,
                totalPages: z,
                hasDocument: !!c?.numPages,
                selectedScale: j,
                scaleOptions: ve,
                onPreviousPage: () => E(k - 2),
                onNextPage: () => E(k),
                onZoomIn: Re,
                onZoomOut: Se,
                onScaleChange: xe,
                rotatable: u,
                onRotate: ke,
                onPrint: Fe,
                onDownload: Ce,
                actions: W
              }
            ),
            e && /* @__PURE__ */ t(
              Ge,
              {
                file: ye,
                onLoadSuccess: Ne,
                loading: /* @__PURE__ */ t(
                  Qe,
                  {
                    label: b.loading,
                    width: we,
                    height: Pe
                  }
                ),
                children: c && Array.from({ length: z ?? 0 }).map((o, a) => {
                  const f = (s.length > 0 ? s[a] : a) + 1, h = S[a] ?? Q, N = h?.originalWidth ?? 595, B = h?.originalHeight ?? 842, I = L === 90 || L === 270, U = I ? B : N, ae = I ? N : B;
                  return /* @__PURE__ */ t(
                    "div",
                    {
                      className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
                      children: /* @__PURE__ */ t(
                        "div",
                        {
                          ref: (A) => {
                            O.current[a] = A;
                          },
                          className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
                          style: {
                            width: U * m,
                            height: ae * m
                          },
                          children: /* @__PURE__ */ t(
                            "div",
                            {
                              style: {
                                transformOrigin: "top left",
                                transform: `scale(${Le})`,
                                transition: Te ? "transform 180ms cubic-bezier(0.2, 0, 0, 1)" : "none"
                              },
                              children: /* @__PURE__ */ t(
                                Ze,
                                {
                                  pageNumber: f,
                                  scale: C,
                                  rotate: L,
                                  loading: /* @__PURE__ */ t(
                                    H,
                                    {
                                      style: {
                                        width: U * C,
                                        height: ae * C
                                      }
                                    }
                                  ),
                                  renderForms: !0,
                                  renderTextLayer: !0,
                                  onLoadSuccess: (A) => {
                                    ne((Ve) => {
                                      const ie = [...Ve];
                                      return ie[a] = {
                                        originalWidth: A.originalWidth,
                                        originalHeight: A.originalHeight
                                      }, ie;
                                    });
                                  }
                                }
                              )
                            }
                          )
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
ge.displayName = "PdfViewerBase";
const st = () => {
  const { pdfViewer: n } = te();
  return /* @__PURE__ */ R(
    "div",
    {
      role: "status",
      "aria-busy": "true",
      "aria-live": "polite",
      "aria-label": n.loading,
      className: de(
        "F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden",
        "border border-solid border-f1-border-secondary"
      ),
      children: [
        /* @__PURE__ */ R("div", { className: "flex flex-row items-center justify-between gap-2 px-6 py-4", children: [
          /* @__PURE__ */ t(H, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ t(H, { className: "h-8 w-40 rounded-md" }),
          /* @__PURE__ */ t(H, { className: "h-8 w-20 rounded-md" })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-1 justify-center p-4", children: /* @__PURE__ */ t(H, { className: "h-full w-full max-w-[600px] rounded-md" }) })
      ]
    }
  );
}, lt = [
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
], ct = Me(
  Be(
    "F0PdfViewer",
    Ie(me, st)
  )
), bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: ct,
  configurePdfWorker: Je,
  pdfScales: lt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ct as F,
  _ as T,
  ot as a,
  pt as d,
  ee as f,
  bt as i,
  tt as n,
  lt as p
};
