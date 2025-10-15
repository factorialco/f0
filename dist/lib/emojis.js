'use strict';

var reactNative = require('react-native');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var twemojiParser = require('twemoji-parser');
var reactNativeSvg = require('react-native-svg');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/lib/emojis.tsx
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

exports.EmojiImage = EmojiImage;
//# sourceMappingURL=emojis.js.map
//# sourceMappingURL=emojis.js.map