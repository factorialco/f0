import React from "react";
import type { MetadataItem, F0MetadataOrientation } from "./F0Metadata.types";
interface F0MetadataItemProps {
    item: MetadataItem;
    orientation: F0MetadataOrientation;
}
/**
 * Internal component that renders a single label + value metadata row.
 * Layout adapts to the `orientation` prop from the parent F0Metadata.
 */
export declare function F0MetadataItem({ item, orientation }: F0MetadataItemProps): React.JSX.Element;
export {};
//# sourceMappingURL=F0MetadataItem.d.ts.map