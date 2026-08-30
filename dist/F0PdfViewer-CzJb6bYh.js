import { r as e } from "./rolldown-runtime-CEFd7nDs.js";
import { n as t } from "./data-testid-0GIWgc6Q.js";
import { at as n, f as r } from "./variants-BhCxKzs5.js";
import { t as i } from "./utils-CVzxZnoI.js";
import { l as a } from "./F0Button-CYTXun0O.js";
import { Gt as o, t as s } from "./F0Select-_dXXh4fu.js";
import { gt as c, pt as l } from "./F0Checkbox-Bc_SibvL.js";
import { r as u } from "./internal-aLKQ467C.js";
import { t as d } from "./Download-Dvj6cfxp.js";
import { t as f } from "./Printer-snTHysV7.js";
import { t as p } from "./Reset-gUsyzwG8.js";
import { n as m } from "./skeleton-gsHEXIPQ.js";
import { i as ee, n as h, r as g, t as _ } from "./pdfWorker-CrMWSIlN.js";
import { a as v, n as y, o as b, r as x, s as S, t as C } from "./scales-DgyLbwNo.js";
import { pdfScales as w } from "./f0.js";
import { Suspense as T, forwardRef as E, lazy as D, useCallback as O, useEffect as k, useMemo as A, useRef as j, useState as M } from "react";
import { jsx as N, jsxs as P } from "react/jsx-runtime";
import './assets/F0PdfViewer-B4yt-mOB.css';//#region src/components/F0PdfViewer/components/PdfLoadingState.tsx
var te = ({ label: e, width: t, height: n }) => /* @__PURE__ */ N("div", {
	role: "status",
	"aria-label": e,
	"aria-live": "polite",
	"aria-busy": !0,
	className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
	children: /* @__PURE__ */ N(a, {
		style: {
			width: t,
			height: n
		},
		className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
	})
}), F = "flex flex-row items-center gap-2", ne = ({ toolbarRef: e, currentPage: t, totalPages: n, hasDocument: a, selectedScale: m, scaleOptions: ee, onPreviousPage: h, onNextPage: g, onZoomIn: _, onZoomOut: v, onScaleChange: y, rotatable: b, onRotate: x, onPrint: C, onDownload: w, actions: T }) => {
	let { pdfViewer: E } = r();
	return /* @__PURE__ */ P("div", {
		ref: e,
		role: "toolbar",
		"aria-label": E.toolbar,
		className: i("F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2", "px-6 py-4"),
		children: [
			/* @__PURE__ */ P("div", {
				className: F,
				children: [
					a && /* @__PURE__ */ P("span", {
						"aria-live": "polite",
						className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
						children: [
							t,
							" / ",
							n
						]
					}),
					/* @__PURE__ */ N(S, {
						label: E.previousPage,
						onClick: h,
						icon: u,
						size: "sm"
					}),
					/* @__PURE__ */ N(S, {
						label: E.nextPage,
						onClick: g,
						icon: c,
						size: "sm"
					})
				]
			}),
			/* @__PURE__ */ P("div", {
				className: F,
				children: [
					/* @__PURE__ */ N(S, {
						label: E.zoomOut,
						onClick: v,
						icon: l
					}),
					/* @__PURE__ */ N(S, {
						label: E.zoomIn,
						onClick: _,
						icon: o
					}),
					/* @__PURE__ */ N(s, {
						hideLabel: !0,
						label: E.scaleSelector,
						options: ee,
						value: m,
						onChange: (e) => y(e)
					})
				]
			}),
			/* @__PURE__ */ P("div", {
				className: F,
				children: [
					b && /* @__PURE__ */ N(S, {
						label: E.rotate,
						onClick: x,
						icon: p
					}),
					/* @__PURE__ */ N(S, {
						label: E.print,
						onClick: C,
						icon: f
					}),
					/* @__PURE__ */ N(S, {
						label: E.download,
						onClick: w,
						icon: d
					}),
					T?.map((e, t) => /* @__PURE__ */ N(S, {
						label: e.label,
						onClick: e.onClick,
						icon: e.icon
					}, `${e.label}-${t}`))
				]
			})
		]
	});
}, re = (e, t, n) => {
	let r = null, i = 0;
	return t.forEach((t, a) => {
		if (!t) return;
		let o = t.offsetHeight, s = t.offsetTop, c = s + o, l = e.offsetHeight - n, u = e.scrollTop + n, d = u + l;
		if (!(u < c && d > s)) return;
		let f;
		if (u <= s) f = d > c ? o : d - s;
		else {
			let e = u - s;
			d < c && (e += c - d), f = o - e;
		}
		f > i && (i = f, r = a + 1);
	}), r;
};
//#endregion
//#region src/components/F0PdfViewer/F0PdfViewer.tsx
h();
var I = D(() => import("./SheetViewer-B8qgT9eH.js")), L = D(() => import("./DocxViewer-GkxnUNiL.js")), R = D(() => import("./TextViewer-CqOGlEL-.js")), z = 48, B = E((e, t) => {
	let { kind: n = "pdf", mimeType: r, ...i } = e;
	if (n === "pdf") return /* @__PURE__ */ N(V, {
		ref: t,
		...i
	});
	let { url: o, filename: s, actions: c, withCredentials: l = !0, page: u, pagesToDisplay: d, initialScale: f, rotatable: p, initialRotation: m, onRotationChange: ee, onPdfLoaded: h, onPageChange: g, ..._ } = i;
	return /* @__PURE__ */ N("div", {
		ref: t,
		..._,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ P(T, {
			fallback: /* @__PURE__ */ N(a, { className: "h-full w-full rounded-none" }),
			children: [
				n === "sheet" && /* @__PURE__ */ N(I, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				n === "docx" && /* @__PURE__ */ N(L, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				n === "text" && /* @__PURE__ */ N(R, {
					url: o,
					name: s ?? "",
					mimeType: r,
					withCredentials: l,
					actions: c
				})
			]
		})
	});
});
B.displayName = "F0PdfViewer";
var V = E((e, t) => {
	let { url: n, filename: i = "document.pdf", page: o = 0, pagesToDisplay: s = [], initialScale: c = "page-width", withCredentials: l = !0, rotatable: u = !1, initialRotation: d = 0, onRotationChange: f, onPdfLoaded: p, onPageChange: m, actions: h, ..._ } = e, { pdfViewer: S } = r(), [w, T] = M(null), [E, D] = M([]), [F, I] = M(1), [L, R] = M(0), [B, V] = M(c), [H, U] = M(d), W = j(null), G = j(null), K = j([]), q = s.length > 0 ? s.length : w?.numPages, J = E.find(Boolean), Y = (J?.originalWidth ?? 595) * F, X = (J?.originalHeight ?? 842) * F, ie = A(() => [
		{
			value: "page-width",
			label: S.pageWidth
		},
		{
			value: "page-fit",
			label: S.pageFit
		},
		...C.map((e) => ({
			value: e,
			label: `${Number(e) * 100}%`
		}))
	], [S.pageWidth, S.pageFit]), ae = A(() => ({
		url: n,
		withCredentials: l
	}), [n, l]), Z = O((e) => {
		let t = (q ?? 1) - 1, n = Math.min(Math.max(e, 0), t), r = K.current[n], i = r?.offsetParent;
		r && i instanceof HTMLElement && (i.scrollTop = r.offsetTop - (G.current?.offsetHeight ?? 0) - 10);
	}, [q]), Q = O((e) => {
		let t = E[L - 1], n = W.current;
		if (!t || !n) return;
		let r = G.current?.offsetHeight ?? 0, i = H === 90 || H === 270, a = i ? t.originalHeight : t.originalWidth, o = i ? t.originalWidth : t.originalHeight, s = e === "page-width" ? (n.clientWidth - z) / a : (n.clientHeight - r - z) / o;
		I(s), V(e);
	}, [
		E,
		L,
		H
	]), oe = O((e) => {
		if (e === "page-width" || e === "page-fit") {
			Q(e);
			return;
		}
		I(Number(e)), V(e);
	}, [Q]), $ = O((e) => {
		if (e === void 0) return;
		I(e);
		let t = C.find((t) => Number(t) === e);
		t && V(t);
	}, []), se = O(() => $(x(F)), [F, $]), ce = O(() => $(y(F)), [F, $]), le = O(() => {
		U((e) => {
			let t = (e + 90) % 360;
			return f?.(t), t;
		});
	}, [f]), ue = O((e) => {
		T(e), p?.(e), setTimeout(() => {
			R(o + 1), Z(o);
		}, 0);
	}, [
		p,
		o,
		Z
	]), de = O((e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement)) return;
		let n = re(t, K.current, G.current?.offsetHeight ?? 0);
		n && R(n);
	}, []), fe = O(() => {
		b(w);
	}, [w]), pe = O(() => {
		v(w, i);
	}, [w, i]);
	return k(() => {
		T(null), D([]), K.current = [];
	}, [n]), k(() => {
		Z(o);
	}, [o, Z]), k(() => {
		L > 0 && m?.(L);
	}, [L, m]), k(() => {
		E.length > 0 && (c === "page-width" || c === "page-fit") && Q(c);
	}, [E.length, c]), k(() => {
		(B === "page-width" || B === "page-fit") && Q(B);
	}, [H]), k(() => {
		let e = W.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target;
			t instanceof HTMLAnchorElement && (t.target = "_blank", t.rel = "noopener noreferrer");
		};
		return e.addEventListener("click", t, !0), () => e.removeEventListener("click", t, !0);
	}, []), /* @__PURE__ */ N("div", {
		ref: t,
		..._,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ P("div", {
			ref: W,
			onScroll: de,
			className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
			children: [/* @__PURE__ */ N(ne, {
				toolbarRef: G,
				currentPage: L,
				totalPages: q,
				hasDocument: !!w?.numPages,
				selectedScale: B,
				scaleOptions: ie,
				onPreviousPage: () => Z(L - 2),
				onNextPage: () => Z(L),
				onZoomIn: se,
				onZoomOut: ce,
				onScaleChange: oe,
				rotatable: u,
				onRotate: le,
				onPrint: fe,
				onDownload: pe,
				actions: h
			}), n && /* @__PURE__ */ N(ee, {
				file: ae,
				onLoadSuccess: ue,
				loading: /* @__PURE__ */ N(te, {
					label: S.loading,
					width: Y,
					height: X
				}),
				children: w && Array.from({ length: q ?? 0 }).map((e, t) => {
					let n = (s.length > 0 ? s[t] : t) + 1;
					return /* @__PURE__ */ N("div", {
						className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
						children: /* @__PURE__ */ N(g, {
							className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
							pageNumber: n,
							scale: F,
							rotate: H,
							loading: /* @__PURE__ */ N(a, { style: {
								width: Y,
								height: X
							} }),
							renderForms: !0,
							renderTextLayer: !0,
							inputRef: (e) => {
								K.current[t] = e;
							},
							onLoadSuccess: (e) => {
								D((n) => {
									let r = [...n];
									return r[t] = {
										originalWidth: e.originalWidth,
										originalHeight: e.originalHeight
									}, r;
								});
							}
						})
					}, t);
				})
			})]
		})
	});
});
V.displayName = "PdfViewerBase";
//#endregion
//#region src/components/F0PdfViewer/F0PdfViewerSkeleton.tsx
var H = () => {
	let { pdfViewer: e } = r();
	return /* @__PURE__ */ P("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		"aria-label": e.loading,
		className: i("F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden", "border border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ P("div", {
			className: "flex flex-row items-center justify-between gap-2 px-6 py-4",
			children: [
				/* @__PURE__ */ N(a, { className: "h-8 w-24 rounded-md" }),
				/* @__PURE__ */ N(a, { className: "h-8 w-40 rounded-md" }),
				/* @__PURE__ */ N(a, { className: "h-8 w-20 rounded-md" })
			]
		}), /* @__PURE__ */ N("div", {
			className: "flex flex-1 justify-center p-4",
			children: /* @__PURE__ */ N(a, { className: "h-full w-full max-w-[600px] rounded-md" })
		})]
	});
}, U = /* @__PURE__ */ e({
	F0PdfViewer: () => W,
	configurePdfWorker: () => _,
	pdfScales: () => w
}), W = t(n("F0PdfViewer", m(B, H)));
//#endregion
export { U as n, W as t };
