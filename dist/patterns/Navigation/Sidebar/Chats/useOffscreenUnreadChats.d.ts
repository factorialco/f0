import { RefObject } from 'react';
import { SidebarChatGroup } from './types';
type Direction = "above" | "below";
type DirectionalUnread = {
    count: number;
    target: HTMLElement | null;
};
type PortalRoots = {
    above: HTMLElement | null;
    below: HTMLElement | null;
};
export declare const useOffscreenUnreadChats: ({ rootRef, groups, shouldReduceMotion, }: {
    rootRef: RefObject<HTMLDivElement | null>;
    groups: SidebarChatGroup[];
    shouldReduceMotion: boolean;
}) => {
    portalRoots: PortalRoots;
    above: DirectionalUnread;
    below: DirectionalUnread;
    jump: (direction: Direction, origin: HTMLElement) => void;
};
export {};
