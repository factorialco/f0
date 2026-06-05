import { jsx as p } from "react/jsx-runtime";
import { forwardRef as v, useRef as o, useImperativeHandle as F, useEffect as b, useCallback as x } from "react";
import "../../icons/app/Menu.js";
import R from "../../icons/app/Search.js";
import { experimentalComponent as S } from "../../lib/experimental.js";
import { Input as g } from "../../ui/input.js";
const w = v(
  ({
    value: i,
    threshold: a = 0,
    onChange: c,
    onBlur: f,
    onFocus: s,
    size: m = "sm",
    debounceTime: l = 0,
    clearable: d = !1,
    ...e
  }, h) => {
    const n = o(null), r = o(null);
    F(h, () => n.current), b(() => {
      if (!e.autoFocus) {
        r.current && clearInterval(r.current);
        return;
      }
      return r.current = setInterval(() => {
        n.current?.focus();
      }, 50), () => {
        r.current && clearInterval(r.current);
      };
    }, [e.autoFocus]);
    const t = o(void 0), I = x(
      (u) => {
        c && // It should emit the change when the user clears the field
        (u.length >= a || u.length === 0) && (t.current === void 0 && setTimeout(() => {
          t.current !== void 0 && (c(t.current), n.current?.focus()), t.current = void 0;
        }, l), t.current = u);
      },
      [c, a, l]
    );
    return /* @__PURE__ */ p(
      g,
      {
        ref: n,
        type: "search",
        tabIndex: -1,
        icon: R,
        value: i,
        label: e.placeholder ?? "Search",
        hideLabel: !0,
        placeholder: e.placeholder,
        disabled: e.disabled,
        onChange: I,
        role: "searchbox",
        size: m,
        autoFocus: e.autoFocus,
        clearable: d,
        onBlur: f,
        onFocus: s,
        name: e.name
      },
      "search-input"
    );
  }
), H = S(
  "F0SearchInput",
  w
);
export {
  H as F0SearchInput
};
