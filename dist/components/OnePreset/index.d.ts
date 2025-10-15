import * as react_jsx_runtime from 'react/jsx-runtime';

interface PresetProps {
    label: string;
    number?: number;
    onClick?: () => void;
    selected?: boolean;
}
declare const OnePreset: ({ label, number, onClick, selected, }: PresetProps) => react_jsx_runtime.JSX.Element;

export { OnePreset, type PresetProps };
