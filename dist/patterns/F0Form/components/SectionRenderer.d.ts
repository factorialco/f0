import { default as React } from 'react';
import { SectionDefinition } from '../types';
interface SectionRendererProps {
    section: SectionDefinition;
}
/**
 * SectionRenderer component that renders a form section with title,
 * description, and nested fields/groups.
 * Supports conditional rendering for the entire section.
 * Automatically groups contiguous switch fields in a bordered container.
 */
export declare function SectionRenderer({ section }: SectionRendererProps): React.JSX.Element | null;
export {};
