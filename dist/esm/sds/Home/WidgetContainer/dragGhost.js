//#region src/sds/Home/WidgetContainer/dragGhost.ts
var e = (e) => {
	let t = e?.cloneNode(!0);
	return t instanceof HTMLElement ? (t.classList.remove("invisible"), t.style.transform = "none", t.style.transition = "none", t.removeAttribute("id"), t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), t.setAttribute("aria-hidden", "true"), t.setAttribute("inert", ""), t) : null;
}, t = (e, t) => {
	if (!e || !t) return null;
	let n = e.cloneNode(!0);
	if (!(n instanceof HTMLElement)) return null;
	n.classList.remove("-z-10"), n.style.position = "absolute", n.style.inset = "0", n.style.top = "0", n.style.left = "0", n.style.right = "auto", n.style.bottom = "auto", n.style.width = "100%", n.style.height = "100%", n.removeAttribute("id"), n.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id")), n.setAttribute("aria-hidden", "true"), n.setAttribute("inert", "");
	let i = e.getBoundingClientRect(), a = t.getBoundingClientRect();
	return {
		node: n,
		offset: {
			top: i.top - a.top,
			left: i.left - a.left,
			width: i.width,
			height: i.height
		},
		base: r(e)
	};
}, n = [
	"rgba(0, 0, 0, 0)",
	"transparent",
	""
], r = (e) => {
	if (typeof getComputedStyle != "function") return null;
	for (let t = e; t; t = t.parentElement) {
		let e = getComputedStyle(t).backgroundColor;
		if (!n.includes(e)) return e;
	}
	return null;
};
//#endregion
export { e as takeCardGhost, t as takePageSurface };
