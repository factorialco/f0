import { Content as e } from "../../common/Content.js";
import { Footer as t } from "../../common/Footer.js";
import { Header as n } from "../../common/Header.js";
import { DialogWrapper as r } from "../../common/Wrapper.js";
import { useEffect as i, useMemo as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/dialog-alike/F0Dialog/internal/DialogInternal.tsx
var u = ({ disableClose: u = !1, onClose: d, isOpen: f, children: p, size: m = "md", primaryAction: h, secondaryAction: g, title: _, description: v, module: y, otherActions: b, tabs: x, modal: S = !1, activeTabId: C, setActiveTabId: w, disableContentPadding: T, variant: E = "default", type: D = "default", container: O }) => {
	let [k, A] = o(f);
	i(() => {
		A(f);
	}, [f]);
	let j = a(() => /* @__PURE__ */ l(s, { children: [
		E !== "notification" && /* @__PURE__ */ c(n, {
			title: _,
			description: v,
			module: y,
			otherActions: b,
			tabs: x,
			activeTabId: C,
			setActiveTabId: w,
			disableClose: u
		}),
		/* @__PURE__ */ c(e, {
			disableContentPadding: T ?? !1,
			children: p
		}),
		/* @__PURE__ */ c(t, {
			primaryAction: h ?? [],
			secondaryAction: g ?? [],
			variant: E,
			type: D,
			onClose: () => A(!1)
		})
	] }), [
		_,
		v,
		y,
		b,
		x,
		C,
		w,
		u,
		T,
		p,
		h,
		g,
		E,
		D
	]);
	return /* @__PURE__ */ c(r, {
		isOpen: k,
		onClose: d,
		position: "center",
		size: m,
		modal: S,
		onOpenChange: A,
		container: O,
		children: j
	});
};
//#endregion
export { u as DialogInternal };
