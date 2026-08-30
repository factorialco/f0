import { Editor } from '@tiptap/react';
import { UseEnhanceReturn } from '../Enhance/useEnhance';
interface EditorBubbleMenuProps {
    editor: Editor;
    disableButtons: boolean;
    isToolbarOpen: boolean;
    isFullscreen: boolean;
    editorId: string;
    plainHtmlMode?: boolean;
    /** Enhance UI state from useEnhance; omit to disable the enhance entry point */
    enhance?: UseEnhanceReturn;
}
export declare const EditorBubbleMenu: import('react').MemoExoticComponent<({ editorId, editor, disableButtons, isToolbarOpen, isFullscreen, plainHtmlMode, enhance, }: EditorBubbleMenuProps) => import("react").JSX.Element>;
export {};
