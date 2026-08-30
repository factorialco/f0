import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/kits/ai/F0AiMessagesContainer/useMessageScroll.ts
function i({ viewportRef: i, contentRef: a, endRef: o, lastTurnRef: s, turnsCount: c, freezeTurnMinHeight: l = !1 }) {
	let [u, d] = r(0), [f, p] = r(!1), m = n(c), h = n(l);
	h.current = l;
	let g = e((e = "smooth") => {
		o.current?.scrollIntoView({ behavior: e });
	}, [o]);
	t(() => {
		let e = i.current, t = a.current;
		if (!e || !t) return;
		let n = new ResizeObserver(() => {
			if (h.current) return;
			let n = parseFloat(getComputedStyle(t).paddingTop) + parseFloat(getComputedStyle(t).paddingBottom) + 1;
			d(e.clientHeight - n);
		});
		return n.observe(e), n.observe(t), () => n.disconnect();
	}, [i, a]);
	let _ = e(() => {
		let e = i.current;
		if (!e) return;
		let { scrollTop: t, scrollHeight: n, clientHeight: r } = e, a = n - t - r;
		p(a > r);
	}, [i]);
	return t(() => {
		let e = i.current;
		if (e) return e.addEventListener("scroll", _, { passive: !0 }), () => e.removeEventListener("scroll", _);
	}, [_, i]), t(() => {
		c > m.current && requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				let e = i.current, t = s.current;
				if (!e || !t) return;
				let n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), a = e.scrollTop + (r.top - n.top);
				e.scrollTo({
					top: a,
					behavior: "smooth"
				});
			});
		}), c === 0 && p(!1), m.current = c;
	}, [
		c,
		s,
		i
	]), {
		showScrollBtn: f,
		turnMinHeight: u,
		scrollToBottom: g
	};
}
//#endregion
export { i as useMessageScroll };
