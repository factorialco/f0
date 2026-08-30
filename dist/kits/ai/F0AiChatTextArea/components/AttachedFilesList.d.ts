import { AttachedFile } from '../types';
interface AttachedFilesListProps {
    attachedFiles: AttachedFile[];
    isUploading: boolean;
    onRemove: (id: string) => void;
    removeLabel: string;
}
export declare const AttachedFilesList: ({ attachedFiles, isUploading, onRemove, removeLabel, }: AttachedFilesListProps) => import("react").JSX.Element | null;
export {};
