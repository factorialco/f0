import { jsx as e, jsxs as g, Fragment as x } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { F0AvatarList as o } from "../../../components/avatars/F0AvatarList/index.js";
import { FileItem as u } from "../../../components/RichText/FileItem/index.js";
import { Weekdays as T } from "../../Widgets/Content/Weekdays/index.js";
import { withDataTestId as h } from "../../../lib/data-testid/index.js";
import { experimentalComponent as D } from "../../../lib/experimental.js";
import { cn as _ } from "../../../lib/utils.js";
import { DataList as m } from "../DataList/index.js";
const w = ({ content: a }) => /* @__PURE__ */ g(x, { children: [
  a.type === "weekdays" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(T, { ...a }) }),
  a.type === "person" && /* @__PURE__ */ e(m.PersonItem, { ...a }),
  a.type === "item" && /* @__PURE__ */ e(m.Item, { ...a }),
  a.type === "team" && /* @__PURE__ */ e(m.TeamItem, { ...a }),
  a.type === "company" && /* @__PURE__ */ e(m.CompanyItem, { ...a }),
  a.type === "dot-tag" && /* @__PURE__ */ e(m.DotTagItem, { ...a }),
  a.type === "alert-tag" && /* @__PURE__ */ e(m.AlertTagItem, { ...a }),
  a.type === "balance-tag" && /* @__PURE__ */ e(m.BalanceTagItem, { ...a }),
  a.type === "status-tag" && /* @__PURE__ */ e(m.StatusTagItem, { ...a }),
  a.type === "raw-tag" && /* @__PURE__ */ e(m.RawTagItem, { ...a }),
  a.type === "tag-list" && /* @__PURE__ */ e(m.TagListItem, { ...a.tagList }),
  a.type === "avatar-list" && /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(o, { ...a.avatarList }) }),
  a.type === "file" && (() => {
    const { type: p, ...r } = a;
    return /* @__PURE__ */ e("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ e(u, { ...r }) });
  })()
] }), A = d(
  function({
    title: p,
    content: r,
    isHorizontal: l = !1,
    verticalLayout: s = !1,
    spacingAtTheBottom: i
  }, t) {
    const y = Array.isArray(r) ? r : [r];
    return /* @__PURE__ */ e(
      "div",
      {
        ref: t,
        className: _(
          "flex flex-col gap-0.5",
          i && !l && "pb-3",
          l && !s && "xs:[&_ul>li]:p-0 [&_ul]:flex-1",
          l && s && "[&_ul>li>*]:px-0 [&_ul]:flex-1 xs:[&>div]:flex-col"
        ),
        children: /* @__PURE__ */ e(m, { label: p, isHorizontal: l, children: y.map((f, I) => /* @__PURE__ */ e(w, { content: f }, I)) })
      }
    );
  }
), R = h(
  D("DetailsItem", A)
);
export {
  R as DetailsItem
};
