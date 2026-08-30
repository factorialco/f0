import { FlatFormItem, reconstructElements } from './utils';
type UseReorderHandlerParams = {
    flatItems: FlatFormItem[];
    onChange: (elements: ReturnType<typeof reconstructElements>) => void;
};
export declare function useReorderHandler({ flatItems, onChange, }: UseReorderHandlerParams): {
    handleFlatReorder: (reorderedItems: FlatFormItem[]) => void;
    handleConfirmLastQuestionMove: () => void;
    handleCancelLastQuestionMove: () => void;
    lastQuestionDialogOpen: boolean;
};
export {};
