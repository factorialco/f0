import { MimeType, UseFileUpload } from '../../../../../patterns/F0Form/fields/file/types';
import { BaseQuestionOnChangeParams } from '../../types';
import { BaseQuestionPropsForOtherQuestionComponents } from '../BaseQuestion';
export type FileQuestionOnChangeParams = BaseQuestionOnChangeParams & {
    type: "file";
    value?: string[] | null;
};
export type FileQuestionProps = BaseQuestionPropsForOtherQuestionComponents & {
    type: "file";
    value?: string[] | null;
    useUpload?: UseFileUpload;
    accept?: MimeType[];
    maxSizeMB?: number;
};
export declare const DEFAULT_FILE_ACCEPT: MimeType[];
export declare const FileQuestion: ({ value, useUpload: useUploadProp, accept, maxSizeMB, ...baseQuestionComponentProps }: FileQuestionProps) => import("react").JSX.Element;
