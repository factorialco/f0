import e from "../../../icons/app/ArrowLeft.js";
import t from "../../../icons/app/Filter.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../ui/popover.js";
import { F0DialogContext as ee } from "../../F0Dialog/components/F0DialogProvider.js";
import { getFilterType as c } from "../filterTypes/getFilterType.js";
import { getActiveFilterKeys as l } from "../internal/getActiveFilterKeys.js";
import { FilterContent as u } from "./FilterContent.js";
import { FilterList as d } from "./FilterList.js";
import { FilterPickerInternal as te } from "../../F0FilterPickerContent/internal.js";
import { getActiveFiltersValue as f } from "../internal/getActiveFiltersValue.js";
import { getClearedFiltersValue as ne } from "../internal/getClearedFiltersValue.js";
import { forwardRef as p, useContext as m, useEffect as h, useId as re, useMemo as g, useRef as _, useState as v } from "react";
import { Fragment as ie, jsx as y, jsxs as b } from "react/jsx-runtime";
import { AnimatePresence as x, motion as S } from "motion/react";
import ae from "lodash/isEqual";
import { useControllableState as oe } from "@radix-ui/react-use-controllable-state";
//#region src/patterns/OneFilterPicker/components/FiltersControls.tsx
var C = 388;
function w({ id: e, text: t }) {
	return /* @__PURE__ */ y("span", {
		id: e,
		title: t,
		className: "sr-only"
	});
}
var T = p((e, t) => /* @__PURE__ */ y(r, {
	...e,
	ref: t
}));
T.displayName = "DescribedFilterButton";
function E({ filters: p, allFilters: E, value: D, onChange: O, isOpen: se, onOpenChange: k, hideLabel: A, mode: j = "default", displayCounter: M = !1 }) {
	let N = E ?? p, ce = Object.keys(p)[0] ?? null, [P, F] = v(j === "compact" ? null : ce), I = n(), L = m(ee), le = L.portalContainer && (L.position === "center" || L.position === "fullscreen") ? L.portalContainer : void 0, [R, z] = oe({
		prop: se,
		defaultProp: !1,
		onChange: k
	}), [B, V] = v(D), H = _(R);
	h(() => {
		H.current = R;
	}, [R]);
	let U = _(!1), W = (e) => {
		let t = H.current;
		if (!U.current) {
			if (t) {
				U.current = !0, V(D), z(!1), setTimeout(() => {
					U.current = !1;
				}, 150);
				return;
			}
			z(e);
		}
	}, G = _(D);
	h(() => {
		ae(G.current, D) || (G.current = D, V(D));
	}, [D]);
	let K = (e, t) => {
		V((n) => ({
			...n,
			[e]: t
		}));
	}, q = () => {
		O(f(N, B, I)), W(!1);
	}, ue = () => {
		V(ne(N));
	}, J = () => {
		P ? F(null) : (O(f(N, B, I)), W(!1));
	}, de = () => {
		V(D), W(!1);
	}, Y = () => {
		J();
	};
	h(() => {
		let e = () => Object.entries(B || {}).find(([e, t]) => p[e] ? !c(p[e].type).isEmpty(t, {
			schema: p[e],
			i18n: I
		}) : !1);
		if (R && j === "default") {
			let t = e();
			if (t) F(t[0]);
			else {
				let e = Object.keys(p)[0];
				F(e);
			}
		}
	}, [R]);
	let fe = g(() => Object.entries(p).reduce((e, [t, n]) => {
		let r = c(n.type);
		return Math.max(e, r?.formHeight || C);
	}, 0), [p]), X = re(), Z = `${X}-active-filters-description`, Q = g(() => l(N, D, I), [
		N,
		D,
		I
	]), pe = Q.length === 0 ? void 0 : Q.length, $ = g(() => Q.length > 0 ? I.t("filters.activeFilters", { filters: Q.map((e) => N[e].label).join(", ") }) : void 0, [Q, N]);
	if (j === "inline") {
		let n = !!Object.values(B).length;
		return /* @__PURE__ */ b("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ b("div", {
				className: "relative",
				children: [/* @__PURE__ */ y(T, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ y(w, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					onClick: () => W(!R),
					"aria-controls": R ? X : void 0,
					hideLabel: !0,
					tooltip: $
				}), n && /* @__PURE__ */ y("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ y(x, {
				mode: "popLayout",
				propagate: !1,
				children: R && /* @__PURE__ */ y(S.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 8
					},
					transition: {
						type: "spring",
						duration: .3,
						bounce: 0
					},
					className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
					children: /* @__PURE__ */ b("div", {
						className: "flex h-full max-h-full min-h-0 flex-1 flex-col",
						children: [
							/* @__PURE__ */ b("div", {
								className: "flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-2 py-1.5",
								children: [/* @__PURE__ */ y(r, {
									variant: "ghost",
									icon: e,
									label: I.filters.label,
									hideLabel: !0,
									size: "sm",
									onClick: de
								}), /* @__PURE__ */ y("span", {
									className: "text-base font-medium text-f1-foreground",
									children: I.filters.label
								})]
							}),
							/* @__PURE__ */ b("div", {
								className: "flex max-h-full min-h-0 flex-1",
								children: [/* @__PURE__ */ y(d, {
									definition: p,
									tempFilters: B,
									selectedFilterKey: P,
									onFilterSelect: (e) => F(e),
									onClickApplyFilters: q
								}), P && /* @__PURE__ */ y("div", {
									className: "min-w-0 flex-1 overflow-hidden",
									children: /* @__PURE__ */ y(u, {
										selectedFilterKey: P,
										definition: p,
										tempFilters: B,
										onFilterChange: K
									})
								})]
							}),
							/* @__PURE__ */ y("div", {
								className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background p-2",
								children: /* @__PURE__ */ y(i, {
									onClick: q,
									label: I.filters.applyFilters
								})
							})
						]
					})
				})
			})]
		});
	}
	if (j === "compact") {
		let n = !!Object.values(B).length, r = P ? I.t("filters.filteringBy", { label: p[P].label }) : I.t("filters.availableFilters"), a = /* @__PURE__ */ b("div", {
			className: "flex items-center gap-2 py-1.5 pl-1.5",
			children: [/* @__PURE__ */ y(i, {
				label: "Back",
				icon: e,
				hideLabel: !0,
				variant: "ghost",
				size: "sm",
				onClick: J
			}), r]
		}), o = /* @__PURE__ */ y(ie, { children: P && /* @__PURE__ */ y("div", {
			className: "sticky bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background p-2",
			children: /* @__PURE__ */ y(i, {
				onClick: Y,
				label: I.filters.applySelection
			})
		}) });
		return /* @__PURE__ */ b("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ b("div", {
				className: "relative",
				children: [/* @__PURE__ */ y(T, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ y(w, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					onClick: () => W(!R),
					"aria-controls": R ? X : void 0,
					hideLabel: !0,
					tooltip: $
				}), n && /* @__PURE__ */ y("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ y(x, {
				mode: "popLayout",
				propagate: !1,
				children: R && /* @__PURE__ */ y(S.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 8
					},
					transition: {
						type: "spring",
						duration: .3,
						bounce: 0
					},
					className: "absolute bottom-0 left-0 right-0 top-0 z-20 bg-f1-background",
					children: /* @__PURE__ */ b("div", {
						className: "flex h-full max-h-full min-h-0 flex-1 flex-col transition-all",
						children: [
							a,
							/* @__PURE__ */ y("div", {
								className: "flex max-h-full min-h-0 flex-1",
								children: P ? /* @__PURE__ */ y(S.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ y(u, {
										selectedFilterKey: P,
										definition: p,
										tempFilters: B,
										onFilterChange: K,
										isCompactMode: !0
									})
								}, "filter-content") : /* @__PURE__ */ y(S.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ y(d, {
										definition: p,
										tempFilters: B,
										selectedFilterKey: P,
										onFilterSelect: (e) => F(e),
										onClickApplyFilters: q,
										isCompactMode: !0
									})
								}, "filter-list")
							}),
							o
						]
					})
				})
			})]
		});
	}
	return /* @__PURE__ */ y("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ b(a, {
			open: R,
			onOpenChange: W,
			modal: !0,
			children: [/* @__PURE__ */ y(s, {
				asChild: !0,
				children: /* @__PURE__ */ y(T, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ y(w, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					hideLabel: A,
					"aria-controls": R ? X : void 0,
					counterValue: M ? pe : void 0
				})
			}), /* @__PURE__ */ y(o, {
				className: "w-fit min-w-[600px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md",
				align: "start",
				side: "bottom",
				id: X,
				"aria-label": I.filters.label,
				container: le,
				children: /* @__PURE__ */ y(te, {
					filters: p,
					tempFilters: B,
					selectedFilterKey: P,
					onFilterSelect: F,
					onFilterChange: K,
					onApply: q,
					onClear: ue,
					height: fe || C
				})
			})]
		})
	});
}
//#endregion
export { E as FiltersControls };
