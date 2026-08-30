import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import n from "../../icons/app/ChevronLeft.js";
import r from "../../icons/app/ChevronRight.js";
import { ButtonInternal as i } from "../../components/F0Button/internal.js";
import { useIsSmallScreen as a } from "../F0Dialog/utils.js";
import { F0Dialog as o } from "../../F0Dialog.js";
import { useCallback as s, useEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import { jsx as f } from "react/jsx-runtime";
//#region src/patterns/F0CarouselDialog/index.tsx
var p = "Previous", m = "bg-f1-background", h = e(t("F0CarouselDialog", ({ items: e, currentId: t, onNavigate: h, labels: g, loop: _ = !1, pagination: v, placeholder: y, isOpen: b, onClose: x, ...S }) => {
	let C = a(), w = e.findIndex((e) => e.id === t), T = w < 0, E = T ? 0 : w, D = e[E], O = e.length, k = v?.total ?? O, A = v?.hasMore ?? !1, j = v?.isLoading ?? !1, M = _ && !A, N = T ? void 0 : M ? e[(E - 1 + O) % O]?.id : e[E - 1]?.id, P = T ? void 0 : M ? e[(E + 1) % O]?.id : e[E + 1]?.id, F = s(() => {
		N && h(N);
	}, [N, h]), [I, L] = d(!1), R = u(-1), z = s(() => {
		!v || j || R.current !== O && (R.current = O, v.onLoadMore());
	}, [
		v,
		j,
		O
	]), B = s(() => {
		if (P) {
			h(P);
			return;
		}
		T || !A || !v || (L(!0), z());
	}, [
		P,
		h,
		T,
		A,
		v,
		z
	]), V = u(j);
	c(() => {
		let e = V.current && !j;
		if (V.current = j, I) {
			if (P) {
				L(!1), h(P);
				return;
			}
			e && L(!1);
		}
	}, [
		I,
		P,
		j,
		h
	]), c(() => {
		!b || T || P || !A || z();
	}, [
		b,
		T,
		P,
		A,
		z
	]), c(() => {
		if (!b) return;
		let e = (e) => {
			let t = e.target;
			t?.tagName === "INPUT" || t?.tagName === "TEXTAREA" || t?.isContentEditable || (e.key === "ArrowLeft" && F(), e.key === "ArrowRight" && B());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		b,
		F,
		B
	]);
	let H = l(() => ({
		previous: /* @__PURE__ */ f(i, {
			variant: "outline",
			size: "md",
			icon: n,
			label: g?.previous ?? p,
			hideLabel: !0,
			className: m,
			disabled: !N,
			onClick: F
		}),
		next: /* @__PURE__ */ f(i, {
			variant: "outline",
			size: "md",
			icon: r,
			label: g?.next ?? "Next",
			hideLabel: !0,
			className: m,
			loading: I,
			disabled: !P && !(A && !j),
			onClick: B
		})
	}), [
		g?.previous,
		g?.next,
		N,
		P,
		A,
		j,
		I,
		F,
		B
	]), U = A && v?.total === void 0, W = g?.position ?? ((e, t) => `${e} of ${t}${U ? "+" : ""}`), G = {
		title: T ? y?.title : D?.title,
		content: T ? y?.content : D?.content,
		status: !T && (O > 1 || A) ? W(E + 1, k) : void 0
	}, K = u(G);
	b && (K.current = G);
	let q = b ? G : K.current;
	return !q.content && !q.title ? null : /* @__PURE__ */ f(o, {
		...S,
		width: C ? void 0 : S.width,
		position: C ? "fullscreen" : S.position,
		asBottomSheetInMobile: !1,
		isOpen: b,
		onClose: x,
		title: q.title,
		headerStatus: q.status,
		sideControls: T || O > 1 || A ? H : void 0,
		children: q.content
	});
}));
//#endregion
export { h as F0CarouselDialog };
