import { cn as e } from "../../../../lib/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/sds/chat/F0Chat/components/ChatTextareaField.tsx
var r = "whitespace-pre-wrap break-words p-3 text-base leading-5", i = "min-h-[44px] max-h-[140px]", a = ({ textareaRef: a, highlightRef: o, value: s, placeholder: c, accessibleLabel: l, onChange: u, onKeyDown: d, onPaste: f, onBlur: p, onCursorUpdate: m, onScroll: h, highlightSegments: g, isAutocompleteOpen: _, autocompleteListboxId: v, activeAutocompleteOptionId: y, hasOverlay: b }) => /* @__PURE__ */ n("div", {
	className: "grid grid-cols-1 grid-rows-1",
	children: [
		/* @__PURE__ */ t("div", {
			"aria-hidden": !0,
			className: e("col-start-1 row-start-1", "pointer-events-none invisible", r, i),
			children: s.endsWith("\n") ? s + "_" : s || " "
		}),
		b && /* @__PURE__ */ t("div", {
			ref: o,
			"aria-hidden": !0,
			className: e("col-start-1 row-start-1", "pointer-events-none text-f1-foreground", r, i, "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"),
			children: g.map((n, r) => n.type === "mention" ? /* @__PURE__ */ t("span", {
				className: e("rounded-xs", n.tone === "self" || n.tone === "everyone" ? "bg-f1-background-warning text-f1-foreground-warning" : "bg-f1-background-info text-f1-foreground-info"),
				children: n.text
			}, r) : n.type === "ghost" ? /* @__PURE__ */ t("span", {
				className: "text-f1-foreground-secondary opacity-50",
				children: n.text
			}, r) : /* @__PURE__ */ t("span", { children: n.text }, r))
		}),
		/* @__PURE__ */ t("textarea", {
			ref: a,
			rows: 1,
			value: s,
			placeholder: c,
			"aria-label": l,
			onChange: (e) => u(e.target.value, e.target.selectionStart ?? 0),
			onKeyDown: d,
			onPaste: f,
			onBlur: p,
			onKeyUp: m,
			onClick: m,
			onSelect: m,
			onScroll: h,
			role: "combobox",
			"aria-autocomplete": "list",
			"aria-expanded": _,
			"aria-controls": v,
			"aria-activedescendant": y,
			className: e("col-start-1 row-start-1", "w-full resize-none bg-transparent outline-none", "placeholder:text-f1-foreground-secondary", r, i, "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", b ? "text-transparent caret-f1-foreground" : "text-f1-foreground")
		})
	]
});
//#endregion
export { a as ChatTextareaField };
