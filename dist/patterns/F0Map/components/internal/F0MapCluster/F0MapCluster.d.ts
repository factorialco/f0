import { WithDataTestIdProps } from '../../../../../lib/data-testid';
import { F0MapMarkerVariantProps } from '../../F0MapMarker';
export interface F0MapClusterProps extends WithDataTestIdProps {
    /** Total number of points in the cluster. */
    count: number;
    /**
     * The members' marker configs. Up to four heads are shown; from five
     * members on, three heads plus a `+N` counter.
     */
    members: F0MapMarkerVariantProps[];
    onClick?: () => void;
    ariaLabel?: string;
    /** @private */
    className?: string;
}
export declare const F0MapCluster: import('react').ForwardRefExoticComponent<F0MapClusterProps & import('react').RefAttributes<HTMLDivElement>>;
