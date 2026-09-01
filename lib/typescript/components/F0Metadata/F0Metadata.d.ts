import React from "react";
import type { F0MetadataProps } from "./F0Metadata.types";
/**
 * F0Metadata - Structured label–value list for displaying resource metadata.
 *
 * Supports 9 value types (text, avatar, status, list, data-list, tag-list,
 * dot-tag, date, progress-bar) covering full parity with the F0 web Metadata
 * component. `undefined` and `boolean` items are filtered out to enable
 * conditional item expressions.
 *
 * @example
 * <F0Metadata
 *   items={[
 *     { label: "Status", value: { type: "status", label: "Active", variant: "positive" } },
 *     { label: "Owner", value: { type: "avatar", avatarType: "person", firstName: "Alice", lastName: "Smith" } },
 *     condition && { label: "Due date", value: { type: "date", formattedDate: "Mar 25, 2026" } },
 *   ]}
 * />
 *
 * @example
 * <F0Metadata
 *   orientation="horizontal"
 *   items={[
 *     { label: "Department", value: { type: "text", content: "Engineering" } },
 *     { label: "Team", value: { type: "tag-list", tags: ["Frontend", "Mobile"] } },
 *   ]}
 * />
 */
export declare const F0Metadata: React.NamedExoticComponent<F0MetadataProps>;
export type { F0MetadataProps, MetadataItem, MetadataItemValue, } from "./F0Metadata.types";
//# sourceMappingURL=F0Metadata.d.ts.map