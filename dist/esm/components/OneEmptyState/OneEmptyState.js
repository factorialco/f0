import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { F0Button as t } from "../F0Button/F0Button.js";
import { F0AvatarEmoji as n } from "../avatars/F0AvatarEmoji/index.js";
import { F0AvatarAlert as r } from "../avatars/F0AvatarAlert/index.js";
import { UpsellingButton as i } from "../../sds/UpsellingKit/UpsellingButton/index.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/OneEmptyState/OneEmptyState.tsx
function s({ title: e, description: s, variant: c = "default", emoji: l, actions: u, ...d }) {
	return /* @__PURE__ */ o("div", {
		className: "flex flex-col items-center justify-center gap-5 p-8",
		...d,
		children: [
			c === "default" && /* @__PURE__ */ a(n, {
				emoji: l,
				size: "lg"
			}),
			c !== "default" && /* @__PURE__ */ a(r, {
				type: c,
				size: "lg"
			}),
			/* @__PURE__ */ o("div", {
				className: "flex flex-col items-center justify-center gap-0.5",
				children: [/* @__PURE__ */ a("p", {
					className: "text-center text-lg font-medium text-f1-foreground",
					children: e
				}), s && /* @__PURE__ */ a("p", {
					className: "max-w-96 text-center text-f1-foreground-secondary",
					children: s
				})]
			}),
			u && /* @__PURE__ */ a("div", {
				className: "flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full",
				children: u.map((e) => e.type === "upsell" ? /* @__PURE__ */ a(i, {
					label: e.label,
					onRequest: () => Promise.resolve(e.onClick()),
					errorMessage: e.errorMessage,
					successMessage: e.successMessage,
					loadingState: e.loadingState,
					nextSteps: e.nextSteps,
					closeLabel: e.closeLabel
				}, e.label) : /* @__PURE__ */ a(t, {
					label: e.label,
					variant: e.variant,
					onClick: e.onClick,
					icon: e.icon
				}, e.label))
			})
		]
	});
}
var c = e(s);
//#endregion
export { c as OneEmptyState };
