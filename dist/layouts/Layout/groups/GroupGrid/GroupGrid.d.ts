import { Optional } from '../../../../lib/typescript-utils/optional';
import { GroupGridWidget } from './typings';
export interface GroupGridProps<Widget extends GroupGridWidget, Deps extends Record<string, unknown> = Record<string, unknown>> {
    widgets: Optional<Widget, "x" | "y">[];
    editMode?: boolean;
    /**
     * Callback function that is called whenever the layout changes.
     * Receives an array of widgets with updated positions and properties.
     * This can be used to keep widgets in sync by using the returned data.
     */
    onChange?: (widgets: Widget[]) => void;
    WidgetWrapper?: (children: React.ReactNode, meta: Widget["meta"] | undefined, editMode: boolean) => React.ReactElement;
    /**
     * If the group is the main content of the page, it will try to take the full height of the page
     */
    main?: boolean;
    /**
     * Current values for dependencies. When this changes, widgets with `deps` arrays
     * will have their content updated automatically. Widgets reference dependencies
     * by key names (e.g., `deps: ['globalCounter']` maps to `deps: { globalCounter: 0 }`).
     */
    deps?: Deps;
}
export declare const GroupGrid: {
    <Widget extends GroupGridWidget, Deps extends Record<string, unknown> = Record<string, unknown>>({ widgets, editMode, onChange, WidgetWrapper, main, deps: dependencyValues, }: GroupGridProps<Widget, Deps>): import("react").JSX.Element;
    displayName: string;
};
