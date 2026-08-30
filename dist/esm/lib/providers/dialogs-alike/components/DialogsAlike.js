import { toArray as e } from "../../../toArray.js";
import { DrawerInternal as t } from "../../../../components/dialog-alike/F0Drawer/internal/DrawerInternal.js";
import { DialogInternal as n } from "../../../../components/dialog-alike/F0Dialog/internal/DialogInternal.js";
import { DialogNotificationInternal as r } from "../../../../components/dialog-alike/F0Dialog/internal/DialogNotification.js";
import { Fragment as i, useEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u } from "react/jsx-runtime";
import { nanoid as d } from "nanoid";
//#region src/lib/providers/dialogs-alike/components/DialogsAlike.tsx
var f = 200, p = async (e) => Promise.resolve(typeof e.value == "function" ? await e.value() : e.value), m = ({ items: m }) => {
	let [h, g] = c({}), [_, v] = c(m), y = s(m), b = s(/* @__PURE__ */ new Map());
	a(() => {
		let e = new Set(m.map((e) => e.id)), t = y.current;
		y.current = m;
		for (let t of e) {
			let e = b.current.get(t);
			e && (clearTimeout(e), b.current.delete(t));
		}
		for (let n of t) {
			if (e.has(n.id) || b.current.has(n.id)) continue;
			let t = setTimeout(() => {
				b.current.delete(n.id), v((e) => e.filter((e) => e.id !== n.id));
			}, f);
			b.current.set(n.id, t);
		}
		v((t) => {
			let n = [...m];
			for (let r of t) e.has(r.id) || n.some((e) => e.id === r.id) || n.push(r);
			return n.length === t.length && n.every((e, n) => e === t[n]) ? t : n;
		});
	}, [m]), a(() => {
		let e = b.current;
		return () => {
			for (let t of e.values()) clearTimeout(t);
			e.clear();
		};
	}, []);
	let x = o(() => new Set(m.map((e) => e.id)), [m]), S = (e) => h[e] > 0, C = (e, t) => {
		g((n) => ({
			...n,
			[e]: (n[e] || 0) + t
		}));
	}, w = o(() => {
		let t = (e, t) => ({
			...t,
			value: d(),
			onClick: async () => {
				t.nonBlocking || C(e.id, 1);
				try {
					let n = await p(t);
					e.onClickAction(t, n);
				} finally {
					t.nonBlocking || C(e.id, -1);
				}
				return Promise.resolve();
			}
		});
		return _.map((n) => ({
			...n,
			actions: {
				primary: e(n.actions.primary).map((e) => t(n, e)),
				secondary: e(n.actions.secondary).map((e) => t(n, e))
			}
		}));
	}, [_]), T = o(() => {
		let e = (e, t) => ({
			...t,
			disabled: t.disabled || S(e)
		});
		return w.map((t) => ({
			...t,
			actions: {
				primary: t.actions.primary.map((n) => e(t.id, n)),
				secondary: t.actions.secondary.map((n) => e(t.id, n))
			}
		}));
	}, [w, h]);
	return /* @__PURE__ */ u(l, { children: T.map((e) => /* @__PURE__ */ u(i, { children: e.variant === "notification" ? /* @__PURE__ */ u(r, {
		title: e.title,
		description: e.description ?? "",
		type: e.type,
		isOpen: x.has(e.id),
		onClose: e.onCloseDialog,
		primaryAction: e.actions.primary[0],
		secondaryAction: e.actions.secondary
	}, e.id) : e.variant === "drawer" ? /* @__PURE__ */ u(t, {
		disableClose: S(e.id),
		isOpen: x.has(e.id),
		size: e.size,
		onClose: e.onCloseDialog,
		title: e.title,
		description: e.description,
		primaryAction: e.actions.primary,
		secondaryAction: e.actions.secondary,
		modal: e.modal,
		position: e.position,
		module: e.module,
		children: e.content
	}, e.id) : /* @__PURE__ */ u(n, {
		disableClose: S(e.id),
		isOpen: x.has(e.id),
		size: e.size,
		onClose: e.onCloseDialog,
		title: e.title,
		description: e.description,
		primaryAction: e.actions.primary,
		secondaryAction: e.actions.secondary,
		modal: e.modal,
		module: e.module,
		children: e.content
	}, e.id) }, e.id)) });
};
//#endregion
export { m as DialogsAlike };
