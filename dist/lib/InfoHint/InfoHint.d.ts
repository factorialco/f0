import { IconType } from '../../components/F0Icon';
/**
 * Structured help copy for a labelled thing — a table column, a dashboard
 * widget. `link` is for what the description implies but cannot do: opening the
 * catalog entry the copy came from.
 */
export type InfoHintContent = {
    title: string;
    description: string;
    link?: {
        label: string;
        onClick: () => void;
    };
    /**
     * Accessible name for the icon trigger. Falls back to `label` on the host
     * and then to a generic "More information", so the trigger is never named
     * after the thing it describes alone — a name identical to the heading
     * beside it says nothing about what the control does.
     */
    label?: string;
};
/**
 * The ⓘ affordance that reveals help copy for the thing it sits next to.
 *
 * A string gets a plain, non-interactive tooltip; an {@link InfoHintContent}
 * gets a hoverable card that can carry a link. Both forms are one component so
 * every surface offering column- or widget-level help looks and behaves the
 * same.
 *
 * @internal Shared chrome — not part of the package's public API.
 */
export declare function InfoHint({ info, icon, label, }: {
    info: string | InfoHintContent;
    /** @default InfoCircleLine */
    icon?: IconType;
    /** Accessible name for the trigger, when the content declares none. */
    label?: string;
}): import("react").JSX.Element;
