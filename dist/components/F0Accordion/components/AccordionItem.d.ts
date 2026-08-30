import { F0AccordionItem } from '../types';
interface AccordionItemProps {
    item: F0AccordionItem;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
export declare const AccordionItem: ({ item, open, onOpenChange, }: AccordionItemProps) => import("react").JSX.Element;
export {};
