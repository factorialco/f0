import { DialogAnimation } from './types';
import * as DialogPrimitive from "@radix-ui/react-dialog";
export declare const DialogContent: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    wrapperClassName?: string;
    container?: HTMLElement | null;
    /**
     * Id of the element to portal into when no explicit `container` is given.
     * Resolved at mount; falls back to `#content`, then to `document.body`
     * (Radix default) when neither element exists.
     * @default "content"
     */
    defaultContainerId?: string;
    animation?: DialogAnimation;
    /**
     * Ref to the inner content box — the actually-sized element (`max-w-*`),
     * not the full-viewport `fixed inset-0` positioner the forwarded `ref`
     * lands on. Lets a parent measure the visible panel's width.
     */
    contentBoxRef?: (el: HTMLDivElement | null) => void;
} & import('react').RefAttributes<HTMLDivElement>>;
