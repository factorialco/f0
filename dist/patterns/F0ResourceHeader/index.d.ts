import { ComponentProps } from 'react';
import { BaseHeader } from '../../experimental/Information/Headers/BaseHeader';
type BaseHeaderProps = ComponentProps<typeof BaseHeader>;
type Props = {} & Pick<BaseHeaderProps, "avatar" | "title" | "description" | "primaryAction" | "secondaryActions" | "otherActions" | "metadata" | "status" | "deactivated" | "metadataRowGap" | "showBottomBorder" | "onClose">;
/**
 * Header for a resource detail page: avatar, title, description, status,
 * metadata and its primary, secondary and overflow actions.
 */
export declare const F0ResourceHeader: ({ avatar, title, description, primaryAction, secondaryActions, otherActions, status, metadata, deactivated, metadataRowGap, showBottomBorder, onClose, }: Props) => import("react").JSX.Element;
export type F0ResourceHeaderProps = Props;
export {};
