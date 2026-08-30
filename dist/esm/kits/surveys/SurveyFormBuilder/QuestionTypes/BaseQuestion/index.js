import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../components/F0Icon/index.js";
import n from "../../../../../icons/app/AcademicCap.js";
import r from "../../../../../icons/app/Add.js";
import i from "../../../../../icons/app/Check.js";
import ee from "../../../../../icons/app/CheckDouble.js";
import a from "../../../../../icons/app/LockLocked.js";
import { useI18n as te } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as ne } from "../../../../../experimental/Overlays/Tooltip/index.js";
import { F0Button as o } from "../../../../../components/F0Button/F0Button.js";
import { DropdownMenu as s, DropdownMenuContent as c, DropdownMenuItem as l, DropdownMenuPortal as u, DropdownMenuSeparator as d, DropdownMenuSub as f, DropdownMenuSubContent as p, DropdownMenuSubTrigger as re, DropdownMenuTrigger as ie } from "../../../../../ui/dropdown-menu.js";
import { FormMessage as ae } from "../../../../../ui/form.js";
import { useSurveyFormBuilderContext as m } from "../../Context.js";
import { useDragContext as oe } from "../../DragContext.js";
import { useQuestionTypes as se } from "../../constants.js";
import { ActionsMenu as ce } from "./ActionsMenu/index.js";
import { useQuestionDisabled as h } from "./useQuestionDisabled.js";
import { useEffect as g, useRef as _, useState as v } from "react";
import { Fragment as y, jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseQuestion/index.tsx
var S = { fieldSizing: "content" }, C = ({ id: h, title: C, description: w, children: T, required: E, type: D, hiddenActions: le, locked: ue, lockedNote: de }) => {
	let { onQuestionChange: O, onAddNewElement: k, disabled: A, answering: j, getIsSingleQuestionInSection: M, getSectionContainingQuestion: N, isQuestionTypeAllowed: P, placeholders: F, labels: I } = m(), L = N(h), R = !!L?.locked || !!ue, z = !!L, [B, V] = v(!1), [H, fe] = v(!1), { isDragging: pe } = oe(), { t: U } = te(), W = F?.questionTitle ?? U("surveyFormBuilder.labels.titlePlaceholder"), me = I?.addQuestion ?? U("surveyFormBuilder.actions.addQuestion"), he = F?.questionDescription ?? U("surveyFormBuilder.labels.questionDescriptionPlaceholder"), ge = (e) => {
		O?.({
			id: h,
			type: D,
			title: e.target.value
		});
	}, _e = (e) => {
		O?.({
			id: h,
			type: D,
			description: e.target.value
		});
	}, G = (e, t) => {
		k?.({
			type: e,
			afterId: h,
			datasetKey: t
		});
	}, ve = () => {
		k?.({
			type: "section",
			afterId: h
		});
	}, K = se(), ye = K.filter((e) => !e.datasetKey), q = Array.from(new Set(K.filter((e) => !!e.datasetKey).map((e) => e.datasetKey))), J = M(h), Y = _(null), be = _(!J);
	g(() => {
		be.current && Y.current?.focus({ preventScroll: !0 });
	}, []);
	let X = A || R || j, Z = !j && X, Q = !X || !!w, $ = R ? { description: de?.description ?? L?.lockedNote?.description ?? U("surveyFormBuilder.labels.lockedQuestionNotice") } : null;
	return /* @__PURE__ */ x("div", {
		id: `co-creation-question-${h}`,
		className: e("group/question relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background px-3 py-3", R && !j && "cursor-not-allowed [&_*]:!cursor-not-allowed", !pe && !j && !R && "hover:border-f1-border-hover", Q ? "gap-4" : "gap-2"),
		children: [
			/* @__PURE__ */ x("div", {
				className: "flex flex-col gap-0.5",
				children: [/* @__PURE__ */ x("div", {
					className: "flex flex-row gap-2",
					children: [
						/* @__PURE__ */ b("div", {
							className: "relative w-full",
							children: j ? /* @__PURE__ */ x("div", {
								className: "w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold text-f1-foreground",
								children: [C || W, E && /* @__PURE__ */ b("span", {
									className: "text-f1-foreground-critical",
									children: " *"
								})]
							}) : /* @__PURE__ */ x(y, { children: [/* @__PURE__ */ b("textarea", {
								ref: Y,
								value: C,
								"aria-label": U("surveyFormBuilder.labels.title"),
								placeholder: W,
								onChange: ge,
								disabled: X,
								className: e("w-full resize-none px-2 py-1 text-lg font-semibold text-f1-foreground placeholder:text-f1-foreground-tertiary [&::-webkit-search-cancel-button]:hidden", Z && "cursor-not-allowed"),
								style: S
							}), /* @__PURE__ */ x("div", {
								className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold",
								children: [/* @__PURE__ */ b("span", {
									className: "opacity-0",
									children: C || W
								}), E && /* @__PURE__ */ x("span", {
									className: e("text-f1-foreground-critical", !C && "text-f1-foreground-secondary"),
									children: [" ", "*"]
								})]
							})] })
						}),
						!A && !j && !R && /* @__PURE__ */ b("div", {
							className: e("opacity-0 group-hover/question:opacity-100", H && "opacity-100"),
							children: /* @__PURE__ */ b(ce, {
								open: H,
								setOpen: fe,
								questionId: h,
								questionType: D,
								canDeleteQuestion: !z || !J,
								hiddenActions: le
							})
						}),
						!j && R && /* @__PURE__ */ b("div", { children: $ ? /* @__PURE__ */ b(ne, {
							instant: !0,
							...$,
							children: /* @__PURE__ */ b("span", {
								className: "inline-flex",
								children: /* @__PURE__ */ b(o, {
									icon: a,
									label: U("surveyFormBuilder.labels.locked"),
									size: "md",
									variant: "ghost",
									tooltip: !1,
									hideLabel: !0,
									disabled: !0,
									withoutDisabledAppearance: !0
								})
							})
						}) : /* @__PURE__ */ b(o, {
							icon: a,
							label: U("surveyFormBuilder.labels.locked"),
							size: "md",
							variant: "ghost",
							tooltip: !1,
							hideLabel: !0,
							disabled: !0,
							withoutDisabledAppearance: !0
						}) })
					]
				}), j ? w ? /* @__PURE__ */ b("p", {
					className: "w-full whitespace-pre-wrap break-words px-2 text-f1-foreground-secondary",
					children: w
				}) : null : Q ? /* @__PURE__ */ b("textarea", {
					value: w,
					"aria-label": U("surveyFormBuilder.labels.description"),
					placeholder: he,
					onChange: _e,
					disabled: X,
					className: e("w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", Z && "cursor-not-allowed"),
					style: S
				}) : null]
			}),
			T,
			j && /* @__PURE__ */ b(ae, {
				className: "-mt-2",
				fallback: U(E ? "forms.validation.required" : "forms.validation.invalidType")
			}),
			!A && !j && !R && /* @__PURE__ */ b("div", {
				className: e("absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100", B && "opacity-100"),
				children: /* @__PURE__ */ x(s, {
					open: B,
					onOpenChange: V,
					children: [/* @__PURE__ */ b(ie, {
						asChild: !0,
						children: /* @__PURE__ */ b(o, {
							icon: r,
							label: me,
							size: "sm",
							variant: "outline",
							hideLabel: !0
						})
					}), /* @__PURE__ */ x(c, {
						align: "center",
						className: "w-80",
						children: [
							!z && /* @__PURE__ */ x(y, { children: [/* @__PURE__ */ b(l, {
								onClick: ve,
								children: /* @__PURE__ */ x("div", {
									className: "flex w-full flex-row items-center gap-2",
									children: [/* @__PURE__ */ b(t, {
										icon: n,
										color: "default"
									}), /* @__PURE__ */ b("span", {
										className: "flex-1 text-base font-medium",
										children: U("surveyFormBuilder.questionTypes.section")
									})]
								})
							}), /* @__PURE__ */ b(d, {})] }),
							ye.map((e) => /* @__PURE__ */ b(l, {
								onClick: () => G(e.questionType),
								children: /* @__PURE__ */ x("div", {
									className: "flex w-full flex-row items-center gap-2",
									children: [/* @__PURE__ */ b(t, {
										icon: e.icon,
										color: "default"
									}), /* @__PURE__ */ b("span", {
										className: "flex-1 text-base font-medium",
										children: e.label
									})]
								})
							}, e.questionType)),
							q.length > 0 && /* @__PURE__ */ x(y, { children: [/* @__PURE__ */ b(d, {}), q.map((e) => {
								let n = K.find((t) => t.datasetKey === e && t.questionType === "dropdown-single");
								return /* @__PURE__ */ x(f, { children: [/* @__PURE__ */ b(re, {
									className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [n && /* @__PURE__ */ b(t, {
											icon: n.icon,
											color: "default"
										}), /* @__PURE__ */ b("span", {
											className: "flex-1 text-base font-medium",
											children: n?.label ?? e
										})]
									})
								}), /* @__PURE__ */ b(u, { children: /* @__PURE__ */ x(p, { children: [P("dropdown-single") && /* @__PURE__ */ b(l, {
									onClick: () => G("dropdown-single", e),
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [/* @__PURE__ */ b(t, {
											icon: i,
											color: "default"
										}), /* @__PURE__ */ b("span", {
											className: "flex-1",
											children: U("surveyFormBuilder.labels.singleSelection")
										})]
									})
								}), P("dropdown-multi") && /* @__PURE__ */ b(l, {
									onClick: () => G("dropdown-multi", e),
									children: /* @__PURE__ */ x("div", {
										className: "flex w-full flex-row items-center gap-2",
										children: [/* @__PURE__ */ b(t, {
											icon: ee,
											color: "default"
										}), /* @__PURE__ */ b("span", {
											className: "flex-1",
											children: U("surveyFormBuilder.labels.multiSelection")
										})]
									})
								})] }) })] }, e);
							})] })
						]
					})]
				})
			})
		]
	});
};
//#endregion
export { C as BaseQuestion, h as useQuestionDisabled };
