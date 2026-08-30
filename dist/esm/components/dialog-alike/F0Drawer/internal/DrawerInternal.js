import { Content as e } from "../../common/Content.js";
import { Footer as t } from "../../common/Footer.js";
import { Header as n } from "../../common/Header.js";
import { DialogWrapper as r } from "../../common/Wrapper.js";
import { useEffect as i, useMemo as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/dialog-alike/F0Drawer/internal/DrawerInternal.tsx
var u = ({ disableClose: u = !1, onClose: d, isOpen: f, children: p, position: m = "right", size: h = "md", primaryAction: g, secondaryAction: _, title: v, description: y, module: b, otherActions: x, tabs: S, modal: C = !1, activeTabId: w, setActiveTabId: T, disableContentPadding: E, container: D, onWidthChange: O }) => {
	let [k, A] = o(f);
	i(() => {
		A(f);
	}, [f]);
	let j = a(() => /* @__PURE__ */ l(s, { children: [
		/* @__PURE__ */ c(n, {
			title: v,
			description: y,
			module: b,
			otherActions: x,
			tabs: S,
			activeTabId: w,
			setActiveTabId: T,
			disableClose: u
		}),
		/* @__PURE__ */ c(e, {
			disableContentPadding: E ?? !1,
			children: p
		}),
		/* @__PURE__ */ c(t, {
			primaryAction: g ?? [],
			secondaryAction: _ ?? [],
			onClose: () => A(!1)
		})
	] }), [
		v,
		y,
		b,
		x,
		S,
		w,
		T,
		u,
		E,
		p,
		g,
		_
	]);
	return /* @__PURE__ */ c(r, {
		isOpen: k,
		onClose: d,
		position: m,
		size: h,
		modal: C,
		showOverlay: C,
		fullHeight: !0,
		onOpenChange: A,
		container: D,
		onWidthChange: O,
		children: j
	});
};
//#endregion
export { u as DrawerInternal };
