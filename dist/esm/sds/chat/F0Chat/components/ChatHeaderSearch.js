import { cn as e } from "../../../../lib/utils.js";
import t from "../../../../icons/app/ChevronDown.js";
import n from "../../../../icons/app/ChevronUp.js";
import r from "../../../../icons/app/Cross.js";
import { useI18n as i } from "../../../../lib/providers/i18n/i18n-provider.js";
import { ButtonInternal as a } from "../../../../components/F0Button/internal.js";
import { F0SearchInput as o } from "../../../../components/F0SearchInput/F0SearchInput.js";
import { useChatSearch as s } from "../providers/ChatUIProvider.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatHeaderSearch.tsx
var u = () => {
	let u = i(), { searchQuery: d, setSearchQuery: f, searching: p, matchCurrent: m, matchTotal: h, goToNextMatch: g, goToPrevMatch: _, closeSearch: v } = s(), y = h > 0, b = d.trim().length > 0 && !p && !y;
	return /* @__PURE__ */ l("div", {
		className: "flex w-full items-center gap-2",
		onKeyDown: (e) => {
			e.key === "Enter" ? (e.preventDefault(), e.shiftKey ? _() : g()) : e.key === "Escape" && (e.preventDefault(), v());
		},
		children: [
			/* @__PURE__ */ c("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ c(o, {
					value: d,
					onChange: f,
					placeholder: u.chat.searchPlaceholder,
					loading: p,
					autoFocus: !0,
					clearable: !0,
					size: "sm"
				})
			}),
			/* @__PURE__ */ c("span", {
				className: e("shrink-0 whitespace-nowrap text-sm tabular-nums", b ? "text-f1-foreground-critical" : "text-f1-foreground-secondary"),
				children: p ? "" : `${m}/${h}`
			}),
			/* @__PURE__ */ l("div", {
				className: "flex shrink-0 items-center gap-2",
				children: [/* @__PURE__ */ l("div", {
					className: "flex shrink-0 items-center gap-0",
					children: [/* @__PURE__ */ c(a, {
						variant: "ghost",
						hideLabel: !0,
						label: u.navigation.previous,
						icon: n,
						onClick: _,
						disabled: !y || p,
						size: "sm"
					}), /* @__PURE__ */ c(a, {
						variant: "ghost",
						hideLabel: !0,
						label: u.navigation.next,
						icon: t,
						onClick: g,
						disabled: !y || p,
						size: "sm"
					})]
				}), /* @__PURE__ */ c(a, {
					variant: "ghost",
					hideLabel: !0,
					label: u.chat.closeSearch,
					icon: r,
					onClick: v
				})]
			})
		]
	});
};
//#endregion
export { u as ChatHeaderSearch };
