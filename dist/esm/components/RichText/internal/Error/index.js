import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../F0Button/F0Button.js";
import { F0AvatarAlert as n } from "../../../avatars/F0AvatarAlert/index.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/RichText/internal/Error/index.tsx
var a = ({ error: a, onDismiss: o, dismissLabel: s }) => {
	let c = e();
	return /* @__PURE__ */ i("div", {
		className: "flex w-max max-w-full items-center gap-10 rounded-md bg-f1-background-critical p-1 drop-shadow-sm",
		children: [/* @__PURE__ */ i("div", {
			className: "flex w-full flex-row items-center gap-2",
			children: [/* @__PURE__ */ r("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ r(n, {
					size: "sm",
					type: "critical"
				})
			}), /* @__PURE__ */ r("p", {
				className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
				title: a || c.richTextEditor.ai.defaultError,
				children: a || c.richTextEditor.ai.defaultError
			})]
		}), /* @__PURE__ */ r("div", {
			className: "flex-shrink-0",
			children: /* @__PURE__ */ r(t, {
				variant: "outline",
				onClick: (e) => {
					e.preventDefault(), o();
				},
				label: s ?? c.richTextEditor.ai.closeErrorButtonLabel,
				size: "sm"
			})
		})]
	});
};
//#endregion
export { a as EnhanceErrorBanner };
