import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/CrossedCircle.js";
import i from "../../../../icons/app/Search.js";
import a from "../../../../icons/app/Spinner.js";
import { useI18n as o } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Avatar as s } from "../../../../components/avatars/F0Avatar/index.js";
import { useEffect as c, useId as l, useRef as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { AnimatePresence as m, LayoutGroup as h, MotionConfig as g, motion as _ } from "motion/react";
import { useOnClickOutside as v } from "usehooks-ts";
//#region src/patterns/OneDataCollection/components/Search/Search.tsx
var y = 56, b = ({ loading: e }) => e ? /* @__PURE__ */ f(n, {
	icon: a,
	className: "animate-spin"
}) : /* @__PURE__ */ f(n, {
	icon: i,
	className: "text"
}), x = ({ value: i, onChange: x, loading: S = !1, results: C, resultsLoading: w = !1, onResultSelect: T, hasMore: E = !1, loadingMore: D = !1, onLoadMore: O }) => {
	let [k, A] = d(!1), [j, M] = d(!1), [N, P] = d(-1), F = l(), I = u(null), L = u(null), R = u(null), z = o(), B = C ?? [], V = k && j && !!i && B.length > 0, H = (e) => {
		if (!E || D || !O) return;
		let t = e.currentTarget;
		t.scrollHeight - t.scrollTop - t.clientHeight <= y && O();
	};
	c(() => {
		P((C ?? []).length > 0 ? 0 : -1);
	}, [C]), c(() => {
		R.current?.scrollIntoView({ block: "nearest" });
	}, [N]);
	let U = () => {
		x(void 0), A(!1), M(!1), P(-1), L?.current && (L.current.value = "");
	}, W = (e) => {
		x(e.title), T?.(e.id), M(!1), P(-1);
	};
	v(I, () => {
		k && A(!1), M(!1);
	});
	let G = () => {
		k || (A(!0), setTimeout(() => {
			L.current?.focus();
		}, 0));
	}, K = (e) => {
		if (!k) {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), G());
			return;
		}
		if (e.key === "Escape") {
			e.preventDefault(), V ? (M(!1), P(-1)) : U();
			return;
		}
		if (V) {
			if (e.key === "ArrowDown") e.preventDefault(), N < B.length - 1 ? P(N + 1) : E && !D && O?.();
			else if (e.key === "ArrowUp") e.preventDefault(), P((e) => e > 0 ? e - 1 : 0);
			else if (e.key === "Enter") {
				e.preventDefault();
				let t = B[N >= 0 ? N : 0];
				t && W(t);
			}
		}
	};
	return /* @__PURE__ */ f(h, {
		id: F,
		children: /* @__PURE__ */ f(g, {
			transition: {
				duration: .2,
				ease: [
					.175,
					.885,
					.32,
					1.05
				]
			},
			children: /* @__PURE__ */ f(m, { children: /* @__PURE__ */ p(_.div, {
				layout: !0,
				ref: I,
				className: e("relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center", (k || i) && "w-[180px]"),
				children: [k ? /* @__PURE__ */ f(_.div, {
					layout: !0,
					layoutId: "search-container",
					className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
					style: { borderRadius: 12 },
					children: /* @__PURE__ */ p(_.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
						style: { borderRadius: 11 },
						children: [
							/* @__PURE__ */ f(_.div, {
								className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
								layoutId: "search-icon",
								children: /* @__PURE__ */ f(b, { loading: S || w }, "loading")
							}),
							/* @__PURE__ */ f(_.input, {
								layout: !0,
								ref: L,
								type: "text",
								value: i,
								placeholder: z.actions.search,
								onChange: (e) => {
									x(e.target.value), M(!0), P(0);
								},
								className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								onKeyDown: K
							}),
							/* @__PURE__ */ f(_.div, {
								tabIndex: 0,
								className: e("flex h-5 w-5 items-center justify-center rounded-full", t()),
								onClick: (e) => {
									e.stopPropagation(), U();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && U();
								},
								role: "button",
								"aria-label": z.actions.clear,
								children: /* @__PURE__ */ f(n, {
									icon: r,
									size: "md",
									color: "secondary"
								})
							})
						]
					})
				}) : /* @__PURE__ */ f(_.div, {
					role: "button",
					"aria-label": z.actions.search,
					tabIndex: 0,
					layout: !0,
					layoutId: "search-container",
					className: e("relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover", t()),
					onClick: G,
					onKeyDown: K,
					style: { borderRadius: 10 },
					children: /* @__PURE__ */ p(_.div, {
						layout: !0,
						className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
						style: { borderRadius: 9 },
						children: [/* @__PURE__ */ f(_.div, {
							className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
							layoutId: "search-icon",
							children: /* @__PURE__ */ f(b, { loading: S || w })
						}), i && /* @__PURE__ */ p("div", {
							className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5",
							children: [/* @__PURE__ */ f(_.div, {
								layout: !0,
								className: "line-clamp-1 overflow-hidden py-2 pl-7",
								children: i
							}), /* @__PURE__ */ f(_.div, {
								tabIndex: 0,
								className: e("flex h-5 w-5 items-center justify-center rounded-full", t()),
								onClick: (e) => {
									e.stopPropagation(), U();
								},
								onKeyDown: (e) => {
									(e.key === "Enter" || e.key === " ") && U();
								},
								role: "button",
								"aria-label": z.actions.clear,
								children: /* @__PURE__ */ f(n, {
									icon: r,
									size: "md",
									color: "secondary"
								})
							})]
						})]
					})
				}), V ? /* @__PURE__ */ p("ul", {
					className: "absolute right-0 top-full z-50 mt-2 max-h-72 w-72 overflow-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md",
					onScroll: H,
					children: [B.map((n, r) => /* @__PURE__ */ f("li", { children: /* @__PURE__ */ p("button", {
						ref: r === N ? R : null,
						type: "button",
						onMouseDown: (e) => e.preventDefault(),
						onMouseEnter: () => P(r),
						onClick: () => W(n),
						className: e("flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-f1-background-secondary", r === N && "bg-f1-background-secondary", t()),
						children: [n.avatar ? /* @__PURE__ */ f(s, {
							size: "md",
							avatar: n.avatar
						}) : null, /* @__PURE__ */ p("span", {
							className: "flex min-w-0 flex-col",
							children: [/* @__PURE__ */ f("span", {
								className: "truncate text-md text-f1-foreground",
								children: n.title
							}), n.subtitle ? /* @__PURE__ */ f("span", {
								className: "truncate text-md text-f1-foreground-secondary",
								children: n.subtitle
							}) : null]
						})]
					}) }, n.id)), D ? /* @__PURE__ */ f("li", {
						className: "flex items-center justify-center py-2 text-f1-icon",
						"aria-hidden": !0,
						children: /* @__PURE__ */ f(n, {
							icon: a,
							className: "animate-spin"
						})
					}) : null]
				}) : null]
			}) })
		})
	});
};
//#endregion
export { x as Search };
