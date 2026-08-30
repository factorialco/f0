import { Locale } from 'date-fns';
import { ChatThread } from './useChatHistory';
import { DateGroup, ThreadGroup } from './types';
export declare function getDateGroup(dateString: string): DateGroup;
/**
 * Format a thread's timestamp for the history list next to its title.
 *
 * Output is humanised, locale-aware and matches the design:
 *   - "Today, 11:51"
 *   - "Yesterday, 7:59"
 *   - "Apr 23, 11:51"    (within the current year)
 *   - "Apr 6 2025, 11:51" (older — year differs from today)
 *
 * Uses a comma as the calendar/time separator instead of a natural-language
 * word ("at", "a las", "um", …). Different languages have different
 * connective grammars there — some don't use a preposition at all — so a
 * punctuation separator keeps the format consistent and safe to use in any
 * locale without per-language overrides.
 *
 * The month/day and time segments are produced by `date-fns` in the app's
 * locale (so "Apr" becomes "abr" in Spanish, time switches to 24h when the
 * locale uses it, etc.). The calendar-day label ("Today", "Yesterday") still
 * comes from the app's i18n so it matches whatever language the chat is
 * currently running in.
 */
export declare function formatThreadDate(dateString: string, labels: {
    today: string;
    yesterday: string;
}, locale: Locale): string;
export declare function groupThreadsByDate(threads: ChatThread[]): ThreadGroup[];
