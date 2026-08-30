import { DatePickerValue, DatePreset } from '../types';
export type PresetListProps = {
    presets: DatePreset[];
    date: DatePickerValue | undefined;
    onSelect?: (preset: string) => void;
};
export declare const PresetList: ({ presets, ...props }: PresetListProps) => import("react").JSX.Element;
