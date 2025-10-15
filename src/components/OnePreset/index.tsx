import { Text, Pressable, View } from "react-native";
import { Counter } from "../Counter";
import { cn } from "../../lib/utils";

export interface PresetProps {
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
          "flex grow-0 flex-row items-center gap-2 rounded border border-f1-border px-2.5 py-1.5 font-medium text-f1-foreground",
          number !== undefined && number !== null && "pr-1.5",
          selected &&
            "border-f1-border-selected bg-f1-background-selected-secondary text-f1-foreground-selected",
        )}
      >
        <Text className="whitespace-nowrap text-f1-foreground">{label}</Text>
        {number !== undefined && number !== null && (
          <Counter value={number} type={selected ? "selected" : "default"} />
        )}
      </Pressable>
    </View>
  );
};
