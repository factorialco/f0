type FileTypeInfo = {
    type: string;
    color: string;
};
type FileLike = {
    name: string;
    type?: string;
};
declare const getFileTypeInfo: (file: FileLike) => FileTypeInfo;
export { getFileTypeInfo };
export type { FileTypeInfo, FileLike };
//# sourceMappingURL=utils.d.ts.map