import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../F0Icon/F0Icon.js";
import n from "../../../../icons/app/ArrowUp.js";
import r from "../../../../icons/app/SolidStop.js";
import { F0Button as i } from "../../../F0Button/F0Button.js";
import { DropdownMenu as a, DropdownMenuContent as o, DropdownMenuItem as s, DropdownMenuPortal as c, DropdownMenuSub as l, DropdownMenuSubContent as u, DropdownMenuSubTrigger as d, DropdownMenuTrigger as f } from "../../../../ui/dropdown-menu.js";
import { F0ActionItem as p } from "../../../../kits/ai/F0ActionItem/F0ActionItem.js";
import { useEffect as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import { motion as b } from "motion/react";
//#region src/components/RichText/internal/Enhance/EnhanceMenu.tsx
var x = ({ onSelect: x, enhancementOptions: S, inputPlaceholder: C, darkMode: w = !1, menuWidth: T, menuState: E = "idle", loadingLabel: D = "Thinking...", onAccept: O, onReject: k, onRetry: A, canShowOptions: j = !0, compactReview: M = !1 }) => {
	let [N, P] = g(""), F = h(null);
	m(() => {
		let e = F.current;
		if (!e) return;
		let t = window.setTimeout(() => {
			e.focus({ preventScroll: !0 });
			let t = e.value.length;
			e.setSelectionRange(t, t);
		}, 300);
		return () => {
			window.clearTimeout(t);
		};
	}, []);
	let I = (e) => {
		x({
			selectedIntent: e.id,
			customIntent: void 0
		});
	}, L = E === "idle", R = E === "loading", z = E === "review", B = z && M, V = L && j && S.length > 0;
	return /* @__PURE__ */ v("div", {
		className: e("flex max-w-full flex-col", B ? "w-fit" : "w-full", w && "dark"),
		style: { width: !B && T ? `${T}px` : void 0 },
		children: /* @__PURE__ */ y(a, {
			open: V,
			onOpenChange: () => {},
			modal: !1,
			children: [/* @__PURE__ */ v(f, {
				asChild: !0,
				children: /* @__PURE__ */ y(b.div, {
					className: e("relative isolate", "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background py-1.5 px-1.5 text-f1-foreground transition-all duration-200", L && e("[--gradient-angle:180deg]", "border border-solid border-f1-background-tertiary", "before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:bg-f1-background before:content-['']", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-md after:blur-[6px] after:content-['']", "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "from-[#E55619] via-[#A1ADE5] to-[#E51943]"), B && "border border-solid border-f1-border-secondary drop-shadow-md", L && "pl-4", z && !B && "px-0"),
					onClick: () => {
						F.current?.focus();
					},
					children: [
						L && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("input", {
							"data-enhance-input": "true",
							type: "text",
							placeholder: C,
							autoFocus: !0,
							value: N,
							onChange: (e) => P(e.target.value),
							onKeyDown: (e) => {
								e.stopPropagation(), e.key === "Enter" && N.trim() && (e.preventDefault(), x({
									selectedIntent: void 0,
									customIntent: N.trim()
								}));
							},
							ref: F,
							className: "relative z-20 min-w-0 flex-1 border-none bg-transparent text-f1-foreground placeholder:text-f1-foreground-secondary"
						}), /* @__PURE__ */ v("div", {
							className: "relative z-20 w-fit py-px",
							children: /* @__PURE__ */ v(i, {
								variant: "default",
								icon: n,
								label: "send",
								hideLabel: !0,
								onClick: () => {
									x({
										selectedIntent: void 0,
										customIntent: N.trim()
									});
								}
							})
						})] }),
						R && /* @__PURE__ */ y("div", {
							className: e("relative z-20 flex h-8 min-w-0 flex-1 items-center gap-2 pl-2", w && "dark"),
							children: [/* @__PURE__ */ v(p, {
								title: D,
								status: "executing"
							}), /* @__PURE__ */ v(i, {
								variant: "default",
								icon: r,
								label: "Stop",
								hideLabel: !0,
								disabled: !0,
								onClick: A
							})]
						}),
						z && /* @__PURE__ */ y("div", {
							className: e("relative z-20 flex items-center justify-between gap-2", B ? "w-fit whitespace-nowrap" : "w-full", w && "dark"),
							children: [
								/* @__PURE__ */ v(i, {
									variant: "outline",
									label: "Try again",
									onClick: A
								}),
								B && /* @__PURE__ */ v("div", { className: "h-4 w-px bg-f1-border rounded-full" }),
								/* @__PURE__ */ y("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ v(i, {
										variant: "outline",
										label: "Discard",
										onClick: k
									}), /* @__PURE__ */ v(i, {
										variant: "default",
										label: "Accept",
										onClick: O
									})]
								})
							]
						})
					]
				})
			}), V && /* @__PURE__ */ v(o, {
				align: "start",
				sideOffset: 4,
				className: e("scrollbar-macos max-h-60 w-72 !min-w-0 overflow-y-auto border border-solid border-f1-border-secondary", w && "dark"),
				style: { zIndex: 1e4 },
				onCloseAutoFocus: (e) => e.preventDefault(),
				onFocusOutside: (e) => e.preventDefault(),
				onInteractOutside: (e) => e.preventDefault(),
				children: S.map((n) => n.subOptions && n.subOptions.length > 0 ? /* @__PURE__ */ y(l, { children: [/* @__PURE__ */ v(d, {
					className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
					children: /* @__PURE__ */ y("div", {
						className: "flex w-full flex-row items-center gap-2",
						children: [n.icon && /* @__PURE__ */ v(t, {
							icon: n.icon,
							color: "default"
						}), /* @__PURE__ */ v("span", {
							className: "flex-1 text-base font-medium",
							children: n.label
						})]
					})
				}), /* @__PURE__ */ v(c, { children: /* @__PURE__ */ v(u, {
					className: e(w && "dark", "border border-solid border-f1-border-secondary"),
					style: { zIndex: 10001 },
					children: n.subOptions?.map((e) => /* @__PURE__ */ v(s, {
						onSelect: (t) => {
							t.preventDefault(), I(e);
						},
						children: /* @__PURE__ */ y("div", {
							className: "flex w-full flex-row items-center gap-2",
							children: [e.icon && /* @__PURE__ */ v(t, {
								icon: e.icon,
								color: "default"
							}), /* @__PURE__ */ v("span", {
								className: "flex-1",
								children: e.label
							})]
						})
					}, e.id))
				}) })] }, n.id) : /* @__PURE__ */ v(s, {
					onSelect: (e) => {
						e.preventDefault(), I(n);
					},
					children: /* @__PURE__ */ y("div", {
						className: "flex w-full flex-row items-center gap-2",
						children: [n.icon && /* @__PURE__ */ v(t, {
							icon: n.icon,
							color: "default"
						}), /* @__PURE__ */ v("span", {
							className: "flex-1",
							children: n.label
						})]
					})
				}, n.id))
			})]
		})
	});
};
//#endregion
export { x as AIEnhanceMenu };
