import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { OneEmptyState as n } from "../../../components/OneEmptyState/OneEmptyState.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/experimental/Widgets/WidgetEmptyState/index.tsx
function i({ title: e, description: t, emoji: i, actions: a }) {
	if ((a?.length ?? 0) > 2) throw Error("You can only provide up to two actions for the WidgetEmptyState");
	return /* @__PURE__ */ r(n, {
		title: e,
		description: t,
		...i ? { emoji: i } : { variant: "warning" },
		actions: a
	});
}
var a = e(t("WidgetEmptyState", i));
//#endregion
export { a as WidgetEmptyState };
