import { default as React } from 'react';
import { ComponentEntry } from './component-status';
export interface ComponentStabilityProps {
    /** Component name to look up (e.g. "Card", "F0Alert", "Components/Card"). */
    componentName: string;
    /** Optional dataset override; defaults to the build-time data. */
    components?: ComponentEntry[];
    /** Extra classes for the outer container (e.g. spacing). */
    className?: string;
}
/**
 * Renders a component's maturity status and Definition-of-Done checklist. All
 * text (badge label, summary, checklist labels and hints) comes from the
 * `component-status` data so Storybook and any consuming app stay identical.
 *
 * Renders nothing when the name doesn't resolve to a tracked component.
 */
export declare function ComponentStability({ componentName, components, className, }: ComponentStabilityProps): React.JSX.Element | null;
/**
 * The maturity status badge, sized to sit inline next to a component title. On
 * hover/focus it reveals the full maturity summary and Definition-of-Done
 * checklist in a tooltip — the same information the `ComponentStability` panel
 * shows, so collapsing the section loses no context.
 *
 * Renders nothing when the name doesn't resolve to a tracked component.
 */
export declare function ComponentMaturityTag({ componentName, components, className, }: ComponentStabilityProps): React.JSX.Element | null;
