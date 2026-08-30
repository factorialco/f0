import { cn as e } from "../../../../lib/utils.js";
import { TypewriterPlaceholder as t } from "./TypewriterPlaceholder.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/ai/F0AiChatTextArea/components/TextareaField.tsx
var i = ({ textareaRef: i, highlightRef: a, inputValue: o, onInputChange: s, onKeyDown: c, onCursorUpdate: l, onScroll: u, highlightSegments: d, hasOverlay: f, multiplePlaceholders: p, placeholders: m, resolvedDefaultPlaceholder: h, inProgress: g }) => /* @__PURE__ */ r("div", {
	className: e("grid flex-1 grid-cols-1 grid-rows-1", "min-h-[20px] py-0"),
	children: [
		/* @__PURE__ */ n("div", {
			"aria-hidden": !0,
			className: e("col-start-1 row-start-1", "pointer-events-none invisible", "min-h-[20px] max-h-[240px]", "whitespace-pre-wrap break-words", "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground", "my-3 px-3"),
			children: o.endsWith("\n") ? o + "_" : o
		}),
		f && /* @__PURE__ */ n("div", {
			ref: a,
			"aria-hidden": !0,
			className: e("col-start-1 row-start-1", "pointer-events-none", "min-h-[20px] max-h-[240px]", "whitespace-pre-wrap break-words", "text-[16px] sm:text-[14px] leading-[20px] font-normal text-f1-foreground", "my-3 px-3", "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"),
			children: d.map((e, t) => e.type === "mention" ? /* @__PURE__ */ n("span", {
				className: "text-f1-foreground-secondary",
				children: e.text
			}, t) : e.type === "ghost" ? /* @__PURE__ */ n("span", {
				className: "text-f1-foreground-secondary opacity-50",
				children: e.text
			}, t) : /* @__PURE__ */ n("span", { children: e.text }, t))
		}),
		!o && !p && /* @__PURE__ */ n("p", {
			className: e("col-start-1 row-start-1", "pointer-events-none", "text-f1-foreground-secondary", "text-[16px] sm:text-[14px] leading-[20px] font-normal", "pt-3 px-3", "overflow-hidden text-ellipsis whitespace-nowrap"),
			children: m.length === 1 ? m[0] : h
		}),
		/* @__PURE__ */ n("textarea", {
			"aria-label": h,
			autoFocus: !1,
			name: "one-ai-input",
			rows: 1,
			ref: i,
			value: o,
			onChange: (e) => {
				s(e.target.value, e.target.selectionStart ?? 0);
			},
			onKeyDown: c,
			onKeyUp: l,
			onClick: l,
			onSelect: l,
			onScroll: u,
			className: e("col-start-1 row-start-1", "min-h-[20px] max-h-[240px] h-auto", "resize-none", "whitespace-pre-wrap break-words", "text-[16px] sm:text-[14px] leading-[20px] font-normal [letter-spacing:inherit]", "mt-3 px-3", "overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", "outline-none", f ? "text-transparent caret-f1-foreground" : "text-f1-foreground", !f && (o || !p ? "caret-f1-foreground" : "caret-transparent"))
		}),
		p && /* @__PURE__ */ n(t, {
			placeholders: m,
			defaultPlaceholder: h,
			inputValue: o,
			inProgress: g ?? !1
		})
	]
});
//#endregion
export { i as TextareaField };
