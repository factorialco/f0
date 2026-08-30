import { AiChatFileAttachmentConfig } from '../F0AiChat/types';
import { AttachedFile } from './types';
export declare function useFileAttachments(fileAttachments: AiChatFileAttachmentConfig | undefined): {
    attachedFiles: AttachedFile[];
    fileInputRef: import('react').RefObject<HTMLInputElement>;
    onUploadFiles: ((files: File[]) => Promise<import('../F0AiChat').UploadedFile[]>) | undefined;
    acceptValue: string | undefined;
    isAtMaxFiles: boolean;
    maxFiles: number | undefined;
    processFiles: (rawFiles: File[]) => Promise<void>;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
    handleRemoveFile: (id: string) => void;
    clearFiles: () => void;
    transientError: string | null;
    showTransientError: (message: string) => void;
};
