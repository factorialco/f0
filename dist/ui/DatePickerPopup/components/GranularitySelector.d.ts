import { GranularityDefinition, NavigationGranularityKey } from '../../../components/OneCalendar';
interface GranularitySelectorProps {
    granularities: NavigationGranularityKey[];
    value?: NavigationGranularityKey;
    onChange: (granularity: NavigationGranularityKey) => void;
    /** Definitions in play, so a data-driven granularity can name itself. */
    definitions?: Record<string, GranularityDefinition>;
}
export declare function GranularitySelector({ granularities, value, onChange, definitions, }: GranularitySelectorProps): import("react").JSX.Element;
export {};
