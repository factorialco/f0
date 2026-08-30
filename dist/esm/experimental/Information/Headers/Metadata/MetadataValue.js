import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import n from "../../../../icons/app/AlertCircle.js";
import r from "../../../../icons/app/Warning.js";
import { F0TagStatus as i } from "../../../../components/tags/F0TagStatus/index.js";
import { F0Avatar as a } from "../../../../components/avatars/F0Avatar/index.js";
import { F0AvatarList as o } from "../../../../components/avatars/F0AvatarList/index.js";
import { getColor as s } from "../../../../kits/Charts/utils/colors.js";
import { Progress as c } from "../../../../ui/progress.js";
import { F0TagDot as l } from "../../../../components/tags/F0TagDot/index.js";
import { F0TagRaw as u } from "../../../../components/tags/F0TagRaw/index.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/experimental/Information/Headers/Metadata/MetadataValue.tsx
var p = {
	warning: {
		icon: r,
		iconColor: "warning",
		textColor: "text-f1-foreground-warning"
	},
	critical: {
		icon: n,
		iconColor: "critical",
		textColor: "text-f1-foreground-critical"
	}
};
function m({ item: n, collapse: r = !1 }) {
	let { value: m } = n;
	switch (m.type) {
		case "text": return /* @__PURE__ */ d("span", { children: m.content });
		case "avatar": return /* @__PURE__ */ f("div", {
			className: "flex items-center gap-1",
			children: [/* @__PURE__ */ d(a, {
				avatar: m.variant,
				size: "xs"
			}), m.text && /* @__PURE__ */ d("span", { children: m.text })]
		});
		case "status": return /* @__PURE__ */ d(i, {
			text: m.label,
			variant: m.variant
		});
		case "list": return /* @__PURE__ */ d(o, {
			type: m.variant,
			avatars: m.avatars,
			size: "xs",
			max: m.max ?? 3
		});
		case "data-list": return r ? /* @__PURE__ */ f("div", {
			className: "flex items-center justify-center gap-1 font-medium",
			children: [m.data[0], m.data.length > 1 && /* @__PURE__ */ f("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", m.data.length - 1]
			})]
		}) : /* @__PURE__ */ d("div", {
			className: "flex flex-col gap-1.5",
			children: m.data.map((e) => /* @__PURE__ */ d("span", { children: e }, e))
		});
		case "tag-list": return r ? /* @__PURE__ */ f("div", {
			className: "flex flex-wrap items-center justify-center gap-1 font-medium",
			children: [/* @__PURE__ */ d(u, { text: m.tags[0] }), m.tags.length > 1 && /* @__PURE__ */ f("span", {
				className: "tabular-nums text-f1-foreground-secondary",
				children: ["+", m.tags.length - 1]
			})]
		}) : /* @__PURE__ */ d("div", {
			className: e("flex flex-col gap-1 [&>div]:w-fit", m.tags.length > 1 && "-mt-[3px]"),
			children: m.tags.map((e) => /* @__PURE__ */ d(u, { text: e }, e))
		});
		case "dot-tag": return /* @__PURE__ */ d(l, {
			text: m.label,
			color: m.color
		});
		case "date": {
			if (m.icon === void 0) return /* @__PURE__ */ d("span", { children: m.formattedDate });
			let { icon: e, iconColor: n, textColor: r } = p[m.icon];
			return /* @__PURE__ */ f("div", {
				className: "flex items-center justify-center gap-0.5 font-medium",
				children: [/* @__PURE__ */ d(t, {
					icon: e,
					color: n
				}), /* @__PURE__ */ d("span", {
					className: r,
					children: m.formattedDate
				})]
			});
		}
		case "progress-bar": {
			let e = m.color ? s(m.color) : s("categorical-1"), t = m.max && m.max > 0 ? m.max : 100, r = Math.min(Math.max(0, m.value), t), i = r / t * 100;
			return /* @__PURE__ */ f("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ d("div", {
					className: "min-w-16",
					children: /* @__PURE__ */ d(c, {
						color: e,
						value: i,
						max: 100,
						"aria-label": n.label,
						"aria-valuemin": 0,
						"aria-valuemax": t,
						"aria-valuenow": r,
						"aria-valuetext": m.label
					})
				}), m.label && /* @__PURE__ */ d("span", {
					className: "whitespace-nowrap text-sm font-medium",
					children: m.label
				})]
			});
		}
	}
}
//#endregion
export { m as MetadataValue };
