import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/ChevronDown.js";
import r from "../../../../icons/app/ChevronRight.js";
import i from "../../../../icons/app/Question.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Card as o, CardContent as s, CardHeader as c } from "../../../../ui/Card/Card.js";
import { useCallback as l, useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ai/F0FAQCard/F0FAQCard.tsx
var p = ({ item: i, isExpanded: a, onToggle: o }) => /* @__PURE__ */ f("div", {
	className: e("flex flex-col rounded-lg px-3 -mx-3 transition-colors duration-200", a && "bg-f1-background-secondary"),
	children: [/* @__PURE__ */ f("button", {
		type: "button",
		onClick: () => o(i.id),
		className: "flex w-full items-start justify-between gap-3 py-3 text-left transition-colors hover:opacity-80",
		"aria-expanded": a,
		"aria-controls": `faq-answer-${i.id}`,
		children: [/* @__PURE__ */ d("span", {
			className: "text-base font-medium text-f1-foreground",
			children: i.question
		}), /* @__PURE__ */ d("span", {
			className: "mt-0.5 flex-shrink-0 text-f1-foreground-secondary",
			children: /* @__PURE__ */ d(t, {
				icon: a ? n : r,
				size: "sm",
				className: e("transition-transform duration-200", a && "text-f1-foreground")
			})
		})]
	}), /* @__PURE__ */ d("div", {
		id: `faq-answer-${i.id}`,
		role: "region",
		"aria-labelledby": `faq-question-${i.id}`,
		className: e("overflow-hidden transition-all duration-200", a ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
		children: /* @__PURE__ */ d("p", {
			className: "pb-3 text-base text-f1-foreground-secondary",
			children: i.answer
		})
	})]
}), m = ({ headerIcon: e, items: n, defaultExpandedId: r, expandedId: m, onExpandedChange: h, allowMultiple: g = !1 }) => {
	let _ = a()?.ai?.growth?.faqCard?.title ?? "Questions before getting started", v = e ?? i, [y, b] = u(() => new Set(r ? [r] : [])), x = m !== void 0, S = l((e) => x ? m === e : y.has(e), [
		x,
		m,
		y
	]), C = l((e) => {
		x ? h?.(m === e ? null : e) : b((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : (g || n.clear(), n.add(e)), n;
		});
	}, [
		x,
		m,
		h,
		g
	]);
	return n.length === 0 ? null : /* @__PURE__ */ f(o, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ f(c, {
			className: "-mx-4 -mt-4 mb-2 flex flex-row items-center gap-2 rounded-t-xl bg-f1-background-secondary px-4 py-3",
			children: [/* @__PURE__ */ d("div", {
				className: "flex h-6 w-6 items-center justify-center rounded-full border border-f1-border-secondary",
				children: /* @__PURE__ */ d(t, {
					icon: v,
					size: "sm",
					className: "text-f1-foreground-secondary"
				})
			}), /* @__PURE__ */ d("h3", {
				className: "text-base font-semibold text-f1-foreground",
				children: _
			})]
		}), /* @__PURE__ */ d(s, {
			className: "flex flex-col divide-y divide-f1-border p-0",
			children: n.map((e) => /* @__PURE__ */ d(p, {
				item: e,
				isExpanded: S(e.id),
				onToggle: C
			}, e.id))
		})]
	});
};
//#endregion
export { m as F0FAQCard };
