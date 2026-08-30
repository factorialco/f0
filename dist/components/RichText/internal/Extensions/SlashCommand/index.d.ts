import { Editor, Extension } from '@tiptap/react';
import { I18nContextType } from '../../../../../lib/providers/i18n';
import { ImageUploadConfig } from '../Image';
import { AIBlockConfig, CommandItem } from './AvailableCommands';
interface CreateSlashCommandExtensionProps {
    aiBlockConfig?: AIBlockConfig;
    translations: I18nContextType;
    imageUploadConfig?: ImageUploadConfig;
}
declare const createSlashCommandExtension: ({ aiBlockConfig, translations, imageUploadConfig, }: CreateSlashCommandExtensionProps) => Extension<{
    suggestion: {
        char: string;
        allowSpaces: boolean;
        allowedPrefixes: string[];
        startOfLine: boolean;
        command: ({ editor, range, props, }: {
            editor: Editor;
            range: {
                from: number;
                to: number;
            };
            props: CommandItem;
        }) => void;
    };
}, any>;
export { createSlashCommandExtension };
