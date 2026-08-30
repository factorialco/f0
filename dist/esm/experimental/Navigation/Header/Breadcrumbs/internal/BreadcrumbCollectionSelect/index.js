import { Link as e } from "../../../../../../lib/linkHandler.js";
import { BreadcrumbSelect as t } from "../BreadcrumbSelect/index.js";
import { useDataCollectionStorage as n } from "../../../../../../lib/providers/datacollection/DataCollectionStorageProvider.js";
import { notifyDataCollectionStorageChange as r } from "../../../../../../lib/providers/datacollection/dataCollectionStorageEvents.js";
import { mergeDataCollectionFilters as i, readDataCollectionStorage as a } from "../../../../../../lib/providers/datacollection/readDataCollectionStorage.js";
import { buildCollectionBoundSource as o } from "./buildCollectionBoundSource.js";
import { useCallback as s, useLayoutEffect as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbCollectionSelect/index.tsx
function m({ item: m }) {
	let [h] = u(() => o(m.source, a(m.collectionId), {
		seed: m.seed,
		showFilters: m.showFilters
	})), g = l(m);
	g.current = m;
	let _ = n(), v = l(_);
	v.current = _;
	let y = s((e) => g.current.mapOptions(e), []), b = s((e) => {
		let t = g.current;
		t.onFiltersChange?.(e), t.showFilters && (async () => {
			let n = await v.current.get(t.collectionId);
			await v.current.set(t.collectionId, i(n ?? {}, e)), r(t.collectionId);
		})().catch(() => {});
	}, []), [x, S] = u(null), C = l(null);
	c(() => {
		x && (C.current?.click(), S(null));
	}, [x]);
	let w = s((e, t) => {
		let n = g.current;
		if (e === void 0 || e === n.value) return;
		let r = n.getItemHref?.(e, t);
		r && S(r), n.onSelect?.(e, t);
	}, []);
	return /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ f(t, {
		label: m.label,
		hideLabel: !0,
		source: h,
		mapOptions: y,
		defaultItem: m.defaultItem,
		clearable: !1,
		onChange: w,
		value: m.value,
		showSearchBox: m.searchbox,
		onFiltersChange: b
	}), x && /* @__PURE__ */ f(e, {
		href: x,
		ref: C,
		tabIndex: -1,
		"aria-hidden": !0,
		className: "hidden"
	})] });
}
//#endregion
export { m as BreadcrumbCollectionSelect };
