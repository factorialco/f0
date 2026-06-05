import { jsxs as a, Fragment as s, jsx as e } from "react/jsx-runtime";
import { OneCalendarInternal as c } from "../../../../components/OneCalendar/OneCalendar.js";
import { F0Button as m } from "../../../../components/F0Button/F0Button.js";
function u({
  value: t,
  onChange: o,
  schema: i,
  isCompactMode: d
}) {
  const r = {
    mode: "single",
    view: "day",
    ...i.options
  }, n = () => {
    o(void 0);
  };
  return /* @__PURE__ */ a(s, { children: [
    /* @__PURE__ */ e("div", { className: "space-y-4 overflow-x-hidden p-3", children: /* @__PURE__ */ e(
      c,
      {
        defaultSelected: t || r.defaultSelected,
        onSelect: (l) => o(l ?? void 0),
        view: r.view,
        mode: r.mode,
        compact: d,
        showInput: !0
      }
    ) }),
    !d && /* @__PURE__ */ e("div", { className: "sticky bottom-0 left-0 right-0 z-20 flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]", children: /* @__PURE__ */ e(
      m,
      {
        variant: "ghost",
        label: "Clear",
        onClick: () => n(),
        disabled: !t,
        size: "sm"
      }
    ) })
  ] });
}
export {
  u as DateFilter
};
