import { useCallback as e, useEffect as t, useMemo as n, useRef as r, useState as i } from "react";
//#region src/patterns/Navigation/Sidebar/Chats/useOffscreenUnreadChats.ts
var a = {
	count: 0,
	target: null
}, o = {
	above: null,
	below: null
}, s = (e) => e.isIntersecting || !e.rootBounds ? null : e.boundingClientRect.bottom <= e.rootBounds.top ? "above" : e.boundingClientRect.top >= e.rootBounds.bottom ? "below" : null, c = (e) => {
	let t = 0, n = 0, r = null, i = null, o = -Infinity, s = Infinity;
	for (let [a, c] of e) c.direction === "above" ? (t += c.count, c.bottom > o && (o = c.bottom, r = a)) : c.direction === "below" && (n += c.count, c.top < s && (s = c.top, i = a));
	return {
		above: t > 0 ? {
			count: t,
			target: r
		} : a,
		below: n > 0 ? {
			count: n,
			target: i
		} : a
	};
}, l = (e) => {
	(e.matches("button, [tabindex='0']") ? e : e.querySelector("button, [tabindex='0']"))?.focus({ preventScroll: !0 });
}, u = ({ rootRef: u, groups: d, shouldReduceMotion: f }) => {
	let [p, m] = i(o), [h, g] = i(() => ({
		above: a,
		below: a
	})), _ = r(null), v = r({
		byChatId: /* @__PURE__ */ new Map(),
		byGroupId: /* @__PURE__ */ new Map()
	}), y = e(() => {
		let e = _.current;
		_.current = null, e?.cleanup();
	}, []), { unreadByChatId: b, unreadByGroupId: x, unreadTargetSignature: S } = n(() => {
		let e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = [];
		for (let r of d) {
			let i = [];
			for (let t of r.chats) t.loading || (t.unreadCount ?? 0) <= 0 || (e.set(t.id, 1), i.push(t.id));
			t.set(r.id, i.length), n.push(`${r.id}:${r.isOpen === !1 ? "closed" : "open"}:${i.join(",")}`);
		}
		return {
			unreadByChatId: e,
			unreadByGroupId: t,
			unreadTargetSignature: n.join("|")
		};
	}, [d]);
	v.current = {
		byChatId: b,
		byGroupId: x
	}, t(() => {
		let e = u.current, t = e?.closest("[data-scroll-container]"), n = t?.parentElement ?? null;
		if (!e || !t || !n || typeof IntersectionObserver > "u") {
			m(o), g({
				above: a,
				below: a
			});
			return;
		}
		let r = e.ownerDocument.createElement("div"), i = e.ownerDocument.createElement("div");
		r.dataset.sidebarUnreadPortal = "above", i.dataset.sidebarUnreadPortal = "below", r.style.display = "contents", i.style.display = "contents", n.insertBefore(r, t), n.insertBefore(i, t.nextSibling), m({
			above: r,
			below: i
		});
		let d = null, f = null, p = null, h = !1, b = "", x = () => {
			if (e.querySelector("[data-sidebar-tab-panel-searching='true']")) return "searching";
			let { byChatId: t, byGroupId: n } = v.current;
			return Array.from(e.querySelectorAll("[data-sidebar-panel-group-id]")).map((e) => {
				let r = e.dataset.sidebarPanelGroupId ?? "";
				return e.querySelector("[data-sidebar-collapsible-open='false']") ? `${r}:closed:${n.get(r) ?? 0}` : `${r}:open:${Array.from(e.querySelectorAll("[data-sidebar-chat-id]")).map((e) => e.dataset.sidebarChatId ?? "").filter((e) => t.has(e)).join(",")}`;
			}).join("|");
		}, S = () => {
			let n = x();
			if (d && b === n) return;
			b = n, d?.disconnect();
			let r = /* @__PURE__ */ new Map();
			if (g({
				above: a,
				below: a
			}), e.querySelector("[data-sidebar-tab-panel-searching='true']")) return;
			let i = () => {
				let e = c(r);
				g((t) => t.above.count === e.above.count && t.above.target === e.above.target && t.below.count === e.below.count && t.below.target === e.below.target ? t : e);
			};
			d = new IntersectionObserver((e) => {
				e.forEach((e) => {
					let t = e.target, n = r.get(t);
					if (!n) return;
					let i = _.current;
					if (e.isIntersecting && i?.target === t) {
						let e = t.ownerDocument.activeElement === i.origin;
						y(), e && l(t);
					}
					r.set(t, {
						...n,
						direction: s(e),
						top: e.boundingClientRect.top,
						bottom: e.boundingClientRect.bottom
					});
				}), i();
			}, {
				root: t,
				threshold: 0
			});
			let { byChatId: o, byGroupId: u } = v.current;
			e.querySelectorAll("[data-sidebar-panel-group-id]").forEach((e) => {
				let t = e.dataset.sidebarPanelGroupId, n = t ? u.get(t) ?? 0 : 0;
				if (n !== 0) {
					if (e.querySelector("[data-sidebar-collapsible-open='false']")) {
						r.set(e, {
							count: n,
							direction: null,
							top: 0,
							bottom: 0
						}), d?.observe(e);
						return;
					}
					e.querySelectorAll("[data-sidebar-chat-id]").forEach((e) => {
						let t = e.dataset.sidebarChatId;
						!t || !o.has(t) || (r.set(e, {
							count: 1,
							direction: null,
							top: 0,
							bottom: 0
						}), d?.observe(e));
					});
				}
			}), r.size === 0 && i();
		}, C = () => {
			!h || f !== null || (f = requestAnimationFrame(() => {
				f = null, S();
			}));
		};
		p = requestAnimationFrame(() => {
			p = requestAnimationFrame(() => {
				p = null, h = !0, S();
			});
		});
		let w = new MutationObserver(C);
		return w.observe(e, {
			attributes: !0,
			attributeFilter: ["data-sidebar-collapsible-open", "data-sidebar-tab-panel-searching"],
			childList: !0,
			subtree: !0
		}), () => {
			r.remove(), i.remove(), y(), d?.disconnect(), w.disconnect(), f !== null && cancelAnimationFrame(f), p !== null && cancelAnimationFrame(p);
		};
	}, [
		y,
		u,
		S
	]);
	let C = e((e, t) => {
		let n = e === "above" ? h.above.target : h.below.target;
		if (n) {
			if (!f) {
				y();
				let e = n.closest("[data-scroll-container]"), r = n.ownerDocument, i = () => y(), a = () => {
					r.activeElement !== t && y();
				};
				e?.addEventListener("wheel", i, { once: !0 }), e?.addEventListener("touchstart", i, { once: !0 }), r.addEventListener("keydown", i, {
					once: !0,
					capture: !0
				}), r.addEventListener("pointerdown", i, {
					once: !0,
					capture: !0
				}), r.addEventListener("focusin", a), _.current = {
					target: n,
					origin: t,
					cleanup: () => {
						e?.removeEventListener("wheel", i), e?.removeEventListener("touchstart", i), r.removeEventListener("keydown", i, { capture: !0 }), r.removeEventListener("pointerdown", i, { capture: !0 }), r.removeEventListener("focusin", a);
					}
				};
			}
			n.scrollIntoView({
				behavior: f ? "auto" : "smooth",
				block: "center"
			}), f && l(n);
		}
	}, [
		y,
		h,
		f
	]);
	return {
		portalRoots: p,
		above: h.above,
		below: h.below,
		jump: C
	};
};
//#endregion
export { u as useOffscreenUnreadChats };
