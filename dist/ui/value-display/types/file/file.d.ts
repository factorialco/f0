import { ComponentProps } from 'react';
import { F0AvatarFile } from '../../../../components/avatars/F0AvatarFile';
export type FileCellValue = ComponentProps<typeof F0AvatarFile>["file"];
export declare const FileCell: (args: FileCellValue) => import("react").JSX.Element;
