import { jsx as i } from "react/jsx-runtime";
import { withDataTestId as m } from "../../../lib/data-testid/index.js";
import { experimentalComponent as n } from "../../../lib/experimental.js";
import { OneEmptyState as p } from "../../../components/OneEmptyState/OneEmptyState.js";
function a({
  title: r,
  description: e,
  emoji: t,
  actions: o
}) {
  if ((o?.length ?? 0) > 2)
    throw Error(
      "You can only provide up to two actions for the WidgetEmptyState"
    );
  return /* @__PURE__ */ i(
    p,
    {
      title: r,
      description: e,
      ...t ? { emoji: t } : { variant: "warning" },
      actions: o
    }
  );
}
const E = m(
  n("WidgetEmptyState", a)
);
export {
  E as WidgetEmptyState
};
