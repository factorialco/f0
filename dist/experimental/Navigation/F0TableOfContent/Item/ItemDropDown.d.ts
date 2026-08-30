import { TOCItemAction } from '../types';
interface ItemDropDownProps {
    otherActions: TOCItemAction[];
    open: boolean;
    setOpen: (open: boolean) => void;
    disabled?: boolean;
}
export declare function ItemDropDown({ otherActions, open, setOpen, disabled, }: ItemDropDownProps): import("react").JSX.Element;
export {};
