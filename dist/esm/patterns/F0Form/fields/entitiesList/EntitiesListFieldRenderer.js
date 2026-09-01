import { Tooltip as e, TooltipContent as t, TooltipProvider as n, TooltipTrigger as r } from "../../../../ui/tooltip.js";
import i from "../../../../icons/app/Add.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../components/F0Button/F0Button.js";
import { useF0FormDefinition as s } from "../../../F0WizardForm/useF0FormDefinition.js";
import { f0FormField as c, getF0Config as l, isZodType as u, unwrapZodSchema as d } from "../../f0Schema.js";
import { F0FormEditableTable as f } from "../../../../experimental/F0FormEditableTable/F0FormEditableTable.js";
import { dialogs as p } from "../../../../lib/providers/dialogs-alike/imperative.js";
import { EntitiesListView as ee } from "./EntitiesListView.js";
import { openFormDialog as te } from "../../openFormDialog.js";
import { isFieldRequired as ne } from "../schema.js";
import { resolveEntitiesListCell as m } from "./resolveCell.js";
import { useCallback as h, useEffect as re, useMemo as g, useRef as _, useState as ie } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { parseISO as ae } from "date-fns";
import { useFormContext as oe } from "react-hook-form";
import { z as b } from "zod";
//#region src/patterns/F0Form/fields/entitiesList/EntitiesListFieldRenderer.tsx
var se = 2;
function ce({ config: a }) {
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
function le(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function ue(e, t) {
	let n = {}, r = e?.shape ?? {};
	for (let e of Object.keys(r)) {
		let i = r[e];
		if (l(i)) {
			n[e] = i;
			continue;
		}
		let a = i.describe(i.description ?? ""), o = d(i), s = t?.[e], f = s?.label ?? le(e), p = s?.placeholder;
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
	let r = n, { forms: i } = a(), o = i.entitiesList, c = _(0), b = e.labels, S = b?.addButton ?? o.add, de = b?.create?.title ?? S, C = b?.create?.description, w = b?.update?.title ?? o.edit, T = b?.update?.description, fe = b?.edit ?? o.edit, pe = b?.edit ?? b?.update?.title ?? o.edit, E = b?.remove ?? o.remove, { formState: me } = oe(), he = me.submitCount > 0 && !e.autoSave, D = _(/* @__PURE__ */ new Set()), ge = _(/* @__PURE__ */ new Set()), _e = h((e, t) => he || !D.current.has(e) ? !0 : ge.current.has(`${e}:${t}`), [he]), O = e.itemSchema?.shape ?? {}, k = Object.keys(O), ve = e.visualization === "list-view", ye = e.createFormDefinition != null || e.updateFormDefinition != null, A = ve || ye || (e.supportInlineEditing == null ? k.length > se : !e.supportInlineEditing), j = g(() => k.filter((e) => m(O[e])?.kind === "date"), [e.itemSchema]), M = h((e) => {
		if (j.length === 0) return e;
		let t = { ...e };
		for (let e of j) t[e] instanceof Date && (t[e] = t[e].toISOString());
		return t;
	}, [j]), N = h((e) => {
		if (j.length === 0) return e;
		let t = { ...e };
		for (let e of j) {
			let n = t[e];
			if (typeof n == "string" && n !== "") {
				let r = ae(n);
				t[e] = Number.isNaN(r.getTime()) ? void 0 : r;
			} else n === "" && (t[e] = void 0);
		}
		return t;
	}, [j]), P = h((e) => x(e).map((e) => ({
		__key: `row-${c.current++}`,
		...M(e)
	})), [M]), [F, I] = ie(() => P(t.value)), [L, be] = ie(() => /* @__PURE__ */ new Set()), xe = h((e) => L.has(e), [L]), R = _(JSON.stringify(x(t.value)));
	re(() => {
		let e = JSON.stringify(x(t.value));
		e !== R.current && (R.current = e, I(P(t.value)));
	}, [t.value, P]);
	let z = h((e) => {
		I(e);
		let n = e.map(({ __key: e, ...t }) => N(t));
		R.current = JSON.stringify(n), t.onChange(n);
	}, [t, N]), B = e.onRemove, V = e.confirmRemove, H = h(async (e) => {
		let { __key: n, ...r } = e, i = N(r), a = V ? V(i) : {
			type: "critical",
			title: o.removeConfirmTitle,
			msg: o.removeConfirmMessage,
			confirm: { label: E }
		};
		if (await p.confirmation(a)) {
			if (B) {
				be((e) => new Set(e).add(n));
				try {
					let e = await B(i);
					if (e && e.success === !1) {
						await p.alert({
							type: "critical",
							title: o.removeErrorTitle,
							msg: o.removeError
						});
						return;
					}
				} catch {
					await p.alert({
						type: "critical",
						title: o.removeErrorTitle,
						msg: o.removeError
					});
					return;
				} finally {
					be((e) => {
						let t = new Set(e);
						return t.delete(n), t;
					});
				}
			}
			z(F.filter((e) => e.__key !== n)), t.onBlur();
		}
	}, [
		F,
		z,
		t,
		B,
		V,
		N,
		o,
		E
	]), Se = h((e) => {
		let t = { ...e };
		for (let e of k) {
			let n = d(O[e]);
			if (u(n, "ZodNumber") && typeof t[e] == "string") {
				let n = t[e].trim();
				t[e] = n === "" ? void 0 : Number(n);
			}
		}
		return t;
	}, [e.itemSchema]), U = !!e.disabled, W = h((t) => {
		if (!e.editableIds) return !0;
		let n = t.id;
		return n == null || e.editableIds.includes(n);
	}, [e.editableIds]), G = h((t) => {
		if (!e.removableIds) return !0;
		let n = t.id;
		return n == null || e.removableIds.includes(n);
	}, [e.removableIds]), K = h((e) => {
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
	}, []), Ce = g(() => ue(e.itemSchema, e.columns), [e.itemSchema, e.columns]), we = s({
		name: `${e.id}-item`,
		schema: Ce,
		defaultValues: {},
		onSubmit: async () => ({ success: !0 })
	}), Te = e.createFormDefinition ?? we, Ee = e.updateFormDefinition ?? we, q = h(async (n, r) => {
		let i = n === "add" ? Te : Ee, a = i, o = (e) => {
			a = {
				...i,
				defaultValues: void 0,
				asyncDefaultValues: (async () => e)
			};
		};
		if (n === "edit" && r) {
			let { __key: e, ...t } = r;
			o(N(t));
		} else n === "add" && !e.createFormDefinition && o(K(e.itemSchema));
		let s = await te({
			formDefinition: a,
			title: n === "add" ? de : w,
			description: n === "add" ? C : T,
			...n === "add" ? { labels: { submit: S } } : {}
		});
		if (!s.submitted) return;
		let l = M(s.data);
		n === "add" ? z([...F, {
			__key: `row-${c.current++}`,
			...l
		}]) : r && z(F.map((e) => e.__key === r.__key ? {
			...e,
			...l
		} : e)), t.onBlur();
	}, [
		F,
		z,
		K,
		e.itemSchema,
		e.createFormDefinition,
		N,
		M,
		Te,
		Ee,
		de,
		w,
		C,
		T,
		S,
		t
	]), De = e.maxItems != null && F.length >= e.maxItems, Oe = e.canAddItems !== !1, J = (e, t) => A ? "display-only" : U || !W(e) ? "disabled" : t, ke = k.map((t) => {
		if (e.columns?.[t]?.hidden) return null;
		let n = m(O[t]);
		if (!n) return null;
		let r = e.columns?.[t], i = {
			id: t,
			label: r?.label ?? l(O[t])?.label ?? le(t),
			width: r?.width,
			inputPlaceholder: r?.placeholder
		};
		switch (n.kind) {
			case "select": return {
				...i,
				editType: (e) => J(e, "select"),
				selectConfig: { options: n.options }
			};
			case "multiselect": return {
				...i,
				editType: (e) => J(e, "multiselect"),
				selectConfig: { options: n.options }
			};
			case "number": return {
				...i,
				editType: (e) => J(e, "number"),
				numberConfig: {
					...n.units ? { units: n.units } : {},
					...r?.grouping === void 0 ? {} : { grouping: r.grouping }
				}
			};
			case "money": return {
				...i,
				editType: (e) => J(e, "money"),
				numberConfig: {
					...n.units ? { units: n.units } : {},
					...r?.grouping === void 0 ? {} : { grouping: r.grouping }
				}
			};
			case "date": return {
				...i,
				editType: (e) => J(e, "date"),
				dateConfig: {}
			};
			case "text": return {
				...i,
				editType: (e) => J(e, "text"),
				textConfig: { inputType: n.inputType }
			};
		}
	}).filter((e) => e !== null), Y = r?.root?.message ?? r?.message, Ae = h((e, t, n) => {
		if (_e(e.__key, t)) return r?.[n]?.[t]?.message;
	}, [r, _e]), X = e.rowActions, je = X ? (e, t) => {
		let { __key: n, ...r } = e;
		return X(r, t).map((n) => ({
			icon: n.icon,
			label: n.label,
			showLabel: n.showLabel,
			critical: n.critical,
			disabled: n.disabled,
			onClick: () => n.onClick({
				item: r,
				index: t,
				update: (t) => z(F.map((n) => n.__key === e.__key ? {
					...n,
					...t
				} : n)),
				remove: () => void H(e)
			})
		}));
	} : void 0, { hasInvalidRow: Z, hasInvalidExistingRow: Me } = g(() => {
		let t = !1, n = !1;
		for (let { __key: r, ...i } of F) {
			let a = e.itemSchema?.safeParse(N(i));
			a && !a.success && (t = !0, D.current.has(r) || (n = !0));
		}
		return {
			hasInvalidRow: t,
			hasInvalidExistingRow: n
		};
	}, [
		F,
		e.itemSchema,
		N
	]), Ne = Oe ? {
		label: S,
		disabled: U || De || Z,
		disabledTooltip: De ? o.addBlockedMaxHint : Z ? Me ? o.addBlockedErrorHint : o.addBlockedHint : void 0,
		tooltip: C,
		onClick: () => {
			if (A) {
				q("add");
				return;
			}
			let t = `row-${c.current++}`;
			D.current.add(t), z([...F, {
				__key: t,
				...K(e.itemSchema)
			}]);
		}
	} : void 0, Q = h((e) => F.find((t) => t.__key === e), [F]), Pe = h((e) => {
		let t = Q(e);
		t && q("edit", t);
	}, [Q, q]), Fe = h((e) => {
		let t = Q(e);
		t && H(t);
	}, [Q, H]), Ie = h((e) => {
		let t = Q(e);
		return !t || W(t);
	}, [Q, W]), Le = h((e) => {
		let t = Q(e);
		return !t || G(t);
	}, [Q, G]), $ = e.itemHref, Re = h((e) => {
		let t = Q(e);
		if (!t || !$) return;
		let { __key: n, ...r } = t;
		return $(r);
	}, [Q, $]), ze = h((e) => {
		if (!X) return [];
		let t = F.findIndex((t) => t.__key === e);
		if (t < 0) return [];
		let { __key: n, ...r } = F[t];
		return X(r, t).map((n) => ({
			label: n.label,
			icon: n.icon,
			critical: n.critical,
			disabled: n.disabled,
			onClick: () => n.onClick({
				item: r,
				index: t,
				update: (t) => z(F.map((n) => n.__key === e ? {
					...n,
					...t
				} : n)),
				remove: () => void H(F[t])
			})
		}));
	}, [
		X,
		F,
		z,
		t,
		H
	]), Be = e.validation ? ne(e.validation, "entitiesList") : !1, Ve = /* @__PURE__ */ y("div", {
		className: "flex w-full items-center justify-between gap-3",
		children: [/* @__PURE__ */ y("label", {
			className: "text-base font-medium leading-normal text-f1-foreground-secondary",
			children: [e.label, Be && /* @__PURE__ */ v("span", {
				className: "ml-0.5 text-f1-foreground-critical",
				children: "*"
			})]
		}), Ne && /* @__PURE__ */ v(ce, { config: Ne })]
	});
	if (ve) {
		let t = !ye && !!e.itemHref, n = F.map(({ __key: e, ...t }) => ({
			__key: e,
			...N(t)
		}));
		return /* @__PURE__ */ y("div", {
			className: "flex flex-col items-start gap-3",
			children: [
				Ve,
				/* @__PURE__ */ v(ee, {
					rows: n,
					fields: ke.map((t) => {
						let n = e.columns?.[t.id]?.listTag;
						return {
							id: t.id,
							label: t.label,
							tag: n ? (e) => n(e[t.id], e) : void 0
						};
					}),
					listItem: e.listItem,
					canEditRow: Ie,
					canRemoveRow: Le,
					onEditRow: t || U ? void 0 : Pe,
					onRowClick: t || U ? void 0 : Pe,
					onRemoveRow: U ? void 0 : Fe,
					isRemovePending: xe,
					getRowActions: X ? ze : void 0,
					getRowHref: t ? Re : void 0,
					editLabel: pe,
					removeLabel: E,
					viewLabel: o.view
				}),
				Y && /* @__PURE__ */ v("p", {
					className: "text-sm font-medium text-f1-foreground-critical",
					children: Y
				})
			]
		});
	}
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-2",
		children: [
			Ve,
			/* @__PURE__ */ v(f, {
				items: F,
				getRowId: (e) => e.__key,
				columns: ke,
				getCellError: Ae,
				onCellChange: async ({ updatedItem: e, changes: t }) => {
					let n = Se(e);
					for (let e of Object.keys(t)) ge.current.add(`${n.__key}:${e}`);
					z(F.map((e) => e.__key === n.__key ? n : e));
				},
				sortableRows: e.sortable !== !1,
				onReorderRows: ({ items: e }) => z(e),
				onRemoveRow: (e) => void H(e),
				onEditRow: A ? (e) => q("edit", e) : void 0,
				canEditRow: W,
				canRemoveRow: G,
				rowActions: je,
				editLabel: fe,
				removeLabel: E,
				disabled: U || L.size > 0
			}),
			Y && /* @__PURE__ */ v("p", {
				className: "text-sm font-medium text-f1-foreground-critical",
				children: Y
			})
		]
	});
}
//#endregion
export { S as EntitiesListFieldRenderer };
