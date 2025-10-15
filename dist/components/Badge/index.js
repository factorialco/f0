'use strict';

var cva = require('cva');
var react = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var nativewind = require('nativewind');
var jsxRuntime = require('react/jsx-runtime');

// src/components/Badge/index.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var iconVariants = cva.cva({
  base: "shrink-0",
  variants: {
    size: {
      xl: "w-8 h-8 stroke-xl",
      lg: "w-6 h-6 stroke-lg",
      md: "w-5 h-5 stroke-md",
      sm: "w-4 h-4 stroke-sm",
      xs: "w-3 h-3 stroke-xs"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var interopAppliedIcons = /* @__PURE__ */ new WeakSet();
function applyIconInterop(icon) {
  if (!interopAppliedIcons.has(icon)) {
    nativewind.cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true
        }
      }
    });
    interopAppliedIcons.add(icon);
  }
  return icon;
}
var Icon = react.forwardRef(function Icon2({ size, icon, className, testID, ...props }, ref) {
  if (!icon) return null;
  const Component = applyIconInterop(icon);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      ref,
      ...props,
      className: cn(iconVariants({ size }), className),
      testID
    }
  );
});
var badgeVariants = cva.cva({
  base: "flex shrink-0 items-center justify-center rounded-full",
  variants: {
    type: {
      neutral: "bg-transparent text-f1-icon",
      highlight: "text-f1-special-highlight",
      positive: "bg-f1-background-positive-bold text-f1-foreground-inverse",
      critical: "bg-f1-icon-critical text-f1-foreground-inverse",
      warning: "bg-f1-background-warning-bold text-f1-foreground-inverse"
    },
    size: {
      xs: "h-2.5 w-2.5",
      sm: "h-3 w-3",
      md: "h-5 w-5",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    type: "neutral",
    size: "md"
  }
});
var iconSizes = {
  xs: "xs",
  sm: "xs",
  md: "sm",
  lg: "md"
};
var Badge = ({ type, size = "md", icon }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Icon,
    {
      className: badgeVariants({ type, size }),
      icon,
      size: iconSizes[size]
    }
  );
};

exports.Badge = Badge;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map