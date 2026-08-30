import { Tooltip as e, TooltipContent as t, TooltipProvider as n, TooltipTrigger as r } from "../../../../ui/tooltip.js";
import i from "../../../../icons/app/Add.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../components/F0Button/F0Button.js";
import { useF0FormDefinition as s } from "../../../F0WizardForm/useF0FormDefinition.js";
import { f0FormField as c, getF0Config as l, isZodType as u, unwrapZodSchema as d } from "../../f0Schema.js";
import { F0FormEditableTable as f } from "../../../../experimental/F0FormEditableTable/F0FormEditableTable.js";
import { dialogs as p } from "../../../../lib/providers/dialogs-alike/imperative.js";
import { useF0FormRenderer as ee } from "../../formRendererContext.js";
import { openFormDialog as te } from "../../openFormDialog.js";
import { isFieldRequired as ne } from "../schema.js";
import { EntitiesListView as re } from "./EntitiesListView.js";
import { resolveEntitiesListCell as m } from "./resolveCell.js";
import { useCallback as h, useEffect as ie, useMemo as g, useRef as _, useState as ae } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { parseISO as oe } from "date-fns";
import { useFormContext as se } from "react-hook-form";
import { z as b } from "zod";
//#region src/patterns/F0Form/fields/entitiesList/EntitiesListFieldRenderer.tsx
var ce = 2;
function le({ config: a }) {
	let s = /* @__PURE__ */ v(o, {
		type: "button",
		variant: "outline",
		size: "md",
		icon: i,
		label: a.label,
		onClick: a.onClick,
		disabled: a.disabled
	}), c = a.disabled ? a.disabledTooltip : a.tooltip;
	return c ? /* @__PURE__ */ v(n, {
		delayDuration: 100,
		children: /* @__PURE__ */ y(e, { children: [/* @__PURE__ */ v(r, {
			asChild: !0,
			children: a.disabled ? /* @__PURE__ */ v("span", {
				className: "inline-flex cursor-not-allowed [&_button]:pointer-events-none",
				children: s
			}) : /* @__PURE__ */ v("span", {
				className: "inline-flex",
				children: s
			})
		}), /* @__PURE__ */ v(t, {
			side: "top",
			children: c
		})] })
	}) : s;
}
function x(e) {
	return Array.isArray(e) ? e.map((e) => typeof e == "object" && e ? { ...e } : {}) : [];
}
function ue(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function de(e, t) {
	let n = {}, r = e?.shape ?? {};
	for (let e of Object.keys(r)) {
		let i = r[e];
		if (l(i)) {
			n[e] = i;
			continue;
		}
		let a = i.describe(i.description ?? ""), o = d(i), s = t?.[e], f = s?.label ?? ue(e), p = s?.placeholder;
		if (u(o, "ZodEnum")) {
			let t = o._def.values;
			n[e] = c(a, {
				label: f,
				placeholder: p,
				options: t.map((e) => ({
					value: e,
					label: e
				}))
			});
		} else n[e] = c(a, {
			label: f,
			placeholder: p
		});
	}
	return b.object(n);
}
function S({ field: e, formField: t, error: n }) {
	let r = ee(), i = n, { forms: o } = a(), c = o.entitiesList, b = _(0), S = e.labels, C = S?.addButton ?? c.add, fe = S?.create?.title ?? C, w = S?.create?.description, pe = S?.update?.title ?? c.edit, me = S?.update?.description, he = S?.edit ?? c.edit, ge = S?.edit ?? S?.update?.title ?? c.edit, T = S?.remove ?? c.remove, { formState: _e } = se(), ve = _e.submitCount > 0 && !e.autoSave, E = _(/* @__PURE__ */ new Set()), D = _(/* @__PURE__ */ new Set()), ye = h((e, t) => ve || !E.current.has(e) ? !0 : D.current.has(`${e}:${t}`), [ve]), O = e.itemSchema?.shape ?? {}, k = Object.keys(O), A = e.visualization === "list-view", be = e.createFormDefinition != null || e.updateFormDefinition != null, j = A || be || (e.supportInlineEditing == null ? k.length > ce : !e.supportInlineEditing), M = g(() => k.filter((e) => m(O[e])?.kind === "date"), [e.itemSchema]), N = h((e) => {
		if (M.length === 0) return e;
		let t = { ...e };
		for (let e of M) t[e] instanceof Date && (t[e] = t[e].toISOString());
		return t;
	}, [M]), P = h((e) => {
		if (M.length === 0) return e;
		let t = { ...e };
		for (let e of M) {
			let n = t[e];
			if (typeof n == "string" && n !== "") {
				let r = oe(n);
				t[e] = Number.isNaN(r.getTime()) ? void 0 : r;
			} else n === "" && (t[e] = void 0);
		}
		return t;
	}, [M]), F = h((e) => x(e).map((e) => ({
		__key: `row-${b.current++}`,
		...N(e)
	})), [N]), [I, L] = ae(() => F(t.value)), [R, xe] = ae(() => /* @__PURE__ */ new Set()), Se = h((e) => R.has(e), [R]), z = _(JSON.stringify(x(t.value)));
	ie(() => {
		let e = JSON.stringify(x(t.value));
		e !== z.current && (z.current = e, L(F(t.value)));
	}, [t.value, F]);
	let B = h((e) => {
		L(e);
		let n = e.map(({ __key: e, ...t }) => P(t));
		z.current = JSON.stringify(n), t.onChange(n);
	}, [t, P]), V = e.onRemove, H = e.confirmRemove, U = h(async (e) => {
		let { __key: n, ...r } = e, i = P(r), a = H ? H(i) : {
			type: "critical",
			title: c.removeConfirmTitle,
			msg: c.removeConfirmMessage,
			confirm: { label: T }
		};
		if (await p.confirmation(a)) {
			if (V) {
				xe((e) => new Set(e).add(n));
				try {
					let e = await V(i);
					if (e && e.success === !1) {
						await p.alert({
							type: "critical",
							title: c.removeErrorTitle,
							msg: c.removeError
						});
						return;
					}
				} catch {
					await p.alert({
						type: "critical",
						title: c.removeErrorTitle,
						msg: c.removeError
					});
					return;
				} finally {
					xe((e) => {
						let t = new Set(e);
						return t.delete(n), t;
					});
				}
			}
			B(I.filter((e) => e.__key !== n)), t.onBlur();
		}
	}, [
		I,
		B,
		t,
		V,
		H,
		P,
		c,
		T
	]), Ce = h((e) => {
		let t = { ...e };
		for (let e of k) {
			let n = d(O[e]);
			if (u(n, "ZodNumber") && typeof t[e] == "string") {
				let n = t[e].trim();
				t[e] = n === "" ? void 0 : Number(n);
			}
		}
		return t;
	}, [e.itemSchema]), W = !!e.disabled, G = h((t) => {
		if (!e.editableIds) return !0;
		let n = t.id;
		return n == null || e.editableIds.includes(n);
	}, [e.editableIds]), K = h((t) => {
		if (!e.removableIds) return !0;
		let n = t.id;
		return n == null || e.removableIds.includes(n);
	}, [e.removableIds]), q = h((e) => {
		let t = {}, n = e?.shape ?? {};
		for (let e of Object.keys(n)) {
			let r = n[e];
			if (u(r, "ZodDefault")) {
				t[e] = r._def.defaultValue();
				continue;
			}
			let i = d(r);
			u(i, "ZodString") ? t[e] = "" : u(i, "ZodArray") ? t[e] = [] : u(i, "ZodBoolean") && (t[e] = !1);
		}
		return t;
	}, []), we = g(() => de(e.itemSchema, e.columns), [e.itemSchema, e.columns]), Te = s({
		name: `${e.id}-item`,
		schema: we,
		defaultValues: {},
		onSubmit: async () => ({ success: !0 })
	}), Ee = e.createFormDefinition ?? Te, De = e.updateFormDefinition ?? Te, J = h(async (n, i) => {
		let a = n === "add" ? Ee : De, o = a, s = (e) => {
			o = {
				...a,
				defaultValues: void 0,
				asyncDefaultValues: (async () => e)
			};
		};
		if (n === "edit" && i) {
			let { __key: e, ...t } = i;
			s(P(t));
		} else n === "add" && !e.createFormDefinition && s(q(e.itemSchema));
		let c = await te({
			formDefinition: o,
			title: n === "add" ? fe : pe,
			description: n === "add" ? w : me,
			...n === "add" ? { labels: { submit: C } } : {}
		}, r);
		if (!c.submitted) return;
		let l = N(c.data);
		n === "add" ? B([...I, {
			__key: `row-${b.current++}`,
			...l
		}]) : i && B(I.map((e) => e.__key === i.__key ? {
			...e,
			...l
		} : e)), t.onBlur();
	}, [
		I,
		B,
		q,
		e.itemSchema,
		e.createFormDefinition,
		P,
		N,
		Ee,
		De,
		fe,
		pe,
		w,
		me,
		C,
		t,
		r
	]), Oe = e.maxItems != null && I.length >= e.maxItems, ke = e.canAddItems !== !1, Y = (e, t) => j ? "display-only" : W || !G(e) ? "disabled" : t, Ae = k.map((t) => {
		if (e.columns?.[t]?.hidden) return null;
		let n = m(O[t]);
		if (!n) return null;
		let r = e.columns?.[t], i = {
			id: t,
			label: r?.label ?? l(O[t])?.label ?? ue(t),
			width: r?.width,
			inputPlaceholder: r?.placeholder
		};
		switch (n.kind) {
			case "select": return {
				...i,
				editType: (e) => Y(e, "select"),
				selectConfig: { options: n.options }
			};
			case "multiselect": return {
				...i,
				editType: (e) => Y(e, "multiselect"),
				selectConfig: { options: n.options }
			};
			case "number": return {
				...i,
				editType: (e) => Y(e, "number"),
				numberConfig: {
					...n.units ? { units: n.units } : {},
					...r?.grouping === void 0 ? {} : { grouping: r.grouping }
				}
			};
			case "money": return {
				...i,
				editType: (e) => Y(e, "money"),
				numberConfig: {
					...n.units ? { units: n.units } : {},
					...r?.grouping === void 0 ? {} : { grouping: r.grouping }
				}
			};
			case "date": return {
				...i,
				editType: (e) => Y(e, "date"),
				dateConfig: {}
			};
			case "text": return {
				...i,
				editType: (e) => Y(e, "text"),
				textConfig: { inputType: n.inputType }
			};
		}
	}).filter((e) => e !== null), X = i?.root?.message ?? i?.message, je = h((e, t, n) => {
		if (ye(e.__key, t)) return i?.[n]?.[t]?.message;
	}, [i, ye]), Z = e.rowActions, Me = Z ? (e, t) => {
		let { __key: n, ...r } = e;
		return Z(r, t).map((n) => ({
			icon: n.icon,
			label: n.label,
			showLabel: n.showLabel,
			critical: n.critical,
			disabled: n.disabled,
			onClick: () => n.onClick({
				item: r,
				index: t,
				update: (t) => B(I.map((n) => n.__key === e.__key ? {
					...n,
					...t
				} : n)),
				remove: () => void U(e)
			})
		}));
	} : void 0, { hasInvalidRow: Ne, hasInvalidExistingRow: Pe } = g(() => {
		let t = !1, n = !1;
		for (let { __key: r, ...i } of I) {
			let a = e.itemSchema?.safeParse(P(i));
			a && !a.success && (t = !0, E.current.has(r) || (n = !0));
		}
		return {
			hasInvalidRow: t,
			hasInvalidExistingRow: n
		};
	}, [
		I,
		e.itemSchema,
		P
	]), Fe = ke ? {
		label: C,
		disabled: W || Oe || Ne,
		disabledTooltip: Oe ? c.addBlockedMaxHint : Ne ? Pe ? c.addBlockedErrorHint : c.addBlockedHint : void 0,
		tooltip: w,
		onClick: () => {
			if (j) {
				J("add");
				return;
			}
			let t = `row-${b.current++}`;
			E.current.add(t), B([...I, {
				__key: t,
				...q(e.itemSchema)
			}]);
		}
	} : void 0, Q = h((e) => I.find((t) => t.__key === e), [I]), Ie = h((e) => {
		let t = Q(e);
		t && J("edit", t);
	}, [Q, J]), Le = h((e) => {
		let t = Q(e);
		t && U(t);
	}, [Q, U]), Re = h((e) => {
		let t = Q(e);
		return !t || G(t);
	}, [Q, G]), ze = h((e) => {
		let t = Q(e);
		return !t || K(t);
	}, [Q, K]), $ = e.itemHref, Be = h((e) => {
		let t = Q(e);
		if (!t || !$) return;
		let { __key: n, ...r } = t;
		return $(r);
	}, [Q, $]), Ve = h((e) => {
		if (!Z) return [];
		let t = I.findIndex((t) => t.__key === e);
		if (t < 0) return [];
		let { __key: n, ...r } = I[t];
		return Z(r, t).map((n) => ({
			label: n.label,
			icon: n.icon,
			critical: n.critical,
			disabled: n.disabled,
			onClick: () => n.onClick({
				item: r,
				index: t,
				update: (t) => B(I.map((n) => n.__key === e ? {
					...n,
					...t
				} : n)),
				remove: () => void U(I[t])
			})
		}));
	}, [
		Z,
		I,
		B,
		t,
		U
	]), He = e.validation ? ne(e.validation, "entitiesList") : !1, Ue = /* @__PURE__ */ y("div", {
		className: "flex w-full items-center justify-between gap-3",
		children: [/* @__PURE__ */ y("label", {
			className: "text-base font-medium leading-normal text-f1-foreground-secondary",
			children: [e.label, He && /* @__PURE__ */ v("span", {
				className: "ml-0.5 text-f1-foreground-critical",
				children: "*"
			})]
		}), Fe && /* @__PURE__ */ v(le, { config: Fe })]
	});
	if (A) {
		let t = !be && !!e.itemHref, n = I.map(({ __key: e, ...t }) => ({
			__key: e,
			...P(t)
		}));
		return /* @__PURE__ */ y("div", {
			className: "flex flex-col items-start gap-3",
			children: [
				Ue,
				/* @__PURE__ */ v(re, {
					rows: n,
					fields: Ae.map((t) => {
						let n = e.columns?.[t.id]?.listTag;
						return {
							id: t.id,
							label: t.label,
							tag: n ? (e) => n(e[t.id], e) : void 0
						};
					}),
					listItem: e.listItem,
					canEditRow: Re,
					canRemoveRow: ze,
					onEditRow: t || W ? void 0 : Ie,
					onRowClick: t || W ? void 0 : Ie,
					onRemoveRow: W ? void 0 : Le,
					isRemovePending: Se,
					getRowActions: Z ? Ve : void 0,
					getRowHref: t ? Be : void 0,
					editLabel: ge,
					removeLabel: T,
					viewLabel: c.view
				}),
				X && /* @__PURE__ */ v("p", {
					className: "text-sm font-medium text-f1-foreground-critical",
					children: X
				})
			]
		});
	}
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-2",
		children: [
			Ue,
			/* @__PURE__ */ v(f, {
				items: I,
				getRowId: (e) => e.__key,
				columns: Ae,
				getCellError: je,
				onCellChange: async ({ updatedItem: e, changes: t }) => {
					let n = Ce(e);
					for (let e of Object.keys(t)) D.current.add(`${n.__key}:${e}`);
					B(I.map((e) => e.__key === n.__key ? n : e));
				},
				sortableRows: e.sortable !== !1,
				onReorderRows: ({ items: e }) => B(e),
				onRemoveRow: (e) => void U(e),
				onEditRow: j ? (e) => J("edit", e) : void 0,
				canEditRow: G,
				canRemoveRow: K,
				rowActions: Me,
				editLabel: he,
				removeLabel: T,
				disabled: W || R.size > 0
			}),
			X && /* @__PURE__ */ v("p", {
				className: "text-sm font-medium text-f1-foreground-critical",
				children: X
			})
		]
	});
}
//#endregion
export { S as EntitiesListFieldRenderer };
