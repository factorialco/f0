import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { cn } from "../../../lib/utils";

type Props = {
  additionalAccesibleText?: string;
  onClick?: () => void;
  classNameContainer?: string;
  classNameText?: string;
} & (
  | {
      left: ReactNode;
      text?: string;
      right?: ReactNode;
    }
  | {
      left?: ReactNode;
      text: string;
      right?: ReactNode;
    }
);

export const BaseTag = ({
  left,
  text,
  right,
  additionalAccesibleText,
  onClick,
  classNameContainer,
  classNameText,
}: Props) => (
  <View className="flex items-start">
    <Pressable
      className={cn(
        "flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pr-2",
        onClick && "cursor-pointer hover:bg-f1-background-hover",
        !text && "aspect-square w-6 items-center justify-center p-1",
        !left ? "pl-2" : "pl-1",
        classNameContainer,
      )}
      onPress={onClick}
    >
      {left}
      {!!text && (
        <Text
          className={cn(
            "line-clamp-1 text-base font-medium text-f1-foreground",
            classNameText,
          )}
        >
          {text}
        </Text>
      )}
      {additionalAccesibleText && (
        <Text className="sr-only text-base font-medium text-f1-foreground">
          {additionalAccesibleText}
        </Text>
      )}
      {right}
    </Pressable>
  </View>
);

BaseTag.displayName = "BaseTag";
