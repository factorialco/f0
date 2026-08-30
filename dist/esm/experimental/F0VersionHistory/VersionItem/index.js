import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0AvatarPerson as n } from "../../../components/avatars/F0AvatarPerson/index.js";
import { useDateFnsLocale as r } from "../../../lib/providers/l10n/use-date-fns-locale.js";
import { OneEllipsis as i } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { format as s } from "date-fns";
//#region src/experimental/F0VersionHistory/VersionItem/index.tsx
function c({ author: c, timestamp: l, onClick: u, isActive: d }) {
	let f = r(), p = s(l, "PPPp", { locale: f }), m = `${c.firstName} ${c.lastName}`;
	return /* @__PURE__ */ o("button", {
		type: "button",
		className: e("flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors", d && "bg-f1-background-tertiary", u && "cursor-pointer hover:bg-f1-background-hover", t("focus-visible:ring-inset")),
		onClick: u,
		disabled: !u,
		"aria-label": `Version ${p} by ${m}${d ? " (selected)" : ""}`,
		"aria-pressed": u ? d : void 0,
		children: [/* @__PURE__ */ a(i, {
			lines: 1,
			className: "font-medium text-f1-foreground",
			children: p
		}), /* @__PURE__ */ o("div", {
			className: "flex flex-row items-center gap-[6px]",
			children: [/* @__PURE__ */ a(n, {
				firstName: c.firstName,
				lastName: c.lastName,
				src: c.src,
				size: "xs"
			}), /* @__PURE__ */ a(i, {
				lines: 1,
				className: "font-medium text-f1-foreground-secondary",
				children: m
			})]
		})]
	});
}
//#endregion
export { c as VersionItem };
