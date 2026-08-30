import { F0Icon as e } from "../../../../../components/F0Icon/index.js";
import t from "../../../../../icons/app/AcademicCap.js";
import n from "../../../../../icons/app/Add.js";
import r from "../../../../../icons/app/Check.js";
import i from "../../../../../icons/app/CheckDouble.js";
import { useI18n as a } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../../components/F0Button/F0Button.js";
import { DropdownMenu as s, DropdownMenuContent as c, DropdownMenuItem as l, DropdownMenuPortal as u, DropdownMenuSeparator as d, DropdownMenuSub as f, DropdownMenuSubContent as p, DropdownMenuSubTrigger as m, DropdownMenuTrigger as h } from "../../../../../ui/dropdown-menu.js";
import { useSurveyFormBuilderContext as g } from "../../Context.js";
import { useQuestionTypes as _ } from "../../constants.js";
import { useState as v } from "react";
import { Fragment as y, jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/Form/AddButton/index.tsx
var S = () => {
	let { disabled: S, answering: C, onAddNewElement: w, isQuestionTypeAllowed: T, labels: E } = g(), [D, O] = v(!1), k = _(), { t: A } = a(), j = E?.addQuestion ?? A("surveyFormBuilder.actions.addQuestion"), M = (e, t) => {
		w?.({
			type: e,
			datasetKey: t
		});
	}, N = () => {
		w?.({ type: "section" });
	}, P = k.filter((e) => !e.datasetKey), F = Array.from(new Set(k.filter((e) => !!e.datasetKey).map((e) => e.datasetKey)));
	return S || C ? null : /* @__PURE__ */ b("div", {
		className: "ml-6 flex justify-center",
		children: /* @__PURE__ */ x(s, {
			open: D,
			onOpenChange: O,
			children: [/* @__PURE__ */ b(h, {
				asChild: !0,
				children: /* @__PURE__ */ b(o, {
					icon: n,
					label: j,
					size: "md",
					variant: "outline",
					hideLabel: !0
				})
			}), /* @__PURE__ */ x(c, {
				align: "center",
				className: "w-80",
				children: [
					/* @__PURE__ */ b(l, {
						onClick: N,
						children: /* @__PURE__ */ x("div", {
							className: "flex w-full flex-row items-center gap-2",
							children: [/* @__PURE__ */ b(e, {
								icon: t,
								color: "default"
							}), /* @__PURE__ */ b("span", {
								className: "flex-1 text-base font-medium",
								children: A("surveyFormBuilder.questionTypes.section")
							})]
						})
					}),
					/* @__PURE__ */ b(d, {}),
					P.map((t) => /* @__PURE__ */ b(l, {
						onClick: () => M(t.questionType),
						children: /* @__PURE__ */ x("div", {
							className: "flex w-full flex-row items-center gap-2",
							children: [/* @__PURE__ */ b(e, {
								icon: t.icon,
								color: "default"
							}), /* @__PURE__ */ b("span", {
								className: "flex-1 text-base font-medium",
								children: t.label
							})]
						})
					}, t.questionType)),
					F.length > 0 && /* @__PURE__ */ x(y, { children: [/* @__PURE__ */ b(d, {}), F.map((t) => {
						let n = k.find((e) => e.datasetKey === t && e.questionType === "dropdown-single");
						return /* @__PURE__ */ x(f, { children: [/* @__PURE__ */ b(m, {
							className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
							children: /* @__PURE__ */ x("div", {
								className: "flex w-full flex-row items-center gap-2",
								children: [n && /* @__PURE__ */ b(e, {
									icon: n.icon,
									color: "default"
								}), /* @__PURE__ */ b("span", {
									className: "flex-1 text-base font-medium",
									children: n?.label ?? t
								})]
							})
						}), /* @__PURE__ */ b(u, { children: /* @__PURE__ */ x(p, { children: [T("dropdown-single") && /* @__PURE__ */ b(l, {
							onClick: () => M("dropdown-single", t),
							children: /* @__PURE__ */ x("div", {
								className: "flex w-full flex-row items-center gap-2",
								children: [/* @__PURE__ */ b(e, {
									icon: r,
									color: "default"
								}), /* @__PURE__ */ b("span", {
									className: "flex-1",
									children: A("surveyFormBuilder.labels.singleSelection")
								})]
							})
						}), T("dropdown-multi") && /* @__PURE__ */ b(l, {
							onClick: () => M("dropdown-multi", t),
							children: /* @__PURE__ */ x("div", {
								className: "flex w-full flex-row items-center gap-2",
								children: [/* @__PURE__ */ b(e, {
									icon: i,
									color: "default"
								}), /* @__PURE__ */ b("span", {
									className: "flex-1",
									children: A("surveyFormBuilder.labels.multiSelection")
								})]
							})
						})] }) })] }, t);
					})] })
				]
			})]
		})
	});
};
//#endregion
export { S as AddButton };
