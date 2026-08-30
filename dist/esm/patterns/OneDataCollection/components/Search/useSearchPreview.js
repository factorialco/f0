import { useEffect as e, useRef as t, useState as n } from "react";
//#region src/patterns/OneDataCollection/components/Search/useSearchPreview.ts
var r = (e) => Array.isArray(e) ? {
	records: e,
	hasMore: !1
} : e;
function i(i, a) {
	let [o, s] = n([]), [c, l] = n(!1), [u, d] = n(!1), [f, p] = n(!1), [m, h] = n(0), g = t([]), _ = t(0), v = t(0), y = t(!1), b = t(i);
	b.current = i;
	let x = a?.trim() ?? "", S = (e, t) => t.map((t) => ({
		id: e.getId(t),
		...e.render(t)
	}));
	return e(() => {
		let e = b.current, t = ++v.current;
		if (_.current = 0, y.current = !1, d(!1), !e || x.length === 0) {
			g.current = [], s([]), l(!1), p(!1);
			return;
		}
		l(!0), Promise.resolve(e.search(x, 0)).then((n) => {
			if (t !== v.current) return;
			let i = r(n);
			g.current = i.records, s(S(e, i.records)), p(i.hasMore), l(!1);
		});
	}, [x]), {
		results: o,
		loading: c,
		loadingMore: u,
		hasMore: f,
		onLoadMore: () => {
			let e = b.current;
			if (!e || y.current || c || !f || x.length === 0) return;
			let t = v.current, n = _.current + 1;
			y.current = !0, d(!0), Promise.resolve(e.search(x, n)).then((i) => {
				if (t !== v.current) return;
				let a = r(i);
				_.current = n, g.current = [...g.current, ...a.records], s((t) => [...t, ...S(e, a.records)]), p(a.hasMore), y.current = !1, d(!1);
			}).catch(() => {
				t === v.current && (y.current = !1, d(!1));
			});
		},
		onSelect: (e) => {
			let t = b.current;
			if (!t) return;
			let n = g.current.find((n) => t.getId(n) === e);
			n && (t.onSelect(n), h((e) => e + 1));
		},
		selectionNonce: m
	};
}
//#endregion
export { i as useSearchPreview };
