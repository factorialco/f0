import { useMemo as e } from "react";
//#region src/experimental/Navigation/Header/PageHeader/usePageHeaderItemNavigation.ts
function t(t, n) {
	let r = n?.getItemTitle, i = n?.mode ?? "url", a = t !== null, o = t?.previousItem ?? null, s = t?.nextItem ?? null, c = t?.previousItemUrl ?? null, l = t?.nextItemUrl ?? null, u = t?.absoluteIndex ?? null, d = t?.totalItems, f = t?.hasPrevious ?? !1, p = t?.hasNext ?? !1, m = t?.goToPrevious, h = t?.goToNext;
	return e(() => {
		if (!a) return null;
		let e = u !== null && d !== void 0 ? {
			current: u + 1,
			total: d
		} : void 0, t = (e, t) => (e === null ? void 0 : r?.(e)) ?? t, n = i === "callback" ? f ? {
			onClick: m,
			title: t(o, "Previous")
		} : void 0 : c === null ? void 0 : {
			url: c,
			title: t(o, "Previous")
		}, g = i === "callback" ? p ? {
			onClick: h,
			title: t(s, "Next")
		} : void 0 : l === null ? void 0 : {
			url: l,
			title: t(s, "Next")
		};
		return !n && !g && !e ? null : {
			previous: n,
			next: g,
			counter: e
		};
	}, [
		a,
		i,
		o,
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		r
	]);
}
//#endregion
export { t as usePageHeaderItemNavigation };
