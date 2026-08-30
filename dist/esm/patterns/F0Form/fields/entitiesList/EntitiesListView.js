import e from "../../../../icons/app/ChevronRight.js";
import t from "../../../../icons/app/Delete.js";
import n from "../../../../icons/app/Pencil.js";
import { useDateFnsLocale as r } from "../../../../lib/providers/l10n/use-date-fns-locale.js";
import { OneDataCollection as i } from "../../../OneDataCollection/index.js";
import { useDataCollectionSource as a } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
import { useMemo as o } from "react";
import { jsx as s } from "react/jsx-runtime";
import { format as c, isValid as l } from "date-fns";
//#region src/patterns/F0Form/fields/entitiesList/EntitiesListView.tsx
function u(e) {
	return e.type === "status" ? {
		type: "status",
		value: {
			status: e.status,
			label: e.label,
			icon: e.icon,
			tooltip: e.tooltip
		}
	} : {
		type: "dotTag",
		value: {
			color: e.color,
			label: e.label
		}
	};
}
function d(e, t) {
	return e == null ? "" : e instanceof Date ? l(e) ? c(e, "dd MMM yyyy", { locale: t }) : "" : Array.isArray(e) ? e.map((e) => String(e)).join(", ") : String(e);
}
function f({ rows: c, fields: l, listItem: f, onEditRow: p, onRemoveRow: m, isRemovePending: h, canEditRow: g, canRemoveRow: _, onRowClick: v, getRowHref: y, getRowActions: b, editLabel: x, removeLabel: S, viewLabel: C }) {
	let w = r(), T = l[0], E = l.slice(1), D = E.filter((e) => e.tag), O = E.filter((e) => !e.tag), k = !!y, A = o(() => c.map(({ __key: e, ...t }) => ({
		...t,
		id: e
	})), [c]), j = !!p || !!m || !!b, M = a({
		dataAdapter: { fetchData: () => ({ records: A }) },
		itemUrl: y ? (e) => y(String(e.id)) : void 0,
		itemOnClick: v ? (e) => () => v(String(e.id)) : void 0,
		itemActions: j ? (e) => {
			let r = String(e.id);
			return [
				...p && g(r) ? [{
					label: x,
					icon: n,
					type: "primary",
					hideLabel: !0,
					onClick: () => p(r)
				}] : [],
				...(b?.(r) ?? []).map((e) => ({
					label: e.label,
					icon: e.icon,
					critical: e.critical,
					enabled: !e.disabled && void 0,
					onClick: e.onClick
				})),
				...m && _(r) ? [{
					label: S,
					icon: t,
					critical: !0,
					enabled: !h?.(r) && void 0,
					onClick: () => m(r)
				}] : []
			];
		} : void 0
	}, [
		A,
		j,
		p,
		m,
		h,
		g,
		_,
		b,
		y,
		v
	]), N = o(() => [{
		type: "list",
		options: {
			itemDefinition: (e) => ({
				title: f?.title?.(e) ?? (T ? d(e[T.id], w) : ""),
				description: f?.description?.(e) ?? O.map((t) => d(e[t.id], w)).filter(Boolean),
				avatar: f?.avatar?.(e)
			}),
			fields: [...D.map((e) => ({
				label: e.label,
				render: (t) => {
					let n = e.tag?.(t);
					return n ? u(n) : void 0;
				}
			})), ...k && !j ? [{
				label: "",
				render: () => ({
					type: "icon",
					value: {
						icon: e,
						label: C,
						hideLabel: !0
					}
				})
			}] : []]
		}
	}], [
		w,
		f,
		T,
		O,
		D,
		k,
		j,
		C
	]);
	return /* @__PURE__ */ s("div", {
		className: "w-full [&_.px-page]:!px-0 [&_.px-page]:!py-0 [&_.overflow-auto]:!pb-0",
		onClickCapture: (e) => {
			let t = e.target.closest("button");
			t && t.type !== "button" && e.preventDefault();
		},
		children: /* @__PURE__ */ s(i, {
			source: M,
			visualizations: N,
			storage: !1,
			disableUrlParams: !0
		})
	});
}
//#endregion
export { f as EntitiesListView };
