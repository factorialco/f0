import { experimentalComponent as e } from "../../../../lib/experimental.js";
import t from "../../../../icons/app/Bell.js";
import { Skeleton as n } from "../../../../ui/skeleton.js";
import { F0AvatarIcon as r } from "../../../../components/avatars/F0AvatarIcon/index.js";
import { withSkeleton as i } from "../../../../lib/skeleton.js";
import { getDisplayDateBasedOnDuration as a } from "../../../../lib/date.js";
import { useDateFnsLocale as o } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { useIntersectionObserver as l } from "usehooks-ts";
//#region src/sds/inbox/Activity/ActivityItem/index.tsx
var u = ({ id: e, createdAt: n, title: i, description: u, icon: d, category: f, isUnread: p = !1, onClick: m, onVisible: h }) => {
	let { ref: g } = l({
		threshold: .1,
		onChange(t) {
			t && h?.(e);
		}
	}), _ = o(), v = a(n, {
		yesterdayRelative: !1,
		locale: _
	});
	return /* @__PURE__ */ c("div", {
		ref: g,
		className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
		onClick: () => {
			m(e);
		},
		children: [
			/* @__PURE__ */ s(r, { icon: d ?? t }),
			/* @__PURE__ */ c("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ s("p", {
						className: "line-clamp-2 font-medium text-f1-foreground",
						title: i,
						children: i
					}),
					/* @__PURE__ */ s("p", {
						className: "line-clamp-2 text-f1-foreground-secondary",
						title: u,
						children: u
					}),
					/* @__PURE__ */ s("div", {
						className: "mt-1.5 flex flex-row",
						children: /* @__PURE__ */ s("p", {
							className: "text-f1-foreground-secondary",
							children: `${f} · ${v}`
						})
					})
				]
			}),
			/* @__PURE__ */ s("div", {
				className: "ml-1",
				children: p && /* @__PURE__ */ s("div", { className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent" })
			})
		]
	});
}, d = () => /* @__PURE__ */ c("div", {
	className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3",
	children: [/* @__PURE__ */ s(n, { className: "size-9 rounded-md" }), /* @__PURE__ */ c("div", {
		className: "flex-1",
		children: [
			/* @__PURE__ */ s(n, { className: "mb-1 h-5 w-full" }),
			/* @__PURE__ */ s(n, { className: "mb-1 h-4 w-full" }),
			/* @__PURE__ */ s(n, { className: "mb-1 h-4 w-full" }),
			/* @__PURE__ */ s(n, { className: "mt-1.5 h-4 w-1/3" })
		]
	})]
}), f = e("ActivityItem", i(u, d));
//#endregion
export { f as ActivityItem, d as ActivityItemSkeleton, u as BaseActivityItem };
