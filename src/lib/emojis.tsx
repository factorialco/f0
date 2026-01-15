import { Text, View } from "react-native";
import { cn } from "./utils";
import { parse } from "twemoji-parser";
import { SvgUri } from "react-native-svg";
import { useState } from "react";

interface ParseObject {
  url: string;
  indices: [number, number];
  text: string;
}

export interface EmojiImageProps {
  size?: { icon: string; text: string };
  className?: string;
  emoji: string;
}

export function EmojiImage({ emoji, size, className }: EmojiImageProps) {
  const emojiEntity = parseEmoji(emoji);

  const [error, setError] = useState(false);

  return emojiEntity && !error ? (
    <View className={size?.icon}>
      <SvgUri
        onError={() => setError(true)}
        width="100%"
        height="100%"
        uri={emojiEntity.url}
      />
    </View>
  ) : (
    <Text className={cn(size?.text, className)} key={emoji}>
      {emoji}
    </Text>
  );
}

const parseEmoji = (emoji: string): ParseObject | null => {
  const [entity] = parse(emoji, {
    buildUrl: (codePoints: string) =>
      `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${codePoints}.svg`,
  });

  return entity || null;
};
