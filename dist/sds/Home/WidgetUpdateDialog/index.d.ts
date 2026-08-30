import { ReactNode } from 'react';
import { FromWidgetParams, WidgetParams, WidgetParamsSchema } from '../slotRenderers';
export interface WidgetUpdateDialogProps {
    isOpen: boolean;
    onClose: () => void;
    /**
     * The widget's params schema — an F0Form schema, so these fields come with
     * their types, their datasources and their validation already declared.
     */
    schema: WidgetParamsSchema;
    /** The params the widget has now: what the form opens with. */
    params?: WidgetParams;
    /**
     * Draws the widget for the params the user is TRYING OUT — called with each
     * valid edit, before anything is saved.
     */
    renderPreview: (params: WidgetParams) => ReactNode;
    /**
     * What this widget is telling you, shown under the preview. A function of the
     * params — the widget's own `header.info` — so the explanation is rewritten as
     * you configure it, which is the fastest way to see what a param actually does.
     */
    info?: FromWidgetParams<string>;
    /** Called with the new params when the dialog is saved. */
    onSave: (params: WidgetParams) => void;
    /**
     * Content width of the column the widget lives in — the preview is capped to
     * it, so a rail widget previews at rail width (as in `WidgetCatalog`).
     */
    previewWidth?: number;
    /** Defaults to the provider's `t.widgets.editParamsTitle`. */
    title?: string;
    saveLabel?: string;
}
/**
 * WidgetUpdateDialog — "Edit params", the twin of `WidgetCatalog`: the same `xl`
 * dialog, the FIELDS on the left and a LIVE preview of the widget on the right,
 * at the width its column will really give it.
 *
 * The fields are not hand-built: they are the widget's own `paramsSchema` handed
 * to `F0Form`, so a `z.date()` gets a date picker, a `z.enum()` a select, a
 * datasource-backed field its searchable (single or multi) select, and a param
 * that isn't `.optional()` simply cannot be left empty — the dialog can't save
 * until it is filled.
 *
 * The preview follows every VALID edit (an invalid form keeps the last good
 * one), which is why the widget's `title` and `info` may be functions of its
 * params: you watch the card become what you are configuring.
 */
export declare function WidgetUpdateDialog({ isOpen, onClose, schema, params, renderPreview, info, onSave, previewWidth, title, saveLabel, }: WidgetUpdateDialogProps): import("react").JSX.Element;
