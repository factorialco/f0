import { jsx as w } from "react/jsx-runtime";
import { useState as c, useMemo as e } from "react";
import d from "../../icons/app/EyeInvisible.js";
import f from "../../icons/app/EyeVisible.js";
import l from "../../icons/app/LockLocked.js";
import "../../icons/app/Menu.js";
import { Input as g } from "../../ui/input.js";
import { useI18n as h } from "../../lib/providers/i18n/i18n-provider.js";
const R = ({
  type: o,
  ...n
}) => {
  const [r, a] = c(!1), i = e(() => o === "password" ? r ? "text" : "password" : o, [r, o]), m = e(() => o === "password" ? l : n.icon, [o, n.icon]), s = h(), u = e(() => o !== "password" ? n.buttonToggle : {
    label: [s.inputs.password.show, s.inputs.password.hide],
    icon: [d, f],
    selected: r,
    onChange: a
  }, [r, o, n.buttonToggle]);
  return /* @__PURE__ */ w(
    g,
    {
      ...n,
      type: i,
      onChange: (t) => n.onChange?.(t),
      onKeyDown: (t) => {
        t.key === "Enter" && n.onPressEnter?.();
      },
      icon: m,
      buttonToggle: u
    }
  );
};
export {
  R as InputInternal
};
