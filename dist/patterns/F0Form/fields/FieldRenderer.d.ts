import { F0Field } from './types';
interface FieldRendererProps {
    field: F0Field;
    /** Section ID when field is inside a section (for anchor links) */
    sectionId?: string;
}
/**
 * FieldRenderer component that renders a single form field based on its definition.
 * Handles conditional rendering via renderIf and integrates with react-hook-form.
 *
 * Note: Switch fields rendered individually (not in a group) use this renderer.
 * Contiguous switch fields are grouped by parent components (F0Form, SectionRenderer).
 *
 * IMPORTANT: The FormFieldPrimitive (Controller) must stay mounted even when the field
 * is hidden to preserve the field value. We achieve this by rendering the Controller
 * always but hiding the visual content when renderIf evaluates to false.
 */
export declare function FieldRenderer({ field, sectionId }: FieldRendererProps): import("react").JSX.Element;
export {};
