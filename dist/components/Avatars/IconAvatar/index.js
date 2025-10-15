'use strict';

var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var cva = require('cva');
var react = require('react');
var nativewind = require('nativewind');
var jsxRuntime = require('react/jsx-runtime');

// src/components/Avatars/IconAvatar/index.tsx
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
var sizes = {
  sm: "h-6 w-6 rounded-sm",
  md: "h-9 w-9 rounded-md",
  lg: "h-10 w-10 rounded-lg"
};
var IconAvatar = ({ icon, size = "md", className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      className: cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary",
        sizes[size],
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon, size, className: "text-f1-foreground-secondary" })
    }
  );
};
IconAvatar.displayName = "IconAvatar";

exports.IconAvatar = IconAvatar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map