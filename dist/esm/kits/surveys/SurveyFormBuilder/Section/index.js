import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/Delete.js";
import n from "../../../../icons/app/Ellipsis.js";
import r from "../../../../icons/app/LayersFront.js";
import i from "../../../../icons/app/LockLocked.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as o } from "../../../../experimental/Overlays/Tooltip/index.js";
import { F0Button as s } from "../../../../components/F0Button/F0Button.js";
import { Dropdown as c } from "../../../../experimental/Navigation/Dropdown/index.js";
import { F0TagRaw as l } from "../../../../components/tags/F0TagRaw/index.js";
import { useSurveyFormBuilderContext as u } from "../Context.js";
import { DragProvider as d } from "../DragContext.js";
import { Item as f } from "./Item/index.js";
import { useEffect as p, useMemo as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import { Reorder as b } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/Section/index.tsx
var x = { fieldSizing: "content" }, S = ({ id: S, title: C = "", description: w, lockedNote: T, questions: E = [], locked: D, hideQuestions: O }) => {
	let { onSectionChange: k, disabled: A, answering: j, deleteElement: M, onDuplicateElement: N, placeholders: P } = u(), [F, I] = g(!1), { t: L } = a(), R = P?.sectionTitle ?? L("surveyFormBuilder.labels.sectionTitlePlaceholder"), z = m(() => ({
		id: S,
		title: C,
		description: w
	}), [
		S,
		C,
		w
	]), B = (e) => {
		k?.({
			...z,
			title: e.target.value
		});
	}, V = (e) => {
		k?.({
			...z,
			description: e.target.value
		});
	}, H = (e) => {
		k?.({
			...z,
			questions: e
		});
	}, U = [{
		label: L("surveyFormBuilder.actions.duplicateSection"),
		icon: r,
		onClick: () => {
			N?.({
				elementId: S,
				type: "section"
			});
		}
	}, {
		label: L("surveyFormBuilder.actions.deleteSection"),
		icon: t,
		onClick: () => {
			M(S);
		},
		critical: !0
	}], W = A || D || j, G = !W || !!C, K = !W || !!w, q = h(null);
	p(() => {
		q.current?.focus({ preventScroll: !0 });
	}, []);
	let J = T?.description ?? L("surveyFormBuilder.labels.lockedSectionNotice"), Y = D && !j ? /* @__PURE__ */ v(l, {
		text: L("surveyFormBuilder.labels.locked"),
		icon: i,
		className: "bg-f1-background"
	}) : null;
	return /* @__PURE__ */ y("div", {
		id: `co-creation-section-${S}`,
		className: e("group/section flex w-full flex-col gap-1", D && !j ? "cursor-not-allowed" : "bg-f1-background"),
		children: [(G || K || D && !j) && /* @__PURE__ */ y("div", {
			className: "py-1 pl-5 pr-3",
			children: [(G || D && !j) && /* @__PURE__ */ y("div", {
				className: "flex flex-row items-center gap-2",
				children: [
					G && /* @__PURE__ */ v("input", {
						ref: q,
						type: "text",
						"aria-label": L("surveyFormBuilder.labels.title"),
						value: C,
						placeholder: R,
						onChange: B,
						disabled: W,
						className: e("w-full text-lg font-semibold text-f1-foreground placeholder:text-f1-foreground-tertiary [&::-webkit-search-cancel-button]:hidden", W && "cursor-not-allowed")
					}),
					Y && /* @__PURE__ */ v("div", {
						className: "ml-auto flex shrink-0 items-center",
						children: /* @__PURE__ */ v(o, {
							description: J,
							instant: !0,
							children: /* @__PURE__ */ v("span", {
								className: "inline-flex",
								children: Y
							})
						})
					}),
					!A && !j && !D && /* @__PURE__ */ v("div", {
						className: e("opacity-0 group-hover/section:opacity-100", F && "opacity-100"),
						children: /* @__PURE__ */ v(c, {
							items: U,
							icon: n,
							open: F,
							onOpenChange: I,
							align: "start",
							children: /* @__PURE__ */ v(s, {
								icon: n,
								label: L("surveyFormBuilder.actions.actions"),
								size: "md",
								variant: "ghost",
								tooltip: !1,
								hideLabel: !0
							})
						})
					})
				]
			}), K && !(D && !j) && /* @__PURE__ */ v("textarea", {
				value: w,
				"aria-label": L("surveyFormBuilder.labels.description"),
				placeholder: L("surveyFormBuilder.labels.sectionDescriptionPlaceholder"),
				onChange: V,
				disabled: W,
				style: x,
				className: e("w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", W && "cursor-not-allowed")
			})]
		}), !O && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(d, { children: /* @__PURE__ */ v(b.Group, {
			axis: "y",
			values: E,
			onReorder: H,
			as: "div",
			children: /* @__PURE__ */ v("div", {
				className: "group/section-list flex flex-col gap-4",
				children: E.map((e) => /* @__PURE__ */ v(f, { question: e }, e.id))
			})
		}) }), !j && /* @__PURE__ */ y("div", {
			className: "mt-8 flex flex-row items-center gap-4",
			children: [
				/* @__PURE__ */ v("div", { className: "h-px flex-1 bg-f1-border-secondary" }),
				/* @__PURE__ */ v("span", {
					className: "text-base font-medium text-f1-foreground-secondary",
					children: L("surveyFormBuilder.labels.endOfSection")
				}),
				/* @__PURE__ */ v("div", { className: "h-px flex-1 bg-f1-border-secondary" })
			]
		})] })]
	});
};
//#endregion
export { S as Section };
