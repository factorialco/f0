import { F0AvatarAlert as e } from "../../../avatars/F0AvatarAlert/index.js";
import { DialogDescription as t } from "../../../../ui/Dialog/components/DialogDescription.js";
import { DialogTitle as n } from "../../../../ui/Dialog/components/DialogTitle.js";
import { DialogInternal as r } from "./DialogInternal.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/dialog-alike/F0Dialog/internal/DialogNotification.tsx
var o = ({ isOpen: o = !1, onClose: s = () => {}, type: c, title: l, description: u, primaryAction: d, secondaryAction: f }) => /* @__PURE__ */ i(r, {
	isOpen: o,
	onClose: s,
	variant: "notification",
	size: "sm",
	primaryAction: d,
	secondaryAction: f,
	type: c === "critical" ? "critical" : "default",
	modal: !0,
	children: /* @__PURE__ */ a("div", {
		className: "flex flex-col gap-4 py-2",
		children: [/* @__PURE__ */ i(e, {
			type: c,
			size: "lg"
		}), /* @__PURE__ */ a("div", {
			className: "flex flex-col gap-0.5",
			children: [/* @__PURE__ */ i(n, {
				className: "text-xl sm:text-lg",
				children: l
			}), /* @__PURE__ */ i(t, {
				className: "text-lg sm:text-base",
				children: u
			})]
		})]
	})
});
//#endregion
export { o as DialogNotificationInternal };
