import { cn as e } from "../../../../lib/utils.js";
import { Skeleton as t } from "../../../../ui/skeleton.js";
import { F0Avatar as n } from "../../../../components/avatars/F0Avatar/index.js";
import { useF0GraphRenderConfigInternal as r } from "../../contexts.js";
import { tagColumn as ee } from "./types.js";
import { F0GraphNodeHoverCard as i } from "./F0GraphNodeHoverCard.js";
import { F0GraphNodeStackedRow as te } from "./F0GraphNodeStackedRow.js";
import { F0GraphNodeTags as ne } from "./F0GraphNodeTags.js";
import { graphNodeContainerVariants as re } from "./variants.js";
import { forwardRef as a, useCallback as o, useEffect as s, useRef as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import { AnimatePresence as f, motion as p, useReducedMotion as ie } from "motion/react";
import { NodeToolbar as m, Position as ae } from "@xyflow/react";
//#region src/patterns/F0Graph/components/F0GraphNode/F0GraphNode.tsx
var oe = "opacity 120ms ease-out", se = "transform 120ms ease-out", ce = "opacity 84ms ease-out", h = a(({ variant: a = "detail", state: h = "default", expanded: g, level: _, tabIndex: v = 0, setSize: y, posInSet: b, hasChildren: x, childrenCount: le, onExpandToggle: S, onClick: C, nodeRef: w, nodeId: T, ariaOwns: E, avatar: D, title: O, subtitle: k, tags: A, visibleTagTypes: j, tagLabels: M, actions: N, loading: P, hoverCard: F, stacked: I, trailing: L, stackedHeight: R }, z) => {
	let B = o((e) => {
		typeof z == "function" ? z(e) : z && (z.current = e), w?.(e);
	}, [z, w]), V = ie(), H = r(), U = V || H?.largeGraph === !0, W = c(a), G = W.current !== a && (a === "dot" || W.current === "dot"), ue = G ? W.current : a;
	s(() => {
		let e = window.setTimeout(() => {
			W.current = a;
		}, 132);
		return () => {
			window.clearTimeout(e);
		};
	}, [a]);
	let K = {
		ref: B,
		id: T ? `f0-graph-node-${T}` : void 0,
		role: "treeitem",
		tabIndex: v,
		"aria-expanded": x ? g : void 0,
		"aria-level": _,
		"aria-setsize": y,
		"aria-posinset": b,
		"aria-selected": h === "selected",
		"aria-owns": E || void 0,
		onClick: C,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), C?.()), e.key === "ArrowRight" && x && !g && (e.preventDefault(), S?.()), e.key === "ArrowLeft" && x && g && (e.preventDefault(), S?.());
		}
	}, q = a === "compact", J = a === "dot", Y = a === "detail", X = A ? j ? A.filter((e) => j.has(ee(e))) : A : void 0, de = Y && !!X && X.length > 0, Z = (e) => de ? /* @__PURE__ */ u(p.div, {
		initial: !U && {
			opacity: 0,
			filter: "blur(3px)"
		},
		animate: {
			opacity: 1,
			filter: "blur(0px)"
		},
		transition: U ? { duration: 0 } : {
			duration: .12,
			ease: [
				.23,
				1,
				.32,
				1
			]
		},
		className: e,
		"data-no-node-select": !0,
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ u(ne, { tags: X })
	}, "tags") : null;
	if (I) return /* @__PURE__ */ d("div", {
		className: "flex w-full flex-col items-center gap-1.5",
		children: [/* @__PURE__ */ u(te, {
			shellProps: K,
			variant: a,
			state: h,
			avatar: D,
			title: O,
			trailing: L,
			loading: P,
			height: R
		}), Z("max-w-full")]
	});
	let Q = D != null && D.type !== "person", fe = J ? !!(O || k || X?.length) : q ? !!(k || X?.length) : !1, $ = /* @__PURE__ */ d("div", {
		...K,
		"data-zoom-level": a,
		className: e(re({
			variant: a,
			state: h
		}), "flex-col gap-1.5", "group outline-none"),
		children: [
			/* @__PURE__ */ d("div", {
				className: e("group/pill relative inline-flex max-w-full flex-col items-stretch", "outline-none", Q ? "rounded-2xl" : "rounded-full", !J && (h === "selected" || h === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", h === "dimmed" && J && "opacity-40", !J && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0", Q ? "p-2.5" : "px-2.5 py-2", "min-h-11"),
				style: { contain: "layout" },
				children: [/* @__PURE__ */ u("div", {
					"aria-hidden": !0,
					className: e("pointer-events-none absolute inset-0 border border-solid bg-f1-background", Q ? "rounded-2xl" : "rounded-full", (!J || G) && "backdrop-blur-[7px]", J ? "border-f1-border-secondary" : "border-f1-border", h !== "selected" && h !== "highlighted" && !J && "group-hover/pill:bg-f1-background-hover", (h === "selected" || h === "highlighted") && "border-f1-border-selected-bold"),
					style: {
						borderWidth: J ? 1.5 : 1,
						opacity: +!J,
						transition: U ? "none" : oe,
						willChange: "opacity",
						transform: "translateZ(0)"
					}
				}), /* @__PURE__ */ d("div", {
					className: "relative inline-flex items-center",
					children: [/* @__PURE__ */ u("div", {
						className: e("flex shrink-0 items-center justify-center", Q ? "rounded-md" : "rounded-full", J && (h === "selected" || h === "highlighted") && "ring-2 ring-f1-background-selected ring-offset-0", J && "group-focus-visible:ring-2 group-focus-visible:ring-f1-background-selected group-focus-visible:ring-offset-0"),
						style: {
							transform: `translateZ(0) scale(${J ? 96 / 40 : 1})`,
							transformOrigin: "center center",
							transition: U ? "none" : se,
							willChange: "transform"
						},
						children: P ? /* @__PURE__ */ u(t, { className: e("h-10 w-10", Q ? "rounded-md" : "rounded-full") }) : D && /* @__PURE__ */ u(n, {
							size: "lg",
							avatar: D
						})
					}), /* @__PURE__ */ u("div", {
						style: {
							width: J ? 0 : 176,
							marginLeft: J ? 0 : 8,
							opacity: +!J,
							transition: U ? "none" : ce,
							transitionDelay: U || J ? "0ms" : "36ms"
						},
						className: "relative min-w-0 flex-1 self-stretch overflow-hidden whitespace-nowrap",
						children: /* @__PURE__ */ u(f, {
							mode: "sync",
							initial: !1,
							children: /* @__PURE__ */ u(p.div, {
								initial: G || U ? !1 : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								animate: {
									opacity: 1,
									filter: "blur(0px)"
								},
								exit: G || U ? { opacity: 0 } : {
									opacity: 0,
									filter: "blur(2.5px)"
								},
								transition: G || U ? { duration: 0 } : {
									duration: .084,
									ease: [
										.23,
										1,
										.32,
										1
									]
								},
								className: "absolute inset-0 flex flex-col justify-center",
								style: G || U ? void 0 : { willChange: "filter, opacity" },
								children: P ? /* @__PURE__ */ d("div", {
									className: "flex flex-col justify-center gap-1.5",
									children: [/* @__PURE__ */ u(t, {
										className: "rounded-xs",
										style: {
											height: q ? 20 : 12,
											width: q ? 120 : 96
										}
									}), !q && !J && /* @__PURE__ */ u(t, {
										className: "rounded-xs",
										style: {
											height: 12,
											width: 64
										}
									})]
								}) : /* @__PURE__ */ d(l, { children: [/* @__PURE__ */ u("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground",
									style: {
										fontSize: q ? 24 : 14,
										lineHeight: q ? "32px" : "20px",
										fontWeight: 500
									},
									children: O
								}), !q && !J && k && /* @__PURE__ */ u("p", {
									className: "w-full truncate tracking-[-0.07px] text-f1-foreground-secondary",
									style: {
										fontSize: 14,
										lineHeight: "20px",
										fontWeight: 400
									},
									children: k
								})] })
							}, ue)
						})
					})]
				})]
			}),
			Y && N && /* @__PURE__ */ u(m, {
				nodeId: T,
				isVisible: h === "selected",
				position: ae.Top,
				align: "center",
				offset: 8,
				children: /* @__PURE__ */ u("div", {
					className: "flex items-center gap-1",
					children: N
				})
			}),
			Z("max-w-[256px]")
		]
	});
	return F && fe && !P ? /* @__PURE__ */ u(i, {
		trigger: $,
		avatar: D,
		title: typeof O == "string" ? O : void 0,
		subtitle: typeof k == "string" ? k : void 0,
		tags: X,
		tagLabels: M
	}) : $;
});
h.displayName = "F0GraphNode";
var g = h;
//#endregion
export { g as F0GraphNode };
