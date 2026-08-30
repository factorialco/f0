import { Locale } from 'date-fns';
/**
 * The date-fns locale for the locale configured on `L10nProvider`, preferring
 * the regional variant so `pt-BR` does not degrade to `pt`. English and
 * anything date-fns does not ship resolve to `en-US`, its own default.
 *
 * Components must pass this to every date-fns call rather than relying on
 * `setDefaultOptions`: the library bundles its own date-fns instance, so a host
 * app's global defaults never reach it.
 */
export declare function useDateFnsLocale(): Locale;
