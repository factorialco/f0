import { IconType } from '../../../../components/F0Icon';
/**
 * Optional call-to-action rendered as a pill above the welcome phrase (e.g. a
 * "How to use One" shortcut). The host owns `onClick`; f0 owns the pill styling
 * so it stays consistent with the rest of the welcome screen.
 */
export type WelcomeScreenCta = {
    label: string;
    icon?: IconType;
    onClick: () => void;
};
export interface WelcomeScreenProps {
    /** One or more phrases. With more than one, they rotate in an infinite loop. */
    messages: string[];
    /**
     * Static line above the rotating phrase, same size but secondary color —
     * names the surface (e.g. "Analytics mode:") while the phrase keeps the
     * gradient typewriter treatment.
     */
    caption?: string;
    /** Smaller secondary line below the phrase (e.g. available data areas). */
    subtitle?: string;
    /** Optional call-to-action pill rendered above the caption/phrase. */
    cta?: WelcomeScreenCta;
    /**
     * Optional click handler on the phrase itself. When set, the phrase becomes
     * keyboard-activatable (Enter / Space) and gets a subtle hover hint. Used by
     * `F0AiChat` to wire the pong easter egg.
     */
    onClick?: () => void;
    /**
     * Fullscreen welcome layout: the phrase is pushed to the bottom of the top
     * half (instead of vertically centered) so it meets the composer — which
     * rises to the top of the bottom half — around the vertical center.
     */
    fullscreen?: boolean;
}
export declare const WelcomeScreen: ({ messages, caption, subtitle, cta, onClick, fullscreen, }: WelcomeScreenProps) => import("react").JSX.Element;
