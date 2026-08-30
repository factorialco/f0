import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/SolidPause.js";
import n from "../../../../icons/app/SolidPlay.js";
import r from "../../../../icons/app/SolidStop.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as ee } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { useReducedMotion as a } from "../../../../lib/a11y.js";
import { F0TagRaw as o } from "../../../../components/tags/F0TagRaw/index.js";
import { F0Select as s } from "../../../../F0Select.js";
import { getLabels as te } from "../ClockInGraph/helpers.js";
import { ClockInGraph as c } from "../ClockInGraph/index.js";
import { getInfo as ne } from "./helpers.js";
import { findLeaf as re } from "./TreeSelector.js";
import { LocationSelector as ie, toLocationTree as ae } from "./LocationSelector.js";
import { ProjectSelector as oe } from "./ProjectSelector.js";
import se from "./Selector/index.js";
import { ClockInControlsSkeleton as ce } from "./Skeleton.js";
import { useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { motion as p } from "motion/react";
//#region src/sds/Home/ClockIn/ClockInControls/index.tsx
var m = "[&_[data-testid=input-field-wrapper]]:bg-transparent", h = ({ color: e }) => {
	let t = a();
	return /* @__PURE__ */ f("div", {
		className: "relative aspect-square h-4 shrink-0 self-center",
		children: [!t && /* @__PURE__ */ d(p.div, {
			className: "absolute inset-0 rounded-full opacity-20",
			style: { backgroundColor: e },
			initial: {
				scale: .5,
				opacity: .6
			},
			animate: {
				scale: 1.6,
				opacity: 0
			},
			transition: {
				duration: 1.5,
				repeat: Infinity,
				repeatDelay: 1
			}
		}), /* @__PURE__ */ d("div", {
			className: "absolute inset-[3px] rounded-full",
			style: { backgroundColor: e }
		})]
	});
};
function g({ trackedMinutes: a, remainingMinutes: p, data: g = [], labels: _, locationId: v, locations: y, canShowLocation: b = !0, locationSelectorDisabled: x = !1, onClockIn: S, onClockOut: C, onBreak: w, breakTypes: le, onChangeBreakTypeId: T, canShowBreakButton: ue = !0, canSeeGraph: E = !0, canSeeRemainingTime: D = !0, onChangeLocationId: O, canShowProject: k = !0, projectSelectorElement: de, locationSelectorElement: fe, projects: A, projectId: pe, onChangeProjectId: me, projectSelectorDisabled: he = !1, projectRequired: ge = !0, locationRequired: _e = !0, breakTypeName: j, onBreakPromote: ve, variant: M = "default", loading: ye = !1 }) {
	let { status: N, statusText: P, subtitle: F, statusColor: I } = ne({
		data: g,
		labels: _,
		trackedMinutes: a,
		remainingMinutes: p,
		canSeeRemainingTime: D
	}), L = N === "clocked-out", R = le?.map((e) => ({
		value: e.id,
		label: e.duration ? `${e.name} · ${e.duration}` : e.name,
		description: e.description,
		tag: e.isPaid ? _.paid : _.unpaid
	})) ?? [], [z, B] = l(!1), be = () => {
		if (R.length > 1) z || B(!0);
		else {
			let e = R?.[0]?.value;
			w?.(e);
		}
	}, xe = (e) => {
		T?.(e), B(!1), w?.(e);
	}, V = L && y.length && !x && b, H = L && !he && k, U = re(ae(y), v), Se = y.map((e) => ({
		value: e.id,
		label: e.name,
		icon: e.icon
	})), W = N === "break", [Ce, we] = l(!1), Te = V ? /* @__PURE__ */ d(s, {
		label: _.selectLocation,
		hideLabel: !0,
		value: v,
		options: Se,
		onChange: O,
		open: Ce,
		onOpenChange: we,
		disabled: x,
		children: /* @__PURE__ */ d("div", {
			"aria-label": "Select location",
			children: /* @__PURE__ */ d(se, {
				text: U?.name,
				placeholder: _.selectLocation,
				icon: U?.icon
			})
		})
	}) : U ? /* @__PURE__ */ d(o, {
		text: U.name,
		icon: U.icon
	}) : null, Ee = y.length ? /* @__PURE__ */ d(ie, {
		locations: y,
		locationId: v,
		onChangeLocationId: O,
		label: _.selectLocation,
		searchPlaceholder: _.searchLocation,
		required: _e,
		disabled: !V
	}) : null, De = A?.length && k ? /* @__PURE__ */ d(oe, {
		projects: A,
		projectId: pe,
		onChangeProjectId: me,
		label: _.selectProject,
		searchPlaceholder: _.searchProject,
		required: ge,
		disabled: !H
	}) : null, Oe = ve ?? ((p ?? 0) < 0 ? "clock-out" : "resume"), G = /* @__PURE__ */ f(u, { children: [
		N === "clocked-out" && /* @__PURE__ */ d("div", {
			className: M === "default" ? "mr-3 @xs:mr-0" : void 0,
			children: /* @__PURE__ */ d(i, {
				onClick: S,
				label: _.clockIn,
				icon: n
			})
		}),
		N === "clocked-in" && /* @__PURE__ */ f(u, { children: [ue && /* @__PURE__ */ d(u, { children: R.length > 1 && T ? /* @__PURE__ */ d(s, {
			label: _.break,
			hideLabel: !0,
			value: "",
			options: R,
			onChange: xe,
			open: z,
			onOpenChange: B,
			children: /* @__PURE__ */ d("div", {
				"aria-label": "Select break type",
				children: /* @__PURE__ */ d(i, {
					label: _.break,
					variant: "outline",
					icon: t,
					hideLabel: !0
				})
			})
		}) : /* @__PURE__ */ d(i, {
			onClick: be,
			label: _.break,
			variant: "outline",
			icon: t,
			hideLabel: !0
		}) }), /* @__PURE__ */ d(i, {
			onClick: C,
			label: _.clockOut,
			variant: "outline",
			icon: r
		})] }),
		N === "break" && (Oe === "clock-out" ? /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(i, {
			onClick: S,
			label: _.resume,
			variant: "outline",
			icon: n,
			hideLabel: !0
		}), /* @__PURE__ */ d(i, {
			onClick: C,
			label: _.clockOut,
			icon: r
		})] }) : /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d(i, {
			onClick: C,
			label: _.clockOut,
			variant: "outline",
			icon: r,
			hideLabel: !0
		}), /* @__PURE__ */ d(i, {
			onClick: S,
			label: _.resume,
			icon: n
		})] }))
	] }), K = M === "horizontal-bar" ? Ee : fe ?? Te, q = M === "horizontal-bar" ? De : de, J = /* @__PURE__ */ f(u, { children: [
		b && K,
		k && q,
		W && j ? /* @__PURE__ */ d(o, { text: j }) : null
	] }), Y = b && !!K, X = k && !!q, Z = Y ? /* @__PURE__ */ d("div", {
		className: e("flex min-w-0 flex-1 flex-row", V && m),
		children: K
	}) : null, Q = X ? /* @__PURE__ */ d("div", {
		className: e("min-w-0 flex-1", H && m),
		children: q
	}) : null, $ = Y && X, ke = $ ? Q : null, Ae = $ ? Z : Z ?? Q;
	if (ye) return /* @__PURE__ */ d(ce, {
		variant: M,
		canSeeGraph: E,
		canShowLocation: b,
		canShowProject: k && !!(A?.length ?? q)
	});
	if (M === "horizontal-bar") {
		let { primaryLabel: e, time: t } = te({
			data: g,
			trackedMinutes: a,
			remainingMinutes: D ? p : 0
		});
		return /* @__PURE__ */ f("div", {
			className: "flex flex-col gap-2",
			children: [
				/* @__PURE__ */ f("div", {
					className: "flex flex-row items-end justify-between gap-2",
					children: [/* @__PURE__ */ f("div", {
						className: "flex min-w-0 flex-row items-baseline gap-1.5",
						children: [
							/* @__PURE__ */ d("span", {
								className: "line-clamp-1 shrink-0 text-xl font-semibold text-f1-foreground",
								children: P
							}),
							/* @__PURE__ */ d(h, { color: I }),
							W && j && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("span", {
								"aria-hidden": !0,
								className: "shrink-0 text-f1-foreground-secondary",
								children: "·"
							}), /* @__PURE__ */ d(ee, {
								tag: "span",
								className: "min-w-0 flex-1 text-f1-foreground-secondary",
								children: j
							})] })
						]
					}), /* @__PURE__ */ d("span", {
						className: "shrink-0 text-xl font-semibold tabular-nums text-f1-foreground",
						children: t
					})]
				}),
				E && /* @__PURE__ */ d(c, {
					variant: "horizontal-bar",
					data: g,
					trackedMinutes: a,
					remainingMinutes: D ? p : 0
				}),
				/* @__PURE__ */ f("div", {
					className: "flex flex-row items-center justify-between gap-2 text-f1-foreground-secondary",
					children: [/* @__PURE__ */ d("span", {
						className: "tabular-nums",
						children: e
					}), F && /* @__PURE__ */ d("span", {
						className: "line-clamp-1 tabular-nums",
						children: F
					})]
				}),
				/* @__PURE__ */ f("div", {
					className: "flex flex-col gap-2 pt-1",
					children: [ke, /* @__PURE__ */ f("div", {
						className: "flex w-full flex-row items-center gap-2",
						children: [Ae, /* @__PURE__ */ d("div", {
							className: "ml-auto flex shrink-0 flex-row items-center gap-2",
							children: G
						})]
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ d("div", {
		className: "@container",
		children: /* @__PURE__ */ f("div", {
			className: "flex-grow flex-col",
			children: [/* @__PURE__ */ f("div", {
				className: "flex flex-col-reverse items-center gap-2 @xs:flex-row",
				children: [/* @__PURE__ */ f("div", {
					className: "flex-1 space-y-4",
					children: [/* @__PURE__ */ f("div", {
						className: "flex flex-col items-center space-y-0.5 @xs:items-start",
						children: [/* @__PURE__ */ f("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ d("span", {
								className: "line-clamp-1 text-2xl font-semibold text-f1-foreground",
								children: P
							}), /* @__PURE__ */ d(h, { color: I })]
						}), F && /* @__PURE__ */ d("p", {
							className: "line-clamp-1 text-f1-foreground-secondary",
							children: F
						})]
					}), /* @__PURE__ */ d("div", {
						className: "flex justify-center gap-2 @xs:justify-start",
						children: G
					})]
				}), E && /* @__PURE__ */ d(c, {
					data: g,
					trackedMinutes: a,
					remainingMinutes: D ? p : 0
				})]
			}), /* @__PURE__ */ d("div", {
				className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start",
				children: J
			})]
		})
	});
}
//#endregion
export { g as ClockInControls };
