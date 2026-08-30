import { Editor } from '@tiptap/react';
import { IconType } from '../../../../F0Icon';
import { I18nContextType } from '../../../../../lib/providers/i18n';
import { AIBlockConfig } from '../AIBlock';
import { ImageUploadConfig } from '../Image';
interface CommandItem {
    title: string;
    icon?: IconType;
    emoji?: string;
    command: (editor: Editor) => void;
}
interface CommandGroup {
    title: string;
    commands: CommandItem[];
}
interface GetGroupedCommandsProps {
    aiBlockConfig?: AIBlockConfig;
    translations: I18nContextType;
    imageUploadConfig?: ImageUploadConfig;
}
declare const getGroupedCommands: ({ aiBlockConfig, translations, imageUploadConfig, }: GetGroupedCommandsProps) => CommandGroup[];
export { getGroupedCommands };
export type { AIBlockConfig, CommandGroup, CommandItem };
