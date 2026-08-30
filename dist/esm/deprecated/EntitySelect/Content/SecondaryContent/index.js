import { VirtualList as e } from "../../../../lib/VirtualList/index.js";
import { ListTag as t } from "../../ListTag/index.js";
import { useMemo as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/deprecated/EntitySelect/Content/SecondaryContent/index.tsx
var o = ({ groupView: o, onSubItemRemove: s, onRemove: c, selectedEntities: l, selectedLabel: u, disabled: d = !1, hiddenAvatar: f = !1 }) => {
	let p = n(() => {
		let e = o ? l.flatMap((e) => (e.subItems ?? []).map((t) => ({
			parent: e,
			subItem: t
		}))) : l.map((e) => ({
			parent: null,
			subItem: {
				subId: e.id,
				subName: e.name,
				subAvatar: e.avatar,
				subDeactivated: e.deactivated
			}
		})), t = /* @__PURE__ */ new Set();
		return e.filter((e) => {
			let n = e.subItem.subId;
			return !t.has(n) && (t.add(n), !0);
		});
	}, [o, l]), m = p.length;
	return /* @__PURE__ */ a("div", {
		className: "w-full flex-col rounded-r-xl",
		children: [/* @__PURE__ */ i("div", {
			className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl",
			children: u && /* @__PURE__ */ a("span", {
				className: "my-auto text-f1-foreground-secondary",
				children: [
					m,
					" ",
					u
				]
			})
		}), /* @__PURE__ */ i("div", {
			className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2",
			children: /* @__PURE__ */ i(e, {
				height: 425,
				itemCount: m,
				itemSize: 30,
				className: "overflow-x-hidden",
				renderer: (e) => {
					let n = p[e.index];
					return n ? /* @__PURE__ */ i(t, {
						deactivated: n.subItem.subDeactivated,
						entity: n.subItem,
						disabled: d,
						hiddenAvatar: f,
						onRemove: () => n.parent ? s?.(n.parent, n.subItem) : c({
							id: n.subItem.subId,
							name: n.subItem.subName,
							avatar: n.subItem.subAvatar
						})
					}) : /* @__PURE__ */ i(r, {});
				}
			})
		})]
	});
};
//#endregion
export { o as SecondaryContent };
