'use strict';

var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var twemojiParser = require('twemoji-parser');
var reactNativeSvg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/components/Avatars/EmojiAvatar/index.tsx
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function EmojiImage({ emoji, size, className }) {
  const emojiEntity = parseEmoji(emoji);
  const [error, setError] = react.useState(false);
  return emojiEntity && !error ? /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: size?.icon, children: /* @__PURE__ */ jsxRuntime.jsx(
    reactNativeSvg.SvgUri,
    {
      onError: () => setError(true),
      width: "100%",
      height: "100%",
      uri: emojiEntity.url
    }
  ) }) : /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: cn(size?.text, className), children: emoji }, emoji);
}
var parseEmoji = (emoji) => {
  const [entity] = twemojiParser.parse(emoji, {
    buildUrl: (codePoints) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`
  });
  return entity || null;
};
var sizes = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded-md",
  lg: "w-10 h-10 rounded-lg"
};
var emojiSize = {
  sm: { icon: "w-4 h-4", text: "text-xs" },
  md: { icon: "w-5 h-5", text: "text-sm" },
  lg: { icon: "w-6 h-6", text: "text-md" }
};
var EmojiAvatar = ({ emoji, size = "md", className }) => {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactNative.View,
    {
      className: cn(
        className,
        sizes[size],
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(EmojiImage, { emoji, size: emojiSize[size] })
    }
  );
};
EmojiAvatar.displayName = "EmojiAvatar";

exports.EmojiAvatar = EmojiAvatar;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map