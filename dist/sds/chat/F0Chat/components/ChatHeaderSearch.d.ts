import { ReactNode } from 'react';
/**
 * Inline search bar that replaces the whole header in search mode: F0SearchInput
 * (icon + clearable), a VS Code-style "current/total" counter, prev/next arrows
 * and a close button. Navigation focuses each match in the transcript (scroll +
 * ring) via the shared jump infra. Enter/Shift+Enter/Escape are caught on the
 * wrapper since F0SearchInput doesn't forward key events.
 */
export declare const ChatHeaderSearch: () => ReactNode;
