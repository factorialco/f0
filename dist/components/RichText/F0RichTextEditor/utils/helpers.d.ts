import { Editor } from '@tiptap/react';
import { RefObject } from 'react';
import { heightType, resultType } from './types';
declare const getHeightThreshold: (height: heightType) => number;
declare const getHeight: (height: heightType) => string;
interface SetupContainerObserversProps {
    containerRef: RefObject<HTMLDivElement>;
    onHeightChange: (hasFullHeight: boolean) => void;
    onScrollChange: (isAtBottom: boolean) => void;
    heightThreshold: number;
}
declare const setupContainerObservers: ({ containerRef, onHeightChange, onScrollChange, heightThreshold, }: SetupContainerObserversProps) => () => void;
interface HandleEditorUpdateProps {
    editor: Editor;
    onChange: (result: resultType) => void;
}
declare const handleEditorUpdate: ({ editor, onChange }: HandleEditorUpdateProps) => void;
export { getHeight, getHeightThreshold, handleEditorUpdate, setupContainerObservers, };
