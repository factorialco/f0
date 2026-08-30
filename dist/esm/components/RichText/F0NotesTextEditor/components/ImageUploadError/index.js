import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as t } from "../../../../F0Button/F0Button.js";
import { F0AvatarAlert as n } from "../../../../avatars/F0AvatarAlert/index.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/RichText/F0NotesTextEditor/components/ImageUploadError/index.tsx
var a = ({ errorType: a, onDismiss: o }) => {
	let s = e(), c = ((e) => {
		switch (e) {
			case "file-too-large": return s.imageUpload.errors.fileTooLarge;
			case "invalid-type": return s.imageUpload.errors.invalidType;
			default: return s.imageUpload.errors.uploadFailed;
		}
	})(a);
	return /* @__PURE__ */ r("div", {
		className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
		children: /* @__PURE__ */ i("div", {
			className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
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
					title: c,
					children: c
				})]
			}), /* @__PURE__ */ r("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ r(t, {
					variant: "outline",
					onClick: o,
					label: s.imageUpload.errors.dismiss,
					size: "sm"
				})
			})]
		})
	});
};
//#endregion
export { a as ImageUploadError };
