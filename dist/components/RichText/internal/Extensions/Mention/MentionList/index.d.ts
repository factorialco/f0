import { default as React } from 'react';
import { MentionedUser, MentionItemComponentProps, MentionListRef } from '../types';
export interface MentionListProps {
    items: MentionedUser[];
    command: (item: MentionedUser) => void;
    component?: React.FC<MentionItemComponentProps>;
}
declare const MentionList: React.ForwardRefExoticComponent<MentionListProps & React.RefAttributes<MentionListRef>>;
export { MentionList };
