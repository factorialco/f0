import { cn as e } from "../../../lib/utils.js";
import { F0Button as t } from "../../F0Button/F0Button.js";
import { CardFooter as n } from "../../../ui/Card/Card.js";
import { F0Link as r } from "../../F0Link/F0Link.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { useMediaQuery as o } from "usehooks-ts";
//#region src/components/F0Card/components/CardActions.tsx
function s({ primaryAction: s, secondaryActions: c, compact: l = !1 }) {
	let u = o("(min-width: 640px)");
	if (!(s || d())) return null;
	return /* @__PURE__ */ a(n, {
		className: e("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative z-[2] -mx-4 -mb-4 mt-4 cursor-auto border-0 border-t border-solid border-t-f1-border-secondary px-4 pb-4 pt-4", l && "-mb-3 pb-3 pt-3"),
		onClick: (e) => e.stopPropagation(),
		children: [c && /* @__PURE__ */ i("div", {
			className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
			children: Array.isArray(c) ? c.map((e, n) => /* @__PURE__ */ i(t, {
				label: e.label,
				icon: e.icon,
				variant: "outline",
				onClick: (t) => {
					t.stopPropagation(), e.onClick();
				},
				hideLabel: u && n > 0,
				size: u ? l ? "sm" : "md" : "lg"
			}, n)) : /* @__PURE__ */ i(r, {
				href: c.href,
				target: c.target,
				disabled: c.disabled,
				onClick: (e) => e.stopPropagation(),
				"data-testid": "secondary-link",
				children: c.label
			})
		}), s && /* @__PURE__ */ i("div", {
			className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
			children: /* @__PURE__ */ i(t, {
				label: s.label,
				icon: s.icon,
				variant: s.variant,
				onClick: (e) => {
					e.stopPropagation(), s.onClick();
				},
				size: u ? l ? "sm" : "md" : "lg",
				"data-testid": "primary-button"
			})
		})]
	});
	function d() {
		return c ? "href" in c || "length" in c && c.length > 0 : !1;
	}
}
//#endregion
export { s as CardActions };
