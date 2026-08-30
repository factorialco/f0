import { experimentalComponent as e } from "../../lib/experimental.js";
import { cn as t, focusRing as n } from "../../lib/utils.js";
import { F0Icon as r } from "../../components/F0Icon/index.js";
import { Tooltip as i, TooltipContent as a, TooltipProvider as o, TooltipTrigger as s } from "../../ui/tooltip.js";
import c from "../../icons/app/Add.js";
import l from "../../icons/app/Delete.js";
import u from "../../icons/app/Handle.js";
import d from "../../icons/app/Pencil.js";
import { useI18n as f } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as p } from "../../components/F0Button/F0Button.js";
import { TableBody as m } from "../OneTable/TableBody/index.js";
import { TableCell as h } from "../OneTable/TableCell/index.js";
import { TableHead as g } from "../OneTable/TableHead/index.js";
import { TableHeader as _ } from "../OneTable/TableHeader/index.js";
import { TableRow as v } from "../OneTable/TableRow/index.js";
import { OneTable as y } from "../OneTable/Table/index.js";
import { EditableRowProvider as b } from "../../patterns/OneDataCollection/visualizations/collection/EditableTable/context/EditableRowContext.js";
import { EditableCellRenderer as x } from "../../patterns/OneDataCollection/visualizations/collection/EditableTable/components/EditableCellRenderer.js";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
import { DndContext as T, KeyboardSensor as E, PointerSensor as D, closestCenter as ee, useSensor as O, useSensors as k } from "@dnd-kit/core";
import { SortableContext as te, arrayMove as A, sortableKeyboardCoordinates as ne, useSortable as j, verticalListSortingStrategy as M } from "@dnd-kit/sortable";
import { CSS as N } from "@dnd-kit/utilities";
//#region src/experimental/F0FormEditableTable/F0FormEditableTable.tsx
var P = 36, F = t("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']"), I = t("h-[48px] overflow-hidden p-0 align-middle first:pl-0 last:pr-0", "[&_[data-slot='placeholder']]:!flex [&_[data-slot='placeholder']]:!items-center [&_[data-slot='placeholder']]:!py-0 [&_[data-slot='placeholder']]:!-mt-px", "[&_[data-testid=input-field-wrapper]_.absolute.h-5]:!-mt-[3px]"), L = t("first:pl-3 last:pr-3", "first:after:!left-1 last:after:!right-1"), R = "w-px overflow-visible whitespace-nowrap", z = "min-w-[25cqw]", B = t("outline outline-1 -outline-offset-1 outline-transparent transition-[outline-color,box-shadow] duration-200", "[&:not(:focus-within):hover_*]:!shadow-none", "focus-within:relative focus-within:z-[9] focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]", "[&:not(:focus-within):hover]:relative [&:not(:focus-within):hover]:z-[9] [&:not(:focus-within):hover]:outline-f1-border-hover"), V = "relative z-[9] shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]";
function re(e) {
	return {
		render: (t) => {
			let n = t[e.id];
			return n == null ? "" : String(n);
		},
		...e
	};
}
var ie = ({ transform: e }) => ({
	...e,
	x: 0
}), ae = ({ containerNodeRect: e, draggingNodeRect: t, transform: n }) => {
	if (!t || !e) return n;
	let r = { ...n };
	return t.top + n.y < e.top ? r.y = e.top - t.top : t.bottom + n.y > e.bottom && (r.y = e.bottom - t.bottom), r;
};
function H({ action: e, item: t, index: n, disabled: r }) {
	let i = /* @__PURE__ */ C(p, {
		type: "button",
		variant: e.critical ? "critical" : "outline",
		size: "md",
		icon: e.icon,
		label: e.label,
		hideLabel: !e.showLabel,
		disabled: r || e.disabled,
		onClick: () => e.onClick(t, n)
	});
	return e.critical ? /* @__PURE__ */ C("span", {
		className: "inline-flex [&:active_svg]:!text-f1-icon-inverse [&:hover_svg]:!text-f1-icon-inverse [&_svg]:!text-f1-icon-critical-bold",
		children: i
	}) : i;
}
function U({ item: e, index: n, columns: r, onRemoveRow: i, onEditRow: a, canEditRow: o, canRemoveRow: s, rowActions: c, getCellError: u, hasActionsColumn: f, actionsColWidth: m, removeLabel: g, editLabel: _, disabled: v, dragHandle: y }) {
	let b = !!a && (o?.(e, n) ?? !0), T = !!i && (s?.(e, n) ?? !0), E = c?.(e, n) ?? [];
	return /* @__PURE__ */ w(S, { children: [
		y !== void 0 && /* @__PURE__ */ C(h, {
			width: P,
			sticky: { left: 0 },
			className: I,
			children: /* @__PURE__ */ C("div", {
				className: "pointer-events-auto flex h-full items-center justify-center",
				children: y
			})
		}),
		r.map((i, a) => {
			let o = i.editType?.(e), s = o != null && o !== "display-only" && o !== "disabled", c = i.id ? u?.(e, i.id, n) : void 0;
			return /* @__PURE__ */ C(h, {
				firstCell: a === 0,
				width: i.width,
				minWidth: i.minWidth,
				className: t(I, i.width == null && i.minWidth == null && z, s && (c ? V : B)),
				children: /* @__PURE__ */ C(x, {
					item: e,
					column: i,
					cellIndex: a,
					isLastColumn: !f && a === r.length - 1,
					externalError: c,
					children: null
				})
			}, i.id ?? `cell-${a}`);
		}),
		f && /* @__PURE__ */ C(h, {
			width: m,
			sticky: { right: 0 },
			className: t(I, R),
			children: /* @__PURE__ */ w("div", {
				className: "pointer-events-auto flex h-full items-center justify-center gap-2 px-2",
				children: [
					b && /* @__PURE__ */ C(p, {
						type: "button",
						variant: "outline",
						size: "md",
						icon: d,
						label: _,
						disabled: v,
						onClick: () => a(e, n)
					}),
					E.map((t, r) => /* @__PURE__ */ C(H, {
						action: t,
						item: e,
						index: n,
						disabled: v
					}, t.id ?? `${t.label}-${r}`)),
					T && /* @__PURE__ */ C("span", {
						className: "inline-flex [&:active_svg]:!text-f1-icon-inverse [&:hover_svg]:!text-f1-icon-inverse [&_svg]:!text-f1-icon-critical-bold",
						children: /* @__PURE__ */ C(p, {
							type: "button",
							variant: "critical",
							size: "md",
							hideLabel: !0,
							icon: l,
							label: g,
							disabled: v,
							onClick: () => i(e, n)
						})
					})
				]
			})
		})
	] });
}
function oe({ rowId: e, reorderLabel: i, ...a }) {
	let { setNodeRef: o, setActivatorNodeRef: s, listeners: c, attributes: l, transform: d, transition: f, isDragging: p } = j({
		id: e,
		disabled: a.disabled
	});
	return /* @__PURE__ */ C(v, {
		ref: o,
		style: {
			transform: N.Translate.toString(d),
			transition: f,
			...p ? {
				position: "relative",
				zIndex: 20
			} : void 0
		},
		className: t(F, p && "bg-f1-background shadow-md [&::after]:bg-transparent"),
		children: /* @__PURE__ */ C(U, {
			...a,
			dragHandle: /* @__PURE__ */ C("button", {
				type: "button",
				ref: s,
				"aria-label": i,
				disabled: a.disabled,
				className: t("flex h-6 w-6 scale-75 cursor-grab touch-none items-center justify-center rounded-md text-f1-foreground opacity-40 transition-opacity", "hover:opacity-60 focus-visible:opacity-60", p && "cursor-grabbing opacity-60", a.disabled && "cursor-not-allowed hover:opacity-40", n("rounded-md")),
				...l,
				...c,
				children: /* @__PURE__ */ C(r, {
					icon: u,
					size: "sm"
				})
			})
		})
	});
}
function W({ columns: e, items: n, getRowId: r, onCellChange: l, sortableRows: u, onReorderRows: d, onRemoveRow: h, onEditRow: x, canEditRow: S, canRemoveRow: j, rowActions: N, getCellError: I, addRow: z, editLabel: B, removeLabel: V, bordered: H = !0, disabled: W }) {
	let { t: G } = f(), K = e.map(re), q = n.map((e, t) => r ? r(e, t) : "id" in e && e.id !== void 0 && e.id !== null ? String(e.id) : `index-${t}`), se = k(O(D, { activationConstraint: { distance: 4 } }), O(E, { coordinateGetter: ne })), ce = (e) => {
		let { active: t, over: r } = e;
		if (!r || t.id === r.id) return;
		let i = q.indexOf(String(t.id)), a = q.indexOf(String(r.id));
		i !== -1 && a !== -1 && d?.({
			items: A(n, i, a),
			from: i,
			to: a,
			movedItem: n[i]
		});
	}, J = V ?? G("collections.editableTable.removeRow"), le = B ?? G("collections.editableTable.editRow"), Y = G("collections.editableTable.reorderRow"), ue = G("collections.actions.actions"), de = !!N && n.some((e, t) => N(e, t).length > 0), X = !!h || !!x || de, Z = "auto", Q = n.map((e, t) => {
		let n = q[t], r = {
			item: e,
			index: t,
			columns: K,
			onRemoveRow: h,
			onEditRow: x,
			canEditRow: S,
			canRemoveRow: j,
			rowActions: N,
			getCellError: I,
			hasActionsColumn: X,
			actionsColWidth: Z,
			removeLabel: J,
			editLabel: le,
			disabled: W
		};
		return /* @__PURE__ */ C(b, {
			item: e,
			onCellChange: l,
			children: u ? /* @__PURE__ */ C(oe, {
				...r,
				rowId: n,
				reorderLabel: Y
			}) : /* @__PURE__ */ C(v, {
				className: F,
				children: /* @__PURE__ */ C(U, { ...r })
			})
		}, n);
	}), $ = /* @__PURE__ */ w(y, { children: [/* @__PURE__ */ C(_, { children: /* @__PURE__ */ w(v, { children: [
		u && /* @__PURE__ */ C(g, {
			width: P,
			sticky: { left: 0 },
			className: t(L, "hover:after:!bg-transparent"),
			children: /* @__PURE__ */ C("span", {
				className: "sr-only",
				children: Y
			})
		}),
		K.map((e, t) => /* @__PURE__ */ C(g, {
			width: e.width,
			minWidth: e.minWidth,
			align: e.align,
			info: e.info,
			className: L,
			children: e.label
		}, e.id ?? `head-${t}`)),
		X && /* @__PURE__ */ C(g, {
			width: Z,
			sticky: { right: 0 },
			className: t(L, R, "hover:after:!bg-transparent"),
			children: /* @__PURE__ */ C("span", {
				className: "sr-only",
				children: ue
			})
		})
	] }) }), /* @__PURE__ */ C(m, { children: u ? /* @__PURE__ */ C(te, {
		items: q,
		strategy: M,
		children: Q
	}) : Q })] });
	return /* @__PURE__ */ w("div", {
		className: "flex flex-col items-start gap-3 [container-type:inline-size]",
		"data-f0-editable-table": "",
		children: [/* @__PURE__ */ C("div", {
			className: t("w-full", H && "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent [&_tbody>tr:last-child_td::after]:!bg-transparent", H && "[&_thead_th:first-child]:rounded-tl-[13px] [&_thead_th:last-child]:rounded-tr-[13px] [&_tbody>tr:last-child_td:first-child]:rounded-bl-[13px] [&_tbody>tr:last-child_td:last-child]:rounded-br-[13px]"),
			children: u ? /* @__PURE__ */ C(T, {
				sensors: se,
				collisionDetection: ee,
				onDragEnd: ce,
				modifiers: [ie, ae],
				children: $
			}) : $
		}), z && (z.disabled && z.disabledTooltip ? /* @__PURE__ */ C(o, {
			delayDuration: 100,
			children: /* @__PURE__ */ w(i, { children: [/* @__PURE__ */ C(s, {
				asChild: !0,
				children: /* @__PURE__ */ C("span", {
					className: "inline-flex cursor-not-allowed [&_button]:pointer-events-none",
					children: /* @__PURE__ */ C(p, {
						type: "button",
						variant: "outline",
						size: "md",
						icon: c,
						label: z.label ?? G("collections.editableTable.addRow"),
						onClick: z.onClick,
						disabled: !0
					})
				})
			}), /* @__PURE__ */ C(a, {
				side: "top",
				children: z.disabledTooltip
			})] })
		}) : /* @__PURE__ */ C(p, {
			type: "button",
			variant: "outline",
			size: "md",
			icon: c,
			label: z.label ?? G("collections.editableTable.addRow"),
			onClick: z.onClick,
			disabled: z.disabled
		}))]
	});
}
var G = e("F0FormEditableTable", W);
//#endregion
export { G as F0FormEditableTable };
