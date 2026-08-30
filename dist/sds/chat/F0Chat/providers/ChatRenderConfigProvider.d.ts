import { ReactNode } from 'react';
type ChatRenderConfig = {
    reducedMotion: boolean;
};
export declare const ChatRenderConfigProvider: ({ children, reducedMotion, }: {
    children: ReactNode;
    reducedMotion: boolean;
}) => ReactNode;
export declare const useChatRenderConfig: () => ChatRenderConfig;
export {};
