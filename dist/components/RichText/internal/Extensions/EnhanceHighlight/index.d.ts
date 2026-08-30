import { Extension } from '@tiptap/react';
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        enhanceHighlight: {
            setEnhanceHighlight: (from: number, to: number, options?: {
                placeholder?: string;
            }) => ReturnType;
            clearEnhanceHighlight: () => ReturnType;
        };
    }
}
declare const EnhanceHighlight: Extension<any, any>;
export { EnhanceHighlight };
