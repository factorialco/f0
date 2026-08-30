//#region src/experimental/Navigation/Header/Breadcrumbs/getBreadcrumbKey.ts
var e = (e) => e && "type" in e && e.type === "collection-select" ? `collection-select-${e.collectionId}` : e?.id;
//#endregion
export { e as getBreadcrumbKey };
