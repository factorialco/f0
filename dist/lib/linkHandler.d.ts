import { AnchorHTMLAttributes, ForwardedRef, ReactNode } from 'react';
export type LinkContextValue = {
    currentPath?: string;
    component?: (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
};
export declare const LinkProvider: React.FC<{
    children: ReactNode;
} & LinkContextValue>;
export declare const useLinkContext: () => {
    currentPath?: string;
    component?: (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => JSX.Element;
    controller: () => {};
};
export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
};
/**
 * Whether an href LEAVES THIS APP — the only thing that should ever decide
 * `target="_blank"`. Everything else belongs in the current tab, where the app's
 * own router (`LinkProvider`'s `component`) can take the navigation.
 *
 * Four things are NOT external, and each of them used to be:
 *
 * - A bare `#fragment`. It does not leave the DOCUMENT, let alone the site.
 * - The SAME HOST under a different scheme. `http://app.example.com/x` while you
 *   sit on `https://app.example.com` is the app you are already in; comparing
 *   ORIGINS (scheme included) called it another site and tore the SPA down to
 *   open a new tab. Hosts are what "same domain" means.
 * - The same hostname on ANOTHER PORT. This compares `hostname`, not `host`, so
 *   the port is ignored entirely: an app served through a dev server or a proxy
 *   sits on one (`app.local.factorial.dev:8080`) while the links it renders are
 *   written without one (`https://app.local.factorial.dev/dashboard#…`), and
 *   comparing `host` sent every one of those to a new tab. A port is a way IN to
 *   a machine, not a different site — and where a port genuinely does separate
 *   two apps, the cost of being wrong here is one same-tab navigation, against a
 *   torn-down SPA the other way.
 * - A non-web scheme (`mailto:`, `tel:`, `sms:`). The OS handles those; a tab
 *   would open only to close itself again.
 *
 * Anything unparseable is treated as internal: a new tab is the more disruptive
 * guess, so it is not the one to make when in doubt.
 */
export declare const isExternalHref: (href?: string) => boolean;
export declare const useNavigation: () => {
    currentPath: string | undefined;
    isActive: (path: string | undefined, { exact }?: {
        exact?: boolean;
    }) => boolean;
};
export declare const Link: import('react').ForwardRefExoticComponent<AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
} & import('react').RefAttributes<HTMLAnchorElement>>;
