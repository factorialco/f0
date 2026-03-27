import type { TextColor } from "../../primitives/F0Text";
export type FileTypeInfo = {
    type: string;
    color: TextColor;
};
export type FileLike = {
    name: string;
    type?: string;
};
export declare function getFileTypeInfo(file: FileLike): FileTypeInfo;
//# sourceMappingURL=file-type.d.ts.map