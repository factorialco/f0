//#region src/lib/F0GridStack/components/widget-utils.ts
function e(e) {
	let { content: t, ...n } = e;
	return t === void 0 ? n : {
		...n,
		_originalContent: null,
		content: () => document.createElement("div")
	};
}
function t(n) {
	let r = e(n);
	return n.subGridOpts?.children && (r.subGridOpts = {
		...n.subGridOpts,
		children: n.subGridOpts.children.map((e) => t(e))
	}), r;
}
//#endregion
export { e as convertWidgetForGridStack, t as convertWidgetRecursive };
