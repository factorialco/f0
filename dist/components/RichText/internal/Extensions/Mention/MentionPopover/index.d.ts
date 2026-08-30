import { Editor } from '@tiptap/react';
import { default as React } from 'react';
interface MentionPopoverProps {
    content: HTMLElement;
    anchorRect: DOMRect;
    editor: Editor;
}
export declare const MentionPopover: ({ content, anchorRect, editor, }: MentionPopoverProps) => React.JSX.Element;
export {};
