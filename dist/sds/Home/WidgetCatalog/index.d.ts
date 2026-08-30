import { ReactNode } from 'react';
import { ModuleId } from '../../../components/avatars/F0AvatarModule/modules';
import { IconType } from '../../../components/F0Icon';
import { HomeWidgetItem, SlotRenderers, WidgetParams, WidgetParamsSchema } from '../slotRenderers';
import { WidgetContainerSide } from '../WidgetContainer';
/** One entry in the widget catalog dialog. */
export interface WidgetCatalogItem {
    id: string;
    title: string;
    icon: IconType;
    /**
     * The LIVE PREVIEW of the widget.
     *
     * GIVE IT THE WIDGET ITSELF — the same `HomeWidgetItem` the layout would be
     * handed — and the catalog draws it through `SlotWidget`, exactly as the
     * column will. That is the only form that cannot drift: a preview assembled
     * out of content components reproduces the frame, the seams and the spacing
     * by hand, and the first of those to fall out of step is silent.
     *
     * A `ReactNode` is still accepted, for a widget the app draws its own way
     * (`renderWidget`) or for something that isn't a widget at all.
     */
    preview: HomeWidgetItem | ReactNode;
    /**
     * What this widget is telling you — the widget's own `header.info`, shown under
     * the preview. Deciding whether to add a widget is exactly the moment that
     * sentence is worth reading, so the picker says it without being asked.
     *
     * Taken from the widget's own header when `preview` is a `HomeWidgetItem`, so
     * for those it is usually nothing to pass.
     */
    info?: string;
    /**
     * Which `groups` entry this widget belongs under. A widget whose group isn't
     * declared (or which has none) is listed after the groups, without a heading.
     */
    group?: string;
    /**
     * LIFTS IT to a "Recommended" section at the very top, and out of its group —
     * a widget offered twice reads as two widgets. Optional in every sense: with
     * nothing recommended there is no section.
     */
    recommended?: boolean;
    /**
     * WHICH COLUMNS this widget may be added to — the same two sides the layout
     * hands back from `onClickAddNewWidget`. The picker then shows it only when it
     * was opened for one of them (see `area`).
     *
     * OMIT IT for a widget that belongs in either, which is most of them: a
     * `list`-shaped card reads the same in a 396px rail and in the main column,
     * and saying so twice is how the two lists drift apart. Name the sides for the
     * widgets that genuinely cannot travel — a carousel of post cards needs the
     * main column's width, a 40px clock tile is built for the rail.
     *
     * A widget listed for NEITHER side (`[]`) is offered nowhere, which is a way to
     * retire an entry without deleting it.
     */
    areas?: WidgetContainerSide[];
    paramsSchema?: WidgetParamsSchema;
    params?: WidgetParams;
    addWithDefaults?: boolean;
}
/**
 * One DOMAIN in the picker: a heading the widgets under it belong to.
 *
 * The label is the app's own words because f0's `modules` registry maps ids to
 * ICONS ONLY — there are no module names to borrow, and a domain may well cover
 * two modules or none.
 */
export interface WidgetCatalogGroup {
    /** What an item's `group` points at. */
    id: string;
    label: string;
    /** The domain's module: its glyph heads the group. */
    module?: ModuleId;
}
export interface WidgetCatalogProps {
    isOpen: boolean;
    onClose: () => void;
    /** The widgets that can be added, in the order to list them. */
    widgets: WidgetCatalogItem[];
    /** Called with the chosen widget id when the CTA is pressed. */
    onAdd: (id: string, params?: WidgetParams) => void;
    /**
     * The DOMAINS the picker is organised into, in the order to show them. Omit it
     * and the list is flat — grouping is an offer, not a requirement.
     */
    groups?: WidgetCatalogGroup[];
    /**
     * WHICH COLUMN the picker was opened for — pass the side `onClickAddNewWidget`
     * handed you. It does two things: widgets that declare `areas` are filtered
     * down to the ones this column can hold, and the preview is capped to that
     * column's width by default (see {@link AREA_PREVIEW_WIDTH}).
     *
     * Omit it and the picker is what it has always been: every widget, previewed
     * at `previewWidth`. That is right for a Home with ONE place to put a widget;
     * a layout with two columns should say which one it is filling, or it will
     * offer the rail's clock for the main column and preview it at the wrong width.
     */
    area?: WidgetContainerSide;
    /**
     * Content width of the column this was opened from — the preview is capped
     * to it, so a rail-bound widget previews at rail width. Defaults to the
     * `area`'s own width, and to the rail's when there is no `area`.
     */
    previewWidth?: number;
    /**
     * Per-visualization renderers for the previews this dialog draws itself,
     * MERGED OVER the kit's `defaultSlotRenderers`. Pass the SAME map the layout
     * gets: a widget whose visualization is bespoke would otherwise preview as
     * "No renderer for slot …" and then render properly once added.
     */
    slotRenderers?: SlotRenderers;
    rebuildPreview?: (item: WidgetCatalogItem, params: WidgetParams) => WidgetCatalogItem["preview"];
    title?: string;
}
/**
 * WidgetCatalog — the "Add widget" dialog, mirroring the custom-home prototype:
 * a searchable picker on the left (icon + title rows, the selected row tinted),
 * a LIVE preview of the highlighted widget on the right at the width it will
 * really get, and the "Add widget" CTA in the dialog footer. FULLSCREEN off a
 * large display, and the two columns stack on a narrow screen
 * (`useWidgetDialogLayout`).
 *
 * Selection follows the filter: if the selected row is filtered out, the first
 * remaining row takes over, so the preview always shows something the CTA can
 * actually add.
 *
 * ONE CATALOG, TWO COLUMNS. Pass the `area` the picker was opened for and the
 * same `widgets` list serves both: entries that declare `areas` are shown only
 * where they fit, entries that declare none are shown in both, and the preview
 * takes that column's width. So a Home keeps one list — the widgets it offers —
 * rather than two that have to be kept in step.
 */
export declare function WidgetCatalog({ isOpen, onClose, widgets, onAdd, groups, area, previewWidth, slotRenderers, rebuildPreview, title, }: WidgetCatalogProps): import("react").JSX.Element;
