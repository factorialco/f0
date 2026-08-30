import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { F0AvatarList as r } from "../../../components/avatars/F0AvatarList/index.js";
import { F0FileItem as i } from "../../../components/F0FileItem/F0FileItem.js";
import { Weekdays as a } from "../../Widgets/Content/Weekdays/index.js";
import { DataList as o } from "../DataList/index.js";
import { forwardRef as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/experimental/Lists/DetailsItem/index.tsx
var d = ({ content: e }) => /* @__PURE__ */ u(c, { children: [
	e.type === "weekdays" && /* @__PURE__ */ l("li", {
		className: "list-none px-1.5 py-1",
		children: /* @__PURE__ */ l(a, { ...e })
	}),
	e.type === "person" && /* @__PURE__ */ l(o.PersonItem, { ...e }),
	e.type === "item" && /* @__PURE__ */ l(o.Item, { ...e }),
	e.type === "team" && /* @__PURE__ */ l(o.TeamItem, { ...e }),
	e.type === "company" && /* @__PURE__ */ l(o.CompanyItem, { ...e }),
	e.type === "dot-tag" && /* @__PURE__ */ l(o.DotTagItem, { ...e }),
	e.type === "alert-tag" && /* @__PURE__ */ l(o.AlertTagItem, { ...e }),
	e.type === "balance-tag" && /* @__PURE__ */ l(o.BalanceTagItem, { ...e }),
	e.type === "status-tag" && /* @__PURE__ */ l(o.StatusTagItem, { ...e }),
	e.type === "raw-tag" && /* @__PURE__ */ l(o.RawTagItem, { ...e }),
	e.type === "tag-list" && /* @__PURE__ */ l(o.TagListItem, { ...e.tagList }),
	e.type === "avatar-list" && /* @__PURE__ */ l("li", {
		className: "list-none px-1.5 py-1",
		children: /* @__PURE__ */ l(r, { ...e.avatarList })
	}),
	e.type === "file" && (() => {
		let { type: t, ...n } = e;
		return /* @__PURE__ */ l("li", {
			className: "list-none px-1.5 py-1",
			children: /* @__PURE__ */ l(i, { ...n })
		});
	})()
] }), f = s(function({ title: e, content: t, isHorizontal: r = !1, verticalLayout: i = !1, spacingAtTheBottom: a }, s) {
	let c = Array.isArray(t) ? t : [t];
	return /* @__PURE__ */ l("div", {
		ref: s,
		className: n("flex flex-col gap-0.5", a && !r && "pb-3", r && !i && "xs:[&_ul>li]:p-0 [&_ul]:flex-1", r && i && "[&_ul>li>*]:px-0 [&_ul]:flex-1 xs:[&>div]:flex-col"),
		children: /* @__PURE__ */ l(o, {
			label: e,
			isHorizontal: r,
			children: c.map((e, t) => /* @__PURE__ */ l(d, { content: e }, t))
		})
	});
}), p = e(t("DetailsItem", f));
//#endregion
export { p as DetailsItem };
