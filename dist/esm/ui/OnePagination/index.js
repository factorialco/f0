import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { Pagination as r, PaginationContent as i, PaginationEllipsis as a, PaginationItem as o, PaginationLink as s, PaginationNext as c, PaginationPrevious as l } from "../pagination.js";
import { useCallback as u, useMemo as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/ui/OnePagination/index.tsx
function m({ totalPages: e, currentPage: t = 1, onPageChange: m, showControls: h = !0, ariaLabel: g = "Page navigation", visibleRange: _ = 3, hasNextPage: v = !0, disabled: y = !1 }) {
	let b = e === 0, x = u((t) => {
		m && (b || t >= 1 && t <= e) && m(t);
	}, [
		m,
		e,
		b
	]), S = d(() => {
		if (b) return [];
		let n = [];
		if (e <= 5) return Array.from({ length: e }, (e, t) => t + 1);
		n.push(1);
		let r = Math.floor(_ / 2), i = t - r, a = t + r;
		return t <= r + 2 ? (i = 2, a = i + _ - 1, n.push(...Array.from({ length: a - i + 1 }, (e, t) => t + i)), n.push("...")) : t >= e - r - 1 ? (i = e - _ - 1, a = e - 1, n.push("..."), n.push(...Array.from({ length: a - i + 1 }, (e, t) => t + i))) : (n.push("..."), n.push(...Array.from({ length: _ }, (e, t) => t + i)), n.push("...")), n.push(e), n;
	}, [
		t,
		e,
		_,
		b
	]);
	return /* @__PURE__ */ f(r, { children: /* @__PURE__ */ p(i, {
		role: "navigation",
		"aria-label": g,
		children: [
			h && /* @__PURE__ */ f(o, { children: /* @__PURE__ */ f(l, {
				"aria-disabled": t === 1 || y,
				tabIndex: t === 1 ? -1 : 0,
				className: n(!b && "mr-1", t === 1 || y ? "pointer-events-none opacity-50" : ""),
				onClick: () => x(t - 1),
				onKeyDown: (e) => {
					e.key === "Enter" && x(t - 1);
				}
			}) }),
			!b && S.map((e, r) => /* @__PURE__ */ f(o, {
				className: n("hidden sm:flex", e === t && "flex", y && "pointer-events-none opacity-50"),
				children: e === "..." ? /* @__PURE__ */ f(a, {}) : /* @__PURE__ */ f(s, {
					"aria-current": e === t ? "page" : void 0,
					isActive: e === t,
					onClick: () => x(e),
					onKeyDown: (t) => {
						t.key === "Enter" && x(e);
					},
					tabIndex: 0,
					children: e
				})
			}, r)),
			h && /* @__PURE__ */ f(o, { children: /* @__PURE__ */ f(c, {
				"aria-disabled": (b ? !v : t === e) || y,
				tabIndex: b ? v ? 0 : -1 : t === e ? -1 : 0,
				className: n(!b && "ml-1", !b && t === e || !v && b || y ? "pointer-events-none opacity-50" : ""),
				onClick: () => x(t + 1),
				onKeyDown: (e) => {
					e.key === "Enter" && x(t + 1);
				}
			}) })
		]
	}) });
}
var h = e(t("OnePagination", m));
//#endregion
export { h as OnePagination };
