import type { Editor } from "./editorsFixtures"

export const editorsColumns = [
  {
    id: "name",
    label: "Name",
    render: (item: Editor) => ({
      type: "person" as const,
      value: {
        firstName: item.firstName,
        lastName: item.lastName,
        src: item.src,
      },
    }),
  },
]
