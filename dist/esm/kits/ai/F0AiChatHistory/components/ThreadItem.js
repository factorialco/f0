import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/Delete.js";
import i from "../../../../icons/app/Ellipsis.js";
import a from "../../../../icons/app/PushPin.js";
import o from "../../../../icons/app/PushPinSolid.js";
import { useI18n as s } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as c } from "../../../../components/F0Button/internal.js";
import { OneEllipsis as l } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { Dropdown as u } from "../../../../experimental/Navigation/Dropdown/index.js";
import { useDateFnsLocale as d } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { Spinner as f } from "../../../../ui/Spinner/index.js";
import { formatThreadDate as p } from "../utils.js";
import { useMemo as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatHistory/components/ThreadItem.tsx
function _({ thread: _, isPinned: v, isActive: y = !1, isPending: b = !1, onSelect: x, onPin: S, onUnpin: C, onDelete: w, className: T }) {
	let E = s(), D = d(), O = m(() => [{
		label: v ? E.ai.unpinChat : E.ai.pinChat,
		icon: v ? o : a,
		onClick: () => v ? C(_.id) : S(_.id)
	}, {
		label: E.ai.deleteChat,
		icon: r,
		critical: !0,
		onClick: () => w(_.id)
	}], [
		v,
		_.id,
		S,
		C,
		w
	]), k = m(() => p(_.updatedAt, {
		today: E.ai.today,
		yesterday: E.ai.yesterday
	}, D), [
		_.updatedAt,
		E.ai.today,
		E.ai.yesterday,
		D
	]);
	return /* @__PURE__ */ g("div", {
		className: e("group flex gap-1 cursor-pointer items-center justify-between rounded-md py-1.5 pl-3 pr-1.5 hover:bg-f1-background-hover", t("rounded"), T, y && "bg-f1-background-secondary"),
		role: "button",
		tabIndex: 0,
		"aria-current": y ? "true" : void 0,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), x(_.id, _.title));
		},
		children: [
			/* @__PURE__ */ g("div", {
				className: "flex w-full min-w-0 items-center gap-1",
				onClick: () => x(_.id, _.title),
				children: [
					_.icon && /* @__PURE__ */ h(n, {
						icon: _.icon,
						size: "sm",
						className: "mr-1 shrink-0 text-f1-icon",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ h(l, {
						lines: 1,
						className: "py-0.5 text-left font-medium",
						children: _.title
					}),
					/* @__PURE__ */ h("span", {
						className: "hidden shrink-0 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline",
						children: k
					})
				]
			}),
			_.trailingLabel && /* @__PURE__ */ h("span", {
				className: "hidden shrink-0 pr-1 text-sm font-medium text-f1-foreground-tertiary group-focus-within:inline group-hover:inline",
				children: _.trailingLabel
			}),
			b ? /* @__PURE__ */ h("div", {
				className: "flex h-7 w-7 shrink-0 items-center justify-center",
				"aria-label": E.ai.threadOptions,
				children: /* @__PURE__ */ h(f, { size: "small" })
			}) : /* @__PURE__ */ h("div", {
				className: e("hidden items-center", "group-hover:flex group-focus-within:flex", "has-[[aria-expanded=true]]:flex"),
				children: /* @__PURE__ */ h(u, {
					items: O,
					children: /* @__PURE__ */ h(c, {
						icon: i,
						variant: "ghost",
						size: "sm",
						label: E.ai.threadOptions,
						hideLabel: !0
					})
				})
			})
		]
	});
}
//#endregion
export { _ as ThreadItem };
