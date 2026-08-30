import { ComponentProps, ReactNode } from 'react';
/**
 * `<img>` that fades in once it decodes, so media never pops into the
 * transcript. Cached images render opaque immediately (`complete` is checked
 * synchronously when the ref attaches) — only real network loads fade.
 * Opacity only: the caller must reserve the box (width/height attrs or fixed
 * classes), so no re-measure is introduced.
 */
export declare const FadeInImage: ({ className, onLoad, onLoadedChange, eager, ...props }: ComponentProps<"img"> & {
    /** Fires for BOTH paths — a real load and the synchronous cache hit — so a
     * caller's placeholder can't get stranded behind an already-decoded image. */
    onLoadedChange?: (loaded: boolean) => void;
    /**
     * Start fetching as soon as this mounts.
     *
     * Native lazy loading defers the request to the browser's own scroll
     * heuristic, NOT to mount — so a transcript row rendered a screenful ahead by
     * the virtualizer still sits there without a request, and the photo only
     * starts arriving once it is basically on screen. That is why media always
     * had time to show a placeholder. Transcript media opts out; small decorative
     * thumbnails (reply quotes, edit chips) keep the default.
     */
    eager?: boolean;
}) => ReactNode;
