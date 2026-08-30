import { DialogAlikeInternalProps } from '../../common/types';
import { F0DrawerPosition, DrawerSize } from '../types';
export type DrawerInternalProps = Omit<DialogAlikeInternalProps, "size"> & {
    size?: DrawerSize;
    position?: F0DrawerPosition;
    /**
     * Called with the drawer content's width in px on mount and whenever it
     * changes, and with `0` when it closes. Use it to reserve space for the open
     * drawer — e.g. offsetting a graph so a node isn't centered behind it —
     * instead of hard-coding the width. The drawer slides in via a transform, not
     * a width animation, so the reported value is final from the first frame.
     */
    onWidthChange?: (width: number) => void;
};
