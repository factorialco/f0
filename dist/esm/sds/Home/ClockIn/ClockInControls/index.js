import { cn as e } from "../../../../lib/utils.js";
import { useReducedMotion as t } from "../../../../lib/a11y.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import r from "../../../../icons/app/SolidPause.js";
import i from "../../../../icons/app/SolidPlay.js";
import a from "../../../../icons/app/SolidStop.js";
import { F0Button as o } from "../../../../components/F0Button/F0Button.js";
import { F0TagRaw as s } from "../../../../components/tags/F0TagRaw/index.js";
import { F0Select as c } from "../../../../F0Select.js";
import { getInfo as ee } from "./helpers.js";
import { getLabels as te } from "../ClockInGraph/helpers.js";
import { ClockInGraph as l } from "../ClockInGraph/index.js";
import { findLeaf as ne } from "./TreeSelector.js";
import { LocationSelector as re, toLocationTree as ie } from "./LocationSelector.js";
import { ProjectSelector as ae } from "./ProjectSelector.js";
import oe from "./Selector/index.js";
import { ClockInControlsSkeleton as se } from "./Skeleton.js";
import { useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { motion as m } from "motion/react";
//#region src/sds/Home/ClockIn/ClockInControls/index.tsx
var h = "[&_[data-testid=input-field-wrapper]]:bg-transparent", g = ({ color: e }) => {
	let n = t();
	return /* @__PURE__ */ p("div", {
		className: "relative aspect-square h-4 shrink-0 self-center",
		children: [!n && /* @__PURE__ */ f(m.div, {
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
		}), /* @__PURE__ */ f("div", {
			className: "absolute inset-[3px] rounded-full",
			style: { backgroundColor: e }
		})]
	});
};
function _({ trackedMinutes: t, remainingMinutes: m, data: _ = [], labels: v, locationId: y, locations: b, canShowLocation: x = !0, locationSelectorDisabled: S = !1, onClockIn: C, onClockOut: w, onBreak: T, breakTypes: ce, onChangeBreakTypeId: E, canShowBreakButton: le = !0, canSeeGraph: D = !0, canSeeRemainingTime: O = !0, onChangeLocationId: k, canShowProject: A = !0, projectSelectorElement: ue, locationSelectorElement: de, projects: j, projectId: fe, onChangeProjectId: pe, projectSelectorDisabled: me = !1, projectRequired: he = !0, locationRequired: ge = !0, breakTypeName: M, onBreakPromote: _e, variant: N = "default", loading: ve = !1 }) {
	let { status: P, statusText: F, subtitle: I, statusColor: L } = ee({
		data: _,
		labels: v,
		trackedMinutes: t,
		remainingMinutes: m,
		canSeeRemainingTime: O
	}), R = P === "clocked-out", z = ce?.map((e) => ({
		value: e.id,
		label: e.duration ? `${e.name} · ${e.duration}` : e.name,
		description: e.description,
		tag: e.isPaid ? v.paid : v.unpaid
	})) ?? [], [B, V] = u(!1), ye = () => {
		if (z.length > 1) B || V(!0);
		else {
			let e = z?.[0]?.value;
			T?.(e);
		}
	}, be = (e) => {
		E?.(e), V(!1), T?.(e);
	}, H = R && b.length && !S && x, U = R && !me && A, W = ne(ie(b), y), xe = b.map((e) => ({
		value: e.id,
		label: e.name,
		icon: e.icon
	})), G = P === "break", [Se, Ce] = u(!1), we = H ? /* @__PURE__ */ f(c, {
		label: v.selectLocation,
		hideLabel: !0,
		value: y,
		options: xe,
		onChange: k,
		open: Se,
		onOpenChange: Ce,
		disabled: S,
		children: /* @__PURE__ */ f("div", {
			"aria-label": "Select location",
			children: /* @__PURE__ */ f(oe, {
				text: W?.name,
				placeholder: v.selectLocation,
				icon: W?.icon
			})
		})
	}) : W ? /* @__PURE__ */ f(s, {
		text: W.name,
		icon: W.icon
	}) : null, Te = b.length ? /* @__PURE__ */ f(re, {
		locations: b,
		locationId: y,
		onChangeLocationId: k,
		label: v.selectLocation,
		searchPlaceholder: v.searchLocation,
		required: ge,
		disabled: !H
	}) : null, Ee = j?.length && A ? /* @__PURE__ */ f(ae, {
		projects: j,
		projectId: fe,
		onChangeProjectId: pe,
		label: v.selectProject,
		searchPlaceholder: v.searchProject,
		required: he,
		disabled: !U
	}) : null, De = _e ?? ((m ?? 0) < 0 ? "clock-out" : "resume"), K = /* @__PURE__ */ p(d, { children: [
		P === "clocked-out" && /* @__PURE__ */ f("div", {
			className: N === "default" ? "mr-3 @xs:mr-0" : void 0,
			children: /* @__PURE__ */ f(o, {
				onClick: C,
				label: v.clockIn,
				icon: i
			})
		}),
		P === "clocked-in" && /* @__PURE__ */ p(d, { children: [le && /* @__PURE__ */ f(d, { children: z.length > 1 && E ? /* @__PURE__ */ f(c, {
			label: v.break,
			hideLabel: !0,
			value: "",
			options: z,
			onChange: be,
			open: B,
			onOpenChange: V,
			children: /* @__PURE__ */ f("div", {
				"aria-label": "Select break type",
				children: /* @__PURE__ */ f(o, {
					label: v.break,
					variant: "outline",
					icon: r,
					hideLabel: !0
				})
			})
		}) : /* @__PURE__ */ f(o, {
			onClick: ye,
			label: v.break,
			variant: "outline",
			icon: r,
			hideLabel: !0
		}) }), /* @__PURE__ */ f(o, {
			onClick: w,
			label: v.clockOut,
			variant: "outline",
			icon: a
		})] }),
		P === "break" && (De === "clock-out" ? /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(o, {
			onClick: C,
			label: v.resume,
			variant: "outline",
			icon: i,
			hideLabel: !0
		}), /* @__PURE__ */ f(o, {
			onClick: w,
			label: v.clockOut,
			icon: a
		})] }) : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(o, {
			onClick: w,
			label: v.clockOut,
			variant: "outline",
			icon: a,
			hideLabel: !0
		}), /* @__PURE__ */ f(o, {
			onClick: C,
			label: v.resume,
			icon: i
		})] }))
	] }), q = N === "horizontal-bar" ? Te : de ?? we, J = N === "horizontal-bar" ? Ee : ue, Oe = /* @__PURE__ */ p(d, { children: [
		x && q,
		A && J,
		G && M ? /* @__PURE__ */ f(s, { text: M }) : null
	] }), Y = x && !!q, X = A && !!J, Z = Y ? /* @__PURE__ */ f("div", {
		className: e("flex min-w-0 flex-1 flex-row", H && h),
		children: q
	}) : null, Q = X ? /* @__PURE__ */ f("div", {
		className: e("min-w-0 flex-1", U && h),
		children: J
	}) : null, $ = Y && X, ke = $ ? Q : null, Ae = $ ? Z : Z ?? Q;
	if (ve) return /* @__PURE__ */ f(se, {
		variant: N,
		canSeeGraph: D,
		canShowLocation: x,
		canShowProject: A && !!(j?.length ?? J)
	});
	if (N === "horizontal-bar") {
		let { primaryLabel: e, time: r } = te({
			data: _,
			trackedMinutes: t,
			remainingMinutes: O ? m : 0
		});
		return /* @__PURE__ */ p("div", {
			className: "flex flex-col gap-2",
			children: [
				/* @__PURE__ */ p("div", {
					className: "flex flex-row items-end justify-between gap-2",
					children: [/* @__PURE__ */ p("div", {
						className: "flex min-w-0 flex-row items-baseline gap-1.5",
						children: [
							/* @__PURE__ */ f("span", {
								className: "line-clamp-1 shrink-0 text-xl font-semibold text-f1-foreground",
								children: F
							}),
							/* @__PURE__ */ f(g, { color: L }),
							G && M && /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f("span", {
								"aria-hidden": !0,
								className: "shrink-0 text-f1-foreground-secondary",
								children: "·"
							}), /* @__PURE__ */ f(n, {
								tag: "span",
								className: "min-w-0 flex-1 text-f1-foreground-secondary",
								children: M
							})] })
						]
					}), /* @__PURE__ */ f("span", {
						className: "shrink-0 text-xl font-semibold tabular-nums text-f1-foreground",
						children: r
					})]
				}),
				D && /* @__PURE__ */ f(l, {
					variant: "horizontal-bar",
					data: _,
					trackedMinutes: t,
					remainingMinutes: O ? m : 0
				}),
				/* @__PURE__ */ p("div", {
					className: "flex flex-row items-center justify-between gap-2 text-f1-foreground-secondary",
					children: [/* @__PURE__ */ f("span", {
						className: "tabular-nums",
						children: e
					}), I && /* @__PURE__ */ f("span", {
						className: "line-clamp-1 tabular-nums",
						children: I
					})]
				}),
				/* @__PURE__ */ p("div", {
					className: "flex flex-col gap-2 pt-1",
					children: [ke, /* @__PURE__ */ p("div", {
						className: "flex w-full flex-row items-center gap-2",
						children: [Ae, /* @__PURE__ */ f("div", {
							className: "ml-auto flex shrink-0 flex-row items-center gap-2",
							children: K
						})]
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ f("div", {
		className: "@container",
		children: /* @__PURE__ */ p("div", {
			className: "flex-grow flex-col",
			children: [/* @__PURE__ */ p("div", {
				className: "flex flex-col-reverse items-center gap-2 @xs:flex-row",
				children: [/* @__PURE__ */ p("div", {
					className: "flex-1 space-y-4",
					children: [/* @__PURE__ */ p("div", {
						className: "flex flex-col items-center space-y-0.5 @xs:items-start",
						children: [/* @__PURE__ */ p("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ f("span", {
								className: "line-clamp-1 text-2xl font-semibold text-f1-foreground",
								children: F
							}), /* @__PURE__ */ f(g, { color: L })]
						}), I && /* @__PURE__ */ f("p", {
							className: "line-clamp-1 text-f1-foreground-secondary",
							children: I
						})]
					}), /* @__PURE__ */ f("div", {
						className: "flex justify-center gap-2 @xs:justify-start",
						children: K
					})]
				}), D && /* @__PURE__ */ f(l, {
					data: _,
					trackedMinutes: t,
					remainingMinutes: O ? m : 0
				})]
			}), /* @__PURE__ */ f("div", {
				className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start",
				children: Oe
			})]
		})
	});
}
//#endregion
export { _ as ClockInControls };
