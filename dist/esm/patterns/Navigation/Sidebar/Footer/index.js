import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { OneEllipsis as n } from "../../../../lib/OneEllipsis/OneEllipsis.js";
import r from "../../../../icons/app/Bell.js";
import i from "../../../../icons/app/Circle.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Tooltip as o } from "../../../../experimental/Overlays/Tooltip/index.js";
import { F0Button as s } from "../../../../components/F0Button/F0Button.js";
import { Badge as c } from "../../../../ui/IconBadge/index.js";
import { F0AvatarPerson as l } from "../../../../components/avatars/F0AvatarPerson/index.js";
import { Dropdown as u } from "../../../../experimental/Navigation/Dropdown/index.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/patterns/Navigation/Sidebar/Footer/index.tsx
function p({ user: p, options: m, showActivityButton: h = !1, activityButtonShortcut: g, onActivityButtonClick: _, onDropdownClick: v, hasActivityUpdates: y }) {
	let b = a();
	return /* @__PURE__ */ f("div", {
		className: "flex flex-row items-center justify-between gap-1 p-3",
		children: [/* @__PURE__ */ d("div", {
			className: "min-w-0 flex-1",
			children: /* @__PURE__ */ d(u, {
				items: m,
				children: /* @__PURE__ */ f("button", {
					className: e("flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", t("focus-visible:ring-inset")),
					onClick: v,
					children: [/* @__PURE__ */ d(l, {
						src: p.avatarUrl,
						firstName: p.firstName,
						lastName: p.lastName,
						size: "xs"
					}), /* @__PURE__ */ d(n, {
						className: "text-f1-foreground",
						children: `${p.firstName} ${p.lastName}`
					})]
				})
			})
		}), h && /* @__PURE__ */ d(o, {
			label: b.notifications,
			shortcut: g,
			children: /* @__PURE__ */ f("div", {
				className: "relative",
				children: [/* @__PURE__ */ d(s, {
					icon: r,
					label: b.notifications,
					onClick: _,
					variant: "ghost",
					hideLabel: !0
				}), y && /* @__PURE__ */ d("div", {
					className: "absolute -right-1 -top-1 rounded-full bg-f1-background",
					children: /* @__PURE__ */ d(c, {
						type: "highlight",
						size: "sm",
						icon: i
					})
				})]
			})
		})]
	});
}
//#endregion
export { p as SidebarFooter };
