import { jsx as e } from "react/jsx-runtime";
import { OneFilterPicker as m } from "../../../OneFilterPicker/OneFilterPicker.js";
function l({
  filters: r,
  value: n,
  presets: i,
  presetsLoading: o,
  onChange: t
}) {
  return !r && !i ? null : /* @__PURE__ */ e(
    m,
    {
      filters: r,
      value: n,
      presets: i,
      presetsLoading: o,
      onChange: t
    }
  );
}
export {
  l as FilterBar
};
