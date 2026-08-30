import { r as e } from "./rolldown-runtime-CEFd7nDs.js";
import { d as t } from "./OneEllipsis-DuhKMtYp.js";
import { S as n, Tt as r, f as i } from "./F0Button-BFtTqm8n.js";
import { t as a } from "./utils-CVzxZnoI.js";
import { gn as o, nn as s, t as c } from "./F0Select-D7w3Lovd.js";
import { Dt as l, jt as u } from "./F0Checkbox-B2ZT94HT.js";
import { t as d } from "./Download-Dvj6cfxp.js";
import { t as f } from "./Printer-snTHysV7.js";
import { t as p } from "./Reset-gUsyzwG8.js";
import { n as m } from "./skeleton-gsHEXIPQ.js";
import { i as h, n as g, r as _, t as v } from "./pdfWorker-CrMWSIlN.js";
import { a as y, n as b, o as x, r as S, s as C, t as w } from "./scales-D0pJsIoi.js";
import { pdfScales as T } from "./f0.js";
import { Suspense as E, forwardRef as D, lazy as O, useCallback as k, useEffect as A, useMemo as j, useRef as M, useState as N } from "react";
import { jsx as P, jsxs as F } from "react/jsx-runtime";
import './F0PdfViewer.css';//#region src/components/F0PdfViewer/components/PdfLoadingState.tsx
var ee = ({ label: e, width: t, height: n }) => /* @__PURE__ */ P("div", {
	role: "status",
	"aria-label": e,
	"aria-live": "polite",
	"aria-busy": !0,
	className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
	children: /* @__PURE__ */ P(i, {
		style: {
			width: t,
			height: n
		},
		className: "rounded-lg border border-solid border-f1-border-secondary shadow-md"
	})
}), I = "flex flex-row items-center gap-2", te = ({ toolbarRef: e, currentPage: t, totalPages: r, hasDocument: i, selectedScale: m, scaleOptions: h, onPreviousPage: g, onNextPage: _, onZoomIn: v, onZoomOut: y, onScaleChange: b, rotatable: x, onRotate: S, onPrint: w, onDownload: T, actions: E }) => {
	let { pdfViewer: D } = n();
	return /* @__PURE__ */ F("div", {
		ref: e,
		role: "toolbar",
		"aria-label": D.toolbar,
		className: a("F0PdfViewer__surface sticky top-0 z-10 flex flex-row items-center justify-between gap-2", "px-6 py-4"),
		children: [
			/* @__PURE__ */ F("div", {
				className: I,
				children: [
					i && /* @__PURE__ */ F("span", {
						"aria-live": "polite",
						className: "whitespace-nowrap text-sm font-medium text-f1-foreground-secondary",
						children: [
							t,
							" / ",
							r
						]
					}),
					/* @__PURE__ */ P(C, {
						label: D.previousPage,
						onClick: g,
						icon: o,
						size: "sm"
					}),
					/* @__PURE__ */ P(C, {
						label: D.nextPage,
						onClick: _,
						icon: u,
						size: "sm"
					})
				]
			}),
			/* @__PURE__ */ F("div", {
				className: I,
				children: [
					/* @__PURE__ */ P(C, {
						label: D.zoomOut,
						onClick: y,
						icon: l
					}),
					/* @__PURE__ */ P(C, {
						label: D.zoomIn,
						onClick: v,
						icon: s
					}),
					/* @__PURE__ */ P(c, {
						hideLabel: !0,
						label: D.scaleSelector,
						options: h,
						value: m,
						onChange: (e) => b(e)
					})
				]
			}),
			/* @__PURE__ */ F("div", {
				className: I,
				children: [
					x && /* @__PURE__ */ P(C, {
						label: D.rotate,
						onClick: S,
						icon: p
					}),
					/* @__PURE__ */ P(C, {
						label: D.print,
						onClick: w,
						icon: f
					}),
					/* @__PURE__ */ P(C, {
						label: D.download,
						onClick: T,
						icon: d
					}),
					E?.map((e, t) => /* @__PURE__ */ P(C, {
						label: e.label,
						onClick: e.onClick,
						icon: e.icon
					}, `${e.label}-${t}`))
				]
			})
		]
	});
}, ne = (e, t, n) => {
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
g();
var L = O(() => import("./SheetViewer-DeVbWrV8.js")), R = O(() => import("./DocxViewer-CQl1Rhz9.js")), z = O(() => import("./TextViewer-XAYzTWRD.js")), B = 48, V = D((e, t) => {
	let { kind: n = "pdf", mimeType: r, ...a } = e;
	if (n === "pdf") return /* @__PURE__ */ P(H, {
		ref: t,
		...a
	});
	let { url: o, filename: s, actions: c, withCredentials: l = !0, page: u, pagesToDisplay: d, initialScale: f, rotatable: p, initialRotation: m, onRotationChange: h, onPdfLoaded: g, onPageChange: _, ...v } = a;
	return /* @__PURE__ */ P("div", {
		ref: t,
		...v,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ F(E, {
			fallback: /* @__PURE__ */ P(i, { className: "h-full w-full rounded-none" }),
			children: [
				n === "sheet" && /* @__PURE__ */ P(L, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				n === "docx" && /* @__PURE__ */ P(R, {
					url: o,
					filename: s,
					withCredentials: l,
					actions: c
				}),
				n === "text" && /* @__PURE__ */ P(z, {
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
V.displayName = "F0PdfViewer";
var H = D((e, t) => {
	let { url: r, filename: a = "document.pdf", page: o = 0, pagesToDisplay: s = [], initialScale: c = "page-width", withCredentials: l = !0, rotatable: u = !1, initialRotation: d = 0, onRotationChange: f, onPdfLoaded: p, onPageChange: m, actions: g, ...v } = e, { pdfViewer: C } = n(), [T, E] = N(null), [D, O] = N([]), [I, L] = N(1), [R, z] = N(0), [V, H] = N(c), [U, re] = N(d), W = M(null), G = M(null), K = M([]), q = s.length > 0 ? s.length : T?.numPages, J = D.find(Boolean), Y = (J?.originalWidth ?? 595) * I, X = (J?.originalHeight ?? 842) * I, ie = j(() => [
		{
			value: "page-width",
			label: C.pageWidth
		},
		{
			value: "page-fit",
			label: C.pageFit
		},
		...w.map((e) => ({
			value: e,
			label: `${Number(e) * 100}%`
		}))
	], [C.pageWidth, C.pageFit]), ae = j(() => ({
		url: r,
		withCredentials: l
	}), [r, l]), Z = k((e) => {
		let t = (q ?? 1) - 1, n = Math.min(Math.max(e, 0), t), r = K.current[n], i = r?.offsetParent;
		r && i instanceof HTMLElement && (i.scrollTop = r.offsetTop - (G.current?.offsetHeight ?? 0) - 10);
	}, [q]), Q = k((e) => {
		let t = D[R - 1], n = W.current;
		if (!t || !n) return;
		let r = G.current?.offsetHeight ?? 0, i = U === 90 || U === 270, a = i ? t.originalHeight : t.originalWidth, o = i ? t.originalWidth : t.originalHeight, s = e === "page-width" ? (n.clientWidth - B) / a : (n.clientHeight - r - B) / o;
		L(s), H(e);
	}, [
		D,
		R,
		U
	]), oe = k((e) => {
		if (e === "page-width" || e === "page-fit") {
			Q(e);
			return;
		}
		L(Number(e)), H(e);
	}, [Q]), $ = k((e) => {
		if (e === void 0) return;
		L(e);
		let t = w.find((t) => Number(t) === e);
		t && H(t);
	}, []), se = k(() => $(S(I)), [I, $]), ce = k(() => $(b(I)), [I, $]), le = k(() => {
		re((e) => {
			let t = (e + 90) % 360;
			return f?.(t), t;
		});
	}, [f]), ue = k((e) => {
		E(e), p?.(e), setTimeout(() => {
			z(o + 1), Z(o);
		}, 0);
	}, [
		p,
		o,
		Z
	]), de = k((e) => {
		let t = e.target;
		if (!(t instanceof HTMLElement)) return;
		let n = ne(t, K.current, G.current?.offsetHeight ?? 0);
		n && z(n);
	}, []), fe = k(() => {
		x(T);
	}, [T]), pe = k(() => {
		y(T, a);
	}, [T, a]);
	return A(() => {
		E(null), O([]), K.current = [];
	}, [r]), A(() => {
		Z(o);
	}, [o, Z]), A(() => {
		R > 0 && m?.(R);
	}, [R, m]), A(() => {
		D.length > 0 && (c === "page-width" || c === "page-fit") && Q(c);
	}, [D.length, c]), A(() => {
		(V === "page-width" || V === "page-fit") && Q(V);
	}, [U]), A(() => {
		let e = W.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target;
			t instanceof HTMLAnchorElement && (t.target = "_blank", t.rel = "noopener noreferrer");
		};
		return e.addEventListener("click", t, !0), () => e.removeEventListener("click", t, !0);
	}, []), /* @__PURE__ */ P("div", {
		ref: t,
		...v,
		className: "F0PdfViewer__surface relative flex h-full w-full flex-col overflow-hidden border border-solid border-f1-border-secondary",
		children: /* @__PURE__ */ F("div", {
			ref: W,
			onScroll: de,
			className: "F0PdfViewer__surface relative flex h-full flex-col overflow-auto [scrollbar-gutter:stable_both-edges]",
			children: [/* @__PURE__ */ P(te, {
				toolbarRef: G,
				currentPage: R,
				totalPages: q,
				hasDocument: !!T?.numPages,
				selectedScale: V,
				scaleOptions: ie,
				onPreviousPage: () => Z(R - 2),
				onNextPage: () => Z(R),
				onZoomIn: se,
				onZoomOut: ce,
				onScaleChange: oe,
				rotatable: u,
				onRotate: le,
				onPrint: fe,
				onDownload: pe,
				actions: g
			}), r && /* @__PURE__ */ P(h, {
				file: ae,
				onLoadSuccess: ue,
				loading: /* @__PURE__ */ P(ee, {
					label: C.loading,
					width: Y,
					height: X
				}),
				children: T && Array.from({ length: q ?? 0 }).map((e, t) => {
					let n = (s.length > 0 ? s[t] : t) + 1;
					return /* @__PURE__ */ P("div", {
						className: "F0PdfViewer__page mx-auto w-fit px-4 pt-4 last:pb-4",
						children: /* @__PURE__ */ P(_, {
							className: "overflow-hidden rounded-lg border border-solid border-f1-border-secondary shadow-md",
							pageNumber: n,
							scale: I,
							rotate: U,
							loading: /* @__PURE__ */ P(i, { style: {
								width: Y,
								height: X
							} }),
							renderForms: !0,
							renderTextLayer: !0,
							inputRef: (e) => {
								K.current[t] = e;
							},
							onLoadSuccess: (e) => {
								O((n) => {
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
H.displayName = "PdfViewerBase";
//#endregion
//#region src/components/F0PdfViewer/F0PdfViewerSkeleton.tsx
var U = () => {
	let { pdfViewer: e } = n();
	return /* @__PURE__ */ F("div", {
		role: "status",
		"aria-busy": "true",
		"aria-live": "polite",
		"aria-label": e.loading,
		className: a("F0PdfViewer__surface flex h-full w-full flex-col overflow-hidden", "border border-solid border-f1-border-secondary"),
		children: [/* @__PURE__ */ F("div", {
			className: "flex flex-row items-center justify-between gap-2 px-6 py-4",
			children: [
				/* @__PURE__ */ P(i, { className: "h-8 w-24 rounded-md" }),
				/* @__PURE__ */ P(i, { className: "h-8 w-40 rounded-md" }),
				/* @__PURE__ */ P(i, { className: "h-8 w-20 rounded-md" })
			]
		}), /* @__PURE__ */ P("div", {
			className: "flex flex-1 justify-center p-4",
			children: /* @__PURE__ */ P(i, { className: "h-full w-full max-w-[600px] rounded-md" })
		})]
	});
}, re = /* @__PURE__ */ e({
	F0PdfViewer: () => W,
	configurePdfWorker: () => v,
	pdfScales: () => T
}), W = t(r("F0PdfViewer", m(V, U)));
//#endregion
export { re as n, W as t };
