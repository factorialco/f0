import { getAbbreviateMonth as e, getDayOfMonth as t } from "../../../lib/date.js";
import { useDateFnsLocale as n } from "../../../lib/providers/l10n/use-date-fns-locale.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/avatars/F0AvatarDate/F0AvatarDate.tsx
var a = ({ date: a, "aria-label": o, "aria-labelledby": s }) => {
	let c = n(), l = t(a), u = e(a, c);
	return /* @__PURE__ */ i("div", {
		className: "flex h-10 w-10 flex-col items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary",
		"aria-label": o,
		"aria-labelledby": s,
		children: [/* @__PURE__ */ r("div", {
			className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
			children: u
		}), /* @__PURE__ */ r("div", {
			className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
			children: l
		})]
	});
};
//#endregion
export { a as F0AvatarDate };
