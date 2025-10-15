'use strict';

var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var cva = require('cva');
var nativewind = require('nativewind');

// src/components/Tags/BaseTag/index.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var BaseTag = ({
  left,
  text,
  right,
  additionalAccesibleText,
  onClick,
  classNameContainer,
  classNameText
}) => /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex items-start", children: /* @__PURE__ */ jsxRuntime.jsxs(
  reactNative.Pressable,
  {
    className: cn(
      "flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2",
      onClick && "cursor-pointer hover:bg-f1-background-hover",
      !text && "aspect-square w-6 items-center justify-center p-1",
      !left ? "pl-2" : "pl-1",
      classNameContainer
    ),
    onPress: onClick,
    children: [
      left,
      !!text && /* @__PURE__ */ jsxRuntime.jsx(
        reactNative.Text,
        {
          className: cn(
            "line-clamp-1 text-base font-medium text-f1-foreground",
            classNameText
          ),
          children: text
        }
      ),
      additionalAccesibleText && /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "sr-only text-base font-medium text-f1-foreground", children: additionalAccesibleText }),
      right
    ]
  }
) });
BaseTag.displayName = "BaseTag";
var textFormatEnforcer = (text, rules) => {
  if (rules.disallowEmpty && text.length === 0) {
    throw Error("You need to provide some text that is not empty");
  }
  if (rules.maxLength !== void 0 && text.length > rules.maxLength) {
    throw Error(
      `"${text}" should have no more than ${rules.maxLength} characters`
    );
  }
  if (rules.minLength !== void 0 && text.length < rules.minLength) {
    throw Error(`"${text}" should have at least ${rules.minLength} characters`);
  }
};
var useTextFormatEnforcer = (text, rules) => {
  react.useEffect(() => {
    if (text !== void 0 && rules) {
      textFormatEnforcer(text, rules);
    }
  }, [text, rules]);
};
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
var RawTag = ({
  text,
  additionalAccesibleText,
  icon,
  noBorder,
  className
}) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseTag,
    {
      classNameContainer: cn(
        !noBorder && "border border-solid border-f1-border-secondary",
        className
      ),
      classNameText: "text-f1-foreground",
      left: icon ? /* @__PURE__ */ jsxRuntime.jsx(Icon, { icon, size: "sm", className: "text-f1-icon", "aria-hidden": true }) : null,
      text,
      additionalAccesibleText
    }
  );
};
RawTag.displayName = "RawTag";

exports.RawTag = RawTag;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map