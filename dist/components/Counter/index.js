'use strict';

var cva = require('cva');
var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

// src/components/Counter/index.tsx
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

exports.Counter = Counter;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map