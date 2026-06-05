const a = (l) => {
  const t = Array.from(l.values());
  return {
    allSelected: t.every((e) => e.allSelected),
    itemsStatus: t.flatMap((e) => e.itemsStatus),
    groupsStatus: t.reduce(
      (e, s) => ({
        ...e,
        ...s.groupsStatus
      }),
      {}
    ),
    filters: t.reduce(
      (e, s) => ({
        ...e,
        ...s.filters
      }),
      {}
    ),
    selectedCount: t.reduce(
      (e, s) => e + s.selectedCount,
      0
    ),
    selectedIds: t.flatMap((e) => e.selectedIds)
  };
};
export {
  a as mergeLanesSelectItemsStatus
};
