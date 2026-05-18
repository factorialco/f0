import type { Competency } from "@/fixtures/performance"

export const competenciesColumns = [
  {
    id: "name",
    label: "Name",
    sorting: "name",
    frozen: true,
    render: (item: Competency) => item.name,
  },
  {
    id: "category",
    label: "Category",
    sorting: "category",
    render: (item: Competency) => ({
      type: "status" as const,
      value: {
        label:
          item.category === "technical"
            ? "Technical"
            : item.category === "leadership"
              ? "Leadership"
              : item.category === "communication"
                ? "Communication"
                : "Execution",
        status:
          item.category === "technical"
            ? "info"
            : item.category === "leadership"
              ? "accent"
              : item.category === "communication"
                ? "positive"
                : "warning",
      },
    }),
  },
  {
    id: "description",
    label: "Description",
    render: (item: Competency) => item.description,
  },
]
