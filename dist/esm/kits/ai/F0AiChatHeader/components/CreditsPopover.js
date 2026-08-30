import e from "../../../../icons/app/Sliders.js";
import t from "../../../../icons/app/Upsell.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as r } from "../../../../components/F0Button/internal.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { OneEllipsis as a } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarCompany as o } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { Popover as s, PopoverContent as c, PopoverTrigger as l } from "../../../../ui/popover.js";
import { useCallback as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { motion as h } from "motion/react";
//#region src/kits/ai/F0AiChatHeader/components/CreditsPopover.tsx
function g({ credits: g, trigger: _ }) {
	let v = n(), [y, b] = d(!1), [x, S] = d(!1), [C, w] = d(!1), [T, E] = d(null), D = u((e) => {
		b(e), e && g?.fetchUsage && (S(!0), w(!1), g.fetchUsage().then((e) => {
			E(e), w(!1);
		}).catch(() => {
			w(!0);
		}).finally(() => {
			S(!1);
		}));
	}, [g]);
	if (!g) return null;
	let O = T ? Math.min(100, Math.round(T.used / T.total * 100)) : 0, k = g.companyName;
	return /* @__PURE__ */ m(s, {
		open: y,
		onOpenChange: D,
		children: [/* @__PURE__ */ p(l, {
			asChild: !0,
			children: _ ?? /* @__PURE__ */ p(r, {
				variant: "ghost",
				hideLabel: !0,
				label: v.t("ai.credits.title"),
				icon: e,
				pressed: y
			})
		}), /* @__PURE__ */ m(c, {
			side: "bottom",
			align: "end",
			alignOffset: -68,
			sideOffset: 4,
			collisionPadding: 12,
			className: "flex w-[324px] flex-col gap-3 rounded-md border border-solid border-f1-border-secondary p-3",
			children: [k && /* @__PURE__ */ m("div", {
				className: "flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-left text-lg text-f1-foreground",
				children: [/* @__PURE__ */ p(o, {
					name: g.companyName ?? "",
					src: g.companyLogoUrl,
					size: "lg"
				}), /* @__PURE__ */ m("div", {
					className: "flex min-w-0 flex-col",
					children: [/* @__PURE__ */ p(a, {
						tag: "span",
						className: "font-medium",
						children: g.companyName ?? ""
					}), g.planName && /* @__PURE__ */ p(a, {
						tag: "span",
						className: "text-sm font-medium text-f1-foreground-secondary",
						children: g.planName
					})]
				})]
			}), /* @__PURE__ */ m("div", {
				className: "flex flex-col rounded border border-solid border-f1-border-secondary",
				children: [/* @__PURE__ */ m("div", {
					className: "flex flex-col gap-2 p-3",
					children: [
						x && /* @__PURE__ */ m("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ m("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ p("div", { className: "h-5 w-16 animate-pulse rounded bg-f1-background-secondary" }), /* @__PURE__ */ p("div", { className: "h-5 w-20 animate-pulse rounded bg-f1-background-secondary" })]
								}),
								/* @__PURE__ */ p("div", { className: "h-2 w-full animate-pulse rounded-full bg-f1-background-secondary" }),
								/* @__PURE__ */ m("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ p("div", { className: "h-2 w-2 animate-pulse rounded-full bg-f1-background-secondary" }), /* @__PURE__ */ p("div", { className: "h-3 w-28 animate-pulse rounded bg-f1-background-secondary" })]
								})
							]
						}),
						C && /* @__PURE__ */ p("span", {
							className: "text-sm text-f1-foreground-secondary",
							children: v.t("ai.credits.creditsError")
						}),
						!x && !C && T && /* @__PURE__ */ m(f, { children: [
							/* @__PURE__ */ m("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ p("span", {
									className: "text-base font-medium text-f1-foreground",
									children: v.t("ai.credits.title")
								}), /* @__PURE__ */ p("span", {
									className: "font-medium text-f1-foreground-secondary",
									children: v.t("ai.credits.creditsLeft", { total: Math.max(0, T.total - T.used).toLocaleString() })
								})]
							}),
							/* @__PURE__ */ p("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ p("div", {
									className: "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
									children: /* @__PURE__ */ p(h.div, {
										className: "h-full rounded-full",
										style: {
											width: `${O}%`,
											backgroundImage: "linear-gradient(90deg, #E55619, #A1ADE5, #E51943, #E55619)",
											backgroundSize: "300% 100%"
										},
										animate: { backgroundPosition: ["0% 0%", "100% 0%"] },
										transition: {
											duration: 4,
											ease: "linear",
											repeat: Infinity,
											repeatType: "reverse"
										}
									})
								})
							}),
							/* @__PURE__ */ m("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ p("div", { className: "h-2 w-2 rounded-full bg-f1-border" }), /* @__PURE__ */ p("span", {
									className: "text-sm tabular-nums text-f1-foreground-secondary",
									children: v.t("ai.credits.monthlyCredits")
								})]
							})
						] })
					]
				}), g.upgradePlanUrl && /* @__PURE__ */ m("div", {
					className: "flex items-center justify-between border-0 border-t border-solid border-f1-border-secondary p-3",
					children: [/* @__PURE__ */ p("span", { children: v.t("ai.credits.needMoreCredits") }), /* @__PURE__ */ p(i, {
						variant: "outlinePromote",
						href: g.upgradePlanUrl,
						label: v.t("ai.credits.upgradePlan"),
						icon: t
					})]
				})]
			})]
		})]
	});
}
//#endregion
export { g as CreditsPopover };
