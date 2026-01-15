import { ReactNode, useEffect, useState } from "react";
import { cn } from "../../../../../lib/utils";
import { Icon } from "../../../../Icon";
import { CheckCircle, LayersFront } from "../../../../../icons/app";
import { Pressable, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import { CopyActionType } from "..";

const COPIED_SHOWN_MS = 750;

export type CopyActionProps = {
  children: ReactNode;
} & CopyActionType;

export const CopyAction = ({ text, children }: CopyActionProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), COPIED_SHOWN_MS);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyHandler = async () => {
    try {
      if (text) {
        await Clipboard.setStringAsync(text);
        setCopied(true);
      }
    } catch (error) {
      void error;
    }
  };
  return (
    <Pressable
      aria-label={copied ? "Copied!" : `Copy ${text}`}
      className={cn(
        "group flex flex-row justify-between gap-1.5 rounded p-1.5",
        "transition-colors duration-300 active:bg-f1-background-secondary-hover",
        copied ? "bg-f1-background-positive" : undefined,
      )}
      onPress={copyHandler}
    >
      <View className="flex flex-row items-center gap-1.5">{children}</View>
      <View className="flex">
        {!copied && (
          <Icon
            icon={LayersFront}
            size="md"
            aria-hidden={true}
            className={cn(
              "col-start-1 col-end-2 row-start-1 row-end-2 text-f1-icon-bold",
            )}
          />
        )}
        {copied && (
          <Icon
            icon={CheckCircle}
            size="md"
            aria-hidden={true}
            className={cn(
              "col-start-1 col-end-2 row-start-1 row-end-2",
              "text-f1-icon-positive",
            )}
          />
        )}
      </View>
    </Pressable>
  );
};
