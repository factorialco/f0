type FileTypeInfo = {
    type: string;
    color: string;
};
type FileLike = {
    name: string;
    type?: string;
};
declare const getFileTypeInfo: (file: FileLike) => FileTypeInfo;

export { type FileLike, type FileTypeInfo, getFileTypeInfo };
