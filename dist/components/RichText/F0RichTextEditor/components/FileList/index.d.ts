import { filesConfig } from '../../utils/types';
interface FileListProps {
    filesConfig: filesConfig | undefined;
    files: File[];
    disabled: boolean;
    setFiles: React.Dispatch<React.SetStateAction<File[]>>;
    fileInputRef: React.RefObject<HTMLInputElement>;
}
declare const FileList: ({ filesConfig, files, setFiles, disabled, fileInputRef, }: FileListProps) => import("react").JSX.Element | null;
export { FileList };
