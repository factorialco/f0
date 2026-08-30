import { cn as e } from "../../../../lib/utils.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { DropdownMenu as n, DropdownMenuContent as r, DropdownMenuItem as i, DropdownMenuTrigger as a } from "../../../../ui/dropdown-menu.js";
import o from "../../../../icons/ai/One.js";
import { useEffect as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/ChartItem/AccessiblePointActions.tsx
function f({ hasActions: f, getActions: p, resetOn: m, label: h, triggerLabel: g, previousLabel: _, nextLabel: v, setTrigger: y, focusChatAfterSelect: b, focusChatInput: x }) {
	let [S, C] = l(!1), [w, T] = l(null), [E, D] = l(0), O = c(!1), k = c(!1), A = c(null), j = c(null), M = c(null), N = c(!1), P = c(!1), F = c(p);
	F.current = p;
	let { data: I, isLoading: L, chartType: R, legendSelection: z, owner: B, title: V } = m;
	if (s(() => {
		T(null), D(0), C(!1);
	}, [
		I,
		L,
		R,
		z,
		B,
		V
	]), s(() => {
		if (!N.current) return;
		N.current = !1;
		let e = 0, t = requestAnimationFrame(() => {
			e = requestAnimationFrame(() => {
				M.current?.querySelector("[data-point-action]")?.focus();
			});
		});
		return () => {
			cancelAnimationFrame(t), cancelAnimationFrame(e);
		};
	}, [E]), s(() => {
		if (!S || w === null || !P.current) return;
		P.current = !1;
		let e = 0, t = requestAnimationFrame(() => {
			e = requestAnimationFrame(() => {
				M.current?.querySelector("[data-point-action]")?.focus();
			});
		});
		return () => {
			cancelAnimationFrame(t), cancelAnimationFrame(e);
		};
	}, [w, S]), !f) return null;
	let H = w ?? [], U = E * 100, W = H.slice(U, U + 100), G = E > 0, K = U + 100 < H.length, q = (e) => {
		N.current = !0, D(e);
	};
	return /* @__PURE__ */ u("div", {
		className: e("absolute bottom-2 left-2 z-10 transition-opacity", S ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100"),
		children: /* @__PURE__ */ d(n, {
			open: S,
			onOpenChange: (e) => {
				e && w === null && (P.current = !0, T(F.current())), C(e);
			},
			children: [/* @__PURE__ */ u(a, {
				asChild: !0,
				children: /* @__PURE__ */ u(t, {
					ref: (e) => {
						let t = e instanceof HTMLButtonElement ? e : null;
						j.current = t, y(t);
					},
					type: "button",
					variant: "outline",
					size: "sm",
					label: h,
					"aria-label": g,
					icon: o
				})
			}), /* @__PURE__ */ d(r, {
				ref: M,
				align: "start",
				side: "top",
				className: "max-h-80 max-w-[min(32rem,90vw)] overflow-y-auto",
				onCloseAutoFocus: (e) => {
					if (!k.current) return;
					e.preventDefault(), k.current = !1;
					let t = A.current;
					if (A.current = null, t?.(), !O.current) {
						requestAnimationFrame(() => {
							let e = document.activeElement;
							(!e || e === document.body || !e.isConnected) && j.current?.focus();
						});
						return;
					}
					O.current = !1, x();
				},
				children: [
					G && /* @__PURE__ */ u(i, {
						onSelect: (e) => {
							e.preventDefault(), q(E - 1);
						},
						children: _
					}),
					W.map((e) => /* @__PURE__ */ u(i, {
						"data-point-action": "",
						onSelect: () => {
							k.current = !0, O.current = b, A.current = () => {
								F.current().find((t) => t.key === e.key)?.onSelect();
							};
						},
						children: e.getLabel()
					}, e.key)),
					K && /* @__PURE__ */ u(i, {
						onSelect: (e) => {
							e.preventDefault(), q(E + 1);
						},
						children: v
					})
				]
			})]
		})
	});
}
//#endregion
export { f as AccessiblePointActions };
