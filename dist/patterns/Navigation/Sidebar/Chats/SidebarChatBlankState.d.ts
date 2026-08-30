import { ReactNode } from 'react';
import { IconType } from '../../../../components/F0Icon';
import { ActionButtonVariant } from '../../../../ui/Action/types';
/** A CTA shown under the blank-state copy — e.g. "Start a conversation". */
export type SidebarChatBlankStateAction = {
    label: string;
    onClick?: () => void;
    icon?: IconType;
    /** Button variant — supports the gradient "ai" variant. @default "outline" */
    variant?: ActionButtonVariant;
};
export type SidebarChatBlankStateProps = {
    title: string;
    description?: string;
    /** Optional CTA(s) shown under the copy — e.g. "Start a conversation". */
    actions?: SidebarChatBlankStateAction[];
};
/**
 * Compact blank state for a sidebar conversation list. Shared by the people
 * chat (`SidebarChatList`) and the AI history list so the two read identically.
 * Deliberately lighter than `OneEmptyState` — no emoji/avatar and tight
 * paddings — because it lives in a narrow sidebar column. The host (factorial)
 * supplies the copy + actions.
 */
declare function _SidebarChatBlankState({ title, description, actions, ...rest }: SidebarChatBlankStateProps): ReactNode;
export declare const SidebarChatBlankState: import('../../../../lib/data-testid').WithDataTestIdReturnType<typeof _SidebarChatBlankState>;
export {};
