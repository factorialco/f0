import { Skeleton as e } from "../../../../../ui/skeleton.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyAnsweringForm/components/skeletons/SurveyAnsweringFormLoadingSkeletons.tsx
function i({ titleWidth: t, descriptionWidth: i, answer: a }) {
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-4",
		children: [/* @__PURE__ */ r("div", {
			className: "flex flex-col gap-2",
			children: [/* @__PURE__ */ n(e, {
				className: "h-5 rounded-sm",
				style: { width: t }
			}), i && /* @__PURE__ */ n(e, {
				className: "h-4 rounded-sm",
				style: { width: i }
			})]
		}), a]
	});
}
var a = /* @__PURE__ */ n(e, { className: "h-10 w-full rounded-sm" }), o = /* @__PURE__ */ n(e, { className: "h-24 w-full rounded-sm" }), s = /* @__PURE__ */ n(e, { className: "h-10 w-56 max-w-full rounded-sm" });
function c() {
	return /* @__PURE__ */ n("div", {
		className: "grid grid-cols-5 gap-2 sm:max-w-80",
		children: Array.from({ length: 5 }).map((t, r) => /* @__PURE__ */ n(e, { className: "h-9 rounded-sm" }, r))
	});
}
function l({ count: t }) {
	return /* @__PURE__ */ n("div", {
		className: "flex flex-col gap-2",
		children: Array.from({ length: t }).map((t, r) => /* @__PURE__ */ n(e, {
			className: "h-7 w-56 max-w-full rounded-sm",
			style: { width: `${Math.max(52, 76 - r * 7)}%` }
		}, r))
	});
}
function u() {
	return /* @__PURE__ */ n("div", {
		className: "flex flex-wrap gap-2",
		children: Array.from({ length: 5 }).map((t, r) => /* @__PURE__ */ n(e, {
			className: "h-8 rounded-sm",
			style: { width: `${18 + r * 3}%` }
		}, r))
	});
}
function d() {
	return /* @__PURE__ */ n("div", {
		className: "flex w-full flex-col gap-10",
		"data-testid": "survey-answering-form-loading-all-questions",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [0, 1].map((d) => /* @__PURE__ */ r("div", {
			className: "flex flex-col gap-5",
			children: [/* @__PURE__ */ r("div", {
				className: "flex flex-col gap-2 px-5",
				children: [/* @__PURE__ */ n(e, { className: "h-6 w-56 rounded-sm" }), /* @__PURE__ */ n(e, { className: "h-4 w-80 max-w-full rounded-sm" })]
			}), /* @__PURE__ */ n("div", {
				className: "flex flex-col gap-4",
				children: d === 0 ? /* @__PURE__ */ r(t, { children: [
					/* @__PURE__ */ n(i, {
						titleWidth: "65%",
						descriptionWidth: "42%",
						answer: a
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "70%",
						descriptionWidth: "55%",
						answer: o
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "58%",
						descriptionWidth: "38%",
						answer: /* @__PURE__ */ n(c, {})
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "62%",
						descriptionWidth: "46%",
						answer: /* @__PURE__ */ n(l, { count: 4 })
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "54%",
						descriptionWidth: "44%",
						answer: a
					})
				] }) : /* @__PURE__ */ r(t, { children: [
					/* @__PURE__ */ n(i, {
						titleWidth: "60%",
						descriptionWidth: "50%",
						answer: s
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "66%",
						descriptionWidth: "45%",
						answer: a
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "57%",
						descriptionWidth: "48%",
						answer: /* @__PURE__ */ n(u, {})
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "64%",
						descriptionWidth: "36%",
						answer: /* @__PURE__ */ n(l, { count: 3 })
					}),
					/* @__PURE__ */ n(i, {
						titleWidth: "52%",
						descriptionWidth: "40%",
						answer: o
					})
				] })
			})]
		}, d))
	});
}
function f() {
	return /* @__PURE__ */ r("div", {
		className: "flex w-full flex-col gap-6",
		"data-testid": "survey-answering-form-loading-stepped",
		"aria-busy": "true",
		"aria-live": "polite",
		children: [/* @__PURE__ */ r("div", {
			className: "flex flex-col gap-2 px-5",
			children: [/* @__PURE__ */ n(e, { className: "h-6 w-52 rounded-sm" }), /* @__PURE__ */ n(e, { className: "h-4 w-72 max-w-full rounded-sm" })]
		}), /* @__PURE__ */ n(i, {
			titleWidth: "74%",
			descriptionWidth: "50%",
			answer: a
		})]
	});
}
//#endregion
export { d as SurveyAllQuestionsLoadingSkeleton, f as SurveySteppedLoadingSkeleton };
