import { useEffect as e, useMemo as t, useState as n } from "react";
function r(r = 24) {
	let [i, a] = n(null), [o, s] = n({
		start: !1,
		end: !1
	});
	return e(() => {
		if (!i) return;
		let e = () => {
			let e = i.scrollWidth > i.clientWidth + 1;
			s({
				start: e && i.scrollLeft > 1,
				end: e && i.scrollLeft + i.clientWidth < i.scrollWidth - 1
			});
		};
		e(), i.addEventListener("scroll", e, { passive: !0 });
		let t = typeof ResizeObserver == "function" ? new ResizeObserver(e) : null;
		t?.observe(i);
		for (let e of Array.from(i.children)) t?.observe(e);
		return () => {
			i.removeEventListener("scroll", e), t?.disconnect();
		};
	}, [i]), {
		ref: a,
		style: t(() => {
			if (!o.start && !o.end) return {};
			let e = `linear-gradient(to right, ${o.start ? `transparent 0, black ${r}px` : "black 0"}, ${o.end ? `black calc(100% - ${r}px), transparent 100%` : "black 100%"})`;
			return {
				maskImage: e,
				WebkitMaskImage: e
			};
		}, [o, r])
	};
}
//#endregion
export { r as useHorizontalScrollFade };
