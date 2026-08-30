import { DataTestIdWrapper as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { DetailsItem as a } from "../DetailsItem/index.js";
import o, { forwardRef as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/experimental/Lists/DetailsItemsList/index.tsx
var u = ({ onClick: e }) => {
	let t = r();
	return /* @__PURE__ */ c(i, {
		label: t.actions.seeMore,
		onClick: e,
		variant: "neutral"
	});
}, d = s(function({ title: t, tableView: r = !1, details: i, dataTestId: s, showSeeMore: d, onClickSeeMore: f }, p) {
	return /* @__PURE__ */ c(e, {
		dataTestId: s,
		children: /* @__PURE__ */ l("div", {
			ref: p,
			className: "flex flex-col gap-4",
			children: [
				!!t && /* @__PURE__ */ c("p", {
					className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary",
					children: t.toLocaleUpperCase()
				}),
				/* @__PURE__ */ c("div", {
					className: n("flex flex-col", r ? "rounded-md border border-solid border-f1-border-secondary" : "gap-3"),
					children: i?.map((e, t) => /* @__PURE__ */ l(o.Fragment, { children: [/* @__PURE__ */ c(a, {
						title: e.title,
						content: e.content,
						spacingAtTheBottom: e.spacingAtTheBottom,
						isHorizontal: r,
						verticalLayout: e.verticalLayout
					}, e.title), r && t !== i.length - 1 && /* @__PURE__ */ c("div", { className: "h-[1px] w-full bg-f1-border-secondary" })] }, e.title))
				}),
				d && /* @__PURE__ */ c(u, { onClick: f })
			]
		})
	});
}), f = t("DetailsItemsList", d);
//#endregion
export { f as DetailsItemsList };
