import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import ee from "../../../../icons/app/Delete.js";
import r from "../../../../icons/app/Download.js";
import i from "../../../../icons/app/Ellipsis.js";
import a from "../../../../icons/app/InfoCircleLine.js";
import te from "../../../../icons/app/Maximize.js";
import o from "../../../../icons/app/Minimize.js";
import { useI18n as ne } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as s } from "../../../../components/F0Button/internal.js";
import { DropdownMenu as c, DropdownMenuContent as l, DropdownMenuGroup as u, DropdownMenuItem as d, DropdownMenuPortal as re, DropdownMenuSub as ie, DropdownMenuSubContent as ae, DropdownMenuSubTrigger as oe, DropdownMenuTrigger as f } from "../../../../ui/dropdown-menu.js";
import p from "../../../../icons/ai/One.js";
import { useAiChat as m } from "../../../../kits/ai/F0AiChat/providers/AiChatStateProvider.js";
import { InfoHint as h } from "../../../../lib/InfoHint/InfoHint.js";
import { OneEmptyState as se } from "../../../../components/OneEmptyState/OneEmptyState.js";
import { F0RichTextDisplay as ce } from "../../../../components/RichText/F0RichTextDisplay/F0RichTextDisplay.js";
import { F0ButtonToggleGroup as le } from "../../../../components/F0ButtonToggleGroup/index.js";
import { DashboardItemFilters as g } from "./DashboardItemFilters.js";
import { useRef as _, useState as v } from "react";
import { Fragment as y, jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/DashboardItem/DashboardItem.tsx
function S({ title: S, description: C, info: w, isLoading: T, error: E, onRetry: D, skeleton: ue, children: de, actions: fe = [], itemFilters: O, editMode: pe, handleDelete: k, onAskAi: A, onAskAiTarget: me, itemId: j, chartTypeOptions: M, explanation: N, isFullscreen: P = !1, descriptionAction: F, fitContent: I = !1, onFullscreenChange: L }) {
	let [R, he] = v(!1), [ge, z] = v(!1), B = _(!1), [V, H] = v(!1), U = ne(), { enabled: _e, setPendingQuote: ve, setOpen: ye, focusChatInput: be } = m(), W = (e) => {
		he(e), e || H(!1);
	}, G = fe.filter((e) => !("type" in e) || e.type === "item" || e.type === void 0), K = G.length > 0, q = pe && k && j, J = M && M.length > 0, Y = !!N && N.trim().length > 0, xe = !!L, X = S.trim().length > 0 && (A ? !!j : _e), Se = X || K || q || J || Y, Z = e("flex flex-shrink-0 gap-0.5", !P && "opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover/dashitem:delay-0 sm:[@media(hover:hover)]:opacity-0 focus-within:sm:opacity-100 group-hover/dashitem:sm:opacity-100", !P && (R || ge) && "delay-0 !opacity-100"), Ce = () => {
		if (A) {
			if (!j) return;
			A({
				id: j,
				title: S
			});
			return;
		}
		P && L?.(!1), B.current = !0;
		let e = { text: S };
		j && me?.({
			id: j,
			title: S,
			quote: e
		}), ve(e), ye(!0);
	}, Q = (e) => {
		B.current && (B.current = !1, be() && e.preventDefault());
	}, $ = X ? /* @__PURE__ */ b(u, { children: /* @__PURE__ */ b(d, {
		onClick: Ce,
		children: /* @__PURE__ */ x("div", {
			className: "flex w-full flex-row items-center gap-2",
			children: [/* @__PURE__ */ b(t, { icon: p }), /* @__PURE__ */ b("span", {
				className: "flex-1",
				children: U.ai.dashboardItem.askOne
			})]
		})
	}) }) : null;
	return E ? /* @__PURE__ */ x("div", {
		className: "group/dashitem flex h-full flex-col overflow-hidden rounded-lg border border-solid border-f1-border-secondary",
		children: [/* @__PURE__ */ x("div", {
			className: "flex shrink-0 items-start gap-2 p-4",
			children: [/* @__PURE__ */ x("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ x("div", {
					className: "flex min-w-0 items-start gap-1",
					children: [/* @__PURE__ */ b("h3", {
						className: "text-base font-medium text-f1-foreground",
						children: S
					}), w && /* @__PURE__ */ b("div", {
						className: "flex shrink-0 items-center text-f1-foreground-secondary",
						children: /* @__PURE__ */ b(h, { info: w })
					})]
				}), C && /* @__PURE__ */ b("p", {
					className: "text-base text-f1-foreground-secondary",
					children: C
				})]
			}), (O || X) && /* @__PURE__ */ x("div", {
				className: Z,
				children: [O && /* @__PURE__ */ b(g, {
					...O,
					onOpenChange: z
				}), X && /* @__PURE__ */ x(c, {
					open: R,
					onOpenChange: W,
					children: [/* @__PURE__ */ b(f, {
						asChild: !0,
						children: /* @__PURE__ */ b(s, {
							label: U.actions.other,
							icon: i,
							variant: "ghost",
							size: "md",
							hideLabel: !0,
							pressed: R,
							compact: !0,
							onClick: (e) => e.stopPropagation()
						})
					}), /* @__PURE__ */ b(l, {
						align: "end",
						className: "py-1",
						onCloseAutoFocus: Q,
						children: $
					})]
				})]
			})]
		}), /* @__PURE__ */ b("div", {
			className: "min-h-0 flex-1 overflow-auto",
			children: /* @__PURE__ */ b(se, {
				variant: "critical",
				title: U.ai.dashboardItem.errorTitle,
				description: E.message,
				actions: D ? [{
					type: "default",
					label: U.ai.dashboardItem.retry,
					onClick: D
				}] : []
			})
		})]
	}) : /* @__PURE__ */ x("div", {
		className: e("group/dashitem flex flex-col rounded-lg border border-solid border-f1-border-secondary bg-f1-background", I ? "min-h-full shrink-0" : "h-full"),
		"aria-busy": T ? "true" : void 0,
		"aria-live": T ? "polite" : void 0,
		children: [/* @__PURE__ */ x("div", {
			className: "flex items-start px-4 py-3",
			children: [/* @__PURE__ */ x("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ x("div", {
					className: "flex min-w-0 items-center gap-1",
					children: [/* @__PURE__ */ b(n, {
						tag: "h3",
						className: "text-base font-semibold text-f1-foreground",
						children: S
					}), w && /* @__PURE__ */ b("div", {
						className: "flex shrink-0 items-center text-f1-foreground-secondary",
						children: /* @__PURE__ */ b(h, { info: w })
					})]
				}), (C || F) && /* @__PURE__ */ x("div", {
					className: "flex items-baseline gap-1",
					children: [C && /* @__PURE__ */ b(n, {
						className: "text-base text-f1-foreground-secondary",
						children: C
					}), F && /* @__PURE__ */ x(y, { children: [C && /* @__PURE__ */ b("span", {
						"aria-hidden": "true",
						className: "shrink-0 text-base text-f1-foreground-tertiary",
						children: "·"
					}), /* @__PURE__ */ b("button", {
						type: "button",
						onClick: F.onClick,
						className: "shrink-0 cursor-pointer whitespace-nowrap border-0 bg-transparent p-0 text-base font-medium text-f1-foreground-secondary underline hover:text-f1-foreground",
						children: F.label
					})] })]
				})]
			}), /* @__PURE__ */ x("div", {
				className: Z,
				children: [
					O && /* @__PURE__ */ b(g, {
						...O,
						onOpenChange: z
					}),
					xe && /* @__PURE__ */ b(s, {
						label: P ? U.actions.collapse : U.actions.expand,
						icon: P ? o : te,
						variant: "ghost",
						size: "md",
						hideLabel: !0,
						compact: !0,
						onClick: () => L?.(!P)
					}),
					Se && /* @__PURE__ */ x(c, {
						open: R,
						onOpenChange: W,
						children: [/* @__PURE__ */ b(f, {
							asChild: !0,
							children: /* @__PURE__ */ b(s, {
								label: U.actions.other,
								icon: i,
								variant: "ghost",
								size: "md",
								hideLabel: !0,
								pressed: R,
								compact: !0,
								onClick: (e) => e.stopPropagation()
							})
						}), /* @__PURE__ */ b(l, {
							align: "end",
							className: e("py-1", V && "w-96 max-w-[90vw]"),
							onCloseAutoFocus: Q,
							children: V && Y ? /* @__PURE__ */ b("div", {
								className: "px-3 py-2 text-base text-f1-foreground [&>div]:flex [&>div]:flex-col [&>div]:gap-2",
								children: /* @__PURE__ */ b(ce, {
									content: N,
									format: "markdown"
								})
							}) : /* @__PURE__ */ x(y, { children: [
								J && /* @__PURE__ */ x("div", {
									className: "mb-1 flex flex-col items-start gap-2 border-0 border-b border-solid border-f1-border-secondary p-3",
									children: [/* @__PURE__ */ b(n, {
										className: "text-base font-medium text-f1-foreground-tertiary",
										children: U.ai.dashboardItem.chartType
									}), /* @__PURE__ */ b(le, {
										items: M.map((e) => ({
											value: e.value,
											icon: e.icon,
											label: e.label
										})),
										value: M.find((e) => e.isActive)?.value,
										onChange: (e) => {
											M.find((t) => t.value === e)?.onSelect();
										},
										size: "lg",
										required: !0,
										withBorder: !1,
										fullWidth: !0
									})]
								}),
								Y && /* @__PURE__ */ b(u, { children: /* @__PURE__ */ b(d, {
									onSelect: (e) => {
										e.preventDefault(), H(!0);
									},
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [/* @__PURE__ */ b(t, { icon: a }), /* @__PURE__ */ b("span", {
											className: "flex-1",
											children: U.ai.dashboardItem.dataExplanation
										})]
									})
								}) }),
								$,
								K && /* @__PURE__ */ b(u, { children: /* @__PURE__ */ x(ie, { children: [/* @__PURE__ */ b(oe, {
									className: "mx-1 rounded-sm px-2",
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2 pr-2",
										children: [/* @__PURE__ */ b(t, { icon: r }), /* @__PURE__ */ b("span", {
											className: "flex-1 text-base font-medium",
											children: U.ai.dataDownload.title
										})]
									})
								}), /* @__PURE__ */ b(re, { children: /* @__PURE__ */ b(ae, { children: G.map((e) => /* @__PURE__ */ b(d, {
									onClick: e.onClick,
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [e.icon && /* @__PURE__ */ b(t, { icon: e.icon }), /* @__PURE__ */ b("span", {
											className: "flex-1",
											children: e.label
										})]
									})
								}, e.label)) }) })] }) }),
								q && /* @__PURE__ */ b(u, { children: /* @__PURE__ */ b(d, {
									onClick: () => {
										P && L?.(!1), k(j);
									},
									className: e("text-f1-foreground-critical"),
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [/* @__PURE__ */ b(t, { icon: ee }), /* @__PURE__ */ b("span", {
											className: "flex-1",
											children: U.actions.delete
										})]
									})
								}) })
							] })
						})]
					})
				]
			})]
		}), /* @__PURE__ */ b("div", {
			className: e("flex-1", !I && "min-h-0"),
			children: T ? ue : de
		})]
	});
}
//#endregion
export { S as DashboardItem };
