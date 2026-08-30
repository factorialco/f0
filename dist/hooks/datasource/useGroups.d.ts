import { RecordType } from './types/records.typings';
import { GroupRecord } from './useData';
export declare const useGroups: <R extends RecordType>(groups: GroupRecord<R>[], defaultOpenGroups?: boolean | GroupRecord<R>["key"][]) => {
    openGroups: Record<string, boolean>;
    setGroupOpen: (key: string, open: boolean) => void;
};
type AnimationVariantsOptions = {
    delay?: number;
    duration?: number;
    maxDelay?: number;
};
export declare const getAnimationVariants: (options?: AnimationVariantsOptions) => {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: (i: number) => {
        opacity: number;
        y: number;
        transition: {
            delay: number;
            duration: number;
            type: string;
            stiffness: number;
            damping: number;
        };
    };
};
export {};
