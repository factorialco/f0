import { View, Pressable, Text } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/components/Tags/BaseTag/index.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var BaseTag = ({
  left,
  text,
  right,
  additionalAccesibleText,
  onClick,
  classNameContainer,
  classNameText
}) => /* @__PURE__ */ jsx(View, { className: "flex items-start", children: /* @__PURE__ */ jsxs(
  Pressable,
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
      !!text && /* @__PURE__ */ jsx(
        Text,
        {
          className: cn(
            "line-clamp-1 text-base font-medium text-f1-foreground",
            classNameText
          ),
          children: text
        }
      ),
      additionalAccesibleText && /* @__PURE__ */ jsx(Text, { className: "sr-only text-base font-medium text-f1-foreground", children: additionalAccesibleText }),
      right
    ]
  }
) });
BaseTag.displayName = "BaseTag";

export { BaseTag };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map