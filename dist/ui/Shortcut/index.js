import { jsxs as d, jsx as e } from "react/jsx-runtime";
import { cva as p } from "../../node_modules/.pnpm/cva@1.0.0-beta.3_typescript@5.9.3/node_modules/cva/dist/index.js";
import { F0Icon as u } from "../../components/F0Icon/index.js";
import "../../icons/app/Menu.js";
import x from "../../icons/app/Windows.js";
import { withDataTestId as y } from "../../lib/data-testid/index.js";
import { experimentalComponent as b } from "../../lib/experimental.js";
import { useUserPlatform as h } from "../../lib/providers/user-platafform/UserPlatformProvider.js";
import { cn as w } from "../../lib/utils.js";
import { useI18n as v } from "../../lib/providers/i18n/i18n-provider.js";
const g = p({
  base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",
  variants: {
    variant: {
      default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
      inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), K = /* @__PURE__ */ new Set([
  "cmd",
  "option",
  "ctrl"
]), D = {
  mac: {
    cmd: "⌘",
    option: "⌥",
    ctrl: "⌃"
  },
  windows: {
    ctrl: "Ctrl",
    cmd: x,
    option: "Alt"
  },
  linux: {
    ctrl: "^",
    cmd: "Meta",
    option: "Alt"
  }
}, I = (t) => K.has(t);
function S({ keys: t, variant: c }) {
  const r = h(), m = v();
  if (r === "unknown" || r === "mobile")
    return null;
  const l = D[r];
  return /* @__PURE__ */ d("div", { className: "flex flex-wrap items-center gap-0.5", children: [
    /* @__PURE__ */ e("span", { className: "sr-only", children: m.shortcut }),
    t.map((n, f) => {
      const s = n.toLowerCase(), a = I(s), o = a ? l[s] : n, i = typeof o != "string";
      return /* @__PURE__ */ e(
        "kbd",
        {
          className: w(
            g({ variant: c }),
            a ? "" : "uppercase",
            i ? "w-5 px-0.5" : "min-w-5 px-1"
          ),
          children: i ? /* @__PURE__ */ e(u, { icon: o, size: "sm" }) : o
        },
        f
      );
    })
  ] });
}
const L = y(b("Shortcut", S));
export {
  L as Shortcut
};
