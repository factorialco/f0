import { Text, Pressable, View } from "react-native";
import { Counter } from "../Counter";
import { cn } from "../../lib/utils";

interface PresetProps {
  label: string;
  number?: number;
  onClick?: () => void;
  selected?: boolean;
}

export const OnePreset = ({
  label,
  number,
  onClick,
  selected,
}: PresetProps) => {
  return (
    <View className="flex items-start">
      <Pressable
        onPress={onClick}
        className={cn(
          "flex grow-0 flex-row items-center gap-2 rounded border px-2.5 py-1.5 font-medium",
          number !== undefined && number !== null && "pr-1.5",
          selected
            ? "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected"
            : "border-f1-border text-f1-foreground",
        )}
      >
        <Text
          className={cn(
            "whitespace-nowrap",
            selected ? "text-f1-foreground-selected" : "text-f1-foreground",
          )}
        >
          {label}
        </Text>
        {number !== undefined && number !== null && (
          <Counter value={number} type={selected ? "selected" : "default"} />
        )}
      </Pressable>
    </View>
  );
};
