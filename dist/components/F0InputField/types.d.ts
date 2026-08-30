export declare const inputFieldStatus: readonly ["default", "warning", "info", "error"];
export type InputFieldStatusType = (typeof inputFieldStatus)[number];
export type InputFieldStatus = {
    type: Exclude<InputFieldStatusType, "error">;
    message?: string;
} | {
    type: "error";
    message?: string;
};
