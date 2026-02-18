import { ComponentProps, ReactNode } from "react";
import { AlertTag } from "./AlertTab";

type AlertTagProps = ComponentProps<typeof AlertTag>;

// Base interface for optional tooltip description
interface WithTooltipDescription {
  /**
   * Optional description to show in the tooltip
   */
  description?: string;
}

// Base type for all tag variants
type BaseTag<T extends { type: string }> = T & WithTooltipDescription;

export type TagVariant = BaseTag<{ type: "alert" } & AlertTagProps>;

const tagComponent = (tag: TagVariant): ReactNode | undefined => {
  const { type } = tag;
  if (type === "alert") return <AlertTag {...tag} />;

  return undefined;
};

export const Tag = ({ tag }: { tag: TagVariant }): ReactNode => {
  const renderTag = tagComponent(tag);

  if (!renderTag) return "Invalid tag type";

  return renderTag;
};
