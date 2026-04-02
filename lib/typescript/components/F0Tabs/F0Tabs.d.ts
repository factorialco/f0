import React from "react";
import type { F0TabsProps } from "./F0Tabs.types";
/**
 * F0Tabs — Animated horizontal tab navigation strip.
 *
 * Mirrors the web `Tabs` component behaviour:
 * - **Primary** (`secondary=false`): animated pill background (`bg-f0-background-tertiary`)
 *   + sliding underline pinned to the bottom of the container.
 * - **Secondary** (`secondary=true`): animated pill background only
 *   (`bg-f0-background-inverse-secondary`), no underline.
 *
 * Both controlled (`activeTabId` + `setActiveTabId`) and uncontrolled modes are supported.
 *
 * @example
 * // Primary
 * <F0Tabs tabs={tabs} activeTabId={activeTab} setActiveTabId={setActiveTab} />
 *
 * // Secondary
 * <F0Tabs tabs={tabs} secondary activeTabId={activeTab} setActiveTabId={setActiveTab} />
 */
export declare const F0Tabs: React.NamedExoticComponent<F0TabsProps>;
//# sourceMappingURL=F0Tabs.d.ts.map