import { JSONContent, Node } from '@tiptap/core';
import { NodeViewProps } from '@tiptap/react';
import { FC } from 'react';
import { IconType } from '../../../../F0Icon';
export type AIButton = {
    type: string;
    emoji: string;
    label: string;
    icon: IconType;
    editable?: boolean;
};
export interface AIBlockConfig {
    buttons?: AIButton[];
    onClick: (type: string) => Promise<JSONContent | null>;
    title: string;
}
interface AIBlockOptions {
    currentConfig: AIBlockConfig | null;
}
interface AIBlockData {
    content?: JSONContent | null;
    selectedAction?: string;
    selectedTitle?: string;
    selectedEmoji?: string;
    isEditable?: boolean;
    shouldExecute?: boolean;
}
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        aiBlock: {
            insertAIBlock: (data: AIBlockData, config: AIBlockConfig) => ReturnType;
            executeAIAction: (actionType: string, config: AIBlockConfig) => ReturnType;
        };
    }
}
export declare const AIBlockView: FC<NodeViewProps>;
export declare const AIBlock: Node<AIBlockOptions, any>;
export declare const AIBlockExtension: Node<AIBlockOptions, any>;
export {};
