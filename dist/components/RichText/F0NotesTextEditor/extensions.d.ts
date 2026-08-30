import { AIBlockConfig, ImageUploadConfig } from '../internal';
import { I18nContextType } from '../../../lib/providers/i18n';
interface CreateNotesTextEditorExtensionsProps {
    placeholder: string;
    translations: I18nContextType;
    aiBlockConfig?: AIBlockConfig;
    imageUploadConfig?: ImageUploadConfig;
    enhanceEnabled?: boolean;
}
export declare const createNotesTextEditorExtensions: ({ placeholder, translations, aiBlockConfig, imageUploadConfig, enhanceEnabled, }: CreateNotesTextEditorExtensionsProps) => (import('@tiptap/core').Mark<import('@tiptap/extension-underline').UnderlineOptions, any> | import('@tiptap/core').Node<any, any> | import('@tiptap/core').Extension<any, any>)[];
export {};
