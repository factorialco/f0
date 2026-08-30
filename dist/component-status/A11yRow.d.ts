import { default as React } from 'react';
import { A11yTier } from './component-status';
interface Criterion {
    ruleId: string;
    description: string;
    sc: string | null;
    level: string;
    version: string;
    nodes: number;
}
export type A11yAuditState = {
    status: "idle";
} | {
    status: "running";
} | {
    status: "unavailable";
} | {
    status: "done";
    criteria: Criterion[];
};
/**
 * Runs the live axe audit and exposes its state plus an idempotent `start()`.
 * Call `start()` from a user action (the panel's disclosure) or on mount (the
 * tooltip); repeat calls are no-ops, so the expensive axe run happens at most
 * once per mount. Outside Storybook docs the state resolves to `unavailable`.
 */
export declare function useA11yAudit(): {
    state: A11yAuditState;
    start: () => void;
};
/** Color treatment per surface: the light docs panel vs. the dark tooltip. */
declare const TONE: {
    readonly panel: {
        readonly strong: "text-f1-foreground";
        readonly muted: "text-f1-foreground-secondary";
    };
    readonly tooltip: {
        readonly strong: "";
        readonly muted: "opacity-75";
    };
};
/**
 * The result of a live axe run: a spinner while it works, the failing WCAG
 * criteria when done, or a fallback line when it can't run outside the docs
 * page. Presentational — the audit itself lives in `useA11yAudit`.
 */
export declare function A11yAuditResults({ state, tone, }: {
    state: A11yAuditState;
    tone?: keyof typeof TONE;
}): React.JSX.Element;
/**
 * The Accessibility checklist row for the docs panel. The live axe run is
 * behind a "Check the rendered stories" disclosure so the docs page stays
 * cheap until the reader expands it.
 */
export declare function A11yRow({ detail, tier }: {
    detail: string;
    tier: A11yTier;
}): React.JSX.Element;
/**
 * The Accessibility checklist row for the maturity-tag tooltip. A tooltip is
 * transient and can't hold a disclosure, so the live axe run fires
 * automatically on open (mount) and its results render inline.
 */
export declare function A11yTooltipRow({ detail, tier, }: {
    detail: string;
    tier: A11yTier;
}): React.JSX.Element;
export {};
