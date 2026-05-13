import { trainingCategories, trainings } from "@/fixtures"

export function CategoriesTab() {
  const rows = trainingCategories.map((c) => ({
    ...c,
    count: trainings.filter((t) => t.categories.some((cc) => cc.id === c.id))
      .length,
  }))

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--f1-space-lg)",
        padding: "var(--f1-space-xl)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "var(--f1-space-md)",
        }}
      >
        <p
          style={{
            fontSize: "var(--f1-font-size-sm)",
            color: "var(--f1-color-foreground-muted)",
            maxWidth: 540,
          }}
        >
          Categories group trainings by topic. They drive catalog filters,
          insights breakdowns and Fundae reporting.
        </p>
        <button
          type="button"
          style={{
            padding: "8px 14px",
            borderRadius: "var(--f1-radius-md)",
            border: "none",
            background: "var(--f1-background-bold)",
            color: "var(--f1-foreground-bold)",
            fontSize: "var(--f1-font-size-sm)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          New category
        </button>
      </div>

      <div
        style={{
          border: "1px solid var(--f1-border-secondary)",
          borderRadius: "var(--f1-radius-md)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 120px 120px",
            padding: "var(--f1-space-sm) var(--f1-space-lg)",
            background: "var(--f1-background-subtle)",
            fontSize: "var(--f1-font-size-xs)",
            fontWeight: 600,
            color: "var(--f1-color-foreground-muted)",
            textTransform: "uppercase",
            letterSpacing: 0.4,
          }}
        >
          <span>Name</span>
          <span>Trainings</span>
          <span style={{ textAlign: "right" }}>Actions</span>
        </div>
        {rows.map((c, idx) => (
          <div
            key={c.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 120px 120px",
              alignItems: "center",
              padding: "var(--f1-space-md) var(--f1-space-lg)",
              borderTop:
                idx === 0 ? "none" : "1px solid var(--f1-border-secondary)",
              background: "var(--f1-background-primary)",
              fontSize: "var(--f1-font-size-sm)",
            }}
          >
            <span style={{ fontWeight: 500 }}>{c.name}</span>
            <span>{c.count}</span>
            <span
              style={{
                textAlign: "right",
                fontSize: "var(--f1-font-size-xs)",
                color: "var(--f1-color-foreground-muted)",
              }}
            >
              Edit · Delete
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
