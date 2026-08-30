import { TreeSelectorItem } from './TreeSelector';
/**
 * A project as the `horizontal-bar` variant takes it, and — optionally — the work
 * inside it.
 *
 * Selection is always a LEAF: a project with `subprojects` is booked through one
 * of them, a project without them is booked directly. That rule is what lets the
 * picker show the hierarchy with F0Select's own group headings rather than an
 * invented indent — a parent is a heading, not an option.
 */
export type ClockInProject = {
    id: string;
    name: string;
    /** The level below. When present, the parent itself is not selectable. */
    subprojects?: ClockInProject[];
};
export interface ProjectSelectorProps {
    projects: ClockInProject[];
    projectId?: string;
    onChangeProjectId?: (projectId: string) => void;
    /** The picker's label, also the empty trigger's placeholder. */
    label: string;
    /** Placeholder for the search box. Falls back to F0Select's own wording. */
    searchPlaceholder?: string;
    /** When false the picker offers a clear affordance. */
    required?: boolean;
    disabled?: boolean;
}
/** `subprojects` is this domain's word for the tree's `children`. */
export declare const toProjectTree: (projects: ClockInProject[]) => TreeSelectorItem[];
/**
 * The `horizontal-bar` variant's project control: a `TreeSelector` over
 * `projects` — no consumer-supplied node, so every Home renders the same picker.
 *
 * A suitcase marks the field as the project one at a glance, the way the location
 * picker carries the chosen location's own glyph. Fixed rather than a prop: the
 * control means one thing here.
 */
export declare function ProjectSelector({ projects, projectId, onChangeProjectId, label, searchPlaceholder, required, disabled, }: ProjectSelectorProps): import("react").JSX.Element;
