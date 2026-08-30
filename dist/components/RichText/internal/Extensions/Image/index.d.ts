import { Editor } from '@tiptap/core';
export type ImageUploadErrorType = "file-too-large" | "invalid-type" | "upload-failed";
export interface ImageUploadConfig {
    onUpload: (file: File) => Promise<{
        url: string;
        signedId?: string;
    }>;
    maxFileSize?: number;
    onError?: (errorType: ImageUploadErrorType) => void;
}
export declare const DEFAULT_ACCEPTED_TYPES: string[];
export declare const ImageExtension: import('@tiptap/core').Node<import('@tiptap/extension-image').ImageOptions, any>;
export declare const createFileHandlerExtension: (uploadConfig: ImageUploadConfig) => import('@tiptap/core').Extension<Omit<import('@tiptap/extension-file-handler').FileHandlePluginOptions, "key" | "editor">, any>;
export declare const insertImageFromFile: (editor: Editor, file: File, uploadConfig: ImageUploadConfig) => void;
