declare const FILE_TYPES: {
    readonly PDF: "pdf";
    readonly IMAGE: "image";
    readonly DOC: "doc";
    readonly EXCEL: "excel";
    readonly PPT: "ppt";
    readonly TXT: "txt";
    readonly VIDEO: "video";
    readonly AUDIO: "audio";
    readonly ARCHIVE: "archive";
    readonly CSV: "csv";
    readonly HTML: "html";
    readonly MARKDOWN: "markdown";
};
export type FileType = (typeof FILE_TYPES)[keyof typeof FILE_TYPES];
export { FILE_TYPES };
export declare const UPLOAD_INPUT_ID = "rich-text-editor-upload-button";
