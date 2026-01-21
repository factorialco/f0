import { FC } from "react";
import { DialogInternal } from "./internal/F0DialogInternal";
import { DialogInternalProps } from "./internal/internal-types";

export const F0Dialog: FC<
  Omit<DialogInternalProps, "disableClose" | "variant"> & {
    variant?: never;
  }
> = (props) => {
  const internalProps: DialogInternalProps = {
    ...props,
    // Private props
    variant: "default",
    disableClose: false,
    // This props only applies to the default variant
    tabs: props.tabs ?? [],
    activeTabId: props.activeTabId,
    setActiveTabId: props.setActiveTabId,
    // -------------
  };
  return <DialogInternal {...internalProps} />;
};

F0Dialog.displayName = "F0Dialog";
