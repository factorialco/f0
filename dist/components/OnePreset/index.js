'use strict';

var reactNative = require('react-native');
var cva = require('cva');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

// src/components/OnePreset/index.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var counterContainerVariants = cva.cva({
  base: "flex items-center justify-center rounded-xs grow-0 px-0.5",
  variants: {
    size: {
      md: "min-w-5 h-5",
      sm: "min-w-4 h-4"
    },
    type: {
      default: "bg-f1-background-secondary border border-f1-border",
      selected: "bg-f1-background-selected-bold outline-f1-border-selected",
      bold: "bg-f1-background-accent-bold"
    }
  },
  defaultVariants: {
    size: "md",
    type: "default"
  }
});
var counterTextVariants = cva.cva({
  base: "text-center text-sm font-medium tabular-nums whitespace-nowrap",
  variants: {
    size: {
      md: "",
      sm: "leading-none py-0.5"
    },
    type: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-inverse",
      bold: "text-f1-foreground-inverse"
    }
  },
  defaultVariants: {
    type: "default"
  }
});
function Counter({ size, type, value, maxValue }) {
  const displayValue = maxValue && value > maxValue ? `+${maxValue}` : value;
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: cn(counterContainerVariants({ size, type })), children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: cn(counterTextVariants({ type, size })), children: displayValue }) }) });
}
var OnePreset = ({
  label,
  number,
  onClick,
  selected
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsxs(
    reactNative.Pressable,
    {
      onPress: onClick,
      className: cn(
        "flex grow-0 flex-row items-center gap-2 rounded border border-f1-border px-2.5 py-1.5 font-medium text-f1-foreground",
        number !== void 0 && number !== null && "pr-1.5",
        selected && "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "whitespace-nowrap text-f1-foreground", children: label }),
        number !== void 0 && number !== null && /* @__PURE__ */ jsxRuntime.jsx(Counter, { value: number, type: selected ? "selected" : "default" })
      ]
    }
  ) });
};

exports.OnePreset = OnePreset;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map