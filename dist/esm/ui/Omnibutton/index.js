import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n, focusRing as r } from "../../lib/utils.js";
import { F0Icon as i } from "../../components/F0Icon/index.js";
import a from "../../icons/app/Question.js";
import { Dropdown as o } from "../../experimental/Navigation/Dropdown/index.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/ui/Omnibutton/index.tsx
function l(e) {
	return e.filter((e) => !!e.title).map(({ title: e, description: t, href: n, onClick: r, target: i }) => ({
		label: e,
		description: t,
		href: n,
		onClick: r ? () => r(void 0) : void 0
	}));
}
function u({ label: e, options: t, hasNewUpdate: u }) {
	return /* @__PURE__ */ s("div", {
		className: "fixed z-10",
		style: {
			bottom: "calc(8px + env(safe-area-inset-bottom))",
			right: "calc(8px + env(safe-area-inset-right))"
		},
		children: /* @__PURE__ */ s(o, {
			items: l(t),
			children: /* @__PURE__ */ c("button", {
				className: n("relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all", r()),
				"aria-label": e,
				children: [/* @__PURE__ */ s(i, {
					icon: a,
					size: "sm"
				}), u && /* @__PURE__ */ s("div", { className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" })]
			})
		})
	});
}
var d = e(t("OmniButton", u));
//#endregion
export { d as OmniButton };
