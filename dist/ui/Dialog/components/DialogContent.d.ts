import * as DialogPrimitive from "@radix-ui/react-dialog";
export declare const DialogContent: import('react').ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & import('react').RefAttributes<HTMLDivElement>, "ref"> & {
    wrapperClassName?: string;
    withTranslateAnimation?: boolean;
    /**
     * HOW IT ARRIVES.
     *
     * - `"scale"` (the default) — fades while zooming from 95% and sliding down,
     *   which reads as a card arriving over the page. Right when the dialog is
     *   a card on a page.
     * - `"fade"` — opacity only. For a dialog that is already the whole screen,
     *   where a zoom is the screen itself lurching and there is nothing behind
     *   it for the card to arrive over.
     *
     * A prop rather than classes layered on top: the zoom is applied under a
     * `data-[state]` selector, so an override has to win a specificity fight it
     * has no business being in. Not emitting it is the honest way to not have
     * it.
     */
    animation?: "scale" | "fade";
    /**
     * Extra classes for the dimming layer behind the dialog.
     *
     * Mostly for taking the dim AWAY — `bg-transparent` — when the dialog covers
     * the whole screen and there is nothing left to dim. The overlay still
     * mounts: Radix hangs the dismiss-on-outside-press and the scroll lock off
     * it, so removing it would take real behaviour with it.
     */
    overlayClassName?: string;
    container?: HTMLElement | null;
    /**
     * Id of the element to portal into when no explicit `container` is given.
     * Resolved at mount; falls back to `#content`, then to `document.body`
     * (Radix default) when neither element exists.
     * @default "content"
     */
    defaultContainerId?: string;
} & import('react').RefAttributes<HTMLDivElement>>;
