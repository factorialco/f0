import { cn as e } from "../../../../../lib/utils.js";
import { F0Icon as t } from "../../../../F0Icon/index.js";
import { actionVariants as n } from "../../../../../ui/Action/variants.js";
import { Action as r } from "../../../../../ui/Action/Action.js";
import { F0ButtonToggle as i } from "../../../../F0ButtonToggle/F0ButtonToggle.js";
import { useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { AnimatePresence as c, motion as l } from "motion/react";
import * as u from "@radix-ui/react-popover";
//#region src/components/RichText/internal/Toolbar/ToolbarDropdown/index.tsx
var d = ({ items: d, disabled: f = !1, activator: p, darkMode: m = !1, position: h = "top" }) => {
	let [g, _] = a(!1);
	return /* @__PURE__ */ s(u.Root, {
		open: g,
		modal: !1,
		onOpenChange: _,
		children: [/* @__PURE__ */ o(u.Trigger, {
			asChild: !0,
			children: /* @__PURE__ */ o(i, {
				label: p.label,
				icon: p.icon,
				selected: g,
				disabled: f,
				onSelectedChange: () => {
					f || _(!g);
				}
			})
		}), /* @__PURE__ */ o(u.Portal, {
			container: document.body,
			children: /* @__PURE__ */ o(u.Content, {
				side: h,
				align: "end",
				sideOffset: 10,
				collisionPadding: 10,
				alignOffset: 0,
				style: { zIndex: 9999 },
				children: /* @__PURE__ */ o(c, { children: g && /* @__PURE__ */ o(l.div, {
					initial: {
						opacity: 0,
						scale: .95,
						y: 5
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95,
						y: 5
					},
					transition: { duration: .15 },
					className: e("flex w-fit flex-col gap-0.5 overflow-hidden rounded-md border border-solid border-f1-border-secondary bg-f1-background p-0.5 drop-shadow-sm", m && "dark"),
					children: d.map((i, a) => /* @__PURE__ */ o(r, {
						variant: "ghost",
						size: "md",
						onClick: (e) => {
							e.preventDefault(), f || i.onClick();
						},
						disabled: f,
						"aria-label": i.label,
						className: e(n({ variant: i.isActive ? "selected" : "ghost" }), "justify-start"),
						children: /* @__PURE__ */ s("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ o(t, {
								icon: i.icon,
								size: "md"
							}), /* @__PURE__ */ o("span", {
								className: "text-sm",
								children: i.label
							})]
						})
					}, `${i.label}-${a}`))
				}) })
			})
		})]
	});
};
//#endregion
export { d as ToolbarDropdown };
