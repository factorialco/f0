import { jsxs as b, jsx as t, Fragment as p } from "react/jsx-runtime";
import { useMemo as x } from "react";
import { VirtualList as I } from "../../../../lib/VirtualList/index.js";
import { ListTag as v } from "../../ListTag/index.js";
const S = ({
  groupView: d,
  onSubItemRemove: l,
  onRemove: c,
  selectedEntities: s,
  selectedLabel: o,
  disabled: i = !1,
  hiddenAvatar: f = !1
}) => {
  const u = x(() => {
    const n = d ? s.flatMap(
      (r) => (r.subItems ?? []).map((a) => ({
        parent: r,
        subItem: a
      }))
    ) : s.map((r) => ({
      parent: null,
      subItem: {
        subId: r.id,
        subName: r.name,
        subAvatar: r.avatar,
        subDeactivated: r.deactivated
      }
    })), e = /* @__PURE__ */ new Set();
    return n.filter((r) => {
      const a = r.subItem.subId;
      return e.has(a) ? !1 : (e.add(a), !0);
    });
  }, [d, s]), m = u.length;
  return /* @__PURE__ */ b("div", { className: "w-full flex-col rounded-r-xl", children: [
    /* @__PURE__ */ t("div", { className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl", children: o && /* @__PURE__ */ b("span", { className: "my-auto text-f1-foreground-secondary", children: [
      m,
      " ",
      o
    ] }) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2", children: /* @__PURE__ */ t(
      I,
      {
        height: 425,
        itemCount: m,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (n) => {
          const e = u[n.index];
          return e ? /* @__PURE__ */ t(
            v,
            {
              deactivated: e.subItem.subDeactivated,
              entity: e.subItem,
              disabled: i,
              hiddenAvatar: f,
              onRemove: () => e.parent ? l?.(e.parent, e.subItem) : c({
                id: e.subItem.subId,
                name: e.subItem.subName,
                avatar: e.subItem.subAvatar
              })
            }
          ) : /* @__PURE__ */ t(p, {});
        }
      }
    ) })
  ] });
};
export {
  S as SecondaryContent
};
