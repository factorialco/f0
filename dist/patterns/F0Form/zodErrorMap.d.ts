import { ZodErrorMap } from 'zod';
import { TranslationsType } from '../../lib/providers/i18n/i18n-provider';
/**
 * Creates a custom Zod error map that uses i18n translations for error messages.
 * This provides user-friendly, localized validation messages.
 */
export declare function createZodErrorMap(i18n: TranslationsType): ZodErrorMap;
