/**
 * A single chat row rendered as a skeleton. Matches `SidebarChatItem`'s layout
 * and height (36px: a 24px avatar + the row's vertical padding) so the row
 * doesn't shift when the real data resolves. Used for the "cascade" case — a
 * known conversation whose name/avatar is still loading (`SidebarChat.loading`).
 */
export declare const SidebarChatItemSkeleton: ({ className, }: {
    className?: string;
}) => import("react").JSX.Element;
/**
 * Full-list skeleton shown while the conversations are still loading and the
 * groups aren't known yet. A few placeholder groups, each with a 32px title row
 * and some 36px chat rows.
 */
export declare const SidebarChatListSkeleton: ({ groups, rowsPerGroup, }: {
    /** Number of placeholder groups. @default 2 */
    groups?: number;
    /** Placeholder rows per group. @default 4 */
    rowsPerGroup?: number;
}) => import("react").JSX.Element;
