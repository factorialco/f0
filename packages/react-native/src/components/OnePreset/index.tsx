import { Text, Pressable, View } from "react-native";
import { Counter } from "../Counter";
import { cn } from "../../lib/utils";
import { tv } from "tailwind-variants";

const presetContainerVariants = tv({
  base: "flex grow-0 flex-row items-center gap-2 rounded border border-f1-border px-2.5 py-1.5 font-medium",
  variants: {
    selected: {
      true: "border-f1-border-selected bg-f1-background-selected-secondary",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const presetTextVariants = tv({
  base: "whitespace-nowrap",
  variants: {
    selected: {
      true: "text-f1-foreground-selected",
      false: "text-f1-foreground",
    },
  },
  defaultVariants: {
    selected: false,
  },
});

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
          presetContainerVariants({ selected: !!selected }),
          number !== undefined && number !== null && "pr-1.5",
        )}
      >
        <Text className={presetTextVariants({ selected: !!selected })}>
          {label}
        </Text>
        {number !== undefined && number !== null && (
          <Counter value={number} type={selected ? "selected" : "default"} />
        )}
      </Pressable>
    </View>
  );
};
