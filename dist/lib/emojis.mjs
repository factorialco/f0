import { View, Text } from 'react-native';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { parse } from 'twemoji-parser';
import { SvgUri } from 'react-native-svg';
import { useState } from 'react';
import { jsx } from 'react/jsx-runtime';

// src/lib/emojis.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function EmojiImage({ emoji, size, className }) {
  const emojiEntity = parseEmoji(emoji);
  const [error, setError] = useState(false);
  return emojiEntity && !error ? /* @__PURE__ */ jsx(View, { className: size?.icon, children: /* @__PURE__ */ jsx(
    SvgUri,
    {
      onError: () => setError(true),
      width: "100%",
      height: "100%",
      uri: emojiEntity.url
    }
  ) }) : /* @__PURE__ */ jsx(Text, { className: cn(size?.text, className), children: emoji }, emoji);
}
var parseEmoji = (emoji) => {
  const [entity] = parse(emoji, {
    buildUrl: (codePoints) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`
  });
  return entity || null;
};

export { EmojiImage };
//# sourceMappingURL=emojis.mjs.map
//# sourceMappingURL=emojis.mjs.map