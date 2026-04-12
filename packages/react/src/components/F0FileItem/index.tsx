import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

import type { FileDef } from "@/components/avatars/F0AvatarFile/types";

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile";
import { F0Button } from "@/components/F0Button";
import { IconType } from "@/components/F0Icon";
import {
  DropdownInternal,
  DropdownItem,
} from "@/experimental/Navigation/Dropdown/internal";
import { CrossedCircle, Ellipsis } from "@/icons/app";
import { withDataTestId } from "@/lib/data-testid";
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis";
import { cn } from "@/lib/utils";

type FileAction = {
  icon?: IconType;
  label: string;
  onClick: () => void;
  critical?: boolean;
};

const fileItemVariants = cva({
  base: "flex w-fit flex-row items-center overflow-hidden bg-f1-background-tertiary",
  variants: {
    size: {
      md: "max-w-40 gap-2 rounded p-0.5",
      lg: "max-w-56 gap-2.5 rounded p-1",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type FileItemSize = NonNullable<VariantProps<typeof fileItemVariants>["size"]>;

const avatarSizeMap: Record<FileItemSize, "sm" | "md"> = {
  md: "sm",
  lg: "md",
};

const iconSizeMap: Record<FileItemSize, "sm" | "md"> = {
  md: "sm",
  lg: "md",
};

interface FileItemProps extends React.HTMLAttributes<HTMLDivElement> {
  file: File | FileDef;
  actions?: FileAction[];
  disabled?: boolean;
  size?: FileItemSize;
}

const _F0FileItem = forwardRef<HTMLDivElement, FileItemProps>(
  (
    { file, actions = [], disabled = false, size = "md", className, ...props },
    ref,
  ) => {
    const hasActions = actions.length > 0;
    const singleAction = actions.length === 1 ? actions[0] : null;

    const dropdownItems: DropdownItem[] = actions.map((action) => ({
      label: action.label,
      icon: action.icon,
      critical: action.critical,
      onClick: disabled ? undefined : action.onClick,
    }));

    return (
      <div
        ref={ref}
        className={cn(fileItemVariants({ size }), className)}
        {...props}
      >
        <F0AvatarFile file={file} size={avatarSizeMap[size]} />
        <OneEllipsis
          className={cn(
            "text-neutral-1000 grow text-sm font-medium",
            !hasActions && "pr-3",
          )}
        >
          {file.name}
        </OneEllipsis>
        {hasActions &&
          (singleAction ? (
            <F0Button
              label={singleAction.label}
              size={iconSizeMap[size]}
              icon={singleAction.icon ?? CrossedCircle}
              disabled={disabled}
              onClick={disabled ? undefined : singleAction.onClick}
              hideLabel
              variant="ghost"
            />
          ) : (
            <DropdownInternal
              items={dropdownItems}
              icon={Ellipsis}
              size={iconSizeMap[size]}
            />
          ))}
      </div>
    );
  },
);
_F0FileItem.displayName = "F0FileItem";

export const F0FileItem = withDataTestId(_F0FileItem);
export type { FileAction, FileItemSize };
