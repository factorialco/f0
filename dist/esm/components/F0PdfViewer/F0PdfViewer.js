"use client";
import { useI18n as e } from "../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as t } from "../../ui/skeleton.js";
import { Document as n, Page as r } from "../../ui/pdf.js";
import { PdfLoadingState as i } from "./components/PdfLoadingState.js";
import { PdfToolbar as a } from "./components/PdfToolbar.js";
import '../../_embedded/B4yt-mOB.css';/* empty css                   */
import { downloadPdf as o, printPdf as s } from "./pdfActions.js";
import { ensurePdfWorker as c } from "./pdfWorker.js";
import { fixedScales as l, nextScaleDown as u, nextScaleUp as d } from "./scales.js";
import { calculateVisiblePage as f } from "./visiblePage.js";
import { Suspense as p, forwardRef as m, lazy as h, useCallback as g, useEffect as _, useMemo as v, useRef as y, useState as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/F0PdfViewer/F0PdfViewer.tsx
c();
var C = h(() => import("./components/SheetViewer.js")), w = h(() => import("./components/DocxViewer.js")), T = h(() => import("./components/TextViewer.js")), E = 48, D = m((e, n) => {
	let { kind: r = "pdf", mimeType: i, ...a } = e;
	if (r === "pdf") return /* @__PURE__ */ x(O, {
		ref: n,
		...a
	});
	let { url: o, filename: s, actions: c, withCredentials: l = !0, page: u, pagesToDisplay: d, initialScale: f, rotatable: m, initialRotation: h, onRotationChange: g, onPdfLoaded: _, onPageChange: v, ...y } = a;
	return /* @__PURE__ */ x("div", {
		ref: n,
		...y,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ S(p, {
			fallback: /* @__PURE__ */ x(t, { className: "h-full w-full rounded-none" }),
			children: [
				r === "sheet" && /* @__PURE__ */ x(C, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				r === "docx" && /* @__PURE__ */ x(w, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				r === "text" && /* @__PURE__ */ x(T, {
					url: o,
					name: s ?? "",
					mimeType: i,
					withCredentials: l,
					actions: c
				})
			]
		})
	});
});
D.displayName = "F0PdfViewer";
var O = m((c, p) => {
	let { url: m, filename: h = "document.pdf", page: C = 0, pagesToDisplay: w = [], initialScale: T = "page-width", withCredentials: D = !0, rotatable: O = !1, initialRotation: ee = 0, onRotationChange: k, onPdfLoaded: A, onPageChange: j, actions: te, ...ne } = c, { pdfViewer: M } = e(), [N, P] = b(null), [F, I] = b([]), [L, R] = b(1), [z, B] = b(0), [V, H] = b(T), [U, re] = b(ee), W = y(null), G = y(null), K = y([]), q = w.length > 0 ? w.length : N?.numPages, J = F.find(Boolean), Y = (J?.originalWidth ?? 595) * L, X = (J?.originalHeight ?? 842) * L, ie = v(() => [
		{
			value: "page-width",
			label: M.pageWidth
		},
		{
			value: "page-fit",
			label: M.pageFit
		},
		...l.map((e) => ({
			value: e,
			label: `${Number(e) * 100}%`
		}))
	], [M.pageWidth, M.pageFit]), ae = v(() => ({
		url: m,
		withCredentials: D
	}), [m, D]), Z = g((e) => {
		let t = (q ?? 1) - 1, n = Math.min(Math.max(e, 0), t), r = K.current[n], i = r?.offsetParent;
		r && i instanceof HTMLElement && (i.scrollTop = r.offsetTop - (G.current?.offsetHeight ?? 0) - 10);
	}, [q]), Q = g((e) => {
		let t = F[z - 1], n = W.current;
		if (!t || !n) return;
		let r = G.current?.offsetHeight ?? 0, i = U === 90 || U === 270, a = i ? t.originalHeight : t.originalWidth, o = i ? t.originalWidth : t.originalHeight, s = e === "page-width" ? (n.clientWidth - E) / a : (n.clientHeight - r - E) / o;
		R(s), H(e);
	}, [
		F,
		z,
		U
	]), oe = g((e) => {
		if (e === "page-width" || e === "page-fit") {
			Q(e);
			return;
		}
		R(Number(e)), H(e);
	}, [Q]), $ = g((e) => {
		if (e === void 0) return;
		R(e);
		let t = l.find((t) => Number(t) === e);
		t && H(t);
	}, []), se = g(() => $(d(L)), [L, $]), ce = g(() => $(u(L)), [L, $]), le = g(() => {
		re((e) => {
			let t = (e + 90) % 360;
			return k?.(t), t;
		});
	}, [k]), ue = g((e) => {
		P(e), A?.(e), setTimeout(() => {
			B(C + 1), Z(C);
		}, 0);
	}, [
		A,
		C,
		Z
	]), de = g((e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement)) return;
		let n = f(t, K.current, G.current?.offsetHeight ?? 0);
		n && B(n);
	}, []), fe = g(() => {
		s(N);
	}, [N]), pe = g(() => {
		o(N, h);
	}, [N, h]);
	return _(() => {
		P(null), I([]), K.current = [];
	}, [m]), _(() => {
		Z(C);
	}, [C, Z]), _(() => {
		z > 0 && j?.(z);
	}, [z, j]), _(() => {
		F.length > 0 && (T === "page-width" || T === "page-fit") && Q(T);
	}, [F.length, T]), _(() => {
		(V === "page-width" || V === "page-fit") && Q(V);
	}, [U]), _(() => {
		let e = W.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target;
			t instanceof HTMLAnchorElement && (t.target = "_blank", t.rel = "noopener noreferrer");
		};
		return e.addEventListener("click", t, !0), () => e.removeEventListener("click", t, !0);
	}, []), /* @__PURE__ */ x("div", {
		ref: p,
		...ne,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ S("div", {
			ref: W,
			onScroll: de,
			className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
			children: [/* @__PURE__ */ x(a, {
				toolbarRef: G,
				currentPage: z,
				totalPages: q,
				hasDocument: !!N?.numPages,
				selectedScale: V,
				scaleOptions: ie,
				onPreviousPage: () => Z(z - 2),
				onNextPage: () => Z(z),
				onZoomIn: se,
				onZoomOut: ce,
				onScaleChange: oe,
				rotatable: O,
				onRotate: le,
				onPrint: fe,
				onDownload: pe,
				actions: te
			}), m && /* @__PURE__ */ x(n, {
				file: ae,
				onLoadSuccess: ue,
				loading: /* @__PURE__ */ x(i, {
					label: M.loading,
					width: Y,
					height: X
				}),
				children: N && Array.from({ length: q ?? 0 }).map((e, n) => {
					let i = (w.length > 0 ? w[n] : n) + 1;
					return /* @__PURE__ */ x("div", {
						className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
						children: /* @__PURE__ */ x(r, {
							className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
							pageNumber: i,
							scale: L,
							rotate: U,
							loading: /* @__PURE__ */ x(t, { style: {
								width: Y,
								height: X
							} }),
							renderForms: !0,
							renderTextLayer: !0,
							inputRef: (e) => {
								K.current[n] = e;
							},
							onLoadSuccess: (e) => {
								I((t) => {
									let r = [...t];
									return r[n] = {
										originalWidth: e.originalWidth,
										originalHeight: e.originalHeight
									}, r;
								});
							}
						})
					}, n);
				})
			})]
		})
	});
});
O.displayName = "PdfViewerBase";
//#endregion
export { D as F0PdfViewerBase };
