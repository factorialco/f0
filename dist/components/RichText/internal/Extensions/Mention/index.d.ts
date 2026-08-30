import { MentionedUser, MentionsConfig } from './types';
export declare const createMentionExtensions: (mentionSuggestions: MentionedUser[], setMentionSuggestions: (suggestions: MentionedUser[]) => void, mentionsConfig?: MentionsConfig) => import('@tiptap/core').Node<import('@tiptap/extension-mention').MentionOptions<any, import('@tiptap/extension-mention').MentionNodeAttrs>, any>[];
export { MentionItem } from './MentionItem';
export { MentionList } from './MentionList';
export { MentionPopover } from './MentionPopover';
export * from './types';
