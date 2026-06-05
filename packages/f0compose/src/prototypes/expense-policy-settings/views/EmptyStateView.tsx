import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import { Clock, Comment, List } from "@factorialco/f0-react/icons/app"

/**
 * Empty-state landing for the Expense Policy setup (front-of-funnel).
 *
 * Two entry routes, presented as side-by-side choice cards under a
 * single title ("Define how expenses work in Factorial"):
 *
 *  - **Use defaults** → drop straight into the editor (after the brief
 *    generating/loading state) seeded with sensible common-practice
 *    defaults. No interview. `onUseDefaults`.
 *  - **Describe your way** → the One-led clarifying-question interview
 *    we already built (fullscreen chat → questions → generated setup).
 *    `onDescribe`.
 *
 * No left-nav / sub-header render in this phase; the page is quiet
 * until the admin picks a route. Cards are full-clickable native
 * buttons; everything inside is an F0 primitive so typography + icon
 * tinting stay on-brand.
 */
export function EmptyStateView(props: {
  onUseDefaults: () => void
  onDescribe: () => void
}): React.ReactElement {
  const { onUseDefaults, onDescribe } = props

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: "70vh",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: 24,
      }}
    >
      <F0Heading
        as="h1"
        variant="heading-large"
        content="Define how expenses work in Factorial"
      />

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          maxWidth: 760,
        }}
      >
        <ChoiceCard
          icon={Comment}
          title="Describe your way"
          body="Tell me how expenses work at your company. I'll ask what I need and build it."
          meta="~10 min conversation"
          onClick={onDescribe}
          recommended
        />
        <ChoiceCard
          icon={List}
          title="Use defaults"
          body="Start with a setup based on common practice. Review and adjust anything."
          meta="~5 min review"
          onClick={onUseDefaults}
        />
      </div>
    </div>
  )
}

function ChoiceCard(props: {
  icon: React.ComponentProps<typeof F0Icon>["icon"]
  title: string
  body: string
  meta: string
  onClick: () => void
  recommended?: boolean
}): React.ReactElement {
  return (
    <button
      type="button"
      onClick={props.onClick}
      style={{
        position: "relative",
        flex: "1 1 340px",
        minWidth: 300,
        maxWidth: 360,
        textAlign: "left",
        cursor: "pointer",
        background: "#fff",
        border: "1px solid var(--f1-border-default, #e5e7eb)",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {props.recommended && (
        <span
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "var(--f1-background-info, #e0e7ff)",
            color: "var(--f1-foreground-info, #2563eb)",
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            padding: "5px 10px",
            borderRadius: 999,
            letterSpacing: 0.2,
          }}
        >
          Recommended
        </span>
      )}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--f1-background-secondary, #f3f4f6)",
        }}
        aria-hidden
      >
        <F0Icon icon={props.icon} color="default" size="md" />
      </div>
      <F0Heading as="h2" variant="heading" content={props.title} />
      <F0Text variant="body" color="muted" content={props.body} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 8,
          color: "#6b7280",
          fontSize: 13,
        }}
      >
        <F0Icon icon={Clock} color="secondary" size="sm" />
        <span>{props.meta}</span>
      </div>
    </button>
  )
}
