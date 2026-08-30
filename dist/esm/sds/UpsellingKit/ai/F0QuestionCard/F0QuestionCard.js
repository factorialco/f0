import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/ChevronLeft.js";
import n from "../../../../icons/app/ChevronRight.js";
import { useI18n as r } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../../../components/F0Button/F0Button.js";
import { Card as a, CardContent as o, CardFooter as s } from "../../../../ui/Card/Card.js";
import { F0Checkbox as c } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { useCallback as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ai/F0QuestionCard/F0QuestionCard.tsx
var m = ({ steps: m, onComplete: h, onSkip: g, sendAsMessage: _ = !1, onSendMessage: v }) => {
	let [y, b] = u(0), [x, S] = u({}), C = r(), w = m.length, T = m[y], E = x[y] ?? [], D = l((e, t) => {
		S((n) => {
			let r = n[y] ?? [], i = t ? [...r, e] : r.filter((t) => t !== e);
			return {
				...n,
				[y]: i
			};
		});
	}, [y]), O = l(() => {
		y > 0 && b((e) => e - 1);
	}, [y]), k = l(() => {
		if (y < w - 1) b((e) => e + 1);
		else {
			if (_ && v) {
				let e = Object.entries(x).map(([e, t]) => m[parseInt(e)].options.filter((e) => t.includes(e.id)).map((e) => e.label)).flat();
				e.length > 0 && v(e.join(", "));
			}
			h?.(x);
		}
	}, [
		y,
		w,
		_,
		v,
		x,
		m,
		h
	]), A = y === w - 1, j = w > 1, M = g != null;
	return w === 0 || !T ? null : /* @__PURE__ */ p(a, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ p(o, {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ f("h3", {
				className: "text-base font-semibold text-f1-foreground",
				children: T.question
			}), /* @__PURE__ */ f("div", {
				className: "flex flex-col gap-3",
				children: T.options.map((e) => /* @__PURE__ */ f("div", {
					className: "flex items-center gap-2.5",
					children: /* @__PURE__ */ f(c, {
						id: e.id,
						title: e.label,
						checked: E.includes(e.id),
						onCheckedChange: (t) => D(e.id, t === !0)
					})
				}, e.id))
			})]
		}), /* @__PURE__ */ p(s, {
			className: "-mx-4 -mb-4 mt-4 flex items-center justify-between rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3",
			children: [/* @__PURE__ */ f("div", {
				className: "flex min-w-[7.5rem] items-center justify-start gap-1",
				children: j && /* @__PURE__ */ p(d, { children: [
					/* @__PURE__ */ f("button", {
						type: "button",
						onClick: O,
						disabled: y <= 0,
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
						"aria-label": "Previous",
						children: /* @__PURE__ */ f(e, {
							icon: t,
							size: "sm"
						})
					}),
					/* @__PURE__ */ p("span", {
						className: "min-w-[2.5rem] text-center text-sm text-f1-foreground-secondary",
						children: [
							y + 1,
							"/",
							w
						]
					}),
					/* @__PURE__ */ f("button", {
						type: "button",
						onClick: k,
						disabled: y >= w - 1,
						className: "flex h-8 w-8 shrink-0 items-center justify-center rounded text-f1-foreground-secondary transition-colors hover:bg-f1-background-tertiary hover:text-f1-foreground disabled:pointer-events-none disabled:opacity-50",
						"aria-label": "Next",
						children: /* @__PURE__ */ f(e, {
							icon: n,
							size: "sm"
						})
					})
				] })
			}), /* @__PURE__ */ p("div", {
				className: "flex items-center gap-2",
				children: [M && /* @__PURE__ */ f(i, {
					type: "button",
					variant: "ghost",
					size: "md",
					label: C?.ai?.growth?.questionCard?.skipLabel ?? "Skip",
					onClick: g
				}), /* @__PURE__ */ f(i, {
					type: "button",
					variant: "outline",
					size: "md",
					label: A ? C?.ai?.growth?.questionCard?.sendLabel ?? "Send" : C?.ai?.growth?.questionCard?.actionLabel ?? "Next",
					onClick: k
				})]
			})]
		})]
	});
};
//#endregion
export { m as F0QuestionCardMultiStep };
