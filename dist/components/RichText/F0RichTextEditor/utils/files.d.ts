import { filesConfig } from './types';
declare const handleAddFiles: (newFiles: File[], files: File[], filesConfig: filesConfig | undefined, setFiles: (files: File[]) => void) => void;
declare const handleRemoveFile: (fileIndex: number, files: File[], filesConfig: filesConfig | undefined, setFiles: (files: File[]) => void) => void;
declare const getAcceptFileTypeString: (filesConfig: filesConfig | undefined) => string;
export { getAcceptFileTypeString, handleAddFiles, handleRemoveFile };
