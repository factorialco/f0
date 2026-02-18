import { BaseTag } from "../BaseTag";
import { cn } from "../../../lib/utils";
import { useTextFormatEnforcer } from "../../../lib/text";
import { Icon, IconType } from "../../Icon";
import { AlertCircle, InfoCircle, Warning } from "../../../icons/app";

type Level = "info" | "warning" | "critical";

type NonEmpty<T extends string> = T extends "" ? never : T;

type Props<T extends string = string> = {
  text: NonEmpty<T>;
  level: Level;
};

const iconMap: Record<Level, IconType> = {
  info: InfoCircle,
  warning: Warning,
  critical: AlertCircle,
};

export const AlertTag = <T extends string>({ text, level }: Props<T>) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });

  return (
    <BaseTag
      classNameText={cn(
        {
          info: "text-f1-foreground-info",
          warning: "text-f1-foreground-warning",
          critical: "text-f1-foreground-critical",
        }[level],
      )}
      classNameContainer={cn(
        "pl-0.5",
        {
          info: "bg-f1-background-info text-f1-foreground-info",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical",
        }[level],
      )}
      left={
        <Icon
          icon={iconMap[level]}
          className={cn(
            {
              info: "text-f1-foreground-info",
              warning: "text-f1-foreground-warning",
              critical: "text-f1-foreground-critical",
            }[level],
          )}
          size="md"
          aria-hidden
        />
      }
      text={text}
    />
  );
};

AlertTag.displayName = "AlertTag";
