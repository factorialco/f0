import { S as C, m as Re, u as G, n as re, o as Se, q as _e, i as ke, j as Ne, k as Ce, r as Le, l as Fe, w as Ve, s as Te, t as Ee } from "./F0CanvasPanel-DvAledR4.js";
import { jsx as o, jsxs as R } from "react/jsx-runtime";
import { lazy as Z, forwardRef as ae, Suspense as He, useState as V, useRef as j, useMemo as oe, useCallback as P, useEffect as T, useLayoutEffect as Ue } from "react";
import { e as je, D as De, P as Oe, c as We } from "./pdfWorker-CqQpWr5o.js";
import { F as $e } from "./Printer-B7iDPx2r.js";
import './index.css';const Be = ({
  label: n,
  width: a,
  height: t
}) => /* @__PURE__ */ o(
  "div",
  {
    role: "status",
    "aria-label": n,
    "aria-live": "polite",
    "aria-busy": !0,
    className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
    children: /* @__PURE__ */ o(
      C,
      {
        style: { width: a, height: t },
        className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
      }
    )
  }
), _ = ({
  label: n,
  icon: a,
  onClick: t,
  size: i = "md"
}) => /* @__PURE__ */ o(
  Re,
  {
    label: n,
    icon: a,
    onClick: t,
    hideLabel: !0,
    variant: "outline",
    size: i
  }
), A = "flex flex-row items-center gap-2", ze = ({
  toolbarRef: n,
  currentPage: a,
  totalPages: t,
  hasDocument: i,
  selectedScale: c,
  scaleOptions: s,
  onPreviousPage: f,
  onNextPage: g,
  onZoomIn: m,
  onZoomOut: v,
  onScaleChange: k,
  rotatable: y,
  onRotate: h,
  onPrint: E,
  onDownload: x,
  actions: b
}) => {
  const { pdfViewer: d } = G();
  return /* @__PURE__ */ R(
    "div",
    {
      ref: n,
      role: "toolbar",
      "aria-label": d.toolbar,
      className: re(
        "F0PdfViewer__surface flex flex-row items-center justify-between gap-2",
        "px-6 py-4"
      ),
      children: [
        /* @__PURE__ */ R("div", { className: A, children: [
          i && /* @__PURE__ */ R(
            "span",
            {
              "aria-live": "polite",
              className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
              children: [
                a,
                " / ",
                t
              ]
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: d.previousPage,
              onClick: f,
              icon: Se,
              size: "sm"
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: d.nextPage,
              onClick: g,
              icon: _e,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: A, children: [
          /* @__PURE__ */ o(
            _,
            {
              label: d.zoomOut,
              onClick: v,
              icon: ke
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: d.zoomIn,
              onClick: m,
              icon: Ne
            }
          ),
          /* @__PURE__ */ o(
            Ce,
            {
              hideLabel: !0,
              label: d.scaleSelector,
              options: s,
              value: c,
              onChange: (w) => k(w)
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: A, children: [
          y && /* @__PURE__ */ o(
            _,
            {
              label: d.rotate,
              onClick: h,
              icon: Le
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: d.print,
              onClick: E,
              icon: $e
            }
          ),
          /* @__PURE__ */ o(
            _,
            {
              label: d.download,
              onClick: x,
              icon: Fe
            }
          ),
          b?.map((w, N) => /* @__PURE__ */ o(
            _,
            {
              label: w.label,
              onClick: w.onClick,
              icon: w.icon
            },
            `${w.label}-${N}`
          ))
        ] })
      ]
    }
  );
}, ie = async (n) => {
  const a = await n.saveDocument();
  return new Blob([new Uint8Array(a)], { type: "application/pdf" });
}, Me = async (n) => {
  if (!n) return;
  const a = URL.createObjectURL(await ie(n)), t = document.createElement("iframe");
  t.style.display = "none", t.src = a, t.onload = () => {
    t.focus(), t.contentWindow?.print();
    const i = () => {
      URL.revokeObjectURL(a), t.remove();
    };
    t.contentWindow?.addEventListener("afterprint", i), setTimeout(i, 6e4);
  }, document.body.appendChild(t);
}, Ie = async (n, a) => {
  if (!n) return;
  const t = URL.createObjectURL(await ie(n)), i = document.createElement("a");
  i.href = t, i.download = a.length > 0 ? a : "document.pdf", document.body.appendChild(i), i.click(), i.remove(), URL.revokeObjectURL(t);
}, at = async (n, a, t = !0) => {
  let i = n, c;
  try {
    const f = await fetch(n, {
      credentials: t ? "include" : "same-origin"
    });
    if (!f.ok) throw new Error(`${f.status}`);
    c = URL.createObjectURL(await f.blob()), i = c;
  } catch {
  }
  const s = document.createElement("a");
  s.href = i, s.download = a ?? "", s.rel = "noreferrer", c || (s.target = "_blank"), document.body.appendChild(s), s.click(), s.remove(), c && URL.revokeObjectURL(c);
}, q = [
  "0.5",
  "0.75",
  "1",
  "1.25",
  "1.5",
  "2",
  "3",
  "4"
], se = q.map(Number), Ae = (n) => se.find((a) => a > n), qe = (n) => [...se].reverse().find((a) => a < n), Ge = (n, a, t) => {
  let i = null, c = 0;
  return a.forEach((s, f) => {
    if (!s) return;
    const g = s.offsetHeight, m = s.offsetTop, v = m + g, k = n.offsetHeight - t, y = n.scrollTop + t, h = y + k;
    if (!(y < v && h > m)) return;
    let x;
    if (y <= m)
      x = h > v ? g : h - m;
    else {
      let b = y - m;
      h < v && (b += v - h), x = g - b;
    }
    x > c && (c = x, i = f + 1);
  }), i;
};
je();
const Ze = Z(() => import("./SheetViewer-DJyUTz71.js")), Je = Z(() => import("./DocxViewer-DuMBO3ab.js")), Ke = Z(() => import("./TextViewer-BaVJY_Gu.js")), ne = 48, le = ae(
  (n, a) => {
    const { kind: t = "pdf", mimeType: i, ...c } = n;
    if (t === "pdf") return /* @__PURE__ */ o(ce, { ref: a, ...c });
    const {
      url: s,
      filename: f,
      actions: g,
      withCredentials: m = !0,
      page: v,
      pagesToDisplay: k,
      initialScale: y,
      rotatable: h,
      initialRotation: E,
      onRotationChange: x,
      onPdfLoaded: b,
      onPageChange: d,
      ...w
    } = c;
    return /* @__PURE__ */ o(
      "div",
      {
        ref: a,
        ...w,
        className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
        children: /* @__PURE__ */ R(
          He,
          {
            fallback: /* @__PURE__ */ o(C, { className: "h-full w-full rounded-none" }),
            children: [
              t === "sheet" && /* @__PURE__ */ o(
                Ze,
                {
                  url: s,
                  filename: f,
                  withCredentials: m,
                  actions: g
                }
              ),
              t === "docx" && /* @__PURE__ */ o(
                Je,
                {
                  url: s,
                  filename: f,
                  withCredentials: m,
                  actions: g
                }
              ),
              t === "text" && /* @__PURE__ */ o(
                Ke,
                {
                  url: s,
                  name: f ?? "",
                  mimeType: i,
                  withCredentials: m,
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
le.displayName = "F0PdfViewer";
const ce = ae((n, a) => {
  const {
    url: t,
    filename: i = "document.pdf",
    page: c = 0,
    pagesToDisplay: s = [],
    initialScale: f = "page-width",
    withCredentials: g = !0,
    rotatable: m = !1,
    initialRotation: v = 0,
    onRotationChange: k,
    onPdfLoaded: y,
    onPageChange: h,
    actions: E,
    ...x
  } = n, { pdfViewer: b } = G(), [d, w] = V(null), [N, J] = V([]), [p, z] = V(1), [S, K] = V(0), [D, M] = V(f), [H, de] = V(v), I = j(null), fe = j(null), U = j([]), Q = j(p), X = j(!1), O = s.length > 0 ? s.length : d?.numPages, Y = N.find(Boolean), ee = (Y?.originalWidth ?? 595) * p, te = (Y?.originalHeight ?? 842) * p, ue = oe(
    () => [
      { value: "page-width", label: b.pageWidth },
      { value: "page-fit", label: b.pageFit },
      ...q.map((e) => ({
        value: e,
        label: `${Number(e) * 100}%`
      }))
    ],
    [b.pageWidth, b.pageFit]
  ), me = oe(() => ({ url: t, withCredentials: g }), [t, g]), L = P(
    (e) => {
      const r = (O ?? 1) - 1, l = Math.min(Math.max(e, 0), r), u = U.current[l], F = u?.offsetParent;
      u && F instanceof HTMLElement && (F.scrollTop = u.offsetTop - 10);
    },
    [O]
  ), W = P(
    (e) => {
      const r = N[S - 1], l = I.current;
      if (!r || !l) return;
      const u = H === 90 || H === 270, F = u ? r.originalHeight : r.originalWidth, B = u ? r.originalWidth : r.originalHeight, xe = e === "page-width" ? (l.clientWidth - ne) / F : (l.clientHeight - ne) / B;
      z(xe), M(e);
    },
    [N, S, H]
  ), pe = P(
    (e) => {
      if (e === "page-width" || e === "page-fit") {
        W(e);
        return;
      }
      z(Number(e)), M(e);
    },
    [W]
  ), $ = P((e) => {
    if (e === void 0) return;
    z(e);
    const r = q.find((l) => Number(l) === e);
    r && M(r);
  }, []), ge = P(
    () => $(Ae(p)),
    [p, $]
  ), he = P(
    () => $(qe(p)),
    [p, $]
  ), be = P(() => {
    de((e) => {
      const r = (e + 90) % 360;
      return k?.(r), r;
    });
  }, [k]), we = P(
    (e) => {
      w(e), y?.(e), setTimeout(() => {
        K(c + 1), L(c);
      }, 0);
    },
    [y, c, L]
  ), Pe = P((e) => {
    const r = e.target;
    if (!(r instanceof HTMLElement)) return;
    const l = Ge(r, U.current, 0);
    l && K(l);
  }, []), ye = P(() => {
    Me(d);
  }, [d]), ve = P(() => {
    Ie(d, i);
  }, [d, i]);
  return T(() => {
    w(null), J([]), U.current = [];
  }, [t]), T(() => {
    L(c);
  }, [c, L]), T(() => {
    S > 0 && h?.(S);
  }, [S, h]), T(() => {
    N.length > 0 && (f === "page-width" || f === "page-fit") && W(f);
  }, [N.length, f]), T(() => {
    (D === "page-width" || D === "page-fit") && W(D);
  }, [H]), T(() => {
    const e = I.current;
    if (!e) return;
    const r = (l) => {
      const u = l.target;
      u instanceof HTMLAnchorElement && (u.target = "_blank", u.rel = "noopener noreferrer");
    };
    return e.addEventListener("click", r, !0), () => e.removeEventListener("click", r, !0);
  }, []), Ue(() => {
    const e = Q.current;
    if (Q.current = p, !X.current) {
      X.current = !0;
      return;
    }
    if (e <= 0 || p <= 0 || e === p) return;
    const r = e / p;
    U.current.forEach((l) => {
      l && (l.style.transformOrigin = "top center", l.style.transition = "none", l.style.transform = `scale(${r})`, l.getBoundingClientRect(), l.style.transition = "transform 200ms cubic-bezier(0.2, 0, 0, 1)", l.style.transform = "scale(1)");
    });
  }, [p]), /* @__PURE__ */ R(
    "div",
    {
      ref: a,
      ...x,
      className: "F0PdfViewer__surface relative flex h-full w-full min-w-0 flex-col overflow-hidden border border-solid border-f1-border-secondary",
      children: [
        /* @__PURE__ */ o(
          ze,
          {
            toolbarRef: fe,
            currentPage: S,
            totalPages: O,
            hasDocument: !!d?.numPages,
            selectedScale: D,
            scaleOptions: ue,
            onPreviousPage: () => L(S - 2),
            onNextPage: () => L(S),
            onZoomIn: ge,
            onZoomOut: he,
            onScaleChange: pe,
            rotatable: m,
            onRotate: be,
            onPrint: ye,
            onDownload: ve,
            actions: E
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            ref: I,
            onScroll: Pe,
            className: "F0PdfViewer__surface relative flex min-h-0 min-w-0 flex-1 flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
            children: t && /* @__PURE__ */ o(
              De,
              {
                file: me,
                onLoadSuccess: we,
                loading: /* @__PURE__ */ o(
                  Be,
                  {
                    label: b.loading,
                    width: ee,
                    height: te
                  }
                ),
                children: d && Array.from({ length: O ?? 0 }).map((e, r) => {
                  const l = (s.length > 0 ? s[r] : r) + 1;
                  return /* @__PURE__ */ o(
                    "div",
                    {
                      className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
                      children: /* @__PURE__ */ o(
                        Oe,
                        {
                          className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
                          pageNumber: l,
                          scale: p,
                          rotate: H,
                          loading: /* @__PURE__ */ o(
                            C,
                            {
                              style: {
                                width: ee,
                                height: te
                              }
                            }
                          ),
                          renderForms: !0,
                          renderTextLayer: !0,
                          inputRef: (u) => {
                            U.current[r] = u;
                          },
                          onLoadSuccess: (u) => {
                            J((F) => {
                              const B = [...F];
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
          }
        )
      ]
    }
  );
});
ce.displayName = "PdfViewerBase";
const Qe = () => {
  const { pdfViewer: n } = G();
  return /* @__PURE__ */ R(
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
        /* @__PURE__ */ R("div", { className: "flex flex-row items-center justify-between gap-2 px-6 py-4", children: [
          /* @__PURE__ */ o(C, { className: "h-8 w-24 rounded-md" }),
          /* @__PURE__ */ o(C, { className: "h-8 w-40 rounded-md" }),
          /* @__PURE__ */ o(C, { className: "h-8 w-20 rounded-md" })
        ] }),
        /* @__PURE__ */ o("div", { className: "flex flex-1 justify-center p-4", children: /* @__PURE__ */ o(C, { className: "h-full w-full max-w-[600px] rounded-md" }) })
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
], Ye = Ve(
  Te(
    "F0PdfViewer",
    Ee(le, Qe)
  )
), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  F0PdfViewer: Ye,
  configurePdfWorker: We,
  pdfScales: Xe
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ye as F,
  _ as T,
  qe as a,
  at as d,
  q as f,
  it as i,
  Ae as n,
  Xe as p
};
