import { F0DialogHeaderProps } from "../internal/internal-types";
import { F0DialogContent, F0DialogContentProps } from "./F0DialogContent";
import { F0DialogFooter, F0DialogFooterProps } from "./F0DialogFooter";
import { F0DialogHeader } from "./F0DialogHeader";

type DialogLayoutProps = {
  header: F0DialogHeaderProps;
  content: F0DialogContentProps;
  footer?: F0DialogFooterProps;
};

/**
 * Creates the dialog compoisition (header, content, footer) to reuse it in the dialog and bottom sheet versions.
 */

export const DialogLayout = ({ header, content, footer }: DialogLayoutProps) => {
  return (
    <>
      <F0DialogHeader {...header} />
      <F0DialogContent {...content}></F0DialogContent>
      <F0DialogFooter {...footer} />
    </>
  );
};
