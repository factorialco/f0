import e from "../../../../icons/app/Cross.js";
import { ButtonInternal as t } from "../../../../components/F0Button/internal.js";
import { F0AvatarModule as n } from "../../../../components/avatars/F0AvatarModule/index.js";
import { ScrollArea as r, ScrollBar as i } from "../../../../ui/scrollarea.js";
import { DialogContent as a } from "../../../../ui/Dialog/components/DialogContent.js";
import { DialogTitle as o } from "../../../../ui/Dialog/components/DialogTitle.js";
import { Dialog as s } from "../../../../ui/Dialog/dialog.js";
import { useEffect as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ProductModal/components/CustomModal.tsx
function f({ isOpen: f, onClose: p, title: m, children: h, module: g, portalContainer: _ }) {
	let [v, y] = l(f);
	return c(() => {
		y(f);
	}, [f]), /* @__PURE__ */ u(s, {
		open: v,
		onOpenChange: (e) => {
			y(e), e || p();
		},
		modal: !0,
		children: /* @__PURE__ */ d(a, {
			className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
			container: _,
			children: [/* @__PURE__ */ d("div", {
				className: "flex flex-row items-center justify-between px-4 py-4",
				children: [/* @__PURE__ */ d(o, {
					className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
					children: [g && /* @__PURE__ */ u(n, {
						module: g,
						size: "md"
					}), m]
				}), /* @__PURE__ */ u(t, {
					variant: "outline",
					icon: e,
					onClick: p,
					label: "Close modal",
					hideLabel: !0
				})]
			}), /* @__PURE__ */ d(r, {
				className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
				children: [h, /* @__PURE__ */ u(i, {
					orientation: "vertical",
					className: "[&_div]:bg-f1-background"
				})]
			})]
		})
	});
}
//#endregion
export { f as CustomModal };
