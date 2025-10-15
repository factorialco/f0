'use strict';

var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');

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

exports.BaseTag = BaseTag;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map