export declare const componentTypes: readonly ["layout", "info", "action", "form"];
export type ComponentTypes = (typeof componentTypes)[number];
export interface ComponentMetadata {
    name: string;
    type: ComponentTypes;
    internal?: boolean;
}
