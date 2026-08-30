export interface VolumeControlProps {
    volume: number;
    isMuted: boolean;
    onToggleMute: () => void;
    onVolumeChange: (value: number) => void;
    /**
     * The video has no audio (declared `silent`). Shows a disabled muted icon
     * instead of the volume control — a cue that there's nothing to hear.
     */
    silent?: boolean;
}
/** Picks the volume icon by range: muted (0), mid (1–50%), high (51–100%). */
export declare function volumeIcon(volume: number, muted: boolean): import('react').ForwardRefExoticComponent<Omit<import('react').SVGProps<SVGSVGElement>, "ref"> & import('react').RefAttributes<SVGSVGElement>>;
export declare function VolumeControl({ volume, isMuted, onToggleMute, onVolumeChange, silent, }: VolumeControlProps): import("react").JSX.Element;
