import { useLayoutEffect as e } from "react";
var t = (t, n, r, i = !0) => {
	e(() => {
		if (n.length === 0) return;
		let e = t.current;
		if (!(e && i && typeof e.animate == "function")) {
			n.forEach(({ groupId: e }) => r(e));
			return;
		}
		let a = [], o = [], s = !1;
		return n.forEach(({ groupId: t, cellClass: n, direction: i }) => {
			let c = Array.from(e.querySelectorAll(`.${n}`));
			if (c.length === 0) {
				r(t);
				return;
			}
			let l = c.map((e) => {
				let { paddingLeft: t, paddingRight: n } = getComputedStyle(e);
				return {
					width: e.getBoundingClientRect().width,
					paddingLeft: t,
					paddingRight: n
				};
			}), u = [];
			c.forEach((e, t) => {
				let { width: n, paddingLeft: r, paddingRight: s } = l[t], c = e.style.overflow;
				e.style.overflow = "hidden", o.push(() => {
					e.style.overflow = c;
				});
				let d = {
					width: "0px",
					minWidth: "0px",
					maxWidth: "0px",
					paddingLeft: "0px",
					paddingRight: "0px"
				}, f = {
					width: `${n}px`,
					minWidth: "0px",
					maxWidth: `${n}px`,
					paddingLeft: r,
					paddingRight: s
				}, p = i === "close", m = e.animate(p ? [f, d] : [d, f], {
					duration: 220,
					easing: "ease-out",
					fill: p ? "forwards" : "backwards"
				});
				Array.from(e.children).forEach((e) => {
					e instanceof HTMLElement && a.push(e.animate(p ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 1 }], p ? {
						duration: 80,
						easing: "ease-out",
						fill: "forwards"
					} : {
						duration: 120,
						delay: 110,
						easing: "ease-out",
						fill: "backwards"
					}));
				}), a.push(m), u.push(m.finished.catch(() => void 0));
			}), Promise.all(u).then(() => {
				s || r(t);
			});
		}), () => {
			s = !0, a.forEach((e) => e.cancel()), o.forEach((e) => e());
		};
	}, [
		n,
		t,
		r,
		i
	]);
};
//#endregion
export { t as useColumnCollapseAnimation };
