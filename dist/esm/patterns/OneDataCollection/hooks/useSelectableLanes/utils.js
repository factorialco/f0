//#region src/patterns/OneDataCollection/hooks/useSelectableLanes/utils.ts
var e = (e) => {
	let t = Array.from(e.values());
	return {
		allSelected: t.every((e) => e.allSelected),
		itemsStatus: t.flatMap((e) => e.itemsStatus),
		groupsStatus: t.reduce((e, t) => ({
			...e,
			...t.groupsStatus
		}), {}),
		filters: t.reduce((e, t) => ({
			...e,
			...t.filters
		}), {}),
		selectedCount: t.reduce((e, t) => e + t.selectedCount, 0),
		selectedIds: t.flatMap((e) => e.selectedIds)
	};
};
//#endregion
export { e as mergeLanesSelectItemsStatus };
