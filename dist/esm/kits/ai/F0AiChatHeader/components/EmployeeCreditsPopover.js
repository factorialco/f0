import e from "../../../../icons/app/Sliders.js";
import { useI18n as t } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as n } from "../../../../components/F0Button/internal.js";
import { OneEllipsis as r } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarCompany as i } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { Popover as a, PopoverContent as o, PopoverTrigger as s } from "../../../../ui/popover.js";
import { useReducedMotion as c } from "../../../../lib/a11y.js";
import { useCallback as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { motion as p } from "motion/react";
//#region src/kits/ai/F0AiChatHeader/components/EmployeeCreditsPopover.tsx
var m = "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)";
function h({ employeeCredits: h, trigger: g }) {
	let _ = t(), v = c(), [y, b] = u(!1), [x, S] = u(!1), [C, w] = u(!1), [T, E] = u(null), D = l((e) => {
		b(e), e && h?.fetchUsage && (S(!0), w(!1), h.fetchUsage().then((e) => {
			E(e), w(!1);
		}).catch(() => {
			w(!0);
		}).finally(() => {
			S(!1);
		}));
	}, [h]);
	if (!h) return null;
	let O = !!h.companyName, k = T && T.total > 0 ? Math.min(100, Math.round(T.used / T.total * 100)) : 0, A = T ? Math.max(0, T.total - T.used) : 0;
	return /* @__PURE__ */ f(a, {
		open: y,
		onOpenChange: D,
		children: [/* @__PURE__ */ d(s, {
			asChild: !0,
			children: g ?? /* @__PURE__ */ d(n, {
				variant: "ghost",
				hideLabel: !0,
				label: _.t("ai.credits.title"),
				icon: e,
				pressed: y
			})
		}), /* @__PURE__ */ f(o, {
			side: "bottom",
			align: "end",
			alignOffset: -68,
			sideOffset: 4,
			collisionPadding: 12,
			className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
			children: [O && /* @__PURE__ */ f("div", {
				className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground",
				children: [/* @__PURE__ */ d(i, {
					name: h.companyName ?? "",
					src: h.companyLogoUrl,
					size: "lg"
				}), /* @__PURE__ */ f("div", {
					className: "flex min-w-0 flex-col",
					children: [/* @__PURE__ */ d(r, {
						tag: "span",
						className: "font-medium",
						children: h.companyName ?? ""
					}), h.planName && /* @__PURE__ */ d(r, {
						tag: "span",
						className: "text-sm font-medium text-f1-foreground-secondary",
						children: h.planName
					})]
				})]
			}), /* @__PURE__ */ d("div", {
				className: "flex flex-col rounded border border-solid border-f1-border-secondary",
				children: /* @__PURE__ */ f("div", {
					className: "flex flex-col gap-2 p-3",
					children: [
						x && /* @__PURE__ */ f("div", {
							className: "flex flex-col gap-2",
							"aria-busy": "true",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ f("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ d("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }), /* @__PURE__ */ d("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })]
								}),
								/* @__PURE__ */ d("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
								/* @__PURE__ */ f("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ d("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }), /* @__PURE__ */ d("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })]
								})
							]
						}),
						C && /* @__PURE__ */ d("span", {
							className: "text-sm text-f1-foreground-secondary",
							children: _.t("ai.credits.creditsError")
						}),
						!x && !C && T && /* @__PURE__ */ f("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ f("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ d("span", {
										className: "text-base font-medium text-f1-foreground",
										children: _.t("ai.credits.employeeCredits")
									}), /* @__PURE__ */ d("span", {
										className: "font-medium text-f1-foreground-secondary",
										children: _.t("ai.credits.creditsLeft", { total: A.toLocaleString() })
									})]
								}),
								/* @__PURE__ */ d("div", {
									className: "flex items-center gap-2",
									children: /* @__PURE__ */ d("div", {
										className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
										children: /* @__PURE__ */ d(p.div, {
											className: "h-full rounded-full",
											style: {
												width: `${k}%`,
												backgroundImage: m,
												backgroundSize: "300% 100%"
											},
											animate: v ? void 0 : { backgroundPosition: ["0% 0%", "100% 0%"] },
											transition: {
												duration: v ? 0 : 4,
												ease: "linear",
												repeat: v ? 0 : Infinity,
												repeatType: "reverse"
											}
										})
									})
								}),
								/* @__PURE__ */ f("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ d("div", { className: "h-2 w-2 rounded-full bg-f1-border" }), /* @__PURE__ */ d("span", {
										className: "text-sm tabular-nums text-f1-foreground-secondary",
										children: _.t("ai.credits.monthlyCredits")
									})]
								})
							]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { h as EmployeeCreditsPopover };
