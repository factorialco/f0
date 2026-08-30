import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/Calendar.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../../../components/F0Button/F0Button.js";
import { Card as i, CardContent as a, CardFooter as o } from "../../../../ui/Card/Card.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ai/F0BookAMeetingCard/F0BookAMeetingCard.tsx
var l = ({ onAction: l, actionHref: u }) => {
	let d = n()?.ai?.growth?.bookAMeetingCard, f = d?.title ?? "Talk with an expert", p = d?.schedule ?? "Mon-Fri · 09:00-21:00 (CEST)", m = d?.actionLabel ?? "Book a meeting";
	return /* @__PURE__ */ c(i, {
		className: "flex flex-col overflow-hidden",
		children: [/* @__PURE__ */ c(a, {
			className: "flex flex-col gap-3 p-0",
			children: [/* @__PURE__ */ s(e, {
				icon: t,
				size: "lg"
			}), /* @__PURE__ */ c("div", {
				className: "flex flex-col gap-0.5",
				children: [/* @__PURE__ */ s("h3", {
					className: "text-base font-semibold text-f1-foreground",
					children: f
				}), /* @__PURE__ */ s("p", {
					className: "text-sm text-f1-foreground-secondary",
					children: p
				})]
			})]
		}), /* @__PURE__ */ s(o, {
			className: "-mx-4 -mb-4 mt-4 flex justify-end rounded-b-xl border-0 border-t border-t-f1-border bg-f1-background-secondary px-4 py-3",
			children: u ? /* @__PURE__ */ s(r, {
				variant: "default",
				size: "md",
				label: m,
				href: u,
				target: "_blank"
			}) : /* @__PURE__ */ s(r, {
				type: "button",
				variant: "default",
				size: "md",
				label: m,
				onClick: l
			})
		})]
	});
};
//#endregion
export { l as F0BookAMeetingCard };
