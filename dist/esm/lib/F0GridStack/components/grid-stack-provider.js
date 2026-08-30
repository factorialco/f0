import { GridStackContext as e } from "./grid-stack-context.js";
import { convertWidgetRecursive as t } from "./widget-utils.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a, useState as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { motion as c } from "motion/react";
import { useDeepCompareEffect as l } from "@reactuses/core";
//#region src/lib/F0GridStack/components/grid-stack-provider.tsx
var u = [
	"noMove",
	"noResize",
	"locked",
	"w",
	"h",
	"x",
	"y"
], d = 200;
function f(e) {
	let t = e.cloneNode(!0);
	return e.querySelectorAll("canvas").forEach((n) => {
		if (n.width > 0 && n.height > 0) try {
			let r = n.toDataURL("image/png"), i = t.querySelectorAll("canvas")[Array.from(e.querySelectorAll("canvas")).indexOf(n)];
			if (i && i.parentElement) {
				let e = document.createElement("img");
				e.src = r, e.style.width = `${n.width}px`, e.style.height = `${n.height}px`, e.style.display = "block", n.className && (e.className = n.className), n.id && (e.id = n.id), i.parentElement.replaceChild(e, i);
			}
		} catch (e) {
			console.warn("Failed to convert canvas to image:", e);
		}
	}), t.innerHTML;
}
function p({ children: p, options: m, onResizeStop: h, onChange: g, widgets: _, static: v, forcePositionSync: y }) {
	let [b, x] = o(null), S = a(null), C = a(!1), w = i(() => ({
		...m,
		children: (_ || []).map((e) => t(e))
	}), [m, _]), [T, E] = o(() => {
		let e = /* @__PURE__ */ new Map(), t = _ || [], n = (t) => {
			t.id && t.content && e.set(t.id, t.content), t.subGridOpts?.children && t.subGridOpts.children.forEach((e) => {
				n(e);
			});
		};
		return t.forEach((e) => {
			n(e);
		}), e;
	}), D = a(T);
	r(() => {
		D.current = T;
	}, [T]);
	let [O, k] = o(() => {
		let e = /* @__PURE__ */ new Map(), t = _ || [], n = (t) => {
			t.id && t._originalContent !== void 0 && e.set(t.id, t._originalContent), t.subGridOpts?.children && t.subGridOpts.children.forEach((e) => {
				n(e);
			});
		};
		return t.forEach((e) => {
			n(e);
		}), e;
	}), A = a(O);
	r(() => {
		A.current = O;
	}, [O]);
	let j = a(g);
	r(() => {
		j.current = g;
	}, [g]);
	let [M, N] = o(() => {
		let e = /* @__PURE__ */ new Map(), n = _ || [], r = (n) => {
			if (n.id) {
				let r = t(n);
				e.set(n.id, r);
			}
			n.subGridOpts?.children && n.subGridOpts.children.forEach((e) => {
				r(e);
			});
		};
		return n.forEach((e) => {
			r(e);
		}), e;
	});
	l(() => {
		if (!b) return;
		let e = b.save();
		if (!Array.isArray(e)) return;
		let n = e.map((e) => e.id), r = _ || [], i = r.map((e) => e.id), a = r.filter((e) => !n.includes(e.id));
		a.length > 0 && (a.forEach((e) => {
			e.content && D.current.set(e.id, e.content), e._originalContent !== void 0 && A.current.set(e.id, e._originalContent);
		}), a.forEach((e) => {
			let n = t(e);
			b.addWidget(n);
		}), N((e) => {
			let n = new Map(e);
			return a.forEach((e) => {
				let r = t(e);
				n.set(e.id, r);
			}), n;
		}), E((e) => {
			let t = new Map(e);
			return a.forEach((e) => {
				e.content && t.set(e.id, e.content);
			}), t;
		}), k((e) => {
			let t = new Map(e);
			return a.forEach((e) => {
				e._originalContent !== void 0 && t.set(e.id, e._originalContent);
			}), t;
		}));
		let o = e.filter((e) => !i.includes(e.id));
		if (o.length > 0) {
			let e = o.map((e) => e.id).filter(Boolean);
			e.forEach((e) => {
				setTimeout(() => {
					D.current.delete(e), A.current.delete(e);
				}, d);
			}), o.forEach((e) => {
				let t = b.el.querySelector(`[gs-id="${e.id}"]`);
				t && setTimeout(() => {
					b.removeWidget(t, !0);
				}, d);
			}), N((t) => {
				let n = new Map(t);
				return e.forEach((e) => {
					setTimeout(() => {
						n.delete(e);
					}, d);
				}), n;
			}), E((t) => {
				let n = new Map(t);
				return e.forEach((e) => {
					if (n.get(e)) {
						let t = b.el.querySelector(`[gs-id="${e}"] .grid-stack-item-content`), r = "";
						t && (r = f(t)), n.set(e, /* @__PURE__ */ s(c.div, {
							className: "h-full w-full",
							initial: {
								opacity: 1,
								scale: 1,
								filter: "blur(0px)"
							},
							animate: {
								opacity: 0,
								scale: .85,
								filter: "blur(14px)"
							},
							exit: {
								opacity: 0,
								scale: .85,
								filter: "blur(14px)"
							},
							transition: {
								opacity: {
									duration: d / 1e3,
									ease: [
										.32,
										0,
										.67,
										0
									]
								},
								scale: {
									duration: d / 1e3,
									ease: [
										.65,
										0,
										.35,
										1
									]
								},
								filter: {
									duration: d / 1e3,
									ease: "linear"
								}
							},
							dangerouslySetInnerHTML: { __html: r }
						}));
					}
					setTimeout(() => {
						n.delete(e);
					}, d);
				}), n;
			}), k((t) => {
				let n = new Map(t);
				return e.forEach((e) => {
					setTimeout(() => {
						n.delete(e);
					}, d);
				}), n;
			});
		}
		let l = r.filter((e) => n.includes(e.id));
		if (l.length > 0) {
			let n = [];
			l.forEach((t) => {
				let r = e.find((e) => e.id === t.id);
				if (!r) return;
				let i = u.filter((e) => r[e] !== t[e]);
				if (i.length > 0) {
					let e = {}, r = [
						"w",
						"h",
						"x",
						"y"
					], a = [
						"noMove",
						"noResize",
						"locked"
					], o = i.filter((e) => r.includes(e)), s = i.filter((e) => a.includes(e));
					if (o.length > 0 && s.length > 0 && o.length + s.length === i.length ? s.forEach((n) => {
						let r = t[n];
						r !== void 0 && (e[n] = r);
					}) : i.forEach((n) => {
						let r = t[n];
						r !== void 0 && (e[n] = r);
					}), Object.keys(e).length > 0) {
						let r = b.el.querySelector(`[gs-id="${t.id}"]`);
						r && n.push({
							id: t.id,
							element: r,
							updateOptions: e
						});
					}
				}
			}), l.forEach((e) => {
				e.content && D.current.set(e.id, e.content), e._originalContent !== void 0 && A.current.set(e.id, e._originalContent);
			}), n.forEach(({ element: e, updateOptions: t }) => {
				try {
					b.update(e, t);
				} catch (e) {
					console.warn("Error updating widget:", e);
				}
			}), N((e) => {
				let n = new Map(e);
				return l.forEach((e) => {
					let r = t(e);
					n.set(e.id, r);
				}), n;
			}), E((e) => {
				let t = new Map(e);
				return l.forEach((e) => {
					e.content && t.set(e.id, e.content);
				}), t;
			}), k((e) => {
				let t = new Map(e);
				return l.forEach((e) => {
					e._originalContent !== void 0 && t.set(e.id, e._originalContent);
				}), t;
			});
		}
		C.current ||= !0;
	}, [_]), r(() => {
		!b || v === void 0 || b.setStatic(v);
	}, [b, v]);
	let P = a(y);
	r(() => {
		if (!b || y === void 0 || y === P.current) return;
		P.current = y;
		let e = _ || [];
		b.batchUpdate(), e.forEach((e) => {
			let t = b.el.querySelector(`[gs-id="${e.id}"]`);
			t && b.update(t, {
				x: e.x ?? 0,
				y: e.y ?? 0,
				w: e.w ?? 1,
				h: e.h ?? 1
			});
		}), b.batchUpdate(!1);
	}, [b, y]), r(() => {
		if (!b || !w.handle) return;
		b.opts && (b.opts.handle = w.handle);
		let e = setTimeout(() => {
			if (b && b.el && w.handle && b.el.querySelectorAll(w.handle).length > 0) try {
				b.opts?.disableResize || (b.disable(!1), b.enable(!1));
			} catch {}
		}, 0);
		return () => clearTimeout(e);
	}, [
		b,
		w.handle,
		w.children
	]);
	let F = n(() => {
		if (!b) return;
		let e = b.save();
		if (Array.isArray(e)) {
			let t = e.map((e) => {
				let t = e.id;
				if (!t) return null;
				let n = D.current.get(t), r = A.current.get(t), i = e;
				return {
					...e,
					id: t,
					w: e.w ?? 1,
					h: e.h ?? 1,
					x: e.x ?? 0,
					y: e.y ?? 0,
					meta: i.meta,
					_originalContent: r,
					content: n ?? /* @__PURE__ */ s("div", { children: "No content" })
				};
			}).filter((e) => e !== null);
			j.current?.(t);
		}
	}, [b]);
	return r(() => {
		if (!b || !b.el || !b.el.parentElement) return;
		let e = (e, t) => {
			h?.(e, t);
		};
		try {
			b.on("resizestop", e), b.on("change added removed", F);
		} catch (e) {
			console.error("Error attaching GridStack event listeners:", e);
			return;
		}
		return () => {
			let e = S.current;
			if (e && e.el) try {
				e.off("resizestop"), e.off("change added removed");
			} catch (e) {
				console.warn("Error cleaning up GridStack event listeners:", e);
			}
		};
	}, [
		b,
		h,
		F
	]), r(() => {
		S.current = b;
	}, [b]), r(() => {
		b && b.el && b.el.parentElement && C.current && F();
	}, [b]), /* @__PURE__ */ s(e.Provider, {
		value: {
			options: w,
			gridStack: b,
			_gridStack: {
				value: b,
				set: x
			},
			_rawWidgetMetaMap: {
				value: M,
				set: N
			},
			_reactContentMap: {
				value: T,
				set: E
			}
		},
		children: p
	});
}
//#endregion
export { p as GridStackProvider };
