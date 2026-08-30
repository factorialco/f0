import { cn as e } from "../../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../../../components/F0Icon/F0Icon.js";
import n from "../../../../../../icons/app/AlertCircleLine.js";
import r from "../../../../../../icons/app/Check.js";
import i from "../../../../../../icons/app/CheckDouble.js";
import a from "../../../../../../icons/app/Delete.js";
import o from "../../../../../../icons/app/Ellipsis.js";
import s from "../../../../../../icons/app/Hub.js";
import c from "../../../../../../icons/app/LayersFront.js";
import l from "../../../../../../icons/app/Plus.js";
import { useI18n as u } from "../../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as d } from "../../../../../../components/F0Button/F0Button.js";
import { DropdownMenu as f, DropdownMenuContent as p, DropdownMenuGroup as m, DropdownMenuItem as h, DropdownMenuLabel as g, DropdownMenuPortal as _, DropdownMenuSeparator as v, DropdownMenuSub as y, DropdownMenuSubContent as b, DropdownMenuSubTrigger as x, DropdownMenuTrigger as S } from "../../../../../../ui/dropdown-menu.js";
import { Switch as C } from "../../../../../../experimental/Forms/Fields/Switch/index.js";
import { useSurveyFormBuilderContext as w } from "../../../Context.js";
import { RATING_OPTIONS as T, useQuestionActions as E } from "./useQuestionActions.js";
import { Fragment as D, jsx as O, jsxs as k } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseQuestion/ActionsMenu/index.tsx
var A = ({ label: e, icon: n, checked: r, onChange: i }) => /* @__PURE__ */ O(h, {
	className: "!pb-2.5 pr-4",
	onClick: (e) => {
		e.preventDefault(), i(!r);
	},
	children: /* @__PURE__ */ k("div", {
		className: "flex w-full flex-row items-center gap-2",
		children: [
			/* @__PURE__ */ O(t, {
				icon: n,
				color: "default"
			}),
			/* @__PURE__ */ O("span", {
				className: "flex-1",
				children: e
			}),
			/* @__PURE__ */ O(C, {
				title: e,
				checked: r,
				onCheckedChange: i,
				hideLabel: !0
			})
		]
	})
}), j = ({ label: e, value: n, currentDatasetKey: a, questionTypes: o, currentRatingType: c, isQuestionTypeAllowed: l, onSelectQuestionType: d, onSelectRatingType: f }) => {
	let { t: p } = u(), m = o.filter((e) => !e.datasetKey), g = Array.from(new Set(o.filter((e) => !!e.datasetKey).map((e) => e.datasetKey))), S = a ? o.find((e) => e.questionType === n && e.datasetKey === a)?.label ?? void 0 : o.find((e) => e.questionType === n && !e.datasetKey)?.label ?? void 0;
	return /* @__PURE__ */ k(y, { children: [/* @__PURE__ */ O(x, {
		className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
		children: /* @__PURE__ */ k("div", {
			className: "flex w-full flex-row items-center gap-2",
			children: [
				/* @__PURE__ */ O(t, {
					icon: s,
					color: "default"
				}),
				/* @__PURE__ */ O("span", {
					className: "flex-1 text-base font-medium",
					children: e
				}),
				!!S && /* @__PURE__ */ O("span", {
					className: "mr-1 text-base text-f1-foreground-secondary",
					children: S
				})
			]
		})
	}), /* @__PURE__ */ O(_, { children: /* @__PURE__ */ k(b, { children: [m.map((e) => {
		let i = e.questionType === "rating", o = n === e.questionType && !a;
		return i ? /* @__PURE__ */ k(y, { children: [/* @__PURE__ */ O(x, {
			className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2 text-base font-medium",
				children: [
					/* @__PURE__ */ O(t, {
						icon: e.icon,
						color: "default"
					}),
					/* @__PURE__ */ O("span", {
						className: "flex-1",
						children: e.label
					}),
					c && /* @__PURE__ */ O("span", {
						className: "mr-1 text-base text-f1-foreground-secondary",
						children: T.find((e) => e.value === c)?.label
					})
				]
			})
		}), /* @__PURE__ */ O(_, { children: /* @__PURE__ */ O(b, { children: T.map((e) => /* @__PURE__ */ O(h, {
			onClick: () => f(e.value),
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2 pl-2",
				children: [/* @__PURE__ */ O("span", {
					className: "flex-1",
					children: e.label
				}), c === e.value && /* @__PURE__ */ O(t, {
					icon: r,
					color: "default"
				})]
			})
		}, e.value)) }) })] }, e.questionType) : /* @__PURE__ */ O(h, {
			onClick: () => d(e.questionType),
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ O(t, {
						icon: e.icon,
						color: "default"
					}),
					/* @__PURE__ */ O("span", {
						className: "flex-1",
						children: e.label
					}),
					o && /* @__PURE__ */ O(t, {
						icon: r,
						color: "default"
					})
				]
			})
		}, e.questionType);
	}), g.length > 0 && /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O(v, {}), g.map((e) => {
		let s = o.find((t) => t.datasetKey === e && t.questionType === "dropdown-single");
		return /* @__PURE__ */ k(y, { children: [/* @__PURE__ */ O(x, {
			className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					s && /* @__PURE__ */ O(t, {
						icon: s.icon,
						color: "default"
					}),
					/* @__PURE__ */ O("span", {
						className: "flex-1 text-base font-medium",
						children: s?.label ?? e
					}),
					a === e && /* @__PURE__ */ O(t, {
						icon: r,
						color: "default"
					})
				]
			})
		}), /* @__PURE__ */ O(_, { children: /* @__PURE__ */ k(b, { children: [l("dropdown-single") && /* @__PURE__ */ O(h, {
			onClick: () => d("dropdown-single", e),
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ O(t, {
						icon: r,
						color: "default"
					}),
					/* @__PURE__ */ O("span", {
						className: "flex-1",
						children: p("surveyFormBuilder.labels.singleSelection")
					}),
					a === e && n === "dropdown-single" && /* @__PURE__ */ O(t, {
						icon: r,
						color: "default"
					})
				]
			})
		}), l("dropdown-multi") && /* @__PURE__ */ O(h, {
			onClick: () => d("dropdown-multi", e),
			children: /* @__PURE__ */ k("div", {
				className: "flex w-full flex-row items-center gap-2",
				children: [
					/* @__PURE__ */ O(t, {
						icon: i,
						color: "default"
					}),
					/* @__PURE__ */ O("span", {
						className: "flex-1",
						children: p("surveyFormBuilder.labels.multiSelection")
					}),
					a === e && n === "dropdown-multi" && /* @__PURE__ */ O(t, {
						icon: r,
						color: "default"
					})
				]
			})
		})] }) })] }, e);
	})] })] }) })] });
}, M = ({ label: n, icon: r, onClick: i, critical: a }) => /* @__PURE__ */ O(h, {
	onClick: i,
	className: e(a ? "text-f1-foreground-critical" : void 0),
	children: /* @__PURE__ */ k("div", {
		className: "flex w-full flex-row items-center gap-2",
		children: [/* @__PURE__ */ O(t, { icon: r }), /* @__PURE__ */ O("span", {
			className: "flex-1",
			children: n
		})]
	})
});
function N({ open: e, setOpen: t, questionId: r, questionType: s, canDeleteQuestion: h = !0, hiddenActions: _ }) {
	let { t: y } = u(), { isQuestionTypeAllowed: b } = w(), { question: x, questionTypes: C, currentRatingType: T, currentDatasetKey: D, isMultiSelectEnabled: N, isAllowCreateEnabled: P, datasetHasOnCreate: F, disallowOptionalQuestions: I, handleChangeRequired: L, handleSelectQuestionType: R, handleSelectRatingType: z, handleToggleMultiSelect: B, handleToggleAllowCreate: V, handleDuplicate: H, handleDelete: U } = E({
		questionId: r,
		questionType: s,
		canDelete: h
	}), W = (e) => _?.includes(e) ?? !1, G = !I && !W("required"), K = !!D && !W("multiSelect"), q = !!D && F && s === "dropdown-single" && !W("allowCreate"), J = !W("questionType"), Y = !W("duplicate"), X = h && !W("delete");
	return !G && !K && !q && !J && !Y && !X ? null : /* @__PURE__ */ k(f, {
		open: e,
		onOpenChange: t,
		children: [/* @__PURE__ */ O(S, {
			tabIndex: -1,
			asChild: !0,
			children: /* @__PURE__ */ O(d, {
				icon: o,
				label: y("surveyFormBuilder.labels.actions"),
				size: "md",
				variant: "ghost",
				tooltip: !1,
				hideLabel: !0
			})
		}), /* @__PURE__ */ k(p, {
			className: "w-80",
			align: "start",
			children: [
				/* @__PURE__ */ O(g, {
					className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
					children: y("surveyFormBuilder.labels.questionOptions")
				}),
				G && /* @__PURE__ */ O(m, { children: /* @__PURE__ */ O(A, {
					label: y("surveyFormBuilder.labels.required"),
					icon: n,
					checked: !!x?.required,
					onChange: L
				}) }),
				K && /* @__PURE__ */ O(m, { children: /* @__PURE__ */ O(A, {
					label: y("surveyFormBuilder.labels.allowMultiSelection"),
					icon: i,
					checked: N,
					onChange: B
				}) }),
				q && /* @__PURE__ */ O(m, { children: /* @__PURE__ */ O(A, {
					label: y("surveyFormBuilder.labels.allowCreate"),
					icon: l,
					checked: P,
					onChange: V
				}) }),
				J && /* @__PURE__ */ O(m, { children: /* @__PURE__ */ O(j, {
					label: y("surveyFormBuilder.labels.questionType"),
					value: s,
					currentDatasetKey: D,
					questionTypes: C,
					currentRatingType: T,
					isQuestionTypeAllowed: b,
					onSelectQuestionType: R,
					onSelectRatingType: z
				}) }),
				(G || K || q || J) && (Y || X) && /* @__PURE__ */ O(v, {}),
				(Y || X) && /* @__PURE__ */ k(m, { children: [Y && /* @__PURE__ */ O(M, {
					label: y("surveyFormBuilder.actions.duplicateQuestion"),
					icon: c,
					onClick: H
				}), X && /* @__PURE__ */ O(M, {
					label: y("surveyFormBuilder.actions.deleteQuestion"),
					icon: a,
					onClick: U,
					critical: !0
				})] })
			]
		})]
	});
}
//#endregion
export { N as ActionsMenu };
