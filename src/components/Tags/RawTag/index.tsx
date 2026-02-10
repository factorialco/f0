import { BaseTag } from "../BaseTag";
import { useTextFormatEnforcer } from "../../../lib/text";
import { Icon, IconType } from "../../Icon";
import { cn } from "../../../lib/utils";

export type RawTagProps = {
  text?: string;
  additionalAccesibleText?: string;
  icon?: IconType;
  noBorder?: boolean;
  className?: string;
};

export const RawTag = ({
  text,
  additionalAccesibleText,
  icon,
  noBorder,
  className,
}: RawTagProps) => {
  useTextFormatEnforcer(text, { disallowEmpty: true });

  return (
    <BaseTag
      classNameContainer={cn(
        !noBorder && "border border-solid border-f1-border-secondary",
        className,
      )}
      classNameText="text-f1-foreground"
      left={
        icon ? (
          <Icon icon={icon} size="sm" className="text-f1-icon" aria-hidden />
        ) : null
      }
      text={text}
      additionalAccesibleText={additionalAccesibleText}
    />
  );
};

RawTag.displayName = "RawTag";
