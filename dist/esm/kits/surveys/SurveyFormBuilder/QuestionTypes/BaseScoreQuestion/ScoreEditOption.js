import { cn as e } from "../../../../../lib/utils.js";
import { F0Button as t } from "../../../../../components/F0Button/F0Button.js";
import { Popover as n, PopoverContent as r, PopoverTrigger as i } from "../../../../../ui/popover.js";
import { EmojiPicker as a } from "../../../../../lib/EmojiPicker.js";
import '../../../../../sds/social/Reactions/Picker/index.css';/* empty css                                               */
import { useEffect as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "@emoji-mart/data/sets/15/twitter.json";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseScoreQuestion/ScoreEditOption.tsx
var d = ({ option: d, selected: f, onClick: p, onChangeLabel: m, disabled: h, isEmojiMode: g = !1 }) => {
	let { value: _, label: v } = d, [y, b] = s(!1);
	return o(() => {
		h && b(!1);
	}, [h]), /* @__PURE__ */ c("div", {
		"data-testid": `score-edit-option-${_}`,
		className: e("group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border text-center font-medium", f && "border-f1-border-selected bg-f1-background-selected-secondary", h ? "cursor-default" : "cursor-pointer"),
		onClick: () => {
			h || p(_);
		},
		children: g ? /* @__PURE__ */ l(n, {
			open: !h && y,
			onOpenChange: h ? void 0 : b,
			children: [/* @__PURE__ */ c(i, {
				asChild: !0,
				children: /* @__PURE__ */ c(t, {
					emoji: v,
					label: _.toString(),
					variant: "ghost",
					disabled: h,
					withoutDisabledAppearance: !0,
					hideLabel: !0
				})
			}), /* @__PURE__ */ c(r, {
				side: "bottom",
				align: "center",
				className: "w-fit border-none bg-transparent p-2 shadow-none",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation();
				},
				children: /* @__PURE__ */ c(a, {
					data: u,
					onEmojiSelect: (e) => {
						m?.(_, e.native), b(!1);
					},
					locale: "en",
					icons: "outline",
					set: "twitter",
					theme: "light",
					emojiButtonSize: 32,
					emojiButtonRadius: "10px",
					emojiSize: 24,
					maxFrequentRows: 2,
					skinTonePosition: "none",
					previewPosition: "none",
					searchPosition: "top",
					navPosition: "top",
					dynamicWidth: !0
				})
			})]
		}) : /* @__PURE__ */ c("span", {
			className: "text-base font-medium",
			children: v
		})
	});
};
//#endregion
export { d as ScoreEditOption };
