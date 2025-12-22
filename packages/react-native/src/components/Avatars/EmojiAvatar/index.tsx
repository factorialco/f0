import { View } from "react-native";
import { EmojiImage } from "../../../lib/emojis";
import { cn } from "../../../lib/utils";

type Props = {
  emoji: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "w-6 h-6 rounded-sm",
  md: "w-9 h-9 rounded-md",
  lg: "w-10 h-10 rounded-lg",
};

const emojiSize = {
  sm: { icon: "w-4 h-4", text: "text-xs" },
  md: { icon: "w-5 h-5", text: "text-sm" },
  lg: { icon: "w-6 h-6", text: "text-md" },
} as const;

export const EmojiAvatar = ({ emoji, size = "md", className }: Props) => {
  return (
    <View
      className={cn(
        className,
        sizes[size],
        "dark:bg-f1-background-inverse-secondary flex aspect-square items-center justify-center border border-solid border-f1-border-secondary bg-f1-background",
      )}
    >
      <EmojiImage emoji={emoji} size={emojiSize[size]} />
    </View>
  );
};

EmojiAvatar.displayName = "EmojiAvatar";
