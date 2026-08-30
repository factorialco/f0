import { useEffect as e, useMemo as t, useState as n } from "react";
function r(r = 24) {
	let [i, a] = n(null), [o, s] = n({
		top: !1,
		bottom: !1
	});
	return e(() => {
		if (!i) return;
		let e = () => {
			let e = i.scrollHeight > i.clientHeight + 1;
			s({
				top: e && i.scrollTop > 1,
				bottom: e && i.scrollTop + i.clientHeight < i.scrollHeight - 1
			});
		};
		e(), i.addEventListener("scroll", e, { passive: !0 });
		let t = typeof ResizeObserver == "function" ? new ResizeObserver(e) : null;
		return t?.observe(i), i.firstElementChild && t?.observe(i.firstElementChild), () => {
			i.removeEventListener("scroll", e), t?.disconnect();
		};
	}, [i]), {
		ref: a,
		style: t(() => {
			if (!o.top && !o.bottom) return {};
			let e = `linear-gradient(to bottom, ${o.top ? `transparent 0, black ${r}px` : "black 0"}, ${o.bottom ? `black calc(100% - ${r}px), transparent 100%` : "black 100%"})`;
			return {
				maskImage: e,
				WebkitMaskImage: e
			};
		}, [o, r]),
		element: i
	};
}
//#endregion
export { r as useScrollFade };
