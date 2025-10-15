'use strict';

var f0Core = require('@factorialco/f0-core');
var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

// src/components/Tags/DotTag/index.tsx
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
var dotTagColors = Object.keys(f0Core.baseColors);
var DotTag = ({ text, ...props }) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });
  const backgroundColor = "color" in props && props.color ? `hsl(${f0Core.baseColors[props.color][50]})` : "customColor" in props && props.customColor;
  if (!backgroundColor) return null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    BaseTag,
    {
      classNameContainer: "border border-solid border-f1-border-secondary",
      left: /* @__PURE__ */ jsxRuntime.jsx(
        reactNative.View,
        {
          className: "m-1 aspect-square w-2 rounded-full",
          style: {
            backgroundColor
          },
          "aria-hidden": true
        }
      ),
      text
    }
  );
};
DotTag.displayName = "DotTag";

exports.DotTag = DotTag;
exports.dotTagColors = dotTagColors;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map