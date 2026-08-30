import { Dispatch, SetStateAction } from 'react';
import { QuestionType } from '../../../types';
import { HiddenActions } from '../types';
type ActionsMenuProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    questionId: string;
    questionType: QuestionType;
    canDeleteQuestion?: boolean;
    hiddenActions?: HiddenActions;
};
export declare function ActionsMenu({ open, setOpen, questionId, questionType, canDeleteQuestion, hiddenActions, }: ActionsMenuProps): import("react").JSX.Element | null;
export {};
