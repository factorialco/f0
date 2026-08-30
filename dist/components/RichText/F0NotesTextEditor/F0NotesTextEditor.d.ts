import { JSONContent } from '@tiptap/react';
import { ImageUploadConfig } from '../internal/Extensions/Image';
import { F0AlertProps } from '../../F0Alert';
import { HeaderSecondaryAction } from '../../../experimental/Information/Headers/BaseHeader';
import { MetadataItem } from '../../../experimental/Information/Headers/Metadata';
import { PrimaryActionButton, PrimaryDropdownAction } from '../../../experimental/Information/utils';
import { DropdownItem } from '../../../experimental/Navigation/Dropdown';
import { enhanceConfig } from '../internal/Enhance/types';
import { AIBlockConfig } from '../internal/Extensions/AIBlock';
import { Message, User } from '../internal/Extensions/Transcript';
import { HeaderStatusProps } from './components/Header';
import { NotesTextEditorPageDocumentPatch, NotesTextEditorSnapshot } from './types';
export interface F0NotesTextEditorProps {
    onChange: (value: {
        json: JSONContent | null;
        html: string | null;
    }) => void;
    placeholder: string;
    initialEditorState?: {
        content?: JSONContent | string;
        title?: string;
    };
    readonly?: boolean;
    aiBlockConfig?: AIBlockConfig;
    imageUploadConfig?: ImageUploadConfig;
    enhanceConfig?: enhanceConfig;
    onTitleChange?: (title: string) => void;
    titlePlaceholder?: string;
    primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>;
    secondaryActions?: HeaderSecondaryAction[];
    otherActions?: DropdownItem[];
    metadata?: MetadataItem[];
    status?: HeaderStatusProps;
    alert?: F0AlertProps;
}
export interface F0NotesTextEditorSkeletonProps {
    withHeader?: boolean;
    withTitle?: boolean;
    withToolbar?: boolean;
}
export type F0NotesTextEditorHandle = {
    clear: () => void;
    focus: () => void;
    setContent: (content: string) => void;
    applyPageDocumentPatch: (patch: NotesTextEditorPageDocumentPatch) => NotesTextEditorSnapshot;
    insertAIBlock: () => void;
    insertTranscript: (title: string, users: User[], messages: Message[]) => void;
    pushContent: (content: string) => void;
    insertImage: (file: File) => void;
};
/** @deprecated Use F0NotesTextEditorProps */
export type NotesTextEditorProps = F0NotesTextEditorProps;
/** @deprecated Use F0NotesTextEditorHandle */
export type NotesTextEditorHandle = F0NotesTextEditorHandle;
/** @deprecated Use F0NotesTextEditorSkeletonProps */
export type NotesTextEditorSkeletonProps = F0NotesTextEditorSkeletonProps;
export declare const F0NotesTextEditorSkeleton: ({ withHeader, withTitle, withToolbar, }: F0NotesTextEditorSkeletonProps) => import("react").JSX.Element;
/**
 * @experimental This is an experimental component, use it at your own risk
 */
export declare const F0NotesTextEditor: import('react').ForwardRefExoticComponent<F0NotesTextEditorProps & import('react').RefAttributes<F0NotesTextEditorHandle>> & {
    Skeleton: ({ withHeader, withTitle, withToolbar, }: F0NotesTextEditorSkeletonProps) => import("react").JSX.Element;
};
/** @deprecated Use F0NotesTextEditor */
export declare const NotesTextEditor: import('react').ForwardRefExoticComponent<F0NotesTextEditorProps & import('react').RefAttributes<F0NotesTextEditorHandle>> & {
    Skeleton: ({ withHeader, withTitle, withToolbar, }: F0NotesTextEditorSkeletonProps) => import("react").JSX.Element;
};
/** @deprecated Use F0NotesTextEditorSkeleton */
export declare const NotesTextEditorSkeleton: ({ withHeader, withTitle, withToolbar, }: F0NotesTextEditorSkeletonProps) => import("react").JSX.Element;
