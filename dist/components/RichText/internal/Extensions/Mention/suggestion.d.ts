import { Editor } from '@tiptap/react';
import { MentionedUser } from './types';
export declare function createSuggestionConfig(mentionSuggestions: MentionedUser[], setMentionSuggestions: (suggestions: MentionedUser[]) => void, onMentionQueryStringChanged?: (query: string) => Promise<MentionedUser[]> | undefined, users?: MentionedUser[]): {
    char: string;
    minLength: number;
    items: ({ query }: {
        query: string;
    }) => Promise<MentionedUser[]>;
    render: () => {
        onStart: (props: {
            items: MentionedUser[];
            clientRect?: (() => DOMRect | null) | null;
            editor: Editor;
            range: {
                from: number;
                to: number;
            };
        }) => void;
        onUpdate: (props: {
            items: MentionedUser[];
            clientRect?: (() => DOMRect | null) | null;
            editor: Editor;
            range: {
                from: number;
                to: number;
            };
        }) => void;
        onKeyDown: (props: {
            event: KeyboardEvent;
        }) => boolean;
        onExit(): void;
    };
};
