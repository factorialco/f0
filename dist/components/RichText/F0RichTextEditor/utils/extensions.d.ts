import { MentionedUser, MentionsConfig } from '../../internal';
interface ExtensionsConfigurationProps {
    mentionsConfig?: MentionsConfig;
    mentionSuggestions: MentionedUser[];
    setMentionSuggestions: (suggestions: MentionedUser[]) => void;
    placeholder: string;
    maxCharacters?: number;
    plainHtmlMode?: boolean;
}
declare const ExtensionsConfiguration: ({ mentionsConfig, mentionSuggestions, setMentionSuggestions, placeholder, maxCharacters, plainHtmlMode, }: ExtensionsConfigurationProps) => (import('@tiptap/core').Mark<import('@tiptap/extension-underline').UnderlineOptions, any> | import('@tiptap/core').Node<import('@tiptap/extension-task-list').TaskListOptions, any> | import('@tiptap/core').Node<import('@tiptap/extension-mention').MentionOptions<any, import('@tiptap/extension-mention').MentionNodeAttrs>, any> | import('@tiptap/core').Node<import('@tiptap/extension-task-item').TaskItemOptions, any> | import('@tiptap/core').Extension<any, any>)[];
export { ExtensionsConfiguration };
