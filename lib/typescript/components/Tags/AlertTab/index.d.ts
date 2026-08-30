type Level = "info" | "warning" | "critical";
type NonEmpty<T extends string> = T extends "" ? never : T;
export type AlertTagProps<T extends string = string> = {
    text: NonEmpty<T>;
    level: Level;
};
export declare function AlertTag<T extends string>({ text, level, }: AlertTagProps<T>): import("node_modules/@types/react").JSX.Element;
export declare namespace AlertTag {
    var displayName: string;
}
export {};
//# sourceMappingURL=index.d.ts.map