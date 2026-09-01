import e from "../../../icons/app/ArrowLeft.js";
import t from "../../../icons/app/Filter.js";
import { useI18n as n } from "../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as ee } from "../../../ui/popover.js";
import { F0DialogContext as te } from "../../F0Dialog/components/F0DialogProvider.js";
import { getFilterType as s } from "../filterTypes/utils.js";
import { getActiveFilterKeys as c } from "../internal/getActiveFilterKeys.js";
import { FilterContent as l } from "./FilterContent.js";
import { FilterList as u } from "./FilterList.js";
import { FilterPickerInternal as ne } from "../../F0FilterPickerContent/internal.js";
import { getClearedFiltersValue as re } from "../internal/getClearedFiltersValue.js";
import { getActiveFiltersValue as d } from "../internal/getActiveFiltersValue.js";
import { forwardRef as f, useContext as p, useEffect as m, useId as ie, useMemo as h, useRef as g, useState as _ } from "react";
import { Fragment as ae, jsx as v, jsxs as y } from "react/jsx-runtime";
import { AnimatePresence as b, motion as x } from "motion/react";
import S from "lodash/isEqual";
import { useControllableState as C } from "@radix-ui/react-use-controllable-state";
//#region src/patterns/OneFilterPicker/components/FiltersControls.tsx
var w = 388;
function T({ id: e, text: t }) {
	return /* @__PURE__ */ v("span", {
		id: e,
		title: t,
		className: "sr-only"
	});
}
var E = f((e, t) => /* @__PURE__ */ v(r, {
	...e,
	ref: t
}));
E.displayName = "DescribedFilterButton";
function D({ filters: f, allFilters: D, value: O, onChange: k, isOpen: A, onOpenChange: oe, hideLabel: se, mode: j = "default", displayCounter: M = !1 }) {
	let N = D ?? f, ce = Object.keys(f)[0] ?? null, [P, F] = _(j === "compact" ? null : ce), I = n(), L = p(te), le = L.portalContainer && (L.position === "center" || L.position === "fullscreen") ? L.portalContainer : void 0, [R, z] = C({
		prop: A,
		defaultProp: !1,
		onChange: oe
	}), [B, V] = _(O), H = g(R);
	m(() => {
		H.current = R;
	}, [R]);
	let U = g(!1), W = (e) => {
		let t = H.current;
		if (!U.current) {
			if (t) {
				U.current = !0, V(O), z(!1), setTimeout(() => {
					U.current = !1;
				}, 150);
				return;
			}
			z(e);
		}
	}, G = g(O);
	m(() => {
		S(G.current, O) || (G.current = O, V(O));
	}, [O]);
	let K = (e, t) => {
		V((n) => ({
			...n,
			[e]: t
		}));
	}, q = () => {
		k(d(N, B, I)), W(!1);
	}, ue = () => {
		V(re(N));
	}, J = () => {
		P ? F(null) : (k(d(N, B, I)), W(!1));
	}, de = () => {
		V(O), W(!1);
	}, Y = () => {
		J();
	};
	m(() => {
		let e = () => Object.entries(B || {}).find(([e, t]) => f[e] ? !s(f[e].type).isEmpty(t, {
			schema: f[e],
			i18n: I
		}) : !1);
		if (R && j === "default") {
			let t = e();
			if (t) F(t[0]);
			else {
				let e = Object.keys(f)[0];
				F(e);
			}
		}
	}, [R]);
	let fe = h(() => Object.entries(f).reduce((e, [t, n]) => {
		let r = s(n.type);
		return Math.max(e, r?.formHeight || w);
	}, 0), [f]), X = ie(), Z = `${X}-active-filters-description`, Q = h(() => c(N, O, I), [
		N,
		O,
		I
	]), pe = Q.length === 0 ? void 0 : Q.length, $ = h(() => Q.length > 0 ? I.t("filters.activeFilters", { filters: Q.map((e) => N[e].label).join(", ") }) : void 0, [Q, N]);
	if (j === "inline") {
		let n = !!Object.values(B).length;
		return /* @__PURE__ */ y("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ y("div", {
				className: "relative",
				children: [/* @__PURE__ */ v(E, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ v(T, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					onClick: () => W(!R),
					"aria-controls": R ? X : void 0,
					hideLabel: !0,
					tooltip: $
				}), n && /* @__PURE__ */ v("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ v(b, {
				mode: "popLayout",
				propagate: !1,
				children: R && /* @__PURE__ */ v(x.div, {
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
					children: /* @__PURE__ */ y("div", {
						className: "flex h-full flex-col flex-1 min-h-0 max-h-full",
						children: [
							/* @__PURE__ */ y("div", {
								className: "flex shrink-0 items-center gap-2 border-0 border-b border-solid border-f1-border-secondary px-2 py-1.5",
								children: [/* @__PURE__ */ v(r, {
									variant: "ghost",
									icon: e,
									label: I.filters.label,
									hideLabel: !0,
									size: "sm",
									onClick: de
								}), /* @__PURE__ */ v("span", {
									className: "text-base font-medium text-f1-foreground",
									children: I.filters.label
								})]
							}),
							/* @__PURE__ */ y("div", {
								className: "flex flex-1 min-h-0 max-h-full",
								children: [/* @__PURE__ */ v(u, {
									definition: f,
									tempFilters: B,
									selectedFilterKey: P,
									onFilterSelect: (e) => F(e),
									onClickApplyFilters: q
								}), P && /* @__PURE__ */ v("div", {
									className: "flex-1 min-w-0 overflow-hidden",
									children: /* @__PURE__ */ v(l, {
										selectedFilterKey: P,
										definition: f,
										tempFilters: B,
										onFilterChange: K
									})
								})]
							}),
							/* @__PURE__ */ v("div", {
								className: "flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background",
								children: /* @__PURE__ */ v(i, {
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
		let n = !!Object.values(B).length, r = P ? I.t("filters.filteringBy", { label: f[P].label }) : I.t("filters.availableFilters"), a = /* @__PURE__ */ y("div", {
			className: "flex items-center gap-2 pl-1.5 py-1.5",
			children: [/* @__PURE__ */ v(i, {
				label: "Back",
				icon: e,
				hideLabel: !0,
				variant: "ghost",
				size: "sm",
				onClick: J
			}), r]
		}), o = /* @__PURE__ */ v(ae, { children: P && /* @__PURE__ */ v("div", {
			className: "sticky bottom-0 left-0 right-0 z-30 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary p-2 bg-f1-background",
			children: /* @__PURE__ */ v(i, {
				onClick: Y,
				label: I.filters.applySelection
			})
		}) });
		return /* @__PURE__ */ y("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ y("div", {
				className: "relative",
				children: [/* @__PURE__ */ v(E, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ v(T, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					onClick: () => W(!R),
					"aria-controls": R ? X : void 0,
					hideLabel: !0,
					tooltip: $
				}), n && /* @__PURE__ */ v("div", { className: "absolute right-0 top-0 aspect-square w-2 rounded-full border border-solid border-f1-background bg-f1-background-selected-bold" })]
			}), /* @__PURE__ */ v(b, {
				mode: "popLayout",
				propagate: !1,
				children: R && /* @__PURE__ */ v(x.div, {
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
					children: /* @__PURE__ */ y("div", {
						className: "flex h-full flex-col transition-all flex-1 min-h-0 max-h-full",
						children: [
							a,
							/* @__PURE__ */ v("div", {
								className: "flex flex-1 min-h-0 max-h-full",
								children: P ? /* @__PURE__ */ v(x.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ v(l, {
										selectedFilterKey: P,
										definition: f,
										tempFilters: B,
										onFilterChange: K,
										isCompactMode: !0
									})
								}, "filter-content") : /* @__PURE__ */ v(x.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									exit: { opacity: 0 },
									transition: { duration: .2 },
									className: "h-full w-full bg-f1-background",
									children: /* @__PURE__ */ v(u, {
										definition: f,
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
	return /* @__PURE__ */ v("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ y(a, {
			open: R,
			onOpenChange: W,
			modal: !0,
			children: [/* @__PURE__ */ v(ee, {
				asChild: !0,
				children: /* @__PURE__ */ v(E, {
					variant: "outline",
					label: I.filters.label,
					"aria-describedby": $ ? Z : void 0,
					append: $ ? /* @__PURE__ */ v(T, {
						id: Z,
						text: $
					}) : void 0,
					icon: t,
					pressed: R,
					hideLabel: se,
					"aria-controls": R ? X : void 0,
					counterValue: M ? pe : void 0
				})
			}), /* @__PURE__ */ v(o, {
				className: "w-fit min-w-[600px] rounded-xl border border-solid border-f1-border-secondary p-0 shadow-md",
				align: "start",
				side: "bottom",
				id: X,
				"aria-label": I.filters.label,
				container: le,
				children: /* @__PURE__ */ v(ne, {
					filters: f,
					tempFilters: B,
					selectedFilterKey: P,
					onFilterSelect: F,
					onFilterChange: K,
					onApply: q,
					onClear: ue,
					height: fe || w
				})
			})]
		})
	});
}
//#endregion
export { D as FiltersControls };
